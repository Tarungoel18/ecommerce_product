import ProductImages from "../../components/product-images";
import ProductDetails from "../../components/product-details";
import BreadCrumbs from "../../components/breadcrumbs";
const ProductPage = () => {
  return (
    <>
      <BreadCrumbs />

      <section className="products-main">
        <div className="container-fluid">
          <div className="row">
            <ProductImages />
            <ProductDetails />
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductPage