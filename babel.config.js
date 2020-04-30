module.exports = {
  presets: [
    "@babel/preset-react",
    ["@babel/preset-typescript", { "allExtensions": true, "isTSX": true }],
    ["@babel/env", { "targets": "> 0.25%", "useBuiltIns": "usage", "corejs": 3 }],
    ['module:metro-react-native-babel-preset']
  ],
  plugins: [
    "@babel/plugin-syntax-dynamic-import",
    "@babel/proposal-class-properties",
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
