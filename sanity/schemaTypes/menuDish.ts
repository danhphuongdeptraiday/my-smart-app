import { defineField, defineType } from "sanity";

export const menuDish = defineType({
  name: "menuDish",
  title: "Món",
  type: "object",
  fields: [
    defineField({
      name: "nameVi",
      title: "Tên món (Tiếng Việt)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "nameEn",
      title: "Tên món (Tiếng Anh)",
      type: "string",
    }),
    defineField({
      name: "note",
      title: "Ghi chú",
      type: "string",
      description: 'Ví dụ: "nóng/lạnh"',
    }),
    defineField({
      name: "priceTiers",
      title: "Các mức giá (nếu có nhiều mức, ví dụ lẩu theo số người)",
      description: "Bỏ trống nếu món này không hiển thị giá riêng.",
      type: "array",
      of: [{ type: "menuPriceTier" }],
    }),
  ],
  preview: {
    select: { title: "nameVi", subtitle: "nameEn" },
  },
});
