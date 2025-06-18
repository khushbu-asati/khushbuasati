"use client";
import { useRef, useState } from "react";
import { NAVBAR_ITEMS } from "@/constant/Routes";
import { motion } from "framer-motion";
import Link from "next/link";

type PositionType = {
  left: number;
  width: number;
  opacity: number;
};

const SlideTabs = () => {
  const [position, setPosition] = useState<PositionType>({
    left: 0,
    width: 0,
    opacity: 0,
  });
  return (
    <ul
      className=" h-14 gap-1 sm:gap-4 rounded-[100px] bg-gray-50 pb-3 flex items-center relative min-w-full sm:min-w-full p-1"
      style={{
        background:
          "linear-gradient(180deg, rgba(14, 28, 41, 0.5) -53%, rgb(14, 28, 41) 100%)",
        boxShadow:
          "rgba(0, 0, 0, 0.28) 0px 0.706592px 0.706592px -0.583333px, rgba(0, 0, 0, 0.27) 0px 1.80656px 1.80656px -1.16667px, rgba(0, 0, 0, 0.26) 0px 3.62176px 3.62176px -1.75px, rgba(0, 0, 0, 0.24) 0px 6.8656px 6.8656px -2.33333px, rgba(0, 0, 0, 0.21) 0px 13.6468px 13.6468px -2.91667px, rgba(0, 0, 0, 0.12) 0px 30px 30px -3.5px, rgba(255, 255, 255, 0.15) 0px 0px 0px 2px inset",
        backdropFilter: "blur(8px)",
      }}
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
    >
      {NAVBAR_ITEMS.map((item) => (
        <Tab key={item.title} setPosition={setPosition}>
          <Link href={item.href} className="whitespace-nowrap">
            {item.title}
          </Link>
        </Tab>
      ))}
      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({
  children,
  setPosition,
}: {
  children: React.ReactNode;
  setPosition: (position: PositionType) => void;
}) => {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current?.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className="relative z-10 block cursor-pointer mb-[-7px] w-fit px-4 py-3 text-xs text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }: { position: PositionType }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-[76%] w-36 mb-[-7px] rounded-full md:h-12 bg-slate-300"
      // style={{
      //   background: 'linear-gradient(180deg, rgba(94, 120, 143, 0.5) 0%, rgb(14, 28, 41) 229%)'
      // }}
    />
  );
};

export default SlideTabs;
