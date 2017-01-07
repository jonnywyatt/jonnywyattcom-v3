import { connect } from 'react-redux';
import App from '../components/App';
import history from '../actions/history';

const mapStateToProps = (state) => {
  return {
    ...state.matchedRoute
  };
};

const mapDispatchToProps = {
  listenForRouteChanges: history.listenForRouteChanges
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
