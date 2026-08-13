import Image from "next/image";
import QuoteSection from "@/components/QuoteSection";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";
import type { Image as SanityImage } from "sanity";

const GIOI_THIEU_QUERY = `*[_type == "gioiThieuPage"][0]{
  heroImage,
  heroTitle,
  heroSubtitle,
  talVanEyebrow,
  talVanTitle,
  talVanIntro,
  talVanImage,
  beautyBody,
  beautyImage,
  cultureSectionTitle,
  cultureHmong,
  cultureDao,
  cultureGiay,
  exploreSectionTitle,
  exploreSpots,
  storyEyebrow,
  storyTitle,
  storyIntro,
  storyBlocks,
  missionTitle,
  missionBody,
  staffTitle,
  staffMembers,
  reviewsTitle,
  reviews
}`;

type CultureDoc = {
  ethnicName?: string;
  craftName?: string;
  desc?: string;
  image?: SanityImage;
};

type ExploreSpotDoc = {
  title: string;
  desc?: string;
  image?: SanityImage;
};

type StoryBlockDoc = {
  label: string;
  body: string;
  image?: SanityImage;
};

type StaffMemberDoc = {
  name: string;
  role?: string;
  bio?: string;
  image?: SanityImage;
};

type CustomerReviewDoc = {
  quote: string;
  author: string;
  rating?: number;
  googleReviewUrl?: string;
};

type GioiThieuPageData = {
  heroImage?: SanityImage;
  heroTitle?: string;
  heroSubtitle?: string;
  talVanEyebrow?: string;
  talVanTitle?: string;
  talVanIntro?: string;
  talVanImage?: SanityImage;
  beautyBody?: string;
  beautyImage?: SanityImage;
  cultureSectionTitle?: string;
  cultureHmong?: CultureDoc;
  cultureDao?: CultureDoc;
  cultureGiay?: CultureDoc;
  exploreSectionTitle?: string;
  exploreSpots?: ExploreSpotDoc[];
  storyEyebrow?: string;
  storyTitle?: string;
  storyIntro?: string;
  storyBlocks?: StoryBlockDoc[];
  missionTitle?: string;
  missionBody?: string;
  staffTitle?: string;
  staffMembers?: StaffMemberDoc[];
  reviewsTitle?: string;
  reviews?: CustomerReviewDoc[];
};

const FALLBACK_HERO_IMAGE_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD_AXa2qOtG6MvXS0fAVQdF1hbKEqNcbOQ9RyQkmCJRZMjMxlDgajboCAXn23Z6jYVALQBwCZ-j9U_xJ0fkGpFYSbwzAdAagKefBw-vqCtSKbFdwU5oQLhlqda7AiwQT9P7Et8YXMx-dwmrjBp2uMWruG8oFuFX0HJYK7gZ6GTLFbS5vDRw7m233q9FFkURQQFlo2Okz6hpZw4UhFg7kUn2Lgy7pstbQVKy0kytlQWnDVTtpBSDhNH9cpd8qFynJimGdvHmkBGgBBBh";

const FALLBACK_TAL_VAN_IMAGE_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDXY9Xj4POY6JGaHKm7gqWtsfHZNglN7kyNm11VsqDb1a9WxywuIjVH8kD2HtwHVAzm-uRkQCkvhWxyVSa9zZzskVrfcaazDTw59QjIEYW2YDQiR6DOCrI9NBMIqyl8rfXdCgBJalQnfX8-p7gzWbXDmuIv485yLPfG0hcBMDFuPi51C5gxxa4o3Q-94mFNCmj0S5rskUWB84bSsVcLdBLX_v2L3jJS6Gf3I8st3hgDNe-9ogAgB_TdQIaoMbyWBrCG-XcQzS_Jm1tL";

