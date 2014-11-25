# decimal-adjust.js

Decimal adjustment of a number.

## Install

```sh
npm install decimal-adjust
```

## API

### `decimalAdjust(type, value, exp)`

#### Params

- type (`String`) The type of adjustment.
- value (`Number`) The number.
- exp (`Integer`) The exponent (the 10 logarithm of the adjustment base).

#### Returns

- (`Number`) The adjusted value.

## Example

```js
var decimalAdjust = require('decimal-adjust');

Math.round10 = function(value, exp) {
  return decimalAdjust('round', value, exp);
};

Math.floor10 = function(value, exp) {
  return decimalAdjust('floor', value, exp);
};

Math.ceil10 = function(value, exp) {
  return decimalAdjust('ceil', value, exp);
};
```