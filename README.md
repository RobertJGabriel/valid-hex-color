# valid-hex-color [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> Check if hex color is in the valid range.

## Installation

```sh
$ npm install --save valid-hex-color
```

## Usage

```js
const validHexColor = require('valid-hex-color');

validHexColor.check('#fff');
// True

validHexColor.check('#ffffff');
// false

validHexColor.check('#9999sj');
// false

```
## License

Apache-2.0 © [Robert James Gabriel](https://www.robertgabriel.ninja)


[npm-image]: https://badge.fury.io/js/valid-hex-color.svg
[npm-url]: https://npmjs.org/package/valid-hex-color
[travis-image]: https://travis-ci.org/RobertJGabriel/valid-hex-color.svg?branch=master
[travis-url]: https://travis-ci.org/RobertJGabriel/valid-hex-color
[daviddm-image]: https://david-dm.org/RobertJGabriel/valid-hex-color.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/RobertJGabriel/valid-hex-color
[coveralls-image]: https://coveralls.io/repos/RobertJGabriel/valid-hex-color/badge.svg
[coveralls-url]: https://coveralls.io/r/RobertJGabriel/valid-hex-color
