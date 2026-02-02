import facebook from "../../assets/images/icons/Facebook.svg"
import instagram from "../../assets/images/icons/Instagram.svg"
import twitter from "../../assets/images/icons/Twitter.svg"
const ProductShare = () => {
   return (
    <div className="share mt-30">
      <ul>
        <li><p className="text-black">Share:</p></li>
        <li><img src={facebook} /></li>
        <li><img src={instagram} /></li>
        <li><img src={twitter} /></li>
      </ul>
    </div>
  );
}

export default ProductShare;