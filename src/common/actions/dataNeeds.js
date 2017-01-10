import request from '../utils/request';

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
          dispatch(actions.errorApi('An error occurred retrieving articles'));
        });
    };
  },

  article: (slug) => {
    return (dispatch, getState) => {
      const state = getState();
      let endpoint = (typeof window === 'undefined') ? state.apiEndpointRootAbsolute : state.apiEndpointRootRelative;
      endpoint = `${endpoint}/articles/${slug}`;

      return request({ endpoint, state })
        .then((response) => {
          dispatch(actions.receiveArticle(response.data));
        })
        .catch(() => {
          dispatch(actions.errorApi(`An error occurred retrieving article: ${slug}`));
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
  },

  errorApi: (msg) => {
    return {
      type: 'ERROR_API',
      stateKey: 'errorApi',
      data: msg
    };
  }
};

export default actions;
