import { defineField, defineType } from "sanity";

export const menuCategory = defineType({
  name: "menuCategory",
  title: "Loại thực đơn (tab)",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Tên loại",
      type: "string",
      description: 'Ví dụ: "Đồ uống", "Món ăn địa phương", "Lẩu - Set"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subcategories",
      title: "Các nhóm món",
      type: "array",
      of: [{ type: "menuSubcategory" }],
    }),
  ],
  preview: {
    select: { title: "title" },
  },
});
