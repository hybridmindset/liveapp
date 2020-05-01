module.exports = {
  presets: [
    "@babel/preset-react",
    '@babel/preset-flow',
    ["@babel/env", { "targets": "> 0.25%", "useBuiltIns": "usage", "corejs": 3 }],
    ["@babel/preset-typescript", { "allExtensions": true, "isTSX": true}],
    ['module:metro-react-native-babel-preset']
  ],
  plugins: [
    "wildcard",
    "@babel/plugin-transform-typeof-symbol",
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-proposal-class-properties",
    "@babel/proposal-object-rest-spread",
    [
      "module-resolver",
      {
        root: ['./'],
        extensions: ['.ios.js', '.android.js', '.ios.tsx', '.android.tsx', '.js', '.ts', '.tsx', '.json'],
        alias: {
          "tests": ["./tests/"],
          "@components": "./components",
        }
      }
    ]
  ]
};
