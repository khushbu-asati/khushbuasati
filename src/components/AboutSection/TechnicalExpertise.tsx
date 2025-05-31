import { TechnicalExpertiseList } from "@/constant/TechnicalExpertise";
import React from "react";

export default function TechnicalExpertise() {
  return (
    <div className="w-full flex flex-col">
      <span className="font-semibold text-text-primary text-[18px]">
        Technical Expertise
      </span>
      {TechnicalExpertiseList.map((item, index) => (
        <div key={index} className="flex flex-col gap-2 mt-4 w-full">
          <span className="text-primary bg-section-background w-full rounded-[10px] p-[10px] text-sm font-semibold">
            {item.title}
          </span>
          <div className="flex flex-wrap gap-2 pt-[10px]">
            {item.list.map((listItem, index) => (
              <span
                key={index}
                className="text-text-secondary text-[13px] bg-slate-100 px-2 py-1 rounded-full"
              >
                {listItem}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
