import { connect } from 'react-redux';
import Article from '../components/Article/Article';
import history from '../actions/history';

const mapStateToProps = (state) => {
  return {
    ...state.article
  };
};

const mapDispatchToProps = {
  startRouteChange: history.startRouteChange
};

/* Create a container component by connecting to the store */
const ArticleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Article);

export default ArticleContainer;
