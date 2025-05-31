import CommonButtons from "@/components/SharedComponents/CommonButtons";
import Typewriter from "./Typewriter";
import { Routes } from "@/constant/Routes";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Header from "../Navigation";
import { Instrument_Serif } from 'next/font/google';

const instrumentSerif = Instrument_Serif({
  weight: '400', // Or specify multiple weights if needed, e.g., ['400', '700']
  subsets: ['latin'], // Or other subsets as required
});

export default function LandingPage() {
  return (
    <AuroraBackground>
      <Header />
      <section id={Routes.home} className="w-full flex flex-col items-center">
        <div className="flex flex-col items-center pt-40 pb-20 mb-9 max-w-[1200px]">
          <h1
            className={`text-[72px] inline-block bg-clip-text tracking-wide text-black ${instrumentSerif.className}`}
            // style={{
            //   backgroundImage:
            //     "linear-gradient(180deg, var(--text-primary, rgb(14, 28, 41)) 34%, var(--text-foreground, rgba(94, 120, 143, 0.5)) 124%)",
            // }}
          >
            I'm Khushbu
          </h1>
          <div className="flex flex-row items-center gap-4">
            <h1
              className={`text-[72px] inline-block bg-clip-text text-black mb-4 tracking-wide font-bold ${instrumentSerif.className}`}
              style={{
                backgroundImage:
                  "linear-gradient(180deg, var(--text-primary, rgb(14, 28, 41)) 34%, var(--text-foreground, rgba(94, 120, 143, 0.5)) 124%)",
              }}
            >
              Senior Frontend Engineer
            </h1>
            <Typewriter />
          </div>

          <span className="text-[16px] text-text-primary font-normal mb-6 max-w-[446px] text-center">
            Crafting exceptional and user-centric web experiences with
            cutting-edge frontend technologies for modern applications.
          </span>
          <CommonButtons />
        </div>
      </section>
    </AuroraBackground>
  );
}
