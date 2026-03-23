import Preloader from "@/components/Preloader";
import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuickSummary from "@/components/QuickSummary";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import QuoteSection from "@/components/QuoteSection";
import CodingProfiles from "@/components/CodingProfiles";
import Projects from "@/components/Projects";
import DailyDigest from "@/components/DailyDigest";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer"; // This line was already present and is kept.

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col selection:bg-cyan-400/30 selection:text-white">
      <Preloader />
      <ParticleBackground />
      <Navbar />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col">
        <Hero />
        <QuickSummary />
        <Skills />
        <Education />
        <QuoteSection />
        <CodingProfiles />
        <Projects />
        <DailyDigest />
        <Certifications />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}

