import Link from "next/link";
import { FacebookIcon, LocationIcon, MailIcon, PhoneIcon, TiktokIcon } from "./icons";
import { client } from "@/sanity/client";

const CONTACT_QUERY = `*[_type == "gioiThieuPage"][0]{
  address,
  googleMapsUrl,
  tiktokUrl,
  facebookUrl,
  email,
  phoneNumbers
}`;

type ContactData = {
  address?: string;
  googleMapsUrl?: string;
  tiktokUrl?: string;
  facebookUrl?: string;
  email?: string;
  phoneNumbers?: string[];
};

export default async function Footer() {
  const data = await client.fetch<ContactData | null>(CONTACT_QUERY);

  const address = data?.address || "Tả Van, Sa Pa, Lào Cai, Việt Nam";
  const googleMapsUrl = data?.googleMapsUrl || "https://maps.app.goo.gl/ni3yffp2ds2vbfKo6?g_st=ic";
  const tiktokUrl = data?.tiktokUrl || "https://www.tiktok.com/@zdao.spahome.stay";
  const facebookUrl = data?.facebookUrl || "https://www.facebook.com/share/1NwTkudfi3/?mibextid=wwXIfr";
  const email = data?.email || "Ladaospa@gmail.com";
  const phoneNumbers =
    data?.phoneNumbers && data.phoneNumbers.length > 0
      ? data.phoneNumbers
      : ["0946.541.541", "0912.541.541", "0869.699.816"];

  return (
    <footer className="mt-24 w-full bg-primary text-on-primary">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 px-margin-mobile py-16 sm:grid-cols-2 md:grid-cols-4 md:px-margin-desktop md:gap-gutter">
        <div className="flex flex-col gap-3">
          <span className="font-serif text-2xl">Lá Dao</span>
          <div className="flex flex-col gap-2">
            {phoneNumbers.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone.replace(/[.\s]/g, "")}`}
                className="flex items-center gap-2 text-sm text-on-primary/80 hover:text-on-primary transition-colors"
              >
                <PhoneIcon className="h-4 w-4 shrink-0" />
                {phone}
              </a>
            ))}
          </div>
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-2 text-sm text-on-primary/80 hover:text-on-primary transition-colors"
          >
            <MailIcon className="h-4 w-4 shrink-0" />
            {email}
          </a>
          <span className="flex items-center gap-2 text-sm text-on-primary/80">
            <LocationIcon className="h-4 w-4 shrink-0" />
            {address}
          </span>
        </div>

        <div className="flex flex-col gap-3">
          <h5 className="text-xs font-semibold uppercase tracking-widest text-on-primary/60">
            Khám phá
          </h5>
          <Link href="/about" className="text-sm text-on-primary/80 hover:text-on-primary transition-colors">
            Giới thiệu
          </Link>
          <Link href="/restaurant" className="text-sm text-on-primary/80 hover:text-on-primary transition-colors">
            Nhà hàng
          </Link>
          <Link href="/spa" className="text-sm text-on-primary/80 hover:text-on-primary transition-colors">
            Spa &amp; Chăm sóc sức khỏe
          </Link>
          <Link href="/homestay" className="text-sm text-on-primary/80 hover:text-on-primary transition-colors">
            Homestay
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <h5 className="text-xs font-semibold uppercase tracking-widest text-on-primary/60">
            Mạng xã hội
          </h5>
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-on-primary/80 hover:text-on-primary transition-colors"
          >
            <FacebookIcon className="h-4 w-4 shrink-0" />
            Facebook
          </a>
          <a
            href={tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-on-primary/80 hover:text-on-primary transition-colors"
          >
            <TiktokIcon className="h-4 w-4 shrink-0" />
            TikTok
          </a>
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-on-primary/80 hover:text-on-primary transition-colors"
          >
            <LocationIcon className="h-4 w-4 shrink-0" />
            Google Maps
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <h5 className="text-xs font-semibold uppercase tracking-widest text-on-primary/60">
            Chính sách
          </h5>
          <a href="#" className="text-sm text-on-primary/80 hover:text-on-primary transition-colors">
            Chính sách bảo mật
          </a>
          <a href="#" className="text-sm text-on-primary/80 hover:text-on-primary transition-colors">
            Điều khoản dịch vụ
          </a>
        </div>
      </div>

      <div className="border-t border-on-primary/10 px-margin-mobile py-6 md:px-margin-desktop">
        <div className="mx-auto max-w-[1280px] text-center text-xs text-on-primary/60">
          © {new Date().getFullYear()} Lá Dao Spa &amp; Homestay. {address}.
        </div>
      </div>
    </footer>
  );
}
