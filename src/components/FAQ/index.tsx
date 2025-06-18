import { CircleHelp } from "lucide-react";
import { FAQs } from "@/constant/FAQS";
import dynamic from "next/dynamic";

const SectionTitle = dynamic(
  () => import("@/components/SharedComponents/SectionTitle")
);
const LazyLoadOnScroll = dynamic(
  () => import("@/components/SharedComponents/LazyLoadOnScroll")
);
const ContactMe = dynamic(
  () => import("@/components/SharedComponents/ContactMe")
);
const CardWrapper = dynamic(
  () => import("@/components/SharedComponents/CardWrapper")
);
const AccordionCard = dynamic(
  () => import("@/components/FAQ/AccordionCard")
);

export default function FAQS() {
  return (
    <LazyLoadOnScroll>
      <section className="w-full flex flex-col items-center rounded-[70px] px-4 py-[100px] sm:px-10">
        <div className="flex flex-col items-center max-w-[1200px] gap-11">
          <SectionTitle
            name="FAQS"
            Icon={<CircleHelp />}
            title="Questions? Answers!"
            description="Find quick answers to the most common questions about the services offered"
          />
          <div className="w-full flex flex-col justify-center gap-8 md:flex-row md:max-w-[1100px]">
            <CardWrapper className="gap-4 px-[20px] pb-[30px] pt-[20px] h-fit w-full md:min-w-[350px] md:max-w-[350px]">
              <div
                className="w-14 h-14 text-text-primary flex items-center bg-slate-100 justify-center rounded-[8px] "
                style={{
                  boxShadow:
                    "0 .7961918735236395px 1.4331453723425511px -.875px #10314d24,0 2.414506143104518px 4.346111057588132px -1.75px #10314d21,0 6.382653521484461px 11.48877633867203px -2.625px #10314d1c,0 20px 36px -3.5px #10314d0f",
                }}
              >
                <CircleHelp />
              </div>
              <h1 className="text-[20px] font-medium">Get In Touch Now!</h1>
              <span className="text-center">
                Still have questions? Feel free to get in touch with me today!
              </span>
              <ContactMe title="Ask A Question" />
            </CardWrapper>

            <div className="flex w-full gap-4 flex-col">
              {FAQs.map((item, index) => (
                <AccordionCard key={index} details={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </LazyLoadOnScroll>
  );
}
