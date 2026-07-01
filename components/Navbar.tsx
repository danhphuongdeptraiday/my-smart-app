"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChatIcon, CloseIcon, MenuIcon } from "./icons";

const NAV_LINKS = [
  { href: "/", label: "Trang chủ" },
  { href: "/nha-hang", label: "Nhà hàng" },
  { href: "/spa", label: "Spa" },
  { href: "/homestay", label: "Homestay" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 z-50 w-full h-16 md:h-20 bg-surface/80 backdrop-blur-md">
        <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between px-margin-mobile md:px-margin-desktop">
          <button
            className="text-primary md:hidden"
            aria-label="Mở menu"
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon className="h-6 w-6" />
          </button>

          <Link href="/" className="font-serif text-xl md:text-2xl font-medium text-primary">
            Lá Dao
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    active
                      ? "text-sm font-bold uppercase tracking-wider text-primary border-b-2 border-primary pb-1"
                      : "text-sm uppercase tracking-wider text-on-surface-variant hover:text-secondary transition-colors"
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4 md:gap-6">
            <span className="hidden sm:inline text-xs uppercase tracking-widest text-on-surface-variant cursor-pointer hover:text-primary transition-colors">
              VN/EN
            </span>
            <ChatIcon className="h-5 w-5 text-primary cursor-pointer" />
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] bg-black/40 transition-opacity duration-300 md:hidden ${
          drawerOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setDrawerOpen(false)}
      />
      <aside
        className={`fixed left-0 top-0 z-[70] flex h-full w-4/5 max-w-sm flex-col bg-surface py-8 shadow-md transition-transform duration-300 md:hidden ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-margin-mobile mb-8">
          <h2 className="font-serif text-2xl text-primary">Lá Dao Sapa</h2>
          <button aria-label="Đóng menu" onClick={() => setDrawerOpen(false)}>
            <CloseIcon className="h-6 w-6 text-primary" />
          </button>
        </div>
        <nav className="flex flex-col gap-1">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setDrawerOpen(false)}
                className={
                  active
                    ? "mx-2 rounded-full bg-primary-container px-4 py-3 text-on-primary-container transition-transform active:translate-x-1"
                    : "mx-2 rounded-full px-4 py-3 text-on-surface-variant transition-transform hover:bg-surface-container-high active:translate-x-1"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
