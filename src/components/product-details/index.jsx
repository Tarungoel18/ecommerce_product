import SizeOptions from "../size-option";
import AddToCart from "../add-to-cart";
import AdditionalInfo from "../additional-info";
import ProductShare from "../product-share";
const ProductDetails = () => {
  return (
    <div class="col-md-4">
      <div class="product-desc d-dsk">
        <h3>Versache Collection</h3>
        <p class="text-black">Orange graphic print polo</p>
        <div class="price mt-30">
          <p>
            <del>
              <i class="fas fa-rupee-sign"></i> 26,500
            </del>
            &nbsp;&nbsp;{" "}
            <span class="text-black">
              <i class="fas fa-rupee-sign"></i> 15,950
            </span>{" "}
            &nbsp; <span class="text-error">(40% off)</span>
          </p>
          <span class="text-grey">
            Incl. Duties & GST, EMI starts @ 887/month
          </span>
        </div>
        <div class="size mt-30">
          <h6 class="text-black">
            <span>Size -</span> UK/IND
          </h6>
          <button
            onclick="sizeGuideFunction()"
            class="btn-blank text-underline"
          >
            Size Guide
          </button>
        </div>
        <ul class="size-button mt-10" id="main-size">
          <li>
            <button class="btn-bordered-grey">S</button>
          </li>
          <li>
            <button class="btn-bordered-grey">M</button>
          </li>
          <li>
            <button class="btn-bordered-grey">L</button>
          </li>
        </ul>
        <div class="add-to-cart-btn mt-20">
          <button class="btn-primary">ADD TO BAG</button>
          <button class="btn-blank">
            <img
              src="./src/assets/images/icons/wishlist.svg"
              class="img-fluid mx-auto d-block"
            />
          </button>
        </div>
        <div class="accordion mt-30" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <b>Description</b>
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p>
                  Amp up your wardrobe with this orange classic fit mesh polo
                  from Ralph Lauren crafted in cotton featuring short sleeves,
                  spread collar and button placket.
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <b>Delivery Timeline</b>
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <b>Authencity Guarantee</b>
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFour">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                <b>Style Code & Color</b>
              </button>
            </h2>
            <div
              id="collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <div class="style-box">
                  <p>Style Code: &nbsp;&nbsp;106-lot4932</p>
                  <p class="color">
                    Color: &nbsp;&nbsp;
                    <span class="red-box">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFour">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                <b>5% Cashback</b>
              </button>
            </h2>
            <div
              id="collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <div class="style-box">
                  <p>Style Code: &nbsp;&nbsp;106-lot4932</p>
                  <p class="color">
                    Color: &nbsp;&nbsp;
                    <span class="red-box">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="share mt-30">
          <ul>
            <li>
              <p class="text-black">Share:</p>
            </li>
            <li>
              <a href="">
                <img
                  src="./src/assets/images/icons/Facebook.svg"
                  class="img-fluid mx-auto d-block"
                />
              </a>
            </li>
            <li>
              <a href="">
                <img
                  src="./src/assets/images/icons/Instagram.svg"
                  class="img-fluid mx-auto d-block"
                />
              </a>
            </li>
            <li>
              <a href="">
                <img
                  src="./src/assets/images/icons/Pinstrest.svg"
                  class="img-fluid mx-auto d-block"
                />
              </a>
            </li>
            <li>
              <a href="">
                <img
                  src="./src/assets/images/icons/Twitter.svg"
                  class="img-fluid mx-auto d-block"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
