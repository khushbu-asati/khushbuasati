import CommonButtons from "../SharedComponents/CommonButtons";
import { Handshake } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="w-full flex flex-col items-center rounded-t-[70px] bg-section-background px-4 pt-[80px] pb-[50px] bottom-0 relative sm:px-10">
      <div className="flex flex-col items-center max-w-[640px] gap-6">
        <div
          className="rounded-full flex justify-center items-center text-white size-20 animate-bounce [animation-delay:-.3s]"
          style={{
            background:
              "linear-gradient(180deg, rgba(94, 120, 143, 0.5) -38%, rgb(14, 28, 41) 41%)",
            boxShadow:
              "rgba(0, 0, 0, 0.09) 0px 1.34368px 0.537473px -0.625px, rgba(0, 0, 0, 0.09) 0px 3.18477px 1.27391px -1.25px, rgba(0, 0, 0, 0.08) 0px 5.80935px 2.32374px -1.875px, rgba(0, 0, 0, 0.08) 0px 9.65802px 3.86321px -2.5px, rgba(0, 0, 0, 0.07) 0px 15.5969px 6.23877px -3.125px, rgba(0, 0, 0, 0.06) 0px 25.5306px 10.2122px -3.75px, rgba(0, 0, 0, 0.04) 0px 43.962px 17.5848px -4.375px, rgba(0, 0, 0, 0) 0px 80px 32px -5px",
          }}
        >
          <Handshake className="size-14" />
        </div>
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl sm:text-[56px] text-center text-primary">
            Tell Me About Your Next Creative Project
          </h1>
          <span className="text-center text-primary flex">
            Let's build exceptional web experiences together. Reach out to
            discuss your project requirements.
          </span>
        </div>
        <CommonButtons />
      </div>
      <div className="flex items-center justify-between gap-4 mt-36 w-full lg:mt-32">
        <span>© 2025 Khushbu Asati. All rights reserved.</span>
        <div className="flex gap-4">
          <Link href="/" target="_blank">
            Privacy Policy
          </Link>
          <Link href="/" target="_blank">
            Sitemap
          </Link>
        </div>
      </div>
    </section>
  );
}
