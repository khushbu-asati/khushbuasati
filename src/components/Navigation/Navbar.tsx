"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const SlideTabs = dynamic(
  () => import("@/components/Navigation/SlideTabs")
);

const Navbar: React.FC = () => {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 block">
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
        className="w-full"
      >
        <SlideTabs />
      </motion.div>
    </div>
  );
};

export default Navbar;
