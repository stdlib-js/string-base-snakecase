"use strict";var E=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(v){throw (r=0, v)}};};var u=E(function(C,i){
var c=require('@stdlib/string-base-lowercase/dist'),a=require('@stdlib/string-base-replace/dist'),n=require('@stdlib/string-base-trim/dist'),_=/\s+/g,o=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,q=/([a-z0-9])([A-Z])/g;function A(e){return e=a(e,o," "),e=a(e,q,"$1 $2"),e=n(e),e=a(e,_,"_"),c(e)}i.exports=A
});var g=u();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
