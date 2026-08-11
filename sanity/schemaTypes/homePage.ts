import { defineField, defineType } from "sanity";

export const homePage = defineType({
  name: "homePage",
  title: "Trang chủ",
  type: "document",
  groups: [
    { name: "hero", title: "Hero", default: true },
    { name: "philosophy", title: "Triết lý" },
    { name: "services", title: "Dịch vụ" },
    { name: "seasons", title: "Các Mùa" },
  ],
  fields: [
    // Hero
    defineField({
      name: "heroImages",
      title: "Ảnh Hero (Carousel)",
      description:
        "Các ảnh luân phiên hiển thị ở đầu trang chủ. Khuyến nghị 4 ảnh, tỉ lệ ngang.",
      type: "array",
      group: "hero",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Mô tả ảnh (alt text)",
              type: "string",
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: "heroTitle",
      title: "Tiêu đề Hero",
      type: "string",
      group: "hero",
      initialValue: "Đắm mình trong màn sương",
    }),
    defineField({
      name: "heroSubtitle",
      title: "Mô tả Hero",
      type: "text",
      rows: 3,
      group: "hero",
      initialValue:
        "Lá Dao là một tổ hợp du lịch bao gồm Spa, Nhà hàng và Homestay tại Tả Van - Sa Pa",
    }),
    defineField({
      name: "heroPrimaryButtonLabel",
      title: "Nút chính (label)",
      type: "string",
      group: "hero",
      initialValue: "Đặt phòng ngay",
    }),
    defineField({
      name: "heroSecondaryButtonLabel",
      title: "Nút phụ (label)",
      type: "string",
      group: "hero",
      initialValue: "Khám phá Sapa",
    }),

    // Philosophy
    defineField({
      name: "philosophyEyebrow",
      title: "Nhãn nhỏ",
      type: "string",
      group: "philosophy",
      initialValue: "Triết lý của chúng tôi",
    }),
    defineField({
      name: "philosophyTitle",
      title: "Tiêu đề",
      type: "string",
      group: "philosophy",
      initialValue: "Di sản Sống của sự Chữa lành",
    }),
    defineField({
      name: "philosophyBody",
      title: "Nội dung",
      type: "text",
      rows: 5,
      group: "philosophy",
      initialValue:
        "Lá Dao không chỉ là một điểm đến; đó là cầu nối giữa trí tuệ cổ xưa của người Dao Đỏ và sự sang trọng hiện đại. Chúng tôi tạo ra một không gian nơi hương thơm của thảo mộc và vẻ hùng vĩ của dãy Hoàng Liên Sơn hội tụ để xoa dịu tâm hồn bạn.",
    }),
    defineField({
      name: "philosophyQuote",
      title: "Trích dẫn",
      type: "text",
      rows: 2,
      group: "philosophy",
      initialValue: "Giữa làn sương núi, chúng tôi tìm thấy sự tĩnh tại của tâm hồn.",
    }),
    defineField({
      name: "philosophyImage",
      title: "Ảnh",
      type: "image",
      options: { hotspot: true },
      group: "philosophy",
    }),

    // Services bento
    defineField({
      name: "servicesSectionTitle",
      title: "Tiêu đề mục Dịch vụ",
      type: "string",
      group: "services",
      initialValue: "Các Dịch vụ tại Thánh đường",
    }),
    defineField({
      name: "serviceRestaurant",
      title: "Thẻ dịch vụ: Nhà hàng",
      type: "object",
      group: "services",
      fields: [
        defineField({ name: "image", title: "Ảnh", type: "image", options: { hotspot: true } }),
        defineField({
          name: "eyebrow",
          title: "Nhãn nhỏ",
          type: "string",
          initialValue: "Ẩm thực & Cà phê",
        }),
        defineField({ name: "title", title: "Tiêu đề", type: "string", initialValue: "Nhà hàng" }),
        defineField({
          name: "description",
          title: "Mô tả (chỉ hiện trên desktop)",
          type: "text",
          rows: 3,
          initialValue:
            "Thưởng thức hương vị vùng cao nguyên bản với nguyên liệu được lấy trực tiếp từ những thửa ruộng bậc thang bản Tả Van.",
        }),
        defineField({
          name: "linkLabel",
          title: "Nhãn nút",
          type: "string",
          initialValue: "Xem thực đơn",
        }),
      ],
    }),
    defineField({
      name: "serviceSpa",
      title: "Thẻ dịch vụ: Spa",
      type: "object",
      group: "services",
      fields: [
        defineField({ name: "image", title: "Ảnh", type: "image", options: { hotspot: true } }),
        defineField({ name: "title", title: "Tiêu đề", type: "string", initialValue: "Spa" }),
        defineField({
          name: "subtitle",
          title: "Mô tả ngắn",
          type: "string",
          initialValue: "Nghi thức của nước",
        }),
      ],
    }),
    defineField({
      name: "serviceHomestay",
      title: "Thẻ dịch vụ: Homestay",
      type: "object",
      group: "services",
      fields: [
        defineField({ name: "image", title: "Ảnh", type: "image", options: { hotspot: true } }),
        defineField({ name: "title", title: "Tiêu đề", type: "string", initialValue: "Homestay" }),
        defineField({
          name: "subtitle",
          title: "Mô tả ngắn",
          type: "string",
          initialValue: "Nghỉ ngơi giữa núi rừng",
        }),
      ],
    }),

    // Seasonal highlights
    defineField({
      name: "seasonsEyebrow",
      title: "Nhãn nhỏ",
      type: "string",
      group: "seasons",
      initialValue: "Trải nghiệm các Mùa",
    }),
    defineField({
      name: "seasonsTitle",
      title: "Tiêu đề",
      type: "string",
      group: "seasons",
      initialValue: "Khi Mây Ngừng Bay",
    }),
    defineField({
      name: "seasonsLinkLabel",
      title: "Nhãn link",
      type: "string",
      group: "seasons",
      initialValue: "Lịch Sapa",
    }),
    defineField({
      name: "seasons",
      title: "Danh sách các Mùa",
      type: "array",
      group: "seasons",
      of: [{ type: "season" }],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Trang chủ" }),
  },
});
