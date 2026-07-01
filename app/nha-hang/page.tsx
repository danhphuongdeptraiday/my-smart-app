import Image from "next/image";
import QuoteSection from "@/components/QuoteSection";

const MENU_ITEMS = [
  {
    label: "01 — Khai vị",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4Zg-ZoPQ7L9X0bXJM1eY_Hx8XnMVeyq0YvtG3J9UamVNF5QV3ndWSdzwONkZB3ZAhqT-ssCPNLllUqGjyNilONy1qIoU2hFjn9nhJ36DwbPbw61ml9eT0k4eT7dW2DnWZC6Y4_Xvl9fxDk1Cb_-eyeU3g9m1mioeRAZhMsY--wf0OARpiAOxKhpFwPHUdiG0rN2xubRa0yPzZudqRj7egMIL2eYGIq_fxqTenu1n04KpRvX-Fl1xUh9eBdr_qYaHjEK9FXhHAkD9_",
  },
  {
    label: "02 — Món chính đặc trưng",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZzj4UvPzVzbAPHp-ax8mgCr9dSgK0U3LNziRJ78wwY744Z0Y5i7ny_PLHdKsmPY__7r6Ozk062jBGH6uA0q7CoshaBFgY0QkktQofbM9qh16xROYP7PL6UhlVr49xwQ1ADyga9N54WNjyNYnXP6c7llA63B--KN5kozzvIf0hYIz9_Hrl5SvlOpTwn5mFfokeMhxXfrmpWmc4eyd8qQgCfICu7QGE8te3uX7Q7hqj8fv7nlcmDaXENUd3XcsOPYg2koYZ7gxSILb4",
  },
  {
    label: "03 — Tráng miệng & Trà",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVU6vETmOTaCCRwuxZ3mHAC9qw1kNYPglmvxppv-Ty_MNupll-N3ewsK9OoxzgZxD1oVTX9Jcq9NH4xUqxK93dT4eJMxEnPlMebASf9QuUsEfKOfCgC6yKIcJblZ2sotSUSMlDDrvlHQ40corQ2qa3qW1-M8BnzsWcjdHStw9lY5ysud6Y59zjAwmonSNksH1ZKDZxXi2JMabgOebX0LCxOKy5DVX0GBh45nS7riY7QdMWtNOTXeYqZJLhAVbRjvOD45rcaie6a2Zy",
  },
];

