const ProductImages = () => {
 return (
    <div className="col-md-8">
      <div className="elevate-zoom">
        <img
          src="/assets/images/product_image_small.jpg"
          className="d-dsk"
          alt=""
        />

        <img
          src="/assets/images/product_image.png"
          className="d-mbl"
          alt=""
        />

        <div id="gal1" className="d-dsk">
          <a href="#">
            <img src="/assets/images/search-img-1.png" alt="" />
          </a>
          <a href="#">
            <img src="/assets/images/search-img-1.png" alt="" />
          </a>
          <a href="#">
            <img src="/assets/images/search-img-1.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductImages;
