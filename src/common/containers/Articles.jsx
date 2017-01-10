import { connect } from 'react-redux';
import Articles from '../components/Articles/Articles';
import history from '../actions/history';

const mapStateToProps = (state) => {
  return {
    articles: state.articles
  };
};

const mapDispatchToProps = {
  startRouteChange: history.startRouteChange
};

/* Create a container component by connecting to the store */
const ArticlesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Articles);

export default ArticlesContainer;
