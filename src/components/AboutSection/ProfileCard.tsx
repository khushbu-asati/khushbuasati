import Image from "next/image";
import Available from "../SharedComponents/Available";
import { SocialNetworkList } from "@/constant/SocialNetword";
import Link from "next/link";
import ContactMe from "@/components/SharedComponents/ContactMe";

export default function ProfileCard() {
  return (
    <div
      className="flex flex-col items-center justify-center w-full md:max-w-[280px] gap-2 bg-slate-100 text-text-primary px-2 pt-[6px] pb-[30px] rounded-2xl"
      style={{
        boxShadow:
          "0 .5971439051427296px .5971439051427296px -.875px #10314d24, 0 1.8108796073283884px 1.8108796073283884px -1.75px #10314d21, 0 4.786990141113346px 4.786990141113346px -2.625px #10314d1c, 0 15px 15px -3.5px #10314d0f",
      }}
    >
      <Image
        src="/assets/SPA_DEVELOPEMENT.webp"
        alt=""
        width={336}
        height={220}
        className="w-full sm:w-[336px] h-[220px] rounded-[14px] shadow-md mb-3"
      />
      <Available />
      <h1 className="text-3xl mt-3 ">Khushbu Asati</h1>
      <span className="text-sm text-center">
        Senior Frontend Engineer delivering high-performance, scalable web
        solutions.
      </span>

      <div className="flex items-center justify-center my-4 gap-4">
        {SocialNetworkList.map((social, index) => (
          <Link
            key={index}
            href={social.link}
            target="_blank"
            className="flex items-center justify-center w-10 h-10 bg-border rounded-full"
          >
            <social.icon />
          </Link>
        ))}
      </div>
      <ContactMe className="sm:w-full" />
    </div>
  );
}
