# cputemp-macos

A MacOS  command line tool to read or log the cpu temperature 🌡

[![NPM Version][npm-img]][npm-url]
[![NPM Downloads][downloads-img]][downloads-url]
[![Git Issues][issues-img]][issues-url]
[![deps status][daviddm-img]][daviddm-url]
[![MIT license][license-img]][license-url]

## Features

*   🌡️ Logs mean temperature, max temperature and temperature for every core.
*   🎨 Color coded output depending on temperature 🔥 ⚡ ❄️
*   🗽 Both fahrenheit and celsius is available 🇺🇸 ❤️ 🇪🇺
*   🚀 Continuous logging for monitoring 🖥

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

## Credits

Written by Julius Celik 🐢 👨‍💻 👌

### Contributors

Sebastian Hildebrandt [sebhildebrandt](https://github.com/sebhildebrandt) for `osx-temperature-sensor` which this tool heavily relies on

## License [![MIT license][license-img]][license-url]

> The [`MIT`][license-url] License (MIT)
>
> Copyright (c) 2018 Julius Recep Colliander Celik
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.
>
> For further details see [LICENSE](LICENSE) file.

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
