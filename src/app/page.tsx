"use client";
import NavBar from "./components/NavBar";

import Footer from "./components/Footer"; // adjust path if needed
import Link from "next/link";
import ImageCard from "./components/ImageCard";
import { motion } from "framer-motion";
import {SchemeViewer, Scheme} from "./components/Scheme";
import rawSchemes from "@/data/all_schemes.json";


export default function Home() {
  const schemesDemo = [
    {
      title: "Net-zero strategy & roadmapping",
      desc: "Set meaningful goals and create a step-by-step plan to reach them.",
      img: "/images/scheme1.jpg",
      description: "A comprehensive roadmap to help organizations and individuals achieve net-zero emissions.",
      link: "https://example.com/netzero",
      category: "Environment",
      features: ["Goal setting", "Roadmap creation", "Progress tracking"]
    },
    {
      title: "Scheme Title 2",
      desc: "Short description of Scheme 2 explaining the benefit.",
      img: "/images/scheme2.jpg",
      description: "Detailed information about Scheme 2 and its advantages.",
      link: "https://example.com/scheme2",
      category: "Education",
      features: ["Scholarships", "Mentorship", "Workshops"]
    },
    {
      title: "Scheme Title 3",
      desc: "Short description of Scheme 3 explaining the benefit.",
      img: "/images/scheme3.jpg",
      description: "Scheme 3 provides support for skill development and training.",
      link: "https://example.com/scheme3",
      category: "Skill Development",
      features: ["Training", "Certification", "Placement assistance"]
    },
    {
      title: "Scheme Title 4",
      desc: "Short description of Scheme 4 explaining the benefit.",
      img: "/images/scheme1.jpg",
      description: "Scheme 4 focuses on financial assistance for startups.",
      link: "https://example.com/scheme4",
      category: "Finance",
      features: ["Grants", "Loans", "Mentorship"]
    },
    {
      title: "Scheme Title 5",
      desc: "Short description of Scheme 5 explaining the benefit.",
      img: "/images/scheme2.jpg",
      description: "Scheme 5 is designed to empower women entrepreneurs.",
      link: "https://example.com/scheme5",
      category: "Women Empowerment",
      features: ["Networking", "Funding", "Training"]
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">

      <NavBar />
      <main className="flex-grow">
        <div className="w-11/12 md:w-4/5 mx-auto py-16">
          
          <div className="flex justify-center flex-col items-center">
          <p className="px-6 py-1 rounded-full mt-10 "><span className="opacity-60">Goal: making it easier for everyone</span></p>
        </div>
        <h1 className="text-7xl text-center mt-5">Your Gateway To <br />Every Scheme</h1>
        <div className="flex justify-center flex-col items-center">
          <p className="text-xl text-center mt-5 w-md">We help you find the Scheme best suited for you, weather you are a student, farmer, anyone.</p>
          <Link href={"#"} className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 hover:scale-105 transition duration-300 mt-10">Find Your Scheme now</Link>
        </div>
        <ImageCard></ImageCard>

      <div className="flex-grow min-h-screen">
        <div className="flex justify-center flex-col items-center">
          <p className="px-6 py-1 rounded-full mt-10 "><span className="opacity-60">About Us</span></p>
        </div>
        <h1 className="px-6 text-6xl text-center mt-5 sm:text-2xl sm:px-5">We're a small team of passionate students helping people find schemes and other financial aids easier.</h1>
        <div className="flex justify-center flex-col items-center">
          <Link href={"#"} className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 hover:scale-105 transition duration-300 mt-10">Learn more</Link>
        </div>
      </div>

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
              {schemesDemo.map((scheme, index) => (
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
          <section className="mt-20">
          <SchemeViewer schemes={rawSchemes} />
        </section>

          <h1 className="mt-4 text-6xl mt-40 text-center font-bold font-sans leading-relaxed">
                Screen Reader
          </h1>

          <p className="mt-4 text-1xl  text-center font-sans leading-relaxed">
                This allows users with visual impairments to navigate and use our platform seamlessly with assistive tools, such as screen readers <br />
                We are committed to ensuring that all information on iScheme is easily accessible to everyone..
          </p>




<div className="overflow-x-auto mt-20">
  <table className="min-w-full border border-gray-300 dark:border-gray-700 text-left">
    <thead className="bg-gray-200 dark:bg-gray-800">
      <tr >
        <th className="px-6 py-3 border-b border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200">
          Screen Reader
        </th>
        <th className="px-6 py-3 border-b border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200">
          Website
        </th>
        <th className="px-6 py-3 border-b border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200">
          Type
        </th>
      </tr>
    </thead>
    <tbody>
      {[
        { name: "Non Visual Desktop Access (NVDA)", link: "http://www.nvda-project.org/", type: "Free" },
        { name: "System Access To Go", link: "http://www.satogo.com", type: "Free" },
        { name: "Hal", link: "http://www.yourdolphin.co.uk/productdetail.asp?id=5", type: "Commercial" },
        { name: "JAWS", link: "http://www.freedomscientific.com/products/software/jaws/", type: "Commercial" },
        { name: "Supernova", link: "http://www.yourdolphin.co.uk/productdetail.asp?id=1", type: "Commercial" },
        { name: "Window-Eyes", link: "http://www.gwmicro.com/Window-Eyes/", type: "Commercial" },
      ].map((reader, index) => (
        <tr
          key={index}
          className={`hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
            index % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50 dark:bg-gray-800"
          }`}
        >
          <td className="px-6 py-3 border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-200">
            {reader.name}
          </td>
          <td className="px-6 py-3 border-b border-gray-300 dark:border-gray-700">
            <a
              href={reader.link}
              target="_blank"
              className="text-blue-600 dark:text-blue-400 underline"
            >
              {reader.link}
            </a>
          </td>
          <td className="px-6 py-3 border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-200">
            {reader.type}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
