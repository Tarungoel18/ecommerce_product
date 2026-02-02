import SizeOptions from "../size-option";
import AddToCart from "../add-to-cart";
import AdditionalInfo from "../additional-info";
import ProductShare from "../product-share";
const ProductDetails = () => {
  return (
    <div className="col-md-4">
      <div className="product-desc d-dsk">
        <h3>Versache Collection</h3>
        <p className="text-black">Orange graphic print polo</p>

        <div className="price mt-30">
          <p>
            <del>₹26,500</del>&nbsp;&nbsp;
            <span className="text-black">₹15,950</span>
            &nbsp;
            <span className="text-error">(40% off)</span>
          </p>
        </div>

        <SizeOptions />
        <AddToCart />
        <AdditionalInfo />
        <ProductShare />
      </div>
    </div>
  );
}

export default ProductDetails;