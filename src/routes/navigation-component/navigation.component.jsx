import { Outlet,Link } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
      <div>Logo</div>
      <div className='nav-links-container'></div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
