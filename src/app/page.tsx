"use client";
import Link from "next/link";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer"; // adjust path if needed
import ImageCard from "./components/ImageCard";
import { motion } from "framer-motion";
import {SchemeViewer, Scheme} from "./components/Scheme";
import rawSchemes from "@/data/all_schemes.json";
import Questionnaire from "./components/Questionnaire";


export default function Home() {
  const schemesDemo = [
    {
      title: "Pradhan Mantri Jan Dhan Yojana",
      desc: "The scheme facilitates zero-balance accounts, RuPay debit cards, and direct benefit transfers, bringing the unbanked population into the formal financial system",
      img: "/images/output-1.webp",
      description: "The scheme facilitates zero-balance accounts, RuPay debit cards, and direct benefit transfers, bringing the unbanked population into the formal financial system",
      link: "",
      category: "Finance",
      features: ["Goal setting", "Roadmap creation", "Progress tracking"]
    },
    {
      title: "Beti Bachao Beti Padhao",
      desc: "The scheme works to prevent gender-biased sex selection and ensure every girl's survival, protection, and participation in education.",
      img: "/images/output-4.webp",
      description: "The scheme works to prevent gender-biased sex selection and ensure every girl's survival, protection, and participation in education.",
      link: "",
      category: "Education",
      features: ["Scholarships", "Mentorship", "Workshops"]
    },
    {
      title: "Rashtriya Madhyamik Shiksha Abhiyan",
      desc: "In 2018, this scheme was integrated into the larger Samagra Shiksha Abhiyan, which now holistically covers school education from pre-school to Class 12.",
      img: "/images/output-5.webp",
      description: "In 2018, this scheme was integrated into the larger Samagra Shiksha Abhiyan, which now holistically covers school education from pre-school to Class 12.",
      link: "",
      category: "Skill Development",
      features: ["Training", "Certification", "Placement assistance"]
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
          <Link href={"/questionnaire"} className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 hover:scale-105 transition duration-300 mt-10">Find Your Scheme now</Link>
        </div>
        <ImageCard></ImageCard>

      <div className="flex-grow min-h-screen">
        <div className="flex justify-center flex-col items-center">
          <p className="px-6 py-1 rounded-full mt-70 "><span className="opacity-60">About Us</span></p>
        </div>
        <h1 className="px-60 text-6xl text-center mt-5">We're a small team of passionate students helping people find schemes and other financial aids easier.</h1>
        <div className="flex justify-center flex-col items-center">
          <Link href={"#"} className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 hover:scale-105 transition duration-300 mt-10">Learn more</Link>
        </div>
      </div>

          {/* Two-column layout */}
          <div className="flex flex-col md:flex-row gap-12">
            {/* Left Side - Sticky Text */}
            <div className="md:w-1/2 md:sticky md:top-24">
              <h1 className="text-6xl font-semibold leading-tight">
                Empowering Citizens <br />
                Through Schemes
              </h1>
              <p className="mt-4 text-1xl font-sans leading-relaxed">
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

          <h1 className="mt-4 text-6xl mt-25 text-center font-bold font-sans leading-relaxed">
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
