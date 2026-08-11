import { defineField, defineType } from "sanity";

export const menuSubcategory = defineType({
  name: "menuSubcategory",
  title: "Nhóm món",
  type: "object",
  fields: [
    defineField({
      name: "titleVi",
      title: "Tên nhóm (Tiếng Việt)",
      type: "string",
      description: 'Ví dụ: "Cà phê Việt Nam"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "titleEn",
      title: "Tên nhóm (Tiếng Anh)",
      type: "string",
      description: 'Ví dụ: "Vietnamese Coffee"',
    }),
    defineField({
      name: "dishes",
      title: "Danh sách món",
      type: "array",
      of: [{ type: "menuDish" }],
    }),
  ],
  preview: {
    select: { title: "titleVi", subtitle: "titleEn" },
  },
});
