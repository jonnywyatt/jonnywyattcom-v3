import { connect } from 'react-redux';
import Menu from '../components/Menu/Menu';
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
const MenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);

export default MenuContainer;
