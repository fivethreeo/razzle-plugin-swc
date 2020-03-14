'use strict';

const createRazzleConfig = require('razzle/config/createConfig');

const pluginFunc = require('../index');
const {
  swcLoaderFinder,
  babelLoaderFinder
} = require('../helpers');

const createConfig = (target, env, options) => {
  let config = createRazzleConfig(target, env, options);
  return config;
}

const webDevLoaderTests = [
  {
    name: 'should add swc-loader',
    loaderFinder: swcLoaderFinder,
  },
  {
    name: 'should not add babel-loader',
    loaderFinder: babelLoaderFinder,
    status: 'falsy',
  }
];

const webProdLoaderTests = [
  {
    name: 'should add swc-loader',
    loaderFinder: swcLoaderFinder,
  },
  {
    name: 'should not add babel-loader',
    loaderFinder: babelLoaderFinder,
    status: 'falsy',
  }
];

const nodeProdLoaderTests = [
  {
    name: 'should add swc-loader',
    loaderFinder: swcLoaderFinder,
  },
  {
    name: 'should not add babel-loader',
    loaderFinder: babelLoaderFinder,
    status: 'falsy',
  }
];

describe('razzle-swc-plugin', () => {
    describe('when creating web config', () => {
      describe('when environment set to development', () => {
        let config;

        beforeAll(() => {
          config = createConfig('web', 'dev', {
            plugins: [{ func: pluginFunc }],
          });
        });

        webDevLoaderTests.forEach(test => {
          if (test.status === 'falsy') {
            it(test.name, () => {
              expect(config.module.rules.find(test.loaderFinder)).toBeUndefined();
            });
          } else {
            it(test.name, () => {
              expect(
                config.module.rules.find(test.loaderFinder)
              ).not.toBeUndefined();
            });
          }
        });
      });

      describe('when environment set to production', () => {
        let config;

        beforeAll(() => {
          config = createConfig('web', 'prod', {
            plugins: [{ func: pluginFunc }],
          });
        });

        webProdLoaderTests.forEach(test => {
          if (test.status === 'falsy') {
            it(test.name, () => {
              expect(config.module.rules.find(test.loaderFinder)).toBeUndefined();
            });
          } else {
            it(test.name, () => {
              expect(
                config.module.rules.find(test.loaderFinder)
              ).not.toBeUndefined();
            });
          }
        });
      });
    });

  describe('when creating node config', () => {
    describe('when environment set to production', () => {
      let config;

      beforeAll(() => {
        config = createConfig('node', 'prod', {
          plugins: [{ func: pluginFunc }],
        });
      });

      nodeProdLoaderTests.forEach(test => {
        if (test.status === 'falsy') {
          it(test.name, () => {
            expect(config.module.rules.find(test.loaderFinder)).toBeUndefined();
          });
        } else {
          it(test.name, () => {
            expect(
              config.module.rules.find(test.loaderFinder)
            ).not.toBeUndefined();
          });
        }
      });
    });
  });
});
