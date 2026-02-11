import "./index.css";
const AccordionItem = ({ id, heading, body, isOpen, onToggle }) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button acc-item"
          onClick={() => onToggle(id)}
        >
          {heading}
        </button>
      </h2>

      {isOpen && (
        <div className="accordion-body" style={{ padding: "15px" }}>
          {body}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
