import { connect } from 'react-redux';
import App from '../components/App';
import history from '../actions/history';
import dataNeeds from '../actions/dataNeeds';

const mapStateToProps = (state) => {
  return {
    ...state.matchedRoute,
    error: state.error
  };
};

const mapDispatchToProps = {
  listenForRouteChanges: history.listenForRouteChanges,
  afterAppMounted: dataNeeds.deferredDataNeeds
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
