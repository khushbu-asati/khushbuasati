import { processSteps } from "@/constant/Process";
import { ChartNoAxesColumnIncreasing } from "lucide-react";
import dynamic from "next/dynamic";

const StepCard = dynamic(() => import("@/components/Process/StepCard"));
const SectionTitle = dynamic(() => import("@/components/SharedComponents/SectionTitle"));
const CommonButtons = dynamic(() => import("@/components/SharedComponents/CommonButtons"));


export default function Process() {  
  return (
    <section
      className="w-full flex flex-col items-center px-4 py-[100px] sm:px-10"
    >
      <div className="flex flex-col items-center max-w-[1200px] gap-6">
        <SectionTitle
          name="Process"
          Icon={<ChartNoAxesColumnIncreasing className="size-[15px]" />}
          title="Collaborative Frontend Development"
          description="A structured approach to building high-performance web applications."
        />
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:max-w-[1100px] items-start gap-6 my-5">
          {processSteps.map((step, index) => (
            <StepCard key={index} step={step} />
          ))}
        </div>
        <CommonButtons />
      </div>
    </section>
  );
}
