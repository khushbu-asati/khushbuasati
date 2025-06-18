import { ROUTES } from "@/constant/Routes";
import dynamic from "next/dynamic";
const ProfileCard = dynamic(() => import("@/components/AboutSection/ProfileCard"));
const Details = dynamic(() => import("@/components/AboutSection/Details"));

export default function About() {
  return (
    <section id={ROUTES.about} className="w-full flex flex-col items-center px-4 py-[100px] sm:px-10">
      <div className="flex flex-col md:flex-row items-start max-w-[1200px] gap-11">
        <ProfileCard />
        <Details />
      </div>
    </section>
  );
}
