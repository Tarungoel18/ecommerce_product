import { addToCart } from "./services/addToCart";
import { useDispatch, useSelector } from "react-redux";
import { setSessionId } from "../../redux/slice/sessionSlice";
import toast from "react-hot-toast";
const AddToCart = ({ product }) => {
  const dispatch = useDispatch();
  const sessionData = useSelector((state) => state.session.session);
  const handleAddToCart = async () => {
    try {
      const bodyFormData = new FormData();
      const payload = {
        cart_products: [
          {
            product_id: product.id_product,
            quantity: "1",
            option: [],
            id_product_attribute: "0",
          },
        ],
        coupon: "",
        voucher: "",
        session_id: sessionData || "",
        email: "",
        user_type: "",
        request_type: "add",
      };
      bodyFormData.append("cart_products", JSON.stringify(payload));
      bodyFormData.append("iso_code", "en");
      bodyFormData.append("id_currency", "1");
      bodyFormData.append("session_data", sessionData || "");
      bodyFormData.append("email", "akumar2@velsof.com");

      const res = await addToCart(bodyFormData);
      if (res?.data?.session_data) {
        dispatch(setSessionId(res?.data?.session_data));
        toast.success("Item added to cart");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to add item to cart");
    }
  };
  return (
    <div className="bottom-buttton-prod d-mbl">
      <button className="btn-primary btn-fw" onClick={handleAddToCart}>
        ADD TO BAG
      </button>
    </div>
  );
};

export default AddToCart;
