import ProductImages from "../../components/product-images";
import ProductDetails from "../../components/product-details";
import BreadCrumbs from "../../components/breadcrumbs";
import AddToCart from "../../components/add-to-cart-mob";
import SizeGuide from "../../components/size-guide";
import ProductDetailsMobile from "../../components/product-details-mobile";
import AccordianParent from "../../components/accordian-parent";
import { breadcrumbItems } from "../../constants/AppConst";
import { useState, useEffect } from "react";
import { getProduct } from "./service";
const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const [loading, setIsLoading] = useState(true);
  useEffect(() => {
    async function getProductDetails() {
      try {
        setIsLoading(true);
        const product = await getProduct();
        setProduct(product.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
      getProductDetails();
  }, []);

  if (loading) {
    return <div className="d-flex justify-content-center align-items-center min-vh-100">Loading...</div>;
  }
  if (!product) {
    return <div className="col-md-4">Product not found</div>;
  }

  return (
    <>
      <div id="header_mobile_inner_ct" className="d-mbl"></div>
      <div id="header" className="d-dsk"></div>

      <div className="clearfix"></div>

      <BreadCrumbs items={breadcrumbItems} />

      <section className="products-main">
        <div className="container-fluid">
          <div className="row">
            <ProductImages url={product?.images[0]} />
            <ProductDetails
              title={product?.title}
              description={product?.description}
              price={product?.price}
              discountPercentage={product?.discountPercentage}
            />
            <ProductDetailsMobile
              title={product?.title}
              description={product?.description}
              price={product?.price}
              discountPercentage={product?.discountPercentage}
            />
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

      <AddToCart />

      <SizeGuide />
    </>
  );
};

export default ProductPage;
