// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-mminabs@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var d=e,a=t,l=r.isPrimitive,u=s,p=n,j=i,v=o,f=m;var h=function e(t,r){var s,n,i;if(!a(t))throw new TypeError(f("invalid argument. First argument must be an iterator. Value: `%s`.",t));if(!l(r))throw new TypeError(f("invalid argument. Second argument must be a positive integer. Value: `%s`.",r));return i=v(r),d(s={},"next",(function(){var e,r;if(n)return{done:!0};e={},"number"==typeof(r=t.next()).value?e.value=i(r.value):p(r,"value")&&(e.value=i(NaN));r.done?(n=!0,e.done=!0):e.done=!1;return e})),d(s,"return",(function(e){if(n=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),j&&u(t[j])&&d(s,j,(function(){return e(t[j](),r)})),s},g=h;export{g as default};
//# sourceMappingURL=index.mjs.map
