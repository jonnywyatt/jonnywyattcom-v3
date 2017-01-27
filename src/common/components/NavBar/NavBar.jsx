import React, {PropTypes} from 'react';
import Icons from '../Icons/Icons';

const NavBar = props => (
  <div className="t-navbar navbar">
    <div className="container-fluid-max">
      <div className="row">
        <div className="col-12-sm">
          <div className="navbar__main">
            <h1 className="navbar__title navbar__indent">
              <img className="navbar__logo" src="/svg/logo.svg"/>
            </h1>
            <div className="navbar__byline">
              Front end & Node.js developer
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid-max">
      <div className="row">
        <div className="col-12-sm">
          <nav className="menu">
            <ul className="menu__list">
              <li
                className={`menu__item ${props.activeRouteName === 'home' ? ' menu__item--current' : ''}`}>
                <a
                  className={'t-nav-jobs menu__link'}
                  href="/"
                  onClick={props.startRouteChange}
                >
                  Home
                </a>
              </li>
              <li
                className={`menu__item ${props.activeRouteName === 'articles' ? ' menu__item--current' : ''}`}>
                <a
                  className={'t-nav-jobs menu__link'}
                  href="/articles"
                  onClick={props.startRouteChange}
                >
                  Articles
                </a>
              </li>
              <li
                className={`menu__item ${props.activeRouteName === 'about' ? ' menu__item--current' : ''}`}>
                <a
                  className={'t-nav-jobs menu__link'}
                  href="/about"
                  onClick={props.startRouteChange}
                >
                  About me
                </a>
              </li>
              <li className="menu__item menu__item-last">
                <Icons />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>);

NavBar.propTypes = {
  startRouteChange: PropTypes.func.isRequired
};

export default NavBar;
