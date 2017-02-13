export default (articleId) => {
  const mappings = {
    21: 'accelerated-mobile-pages',
    20: 'page-load-speed-faster-images',
    19: 'page-load-speed-webpagetest-speedcurve',
    18: 'react-node',
    17: 'accessibility-government-performance-services-page',
    16: 'ap-video-hub-update',
    1: 'pension-calculator-money-advice-service',
    2: 'talk-bdd-testing-javascript',
    3: 'portfolio-which-home-entertainment',
    4: 'javascript-event-hub-promises',
    5: 'balancing-functional-unit-tests',
    7: 'backbone-marionette-using-nested-views',
    8: 'front-end-architecture-page-load-speed',
    10: 'video-news-hub-associated-press',
    9: 'betfair-rebuilt-for-speed'
  };

  return mappings[articleId];
};
