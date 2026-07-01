import { CalendarIcon } from "./icons";

export default function MobileFab() {
  return (
    <button
      aria-label="Đặt lịch / Đặt phòng"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-white shadow-xl transition-transform active:scale-95 md:hidden"
    >
      <CalendarIcon className="h-6 w-6" />
    </button>
  );
}
