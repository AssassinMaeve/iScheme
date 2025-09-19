import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#e4f4fc] py-25 mt-5 rounded-t-3xl shadow-inner animate-slide-up">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-8 px-6">
        
        {/* Left: Project Name */}
        <div>
          <h2 className="text-6xl font-bold text-[#1e3a8a]">iScheme</h2>
          <p className="text-sm text-[#1e3a8a] mt-4 font-italic ">Your Gateway to Every Scheme</p>
        </div>

        {/* Right: Links */}
        <div className="flex flex-col md:flex-row gap-10 text-left">
          
          {/* Pages */}
          <div>
            <h3 className="text-3xl font-bold text-[#1e3a8a] mb-5">Pages</h3>
            <ul className="space-y-2">
            <li>
                <Link
                  href="/home"
                  className="transition text-[#1e3a8a] font-semibold duration-300 hover:text-blue-500"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="transition text-[#1e3a8a] font-semibold duration-300 hover:text-blue-500"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/schemes"
                  className="transition duration-300 text-[#1e3a8a] font-semibold hover:text-blue-500"
                >
                  Schemes
                </Link>
              </li>
              <li>
                <Link
                  href="/screen-reader"
                  className="transition duration-300 hover:text-blue-500"
                >
                  Screen Reader
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-3xl font-bold text-[#1e3a8a] mb-5">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/screen-reader"
                  className="transition duration-300 text-[#1e3a8a] font-semibold hover:text-blue-500"
                >
                  Screen Reader
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="transition duration-300 text-[#1e3a8a] font-semibold hover:text-blue-500"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
        </div>
        
      </div>
      <div className="w-373 h-0.5 bg-[#1e3a8a] my-4 rounded mx-auto"></div>
      <div className="flex justify-between items-center px-53 py-4 text-sm text-[#1e3a8a] font-bold">
        <p>2025 iScheme. All rights reserved</p>
        <p>Developed by Team St Carlo Acutis</p>
    </div>

    </footer>
    
  );
}
