import dynamic from "next/dynamic";
const IntroSection = dynamic(() => import("@/components/AboutSection/IntroSection"));
const TechnicalExpertise = dynamic(() => import("@/components/AboutSection/TechnicalExpertise"));
const DashedBorder = dynamic(() => import("@/components/SharedComponents/DashedBorder"));


export default function Details() {
  return (
    <div className="flex flex-col w-full md:max-w-[80%] gap-8 pt-[10px]">
      <IntroSection />
      <DashedBorder />
      <TechnicalExpertise />
    </div>
  );
}
