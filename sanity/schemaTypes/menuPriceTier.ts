import { defineField, defineType } from "sanity";

export const menuPriceTier = defineType({
  name: "menuPriceTier",
  title: "Mức giá theo số người",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Nhãn",
      type: "string",
      description: 'Ví dụ: "2 - 3 Người (For 2-3 Pax)"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      title: "Giá",
      type: "string",
      description: 'Ví dụ: "800.000 VNĐ"',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { title: "label", subtitle: "price" },
  },
});
