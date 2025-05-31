import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ContactMe from "@/components/SharedComponents/ContactMe";

export default function CommonButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <ContactMe />
      <Button
        className="rounded-[10px] h-[44px] opacity-[1] text-text-primary w-full sm:w-[160px] font-bold cursor-pointer shadow-2xl"
        style={{
          // backgroundImage:
          //   "linear-gradient(126deg, rgba(94, 120, 143, 0.5) -44%, rgba(240, 248, 255, 0.9) 55%)",

          backgroundImage: `linear-gradient(126deg, rgba(94, 120, 143, 0.5) -44%, rgba(240, 248, 255, 0.9) 55.00000000000001%)`
        //   boxShadow:
        // `rgb(184, 193, 230) 0px 1px 2px 0px inset,
        //   rgba(46, 64, 128, 0.345) 0px 0.7px 0.7px -0.5px,
        //   rgba(46, 64, 128, 0.337) 0px 1.8px 1.8px -1.1px,
        //   rgba(46, 64, 128, 0.325) 0px 3.6px 3.6px -1.7px,
        //   rgba(46, 64, 128, 0.306) 0px 6.8px 6.8px -2.3px,
        //   rgba(46, 64, 128, 0.26) 0px 13.6px 13.6px -2.9px,
        //   rgba(46, 64, 128, 0.15) 0px 30px 30px -3.5px`    
        }}
      >
        <ArrowRight />
        See Projects
      </Button>
    </div>
  );
}
