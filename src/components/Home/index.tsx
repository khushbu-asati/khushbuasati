"use client";
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";

const LandingPage = dynamic(() => import("@/components/Home/LandingPage"));
const Services = dynamic(() => import("@/components/Home/Services"));
const About = dynamic(() => import("@/components/AboutSection"));
const Timeline = dynamic(() => import("@/components/ui/timeline"));
const Process = dynamic(() => import("@/components/Process"));
const FAQS = dynamic(() => import("@/components/FAQ"));
const Footer = dynamic(() => import("@/components/Footer"));

type LazySectionProps = {
  children: React.ReactNode;
};

const LazySection = ({ children }: LazySectionProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // load when 20% of the section is visible
  });

  return <div ref={ref}>{inView ? children : null}</div>;
};

export default function Home() {
  return (
    <div className="w-full">
      <LazySection>
        <LandingPage />
      </LazySection>

      <LazySection>
        <Services />
      </LazySection>

      <LazySection>
        <About />
      </LazySection>

      <LazySection>
        <Timeline />
      </LazySection>

      <LazySection>
        <Process />
      </LazySection>

      <LazySection>
        <FAQS />
      </LazySection>

      <LazySection>
        <Footer />
      </LazySection>
    </div>
  );
}
