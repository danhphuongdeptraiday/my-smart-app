import { defineField, defineType } from "sanity";

const MENU_CATEGORIES_INITIAL_VALUE = [
  {
    title: "Đồ uống",
    subcategories: [
      {
        titleVi: "Cà phê Việt Nam",
        titleEn: "Vietnamese Coffee",
        dishes: [
          { nameVi: "Cà phê đen", nameEn: "Black coffee", note: "Nóng/Lạnh" },
          { nameVi: "Cà phê sữa", nameEn: "Milk coffee", note: "Nóng/Lạnh" },
          { nameVi: "Cà phê Sa Pa", nameEn: "Sa Pa coffee" },
          { nameVi: "Cà phê bạc xỉu", nameEn: "White coffee", note: "Nóng/Lạnh" },
          { nameVi: "Cà phê cốt dừa", nameEn: "Coconut coffee" },
        ],
      },
      {
        titleVi: "Cà phê Ý",
        titleEn: "Italian Coffee",
        dishes: [
          { nameVi: "Cà phê Espresso", nameEn: "Espresso coffee" },
          { nameVi: "Cappuccino", nameEn: "Cappuccino coffee", note: "Nóng/Lạnh" },
          { nameVi: "Cà phê Latte", nameEn: "Latte coffee", note: "Nóng/Lạnh" },
          { nameVi: "Cà phê Mocha", nameEn: "Mocha coffee", note: "Nóng/Lạnh" },
        ],
      },
      {
        titleVi: "Nước ép",
        titleEn: "Juice",
        dishes: [
          { nameVi: "Nước ép Dứa", nameEn: "Pineapple Juice" },
          { nameVi: "Nước ép Dưa hấu", nameEn: "Watermelon Juice" },
          { nameVi: "Nước ép cam", nameEn: "Orange Juice" },
          { nameVi: "Nước ép chanh leo", nameEn: "Passion Juice" },
        ],
      },
      {
        titleVi: "Sinh tố",
        titleEn: "Smoothies",
        dishes: [
          { nameVi: "Sinh tố Xoài", nameEn: "Mango smoothie" },
          { nameVi: "Sinh tố Cam Xoài", nameEn: "Orange & Mango smoothie" },
          { nameVi: "Sinh tố Bơ", nameEn: "Avocado smoothie" },
          { nameVi: "Sinh tố xoài chanh leo", nameEn: "Mango & passion smoothie" },
        ],
      },
      {
        titleVi: "Trà nóng",
        titleEn: "Hot Tea",
        dishes: [
          { nameVi: "Trà cam quế", nameEn: "Orange cinnamon tea" },
          { nameVi: "Trà gừng mật ong", nameEn: "Ginger & honey tea" },
          { nameVi: "Trà chanh xả", nameEn: "Lemon grass tea" },
          { nameVi: "Trà dưỡng an tâm", nameEn: "Herbal tea" },
        ],
      },
      {
        titleVi: "Trà trái cây",
        titleEn: "Fruit Tea",
        dishes: [
          { nameVi: "Trà đào cam xả", nameEn: "Peach tea with orange and lemongrass" },
          { nameVi: "Trà xoài atiso", nameEn: "Mango & artichoke tea" },
          { nameVi: "Trà giải nhiệt Lá Dao", nameEn: "Cooling tea Lá Dao" },
          { nameVi: "Trà táo kiwi", nameEn: "Apple & kiwi tea" },
          { nameVi: "Trà dâu Nam Mỹ", nameEn: "South American strawberry tea" },
          { nameVi: "Trà trái cây nhiệt đới", nameEn: "Tropical fruit tea" },
          { nameVi: "Trà phúc thanh long", nameEn: "Dragon fruit tea" },
        ],
      },
      {
        titleVi: "Yakult",
        titleEn: "Yakult",
        dishes: [
          { nameVi: "Phô mai việt quất", nameEn: "Blueberry cream cheese" },
          { nameVi: "Yakult thanh long", nameEn: "Dragon fruit yakult" },
          { nameVi: "Sữa chua xoài dừa", nameEn: "Mango yakult" },
        ],
      },
    ],
  },
  {
    title: "Món ăn địa phương",
    subcategories: [
      {
        titleVi: "Gà bản",
        dishes: [
          { nameVi: "Gà bản rang gừng", nameEn: "Sauteed special village chicken with ginger" },
          {
            nameVi: "Gà bản hấp lá chanh",
            nameEn: "Steamed special village chicken with lime leaves",
          },
          {
            nameVi: "Gà bản nướng mật ong",
            nameEn: "Grilled special village chicken with honey",
          },
          { nameVi: "Gà bản quay", nameEn: "Roasted special village chicken" },
          { nameVi: "Gà bản / gà đen om nấm", nameEn: "Braised special village chicken with mushroom" },
          { nameVi: "Gà đen hấp lá chanh", nameEn: "Steamed black chicken with lime leaves" },
          { nameVi: "Gà đen nướng tây bắc", nameEn: "Grilled black chicken with ethnic style" },
          { nameVi: "Gà tẩm bột chiên", nameEn: "Crispy fried chicken" },
          { nameVi: "Lườn gà xào nấm hương", nameEn: "Stir-fried chicken breast with mushrooms" },
          { nameVi: "Lườn gà nướng mật ong", nameEn: "Grilled chicken with honey" },
        ],
      },
      {
        titleVi: "Lợn bản",
        dishes: [
          { nameVi: "Lợn bản nướng", nameEn: "Grilled village pork" },
          { nameVi: "Lợn bản hấp", nameEn: "Steamed village pork" },
          { nameVi: "Lợn bản xào măng mèo", nameEn: "Stir fried village pork with bamboo shoot" },
          {
            nameVi: "Lợn bản xào nấm hương",
            nameEn: "Stir fried village pork with shiitake mushroom",
          },
          {
            nameVi: "Lợn bản xào sả ớt",
            nameEn: "Stir fried village pork with lemongrass & chilli",
          },
          { nameVi: "Lợn bản rim tiêu", nameEn: "Simmered village pork with black pepper" },
          {
            nameVi: "Thịt lợn bản rang cháy cạnh",
            nameEn: "Stir fried village pork with fish sauce",
          },
        ],
      },
      {
        titleVi: "Các món cá",
        dishes: [
          { nameVi: "Gỏi Cá Hồi", nameEn: "Salmon fish sashimi" },
          { nameVi: "Cá Hồi/Cá Tầm Nướng", nameEn: "Grilled salmon/sturgeon with ethnic style" },
          { nameVi: "Cá Hồi/Cá Tầm chiên", nameEn: "Fried salmon/sturgeon" },
          {
            nameVi: "Cá Hồi/Cá Tầm sốt chanh leo",
            nameEn: "Pan seared Salmon/sturgeon with passion fruit sauce",
          },
        ],
      },
      {
        titleVi: "Món truyền thống",
        dishes: [
          { nameVi: "Khâu nhục lợn bản", nameEn: "Braised pork belly with ethnic style" },
          { nameVi: "Cá suối chiên giòn", nameEn: "Crispy fried stream fish" },
          { nameVi: "Lạp sườn lợn đen", nameEn: 'Steamed "Lap cheong"' },
          { nameVi: "Cá nướng bản Đáy", nameEn: "Grilled fish in ban day style" },
          { nameVi: "Cá suối kho măng mèo", nameEn: "Braised stream fish with bamboo shoots" },
          { nameVi: "Thịt lợn/trâu gác bếp", nameEn: "Smoked pork/buffalo meat" },
          {
            nameVi: "Lợn đen băm cuốn lá dong nướng",
            nameEn: "Grilled minced black pork wrapped in phrynium leaves",
          },
          { nameVi: "Cá hồi nướng Tây Bắc", nameEn: "Northwestern grilled salmon" },
          { nameVi: "Thịt lợn gác bếp xào măng", nameEn: "Stir-fried smoked pork with bamboo shoots" },
          { nameVi: "Đậu phụ sốt cà chua", nameEn: "Fried tofu with tomato sauce" },
          { nameVi: "Trứng rán hành", nameEn: "Fried egg with spring onion" },
          {
            nameVi: "Ba chỉ gác bếp xào rau cải mèo",
            nameEn: "Stir-fried smoked pork belly with local vegetable",
          },
        ],
      },
      {
        titleVi: "Các món khai vị",
        dishes: [
          { nameVi: "Nộm măng rừng", nameEn: "Wild bamboo shoot salad" },
          { nameVi: "Nộm rau dớn", nameEn: "Fern salad" },
          { nameVi: "Khoai lang chiên", nameEn: "Fried sweet potato" },
          { nameVi: "Khoai tây chiên", nameEn: "French fries" },
          { nameVi: "Nem Sapa", nameEn: "Sapa spring roll" },
          { nameVi: "Salad rau xanh Sapa", nameEn: "Sapa green vegetables salad" },
          { nameVi: "Salad cá hồi / cá tầm", nameEn: "Salmon / Sturgeon fish salad" },
          { nameVi: "Cơm lam chiên", nameEn: "Fried sticky rice in bamboo" },
          { nameVi: "Cơm lam nướng", nameEn: "Grilled sticky rice in bamboo" },
          { nameVi: "Dưa chuột chẻ", nameEn: "Fresh cucumber" },
        ],
      },
      {
        titleVi: "Món rau - Canh",
        dishes: [
          { nameVi: "Ngọn su su xào hoặc luộc", nameEn: "Stir fried/boiled chayote top" },
          { nameVi: "Rau cải mèo xào hoặc luộc", nameEn: "Stir fried/boiled H'mong vegetable" },
          { nameVi: "Măng mèo xào hoặc luộc", nameEn: "Stir fried/boiled bamboo shoot" },
          {
            nameVi: "Rau cải xoong xào hoặc luộc",
            nameEn: "Stir fried/boiled watercress vegetables",
          },
          { nameVi: "Củ quả luộc thập cẩm", nameEn: "Boiled mix veggie" },
          { nameVi: "Rau mầm đá luộc hoặc xào", nameEn: "Boiled or stir-fried rock sprouts" },
          { nameVi: "Rau ngồng cải luộc hoặc xào", nameEn: "Stir-fried or boiled Chinese Broccoli" },
          { nameVi: "Canh cải mèo thịt băm", nameEn: "Vegetables soup with ginger" },
          { nameVi: "Canh chua thịt băm", nameEn: "Sour soup with minced pork meat" },
          {
            nameVi: "Canh chua nấu nấm, đậu phụ, thịt lợn",
            nameEn: "Sour soup with mushroom, tofu, pork meat",
          },
          { nameVi: "Canh chua cá tầm/cá hồi", nameEn: "Sour soup with sturgeon or salmon" },
        ],
      },
      {
        titleVi: "Cơm rang - Mì xào",
        dishes: [
          { nameVi: "Cơm rang Rau & Nấm", nameEn: "Fried Rice vegetable & Mushroom" },
          { nameVi: "Cơm rang thập cẩm", nameEn: "Mixed Fried Rice" },
          { nameVi: "Cơm rang trứng", nameEn: "Fried rice with egg" },
          { nameVi: "Mì xào Rau & Bò", nameEn: "Stir Fried Noodle with Beef and Vegetable" },
          { nameVi: "Mì xào Rau & Gà", nameEn: "Stir Fried Noodle with chicken and Vegetable" },
          { nameVi: "Mì xào Rau & Lợn", nameEn: "Stir Fried Noodle with Pork and Vegetable" },
          { nameVi: "Mì xào Rau & Nấm", nameEn: "Stir Fried Noodle with Vegetable & Mushrooms" },
          { nameVi: "Mì tôm trứng (nước)", nameEn: "Instant noodle soup with egg" },
          { nameVi: "Mì tôm gà (nước)", nameEn: "Instant noodle soup with chicken" },
          { nameVi: "Mì tôm bò (nước)", nameEn: "Instant noodle soup with beef" },
          { nameVi: "Mì tôm thịt lợn (nước)", nameEn: "Instant noodle soup with pork" },
        ],
      },
    ],
  },
  {
    title: "Lẩu - Set",
    subcategories: [
      {
        titleVi: "Lẩu theo set (2 - 8 người)",
        titleEn: "Hot Pot Sets",
        dishes: [
          {
            nameVi: "Lẩu Cá Hồi / Cá Tầm",
            nameEn: "Salmon / Sturgeon Fish Hot Pot",
            priceTiers: [
              { label: "2 - 3 Người (For 2-3 Pax)", price: "800.000 VNĐ" },
              { label: "4 - 5 Người (For 4-5 Pax)", price: "1.200.000 VNĐ" },
              { label: "6 - 8 Người (For 6-8 Pax)", price: "1.500.000 VNĐ" },
            ],
          },
          {
            nameVi: "Lẩu Gà Bản / Gà Đen",
            nameEn: "Village / Black Chicken Hot Pot",
            priceTiers: [
              { label: "2 - 3 Người (For 2-3 Pax)", price: "700.000 VNĐ" },
              { label: "4 - 5 Người (For 4-5 Pax)", price: "1.000.000 VNĐ" },
              { label: "6 - 8 Người (For 6-8 Pax)", price: "1.400.000 VNĐ" },
            ],
          },
          {
            nameVi: "Lẩu Thập Cẩm",
            nameEn: "Mixed Hot Pot: Salmon, Sturgeon, Chicken, Beef",
            priceTiers: [
              { label: "2 - 3 Người (For 2-3 Pax)", price: "900.000 VNĐ" },
              { label: "4 - 5 Người (For 4-5 Pax)", price: "1.200.000 VNĐ" },
              { label: "6 - 8 Người (For 6-8 Pax)", price: "1.500.000 VNĐ" },
            ],
          },
          {
            nameVi: "Lẩu Bò",
            nameEn: "Beef Hot Pot",
            priceTiers: [
              { label: "2 - 3 Người (For 2-3 Pax)", price: "600.000 VNĐ" },
              { label: "4 - 5 Người (For 4-5 Pax)", price: "900.000 VNĐ" },
              { label: "6 - 8 Người (For 6-8 Pax)", price: "1.200.000 VNĐ" },
            ],
          },
        ],
      },
    ],
  },
];

