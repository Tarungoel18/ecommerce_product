import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";
const AppLayout = () => {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <ul className="w-100 d-flex justify-content-between align-items-center navbar-nav flex-row">
            <li className="nav-item">
              <Link to={ROUTES.HOME} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={ROUTES.CART} className="nav-link">
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default AppLayout;
