import ShareIcon from "../../assets/images/icons/Share-Icon.png"
const ProductDetailsMobile = () => {
  return (
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
												<img src={ShareIcon} alt="" class="img-fluid mx-auto d-block"/>
											</div>
										</div>
									</div>
								</section>
  )
}

export default ProductDetailsMobile