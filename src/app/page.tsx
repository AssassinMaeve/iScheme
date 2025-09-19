import Footer from "./components/Footer"; // adjust path if needed

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow p-8">
        <h1 className="text-3xl text-center mb-10">Welcome to My Site</h1>
        <p className="text-center">Your main content goes here...</p>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
