import { useState } from "react";
import { AccordionItem } from "./AccordionItem";

export const AccordionList = ({ categoriesList }) => {
  const [accordionOpenIndex, setAccordionOpenIndex] = useState(0);

  return (
    <div className="mt-7">
      {categoriesList?.map((category, index) => (
        <AccordionItem
          key={category?.card?.card?.title}
          categoryItem={category}
          isAccordionOpen={accordionOpenIndex === index ? true : false}
          setAccordionOpenIndex={() =>
            accordionOpenIndex === index
              ? setAccordionOpenIndex(null)
              : setAccordionOpenIndex(index)
          }
        />
      ))}
    </div>
  );
};
