"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=v(function(p,i){
var E=require('@stdlib/string-base-lowercase/dist'),a=require('@stdlib/string-base-replace/dist'),c=require('@stdlib/string-base-trim/dist'),n=/\s+/g,_=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,o=/([a-z0-9])([A-Z])/g;function q(e){return e=a(e,_," "),e=a(e,o,"$1 $2"),e=c(e),e=a(e,n,"_"),E(e)}i.exports=q
});var A=u();module.exports=A;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
