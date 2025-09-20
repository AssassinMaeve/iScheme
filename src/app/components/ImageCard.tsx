"use client";
import Image from "next/image";

export default function ImageCard() {
  const cards = [
    {
      title: "Beautiful Beach",
      desc: "Relax and enjoy the waves.",
      img: "/images/output-7.webp", // put image in public/images
    },
    {
      title: "Mountain View",
      desc: "Adventure awaits in the hills.",
      img: "/images/output-2.webp",
    },
    {
      title: "",
      desc: "",
      img: "/images/output-8.webp",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 mt-10">
      {cards.map((card, i) => (
        <div
          key={i}
          className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition transform duration-300"
        >
          <Image
            src={card.img}
            alt={card.title}
            width={1080}
            height={1920}
            className="w-full h-full object-cover "
          />
          <div className="p-4">
            <h2 className="text-lg font-bold">{card.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
              {card.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
