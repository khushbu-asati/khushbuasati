import LandingPage from "@/components/Home/LandingPage";
import Services from "@/components/Home/Services";
import About from "@/components/AboutSection";
import Comparison from "@/components/Comparison";
import Footer from "@/components/Footer";
import Process from "../Process";
import { Timeline } from "../ui/timeline";

export default function Home() {
  return (
    <div className="w-full">
      <LandingPage />
      <Services />
      <About />
      <Timeline />
      {/* <Comparison /> */}
      <Process />
      <Footer />
    </div>
  );
}
