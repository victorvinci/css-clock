!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n(1);i(n(5)),i(n(6));var r=n(7),o=n(8);function i(e){return e&&e.__esModule?e:{default:e}}(0,r.transitionOnClick)(),(0,o.updateClock)()},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(3)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){},function(e,t,n){var r,o,i={},s=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),a=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),c=null,l=0,u=[],d=n(4);function f(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=i[r.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](r.parts[s]);for(;s<r.parts.length;s++)o.parts.push(b(r.parts[s],t))}else{var a=[];for(s=0;s<r.parts.length;s++)a.push(b(r.parts[s],t));i[r.id]={id:r.id,refs:1,parts:a}}}}function m(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],s=t.base?i[0]+t.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}function p(e,t){var n=a(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),u.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=a(e.insertAt.before,n);n.insertBefore(t,o)}}function h(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=u.indexOf(e);t>=0&&u.splice(t,1)}function v(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return y(t,e.attrs),p(e,t),t}function y(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function b(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var s=l++;n=c||(c=v(t)),r=k.bind(null,n,s,!1),o=k.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",y(t,e.attrs),p(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=d(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,t),o=function(){h(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){h(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=s()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=m(e,t);return f(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var s=n[o];(a=i[s.id]).refs--,r.push(a)}e&&f(m(e,t),t);for(o=0;o<r.length;o++){var a;if(0===(a=r[o]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete i[a.id]}}}};var L,g=(L=[],function(e,t){return L[e]=t,L.filter(Boolean).join("\n")});function k(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,t,n){e.exports=n.p+"img/moon.png"},function(e,t,n){e.exports=n.p+"img/sun.png"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.transitionOnClick=function(){var e=document.querySelector(".talk"),t=document.querySelector(".container-brasil"),n=document.querySelector(".container-italia"),r=document.querySelectorAll(".info-br"),o=document.querySelectorAll(".info-it"),i=document.querySelector(".day-time-pic-br"),s=document.querySelector(".day-time-pic-it");e.addEventListener("click",function(){!this.classList.contains("talk-shrink")&&document.querySelectorAll(".expand").length>0?(this.classList.add("talk-zero-height"),this.classList.add("talk-shrink")):this.classList.contains("talk-shrink")?this.classList.contains("talk-zero-height")?(this.classList.remove("talk-zero-height"),this.classList.remove("talk-shrink")):this.classList.remove("talk-shrink"):(this.style.transition="all 0.5s",this.classList.add("talk-shrink"))}),t.addEventListener("click",function(){this.classList.contains("shrink")?(this.classList.remove("shrink"),this.classList.add("expand"),setTimeout(function(){n.classList.add("hide"),r[0].classList.add("expand-infos"),r[1].classList.add("expand-infos"),i.classList.add("expand-infos"),e.classList.add("talk-zero-height"),n.style["z-index"]="-1"},500)):(this.classList.remove("expand"),this.classList.add("shrink"),n.classList.remove("hide"),r[0].classList.remove("expand-infos"),r[1].classList.remove("expand-infos"),i.classList.remove("expand-infos"),e.classList.remove("talk-zero-height"),setTimeout(function(){n.style["z-index"]="0"},500))}),n.addEventListener("click",function(){this.classList.contains("shrink")?(this.classList.remove("shrink"),this.classList.add("expand"),1==window.matchMedia("(max-width:767px)").matches&&(this.style.bottom="0"),setTimeout(function(){t.classList.add("hide"),o[0].classList.add("expand-infos"),o[1].classList.add("expand-infos"),s.classList.add("expand-infos"),e.classList.add("talk-zero-height")},500)):(this.classList.add("shrink"),t.classList.remove("hide"),this.classList.remove("expand"),1==window.matchMedia("(max-width:767px)").matches&&(this.style.bottom="20%"),o[0].classList.remove("expand-infos"),o[1].classList.remove("expand-infos"),s.classList.remove("expand-infos"),e.classList.remove("talk-zero-height"))})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.updateClock=function(){moment.tz.setDefault("America/Sao_Paulo");var e=document.querySelector(".container-brasil"),t=document.querySelector(".container-italia"),n=document.querySelector(".br"),r=document.querySelector(".it"),o=document.querySelector(".dorme-it"),i=document.querySelector(".dorme-br"),s=document.querySelector(".day-time-br"),a=document.querySelector(".day-time-pic-br"),c=document.querySelector(".day-time-pic-it"),l=document.querySelector(".day-time-it"),u=document.querySelector(".talk"),d=(moment("00","HH").format("HH"),Boolean),f=Boolean;function m(){var t=moment().subtract(1,"hour").format("HH:mm:ss"),r=moment().subtract(1,"hour").format("HH"),o=moment().subtract(1,"hour").to(moment("01:00:00","HH:mm:ss").add(1,"day"));return n.innerHTML=t,r>6&&r<=18?(s.innerHTML="There is sun",a.innerHTML="<img src='img/sun.png'>"):(s.innerHTML="Sun is gone",a.innerHTML="<img src='img/moon.png'>"),r>=1&&r<9?(i.innerHTML="Sleeping",i.style.backgroundColor="salmon",e.style.backgroundColor="slategray",d=!1):r>=18?(i.innerHTML="Sleep "+moment().subtract(1,"hour").to(moment("01:00:00","HH:mm:ss")),d=!0):(i.innerHTML="Sleep "+o,d=!0),d}function p(){var e=moment().add(5,"hour").format("HH:mm:ss"),n=moment().add(5,"hour").format("HH"),i=moment().add(5,"hour").to(moment("03:00:00","HH:mm:ss").add(1,"day"));return r.innerHTML=e,n>6&&n<=19?(l.innerHTML="There is sun",c.innerHTML="<img src='img/sun.png'>"):(l.innerHTML="Sun is gone",c.innerHTML="<img src='img/moon.png'>"),n>=3&&n<11?(o.innerHTML="Sleeping",o.style.backgroundColor="salmon",t.style.backgroundColor="slategray",f=!1):n<=2?(o.innerHTML="Sleep "+moment().add(5,"hour").to(moment("03:00:00","HH:mm:ss")),f=!0):(o.innerHTML="Sleep "+i,f=!0),f}setInterval(m,1e3),setInterval(p,1e3),!0===m()&&!0===p()?(u.innerHTML="GOOD TIME TO TALK",u.style.backgroundColor="lightgreen"):(u.innerHTML="NOT A GOOD TIME",u.style.backgroundColor="salmon")}}]);