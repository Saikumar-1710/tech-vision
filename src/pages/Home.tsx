import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Capabilities } from '@/components/Capabilities';
import { Services } from '@/components/Services';
import { Developers } from '@/components/Developers';
import { Technologies } from '@/components/Technologies';
import { Projects } from '@/components/Projects';
import { Process } from '@/components/Process';
import { WhyUs } from '@/components/WhyUs';
import { Industries } from '@/components/Industries';
import { Testimonials } from '@/components/Testimonials';
import { About } from '@/components/About';
import { CTA } from '@/components/CTA';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

/**
 * Single-page experience:
 * Show developers → Show what we build → Show technologies →
 * Show previous work → Build trust → Let the visitor contact us.
 */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Capabilities />
        <Services />
        <Developers />
        <Technologies />
        <Projects />
        <Process />
        <WhyUs />
        <Industries />
        <Testimonials />
        <About />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}