export const nhaHangPage = defineType({
  name: "nhaHangPage",
  title: "Trang Nhà hàng",
  type: "document",
  groups: [
    { name: "hero", title: "Hero", default: true },
    { name: "intro", title: "Giới thiệu" },
    { name: "menu", title: "Thực đơn" },
    { name: "events", title: "Sự kiện & Tiệc" },
    { name: "quote", title: "Trích dẫn" },
  ],
  fields: [
    // Hero
    defineField({
      name: "heroImage",
      title: "Ảnh nền",
      type: "image",
      options: { hotspot: true },
      group: "hero",
    }),
    defineField({
      name: "heroTitle",
      title: "Tiêu đề",
      type: "string",
      group: "hero",
      initialValue: "Hương vị vùng cao, cội nguồn truyền thống",
    }),
    defineField({
      name: "heroSubtitle",
      title: "Mô tả",
      type: "text",
      rows: 3,
      group: "hero",
      initialValue:
        "Trải nghiệm di sản ẩm thực của vùng cao Tây Bắc, nơi mỗi món ăn kể một câu chuyện về đất, sương mù và con người.",
    }),
    defineField({
      name: "heroPrimaryButtonLabel",
      title: "Nút chính (label)",
      type: "string",
      group: "hero",
      initialValue: "Đặt bàn",
    }),
    defineField({
      name: "heroSecondaryButtonLabel",
      title: "Nút phụ (label)",
      type: "string",
      group: "hero",
      initialValue: "Xem thực đơn",
    }),

    // Intro
    defineField({
      name: "introEyebrow",
      title: "Nhãn nhỏ",
      type: "string",
      group: "intro",
      initialValue: "Ẩm thực Sapa đích thực",
    }),
    defineField({
      name: "introTitle",
      title: "Tiêu đề",
      type: "string",
      group: "intro",
      initialValue: "Sự tiện nghi tinh tế từ trái tim Hoàng Liên Sơn",
    }),
    defineField({
      name: "introBody",
      title: "Nội dung",
      type: "text",
      rows: 5,
      group: "intro",
      initialValue:
        "Nhà hàng tại Lá Dao không chỉ là nơi để ăn; đó là không gian nơi những nét mộc mạc của vùng cao gặp gỡ kỹ nghệ ẩm thực tinh tế. Chúng tôi nhập nguyên liệu trực tiếp từ nông dân người H'mông và Dao Đỏ địa phương, đảm bảo từng loại thảo mộc, rau củ và thịt đều mang trọn vẹn tinh túy thực sự của vùng đất mờ sương.",
    }),

    // Menu
    defineField({
      name: "menuSectionEyebrow",
      title: "Nhãn nhỏ",
      type: "string",
      group: "menu",
      initialValue: "Lựa chọn hiện tại",
    }),
    defineField({
      name: "menuSectionTitle",
      title: "Tiêu đề",
      type: "string",
      group: "menu",
      initialValue: "Thực đơn theo mùa",
    }),
    defineField({
      name: "menuSectionDesc",
      title: "Mô tả",
      type: "text",
      rows: 3,
      group: "menu",
      initialValue:
        "Khám phá các dịch vụ hàng ngày của chúng tôi. Chúng tôi luôn cập nhật thực đơn vật lý với những nông sản tươi ngon nhất từ đỉnh núi.",
    }),
    defineField({
      name: "menuCategories",
      title: "Thực đơn theo loại (tab)",
      description:
        "Mỗi mục lớn (Đồ uống / Món ăn địa phương / Lẩu - Set...) hiện thành một tab. Trong mỗi tab, chia nhỏ theo nhóm món — bấm vào tên nhóm sẽ xổ ra danh sách món.",
      type: "array",
      group: "menu",
      of: [{ type: "menuCategory" }],
      initialValue: MENU_CATEGORIES_INITIAL_VALUE,
    }),

    // Events & Functions
    defineField({
      name: "eventsImage",
      title: "Ảnh",
      type: "image",
      options: { hotspot: true },
      group: "events",
    }),
    defineField({
      name: "eventsEyebrow",
      title: "Nhãn nhỏ",
      type: "string",
      group: "events",
      initialValue: "Sự kiện & Tiệc",
    }),
    defineField({
      name: "eventsTitle",
      title: "Tiêu đề",
      type: "string",
      group: "events",
      initialValue: "Những buổi gặp gỡ thân mật trên mây",
    }),
    defineField({
      name: "eventsBody",
      title: "Nội dung",
      type: "text",
      rows: 5,
      group: "events",
      initialValue:
        "Dù là lễ kỷ niệm cột mốc, đám cưới nhỏ giữa núi rừng hay một buổi họp mặt doanh nghiệp tập trung, Lá Dao đều mang đến một phông nền tĩnh lặng vô song. Đội ngũ tổ chức sự kiện tận tâm của chúng tôi chuyên cá nhân hóa từng chi tiết.",
    }),
    defineField({
      name: "eventsFeatures",
      title: "Các đặc điểm nổi bật",
      type: "array",
      group: "events",
      of: [{ type: "eventFeature" }],
      initialValue: [
        {
          title: "Phòng riêng",
          desc: "Sức chứa lên tới 24 khách trong phòng kính biệt lập.",
        },
        {
          title: "Thuê trọn địa điểm",
          desc: "Toàn bộ không gian nhà hàng và sân hiên cho tối đa 80 khách.",
        },
      ],
    }),
    defineField({
      name: "eventsButtonLabel",
      title: "Nhãn nút",
      type: "string",
      group: "events",
      initialValue: "Tư vấn về sự kiện của bạn",
    }),

    // Quote
    defineField({
      name: "quoteText",
      title: "Trích dẫn",
      type: "text",
      rows: 3,
      group: "quote",
      initialValue:
        "Ăn tối tại Lá Dao mang lại cảm giác như được mời vào một ngôi nhà địa phương, nhưng với sự tinh tế của một nhà bếp đẳng cấp thế giới. Tầm nhìn ra thung lũng chỉ có thể so sánh với chiều sâu của hương vị.",
    }),
    defineField({
      name: "quoteCite",
      title: "Nguồn trích dẫn",
      type: "string",
      group: "quote",
      initialValue: "Tạp chí The Wanderlust",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Trang Nhà hàng" }),
  },
});
