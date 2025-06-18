import Header from "@/components/Navigation/Header";
import WorkWrapper from "@/components/Work";
import { Suspense } from "react";

export default function page() {
  return (
    <div>
      <div className="w-full flex justify-center items-center">
        <Header />
      </div>
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-violet-500"></div>
          </div>
        }
      >
        <WorkWrapper />
      </Suspense>
    </div>
  );
}
