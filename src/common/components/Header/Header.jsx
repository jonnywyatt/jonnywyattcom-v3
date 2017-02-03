import React, { Component } from 'react';

const throttle = (fn, wait) => {
  let time = Date.now();
  return () => {
    if (((time + wait) - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  };
};

class Header extends Component {
  componentDidMount() {
    document.addEventListener('scroll', throttle(this.scrollHandler.bind(this), 50));
  }

  scrollHandler() {
    console.log(Date.now());
  }

  render() {
    return (
      <div className="header">
        <div className="container-fluid-max">
          <div className="row">
            <div className="col-12-sm">
              <div className="header__main">
                <h1 className="header__title header__indent">
                  <img className="header__logo" src="/svg/logo.svg" />
                </h1>
                <div className="header__byline">
                  Front end & Node.js developer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
