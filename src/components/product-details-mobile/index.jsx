import ShareIcon from "../../assets/images/icons/Share-Icon.png"
const ProductDetailsMobile = ({product}) => {
  return (
<div className="col-12 p-0">
              <section className="product-name bg-mobile-light mt-sm-20 text-center d-mbl">
                <div className="container-fluid">
                  <div className="row">
                    <h3 className="text-black">{product?.name}</h3>
                    <p className="desc-text">{product?.short_description.replace(/<\/?p>/g, '')}</p>
                    <p className="text">
                      <span className="text-black">
                        {product?.price}
                      </span>
                      <span className="text-error">({product?.discount_percentage}%)</span>
                    </p>
                    <span className="text-black">
                      Incl. GST & Duties, EMI starts @{" "}
                      <i className="fas fa-rupee-sign"></i> 498/month
                    </span>
                    <div className="share-button">
                      <img
                        src={ShareIcon}
                        alt=""
                        className="img-fluid mx-auto d-block"
                      />
                    </div>
                  </div>
                </div>
              </section>
            </div>
  )
}

export default ProductDetailsMobile