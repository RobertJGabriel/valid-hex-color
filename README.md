# valid-hex-color

> Check whether a hex colour value is valid.

[![npm](https://img.shields.io/npm/v/valid-hex-color.svg)](https://www.npmjs.com/package/valid-hex-color)

## Install

```sh
npm install valid-hex-color
```

## Usage

```js
const { check } = require('valid-hex-color');

check('#fff');      //=> true
check('#ffffff');   //=> true
check('ffffff');    //=> false  (leading # is required)
check('#ffff');     //=> false
check(0xffffff);    //=> false  (must be a string)
```

## API

### check(hex)

Returns `true` for a string matching three or six hex digits **preceded by `#`**,
otherwise `false`. Anything that is not a string returns `false`.

The pattern is `/^#([A-Fa-f0-9]{3}([A-Fa-f0-9]{3})?)$/`, so four- and
eight-digit values with alpha are not accepted.

## License

Apache-2.0 © Robert James Gabriel
