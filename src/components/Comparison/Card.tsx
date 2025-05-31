import ContactMe from "../SharedComponents/ContactMe";
import DashedBorder from "../SharedComponents/DashedBorder";
import { Check } from "lucide-react";

export default function Card({
  title,
  list,
  showButton,
}: {
  title: string;
  list?: string[];
  showButton?: boolean;
}) {
  return (
    <div
      className="bg-background rounded-2xl h-fit flex flex-col gap-6 py-9 px-6 w-full md:w-[50%]"
      style={{
        boxShadow:
          "0 .5971439051427296px .5971439051427296px -.875px #10314d24, 0 1.8108796073283884px 1.8108796073283884px -1.75px #10314d21, 0 4.786990141113346px 4.786990141113346px -2.625px #10314d1c, 0 15px 15px -3.5px #10314d0f",
      }}
    >
      <h1 className="w-full text-center text-4xl font-medium">{title}</h1>
      <DashedBorder />
      <div className="flex flex-col gap-4">
        {list?.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 text-sm text-text-primary"
          >
            <Check className="size-[15px] text-text-primary" />
            <span className="">{item}</span>
          </div>
        ))}
      </div>
      {showButton && <ContactMe className="sm:w-full" />}
    </div>
  );
}
