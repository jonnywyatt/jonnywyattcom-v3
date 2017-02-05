import React from 'react';
import Menu from '../../containers/Menu';

const NavBar = () => (
  <div className="t-navbar navbar container-fluid-max">
    <div className="container-fluid-max">
      <div className="row">
        <div className="col-12-sm">
          <Menu fullMenu />
        </div>
      </div>
    </div>
  </div>);

export default NavBar;