const FALLBACK_BEAUTY_IMAGE_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCaAGIKdoMoMepCTGFjZnnL1frZFL9-3KxGhdYDImFlLr4FQaFL0X2R7tJuRTpecVbwOrdXrEd_m1TvbDpcPHmU1UWZH5GI-2zuIhN2iapZ0SHM-LGBizqsOtxUWihiexoXnu_WIFiIR9VqvyTGXUdVgR_kKcFmGuqlVW4j4xy-EqhpDu6mWTbgt19zkvZ5Uq21bP59uQlIY_luV6lklKg7S0raAS-CuPf0kJr77Empp42AGw9dmnSzgWmAKb3uDZWgw3uYy7w75iBq";

const FALLBACK_CULTURE_HMONG_IMAGE_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC49KbFTAqdrblB9Is1zfL9lhUAdJ00NSYz-o4I2lkFZFQP9iJDTDySlW-1RxGEZwU8s3ro5L-1ZscEEXOmZUCTMsMSNszJw8q30cmuSBrxG8YmDyHwYysz4oAmC631Q9P-vP6QjlMoUP1hBYYcvxAX0TyXQr5OlCIwIru96SYsu-phV-moFSoqDA94X5P8PwAzs40gzUpf6g5UK73-pHv32qULdK1CVmNzBeRqy6DipU1vMO1mKHje59pvqNvZ9FAcyQe-CBP6urJL";

const FALLBACK_CULTURE_DAO_IMAGE_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCg3n0L56HTTXJUgeM1kTLsNtRYs_A4OADrZMPMK5trvSiUvm5cYKj6yiskw7A3JNW36FhqWwIBeYE1YBlBhLG3vjhvKIZTFUM72D6HlAZlpelxWdfEwO5juwHGi5sLIjemO0EsbVWp27sHPJkL98sKGMlKpqRI5Scv1UpL5g8xfPBR5mtNHFcOdPMFDKFOu1ggHW1HKHj_Kk34C0uE6cV3ouKWoUdJoguVmBNV1gSmySk6Jrj7OYmzVWHsVxjMEjjzpaMOHA31qdvs";

const FALLBACK_CULTURE_GIAY_IMAGE_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDR344BxstI9Y7mhQZebJ9HTJDxhSLkSVoU_OBbX_uLmHe6c2NEMkJIybdNuZ6xo2qrvrx3F2pU_UJRNKDcI5sJ2vohimT6hjEhg3xQ2yLW3ASXanfI3CFtJSFidMRuIwt_GiwLYnveo3dGRslcbWQ92XTQ_AnVdBPaN71vss2rP8L8Zwnskns5XU6qnTR3FM4ZS9yXHwn7tOf9-ZSMjCP972rZeQcpPd7M-zIS0kolyQtXY2nyHvxTWNpHQ0Ldd0eMLNUhPKuEo8rD";

const FALLBACK_EXPLORE_SPOTS: { title: string; desc: string; imageUrl: string }[] = [
  {
    title: "Bãi đá cổ",
    desc: "Bãi đá cổ Sa Pa là một di tích khảo cổ cấp quốc gia của Việt Nam. Nơi đây lưu giữ gần 200 khối đá sa thạch mang nhiều hình thù, ký tự và hoa văn kỳ lạ mà cho đến nay các nhà khoa học vẫn chưa thể giải mã hoàn toàn.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCdu_HSZKexnFYypOzKuoX6BMxsgrIxmLtCDGaIqCmCBq8oLY2-mNrU03MIZW6p4HO3C5Dkw4MpETFiggOLZdyu3S3YRH8Czpe8oTMuFnhwIm_GSkAu6JyXG_jbesMMNTa5DajAv4XffpDdY6aGBRFQDkIEi-ixO4Y5-7yPHutOMc1t_xusUa_IlGWMJoQG1L07pdcK5kdjbfgUDBt2hxWrh8v8INgpUYB8zWbJlb17_4KK0uSl5Qv1tgctDn7QxQSuZ13Q5PtLYjos",
  },
  {
    title: "Cầu Mây",
    desc: "Cầu Mây bản Tả Van là cây cầu treo mộc mạc được kết bằng những sợi mây rừng dẻo dai vắt ngang dòng suối Mường Hoa.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD_AXa2qOtG6MvXS0fAVQdF1hbKEqNcbOQ9RyQkmCJRZMjMxlDgajboCAXn23Z6jYVALQBwCZ-j9U_xJ0fkGpFYSbwzAdAagKefBw-vqCtSKbFdwU5oQLhlqda7AiwQT9P7Et8YXMx-dwmrjBp2uMWruG8oFuFX0HJYK7gZ6GTLFbS5vDRw7m233q9FFkURQQFlo2Okz6hpZw4UhFg7kUn2Lgy7pstbQVKy0kytlQWnDVTtpBSDhNH9cpd8qFynJimGdvHmkBGgBBBh",
  },
];

