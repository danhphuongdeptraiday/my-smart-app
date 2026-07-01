# Lá Dao — Design Reference

Sub-brand "Lá Dao" (Sapa Sanctuary) trích từ Stitch project **A Quỳnh Restaurant Website**
(`projects/13070633838382638920`). Tài liệu này chỉ tổng hợp các screen có tên bắt đầu bằng
`Lá Dao -`; các screen khác của project (Trang chủ - A Quỳnh, Giới thiệu, Thực đơn, Concept 3 Tầng)
dùng design system khác và không thuộc phạm vi `my-smart-app`.

## Design system: Natural Sanctuary

Nguồn: Stitch design system `assets/0256672214b8436089e1057729cc2e86` (project trên).

- **Chủ đề:** "Natural Sanctuary" — lấy cảm hứng từ sương mù Sapa, sự tĩnh lặng của núi rừng.
  Cân bằng giữa *Mountain Luxury* và *Traditional Heritage*, thiên về Minimalism + Tactile
  Modernism, nhiều khoảng trắng, ảnh chụp chất lượng cao, ít bão hòa màu.
- **Color mode mặc định:** Light.

### Bảng màu

| Token | Hex | Vai trò |
|---|---|---|
| `primary` (Forest Green) | `#061b0e` | Nút chính, cấu trúc mạnh |
| `primary-container` | `#1b3022` | Nền nhấn của primary |
| `secondary` (Terracotta) | `#944925` | Accent ấm, chi tiết heritage |
| `secondary-container` | `#fe9e72` | Nền nhấn của secondary |
| `tertiary` | `#171818` | Text/border phụ, sương đá |
| `surface` / `background` | `#fbf9f4` (Bone White) | Nền chính |
| `surface-container` ... `-highest` | `#f0eee9` → `#e4e2dd` | Các lớp tonal layering |
| `on-surface` | `#1b1c19` | Text chính |
| `on-surface-variant` | `#434843` | Text phụ |
| `outline` / `outline-variant` | `#737973` / `#c3c8c1` | Viền, chia tách |
| `error` | `#ba1a1a` | Trạng thái lỗi |

### Typography

- **Heading (serif):** EB Garamond — `display-lg` 64px/500, `headline-lg` 48px/500
  (mobile 32px), `headline-md` 32px/400.
- **Body/UI (sans):** Manrope — `body-lg` 18px/400, `body-md` 16px/400,
  `label-sm` 12px/600 (uppercase, letter-spacing 0.05em).
- Line-height rộng (1.6 cho body) để giữ cảm giác "airy".

### Layout & Spacing

- Base unit: 8px. Container max-width 1280px, gutter 24px.
- Desktop: grid 12 cột, margin ngoài 64px.
- Mobile: grid 4 cột, margin ngoài 20px.
- Khoảng cách giữa các section cố ý lớn (120–160px) để tạo nhịp cuộn chậm.

### Elevation, Shape, Components

- Depth qua **tonal layers**, không dùng shadow nặng; shadow (khi cần) rất mờ, tint xanh Forest.
  Nav bar dùng backdrop-blur "Misty" để mô phỏng sương Sapa.
- Bo góc **Soft (0.25rem)**; ảnh/card lớn có thể dùng `rounded-lg` (0.5rem).
- Buttons: primary nền Forest Green + chữ Bone White, hover ngả Terracotta.
- Cards: ưu tiên hình ảnh, border tối thiểu (1px Stone Gray khi cần).
- Inputs: chỉ có border dưới (underline), focus chuyển sang Forest Green.
- Chips/Tags: nền Stone Gray nhạt, chữ `label-sm` viết hoa (dùng cho "Treatment Benefits",
  "Room Features").
- Navigation: thanh nav trong suốt cao + backdrop blur, xuyên suốt mọi trang.

## Danh sách screen "Lá Dao"

Tất cả thuộc project `projects/13070633838382638920`. Mỗi trang có tối đa 4 biến thể:
Desktop/Mobile × mặc định/"Tiếng Việt".

### Trang chủ
- Lá Dao - Trang chủ (Desktop) — `74710c595d0041d48c98869edf44330f`
- Lá Dao - Trang chủ (Mobile) — `e90d0b182be44eb19ad3ba598e39d35f`
- Lá Dao - Trang chủ (Tiếng Việt) — `c497e6cb53e54fefac169dff4bc028e3`
- Lá Dao - Trang chủ (Mobile - Tiếng Việt) — `8c3782d2b17b49ab9dfef9e507bc6c9a`

### Nhà hàng
- Lá Dao - Nhà hàng (Desktop) — `9c6de3fc6a624b6385a57cdaff6fb409`
- Lá Dao - Nhà hàng (Mobile) — `9d3e8f3efd9e4343863af479ad0bec49`
- Lá Dao - Nhà hàng (Tiếng Việt) — `0074ba7def11449f82aed17194ce524f`
- Lá Dao - Nhà hàng (Mobile - Tiếng Việt) — `4cbf8b2e961e41e39132d6372548e11f`

### Spa
- Lá Dao - Spa (Desktop) — `50c39c1570854309ab50726c5303620c`
- Lá Dao - Spa (Mobile) — `637babb71302438683627811665b9380`
- Lá Dao - Spa (Tiếng Việt) — `2581a4cc130f48f4a5fc2393e481ad0e`
- Lá Dao - Spa (Mobile - Tiếng Việt) — `c967c42d1f31418abff2363eeb8627e5`

### Homestay
- Lá Dao - Homestay (Desktop) — `86466ad703ea4aea81efafaae79550b9`
- Lá Dao - Homestay (Mobile) — `f31369f6d8ae4f539b0c65deb0812db2`
- Lá Dao - Homestay (Tiếng Việt) — `b996e6307b6e4a32b98889753e72b740`
- Lá Dao - Homestay (Mobile - Tiếng Việt) — `b39d146bb4424cc5805fffb52a4a74f5`

## Ghi chú

- ID screen ở trên dùng để lấy lại HTML/screenshot qua Stitch (`get_screen`,
  `projects/13070633838382638920/screens/<id>`) khi cần build lại component trong `my-smart-app`.
- Font cần load: `EB Garamond` (headings) + `Manrope` (body/UI), qua Google Fonts.
