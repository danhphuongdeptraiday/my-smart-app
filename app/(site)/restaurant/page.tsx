import Image from "next/image";
import QuoteSection from "@/components/QuoteSection";
import MenuTabs, { type MenuCategoryGroup } from "@/components/MenuTabs";
import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";
import type { Image as SanityImage } from "sanity";
import {
  FALLBACK_HERO_IMAGE_URL,
  FALLBACK_EVENTS_IMAGE_URL,
  FALLBACK_EVENTS_FEATURES,
  FALLBACK_MENU_CATEGORIES,
} from "@/data/fallbacks/restaurant";

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
