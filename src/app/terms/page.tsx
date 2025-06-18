import Header from "@/components/Navigation/Header";
import TermsOfService from "@/components/TermPolicy";
import dynamic from "next/dynamic";
const Footer = dynamic(() => import("@/components/Footer"));

export default function page() {
  return (
    <div>
      <div className="w-full flex justify-center items-center">
        <Header />
      </div>
      <TermsOfService />
      <Footer />
    </div>
  );
}
