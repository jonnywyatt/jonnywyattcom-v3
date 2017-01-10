/* eslint-disable no-console */

export default {
  error: (err) => {
    if (typeof window === 'undefined') {
      console.error(err.message, err.stack);
    } else {
      window.ga && window.ga('send', 'exception', {
        exDescription: err.message,
        exFatal: false
      });
    }
  },
  info: msg => console.info(msg)
};
