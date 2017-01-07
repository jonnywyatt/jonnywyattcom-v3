import { connect } from 'react-redux';
import NavBar from '../components/NavBar/NavBar';
import history from '../actions/history';

const mapStateToProps = (state) => {
  return {
    activeRouteName: state.matchedRoute.routeName
  };
};

const mapDispatchToProps = {
  startRouteChange: history.startRouteChange
};

/* Create a container component by connecting to the store */
const NavBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);

export default NavBarContainer;
