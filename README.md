# razzle-plugin-swc

This package contains a plugin for using [SWC](hhttps://swc-project.github.io/) with Razzle

## Usage in Razzle Projects

```bash
yarn add razzle-plugin-swc --dev
```

```js
// razzle.config.js

module.exports = {
  plugins: ['swc'],
};
```

## To run the example
```bash
cd example/
NODE_ENV=development yarn install
yarn run start
```
