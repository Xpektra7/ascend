import { useState } from "react";
import { faq } from "#/data/faq";
import Pill from "./pill";

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-border">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between py-8 text-left cursor-pointer group"
      >
        <h3 className="text-lg md:text-xl pr-4">{question}</h3>
        <span
          className={`text-muted-foreground shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M5 8L10 13L15 8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-8" : "max-h-0"}`}
      >
        <p className="text-muted-foreground leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="wrapper">
      <div className="container py-32 flex flex-col items-center px-8 md:px-32">
        <Pill text="FAQ" />
        <h2 className="text-4xl md:text-6xl mt-6 mb-6 text-center">
          Questions? We've got answers.
        </h2>
        <p className="max-w-2xl text-base md:text-xl mb-16 text-center">
          Everything you need to know about Ascend 2026.
        </p>
        <div className="w-full max-w-3xl">
          {faq.map((item, i) => (
            <AccordionItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
