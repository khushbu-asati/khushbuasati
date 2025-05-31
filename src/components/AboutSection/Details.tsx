import React from "react";
import IntroSection from "./IntroSection";
import TechnicalExpertise from "./TechnicalExpertise";
import DashedBorder from "../SharedComponents/DashedBorder";

export default function Details() {
  return (
    <div className="flex flex-col w-full md:max-w-[80%] gap-8 pt-[10px]">
      <IntroSection />
      <DashedBorder />
      <TechnicalExpertise />
    </div>
  );
}
