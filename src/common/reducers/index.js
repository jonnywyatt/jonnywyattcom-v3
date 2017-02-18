export default (state, { stateKey, data }) => (
  { ...state, [stateKey]: data }
);
