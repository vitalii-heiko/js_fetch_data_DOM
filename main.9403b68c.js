parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e="\n  https://mate-academy.github.io/phone-catalogue-static/api/phones.json\n",n="\n  https://mate-academy.github.io/phone-catalogue-static/api/phones/:phoneId.json\n",t=document.createElement("ul");document.body.append(t);var o=function(){return fetch(e).then(function(e){return setTimeout(function(){if(!e.ok)throw new Error("Whoops! Time passed!")},5e3),e.json()})},r=function(e){e.forEach(function(e){fetch(n.replace(":phoneId",e.id)).then(function(e){if(!e.ok)throw new Error("Whoops! Some error!");return e.json()}).then(function(e){var n=document.createElement("li");n.innerText=e.name,t.append(n)})})};o().then(function(e){return r(e)});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.9403b68c.js.map