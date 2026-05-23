import { HeroSection } from "@/components/HeroSection";
import { PainSection } from "@/components/PainSection";
import { PilaresSection } from "@/components/PilaresSection";
import { AntesDepoisSection } from "@/components/AntesDepoisSection";
import { MetodologiaSection } from "@/components/MetodologiaSection";
import { CTASection } from "@/components/CTASection";
import { DiagnosticSection } from "@/components/DiagnosticSection";
import { FaqSection } from "@/components/FaqSection";
import { GoogleBusinessSection } from "@/components/GoogleBusinessSection";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full relative">
      <HeroSection />
      <PainSection />
      <PilaresSection />
      <AntesDepoisSection />
      <MetodologiaSection />
      <CTASection />
      <DiagnosticSection />
      <FaqSection />
      <GoogleBusinessSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
