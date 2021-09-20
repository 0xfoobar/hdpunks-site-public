(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function t(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
t("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function fa(a){if(!(a instanceof Array)){a=u(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
var ha="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ia;
if("function"==typeof Object.setPrototypeOf)ia=Object.setPrototypeOf;else{var ja;a:{var ka={a:!0},la={};try{la.__proto__=ka;ja=la.a;break a}catch(a){}ja=!1}ia=ja?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ma=ia;
function w(a,b){a.prototype=ha(b.prototype);a.prototype.constructor=a;if(ma)ma(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.G=b.prototype}
function na(){this.s=!1;this.l=null;this.i=void 0;this.h=1;this.m=this.o=0;this.B=this.j=null}
function oa(a){if(a.s)throw new TypeError("Generator is already running");a.s=!0}
na.prototype.u=function(a){this.i=a};
function pa(a,b){a.j={ma:b,pa:!0};a.h=a.o||a.m}
na.prototype.return=function(a){this.j={return:a};this.h=this.m};
function y(a,b,c){a.h=c;return{value:b}}
na.prototype.v=function(a){this.h=a};
function qa(a,b,c){a.o=b;void 0!=c&&(a.m=c)}
function ra(a){a.o=0;var b=a.j.ma;a.j=null;return b}
function sa(a){a.B=[a.j];a.o=0;a.m=0}
function ta(a){var b=a.B.splice(0)[0];(b=a.j=a.j||b)?b.pa?a.h=a.o||a.m:void 0!=b.v&&a.m<b.v?(a.h=b.v,a.j=null):a.h=a.m:a.h=0}
function va(a){this.h=new na;this.i=a}
function wa(a,b){oa(a.h);var c=a.h.l;if(c)return xa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return ya(a)}
function xa(a,b,c,d){try{var e=b.call(a.h.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.s=!1,e;var f=e.value}catch(g){return a.h.l=null,pa(a.h,g),ya(a)}a.h.l=null;d.call(a.h,f);return ya(a)}
function ya(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.s=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,pa(a.h,c)}a.h.s=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.pa)throw b.ma;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function za(a){this.next=function(b){oa(a.h);a.h.l?b=xa(a,a.h.l.next,b,a.h.u):(a.h.u(b),b=ya(a));return b};
this.throw=function(b){oa(a.h);a.h.l?b=xa(a,a.h.l["throw"],b,a.h.u):(pa(a.h,b),b=ya(a));return b};
this.return=function(b){return wa(a,b)};
this[Symbol.iterator]=function(){return this}}
function A(a,b){b=new za(new va(b));ma&&a.prototype&&ma(b,a.prototype);return b}
t("Reflect.setPrototypeOf",function(a){return a?a:ma?function(b,c){try{return ma(b,c),!0}catch(d){return!1}}:null});
function Aa(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
t("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!Aa(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n.delete(k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!Aa(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&Aa(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&Aa(k,g)&&Aa(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&Aa(k,g)&&Aa(k[g],this.h)?delete k[g][this.h]:!1};
return b});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.h;return ea(function(){if(l){for(;l.head!=h.h;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h.data_[l];if(n&&Aa(h.data_,l))for(h=0;h<n.length;h++){var p=n[h];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:n,index:h,A:p}}return{id:l,list:n,index:-1,A:void 0}}
function e(h){this.data_={};this.h=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.data_[l.id]=[]);l.A?l.A.value=k:(l.A={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},l.list.push(l.A),this.h.previous.next=l.A,this.h.previous=l.A,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.A&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.A.previous.next=h.A.next,h.A.next.previous=h.A.previous,h.A.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).A};
e.prototype.get=function(h){return(h=d(this,h).A)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ba(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ba(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
t("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ba(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
t("Object.setPrototypeOf",function(a){return a||ma});
var Ca="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Aa(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||Ca});
t("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.s=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.m()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.m=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.U),reject:g(this.m)}};
b.prototype.U=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.wa(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.T(g):this.o(g)}};
b.prototype.T=function(g){var h=void 0;try{h=g.then}catch(k){this.m(k);return}"function"==typeof h?this.xa(h,g):this.o(g)};
b.prototype.m=function(g){this.u(2,g)};
b.prototype.o=function(g){this.u(1,g)};
b.prototype.u=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.ea();this.B()};
b.prototype.ea=function(){var g=this;e(function(){if(g.N()){var h=da.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.N=function(){if(this.s)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.B=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.wa=function(g){var h=this.l();g.W(h.resolve,h.reject)};
b.prototype.xa=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,q){return"function"==typeof r?function(v){try{l(r(v))}catch(z){n(z)}}:q}
var l,n,p=new b(function(r,q){l=r;n=q});
this.W(k(g,l),k(h,n));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.W=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.s=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),n=l.next();!n.done;n=l.next())d(n.value).W(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,n){function p(v){return function(z){r[v]=z;q--;0==q&&l(r)}}
var r=[],q=0;do r.push(void 0),q++,d(k.value).W(p(r.length-1),n),k=h.next();while(!k.done)})};
return b});
function Da(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.entries",function(a){return a?a:function(){return Da(this,function(b,c){return[b,c]})}});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Aa(b,d)&&c.push([d,b[d]]);return c}});
t("Array.prototype.keys",function(a){return a?a:function(){return Da(this,function(b){return b})}});
t("Array.prototype.values",function(a){return a?a:function(){return Da(this,function(b,c){return c})}});
t("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
t("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
t("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ba(this,b,"includes").indexOf(b,c||0)}});
t("Set",function(a){function b(c){this.h=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
var B=this||self;function C(a,b){a=a.split(".");b=b||B;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ea(){}
function Fa(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ga(a){var b=Fa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function D(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ha(a){return Object.prototype.hasOwnProperty.call(a,Ia)&&a[Ia]||(a[Ia]=++Ja)}
var Ia="closure_uid_"+(1E9*Math.random()>>>0),Ja=0;function Ka(a,b,c){return a.call.apply(a.bind,arguments)}
function La(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Ma(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ma=Ka:Ma=La;return Ma.apply(null,arguments)}
function F(a,b){a=a.split(".");var c=B;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function G(a,b){function c(){}
c.prototype=b.prototype;a.G=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.gb=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Na(a){return a}
;function Oa(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Oa);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b&&(this.Aa=b)}
G(Oa,Error);Oa.prototype.name="CustomError";function Pa(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function Qa(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var Ra=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},H=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Sa=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
H(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Ta(a,b){b=Ra(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function Ua(a){return Array.prototype.concat.apply([],arguments)}
function Va(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Wa(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ga(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Xa(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Ya(a){var b=Za,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function $a(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function ab(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=ab(a[c]);return b}
var bb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function cb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<bb.length;f++)c=bb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var db;var eb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function fb(a,b){if(b)a=a.replace(gb,"&amp;").replace(hb,"&lt;").replace(ib,"&gt;").replace(jb,"&quot;").replace(kb,"&#39;").replace(lb,"&#0;");else{if(!mb.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(gb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(hb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(ib,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(jb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(kb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(lb,"&#0;"))}return a}
var gb=/&/g,hb=/</g,ib=/>/g,jb=/"/g,kb=/'/g,lb=/\x00/g,mb=/[\x00&<>"']/;function nb(a,b){this.h=b===ob?a:""}
m=nb.prototype;m.aa=!0;m.Y=function(){return this.h.toString()};
m.oa=!0;m.na=function(){return 1};
m.toString=function(){return this.h.toString()};
var pb=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,qb=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,rb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,ob={},sb=new nb("about:invalid#zClosurez",ob);var tb;a:{var ub=B.navigator;if(ub){var vb=ub.userAgent;if(vb){tb=vb;break a}}tb=""}function I(a){return-1!=tb.indexOf(a)}
;function wb(a,b,c){this.h=c===xb?a:"";this.i=b}
m=wb.prototype;m.oa=!0;m.na=function(){return this.i};
m.aa=!0;m.Y=function(){return this.h.toString()};
m.toString=function(){return this.h.toString()};
var xb={};function yb(a,b){if(void 0===db){var c=null;var d=B.trustedTypes;if(d&&d.createPolicy){try{c=d.createPolicy("goog#html",{createHTML:Na,createScript:Na,createScriptURL:Na})}catch(e){B.console&&B.console.error(e.message)}db=c}else db=c}a=(c=db)?c.createHTML(a):a;return new wb(a,b,xb)}
;function zb(a){return a=fb(a,void 0)}
;var Ab=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Bb(a){return a?decodeURI(a):a}
function Cb(a){return Bb(a.match(Ab)[3]||null)}
function Db(a){var b=a.match(Ab);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function Eb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Eb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Fb(a){var b=[],c;for(c in a)Eb(c,a[c],b);return b.join("&")}
var Gb=/#|$/;function Hb(a,b){var c=a.search(Gb);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.substr(d,e-d).replace(/\+/g," "))}
;function J(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;function Ib(){return I("iPhone")&&!I("iPod")&&!I("iPad")}
;function Jb(a){Jb[" "](a);return a}
Jb[" "]=Ea;var Kb=I("Opera"),Lb=I("Trident")||I("MSIE"),Mb=I("Edge"),Nb=I("Gecko")&&!(-1!=tb.toLowerCase().indexOf("webkit")&&!I("Edge"))&&!(I("Trident")||I("MSIE"))&&!I("Edge"),Ob=-1!=tb.toLowerCase().indexOf("webkit")&&!I("Edge");function Pb(){var a=B.document;return a?a.documentMode:void 0}
var Qb;a:{var Rb="",Sb=function(){var a=tb;if(Nb)return/rv:([^\);]+)(\)|;)/.exec(a);if(Mb)return/Edge\/([\d\.]+)/.exec(a);if(Lb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Ob)return/WebKit\/(\S+)/.exec(a);if(Kb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Sb&&(Rb=Sb?Sb[1]:"");if(Lb){var Tb=Pb();if(null!=Tb&&Tb>parseFloat(Rb)){Qb=String(Tb);break a}}Qb=Rb}var Ub=Qb,Vb;if(B.document&&Lb){var Wb=Pb();Vb=Wb?Wb:parseInt(Ub,10)||void 0}else Vb=void 0;var Xb=Vb;var Yb=Ib()||I("iPod"),Zb=I("iPad"),$b=I("Safari")&&!((I("Chrome")||I("CriOS"))&&!I("Edge")||I("Coast")||I("Opera")||I("Edge")||I("Edg/")||I("OPR")||I("Firefox")||I("FxiOS")||I("Silk")||I("Android"))&&!(Ib()||I("iPad")||I("iPod"));var ac={},bc=null;var cc={ib:{value:!0,configurable:!0}};var dc=Object,ec=dc.freeze,fc=[];Array.isArray(fc)&&!Object.isFrozen(fc)&&Object.defineProperties(fc,cc);ec.call(dc,fc);var K=window;var gc=!Lb||9<=Number(Xb);function hc(a,b){this.width=a;this.height=b}
m=hc.prototype;m.clone=function(){return new hc(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.isEmpty=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function ic(a,b){Xa(b,function(c,d){c&&"object"==typeof c&&c.aa&&(c=c.Y());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:jc.hasOwnProperty(d)?a.setAttribute(jc[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var jc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function kc(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!gc&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',zb(g.name),'"');if(g.type){f.push(' type="',zb(g.type),'"');var h={};cb(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=lc(e,f);g&&("string"===typeof g?f.className=g:Array.isArray(g)?f.className=g.join(" "):ic(f,g));2<d.length&&mc(e,f,d);return f}
function mc(a,b,c){function d(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h)}
for(var e=2;e<c.length;e++){var f=c[e];if(!Ga(f)||D(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(D(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){g="function"==typeof f.item;break a}}g=!1}H(g?Va(f):f,d)}}}
function lc(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function nc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function oc(a){var b=pc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function qc(){var a=[];oc(function(b){a.push(b)});
return a}
var pc={Ra:"allow-forms",Sa:"allow-modals",Ta:"allow-orientation-lock",Ua:"allow-pointer-lock",Va:"allow-popups",Wa:"allow-popups-to-escape-sandbox",Xa:"allow-presentation",Ya:"allow-same-origin",Za:"allow-scripts",ab:"allow-top-navigation",bb:"allow-top-navigation-by-user-activation"},rc=Qa(function(){return qc()});
function sc(){var a=lc(document,"IFRAME"),b={};H(rc(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;var tc=(new Date).getTime();function uc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==
c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function vc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(p){for(var r=g,q=0;64>q;q+=4)r[q/4]=p[q]<<24|p[q+1]<<16|p[q+2]<<8|p[q+3];for(q=16;80>q;q++)p=r[q-3]^r[q-8]^r[q-14]^r[q-16],r[q]=(p<<1|p>>>31)&4294967295;p=e[0];var v=e[1],z=e[2],x=e[3],Q=e[4];for(q=0;80>q;q++){if(40>q)if(20>q){var R=x^v&(z^x);var E=1518500249}else R=v^z^x,E=1859775393;else 60>q?(R=v&z|x&(v|z),E=2400959708):(R=v^z^x,E=3395469782);R=((p<<5|p>>>27)&4294967295)+R+Q+E+r[q]&4294967295;Q=x;x=z;z=(v<<30|v>>>2)&4294967295;v=p;p=R}e[0]=e[0]+p&4294967295;e[1]=e[1]+v&4294967295;e[2]=
e[2]+z&4294967295;e[3]=e[3]+x&4294967295;e[4]=e[4]+Q&4294967295}
function c(p,r){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var q=[],v=0,z=p.length;v<z;++v)q.push(p.charCodeAt(v));p=q}r||(r=p.length);q=0;if(0==l)for(;q+64<r;)b(p.slice(q,q+64)),q+=64,n+=64;for(;q<r;)if(f[l++]=p[q++],n++,64==l)for(l=0,b(f);q+64<r;)b(p.slice(q,q+64)),q+=64,n+=64}
function d(){var p=[],r=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var q=63;56<=q;q--)f[q]=r&255,r>>>=8;b(f);for(q=r=0;5>q;q++)for(var v=24;0<=v;v-=8)p[r++]=e[q]>>v&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,Ba:function(){for(var p=d(),r="",q=0;q<p.length;q++)r+="0123456789ABCDEF".charAt(Math.floor(p[q]/16))+"0123456789ABCDEF".charAt(p[q]%16);return r}}}
;function wc(a,b,c){var d=String(B.location.href);return d&&a&&b?[b,xc(uc(d),a,c||null)].join(" "):null}
function xc(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],H(d,function(h){e.push(h)}),yc(e.join(" "));
var f=[],g=[];H(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];H(d,function(h){e.push(h)});
a=yc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function yc(a){var b=vc();b.update(a);return b.Ba().toLowerCase()}
;var zc={};function Ac(a){this.h=a||{cookie:""}}
m=Ac.prototype;m.isEnabled=function(){if(!B.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{ga:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.lb;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.ga}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);this.h.cookie=a+"="+b+(f?";domain="+f:"")+(g?";path="+g:"")+(0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString())+(d?";secure":"")+(null!=e?";samesite="+e:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=eb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{ga:0,path:b,domain:c});return d};
m.isEmpty=function(){return!this.h.cookie};
m.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=eb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Bc=new Ac("undefined"==typeof document?null:document);function Cc(a){return!!zc.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function Dc(a,b,c,d){(a=B[a])||(a=(new Ac(document)).get(b));return a?wc(a,c,d):null}
function Ec(a){var b=void 0===b?!1:b;var c=uc(String(B.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=B.__SAPISID||B.__APISID||B.__3PSAPISID||B.__OVERRIDE_SID;Cc(e)&&(f=f||B.__1PSAPISID);if(f)e=!0;else{var g=new Ac(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID");Cc(e)&&(f=f||g.get("__Secure-1PAPISID"));e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?B.__SAPISID:B.__APISID,e||(e=new Ac(document),
e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?wc(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&Cc(b)&&((b=Dc("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Dc("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;function Fc(){this.data_=[];this.h=-1}
Fc.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.data_[a]!=b&&(this.data_[a]=b,this.h=-1)};
Fc.prototype.get=function(a){return!!this.data_[a]};
function Gc(a){-1==a.h&&(a.h=Sa(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function Hc(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
Hc.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function Ic(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;var Jc;
function Kc(){var a=B.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!I("Presto")&&(a=function(){var e=lc(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Ma(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!I("Trident")&&!I("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.ka;c.ka=null;e()}};
return function(e){d.next={ka:e};d=d.next;b.port2.postMessage(0)}}return function(e){B.setTimeout(e,0)}}
;function Lc(a){B.setTimeout(function(){throw a;},0)}
;function Mc(){this.i=this.h=null}
Mc.prototype.add=function(a,b){var c=Nc.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Mc.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Nc=new Hc(function(){return new Oc},function(a){return a.reset()});
function Oc(){this.next=this.scope=this.h=null}
Oc.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Oc.prototype.reset=function(){this.next=this.scope=this.h=null};function Pc(a,b){Qc||Rc();Sc||(Qc(),Sc=!0);Tc.add(a,b)}
var Qc;function Rc(){if(B.Promise&&B.Promise.resolve){var a=B.Promise.resolve(void 0);Qc=function(){a.then(Uc)}}else Qc=function(){var b=Uc;
"function"!==typeof B.setImmediate||B.Window&&B.Window.prototype&&!I("Edge")&&B.Window.prototype.setImmediate==B.setImmediate?(Jc||(Jc=Kc()),Jc(b)):B.setImmediate(b)}}
var Sc=!1,Tc=new Mc;function Uc(){for(var a;a=Tc.remove();){try{a.h.call(a.scope)}catch(b){Lc(b)}Ic(Nc,a)}Sc=!1}
;function Vc(a,b){this.h=a[B.Symbol.iterator]();this.i=b;this.j=0}
Vc.prototype[Symbol.iterator]=function(){return this};
Vc.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value,this.j++),done:a.done}};
function Wc(a,b){return new Vc(a,b)}
;function Xc(){this.blockSize=-1}
;function Yc(){this.blockSize=-1;this.blockSize=64;this.h=[];this.m=[];this.o=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
G(Yc,Xc);Yc.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function Zc(a,b,c){c||(c=0);var d=a.o;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
Yc.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.m,f=this.i;d<b;){if(0==f)for(;d<=c;)Zc(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Zc(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Zc(this,e);f=0;break}}this.i=f;this.l+=b}};
Yc.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.m[c]=b&255,b/=256;Zc(this,this.m);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function $c(a){var b=C("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||B.$googDebugFname||b}catch(g){e="Not available",c=!0}b=ad(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,bd[c])c=bd[c];else{c=String(c);if(!bd[c]){var f=/function\s+([^\(]+)/m.exec(c);bd[c]=f?f[1]:"[Anonymous]"}c=bd[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function ad(a,b){b||(b={});b[cd(a)]=!0;var c=a.stack||"";(a=a.Aa)&&!b[cd(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=ad(a,b));return c}
function cd(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var bd={};function dd(){this.j=this.j;this.m=this.m}
dd.prototype.j=!1;dd.prototype.dispose=function(){this.j||(this.j=!0,this.P())};
dd.prototype.P=function(){if(this.m)for(;this.m.length;)this.m.shift()()};var ed="StopIteration"in B?B.StopIteration:{message:"StopIteration",stack:""};function fd(){}
fd.prototype.next=function(){return fd.prototype.h.call(this)};
fd.prototype.h=function(){throw ed;};
fd.prototype.C=function(){return this};function gd(a){if(a instanceof hd||a instanceof id||a instanceof jd)return a;if("function"==typeof a.next)return new hd(function(){return kd(a)});
if("function"==typeof a[Symbol.iterator])return new hd(function(){return a[Symbol.iterator]()});
if("function"==typeof a.C)return new hd(function(){return kd(a.C())});
throw Error("Not an iterator or iterable.");}
function kd(a){if(!(a instanceof fd))return a;var b=!1;return{next:function(){for(var c;!b;)try{c=a.next();break}catch(d){if(d!==ed)throw d;b=!0}return{value:c,done:b}}}}
function hd(a){this.h=a}
hd.prototype.C=function(){return new id(this.h())};
hd.prototype[Symbol.iterator]=function(){return new jd(this.h())};
hd.prototype.i=function(){return new jd(this.h())};
function id(a){this.j=a}
w(id,fd);id.prototype.h=function(){var a=this.j.next();if(a.done)throw ed;return a.value};
id.prototype.next=function(){return id.prototype.h.call(this)};
id.prototype[Symbol.iterator]=function(){return new jd(this.j)};
id.prototype.i=function(){return new jd(this.j)};
function jd(a){hd.call(this,function(){return a});
this.j=a}
w(jd,hd);jd.prototype.next=function(){return this.j.next()};function ld(a,b){this.i={};this.h=[];this.j=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof ld)for(c=md(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function md(a){nd(a);return a.h.concat()}
m=ld.prototype;m.has=function(a){return od(this.i,a)};
m.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||pd;nd(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function pd(a,b){return a===b}
m.isEmpty=function(){return 0==this.size};
m.clear=function(){this.i={};this.j=this.size=this.h.length=0};
m.remove=function(a){return this.delete(a)};
m.delete=function(a){return od(this.i,a)?(delete this.i[a],--this.size,this.j++,this.h.length>2*this.size&&nd(this),!0):!1};
function nd(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];od(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],od(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
m.get=function(a,b){return od(this.i,a)?this.i[a]:b};
m.set=function(a,b){od(this.i,a)||(this.size+=1,this.h.push(a),this.j++);this.i[a]=b};
m.forEach=function(a,b){for(var c=md(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new ld(this)};
m.keys=function(){return gd(this.C(!0)).i()};
m.values=function(){return gd(this.C(!1)).i()};
m.entries=function(){var a=this;return Wc(this.keys(),function(b){return[b,a.get(b)]})};
m.C=function(a){nd(this);var b=0,c=this.j,d=this,e=new fd;e.h=function(){if(c!=d.j)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)throw ed;var f=d.h[b++];return a?f:d.i[f]};
e.next=e.h.bind(e);return e};
function od(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;var qd=function(){if(!B.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{B.addEventListener("test",Ea,b),B.removeEventListener("test",Ea,b)}catch(c){}return a}();function rd(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
rd.prototype.stopPropagation=function(){this.j=!0};
rd.prototype.preventDefault=function(){this.defaultPrevented=!0};function sd(a,b){rd.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
G(sd,rd);var td={2:"touch",3:"pen",4:"mouse"};
sd.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(Nb){a:{try{Jb(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:td[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&sd.G.preventDefault.call(this)};
sd.prototype.stopPropagation=function(){sd.G.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
sd.prototype.preventDefault=function(){sd.G.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ud="closure_listenable_"+(1E6*Math.random()|0);var vd=0;function wd(a,b,c,d,e){this.listener=a;this.h=null;this.src=b;this.type=c;this.capture=!!d;this.Z=e;this.key=++vd;this.R=this.V=!1}
function xd(a){a.R=!0;a.listener=null;a.h=null;a.src=null;a.Z=null}
;function yd(a){this.src=a;this.listeners={};this.h=0}
yd.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=zd(a,b,d,e);-1<g?(b=a[g],c||(b.V=!1)):(b=new wd(b,this.src,f,!!d,e),b.V=c,a.push(b));return b};
yd.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=zd(e,b,c,d);return-1<b?(xd(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function Ad(a,b){var c=b.type;c in a.listeners&&Ta(a.listeners[c],b)&&(xd(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function zd(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.R&&f.listener==b&&f.capture==!!c&&f.Z==d)return e}return-1}
;var Bd="closure_lm_"+(1E6*Math.random()|0),Cd={},Dd=0;function Ed(a,b,c,d,e){if(d&&d.once)Fd(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Ed(a,b[f],c,d,e);else c=Gd(c),a&&a[ud]?a.ba(b,c,D(d)?!!d.capture:!!d,e):Hd(a,b,c,!1,d,e)}
function Hd(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=D(e)?!!e.capture:!!e,h=Id(a);h||(a[Bd]=h=new yd(a));c=h.add(b,c,d,g,f);if(!c.h){d=Jd();c.h=d;d.src=a;d.listener=c;if(a.addEventListener)qd||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Kd(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Dd++}}
function Jd(){function a(c){return b.call(a.src,a.listener,c)}
var b=Ld;return a}
function Fd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Fd(a,b[f],c,d,e);else c=Gd(c),a&&a[ud]?a.h.add(String(b),c,!0,D(d)?!!d.capture:!!d,e):Hd(a,b,c,!0,d,e)}
function Md(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Md(a,b[f],c,d,e);else(d=D(d)?!!d.capture:!!d,c=Gd(c),a&&a[ud])?a.h.remove(String(b),c,d,e):a&&(a=Id(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=zd(b,c,d,e)),(c=-1<a?b[a]:null)&&Nd(c))}
function Nd(a){if("number"!==typeof a&&a&&!a.R){var b=a.src;if(b&&b[ud])Ad(b.h,a);else{var c=a.type,d=a.h;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Kd(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Dd--;(c=Id(b))?(Ad(c,a),0==c.h&&(c.src=null,b[Bd]=null)):xd(a)}}}
function Kd(a){return a in Cd?Cd[a]:Cd[a]="on"+a}
function Ld(a,b){if(a.R)a=!0;else{b=new sd(b,this);var c=a.listener,d=a.Z||a.src;a.V&&Nd(a);a=c.call(d,b)}return a}
function Id(a){a=a[Bd];return a instanceof yd?a:null}
var Od="__closure_events_fn_"+(1E9*Math.random()>>>0);function Gd(a){if("function"===typeof a)return a;a[Od]||(a[Od]=function(b){return a.handleEvent(b)});
return a[Od]}
;function L(){dd.call(this);this.h=new yd(this);this.ea=this;this.s=null}
G(L,dd);L.prototype[ud]=!0;L.prototype.addEventListener=function(a,b,c,d){Ed(this,a,b,c,d)};
L.prototype.removeEventListener=function(a,b,c,d){Md(this,a,b,c,d)};
function Pd(a,b){var c=a.s;if(c){var d=[];for(var e=1;c;c=c.s)d.push(c),++e}a=a.ea;c=b.type||b;"string"===typeof b?b=new rd(b,a):b instanceof rd?b.target=b.target||a:(e=b,b=new rd(c,a),cb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=Qd(g,c,!0,b)&&e}b.j||(g=b.h=a,e=Qd(g,c,!0,b)&&e,b.j||(e=Qd(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=Qd(g,c,!1,b)&&e}
L.prototype.P=function(){L.G.P.call(this);if(this.h){var a=this.h,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,xd(d[e]);delete a.listeners[c];a.h--}}this.s=null};
L.prototype.ba=function(a,b,c,d){return this.h.add(String(a),b,!1,c,d)};
function Qd(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.R&&g.capture==c){var h=g.listener,k=g.Z||g.src;g.V&&Ad(a.h,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;var Rd=B.JSON.stringify;function N(a){this.h=0;this.s=void 0;this.l=this.i=this.j=null;this.m=this.o=!1;if(a!=Ea)try{var b=this;a.call(void 0,function(c){Sd(b,2,c)},function(c){Sd(b,3,c)})}catch(c){Sd(this,3,c)}}
function Td(){this.next=this.context=this.onRejected=this.i=this.h=null;this.j=!1}
Td.prototype.reset=function(){this.context=this.onRejected=this.i=this.h=null;this.j=!1};
var Ud=new Hc(function(){return new Td},function(a){a.reset()});
function Vd(a,b,c){var d=Ud.get();d.i=a;d.onRejected=b;d.context=c;return d}
N.prototype.then=function(a,b,c){return Wd(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
N.prototype.$goog_Thenable=!0;N.prototype.cancel=function(a){if(0==this.h){var b=new Xd(a);Pc(function(){Yd(this,b)},this)}};
function Yd(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?Yd(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Zd(c),$d(c,e,3,b)))}a.j=null}else Sd(a,3,b)}
function ae(a,b){a.i||2!=a.h&&3!=a.h||be(a);a.l?a.l.next=b:a.i=b;a.l=b}
function Wd(a,b,c,d){var e=Vd(null,null,null);e.h=new N(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Xd?g(h):f(k)}catch(l){g(l)}}:g});
e.h.j=a;ae(a,e);return e.h}
N.prototype.B=function(a){this.h=0;Sd(this,2,a)};
N.prototype.N=function(a){this.h=0;Sd(this,3,a)};
function Sd(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.B,f=a.N;if(d instanceof N){ae(d,Vd(e||Ea,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(D(d))try{var k=d.then;if("function"===typeof k){ce(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.s=c,a.h=b,a.j=null,be(a),3!=b||c instanceof Xd||de(a,c))}}
function ce(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function be(a){a.o||(a.o=!0,Pc(a.u,a))}
function Zd(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
N.prototype.u=function(){for(var a;a=Zd(this);)$d(this,a,this.h,this.s);this.o=!1};
function $d(a,b,c,d){if(3==c&&b.onRejected&&!b.j)for(;a&&a.m;a=a.j)a.m=!1;if(b.h)b.h.j=null,ee(b,c,d);else try{b.j?b.i.call(b.context):ee(b,c,d)}catch(e){fe.call(null,e)}Ic(Ud,b)}
function ee(a,b,c){2==b?a.i.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function de(a,b){a.m=!0;Pc(function(){a.m&&fe.call(null,b)})}
var fe=Lc;function Xd(a){Oa.call(this,a)}
G(Xd,Oa);Xd.prototype.name="cancel";function O(a){dd.call(this);this.s=1;this.l=[];this.o=0;this.h=[];this.i={};this.u=!!a}
G(O,dd);m=O.prototype;m.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.s;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.s=e+3;d.push(e);return e};
function ge(a,b,c){var d=he;if(a=d.i[a]){var e=d.h;(a=a.find(function(f){return e[f+1]==b&&e[f+2]==c}))&&d.S(a)}}
m.S=function(a){var b=this.h[a];if(b){var c=this.i[b];0!=this.o?(this.l.push(a),this.h[a+1]=Ea):(c&&Ta(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
m.O=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.u)for(e=0;e<c.length;e++){var g=c[e];ie(this.h[g+1],this.h[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f&&!this.j;e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.o--,0<this.l.length&&0==this.o)for(;c=this.l.pop();)this.S(c)}}return 0!=e}return!1};
function ie(a,b,c){Pc(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.S,this),delete this.i[a])}else this.h.length=0,this.i={}};
m.P=function(){O.G.P.call(this);this.clear();this.l.length=0};function je(a){this.h=a}
je.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,Rd(b))};
je.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
je.prototype.remove=function(a){this.h.remove(a)};function ke(a){this.h=a}
G(ke,je);function le(a){this.data=a}
function me(a){return void 0===a||a instanceof le?a:new le(a)}
ke.prototype.set=function(a,b){ke.G.set.call(this,a,me(b))};
ke.prototype.i=function(a){a=ke.G.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
ke.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function ne(a){this.h=a}
G(ne,ke);ne.prototype.set=function(a,b,c){if(b=me(b)){if(c){if(c<Date.now()){ne.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}ne.G.set.call(this,a,b)};
ne.prototype.i=function(a){var b=ne.G.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())ne.prototype.remove.call(this,a);else return b}};function oe(){}
;function pe(){}
G(pe,oe);pe.prototype[Symbol.iterator]=function(){return gd(this.C(!0)).i()};
pe.prototype.clear=function(){var a=Array.from(this);a=u(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function qe(a){this.h=a}
G(qe,pe);m=qe.prototype;m.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeItem(a)};
m.C=function(a){var b=0,c=this.h,d=new fd;d.h=function(){if(b>=c.length)throw ed;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
d.next=d.h.bind(d);return d};
m.clear=function(){this.h.clear()};
m.key=function(a){return this.h.key(a)};function re(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
G(re,qe);function se(a,b){this.i=a;this.h=null;if(Lb&&!(9<=Number(Xb))){te||(te=new ld);this.h=te.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),te.set(a,this.h));try{this.h.load(this.i)}catch(c){this.h=null}}}
G(se,pe);var ue={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},te=null;function ve(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return ue[b]})}
m=se.prototype;m.isAvailable=function(){return!!this.h};
m.set=function(a,b){this.h.setAttribute(ve(a),b);we(this)};
m.get=function(a){a=this.h.getAttribute(ve(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeAttribute(ve(a));we(this)};
m.C=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new fd;d.h=function(){if(b>=c.length)throw ed;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
d.next=d.h.bind(d);return d};
m.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);we(this)};
function we(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function xe(a,b){this.i=a;this.h=b+"::"}
G(xe,pe);xe.prototype.set=function(a,b){this.i.set(this.h+a,b)};
xe.prototype.get=function(a){return this.i.get(this.h+a)};
xe.prototype.remove=function(a){this.i.remove(this.h+a)};
xe.prototype.C=function(a){var b=this.i.C(!0),c=this,d=new fd;d.h=function(){for(var e=b.next();e.substr(0,c.h.length)!=c.h;)e=b.next();return a?e.substr(c.h.length):c.i.get(e)};
d.next=d.h.bind(d);return d};var ye,ze,Ae=B.window,Be=(null===(ye=null===Ae||void 0===Ae?void 0:Ae.yt)||void 0===ye?void 0:ye.config_)||(null===(ze=null===Ae||void 0===Ae?void 0:Ae.ytcfg)||void 0===ze?void 0:ze.data_)||{};F("yt.config_",Be);function Ce(a){for(var b=0;b<arguments.length;++b);b=arguments;1<b.length?Be[b[0]]=b[1]:1===b.length&&Object.assign(Be,b[0])}
function P(a,b){return a in Be?Be[a]:b}
;var De=[];function Ee(a){De.forEach(function(b){return b(a)})}
function Fe(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Ge(b)}}:a}
function Ge(a){var b=C("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=P("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),Ce("ERRORS",b));Ee(a)}
function He(a){var b=C("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=P("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),Ce("ERRORS",b))}
;var Ie=0;F("ytDomDomGetNextId",C("ytDomDomGetNextId")||function(){return++Ie});var Je={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Ke(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Je||(this[b]=a[b]);this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?
d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
Ke.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Ke.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Ke.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Za=B.ytEventsEventsListeners||{};F("ytEventsEventsListeners",Za);var Le=B.ytEventsEventsCounter||{count:0};F("ytEventsEventsCounter",Le);
function Me(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Ya(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=D(e[4])&&D(d)&&$a(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function Ne(a){a&&("string"==typeof a&&(a=[a]),H(a,function(b){if(b in Za){var c=Za[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Oe()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Za[b]}}))}
var Oe=Qa(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Pe(a,b,c){var d=void 0===d?{}:d;if(a&&(a.addEventListener||a.attachEvent)){var e=Me(a,b,c,d);if(!e){e=++Le.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Ke(h);if(!nc(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Ke(h);
h.currentTarget=a;return c.call(a,h)};
g=Fe(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Oe()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);Za[e]=[a,b,c,g,d]}}}
;function Qe(a,b){"function"===typeof a&&(a=Fe(a));return window.setTimeout(a,b)}
function Re(a){"function"===typeof a&&(a=Fe(a));return window.setInterval(a,250)}
;var Se=/^[\w.]*$/,Te={q:!0,search_query:!0};function Ue(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=Ve(f[0]||""),h=Ve(f[1]||"");g in c?Array.isArray(c[g])?Wa(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(p){var k=p,l=f[0],n=String(Ue);k.args=[{key:l,value:f[1],query:a,method:We==n?"unchanged":n}];Te.hasOwnProperty(l)||He(k)}}return c}
var We=String(Ue);function Xe(a){var b=[];Xa(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];H(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Ye(a){"?"==a.charAt(0)&&(a=a.substr(1));return Ue(a,"&")}
function Ze(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Ye(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=Fb(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.substr(0,f),e,b.substr(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function $e(a){if(!b)var b=window.location.href;var c=a.match(Ab)[1]||null,d=Cb(a);c&&d?(a=a.match(Ab),b=b.match(Ab),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Cb(b)==d&&(Number(b.match(Ab)[4]||null)||null)==(Number(a.match(Ab)[4]||null)||null):!0;return a}
function Ve(a){return a&&a.match(Se)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function S(a){a=af(a);return"string"===typeof a&&"false"===a?!1:!!a}
function bf(a,b){a=af(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function af(a){var b=P("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:P("EXPERIMENT_FLAGS",{})[a]}
;function cf(){}
function df(a,b){return ef(a,0,b)}
function ff(a,b){return ef(a,1,b)}
;function gf(){cf.apply(this,arguments)}
w(gf,cf);function ef(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=C("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Qe(a,c||0)}
function hf(a){if(void 0===a||!Number.isNaN(Number(a))){var b=C("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}}
gf.prototype.start=function(){var a=C("yt.scheduler.instance.start");a&&a()};gf.h||(gf.h=new gf);function jf(a){var b=kf;a=void 0===a?C("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=tc;e.flash="0";a:{try{var f=b.h.top.location.href}catch(ua){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?K:g;try{var h=g.history.length}catch(ua){h=0}e.u_his=h;e.u_java=!!K.navigator&&"unknown"!==typeof K.navigator.javaEnabled&&!!K.navigator.javaEnabled&&K.navigator.javaEnabled();K.screen&&(e.u_h=K.screen.height,e.u_w=K.screen.width,
e.u_ah=K.screen.availHeight,e.u_aw=K.screen.availWidth,e.u_cd=K.screen.colorDepth);K.navigator&&K.navigator.plugins&&(e.u_nplug=K.navigator.plugins.length);K.navigator&&K.navigator.mimeTypes&&(e.u_nmime=K.navigator.mimeTypes.length);h=b.h;try{var k=h.screenX;var l=h.screenY}catch(ua){}try{var n=h.outerWidth;var p=h.outerHeight}catch(ua){}try{var r=h.innerWidth;var q=h.innerHeight}catch(ua){}try{var v=h.screenLeft;var z=h.screenTop}catch(ua){}try{r=h.innerWidth,q=h.innerHeight}catch(ua){}try{var x=
h.screen.availWidth;var Q=h.screen.availTop}catch(ua){}k=[v,z,k,l,x,Q,n,p,r,q];l=b.h.top;try{var R=(l||window).document,E="CSS1Compat"==R.compatMode?R.documentElement:R.body;var M=(new hc(E.clientWidth,E.clientHeight)).round()}catch(ua){M=new hc(-12245933,-12245933)}R=M;M={};E=new Fc;B.SVGElement&&B.document.createElementNS&&E.set(0);l=sc();l["allow-top-navigation-by-user-activation"]&&E.set(1);l["allow-popups-to-escape-sandbox"]&&E.set(2);B.crypto&&B.crypto.subtle&&E.set(3);B.TextDecoder&&B.TextEncoder&&
E.set(4);E=Gc(E);M.bc=E;M.bih=R.height;M.biw=R.width;M.brdim=k.join();b=b.i;b=(M.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,M.wgl=!!K.WebGLRenderingContext,M);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var kf=new function(){var a=window.document;this.h=window;this.i=a};
F("yt.ads_.signals_.getAdSignalsString",function(a){return Xe(jf(a))});var lf="XMLHttpRequest"in B?function(){return new XMLHttpRequest}:null;
function mf(){if(!lf)return null;var a=lf();return"open"in a?a:null}
;var nf={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},
of="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(fa(["client_dev_css_mss_url","client_dev_js_mss_url","client_dev_root_url","client_dev_regex_map","expflag"])),pf=!1;
function qf(a,b){b=void 0===b?{}:b;var c=$e(a),d=S("web_ajax_ignore_global_headers_if_set"),e;for(e in nf){var f=P(nf[e]);!f||!c&&Cb(a)||d&&void 0!==b[e]||(b[e]=f)}if(c||!Cb(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!Cb(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}if(c||!Cb(a))b["X-YouTube-Ad-Signals"]=Xe(jf(void 0));return b}
function rf(a){var b=window.location.search,c=Cb(a);S("debug_handle_relative_url_for_query_forward_killswitch")||c||!$e(a)||(c=document.location.hostname);var d=Bb(a.match(Ab)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Ye(b),f={};H(of,function(g){e[g]&&(f[g]=e[g])});
return Ze(a,f||{},!1)}
function sf(a,b){var c=b.format||"JSON";a=tf(a,b);var d=uf(a,b),e=!1,f=vf(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var n=null,p=400<=k.status&&500>k.status,r=500<=k.status&&600>k.status;if(l||p||r)n=wf(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(n&&n.return_code,10);break a;case "RAW":l=!0;break a}l=
!!n}n=n||{};p=b.context||B;l?b.onSuccess&&b.onSuccess.call(p,k,n):b.onError&&b.onError.call(p,k,n);b.onFinish&&b.onFinish.call(p,k,n)}},b.method,d,b.headers,b.responseType,b.withCredentials);
if(b.onTimeout&&0<b.timeout){var g=b.onTimeout;var h=Qe(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||B,f))},b.timeout)}}
function tf(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=P("XSRF_FIELD_NAME",void 0);if(b=b.urlParams)b[c]&&delete b[c],a=Ze(a,b||{},!0);return a}
function uf(a,b){var c=P("XSRF_FIELD_NAME",void 0),d=P("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.postParams,g=P("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Cb(a)&&!b.withCredentials&&Cb(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=Ye(e),cb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):Fb(e));if(!(a=e)&&(a=f)){a:{for(var k in f){f=
!1;break a}f=!0}a=!f}!pf&&a&&"POST"!=b.method&&(pf=!0,Ge(Error("AJAX request with postData should use POST")));return e}
function wf(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,He(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?xf(a):null)e={},H(a.getElementsByTagName("*"),function(g){e[g.tagName]=yf(g)})}d&&zf(e);
return e}
function zf(a){if(D(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=yb(a[b],null);a[c]=d}else zf(a[b])}}
function xf(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function yf(a){var b="";H(a.childNodes,function(c){b+=c.nodeValue});
return b}
function vf(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Fe(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=mf();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;S("debug_forward_web_query_parameters")&&(a=rf(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=qf(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var Af=Yb||Zb;function Bf(a){var b=tb;return b?0<=b.toLowerCase().indexOf(a):!1}
;var Cf={},Df=0;
function Ef(a,b,c,d,e){e=void 0===e?"":e;if(a)if(c&&!Bf("cobalt"))a&&(a instanceof nb||(a="object"==typeof a&&a.aa?a.Y():String(a),rb.test(a)?a=new nb(a,ob):(a=String(a),a=a.replace(/(%0A|%0D)/g,""),a=(b=a.match(qb))&&pb.test(b[1])?new nb(a,ob):null)),a=a||sb,a instanceof nb&&a.constructor===nb?a=a.h:(Fa(a),a="type_error:SafeUrl"),"about:invalid#zClosurez"===a||a.startsWith("data")?a="":(a instanceof wb||(b="object"==typeof a,c=null,b&&a.oa&&(c=a.na()),a=yb(fb(b&&a.aa?a.Y():String(a)),c)),a instanceof
wb&&a.constructor===wb?a=a.h:(Fa(a),a="type_error:SafeHtml"),a=encodeURIComponent(String(Rd(a.toString())))),/^[\s\xa0]*$/.test(a)||(a=kc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a)));else if(e)vf(a,b,"POST",e,d);else if(P("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d)vf(a,b,"GET","",d);else{b:{try{var f=new Pa({url:a});if(f.j&&f.i||f.l){var g=Bb(a.match(Ab)[5]||null);var h=!(!g||!g.endsWith("/aclk")||
"1"!==Hb(a,"ri"));break b}}catch(k){}h=!1}h?Ff(a)?(b&&b(),c=!0):c=!1:c=!1;c||Gf(a,b)}}
function Hf(a,b,c){c=void 0===c?"":c;Ff(a,c)?b&&b():Ef(a,b,void 0,void 0,c)}
function Ff(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function Gf(a,b){var c=new Image,d=""+Df++;Cf[d]=c;c.onload=c.onerror=function(){b&&Cf[d]&&b();delete Cf[d]};
c.src=a}
;var If=B.ytPubsubPubsubInstance||new O,Jf=B.ytPubsubPubsubSubscribedKeys||{},Kf=B.ytPubsubPubsubTopicToKeys||{},Lf=B.ytPubsubPubsubIsSynchronous||{};O.prototype.subscribe=O.prototype.subscribe;O.prototype.unsubscribeByKey=O.prototype.S;O.prototype.publish=O.prototype.O;O.prototype.clear=O.prototype.clear;F("ytPubsubPubsubInstance",If);F("ytPubsubPubsubTopicToKeys",Kf);F("ytPubsubPubsubIsSynchronous",Lf);F("ytPubsubPubsubSubscribedKeys",Jf);var Mf=window,T=Mf.ytcsi&&Mf.ytcsi.now?Mf.ytcsi.now:Mf.performance&&Mf.performance.timing&&Mf.performance.now&&Mf.performance.timing.navigationStart?function(){return Mf.performance.timing.navigationStart+Mf.performance.now()}:function(){return(new Date).getTime()};var Nf=bf("initial_gel_batch_timeout",2E3),Of=Math.pow(2,16)-1,Pf=null,Qf=0,Rf=void 0,Sf=0,Tf=0,Uf=0,Vf=!0,Wf=B.ytLoggingTransportGELQueue_||new Map;F("ytLoggingTransportGELQueue_",Wf);var Xf=B.ytLoggingTransportTokensToCttTargetIds_||{};F("ytLoggingTransportTokensToCttTargetIds_",Xf);
function Yf(a,b){if("log_event"===a.endpoint){var c="";a.X?c="visitorOnlyApprovedKey":a.H&&(Xf[a.H.token]=Zf(a.H),c=a.H.token);var d=Wf.get(c)||[];Wf.set(c,d);d.push(a.payload);b&&(Rf=new b);a=bf("tvhtml5_logging_max_batch")||bf("web_logging_max_batch")||100;b=T();d.length>=a?$f({writeThenSend:!0}):10<=b-Uf&&(ag(),Uf=b)}}
function bg(a,b){if("log_event"===a.endpoint){var c="";a.X?c="visitorOnlyApprovedKey":a.H&&(Xf[a.H.token]=Zf(a.H),c=a.H.token);var d=new Map;d.set(c,[a.payload]);b&&(Rf=new b);return new N(function(e){Rf&&Rf.isReady()?cg(d,e,{bypassNetworkless:!0}):e()})}}
function $f(a){a=void 0===a?{}:a;new N(function(b){window.clearTimeout(Sf);window.clearTimeout(Tf);Tf=0;Rf&&Rf.isReady()?(cg(Wf,b,a),Wf.clear()):(ag(),b())})}
function ag(){S("web_gel_timeout_cap")&&!Tf&&(Tf=Qe(function(){$f({writeThenSend:!0})},6E4));
window.clearTimeout(Sf);var a=P("LOGGING_BATCH_TIMEOUT",bf("web_gel_debounce_ms",1E4));S("shorten_initial_gel_batch_timeout")&&Vf&&(a=Nf);Sf=Qe(function(){$f({writeThenSend:!0})},a)}
function cg(a,b,c){var d=Rf;c=void 0===c?{}:c;var e=Math.round(T()),f=a.size;a=u(a);for(var g=a.next();!g.done;g=a.next()){var h=u(g.value);g=h.next().value;var k=h.next().value;h=ab({context:dg(d.config_||eg())});h.events=k;(k=Xf[g])&&fg(h,g,k);delete Xf[g];g="visitorOnlyApprovedKey"===g;gg(h,e,g);S("send_beacon_before_gel")&&window.navigator&&window.navigator.sendBeacon&&!c.writeThenSend&&Hf("/generate_204");hg(d,"log_event",h,{retry:!0,onSuccess:function(){f--;f||b();Qf=Math.round(T()-e)},
onError:function(){f--;f||b()},
ra:c,X:g});Vf=!1}}
function gg(a,b,c){a.requestTimeMs=String(b);S("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=P("EVENT_ID",void 0))&&((c=P("BATCH_CLIENT_COUNTER",void 0)||0)||(c=Math.floor(Math.random()*Of/2)),c++,c>Of&&(c=1),Ce("BATCH_CLIENT_COUNTER",c),b={serializedEventId:b,clientCounter:String(c)},a.serializedClientEventId=b,Pf&&Qf&&S("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:Pf,roundtripMs:String(Qf)}),Pf=b,Qf=0)}
function fg(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Zf(a){var b={};a.videoId?b.videoId=a.videoId:a.playlistId&&(b.playlistId=a.playlistId);return b}
;var ig=B.ytLoggingGelSequenceIdObj_||{};F("ytLoggingGelSequenceIdObj_",ig);function jg(){if(!B.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return B.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":B.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":B.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":B.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;F("ytglobal.prefsUserPrefsPrefs_",C("ytglobal.prefsUserPrefsPrefs_")||{});var kg={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},lg={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function mg(){var a=B.navigator;return a?a.connection:void 0}
;function ng(){return"INNERTUBE_API_KEY"in Be&&"INNERTUBE_API_VERSION"in Be}
function eg(){return{innertubeApiKey:P("INNERTUBE_API_KEY",void 0),innertubeApiVersion:P("INNERTUBE_API_VERSION",void 0),Ea:P("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Fa:P("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:P("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Ha:P("INNERTUBE_CONTEXT_HL",void 0),Ga:P("INNERTUBE_CONTEXT_GL",void 0),Ia:P("INNERTUBE_HOST_OVERRIDE",void 0)||"",Ka:!!P("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Ja:!!P("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:P("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function dg(a){var b={client:{hl:a.Ha,gl:a.Ga,clientName:a.Fa,clientVersion:a.innertubeContextClientVersion,configInfo:a.Ea}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=B.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=P("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=[];var d=P("EXPERIMENTS_FORCED_FLAGS",{});for(e in d)c.push({key:e,value:String(d[e])});var e=P("EXPERIMENT_FLAGS",{});for(var f in e)f.startsWith("force_")&&void 0===
d[f]&&c.push({key:f,value:String(e[f])});0<c.length&&(b.request={internalExperimentFlags:c});f=b.client.clientName;if("WEB"===f||"MWEB"===f||1===f||2===f){if(!S("web_include_display_mode_killswitch")){var g;b.client.mainAppWebInfo=null!=(g=b.client.mainAppWebInfo)?g:{};b.client.mainAppWebInfo.webDisplayMode=jg()}}else if(g=b.client.clientName,("WEB_REMIX"===g||76===g)&&!S("music_web_display_mode_killswitch")){var h;b.client.qa=null!=(h=b.client.qa)?h:{};b.client.qa.webDisplayMode=jg()}a.appInstallData&&
(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);P("DELEGATED_SESSION_ID")&&!S("pageid_as_header_web")&&(b.user={onBehalfOfUser:P("DELEGATED_SESSION_ID")});a:{if(h=mg()){a=kg[h.type||"unknown"]||"CONN_UNKNOWN";h=kg[h.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===a&&"CONN_UNKNOWN"!==h&&(a=h);if("CONN_UNKNOWN"!==a)break a;if("CONN_UNKNOWN"!==h){a=h;break a}}a=void 0}a&&(b.client.connectionType=a);S("web_log_effective_connection_type")&&
(a=mg(),a=null!==a&&void 0!==a&&a.effectiveType?lg.hasOwnProperty(a.effectiveType)?lg[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,a&&(b.client.effectiveConnectionType=a));a=Object;h=a.assign;g=b.client;f={};e=u(Object.entries(Ye(P("DEVICE",""))));for(c=e.next();!c.done;c=e.next())d=u(c.value),c=d.next().value,d=d.next().value,"cbrand"===c?f.deviceMake=d:"cmodel"===c?f.deviceModel=d:"cbr"===c?f.browserName=d:"cbrver"===c?f.browserVersion=d:"cos"===c?f.osName=d:"cosver"===c?f.osVersion=
d:"cplatform"===c&&(f.platform=d);b.client=h.call(a,g,f);return b}
function og(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||P("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.fb||P("AUTHORIZATION"))||(a?b="Bearer "+C("gapi.auth.getToken")().cb:b=Ec([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=P("SESSION_INDEX",0),S("pageid_as_header_web")&&(d["X-Goog-PageId"]=P("DELEGATED_SESSION_ID")));return d}
;function pg(a){a=Object.assign({},a);delete a.Authorization;var b=Ec();if(b){var c=new Yc;c.update(P("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();c=3;Ga(b);void 0===c&&(c=0);if(!bc){bc={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=d.concat(e[f].split(""));ac[f]=g;for(var h=0;h<g.length;h++){var k=g[h];void 0===bc[k]&&(bc[k]=h)}}}c=ac[c];d=Array(Math.floor(b.length/3));e=c[64]||"";for(f=g=0;g<b.length-
2;g+=3){var l=b[g],n=b[g+1];k=b[g+2];h=c[l>>2];l=c[(l&3)<<4|n>>4];n=c[(n&15)<<2|k>>6];k=c[k&63];d[f++]=""+h+l+n+k}h=0;k=e;switch(b.length-g){case 2:h=b[g+1],k=c[(h&15)<<2]||e;case 1:b=b[g],d[f]=""+c[b>>2]+c[(b&3)<<4|h>>4]+k+e}a.hash=d.join("")}return a}
;function qg(a){var b=new re;(b=b.isAvailable()?a?new xe(b,a):b:null)||(a=new se(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new ne(a):null;this.i=document.domain||window.location.hostname}
qg.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Rd(b))}catch(f){return}else e=escape(b);b=this.i;Bc.set(""+a,e,{ga:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
qg.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=Bc.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
qg.prototype.remove=function(a){this.h&&this.h.remove(a);var b=this.i;Bc.remove(""+a,"/",void 0===b?"youtube.com":b)};var rg;function sg(){rg||(rg=new qg("yt.innertube"));return rg}
function tg(a,b,c,d){if(d)return null;d=sg().get("nextId",!0)||1;var e=sg().get("requests",!0)||{};e[d]={method:a,request:b,authState:pg(c),requestTime:Math.round(T())};sg().set("nextId",d+1,86400,!0);sg().set("requests",e,86400,!0);return d}
function ug(a){var b=sg().get("requests",!0)||{};delete b[a];sg().set("requests",b,86400,!0)}
function vg(a){var b=sg().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(T())-d.requestTime)){var e=d.authState,f=pg(og(!1));$a(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(T())),hg(a,d.method,e,{}));delete b[c]}}sg().set("requests",b,86400,!0)}}
;var wg=C("ytPubsub2Pubsub2Instance")||new O;O.prototype.subscribe=O.prototype.subscribe;O.prototype.unsubscribeByKey=O.prototype.S;O.prototype.publish=O.prototype.O;O.prototype.clear=O.prototype.clear;F("ytPubsub2Pubsub2Instance",wg);F("ytPubsub2Pubsub2SubscribedKeys",C("ytPubsub2Pubsub2SubscribedKeys")||{});F("ytPubsub2Pubsub2TopicToKeys",C("ytPubsub2Pubsub2TopicToKeys")||{});F("ytPubsub2Pubsub2IsAsync",C("ytPubsub2Pubsub2IsAsync")||{});F("ytPubsub2Pubsub2SkipSubKey",null);function xg(){}
;var yg=function(){var a;return function(){a||(a=new qg("ytidb"));return a}}();
function zg(){var a;return null===(a=yg())||void 0===a?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
function Ag(a){this.h=void 0===a?!1:a;(a=zg())||(a={hasSucceededOnce:this.h});this.i=a;var b,c;null!==(b=yg())&&void 0!==b&&b.h&&(b={hasSucceededOnce:this.i.hasSucceededOnce||this.h},null===(c=yg())||void 0===c?void 0:c.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0))}
Ag.prototype.isSupported=function(){return this.h};var Bg=[],Cg=!1;function Dg(a){Cg||(Bg.push({type:"ERROR",payload:a}),10<Bg.length&&Bg.shift())}
function Eg(a,b){Cg||(Bg.push({type:"EVENT",eventType:a,payload:b}),10<Bg.length&&Bg.shift())}
;function Fg(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(fa(c))}
w(Fg,Error);function Gg(){if(void 0!==P("DATASYNC_ID",void 0))return P("DATASYNC_ID",void 0);throw new Fg("Datasync ID not set","unknown");}
;function Hg(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function Ig(a){return a.substr(0,a.indexOf(":"))||a}
;var Jg={},Kg=(Jg.AUTH_INVALID="No user identifier specified.",Jg.EXPLICIT_ABORT="Transaction was explicitly aborted.",Jg.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Jg.MISSING_OBJECT_STORE="Object store not created.",Jg.DB_DELETED_BY_MISSING_OBJECT_STORE="Database is deleted because an expected object store was not created.",Jg.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",Jg.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Jg.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",
Jg.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Jg),Lg={},Mg=(Lg.AUTH_INVALID="ERROR",Lg.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Lg.EXPLICIT_ABORT="IGNORED",Lg.IDB_NOT_SUPPORTED="ERROR",Lg.MISSING_OBJECT_STORE="ERROR",Lg.DB_DELETED_BY_MISSING_OBJECT_STORE="WARNING",Lg.QUOTA_EXCEEDED="WARNING",Lg.QUOTA_MAYBE_EXCEEDED="WARNING",Lg.UNKNOWN_ABORT="WARNING",Lg),Ng={},Og=(Ng.AUTH_INVALID=!1,Ng.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Ng.EXPLICIT_ABORT=!1,Ng.IDB_NOT_SUPPORTED=
!1,Ng.MISSING_OBJECT_STORE=!1,Ng.DB_DELETED_BY_MISSING_OBJECT_STORE=!1,Ng.QUOTA_EXCEEDED=!1,Ng.QUOTA_MAYBE_EXCEEDED=!0,Ng.UNKNOWN_ABORT=!0,Ng);function U(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?Kg[a]:c;d=void 0===d?Mg[a]:d;e=void 0===e?Og[a]:e;Fg.call(this,c,Object.assign({name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,U.prototype)}
w(U,Fg);function Pg(a){U.call(this,"MISSING_OBJECT_STORE",{Ma:a},Kg.MISSING_OBJECT_STORE);Object.setPrototypeOf(this,Pg.prototype)}
w(Pg,U);var Qg=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Rg(a,b,c){b=Ig(b);var d=a instanceof Error?a:Error("Unexpected error: "+a);if(d instanceof U)return d;if("QuotaExceededError"===d.name)return new U("QUOTA_EXCEEDED",{objectStoreNames:c,dbName:b});if($b&&"UnknownError"===d.name)return new U("QUOTA_MAYBE_EXCEEDED",{objectStoreNames:c,dbName:b});if("InvalidStateError"===d.name&&Qg.some(function(e){return d.message.includes(e)}))return new U("EXECUTE_TRANSACTION_ON_CLOSED_DB",{objectStoreNames:c,
dbName:b});if("AbortError"===d.name)return new U("UNKNOWN_ABORT",{objectStoreNames:c,dbName:b},d.message);d.args=[{name:"IdbError",kb:d.name,dbName:b,objectStoreNames:c}];d.level="WARNING";return d}
;function Sg(a){if(!a)throw Error();throw a;}
function Tg(a){return a}
function Ug(a){this.h=a}
function V(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=u(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=u(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.onRejected=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
V.all=function(a){return new V(new Ug(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={M:0};f.M<a.length;f={M:f.M},++f.M)Vg(V.resolve(a[f.M]).then(function(g){return function(h){d[g.M]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})}))};
V.resolve=function(a){return new V(new Ug(function(b,c){a instanceof V?a.then(b,c):b(a)}))};
V.reject=function(a){return new V(new Ug(function(b,c){c(a)}))};
V.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:Tg,e=null!==b&&void 0!==b?b:Sg;return new V(new Ug(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){Wg(c,c,d,f,g)}),c.onRejected.push(function(){Xg(c,c,e,f,g)})):"FULFILLED"===c.state.status?Wg(c,c,d,f,g):"REJECTED"===c.state.status&&Xg(c,c,e,f,g)}))};
function Vg(a,b){a.then(void 0,b)}
function Wg(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof V?Yg(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Xg(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof V?Yg(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Yg(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof V?Yg(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Zg(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function $g(a){return new Promise(function(b,c){Zg(a,b,c)})}
function W(a){return new V(new Ug(function(b,c){Zg(a,b,c)}))}
;function ah(a,b){return new V(new Ug(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;function bh(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(T());this.i=!1}
m=bh.prototype;m.add=function(a,b,c){return ch(this,[a],{mode:"readwrite",D:!0},function(d){return dh(d,a).add(b,c)})};
m.clear=function(a){return ch(this,[a],{mode:"readwrite",D:!0},function(b){return dh(b,a).clear()})};
m.close=function(){var a;this.h.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
m.count=function(a,b){return ch(this,[a],{mode:"readonly",D:!0},function(c){return dh(c,a).count(b)})};
function eh(a,b,c){a=a.h.createObjectStore(b,c);return new fh(a)}
m.delete=function(a,b){return ch(this,[a],{mode:"readwrite",D:!0},function(c){return dh(c,a).delete(b)})};
m.get=function(a,b){return ch(this,[a],{mode:"readonly",D:!0},function(c){return dh(c,a).get(b)})};
function gh(a,b){return ch(a,["LogsRequestsStore"],{mode:"readwrite",D:!0},function(c){c=dh(c,"LogsRequestsStore");return W(c.h.put(b,void 0))})}
m.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function ch(a,b,c,d){return J(a,function f(){var g=this,h,k,l,n,p,r,q,v,z,x,Q,R;return A(f,function(E){switch(E.h){case 1:var M={mode:"readonly",D:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?M.mode=c:Object.assign(M,c);h=M;g.transactionCount++;k=h.D?3:1;l=0;case 2:if(n){E.v(3);break}l++;p=Math.round(T());qa(E,4);r=g.h.transaction(b,h.mode);M=new hh(r);M=ih(M,d);return y(E,M,6);case 6:return q=E.i,v=Math.round(T()),jh(g,p,v,l,void 0,b.join(),h),E.return(q);case 4:z=ra(E);x=Math.round(T());
Q=Rg(z,g.h.name,b.join());if((R=Q instanceof U&&!Q.h)||l>=k)jh(g,p,x,l,Q,b.join(),h),n=Q;E.v(2);break;case 3:return E.return(Promise.reject(n))}})})}
function jh(a,b,c,d,e,f,g){b=c-b;e?(e instanceof U&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&Eg("QUOTA_EXCEEDED",{dbName:Ig(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof U&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),Eg("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),kh(a,!1,d,f,b,g.tag),Dg(e)):kh(a,!0,d,f,b,g.tag)}
function kh(a,b,c,d,e,f){Eg("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
m.getName=function(){return this.h.name};
function fh(a){this.h=a}
m=fh.prototype;m.add=function(a,b){return W(this.h.add(a,b))};
m.autoIncrement=function(){return this.h.autoIncrement};
m.clear=function(){return W(this.h.clear()).then(function(){})};
m.count=function(a){return W(this.h.count(a))};
function lh(a,b){return mh(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
m.delete=function(a){return a instanceof IDBKeyRange?lh(this,a):W(this.h.delete(a))};
m.get=function(a){return W(this.h.get(a))};
m.index=function(a){return new nh(this.h.index(a))};
m.getName=function(){return this.h.name};
m.keyPath=function(){return this.h.keyPath};
function mh(a,b,c){a=a.h.openCursor(b.query,b.direction);return oh(a).then(function(d){return ah(d,c)})}
function hh(a){var b=this;this.h=a;this.j=new Map;this.i=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.i){e=U;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function ih(a,b){var c=new Promise(function(d,e){try{Vg(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return u(d).next().value})}
hh.prototype.abort=function(){this.h.abort();this.i=!0;throw new U("EXPLICIT_ABORT");};
function dh(a,b){b=a.h.objectStore(b);var c=a.j.get(b);c||(c=new fh(b),a.j.set(b,c));return c}
function nh(a){this.h=a}
m=nh.prototype;m.count=function(a){return W(this.h.count(a))};
m.delete=function(a){return ph(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
m.get=function(a){return W(this.h.get(a))};
m.getKey=function(a){return W(this.h.getKey(a))};
m.keyPath=function(){return this.h.keyPath};
m.unique=function(){return this.h.unique};
function ph(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return oh(a).then(function(d){return ah(d,c)})}
function qh(a,b){this.request=a;this.cursor=b}
function oh(a){return W(a).then(function(b){return null===b?null:new qh(a,b)})}
m=qh.prototype;m.advance=function(a){this.cursor.advance(a);return oh(this.request)};
m.continue=function(a){this.cursor.continue(a);return oh(this.request)};
m.delete=function(){return W(this.cursor.delete()).then(function(){})};
m.getKey=function(){return this.cursor.key};
m.update=function(a){return W(this.cursor.update(a))};function rh(a,b,c){return new Promise(function(d,e){function f(){r||(r=new bh(g.result,{closed:p}));return r}
var g=self.indexedDB.open(a,b),h=c.blocked,k=c.blocking,l=c.Pa,n=c.upgrade,p=c.closed,r;g.addEventListener("upgradeneeded",function(q){try{if(null===q.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");q.dataLoss&&"none"!==q.dataLoss&&Eg("IDB_DATA_CORRUPTED",{reason:q.dataLossMessage||"unknown reason",dbName:Ig(a)});var v=f(),z=new hh(g.transaction);n&&n(v,function(x){return q.oldVersion<
x&&q.newVersion>=x},z);
z.done.catch(function(x){e(x)})}catch(x){e(x)}});
g.addEventListener("success",function(){var q=g.result;k&&q.addEventListener("versionchange",function(){k(f())});
q.addEventListener("close",function(){Eg("IDB_UNEXPECTEDLY_CLOSED",{dbName:Ig(a),dbVersion:q.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function sh(a,b,c){c=void 0===c?{}:c;return rh(a,b,c)}
function th(a,b){b=void 0===b?{}:b;return J(this,function d(){var e,f,g;return A(d,function(h){e=self.indexedDB.deleteDatabase(a);f=b;(g=f.blocked)&&e.addEventListener("blocked",function(){g()});
return y(h,$g(e),0)})})}
;function uh(a,b){this.name=a;this.options=b;this.j=!1}
uh.prototype.i=function(a,b,c){c=void 0===c?{}:c;return sh(a,b,c)};
uh.prototype.delete=function(a){a=void 0===a?{}:a;return th(this.name,a)};
uh.prototype.open=function(){var a=this;if(!this.h){var b,c=function(){a.h===b&&(a.h=void 0)},d={blocking:function(f){f.close()},
closed:c,Pa:c,upgrade:this.options.upgrade},e=function(){return J(a,function g(){var h=this,k,l,n;return A(g,function(p){switch(p.h){case 1:return qa(p,2),y(p,h.i(h.name,h.options.version,d),4);case 4:k=p.i;a:{var r=h.options;for(var q=u(Object.keys(r.ia)),v=q.next();!v.done;v=q.next()){v=v.value;var z=r.ia[v];if("boolean"===typeof z){if(!k.h.objectStoreNames.contains(v)){r=v;break a}}else{var x=void 0===z.Oa?Number.MAX_VALUE:z.Oa;if(k.h.version>=z.eb&&!(k.h.version>=x)&&!k.h.objectStoreNames.contains(v)){r=
v;break a}}}r=void 0}l=r;if(void 0===l){p.v(5);break}if(h.j){p.v(6);break}h.j=!0;return y(p,h.delete(),7);case 7:return Dg(new U("DB_DELETED_BY_MISSING_OBJECT_STORE",{dbName:h.name,Ma:l})),p.return(e());case 6:throw new Pg(l);case 5:return p.return(k);case 2:n=ra(p);if(n instanceof DOMException?"VersionError"===n.name:"DOMError"in self&&n instanceof DOMError?"VersionError"===n.name:n instanceof Object&&"message"in n&&"An attempt was made to open a database using a lower version than the existing version."===
n.message)return p.return(h.i(h.name,void 0,Object.assign(Object.assign({},d),{upgrade:void 0})));c();throw n;}})})};
this.h=b=e()}return this.h};var vh=new uh("YtIdbMeta",{ia:{databases:!0},upgrade:function(a,b){b(1)&&eh(a,"databases",{keyPath:"actualName"})}});
function wh(a){return J(this,function c(){var d;return A(c,function(e){if(1==e.h)return y(e,vh.open(),2);d=e.i;return e.return(ch(d,["databases"],{D:!0,mode:"readwrite"},function(f){var g=dh(f,"databases");return g.get(a.actualName).then(function(h){if(h?a.actualName!==h.actualName||a.publicName!==h.publicName||a.userIdentifier!==h.userIdentifier:1)return W(g.h.put(a,void 0)).then(function(){})})}))})})}
function xh(a){return J(this,function c(){var d;return A(c,function(e){if(1==e.h)return y(e,vh.open(),2);d=e.i;return e.return(d.delete("databases",a))})})}
;var yh;
function zh(){return J(this,function b(){var c,d,e;return A(b,function(f){switch(f.h){case 1:c=zg();if(null===c||void 0===c?0:c.hasSucceededOnce)return f.return(new Ag(!0));var g;if(g=Af)g=/WebKit\/([0-9]+)/.exec(tb),g=!!(g&&600<=parseInt(g[1],10));g&&(g=/WebKit\/([0-9]+)/.exec(tb),g=!(g&&602<=parseInt(g[1],10)));if(g||Mb)return f.return(new Ag(!1));try{if(d=self,!(d.indexedDB&&d.IDBIndex&&d.IDBKeyRange&&d.IDBObjectStore))return f.return(new Ag(!1))}catch(h){return f.return(new Ag(!1))}if(!("IDBTransaction"in self&&
"objectStoreNames"in IDBTransaction.prototype))return f.return(new Ag(!1));qa(f,2);e={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return y(f,wh(e),4);case 4:return y(f,xh("yt-idb-test-do-not-use"),5);case 5:return f.return(new Ag(!0));case 2:return ra(f),f.return(new Ag(!1))}})})}
function Ah(){if(void 0!==yh)return yh;Cg=!0;return yh=zh().then(function(a){Cg=!1;return a.isSupported()})}
;function Bh(a){try{Gg();var b=!0}catch(c){b=!1}if(!b)throw a=new U("AUTH_INVALID"),Dg(a),a;b=Gg();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Ch(a,b,c,d){return J(this,function f(){var g,h;return A(f,function(k){switch(k.h){case 1:return y(k,Dh({caller:"openDbImpl",publicName:a,version:b}),2);case 2:return Hg(a),g=c?{actualName:a,publicName:a,userIdentifier:void 0}:Bh(a),qa(k,3),y(k,wh(g),5);case 5:return y(k,sh(g.actualName,b,d),6);case 6:return k.return(k.i);case 3:return h=ra(k),qa(k,7),y(k,xh(g.actualName),9);case 9:k.h=8;k.o=0;break;case 7:ra(k);case 8:throw h;}})})}
function Dh(a){return J(this,function c(){var d;return A(c,function(e){if(1==e.h)return y(e,Ah(),2);if(!e.i)throw d=new U("IDB_NOT_SUPPORTED",{context:a}),Dg(d),d;e.h=0})})}
function Eh(a,b,c){c=void 0===c?{}:c;return Ch(a,b,!1,c)}
function Fh(a,b,c){c=void 0===c?{}:c;return Ch(a,b,!0,c)}
function Gh(a,b){b=void 0===b?{}:b;return J(this,function d(){var e;return A(d,function(f){if(1==f.h)return y(f,Ah(),2);if(3!=f.h){if(!f.i)return f.return();Hg(a);e=Bh(a);return y(f,th(e.actualName,b),3)}return y(f,xh(e.actualName),0)})})}
function Hh(a,b){b=void 0===b?{}:b;return J(this,function d(){return A(d,function(e){if(1==e.h)return y(e,Ah(),2);if(3!=e.h){if(!e.i)return e.return();Hg(a);return y(e,th(a,b),3)}return y(e,xh(a),0)})})}
;function Ih(a,b){uh.call(this,a,b);this.options=b;Hg(a)}
w(Ih,uh);function Jh(a){var b;return function(){b||(b=new Ih("LogsDatabaseV2",a));return b}}
Ih.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.va?Fh:Eh)(a,b,Object.assign({},c))};
Ih.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.va?Hh:Gh)(this.name,a)};var Kh;function Lh(){if(Kh)return Kh();var a={};Kh=Jh({ia:(a.LogsRequestsStore=!0,a.sapisid=!0,a.SWHealthLog=!0,a),va:!1,upgrade:function(b,c){c(2)&&(eh(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0}).h.createIndex("newRequest",["status","authHash","interface","timestamp"],{unique:!1}),eh(b,"sapisid"));c(3)&&eh(b,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).h.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:4});return Kh()}
;function Mh(a){return J(this,function c(){var d,e,f,g,h;return A(c,function(k){switch(k.h){case 1:return d={startTime:T(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},y(k,Lh().open(),2);case 2:e=k.i;if(5<=e.h.version){f=Object.assign(Object.assign({},a),{options:JSON.parse(JSON.stringify(a.options)),interface:P("INNERTUBE_CONTEXT_CLIENT_NAME",0)});k.v(3);break}return y(k,Nh(),4);case 4:g=k.i,f=Object.assign(Object.assign({},a),{authHash:g,options:JSON.parse(JSON.stringify(a.options)),interface:P("INNERTUBE_CONTEXT_CLIENT_NAME",
0)});case 3:return y(k,gh(e,f),5);case 5:return h=k.i,d.Qa=T(),Oh(d),k.return(h)}})})}
function Ph(){return J(this,function b(){var c,d,e,f,g,h,k,l,n;return A(b,function(p){switch(p.h){case 1:return c={startTime:T(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},y(p,Lh().open(),2);case 2:d=p.i;e=P("INNERTUBE_CONTEXT_CLIENT_NAME",0);if(5<=d.h.version){f=["NEW",e,0];g=["NEW",e,T()];p.v(3);break}return y(p,Nh(),4);case 4:h=p.i,f=["NEW",h,e,0],g=["NEW",h,e,T()];case 3:return k=IDBKeyRange.bound(f,g),l=void 0,n=5<=d.h.version?"newRequestV2":"newRequest",y(p,ch(d,["LogsRequestsStore"],{mode:"readwrite",
D:!0},function(r){return ph(dh(r,"LogsRequestsStore").index(n),{query:k,direction:"prev"},function(q){q.cursor.value&&(l=q.cursor.value,l.status="QUEUED",q.update(l))})}),5);
case 5:return c.Qa=T(),Oh(c),p.return(l)}})})}
function Qh(a){return J(this,function c(){var d;return A(c,function(e){if(1==e.h)return y(e,Lh().open(),2);d=e.i;return e.return(ch(d,["LogsRequestsStore"],{mode:"readwrite",D:!0},function(f){var g=dh(f,"LogsRequestsStore");return g.get(a).then(function(h){if(h)return h.status="QUEUED",W(g.h.put(h,void 0)).then(function(){return h})})}))})})}
function Rh(a){return J(this,function c(){var d;return A(c,function(e){if(1==e.h)return y(e,Lh().open(),2);d=e.i;return e.return(ch(d,["LogsRequestsStore"],{mode:"readwrite",D:!0},function(f){var g=dh(f,"LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",h.sendCount+=1,W(g.h.put(h,void 0)).then(function(){return h})):V.resolve(void 0)})}))})})}
function Sh(a){return J(this,function c(){var d;return A(c,function(e){if(1==e.h)return y(e,Lh().open(),2);d=e.i;return e.return(d.delete("LogsRequestsStore",a))})})}
function Nh(){return J(this,function b(){var c;return A(b,function(d){if(1==d.h){xg.h||(xg.h=new xg);var e={};var f=Ec([]);f&&(e.Authorization=f,f=void 0,void 0===f&&(f=Number(P("SESSION_INDEX",0)),f=isNaN(f)?0:f),e["X-Goog-AuthUser"]=f,"INNERTUBE_HOST_OVERRIDE"in Be||(e["X-Origin"]=window.location.origin),S("pageid_as_header_web")&&"DELEGATED_SESSION_ID"in Be&&(e["X-Goog-PageId"]=P("DELEGATED_SESSION_ID")));e instanceof N||(f=new N(Ea),Sd(f,2,e),e=f);return y(d,e,2)}c=d.i;e=d.return;f=pg(c);var g=
new Yc;g.update(JSON.stringify(f,Object.keys(f).sort()));f=g.digest();g="";for(var h=0;h<f.length;h++)g+="0123456789ABCDEF".charAt(Math.floor(f[h]/16))+"0123456789ABCDEF".charAt(f[h]%16);return e.call(d,g)})})}
function Oh(a){var b=bf("nwl_latency_sampling_rate",.01);!(.02<b)&&Math.random()<=b&&(b=C("ytPubsub2Pubsub2Instance"))&&b.publish.call(b,"nwl_transaction_latency_payload".toString(),"nwl_transaction_latency_payload",a)}
;var Th;function Uh(){Th||(Th=new qg("yt.offline"));return Th}
function Vh(a){if(S("offline_error_handling")){var b=Uh().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Uh().set("errors",b,2592E3,!0)}}
;var Wh=bf("network_polling_interval",3E4);function X(){L.call(this);this.T=0;this.u=this.l=!1;this.N=0;this.U=!1;this.i=this.fa();Xh(this);Yh(this)}
w(X,L);function Zh(){if(!X.h){var a=C("yt.networkStatusManager.instance")||new X;F("yt.networkStatusManager.instance",a);X.h=a}return X.h}
m=X.prototype;m.J=function(){return this.i};
m.Na=function(a){this.l=!0;if(void 0===a?0:a)this.T||$h(this)};
m.fa=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
m.Ca=function(){this.U=!0};
m.ba=function(a,b){return L.prototype.ba.call(this,a,b)};
function Yh(a){window.addEventListener("online",function(){return J(a,function c(){var d=this;return A(c,function(e){if(1==e.h)return y(e,d.L(),2);ai(d);if(d.U&&S("offline_error_handling")){var f=Uh().get("errors",!0);if(f){for(var g in f)if(f[g]){var h=new Fg(g,"sent via offline_errors");h.name=f[g].name;h.stack=f[g].stack;h.level=f[g].level;Ge(h)}Uh().set("errors",{},2592E3,!0)}}e.h=0})})})}
function Xh(a){window.addEventListener("offline",function(){return J(a,function c(){var d=this;return A(c,function(e){if(1==e.h)return y(e,d.L(),2);ai(d);e.h=0})})})}
function $h(a){a.T=df(function(){return J(a,function c(){var d=this;return A(c,function(e){if(1==e.h){if(!d.i)return y(e,d.L(),3);if(d.fa())return e.v(3);d.u=!0;d.N=T();return d.l?y(e,d.L(),3):e.v(3)}$h(d);e.h=0})})},Wh)}
function ai(a){a.u&&(He(new Fg("NetworkStatusManager state did not match poll",T()-a.N)),a.u=!1)}
m.L=function(a){var b=this;return this.o?this.o:this.o=new Promise(function(c){return J(b,function e(){var f,g,h,k=this;return A(e,function(l){switch(l.h){case 1:return f=window.AbortController?new window.AbortController:void 0,g=null===f||void 0===f?void 0:f.signal,h=!1,qa(l,2,3),f&&(k.B=ff(function(){f.abort()},a||2E4)),y(l,fetch("/generate_204",{method:"HEAD",
signal:g}),5);case 5:h=!0;case 3:sa(l);k.o=void 0;k.B&&hf(k.B);h!==k.i&&(k.i=h,k.i&&k.l?Pd(k,"ytnetworkstatus-online"):k.l&&Pd(k,"ytnetworkstatus-offline"));c(h);ta(l);break;case 2:ra(l),h=!1,l.v(3)}})})})};
X.prototype.sendNetworkCheckRequest=X.prototype.L;X.prototype.listen=X.prototype.ba;X.prototype.enableErrorFlushing=X.prototype.Ca;X.prototype.getWindowStatus=X.prototype.fa;X.prototype.monitorNetworkStatusChange=X.prototype.Na;X.prototype.isNetworkAvailable=X.prototype.J;X.getInstance=Zh;function bi(a){a=void 0===a?{}:a;L.call(this);var b=this;this.l=this.u=0;this.i=Zh();var c=C("yt.networkStatusManager.instance.monitorNetworkStatusChange").bind(this.i);c&&c(a.Da);a.La&&(c=C("yt.networkStatusManager.instance.enableErrorFlushing").bind(this.i))&&c();if(c=C("yt.networkStatusManager.instance.listen").bind(this.i))a.da?(this.da=a.da,c("ytnetworkstatus-online",function(){ci(b,"publicytnetworkstatus-online")}),c("ytnetworkstatus-offline",function(){ci(b,"publicytnetworkstatus-offline")})):
(c("ytnetworkstatus-online",function(){Pd(b,"publicytnetworkstatus-online")}),c("ytnetworkstatus-offline",function(){Pd(b,"publicytnetworkstatus-offline")}))}
w(bi,L);bi.prototype.J=function(){var a=C("yt.networkStatusManager.instance.isNetworkAvailable").bind(this.i);return a?a():!0};
bi.prototype.L=function(a){return J(this,function c(){var d=this,e;return A(c,function(f){return(e=C("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(d.i))?f.return(e(a)):f.return(!0)})})};
function ci(a,b){a.da?a.l?(hf(a.u),a.u=ff(function(){a.o!==b&&(Pd(a,b),a.o=b,a.l=T())},a.da-(T()-a.l))):(Pd(a,b),a.o=b,a.l=T()):Pd(a,b)}
;var di=0,ei=0,fi,gi=B.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1,isIdbSupported:!1,potentialEsfErrorCounter:ei};S("export_networkless_options")&&F("ytNetworklessLoggingInitializationOptions",gi);function hi(a,b){function c(d){var e=ii().J();if(!ji()||!d||e&&S("vss_networkless_bypass_write"))ki(a,b);else{var f={url:a,options:b,timestamp:T(),status:"NEW",sendCount:0};Mh(f).then(function(g){f.id=g;(ii().J()||S("networkless_always_online"))&&li(f)}).catch(function(g){li(f);
ii().J()?Ge(g):Vh(g)})}}
b=void 0===b?{}:b;S("skip_is_supported_killswitch")?Ah().then(function(d){c(d)}):c(mi())}
function ni(a,b){function c(d){if(ji()&&d){var e={url:a,options:b,timestamp:T(),status:"NEW",sendCount:0},f=!1,g=b.onSuccess?b.onSuccess:function(){};
e.options.onSuccess=function(h,k){void 0!==e.id?Sh(e.id):f=!0;g(h,k)};
ki(e.url,e.options);Mh(e).then(function(h){e.id=h;f&&Sh(e.id)}).catch(function(h){ii().J()?Ge(h):Vh(h)})}else ki(a,b)}
b=void 0===b?{}:b;S("skip_is_supported_killswitch")?Ah().then(function(d){c(d)}):c(mi())}
function oi(){var a=this;di||(di=ff(function(){return J(a,function c(){var d;return A(c,function(e){if(1==e.h)return y(e,Ph(),2);if(3!=e.h)return d=e.i,d?y(e,li(d),3):(hf(di),di=0,e.return());di&&(di=0,oi());e.h=0})})},100))}
function li(a){return J(this,function c(){var d;return A(c,function(e){switch(e.h){case 1:if(void 0===a.id){e.v(2);break}return y(e,Qh(a.id),3);case 3:(d=e.i)?a=d:He(Error("The request cannot be found in the database."));case 2:var f=a.timestamp;if(!(2592E6<=T()-f)){e.v(4);break}He(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===a.id){e.v(5);break}return y(e,Sh(a.id),5);case 5:return e.return();case 4:f=a=pi(a);var g,h;if(null===(h=null===(g=null===f||void 0===f?void 0:
f.options)||void 0===g?void 0:g.postParams)||void 0===h?0:h.requestTimeMs)f.options.postParams.requestTimeMs=Math.round(T());(a=f)&&ki(a.url,a.options);e.h=0}})})}
function pi(a){var b=this,c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){return J(b,function h(){return A(h,function(k){switch(k.h){case 1:if(!((C("ytNetworklessLoggingInitializationOptions")?gi.potentialEsfErrorCounter:ei)<=bf("potential_esf_error_limit",10))){k.v(2);break}return y(k,ii().L(),3);case 3:if(ii().J())C("ytNetworklessLoggingInitializationOptions")&&gi.potentialEsfErrorCounter++,ei++;else return c(e,f),k.return();case 2:if(void 0===(null===a||void 0===a?void 0:a.id)){k.v(4);break}return 1>a.sendCount?y(k,Rh(a.id),8):y(k,Sh(a.id),
4);case 8:ff(function(){ii().J()&&oi()},5E3);
case 4:c(e,f),k.h=0}})})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){return J(b,function h(){return A(h,function(k){if(1==k.h)return void 0===(null===a||void 0===a?void 0:a.id)?k.v(2):y(k,Sh(a.id),2);d(e,f);k.h=0})})};
return a}
function ii(){fi||(fi=new bi({La:!0,Da:!0}));return fi}
function ki(a,b){if(S("networkless_with_beacon")){var c=["method","postBody"];if(Object.keys(b).length>c.length)var d=!0;else{d=0;c=u(c);for(var e=c.next();!e.done;e=c.next())b.hasOwnProperty(e.value)&&d++;d=Object.keys(b).length!==d}d?sf(a,b):S("networkless_with_ping_send")&&1===Object.keys(b).length&&b.allowPingSend?Ef(a):Hf(a,void 0,b.postBody)}else S("networkless_with_ping_send")&&1===Object.keys(b).length&&b.allowPingSend?Ef(a):sf(a,b)}
function ji(){return C("ytNetworklessLoggingInitializationOptions")?gi.isNwlInitialized:!1}
function mi(){return C("ytNetworklessLoggingInitializationOptions")?gi.isIdbSupported:!1}
;function qi(a){var b=this;this.config_=null;a?this.config_=a:ng()&&(this.config_=eg());df(function(){vg(b)},5E3)}
qi.prototype.isReady=function(){!this.config_&&ng()&&(this.config_=eg());return!!this.config_};
function hg(a,b,c,d){function e(r){r=void 0===r?!1:r;var q;if(d.retry&&"www.youtube-nocookie.com"!=h&&(r||(q=tg(b,c,l,k)),q)){var v=g.onSuccess,z=g.onFetchSuccess;g.onSuccess=function(x,Q){ug(q);v(x,Q)};
c.onFetchSuccess=function(x,Q){ug(q);z(x,Q)}}try{r&&d.retry&&!d.ra.bypassNetworkless?(g.method="POST",!d.ra.writeThenSend&&S("nwl_send_fast_on_unload")?ni(p,g):hi(p,g)):(g.method="POST",g.postParams||(g.postParams={}),sf(p,g))}catch(x){if("InvalidAccessError"==x.name)q&&(ug(q),q=0),He(Error("An extension is blocking network request."));
else throw x;}q&&df(function(){vg(a)},5E3)}
!P("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&He(new Fg("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new Fg("innertube xhrclient not ready",b,c,d);Ge(f);throw f;}var g={headers:{"Content-Type":"application/json"},method:"POST",postParams:c,postBodyFormat:"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(r,q){if(d.onSuccess)d.onSuccess(q)},
onFetchSuccess:function(r){if(d.onSuccess)d.onSuccess(r)},
onError:function(r,q){if(d.onError)d.onError(q)},
onFetchError:function(r){if(d.onError)d.onError(r)},
timeout:d.timeout,withCredentials:!0},h="";(f=a.config_.Ia)&&(h=f);var k=a.config_.Ka||!1,l=og(k,h,d);Object.assign(g.headers,l);g.headers.Authorization&&!h&&(g.headers["x-origin"]=window.location.origin);f="/youtubei/"+a.config_.innertubeApiVersion+"/"+b;var n={alt:"json"};a.config_.Ja&&g.headers.Authorization||(n.key=a.config_.innertubeApiKey);var p=Ze(""+h+f,n||{},!0);ji()?Ah().then(function(r){e(r)}):e(!1)}
;function ri(a,b){var c=void 0===c?{}:c;var d=qi;P("ytLoggingEventsDefaultDisabled",!1)&&qi==qi&&(d=null);c=void 0===c?{}:c;var e={},f=Math.round(c.timestamp||T());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=C("_lact",window);a=null==a?-1:Math.max(Date.now()-a,0);e.context={lastActivityMs:String(c.timestamp||!isFinite(a)?-1:a)};S("log_sequence_info_on_gel_web")&&c.ta&&(a=e.context,b=c.ta,ig[b]=b in ig?ig[b]+1:0,a.sequence={index:ig[b],groupKey:b},c.hb&&delete ig[c.ta]);(c.mb?bg:Yf)({endpoint:"log_event",
payload:e,H:c.H,X:c.X},d)}
;var si=[{ha:function(a){return"Cannot read property '"+a.key+"'"},
ca:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{ha:function(a){return"Cannot call '"+a.key+"'"},
ca:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{ha:function(a){return a.key+" is not defined"},
ca:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var ui={K:[],I:[{za:ti,weight:500}]};function ti(a){a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function vi(){this.I=[];this.K=[]}
var wi;function xi(){if(!wi){var a=wi=new vi;a.K.length=0;a.I.length=0;ui.K&&a.K.push.apply(a.K,ui.K);ui.I&&a.I.push.apply(a.I,ui.I)}return wi}
;var yi=new O;function zi(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Ai(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Ai(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Ai(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Ai(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Bi(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Ci(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f="string"!==typeof g||"clickTrackingParams"!==f&&"trackingParams"!==f?0:(g=zi(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?Ci(f+".ve",g,h,k):0;d+=f;d+=Ci(e,a[e],b,c);if(500<d)break}}else c[b]=Di(a),d+=c[b].length;else c[b]=Di(a),d+=c[b].length;return d}
function Ci(a,b,c,d){c+="."+a;a=Di(b);d[c]=a;return c.length+a.length}
function Di(a){return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}
;var Ei=new Set,Fi=0,Gi=0,Hi=0,Ii=[],Ji=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];var Ki={};function Li(a){return Ki[a]||(Ki[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Mi={},Ni=[],he=new O,Oi={};function Pi(){for(var a=u(Ni),b=a.next();!b.done;b=a.next())b=b.value,b()}
function Qi(a,b){var c;"yt:"===a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[Li(b)]:a.getAttribute("data-"+b):null;return c}
function Ri(a,b){for(var c=1;c<arguments.length;++c);he.O.apply(he,arguments)}
;function Si(a){this.h=!1;this.i=!!window.embedsHttpCleanupKillswitch;this.l=!1;this.j=a||{};this.i?(a=document.getElementById("www-widgetapi-script"),(this.h=!!("https:"===document.location.protocol||a&&0===a.src.indexOf("https:")))&&Ti(this)):Ti(this)}
function Ti(a){a=[a.j,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.toString().replace("http://","https://"))}
function Y(a,b){a=[a.j,window.YTConfig||{}];for(var c=0;c<a.length;c++){var d=a[c][b];if(void 0!==d)return d}return null}
function Ui(a,b,c){Vi||(Vi={},Pe(window,"message",function(d){a:{if(d.origin===Y(a,"host")||a.i&&d.origin===Y(a,"host").toString().replace(/^http:/,"https:")){try{var e=JSON.parse(d.data)}catch(f){e=void 0;break a}a.l=!0;a.i&&!a.h&&0===d.origin.indexOf("https:")&&(a.h=!0);if(d=Vi[e.id])d.s=!0,d.s&&(H(d.o,d.sendMessage,d),d.o.length=0),d.ja(e)}e=void 0}return e}));
Vi[c]=b}
var Vi=null;function Z(a,b,c){this.m=this.h=this.i=null;this.j=0;this.s=!1;this.o=[];this.l=null;this.B={};if(!a)throw Error("YouTube player element ID required.");this.id=Ha(this);this.u=c;this.setup(a,b)}
m=Z.prototype;m.setSize=function(a,b){this.h.width=a.toString();this.h.height=b.toString();return this};
m.ya=function(){return this.h};
m.ja=function(a){Wi(this,a.event,a)};
m.addEventListener=function(a,b){var c=b;"string"===typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.l.subscribe(a,c);Xi(this,a);return this};
function Yi(a,b){b=b.split(".");if(2===b.length){var c=b[1];a.u===b[0]&&Xi(a,c)}}
m.destroy=function(){this.h&&this.h.id&&(Mi[this.h.id]=null);var a=this.l;a&&"function"==typeof a.dispose&&a.dispose();if(this.m){a=this.h;var b=a.parentNode;b&&b.replaceChild(this.m,a)}else(a=this.h)&&a.parentNode&&a.parentNode.removeChild(a);Vi&&(Vi[this.id]=null);this.i=null;a=this.h;for(var c in Za)Za[c][0]==a&&Ne(c);this.m=this.h=null};
m.la=function(){return{}};
function Zi(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.s?a.sendMessage(b):a.o.push(b)}
function Wi(a,b,c){a.l.j||(c={target:a,data:c},a.l.O(b,c),Ri(a.u+"."+b,c))}
function $i(a,b){var c=document.createElement("iframe");b=b.attributes;for(var d=0,e=b.length;d<e;d++){var f=b[d].value;null!=f&&""!==f&&"null"!==f&&c.setAttribute(b[d].name,f)}c.setAttribute("frameBorder","0");c.setAttribute("allowfullscreen","1");c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");c.setAttribute("title","YouTube "+Y(a.i,"title"));(b=Y(a.i,"width"))&&c.setAttribute("width",b.toString());(b=Y(a.i,"height"))&&c.setAttribute("height",
b.toString());var g=a.la();g.enablejsapi=window.postMessage?1:0;window.location.host&&(g.origin=window.location.protocol+"//"+window.location.host);g.widgetid=a.id;window.location.href&&H(["debugjs","debugcss"],function(h){var k=Hb(window.location.href,h);null!==k&&(g[h]=k)});
window.yt_embedsTokenValue&&(g.embedsTokenValue=encodeURIComponent(window.yt_embedsTokenValue),delete window.yt_embedsTokenValue);c.src=Y(a.i,"host")+("/embed/"+Y(a.i,"videoId"))+"?"+Fb(g);return c}
m.sa=function(){this.h&&this.h.contentWindow?this.sendMessage({event:"listening"}):window.clearInterval(this.j)};
function aj(a){Ui(a.i,a,a.id);a.j=Re(a.sa.bind(a));Pe(a.h,"load",function(){window.clearInterval(a.j);a.j=Re(a.sa.bind(a))})}
m.setup=function(a,b){var c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"===a.tagName.toLowerCase(),b.host||(b.host=c?Db(a.src):"https://www.youtube.com"),this.i=new Si(b),c||(b=$i(this,a),this.m=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.h=a,this.h.id||(this.h.id="widget"+Ha(this.h)),Mi[this.h.id]=this,window.postMessage){this.l=new O;aj(this);b=Y(this.i,"events");for(var d in b)b.hasOwnProperty(d)&&this.addEventListener(d,b[d]);for(var e in Oi)Oi.hasOwnProperty(e)&&
Yi(this,e)}};
function Xi(a,b){a.B[b]||(a.B[b]=!0,Zi(a,"addEventListener",[b]))}
m.sendMessage=function(a){a.id=this.id;a.channel="widget";a=Rd(a);var b=this.i;var c=Db(this.h.src||"");b=b.i?0===c.indexOf("https:")?[c]:b.h?[c.replace("http:","https:")]:b.l?[c]:[c,c.replace("http:","https:")]:[c.replace("http:","https:")];if(this.h.contentWindow)for(c=0;c<b.length;c++)try{this.h.contentWindow.postMessage(a,b[c])}catch(x){if(x.name&&"SyntaxError"===x.name){if(!(x.message&&0<x.message.indexOf("target origin ''"))){var d=void 0,e=x;d=void 0===d?{}:d;d.name=P("INNERTUBE_CONTEXT_CLIENT_NAME",
1);d.version=P("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);var f=d||{};d="WARNING";d=void 0===d?"ERROR":d;if(e){e.hasOwnProperty("level")&&e.level&&(d=e.level);if(S("console_log_js_exceptions")){var g=e,h=[];h.push("Name: "+g.name);h.push("Message: "+g.message);g.hasOwnProperty("params")&&h.push("Error Params: "+JSON.stringify(g.params));g.hasOwnProperty("args")&&h.push("Error args: "+JSON.stringify(g.args));h.push("File name: "+g.fileName);h.push("Stacktrace: "+g.stack);window.console.log(h.join("\n"),
g)}if(!(5<=Fi)){g=void 0;var k=f,l=$c(e);f=l.message||"Unknown Error";h=l.name||"UnknownError";var n=l.stack||e.i||"Not available";if(n.startsWith(h+": "+f)){var p=n.split("\n");p.shift();n=p.join("\n")}p=l.lineNumber||"Not available";l=l.fileName||"Not available";var r=0;if(e.hasOwnProperty("args")&&e.args&&e.args.length)for(g=0;g<e.args.length&&!(r=Bi(e.args[g],"params."+g,k,r),500<=r);g++);else if(e.hasOwnProperty("params")&&e.params){var q=e.params;if("object"===typeof e.params)for(g in q){if(q[g]){var v=
"params."+g,z=Di(q[g]);k[v]=z;r+=v.length+z.length;if(500<r)break}}else k.params=Di(q)}if(Ii.length)for(g=0;g<Ii.length&&!(r=Bi(Ii[g],"params.context."+g,k,r),500<=r);g++);navigator.vendor&&!k.hasOwnProperty("vendor")&&(k["device.vendor"]=navigator.vendor);g={message:f,name:h,lineNumber:p,fileName:l,stack:n,params:k,sampleWeight:1};f=Number(e.columnNumber);isNaN(f)||(g.lineNumber=g.lineNumber+":"+f);if("IGNORED"===e.level)e=0;else a:{e=xi();f=u(e.K);for(h=f.next();!h.done;h=f.next())if(h=h.value,
g.message&&g.message.match(h.jb)){e=h.weight;break a}e=u(e.I);for(f=e.next();!f.done;f=e.next())if(f=f.value,f.za(g)){e=f.weight;break a}e=1}g.sampleWeight=e;e=g;g=u(si);for(f=g.next();!f.done;f=g.next())if(f=f.value,f.ca[e.name])for(p=u(f.ca[e.name]),h=p.next();!h.done;h=p.next())if(l=h.value,h=e.message.match(l.regexp)){e.params["params.error.original"]=h[0];p=l.groups;l={};for(n=0;n<p.length;n++)l[p[n]]=h[n+1],e.params["params.error."+p[n]]=h[n+1];e.message=f.ha(l);break}e.params||(e.params={});
g=xi();e.params["params.errorServiceSignature"]="msg="+g.K.length+"&cb="+g.I.length;e.params["params.serviceWorker"]="false";B.document&&B.document.querySelectorAll&&(e.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));window.yterr&&"function"===typeof window.yterr&&window.yterr(e);if(0!==e.sampleWeight&&!Ei.has(e.message)){"ERROR"===d?(yi.O("handleError",e),S("record_app_crashed_web")&&0===Hi&&1===e.sampleWeight&&(Hi++,ri("appCrashed",{appCrashType:"APP_CRASH_TYPE_BREAKPAD"})),
Gi++):"WARNING"===d&&yi.O("handleWarning",e);if(S("kevlar_gel_error_routing")){g=d;l=e;b:{f=u(Ji);for(h=f.next();!h.done;h=f.next())if(Bf(h.value.toLowerCase())){f=!0;break b}f=!1}if(f)f=void 0;else{h={stackTrace:l.stack};l.fileName&&(h.filename=l.fileName);f=l.lineNumber&&l.lineNumber.split?l.lineNumber.split(":"):[];0!==f.length&&(1!==f.length||isNaN(Number(f[0]))?2!==f.length||isNaN(Number(f[0]))||isNaN(Number(f[1]))||(h.lineNumber=Number(f[0]),h.columnNumber=Number(f[1])):h.lineNumber=Number(f[0]));
f={level:"ERROR_LEVEL_UNKNOWN",message:l.message,errorClassName:l.name,sampleWeight:l.sampleWeight};"ERROR"===g?f.level="ERROR_LEVEL_ERROR":"WARNING"===g&&(f.level="ERROR_LEVEL_WARNNING");h={isObfuscated:!0,browserStackInfo:h};p={pageUrl:window.location.href,kvPairs:[]};P("FEXP_EXPERIMENTS")&&(p.experimentIds=P("FEXP_EXPERIMENTS"));if(l=l.params)for(n=u(Object.keys(l)),k=n.next();!k.done;k=n.next())k=k.value,p.kvPairs.push({key:"client."+k,value:String(l[k])});l=P("SERVER_NAME",void 0);n=P("SERVER_VERSION",
void 0);l&&n&&(p.kvPairs.push({key:"server.name",value:l}),p.kvPairs.push({key:"server.version",value:n}));f={errorMetadata:p,stackTrace:h,logMessage:f}}f&&(ri("clientError",f),("ERROR"===g||S("errors_flush_gel_always_killswitch"))&&$f())}if(!S("suppress_error_204_logging")){f=e;g=f.params||{};d={urlParams:{a:"logerror",t:"jserror",type:f.name,msg:f.message.substr(0,250),line:f.lineNumber,level:d,"client.name":g.name},postParams:{url:P("PAGE_NAME",window.location.href),file:f.fileName},method:"POST"};
g.version&&(d["client.version"]=g.version);if(d.postParams){f.stack&&(d.postParams.stack=f.stack);f=u(Object.keys(g));for(h=f.next();!h.done;h=f.next())h=h.value,d.postParams["client."+h]=g[h];if(g=P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(f=u(Object.keys(g)),h=f.next();!h.done;h=f.next())h=h.value,d.postParams[h]=g[h];g=P("SERVER_NAME",void 0);f=P("SERVER_VERSION",void 0);g&&f&&(d.postParams["server.name"]=g,d.postParams["server.version"]=f)}sf(P("ECATCHER_REPORT_HOST","")+"/error_204",
d)}Ei.add(e.message);Fi++}}}}}else throw x;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function bj(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function cj(a){return 0===a.search("get")||0===a.search("is")}
;function dj(a,b){Z.call(this,a,Object.assign({title:"video player",videoId:"",width:640,height:360},b||{}),"player");this.F={};this.playerInfo={}}
w(dj,Z);m=dj.prototype;m.la=function(){var a=Y(this.i,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!==window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=Y(this.i,"embedConfig")){if(D(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
m.ja=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(D(a))for(var c in a)a.hasOwnProperty(c)&&(this.F[c]=a[c]);break;case "infoDelivery":ej(this,a);break;case "initialDelivery":D(a)&&(window.clearInterval(this.j),this.playerInfo={},this.F={},fj(this,a.apiInterface),ej(this,a));break;default:Wi(this,b,a)}};
function ej(a,b){if(D(b))for(var c in b)b.hasOwnProperty(c)&&(a.playerInfo[c]=b[c])}
function fj(a,b){H(b,function(c){this[c]||("getCurrentTime"===c?this[c]=function(){var d=this.playerInfo.currentTime;if(1===this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:bj(c)?this[c]=function(){this.playerInfo={};
this.F={};Zi(this,c,arguments);return this}:cj(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){Zi(this,c,arguments);
return this})},a)}
m.getVideoEmbedCode=function(){var a=Y(this.i,"host")+("/embed/"+Y(this.i,"videoId")),b=Number(Y(this.i,"width")),c=Number(Y(this.i,"height"));if(isNaN(b)||isNaN(c))throw Error("Invalid width or height property");b=Math.floor(b);c=Math.floor(c);a=zb(a);return'<iframe width="'+b+'" height="'+c+'" src="'+a+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'};
m.getOptions=function(a){return this.F.namespaces?a?this.F[a]?this.F[a].options||[]:[]:this.F.namespaces||[]:[]};
m.getOption=function(a,b){if(this.F.namespaces&&a&&b&&this.F[a])return this.F[a][b]};
function gj(a){if("iframe"!==a.tagName.toLowerCase()){var b=Qi(a,"videoid");b&&(b={videoId:b,width:Qi(a,"width"),height:Qi(a,"height")},new dj(a,b))}}
;F("YT.PlayerState.UNSTARTED",-1);F("YT.PlayerState.ENDED",0);F("YT.PlayerState.PLAYING",1);F("YT.PlayerState.PAUSED",2);F("YT.PlayerState.BUFFERING",3);F("YT.PlayerState.CUED",5);F("YT.get",function(a){return Mi[a]});
F("YT.scan",Pi);F("YT.subscribe",function(a,b,c){he.subscribe(a,b,c);Oi[a]=!0;for(var d in Mi)Mi.hasOwnProperty(d)&&Yi(Mi[d],a)});
F("YT.unsubscribe",function(a,b,c){ge(a,b,c)});
F("YT.Player",dj);Z.prototype.destroy=Z.prototype.destroy;Z.prototype.setSize=Z.prototype.setSize;Z.prototype.getIframe=Z.prototype.ya;Z.prototype.addEventListener=Z.prototype.addEventListener;dj.prototype.getVideoEmbedCode=dj.prototype.getVideoEmbedCode;dj.prototype.getOptions=dj.prototype.getOptions;dj.prototype.getOption=dj.prototype.getOption;
Ni.push(function(a){var b=a;b||(b=document);a=Va(b.getElementsByTagName("yt:player"));var c=b||document;if(c.querySelectorAll&&c.querySelector)b=c.querySelectorAll(".yt-player");else{var d;c=document;b=b||c;if(b.querySelectorAll&&b.querySelector)b=b.querySelectorAll(".yt-player");else if(b.getElementsByClassName){var e=b.getElementsByClassName("yt-player");b=e}else{e=b.getElementsByTagName("*");var f={};for(c=d=0;b=e[c];c++){var g=b.className,h;if(h="function"==typeof g.split)h=0<=Ra(g.split(/\s+/),
"yt-player");h&&(f[d++]=b)}f.length=d;b=f}}b=Va(b);H(Ua(a,b),gj)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||Pi();var hj=B.onYTReady;hj&&hj();var ij=B.onYouTubeIframeAPIReady;ij&&ij();var jj=B.onYouTubePlayerAPIReady;jj&&jj();}).call(this);