const FALLBACK_STORY_BLOCKS: StoryBlockDoc[] = [
  {
    label: "Không gian & Hương thơm",
    body: "Thứ đầu tiên chạm vào bạn không phải là một hình ảnh, mà là một làn hương. Đó là mùi thơm ấm nồng của Lá Thuốc đan xen với mùi tinh dầu thiên nhiên thoang thoảng trong không khí. Chỉ cần hít một hơi thật sâu, lồng ngực bỗng nhẹ bẫng, và tinh thần đang căng cứng sau những chuyến đi bỗng chốc được khoan khoái, dịu lại một cách kỳ lạ.",
  },
  {
    label: "Chất liệu mộc mạc",
    body: "Để tạo nên không gian này, chúng tôi chọn cách lắng nghe tiếng nói của những chất liệu nguyên bản nhất. Bạn sẽ tìm thấy ở đây sự đối thoại nhịp nhàng giữa hai chất liệu mộc mạc của Tây Bắc: những vách tre đan thủ công ấm áp, dẻo dai và những mảng vách đất nện dày dặn. Những vết nứt tự nhiên trên bề mặt vách đất không phải là khuyết điểm, mà là những nét vẽ của thời gian, giữ lại cái hồn thô mộc, nguyên sơ của đất mẹ Tả Van.",
  },
  {
    label: "Quầy bar",
    body: "Chúng tôi không cố gắng tạo ra những thức uống xa lạ. Tại quầy bar của Lá Dao, sự xa xỉ nằm ở cách chúng tôi nâng niu những điều bình dị nhất. Một ly nước ép hay sinh tố không đơn thuần là thức quả giải khát, mà là sự chắt lọc tinh túy từ những trái cây chín mọng, tươi sạch.",
  },
  {
    label: "Ẩm thực",
    body: "Gian bếp của Lá Dao là nơi chúng tôi tôn vinh những sản vật thuần khiết nhất mà đất mẹ Sapa ban tặng, được chế biến bằng cả sự trân trọng đối với văn hóa ẩm thực bản địa. Không cầu kỳ, không hoa mỹ, ẩm thực tại Lá Dao là sự kết nối chân thật nhất giữa bàn ăn và cuộc sống mộc mạc của bản làng.",
  },
  {
    label: "Homestay",
    body: "Chúng tôi không cố tạo ra những phòng nghỉ xa hoa hay lộng lẫy. Tại homestay của Lá Dao, niềm kiêu hãnh của chúng tôi nằm ở sự giản dị, tinh tươm và lòng hiếu khách chân thành nhất của người Tả Van.",
  },
];

