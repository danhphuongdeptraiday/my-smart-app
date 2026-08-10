import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;
const token = process.env.SANITY_API_TOKEN;

if (!projectId || !dataset || !apiVersion) {
  throw new Error(
    "Missing NEXT_PUBLIC_SANITY_PROJECT_ID / NEXT_PUBLIC_SANITY_DATASET / NEXT_PUBLIC_SANITY_API_VERSION"
  );
}
if (!token) {
  throw new Error(
    "Missing SANITY_API_TOKEN — tạo Editor token tại sanity.io/manage và điền vào .env.local"
  );
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

async function uploadImage(url: string, filename: string) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buffer = Buffer.from(await res.arrayBuffer());
    const asset = await client.assets.upload("image", buffer, { filename });
    return { _type: "image" as const, asset: { _type: "reference" as const, _ref: asset._id } };
  } catch (err) {
    console.error(`⚠️  Không tải được ảnh "${filename}" — bạn có thể upload thủ công qua Studio sau. Lỗi:`, err);
    return undefined;
  }
}

const ROOMS = [
  {
    title: "Bungalow riêng tư",
    desc: "Nằm ở vị trí cao nhất, mang đến một giấc ngủ giữa những tầng mây với tầm nhìn ban công toàn cảnh.",
    price: "Đặt ngay — từ $120",
    size: "large",
    accent: "primary",
    imgUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA0EKDcweEi5uyd0shHhgLrGZ9vQQNvzwwAeGpahYALhXYJEY7h6xGZddSjvS6lq0ShQFMyc1Up9vWXtX6CXKfq0uIaHKZBon_c3IDKDHBBeKJg8MHYpVRzjFvFTJ2DObj_V2AQhLKC6h3iu-1u9RyHImqtWFXE0oKAm5jbzFq0x-moLDDW1_2h8I5HD_sjKNvoq39ETI5rp1Jt_nD0ML7V_y9acR1tctB4RVlJjrjEIoqoNlwYsc6TxBDeTdWcP_HehZeITUYlhnXV",
  },
  {
    title: "Ban công thông nhau",
    desc: "Trải nghiệm bồn tắm thảo mộc tại phòng và các nghi thức hương liệu trị liệu.",
    price: "Đặt ngay — từ $150",
    size: "small",
    accent: "secondary",
    imgUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDHm2OE9ePeNozV1znODU-1YBpWds5BS-txUGoZLZ7D2CNwkwgu8l7mHaT902gSZ4SWrAV6Hds4BtDcaeV3W8Eu-UcL_yu79CZ53kgWuTxcw8TJXxBQC4gOkJ3nAhr9ZFigUNeBRnj1vGxZ56ZTZ7B4LGAeu2R9LEA2laB-dvhwQzl3asCgWDIU06fz73MsKpqyFl74yo0VVxuAudKheGRcYq5CscdJ32-f6S-oIVdp2NrPTAlTP-M4feFKfEzTm6r8vUt8XTonUu63",
  },
  {
    title: "Giường phụ",
    desc: "Một không gian trú ẩn riêng tư được xây dựng bằng gỗ tái chế và lò sưởi bằng đá truyền thống.",
    price: "Đặt ngay — từ $180",
    size: "small",
    accent: "tertiary",
    imgUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB8gP-v4z5tSrqEgdVxUX6YBnMDvua_Cvu77-wfjIu46xuLRL6LBWxOdqPZSz_-ImDiROb26qc4gPUarAOqLGweI9gzvSNC2vcLtx7UsOQhkjncsGpNh7eOwIzMO5JkSegi_Eqrclp1HTwyirvZcVMSYr_TeO80StnDMCicz-WWnzZYCF_V5bEMKLN8SEjE77sjF5cTEoI02BG19HGjk7nymcAnPOoRt6TlwqwgxT5IkZuh2E3Tj4YcaafIF4abw4FhXC3u_KMxAVAy",
  },
  {
    title: "Gói Phòng & Spa",
    desc: "Thiết kế tối giản hòa quyện cùng tầm nhìn thung lũng bao la. Hoàn hảo cho khách đi một mình.",
    price: "Đặt ngay — từ $95",
    size: "large",
    accent: "outline",
    imgUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAsHIsHRHx8Al0CaeGzLioYHMYZJ5rznKmEo_MCdyVwvuloKLSJDEi51KJzmnTgqSH7ombmXeZdzjBw5ydEAXD9S4DGfREWGAufYvh8XR2Pf7ggvXyu64EiYsT_6St-YBjtBotS2uumY2WZdg0UhAQQ-qAg7FbYpquEk_Fk0kx3ZMOfzgFK6VzDB9J-hxow-qGRcesVK6AjsxBcLpIv79v7lekDMRTy864PgCjkNVZnWVIbI_u1t47Mkpc3I58xnA3K3RtbPrsFLNM3",
  },
];

