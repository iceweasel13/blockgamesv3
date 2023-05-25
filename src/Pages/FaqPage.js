import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const FrequentlyAskedQuestions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const faqItems = [
    {
      question: "Soru 1",
      answer: "Cevap 1",
    },
    {
      question: "Soru 2",
      answer: "Cevap 2",
    },
    {
      question: "Soru 2",
      answer: "Cevap 2",
    },
    {
      question: "Soru 2",
      answer: "Cevap 2",
    },
    {
      question: "Soru 2",
      answer: "Cevap 2",
    },
    {
      question: "Soru 2",
      answer: "Cevap 2",
    },
    {
      question: "Soru 2",
      answer: "Cevap 2",
    },
    {
      question: "Soru 2",
      answer: "Cevap 2",
    },
    {
      question: "Soru 2",
      answer: "Cevap 2",
    },
    {
      question: "Soru 2",
      answer: "Cevap 2",
    },
    {
      question: "Soru 2",
      answer: "Cevap 2",
    },
    {
      question: "Soru 2",
      answer: "Cevap 2",
    },
    {
      question: "Soru 2",
      answer: "Cevap 2",
    },
    {
      question: "Soru 2",
      answer: "Cevap 2",
    },
    {
      question: "Soru 2",
      answer: "Cevap 2",
    },
    {
      question: "Soru 2",
      answer: "Cevap 2",
    },
  ];

  return (
    <div>
      <h1 className="font-extrabold text-center text-6xl pt-12 pb-2">FAQ`s</h1>
      <div className="flex justify-center items-center h-100 p-4">
        <div className="w-full max-w-md bg-pink-500 p-4 rounded-lg text-black">
          {faqItems.map((item, index) => (
            <div key={index} className="my-4 border border-black p-2 rounded">
              <div
                className="flex items-center justify-between font-bold cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <div>{item.question}</div>
                <FontAwesomeIcon
                  icon={activeIndex === index ? faChevronUp : faChevronDown}
                />
              </div>
              {activeIndex === index && (
                <div className="pl-4">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
