import SectionTitle from "@/components/SharedComponents/SectionTitle";
import { ArrowRightLeft } from "lucide-react";
import Card from "./Card";
import { meSection, othersSection } from "@/constant/Comparison";

export default function Comparison() {
  return (
    <section className="w-full flex flex-col items-center rounded-[70px] bg-section-background px-4 py-[100px] sm:px-10">
      <div className="flex flex-col items-center max-w-[1200px] gap-11">
        <SectionTitle
          name="Comparison"
          Icon={<ArrowRightLeft className="size-[15px]" />}
          title="Precision vs Basic"
          description="Building meticulously crafted applications with modern frameworks, ensuring superior performance and user interaction."
        />
        <div className="flex flex-col md:flex-row justify-center w-full gap-6">
          <Card title="Me" list={meSection} showButton={true} />
          <Card title="Others" list={othersSection} />
        </div>
      </div>
    </section>
  );
}
