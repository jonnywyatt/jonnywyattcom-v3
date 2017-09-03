import timing from 'timing.js';

const createScript = (w, d) => {
  const s = d.createElement('script');
  s.defer = 1;
  s.src = 'https://www.google-analytics.com/analytics.js';
  d.documentElement.appendChild(s);
};

module.exports = (w, d, gaKey) => {
  createScript(w, d);
  w.ga = w.ga || function (...args) {
    (w.ga.q = w.ga.q || []).push(args);
  };
  w.ga.l = +new Date;
  w.ga('create', gaKey, 'auto');
  w.ga('send', 'pageview');
  w.ga('send', 'timing', 'Page load', 'firstPaint', timing.getTimes().firstPaintTime);
  if (w.performance) {
    w.ga('send', 'timing', 'Page load', 'appStarted', w.performance.now());
    w.performance.mark('appStarted');
  }
};
