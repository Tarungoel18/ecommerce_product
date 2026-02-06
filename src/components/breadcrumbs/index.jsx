import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

const BreadCrumb = ({ items = [] }) => {
  return (
    <section className="mt-10">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="breadcrumb">
              <ul>
                {items.map((item, index) => (
                  <li key={index}>
                    <Link to={ROUTES.HOME}>{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadCrumb;
