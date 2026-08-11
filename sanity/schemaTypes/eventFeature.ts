import { defineField, defineType } from "sanity";

export const eventFeature = defineType({
  name: "eventFeature",
  title: "Đặc điểm sự kiện",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Tiêu đề",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "desc",
      title: "Mô tả",
      type: "text",
      rows: 2,
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "desc" },
  },
});
