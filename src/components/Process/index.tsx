import React from "react";
import SectionTitle from "../SharedComponents/SectionTitle";
import { processSteps } from "@/constant/Process";
import StepCard from "./StepCard";
import CommonButtons from "../SharedComponents/CommonButtons";
import { ChartNoAxesColumnIncreasing } from "lucide-react";

export default function Process() {
  return (
    <section className="w-full flex flex-col items-center px-4 py-[100px] sm:px-10">
      <div className="flex flex-col items-center max-w-[1200px] gap-11">
        <SectionTitle
          name="Process"
          Icon={<ChartNoAxesColumnIncreasing className="size-[15px]" />}
          title="Collaborative Frontend Development"
          description="A structured approach to building high-performance web applications."
        />
        <div className="w-full grid grid-cols-1 sm:grid-cols-2  items-start gap-11">
          {processSteps.map((step, index) => (
            <StepCard key={index} step={step} />
          ))}
        </div>
        <CommonButtons />
      </div>
    </section>
  );
}
