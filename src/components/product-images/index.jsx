import authenticatedImage from "../../assets/images/authenticated-img.png";
const ProductImages = ({ images }) => {
  return (
    <div className="col-12 col-lg-8">

       <div className="d-flex flex-column gap-2">
        {images?.map((it, index) => (
          <img
            key={index}
            src={it?.src}
            data-zoom-image={it?.src}
            className="small-img"
            alt="Product"
          />
        ))}
      </div>
      <div className="authentication-text mt-40 d-dsk">
        <p className="text-black">Authenticated by:</p>
        <img src={authenticatedImage} alt="" className="d-block img-fluid" />
      </div>
    </div>
  );
};

export default ProductImages;
