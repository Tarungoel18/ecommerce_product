import ProductImages from "../../components/product-images";
import ProductDetails from "../../components/product-details";
import BreadCrumbs from "../../components/breadcrumbs";
import AddToCart from "../../components/add-to-cart";
import SizeGuide from "../../components/size-guide";
const ProductPage = () => {
  return (
    <>
      <div id="header_mobile_inner_ct" class="d-mbl"></div>
      <div id="header" class="d-dsk"></div>

      <div class="clearfix"></div>

      <BreadCrumbs />

      <section class="products-main">
        <div class="container-fluid">
          <div class="row">
            <ProductImages />
            <ProductDetails />
            <div class="col-12 p-0">
								<section class="product-name bg-mobile-light mt-sm-20 text-center d-mbl">
									<div class="container-fluid">
										<div class="row">
											<h3 class="text-black">Ralph Lauren</h3>
											<p class="desc-text">Aqua classic fit mesh polo</p>
											<p class="text">
												<i class="fas fa-rupee-sign"></i> <del>14,500</del>&nbsp;
												<span class="text-black"><i class="fas fa-rupee-sign"></i> 8,950</span>
												<span class="text-error">(83%)</span>
											</p>
											<span class="text-black">Incl. GST & Duties, EMI starts @ <i class="fas fa-rupee-sign"></i> 498/month</span>
											<div class="share-button">
												<img src="./src/assets/images/icons/Share-Icon.png" alt="" class="img-fluid mx-auto d-block" />
											</div>
										</div>
									</div>
								</section>
							</div>
							<div class="col-12">
								{/* <!-- PRODUCTS-MAIN STARTS --> */}
									<section class="products-main mt-25 d-mbl">
										<div class="container-fluid">
											<div class="row">
												<div class="col-lg-4">
													<div class="product-desc">
														<div id="app" class="d-mbl">
											        <div class="test" id="size_prod">
											        	Select Size
											        </div>
											    	</div>
														<div class="accordion mt-20" id="accordionExample">
														  <div class="accordion-item">
														    <h2 class="accordion-header" id="headingOne">
														      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
														        <b>Description</b>
														      </button>
														    </h2>
														    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
														      <div class="accordion-body">
														        <p>Amp up your wardrobe with this orange classic fit mesh polo from Ralph Lauren crafted in cotton featuring short sleeves, spread collar and button placket.</p>
														      </div>
														    </div>
														  </div>
														  <div class="accordion-item">
														    <h2 class="accordion-header" id="headingTwo">
														      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
														        <b>Delivery Timeline</b>
														      </button>
														    </h2>
														    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
														      <div class="accordion-body">
														        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
														      </div>
														    </div>
														  </div>
														  <div class="accordion-item">
														    <h2 class="accordion-header" id="headingThree">
														      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
														        <b>Authencity Guarantee</b>
														      </button>
														    </h2>
														    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
														      <div class="accordion-body">
														        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
														      </div>
														    </div>
														  </div>
														  <div class="accordion-item">
														    <h2 class="accordion-header" id="headingFour">
														      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
														        <b>Style Code & Color</b>
														      </button>
														    </h2>
														    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
														      <div class="accordion-body">
														        <div class="style-box">
														        	<p>Style Code: &nbsp;&nbsp;106-lot4932</p>
														        	<p class="color">Color: &nbsp;&nbsp;<span class="red-box">&nbsp;&nbsp;&nbsp;&nbsp;</span></p>
														        </div>
														      </div>
														    </div>
														  </div>
														  <div class="accordion-item">
														    <h2 class="accordion-header" id="headingFour">
														      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
														        <b>5% Cashback</b>
														      </button>
														    </h2>
														    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
														      <div class="accordion-body">
														        <div class="style-box">
														        	<p>Style Code: &nbsp;&nbsp;106-lot4932</p>
														        	<p class="color">Color: &nbsp;&nbsp;<span class="red-box">&nbsp;&nbsp;&nbsp;&nbsp;</span></p>
														        </div>
														      </div>
														    </div>
														  </div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</section>
								{/* <!-- PRODUCTS-MAIN ENDS --> */}

								<div class="clearfix"></div>

								{/* <!-- AUTHENTICATED BY STARTS --> */}
									<section class="authenticated-by spacer d-mbl">
										<div class="container-fluid">
											<div class="row">
												<div class="col-12">
													<h5 class="text-black text-center">Authenticated By:</h5>
													<img src="./src/assets/images/authenticated-img.png" class="img-fluid mx-auto d-block mt-25" alt="" />
												</div>
											</div>
										</div>
									</section>
								{/* <!-- AUTHENTICATED BY ENDS --> */}
							</div>
          </div>
        </div>
      </section>

      <div class="clearfix"></div>


      <div id="contact_section"></div>
				<div id="phone_by"></div>
				<div id="footer"></div>


        		<div class="clearfix"></div>

            <AddToCart/>

            <SizeGuide/>

{/* 
      <section className="products-main">
        <div className="container-fluid">
          <div className="row">
            <div>
              <ProductImages />
              <Authentication />
            </div>
            <ProductDetails />
          </div>
        </div>
      </section> */}
    </>
  );
};

export default ProductPage;