export default function NhaHangPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden flex items-center">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVc4RBHZwbItGp9JGv1q2HexSMRHQz3Pv4XzvPGtxP0N6tjimQ9zGhof06E4L-0o1FXQye34BT9GJhNFiHWeZK0Zm3JTktNdxNmR-WUcUlVaJF1iHjwJTpVujuVKRtvh--85-Cmb-93BMhS2DZtPoQ1del6GATMSW2hsCy2rnPSBX6bXS3TfcvrqosuXWqFmg1fcXJrjV2hMnf556iG1UOfr7P-ZkfbYpcNdC8WEXtCVs5D3cVVtfrY2yfOJBPNU_7J1FeqUCTWiqe"
          alt="Hương vị vùng cao, cội nguồn truyền thống"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent md:bg-gradient-to-r md:from-primary/50 md:to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-margin-mobile md:px-margin-desktop text-white">
          <h1 className="font-serif text-3xl md:text-5xl max-w-2xl mb-4 md:mb-6">
            Hương vị vùng cao, cội nguồn truyền thống
          </h1>
          <p className="max-w-md text-surface-container-low/90 mb-8 text-sm md:text-base">
            Trải nghiệm di sản ẩm thực của vùng cao Tây Bắc, nơi mỗi món ăn kể
            một câu chuyện về đất, sương mù và con người.
          </p>
          <div className="flex gap-4">
            <button className="bg-primary text-surface px-6 md:px-8 py-3 md:py-4 text-sm tracking-wide hover:bg-secondary transition-colors">
              Đặt bàn
            </button>
            <button className="border border-surface text-surface px-6 md:px-8 py-3 md:py-4 text-sm tracking-wide hover:bg-surface/10 transition-colors">
              Xem thực đơn
            </button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-[1280px] grid grid-cols-1 gap-gutter items-center px-margin-mobile py-16 md:grid-cols-2 md:py-28 md:px-margin-desktop">
        <div>
          <span className="mb-4 block text-xs uppercase tracking-[0.2em] text-secondary">
            Ẩm thực Sapa đích thực
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4 md:mb-8 leading-tight">
            Sự tiện nghi tinh tế từ trái tim Hoàng Liên Sơn
          </h2>
        </div>
        <div>
          <p className="text-on-surface-variant leading-relaxed">
            Nhà hàng tại Lá Dao không chỉ là nơi để ăn; đó là không gian nơi
            những nét mộc mạc của vùng cao gặp gỡ kỹ nghệ ẩm thực tinh tế.
            Chúng tôi nhập nguyên liệu trực tiếp từ nông dân người H&apos;mông
            và Dao Đỏ địa phương, đảm bảo từng loại thảo mộc, rau củ và thịt
            đều mang trọn vẹn tinh túy thực sự của vùng đất mờ sương.
          </p>
        </div>
      </section>

      {/* Menu */}
      <section className="bg-surface-container-low py-16 md:py-28">
        <div className="mx-auto max-w-[1280px] px-margin-mobile md:px-margin-desktop">
          <div className="mb-12 text-center md:mb-16">
            <span className="mb-4 block text-xs uppercase tracking-[0.2em] text-secondary">
              Lựa chọn hiện tại
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4">
              Thực đơn theo mùa
            </h2>
            <p className="mx-auto max-w-xl text-sm text-on-surface-variant">
              Khám phá các dịch vụ hàng ngày của chúng tôi. Chúng tôi luôn cập
              nhật thực đơn vật lý với những nông sản tươi ngon nhất từ đỉnh
              núi.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8">
            {MENU_ITEMS.map((item) => (
              <div key={item.label} className="group">
                <div className="group-hover:-translate-y-2 bg-white p-2 md:p-4 shadow-[0_10px_30px_-10px_rgba(6,27,14,0.1)] transition-transform duration-500">
                  <div className="relative aspect-[3/4] overflow-hidden bg-surface-container">
                    <Image
                      src={item.img}
                      alt={item.label}
                      fill
                      sizes="(min-width: 768px) 33vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-3 md:mt-4 flex items-center justify-between">
                    <span className="text-[10px] md:text-xs uppercase text-on-surface-variant">
                      {item.label}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events & Functions */}
      <section className="py-16 md:py-32">
        <div className="mx-auto max-w-[1280px] px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col items-center gap-gutter md:flex-row">
            <div className="relative w-full md:w-1/2 aspect-[4/5] overflow-hidden rounded-lg">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMHO1fcSLfK1T9IwQY0Dsk7ie5hjLXlJFHO9DP2MeD0TcnAFALIHWkM9mARZ7owcU0v-5RFFzJx6fiX7SYUO8NPlBTd6Vq9FoF-97QqpLL386cJ6V4GcwOCZC7tsrSpSe_oEsEK8GDc2Wysm8xsFFzdMfoQjaAJlYvMmoOK4RR2y2gtqGYEROf_h1F_Okg8avNhErw8aD82ca_uNjgaSikjcD2QKdTY3WiVW6xBbeJcEVH7DZhypfAh0TXMHzeEX0mbhUtWkv7G8v7"
                alt="Không gian tiệc và sự kiện"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-16 mt-8 md:mt-0">
              <span className="mb-4 block text-xs uppercase tracking-[0.2em] text-secondary">
                Sự kiện &amp; Tiệc
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-primary mb-6 md:mb-8 leading-tight">
                Những buổi gặp gỡ thân mật trên mây
              </h2>
              <p className="text-on-surface-variant leading-relaxed mb-8 md:mb-12">
                Dù là lễ kỷ niệm cột mốc, đám cưới nhỏ giữa núi rừng hay một
                buổi họp mặt doanh nghiệp tập trung, Lá Dao đều mang đến một
                phông nền tĩnh lặng vô song. Đội ngũ tổ chức sự kiện tận tâm
                của chúng tôi chuyên cá nhân hóa từng chi tiết.
              </p>
              <div className="space-y-6 mb-8 md:mb-12">
                <div>
                  <h4 className="font-bold text-primary">Phòng riêng</h4>
                  <p className="text-sm text-on-surface-variant">
                    Sức chứa lên tới 24 khách trong phòng kính biệt lập.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-primary">Thuê trọn địa điểm</h4>
                  <p className="text-sm text-on-surface-variant">
                    Toàn bộ không gian nhà hàng và sân hiên cho tối đa 80
                    khách.
                  </p>
                </div>
              </div>
              <button className="bg-primary text-surface px-8 md:px-10 py-4 md:py-5 text-sm tracking-wide hover:bg-secondary transition-all hover:scale-105">
                Tư vấn về sự kiện của bạn
              </button>
            </div>
          </div>
        </div>
      </section>

      <QuoteSection
        quote="Ăn tối tại Lá Dao mang lại cảm giác như được mời vào một ngôi nhà địa phương, nhưng với sự tinh tế của một nhà bếp đẳng cấp thế giới. Tầm nhìn ra thung lũng chỉ có thể so sánh với chiều sâu của hương vị."
        cite="Tạp chí The Wanderlust"
      />
    </>
  );
}
