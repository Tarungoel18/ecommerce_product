const AccordionItem = ({ id, heading, body, isOpen, onToggle }) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button"
          onClick={() => onToggle(id)}
          style={{
            background: "none",
            border: "none",
            width: "100%",
            textAlign: "left",
            padding: "15px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
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
