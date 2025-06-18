import Image from "next/image";
import { SOCIAL_LINKS } from "@/constant/SocialNetwork";
import Link from "next/link";

import dynamic from "next/dynamic";
const Available = dynamic(
  () => import("@/components/SharedComponents/Available")
);
const ContactMe = dynamic(
  () => import("@/components/SharedComponents/ContactMe")
);

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
        src="/assets/Profile.jpg"
        alt=""
        width={336}
        height={350}
        className="w-full md:h-[350px] lg:h-[350px] rounded-[14px] shadow-md mb-3 object-cover object-center"
      />
      <Available />
      <h1 className="text-3xl mt-3 ">Khushbu Asati</h1>
      <span className="text-sm text-center">
        Senior Frontend Engineer delivering high-performance, scalable web
        solutions.
      </span>

      <div className="flex items-center justify-center my-4 gap-4">
        {SOCIAL_LINKS.map((social, index) => (
          <Link
            key={index}
            href={social.href}
            target="_blank"
            className="flex items-center justify-center w-10 h-10 bg-border rounded-full hover:scale-[1.02]"
          >
            <social.icon />
          </Link>
        ))}
      </div>
      <ContactMe className="w-full sm:text-[14px]" />
    </div>
  );
}
