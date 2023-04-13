(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6489:function(e,t){"use strict";/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */t.parse=function(e,t){if("string"!=typeof e)throw TypeError("argument str must be a string");for(var s={},i=e.split(";"),n=(t||{}).decode||r,o=0;o<i.length;o++){var a=i[o],l=a.indexOf("=");if(!(l<0)){var c=a.substring(0,l).trim();if(void 0==s[c]){var u=a.substring(l+1,a.length).trim();'"'===u[0]&&(u=u.slice(1,-1)),s[c]=function(e,t){try{return t(e)}catch(t){return e}}(u,n)}}}return s},t.serialize=function(e,t,r){var n=r||{},o=n.encode||s;if("function"!=typeof o)throw TypeError("option encode is invalid");if(!i.test(e))throw TypeError("argument name is invalid");var a=o(t);if(a&&!i.test(a))throw TypeError("argument val is invalid");var l=e+"="+a;if(null!=n.maxAge){var c=n.maxAge-0;if(isNaN(c)||!isFinite(c))throw TypeError("option maxAge is invalid");l+="; Max-Age="+Math.floor(c)}if(n.domain){if(!i.test(n.domain))throw TypeError("option domain is invalid");l+="; Domain="+n.domain}if(n.path){if(!i.test(n.path))throw TypeError("option path is invalid");l+="; Path="+n.path}if(n.expires){if("function"!=typeof n.expires.toUTCString)throw TypeError("option expires is invalid");l+="; Expires="+n.expires.toUTCString()}if(n.httpOnly&&(l+="; HttpOnly"),n.secure&&(l+="; Secure"),n.sameSite)switch("string"==typeof n.sameSite?n.sameSite.toLowerCase():n.sameSite){case!0:case"strict":l+="; SameSite=Strict";break;case"lax":l+="; SameSite=Lax";break;case"none":l+="; SameSite=None";break;default:throw TypeError("option sameSite is invalid")}return l};var r=decodeURIComponent,s=encodeURIComponent,i=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/},5557:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(6616)}])},7530:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var s=r(5893),i=r(1664),n=r.n(i),o=r(7294),a=r(1043),l=r(1042),c=r(1657),u=r(7751),d=function(e){let{handleOpen:t,isOpen:r}=e;return r?(0,s.jsx)(u.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},className:"".concat(r?"flex":"hidden"," w-full h-screen absolute top-0 bg-gray-700 bg-opacity-30"),children:(0,s.jsxs)("div",{className:"text-center relative leading-loose flex place-items-center text-md text-cusblack w-52 h-screen bg-white",children:[(0,s.jsx)("button",{onClick:t,className:" absolute top-0 right-0 m-5",children:(0,s.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),(0,s.jsxs)("ul",{className:"w-full",children:[(0,s.jsx)(n(),{href:"/",children:(0,s.jsx)("li",{className:"mb-2 hover:underline mx-4 rounded-xl cursor-pointer",children:"Home"})}),(0,s.jsx)(n(),{href:"/shop",children:(0,s.jsx)("li",{className:"mb-2 hover:underline mx-4 rounded-xl cursor-pointer",children:"Shop"})}),(0,s.jsx)(n(),{href:"/ourstore",children:(0,s.jsx)("li",{className:"mb-2 hover:underline mx-4 rounded-xl cursor-pointer",children:"About"})}),(0,s.jsx)(n(),{href:"/ourstore",children:(0,s.jsx)("li",{className:"mb-2 hover:underline mx-4 rounded-xl cursor-pointer",children:"Our Store"})})]})]})}):(0,s.jsx)("div",{})},h=r(2286),p=r.n(h),f=r(6885),m=function(){let e=(0,f.useRouter)(),t=(0,a.v9)(l.a1),[r,i]=(0,o.useState)([]),u=(0,a.v9)(c.XH),[m,x]=(0,o.useState)([]),[v,g]=(0,o.useState)(!1),[w,j]=(0,o.useState)({});(0,o.useEffect)(()=>{let e=p().get();try{i(t),x(u),j(JSON.parse(e.user))}catch(t){j(e.user)}},[t,u]);let[b,k]=(0,o.useState)(!1),y=()=>{k(!b)},N=()=>{(0,h.destroyCookie)(null,"token"),(0,h.destroyCookie)(null,"user"),e.replace("/login")};return(0,s.jsxs)("nav",{className:"w-full mx-auto fixed bg-cusgray z-30 py-2 md:px-0 duration-200",children:[(0,s.jsxs)("div",{className:"px-2 navtop relative max-w-6xl mx-auto flex justify-between place-items-center py-1.5",children:[(0,s.jsxs)("div",{className:"burger flex items-center",children:[(0,s.jsx)("button",{onClick:y,children:(0,s.jsx)("svg",{className:"w-7 h-7 text-cusblack",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z",clipRule:"evenodd"})})}),(0,s.jsx)("h3",{className:"hidden md:inline text-md mr-2 font-semibold ml-3 text-cusblack",children:"ChiqueChick"})]}),(0,s.jsxs)("div",{className:"profile flex items-center place-items-center",children:[(0,s.jsx)(n(),{href:"/shop",children:(0,s.jsx)("div",{className:"w-8 relative flex items-center h-8 mr-1 rounded-full hover:bg-gray-200 active:bg-gray-300 cursor-pointer duration-200",children:(0,s.jsx)("svg",{className:"w-6 h-6 text-cusblack m-auto",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"})})})}),(0,s.jsxs)("div",{onClick:()=>e.push("/basket"),className:"w-8 relative flex items-center h-8 mr-1 rounded-full hover:bg-gray-200 active:bg-gray-300 cursor-pointer duration-200",children:[(0,s.jsx)("svg",{className:"w-6 h-6 text-cusblack m-auto",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"})}),r.length>0?(0,s.jsx)("div",{className:"flex\n                } absolute text-xs font-light justify-center text-white text-center w-4 h-4 bg-cusblack rounded-full bottom-0 right-0",children:r.reduce((e,t)=>e+t.quantity,0)}):""]}),(0,s.jsx)(n(),{href:"/wishlist",children:(0,s.jsxs)("div",{className:"w-8 relative flex items-center h-8 mr-1 rounded-full hover:bg-gray-200 active:bg-gray-300 cursor-pointer duration-200",children:[(0,s.jsx)("svg",{className:"w-6 m-auto h-6 text-cusblack",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})}),m.length>0?(0,s.jsx)("div",{className:"flex\n                absolute text-xs font-light justify-center text-white text-center w-4 h-4 bg-cusblack rounded-full bottom-0 right-0",children:m.length}):""]})}),w&&(0,s.jsx)("div",{onClick:()=>e.push("/orders"),className:"w-8 relative flex items-center h-8 mr-1 rounded-full hover:bg-gray-200 active:bg-gray-300 cursor-pointer duration-200",children:(0,s.jsx)("svg",{className:"w-6 m-auto h-6 text-cusblack",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"})})}),(0,s.jsxs)("button",{onClick:()=>g(!v),className:"w-8 relative flex items-center h-8 rounded-full hover:bg-gray-200 active:bg-gray-300 cursor-pointer duration-200",children:[(0,s.jsx)("svg",{className:"w-6 m-auto h-6 text-cusblack",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})}),v&&(0,s.jsxs)("div",{className:"p-3 bg-white absolute top-11 leading-relaxed right-0 rounded-lg shadow-lg text-xs text-cusblack",children:[w&&(0,s.jsx)("div",{className:"bg-cusblack text-white p-3 rounded-lg",children:(0,s.jsxs)("ul",{className:"text-left w-28",children:[(0,s.jsx)("li",{className:"line-clamp-1",children:w.username}),(0,s.jsx)("li",{className:"line-clamp-1",children:w.email})]})}),w&&(0,s.jsxs)("div",{onClick:N,className:"hover:underline mt-2 flex place-items-center justify-end",children:[(0,s.jsx)("span",{children:(0,s.jsx)("svg",{className:"w-6 h-6 text-cusblack",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})})}),"Sign out"]}),!w&&(0,s.jsx)(n(),{href:"/login",children:(0,s.jsxs)("div",{className:"hover:underline flex place-items-center",children:[(0,s.jsx)("span",{children:(0,s.jsx)("svg",{className:"w-6 h-6 text-cusblack",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"})})})," ","Sign In"]})})]})]})]})]}),(0,s.jsx)(d,{handleOpen:y,isOpen:b})]})}},6616:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var s=r(5893),i=r(615);r(1538);var n=r(1664),o=r.n(n),a=r(7751),l=r(7530),c=r(9008),u=r.n(c);function d(){let e={initial:{opacity:0,y:400},animate:{opacity:1,y:0,transition:{ease:[.6,.01,-.05,.95],duration:1}},exit:{opacity:0,y:-40,transition:{ease:[.6,.01,-.05,.95],duration:1}}};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(u(),{children:(0,s.jsx)("title",{children:"ChiqueChick | Home"})}),(0,s.jsxs)("div",{className:"w-full h-screen relative",children:[(0,s.jsx)(l.Z,{}),(0,s.jsx)("div",{className:"absolute top-1/3 z-20 flex flex-col place-items-center w-full",children:(0,s.jsx)("div",{className:"",children:(0,s.jsxs)(a.E.div,{variants:{animate:{transition:{staggerChildren:.1}}},initial:"initial",animate:"animate",exit:"exit",className:"text-4xl md:text-6xl font-semibold text-white  overflow-hidden",children:[(0,s.jsx)("div",{className:"flex overflow-hidden",children:"ChiqueChick".split("").map((t,r)=>(0,s.jsx)(a.E.div,{variants:e,children:t},t+"-"+r))}),(0,s.jsx)(o(),{href:"/shop/",children:(0,s.jsxs)(a.E.p,{variants:e,className:"flex justify-center w-full place-items-center text-white underline mt-5 text-sm font-normal cursor-pointer",children:["Shop Now",(0,s.jsx)("span",{children:(0,s.jsx)("svg",{className:"w-4 h-4 ml-2",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",clipRule:"evenodd"})})})]})})]})})}),(0,s.jsxs)(a.E.div,{initial:{y:-1e3},transition:{ease:[.6,.01,-.05,.95],duration:1},animate:{y:0},className:"relative",children:[(0,s.jsx)("div",{className:"w-full h-screen bg-gray-500 bg-opacity-30 absolute top-0 z-10 pointer-events-none"}),(0,s.jsxs)(i.lr,{autoPlay:!0,infiniteLoop:!0,showStatus:!1,showArrows:!1,showThumbs:!1,transitionTime:500,interval:3e3,stopOnHover:!1,swipeable:!1,children:[(0,s.jsx)("div",{children:(0,s.jsx)("img",{className:"h-screen object-cover w-full",loading:"lazy",src:"https://i.ibb.co/pffTtVv/https-hypebeast-com-image-2018-12-these-are-the-best-sneakers-of-2018-005.jpg"})}),(0,s.jsx)("div",{children:(0,s.jsx)("img",{className:"h-screen object-cover w-full",loading:"lazy",src:"https://i.ibb.co/4YskC1T/c095795f992f84b92b16c65b93ecb5f5.jpg"})}),(0,s.jsx)("div",{children:(0,s.jsx)("img",{className:"h-screen object-cover w-full",loading:"lazy",src:"https://i.ibb.co/bvvFBPt/R.jpg"})})]})]})]})]})}},2286:function(e,t,r){"use strict";var s=this&&this.__assign||function(){return(s=Object.assign||function(e){for(var t,r=1,s=arguments.length;r<s;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.destroyCookie=t.setCookie=t.parseCookies=void 0;var i=r(6489),n=r(9328),o=r(1022);function a(e,t){var r,s;return(null===(s=null===(r=null==e?void 0:e.req)||void 0===r?void 0:r.headers)||void 0===s?void 0:s.cookie)?i.parse(e.req.headers.cookie,t):o.isBrowser()?i.parse(document.cookie,t):{}}function l(e,t,r,a){var l,c;if(void 0===a&&(a={}),(null===(l=null==e?void 0:e.res)||void 0===l?void 0:l.getHeader)&&e.res.setHeader){if(null===(c=null==e?void 0:e.res)||void 0===c?void 0:c.finished)return console.warn('Not setting "'+t+'" cookie. Response has finished.'),console.warn("You should set cookie before res.send()"),{};var u=e.res.getHeader("Set-Cookie")||[];"string"==typeof u&&(u=[u]),"number"==typeof u&&(u=[]);var d=n.parse(u,{decodeValues:!1}),h=o.createCookie(t,r,a),p=[];d.forEach(function(e){if(!o.areCookiesEqual(e,h)){var t=i.serialize(e.name,e.value,s({encode:function(e){return e}},e));p.push(t)}}),p.push(i.serialize(t,r,a)),e.res.setHeader("Set-Cookie",p)}if(o.isBrowser()){if(a&&a.httpOnly)throw Error("Can not set a httpOnly cookie in the browser.");document.cookie=i.serialize(t,r,a)}return{}}function c(e,t,r){return l(e,t,"",s(s({},r||{}),{maxAge:-1}))}t.parseCookies=a,t.setCookie=l,t.destroyCookie=c,t.default={set:l,get:a,destroy:c}},1022:function(e,t){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,r=1,s=arguments.length;r<s;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function s(e,t){var r=Object.getOwnPropertyNames(e),s=Object.getOwnPropertyNames(t);if(r.length!==s.length)return!1;for(var i=0;i<r.length;i++){var n=r[i];if(e[n]!==t[n])return!1}return!0}Object.defineProperty(t,"__esModule",{value:!0}),t.areCookiesEqual=t.hasSameProperties=t.createCookie=t.isBrowser=void 0,t.isBrowser=function(){return"undefined"!=typeof window},t.createCookie=function(e,t,s){var i=s.sameSite;!0===i&&(i="strict"),(void 0===i||!1===i)&&(i="lax");var n=r(r({},s),{sameSite:i});return delete n.encode,r({name:e,value:t},n)},t.hasSameProperties=s,t.areCookiesEqual=function(e,t){var i=e.sameSite===t.sameSite;return"string"==typeof e.sameSite&&"string"==typeof t.sameSite&&(i=e.sameSite.toLowerCase()===t.sameSite.toLowerCase()),s(r(r({},e),{sameSite:void 0}),r(r({},t),{sameSite:void 0}))&&i}},9328:function(e){"use strict";var t={decodeValues:!0,map:!1,silent:!1};function r(e){return"string"==typeof e&&!!e.trim()}function s(e,s){var i,n,o,a,l=e.split(";").filter(r),c=(i=l.shift(),n="",o="",(a=i.split("=")).length>1?(n=a.shift(),o=a.join("=")):o=i,{name:n,value:o}),u=c.name,d=c.value;s=s?Object.assign({},t,s):t;try{d=s.decodeValues?decodeURIComponent(d):d}catch(e){console.error("set-cookie-parser encountered an error while decoding a cookie with value '"+d+"'. Set options.decodeValues to false to disable this feature.",e)}var h={name:u,value:d};return l.forEach(function(e){var t=e.split("="),r=t.shift().trimLeft().toLowerCase(),s=t.join("=");"expires"===r?h.expires=new Date(s):"max-age"===r?h.maxAge=parseInt(s,10):"secure"===r?h.secure=!0:"httponly"===r?h.httpOnly=!0:"samesite"===r?h.sameSite=s:h[r]=s}),h}function i(e,i){if(i=i?Object.assign({},t,i):t,!e)return i.map?{}:[];if(e.headers){if("function"==typeof e.headers.getSetCookie)e=e.headers.getSetCookie();else if(e.headers["set-cookie"])e=e.headers["set-cookie"];else{var n=e.headers[Object.keys(e.headers).find(function(e){return"set-cookie"===e.toLowerCase()})];n||!e.headers.cookie||i.silent||console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."),e=n}}return(Array.isArray(e)||(e=[e]),(i=i?Object.assign({},t,i):t).map)?e.filter(r).reduce(function(e,t){var r=s(t,i);return e[r.name]=r,e},{}):e.filter(r).map(function(e){return s(e,i)})}e.exports=i,e.exports.parse=i,e.exports.parseString=s,e.exports.splitCookiesString=function(e){if(Array.isArray(e))return e;if("string"!=typeof e)return[];var t,r,s,i,n,o=[],a=0;function l(){for(;a<e.length&&/\s/.test(e.charAt(a));)a+=1;return a<e.length}for(;a<e.length;){for(t=a,n=!1;l();)if(","===(r=e.charAt(a))){for(s=a,a+=1,l(),i=a;a<e.length&&"="!==(r=e.charAt(a))&&";"!==r&&","!==r;)a+=1;a<e.length&&"="===e.charAt(a)?(n=!0,a=i,o.push(e.substring(t,s)),t=a):a=s+1}else a+=1;(!n||a>=e.length)&&o.push(e.substring(t,e.length))}return o}}},function(e){e.O(0,[242,624,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);