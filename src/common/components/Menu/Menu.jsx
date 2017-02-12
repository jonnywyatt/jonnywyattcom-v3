import React, { PropTypes } from 'react';
import Icons from '../Icons/Icons';

const Menu = props => (
  <nav className={`menu ${props.fullMenu ? ' menu--full' : ''}`}>
    <ul className="menu__list">
      <li
        className={`menu__item ${props.activeRouteName === 'home' ? ' menu__item--current' : ''}`}>
        <a
          className="menu__link"
          href="/"
          onClick={props.startRouteChange}
        >
          About me
        </a>
      </li>
      <li
        className={`menu__item ${['articles', 'article'].indexOf(props.activeRouteName) > -1 ? ' menu__item--current' : ''}`}>
        <a
          className="menu__link"
          href="/articles"
          onClick={props.startRouteChange}
        >
          Articles
        </a>
      </li>
      <li
        className={`menu__item ${props.activeRouteName === 'contact' ? ' menu__item--current' : ''}`}>
        <a
          className="menu__link"
          href="/contact"
          onClick={props.startRouteChange}
        >
          Contact
        </a>
      </li>
      {
        props.fullMenu &&
        <li className="menu__item menu__item-last">
          <Icons />
        </li>
      }
    </ul>
  </nav>
);


Menu.propTypes = {
  startRouteChange: PropTypes.func.isRequired,
  fullMenu: PropTypes.bool
};

export default Menu;
