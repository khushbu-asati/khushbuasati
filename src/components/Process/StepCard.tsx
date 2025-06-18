import dynamic from "next/dynamic";
const DashedBorder = dynamic(
  () => import("@/components/SharedComponents/DashedBorder")
);

type CardProp = {
  number: string;
  title: string;
  description: string;
  stepLabel: string;
};

export default function StepCard({ step }: { step: CardProp }) {
  return (
    <div
      className="bg-background rounded-2xl h-fit flex flex-col gap-6 py-9 px-6 w-full"
      style={{
        boxShadow:
          "0 .5971439051427296px .5971439051427296px -.875px #10314d24, 0 1.8108796073283884px 1.8108796073283884px -1.75px #10314d21, 0 4.786990141113346px 4.786990141113346px -2.625px #10314d1c, 0 15px 15px -3.5px #10314d0f",
      }}
    >
      <div
        className="flex justify-center items-center bg-text-primary size-8 rounded-full text-white"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.09) 0px 1.34368px 0.537473px -0.625px, rgba(0, 0, 0, 0.086) 0px 3.18477px 1.27391px -1.25px, rgba(0, 0, 0, 0.082) 0px 5.80935px 2.32374px -1.875px, rgba(0, 0, 0, 0.08) 0px 9.65802px 3.86321px -2.5px, rgba(0, 0, 0, 0.07) 0px 15.5969px 6.23877px -3.125px, rgba(0, 0, 0, 0.063) 0px 25.5306px 10.2122px -3.75px, rgba(0, 0, 0, 0.04) 0px 43.962px 17.5848px -4.375px, rgba(0, 0, 0, 0) 0px 80px 32px -5px",
        }}
      >
        {step.number}
      </div>
      <h1 className="w-full text-2xl font-medium">{step.title}</h1>
      <span>{step.description}</span>
      <DashedBorder />
      <div className="ml-auto bg-border px-2 py-1 rounded-3xl text-[12px]">
        {step.stepLabel}
      </div>
    </div>
  );
}
