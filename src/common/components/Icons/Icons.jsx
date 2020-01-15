import React from 'react';

class Icons extends React.Component {

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="icons">
        <a className="icon" href="mailto:jonnywyatt@yahoo.co.uk"><i className="icon-envelope" /></a>
        <a className="icon" href="/pdf/jon_wyatt_cv_2020.pdf"><i className="icon-cv" /></a>
        <a className="icon" href="http://github.com/jonnywyatt"><i className="icon-github" /></a>
        <a className="icon" href="https://uk.linkedin.com/in/jonwyatt"><i
          className="icon-linkedin" /></a>
      </div>
    );
  }
}

export default Icons;
