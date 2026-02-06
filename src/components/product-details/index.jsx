import AccordianParent from "../accordian-parent";
import AddToCart from "../add-to-cart";
import ProductShare from "../product-share";
import SizeOption from "../size-option";
const ProductDetails = ({ product, setShowSizeGuide }) => {
  return (
    <>
      <div className="col-lg-4">
        <div className="product-desc d-dsk">
          <h3>{product?.name}</h3>

          <p className="text-black">
            {product?.short_description.replace(/<\/?p>/g, "")}
          </p>
          <div className="price mt-30">
            <p>
              <span className="text-black">{product?.price}</span> &nbsp;{" "}
              <span className="text-error">
                ({product?.discount_percentage}% off)
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
              onClick={() => setShowSizeGuide(true)}
              className="btn-blank text-underline"
            >
              Size Guide
            </button>
          </div>
          <SizeOption />
          <AddToCart product={product} />
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
