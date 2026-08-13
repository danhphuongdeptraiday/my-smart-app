import { defineField, defineType } from "sanity";

export const customerReview = defineType({
  name: "customerReview",
  title: "Đánh giá khách hàng",
  type: "object",
  fields: [
    defineField({
      name: "quote",
      title: "Nội dung đánh giá",
      type: "text",
      rows: 4,
      description: "Copy nguyên văn từ Google Reviews.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "author",
      title: "Tên khách hàng",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "rating",
      title: "Số sao (1-5)",
      type: "number",
      validation: (Rule) => Rule.min(1).max(5),
    }),
    defineField({
      name: "googleReviewUrl",
      title: "Link Google Review",
      type: "url",
      description: "Dán link dẫn thẳng tới đánh giá gốc trên Google Maps.",
      validation: (Rule) => Rule.uri({ scheme: ["http", "https"] }),
    }),
  ],
  preview: {
    select: { title: "author", subtitle: "quote" },
  },
});
