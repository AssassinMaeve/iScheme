import Link from "next/link";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow flex flex-col items-center justify-center">
        <Link href="/questionnaire">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
            Start Questionnaire
          </button>
        </Link>

        <h1 className="text-3xl text-center mt-10">Welcome to My Site</h1>
      </main>
      <Footer />
    </div>
  );
}
