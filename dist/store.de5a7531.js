parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"iz0v":[function(require,module,exports) {
"loading"==document.readyState?document.addEventListener("DOMContentLoaded",ready):ready(),ready();var e=document.getElementsByClassName("btn-danger");console.log(e);for(var t=0;t<e.length;t++){var a=e[t];a.addEventListener("click",l)}var n=document.getElementsByClassName("cart-quantity-input");for(t=0;t<n.length;t++){var r=n[t];r.addEventListener("change",s)}function l(e){e.target.parentElement.parentElement.remove(),m()}function s(e){var t=e.target;(isNaN(t.value)||t.value<=0)&&(t.value=1),m()}function m(){for(var e=document.getElementsByClassName("cart-items")[0].getElementsByClassName("cart-row"),t=0;t<e.length;t++){var a=0,n=e[t],r=n.getElementsByClassName("cart-price")[0],l=n.getElementsByClassName("cart-quantity-input")[0];a+=parceFloat(r.innerText.replace("$",""))*l.value}a=Math.round(100*a)/100,document.getElementsByClassName("cart-total-price")[0].innerText="$"+a}
},{}]},{},["iz0v"], null)
//# sourceMappingURL=/store.de5a7531.js.map