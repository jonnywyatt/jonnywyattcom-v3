module.exports = {
  "sourceType": "unambiguous", // https://github.com/webpack/webpack/issues/4039#issuecomment-564812879
  "presets": [
    ["@babel/preset-react"],
    [ "@babel/preset-env", {
      'debug': false,
      'useBuiltIns': 'usage',
      'corejs': 3
    }]
  ]
};
