"use client";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constant/Routes";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ContactMe({
  className,
  title,
}: {
  className?: string;
  title?: string;
}) {
  const router = useRouter();
  return (
    <Button
      className={`rounded-[10px] h-[44px] opacity-[1] text-white font-bold cursor-pointer text-[12px] ${className ? className : "w-fit sm:w-[160px] sm:text-[14px]"}`}
      style={{
        backgroundImage:
          "linear-gradient(127deg, rgb(14, 28, 41) -68%, rgb(50, 61, 104) 100%)",
        boxShadow:
          "rgb(184, 193, 230) 0px 1px 2px 0px inset, rgba(46, 64, 128, 0.345) 0px 0.706592px 0.706592px -0.583333px, rgba(46, 64, 128, 0.337) 0px 1.80656px 1.80656px -1.16667px, rgba(46, 64, 128, 0.325) 0px 3.62176px 3.62176px -1.75px, rgba(46, 64, 128, 0.306) 0px 6.8656px 6.8656px -2.33333px, rgba(46, 64, 128, 0.26) 0px 13.6468px 13.6468px -2.91667px, rgba(46, 64, 128, 0.15) 0px 30px 30px -3.5px",
      }}
      onClick={() => router.push(ROUTES.contact)}
    >
      <ArrowUpRight />
      {title ?? "Contact Me"}
    </Button>
  );
}
