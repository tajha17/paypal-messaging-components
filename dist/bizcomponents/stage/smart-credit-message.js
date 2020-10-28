/* version: 1.15.1 */
window.crc=function(e){function t(t){for(var r,o,c=t[0],l=t[1],s=t[2],f=0,d=[];f<c.length;f++)({}).hasOwnProperty.call(i,o=c[f])&&i[o]&&d.push(i[o][0]),i[o]=0;for(r in l)({}).hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(u&&u(t);d.length;)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++)0!==i[n[c]]&&(r=!1);r&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},i={1:0},a=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return{}.hasOwnProperty.call(e,t)},o.p="";var c=("undefined"!=typeof self?self:this).webpackJsonpcrc=("undefined"!=typeof self?self:this).webpackJsonpcrc||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var u=l;return a.push([152,0]),n()}({152:function(e,t,n){"use strict";n.r(t),n.d(t,"setupMessage",(function(){return O}));var r=n(1),i=n(28),a=n(38),o=n(12),c=n.n(o),l=n(3),s=n(10),u=n.n(s),f=n(36),d=n.n(f),p=(n(85),n(47),n(37),n(13));n(2),n(16),Object(p.a)((function(e,t,n){return t.getElementsByClassName(e+"__"+n)[0]})),Object(p.a)((function(e,t){var n=document.createElement("style");n.textContent=t,e.insertBefore(n,e.firstChild)})),Object(p.a)((function(e,t){if(Array.isArray(t))t.forEach((function(t){return e.appendChild(t)}));else if(t instanceof HTMLElement)e.appendChild(t);else if("string"==typeof t){var n=document.createElement("span");n.innerHTML=t,e.appendChild(n)}else!1===t&&e.parentNode.removeChild(e)})),Object(p.a)((function(e,t){if(Array.isArray(t))[].concat(t).reverse().forEach((function(t){return e.insertBefore(t,e.firstChild)}));else if(t instanceof HTMLElement)e.insertBefore(t,e.firstChild);else if("string"==typeof t){var n=document.createElement("span");n.innerHTML=t,e.insertBefore(n,e.firstChild)}else!1===t&&e.parentNode.removeChild(e)}));var m=Object(p.a)((function(e,t,n,r){if(void 0===n&&(n="PayPal Credit"),void 0===r&&(r=""),Array.isArray(t))t.forEach((function(t){return m(e,t,n)}));else if("string"==typeof t){var i=new Image;i.alt=n,i.className="message__logo",i.src=t,r&&(i.srcset=r),e.appendChild(i)}else if("object"==typeof t){var a=t.src,o=t.dimensions,c=o[0],l=o[1],s=new Image;s.src=a,s.alt=n;var u=document.createElement("div");u.className="message__logo message__logo--svg";var f=document.createElement("canvas");f.height=l,f.width=c,u.appendChild(s),u.appendChild(f),e.appendChild(u)}else e.parentNode.removeChild(e)}),2),h=function(e){if(!e)return"NONE";var t,n=u()(d()(e.children),(function(t){return"none"!==function(e){var t;return null==e||null==(t=e.ownerDocument)?void 0:t.defaultView}(e).getComputedStyle(t).getPropertyValue("display")}));return n?(t=n.classList,(u()(["xsmall","small","medium","large","xlarge"],(function(e){return t.contains("tag--"+e)}))||"NONE").toUpperCase()):"NONE"};function y(e){if(!e)return"headline:NONE::subheadline:NONE::disclaimer:NONE";var t=[e.querySelector(".message__headline"),e.querySelector(".message__subheadline"),e.querySelector(".message__disclaimer")],n=t[1],r=t[2];return"headline:"+h(t[0])+"::subheadline:"+h(n)+"::disclaimer:"+h(r)}var g=n(155),b=n(159),v=function(){var e=Object(i.b)(),t=e.amount,n=e.currency,o=e.style,s=e.offer,u=e.payerId,f=e.clientId,d=e.merchantId,p=e.onClick,m=e.onReady,h=e.onHover,v=e.onMarkup,O=e.resize,j=Object(a.b)(),_=j.markup,w=j.meta,C=j.parentStyles,N=j.warnings,E=j.setServerData,S=Object(l.i)({width:0,height:0}),M=Object(l.i)(),k=function(){"function"==typeof h&&h({meta:w})};return Object(l.f)((function(){"function"==typeof v&&v({meta:w,styles:C,warnings:N})}),[C,N,_]),Object(l.f)((function(){"function"==typeof m&&m({meta:w,activeTags:y(M.current)})}),[w.messageRequestId]),Object(b.b)((function(){var e=M.current.offsetWidth,t=M.current.offsetHeight;S.current.width===e&&S.current.height===t?O({width:e,height:t}):S.current={width:e,height:t}})),Object(b.a)((function(){var e=c()({message_request_id:w.messageRequestId,amount:t,currency:n,style:o,credit_type:s,payer_id:u,client_id:f,merchant_id:d}).filter((function(e){return Boolean(e[1])})).reduce((function(e,t){var n=t[1];return e+"&"+t[0]+"="+encodeURIComponent("object"==typeof n?JSON.stringify(n):n)}),"").slice(1);Object(g.b)("GET",window.location.origin+"/credit-presentment/renderMessage?"+e).then((function(e){var t,n,r,i,a=e.data;E({markup:null!=(t=a.markup)?t:_,meta:null!=(n=a.meta)?n:w,parentStyles:null!=(r=a.parentStyles)?r:C,warnings:null!=(i=a.warnings)?i:N})}))}),[t,n,JSON.stringify(o),s,u,f,d]),Object(r.h)("button",{type:"button",ref:M,onClick:function(){"function"==typeof p&&p({meta:w})},onMouseOver:k,onFocus:k,"aria-label":"PayPal Credit Message",style:{display:"block",background:"transparent",padding:0,border:"none",outline:"none",textAlign:"left",fontFamily:"inherit",fontSize:"inherit"},innerHTML:_})};function O(e){var t=e.markup,n=e.meta,o=e.parentStyles,c=e.warnings;Object(r.k)(Object(r.h)(i.a,null,Object(r.h)(a.a,{data:{markup:t,meta:n,parentStyles:o,warnings:c}},Object(r.h)(v,null))),document.body)}}});
//# sourceMappingURL=smart-credit-message.js.map