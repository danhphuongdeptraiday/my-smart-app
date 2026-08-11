import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;
const token = process.env.SANITY_API_TOKEN;

if (!projectId || !dataset || !apiVersion) {
  throw new Error(
    "Missing NEXT_PUBLIC_SANITY_PROJECT_ID / NEXT_PUBLIC_SANITY_DATASET / NEXT_PUBLIC_SANITY_API_VERSION"
  );
}
if (!token) {
  throw new Error(
    "Missing SANITY_API_TOKEN — tạo Editor token tại sanity.io/manage và điền vào .env.local"
  );
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

const MENU_CATEGORIES = [
  {
    _key: "do-uong",
    title: "Đồ uống",
    subcategories: [
      {
        _key: "ca-phe-viet-nam",
        titleVi: "Cà phê Việt Nam",
        titleEn: "Vietnamese Coffee",
        dishes: [
          { _key: "ca-phe-den", nameVi: "Cà phê đen", nameEn: "Black coffee", note: "Nóng/Lạnh" },
          { _key: "ca-phe-sua", nameVi: "Cà phê sữa", nameEn: "Milk coffee", note: "Nóng/Lạnh" },
          { _key: "ca-phe-sa-pa", nameVi: "Cà phê Sa Pa", nameEn: "Sa Pa coffee" },
          {
            _key: "ca-phe-bac-xiu",
            nameVi: "Cà phê bạc xỉu",
            nameEn: "White coffee",
            note: "Nóng/Lạnh",
          },
          { _key: "ca-phe-cot-dua", nameVi: "Cà phê cốt dừa", nameEn: "Coconut coffee" },
        ],
      },
      {
        _key: "ca-phe-y",
        titleVi: "Cà phê Ý",
        titleEn: "Italian Coffee",
        dishes: [
          { _key: "espresso", nameVi: "Cà phê Espresso", nameEn: "Espresso coffee" },
          { _key: "cappuccino", nameVi: "Cappuccino", nameEn: "Cappuccino coffee", note: "Nóng/Lạnh" },
          { _key: "latte", nameVi: "Cà phê Latte", nameEn: "Latte coffee", note: "Nóng/Lạnh" },
          { _key: "mocha", nameVi: "Cà phê Mocha", nameEn: "Mocha coffee", note: "Nóng/Lạnh" },
        ],
      },
      {
        _key: "nuoc-ep",
        titleVi: "Nước ép",
        titleEn: "Juice",
        dishes: [
          { _key: "nuoc-ep-dua", nameVi: "Nước ép Dứa", nameEn: "Pineapple Juice" },
          { _key: "nuoc-ep-dua-hau", nameVi: "Nước ép Dưa hấu", nameEn: "Watermelon Juice" },
          { _key: "nuoc-ep-cam", nameVi: "Nước ép cam", nameEn: "Orange Juice" },
          { _key: "nuoc-ep-chanh-leo", nameVi: "Nước ép chanh leo", nameEn: "Passion Juice" },
        ],
      },
      {
        _key: "sinh-to",
        titleVi: "Sinh tố",
        titleEn: "Smoothies",
        dishes: [
          { _key: "sinh-to-xoai", nameVi: "Sinh tố Xoài", nameEn: "Mango smoothie" },
          {
            _key: "sinh-to-cam-xoai",
            nameVi: "Sinh tố Cam Xoài",
            nameEn: "Orange & Mango smoothie",
          },
          { _key: "sinh-to-bo", nameVi: "Sinh tố Bơ", nameEn: "Avocado smoothie" },
          {
            _key: "sinh-to-xoai-chanh-leo",
            nameVi: "Sinh tố xoài chanh leo",
            nameEn: "Mango & passion smoothie",
          },
        ],
      },
      {
        _key: "tra-nong",
        titleVi: "Trà nóng",
        titleEn: "Hot Tea",
        dishes: [
          { _key: "tra-cam-que", nameVi: "Trà cam quế", nameEn: "Orange cinnamon tea" },
          { _key: "tra-gung-mat-ong", nameVi: "Trà gừng mật ong", nameEn: "Ginger & honey tea" },
          { _key: "tra-chanh-xa", nameVi: "Trà chanh xả", nameEn: "Lemon grass tea" },
          { _key: "tra-duong-an-tam", nameVi: "Trà dưỡng an tâm", nameEn: "Herbal tea" },
        ],
      },
      {
        _key: "tra-trai-cay",
        titleVi: "Trà trái cây",
        titleEn: "Fruit Tea",
        dishes: [
          {
            _key: "tra-dao-cam-xa",
            nameVi: "Trà đào cam xả",
            nameEn: "Peach tea with orange and lemongrass",
          },
          { _key: "tra-xoai-atiso", nameVi: "Trà xoài atiso", nameEn: "Mango & artichoke tea" },
          {
            _key: "tra-giai-nhiet-la-dao",
            nameVi: "Trà giải nhiệt Lá Dao",
            nameEn: "Cooling tea Lá Dao",
          },
          { _key: "tra-tao-kiwi", nameVi: "Trà táo kiwi", nameEn: "Apple & kiwi tea" },
          {
            _key: "tra-dau-nam-my",
            nameVi: "Trà dâu Nam Mỹ",
            nameEn: "South American strawberry tea",
          },
          {
            _key: "tra-trai-cay-nhiet-doi",
            nameVi: "Trà trái cây nhiệt đới",
            nameEn: "Tropical fruit tea",
          },
          { _key: "tra-phuc-thanh-long", nameVi: "Trà phúc thanh long", nameEn: "Dragon fruit tea" },
        ],
      },
      {
        _key: "yakult",
        titleVi: "Yakult",
        titleEn: "Yakult",
        dishes: [
          { _key: "pho-mai-viet-quat", nameVi: "Phô mai việt quất", nameEn: "Blueberry cream cheese" },
          { _key: "yakult-thanh-long", nameVi: "Yakult thanh long", nameEn: "Dragon fruit yakult" },
          { _key: "sua-chua-xoai-dua", nameVi: "Sữa chua xoài dừa", nameEn: "Mango yakult" },
        ],
      },
    ],
  },
  {
    _key: "mon-an-dia-phuong",
    title: "Món ăn địa phương",
    subcategories: [
      {
        _key: "ga-ban",
        titleVi: "Gà bản",
        dishes: [
          {
            _key: "ga-ban-rang-gung",
            nameVi: "Gà bản rang gừng",
            nameEn: "Sauteed special village chicken with ginger",
          },
          {
            _key: "ga-ban-hap-la-chanh",
            nameVi: "Gà bản hấp lá chanh",
            nameEn: "Steamed special village chicken with lime leaves",
          },
          {
            _key: "ga-ban-nuong-mat-ong",
            nameVi: "Gà bản nướng mật ong",
            nameEn: "Grilled special village chicken with honey",
          },
          { _key: "ga-ban-quay", nameVi: "Gà bản quay", nameEn: "Roasted special village chicken" },
          {
            _key: "ga-ban-ga-den-om-nam",
            nameVi: "Gà bản / gà đen om nấm",
            nameEn: "Braised special village chicken with mushroom",
          },
          {
            _key: "ga-den-hap-la-chanh",
            nameVi: "Gà đen hấp lá chanh",
            nameEn: "Steamed black chicken with lime leaves",
          },
          {
            _key: "ga-den-nuong-tay-bac",
            nameVi: "Gà đen nướng tây bắc",
            nameEn: "Grilled black chicken with ethnic style",
          },
          { _key: "ga-tam-bot-chien", nameVi: "Gà tẩm bột chiên", nameEn: "Crispy fried chicken" },
          {
            _key: "luon-ga-xao-nam-huong",
            nameVi: "Lườn gà xào nấm hương",
            nameEn: "Stir-fried chicken breast with mushrooms",
          },
          {
            _key: "luon-ga-nuong-mat-ong",
            nameVi: "Lườn gà nướng mật ong",
            nameEn: "Grilled chicken with honey",
          },
        ],
      },
      {
        _key: "lon-ban",
        titleVi: "Lợn bản",
        dishes: [
          { _key: "lon-ban-nuong", nameVi: "Lợn bản nướng", nameEn: "Grilled village pork" },
          { _key: "lon-ban-hap", nameVi: "Lợn bản hấp", nameEn: "Steamed village pork" },
          {
            _key: "lon-ban-xao-mang-meo",
            nameVi: "Lợn bản xào măng mèo",
            nameEn: "Stir fried village pork with bamboo shoot",
          },
          {
            _key: "lon-ban-xao-nam-huong",
            nameVi: "Lợn bản xào nấm hương",
            nameEn: "Stir fried village pork with shiitake mushroom",
          },
          {
            _key: "lon-ban-xao-sa-ot",
            nameVi: "Lợn bản xào sả ớt",
            nameEn: "Stir fried village pork with lemongrass & chilli",
          },
          {
            _key: "lon-ban-rim-tieu",
            nameVi: "Lợn bản rim tiêu",
            nameEn: "Simmered village pork with black pepper",
          },
          {
            _key: "thit-lon-ban-rang-chay-canh",
            nameVi: "Thịt lợn bản rang cháy cạnh",
            nameEn: "Stir fried village pork with fish sauce",
          },
        ],
      },
      {
        _key: "cac-mon-ca",
        titleVi: "Các món cá",
        dishes: [
          { _key: "goi-ca-hoi", nameVi: "Gỏi Cá Hồi", nameEn: "Salmon fish sashimi" },
          {
            _key: "ca-hoi-ca-tam-nuong",
            nameVi: "Cá Hồi/Cá Tầm Nướng",
            nameEn: "Grilled salmon/sturgeon with ethnic style",
          },
          { _key: "ca-hoi-ca-tam-chien", nameVi: "Cá Hồi/Cá Tầm chiên", nameEn: "Fried salmon/sturgeon" },
          {
            _key: "ca-hoi-ca-tam-sot-chanh-leo",
            nameVi: "Cá Hồi/Cá Tầm sốt chanh leo",
            nameEn: "Pan seared Salmon/sturgeon with passion fruit sauce",
          },
        ],
      },
      {
        _key: "mon-truyen-thong",
        titleVi: "Món truyền thống",
        dishes: [
          {
            _key: "khau-nhuc-lon-ban",
            nameVi: "Khâu nhục lợn bản",
            nameEn: "Braised pork belly with ethnic style",
          },
          { _key: "ca-suoi-chien-gion", nameVi: "Cá suối chiên giòn", nameEn: "Crispy fried stream fish" },
          { _key: "lap-suon-lon-den", nameVi: "Lạp sườn lợn đen", nameEn: 'Steamed "Lap cheong"' },
          { _key: "ca-nuong-ban-day", nameVi: "Cá nướng bản Đáy", nameEn: "Grilled fish in ban day style" },
          {
            _key: "ca-suoi-kho-mang-meo",
            nameVi: "Cá suối kho măng mèo",
            nameEn: "Braised stream fish with bamboo shoots",
          },
          {
            _key: "thit-lon-trau-gac-bep",
            nameVi: "Thịt lợn/trâu gác bếp",
            nameEn: "Smoked pork/buffalo meat",
          },
          {
            _key: "lon-den-bam-cuon-la-dong-nuong",
            nameVi: "Lợn đen băm cuốn lá dong nướng",
            nameEn: "Grilled minced black pork wrapped in phrynium leaves",
          },
          {
            _key: "ca-hoi-nuong-tay-bac",
            nameVi: "Cá hồi nướng Tây Bắc",
            nameEn: "Northwestern grilled salmon",
          },
          {
            _key: "thit-lon-gac-bep-xao-mang",
            nameVi: "Thịt lợn gác bếp xào măng",
            nameEn: "Stir-fried smoked pork with bamboo shoots",
          },
          {
            _key: "dau-phu-sot-ca-chua",
            nameVi: "Đậu phụ sốt cà chua",
            nameEn: "Fried tofu with tomato sauce",
          },
          { _key: "trung-ran-hanh", nameVi: "Trứng rán hành", nameEn: "Fried egg with spring onion" },
          {
            _key: "ba-chi-gac-bep-xao-rau-cai-meo",
            nameVi: "Ba chỉ gác bếp xào rau cải mèo",
            nameEn: "Stir-fried smoked pork belly with local vegetable",
          },
        ],
      },
      {
        _key: "cac-mon-khai-vi",
        titleVi: "Các món khai vị",
        dishes: [
          { _key: "nom-mang-rung", nameVi: "Nộm măng rừng", nameEn: "Wild bamboo shoot salad" },
          { _key: "nom-rau-don", nameVi: "Nộm rau dớn", nameEn: "Fern salad" },
          { _key: "khoai-lang-chien", nameVi: "Khoai lang chiên", nameEn: "Fried sweet potato" },
          { _key: "khoai-tay-chien", nameVi: "Khoai tây chiên", nameEn: "French fries" },
          { _key: "nem-sapa", nameVi: "Nem Sapa", nameEn: "Sapa spring roll" },
          {
            _key: "salad-rau-xanh-sapa",
            nameVi: "Salad rau xanh Sapa",
            nameEn: "Sapa green vegetables salad",
          },
          {
            _key: "salad-ca-hoi-ca-tam",
            nameVi: "Salad cá hồi / cá tầm",
            nameEn: "Salmon / Sturgeon fish salad",
          },
          { _key: "com-lam-chien", nameVi: "Cơm lam chiên", nameEn: "Fried sticky rice in bamboo" },
          { _key: "com-lam-nuong", nameVi: "Cơm lam nướng", nameEn: "Grilled sticky rice in bamboo" },
          { _key: "dua-chuot-che", nameVi: "Dưa chuột chẻ", nameEn: "Fresh cucumber" },
        ],
      },
      {
        _key: "mon-rau-canh",
        titleVi: "Món rau - Canh",
        dishes: [
          {
            _key: "ngon-su-su-xao-hoac-luoc",
            nameVi: "Ngọn su su xào hoặc luộc",
            nameEn: "Stir fried/boiled chayote top",
          },
          {
            _key: "rau-cai-meo-xao-hoac-luoc",
            nameVi: "Rau cải mèo xào hoặc luộc",
            nameEn: "Stir fried/boiled H'mong vegetable",
          },
          {
            _key: "mang-meo-xao-hoac-luoc",
            nameVi: "Măng mèo xào hoặc luộc",
            nameEn: "Stir fried/boiled bamboo shoot",
          },
          {
            _key: "rau-cai-xoong-xao-hoac-luoc",
            nameVi: "Rau cải xoong xào hoặc luộc",
            nameEn: "Stir fried/boiled watercress vegetables",
          },
          { _key: "cu-qua-luoc-thap-cam", nameVi: "Củ quả luộc thập cẩm", nameEn: "Boiled mix veggie" },
          {
            _key: "rau-mam-da-luoc-hoac-xao",
            nameVi: "Rau mầm đá luộc hoặc xào",
            nameEn: "Boiled or stir-fried rock sprouts",
          },
          {
            _key: "rau-ngong-cai-luoc-hoac-xao",
            nameVi: "Rau ngồng cải luộc hoặc xào",
            nameEn: "Stir-fried or boiled Chinese Broccoli",
          },
          {
            _key: "canh-cai-meo-thit-bam",
            nameVi: "Canh cải mèo thịt băm",
            nameEn: "Vegetables soup with ginger",
          },
          {
            _key: "canh-chua-thit-bam",
            nameVi: "Canh chua thịt băm",
            nameEn: "Sour soup with minced pork meat",
          },
          {
            _key: "canh-chua-nau-nam-dau-phu-thit-lon",
            nameVi: "Canh chua nấu nấm, đậu phụ, thịt lợn",
            nameEn: "Sour soup with mushroom, tofu, pork meat",
          },
          {
            _key: "canh-chua-ca-tam-ca-hoi",
            nameVi: "Canh chua cá tầm/cá hồi",
            nameEn: "Sour soup with sturgeon or salmon",
          },
        ],
      },
      {
        _key: "com-rang-mi-xao",
        titleVi: "Cơm rang - Mì xào",
        dishes: [
          { _key: "com-rang-rau-nam", nameVi: "Cơm rang Rau & Nấm", nameEn: "Fried Rice vegetable & Mushroom" },
          { _key: "com-rang-thap-cam", nameVi: "Cơm rang thập cẩm", nameEn: "Mixed Fried Rice" },
          { _key: "com-rang-trung", nameVi: "Cơm rang trứng", nameEn: "Fried rice with egg" },
          {
            _key: "mi-xao-rau-bo",
            nameVi: "Mì xào Rau & Bò",
            nameEn: "Stir Fried Noodle with Beef and Vegetable",
          },
          {
            _key: "mi-xao-rau-ga",
            nameVi: "Mì xào Rau & Gà",
            nameEn: "Stir Fried Noodle with chicken and Vegetable",
          },
          {
            _key: "mi-xao-rau-lon",
            nameVi: "Mì xào Rau & Lợn",
            nameEn: "Stir Fried Noodle with Pork and Vegetable",
          },
          {
            _key: "mi-xao-rau-nam",
            nameVi: "Mì xào Rau & Nấm",
            nameEn: "Stir Fried Noodle with Vegetable & Mushrooms",
          },
          {
            _key: "mi-tom-trung-nuoc",
            nameVi: "Mì tôm trứng (nước)",
            nameEn: "Instant noodle soup with egg",
          },
          {
            _key: "mi-tom-ga-nuoc",
            nameVi: "Mì tôm gà (nước)",
            nameEn: "Instant noodle soup with chicken",
          },
          {
            _key: "mi-tom-bo-nuoc",
            nameVi: "Mì tôm bò (nước)",
            nameEn: "Instant noodle soup with beef",
          },
          {
            _key: "mi-tom-thit-lon-nuoc",
            nameVi: "Mì tôm thịt lợn (nước)",
            nameEn: "Instant noodle soup with pork",
          },
        ],
      },
    ],
  },
  {
    _key: "lau-set",
    title: "Lẩu - Set",
    subcategories: [
      {
        _key: "lau-theo-set",
        titleVi: "Lẩu theo set (2 - 8 người)",
        titleEn: "Hot Pot Sets",
        dishes: [
          {
            _key: "lau-ca-hoi-ca-tam",
            nameVi: "Lẩu Cá Hồi / Cá Tầm",
            nameEn: "Salmon / Sturgeon Fish Hot Pot",
            priceTiers: [
              { _key: "t1", label: "2 - 3 Người (For 2-3 Pax)", price: "800.000 VNĐ" },
              { _key: "t2", label: "4 - 5 Người (For 4-5 Pax)", price: "1.200.000 VNĐ" },
              { _key: "t3", label: "6 - 8 Người (For 6-8 Pax)", price: "1.500.000 VNĐ" },
            ],
          },
          {
            _key: "lau-ga-ban-ga-den",
            nameVi: "Lẩu Gà Bản / Gà Đen",
            nameEn: "Village / Black Chicken Hot Pot",
            priceTiers: [
              { _key: "t1", label: "2 - 3 Người (For 2-3 Pax)", price: "700.000 VNĐ" },
              { _key: "t2", label: "4 - 5 Người (For 4-5 Pax)", price: "1.000.000 VNĐ" },
              { _key: "t3", label: "6 - 8 Người (For 6-8 Pax)", price: "1.400.000 VNĐ" },
            ],
          },
          {
            _key: "lau-thap-cam",
            nameVi: "Lẩu Thập Cẩm",
            nameEn: "Mixed Hot Pot: Salmon, Sturgeon, Chicken, Beef",
            priceTiers: [
              { _key: "t1", label: "2 - 3 Người (For 2-3 Pax)", price: "900.000 VNĐ" },
              { _key: "t2", label: "4 - 5 Người (For 4-5 Pax)", price: "1.200.000 VNĐ" },
              { _key: "t3", label: "6 - 8 Người (For 6-8 Pax)", price: "1.500.000 VNĐ" },
            ],
          },
          {
            _key: "lau-bo",
            nameVi: "Lẩu Bò",
            nameEn: "Beef Hot Pot",
            priceTiers: [
              { _key: "t1", label: "2 - 3 Người (For 2-3 Pax)", price: "600.000 VNĐ" },
              { _key: "t2", label: "4 - 5 Người (For 4-5 Pax)", price: "900.000 VNĐ" },
              { _key: "t3", label: "6 - 8 Người (For 6-8 Pax)", price: "1.200.000 VNĐ" },
            ],
          },
        ],
      },
    ],
  },
];

async function main() {
  console.log("→ Đang kiểm tra document nhaHangPage...");
  const exists = await client.fetch(`*[_id == "nhaHangPage"][0]._id`);
  if (!exists) {
    throw new Error(
      'Không tìm thấy document "nhaHangPage" trong dataset. Hãy mở /studio → "Trang Nhà hàng" và bấm Publish ít nhất 1 lần trước khi chạy script này.'
    );
  }

  console.log('→ Đang ghi field "menuCategories" (giữ nguyên các field khác)...');
  await client.patch("nhaHangPage").set({ menuCategories: MENU_CATEGORIES }).commit();

  console.log("✅ Xong. Mở /studio → Trang Nhà hàng → tab Thực đơn để kiểm tra.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
