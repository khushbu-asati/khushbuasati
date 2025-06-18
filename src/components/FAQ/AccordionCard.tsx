import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordionCard({
  details,
  index,
}: {
  details: { question: string; answer: string };
  index: number;
}) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-0"
    >
      <AccordionItem
        value={`item-${index}`}
        className={`flex flex-col w-full gap-2 bg-slate-100 text-text-primary px-4 py-3 rounded-[10px]`}
        style={{
          boxShadow:
            "0 .5971439051427296px .5971439051427296px -.875px #10314d24, 0 1.8108796073283884px 1.8108796073283884px -1.75px #10314d21, 0 4.786990141113346px 4.786990141113346px -2.625px #10314d1c, 0 15px 15px -3.5px #10314d0f",
        }}
      >
        <AccordionTrigger className="flex cursor-pointer p-0 hover:no-underline font-medium"><span className="text-left w-full text-[16px]">{details.question}</span></AccordionTrigger>
        <AccordionContent className="p-0">
          <p>{details.answer}</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
