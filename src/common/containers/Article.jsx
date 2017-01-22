import { connect } from 'react-redux';
import Article from '../components/Article/Article';

const mapStateToProps = (state) => {
  return {
    ...state.article
  };
};

/* Create a container component by connecting to the store */
const ArticleContainer = connect(
  mapStateToProps
)(Article);

export default ArticleContainer;
