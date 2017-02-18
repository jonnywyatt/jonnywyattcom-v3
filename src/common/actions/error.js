export default {
  error: (msg) => {
    return {
      type: 'ERROR',
      stateKey: 'error',
      data: msg
    };
  }
};
