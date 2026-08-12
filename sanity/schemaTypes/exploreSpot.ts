import { defineField, defineType } from "sanity";

export const exploreSpot = defineType({
  name: "exploreSpot",
  title: "Toạ độ khám phá",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Tên địa điểm",
      type: "string",
      validation: (Rule) => Rule.required(),
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
    }),
  ],
  preview: {
    select: { title: "title", media: "image" },
  },
});
