import React from 'react';

const Contact = () => (
  <div className="view contact">
    <div className="container-fluid-max">
      <div className="row">
        <div className="col-12-sm">
          <h1 className="heading heading--1 margin-bottom-ml">Contact me</h1>
          <div className="margin-bottom-sm">
            <div className="icon-text-container">
              <i className="icon-envelope" />
              <a className="link" href="mailto:jonnywyatt@yahoo.co.uk">jonnywyatt@yahoo.co.uk</a>
            </div>
          </div>
          <div className="margin-bottom-sm">
            <div className="icon-text-container">
              <i className="icon-github" />
              <a className="link" href="http://github.com/jonnywyatt">github.com/jonnywyatt</a>
            </div>
          </div>
          <div>
            <div className="icon-text-container">
              <i className="icon-linkedin" />
              <a className="link" href="https://uk.linkedin.com/in/jonwyatt">uk.linkedin.com/in/jonwyatt</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>);

export default Contact;
