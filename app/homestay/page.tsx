import Image from "next/image";

const ROOMS = [
  {
    title: "Bungalow riêng tư",
    desc: "Nằm ở vị trí cao nhất, mang đến một giấc ngủ giữa những tầng mây với tầm nhìn ban công toàn cảnh.",
    price: "Đặt ngay — từ $120",
    span: "md:col-span-8",
    bg: "bg-primary",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0EKDcweEi5uyd0shHhgLrGZ9vQQNvzwwAeGpahYALhXYJEY7h6xGZddSjvS6lq0ShQFMyc1Up9vWXtX6CXKfq0uIaHKZBon_c3IDKDHBBeKJg8MHYpVRzjFvFTJ2DObj_V2AQhLKC6h3iu-1u9RyHImqtWFXE0oKAm5jbzFq0x-moLDDW1_2h8I5HD_sjKNvoq39ETI5rp1Jt_nD0ML7V_y9acR1tctB4RVlJjrjEIoqoNlwYsc6TxBDeTdWcP_HehZeITUYlhnXV",
  },
  {
    title: "Ban công thông nhau",
    desc: "Trải nghiệm bồn tắm thảo mộc tại phòng và các nghi thức hương liệu trị liệu.",
    price: "Đặt ngay — từ $150",
    span: "md:col-span-4",
    bg: "bg-secondary",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHm2OE9ePeNozV1znODU-1YBpWds5BS-txUGoZLZ7D2CNwkwgu8l7mHaT902gSZ4SWrAV6Hds4BtDcaeV3W8Eu-UcL_yu79CZ53kgWuTxcw8TJXxBQC4gOkJ3nAhr9ZFigUNeBRnj1vGxZ56ZTZ7B4LGAeu2R9LEA2laB-dvhwQzl3asCgWDIU06fz73MsKpqyFl74yo0VVxuAudKheGRcYq5CscdJ32-f6S-oIVdp2NrPTAlTP-M4feFKfEzTm6r8vUt8XTonUu63",
  },
  {
    title: "Giường phụ",
    desc: "Một không gian trú ẩn riêng tư được xây dựng bằng gỗ tái chế và lò sưởi bằng đá truyền thống.",
    price: "Đặt ngay — từ $180",
    span: "md:col-span-4",
    bg: "bg-tertiary",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8gP-v4z5tSrqEgdVxUX6YBnMDvua_Cvu77-wfjIu46xuLRL6LBWxOdqPZSz_-ImDiROb26qc4gPUarAOqLGweI9gzvSNC2vcLtx7UsOQhkjncsGpNh7eOwIzMO5JkSegi_Eqrclp1HTwyirvZcVMSYr_TeO80StnDMCicz-WWnzZYCF_V5bEMKLN8SEjE77sjF5cTEoI02BG19HGjk7nymcAnPOoRt6TlwqwgxT5IkZuh2E3Tj4YcaafIF4abw4FhXC3u_KMxAVAy",
  },
  {
    title: "Gói Phòng & Spa",
    desc: "Thiết kế tối giản hòa quyện cùng tầm nhìn thung lũng bao la. Hoàn hảo cho khách đi một mình.",
    price: "Đặt ngay — từ $95",
    span: "md:col-span-8",
    bg: "bg-outline",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsHIsHRHx8Al0CaeGzLioYHMYZJ5rznKmEo_MCdyVwvuloKLSJDEi51KJzmnTgqSH7ombmXeZdzjBw5ydEAXD9S4DGfREWGAufYvh8XR2Pf7ggvXyu64EiYsT_6St-YBjtBotS2uumY2WZdg0UhAQQ-qAg7FbYpquEk_Fk0kx3ZMOfzgFK6VzDB9J-hxow-qGRcesVK6AjsxBcLpIv79v7lekDMRTy864PgCjkNVZnWVIbI_u1t47Mkpc3I58xnA3K3RtbPrsFLNM3",
  },
];

