import AccordianParent from "../accordian-parent";
import AddToCart from "../add-to-cart";
import ProductShare from "../product-share";
import SizeOption from "../size-option";

const ProductDetails = () => {
  return (
    <div className="col-md-4">
      <div className="product-desc d-dsk">
        <h3>Versache Collection</h3>
        <p className="text-black">Orange graphic print polo</p>
        <div className="price mt-30">
          <p>
            <del>
              <i className="fas fa-rupee-sign"></i> 26,500
            </del>
            &nbsp;&nbsp;{" "}
            <span className="text-black">
              <i className="fas fa-rupee-sign"></i> 15,950
            </span>{" "}
            &nbsp; <span className="text-error">(40% off)</span>
          </p>
          <span className="text-grey">
            Incl. Duties & GST, EMI starts @ 887/month
          </span>
        </div>
        <div className="size mt-30">
          <h6 className="text-black">
            <span>Size -</span> UK/IND
          </h6>
          <button
            onclick="sizeGuideFunction()"
            className="btn-blank text-underline"
          >
            Size Guide
          </button>
        </div>
        <SizeOption/>
         <AddToCart/>
        <div className="accordion mt-30" id="accordionExample">
          <AccordianParent/>
        </div>
        <ProductShare/>
      </div>
    </div>
  );
};

export default ProductDetails;
