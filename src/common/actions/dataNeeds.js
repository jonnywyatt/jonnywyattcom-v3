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

  articleFromCache: (slug, articles) => {
    if (!articles) return null;
    const found = articles.filter(article => article.slug === slug);
    if (!found.length) return null;
    return found[0];
  },

  article: (slug) => {
    return (dispatch, getState) => {
      // clear article state before fetching new one, so article view is empty
      dispatch(actions.receiveArticle({}));
      const state = getState();
      const articleFromCache = actions.articleFromCache(slug, state.articles);
      if (articleFromCache) return Promise.resolve(dispatch(actions.receiveArticle(articleFromCache)));
      let endpoint = (typeof window === 'undefined') ? state.apiEndpointRootAbsolute : state.apiEndpointRootRelative;
      endpoint = `${endpoint}/articles/${slug}`;
      return request({ endpoint, state })
        .then((response) => {
          dispatch(actions.receiveArticle(response.data));
        })
        .catch(() => {
          dispatch(errorActions.error('An error occurred retrieving the article'));
        });
    };
  },

  deferredDataNeeds: () => {
    return (dispatch, getState) => {
      const state = getState();
      if (state.matchedRoute.deferredDataNeed) {
        dispatch(actions[state.matchedRoute.deferredDataNeed](state.matchedRoute.dataNeedParam));
      }
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
