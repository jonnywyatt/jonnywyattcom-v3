import React from 'react';
import PropTypes from 'prop-types';
import Icons from '../Icons/Icons';

class Menu extends React.Component {
  render() {
    return (
      <nav className={`menu ${this.props.fullMenu ? ' menu--full' : ''}`}>
        <ul className="menu__list">
          <li
            className={`menu__item ${this.props.activeRouteName === 'home' ? ' menu__item--current' : ''}`}>
            <a
              className="menu__link"
              href="/"
              onClick={this.props.startRouteChange}
            >
              About me
            </a>
          </li>
          <li
            className={`menu__item ${['articles', 'article'].indexOf(this.props.activeRouteName) > -1 ? ' menu__item--current' : ''}`}>
            <a
              className="menu__link"
              href="/articles"
              onClick={this.props.startRouteChange}
            >
              Posts
            </a>
          </li>
          <li
            className={`menu__item ${this.props.activeRouteName === 'contact' ? ' menu__item--current' : ''}`}>
            <a
              className="menu__link"
              href="/contact"
              onClick={this.props.startRouteChange}
            >
              Contact
            </a>
          </li>
          {
            this.props.fullMenu &&
            <li className="menu__item menu__item-last">
              <Icons />
            </li>
          }
        </ul>
      </nav>
    );
  }
}


Menu.propTypes = {
  startRouteChange: PropTypes.func.isRequired,
  fullMenu: PropTypes.bool
};

export default Menu;
