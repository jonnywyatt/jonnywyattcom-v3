import React, { PropTypes } from 'react';
import Icons from '../Icons/Icons';

const NavBar = props => (
  <div className="t-navbar navbar container-fluid-max">
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
                className={`menu__item ${['articles', 'article'].indexOf(props.activeRouteName) > -1 ? ' menu__item--current' : ''}`}>
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
