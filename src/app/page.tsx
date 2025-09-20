import NavBar from "./components/NavBar";
import Footer from "./components/Footer"; // adjust path if needed
import Link from "next/link";
import ImageCard from "./components/ImageCard";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar/>
      <main className="flex-grow min-h-screen">
        
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
        <h1 className="px-60 text-6xl text-center mt-5">We're a small team of passionate students helping people find schemes and other financial aids easier.</h1>
        <div className="flex justify-center flex-col items-center">
          <Link href={"#"} className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 hover:scale-105 transition duration-300 mt-10">Learn more</Link>
        </div>
      </div>

      </main>


      {/* Footer */}
      <Footer />
    </div>
  );
}
