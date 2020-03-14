'use strict';

function modify(defaultConfig, { target, dev }, webpack) {
  const config = defaultConfig;

  config.module.rules = config.module.rules.reduce((rules, rule) => {

    if (rule.test &&
      rule.test.toString()===/\.(js|jsx|mjs)$/.toString() &&
      !rule.enforce) { // !rule.enforce to not conflict with eslint plugin

      const { use, ...rest } = rule;

      rules.push({ ...rest, ...{
        use: [{
            loader: require.resolve('swc-loader'),
            options: {
              // swc options
            }
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

module.exports = modify;
