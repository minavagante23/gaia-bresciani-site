import Hero from '@/components/Hero';
import ServicesBentoGrid from '@/components/ServicesBentoGrid';
import TestimonialsSection from '@/components/TestimonialsSection';
import MethodologySteps from '@/components/MethodologySteps';
import QuoteSection from '@/components/QuoteSection';
import InsightsGrid from '@/components/InsightsGrid';
import LocationCards from '@/components/LocationCards';
import CtaSection from '@/components/CtaSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesBentoGrid />
      <TestimonialsSection />
      <MethodologySteps />
      <QuoteSection />
      <InsightsGrid />
      <LocationCards />
      <CtaSection />
    </>
  );
}
