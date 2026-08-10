import { defineField, defineType } from "sanity";

export const priceListCategory = defineType({
  name: "priceListCategory",
  title: "Nhóm bảng giá",
  type: "object",
  fields: [
    defineField({
      name: "category",
      title: "Tên nhóm",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "items",
      title: "Các liệu trình",
      type: "array",
      of: [{ type: "priceListItem" }],
    }),
  ],
  preview: {
    select: { title: "category" },
  },
});
