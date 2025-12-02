import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RegistrationSection from "@/components/RegistrationSection";
import ProgramDetails from "@/components/ProgramDetails";
import Benefits from "@/components/Benefits";
import Curriculum from "@/components/Curriculum";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <RegistrationSection />
      <ProgramDetails />
      <Benefits />
      <Curriculum />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
