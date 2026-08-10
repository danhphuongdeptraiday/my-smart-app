import { defineField, defineType } from "sanity";

export const room = defineType({
  name: "room",
  title: "Phòng",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Tên phòng",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "desc",
      title: "Mô tả",
      type: "text",
    }),
    defineField({
      name: "price",
      title: "Giá hiển thị",
      type: "string",
      description: 'Ví dụ: "Đặt ngay — từ $120"',
    }),
    defineField({
      name: "size",
      title: "Kích thước ô hiển thị",
      type: "string",
      options: {
        list: [
          { title: "Lớn", value: "large" },
          { title: "Nhỏ", value: "small" },
        ],
        layout: "radio",
      },
      initialValue: "small",
    }),
    defineField({
      name: "accent",
      title: "Màu nhấn",
      type: "string",
      options: {
        list: [
          { title: "Primary", value: "primary" },
          { title: "Secondary", value: "secondary" },
          { title: "Tertiary", value: "tertiary" },
          { title: "Outline", value: "outline" },
        ],
      },
      initialValue: "primary",
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
