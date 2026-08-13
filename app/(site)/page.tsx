import Image from "next/image";
import Link from "next/link";
import QuoteSection from "@/components/QuoteSection";
import HeroCarousel from "@/components/HeroCarousel";
import { ArrowRightIcon } from "@/components/icons";
import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";
import type { Image as SanityImage } from "sanity";

const HOME_QUERY = `*[_type == "homePage"][0]{
  heroImages,
  heroTitle,
  heroSubtitle,
  heroPrimaryButtonLabel,
  heroSecondaryButtonLabel,
  philosophyEyebrow,
  philosophyTitle,
  philosophyBody,
  philosophyQuote,
  philosophyImage,
  servicesSectionTitle,
  serviceRestaurant,
  serviceSpa,
  serviceHomestay,
  seasonsEyebrow,
  seasonsTitle,
  seasonsLinkLabel,
  seasons
}`;

type HeroImageDoc = SanityImage & { alt?: string };

type ServiceRestaurantDoc = {
  image?: SanityImage;
  eyebrow?: string;
  title?: string;
  description?: string;
  linkLabel?: string;
};

type ServiceCardDoc = {
  image?: SanityImage;
  title?: string;
  subtitle?: string;
};

type SeasonDoc = {
  title: string;
  period?: string;
  desc?: string;
  image?: SanityImage;
};

type HomePageData = {
  heroImages?: HeroImageDoc[];
  heroTitle?: string;
  heroSubtitle?: string;
  heroPrimaryButtonLabel?: string;
  heroSecondaryButtonLabel?: string;
  philosophyEyebrow?: string;
  philosophyTitle?: string;
  philosophyBody?: string;
  philosophyQuote?: string;
  philosophyImage?: SanityImage;
  servicesSectionTitle?: string;
  serviceRestaurant?: ServiceRestaurantDoc;
  serviceSpa?: ServiceCardDoc;
  serviceHomestay?: ServiceCardDoc;
  seasonsEyebrow?: string;
  seasonsTitle?: string;
  seasonsLinkLabel?: string;
  seasons?: SeasonDoc[];
};

const FALLBACK_HERO_SLIDES = [
  {
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_AXa2qOtG6MvXS0fAVQdF1hbKEqNcbOQ9RyQkmCJRZMjMxlDgajboCAXn23Z6jYVALQBwCZ-j9U_xJ0fkGpFYSbwzAdAagKefBw-vqCtSKbFdwU5oQLhlqda7AiwQT9P7Et8YXMx-dwmrjBp2uMWruG8oFuFX0HJYK7gZ6GTLFbS5vDRw7m233q9FFkURQQFlo2Okz6hpZw4UhFg7kUn2Lgy7pstbQVKy0kytlQWnDVTtpBSDhNH9cpd8qFynJimGdvHmkBGgBBBh",
    alt: "Thung lũng Mường Hoa, Sapa",
  },
];

const FALLBACK_PHILOSOPHY_IMAGE_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAwIIlXQOcwzomWrwv28OV1Lo9GRXH32zQxLoLObZJBX6hcJXYZ4QgRzIqTH4mK-6IdUmkQQvrBkWrlrADIEpMQuugKAvgCRaSUfL4CwcI4Gl3H5p67zB4wftMlHWfTVm4Y1tOU5M6uD23j113EAvSmUZrQlZQXYI7yLolNOLBoHPPthhf4hbXYCMItCC86tZDviTT_UEmAzOwXtRibwxmTRM90GkUcbNEIEie23JInV022oeATUM-MQCp_JAkh0LEGm167t29i6n4C";

const FALLBACK_RESTAURANT_IMAGE_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD1cMovSoI8Zcm5-Q8Uph3I0DBgRPCGGKBrWdakYoVPkyIswiblIKpfr1bWubgPWlZfc7G7yTiLP_yDzZSEhOe-KcNJ3guITbt0qb_RmPLfG2Qd8e3cFsm0sEZwaBva7O0BjHfID8k9oUeyLg3Kf-v8xJBJlG2Y2T2xQs3Q80rQLnwx6BgSrQ2tNg4vYkVzq5N-2r-VwIMylRIyogw_ADMoYCxPOhsYkWfqlYHQG4LZsc4q-ql-IDhiaE12gAq-L5xan2bpXc5SVxvn";

