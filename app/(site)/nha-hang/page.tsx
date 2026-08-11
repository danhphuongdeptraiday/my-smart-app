import Image from "next/image";
import QuoteSection from "@/components/QuoteSection";
import MenuTabs, { type MenuCategoryGroup } from "@/components/MenuTabs";
import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";
import type { Image as SanityImage } from "sanity";

const NHA_HANG_QUERY = `*[_type == "nhaHangPage"][0]{
  heroImage,
  heroTitle,
  heroSubtitle,
  heroPrimaryButtonLabel,
  heroSecondaryButtonLabel,
  introEyebrow,
  introTitle,
  introBody,
  menuSectionEyebrow,
  menuSectionTitle,
  menuSectionDesc,
  menuCategories,
  eventsImage,
  eventsEyebrow,
  eventsTitle,
  eventsBody,
  eventsFeatures,
  eventsButtonLabel,
  quoteText,
  quoteCite
}`;

type EventFeatureDoc = {
  title: string;
  desc?: string;
};

type NhaHangPageData = {
  heroImage?: SanityImage;
  heroTitle?: string;
  heroSubtitle?: string;
  heroPrimaryButtonLabel?: string;
  heroSecondaryButtonLabel?: string;
  introEyebrow?: string;
  introTitle?: string;
  introBody?: string;
  menuSectionEyebrow?: string;
  menuSectionTitle?: string;
  menuSectionDesc?: string;
  menuCategories?: MenuCategoryGroup[];
  eventsImage?: SanityImage;
  eventsEyebrow?: string;
  eventsTitle?: string;
  eventsBody?: string;
  eventsFeatures?: EventFeatureDoc[];
  eventsButtonLabel?: string;
  quoteText?: string;
  quoteCite?: string;
};

const FALLBACK_HERO_IMAGE_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDVc4RBHZwbItGp9JGv1q2HexSMRHQz3Pv4XzvPGtxP0N6tjimQ9zGhof06E4L-0o1FXQye34BT9GJhNFiHWeZK0Zm3JTktNdxNmR-WUcUlVaJF1iHjwJTpVujuVKRtvh--85-Cmb-93BMhS2DZtPoQ1del6GATMSW2hsCy2rnPSBX6bXS3TfcvrqosuXWqFmg1fcXJrjV2hMnf556iG1UOfr7P-ZkfbYpcNdC8WEXtCVs5D3cVVtfrY2yfOJBPNU_7J1FeqUCTWiqe";

const FALLBACK_EVENTS_IMAGE_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDMHO1fcSLfK1T9IwQY0Dsk7ie5hjLXlJFHO9DP2MeD0TcnAFALIHWkM9mARZ7owcU0v-5RFFzJx6fiX7SYUO8NPlBTd6Vq9FoF-97QqpLL386cJ6V4GcwOCZC7tsrSpSe_oEsEK8GDc2Wysm8xsFFzdMfoQjaAJlYvMmoOK4RR2y2gtqGYEROf_h1F_Okg8avNhErw8aD82ca_uNjgaSikjcD2QKdTY3WiVW6xBbeJcEVH7DZhypfAh0TXMHzeEX0mbhUtWkv7G8v7";

const FALLBACK_EVENTS_FEATURES: EventFeatureDoc[] = [
  {
    title: "Phòng riêng",
    desc: "Sức chứa lên tới 24 khách trong phòng kính biệt lập.",
  },
  {
    title: "Thuê trọn địa điểm",
    desc: "Toàn bộ không gian nhà hàng và sân hiên cho tối đa 80 khách.",
  },
];

