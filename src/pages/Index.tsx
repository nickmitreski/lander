import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/hero/HeroSection";
import { Features } from "@/components/landing/features/FeaturesSection";
import PhoneMockupsShowcase from "@/components/landing/CreatorsShowcase";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { Pricing } from "@/components/landing/Pricing";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="bg-[rgba(246,246,249,1)] min-h-screen">
      <Header />
      <main className="pt-24">
        <Hero />
        <Features />
        <PhoneMockupsShowcase />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
