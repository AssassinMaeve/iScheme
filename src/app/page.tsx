"use client";
import Link from "next/link";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  const schemes = [
    {
      title: "Net-zero strategy & roadmapping",
      desc: "Set meaningful goals and create a step-by-step plan to reach them.",
      img: "/images/scheme1.jpg",
    },
    {
      title: "Scheme Title 2",
      desc: "Short description of Scheme 2 explaining the benefit.",
      img: "/images/scheme2.jpg",
    },
    {
      title: "Scheme Title 3",
      desc: "Short description of Scheme 3 explaining the benefit.",
      img: "/images/scheme3.jpg",
    },
    {
      title: "Scheme Title 4",
      desc: "Short description of Scheme 4 explaining the benefit.",
      img: "/images/scheme1.jpg",
    },
    {
      title: "Scheme Title 5",
      desc: "Short description of Scheme 5 explaining the benefit.",
      img: "/images/scheme2.jpg",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">
        <div className="w-11/12 md:w-4/5 mx-auto py-16">

          {/* Two-column layout */}
          <div className="flex flex-col md:flex-row gap-12">
            {/* Left Side - Sticky Text */}
            <div className="md:w-1/2 md:sticky md:top-24">
              <h1 className="text-6xl font-bold leading-tight">
                Empowering Citizens <br />
                Through Schemes
              </h1>
              <p className="mt-4 text-sm font-sans leading-relaxed">
                Discover government programs designed to support, uplift, and empower you. <br />
                From financial assistance to skill development, we help you access the benefits that matter most.
              </p>
            </div>

            {/* Right Side - Scrollable Cards */}
            <div className="md:w-1/2 h-[600px] overflow-y-auto scrollbar-none flex flex-col gap-8">
              {schemes.map((scheme, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Image */}
                  <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={scheme.img}
                      alt={scheme.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-4 font-semibold text-xl">{scheme.title}</h3>
                  <p className="text-sm mt-1 text-gray-600">{scheme.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
