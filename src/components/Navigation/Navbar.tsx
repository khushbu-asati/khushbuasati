"use client";
import React from "react";
import { NavbarItems } from "@/constant/Navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FloatingDock } from "@/components/ui/floating-dock";
import { Routes } from "@/constant/Routes";
import { House } from "lucide-react";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col">
      {" "}
      {/* <nav className="fixed bottom-10 z-50 flex justify-center w-full">
        <ul
          className="flex justify-around items-center rounded-[100px] z-50 w-fit py-[10px] px-[20px] gap-2"
          style={{
            background:
              "linear-gradient(180deg, rgba(14, 28, 41, 0.5) -53%, rgb(14, 28, 41) 100%)",
            boxShadow:
              "rgba(0, 0, 0, 0.28) 0px 0.706592px 0.706592px -0.583333px, rgba(0, 0, 0, 0.27) 0px 1.80656px 1.80656px -1.16667px, rgba(0, 0, 0, 0.26) 0px 3.62176px 3.62176px -1.75px, rgba(0, 0, 0, 0.24) 0px 6.8656px 6.8656px -2.33333px, rgba(0, 0, 0, 0.21) 0px 13.6468px 13.6468px -2.91667px, rgba(0, 0, 0, 0.12) 0px 30px 30px -3.5px, rgba(255, 255, 255, 0.15) 0px 0px 0px 2px inset",
            backdropFilter: "blur(8px)",
          }}
        >
          <li className="text-sm text-white py-[5px] px-[14px]">
            <Link
              href={`${pathname === "/" ? "#" + NavbarItems[0].href : "/"}`}
            >
              {NavbarItems[0].title}
            </Link>
          </li>
          {NavbarItems.slice(1).map((item, index) => (
            <li key={index} className="text-sm text-white py-[5px] px-[14px]">
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav> */}
      <FloatingDock
        items={[
          { title: "Home", href: `${Routes.home}`, icon: <House /> },
          { title: "Expertise", href: `#${Routes.about}`, icon: <House /> },
          { title: "Projects", href: `${Routes.projects}`, icon: <House /> },
          { title: "Services", href: `#${Routes.services}`, icon: <House /> },
          { title: "Contact", href: `${Routes.contact}`, icon: <House /> },
        ]}
      />
    </div>
  );
};

export default Navbar;
