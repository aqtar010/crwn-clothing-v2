import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className='logo-container' to='/'>
          <div>Logo</div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shoppes
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
