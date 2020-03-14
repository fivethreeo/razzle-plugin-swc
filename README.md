# razzle-plugin-swc

This package contains a plugin for using [SWC](hhttps://swc-project.github.io/) with Razzle

## Usage in Razzle Projects

```bash
yarn add razzle-plugin-swc --dev
```

### With the default options

```js
// razzle.config.js

module.exports = {
  plugins: ['swc'],
};
```

### With custom options

```js
// razzle.config.js

module.exports = {
  plugins: [
    {
      name: 'swc',
      options: {
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
      },
    }
  ],
};
```

### With custom options using .swcrc

```js
// .swcrc
{
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
}
```

## To run the example
```bash
cd example/
NODE_ENV=development yarn install
yarn run start
```
