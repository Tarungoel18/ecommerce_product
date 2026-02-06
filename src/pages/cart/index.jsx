import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getCartDetails } from "./service/getCartDetails";

const Cart = () => {
  const sessionId = useSelector((state) => state.session.session);
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!sessionId) return;

    const fetchCart = async () => {
      try {
        setLoading(true);

        const formData = new FormData();
        formData.append("session_data", sessionId);
        formData.append("email", "akumar2@velsof.com");

        const res = await getCartDetails(formData);
        setCart(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, [sessionId]);

  if (!sessionId)
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        Your cart is empty
      </div>
    );
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        Loading...
      </div>
    );
  }
  return (
    <div className="container my-4">
      <h3 className="mb-4">Shopping Cart</h3>

      <div className="row">
        <div className="col-12">
          {cart?.products?.map((item) => (
            <div key={item.product_id} className="card mb-3 shadow-sm">
              <div className="row g-0 align-items-center">
                <div className="col-4 col-md-3">
                  <img
                    src={item.images}
                    alt={item.title}
                    className="img-fluid rounded-start"
                  />
                </div>

                <div className="col-8 col-md-9">
                  <div className="card-body">
                    <h6 className="card-title mb-1">{item.title}</h6>
                    <p className="text-muted mb-1">Price: {item.price}</p>
                    <p className="mb-1">Qty: {item.quantity}</p>
                    <strong>{item.total_price}</strong>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="mb-3">Order Summary</h5>

              {cart?.totals?.map((total, index) => (
                <div
                  key={index}
                  className="d-flex justify-content-between mb-2"
                >
                  <span>{total.name}</span>
                  <strong>{total.value}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
