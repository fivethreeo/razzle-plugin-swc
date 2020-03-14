'use strict';

const defaultOptions = {
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

module.exports = (
  defaultConfig,
  { target, dev },
  webpack,
  userOptions = {}
) => {
  const config = Object.assign({}, defaultConfig);

  const options = Object.assign({}, defaultOptions, userOptions);

  config.module.rules = config.module.rules.reduce((rules, rule) => {

    if (rule.test &&
      rule.test.toString()===/\.(js|jsx|mjs)$/.toString() &&
      !rule.enforce) { // !rule.enforce to not conflict with eslint plugin

      const { use, ...rest } = rule;

      rules.push({ ...rest, ...{
        use: [{
            loader: require.resolve('swc-loader'),
            options: options
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
