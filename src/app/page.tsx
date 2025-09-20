"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Questionnaire from "./questionnaire/Questionnaire";


import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ImageCard from "./components/ImageCard";
import { SchemeViewer, Scheme } from "./components/Scheme";

export default function Home() {
  const [schemes, setSchemes] = useState<Scheme[]>([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch schemes from API
  useEffect(() => {
    async function fetchSchemes() {
      try {
        const res = await fetch("/api/schemes");
        const data = await res.json();
        setSchemes(data);
      } catch (err) {
        console.error("❌ Error fetching schemes:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchSchemes();
  }, []);

  // ✅ Demo schemes (for landing section)
  const schemesDemo = [
    {
      title: "Pradhan Mantri Jan Dhan Yojana",
      desc: "Zero-balance accounts, RuPay debit cards, and direct benefit transfers.",
      img: "/images/output-1.webp",
    },
    {
      title: "Beti Bachao Beti Padhao",
      desc: "Prevent gender-biased sex selection and ensure education for girls.",
      img: "/images/output-4.webp",
    },
    {
      title: "Rashtriya Madhyamik Shiksha Abhiyan",
      desc: "Part of Samagra Shiksha Abhiyan, covering school education holistically.",
      img: "/images/output-5.webp",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      <main className="flex-grow">
        {/* ✅ Hero Section */}
        <div className="w-11/12 md:w-4/5 mx-auto py-16 text-center">
          <p className="px-6 py-1 rounded-full mt-10 opacity-60">
            Goal: making it easier for everyone
          </p>
          <h1 className="text-7xl mt-5">Your Gateway To <br /> Every Scheme</h1>
          <p className="text-xl mt-5">
            We help you find the scheme best suited for you — whether you are a student, farmer, or anyone else.
          </p>
          <Link
            href="/questionnaire"
            className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 hover:scale-105 transition duration-300 mt-10 inline-block"
          >
            Find Your Scheme now
          </Link>
        </div>

        {/* ✅ Demo Cards */}
        <ImageCard />
        <div className="flex flex-col md:flex-row gap-12 w-11/12 md:w-4/5 mx-auto my-16">
          <div className="md:w-1/2 md:sticky md:top-24">
            <h1 className="text-6xl font-semibold">Empowering Citizens<br />Through Schemes</h1>
            <p className="mt-4 text-lg leading-relaxed">
              Discover government programs designed to support, uplift, and empower you.
            </p>
          </div>

          <div className="md:w-1/2 h-[600px] overflow-y-auto scrollbar-none flex flex-col gap-8">
            {schemesDemo.map((scheme, index) => (
              <motion.div
                key={index}
                className="flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg">
                  <img src={scheme.img} alt={scheme.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="mt-4 font-semibold text-xl">{scheme.title}</h3>
                <p className="text-sm mt-1 text-gray-600">{scheme.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ✅ Dynamic Schemes Section */}
        <section className="w-11/12 md:w-4/5 mx-auto mt-20">
          <h2 className="text-4xl font-bold text-center mb-8">Government Schemes</h2>
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : (
            <SchemeViewer schemes={schemes} />
          )}
        </section>

        {/* ✅ Accessibility / Screen Reader Section */}
        <section className="mt-20 w-11/12 md:w-4/5 mx-auto">
          <h2 className="text-6xl text-center font-bold">Screen Reader</h2>
          <p className="mt-4 text-center text-lg">
            We are committed to making our platform accessible with assistive tools such as screen readers.
          </p>

          <div className="overflow-x-auto mt-10">
            <table className="min-w-full border border-gray-300 text-left">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-6 py-3 border-b">Screen Reader</th>
                  <th className="px-6 py-3 border-b">Website</th>
                  <th className="px-6 py-3 border-b">Type</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "NVDA", link: "http://www.nvda-project.org/", type: "Free" },
                  { name: "System Access To Go", link: "http://www.satogo.com", type: "Free" },
                  { name: "Hal", link: "http://www.yourdolphin.co.uk/productdetail.asp?id=5", type: "Commercial" },
                  { name: "JAWS", link: "http://www.freedomscientific.com/products/software/jaws/", type: "Commercial" },
                  { name: "Supernova", link: "http://www.yourdolphin.co.uk/productdetail.asp?id=1", type: "Commercial" },
                  { name: "Window-Eyes", link: "http://www.gwmicro.com/Window-Eyes/", type: "Commercial" },
                ].map((reader, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-3 border-b">{reader.name}</td>
                    <td className="px-6 py-3 border-b">
                      <a href={reader.link} target="_blank" className="text-blue-600 underline">
                        {reader.link}
                      </a>
                    </td>
                    <td className="px-6 py-3 border-b">{reader.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
