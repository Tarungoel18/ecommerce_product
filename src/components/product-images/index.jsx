import authenticatedImage from "../../assets/images/authenticated-img.png";
const ProductImages = ({url}) => {
  return (
    <div className="col-12 col-lg-8">
      <img
          id="img_01"
          src={url}
          data-zoom-image={url}
          className="d-dsk img-fluid"
          alt="Product"
        />

            <img
          src={url}
          className="d-mbl img-fluid"
          data-zoom-image={url}
          alt="Product"
        />

      <div className="authentication-text mt-40 d-dsk">
        <p className="text-black">Authenticated by:</p>
        <img src={authenticatedImage} alt="" className="d-block img-fluid" />
      </div>
    </div>
  );
};

export default ProductImages;