const MENU_ITEMS = [
  {
    label: "01 — Khai vị",
    imgUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD4Zg-ZoPQ7L9X0bXJM1eY_Hx8XnMVeyq0YvtG3J9UamVNF5QV3ndWSdzwONkZB3ZAhqT-ssCPNLllUqGjyNilONy1qIoU2hFjn9nhJ36DwbPbw61ml9eT0k4eT7dW2DnWZC6Y4_Xvl9fxDk1Cb_-eyeU3g9m1mioeRAZhMsY--wf0OARpiAOxKhpFwPHUdiG0rN2xubRa0yPzZudqRj7egMIL2eYGIq_fxqTenu1n04KpRvX-Fl1xUh9eBdr_qYaHjEK9FXhHAkD9_",
  },
  {
    label: "02 — Món chính đặc trưng",
    imgUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCZzj4UvPzVzbAPHp-ax8mgCr9dSgK0U3LNziRJ78wwY744Z0Y5i7ny_PLHdKsmPY__7r6Ozk062jBGH6uA0q7CoshaBFgY0QkktQofbM9qh16xROYP7PL6UhlVr49xwQ1ADyga9N54WNjyNYnXP6c7llA63B--KN5kozzvIf0hYIz9_Hrl5SvlOpTwn5mFfokeMhxXfrmpWmc4eyd8qQgCfICu7QGE8te3uX7Q7hqj8fv7nlcmDaXENUd3XcsOPYg2koYZ7gxSILb4",
  },
  {
    label: "03 — Tráng miệng & Trà",
    imgUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBVU6vETmOTaCCRwuxZ3mHAC9qw1kNYPglmvxppv-Ty_MNupll-N3ewsK9OoxzgZxD1oVTX9Jcq9NH4xUqxK93dT4eJMxEnPlMebASf9QuUsEfKOfCgC6yKIcJblZ2sotSUSMlDDrvlHQ40corQ2qa3qW1-M8BnzsWcjdHStw9lY5ysud6Y59zjAwmonSNksH1ZKDZxXi2JMabgOebX0LCxOKy5DVX0GBh45nS7riY7QdMWtNOTXeYqZJLhAVbRjvOD45rcaie6a2Zy",
  },
];

