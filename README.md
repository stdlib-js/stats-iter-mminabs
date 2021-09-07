<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# itermminabs

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Create an [iterator][mdn-iterator-protocol] which iteratively computes a moving minimum absolute value.

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-iter-mminabs
```

</section>

<section class="usage">

## Usage

```javascript
var itermminabs = require( '@stdlib/stats-iter-mminabs' );
```

#### itermminabs( iterator, W )

Returns an [iterator][mdn-iterator-protocol] which iteratively computes a moving minimum absolute value. The `W` parameter defines the number of iterated values over which to compute the moving minimum absolute value.

```javascript
var array2iterator = require( '@stdlib/array-to-iterator' );

var arr = array2iterator( [ 2.0, 1.0, 3.0, -7.0, -5.0 ] );
var it = itermminabs( arr, 3 );

// Fill the window...
var m = it.next().value; // [2.0]
// returns 2.0

m = it.next().value; // [2.0, 1.0]
// returns 1.0

m = it.next().value; // [2.0, 1.0, 3.0]
// returns 1.0

// Window begins sliding...
m = it.next().value; // [1.0, 3.0, -7.0]
// returns 1.0

m = it.next().value; // [3.0, -7.0, -5.0]
// returns 3.0
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an iterated value is non-numeric (including `NaN`), the function returns `NaN` for **at least** `W-1` future invocations. If non-numeric iterated values are possible, you are advised to provide an [`iterator`][mdn-iterator-protocol] which type checks and handles non-numeric values accordingly.
-   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all previously iterated values.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var runif = require( '@stdlib/random-iter-uniform' );
var itermminabs = require( '@stdlib/stats-iter-mminabs' );

// Create an iterator for generating uniformly distributed pseudorandom numbers:
var rand = runif( -10.0, 10.0, {
    'seed': 1234,
    'iter': 100
});

// Create an iterator for iteratively computing a moving minimum absolute value:
var it = itermminabs( rand, 3 );

// Perform manual iteration...
var v;
while ( true ) {
    v = it.next();
    if ( typeof v.value === 'number' ) {
        console.log( 'minabs: %d', v.value );
    }
    if ( v.done ) {
        break;
    }
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   [`@stdlib/stats/iter/minabs`][@stdlib/stats/iter/minabs]: compute the minimum absolute value of all iterated values.
-   [`@stdlib/stats/iter/mmaxabs`][@stdlib/stats/iter/mmaxabs]: create an iterator which iteratively computes a moving maximum absolute value.
-   [`@stdlib/stats/iter/mmin`][@stdlib/stats/iter/mmin]: create an iterator which iteratively computes a moving minimum value.

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-iter-mminabs.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-iter-mminabs

[test-image]: https://github.com/stdlib-js/stats-iter-mminabs/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/stats-iter-mminabs/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-iter-mminabs/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-iter-mminabs?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-iter-mminabs.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-iter-mminabs/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-iter-mminabs/main/LICENSE

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

<!-- <related-links> -->

[@stdlib/stats/iter/minabs]: https://github.com/stdlib-js/stats-iter-minabs

[@stdlib/stats/iter/mmaxabs]: https://github.com/stdlib-js/stats-iter-mmaxabs

[@stdlib/stats/iter/mmin]: https://github.com/stdlib-js/stats-iter-mmin

<!-- </related-links> -->

</section>

<!-- /.links -->
