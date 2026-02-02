import productImageSmall from "../../assets/images/product_image_small.jpg";
import productImage from "../../assets/images/product_image.png";
import searchImage1 from "../../assets/images/search-img-1.png";
import authenticatedImage from "../../assets/images/authenticated-img.png";
const ProductImages = () => {
  return (
    <div class="col-md-8">
      <div class="elevate-zoom">
        <img
          id="img_01"
          src={productImageSmall}
          data-zoom-image={productImage}
          class="d-dsk"
        />
        <img src={productImage} class="d-mbl" data-zoom-image={productImage} />
        <div id="gal1" class="d-dsk">
          <a
            href="#"
            data-image={productImageSmall}
            data-zoom-image={productImage}
          >
            <img id="img_01" src={searchImage1} />
          </a>
          <a
            href="#"
            data-image={productImageSmall}
            data-zoom-image={productImage}
          >
            <img id="img_01" src={searchImage1} />
          </a>
          <a
            href="#"
            data-image={productImageSmall}
            data-zoom-image={productImage}
          >
            <img id="img_01" src={searchImage1} />
          </a>
        </div>
      </div>
      <div class="authentication-text mt-40 d-dsk">
        <p class="text-black">Authenticated by:</p>
        <img src={authenticatedImage} alt="" class="d-block img-fluid" />
      </div>
    </div>
  );
};

export default ProductImages;
