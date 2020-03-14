'use strict';

function makeSwcPlugin(swcOptions) {
  if (!swcOptions) {
    swcOptions = {
      "jsc": {
        "parser": {
          "syntax": "ecmascript",
          "jsx": true,
          "dynamicImport": false,
          "numericSeparator": false,
          "classPrivateProperty": false,
          "privateMethod": false,
          "classProperty": false,
          "functionBind": false,
          "exportDefaultFrom": false,
          "exportNamespaceFrom": false,
          "decorators": false,
          "decoratorsBeforeExport": false,
          "nullishCoalescing": false,
          "importMeta": false,
          "optionalChaining": false
        }
      }
    };

    return function modify(defaultConfig, { target, dev }, webpack) {
      const config = defaultConfig;

      config.module.rules = config.module.rules.reduce((rules, rule) => {

        if (rule.test &&
          rule.test.toString()===/\.(js|jsx|mjs)$/.toString() &&
          !rule.enforce) { // !rule.enforce to not conflict with eslint plugin

          const { use, ...rest } = rule;

          rules.push({ ...rest, ...{
            use: [{
                loader: require.resolve('swc-loader'),
                options: swcOptions
              }
            ]
          }});
        }
        else {
          rules.push(rule);
        }
        return rules;
      }, []);

      return config;
    }
  }
}

module.exports = makeSwcPlugin();
module.exports.makeSwcPlugin = makeSwcPlugin;
