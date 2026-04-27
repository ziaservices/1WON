import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { DriverPartnerSection } from "@/components/driver-partner-section"
import { FeaturesSection } from "@/components/features-section"
import { CitiesSection } from "@/components/cities-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { MobileCTA } from "@/components/mobile-cta"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <HowItWorksSection />
        <DriverPartnerSection />
        <FeaturesSection />
        <CitiesSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
      <MobileCTA />
    </>
  )
}
