"use client";
import { useEffect, useState, FC } from "react";

const sentences = [
  "> REACT/TS",
  "> MODERN FE",
  "> BUILD IT",
  "> TOP CODE",
  "> CODE //",
  "> FRONT END",
  "> UI EXPERT",
  "> NEXT.JS",
  "> JS NINJA",
  "> WEB DEV",
  "> SCALABLE",
  "> PERFORM!",
  "> A11Y PRO",
  "> TESTED OK",
  "> FUTURE-FE",
];

type Phase = "typing" | "pausing" | "deleting";

const Typewriter: FC = () => {
  const [phase, setPhase] = useState<Phase>("typing");
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  const currentSentence = sentences[sentenceIndex];

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (phase === "typing") {
      if (charIndex < currentSentence.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentSentence.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setPhase("deleting");
        }, 1000); // pause before deleting
      }
    }

    if (phase === "deleting") {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(currentSentence.slice(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        }, 50);
      } else {
        // go to next sentence
        timeout = setTimeout(() => {
          setSentenceIndex((prev) => (prev + 1) % sentences.length);
          setPhase("typing");
        }, 200);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, phase, currentSentence]);

  return (
    <div className="w-[150px] h-[80px] border-[1px] bg-[#1a1a1a] rounded relative">
      <div className="absolute top-0 left-0 right-0 height-[150px] bg-[#333] text-white rounded-t-[4px] p-1 flex justify-between items-center">
        <span className="text-[12px]">Status</span>
        <div className="gap-2 flex">
          <div className="bg-red rounded size-[9px]" />{" "}
          <div className="bg-yellow rounded size-[9px]" />
          <div className="bg-green rounded size-[9px]" />
        </div>
      </div>
      <div className="text-left text-[10px] font-mono text-green mt-10 h-12 px-4">
        <span>{displayedText}</span>
        <span className="inline-block w-1 animate-pulse">|</span>
      </div>
    </div>
  );
};

export default Typewriter;
