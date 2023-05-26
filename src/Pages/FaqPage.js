import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const FrequentlyAskedQuestions = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [faqItems, setFaqItems] = useState([]);

  useEffect(() => {
    const fetchFaqItems = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/faq");
        setFaqItems(response.data);
      } catch (error) {
        console.error("Error fetching FAQ items:", error);
      }
    };

    fetchFaqItems();
  }, []);

  const toggleAccordion = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div>
      <h1 className="font-extrabold text-center text-6xl pt-12 pb-2">FAQ`s</h1>
      <div className="flex justify-center items-center min-h-screen h-100 p-4">
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
