import AccordianParent from "../accordian-parent";
import AddToCart from "../add-to-cart";
import ProductShare from "../product-share";
import SizeOption from "../size-option";
const ProductDetails = ({ title,description,price,discountPercentage }) => {
  return (
    <>
      <div className="col-lg-4">
        <div className="product-desc d-dsk">
          <h3>{title}</h3>
          <p className="text-black">{description}</p>
          <div className="price mt-30">
            <p>
              <span className="text-black">
                <i className="fas fa-rupee-sign"></i> ${price}
              </span>{" "}
              &nbsp;{" "}
              <span className="text-error">
                ({discountPercentage}% off)
              </span>
            </p>
            <span className="text-grey">
              Incl. Duties & GST, EMI starts @ 2/month
            </span>
          </div>
          <div className="size mt-30">
            <h6 className="text-black">
              <span>Size -</span> UK/IND
            </h6>
            <button
              onClick="sizeGuideFunction()"
              className="btn-blank text-underline"
            >
              Size Guide
            </button>
          </div>
           <SizeOption />
           <AddToCart />
          <div className="accordion mt-30" id="accordionExample">
            <AccordianParent />
          </div>
          <ProductShare />
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
