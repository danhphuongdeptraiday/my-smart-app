import { MessengerIcon } from "./icons";

export default function MessengerFab() {
  return (
    <a
      href={process.env.NEXT_PUBLIC_MESSENGER_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Nhắn tin qua Messenger"
      className="fixed bottom-24 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#0084FF] text-white shadow-xl transition-transform active:scale-95 md:bottom-6"
    >
      <MessengerIcon className="h-7 w-7" />
    </a>
  );
}
