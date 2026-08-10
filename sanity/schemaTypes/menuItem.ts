import { defineField, defineType } from "sanity";

export const menuItem = defineType({
  name: "menuItem",
  title: "Món trong thực đơn",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Nhãn",
      type: "string",
      description: 'Ví dụ: "01 — Khai vị"',
      validation: (Rule) => Rule.required(),
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
    select: { title: "label", media: "image" },
  },
});
