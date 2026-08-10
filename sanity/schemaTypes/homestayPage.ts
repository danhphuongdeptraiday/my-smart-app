import { defineField, defineType } from "sanity";

export const homestayPage = defineType({
  name: "homestayPage",
  title: "Trang Homestay",
  type: "document",
  fields: [
    defineField({
      name: "rooms",
      title: "Danh sách phòng",
      type: "array",
      of: [{ type: "room" }],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Trang Homestay" }),
  },
});
