import { defineField, defineType } from "sanity";

export const priceListItem = defineType({
  name: "priceListItem",
  title: "Mục trong bảng giá",
  type: "object",
  fields: [
    defineField({
      name: "name",
      title: "Tên liệu trình",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "desc",
      title: "Mô tả",
      type: "string",
    }),
    defineField({
      name: "price",
      title: "Giá hiển thị",
      type: "string",
      description: 'Ví dụ: "350,000 VND"',
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "price" },
  },
});