const FALLBACK_SPA_IMAGE_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBM3010d472y964awAXq3s9znlo9hOxf4QeC8uFf2MTek23GifIt5pfqRznQAKtK-b4WTr9ITgo1GekoE8hxnvHYTQRNvEBecYs0aJ5pGotJqIviBdMsvXoglirbT5CDd3uPoOJeSf9aTxveIWZe3SZM6bwCEcN7V57twc1N8u-BykqYzloDRvr7DWWMBKQxmF0FRej_Bk6x64-Rxh1C521PWLmu5QQtwjvj_17ipnGt1TxduvR-ivUdF7mrn7Cx3y_vRqphAXwfM29";

const FALLBACK_HOMESTAY_IMAGE_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDPhBnT3Xb9BizAuxJq_eM4PtDtvdFIuBDNChhqozBZK6TYXY3IK4LPAj-ukmi5OtxpxqruW29t2ojpu1sminr3YegCEL11TyIxYJNNbjt4EY3LM6oyt_Z3iYrYt2mto5Cj_23cf3JaE2C1CtYo5FVzA5vlik9wbijR4o90UtlZDf5WILQmnRv_qgrRW3mp3wxs8Pu826vS9t-ruYhdZ_cKtAVl0XX7Im1KoOxrJmLdUrFT3LYpQgh-5xrOZ_1A4h_Sko_N8Mp-hAI6";

const FALLBACK_SEASONS = [
  {
    title: "Mùa Sương Mù",
    period: "Tháng 11 – Tháng 2",
    desc: "Thời điểm hoàn hảo cho liệu pháp tắm lá thuốc Dao Đỏ huyền thoại và những câu chuyện bên bếp lửa.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCdu_HSZKexnFYypOzKuoX6BMxsgrIxmLtCDGaIqCmCBq8oLY2-mNrU03MIZW6p4HO3C5Dkw4MpETFiggOLZdyu3S3YRH8Czpe8oTMuFnhwIm_GSkAu6JyXG_jbesMMNTa5DajAv4XffpDdY6aGBRFQDkIEi-ixO4Y5-7yPHutOMc1t_xusUa_IlGWMJoQG1L07pdcK5kdjbfgUDBt2hxWrh8v8INgpUYB8zWbJlb17_4KK0uSl5Qv1tgctDn7QxQSuZ13Q5PtLYjos",
  },
  {
    title: "Mùa Xanh Tươi",
    period: "Tháng 3 – Tháng 6",
    desc: "Trải nghiệm sắc xanh rực rỡ của những thửa ruộng bậc thang khi núi rừng thức tỉnh.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDXY9Xj4POY6JGaHKm7gqWtsfHZNglN7kyNm11VsqDb1a9WxywuIjVH8kD2HtwHVAzm-uRkQCkvhWxyVSa9zZzskVrfcaazDTw59QjIEYW2YDQiR6DOCrI9NBMIqyl8rfXdCgBJalQnfX8-p7gzWbXDmuIv485yLPfG0hcBMDFuPi51C5gxxa4o3Q-94mFNCmj0S5rskUWB84bSsVcLdBLX_v2L3jJS6Gf3I8st3hgDNe-9ogAgB_TdQIaoMbyWBrCG-XcQzS_Jm1tL",
  },
  {
    title: "Mùa Vàng Thu Hoạch",
    period: "Tháng 9 – Tháng 10",
    desc: "Thung lũng chuyển mình thành một biển vàng rực rỡ. Một khung cảnh thực sự ngoạn mục.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCaAGIKdoMoMepCTGFjZnnL1frZFL9-3KxGhdYDImFlLr4FQaFL0X2R7tJuRTpecVbwOrdXrEd_m1TvbDpcPHmU1UWZH5GI-2zuIhN2iapZ0SHM-LGBizqsOtxUWihiexoXnu_WIFiIR9VqvyTGXUdVgR_kKcFmGuqlVW4j4xy-EqhpDu6mWTbgt19zkvZ5Uq21bP59uQlIY_luV6lklKg7S0raAS-CuPf0kJr77Empp42AGw9dmnSzgWmAKb3uDZWgw3uYy7w75iBq",
  },
];

