'use strict';
const makeLoaderFinder = require('razzle-dev-utils/makeLoaderFinder');

const swcLoaderFinder = makeLoaderFinder('swc-loader');
const babelLoaderFinder = makeLoaderFinder('babel-loader');

module.exports = {
  swcLoaderFinder,
  babelLoaderFinder
};
