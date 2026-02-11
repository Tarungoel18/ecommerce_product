import { useState } from "react";
import AccordionItem from "../accordian-item";
import { accordionData } from "../../constants/AppConst";

const AccordianParent = () => {
  const [activeId, setActiveId] = useState(null);

  const handleToggle = (id) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="accordion mt-30">
      {accordionData.map((item) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          heading={item.heading}
          body={item.body}
          isOpen={activeId === item.id}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
};

export default AccordianParent;
