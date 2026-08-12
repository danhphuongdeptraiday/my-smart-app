import { defineField, defineType } from "sanity";

export const staffMember = defineType({
  name: "staffMember",
  title: "Nhân sự",
  type: "object",
  fields: [
    defineField({
      name: "name",
      title: "Họ tên",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Vai trò",
      type: "string",
    }),
    defineField({
      name: "bio",
      title: "Giới thiệu ngắn",
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
    select: { title: "name", subtitle: "role", media: "image" },
  },
});
