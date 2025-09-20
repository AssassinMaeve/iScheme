// src/app/page.tsx
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { SchemeViewer, Scheme } from "./components/Scheme";
import rawSchemes from "@/data/all_schemes.json";

const schemes: Scheme[] = rawSchemes as Scheme[];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      <main className="flex-grow min-h-screen px-4">
        <h1 className="text-3xl text-center mt-10">Welcome to My Site</h1>

        <section className="mt-10">
          <h2 className="text-4xl font-bold mb-6 text-center">Schemes</h2>
          <SchemeViewer schemes={schemes} />
        </section>
      </main>

      <Footer />
    </div>
  );
}