export default async function GioiThieuPage() {
  const data = await client.fetch<GioiThieuPageData | null>(GIOI_THIEU_QUERY);

  const heroImageUrl = data?.heroImage
    ? urlFor(data.heroImage).width(1920).quality(80).url()
    : FALLBACK_HERO_IMAGE_URL;
  const heroTitle = data?.heroTitle || "Về Lá Dao";
  const heroSubtitle =
    data?.heroSubtitle ||
    "Câu chuyện về bản Tả Van và hành trình xây dựng nên Lá Dao — nơi văn hoá bản địa và sự chữa lành hoà quyện làm một.";

  const talVanEyebrow = data?.talVanEyebrow || "Bản Tả Van, Sa Pa";
  const talVanTitle = data?.talVanTitle || "Ngôi làng cổ giữa thung lũng Mường Hoa";
  const talVanIntro =
    data?.talVanIntro ||
    "Bản Tả Van là ngôi làng cổ xinh đẹp cách trung tâm Sa Pa khoảng 12 km, nổi tiếng với thung lũng Mường Hoa thơ mộng và những thửa ruộng bậc thang tuyệt đẹp.\n\nNơi đây là địa bàn sinh sống lâu đời của đồng bào các dân tộc, trong đó chủ yếu là người H'Mông, người Dao và Giáy, tạo nên một bức tranh giao thoa văn hóa đặc sắc.";
  const talVanImageUrl = data?.talVanImage
    ? urlFor(data.talVanImage).width(1000).quality(80).url()
    : FALLBACK_TAL_VAN_IMAGE_URL;

  const beautyBody =
    data?.beautyBody ||
    "Vẻ đẹp của bản Tả Van hiện lên như một bức tranh đầy thơ mộng của Thung Lũng Mường Hoa, nơi con người và thiên nhiên hòa quyện làm một. Đập vào mắt du khách là những thửa ruộng bậc thang uốn lượn mềm mại, thay màu áo mới theo từng mùa. Thấp thoáng giữa làn sương mờ ảo là dòng suối Mường Hoa róc rách chảy qua những hòn đá cuội. Đến với Tả Van, ta như được trút bỏ mọi muộn phiền để đắm mình vào không gian yên bình, hít hà không khí trong lành.";
  const beautyImageUrl = data?.beautyImage
    ? urlFor(data.beautyImage).width(1000).quality(80).url()
    : FALLBACK_BEAUTY_IMAGE_URL;

  const cultureSectionTitle = data?.cultureSectionTitle || "Giao thoa văn hoá ba dân tộc";
  const cultureCards = [
    {
      key: "hmong",
      ethnicName: data?.cultureHmong?.ethnicName || "H'Mông",
      craftName: data?.cultureHmong?.craftName || "Vẽ sáp ong",
      desc:
        data?.cultureHmong?.desc ||
        "Vẽ sáp ong là nghệ thuật thủ công truyền thống sử dụng sáp nóng vẽ hoa văn lên vải trước khi nhuộm chàm, tạo nên những họa tiết sắc nét mang đậm bản sắc văn hóa của người H'Mông.",
      imageUrl: data?.cultureHmong?.image
        ? urlFor(data.cultureHmong.image).width(800).quality(80).url()
        : FALLBACK_CULTURE_HMONG_IMAGE_URL,
    },
    {
      key: "dao",
      ethnicName: data?.cultureDao?.ethnicName || "Dao",
      craftName: data?.cultureDao?.craftName || "Tắm lá thuốc",
      desc:
        data?.cultureDao?.desc ||
        "Tắm lá thuốc là nét văn hóa y học độc đáo của người Dao đỏ, sử dụng bài thuốc từ hàng chục loại thảo mộc rừng giúp thải độc, lưu thông khí huyết và phục hồi sức khỏe.",
      imageUrl: data?.cultureDao?.image
        ? urlFor(data.cultureDao.image).width(800).quality(80).url()
        : FALLBACK_CULTURE_DAO_IMAGE_URL,
    },
    {
      key: "giay",
      ethnicName: data?.cultureGiay?.ethnicName || "Giáy",
      craftName: data?.cultureGiay?.craftName || "Giã bánh dày",
      desc:
        data?.cultureGiay?.desc ||
        "Giã bánh dày là nét đẹp văn hóa truyền thống của người Giáy, trong đó xôi nếp nương chín nóng được giã nhuyễn trong cối đá để tạo thành khối bột mịn, dẻo thơm, dùng làm lễ vật cúng tổ tiên và thết đãi khách quý.",
      imageUrl: data?.cultureGiay?.image
        ? urlFor(data.cultureGiay.image).width(800).quality(80).url()
        : FALLBACK_CULTURE_GIAY_IMAGE_URL,
    },
  ];

  const exploreSectionTitle = data?.exploreSectionTitle || "Toạ độ khám phá tại Tả Van";
  const exploreSpots =
    data?.exploreSpots && data.exploreSpots.length > 0
      ? data.exploreSpots.map((spot) => ({
          title: spot.title,
          desc: spot.desc,
          imageUrl: spot.image ? urlFor(spot.image).width(900).quality(80).url() : "",
        }))
      : FALLBACK_EXPLORE_SPOTS;

  const storyEyebrow = data?.storyEyebrow || "Câu chuyện Lá Dao";
  const storyTitle = data?.storyTitle || "Nơi mọi mệt mỏi được trút lại phía sau";
  const storyIntro =
    data?.storyIntro ||
    "Có những nơi, chỉ cần bạn vừa chạm bước qua cánh cửa, mọi mệt mỏi đường dài bỗng chốc được trút bỏ lại phía sau. Lá Dao Spa ở bản Tả Van đối với tôi chính là một nơi như thế.";
  const storyBlocks =
    data?.storyBlocks && data.storyBlocks.length > 0 ? data.storyBlocks : FALLBACK_STORY_BLOCKS;

  const missionTitle = data?.missionTitle || "Sứ mệnh và giá trị của Lá Dao";
  const missionBody = data?.missionBody;

  const staffTitle = data?.staffTitle || "Nhân sự người bản địa";
  const staffMembers = data?.staffMembers ?? [];

  const reviewsTitle = data?.reviewsTitle || "Khách hàng nói gì về Lá Dao";
  const reviews = data?.reviews ?? [];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden flex items-center justify-center text-center">
        <Image
          src={heroImageUrl}
          alt={heroTitle}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 mx-auto max-w-2xl px-margin-mobile text-white md:px-margin-desktop">
          <h1 className="font-serif text-4xl md:text-6xl mb-4 md:mb-6">{heroTitle}</h1>
          <p className="text-white/90 text-base md:text-lg">{heroSubtitle}</p>
        </div>
      </section>

      {/* Tả Van intro */}
      <section className="mx-auto max-w-[1280px] grid grid-cols-1 gap-gutter items-center px-margin-mobile py-16 md:grid-cols-2 md:py-28 md:px-margin-desktop">
        <div>
          <span className="mb-4 block text-xs uppercase tracking-[0.2em] text-secondary">
            {talVanEyebrow}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-primary mb-6 leading-tight">
            {talVanTitle}
          </h2>
          <p className="text-on-surface-variant leading-relaxed whitespace-pre-line">
            {talVanIntro}
          </p>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded shadow-2xl">
          <Image
            src={talVanImageUrl}
            alt={talVanTitle}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Beauty of Tả Van */}
      <section className="bg-surface-container-low px-margin-mobile py-16 md:py-28 md:px-margin-desktop">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-gutter items-center md:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded shadow-2xl md:order-2">
            <Image
              src={beautyImageUrl}
              alt="Vẻ đẹp bản Tả Van"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <p className="font-serif text-xl md:text-2xl text-primary leading-relaxed md:order-1">
            {beautyBody}
          </p>
        </div>
      </section>

      {/* Culture */}
      <section className="px-margin-mobile py-16 md:py-28 md:px-margin-desktop">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-12 text-center md:mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-primary">{cultureSectionTitle}</h2>
            <div className="mx-auto mt-6 h-1 w-24 bg-secondary" />
          </div>
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
            {cultureCards.map((card) => (
              <div key={card.key} className="bg-surface-container-low">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={card.imageUrl}
                    alt={`${card.craftName} — người ${card.ethnicName}`}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="mb-2 block text-xs uppercase tracking-widest text-secondary">
                    Người {card.ethnicName}
                  </span>
                  <h3 className="font-serif text-xl text-primary mb-3">{card.craftName}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore spots */}
      <section className="bg-surface-container-low px-margin-mobile py-16 md:py-28 md:px-margin-desktop">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-12 text-center md:mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-primary">{exploreSectionTitle}</h2>
          </div>
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-2">
            {exploreSpots.map((spot) => (
              <div key={spot.title} className="group relative aspect-[4/3] overflow-hidden rounded">
                <Image
                  src={spot.imageUrl}
                  alt={spot.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 p-6 md:p-8 text-white">
                  <h3 className="font-serif text-xl md:text-2xl mb-2">{spot.title}</h3>
                  {spot.desc && (
                    <p className="max-w-md text-sm text-white/85 leading-relaxed">{spot.desc}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lá Dao story */}
      <section className="px-margin-mobile py-16 md:py-28 md:px-margin-desktop">
        <div className="mx-auto max-w-[900px]">
          <div className="mb-12 text-center md:mb-16">
            <span className="mb-4 block text-xs uppercase tracking-[0.2em] text-secondary">
              {storyEyebrow}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-primary mb-6">{storyTitle}</h2>
            <p className="font-serif text-lg md:text-xl italic text-on-surface-variant leading-relaxed">
              {storyIntro}
            </p>
          </div>

          <div className="space-y-12 md:space-y-16">
            {storyBlocks.map((block) => {
              const imageUrl = block.image ? urlFor(block.image).width(900).quality(80).url() : null;
              return (
                <div
                  key={block.label}
                  className={imageUrl ? "grid grid-cols-1 gap-gutter items-center md:grid-cols-2" : ""}
                >
                  {imageUrl && (
                    <div className="relative aspect-[4/3] overflow-hidden rounded">
                      <Image
                        src={imageUrl}
                        alt={block.label}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <h4 className="mb-3 text-xs uppercase tracking-widest text-secondary">
                      {block.label}
                    </h4>
                    <p className="text-on-surface-variant leading-relaxed whitespace-pre-line">
                      {block.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission — only shown once filled in via Sanity */}
      {missionBody && (
        <QuoteSection variant="dark" quote={missionBody} cite={missionTitle} />
      )}

      {/* Staff — only shown once added via Sanity */}
      {staffMembers.length > 0 && (
        <section className="px-margin-mobile py-16 md:py-28 md:px-margin-desktop">
          <div className="mx-auto max-w-[1280px]">
            <div className="mb-12 text-center md:mb-16">
              <h2 className="font-serif text-3xl md:text-4xl text-primary">{staffTitle}</h2>
            </div>
            <div className="grid grid-cols-1 gap-gutter sm:grid-cols-2 md:grid-cols-4">
              {staffMembers.map((member) => (
                <div key={member.name} className="text-center">
                  <div className="relative mx-auto mb-4 aspect-square w-32 overflow-hidden rounded-full md:w-40">
                    {member.image ? (
                      <Image
                        src={urlFor(member.image).width(400).quality(80).url()}
                        alt={member.name}
                        fill
                        sizes="160px"
                        className="object-cover"
                      />
                    ) : (
                      <div className="h-full w-full bg-surface-container-high" />
                    )}
                  </div>
                  <h4 className="font-serif text-lg text-primary">{member.name}</h4>
                  {member.role && (
                    <p className="mb-2 text-xs uppercase tracking-widest text-secondary">
                      {member.role}
                    </p>
                  )}
                  {member.bio && (
                    <p className="text-sm text-on-surface-variant leading-relaxed">{member.bio}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Reviews — only shown once added via Sanity */}
      {reviews.length > 0 && (
        <section className="bg-surface-container-low px-margin-mobile py-16 md:py-28 md:px-margin-desktop">
          <div className="mx-auto max-w-[1280px]">
            <div className="mb-12 text-center md:mb-16">
              <h2 className="font-serif text-3xl md:text-4xl text-primary">{reviewsTitle}</h2>
            </div>
            <ReviewsCarousel reviews={reviews} />
          </div>
        </section>
      )}
    </>
  );
}
