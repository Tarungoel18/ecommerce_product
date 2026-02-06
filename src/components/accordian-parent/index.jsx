import AccordionItem from "../accordian-item";
import { accordionData } from "../../constants/AppConst";
const AccordianParent = () => {
  return (
    <div className="accordion mt-30" id="accordionExample">
      {accordionData.map((item) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          heading={item.heading}
          body={item.body}
        />
      ))}
    </div>
  );
};

export default AccordianParent;
