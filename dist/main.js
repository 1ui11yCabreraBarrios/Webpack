(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var r=e.g.document;if(!t&&r&&(r.currentScript&&(t=r.currentScript.src),!t)){var n=r.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"assets/webpack.svg",r=e.p+"assets/saga-kanon.png";var n;(n=console).log.apply(n,[1,2,3]);var a=document,c=a.getElementById("app"),i=a.createElement("h1"),o=a.createElement("img"),s=a.createElement("img");i.textContent="hello world webpack",o.src=t,o.classList.add("icon"),s.src=r,c.appendChild(i),c.appendChild(s),c.appendChild(o)})();