const createScript = (w, d) => {
  const s = d.createElement('script');
  s.defer = 1;
  s.src = 'https://www.google-analytics.com/analytics.js';
  d.documentElement.appendChild(s);
};

const appStarted = (w) => {
  if (w.performance) {
    w.ga('send', 'timing', 'Page load', 'app-started', Math.round(w.performance.now()));
    w.performance.mark('app-started');
  }
};

const firstContentfulPaint = (w) => {
  w.performance.getEntriesByType('paint').forEach((entry) => {
    if (entry.name === 'first-contentful-paint')
      w.ga('send', 'timing', 'Page load', entry.name, Math.round(entry.startTime));
  });
};

module.exports = (w, d, gaKey) => {
  createScript(w, d);
  w.ga = w.ga || function (...args) {
    (w.ga.q = w.ga.q || []).push(args);
  };
  w.ga.l = +new Date();
  w.ga('create', gaKey, 'auto');
  w.ga('send', 'pageview');
  appStarted(w);
  firstContentfulPaint(w);
};
