import Image from "next/image";
import Link from "next/link";
import QuoteSection from "@/components/QuoteSection";
import { ArrowRightIcon } from "@/components/icons";

const SEASONS = [
  {
    title: "Mùa Sương Mù",
    period: "Tháng 11 – Tháng 2",
    desc: "Thời điểm hoàn hảo cho liệu pháp tắm lá thuốc Dao Đỏ huyền thoại và những câu chuyện bên bếp lửa.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdu_HSZKexnFYypOzKuoX6BMxsgrIxmLtCDGaIqCmCBq8oLY2-mNrU03MIZW6p4HO3C5Dkw4MpETFiggOLZdyu3S3YRH8Czpe8oTMuFnhwIm_GSkAu6JyXG_jbesMMNTa5DajAv4XffpDdY6aGBRFQDkIEi-ixO4Y5-7yPHutOMc1t_xusUa_IlGWMJoQG1L07pdcK5kdjbfgUDBt2hxWrh8v8INgpUYB8zWbJlb17_4KK0uSl5Qv1tgctDn7QxQSuZ13Q5PtLYjos",
  },
  {
    title: "Mùa Xanh Tươi",
    period: "Tháng 3 – Tháng 6",
    desc: "Trải nghiệm sắc xanh rực rỡ của những thửa ruộng bậc thang khi núi rừng thức tỉnh.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXY9Xj4POY6JGaHKm7gqWtsfHZNglN7kyNm11VsqDb1a9WxywuIjVH8kD2HtwHVAzm-uRkQCkvhWxyVSa9zZzskVrfcaazDTw59QjIEYW2YDQiR6DOCrI9NBMIqyl8rfXdCgBJalQnfX8-p7gzWbXDmuIv485yLPfG0hcBMDFuPi51C5gxxa4o3Q-94mFNCmj0S5rskUWB84bSsVcLdBLX_v2L3jJS6Gf3I8st3hgDNe-9ogAgB_TdQIaoMbyWBrCG-XcQzS_Jm1tL",
  },
  {
    title: "Mùa Vàng Thu Hoạch",
    period: "Tháng 9 – Tháng 10",
    desc: "Thung lũng chuyển mình thành một biển vàng rực rỡ. Một khung cảnh thực sự ngoạn mục.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaAGIKdoMoMepCTGFjZnnL1frZFL9-3KxGhdYDImFlLr4FQaFL0X2R7tJuRTpecVbwOrdXrEd_m1TvbDpcPHmU1UWZH5GI-2zuIhN2iapZ0SHM-LGBizqsOtxUWihiexoXnu_WIFiIR9VqvyTGXUdVgR_kKcFmGuqlVW4j4xy-EqhpDu6mWTbgt19zkvZ5Uq21bP59uQlIY_luV6lklKg7S0raAS-CuPf0kJr77Empp42AGw9dmnSzgWmAKb3uDZWgw3uYy7w75iBq",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[85vh] md:h-[calc(100vh-5rem)] w-full overflow-hidden">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_AXa2qOtG6MvXS0fAVQdF1hbKEqNcbOQ9RyQkmCJRZMjMxlDgajboCAXn23Z6jYVALQBwCZ-j9U_xJ0fkGpFYSbwzAdAagKefBw-vqCtSKbFdwU5oQLhlqda7AiwQT9P7Et8YXMx-dwmrjBp2uMWruG8oFuFX0HJYK7gZ6GTLFbS5vDRw7m233q9FFkURQQFlo2Okz6hpZw4UhFg7kUn2Lgy7pstbQVKy0kytlQWnDVTtpBSDhNH9cpd8qFynJimGdvHmkBGgBBBh"
          alt="Thung lũng Mường Hoa, Sapa"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20 md:bg-black/20" />
        <div className="absolute inset-0 flex flex-col items-start justify-end px-margin-mobile pb-16 md:items-center md:justify-center md:px-margin-desktop md:pb-0 md:text-center">
          <h1 className="font-serif text-4xl md:text-6xl text-white mb-4 md:mb-6 max-w-md md:max-w-3xl">
            Đắm mình trong màn sương
          </h1>
          <p className="text-white/90 text-base md:text-lg mb-8 md:mb-10 max-w-xs md:max-w-2xl">
            Một thiên đường bình yên nép mình giữa những thửa ruộng bậc thang
            của Sapa. Trải nghiệm nhịp sống chậm rãi của vùng cao qua các nghi
            thức chữa lành và lòng hiếu khách truyền thống.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="bg-primary text-white px-8 py-4 uppercase tracking-widest text-sm hover:bg-secondary transition-colors">
              Đặt phòng ngay
            </button>
            <button className="border border-white text-white px-8 py-4 uppercase tracking-widest text-sm backdrop-blur-sm hover:bg-white hover:text-primary transition-colors">
              Khám phá Sapa
            </button>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-margin-mobile py-20 md:py-32 md:px-margin-desktop">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-gutter">
          <div>
            <span className="mb-4 block text-xs uppercase tracking-[0.2em] text-secondary">
              Triết lý của chúng tôi
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-primary mb-8">
              Di sản Sống của sự Chữa lành
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-6">
              Lá Dao không chỉ là một điểm đến; đó là cầu nối giữa trí tuệ cổ
              xưa của người Dao Đỏ và sự sang trọng hiện đại. Chúng tôi tạo ra
              một không gian nơi hương thơm của thảo mộc và vẻ hùng vĩ của dãy
              Hoàng Liên Sơn hội tụ để xoa dịu tâm hồn bạn.
            </p>
            <p className="border-l-2 border-secondary/30 pl-6 italic text-on-surface-variant text-sm">
              &ldquo;Giữa làn sương núi, chúng tôi tìm thấy sự tĩnh tại của tâm
              hồn.&rdquo;
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded shadow-2xl">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwIIlXQOcwzomWrwv28OV1Lo9GRXH32zQxLoLObZJBX6hcJXYZ4QgRzIqTH4mK-6IdUmkQQvrBkWrlrADIEpMQuugKAvgCRaSUfL4CwcI4Gl3H5p67zB4wftMlHWfTVm4Y1tOU5M6uD23j113EAvSmUZrQlZQXYI7yLolNOLBoHPPthhf4hbXYCMItCC86tZDviTT_UEmAzOwXtRibwxmTRM90GkUcbNEIEie23JInV022oeATUM-MQCp_JAkh0LEGm167t29i6n4C"
              alt="Thảo mộc truyền thống người Dao Đỏ"
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
              Các Dịch vụ tại Thánh đường
            </h2>
            <div className="mx-auto mt-6 h-1 w-24 bg-secondary" />
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-12 md:gap-gutter md:h-[720px]">
            <Link
              href="/nha-hang"
              className="group relative col-span-2 overflow-hidden rounded aspect-video md:aspect-auto md:col-span-7 md:h-full"
            >
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1cMovSoI8Zcm5-Q8Uph3I0DBgRPCGGKBrWdakYoVPkyIswiblIKpfr1bWubgPWlZfc7G7yTiLP_yDzZSEhOe-KcNJ3guITbt0qb_RmPLfG2Qd8e3cFsm0sEZwaBva7O0BjHfID8k9oUeyLg3Kf-v8xJBJlG2Y2T2xQs3Q80rQLnwx6BgSrQ2tNg4vYkVzq5N-2r-VwIMylRIyogw_ADMoYCxPOhsYkWfqlYHQG4LZsc4q-ql-IDhiaE12gAq-L5xan2bpXc5SVxvn"
                alt="Nhà hàng Lá Dao"
                fill
                sizes="(min-width: 768px) 55vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 p-6 md:p-10 text-white">
                <span className="mb-2 block text-xs uppercase tracking-widest text-secondary-container">
                  Ẩm thực &amp; Cà phê
                </span>
                <h3 className="font-serif text-xl md:text-2xl mb-2 md:mb-4">Nhà hàng</h3>
                <p className="hidden md:block max-w-md text-white/80 mb-6 text-sm">
                  Thưởng thức hương vị vùng cao nguyên bản với nguyên liệu được
                  lấy trực tiếp từ những thửa ruộng bậc thang bản Tả Van.
                </p>
                <span className="inline-flex items-center gap-2 text-sm uppercase tracking-wider">
                  Xem thực đơn <ArrowRightIcon className="h-4 w-4" />
                </span>
              </div>
            </Link>

            <div className="col-span-2 grid grid-cols-2 gap-4 md:col-span-5 md:grid-cols-1 md:grid-rows-2 md:gap-gutter">
              <Link
                href="/spa"
                className="group relative overflow-hidden rounded aspect-square md:aspect-auto"
              >
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBM3010d472y964awAXq3s9znlo9hOxf4QeC8uFf2MTek23GifIt5pfqRznQAKtK-b4WTr9ITgo1GekoE8hxnvHYTQRNvEBecYs0aJ5pGotJqIviBdMsvXoglirbT5CDd3uPoOJeSf9aTxveIWZe3SZM6bwCEcN7V57twc1N8u-BykqYzloDRvr7DWWMBKQxmF0FRej_Bk6x64-Rxh1C521PWLmu5QQtwjvj_17ipnGt1TxduvR-ivUdF7mrn7Cx3y_vRqphAXwfM29"
                  alt="Spa Lá Dao"
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 transition-all duration-300 group-hover:bg-black/20" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white">
                  <h3 className="font-serif text-lg md:text-xl mb-1">Spa</h3>
                  <p className="text-[10px] md:text-xs uppercase tracking-[0.2em]">
                    Nghi thức của nước
                  </p>
                </div>
              </Link>
              <Link
                href="/homestay"
                className="group relative overflow-hidden rounded aspect-square md:aspect-auto"
              >
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPhBnT3Xb9BizAuxJq_eM4PtDtvdFIuBDNChhqozBZK6TYXY3IK4LPAj-ukmi5OtxpxqruW29t2ojpu1sminr3YegCEL11TyIxYJNNbjt4EY3LM6oyt_Z3iYrYt2mto5Cj_23cf3JaE2C1CtYo5FVzA5vlik9wbijR4o90UtlZDf5WILQmnRv_qgrRW3mp3wxs8Pu826vS9t-ruYhdZ_cKtAVl0XX7Im1KoOxrJmLdUrFT3LYpQgh-5xrOZ_1A4h_Sko_N8Mp-hAI6"
                  alt="Homestay Lá Dao"
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 transition-all duration-300 group-hover:bg-black/20" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white">
                  <h3 className="font-serif text-lg md:text-xl mb-1">Homestay</h3>
                  <p className="text-[10px] md:text-xs uppercase tracking-[0.2em]">
                    Nghỉ ngơi giữa núi rừng
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
                Trải nghiệm các Mùa
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-primary">
                Khi Mây Ngừng Bay
              </h2>
            </div>
            <a href="#" className="text-sm text-on-surface-variant underline underline-offset-8 hover:text-primary transition-colors">
              Lịch Sapa
            </a>
          </div>
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
            {SEASONS.map((season) => (
              <div key={season.title} className="bg-surface-container-low p-6">
                <div className="relative mb-6 aspect-square overflow-hidden rounded">
                  <Image
                    src={season.img}
                    alt={season.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
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