const SERVICES = [
  {
    title: "Tắm lá thuốc Dao Đỏ truyền thống",
    price: "$45 / 60 phút",
    desc: "Được thu hái từ những đỉnh núi cao của Hoàng Liên Sơn, bài thuốc đặc trưng của chúng tôi bao gồm hơn 20 loại dược liệu giúp giải độc và phục hồi tinh thần.",
    tags: ["Thải độc", "Lưu thông"],
    imgUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCg3n0L56HTTXJUgeM1kTLsNtRYs_A4OADrZMPMK5trvSiUvm5cYKj6yiskw7A3JNW36FhqWwIBeYE1YBlBhLG3vjhvKIZTFUM72D6HlAZlpelxWdfEwO5juwHGi5sLIjemO0EsbVWp27sHPJkL98sKGMlKpqRI5Scv1UpL5g8xfPBR5mtNHFcOdPMFDKFOu1ggHW1HKHj_Kk34C0uE6cV3ouKWoUdJoguVmBNV1gSmySk6Jrj7OYmzVWHsVxjMEjjzpaMOHA31qdvs",
  },
  {
    title: "Liệu pháp đá núi",
    price: "$60 / 90 phút",
    desc: "Đá núi lửa được làm nóng đặt dọc theo cột sống để giải phóng căng thẳng sâu, kết hợp với massage bằng dầu thảo mộc.",
    tags: ["Mô sâu", "Làm ấm"],
    imgUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDDwM-ePisRapvEIH6z6B8CPmWxNRxnuRAn8UTlJ55fGtx7huRS2gldhZaCOBOZTISy_OKW4tL0ZHQBcg1rc5Ot2NH-6KNFXAHTz8uv2XuNaCxuTIebFTAVHdZZVQdapQNN0vTuSm7XV9oc6IkJ-y9gX_z0rSb3Isp8HK5fqFhy6hancHMzHxoBNLffApp-TXUiWb-2NaSoR9bYEXP79rWlYuQYcWk18_2W72-sEVGPxgs1muIPpCJzu1w52U3-79Ftf0lVqVOdOwAt",
  },
  {
    title: "Chăm sóc mặt Tre & Gạo",
    price: "$35 / 45 phút",
    desc: "Tẩy tế bào chết nhẹ nhàng bằng gạo vùng cao xay nhuyễn, sau đó đắp mặt nạ tre làm mát để phục hồi độ sáng cho làn da.",
    tags: ["Cấp ẩm", "Hữu cơ"],
    imgUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDR344BxstI9Y7mhQZebJ9HTJDxhSLkSVoU_OBbX_uLmHe6c2NEMkJIybdNuZ6xo2qrvrx3F2pU_UJRNKDcI5sJ2vohimT6hjEhg3xQ2yLW3ASXanfI3CFtJSFidMRuIwt_GiwLYnveo3dGRslcbWQ92XTQ_AnVdBPaN71vss2rP8L8Zwnskns5XU6qnTR3FM4ZS9yXHwn7tOf9-ZSMjCP972rZeQcpPd7M-zIS0kolyQtXY2nyHvxTWNpHQ0Ldd0eMLNUhPKuEo8rD",
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

async function main() {
  console.log("→ Đang tải & upload ảnh phòng homestay...");
  const rooms = [];
  for (const room of ROOMS) {
    const image = await uploadImage(room.imgUrl, `${room.title}.jpg`);
    if (!image) continue;
    rooms.push({
      _key: room.title,
      title: room.title,
      desc: room.desc,
      price: room.price,
      size: room.size,
      accent: room.accent,
      image,
    });
  }

  console.log("→ Đang tải & upload ảnh thực đơn...");
  const menuItems = [];
  for (const item of MENU_ITEMS) {
    const image = await uploadImage(item.imgUrl, `${item.label}.jpg`);
    if (!image) continue;
    menuItems.push({ _key: item.label, label: item.label, image });
  }

  console.log("→ Đang tải & upload ảnh dịch vụ spa...");
  const services = [];
  for (const service of SERVICES) {
    const image = await uploadImage(service.imgUrl, `${service.title}.jpg`);
    if (!image) continue;
    services.push({
      _key: service.title,
      title: service.title,
      price: service.price,
      desc: service.desc,
      tags: service.tags,
      image,
    });
  }

  const priceList = PRICE_LIST.map((cat) => ({
    _key: cat.category,
    category: cat.category,
    items: cat.items.map((item) => ({ _key: item.name, ...item })),
  }));

  console.log("→ Đang ghi document vào Sanity...");
  await client.createOrReplace({ _id: "homestayPage", _type: "homestayPage", rooms });
  await client.createOrReplace({ _id: "nhaHangPage", _type: "nhaHangPage", menuItems });
  await client.createOrReplace({ _id: "spaPage", _type: "spaPage", services, priceList });

  console.log("✅ Seed xong. Mở /studio để xem/sửa nội dung.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
