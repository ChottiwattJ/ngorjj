"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "ไม่",
      "บ่",
      "ยกโทษให้โหน่ย",
      "แง่ว",
      "เค้าเลี้ยงหนม",
      "เค้าเลี้ยงข้าว",
      "เค้าทำงานบ้านให้",
      "เค้าไม่ทำแน้ว",
      "เค้ารักจจ",
      ":(((",
      "เค้ารักจจที่สุด",
      "เค้าจาเชื่อฟังจจ",
      "เค้าจาเป็นม๋าน้อย",
      "ยกโทษให้ยุง",
      "เค้าเสียจุยน้า",
      "ยกโทษให้เค้าเร็ววว",
      "เค้าซื้อทองให้",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold">เย้</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl">เค้าขอโทษ ยกโทษให้เค้าได้ป่าวว</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              ได้
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "ไม่" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
