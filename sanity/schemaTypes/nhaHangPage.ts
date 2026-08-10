import { defineField, defineType } from "sanity";

export const nhaHangPage = defineType({
  name: "nhaHangPage",
  title: "Trang Nhà hàng",
  type: "document",
  fields: [
    defineField({
      name: "menuItems",
      title: "Thực đơn theo mùa",
      type: "array",
      of: [{ type: "menuItem" }],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Trang Nhà hàng" }),
  },
});
