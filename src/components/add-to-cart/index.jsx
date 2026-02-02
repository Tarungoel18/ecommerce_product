import wishlist from "../../assets/images/icons/wishlist.svg";
const AddToCart = () => {
  return (
    <div className="add-to-cart-btn mt-20">
      <button className="btn-primary">ADD TO BAG</button>
      <button className="btn-blank">
        <img src={wishlist} alt="" />
      </button>
    </div>
  );
};

export default AddToCart;
