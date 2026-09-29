'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import StudioIntro from '@/components/StudioIntro';
import FeaturedWorks from '@/components/FeaturedWorks';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Workflow from '@/components/Workflow';
import Testimonials from '@/components/Testimonials';
import CTAButton from '@/components/CTAButton';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased selection:bg-[#00AEEF] selection:text-white">
      <Header />
      <main>
        <Hero />
        <StudioIntro />
        <FeaturedWorks />
        <Services />
        <Portfolio />
        <Workflow />
        <Testimonials />
      </main>
      <Footer />
      <CTAButton />
    </div>
  );
}
