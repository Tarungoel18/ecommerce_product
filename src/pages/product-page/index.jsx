import ProductImages from "../../components/product-images";
import ProductDetails from "../../components/product-details";
import AddToCart from "../../components/add-to-cart-mob";
import SizeGuide from "../../components/size-guide";
import ProductDetailsMobile from "../../components/product-details-mobile";
import AccordianParent from "../../components/accordian-parent";
import { useState, useEffect } from "react";
import { getProduct } from "./services/getProduct";
const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const [loading, setIsLoading] = useState(true);
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [showFullSizeGuide, setShowFullSizeGuide] = useState(false);

  useEffect(() => {
    async function getProductDetails() {
      try {
        var bodyFormData = new FormData();
        bodyFormData.append("product_id", "88");
        setIsLoading(true);
        const product = await getProduct(bodyFormData);
        setProduct(product.data.product);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getProductDetails();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        Loading...
      </div>
    );
  }
  if (!product) {
    return <div className="col-md-4">Product not found</div>;
  }

  return (
    <>
      <section className="products-main">
        <div className="container-fluid">
          <div className="row">
            <ProductImages url={product?.images[0]?.src} />
            <ProductDetails
              product={product}
              setShowSizeGuide={setShowSizeGuide}
            />
            <ProductDetailsMobile product={product} />
            <div className="col-12">
              {/* <!-- PRODUCTS-MAIN STARTS --> */}
              <section className="products-main mt-25 d-mbl">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="product-desc">
                        <div id="app" className="d-mbl">
                          <div className="test" id="size_prod">
                            Select Size
                          </div>
                        </div>
                        <div className="accordion mt-20" id="accordionExample">
                          <AccordianParent />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* <!-- PRODUCTS-MAIN ENDS --> */}

              <div className="clearfix"></div>

              {/* <!-- AUTHENTICATED BY STARTS --> */}
              <section className="authenticated-by spacer d-mbl">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-12">
                      <h5 className="text-black text-center">
                        Authenticated By:
                      </h5>
                      <img
                        src="./src/assets/images/authenticated-img.png"
                        className="img-fluid mx-auto d-block mt-25"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </section>
              {/* <!-- AUTHENTICATED BY ENDS --> */}
            </div>
          </div>
        </div>
      </section>

      <div className="clearfix"></div>

      <div id="contact_section"></div>
      <div id="phone_by"></div>
      <div id="footer"></div>

      <div className="clearfix"></div>

      <AddToCart product={product} />

      <SizeGuide
        isOpen={showSizeGuide}
        onClose={() => setShowSizeGuide(false)}
        onOpenFullGuide={() => {
          setShowSizeGuide(false);
          setShowFullSizeGuide(true);
        }}
        onCloseFullGuide={() => setShowFullSizeGuide(false)}
        showFullSizeGuide={showFullSizeGuide}
        setShowSizeGuide={setShowSizeGuide}
      />
    </>
  );
};

export default ProductPage;
