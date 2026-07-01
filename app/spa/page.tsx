import Image from "next/image";
import QuoteSection from "@/components/QuoteSection";

const TAGS = ["Thảo mộc hữu cơ", "Dẫn dắt bởi truyền thống", "Nguồn gốc công bằng"];

const SERVICES = [
  {
    title: "Tắm lá thuốc Dao Đỏ truyền thống",
    price: "$45 / 60 phút",
    desc: "Được thu hái từ những đỉnh núi cao của Hoàng Liên Sơn, bài thuốc đặc trưng của chúng tôi bao gồm hơn 20 loại dược liệu giúp giải độc và phục hồi tinh thần.",
    tags: ["Thải độc", "Lưu thông"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCg3n0L56HTTXJUgeM1kTLsNtRYs_A4OADrZMPMK5trvSiUvm5cYKj6yiskw7A3JNW36FhqWwIBeYE1YBlBhLG3vjhvKIZTFUM72D6HlAZlpelxWdfEwO5juwHGi5sLIjemO0EsbVWp27sHPJkL98sKGMlKpqRI5Scv1UpL5g8xfPBR5mtNHFcOdPMFDKFOu1ggHW1HKHj_Kk34C0uE6cV3ouKWoUdJoguVmBNV1gSmySk6Jrj7OYmzVWHsVxjMEjjzpaMOHA31qdvs",
  },
  {
    title: "Liệu pháp đá núi",
    price: "$60 / 90 phút",
    desc: "Đá núi lửa được làm nóng đặt dọc theo cột sống để giải phóng căng thẳng sâu, kết hợp với massage bằng dầu thảo mộc.",
    tags: ["Mô sâu", "Làm ấm"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDwM-ePisRapvEIH6z6B8CPmWxNRxnuRAn8UTlJ55fGtx7huRS2gldhZaCOBOZTISy_OKW4tL0ZHQBcg1rc5Ot2NH-6KNFXAHTz8uv2XuNaCxuTIebFTAVHdZZVQdapQNN0vTuSm7XV9oc6IkJ-y9gX_z0rSb3Isp8HK5fqFhy6hancHMzHxoBNLffApp-TXUiWb-2NaSoR9bYEXP79rWlYuQYcWk18_2W72-sEVGPxgs1muIPpCJzu1w52U3-79Ftf0lVqVOdOwAt",
  },
  {
    title: "Chăm sóc mặt Tre & Gạo",
    price: "$35 / 45 phút",
    desc: "Tẩy tế bào chết nhẹ nhàng bằng gạo vùng cao xay nhuyễn, sau đó đắp mặt nạ tre làm mát để phục hồi độ sáng cho làn da.",
    tags: ["Cấp ẩm", "Hữu cơ"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDR344BxstI9Y7mhQZebJ9HTJDxhSLkSVoU_OBbX_uLmHe6c2NEMkJIybdNuZ6xo2qrvrx3F2pU_UJRNKDcI5sJ2vohimT6hjEhg3xQ2yLW3ASXanfI3CFtJSFidMRuIwt_GiwLYnveo3dGRslcbWQ92XTQ_AnVdBPaN71vss2rP8L8Zwnskns5XU6qnTR3FM4ZS9yXHwn7tOf9-ZSMjCP972rZeQcpPd7M-zIS0kolyQtXY2nyHvxTWNpHQ0Ldd0eMLNUhPKuEo8rD",
  },
];

const PRICE_LIST = [
  {
    category: "Các liệu pháp tắm",
    items: [
      {
        name: "Tắm lá thuốc Dao Đỏ truyền thống",
        desc: "30 phút thải độc sâu trong bồn gỗ pơ-mu",
        price: "350,000 VND",
      },
      {
        name: "Phòng xông hơi & Sauna",
        desc: "Xông hơi tinh chất thảo mộc giúp lưu thông hô hấp",
        price: "200,000 VND",
      },
    ],
  },
  {
    category: "Liệu pháp toàn thân",
    items: [
      {
        name: "Massage đá nóng vùng cao",
        desc: "60 phút trị liệu cơ bắp với đá nóng nhiệt trị liệu",
        price: "650,000 VND",
      },
      {
        name: "Nghi thức tre bốn tay",
        desc: "90 phút massage đồng bộ sử dụng thanh tre truyền thống",
        price: "1,200,000 VND",
      },
      {
        name: "Ủ toàn thân gừng & mật ong",
        desc: "Tẩy tế bào chết làm ấm cơ thể và dưỡng ẩm sâu",
        price: "550,000 VND",
      },
    ],
  },
];

export default function SpaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[70vh] md:h-[85vh] w-full items-center justify-center overflow-hidden">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVjrL3pFkt7ORUJdqFLjk3BZxAz6l_5iSF0-ZIyJ85181Hucr9FGI6I5wp2Ry6CQ4ML4VESqxwloWuzkpjYRcWaQia32I-ZT09J0tv4Jbaz6nncXHk-aC4TXXOdON9B1xI70iDJk7sZVlZ_kKiIo81py9YvW3qfnfRNhWDPYVLbsNL77yrDPA46byZTRPpX4wPSRz4r_vICfAsvheLXpFC8bz21-smDKXbP7OqxZUVrZsp8FkNyWRZ8T3FhtGrcDtnxzHm_kxgv3w4"
          alt="Không gian spa Lá Dao"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/50" />
        <div className="relative z-10 px-margin-mobile text-center text-white">
          <h1 className="font-serif text-4xl md:text-6xl mb-4 text-surface">
            Sự tĩnh lặng linh thiêng
          </h1>
          <p className="mx-auto max-w-2xl text-sm md:text-lg opacity-90">
            Trải nghiệm trí tuệ chữa lành cổ xưa của người Dao Đỏ qua các liệu
            pháp thảo dược đặc trưng và nghi lễ vùng núi.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-[1280px] px-margin-mobile py-16 md:py-28 md:px-margin-desktop">
        <div className="grid grid-cols-1 items-center gap-gutter md:grid-cols-2">
          <div>
            <span className="mb-4 block text-xs uppercase tracking-[0.2em] text-secondary">
              Triết lý của chúng tôi
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-primary mb-6 md:mb-8">
              Tiệm thuốc vùng cao
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-6">
              Tại Lá Dao, chúng tôi tin rằng sự khỏe mạnh thực sự là trở về với
              thiên nhiên. Các liệu pháp của chúng tôi được xây dựng dựa trên
              kiến thức hàng thế kỷ của người Dao Đỏ, sử dụng các loại thảo
              mộc thu hái thủ công từ dãy Hoàng Liên Sơn.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              {TAGS.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-surface-container px-4 py-2 text-xs uppercase text-on-surface-variant"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="relative h-[320px] md:h-[500px]">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8-6ORbQXFkT3VWAJcGbZAdvotaOTcTooTSphI5wqDm_iatecskWtKZlM51mwrtw54fbFSQu1AhZq4No5oM6xwQri-ividA451Hcexe5pq6joy0haIqa1XBCrvAz7C_TW_7SrYAk5B9n6K7lYHOHlNxE5Qh8aYnp8UtFR20-VJdz5rjh2sh7AKbxogQILfL7odHVrjZsyay4AquivgQxmCxvylDdON8laL7kQ8P2gF-1IzZgHkxAynNRxKHR4Ryxbqd4_JLGKkNiMM"
              alt="Thảo mộc Sapa"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-surface-container-low py-16 md:py-32">
        <div className="mx-auto max-w-[1280px] px-margin-mobile md:px-margin-desktop">
          <div className="mb-12 text-center md:mb-20">
            <h2 className="font-serif text-3xl md:text-4xl text-primary">
              Phương pháp chữa lành
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 bg-secondary" />
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {SERVICES.map((service) => (
              <div key={service.title} className="group">
                <div className="relative mb-4 aspect-[4/5] overflow-hidden rounded-lg">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-4 left-4 rounded-full bg-surface/90 px-4 py-2 backdrop-blur-sm">
                    <span className="text-xs text-secondary">{service.price}</span>
                  </div>
                </div>
                <h3 className="font-serif text-xl text-primary">{service.title}</h3>
                <p className="mt-2 text-sm text-on-surface-variant">{service.desc}</p>
                <div className="mt-4 flex gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-surface-container px-3 py-1 text-xs text-on-surface-variant"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price list */}
      <section className="mx-auto max-w-[1000px] px-margin-mobile py-16 md:py-32 md:px-margin-desktop">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-primary mb-2">
            Thực đơn của sự thanh thản
          </h2>
          <p className="text-xs uppercase tracking-[0.2em] text-on-surface-variant">
            Các liệu pháp &amp; chi phí
          </p>
        </div>
        <div className="space-y-12">
          {PRICE_LIST.map((category) => (
            <div key={category.category}>
              <h4 className="font-serif text-2xl text-primary border-b border-outline-variant pb-4 mb-8">
                {category.category}
              </h4>
              <div className="space-y-6">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between sm:gap-4"
                  >
                    <div className="max-w-2xl">
                      <span className="text-on-surface">{item.name}</span>
                      <p className="text-sm italic text-on-surface-variant opacity-70">{item.desc}</p>
                    </div>
                    <div className="hidden flex-grow border-b border-dotted border-outline-variant sm:block" />
                    <span className="whitespace-nowrap text-primary">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center md:mt-20">
          <button className="bg-primary text-white px-10 md:px-12 py-4 text-xs md:text-sm uppercase tracking-[0.2em] hover:bg-secondary transition-colors duration-500">
            Đặt lịch trị liệu
          </button>
        </div>
      </section>

      <QuoteSection quote="Trong sự tĩnh lặng của núi rừng, chúng ta tìm thấy liều thuốc cho tâm hồn." />
    </>
  );
}
