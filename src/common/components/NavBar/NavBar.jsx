import React, { PropTypes } from 'react';

const NavBar = props => (
  <div className="t-navbar navbar">
    <div className="container-fluid-max">
      <div className="row">
        <div className="col-xs-12">
          <div className="navbar__main">
            <h1 className="navbar__title navbar__indent">
              Jonny Wyatt
            </h1>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-light">
      <div className="container-fluid-max">
        <div className="row">
          <div className="col-xs-12">
            <div className="navbar__links">
              <div className="tabs text-sm">
                <div className="l-inline-container">
                  <div className="l-vcenter l-vcenter--one-third">
                    <a
                      className={`t-nav-jobs tabs__tab navbar__link${props.activeRouteName === 'articles' ? ' active' : ''}`}
                      href="/articles"
                      onClick={props.startRouteChange}
                    >
                      Articles
                    </a>
                  </div>
                  <div className="l-vcenter l-vcenter--one-third">

                    <a
                      className={`t-nav-job-stats tabs__tab navbar__link${props.activeRouteName === 'contact' ? ' active' : ''}`}
                      href="/contact"
                      onClick={props.startRouteChange}
                    >
                      Contact
                    </a>
                  </div>
                  <div className="l-vcenter l-vcenter--one-third">
                    <a
                      className={`t-nav-jobs tabs__tab navbar__link${props.activeRouteName === 'about' ? ' active' : ''}`}
                      href="/about"
                      onClick={props.startRouteChange}
                    >
                      About
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>);

NavBar.propTypes = {
  startRouteChange: PropTypes.func.isRequired
};

export default NavBar;
