import React from "react";
import ProfileCard from "./ProfileCard";
import Details from "./Details";
import { Routes } from "@/constant/Routes";

export default function About() {
  return (
    <section id={Routes.about} className="w-full flex flex-col items-center px-4 py-[100px] sm:px-10">
      <div className="flex flex-col md:flex-row items-start max-w-[1200px] gap-11">
        <ProfileCard />
        <Details />
      </div>
    </section>
  );
}
