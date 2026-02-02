const SizeOption = () => {
  return (
    <>
      <div className="size mt-30">
        <h6 className="text-black">
          <span>Size -</span> UK/IND
        </h6>
        <button className="btn-blank text-underline">Size Guide</button>
      </div>

      <ul className="size-button mt-10">
        <li>
          <button className="btn-bordered-grey">S</button>
        </li>
        <li>
          <button className="btn-bordered-grey">M</button>
        </li>
        <li>
          <button className="btn-bordered-grey">L</button>
        </li>
      </ul>
    </>
  );
};

export default SizeOption;
