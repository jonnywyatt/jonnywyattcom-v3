import React from 'react';

class Contact extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="view about">
        <div className="container-fluid-max">
          <div className="row">
            <div className="col-12-sm">
              <div className="icon-text icon-text--lg">
                <i className="icon-envelope" />
                <span className="text-lg">jonnywyatt2 - [@] - gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
