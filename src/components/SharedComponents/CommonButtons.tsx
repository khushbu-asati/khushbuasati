// import { Button } from "@/components/ui/button";
// import { ArrowRight } from "lucide-react";
import ContactMe from "@/components/SharedComponents/ContactMe";

export default function CommonButtons({
  fromLanding = false,
}: {
  fromLanding?: boolean;
}) {
  return (
    <div className="flex flex-row gap-4 w-full items-center justify-center">
      <ContactMe
        className={`text-[12px] ${
          fromLanding
            ? "sm:text-[14px] w-[45%] md:max-w-[190px]"
            : "w-fit sm:w-[160px] sm:text-[14px]"
        }`}
        title={fromLanding ? "Let's Work Together" : "Contact Me"}
      />
      {/* <Button
        className={`rounded-[10px] h-[44px] opacity-[1] text-text-primary font-bold cursor-pointer text-[12px] bg-white hover:bg-white ${
          fromLanding
            ? "sm:text-[14px] w-[45%] md:max-w-[160px] md:text-[14px]"
            : "w-fit sm:w-[160px] sm:text-[14px]"
        }`}
        style={{
          boxShadow:
            "rgba(16, 49, 77, 0.14) 0px 0.597144px 0.597144px -0.875px, rgba(16, 49, 77, 0.13) 0px 1.81088px 1.81088px -1.75px, rgba(16, 49, 77, 0.11) 0px 4.78699px 4.78699px -2.625px, rgba(16, 49, 77, 0.06) 0px 15px 15px -3.5px",
        }}
      >
        <ArrowRight />
        See Projects
      </Button> */}
    </div>
  );
}
