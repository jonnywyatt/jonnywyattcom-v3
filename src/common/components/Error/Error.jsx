import React from 'react';

const Error = props => (
  <div className="error">
    { props.error }
  </div>);

Error.defaultProps = {
};

export default Error;
