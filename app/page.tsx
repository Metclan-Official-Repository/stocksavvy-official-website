import { Hero } from "./components/hero";
import { Analytics } from "./components/analytics";
import { Features } from "./components/features";
import { OurClients } from "./components/ourclients";
import { Testimonials } from "./components/testimonials";
import { Footer } from "./components/footer";
export default function Home() {
  return (
    <main>
      <Hero />
      <Analytics />
      <Features />
      <OurClients />
      <Testimonials />
      <Footer />
    </main>
  );
}
