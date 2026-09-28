import Image from "next/image";
import QuoteSection from "@/components/QuoteSection";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";
import type { Image as SanityImage } from "sanity";
import {
  FALLBACK_HERO_IMAGE_URL,
  FALLBACK_TAL_VAN_IMAGE_URL,
  FALLBACK_BEAUTY_IMAGE_URL,
  FALLBACK_CULTURE_HMONG_IMAGE_URL,
  FALLBACK_CULTURE_DAO_IMAGE_URL,
  FALLBACK_CULTURE_GIAY_IMAGE_URL,
  FALLBACK_EXPLORE_SPOTS,
  FALLBACK_STORY_BLOCKS,
} from "@/data/fallbacks/about";

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
