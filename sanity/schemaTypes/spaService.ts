import { defineField, defineType } from "sanity";

export const spaService = defineType({
  name: "spaService",
  title: "Dịch vụ Spa",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Tên dịch vụ",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      title: "Giá hiển thị",
      type: "string",
      description: 'Ví dụ: "$45 / 60 phút"',
    }),
    defineField({
      name: "desc",
      title: "Mô tả",
      type: "text",
    }),
    defineField({
      name: "tags",
      title: "Thẻ",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "image",
      title: "Ảnh",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { title: "title", media: "image" },
  },
});
