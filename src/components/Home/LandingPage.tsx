import Image from "next/image";
import { ROUTES } from "@/constant/Routes";
import { Instrument_Serif } from "next/font/google";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const CommonButtons = dynamic(
  () => import("@/components/SharedComponents/CommonButtons")
);
const Typewriter = dynamic(() => import("@/components/Home/Typewriter"));
const AuroraBackground = dynamic(
  () => import("@/components/ui/aurora-background")
);
const Header = dynamic(() => import("@/components/Navigation/Header"));

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
});

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5, // delay between each child animation
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function LandingPage() {
  return (
    <AuroraBackground>
      <Header />
      <section
        id={ROUTES.home}
        className="w-full flex flex-col items-center relative z-10"
      >
        <motion.div
          className="flex flex-col items-center pt-40 pb-20 mb-9 max-w-[1200px]"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div
            className="flex flex-row items-center gap-4"
            variants={itemVariants}
          >
            <Image
              src="/assets/Profile.jpg"
              alt=""
              width={120}
              height={120}
              className="rounded-[14px] w-[60px] h-[70px] lg:size-[70px] xl:w-[100px] xl:h-[120px] shadow-md object-cover object-center"
            />
            <h1
              className={`text-[30px] sm:text-[40px] md:text-[60px] lg:text-[70px] xl:text-[90px] inline-block bg-clip-text tracking-wide leading-[62px] text-black ${instrumentSerif.className}`}
            >
              I&apos;m Khushbu
            </h1>
          </motion.div>

          <motion.div
            className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4 mb-6 sm:mb-0"
            variants={itemVariants}
          >
            <h1
              className={`text-[30px] sm:text-[40px] md:text-[60px] lg:text-[70px] xl:text-[90px] inline-block bg-clip-text text-black tracking-wide font-bold text-center ${instrumentSerif.className}`}
              style={{
                backgroundImage:
                  "linear-gradient(180deg, var(--text-primary, rgb(14, 28, 41)) 34%, var(--text-foreground, rgba(94, 120, 143, 0.5)) 124%)",
              }}
            >
              Senior Frontend Engineer
            </h1>
            <Typewriter />
          </motion.div>

          <motion.span
            className="text-[12px] sm:text-[16px] text-text-primary font-normal mb-6 max-w-[550px] text-center px-3"
            variants={itemVariants}
          >
            Transforming ideas into sleek, high-performance web experiences —
            powered by expert frontend engineering and thoughtful AI
            integration.
          </motion.span>

          <motion.div variants={itemVariants} className="w-full">
            <CommonButtons fromLanding={true} />
          </motion.div>
        </motion.div>
      </section>
    </AuroraBackground>
  );
}