export default async function HomePage() {
  const data = await client.fetch<HomePageData | null>(HOME_QUERY);
  const heroSlides = (data?.heroImages ?? []).map((image) => ({
    url: urlFor(image).width(1920).quality(80).url(),
    alt: image.alt || "Lá Dao Retreat",
  }));
  const slides = heroSlides.length > 0 ? heroSlides : FALLBACK_HERO_SLIDES;
  const heroTitle = data?.heroTitle || "Đắm mình trong màn sương";
  const heroSubtitle =
    data?.heroSubtitle ||
    "Lá Dao là một tổ hợp du lịch bao gồm Spa, Nhà hàng và Homestay tại Tả Van - Sa Pa";
  const heroPrimaryButtonLabel = data?.heroPrimaryButtonLabel || "Đặt phòng ngay";
  const heroSecondaryButtonLabel = data?.heroSecondaryButtonLabel || "Khám phá Sapa";

  const philosophyEyebrow = data?.philosophyEyebrow || "Triết lý của chúng tôi";
  const philosophyTitle = data?.philosophyTitle || "Di sản Sống của sự Chữa lành";
  const philosophyBody =
    data?.philosophyBody ||
    "Lá Dao không chỉ là một điểm đến; đó là cầu nối giữa trí tuệ cổ xưa của người Dao Đỏ và sự sang trọng hiện đại. Chúng tôi tạo ra một không gian nơi hương thơm của thảo mộc và vẻ hùng vĩ của dãy Hoàng Liên Sơn hội tụ để xoa dịu tâm hồn bạn.";
  const philosophyQuote =
    data?.philosophyQuote || "Giữa làn sương núi, chúng tôi tìm thấy sự tĩnh tại của tâm hồn.";
  const philosophyImageUrl = data?.philosophyImage
    ? urlFor(data.philosophyImage).width(1000).quality(80).url()
    : FALLBACK_PHILOSOPHY_IMAGE_URL;

  const servicesSectionTitle = data?.servicesSectionTitle || "Các Dịch vụ tại Thánh đường";

  const restaurant = data?.serviceRestaurant;
  const restaurantImageUrl = restaurant?.image
    ? urlFor(restaurant.image).width(1400).quality(80).url()
    : FALLBACK_RESTAURANT_IMAGE_URL;
  const restaurantEyebrow = restaurant?.eyebrow || "Ẩm thực & Cà phê";
  const restaurantTitle = restaurant?.title || "Nhà hàng";
  const restaurantDescription =
    restaurant?.description ||
    "Thưởng thức hương vị vùng cao nguyên bản với nguyên liệu được lấy trực tiếp từ những thửa ruộng bậc thang bản Tả Van.";
  const restaurantLinkLabel = restaurant?.linkLabel || "Xem thực đơn";

  const spa = data?.serviceSpa;
  const spaImageUrl = spa?.image
    ? urlFor(spa.image).width(800).quality(80).url()
    : FALLBACK_SPA_IMAGE_URL;
  const spaTitle = spa?.title || "Spa";
  const spaSubtitle = spa?.subtitle || "Nghi thức của nước";

  const homestay = data?.serviceHomestay;
  const homestayImageUrl = homestay?.image
    ? urlFor(homestay.image).width(800).quality(80).url()
    : FALLBACK_HOMESTAY_IMAGE_URL;
  const homestayTitle = homestay?.title || "Homestay";
  const homestaySubtitle = homestay?.subtitle || "Nghỉ ngơi giữa núi rừng";

  const seasonsEyebrow = data?.seasonsEyebrow || "Trải nghiệm các Mùa";
  const seasonsTitle = data?.seasonsTitle || "Khi Mây Ngừng Bay";
  const seasonsLinkLabel = data?.seasonsLinkLabel || "Lịch Sapa";
  const seasons =
    data?.seasons && data.seasons.length > 0
      ? data.seasons.map((season) => ({
          title: season.title,
          period: season.period,
          desc: season.desc,
          imageUrl: season.image ? urlFor(season.image).width(800).quality(80).url() : "",
        }))
      : FALLBACK_SEASONS;

  return (
    <>
      {/* Hero */}
      <section className="relative h-[85vh] md:h-[calc(100vh-5rem)] w-full overflow-hidden">
        <HeroCarousel slides={slides} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20 md:bg-black/20" />
        <div className="absolute inset-0 flex flex-col items-start justify-end px-margin-mobile pb-16 md:items-center md:justify-center md:px-margin-desktop md:pb-0 md:text-center">
          <h1 className="font-serif text-4xl md:text-6xl text-white mb-4 md:mb-6 max-w-md md:max-w-3xl">
            {heroTitle}
          </h1>
          <p className="text-white/90 text-base md:text-lg mb-8 md:mb-10 max-w-xs md:max-w-2xl">
            {heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="bg-primary text-white px-8 py-4 uppercase tracking-widest text-sm hover:bg-secondary transition-colors">
              {heroPrimaryButtonLabel}
            </button>
            <button className="border border-white text-white px-8 py-4 uppercase tracking-widest text-sm backdrop-blur-sm hover:bg-white hover:text-primary transition-colors">
              {heroSecondaryButtonLabel}
            </button>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-margin-mobile py-20 md:py-32 md:px-margin-desktop">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-gutter">
          <div>
            <span className="mb-4 block text-xs uppercase tracking-[0.2em] text-secondary">
              {philosophyEyebrow}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-primary mb-8">
              {philosophyTitle}
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-6 whitespace-pre-line">
              {philosophyBody}
            </p>
            <p className="border-l-2 border-secondary/30 pl-6 italic text-on-surface-variant text-sm">
              &ldquo;{philosophyQuote}&rdquo;
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded shadow-2xl">
            <Image
              src={philosophyImageUrl}
              alt={philosophyTitle}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services bento */}
      <section className="bg-surface-container-low px-margin-mobile py-20 md:py-32 md:px-margin-desktop">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-16 text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary">
              {servicesSectionTitle}
            </h2>
            <div className="mx-auto mt-6 h-1 w-24 bg-secondary" />
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-12 md:gap-gutter md:h-[720px]">
            <Link
              href="/restaurant"
              className="group relative col-span-2 overflow-hidden rounded aspect-video md:aspect-auto md:col-span-7 md:h-full"
            >
              <Image
                src={restaurantImageUrl}
                alt={restaurantTitle}
                fill
                sizes="(min-width: 768px) 55vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 p-6 md:p-10 text-white">
                <span className="mb-2 block text-xs uppercase tracking-widest text-secondary-container">
                  {restaurantEyebrow}
                </span>
                <h3 className="font-serif text-xl md:text-2xl mb-2 md:mb-4">{restaurantTitle}</h3>
                <p className="hidden md:block max-w-md text-white/80 mb-6 text-sm">
                  {restaurantDescription}
                </p>
                <span className="inline-flex items-center gap-2 text-sm uppercase tracking-wider">
                  {restaurantLinkLabel} <ArrowRightIcon className="h-4 w-4" />
                </span>
              </div>
            </Link>

            <div className="col-span-2 grid grid-cols-2 gap-4 md:col-span-5 md:grid-cols-1 md:grid-rows-2 md:gap-gutter">
              <Link
                href="/spa"
                className="group relative overflow-hidden rounded aspect-square md:aspect-auto"
              >
                <Image
                  src={spaImageUrl}
                  alt={spaTitle}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 transition-all duration-300 group-hover:bg-black/20" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white">
                  <h3 className="font-serif text-lg md:text-xl mb-1">{spaTitle}</h3>
                  <p className="text-[10px] md:text-xs uppercase tracking-[0.2em]">
                    {spaSubtitle}
                  </p>
                </div>
              </Link>
              <Link
                href="/homestay"
                className="group relative overflow-hidden rounded aspect-square md:aspect-auto"
              >
                <Image
                  src={homestayImageUrl}
                  alt={homestayTitle}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 transition-all duration-300 group-hover:bg-black/20" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white">
                  <h3 className="font-serif text-lg md:text-xl mb-1">{homestayTitle}</h3>
                  <p className="text-[10px] md:text-xs uppercase tracking-[0.2em]">
                    {homestaySubtitle}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal highlights */}
      <section className="px-margin-mobile py-20 md:py-32 md:px-margin-desktop">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <span className="mb-4 block text-xs uppercase tracking-[0.2em] text-secondary">
                {seasonsEyebrow}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-primary">
                {seasonsTitle}
              </h2>
            </div>
            <a href="#" className="text-sm text-on-surface-variant underline underline-offset-8 hover:text-primary transition-colors">
              {seasonsLinkLabel}
            </a>
          </div>
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
            {seasons.map((season) => (
              <div key={season.title} className="bg-surface-container-low p-6">
                <div className="relative mb-6 aspect-square overflow-hidden rounded">
                  <Image
                    src={season.imageUrl}
                    alt={season.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-all duration-700 hover:grayscale-0"
                  />
                </div>
                <h4 className="font-serif text-xl text-primary mb-2">{season.title}</h4>
                <p className="text-xs uppercase tracking-wider text-secondary mb-2">{season.period}</p>
                <p className="text-sm text-on-surface-variant">{season.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuoteSection
        variant="dark"
        quote="Lá Dao là nơi thời gian ngừng lại. Tiếng thác đổ và hương thơm thảo mộc tạo nên một giai điệu thư giãn thuần khiết."
        cite="Harper's Bazaar Wellness Guide"
      />
    </>
  );
}
