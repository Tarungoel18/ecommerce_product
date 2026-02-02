import facebook from "../../assets/images/icons/Facebook.svg"
import instagram from "../../assets/images/icons/Instagram.svg"
import twitter from "../../assets/images/icons/Twitter.svg"
import pinterest from "../../assets/images/icons/Pinstrest.svg"
const ProductShare = () => {
   return (
      <div className="share mt-30">
          <ul>
            <li>
              <p className="text-black">Share:</p>
            </li>
            <li>
              <a href="">
                <img
                  src={facebook}
                  className="img-fluid mx-auto d-block"
                />
              </a>
            </li>
            <li>
              <a href="">
                <img
                  src={instagram}
                  className="img-fluid mx-auto d-block"
                />
              </a>
            </li>
            <li>
              <a href="">
                <img
                  src={pinterest}
                  className="img-fluid mx-auto d-block"
                />
              </a>
            </li>
            <li>
              <a href="">
                <img
                  src={twitter}
                  className="img-fluid mx-auto d-block"
                />
              </a>
            </li>
          </ul>
        </div>
  );
}

export default ProductShare;