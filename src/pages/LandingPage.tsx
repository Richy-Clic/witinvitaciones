import { Box } from '@chakra-ui/react'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import { BenefitsSection } from '../components/sections/BenefitsSection'
import { ContactSection } from '../components/sections/ContactSection'
import { CTASection } from '../components/sections/CTASection'
import { DesignsSection } from '../components/sections/DesignsSection'
import { HeroSection } from '../components/sections/HeroSection'
import { HowItWorksSection } from '../components/sections/HowItWorksSection'
// import { TestimonialsSection } from '../components/sections/TestimonialsSection'

export function LandingPage() {
  return (
    <Box>
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <DesignsSection />
        <HowItWorksSection />
        {/* <TestimonialsSection /> */}
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </Box>
  )
}
