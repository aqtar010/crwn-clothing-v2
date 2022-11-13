import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import { ReactComponent as CrownLogo } from "../../Assets/crown.svg";

import "./navigation.component.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div>
            <CrownLogo className="logo" />
          </div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shoppes
          </Link>
          <Link className="nav-link " to="/sign-in">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
