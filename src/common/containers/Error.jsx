import { connect } from 'react-redux';
import Error from '../components/Error/Error';

const mapStateToProps = (state) => {
  return {
    error: state.error
  };
};

/* Create a container component by connecting to the store */
const ErrorContainer = connect(
  mapStateToProps
)(Error);

export default ErrorContainer;
