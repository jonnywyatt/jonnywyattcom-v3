import { connect } from 'react-redux';
import Home from '../components/Home/Home';
import history from '../actions/history';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {
  startRouteChange: history.startRouteChange
};

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeContainer;
