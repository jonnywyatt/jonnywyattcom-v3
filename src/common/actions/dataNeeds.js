import request from '../utils/request';

const actions = {
  articles: () => {
    return (dispatch, getState) => {
      const state = getState();
      const endpoint = (typeof window === 'undefined') ? state.apiEndpointAbsolute : state.apiEndpointRelative;

      return request({ endpoint, state })
        .then((response) => {
          dispatch(actions.receiveArticle(response));
        });
    };
  },

  article: () => {
    return (dispatch, getState) => {
      const state = getState();
      const endpoint = (typeof window === 'undefined') ? state.apiEndpointAbsolute : state.apiEndpointRelative;

      return request({ endpoint, state })
        .then((response) => {
          dispatch(actions.receiveArticle(response));
        });
    };
  },

  receiveArticle: (article) => {
    return {
      type: 'RECEIVE_ARTICLE',
      stateKey: 'article',
      data: article
    };
  }
};

export default actions;