const FALLBACK_MENU_CATEGORIES: MenuCategoryGroup[] = [
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

export default async function NhaHangPage() {
  const data = await client.fetch<NhaHangPageData | null>(NHA_HANG_QUERY);

  const heroImageUrl = data?.heroImage
    ? urlFor(data.heroImage).width(1920).quality(80).url()
    : FALLBACK_HERO_IMAGE_URL;
  const heroTitle = data?.heroTitle || "Hương vị vùng cao, cội nguồn truyền thống";
  const heroSubtitle =
    data?.heroSubtitle ||
    "Trải nghiệm di sản ẩm thực của vùng cao Tây Bắc, nơi mỗi món ăn kể một câu chuyện về đất, sương mù và con người.";
  const heroPrimaryButtonLabel = data?.heroPrimaryButtonLabel || "Đặt bàn";
  const heroSecondaryButtonLabel = data?.heroSecondaryButtonLabel || "Xem thực đơn";

  const introEyebrow = data?.introEyebrow || "Ẩm thực Sapa đích thực";
  const introTitle = data?.introTitle || "Sự tiện nghi tinh tế từ trái tim Hoàng Liên Sơn";
  const introBody =
    data?.introBody ||
    "Nhà hàng tại Lá Dao không chỉ là nơi để ăn; đó là không gian nơi những nét mộc mạc của vùng cao gặp gỡ kỹ nghệ ẩm thực tinh tế. Chúng tôi nhập nguyên liệu trực tiếp từ nông dân người H'mông và Dao Đỏ địa phương, đảm bảo từng loại thảo mộc, rau củ và thịt đều mang trọn vẹn tinh túy thực sự của vùng đất mờ sương.";

  const menuSectionEyebrow = data?.menuSectionEyebrow || "Lựa chọn hiện tại";
  const menuSectionTitle = data?.menuSectionTitle || "Thực đơn theo mùa";
  const menuSectionDesc =
    data?.menuSectionDesc ||
    "Khám phá các dịch vụ hàng ngày của chúng tôi. Chúng tôi luôn cập nhật thực đơn vật lý với những nông sản tươi ngon nhất từ đỉnh núi.";
  const menuCategories =
    data?.menuCategories && data.menuCategories.length > 0
      ? data.menuCategories
      : FALLBACK_MENU_CATEGORIES;

  const eventsImageUrl = data?.eventsImage
    ? urlFor(data.eventsImage).width(1200).quality(80).url()
    : FALLBACK_EVENTS_IMAGE_URL;
  const eventsEyebrow = data?.eventsEyebrow || "Sự kiện & Tiệc";
  const eventsTitle = data?.eventsTitle || "Những buổi gặp gỡ thân mật trên mây";
  const eventsBody =
    data?.eventsBody ||
    "Dù là lễ kỷ niệm cột mốc, đám cưới nhỏ giữa núi rừng hay một buổi họp mặt doanh nghiệp tập trung, Lá Dao đều mang đến một phông nền tĩnh lặng vô song. Đội ngũ tổ chức sự kiện tận tâm của chúng tôi chuyên cá nhân hóa từng chi tiết.";
  const eventsFeatures =
    data?.eventsFeatures && data.eventsFeatures.length > 0
      ? data.eventsFeatures
      : FALLBACK_EVENTS_FEATURES;
  const eventsButtonLabel = data?.eventsButtonLabel || "Tư vấn về sự kiện của bạn";

  const quoteText =
    data?.quoteText ||
    "Ăn tối tại Lá Dao mang lại cảm giác như được mời vào một ngôi nhà địa phương, nhưng với sự tinh tế của một nhà bếp đẳng cấp thế giới. Tầm nhìn ra thung lũng chỉ có thể so sánh với chiều sâu của hương vị.";
  const quoteCite = data?.quoteCite || "Tạp chí The Wanderlust";

  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden flex items-center">
        <Image
          src={heroImageUrl}
          alt={heroTitle}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent md:bg-gradient-to-r md:from-primary/50 md:to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-margin-mobile md:px-margin-desktop text-white">
          <h1 className="font-serif text-3xl md:text-5xl max-w-2xl mb-4 md:mb-6">
            {heroTitle}
          </h1>
          <p className="max-w-md text-surface-container-low/90 mb-8 text-sm md:text-base">
            {heroSubtitle}
          </p>
          <div className="flex gap-4">
            <button className="bg-primary text-surface px-6 md:px-8 py-3 md:py-4 text-sm tracking-wide hover:bg-secondary transition-colors">
              {heroPrimaryButtonLabel}
            </button>
            <button className="border border-surface text-surface px-6 md:px-8 py-3 md:py-4 text-sm tracking-wide hover:bg-surface/10 transition-colors">
              {heroSecondaryButtonLabel}
            </button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-[1280px] grid grid-cols-1 gap-gutter items-center px-margin-mobile py-16 md:grid-cols-2 md:py-28 md:px-margin-desktop">
        <div>
          <span className="mb-4 block text-xs uppercase tracking-[0.2em] text-secondary">
            {introEyebrow}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4 md:mb-8 leading-tight">
            {introTitle}
          </h2>
        </div>
        <div>
          <p className="text-on-surface-variant leading-relaxed whitespace-pre-line">
            {introBody}
          </p>
        </div>
      </section>

      {/* Menu */}
      <section className="bg-surface-container-low py-16 md:py-28">
        <div className="mx-auto max-w-[1280px] px-margin-mobile md:px-margin-desktop">
          <div className="mb-12 text-center md:mb-16">
            <span className="mb-4 block text-xs uppercase tracking-[0.2em] text-secondary">
              {menuSectionEyebrow}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4">
              {menuSectionTitle}
            </h2>
            <p className="mx-auto max-w-xl text-sm text-on-surface-variant">
              {menuSectionDesc}
            </p>
          </div>
          <MenuTabs categories={menuCategories} />
        </div>
      </section>

      {/* Events & Functions */}
      <section className="py-16 md:py-32">
        <div className="mx-auto max-w-[1280px] px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col items-center gap-gutter md:flex-row">
            <div className="relative w-full md:w-1/2 aspect-[4/5] overflow-hidden rounded-lg">
              <Image
                src={eventsImageUrl}
                alt={eventsTitle}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-16 mt-8 md:mt-0">
              <span className="mb-4 block text-xs uppercase tracking-[0.2em] text-secondary">
                {eventsEyebrow}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-primary mb-6 md:mb-8 leading-tight">
                {eventsTitle}
              </h2>
              <p className="text-on-surface-variant leading-relaxed mb-8 md:mb-12 whitespace-pre-line">
                {eventsBody}
              </p>
              <div className="space-y-6 mb-8 md:mb-12">
                {eventsFeatures.map((feature) => (
                  <div key={feature.title}>
                    <h4 className="font-bold text-primary">{feature.title}</h4>
                    {feature.desc && (
                      <p className="text-sm text-on-surface-variant">{feature.desc}</p>
                    )}
                  </div>
                ))}
              </div>
              <button className="bg-primary text-surface px-8 md:px-10 py-4 md:py-5 text-sm tracking-wide hover:bg-secondary transition-all hover:scale-105">
                {eventsButtonLabel}
              </button>
            </div>
          </div>
        </div>
      </section>

      <QuoteSection quote={quoteText} cite={quoteCite} />
    </>
  );
}
