import NavBar from "./components/NavBar";
import Footer from "./components/Footer"; // adjust path if needed

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar/>
      <main className="flex-grow min-h-screen">
        


        <h1 className="text-3xl text-center mt-10">Welcome to My Site</h1>



      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
