import { defineField, defineType } from "sanity";

export const gioiThieuPage = defineType({
  name: "gioiThieuPage",
  title: "Trang Giới thiệu",
  type: "document",
  groups: [
    { name: "hero", title: "Hero", default: true },
    { name: "talVan", title: "Bản Tả Van" },
    { name: "culture", title: "Văn hoá" },
    { name: "explore", title: "Khám phá" },
    { name: "story", title: "Câu chuyện Lá Dao" },
    { name: "mission", title: "Sứ mệnh" },
    { name: "staff", title: "Nhân sự" },
    { name: "reviews", title: "Đánh giá" },
    { name: "contact", title: "Liên hệ" },
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
      initialValue: "Về Lá Dao",
    }),
    defineField({
      name: "heroSubtitle",
      title: "Mô tả",
      type: "text",
      rows: 3,
      group: "hero",
      initialValue:
        "Câu chuyện về bản Tả Van và hành trình xây dựng nên Lá Dao — nơi văn hoá bản địa và sự chữa lành hoà quyện làm một.",
    }),

    // Bản Tả Van
    defineField({
      name: "talVanEyebrow",
      title: "Nhãn nhỏ",
      type: "string",
      group: "talVan",
      initialValue: "Bản Tả Van, Sa Pa",
    }),
    defineField({
      name: "talVanTitle",
      title: "Tiêu đề",
      type: "string",
      group: "talVan",
      initialValue: "Ngôi làng cổ giữa thung lũng Mường Hoa",
    }),
    defineField({
      name: "talVanIntro",
      title: "Giới thiệu",
      type: "text",
      rows: 6,
      group: "talVan",
      initialValue:
        "Bản Tả Van là ngôi làng cổ xinh đẹp cách trung tâm Sa Pa khoảng 12 km, nổi tiếng với thung lũng Mường Hoa thơ mộng và những thửa ruộng bậc thang tuyệt đẹp.\n\nNơi đây là địa bàn sinh sống lâu đời của đồng bào các dân tộc, trong đó chủ yếu là người H'Mông, người Dao và Giáy, tạo nên một bức tranh giao thoa văn hóa đặc sắc.",
    }),
    defineField({
      name: "talVanImage",
      title: "Ảnh",
      type: "image",
      options: { hotspot: true },
      group: "talVan",
    }),
    defineField({
      name: "beautyBody",
      title: "Đoạn văn miêu tả vẻ đẹp Tả Van",
      type: "text",
      rows: 8,
      group: "talVan",
      initialValue:
        "Vẻ đẹp của bản Tả Van hiện lên như một bức tranh đầy thơ mộng của Thung Lũng Mường Hoa, nơi con người và thiên nhiên hòa quyện làm một. Đập vào mắt du khách là những thửa ruộng bậc thang uốn lượn mềm mại, thay màu áo mới theo từng mùa: khi thì xanh mướt sức sống thì con gái, lúc lại nhuộm sắc vàng óng ả, thơm hương lúa chín dưới ánh nắng vàng hanh hao. Thấp thoáng giữa làn sương mờ ảo là dòng suối Mường Hoa róc rách chảy qua những hòn đá cuội, uốn lượn ôm trọn lấy những thửa ruộng bậc thang. Đến với Tả Van, ta như được trút bỏ mọi muộn phiền để đắm mình vào không gian yên bình, hít hà không khí trong lành.",
    }),
    defineField({
      name: "beautyImage",
      title: "Ảnh minh hoạ",
      type: "image",
      options: { hotspot: true },
      group: "talVan",
    }),

    // Văn hoá
    defineField({
      name: "cultureSectionTitle",
      title: "Tiêu đề mục",
      type: "string",
      group: "culture",
      initialValue: "Giao thoa văn hoá ba dân tộc",
    }),
    defineField({
      name: "cultureHmong",
      title: "Văn hoá người H'Mông",
      type: "object",
      group: "culture",
      fields: [
        defineField({ name: "ethnicName", title: "Tên dân tộc", type: "string", initialValue: "H'Mông" }),
        defineField({
          name: "craftName",
          title: "Tên nét văn hoá",
          type: "string",
          initialValue: "Vẽ sáp ong",
        }),
        defineField({
          name: "desc",
          title: "Mô tả",
          type: "text",
          rows: 4,
          initialValue:
            "Vẽ sáp ong là nghệ thuật thủ công truyền thống sử dụng sáp nóng vẽ hoa văn lên vải trước khi nhuộm chàm, tạo nên những họa tiết sắc nét mang đậm bản sắc văn hóa của người H'Mông.",
        }),
        defineField({ name: "image", title: "Ảnh", type: "image", options: { hotspot: true } }),
      ],
    }),
    defineField({
      name: "cultureDao",
      title: "Văn hoá người Dao",
      type: "object",
      group: "culture",
      fields: [
        defineField({ name: "ethnicName", title: "Tên dân tộc", type: "string", initialValue: "Dao" }),
        defineField({
          name: "craftName",
          title: "Tên nét văn hoá",
          type: "string",
          initialValue: "Tắm lá thuốc",
        }),
        defineField({
          name: "desc",
          title: "Mô tả",
          type: "text",
          rows: 4,
          initialValue:
            "Tắm lá thuốc là nét văn hóa y học độc đáo của người Dao đỏ, sử dụng bài thuốc từ hàng chục loại thảo mộc rừng giúp thải độc, lưu thông khí huyết và phục hồi sức khỏe.",
        }),
        defineField({ name: "image", title: "Ảnh", type: "image", options: { hotspot: true } }),
      ],
    }),
    defineField({
      name: "cultureGiay",
      title: "Văn hoá người Giáy",
      type: "object",
      group: "culture",
      fields: [
        defineField({ name: "ethnicName", title: "Tên dân tộc", type: "string", initialValue: "Giáy" }),
        defineField({
          name: "craftName",
          title: "Tên nét văn hoá",
          type: "string",
          initialValue: "Giã bánh dày",
        }),
        defineField({
          name: "desc",
          title: "Mô tả",
          type: "text",
          rows: 4,
          initialValue:
            "Giã bánh dày là nét đẹp văn hóa truyền thống của người Giáy, trong đó xôi nếp nương chín nóng được giã nhuyễn trong cối đá để tạo thành khối bột mịn, dẻo thơm, dùng làm lễ vật cúng tổ tiên và thết đãi khách quý.",
        }),
        defineField({ name: "image", title: "Ảnh", type: "image", options: { hotspot: true } }),
      ],
    }),

    // Khám phá
    defineField({
      name: "exploreSectionTitle",
      title: "Tiêu đề mục",
      type: "string",
      group: "explore",
      initialValue: "Toạ độ khám phá tại Tả Van",
    }),
    defineField({
      name: "exploreSpots",
      title: "Danh sách địa điểm",
      type: "array",
      group: "explore",
      of: [{ type: "exploreSpot" }],
      initialValue: [
        {
          title: "Bãi đá cổ",
          desc: "Bãi đá cổ Sa Pa là một di tích khảo cổ cấp quốc gia của Việt Nam. Nơi đây lưu giữ gần 200 khối đá sa thạch mang nhiều hình thù, ký tự và hoa văn kỳ lạ mà cho đến nay các nhà khoa học vẫn chưa thể giải mã hoàn toàn.",
        },
        {
          title: "Cầu Mây",
          desc: "Cầu Mây bản Tả Van là cây cầu treo mộc mạc được kết bằng những sợi mây rừng dẻo dai vắt ngang dòng suối Mường Hoa.",
        },
      ],
    }),

    // Câu chuyện Lá Dao
    defineField({
      name: "storyEyebrow",
      title: "Nhãn nhỏ",
      type: "string",
      group: "story",
      initialValue: "Câu chuyện Lá Dao",
    }),
    defineField({
      name: "storyTitle",
      title: "Tiêu đề",
      type: "string",
      group: "story",
      initialValue: "Nơi mọi mệt mỏi được trút lại phía sau",
    }),
    defineField({
      name: "storyIntro",
      title: "Đoạn mở đầu",
      type: "text",
      rows: 4,
      group: "story",
      initialValue:
        "Có những nơi, chỉ cần bạn vừa chạm bước qua cánh cửa, mọi mệt mỏi đường dài bỗng chốc được trút bỏ lại phía sau. Lá Dao Spa ở bản Tả Van đối với tôi chính là một nơi như thế.",
    }),
    defineField({
      name: "storyBlocks",
      title: "Các đoạn câu chuyện",
      type: "array",
      group: "story",
      of: [{ type: "storyBlock" }],
      initialValue: [
        {
          label: "Không gian & Hương thơm",
          body: "Thứ đầu tiên chạm vào bạn không phải là một hình ảnh, mà là một làn hương. Đó là mùi thơm ấm nồng của Lá Thuốc đan xen với mùi tinh dầu thiên nhiên thoang thoảng trong không khí. Chỉ cần hít một hơi thật sâu, lồng ngực bỗng nhẹ bẫng, và tinh thần đang căng cứng sau những chuyến đi bỗng chốc được khoan khoái, dịu lại một cách kỳ lạ.",
        },
        {
          label: "Chất liệu mộc mạc",
          body: "Để tạo nên không gian này, chúng tôi chọn cách lắng nghe tiếng nói của những chất liệu nguyên bản nhất. Bạn sẽ tìm thấy ở đây sự đối thoại nhịp nhàng giữa hai chất liệu mộc mạc của Tây Bắc: những vách tre đan thủ công ấm áp, dẻo dai và những mảng vách đất nện dày dặn. Những vết nứt tự nhiên trên bề mặt vách đất không phải là khuyết điểm, mà là những nét vẽ của thời gian, giữ lại cái hồn thô mộc, nguyên sơ của đất mẹ Tả Van. Lá Dao, trong từng góc nhỏ nhất của vách đất, vách tre và khoảng trời xanh mướt ngoài kia, được dựng lên không chỉ để làm đẹp, mà để ôm ấp lấy bạn trong một trải nghiệm chữa lành trọn vẹn.",
        },
        {
          label: "Quầy bar",
          body: "Chúng tôi không cố gắng tạo ra những thức uống xa lạ. Tại quầy bar của Lá Dao, sự xa xỉ nằm ở cách chúng tôi nâng niu những điều bình dị nhất. Một ly nước ép hay sinh tố không đơn thuần là thức quả giải khát, mà là sự chắt lọc tinh túy từ những trái cây chín mọng, tươi sạch. Tách cà phê sớm mai của bạn mang hương thơm nồng nàn, cộng hưởng với vị ấm áp của sương sớm Tả Van. Nhấm nháp từng ngụm chậm rãi, lắng nghe tiếng suối rì rào phía xa, bạn sẽ nhận ra: một món đồ uống quen thuộc, khi được thưởng thức giữa đất trời yên bình này, bỗng trở nên đậm vị và đáng nhớ đến lạ kỳ.",
        },
        {
          label: "Ẩm thực",
          body: "Gian bếp của Lá Dao là nơi chúng tôi tôn vinh những sản vật thuần khiết nhất mà đất mẹ Sapa ban tặng, được chế biến bằng cả sự trân trọng đối với văn hóa ẩm thực bản địa. Chúng tôi mang đến bàn ăn của bạn những lát cá hồi, cá tầm tươi rói, thớ thịt săn chắc ngọt lịm từ dòng suối sạch trên rừng. Đó là đĩa rau dớn rừng mộc mạc, giòn sần sật được bà con bản địa lặn lội ven suối, trong rừng hái về, hay món khâu nhục béo ngậy, mềm tan như sóng sánh hương vị của những ngày hội bản. Bạn sẽ tìm thấy vị ngọt thơm nguyên bản của món cá nướng bản Đáy, được ướp đẫm hương vị cay tê dịu nhẹ của hạt mắc khén và mùi thơm nồng nàn đặc trưng của hạt dổi – những \"hạt ngọc\" của rừng già Tây Bắc.\n\nNhững thức quà kể trên mới chỉ là vài nét phác thảo mộc mạc trên bức tranh ẩm thực phong phú của gian bếp Lá Dao. Thực đơn của chúng tôi vẫn còn ẩn chứa vô vàn phong vị bất ngờ khác của núi rừng Tây Bắc theo từng mùa trong năm. Hãy đến với Lá Dao, ngồi bên bàn ăn lộng gió và để chính các giác quan của bạn tự mình khám phá trọn vẹn hành trình mỹ vị này.\n\nKhông cầu kỳ, không hoa mỹ, ẩm thực tại Lá Dao là sự kết nối chân thật nhất giữa bàn ăn và cuộc sống mộc mạc của bản làng. Ăn một bữa cơm lành trong không gian mở hướng ra thung lũng, bạn sẽ cảm nhận được trọn vẹn vị của nắng, gió và lòng hiếu khách nơi đây.",
        },
        {
          label: "Homestay",
          body: "Chúng tôi không cố tạo ra những phòng nghỉ xa hoa hay lộng lẫy. Tại homestay của Lá Dao, niềm kiêu hãnh của chúng tôi nằm ở sự giản dị, tinh tươm và lòng hiếu khách chân thành nhất của người Tả Van. Bước vào căn phòng của Lá Dao, điều đầu tiên đón nhận bạn là cảm giác nhẹ nhõm từ một không gian luôn được chăm chút sạch sẽ, ngăn nắp. Điểm xuyết trên nền gỗ tối màu là những sắc màu rực rỡ của họa tiết thổ cẩm thủ công được thêu dệt tỉ mỉ. Mỗi hoa văn nhỏ trên gối, trên rèm như một lời thì thầm về nét đẹp văn hóa bản địa duyên dáng, sưởi ấm cho không gian nhỏ giữa những đêm lạnh sương mù thung lũng. Tại đây, sự sang trọng được định nghĩa lại bằng một buổi sáng bình yên: mở cửa ra là bản làng Tả Van thu vào tầm mắt, hít căng lồng ngực bầu không khí trong lành, và cảm nhận sự ấm cúng như đang ở trong chính ngôi nhà của mình.",
        },
      ],
    }),

    // Sứ mệnh
    defineField({
      name: "missionTitle",
      title: "Tiêu đề",
      type: "string",
      group: "mission",
      initialValue: "Sứ mệnh và giá trị của Lá Dao",
    }),
    defineField({
      name: "missionBody",
      title: "Nội dung",
      description: "Để trống thì mục này sẽ không hiển thị trên web. Điền nội dung khi sẵn sàng.",
      type: "text",
      rows: 6,
      group: "mission",
    }),

    // Nhân sự
    defineField({
      name: "staffTitle",
      title: "Tiêu đề",
      type: "string",
      group: "staff",
      initialValue: "Nhân sự người bản địa",
    }),
    defineField({
      name: "staffMembers",
      title: "Danh sách nhân sự",
      description: "Để trống thì mục này sẽ không hiển thị trên web.",
      type: "array",
      group: "staff",
      of: [{ type: "staffMember" }],
    }),

    // Đánh giá
    defineField({
      name: "reviewsTitle",
      title: "Tiêu đề",
      type: "string",
      group: "reviews",
      initialValue: "Khách hàng nói gì về Lá Dao",
    }),
    defineField({
      name: "reviews",
      title: "Danh sách đánh giá",
      description:
        "Copy nội dung từ Google Reviews vào đây. Để trống thì mục này sẽ không hiển thị trên web.",
      type: "array",
      group: "reviews",
      of: [{ type: "customerReview" }],
    }),

    // Liên hệ
    defineField({
      name: "contactTitle",
      title: "Tiêu đề",
      type: "string",
      group: "contact",
      initialValue: "Liên hệ với Lá Dao",
    }),
    defineField({
      name: "address",
      title: "Địa chỉ hiển thị",
      type: "string",
      group: "contact",
      initialValue: "Tả Van, Sa Pa, Lào Cai, Việt Nam",
    }),
    defineField({
      name: "googleMapsUrl",
      title: "Link Google Maps",
      type: "url",
      group: "contact",
      initialValue: "https://maps.app.goo.gl/ni3yffp2ds2vbfKo6?g_st=ic",
    }),
    defineField({
      name: "tiktokUrl",
      title: "Link TikTok",
      type: "url",
      group: "contact",
      initialValue: "https://www.tiktok.com/@zdao.spahome.stay",
    }),
    defineField({
      name: "facebookUrl",
      title: "Link Facebook",
      type: "url",
      group: "contact",
      initialValue: "https://www.facebook.com/share/1NwTkudfi3/?mibextid=wwXIfr",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      group: "contact",
      initialValue: "Ladaospa@gmail.com",
    }),
    defineField({
      name: "website",
      title: "Website",
      type: "string",
      group: "contact",
      initialValue: "Ladaospa.com",
    }),
    defineField({
      name: "phoneNumbers",
      title: "Số điện thoại",
      type: "array",
      group: "contact",
      of: [{ type: "string" }],
      initialValue: ["0946.541.541", "0912.541.541", "0869.699.816"],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Trang Giới thiệu" }),
  },
});
