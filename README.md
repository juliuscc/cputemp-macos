# cputemp-macos

A MacOS  command line tool to read or log the cpu temperature 🌡

[![NPM Version][npm-img]][npm-url]
[![NPM Downloads][downloads-img]][downloads-url]
[![Git Issues][issues-img]][issues-url]
[![deps status][daviddm-img]][daviddm-url]
[![MIT license][license-img]][license-url]

## Quickstart

### Instalation

Install cputemp-macos with npm

```bash
npm install cputemp-macos --save
```

or with yarn

```bash
yarn add cputemp-macos
```

### Usage

<p align="center">
	<image src="media/demo.svg">
</p>

```
$ temp --help
  Usage: temp [options]

  Options:
    -V, --version             output the version number
    -l, --log <milliseconds>  continuously log the temperature with intervals <milliseconds> long
    -c, --color               color code the output depending on temperature
    -f, --fahrenheit          present the temperature using Fahrenheit instead of Celsius
    -h, --help                output usage information
```

[npm-img]: https://img.shields.io/npm/v/cputemp-macos.svg?style=flat-square
[npm-url]: https://npmjs.org/package/cputemp-macos
[downloads-img]: https://img.shields.io/npm/dm/cputemp-macos.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/cputemp-macos
[issues-img]: https://img.shields.io/github/issues/juliuscc/cputemp-macos.svg?style=flat-square
[issues-url]: https://github.com/juliuscc/cputemp-macos/issues
[daviddm-img]: https://img.shields.io/david/juliuscc/cputemp-macos.svg?style=flat-square
[daviddm-url]: https://david-dm.org/juliuscc/cputemp-macos
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license-url]: https://github.com/juliuscc/cputemp-macos/blob/master/LICENSE
