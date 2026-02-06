import { Outlet } from "react-router-dom";
import BreadCrumbs from "../components/breadcrumbs/index";
import { breadcrumbItems } from "../constants/AppConst";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";
const AppLayout = () => {
  return (
    <>
      <div id="header_mobile_inner_ct" className="d-mbl"></div>
      <div id="header" className="d-dsk"></div>

      <div className="clearfix"></div>
      <div className="d-flex justify-content-between align-items-center px-4">
        <BreadCrumbs items={breadcrumbItems} />
        <Link to={ROUTES.CART}>
          <i class="fa-solid fa-cart-shopping"></i>
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default AppLayout;
