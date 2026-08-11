import { defineField, defineType } from "sanity";

export const season = defineType({
  name: "season",
  title: "Mùa",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Tên mùa",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "period",
      title: "Thời gian",
      type: "string",
      description: 'Ví dụ: "Tháng 11 – Tháng 2"',
    }),
    defineField({
      name: "desc",
      title: "Mô tả",
      type: "text",
      rows: 3,
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
    select: { title: "title", subtitle: "period", media: "image" },
  },
});
