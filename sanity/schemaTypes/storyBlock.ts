import { defineField, defineType } from "sanity";

export const storyBlock = defineType({
  name: "storyBlock",
  title: "Đoạn câu chuyện",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Nhãn chủ đề",
      type: "string",
      description: 'Ví dụ: "Không gian & Hương thơm"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "body",
      title: "Nội dung",
      type: "text",
      rows: 6,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Ảnh (tuỳ chọn)",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: { title: "label", media: "image" },
  },
});
