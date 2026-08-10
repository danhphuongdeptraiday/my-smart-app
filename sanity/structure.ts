import type { StructureResolver } from "sanity/structure";

const SINGLETONS = [
  { id: "homestayPage", title: "Trang Homestay" },
  { id: "nhaHangPage", title: "Trang Nhà hàng" },
  { id: "spaPage", title: "Trang Spa" },
];

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Nội dung")
    .items([
      ...SINGLETONS.map(({ id, title }) =>
        S.listItem()
          .id(id)
          .title(title)
          .child(S.document().schemaType(id).documentId(id))
      ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => !SINGLETONS.some((s) => s.id === item.getId())
      ),
    ]);
