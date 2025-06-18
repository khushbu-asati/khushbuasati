import Header from "@/components/Navigation/Header";
import ContactForm from "@/components/Contact";

export default function page() {
  return (
    <div>
      <div className="w-full flex justify-center items-center">
        <Header />
      </div>
      <ContactForm />
    </div>
  );
}
