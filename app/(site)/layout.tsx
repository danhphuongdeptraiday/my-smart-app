import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileFab from "@/components/MobileFab";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16 md:pt-20">{children}</main>
      <Footer />
      <MobileFab />
    </>
  );
}
