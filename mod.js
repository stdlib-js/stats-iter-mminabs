// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return e({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,i=Object.prototype,a=i.toString,o=i.__defineGetter__,u=i.__defineSetter__,c=i.__lookupGetter__,f=i.__lookupSetter__;var s=function(r,e,t){var n,s,l,v;if("object"!=typeof r||null===r||"[object Array]"===a.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((s="value"in t)&&(c.call(r,e)||f.call(r,e)?(n=r.__proto__,r.__proto__=i,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),l="get"in t,v="set"in t,s&&(l||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&o&&o.call(r,e,t.get),v&&u&&u.call(r,e,t.set),r},l=n,v=s,p=t()?l:v;var g=function(r,e,t){p(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},m=g,d=/./;var h=function(r){return"boolean"==typeof r};var b=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var y=function(){return b&&"symbol"==typeof Symbol.toStringTag},w=Object.prototype.toString,E=w;var j=function(r){return E.call(r)},P=Object.prototype.hasOwnProperty;var _=function(r,e){return null!=r&&P.call(r,e)},O="function"==typeof Symbol?Symbol.toStringTag:"",T=_,S=O,x=w;var V=j,k=function(r){var e,t,n;if(null==r)return x.call(r);t=r[S],e=T(r,S);try{r[S]=void 0}catch(e){return x.call(r)}return n=x.call(r),e?r[S]=t:delete r[S],n},A=y()?k:V,F=Boolean.prototype.toString;var I=A,M=function(r){try{return F.call(r),!0}catch(r){return!1}},N=y();var R=function(r){return"object"==typeof r&&(r instanceof Boolean||(N?M(r):"[object Boolean]"===I(r)))},$=h,C=R;var B=m,G=function(r){return $(r)||C(r)},L=R;B(G,"isPrimitive",h),B(G,"isObject",L);var Z="object"==typeof self?self:null,W="object"==typeof window?window:null,X=G.isPrimitive,z=function(){return new Function("return this;")()},U=Z,Y=W,D=r(Object.freeze({__proto__:null}));var q=function(r){if(arguments.length){if(!X(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return z()}if(U)return U;if(Y)return Y;if(D)return D;throw new Error("unexpected error. Unable to resolve global object.")},H=q(),J=H.document&&H.document.childNodes,K=Int8Array,Q=d,rr=J,er=K;var tr=function(){return"function"==typeof Q||"object"==typeof er||"function"==typeof rr};var nr=function(){return/^\s*function\s*([^(]*)/i},ir=nr;m(ir,"REGEXP",nr());var ar=ir,or=A;var ur=Array.isArray?Array.isArray:function(r){return"[object Array]"===or(r)};var cr=function(r){return null!==r&&"object"==typeof r};m(cr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!ur(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(cr));var fr=cr;var sr=A,lr=ar.REGEXP,vr=function(r){return fr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var pr=function(r){var e,t,n;if(("Object"===(t=sr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=lr.exec(n.toString()))return e[1]}return vr(r)?"Buffer":t},gr=pr;var mr=pr;var dr=function(r){var e;return null===r?"null":"object"===(e=typeof r)?gr(r).toLowerCase():e},hr=function(r){return mr(r).toLowerCase()},br=tr()?hr:dr;var yr=function(r){return"function"===br(r)},wr=yr;var Er=function(r){var e=typeof r;return null!==r&&("object"===e||"function"===e)&&wr(r.next)};var jr=function(r){return"number"==typeof r},Pr=Number,_r=Pr.prototype.toString;var Or=A,Tr=Pr,Sr=function(r){try{return _r.call(r),!0}catch(r){return!1}},xr=y();var Vr=function(r){return"object"==typeof r&&(r instanceof Tr||(xr?Sr(r):"[object Number]"===Or(r)))},kr=jr,Ar=Vr;var Fr=m,Ir=function(r){return kr(r)||Ar(r)},Mr=Vr;Fr(Ir,"isPrimitive",jr),Fr(Ir,"isObject",Mr);var Nr=Ir,Rr=Number.POSITIVE_INFINITY,$r=Pr.NEGATIVE_INFINITY,Cr=Math.floor;var Br=function(r){return Cr(r)===r},Gr=Rr,Lr=$r,Zr=Br;var Wr=function(r){return r<Gr&&r>Lr&&Zr(r)},Xr=Nr.isPrimitive,zr=Wr;var Ur=function(r){return Xr(r)&&zr(r)},Yr=Nr.isObject,Dr=Wr;var qr=function(r){return Yr(r)&&Dr(r.valueOf())},Hr=Ur,Jr=qr;var Kr=m,Qr=function(r){return Hr(r)||Jr(r)},re=qr;Kr(Qr,"isPrimitive",Ur),Kr(Qr,"isObject",re);var ee=Qr,te=ee.isPrimitive;var ne=function(r){return te(r)&&r>0},ie=ee.isObject;var ae=function(r){return ie(r)&&r.valueOf()>0},oe=ne,ue=ae;var ce=m,fe=function(r){return oe(r)||ue(r)},se=ae;ce(fe,"isPrimitive",ne),ce(fe,"isObject",se);var le=fe,ve=_;var pe=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&ve(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null;var ge=function(r){return Math.abs(r)};var me=function(r){return r!=r},de=$r;var he=function(r){return 0===r&&1/r===de},be=A,ye="function"==typeof Float64Array;var we="function"==typeof Float64Array?Float64Array:null,Ee=function(r){return ye&&r instanceof Float64Array||"[object Float64Array]"===be(r)},je=we;var Pe,_e="function"==typeof Float64Array?Float64Array:void 0,Oe=function(){throw new Error("not implemented")};Pe=function(){var r,e;if("function"!=typeof je)return!1;try{e=new je([1,3.14,-3.14,NaN]),r=Ee(e)&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?_e:Oe;var Te=le.isPrimitive,Se=me,xe=he,Ve=Rr,ke=Pe;var Ae=le.isPrimitive,Fe=ge,Ie=function(r){var e,t,n,i;if(!Te(r))throw new TypeError("invalid argument. Must provide a positive integer. Value: `"+r+"`.");return e=new ke(r),t=Ve,i=-1,n=0,function(a){var o,u;if(0===arguments.length)return 0===n?null:t;if(i=(i+1)%r,n<r)n+=1,(Se(a)||a<t||a===t&&xe(a))&&(t=a);else if(Se(a)||a<t)t=a;else if(e[i]===t&&a>t||Se(e[i])){for(t=a,u=0;u<r;u++)if(u!==i){if(o=e[u],Se(o)){t=o;break}(o<t||o===t&&xe(o))&&(t=o)}}else if(e[i]===t&&a===t&&0===a)if(xe(a))t=a;else if(xe(e[i]))for(t=a,u=0;u<r;u++)if(u!==i&&xe(e[u])){t=e[u];break}return e[i]=a,t}};var Me=function(r){var e;if(!Ae(r))throw new TypeError("invalid argument. Must provide a positive integer. Value: `"+r+"`.");return e=Ie(r),function(r){if(0===arguments.length)return e();return e(Fe(r))}};var Ne=function(r){return"string"==typeof r},Re=String.prototype.valueOf;var $e=A,Ce=function(r){try{return Re.call(r),!0}catch(r){return!1}},Be=y();var Ge=function(r){return"object"==typeof r&&(r instanceof String||(Be?Ce(r):"[object String]"===$e(r)))},Le=Ne,Ze=Ge;var We=m,Xe=function(r){return Le(r)||Ze(r)},ze=Ge;We(Xe,"isPrimitive",Ne),We(Xe,"isObject",ze);var Ue=Xe,Ye=Br;var De=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Ye(r.length)&&r.length>=0&&r.length<=9007199254740991},qe=Nr.isPrimitive,He=me;var Je=function(r){return qe(r)&&He(r)},Ke=Nr.isObject,Qe=me;var rt=function(r){return Ke(r)&&Qe(r.valueOf())},et=Je,tt=rt;var nt=m,it=function(r){return et(r)||tt(r)},at=rt;nt(it,"isPrimitive",Je),nt(it,"isObject",at);var ot=De,ut=ee.isPrimitive,ct=Ue.isPrimitive,ft=it.isPrimitive;var st=function(r,e,t){var n,i,a;if(!ot(r)&&!ct(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!ut(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(ct(r)){if(!ct(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,ft(e)){for(a=i;a<n;a++)if(ft(r[a]))return!0;return!1}for(a=i;a<n;a++)if(r[a]===e)return!0;return!1},lt=Ue.isPrimitive;var vt=function(r){if(!lt(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},pt=Ue.isPrimitive;var gt=function(r){if(!pt(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},mt=vt,dt=gt,ht=Ue.isPrimitive;var bt=function(r){return ht(r)&&r===dt(r)&&r!==mt(r)},yt=Rr,wt=$r;var Et=function(r){return r==r&&r>wt&&r<yt},jt=ee.isPrimitive;var Pt=function(r){return jt(r)&&r>=0},_t=ee.isObject;var Ot=function(r){return _t(r)&&r.valueOf()>=0},Tt=Pt,St=Ot;var xt=m,Vt=function(r){return Tt(r)||St(r)},kt=Ot;xt(Vt,"isPrimitive",Pt),xt(Vt,"isObject",kt);var At=Vt.isPrimitive,Ft=Ue.isPrimitive;var It=function(r,e){var t,n;if(!Ft(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!At(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},Mt=ee.isPrimitive,Nt=Ue.isPrimitive;var Rt=It,$t=function(r,e,t){var n,i;if(!Nt(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!Nt(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!Mt(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0};var Ct=function(r,e,t){var n=!1,i=e-r.length;return i<0||($t(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+Rt("0",i):Rt("0",i)+r,n&&(r="-"+r)),r},Bt=bt,Gt=gt,Lt=vt,Zt=Et,Wt=Nr.isPrimitive,Xt=Ct;var zt=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!Zt(n)){if(!Wt(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=Xt(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=Xt(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=Bt(r.specifier)?Gt(t):Lt(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},Ut=Ue.isPrimitive,Yt=/[-\/\\^$*+?.()|[\]{}]/g;var Dt=function(r){var e,t;if(!Ut(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(Yt,"\\$&"):(e=(e=r.substring(1,t)).replace(Yt,"\\$&"),r=r[0]+e+r.substring(t))},qt=RegExp.prototype.exec;var Ht=A,Jt=function(r){try{return qt.call(r),!0}catch(r){return!1}},Kt=y();var Qt=Dt,rn=yr,en=Ue.isPrimitive,tn=function(r){return"object"==typeof r&&(r instanceof RegExp||(Kt?Jt(r):"[object RegExp]"===Ht(r)))};var nn=bt,an=gt,on=vt,un=function(r,e,t){if(!en(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(en(e))e=Qt(e),e=new RegExp(e,"g");else if(!tn(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!en(t)&&!rn(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},cn=Et,fn=Nr.isPrimitive,sn=ge,ln=/e\+(\d)$/,vn=/e-(\d)$/,pn=/^(\d+)$/,gn=/^(\d+)e/,mn=/\.0$/,dn=/\.0*e/,hn=/(\..*[^0])0*e/;var bn=function(r){var e,t,n=parseFloat(r.arg);if(!cn(n)){if(!fn(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":sn(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=un(t,hn,"$1e"),t=un(t,dn,"e"),t=un(t,mn,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=un(t,ln,"e+0$1"),t=un(t,vn,"e-0$1"),r.alternate&&(t=un(t,pn,"$1."),t=un(t,gn,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=nn(r.specifier)?an(t):on(t)},yn=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var wn=It;var En=Ue.isPrimitive,jn=st,Pn=me,_n=zt,On=bn,Tn=function(r){var e,t,n,i,a;for(e=0,n=[],a=yn.exec(r);a;)(t=r.slice(e,yn.lastIndex-a[0].length)).length&&n.push(t),(i=o(a,n.length))&&n.push(i),e=yn.lastIndex,a=yn.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function o(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},Sn=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+wn(" ",n):wn(" ",n)+r},xn=Ct,Vn=String.fromCharCode;var kn=m,An=Er,Fn=le.isPrimitive,In=yr,Mn=_,Nn=pe,Rn=Me,$n=function(r){var e,t,n,i,a,o,u,c,f;if(!En(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=Tn(r),o="",u=1,c=0;c<e.length;c++)if(n=e[c],En(n))o+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!jn(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,Pn(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,Pn(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=_n(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!Pn(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Pn(a)?String(n.arg):Vn(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=On(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=xn(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Sn(n.arg,n.width,n.padRight)),o+=n.arg||"",u+=1}return o};var Cn=function r(e,t){var n,i,a;if(!An(e))throw new TypeError($n("invalid argument. First argument must be an iterator. Value: `%s`.",e));if(!Fn(t))throw new TypeError($n("invalid argument. Second argument must be a positive integer. Value: `%s`.",t));return a=Rn(t),kn(n={},"next",(function(){var r,t;if(i)return{done:!0};r={},"number"==typeof(t=e.next()).value?r.value=a(t.value):Mn(t,"value")&&(r.value=a(NaN));t.done?(i=!0,r.done=!0):r.done=!1;return r})),kn(n,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),Nn&&In(e[Nn])&&kn(n,Nn,(function(){return r(e[Nn](),t)})),n},Bn=Cn;export{Bn as default};
//# sourceMappingURL=mod.js.map
