"use client";
import { Dancing_Script } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";
import { ROUTES } from "@/constant/Routes";
import { SOCIAL_LINKS } from "@/constant/SocialNetwork";
import dynamic from "next/dynamic";

const Available = dynamic(
  () => import("@/components/SharedComponents/Available")
);

const dancingScript = Dancing_Script({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }} // Starts above the screen, hidden
      animate={{ y: 0, opacity: 1 }} // Animates into position
      transition={{ duration: 1, ease: "easeOut" }} // Adjust timing here
      className="flex justify-between p-[20px] fixed w-full max-w-[1300px] top-0 z-50"
      style={{ backdropFilter: "blur(5px)" }}
    >
      <div className="flex justify-between w-full">
        <Link
          href={ROUTES.default}
          className={`text-[26px] hidden sm:block text-text-primary font-bold cursor-pointer ${dancingScript.className}`}
        >
          Khushbu Asati
        </Link>
        <Link
          href={ROUTES.default}
          className={`text-[26px] block sm:hidden text-text-primary font-bold cursor-pointer ${dancingScript.className}`}
        >
          KA 
        </Link>
        <div className="flex gap-4 items-center">
          <Available />
          <div className="flex items-center gap-3 text-text-foreground">
            <div className="text-text-foreground">|</div>
            {SOCIAL_LINKS.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                target="_blank"
                className={`text-text-primary font-bold cursor-pointer hover:scale-[1.2] ${social.className}`}
              >
                <social.icon />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.header>
  );
}
