import SectionTitle from "@/components/SharedComponents/SectionTitle";
import CommonButtons from "@/components/SharedComponents/CommonButtons";
import { ServiceIcon } from "@/icons";
import { ServicesGroup } from "@/constant/Services";
import Image from "next/image";
import { Routes } from "@/constant/Routes";

export default function Services() {
  return (
    <section id={Routes.services} className="w-full flex flex-col items-center rounded-[70px] bg-section-background px-4 py-[100px] sm:px-10">
      <div className="flex flex-col items-center max-w-[1200px] gap-11">
        <SectionTitle
          name="Services"
          Icon={<ServiceIcon />}
          title="Building Future-Ready Frontend Solutions"
          description="Architecting scalable, performant, and accessible web applications with modern frameworks."
        />
        <div>
          {ServicesGroup.map((group, index) => (
            <div key={index} className="flex w-full gap-6 flex-col lg:flex-row">
              {group.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
              ))}
            </div>
          ))}
        </div>
        <CommonButtons />
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: any; index: number }) {
  return (
    <div
      key={index}
      className={`flex flex-col sm:flex-row gap-10 items-center justify-between w-full px-4 py-4 bg-slate-100 rounded-[20px] mb-6 shadow-[rgba(16,49,77,0.137)_0px_0.597px_0.597px_-0.875px,rgba(16,49,77,0.13)_0px_1.810px_1.810px_-1.75px,rgba(16,49,77,0.114)_0px_4.786px_4.786px_-2.625px,rgba(16,49,77,0.06)_0px_15px_15px_-3.5px] hover:shadow-[5px_10px_red] ${
        service.image === undefined
          ? "max-w-[100%] lg:max-w-[30%]"
          : "max-w-[100%] lg:max-w-[70%]"
      }`}
      style={{
        boxShadow:
          "rgba(16, 49, 77, 0.137) 0px 0.597144px 0.597144px -0.875px, rgba(16, 49, 77, 0.13) 0px 1.81088px 1.81088px -1.75px, rgba(16, 49, 77, 0.114) 0px 4.78699px 4.78699px -2.625px, rgba(16, 49, 77, 0.06) 0px 15px 15px -3.5px",
      }}
    >
      {service.image && (
        <Image
          src={service.image}
          alt={service.title}
          width={336}
          height={220}
          className="w-full sm:w-[336px] h-[220px] rounded-[20px] shadow-md"
        />
      )}
      <div>
        <div className="flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full mb-4">
          <service.icon className="w-6 h-6" aria-label={service.title} />
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-[20px] font-semibold text-text-primary">
            {service.title}
          </h3>
          <p className="text-text-secondary">{service.description}</p>
        </div>
      </div>
    </div>
  );
}
