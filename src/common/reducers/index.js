export default (state, { stateKey, data }) => (
  (stateKey && data)
  ? { ...state, [stateKey]: data }
  : state
);
