import Available from "@/components/SharedComponents/Available";
import { LinkedinIcon, GithubIcon } from "@/icons";
import { Dancing_Script } from 'next/font/google';


const dancingScript = Dancing_Script({
  weight: ['400', '500', '600', '700'], // Dancing Script has several weights
  subsets: ['latin'], // Or other subsets you need
});

export default function Header() {
  return (
    <header
      className="flex justify-between p-[20px] fixed w-full top-0"
      style={{
        backdropFilter: "blur(5px)",
      }}
    >
      <div className="flex justify-between w-full">
        <a href={"/"} className={`text-[26px] text-text-primary font-bold cursor-pointer ${dancingScript.className}`}>
          Khushbu Asati
        </a>
        <div className="flex gap-4 items-center">
          <Available />
          <div className="flex items-center gap-3 text-text-foreground">
            <div className="text-text-foreground">|</div>
            <LinkedinIcon />
            <GithubIcon />
          </div>
        </div>
      </div>
    </header>
  );
}
