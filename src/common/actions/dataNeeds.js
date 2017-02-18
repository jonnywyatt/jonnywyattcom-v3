import request from '../utils/request';
import errorActions from './error';

const actions = {
  articles: () => {
    return (dispatch, getState) => {
      const state = getState();
      let endpoint = (typeof window === 'undefined') ? state.apiEndpointRootAbsolute : state.apiEndpointRootRelative;
      endpoint = `${endpoint}/articles`;

      return request({ endpoint, state })
        .then((response) => {
          dispatch(actions.receiveArticles(response.data));
        })
        .catch(() => {
          dispatch(errorActions.error('An error occurred retrieving articles'));
        });
    };
  },

  article: (slug) => {
    return (dispatch, getState) => {
      const state = getState();
      let endpoint = (typeof window === 'undefined') ? state.apiEndpointRootAbsolute : state.apiEndpointRootRelative;
      endpoint = `${endpoint}/articles/${slug}`;
      // clear article state before fetching new one, so article view is empty
      dispatch(actions.receiveArticle({}));
      return request({ endpoint, state })
        .then((response) => {
          dispatch(actions.receiveArticle(response.data));
        })
        .catch(() => {
          dispatch(errorActions.error('An error occurred retrieving the article'));
        });
    };
  },

  receiveArticle: (article) => {
    return {
      type: 'RECEIVE_ARTICLE',
      stateKey: 'article',
      data: article
    };
  },

  receiveArticles: (articles) => {
    return {
      type: 'RECEIVE_ARTICLES',
      stateKey: 'articles',
      data: articles
    };
  }
};

export default actions;
