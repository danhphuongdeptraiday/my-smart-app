import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 w-full bg-surface-container-highest">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 px-margin-mobile py-16 md:grid-cols-3 md:px-margin-desktop md:gap-gutter">
        <div className="flex flex-col gap-4">
          <span className="font-serif text-2xl text-primary">Lá Dao</span>
          <p className="text-sm text-on-surface-variant max-w-xs">
            Bản Tả Van, Sa Pa, tỉnh Lào Cai, Việt Nam. Một thánh đường giữa núi
            rừng, tận tâm bảo tồn di sản địa phương và nuôi dưỡng sự bình an
            nội tại.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h5 className="text-xs font-semibold uppercase tracking-widest text-primary">
            Khám phá
          </h5>
          <Link href="/nha-hang" className="text-sm text-on-surface-variant hover:text-secondary transition-colors">
            Nhà hàng
          </Link>
          <Link href="/spa" className="text-sm text-on-surface-variant hover:text-secondary transition-colors">
            Spa &amp; Chăm sóc sức khỏe
          </Link>
          <Link href="/homestay" className="text-sm text-on-surface-variant hover:text-secondary transition-colors">
            Homestay
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <h5 className="text-xs font-semibold uppercase tracking-widest text-primary">
            Thông tin
          </h5>
          <a href="#" className="text-sm text-on-surface-variant hover:text-secondary transition-colors">
            Liên hệ
          </a>
          <a href="#" className="text-sm text-on-surface-variant hover:text-secondary transition-colors">
            Chính sách bảo mật
          </a>
          <a href="#" className="text-sm text-on-surface-variant hover:text-secondary transition-colors">
            Điều khoản dịch vụ
          </a>
        </div>
      </div>

      <div className="border-t border-outline/10 px-margin-mobile py-6 md:px-margin-desktop">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-2 text-xs text-on-surface-variant/60 md:flex-row">
          <span>© 2024 Lá Dao Spa &amp; Homestay. Bảo lưu mọi quyền.</span>
          <span>Được thiết kế với sự tĩnh tại. Sapa, Việt Nam.</span>
        </div>
      </div>
    </footer>
  );
}