const EXPERIENCES = [
  {
    title: "Trekking trải nghiệm",
    span: "col-span-2",
    kind: "photo" as const,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC49KbFTAqdrblB9Is1zfL9lhUAdJ00NSYz-o4I2lkFZFQP9iJDTDySlW-1RxGEZwU8s3ro5L-1ZscEEXOmZUCTMsMSNszJw8q30cmuSBrxG8YmDyHwYysz4oAmC631Q9P-vP6QjlMoUP1hBYYcvxAX0TyXQr5OlCIwIru96SYsu-phV-moFSoqDA94X5P8PwAzs40gzUpf6g5UK73-pHv32qULdK1CVmNzBeRqy6DipU1vMO1mKHje59pvqNvZ9FAcyQe-CBP6urJL",
  },
  {
    title: "Ẩm thực bên bếp lửa bản địa",
    kind: "tile" as const,
    tone: "bg-surface-container-high text-on-surface-variant",
  },
  {
    title: "Ban công thiền riêng tư",
    kind: "tile" as const,
    tone: "bg-primary text-on-primary",
  },
];

export default function HomestayPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDymY7PCe94ie7l5fCWA70zvKetHDpk1TihMVESsCLy4eSzlJDdIHkeaGozQcE7kfb8Ohvk-aubaDnSAurcm3ssWl0NniFNhYxdVkUUiXID6ujbXAZfhuW2kZM3jT3J0OVrybSmmEp6rASPIZBBTypTI6gHaiIz56f1H0yLTxjkBWoh8DL0YqddCCzxFZi6ARvMv1EdWTlaKprX1N2EEvNKwu8O2lUIdLReiUPtcXL9dzYTXBxYjgLVWyuQzGjdol6Tii79Pdi3Lmda"
          alt="Homestay Lá Dao giữa núi rừng Sapa"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/30" />
        <div className="absolute bottom-0 left-0 max-w-2xl p-margin-mobile pb-10 text-white md:p-margin-desktop">
          <p className="mb-4 text-xs uppercase tracking-widest opacity-90">
            Trải nghiệm sự thanh bình
          </p>
          <h1 className="font-serif text-3xl md:text-5xl mb-6 leading-tight">
            Thiên đường vùng cao đang chờ đón bạn.
          </h1>
          <button className="bg-primary px-6 md:px-8 py-3 md:py-4 text-white text-xs md:text-sm uppercase tracking-widest hover:bg-secondary transition-colors">
            Khám phá các phòng
          </button>
        </div>
      </section>

      {/* Gallery intro */}
      <section className="mx-auto max-w-[1280px] px-margin-mobile py-16 md:py-32 md:px-margin-desktop">
        <div className="grid grid-cols-1 items-center gap-gutter md:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-primary mb-6 md:mb-8">
              Được tạo ra cho sự yên tĩnh
            </h2>
            <p className="max-w-lg text-on-surface-variant leading-relaxed">
              Mỗi phòng tại Lá Dao là một cuộc đối thoại giữa truyền thống và
              sự tiện nghi hiện đại. Được xây dựng từ đá địa phương và gỗ bền
              vững, không gian của chúng tôi được thiết kế để tôn vinh khung
              cảnh ngoạn mục của dãy Hoàng Liên Sơn.
            </p>
          </div>
          <div className="relative h-64 md:h-80 bg-surface-container overflow-hidden">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAn2GSBuOvMiWQjUQMVX4TgWTQf4R4ok8tR1TVYpPOcmsXJGPETg0hHNCtd_olVOqit5AoutwXhRuxxXrMDzMkQHE-5G5r1q_x8DFoWsOAPcd8Tf4axteoVx6qOYUFgi_N0zKItOnKUvqq7tmlvuYv_2jb5faNBfsCxYJJ3ZOft4W8ziF3NbqmN-jy21nZ-0sPo2usrHfstyNBOy159tMJOFOoaXJAma5uuZZmAAXXZfpH9TaVQWJYeFzWrtTylkSWp7aOWt7F7EnZk"
              alt="Nội thất gỗ thủ công"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover opacity-80 transition-opacity duration-500 hover:opacity-100"
            />
          </div>
        </div>
      </section>

      {/* Room bento grid */}
      <section className="bg-surface-container-low py-16 md:py-32">
        <div className="mx-auto max-w-[1280px] px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-12 md:auto-rows-[400px]">
            {ROOMS.map((room) => (
              <div
                key={room.title}
                className={`group relative h-64 overflow-hidden md:h-auto ${room.bg} ${room.span}`}
              >
                <Image
                  src={room.img}
                  alt={room.title}
                  fill
                  sizes="(min-width: 768px) 60vw, 100vw"
                  className="object-cover opacity-70 transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 p-6 md:p-10 text-white">
                  <h3 className="font-serif text-xl md:text-2xl mb-2">{room.title}</h3>
                  <p className="mb-4 md:mb-6 max-w-md text-sm text-white/80">{room.desc}</p>
                  <a
                    href="#"
                    className="inline-block border-b border-white pb-1 text-xs uppercase tracking-widest hover:text-secondary transition-colors"
                  >
                    {room.price}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience features */}
      <section className="px-margin-mobile py-16 md:py-32 md:px-margin-desktop">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-10 text-center md:mb-16">
            <span className="mb-4 block text-xs uppercase tracking-widest text-secondary">
              Trải nghiệm
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-primary">
              Hơn cả một kỳ nghỉ.
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4 md:gap-gutter">
            {EXPERIENCES.map((exp) =>
              exp.kind === "photo" ? (
                <div key={exp.title} className={`relative aspect-video overflow-hidden rounded-lg ${exp.span}`}>
                  <Image
                    src={exp.img!}
                    alt={exp.title}
                    fill
                    sizes="(min-width: 768px) 66vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-primary/60 to-transparent p-6">
                    <p className="font-serif text-lg md:text-xl text-white">{exp.title}</p>
                  </div>
                </div>
              ) : (
                <div
                  key={exp.title}
                  className={`flex aspect-square flex-col justify-between rounded-lg p-6 ${exp.tone}`}
                >
                  <p className="font-medium leading-tight">{exp.title}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-primary py-24 md:py-40 text-center">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCavN0tiQrNFnq1Cdc2aMryU6K6O4bYjIVjxxztmvWkyqxLKZJSoKKny6JQAtNba6nCXug8NabP_wG-A8WydZ9PpnCRENsvH4mXr-7vFz1f9nNKS6poDjqug2d3X3oe8PGB7s-IBSJuiwtVIc9owWaOUhoHxFO5LlZvDVuMAdCfSjKMFEitYLUyse8x8MW1uQZtKXjr2AdHwkCGwTboY0DWGeehtjoAj09vm7c4wjpmev15OD8x-zQ13rkW2TRhjvOc2XwW2-PfWU6N"
            alt="Dãy núi Hoàng Liên Sơn"
            fill
            sizes="100vw"
            className="object-cover grayscale"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-2xl px-margin-mobile">
          <h2 className="font-serif text-2xl md:text-4xl text-white mb-6 md:mb-8">
            Bắt đầu hành trình đến sự tĩnh lặng
          </h2>
          <p className="mb-8 md:mb-12 text-sm md:text-base text-white/80">
            Số lượng chỗ có hạn để duy trì sự yên tĩnh cho khu nghỉ dưỡng của
            chúng tôi. Hãy đặt trước chuyến đi vùng cao của bạn ngay hôm nay.
          </p>
          <div className="flex flex-col justify-center gap-4 md:flex-row">
            <button className="bg-secondary px-8 md:px-10 py-4 md:py-5 text-xs md:text-sm uppercase tracking-widest text-white hover:bg-secondary-container transition-all">
              Kiểm tra phòng trống
            </button>
            <button className="border border-white/40 bg-transparent px-8 md:px-10 py-4 md:py-5 text-xs md:text-sm uppercase tracking-widest text-white hover:bg-white/10 transition-all">
              Xem bản đồ chi tiết
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
