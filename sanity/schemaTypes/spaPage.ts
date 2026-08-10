import { defineField, defineType } from "sanity";

export const spaPage = defineType({
  name: "spaPage",
  title: "Trang Spa",
  type: "document",
  fields: [
    defineField({
      name: "services",
      title: "Phương pháp chữa lành",
      type: "array",
      of: [{ type: "spaService" }],
    }),
    defineField({
      name: "priceList",
      title: "Bảng giá liệu trình",
      type: "array",
      of: [{ type: "priceListCategory" }],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Trang Spa" }),
  },
});
