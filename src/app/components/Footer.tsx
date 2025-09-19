import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#e4f4fc] text-white py-5 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center">

        {/* Quick Links */}
        <div className="flex gap-10 text-lg text font-bold">
          <Link href="/about" className="px-5 py-1 text-[#1e3a8a] transition transform duration-300 ease-in-out hover:bg-[#f47236] hover:text-white hover:scale-110 rounded-full">About Us</Link>
          <Link href="/contact" className="px-5 py-1 text-[#1e3a8a] transition transform duration-300 ease-in-out hover:bg-[#f47236] hover:text-white hover:scale-110 rounded-full">Contact Us</Link>
          <Link href="/screen-reader" className="px-5 py-1 text-[#1e3a8a] transition transform duration-300 ease-in-out hover:bg-[#f47236] hover:text-white hover:scale-110 rounded-full">Screen Reader</Link>
        </div>

        {/* Copyright */}
        <p className="text-lg text-[#1e3a8a] ">&copy; {new Date().getFullYear()} iScheme. All rights reserved.</p>
      </div>
    </footer>
  );
}
