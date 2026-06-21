import Hero from "./components/Hero";
import Identity from "./components/Identity";
import Work from "./components/Work";
import References from "./components/References";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="grain relative min-h-screen bg-ink-900 text-chalk">
      <Hero />
      <Identity />
      <Work />
      <References />
      <Footer />
    </main>
  );
}
