"use client";
import { Suspense } from "react";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/components/Footer"));
const DetailedExperienceCard = dynamic(
  () => import("@/components/Work/DetailedExperienceCard")
);

function WorkWrapper() {
  return (
    <Suspense>
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-24 pb-0">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-background" />
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-300" />
          </div>

          {/* Content */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
                </span>
                <span className="text-sm font-medium text-violet-500">
                  Currently Senior Frontend Engineer
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="block bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
                  Professional Journey
                </span>
                <span className="block text-2xl md:text-3xl lg:text-4xl mt-4 text-gray-600 dark:text-gray-300">
                  Building the future of web experiences
                </span>
              </h1>

              {/* Description */}
              <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300">
                With hands-on expertise in React, Next.js, and AI integration,
                I’ve built high-performance web applications focused on speed,
                scalability, and user experience.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-2 gap-6 max-w-4xl mx-auto pt-8 mb-28">
                <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-purple-500/10">
                  <div className="text-3xl font-bold text-violet-500">4.5+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Years Experience
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-violet-500/10">
                  <div className="text-3xl font-bold text-violet-500">5+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Products Enhanced & Projects Delivered
                  </div>
                </div>
              </div>
              <DetailedExperienceCard />
              <Footer className="bg-transparent mt-20" />
            </div>
          </div>
        </section>
      </main>
    </Suspense>
  );
}

export default WorkWrapper;
