"use client";
import Image from "next/image";

export default function ImageCard() {
  const cards = [
    {
      title: "Beautiful Beach",
      desc: "Relax and enjoy the waves.",
      img: "/images/beach.jpg", // put image in public/images
    },
    {
      title: "Mountain View",
      desc: "Adventure awaits in the hills.",
      img: "/images/mountain.jpg",
    },
    {
      title: "City Lights",
      desc: "The city never sleeps.",
      img: "/images/city.jpg",
    },
    {
      title: "City Lights",
      desc: "The city never sleeps.",
      img: "/images/city.jpg",
    },
    {
      title: "Mountain View",
      desc: "Adventure awaits in the hills.",
      img: "/images/mountain.jpg",
    },
    {
      title: "City Lights",
      desc: "The city never sleeps.",
      img: "/images/city.jpg",
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
            width={250}
            height={400}
            className="w-48 h-full object-cover"
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
