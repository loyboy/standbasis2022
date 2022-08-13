(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50],{

/***/ "./node_modules/apexcharts/dist/apexcharts.min.js":
/*!********************************************************!*\
  !*** ./node_modules/apexcharts/dist/apexcharts.min.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * ApexCharts v3.23.0
 * (c) 2018-2020 Juned Chhipa
 * Released under the MIT License.
 */
!function(t,e){ true?module.exports=e():undefined}(this,(function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function a(t,e,a){return e&&i(t.prototype,e),a&&i(t,a),t}function s(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function n(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){s(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,a=l(t);if(e){var s=l(this).constructor;i=Reflect.construct(a,arguments,s)}else i=a.apply(this,arguments);return c(this,i)}}function g(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return u(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,a=new Array(e);i<e;i++)a[i]=t[i];return a}var f=function(){function i(){e(this,i)}return a(i,[{key:"shadeRGBColor",value:function(t,e){var i=e.split(","),a=t<0?0:255,s=t<0?-1*t:t,r=parseInt(i[0].slice(4),10),n=parseInt(i[1],10),o=parseInt(i[2],10);return"rgb("+(Math.round((a-r)*s)+r)+","+(Math.round((a-n)*s)+n)+","+(Math.round((a-o)*s)+o)+")"}},{key:"shadeHexColor",value:function(t,e){var i=parseInt(e.slice(1),16),a=t<0?0:255,s=t<0?-1*t:t,r=i>>16,n=i>>8&255,o=255&i;return"#"+(16777216+65536*(Math.round((a-r)*s)+r)+256*(Math.round((a-n)*s)+n)+(Math.round((a-o)*s)+o)).toString(16).slice(1)}},{key:"shadeColor",value:function(t,e){return i.isColorHex(e)?this.shadeHexColor(t,e):this.shadeRGBColor(t,e)}}],[{key:"bind",value:function(t,e){return function(){return t.apply(e,arguments)}}},{key:"isObject",value:function(e){return e&&"object"===t(e)&&!Array.isArray(e)&&null!=e}},{key:"listToArray",value:function(t){var e,i=[];for(e=0;e<t.length;e++)i[e]=t[e];return i}},{key:"extend",value:function(t,e){var i=this;"function"!=typeof Object.assign&&(Object.assign=function(t){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),i=1;i<arguments.length;i++){var a=arguments[i];if(null!=a)for(var s in a)a.hasOwnProperty(s)&&(e[s]=a[s])}return e});var a=Object.assign({},t);return this.isObject(t)&&this.isObject(e)&&Object.keys(e).forEach((function(r){i.isObject(e[r])&&r in t?a[r]=i.extend(t[r],e[r]):Object.assign(a,s({},r,e[r]))})),a}},{key:"extendArray",value:function(t,e){var a=[];return t.map((function(t){a.push(i.extend(e,t))})),t=a}},{key:"monthMod",value:function(t){return t%12}},{key:"clone",value:function(e){if("[object Array]"===Object.prototype.toString.call(e)){for(var i=[],a=0;a<e.length;a++)i[a]=this.clone(e[a]);return i}if("[object Null]"===Object.prototype.toString.call(e))return null;if("[object Date]"===Object.prototype.toString.call(e))return e;if("object"===t(e)){var s={};for(var r in e)e.hasOwnProperty(r)&&(s[r]=this.clone(e[r]));return s}return e}},{key:"log10",value:function(t){return Math.log(t)/Math.LN10}},{key:"roundToBase10",value:function(t){return Math.pow(10,Math.floor(Math.log10(t)))}},{key:"roundToBase",value:function(t,e){return Math.pow(e,Math.floor(Math.log(t)/Math.log(e)))}},{key:"parseNumber",value:function(t){return null===t?t:parseFloat(t)}},{key:"randomId",value:function(){return(Math.random()+1).toString(36).substring(4)}},{key:"noExponents",value:function(t){var e=String(t).split(/[eE]/);if(1===e.length)return e[0];var i="",a=t<0?"-":"",s=e[0].replace(".",""),r=Number(e[1])+1;if(r<0){for(i=a+"0.";r++;)i+="0";return i+s.replace(/^-/,"")}for(r-=s.length;r--;)i+="0";return s+i}},{key:"getDimensions",value:function(t){var e=getComputedStyle(t,null),i=parseFloat(e.height);return[parseFloat(e.width),i]}},{key:"getBoundingClientRect",value:function(t){var e=t.getBoundingClientRect();return{top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:t.clientWidth,height:t.clientHeight,x:e.left,y:e.top}}},{key:"getLargestStringFromArr",value:function(t){return t.reduce((function(t,e){return Array.isArray(e)&&(e=e.reduce((function(t,e){return t.length>e.length?t:e}))),t.length>e.length?t:e}),0)}},{key:"hexToRgba",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#999999",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.6;"#"!==t.substring(0,1)&&(t="#999999");var i=t.replace("#","");i=i.match(new RegExp("(.{"+i.length/3+"})","g"));for(var a=0;a<i.length;a++)i[a]=parseInt(1===i[a].length?i[a]+i[a]:i[a],16);return void 0!==e&&i.push(e),"rgba("+i.join(",")+")"}},{key:"getOpacityFromRGBA",value:function(t){return parseFloat(t.replace(/^.*,(.+)\)/,"$1"))}},{key:"rgb2hex",value:function(t){return(t=t.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i))&&4===t.length?"#"+("0"+parseInt(t[1],10).toString(16)).slice(-2)+("0"+parseInt(t[2],10).toString(16)).slice(-2)+("0"+parseInt(t[3],10).toString(16)).slice(-2):""}},{key:"isColorHex",value:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)|(^#[0-9A-F]{8}$)/i.test(t)}},{key:"polarToCartesian",value:function(t,e,i,a){var s=(a-90)*Math.PI/180;return{x:t+i*Math.cos(s),y:e+i*Math.sin(s)}}},{key:"escapeString",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"x",i=t.toString().slice();return i=i.replace(/[` ~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\/]/gi,e)}},{key:"negToZero",value:function(t){return t<0?0:t}},{key:"moveIndexInArray",value:function(t,e,i){if(i>=t.length)for(var a=i-t.length+1;a--;)t.push(void 0);return t.splice(i,0,t.splice(e,1)[0]),t}},{key:"extractNumber",value:function(t){return parseFloat(t.replace(/[^\d.]*/g,""))}},{key:"findAncestor",value:function(t,e){for(;(t=t.parentElement)&&!t.classList.contains(e););return t}},{key:"setELstyles",value:function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t.style.key=e[i])}},{key:"isNumber",value:function(t){return!isNaN(t)&&parseFloat(Number(t))===t&&!isNaN(parseInt(t,10))}},{key:"isFloat",value:function(t){return Number(t)===t&&t%1!=0}},{key:"isSafari",value:function(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)}},{key:"isFirefox",value:function(){return navigator.userAgent.toLowerCase().indexOf("firefox")>-1}},{key:"isIE11",value:function(){if(-1!==window.navigator.userAgent.indexOf("MSIE")||window.navigator.appVersion.indexOf("Trident/")>-1)return!0}},{key:"isIE",value:function(){var t=window.navigator.userAgent,e=t.indexOf("MSIE ");if(e>0)return parseInt(t.substring(e+5,t.indexOf(".",e)),10);if(t.indexOf("Trident/")>0){var i=t.indexOf("rv:");return parseInt(t.substring(i+3,t.indexOf(".",i)),10)}var a=t.indexOf("Edge/");return a>0&&parseInt(t.substring(a+5,t.indexOf(".",a)),10)}}]),i}(),p=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w}return a(t,[{key:"getDefaultFilter",value:function(t,e){var i=this.w;t.unfilter(!0),(new window.SVG.Filter).size("120%","180%","-5%","-40%"),"none"!==i.config.states.normal.filter?this.applyFilter(t,e,i.config.states.normal.filter.type,i.config.states.normal.filter.value):i.config.chart.dropShadow.enabled&&this.dropShadow(t,i.config.chart.dropShadow,e)}},{key:"addNormalFilter",value:function(t,e){var i=this.w;i.config.chart.dropShadow.enabled&&!t.node.classList.contains("apexcharts-marker")&&this.dropShadow(t,i.config.chart.dropShadow,e)}},{key:"addLightenFilter",value:function(t,e,i){var a=this,s=this.w,r=i.intensity;t.unfilter(!0);new window.SVG.Filter;t.filter((function(t){var i=s.config.chart.dropShadow;(i.enabled?a.addShadow(t,e,i):t).componentTransfer({rgb:{type:"linear",slope:1.5,intercept:r}})})),t.filterer.node.setAttribute("filterUnits","userSpaceOnUse"),this._scaleFilterSize(t.filterer.node)}},{key:"addDarkenFilter",value:function(t,e,i){var a=this,s=this.w,r=i.intensity;t.unfilter(!0);new window.SVG.Filter;t.filter((function(t){var i=s.config.chart.dropShadow;(i.enabled?a.addShadow(t,e,i):t).componentTransfer({rgb:{type:"linear",slope:r}})})),t.filterer.node.setAttribute("filterUnits","userSpaceOnUse"),this._scaleFilterSize(t.filterer.node)}},{key:"applyFilter",value:function(t,e,i){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5;switch(i){case"none":this.addNormalFilter(t,e);break;case"lighten":this.addLightenFilter(t,e,{intensity:a});break;case"darken":this.addDarkenFilter(t,e,{intensity:a})}}},{key:"addShadow",value:function(t,e,i){var a=i.blur,s=i.top,r=i.left,n=i.color,o=i.opacity,l=t.flood(Array.isArray(n)?n[e]:n,o).composite(t.sourceAlpha,"in").offset(r,s).gaussianBlur(a).merge(t.source);return t.blend(t.source,l)}},{key:"dropShadow",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=e.top,s=e.left,r=e.blur,n=e.color,o=e.opacity,l=e.noUserSpaceOnUse,h=this.w;return t.unfilter(!0),f.isIE()&&"radialBar"===h.config.chart.type||(n=Array.isArray(n)?n[i]:n,t.filter((function(t){var e=null;e=f.isSafari()||f.isFirefox()||f.isIE()?t.flood(n,o).composite(t.sourceAlpha,"in").offset(s,a).gaussianBlur(r):t.flood(n,o).composite(t.sourceAlpha,"in").offset(s,a).gaussianBlur(r).merge(t.source),t.blend(t.source,e)})),l||t.filterer.node.setAttribute("filterUnits","userSpaceOnUse"),this._scaleFilterSize(t.filterer.node)),t}},{key:"setSelectionFilter",value:function(t,e,i){var a=this.w;if(void 0!==a.globals.selectedDataPoints[e]&&a.globals.selectedDataPoints[e].indexOf(i)>-1){t.node.setAttribute("selected",!0);var s=a.config.states.active.filter;"none"!==s&&this.applyFilter(t,e,s.type,s.value)}}},{key:"_scaleFilterSize",value:function(t){!function(e){for(var i in e)e.hasOwnProperty(i)&&t.setAttribute(i,e[i])}({width:"200%",height:"200%",x:"-50%",y:"-50%"})}}]),t}(),x=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w,this.setEasingFunctions()}return a(t,[{key:"setEasingFunctions",value:function(){var t;if(!this.w.globals.easing){switch(this.w.config.chart.animations.easing){case"linear":t="-";break;case"easein":t="<";break;case"easeout":t=">";break;case"easeinout":t="<>";break;case"swing":t=function(t){var e=1.70158;return(t-=1)*t*((e+1)*t+e)+1};break;case"bounce":t=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375};break;case"elastic":t=function(t){return t===!!t?t:Math.pow(2,-10*t)*Math.sin((t-.075)*(2*Math.PI)/.3)+1};break;default:t="<>"}this.w.globals.easing=t}}},{key:"animateLine",value:function(t,e,i,a){t.attr(e).animate(a).attr(i)}},{key:"animateCircleRadius",value:function(t,e,i,a,s,r){e||(e=0),t.attr({r:e}).animate(a,s).attr({r:i}).afterAll((function(){r()}))}},{key:"animateCircle",value:function(t,e,i,a,s){t.attr({r:e.r,cx:e.cx,cy:e.cy}).animate(a,s).attr({r:i.r,cx:i.cx,cy:i.cy})}},{key:"animateRect",value:function(t,e,i,a,s){t.attr(e).animate(a).attr(i).afterAll((function(){return s()}))}},{key:"animatePathsGradually",value:function(t){var e=t.el,i=t.realIndex,a=t.j,s=t.fill,r=t.pathFrom,n=t.pathTo,o=t.speed,l=t.delay,h=this.w,c=0;h.config.chart.animations.animateGradually.enabled&&(c=h.config.chart.animations.animateGradually.delay),h.config.chart.animations.dynamicAnimation.enabled&&h.globals.dataChanged&&"bar"!==h.config.chart.type&&(c=0),this.morphSVG(e,i,a,"line"!==h.config.chart.type||h.globals.comboCharts?s:"stroke",r,n,o,l*c)}},{key:"showDelayedElements",value:function(){this.w.globals.delayedElements.forEach((function(t){t.el.classList.remove("apexcharts-element-hidden")}))}},{key:"animationCompleted",value:function(t){var e=this.w;e.globals.animationEnded||(e.globals.animationEnded=!0,this.showDelayedElements(),"function"==typeof e.config.chart.events.animationEnd&&e.config.chart.events.animationEnd(this.ctx,{el:t,w:e}))}},{key:"morphSVG",value:function(t,e,i,a,s,r,n,o){var l=this,h=this.w;s||(s=t.attr("pathFrom")),r||(r=t.attr("pathTo"));var c=function(t){return"radar"===h.config.chart.type&&(n=1),"M 0 ".concat(h.globals.gridHeight)};(!s||s.indexOf("undefined")>-1||s.indexOf("NaN")>-1)&&(s=c()),(!r||r.indexOf("undefined")>-1||r.indexOf("NaN")>-1)&&(r=c()),h.globals.shouldAnimate||(n=1),t.plot(s).animate(1,h.globals.easing,o).plot(s).animate(n,h.globals.easing,o).plot(r).afterAll((function(){f.isNumber(i)?i===h.globals.series[h.globals.maxValsInArrayIndex].length-2&&h.globals.shouldAnimate&&l.animationCompleted(t):"none"!==a&&h.globals.shouldAnimate&&(!h.globals.comboCharts&&e===h.globals.series.length-1||h.globals.comboCharts)&&l.animationCompleted(t),l.showDelayedElements()}))}}]),t}(),b=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w}return a(t,[{key:"drawLine",value:function(t,e,i,a){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"#a8a8a8",r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,n=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,o=this.w,l=o.globals.dom.Paper.line().attr({x1:t,y1:e,x2:i,y2:a,stroke:s,"stroke-dasharray":r,"stroke-width":n});return l}},{key:"drawRect",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"#fefefe",n=arguments.length>6&&void 0!==arguments[6]?arguments[6]:1,o=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null,l=arguments.length>8&&void 0!==arguments[8]?arguments[8]:null,h=arguments.length>9&&void 0!==arguments[9]?arguments[9]:0,c=this.w,d=c.globals.dom.Paper.rect();return d.attr({x:t,y:e,width:i>0?i:0,height:a>0?a:0,rx:s,ry:s,opacity:n,"stroke-width":null!==o?o:0,stroke:null!==l?l:"none","stroke-dasharray":h}),d.node.setAttribute("fill",r),d}},{key:"drawPolygon",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#e1e1e1",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"none",s=this.w,r=s.globals.dom.Paper.polygon(t).attr({fill:a,stroke:e,"stroke-width":i});return r}},{key:"drawCircle",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=this.w,a=i.globals.dom.Paper.circle(2*t);return null!==e&&a.attr(e),a}},{key:"drawPath",value:function(t){var e=t.d,i=void 0===e?"":e,a=t.stroke,s=void 0===a?"#a8a8a8":a,r=t.strokeWidth,n=void 0===r?1:r,o=t.fill,l=t.fillOpacity,h=void 0===l?1:l,c=t.strokeOpacity,d=void 0===c?1:c,g=t.classes,u=t.strokeLinecap,f=void 0===u?null:u,p=t.strokeDashArray,x=void 0===p?0:p,b=this.w;return null===f&&(f=b.config.stroke.lineCap),(i.indexOf("undefined")>-1||i.indexOf("NaN")>-1)&&(i="M 0 ".concat(b.globals.gridHeight)),b.globals.dom.Paper.path(i).attr({fill:o,"fill-opacity":h,stroke:s,"stroke-opacity":d,"stroke-linecap":f,"stroke-width":n,"stroke-dasharray":x,class:g})}},{key:"group",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=this.w,i=e.globals.dom.Paper.group();return null!==t&&i.attr(t),i}},{key:"move",value:function(t,e){var i=["M",t,e].join(" ");return i}},{key:"line",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=null;return null===i?a=["L",t,e].join(" "):"H"===i?a=["H",t].join(" "):"V"===i&&(a=["V",e].join(" ")),a}},{key:"curve",value:function(t,e,i,a,s,r){var n=["C",t,e,i,a,s,r].join(" ");return n}},{key:"quadraticCurve",value:function(t,e,i,a){return["Q",t,e,i,a].join(" ")}},{key:"arc",value:function(t,e,i,a,s,r,n){var o=arguments.length>7&&void 0!==arguments[7]&&arguments[7],l="A";o&&(l="a");var h=[l,t,e,i,a,s,r,n].join(" ");return h}},{key:"renderPaths",value:function(t){var e,i=t.j,a=t.realIndex,s=t.pathFrom,r=t.pathTo,o=t.stroke,l=t.strokeWidth,h=t.strokeLinecap,c=t.fill,d=t.animationDelay,g=t.initialSpeed,u=t.dataChangeSpeed,f=t.className,b=t.shouldClipToGrid,m=void 0===b||b,v=t.bindEventsOnPaths,y=void 0===v||v,w=t.drawShadow,k=void 0===w||w,A=this.w,S=new p(this.ctx),C=new x(this.ctx),L=this.w.config.chart.animations.enabled,P=L&&this.w.config.chart.animations.dynamicAnimation.enabled,T=!!(L&&!A.globals.resized||P&&A.globals.dataChanged&&A.globals.shouldAnimate);T?e=s:(e=r,A.globals.animationEnded=!0);var z=A.config.stroke.dashArray,I=0;I=Array.isArray(z)?z[a]:A.config.stroke.dashArray;var M=this.drawPath({d:e,stroke:o,strokeWidth:l,fill:c,fillOpacity:1,classes:f,strokeLinecap:h,strokeDashArray:I});if(M.attr("index",a),m&&M.attr({"clip-path":"url(#gridRectMask".concat(A.globals.cuid,")")}),"none"!==A.config.states.normal.filter.type)S.getDefaultFilter(M,a);else if(A.config.chart.dropShadow.enabled&&k&&(!A.config.chart.dropShadow.enabledOnSeries||A.config.chart.dropShadow.enabledOnSeries&&-1!==A.config.chart.dropShadow.enabledOnSeries.indexOf(a))){var E=A.config.chart.dropShadow;S.dropShadow(M,E,a)}y&&(M.node.addEventListener("mouseenter",this.pathMouseEnter.bind(this,M)),M.node.addEventListener("mouseleave",this.pathMouseLeave.bind(this,M)),M.node.addEventListener("mousedown",this.pathMouseDown.bind(this,M))),M.attr({pathTo:r,pathFrom:s});var X={el:M,j:i,realIndex:a,pathFrom:s,pathTo:r,fill:c,strokeWidth:l,delay:d};return!L||A.globals.resized||A.globals.dataChanged?!A.globals.resized&&A.globals.dataChanged||C.showDelayedElements():C.animatePathsGradually(n(n({},X),{},{speed:g})),A.globals.dataChanged&&P&&T&&C.animatePathsGradually(n(n({},X),{},{speed:u})),M}},{key:"drawPattern",value:function(t,e,i){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"#a8a8a8",s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,r=this.w,n=r.globals.dom.Paper.pattern(e,i,(function(r){"horizontalLines"===t?r.line(0,0,i,0).stroke({color:a,width:s+1}):"verticalLines"===t?r.line(0,0,0,e).stroke({color:a,width:s+1}):"slantedLines"===t?r.line(0,0,e,i).stroke({color:a,width:s}):"squares"===t?r.rect(e,i).fill("none").stroke({color:a,width:s}):"circles"===t&&r.circle(e).fill("none").stroke({color:a,width:s})}));return n}},{key:"drawGradient",value:function(t,e,i,a,s){var r,n=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null,h=arguments.length>8&&void 0!==arguments[8]?arguments[8]:0,c=this.w;e.length<9&&0===e.indexOf("#")&&(e=f.hexToRgba(e,a)),i.length<9&&0===i.indexOf("#")&&(i=f.hexToRgba(i,s));var d=0,g=1,u=1,p=null;null!==o&&(d=void 0!==o[0]?o[0]/100:0,g=void 0!==o[1]?o[1]/100:1,u=void 0!==o[2]?o[2]/100:1,p=void 0!==o[3]?o[3]/100:null);var x=!("donut"!==c.config.chart.type&&"pie"!==c.config.chart.type&&"polarArea"!==c.config.chart.type&&"bubble"!==c.config.chart.type);if(r=null===l||0===l.length?c.globals.dom.Paper.gradient(x?"radial":"linear",(function(t){t.at(d,e,a),t.at(g,i,s),t.at(u,i,s),null!==p&&t.at(p,e,a)})):c.globals.dom.Paper.gradient(x?"radial":"linear",(function(t){(Array.isArray(l[h])?l[h]:l).forEach((function(e){t.at(e.offset/100,e.color,e.opacity)}))})),x){var b=c.globals.gridWidth/2,m=c.globals.gridHeight/2;"bubble"!==c.config.chart.type?r.attr({gradientUnits:"userSpaceOnUse",cx:b,cy:m,r:n}):r.attr({cx:.5,cy:.5,r:.8,fx:.2,fy:.2})}else"vertical"===t?r.from(0,0).to(0,1):"diagonal"===t?r.from(0,0).to(1,1):"horizontal"===t?r.from(0,1).to(1,1):"diagonal2"===t&&r.from(1,0).to(0,1);return r}},{key:"drawText",value:function(t){var e,i=t.x,a=t.y,s=t.text,r=t.textAnchor,n=t.fontSize,o=t.fontFamily,l=t.fontWeight,h=t.foreColor,c=t.opacity,d=t.cssClass,g=void 0===d?"":d,u=t.isPlainText,f=void 0===u||u,p=this.w;return void 0===s&&(s=""),r||(r="start"),h&&h.length||(h=p.config.chart.foreColor),o=o||p.config.chart.fontFamily,l=l||"regular",(e=Array.isArray(s)?p.globals.dom.Paper.text((function(t){for(var e=0;e<s.length;e++)0===e?t.tspan(s[e]):t.tspan(s[e]).newLine()})):f?p.globals.dom.Paper.plain(s):p.globals.dom.Paper.text((function(t){return t.tspan(s)}))).attr({x:i,y:a,"text-anchor":r,"dominant-baseline":"auto","font-size":n,"font-family":o,"font-weight":l,fill:h,class:"apexcharts-text "+g}),e.node.style.fontFamily=o,e.node.style.opacity=c,e}},{key:"drawMarker",value:function(t,e,i){t=t||0;var a=i.pSize||0,s=null;if("square"===i.shape){var r=void 0===i.pRadius?a/2:i.pRadius;null!==e&&a||(a=0,r=0);var n=1.2*a+r,o=this.drawRect(n,n,n,n,r);o.attr({x:t-n/2,y:e-n/2,cx:t,cy:e,class:i.class?i.class:"",fill:i.pointFillColor,"fill-opacity":i.pointFillOpacity?i.pointFillOpacity:1,stroke:i.pointStrokeColor,"stroke-width":i.pWidth?i.pWidth:0,"stroke-opacity":i.pointStrokeOpacity?i.pointStrokeOpacity:1}),s=o}else"circle"!==i.shape&&i.shape||(f.isNumber(e)||(a=0,e=0),s=this.drawCircle(a,{cx:t,cy:e,class:i.class?i.class:"",stroke:i.pointStrokeColor,fill:i.pointFillColor,"fill-opacity":i.pointFillOpacity?i.pointFillOpacity:1,"stroke-width":i.pWidth?i.pWidth:0,"stroke-opacity":i.pointStrokeOpacity?i.pointStrokeOpacity:1}));return s}},{key:"pathMouseEnter",value:function(t,e){var i=this.w,a=new p(this.ctx),s=parseInt(t.node.getAttribute("index"),10),r=parseInt(t.node.getAttribute("j"),10);if("function"==typeof i.config.chart.events.dataPointMouseEnter&&i.config.chart.events.dataPointMouseEnter(e,this.ctx,{seriesIndex:s,dataPointIndex:r,w:i}),this.ctx.events.fireEvent("dataPointMouseEnter",[e,this.ctx,{seriesIndex:s,dataPointIndex:r,w:i}]),("none"===i.config.states.active.filter.type||"true"!==t.node.getAttribute("selected"))&&"none"!==i.config.states.hover.filter.type&&"none"!==i.config.states.active.filter.type&&!i.globals.isTouchDevice){var n=i.config.states.hover.filter;a.applyFilter(t,s,n.type,n.value)}}},{key:"pathMouseLeave",value:function(t,e){var i=this.w,a=new p(this.ctx),s=parseInt(t.node.getAttribute("index"),10),r=parseInt(t.node.getAttribute("j"),10);"function"==typeof i.config.chart.events.dataPointMouseLeave&&i.config.chart.events.dataPointMouseLeave(e,this.ctx,{seriesIndex:s,dataPointIndex:r,w:i}),this.ctx.events.fireEvent("dataPointMouseLeave",[e,this.ctx,{seriesIndex:s,dataPointIndex:r,w:i}]),"none"!==i.config.states.active.filter.type&&"true"===t.node.getAttribute("selected")||"none"!==i.config.states.hover.filter.type&&a.getDefaultFilter(t,s)}},{key:"pathMouseDown",value:function(t,e){var i=this.w,a=new p(this.ctx),s=parseInt(t.node.getAttribute("index"),10),r=parseInt(t.node.getAttribute("j"),10),n="false";if("true"===t.node.getAttribute("selected")){if(t.node.setAttribute("selected","false"),i.globals.selectedDataPoints[s].indexOf(r)>-1){var o=i.globals.selectedDataPoints[s].indexOf(r);i.globals.selectedDataPoints[s].splice(o,1)}}else{if(!i.config.states.active.allowMultipleDataPointsSelection&&i.globals.selectedDataPoints.length>0){i.globals.selectedDataPoints=[];var l=i.globals.dom.Paper.select(".apexcharts-series path").members,h=i.globals.dom.Paper.select(".apexcharts-series circle, .apexcharts-series rect").members,c=function(t){Array.prototype.forEach.call(t,(function(t){t.node.setAttribute("selected","false"),a.getDefaultFilter(t,s)}))};c(l),c(h)}t.node.setAttribute("selected","true"),n="true",void 0===i.globals.selectedDataPoints[s]&&(i.globals.selectedDataPoints[s]=[]),i.globals.selectedDataPoints[s].push(r)}if("true"===n){var d=i.config.states.active.filter;"none"!==d&&a.applyFilter(t,s,d.type,d.value)}else"none"!==i.config.states.active.filter.type&&a.getDefaultFilter(t,s);"function"==typeof i.config.chart.events.dataPointSelection&&i.config.chart.events.dataPointSelection(e,this.ctx,{selectedDataPoints:i.globals.selectedDataPoints,seriesIndex:s,dataPointIndex:r,w:i}),e&&this.ctx.events.fireEvent("dataPointSelection",[e,this.ctx,{selectedDataPoints:i.globals.selectedDataPoints,seriesIndex:s,dataPointIndex:r,w:i}])}},{key:"rotateAroundCenter",value:function(t){var e=t.getBBox();return{x:e.x+e.width/2,y:e.y+e.height/2}}},{key:"getTextRects",value:function(t,e,i,a){var s=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],r=this.w,n=this.drawText({x:-200,y:-200,text:t,textAnchor:"start",fontSize:e,fontFamily:i,foreColor:"#fff",opacity:0});a&&n.attr("transform",a),r.globals.dom.Paper.add(n);var o=n.bbox();return s||(o=n.node.getBoundingClientRect()),n.remove(),{width:o.width,height:o.height}}},{key:"placeTextWithEllipsis",value:function(t,e,i){if("function"==typeof t.getComputedTextLength&&(t.textContent=e,e.length>0&&t.getComputedTextLength()>=i/.8)){for(var a=e.length-3;a>0;a-=3)if(t.getSubStringLength(0,a)<=i/.8)return void(t.textContent=e.substring(0,a)+"...");t.textContent="."}}}],[{key:"setAttrs",value:function(t,e){for(var i in e)e.hasOwnProperty(i)&&t.setAttribute(i,e[i])}}]),t}(),m=function(){function t(i){e(this,t),this.w=i.w,this.annoCtx=i}return a(t,[{key:"setOrientations",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=this.w;if("vertical"===t.label.orientation){var a=null!==e?e:0,s=i.globals.dom.baseEl.querySelector(".apexcharts-xaxis-annotations .apexcharts-xaxis-annotation-label[rel='".concat(a,"']"));if(null!==s){var r=s.getBoundingClientRect();s.setAttribute("x",parseFloat(s.getAttribute("x"))-r.height+4),"top"===t.label.position?s.setAttribute("y",parseFloat(s.getAttribute("y"))+r.width):s.setAttribute("y",parseFloat(s.getAttribute("y"))-r.width);var n=this.annoCtx.graphics.rotateAroundCenter(s),o=n.x,l=n.y;s.setAttribute("transform","rotate(-90 ".concat(o," ").concat(l,")"))}}}},{key:"addBackgroundToAnno",value:function(t,e){var i=this.w;if(!t||!e.label.text||e.label.text&&!e.label.text.trim())return null;var a=i.globals.dom.baseEl.querySelector(".apexcharts-grid").getBoundingClientRect(),s=t.getBoundingClientRect(),r=e.label.style.padding.left,n=e.label.style.padding.right,o=e.label.style.padding.top,l=e.label.style.padding.bottom;"vertical"===e.label.orientation&&(o=e.label.style.padding.left,l=e.label.style.padding.right,r=e.label.style.padding.top,n=e.label.style.padding.bottom);var h=s.left-a.left-r,c=s.top-a.top-o,d=this.annoCtx.graphics.drawRect(h-i.globals.barPadForNumericAxis,c,s.width+r+n,s.height+o+l,e.label.borderRadius,e.label.style.background,1,e.label.borderWidth,e.label.borderColor,0);return e.id&&d.node.classList.add(e.id),d}},{key:"annotationsBackground",value:function(){var t=this,e=this.w,i=function(i,a,s){var r=e.globals.dom.baseEl.querySelector(".apexcharts-".concat(s,"-annotations .apexcharts-").concat(s,"-annotation-label[rel='").concat(a,"']"));if(r){var n=r.parentNode,o=t.addBackgroundToAnno(r,i);o&&n.insertBefore(o.node,r)}};e.config.annotations.xaxis.map((function(t,e){i(t,e,"xaxis")})),e.config.annotations.yaxis.map((function(t,e){i(t,e,"yaxis")})),e.config.annotations.points.map((function(t,e){i(t,e,"point")}))}},{key:"getStringX",value:function(t){var e=this.w,i=t;e.config.xaxis.convertedCatToNumeric&&e.globals.categoryLabels.length&&(t=e.globals.categoryLabels.indexOf(t)+1);var a=e.globals.labels.indexOf(t),s=e.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g text:nth-child("+(a+1)+")");return s&&(i=parseFloat(s.getAttribute("x"))),i}}]),t}(),v=function(){function t(i){e(this,t),this.w=i.w,this.annoCtx=i,this.invertAxis=this.annoCtx.invertAxis}return a(t,[{key:"addXaxisAnnotation",value:function(t,e,i){var a=this.w,s=this.invertAxis?a.globals.minY:a.globals.minX,r=this.invertAxis?a.globals.maxY:a.globals.maxX,n=this.invertAxis?a.globals.yRange[0]:a.globals.xRange,o=(t.x-s)/(n/a.globals.gridWidth);this.annoCtx.inversedReversedAxis&&(o=(r-t.x)/(n/a.globals.gridWidth));var l=t.label.text;"category"!==a.config.xaxis.type&&!a.config.xaxis.convertedCatToNumeric||this.invertAxis||a.globals.dataFormatXNumeric||(o=this.annoCtx.helpers.getStringX(t.x));var h=t.strokeDashArray;if(f.isNumber(o)){if(null===t.x2||void 0===t.x2){var c=this.annoCtx.graphics.drawLine(o+t.offsetX,0+t.offsetY,o+t.offsetX,a.globals.gridHeight+t.offsetY,t.borderColor,h,t.borderWidth);e.appendChild(c.node),t.id&&c.node.classList.add(t.id)}else{var d=(t.x2-s)/(n/a.globals.gridWidth);if(this.annoCtx.inversedReversedAxis&&(d=(r-t.x2)/(n/a.globals.gridWidth)),"category"!==a.config.xaxis.type&&!a.config.xaxis.convertedCatToNumeric||this.invertAxis||a.globals.dataFormatXNumeric||(d=this.annoCtx.helpers.getStringX(t.x2)),d<o){var g=o;o=d,d=g}var u=this.annoCtx.graphics.drawRect(o+t.offsetX,0+t.offsetY,d-o,a.globals.gridHeight+t.offsetY,0,t.fillColor,t.opacity,1,t.borderColor,h);u.node.classList.add("apexcharts-annotation-rect"),u.attr("clip-path","url(#gridRectMask".concat(a.globals.cuid,")")),e.appendChild(u.node),t.id&&u.node.classList.add(t.id)}var p="top"===t.label.position?4:a.globals.gridHeight,x=this.annoCtx.graphics.getTextRects(l,parseFloat(t.label.style.fontSize)),b=this.annoCtx.graphics.drawText({x:o+t.label.offsetX,y:p+t.label.offsetY-("vertical"===t.label.orientation?"top"===t.label.position?x.width/2-12:-x.width/2:0),text:l,textAnchor:t.label.textAnchor,fontSize:t.label.style.fontSize,fontFamily:t.label.style.fontFamily,fontWeight:t.label.style.fontWeight,foreColor:t.label.style.color,cssClass:"apexcharts-xaxis-annotation-label ".concat(t.label.style.cssClass," ").concat(t.id?t.id:"")});b.attr({rel:i}),e.appendChild(b.node),this.annoCtx.helpers.setOrientations(t,i)}}},{key:"drawXAxisAnnotations",value:function(){var t=this,e=this.w,i=this.annoCtx.graphics.group({class:"apexcharts-xaxis-annotations"});return e.config.annotations.xaxis.map((function(e,a){t.addXaxisAnnotation(e,i.node,a)})),i}}]),t}(),y=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w}return a(t,[{key:"getStackedSeriesTotals",value:function(){var t=this.w,e=[];if(0===t.globals.series.length)return e;for(var i=0;i<t.globals.series[t.globals.maxValsInArrayIndex].length;i++){for(var a=0,s=0;s<t.globals.series.length;s++)void 0!==t.globals.series[s][i]&&(a+=t.globals.series[s][i]);e.push(a)}return t.globals.stackedSeriesTotals=e,e}},{key:"getSeriesTotalByIndex",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===t?this.w.config.series.reduce((function(t,e){return t+e}),0):this.w.globals.series[t].reduce((function(t,e){return t+e}),0)}},{key:"isSeriesNull",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return 0===(null===t?this.w.config.series.filter((function(t){return null!==t})):this.w.config.series[t].data.filter((function(t){return null!==t}))).length}},{key:"seriesHaveSameValues",value:function(t){return this.w.globals.series[t].every((function(t,e,i){return t===i[0]}))}},{key:"getCategoryLabels",value:function(t){var e=this.w,i=t.slice();return e.config.xaxis.convertedCatToNumeric&&(i=t.map((function(t,i){return e.config.xaxis.labels.formatter(t-e.globals.minX+1)}))),i}},{key:"getLargestSeries",value:function(){var t=this.w;t.globals.maxValsInArrayIndex=t.globals.series.map((function(t){return t.length})).indexOf(Math.max.apply(Math,t.globals.series.map((function(t){return t.length}))))}},{key:"getLargestMarkerSize",value:function(){var t=this.w,e=0;return t.globals.markers.size.forEach((function(t){e=Math.max(e,t)})),t.globals.markers.largestSize=e,e}},{key:"getSeriesTotals",value:function(){var t=this.w;t.globals.seriesTotals=t.globals.series.map((function(t,e){var i=0;if(Array.isArray(t))for(var a=0;a<t.length;a++)i+=t[a];else i+=t;return i}))}},{key:"getSeriesTotalsXRange",value:function(t,e){var i=this.w;return i.globals.series.map((function(a,s){for(var r=0,n=0;n<a.length;n++)i.globals.seriesX[s][n]>t&&i.globals.seriesX[s][n]<e&&(r+=a[n]);return r}))}},{key:"getPercentSeries",value:function(){var t=this.w;t.globals.seriesPercent=t.globals.series.map((function(e,i){var a=[];if(Array.isArray(e))for(var s=0;s<e.length;s++){var r=t.globals.stackedSeriesTotals[s],n=0;r&&(n=100*e[s]/r),a.push(n)}else{var o=100*e/t.globals.seriesTotals.reduce((function(t,e){return t+e}),0);a.push(o)}return a}))}},{key:"getCalculatedRatios",value:function(){var t,e,i,a,s=this.w.globals,r=[],n=0,o=[],l=.1,h=0;if(s.yRange=[],s.isMultipleYAxis)for(var c=0;c<s.minYArr.length;c++)s.yRange.push(Math.abs(s.minYArr[c]-s.maxYArr[c])),o.push(0);else s.yRange.push(Math.abs(s.minY-s.maxY));s.xRange=Math.abs(s.maxX-s.minX),s.zRange=Math.abs(s.maxZ-s.minZ);for(var d=0;d<s.yRange.length;d++)r.push(s.yRange[d]/s.gridHeight);if(e=s.xRange/s.gridWidth,i=Math.abs(s.initialMaxX-s.initialMinX)/s.gridWidth,t=s.yRange/s.gridWidth,a=s.xRange/s.gridHeight,(n=s.zRange/s.gridHeight*16)||(n=1),s.minY!==Number.MIN_VALUE&&0!==Math.abs(s.minY)&&(s.hasNegs=!0),s.isMultipleYAxis){o=[];for(var g=0;g<r.length;g++)o.push(-s.minYArr[g]/r[g])}else o.push(-s.minY/r[0]),s.minY!==Number.MIN_VALUE&&0!==Math.abs(s.minY)&&(l=-s.minY/t,h=s.minX/e);return{yRatio:r,invertedYRatio:t,zRatio:n,xRatio:e,initialXRatio:i,invertedXRatio:a,baseLineInvertedY:l,baseLineY:o,baseLineX:h}}},{key:"getLogSeries",value:function(t){var e=this,i=this.w;return i.globals.seriesLog=t.map((function(t,a){return i.config.yaxis[a]&&i.config.yaxis[a].logarithmic?t.map((function(t){return null===t?null:e.getLogVal(t,a)})):t})),i.globals.invalidLogScale?t:i.globals.seriesLog}},{key:"getLogVal",value:function(t,e){var i=this.w;return(Math.log(t)-Math.log(i.globals.minYArr[e]))/(Math.log(i.globals.maxYArr[e])-Math.log(i.globals.minYArr[e]))}},{key:"getLogYRatios",value:function(t){var e=this,i=this.w,a=this.w.globals;return a.yLogRatio=t.slice(),a.logYRange=a.yRange.map((function(t,s){if(i.config.yaxis[s]&&e.w.config.yaxis[s].logarithmic){var r,n=-Number.MAX_VALUE,o=Number.MIN_VALUE;return a.seriesLog.forEach((function(t,e){t.forEach((function(t){i.config.yaxis[e]&&i.config.yaxis[e].logarithmic&&(n=Math.max(t,n),o=Math.min(t,o))}))})),r=Math.pow(a.yRange[s],Math.abs(o-n)/a.yRange[s]),a.yLogRatio[s]=r/a.gridHeight,r}})),a.invalidLogScale?t.slice():a.yLogRatio}}],[{key:"checkComboSeries",value:function(t){var e=!1,i=0;return t.length&&void 0!==t[0].type&&(e=!0,t.forEach((function(t){"bar"!==t.type&&"column"!==t.type&&"candlestick"!==t.type||i++}))),{comboBarCount:i,comboCharts:e}}},{key:"extendArrayProps",value:function(t,e,i){return e.yaxis&&(e=t.extendYAxis(e,i)),e.annotations&&(e.annotations.yaxis&&(e=t.extendYAxisAnnotations(e)),e.annotations.xaxis&&(e=t.extendXAxisAnnotations(e)),e.annotations.points&&(e=t.extendPointAnnotations(e))),e}}]),t}(),w=function(){function t(i){e(this,t),this.w=i.w,this.annoCtx=i}return a(t,[{key:"addYaxisAnnotation",value:function(t,e,i){var a,s=this.w,r=t.strokeDashArray,n=this._getY1Y2("y1",t),o=t.label.text;if(null===t.y2||void 0===t.y2){var l=this.annoCtx.graphics.drawLine(0+t.offsetX,n+t.offsetY,this._getYAxisAnnotationWidth(t),n+t.offsetY,t.borderColor,r,t.borderWidth);e.appendChild(l.node),t.id&&l.node.classList.add(t.id)}else{if((a=this._getY1Y2("y2",t))>n){var h=n;n=a,a=h}var c=this.annoCtx.graphics.drawRect(0+t.offsetX,a+t.offsetY,this._getYAxisAnnotationWidth(t),n-a,0,t.fillColor,t.opacity,1,t.borderColor,r);c.node.classList.add("apexcharts-annotation-rect"),c.attr("clip-path","url(#gridRectMask".concat(s.globals.cuid,")")),e.appendChild(c.node),t.id&&c.node.classList.add(t.id)}var d="right"===t.label.position?s.globals.gridWidth:0,g=this.annoCtx.graphics.drawText({x:d+t.label.offsetX,y:(a||n)+t.label.offsetY-3,text:o,textAnchor:t.label.textAnchor,fontSize:t.label.style.fontSize,fontFamily:t.label.style.fontFamily,fontWeight:t.label.style.fontWeight,foreColor:t.label.style.color,cssClass:"apexcharts-yaxis-annotation-label ".concat(t.label.style.cssClass," ").concat(t.id?t.id:"")});g.attr({rel:i}),e.appendChild(g.node)}},{key:"_getY1Y2",value:function(t,e){var i,a="y1"===t?e.y:e.y2,s=this.w;if(this.annoCtx.invertAxis){var r=s.globals.labels.indexOf(a);s.config.xaxis.convertedCatToNumeric&&(r=s.globals.categoryLabels.indexOf(a));var n=s.globals.dom.baseEl.querySelector(".apexcharts-yaxis-texts-g text:nth-child("+(r+1)+")");n&&(i=parseFloat(n.getAttribute("y")))}else{var o;if(s.config.yaxis[e.yAxisIndex].logarithmic)o=(a=new y(this.annoCtx.ctx).getLogVal(a,e.yAxisIndex))/s.globals.yLogRatio[e.yAxisIndex];else o=(a-s.globals.minYArr[e.yAxisIndex])/(s.globals.yRange[e.yAxisIndex]/s.globals.gridHeight);i=s.globals.gridHeight-o,s.config.yaxis[e.yAxisIndex]&&s.config.yaxis[e.yAxisIndex].reversed&&(i=o)}return i}},{key:"_getYAxisAnnotationWidth",value:function(t){var e=this.w;e.globals.gridWidth;return(t.width.indexOf("%")>-1?e.globals.gridWidth*parseInt(t.width,10)/100:parseInt(t.width,10))+t.offsetX}},{key:"drawYAxisAnnotations",value:function(){var t=this,e=this.w,i=this.annoCtx.graphics.group({class:"apexcharts-yaxis-annotations"});return e.config.annotations.yaxis.map((function(e,a){t.addYaxisAnnotation(e,i.node,a)})),i}}]),t}(),k=function(){function t(i){e(this,t),this.w=i.w,this.annoCtx=i}return a(t,[{key:"addPointAnnotation",value:function(t,e,i){var a=this.w,s=0,r=0,n=0;this.annoCtx.invertAxis&&console.warn("Point annotation is not supported in horizontal bar charts.");var o,l=parseFloat(t.y);if("string"==typeof t.x){var h=a.globals.labels.indexOf(t.x);a.config.xaxis.convertedCatToNumeric&&(h=a.globals.categoryLabels.indexOf(t.x)),s=this.annoCtx.helpers.getStringX(t.x),null===t.y&&(l=a.globals.series[t.seriesIndex][h])}else s=(t.x-a.globals.minX)/(a.globals.xRange/a.globals.gridWidth);a.config.yaxis[t.yAxisIndex].logarithmic?o=(l=new y(this.annoCtx.ctx).getLogVal(l,t.yAxisIndex))/a.globals.yLogRatio[t.yAxisIndex]:o=(l-a.globals.minYArr[t.yAxisIndex])/(a.globals.yRange[t.yAxisIndex]/a.globals.gridHeight);if(r=a.globals.gridHeight-o-parseFloat(t.label.style.fontSize)-t.marker.size,n=a.globals.gridHeight-o,a.config.yaxis[t.yAxisIndex]&&a.config.yaxis[t.yAxisIndex].reversed&&(r=o+parseFloat(t.label.style.fontSize)+t.marker.size,n=o),f.isNumber(s)){var c={pSize:t.marker.size,pWidth:t.marker.strokeWidth,pointFillColor:t.marker.fillColor,pointStrokeColor:t.marker.strokeColor,shape:t.marker.shape,pRadius:t.marker.radius,class:"apexcharts-point-annotation-marker ".concat(t.marker.cssClass," ").concat(t.id?t.id:"")},d=this.annoCtx.graphics.drawMarker(s+t.marker.offsetX,n+t.marker.offsetY,c);e.appendChild(d.node);var g=t.label.text?t.label.text:"",u=this.annoCtx.graphics.drawText({x:s+t.label.offsetX,y:r+t.label.offsetY,text:g,textAnchor:t.label.textAnchor,fontSize:t.label.style.fontSize,fontFamily:t.label.style.fontFamily,fontWeight:t.label.style.fontWeight,foreColor:t.label.style.color,cssClass:"apexcharts-point-annotation-label ".concat(t.label.style.cssClass," ").concat(t.id?t.id:"")});if(u.attr({rel:i}),e.appendChild(u.node),t.customSVG.SVG){var p=this.annoCtx.graphics.group({class:"apexcharts-point-annotations-custom-svg "+t.customSVG.cssClass});p.attr({transform:"translate(".concat(s+t.customSVG.offsetX,", ").concat(r+t.customSVG.offsetY,")")}),p.node.innerHTML=t.customSVG.SVG,e.appendChild(p.node)}if(t.image.path){var x=t.image.width?t.image.width:20,b=t.image.height?t.image.height:20;this.annoCtx.addImage({x:s+t.image.offsetX-x/2,y:r+t.image.offsetY-b/2,width:x,height:b,path:t.image.path,appendTo:".apexcharts-point-annotations"})}}}},{key:"drawPointAnnotations",value:function(){var t=this,e=this.w,i=this.annoCtx.graphics.group({class:"apexcharts-point-annotations"});return e.config.annotations.points.map((function(e,a){t.addPointAnnotation(e,i.node,a)})),i}}]),t}();var A={name:"en",options:{months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],toolbar:{exportToSVG:"Download SVG",exportToPNG:"Download PNG",exportToCSV:"Download CSV",menu:"Menu",selection:"Selection",selectionZoom:"Selection Zoom",zoomIn:"Zoom In",zoomOut:"Zoom Out",pan:"Panning",reset:"Reset Zoom"}}},S=function(){function t(){e(this,t),this.yAxis={show:!0,showAlways:!1,showForNullSeries:!0,seriesName:void 0,opposite:!1,reversed:!1,logarithmic:!1,tickAmount:void 0,forceNiceScale:!1,max:void 0,min:void 0,floating:!1,decimalsInFloat:void 0,labels:{show:!0,minWidth:0,maxWidth:160,offsetX:0,offsetY:0,align:void 0,rotate:0,padding:20,style:{colors:[],fontSize:"11px",fontWeight:400,fontFamily:void 0,cssClass:""},formatter:void 0},axisBorder:{show:!1,color:"#e0e0e0",width:1,offsetX:0,offsetY:0},axisTicks:{show:!1,color:"#e0e0e0",width:6,offsetX:0,offsetY:0},title:{text:void 0,rotate:-90,offsetY:0,offsetX:0,style:{color:void 0,fontSize:"11px",fontWeight:900,fontFamily:void 0,cssClass:""}},tooltip:{enabled:!1,offsetX:0},crosshairs:{show:!0,position:"front",stroke:{color:"#b6b6b6",width:1,dashArray:0}}},this.pointAnnotation={x:0,y:null,yAxisIndex:0,seriesIndex:0,marker:{size:4,fillColor:"#fff",strokeWidth:2,strokeColor:"#333",shape:"circle",offsetX:0,offsetY:0,radius:2,cssClass:""},label:{borderColor:"#c2c2c2",borderWidth:1,borderRadius:2,text:void 0,textAnchor:"middle",offsetX:0,offsetY:0,style:{background:"#fff",color:void 0,fontSize:"11px",fontFamily:void 0,fontWeight:400,cssClass:"",padding:{left:5,right:5,top:2,bottom:2}}},customSVG:{SVG:void 0,cssClass:void 0,offsetX:0,offsetY:0},image:{path:void 0,width:20,height:20,offsetX:0,offsetY:0}},this.yAxisAnnotation={y:0,y2:null,strokeDashArray:1,fillColor:"#c2c2c2",borderColor:"#c2c2c2",borderWidth:1,opacity:.3,offsetX:0,offsetY:0,width:"100%",yAxisIndex:0,label:{borderColor:"#c2c2c2",borderWidth:1,borderRadius:2,text:void 0,textAnchor:"end",position:"right",offsetX:0,offsetY:-3,style:{background:"#fff",color:void 0,fontSize:"11px",fontFamily:void 0,fontWeight:400,cssClass:"",padding:{left:5,right:5,top:2,bottom:2}}}},this.xAxisAnnotation={x:0,x2:null,strokeDashArray:1,fillColor:"#c2c2c2",borderColor:"#c2c2c2",borderWidth:1,opacity:.3,offsetX:0,offsetY:0,label:{borderColor:"#c2c2c2",borderWidth:1,borderRadius:2,text:void 0,textAnchor:"middle",orientation:"vertical",position:"top",offsetX:0,offsetY:0,style:{background:"#fff",color:void 0,fontSize:"11px",fontFamily:void 0,fontWeight:400,cssClass:"",padding:{left:5,right:5,top:2,bottom:2}}}},this.text={x:0,y:0,text:"",textAnchor:"start",foreColor:void 0,fontSize:"13px",fontFamily:void 0,fontWeight:400,appendTo:".apexcharts-annotations",backgroundColor:"transparent",borderColor:"#c2c2c2",borderRadius:0,borderWidth:0,paddingLeft:4,paddingRight:4,paddingTop:2,paddingBottom:2}}return a(t,[{key:"init",value:function(){return{annotations:{position:"front",yaxis:[this.yAxisAnnotation],xaxis:[this.xAxisAnnotation],points:[this.pointAnnotation],texts:[],images:[],shapes:[]},chart:{animations:{enabled:!0,easing:"easeinout",speed:800,animateGradually:{delay:150,enabled:!0},dynamicAnimation:{enabled:!0,speed:350}},background:"transparent",locales:[A],defaultLocale:"en",dropShadow:{enabled:!1,enabledOnSeries:void 0,top:2,left:2,blur:4,color:"#000",opacity:.35},events:{animationEnd:void 0,beforeMount:void 0,mounted:void 0,updated:void 0,click:void 0,mouseMove:void 0,legendClick:void 0,markerClick:void 0,selection:void 0,dataPointSelection:void 0,dataPointMouseEnter:void 0,dataPointMouseLeave:void 0,beforeZoom:void 0,beforeResetZoom:void 0,zoomed:void 0,scrolled:void 0,brushScrolled:void 0},foreColor:"#373d3f",fontFamily:"Helvetica, Arial, sans-serif",height:"auto",parentHeightOffset:15,redrawOnParentResize:!0,redrawOnWindowResize:!0,id:void 0,group:void 0,offsetX:0,offsetY:0,selection:{enabled:!1,type:"x",fill:{color:"#24292e",opacity:.1},stroke:{width:1,color:"#24292e",opacity:.4,dashArray:3},xaxis:{min:void 0,max:void 0},yaxis:{min:void 0,max:void 0}},sparkline:{enabled:!1},brush:{enabled:!1,autoScaleYaxis:!0,target:void 0},stacked:!1,stackType:"normal",toolbar:{show:!0,offsetX:0,offsetY:0,tools:{download:!0,selection:!0,zoom:!0,zoomin:!0,zoomout:!0,pan:!0,reset:!0,customIcons:[]},export:{csv:{filename:void 0,columnDelimiter:",",headerCategory:"category",headerValue:"value",dateFormatter:function(t){return new Date(t).toDateString()}},png:{filename:void 0},svg:{filename:void 0}},autoSelected:"zoom"},type:"line",width:"100%",zoom:{enabled:!0,type:"x",autoScaleYaxis:!1,zoomedArea:{fill:{color:"#90CAF9",opacity:.4},stroke:{color:"#0D47A1",opacity:.4,width:1}}}},plotOptions:{area:{fillTo:"origin"},bar:{horizontal:!1,columnWidth:"70%",barHeight:"70%",distributed:!1,startingShape:"flat",endingShape:"flat",rangeBarOverlap:!0,rangeBarGroupRows:!1,colors:{ranges:[],backgroundBarColors:[],backgroundBarOpacity:1,backgroundBarRadius:0},dataLabels:{position:"top",maxItems:100,hideOverflowingLabels:!0,orientation:"horizontal"}},bubble:{minBubbleRadius:void 0,maxBubbleRadius:void 0},candlestick:{colors:{upward:"#00B746",downward:"#EF403C"},wick:{useFillColor:!0}},heatmap:{radius:2,enableShades:!0,shadeIntensity:.5,reverseNegativeShade:!1,distributed:!1,useFillColorAsStroke:!1,colorScale:{inverse:!1,ranges:[],min:void 0,max:void 0}},treemap:{enableShades:!0,shadeIntensity:.5,distributed:!1,reverseNegativeShade:!1,useFillColorAsStroke:!1,colorScale:{inverse:!1,ranges:[],min:void 0,max:void 0}},radialBar:{inverseOrder:!1,startAngle:0,endAngle:360,offsetX:0,offsetY:0,hollow:{margin:5,size:"50%",background:"transparent",image:void 0,imageWidth:150,imageHeight:150,imageOffsetX:0,imageOffsetY:0,imageClipped:!0,position:"front",dropShadow:{enabled:!1,top:0,left:0,blur:3,color:"#000",opacity:.5}},track:{show:!0,startAngle:void 0,endAngle:void 0,background:"#f2f2f2",strokeWidth:"97%",opacity:1,margin:5,dropShadow:{enabled:!1,top:0,left:0,blur:3,color:"#000",opacity:.5}},dataLabels:{show:!0,name:{show:!0,fontSize:"16px",fontFamily:void 0,fontWeight:600,color:void 0,offsetY:0,formatter:function(t){return t}},value:{show:!0,fontSize:"14px",fontFamily:void 0,fontWeight:400,color:void 0,offsetY:16,formatter:function(t){return t+"%"}},total:{show:!1,label:"Total",fontSize:"16px",fontWeight:600,fontFamily:void 0,color:void 0,formatter:function(t){return t.globals.seriesTotals.reduce((function(t,e){return t+e}),0)/t.globals.series.length+"%"}}}},pie:{customScale:1,offsetX:0,offsetY:0,startAngle:0,endAngle:360,expandOnClick:!0,dataLabels:{offset:0,minAngleToShowLabel:10},donut:{size:"65%",background:"transparent",labels:{show:!1,name:{show:!0,fontSize:"16px",fontFamily:void 0,fontWeight:600,color:void 0,offsetY:-10,formatter:function(t){return t}},value:{show:!0,fontSize:"20px",fontFamily:void 0,fontWeight:400,color:void 0,offsetY:10,formatter:function(t){return t}},total:{show:!1,showAlways:!1,label:"Total",fontSize:"16px",fontWeight:400,fontFamily:void 0,color:void 0,formatter:function(t){return t.globals.seriesTotals.reduce((function(t,e){return t+e}),0)}}}}},polarArea:{rings:{strokeWidth:1,strokeColor:"#e8e8e8"}},radar:{size:void 0,offsetX:0,offsetY:0,polygons:{strokeWidth:1,strokeColors:"#e8e8e8",connectorColors:"#e8e8e8",fill:{colors:void 0}}}},colors:void 0,dataLabels:{enabled:!0,enabledOnSeries:void 0,formatter:function(t){return null!==t?t:""},textAnchor:"middle",distributed:!1,offsetX:0,offsetY:0,style:{fontSize:"12px",fontFamily:void 0,fontWeight:600,colors:void 0},background:{enabled:!0,foreColor:"#fff",borderRadius:2,padding:4,opacity:.9,borderWidth:1,borderColor:"#fff",dropShadow:{enabled:!1,top:1,left:1,blur:1,color:"#000",opacity:.45}},dropShadow:{enabled:!1,top:1,left:1,blur:1,color:"#000",opacity:.45}},fill:{type:"solid",colors:void 0,opacity:.85,gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:void 0,inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,50,100],colorStops:[]},image:{src:[],width:void 0,height:void 0},pattern:{style:"squares",width:6,height:6,strokeWidth:2}},grid:{show:!0,borderColor:"#e0e0e0",strokeDashArray:0,position:"back",xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}},row:{colors:void 0,opacity:.5},column:{colors:void 0,opacity:.5},padding:{top:0,right:10,bottom:0,left:12}},labels:[],legend:{show:!0,showForSingleSeries:!1,showForNullSeries:!0,showForZeroSeries:!0,floating:!1,position:"bottom",horizontalAlign:"center",inverseOrder:!1,fontSize:"12px",fontFamily:void 0,fontWeight:400,width:void 0,height:void 0,formatter:void 0,tooltipHoverFormatter:void 0,offsetX:-20,offsetY:4,labels:{colors:void 0,useSeriesColors:!1},markers:{width:12,height:12,strokeWidth:0,fillColors:void 0,strokeColor:"#fff",radius:12,customHTML:void 0,offsetX:0,offsetY:0,onClick:void 0},itemMargin:{horizontal:5,vertical:2},onItemClick:{toggleDataSeries:!0},onItemHover:{highlightDataSeries:!0}},markers:{discrete:[],size:0,colors:void 0,strokeColors:"#fff",strokeWidth:2,strokeOpacity:.9,strokeDashArray:0,fillOpacity:1,shape:"circle",radius:2,offsetX:0,offsetY:0,onClick:void 0,onDblClick:void 0,showNullDataPoints:!0,hover:{size:void 0,sizeOffset:3}},noData:{text:void 0,align:"center",verticalAlign:"middle",offsetX:0,offsetY:0,style:{color:void 0,fontSize:"14px",fontFamily:void 0}},responsive:[],series:void 0,states:{normal:{filter:{type:"none",value:0}},hover:{filter:{type:"lighten",value:.1}},active:{allowMultipleDataPointsSelection:!1,filter:{type:"darken",value:.5}}},title:{text:void 0,align:"left",margin:5,offsetX:0,offsetY:0,floating:!1,style:{fontSize:"14px",fontWeight:900,fontFamily:void 0,color:void 0}},subtitle:{text:void 0,align:"left",margin:5,offsetX:0,offsetY:30,floating:!1,style:{fontSize:"12px",fontWeight:400,fontFamily:void 0,color:void 0}},stroke:{show:!0,curve:"smooth",lineCap:"butt",width:2,colors:void 0,dashArray:0},tooltip:{enabled:!0,enabledOnSeries:void 0,shared:!0,followCursor:!1,intersect:!1,inverseOrder:!1,custom:void 0,fillSeriesColor:!1,theme:"light",style:{fontSize:"12px",fontFamily:void 0},onDatasetHover:{highlightDataSeries:!1},x:{show:!0,format:"dd MMM",formatter:void 0},y:{formatter:void 0,title:{formatter:function(t){return t?t+": ":""}}},z:{formatter:void 0,title:"Size: "},marker:{show:!0,fillColors:void 0},items:{display:"flex"},fixed:{enabled:!1,position:"topRight",offsetX:0,offsetY:0}},xaxis:{type:"category",categories:[],convertedCatToNumeric:!1,sorted:!1,offsetX:0,offsetY:0,labels:{show:!0,rotate:-45,rotateAlways:!1,hideOverlappingLabels:!0,trim:!1,minHeight:void 0,maxHeight:120,showDuplicates:!0,style:{colors:[],fontSize:"12px",fontWeight:400,fontFamily:void 0,cssClass:""},offsetX:0,offsetY:0,format:void 0,formatter:void 0,datetimeUTC:!0,datetimeFormatter:{year:"yyyy",month:"MMM 'yy",day:"dd MMM",hour:"HH:mm",minute:"HH:mm:ss"}},axisBorder:{show:!0,color:"#e0e0e0",width:"100%",height:1,offsetX:0,offsetY:0},axisTicks:{show:!0,color:"#e0e0e0",height:6,offsetX:0,offsetY:0},tickAmount:void 0,tickPlacement:"on",min:void 0,max:void 0,range:void 0,floating:!1,position:"bottom",title:{text:void 0,offsetX:0,offsetY:0,style:{color:void 0,fontSize:"12px",fontWeight:900,fontFamily:void 0,cssClass:""}},crosshairs:{show:!0,width:1,position:"back",opacity:.9,stroke:{color:"#b6b6b6",width:1,dashArray:3},fill:{type:"solid",color:"#B1B9C4",gradient:{colorFrom:"#D8E3F0",colorTo:"#BED1E6",stops:[0,100],opacityFrom:.4,opacityTo:.5}},dropShadow:{enabled:!1,left:0,top:0,blur:1,opacity:.4}},tooltip:{enabled:!0,offsetY:0,formatter:void 0,style:{fontSize:"12px",fontFamily:void 0}}},yaxis:this.yAxis,theme:{mode:"light",palette:"palette1",monochrome:{enabled:!1,color:"#008FFB",shadeTo:"light",shadeIntensity:.65}}}}}]),t}(),C=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w,this.graphics=new b(this.ctx),this.w.globals.isBarHorizontal&&(this.invertAxis=!0),this.helpers=new m(this),this.xAxisAnnotations=new v(this),this.yAxisAnnotations=new w(this),this.pointsAnnotations=new k(this),this.w.globals.isBarHorizontal&&this.w.config.yaxis[0].reversed&&(this.inversedReversedAxis=!0),this.xDivision=this.w.globals.gridWidth/this.w.globals.dataPoints}return a(t,[{key:"drawAxesAnnotations",value:function(){var t=this.w;if(t.globals.axisCharts){for(var e=this.yAxisAnnotations.drawYAxisAnnotations(),i=this.xAxisAnnotations.drawXAxisAnnotations(),a=this.pointsAnnotations.drawPointAnnotations(),s=t.config.chart.animations.enabled,r=[e,i,a],n=[i.node,e.node,a.node],o=0;o<3;o++)t.globals.dom.elGraphical.add(r[o]),!s||t.globals.resized||t.globals.dataChanged||"scatter"!==t.config.chart.type&&"bubble"!==t.config.chart.type&&t.globals.dataPoints>1&&n[o].classList.add("apexcharts-element-hidden"),t.globals.delayedElements.push({el:n[o],index:0});this.helpers.annotationsBackground()}}},{key:"drawImageAnnos",value:function(){var t=this;this.w.config.annotations.images.map((function(e,i){t.addImage(e,i)}))}},{key:"drawTextAnnos",value:function(){var t=this;this.w.config.annotations.texts.map((function(e,i){t.addText(e,i)}))}},{key:"addXaxisAnnotation",value:function(t,e,i){this.xAxisAnnotations.addXaxisAnnotation(t,e,i)}},{key:"addYaxisAnnotation",value:function(t,e,i){this.yAxisAnnotations.addYaxisAnnotation(t,e,i)}},{key:"addPointAnnotation",value:function(t,e,i){this.pointsAnnotations.addPointAnnotation(t,e,i)}},{key:"addText",value:function(t,e){var i=t.x,a=t.y,s=t.text,r=t.textAnchor,n=t.foreColor,o=t.fontSize,l=t.fontFamily,h=t.fontWeight,c=t.cssClass,d=t.backgroundColor,g=t.borderWidth,u=t.strokeDashArray,f=t.borderRadius,p=t.borderColor,x=t.appendTo,b=void 0===x?".apexcharts-annotations":x,m=t.paddingLeft,v=void 0===m?4:m,y=t.paddingRight,w=void 0===y?4:y,k=t.paddingBottom,A=void 0===k?2:k,S=t.paddingTop,C=void 0===S?2:S,L=this.w,P=this.graphics.drawText({x:i,y:a,text:s,textAnchor:r||"start",fontSize:o||"12px",fontWeight:h||"regular",fontFamily:l||L.config.chart.fontFamily,foreColor:n||L.config.chart.foreColor,cssClass:c}),T=L.globals.dom.baseEl.querySelector(b);T&&T.appendChild(P.node);var z=P.bbox();if(s){var I=this.graphics.drawRect(z.x-v,z.y-C,z.width+v+w,z.height+A+C,f,d||"transparent",1,g,p,u);T.insertBefore(I.node,P.node)}}},{key:"addImage",value:function(t,e){var i=this.w,a=t.path,s=t.x,r=void 0===s?0:s,n=t.y,o=void 0===n?0:n,l=t.width,h=void 0===l?20:l,c=t.height,d=void 0===c?20:c,g=t.appendTo,u=void 0===g?".apexcharts-annotations":g,f=i.globals.dom.Paper.image(a);f.size(h,d).move(r,o);var p=i.globals.dom.baseEl.querySelector(u);p&&p.appendChild(f.node)}},{key:"addXaxisAnnotationExternal",value:function(t,e,i){return this.addAnnotationExternal({params:t,pushToMemory:e,context:i,type:"xaxis",contextMethod:i.addXaxisAnnotation}),i}},{key:"addYaxisAnnotationExternal",value:function(t,e,i){return this.addAnnotationExternal({params:t,pushToMemory:e,context:i,type:"yaxis",contextMethod:i.addYaxisAnnotation}),i}},{key:"addPointAnnotationExternal",value:function(t,e,i){return void 0===this.invertAxis&&(this.invertAxis=i.w.globals.isBarHorizontal),this.addAnnotationExternal({params:t,pushToMemory:e,context:i,type:"point",contextMethod:i.addPointAnnotation}),i}},{key:"addAnnotationExternal",value:function(t){var e=t.params,i=t.pushToMemory,a=t.context,s=t.type,r=t.contextMethod,n=a,o=n.w,l=o.globals.dom.baseEl.querySelector(".apexcharts-".concat(s,"-annotations")),h=l.childNodes.length+1,c=new S,d=Object.assign({},"xaxis"===s?c.xAxisAnnotation:"yaxis"===s?c.yAxisAnnotation:c.pointAnnotation),g=f.extend(d,e);switch(s){case"xaxis":this.addXaxisAnnotation(g,l,h);break;case"yaxis":this.addYaxisAnnotation(g,l,h);break;case"point":this.addPointAnnotation(g,l,h)}var u=o.globals.dom.baseEl.querySelector(".apexcharts-".concat(s,"-annotations .apexcharts-").concat(s,"-annotation-label[rel='").concat(h,"']")),p=this.helpers.addBackgroundToAnno(u,g);return p&&l.insertBefore(p.node,u),i&&o.globals.memory.methodsToExec.push({context:n,id:g.id?g.id:f.randomId(),method:r,label:"addAnnotation",params:e}),a}},{key:"clearAnnotations",value:function(t){var e=t.w,i=e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-annotations, .apexcharts-xaxis-annotations, .apexcharts-point-annotations");e.globals.memory.methodsToExec.map((function(t,i){"addText"!==t.label&&"addAnnotation"!==t.label||e.globals.memory.methodsToExec.splice(i,1)})),i=f.listToArray(i),Array.prototype.forEach.call(i,(function(t){for(;t.firstChild;)t.removeChild(t.firstChild)}))}},{key:"removeAnnotation",value:function(t,e){var i=t.w,a=i.globals.dom.baseEl.querySelectorAll(".".concat(e));a&&(i.globals.memory.methodsToExec.map((function(t,a){t.id===e&&i.globals.memory.methodsToExec.splice(a,1)})),Array.prototype.forEach.call(a,(function(t){t.parentElement.removeChild(t)})))}}]),t}(),L=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w,this.opts=null,this.seriesIndex=0}return a(t,[{key:"clippedImgArea",value:function(t){var e=this.w,i=e.config,a=parseInt(e.globals.gridWidth,10),s=parseInt(e.globals.gridHeight,10),r=a>s?a:s,n=t.image,o=0,l=0;void 0===t.width&&void 0===t.height?void 0!==i.fill.image.width&&void 0!==i.fill.image.height?(o=i.fill.image.width+1,l=i.fill.image.height):(o=r+1,l=r):(o=t.width,l=t.height);var h=document.createElementNS(e.globals.SVGNS,"pattern");b.setAttrs(h,{id:t.patternID,patternUnits:t.patternUnits?t.patternUnits:"userSpaceOnUse",width:o+"px",height:l+"px"});var c=document.createElementNS(e.globals.SVGNS,"image");h.appendChild(c),c.setAttributeNS(window.SVG.xlink,"href",n),b.setAttrs(c,{x:0,y:0,preserveAspectRatio:"none",width:o+"px",height:l+"px"}),c.style.opacity=t.opacity,e.globals.dom.elDefs.node.appendChild(h)}},{key:"getSeriesIndex",value:function(t){var e=this.w;return("bar"===e.config.chart.type||"rangeBar"===e.config.chart.type)&&e.config.plotOptions.bar.distributed||"heatmap"===e.config.chart.type||"treemap"===e.config.chart.type?this.seriesIndex=t.seriesNumber:this.seriesIndex=t.seriesNumber%e.globals.series.length,this.seriesIndex}},{key:"fillPath",value:function(t){var e=this.w;this.opts=t;var i,a,s,r=this.w.config;this.seriesIndex=this.getSeriesIndex(t);var n=this.getFillColors()[this.seriesIndex];void 0!==e.globals.seriesColors[this.seriesIndex]&&(n=e.globals.seriesColors[this.seriesIndex]),"function"==typeof n&&(n=n({seriesIndex:this.seriesIndex,dataPointIndex:t.dataPointIndex,value:t.value,w:e}));var o=this.getFillType(this.seriesIndex),l=Array.isArray(r.fill.opacity)?r.fill.opacity[this.seriesIndex]:r.fill.opacity;t.color&&(n=t.color);var h=n;if(-1===n.indexOf("rgb")?n.length<9&&(h=f.hexToRgba(n,l)):n.indexOf("rgba")>-1&&(l=f.getOpacityFromRGBA(n)),t.opacity&&(l=t.opacity),"pattern"===o&&(a=this.handlePatternFill(a,n,l,h)),"gradient"===o&&(s=this.handleGradientFill(n,l,this.seriesIndex)),"image"===o){var c=r.fill.image.src,d=t.patternID?t.patternID:"";this.clippedImgArea({opacity:l,image:Array.isArray(c)?t.seriesNumber<c.length?c[t.seriesNumber]:c[0]:c,width:t.width?t.width:void 0,height:t.height?t.height:void 0,patternUnits:t.patternUnits,patternID:"pattern".concat(e.globals.cuid).concat(t.seriesNumber+1).concat(d)}),i="url(#pattern".concat(e.globals.cuid).concat(t.seriesNumber+1).concat(d,")")}else i="gradient"===o?s:"pattern"===o?a:h;return t.solid&&(i=h),i}},{key:"getFillType",value:function(t){var e=this.w;return Array.isArray(e.config.fill.type)?e.config.fill.type[t]:e.config.fill.type}},{key:"getFillColors",value:function(){var t=this.w,e=t.config,i=this.opts,a=[];return t.globals.comboCharts?"line"===t.config.series[this.seriesIndex].type?Array.isArray(t.globals.stroke.colors)?a=t.globals.stroke.colors:a.push(t.globals.stroke.colors):Array.isArray(t.globals.fill.colors)?a=t.globals.fill.colors:a.push(t.globals.fill.colors):"line"===e.chart.type?Array.isArray(t.globals.stroke.colors)?a=t.globals.stroke.colors:a.push(t.globals.stroke.colors):Array.isArray(t.globals.fill.colors)?a=t.globals.fill.colors:a.push(t.globals.fill.colors),void 0!==i.fillColors&&(a=[],Array.isArray(i.fillColors)?a=i.fillColors.slice():a.push(i.fillColors)),a}},{key:"handlePatternFill",value:function(t,e,i,a){var s=this.w.config,r=this.opts,n=new b(this.ctx),o=void 0===s.fill.pattern.strokeWidth?Array.isArray(s.stroke.width)?s.stroke.width[this.seriesIndex]:s.stroke.width:Array.isArray(s.fill.pattern.strokeWidth)?s.fill.pattern.strokeWidth[this.seriesIndex]:s.fill.pattern.strokeWidth,l=e;Array.isArray(s.fill.pattern.style)?t=void 0!==s.fill.pattern.style[r.seriesNumber]?n.drawPattern(s.fill.pattern.style[r.seriesNumber],s.fill.pattern.width,s.fill.pattern.height,l,o,i):a:t=n.drawPattern(s.fill.pattern.style,s.fill.pattern.width,s.fill.pattern.height,l,o,i);return t}},{key:"handleGradientFill",value:function(t,e,i){var a,s=this.w.config,r=this.opts,n=new b(this.ctx),o=new f,l=s.fill.gradient.type,h=t,c=void 0===s.fill.gradient.opacityFrom?e:Array.isArray(s.fill.gradient.opacityFrom)?s.fill.gradient.opacityFrom[i]:s.fill.gradient.opacityFrom;h.indexOf("rgba")>-1&&(c=f.getOpacityFromRGBA(h));var d=void 0===s.fill.gradient.opacityTo?e:Array.isArray(s.fill.gradient.opacityTo)?s.fill.gradient.opacityTo[i]:s.fill.gradient.opacityTo;if(void 0===s.fill.gradient.gradientToColors||0===s.fill.gradient.gradientToColors.length)a="dark"===s.fill.gradient.shade?o.shadeColor(-1*parseFloat(s.fill.gradient.shadeIntensity),t.indexOf("rgb")>-1?f.rgb2hex(t):t):o.shadeColor(parseFloat(s.fill.gradient.shadeIntensity),t.indexOf("rgb")>-1?f.rgb2hex(t):t);else if(s.fill.gradient.gradientToColors[r.seriesNumber]){var g=s.fill.gradient.gradientToColors[r.seriesNumber];a=g,g.indexOf("rgba")>-1&&(d=f.getOpacityFromRGBA(g))}else a=t;if(s.fill.gradient.inverseColors){var u=h;h=a,a=u}return h.indexOf("rgb")>-1&&(h=f.rgb2hex(h)),a.indexOf("rgb")>-1&&(a=f.rgb2hex(a)),n.drawGradient(l,h,a,c,d,r.size,s.fill.gradient.stops,s.fill.gradient.colorStops,i)}}]),t}(),P=function(){function t(i,a){e(this,t),this.ctx=i,this.w=i.w}return a(t,[{key:"setGlobalMarkerSize",value:function(){var t=this.w;if(t.globals.markers.size=Array.isArray(t.config.markers.size)?t.config.markers.size:[t.config.markers.size],t.globals.markers.size.length>0){if(t.globals.markers.size.length<t.globals.series.length+1)for(var e=0;e<=t.globals.series.length;e++)void 0===t.globals.markers.size[e]&&t.globals.markers.size.push(t.globals.markers.size[0])}else t.globals.markers.size=t.config.series.map((function(e){return t.config.markers.size}))}},{key:"plotChartMarkers",value:function(t,e,i,a){var s,r=arguments.length>4&&void 0!==arguments[4]&&arguments[4],n=this.w,o=e,l=t,h=null,c=new b(this.ctx);if((n.globals.markers.size[e]>0||r)&&(h=c.group({class:r?"":"apexcharts-series-markers"})).attr("clip-path","url(#gridRectMarkerMask".concat(n.globals.cuid,")")),Array.isArray(l.x))for(var d=0;d<l.x.length;d++){var g=i;1===i&&0===d&&(g=0),1===i&&1===d&&(g=1);var u="apexcharts-marker";"line"!==n.config.chart.type&&"area"!==n.config.chart.type||n.globals.comboCharts||n.config.tooltip.intersect||(u+=" no-pointer-events");var x=Array.isArray(n.config.markers.size)?n.globals.markers.size[e]>0:n.config.markers.size>0;if(x||r){f.isNumber(l.y[d])?u+=" w".concat(f.randomId()):u="apexcharts-nullpoint";var m=this.getMarkerConfig(u,e,g);n.config.series[o].data[g]&&(n.config.series[o].data[g].fillColor&&(m.pointFillColor=n.config.series[o].data[g].fillColor),n.config.series[o].data[g].strokeColor&&(m.pointStrokeColor=n.config.series[o].data[g].strokeColor)),a&&(m.pSize=a),(s=c.drawMarker(l.x[d],l.y[d],m)).attr("rel",g),s.attr("j",g),s.attr("index",e),s.node.setAttribute("default-marker-size",m.pSize);var v=new p(this.ctx);v.setSelectionFilter(s,e,g),this.addEvents(s),h&&h.add(s)}else void 0===n.globals.pointsArray[e]&&(n.globals.pointsArray[e]=[]),n.globals.pointsArray[e].push([l.x[d],l.y[d]])}return h}},{key:"getMarkerConfig",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=this.w,s=this.getMarkerStyle(e),r=a.globals.markers.size[e],n=a.config.markers;return null!==i&&n.discrete.length&&n.discrete.map((function(t){t.seriesIndex===e&&t.dataPointIndex===i&&(s.pointStrokeColor=t.strokeColor,s.pointFillColor=t.fillColor,r=t.size)})),{pSize:r,pRadius:n.radius,pWidth:Array.isArray(n.strokeWidth)?n.strokeWidth[e]:n.strokeWidth,pointStrokeColor:s.pointStrokeColor,pointFillColor:s.pointFillColor,shape:Array.isArray(n.shape)?n.shape[e]:n.shape,class:t,pointStrokeOpacity:Array.isArray(n.strokeOpacity)?n.strokeOpacity[e]:n.strokeOpacity,pointStrokeDashArray:Array.isArray(n.strokeDashArray)?n.strokeDashArray[e]:n.strokeDashArray,pointFillOpacity:Array.isArray(n.fillOpacity)?n.fillOpacity[e]:n.fillOpacity,seriesIndex:e}}},{key:"addEvents",value:function(t){var e=this.w,i=new b(this.ctx);t.node.addEventListener("mouseenter",i.pathMouseEnter.bind(this.ctx,t)),t.node.addEventListener("mouseleave",i.pathMouseLeave.bind(this.ctx,t)),t.node.addEventListener("mousedown",i.pathMouseDown.bind(this.ctx,t)),t.node.addEventListener("click",e.config.markers.onClick),t.node.addEventListener("dblclick",e.config.markers.onDblClick),t.node.addEventListener("touchstart",i.pathMouseDown.bind(this.ctx,t),{passive:!0})}},{key:"getMarkerStyle",value:function(t){var e=this.w,i=e.globals.markers.colors,a=e.config.markers.strokeColor||e.config.markers.strokeColors;return{pointStrokeColor:Array.isArray(a)?a[t]:a,pointFillColor:Array.isArray(i)?i[t]:i}}}]),t}(),T=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w,this.initialAnim=this.w.config.chart.animations.enabled,this.dynamicAnim=this.initialAnim&&this.w.config.chart.animations.dynamicAnimation.enabled}return a(t,[{key:"draw",value:function(t,e,i){var a=this.w,s=new b(this.ctx),r=i.realIndex,n=i.pointsPos,o=i.zRatio,l=i.elParent,h=s.group({class:"apexcharts-series-markers apexcharts-series-".concat(a.config.chart.type)});if(h.attr("clip-path","url(#gridRectMarkerMask".concat(a.globals.cuid,")")),Array.isArray(n.x))for(var c=0;c<n.x.length;c++){var d=e+1,g=!0;0===e&&0===c&&(d=0),0===e&&1===c&&(d=1);var u=0,f=a.globals.markers.size[r];if(o!==1/0){f=a.globals.seriesZ[r][d]/o;var p=a.config.plotOptions.bubble;p.minBubbleRadius&&f<p.minBubbleRadius&&(f=p.minBubbleRadius),p.maxBubbleRadius&&f>p.maxBubbleRadius&&(f=p.maxBubbleRadius)}a.config.chart.animations.enabled||(u=f);var x=n.x[c],m=n.y[c];if(u=u||0,null!==m&&void 0!==a.globals.series[r][d]||(g=!1),g){var v=this.drawPoint(x,m,u,f,r,d,e);h.add(v)}l.add(h)}}},{key:"drawPoint",value:function(t,e,i,a,s,r,n){var o=this.w,l=s,h=new x(this.ctx),c=new p(this.ctx),d=new L(this.ctx),g=new P(this.ctx),u=new b(this.ctx),f=g.getMarkerConfig("apexcharts-marker",l),m=d.fillPath({seriesNumber:s,dataPointIndex:r,patternUnits:"objectBoundingBox",value:o.globals.series[s][n]}),v=u.drawCircle(i);if(o.config.series[l].data[r]&&o.config.series[l].data[r].fillColor&&(m=o.config.series[l].data[r].fillColor),v.attr({cx:t,cy:e,fill:m,stroke:f.pointStrokeColor,r:a,"stroke-width":f.pWidth,"stroke-dasharray":f.pointStrokeDashArray,"stroke-opacity":f.pointStrokeOpacity}),o.config.chart.dropShadow.enabled){var y=o.config.chart.dropShadow;c.dropShadow(v,y,s)}if(this.initialAnim&&!o.globals.dataChanged&&!o.globals.resized){var w=o.config.chart.animations.speed;h.animateCircleRadius(v,0,a,w,o.globals.easing,(function(){window.setTimeout((function(){h.animationCompleted(v)}),100)}))}if(o.globals.dataChanged)if(this.dynamicAnim){var k,A,S,C,T=o.config.chart.animations.dynamicAnimation.speed;null!=(C=o.globals.previousPaths[s]&&o.globals.previousPaths[s][n])&&(k=C.x,A=C.y,S=void 0!==C.r?C.r:a);for(var z=0;z<o.globals.collapsedSeries.length;z++)o.globals.collapsedSeries[z].index===s&&(T=1,a=0);0===t&&0===e&&(a=0),h.animateCircle(v,{cx:k,cy:A,r:S},{cx:t,cy:e,r:a},T,o.globals.easing)}else v.attr({r:a});return v.attr({rel:r,j:r,index:s,"default-marker-size":a}),c.setSelectionFilter(v,s,r),g.addEvents(v),v.node.classList.add("apexcharts-marker"),v}},{key:"centerTextInBubble",value:function(t){var e=this.w;return{y:t+=parseInt(e.config.dataLabels.style.fontSize,10)/4}}}]),t}(),z=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w}return a(t,[{key:"dataLabelsCorrection",value:function(t,e,i,a,s,r,n){var o=this.w,l=!1,h=new b(this.ctx).getTextRects(i,n),c=h.width,d=h.height;void 0===o.globals.dataLabelsRects[a]&&(o.globals.dataLabelsRects[a]=[]),o.globals.dataLabelsRects[a].push({x:t,y:e,width:c,height:d});var g=o.globals.dataLabelsRects[a].length-2,u=void 0!==o.globals.lastDrawnDataLabelsIndexes[a]?o.globals.lastDrawnDataLabelsIndexes[a][o.globals.lastDrawnDataLabelsIndexes[a].length-1]:0;if(void 0!==o.globals.dataLabelsRects[a][g]){var f=o.globals.dataLabelsRects[a][u];(t>f.x+f.width+2||e>f.y+f.height+2||t+c<f.x)&&(l=!0)}return(0===s||r)&&(l=!0),{x:t,y:e,textRects:h,drawnextLabel:l}}},{key:"drawDataLabel",value:function(t,e,i){var a=this,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:2,r=this.w,n=new b(this.ctx),o=r.config.dataLabels,l=0,h=0,c=i,d=null;if(!o.enabled||!Array.isArray(t.x))return d;d=n.group({class:"apexcharts-data-labels"});for(var g=0;g<t.x.length;g++)if(l=t.x[g]+o.offsetX,h=t.y[g]+o.offsetY+s,!isNaN(l)){1===i&&0===g&&(c=0),1===i&&1===g&&(c=1);var u=r.globals.series[e][c],f="",p=function(t){return r.config.dataLabels.formatter(t,{ctx:a.ctx,seriesIndex:e,dataPointIndex:c,w:r})};if("bubble"===r.config.chart.type){f=p(u=r.globals.seriesZ[e][c]),h=t.y[g];var x=new T(this.ctx),m=x.centerTextInBubble(h,e,c);h=m.y}else void 0!==u&&(f=p(u));this.plotDataLabelsText({x:l,y:h,text:f,i:e,j:c,parent:d,offsetCorrection:!0,dataLabelsConfig:r.config.dataLabels})}return d}},{key:"plotDataLabelsText",value:function(t){var e=this.w,i=new b(this.ctx),a=t.x,s=t.y,r=t.i,n=t.j,o=t.text,l=t.textAnchor,h=t.fontSize,c=t.parent,d=t.dataLabelsConfig,g=t.color,u=t.alwaysDrawDataLabel,f=t.offsetCorrection;if(!(Array.isArray(e.config.dataLabels.enabledOnSeries)&&e.config.dataLabels.enabledOnSeries.indexOf(r)<0)){var x={x:a,y:s,drawnextLabel:!0};f&&(x=this.dataLabelsCorrection(a,s,o,r,n,u,parseInt(d.style.fontSize,10))),e.globals.zoomed||(a=x.x,s=x.y),x.textRects;var m=e.globals.dataLabels.style.colors[r];(("bar"===e.config.chart.type||"rangeBar"===e.config.chart.type)&&e.config.plotOptions.bar.distributed||e.config.dataLabels.distributed)&&(m=e.globals.dataLabels.style.colors[n]),g&&(m=g);var v=d.offsetX,y=d.offsetY;if("bar"!==e.config.chart.type&&"rangeBar"!==e.config.chart.type||(v=0,y=0),x.drawnextLabel){var w=i.drawText({width:100,height:parseInt(d.style.fontSize,10),x:a+v,y:s+y,foreColor:m,textAnchor:l||d.textAnchor,text:o,fontSize:h||d.style.fontSize,fontFamily:d.style.fontFamily,fontWeight:d.style.fontWeight||"normal"});if(w.attr({class:"apexcharts-datalabel",cx:a,cy:s}),d.dropShadow.enabled){var k=d.dropShadow;new p(this.ctx).dropShadow(w,k)}c.add(w),void 0===e.globals.lastDrawnDataLabelsIndexes[r]&&(e.globals.lastDrawnDataLabelsIndexes[r]=[]),e.globals.lastDrawnDataLabelsIndexes[r].push(n)}}}},{key:"addBackgroundToDataLabel",value:function(t,e){var i=this.w,a=i.config.dataLabels.background,s=a.padding,r=a.padding/2,n=e.width,o=e.height,l=new b(this.ctx).drawRect(e.x-s,e.y-r/2,n+2*s,o+r,a.borderRadius,"transparent"===i.config.chart.background?"#fff":i.config.chart.background,a.opacity,a.borderWidth,a.borderColor);a.dropShadow.enabled&&new p(this.ctx).dropShadow(l,a.dropShadow);return l}},{key:"dataLabelsBackground",value:function(){var t=this.w;if("bubble"!==t.config.chart.type)for(var e=t.globals.dom.baseEl.querySelectorAll(".apexcharts-datalabels text"),i=0;i<e.length;i++){var a=e[i],s=a.getBBox(),r=null;if(s.width&&s.height&&(r=this.addBackgroundToDataLabel(a,s)),r){a.parentNode.insertBefore(r.node,a);var n=a.getAttribute("fill");t.config.chart.animations.enabled&&!t.globals.resized&&!t.globals.dataChanged?r.animate().attr({fill:n}):r.attr({fill:n}),a.setAttribute("fill",t.config.dataLabels.background.foreColor)}}}},{key:"bringForward",value:function(){for(var t=this.w,e=t.globals.dom.baseEl.querySelectorAll(".apexcharts-datalabels"),i=t.globals.dom.baseEl.querySelector(".apexcharts-plot-series:last-child"),a=0;a<e.length;a++)i&&i.insertBefore(e[a],i.nextSibling)}}]),t}(),I=function(){function t(i){e(this,t),this.w=i.w,this.barCtx=i}return a(t,[{key:"handleBarDataLabels",value:function(t){var e=t.x,i=t.y,a=t.y1,s=t.y2,r=t.i,n=t.j,o=t.realIndex,l=t.series,h=t.barHeight,c=t.barWidth,d=t.barYPosition,g=t.visibleSeries,u=t.renderedPath,f=this.w,p=new b(this.barCtx.ctx),x=Array.isArray(this.barCtx.strokeWidth)?this.barCtx.strokeWidth[o]:this.barCtx.strokeWidth,m=e+parseFloat(c*g),v=i+parseFloat(h*g);f.globals.isXNumeric&&!f.globals.isBarHorizontal&&(m=e+parseFloat(c*(g+1)),v=i+parseFloat(h*(g+1))-x);var y=e,w=i,k={},A=f.config.dataLabels,S=this.barCtx.barOptions.dataLabels;void 0!==d&&this.barCtx.isTimelineBar&&(v=d,w=d);var C=A.offsetX,L=A.offsetY,P={width:0,height:0};if(f.config.dataLabels.enabled){var T=this.barCtx.series[r][n];P=p.getTextRects(f.globals.yLabelFormatters[0](T),parseFloat(A.style.fontSize))}var z={x:e,y:i,i:r,j:n,renderedPath:u,bcx:m,bcy:v,barHeight:h,barWidth:c,textRects:P,strokeWidth:x,dataLabelsX:y,dataLabelsY:w,barDataLabelsConfig:S,offX:C,offY:L};return k=this.barCtx.isHorizontal?this.calculateBarsDataLabelsPosition(z):this.calculateColumnsDataLabelsPosition(z),u.attr({cy:k.bcy,cx:k.bcx,j:n,val:l[r][n],barHeight:h,barWidth:c}),this.drawCalculatedDataLabels({x:k.dataLabelsX,y:k.dataLabelsY,val:this.barCtx.isTimelineBar?[a,s]:l[r][n],i:o,j:n,barWidth:c,barHeight:h,textRects:P,dataLabelsConfig:A})}},{key:"calculateColumnsDataLabelsPosition",value:function(t){var e,i=this.w,a=t.i,s=t.j,r=t.y,n=t.bcx,o=t.barWidth,l=t.barHeight,h=t.textRects,c=t.dataLabelsY,d=t.barDataLabelsConfig,g=t.strokeWidth,u=t.offX,f=t.offY;l=Math.abs(l);var p="vertical"===i.config.plotOptions.bar.dataLabels.orientation;n-=g/2;var x=i.globals.gridWidth/i.globals.dataPoints;if(e=i.globals.isXNumeric?n-o/2+u:n-x+o/2+u,p){e=e+h.height/2-g/2-2}var b=this.barCtx.series[a][s]<0,m=r;switch(this.barCtx.isReversed&&(m=r-l+(b?2*l:0),r-=l),d.position){case"center":c=p?b?m+l/2+f:m+l/2-f:b?m-l/2+h.height/2+f:m+l/2+h.height/2-f;break;case"bottom":c=p?b?m+l+f:m+l-f:b?m-l+h.height+g+f:m+l-h.height/2+g-f;break;case"top":c=p?b?m+f:m-f:b?m-h.height/2-f:m+h.height+f}return i.config.chart.stacked||(c<0?c=0+g:c+h.height/3>i.globals.gridHeight&&(c=i.globals.gridHeight-g)),{bcx:n,bcy:r,dataLabelsX:e,dataLabelsY:c}}},{key:"calculateBarsDataLabelsPosition",value:function(t){var e=this.w,i=t.x,a=t.i,s=t.j,r=t.bcy,n=t.barHeight,o=t.barWidth,l=t.textRects,h=t.dataLabelsX,c=t.strokeWidth,d=t.barDataLabelsConfig,g=t.offX,u=t.offY,f=e.globals.gridHeight/e.globals.dataPoints;o=Math.abs(o);var p=r-(this.barCtx.isTimelineBar?0:f)+n/2+l.height/2+u-3,x=this.barCtx.series[a][s]<0,b=i;switch(this.barCtx.isReversed&&(b=i+o-(x?2*o:0),i=e.globals.gridWidth-o),d.position){case"center":h=x?b+o/2-g:Math.max(l.width/2,b-o/2)+g;break;case"bottom":h=x?b+o-c-Math.round(l.width/2)-g:b-o+c+Math.round(l.width/2)+g;break;case"top":h=x?b-c+Math.round(l.width/2)-g:b-c-Math.round(l.width/2)+g}return e.config.chart.stacked||(h<0?h=h+l.width+c:h+l.width/2>e.globals.gridWidth&&(h=e.globals.gridWidth-l.width-c)),{bcx:i,bcy:r,dataLabelsX:h,dataLabelsY:p}}},{key:"drawCalculatedDataLabels",value:function(t){var e=t.x,i=t.y,a=t.val,s=t.i,r=t.j,o=t.textRects,l=t.barHeight,h=t.barWidth,c=t.dataLabelsConfig,d=this.w,g="rotate(0)";"vertical"===d.config.plotOptions.bar.dataLabels.orientation&&(g="rotate(-90, ".concat(e,", ").concat(i,")"));var u=new z(this.barCtx.ctx),f=new b(this.barCtx.ctx),p=c.formatter,x=null,m=d.globals.collapsedSeriesIndices.indexOf(s)>-1;if(c.enabled&&!m){x=f.group({class:"apexcharts-data-labels",transform:g});var v="";void 0!==a&&(v=p(a,{seriesIndex:s,dataPointIndex:r,w:d})),0===a&&d.config.chart.stacked&&(v="");var y=d.globals.series[s][r]<=0,w=d.config.plotOptions.bar.dataLabels.position;if("vertical"===d.config.plotOptions.bar.dataLabels.orientation&&("top"===w&&(c.textAnchor=y?"end":"start"),"center"===w&&(c.textAnchor="middle"),"bottom"===w&&(c.textAnchor=y?"end":"start")),this.barCtx.isTimelineBar&&this.barCtx.barOptions.dataLabels.hideOverflowingLabels)h<f.getTextRects(v,parseFloat(c.style.fontSize)).width&&(v="");d.config.chart.stacked&&this.barCtx.barOptions.dataLabels.hideOverflowingLabels&&(this.barCtx.isHorizontal?(h>0&&o.width/1.6>h||h<0&&o.width/1.6<h)&&(v=""):o.height/1.6>l&&(v=""));var k=n({},c);this.barCtx.isHorizontal&&a<0&&("start"===c.textAnchor?k.textAnchor="end":"end"===c.textAnchor&&(k.textAnchor="start")),u.plotDataLabelsText({x:e,y:i,text:v,i:s,j:r,parent:x,dataLabelsConfig:k,alwaysDrawDataLabel:!0,offsetCorrection:!0})}return x}}]),t}(),M=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w,this.legendInactiveClass="legend-mouseover-inactive"}return a(t,[{key:"getAllSeriesEls",value:function(){return this.w.globals.dom.baseEl.getElementsByClassName("apexcharts-series")}},{key:"getSeriesByName",value:function(t){return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner .apexcharts-series[seriesName='".concat(f.escapeString(t),"']"))}},{key:"isSeriesHidden",value:function(t){var e=this.getSeriesByName(t),i=parseInt(e.getAttribute("data:realIndex"),10);return{isHidden:e.classList.contains("apexcharts-series-collapsed"),realIndex:i}}},{key:"addCollapsedClassToSeries",value:function(t,e){var i=this.w;function a(i){for(var a=0;a<i.length;a++)i[a].index===e&&t.node.classList.add("apexcharts-series-collapsed")}a(i.globals.collapsedSeries),a(i.globals.ancillaryCollapsedSeries)}},{key:"toggleSeries",value:function(t){var e=this.isSeriesHidden(t);return this.ctx.legend.legendHelpers.toggleDataSeries(e.realIndex,e.isHidden),e.isHidden}},{key:"showSeries",value:function(t){var e=this.isSeriesHidden(t);e.isHidden&&this.ctx.legend.legendHelpers.toggleDataSeries(e.realIndex,!0)}},{key:"hideSeries",value:function(t){var e=this.isSeriesHidden(t);e.isHidden||this.ctx.legend.legendHelpers.toggleDataSeries(e.realIndex,!1)}},{key:"resetSeries",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=this.w,s=f.clone(a.globals.initialSeries);a.globals.previousPaths=[],i?(a.globals.collapsedSeries=[],a.globals.ancillaryCollapsedSeries=[],a.globals.collapsedSeriesIndices=[],a.globals.ancillaryCollapsedSeriesIndices=[]):s=this.emptyCollapsedSeries(s),a.config.series=s,t&&(e&&(a.globals.zoomed=!1,this.ctx.updateHelpers.revertDefaultAxisMinMax()),this.ctx.updateHelpers._updateSeries(s,a.config.chart.animations.dynamicAnimation.enabled))}},{key:"emptyCollapsedSeries",value:function(t){for(var e=this.w,i=0;i<t.length;i++)e.globals.collapsedSeriesIndices.indexOf(i)>-1&&(t[i].data=[]);return t}},{key:"toggleSeriesOnHover",value:function(t,e){var i=this.w,a=i.globals.dom.baseEl.querySelectorAll(".apexcharts-series, .apexcharts-datalabels");if("mousemove"===t.type){var s=parseInt(e.getAttribute("rel"),10)-1,r=null,n=null;i.globals.axisCharts||"radialBar"===i.config.chart.type?i.globals.axisCharts?(r=i.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(s,"']")),n=i.globals.dom.baseEl.querySelector(".apexcharts-datalabels[data\\:realIndex='".concat(s,"']"))):r=i.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(s+1,"']")):r=i.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(s+1,"'] path"));for(var o=0;o<a.length;o++)a[o].classList.add(this.legendInactiveClass);null!==r&&(i.globals.axisCharts||r.parentNode.classList.remove(this.legendInactiveClass),r.classList.remove(this.legendInactiveClass),null!==n&&n.classList.remove(this.legendInactiveClass))}else if("mouseout"===t.type)for(var l=0;l<a.length;l++)a[l].classList.remove(this.legendInactiveClass)}},{key:"highlightRangeInSeries",value:function(t,e){var i=this,a=this.w,s=a.globals.dom.baseEl.getElementsByClassName("apexcharts-heatmap-rect"),r=function(t){for(var e=0;e<s.length;e++)s[e].classList[t](i.legendInactiveClass)};if("mousemove"===t.type){var n=parseInt(e.getAttribute("rel"),10)-1;r("add"),function(t){for(var e=0;e<s.length;e++){var a=parseInt(s[e].getAttribute("val"),10);a>=t.from&&a<=t.to&&s[e].classList.remove(i.legendInactiveClass)}}(a.config.plotOptions.heatmap.colorScale.ranges[n])}else"mouseout"===t.type&&r("remove")}},{key:"getActiveConfigSeriesIndex",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.w,i=0;if(e.config.series.length>1)for(var a=e.config.series.map((function(i,a){var s=!1;return t&&(s="bar"===e.config.series[a].type||"column"===e.config.series[a].type),i.data&&i.data.length>0&&!s?a:-1})),s=0;s<a.length;s++)if(-1!==a[s]){i=a[s];break}return i}},{key:"getPreviousPaths",value:function(){var t=this.w;function e(e,i,a){for(var s=e[i].childNodes,r={type:a,paths:[],realIndex:e[i].getAttribute("data:realIndex")},n=0;n<s.length;n++)if(s[n].hasAttribute("pathTo")){var o=s[n].getAttribute("pathTo");r.paths.push({d:o})}t.globals.previousPaths.push(r)}t.globals.previousPaths=[];["line","area","bar","rangebar","candlestick","radar"].forEach((function(i){for(var a,s=(a=i,t.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(a,"-series .apexcharts-series"))),r=0;r<s.length;r++)e(s,r,i)})),this.handlePrevBubbleScatterPaths("bubble"),this.handlePrevBubbleScatterPaths("scatter");var i=t.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t.config.chart.type," .apexcharts-series"));if(i.length>0)for(var a=function(e){for(var i=t.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t.config.chart.type," .apexcharts-series[data\\:realIndex='").concat(e,"'] rect")),a=[],s=function(t){var e=function(e){return i[t].getAttribute(e)},s={x:parseFloat(e("x")),y:parseFloat(e("y")),width:parseFloat(e("width")),height:parseFloat(e("height"))};a.push({rect:s,color:i[t].getAttribute("color")})},r=0;r<i.length;r++)s(r);t.globals.previousPaths.push(a)},s=0;s<i.length;s++)a(s);t.globals.axisCharts||(t.globals.previousPaths=t.globals.series)}},{key:"handlePrevBubbleScatterPaths",value:function(t){var e=this.w,i=e.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t,"-series .apexcharts-series"));if(i.length>0)for(var a=0;a<i.length;a++){for(var s=e.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t,"-series .apexcharts-series[data\\:realIndex='").concat(a,"'] circle")),r=[],n=0;n<s.length;n++)r.push({x:s[n].getAttribute("cx"),y:s[n].getAttribute("cy"),r:s[n].getAttribute("r")});e.globals.previousPaths.push(r)}}},{key:"clearPreviousPaths",value:function(){var t=this.w;t.globals.previousPaths=[],t.globals.allSeriesCollapsed=!1}},{key:"handleNoData",value:function(){var t=this.w,e=t.config.noData,i=new b(this.ctx),a=t.globals.svgWidth/2,s=t.globals.svgHeight/2,r="middle";if(t.globals.noData=!0,t.globals.animationEnded=!0,"left"===e.align?(a=10,r="start"):"right"===e.align&&(a=t.globals.svgWidth-10,r="end"),"top"===e.verticalAlign?s=50:"bottom"===e.verticalAlign&&(s=t.globals.svgHeight-50),a+=e.offsetX,s=s+parseInt(e.style.fontSize,10)+2+e.offsetY,void 0!==e.text&&""!==e.text){var n=i.drawText({x:a,y:s,text:e.text,textAnchor:r,fontSize:e.style.fontSize,fontFamily:e.style.fontFamily,foreColor:e.style.color,opacity:1,class:"apexcharts-text-nodata"});t.globals.dom.Paper.add(n)}}},{key:"setNullSeriesToZeroValues",value:function(t){for(var e=this.w,i=0;i<t.length;i++)if(0===t[i].length)for(var a=0;a<t[e.globals.maxValsInArrayIndex].length;a++)t[i].push(0);return t}},{key:"hasAllSeriesEqualX",value:function(){for(var t=!0,e=this.w,i=this.filteredSeriesX(),a=0;a<i.length-1;a++)if(i[a][0]!==i[a+1][0]){t=!1;break}return e.globals.allSeriesHasEqualX=t,t}},{key:"filteredSeriesX",value:function(){var t=this.w.globals.seriesX.map((function(t){return t.length>0?t:[]}));return t}}]),t}(),E=function(){function t(i){e(this,t),this.w=i.w,this.barCtx=i}return a(t,[{key:"initVariables",value:function(t){var e=this.w;this.barCtx.series=t,this.barCtx.totalItems=0,this.barCtx.seriesLen=0,this.barCtx.visibleI=-1,this.barCtx.visibleItems=1;for(var i=0;i<t.length;i++)if(t[i].length>0&&(this.barCtx.seriesLen=this.barCtx.seriesLen+1,this.barCtx.totalItems+=t[i].length),e.globals.isXNumeric)for(var a=0;a<t[i].length;a++)e.globals.seriesX[i][a]>e.globals.minX&&e.globals.seriesX[i][a]<e.globals.maxX&&this.barCtx.visibleItems++;else this.barCtx.visibleItems=e.globals.dataPoints;0===this.barCtx.seriesLen&&(this.barCtx.seriesLen=1)}},{key:"initialPositions",value:function(){var t,e,i,a,s,r,n,o,l=this.w,h=l.globals.dataPoints;this.barCtx.isTimelineBar&&(h=l.globals.labels.length);var c=this.barCtx.seriesLen;if(l.config.plotOptions.bar.rangeBarGroupRows&&(c=1),this.barCtx.isHorizontal)s=(i=l.globals.gridHeight/h)/c,l.globals.isXNumeric&&(s=(i=l.globals.gridHeight/this.barCtx.totalItems)/this.barCtx.seriesLen),s=s*parseInt(this.barCtx.barOptions.barHeight,10)/100,o=this.barCtx.baseLineInvertedY+l.globals.padHorizontal+(this.barCtx.isReversed?l.globals.gridWidth:0)-(this.barCtx.isReversed?2*this.barCtx.baseLineInvertedY:0),e=(i-s*this.barCtx.seriesLen)/2;else{if(a=l.globals.gridWidth/this.barCtx.visibleItems,l.config.xaxis.convertedCatToNumeric&&(a=l.globals.gridWidth/l.globals.dataPoints),r=a/this.barCtx.seriesLen*parseInt(this.barCtx.barOptions.columnWidth,10)/100,l.globals.isXNumeric){var d=this.barCtx.xRatio;l.config.xaxis.convertedCatToNumeric&&(d=this.barCtx.initialXRatio),l.globals.minXDiff&&.5!==l.globals.minXDiff&&l.globals.minXDiff/d>0&&(a=l.globals.minXDiff/d),(r=a/this.barCtx.seriesLen*parseInt(this.barCtx.barOptions.columnWidth,10)/100)<1&&(r=1)}n=l.globals.gridHeight-this.barCtx.baseLineY[this.barCtx.yaxisIndex]-(this.barCtx.isReversed?l.globals.gridHeight:0)+(this.barCtx.isReversed?2*this.barCtx.baseLineY[this.barCtx.yaxisIndex]:0),t=l.globals.padHorizontal+(a-r*this.barCtx.seriesLen)/2}return{x:t,y:e,yDivision:i,xDivision:a,barHeight:s,barWidth:r,zeroH:n,zeroW:o}}},{key:"getPathFillColor",value:function(t,e,i,a){var s=this.w,r=new L(this.barCtx.ctx),n=null,o=this.barCtx.barOptions.distributed?i:e;this.barCtx.barOptions.colors.ranges.length>0&&this.barCtx.barOptions.colors.ranges.map((function(a){t[e][i]>=a.from&&t[e][i]<=a.to&&(n=a.color)}));return s.config.series[e].data[i]&&s.config.series[e].data[i].fillColor&&(n=s.config.series[e].data[i].fillColor),r.fillPath({seriesNumber:this.barCtx.barOptions.distributed?o:a,dataPointIndex:i,color:n,value:t[e][i]})}},{key:"getStrokeWidth",value:function(t,e,i){var a=0,s=this.w;return void 0===this.barCtx.series[t][e]||null===this.barCtx.series[t][e]?this.barCtx.isNullValue=!0:this.barCtx.isNullValue=!1,s.config.stroke.show&&(this.barCtx.isNullValue||(a=Array.isArray(this.barCtx.strokeWidth)?this.barCtx.strokeWidth[i]:this.barCtx.strokeWidth)),a}},{key:"barBackground",value:function(t){var e=t.j,i=t.i,a=t.x1,s=t.x2,r=t.y1,n=t.y2,o=t.elSeries,l=this.w,h=new b(this.barCtx.ctx),c=new M(this.barCtx.ctx).getActiveConfigSeriesIndex();if(this.barCtx.barOptions.colors.backgroundBarColors.length>0&&c===i){e>=this.barCtx.barOptions.colors.backgroundBarColors.length&&(e-=this.barCtx.barOptions.colors.backgroundBarColors.length);var d=this.barCtx.barOptions.colors.backgroundBarColors[e],g=h.drawRect(void 0!==a?a:0,void 0!==r?r:0,void 0!==s?s:l.globals.gridWidth,void 0!==n?n:l.globals.gridHeight,this.barCtx.barOptions.colors.backgroundBarRadius,d,this.barCtx.barOptions.colors.backgroundBarOpacity);o.add(g),g.node.classList.add("apexcharts-backgroundBar")}}},{key:"getColumnPaths",value:function(t){var e=t.barWidth,i=t.barXPosition,a=t.yRatio,s=t.y1,r=t.y2,n=t.strokeWidth,o=t.series,l=t.realIndex,h=t.i,c=t.j,d=t.w,g=new b(this.barCtx.ctx);(n=Array.isArray(n)?n[l]:n)||(n=0);var u={barWidth:e,strokeWidth:n,yRatio:a,barXPosition:i,y1:s,y2:r},f=this.getRoundedBars(d,u,o,h,c),p=i,x=i+e,m=g.move(p,f.y1),v=g.move(p,f.y1);return d.globals.previousPaths.length>0&&(v=this.barCtx.getPreviousPath(l,c,!1)),{pathTo:m=m+g.line(p,f.y2)+f.endingPath+g.line(x-n,f.y2)+g.line(x-n,f.y1)+f.startingPath+"z",pathFrom:v=v+g.line(p,s)+g.line(x-n,s)+g.line(x-n,s)+g.line(x-n,s)+g.line(p,s)}}},{key:"getBarpaths",value:function(t){var e=t.barYPosition,i=t.barHeight,a=t.x1,s=t.x2,r=t.strokeWidth,n=t.series,o=t.realIndex,l=t.i,h=t.j,c=t.w,d=new b(this.barCtx.ctx);(r=Array.isArray(r)?r[o]:r)||(r=0);var g={barHeight:i,strokeWidth:r,barYPosition:e,x2:s,x1:a},u=this.getRoundedBars(c,g,n,l,h),f=d.move(u.x1,e),p=d.move(u.x1,e);c.globals.previousPaths.length>0&&(p=this.barCtx.getPreviousPath(o,h,!1));var x=e,m=e+i;return{pathTo:f=f+d.line(u.x2,x)+u.endingPath+d.line(u.x2,m-r)+d.line(u.x1,m-r)+u.startingPath+"z",pathFrom:p=p+d.line(a,x)+d.line(a,m-r)+d.line(a,m-r)+d.line(a,m-r)+d.line(a,x)}}},{key:"getRoundedBars",value:function(t,e,i,a,s){var r=new b(this.barCtx.ctx),n=Array.isArray(e.strokeWidth)?e.strokeWidth[a]:e.strokeWidth;if(n||(n=0),this.barCtx.isHorizontal){var o=null,l="",h=e.x2,c=e.x1;if(void 0!==i[a][s]||null!==i[a][s]){var d=i[a][s]<0,g=e.barHeight/2-n;switch(d&&(g=-e.barHeight/2-n),g>Math.abs(h-c)&&(g=Math.abs(h-c)),"rounded"===this.barCtx.barOptions.endingShape&&(h=e.x2-g/2),"rounded"===this.barCtx.barOptions.startingShape&&(c=e.x1+g/2),this.barCtx.barOptions.endingShape){case"flat":o=r.line(h,e.barYPosition+e.barHeight-n);break;case"rounded":o=r.quadraticCurve(h+g,e.barYPosition+(e.barHeight-n)/2,h,e.barYPosition+e.barHeight-n)}switch(this.barCtx.barOptions.startingShape){case"flat":l=r.line(c,e.barYPosition+e.barHeight-n);break;case"rounded":l=r.quadraticCurve(c-g,e.barYPosition+e.barHeight/2,c,e.barYPosition)}}return{endingPath:o,startingPath:l,x2:h,x1:c}}var u=null,f="",p=e.y2,x=e.y1;if(void 0!==i[a][s]||null!==i[a][s]){var m=i[a][s]<0,v=e.barWidth/2-n;switch(m&&(v=-e.barWidth/2-n),v>Math.abs(p-x)&&(v=Math.abs(p-x)),"rounded"===this.barCtx.barOptions.endingShape&&(p+=v/2),"rounded"===this.barCtx.barOptions.startingShape&&(x-=v/2),this.barCtx.barOptions.endingShape){case"flat":u=r.line(e.barXPosition+e.barWidth-n,p);break;case"rounded":u=r.quadraticCurve(e.barXPosition+(e.barWidth-n)/2,p-v,e.barXPosition+e.barWidth-n,p)}switch(this.barCtx.barOptions.startingShape){case"flat":f=r.line(e.barXPosition+e.barWidth-n,x);break;case"rounded":f=r.quadraticCurve(e.barXPosition+(e.barWidth-n)/2,x+v,e.barXPosition,x)}}return{endingPath:u,startingPath:f,y2:p,y1:x}}}]),t}(),X=function(){function t(i,a){e(this,t),this.ctx=i,this.w=i.w;var s=this.w;this.barOptions=s.config.plotOptions.bar,this.isHorizontal=this.barOptions.horizontal,this.strokeWidth=s.config.stroke.width,this.isNullValue=!1,this.isTimelineBar="datetime"===s.config.xaxis.type&&s.globals.seriesRangeBarTimeline.length,this.xyRatios=a,null!==this.xyRatios&&(this.xRatio=a.xRatio,this.initialXRatio=a.initialXRatio,this.yRatio=a.yRatio,this.invertedXRatio=a.invertedXRatio,this.invertedYRatio=a.invertedYRatio,this.baseLineY=a.baseLineY,this.baseLineInvertedY=a.baseLineInvertedY),this.yaxisIndex=0,this.seriesLen=0,this.barHelpers=new E(this)}return a(t,[{key:"draw",value:function(t,e){var i=this.w,a=new b(this.ctx),s=new y(this.ctx,i);t=s.getLogSeries(t),this.series=t,this.yRatio=s.getLogYRatios(this.yRatio),this.barHelpers.initVariables(t);var r=a.group({class:"apexcharts-bar-series apexcharts-plot-series"});i.config.dataLabels.enabled&&this.totalItems>this.barOptions.dataLabels.maxItems&&console.warn("WARNING: DataLabels are enabled but there are too many to display. This may cause performance issue when rendering.");for(var o=0,l=0;o<t.length;o++,l++){var h,c,d,g,u=void 0,p=void 0,x=[],m=[],v=i.globals.comboCharts?e[o]:o,w=a.group({class:"apexcharts-series",rel:o+1,seriesName:f.escapeString(i.globals.seriesNames[v]),"data:realIndex":v});this.ctx.series.addCollapsedClassToSeries(w,v),t[o].length>0&&(this.visibleI=this.visibleI+1);var k=0,A=0;this.yRatio.length>1&&(this.yaxisIndex=v),this.isReversed=i.config.yaxis[this.yaxisIndex]&&i.config.yaxis[this.yaxisIndex].reversed;var S=this.barHelpers.initialPositions();p=S.y,k=S.barHeight,c=S.yDivision,g=S.zeroW,u=S.x,A=S.barWidth,h=S.xDivision,d=S.zeroH,this.horizontal||m.push(u+A/2);for(var C=a.group({class:"apexcharts-datalabels","data:realIndex":v}),L=0;L<i.globals.dataPoints;L++){var P=this.barHelpers.getStrokeWidth(o,L,v),T=null,z={indexes:{i:o,j:L,realIndex:v,bc:l},x:u,y:p,strokeWidth:P,elSeries:w};this.isHorizontal?(T=this.drawBarPaths(n(n({},z),{},{barHeight:k,zeroW:g,yDivision:c})),A=this.series[o][L]/this.invertedYRatio):(T=this.drawColumnPaths(n(n({},z),{},{xDivision:h,barWidth:A,zeroH:d})),k=this.series[o][L]/this.yRatio[this.yaxisIndex]),p=T.y,u=T.x,L>0&&m.push(u+A/2),x.push(p);var I=this.barHelpers.getPathFillColor(t,o,L,v);this.renderSeries({realIndex:v,pathFill:I,j:L,i:o,pathFrom:T.pathFrom,pathTo:T.pathTo,strokeWidth:P,elSeries:w,x:u,y:p,series:t,barHeight:k,barWidth:A,elDataLabelsWrap:C,visibleSeries:this.visibleI,type:"bar"})}i.globals.seriesXvalues[v]=m,i.globals.seriesYvalues[v]=x,r.add(w)}return r}},{key:"renderSeries",value:function(t){var e=t.realIndex,i=t.pathFill,a=t.lineFill,s=t.j,r=t.i,n=t.pathFrom,o=t.pathTo,l=t.strokeWidth,h=t.elSeries,c=t.x,d=t.y,g=t.y1,u=t.y2,f=t.series,x=t.barHeight,m=t.barWidth,v=t.barYPosition,y=t.elDataLabelsWrap,w=t.visibleSeries,k=t.type,A=this.w,S=new b(this.ctx);a||(a=this.barOptions.distributed?A.globals.stroke.colors[s]:A.globals.stroke.colors[e]),A.config.series[r].data[s]&&A.config.series[r].data[s].strokeColor&&(a=A.config.series[r].data[s].strokeColor),this.isNullValue&&(i="none");var C=s/A.config.chart.animations.animateGradually.delay*(A.config.chart.animations.speed/A.globals.dataPoints)/2.4,L=S.renderPaths({i:r,j:s,realIndex:e,pathFrom:n,pathTo:o,stroke:a,strokeWidth:l,strokeLineCap:A.config.stroke.lineCap,fill:i,animationDelay:C,initialSpeed:A.config.chart.animations.speed,dataChangeSpeed:A.config.chart.animations.dynamicAnimation.speed,className:"apexcharts-".concat(k,"-area")});L.attr("clip-path","url(#gridRectMask".concat(A.globals.cuid,")")),void 0!==g&&void 0!==u&&(L.attr("data-range-y1",g),L.attr("data-range-y2",u)),new p(this.ctx).setSelectionFilter(L,e,s),h.add(L);var P=new I(this).handleBarDataLabels({x:c,y:d,y1:g,y2:u,i:r,j:s,series:f,realIndex:e,barHeight:x,barWidth:m,barYPosition:v,renderedPath:L,visibleSeries:w});return null!==P&&y.add(P),h.add(y),h}},{key:"drawBarPaths",value:function(t){var e=t.indexes,i=t.barHeight,a=t.strokeWidth,s=t.zeroW,r=t.x,n=t.y,o=t.yDivision,l=t.elSeries,h=this.w,c=e.i,d=e.j;h.globals.isXNumeric&&(n=(h.globals.seriesX[c][d]-h.globals.minX)/this.invertedXRatio-i);var g=n+i*this.visibleI;r=void 0===this.series[c][d]||null===this.series[c][d]?s:s+this.series[c][d]/this.invertedYRatio-2*(this.isReversed?this.series[c][d]/this.invertedYRatio:0);var u=this.barHelpers.getBarpaths({barYPosition:g,barHeight:i,x1:s,x2:r,strokeWidth:a,series:this.series,realIndex:e.realIndex,i:c,j:d,w:h});return h.globals.isXNumeric||(n+=o),this.barHelpers.barBackground({j:d,i:c,y1:g-i*this.visibleI,y2:i*this.seriesLen,elSeries:l}),{pathTo:u.pathTo,pathFrom:u.pathFrom,x:r,y:n,barYPosition:g}}},{key:"drawColumnPaths",value:function(t){var e=t.indexes,i=t.x,a=t.y,s=t.xDivision,r=t.barWidth,n=t.zeroH,o=t.strokeWidth,l=t.elSeries,h=this.w,c=e.i,d=e.j,g=e.bc;if(h.globals.isXNumeric){var u=c;h.globals.seriesX[c].length||(u=h.globals.maxValsInArrayIndex),i=(h.globals.seriesX[u][d]-h.globals.minX)/this.xRatio-r*this.seriesLen/2}var f=i+r*this.visibleI;a=void 0===this.series[c][d]||null===this.series[c][d]?n:n-this.series[c][d]/this.yRatio[this.yaxisIndex]+2*(this.isReversed?this.series[c][d]/this.yRatio[this.yaxisIndex]:0);var p=this.barHelpers.getColumnPaths({barXPosition:f,barWidth:r,y1:n,y2:a,strokeWidth:o,series:this.series,realIndex:e.realIndex,i:c,j:d,w:h});return h.globals.isXNumeric||(i+=s),this.barHelpers.barBackground({bc:g,j:d,i:c,x1:f-o/2-r*this.visibleI,x2:r*this.seriesLen+o/2,elSeries:l}),{pathTo:p.pathTo,pathFrom:p.pathFrom,x:i,y:a,barXPosition:f}}},{key:"getPreviousPath",value:function(t,e){for(var i,a=this.w,s=0;s<a.globals.previousPaths.length;s++){var r=a.globals.previousPaths[s];r.paths&&r.paths.length>0&&parseInt(r.realIndex,10)===parseInt(t,10)&&void 0!==a.globals.previousPaths[s].paths[e]&&(i=a.globals.previousPaths[s].paths[e].d)}return i}}]),t}(),Y=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w,this.months31=[1,3,5,7,8,10,12],this.months30=[2,4,6,9,11],this.daysCntOfYear=[0,31,59,90,120,151,181,212,243,273,304,334]}return a(t,[{key:"isValidDate",value:function(t){return!isNaN(this.parseDate(t))}},{key:"getTimeStamp",value:function(t){return Date.parse(t)?this.w.config.xaxis.labels.datetimeUTC?new Date(new Date(t).toISOString().substr(0,25)).getTime():new Date(t).getTime():t}},{key:"getDate",value:function(t){return this.w.config.xaxis.labels.datetimeUTC?new Date(new Date(t).toUTCString()):new Date(t)}},{key:"parseDate",value:function(t){var e=Date.parse(t);if(!isNaN(e))return this.getTimeStamp(t);var i=Date.parse(t.replace(/-/g,"/").replace(/[a-z]+/gi," "));return i=this.getTimeStamp(i)}},{key:"parseDateWithTimezone",value:function(t){return Date.parse(t.replace(/-/g,"/").replace(/[a-z]+/gi," "))}},{key:"formatDate",value:function(t,e){var i=this.w.globals.locale,a=this.w.config.xaxis.labels.datetimeUTC,s=["\0"].concat(g(i.months)),r=["\x01"].concat(g(i.shortMonths)),n=["\x02"].concat(g(i.days)),o=["\x03"].concat(g(i.shortDays));function l(t,e){var i=t+"";for(e=e||2;i.length<e;)i="0"+i;return i}var h=a?t.getUTCFullYear():t.getFullYear();e=(e=(e=e.replace(/(^|[^\\])yyyy+/g,"$1"+h)).replace(/(^|[^\\])yy/g,"$1"+h.toString().substr(2,2))).replace(/(^|[^\\])y/g,"$1"+h);var c=(a?t.getUTCMonth():t.getMonth())+1;e=(e=(e=(e=e.replace(/(^|[^\\])MMMM+/g,"$1"+s[0])).replace(/(^|[^\\])MMM/g,"$1"+r[0])).replace(/(^|[^\\])MM/g,"$1"+l(c))).replace(/(^|[^\\])M/g,"$1"+c);var d=a?t.getUTCDate():t.getDate();e=(e=(e=(e=e.replace(/(^|[^\\])dddd+/g,"$1"+n[0])).replace(/(^|[^\\])ddd/g,"$1"+o[0])).replace(/(^|[^\\])dd/g,"$1"+l(d))).replace(/(^|[^\\])d/g,"$1"+d);var u=a?t.getUTCHours():t.getHours(),f=u>12?u-12:0===u?12:u;e=(e=(e=(e=e.replace(/(^|[^\\])HH+/g,"$1"+l(u))).replace(/(^|[^\\])H/g,"$1"+u)).replace(/(^|[^\\])hh+/g,"$1"+l(f))).replace(/(^|[^\\])h/g,"$1"+f);var p=a?t.getUTCMinutes():t.getMinutes();e=(e=e.replace(/(^|[^\\])mm+/g,"$1"+l(p))).replace(/(^|[^\\])m/g,"$1"+p);var x=a?t.getUTCSeconds():t.getSeconds();e=(e=e.replace(/(^|[^\\])ss+/g,"$1"+l(x))).replace(/(^|[^\\])s/g,"$1"+x);var b=a?t.getUTCMilliseconds():t.getMilliseconds();e=e.replace(/(^|[^\\])fff+/g,"$1"+l(b,3)),b=Math.round(b/10),e=e.replace(/(^|[^\\])ff/g,"$1"+l(b)),b=Math.round(b/10);var m=u<12?"AM":"PM";e=(e=(e=e.replace(/(^|[^\\])f/g,"$1"+b)).replace(/(^|[^\\])TT+/g,"$1"+m)).replace(/(^|[^\\])T/g,"$1"+m.charAt(0));var v=m.toLowerCase();e=(e=e.replace(/(^|[^\\])tt+/g,"$1"+v)).replace(/(^|[^\\])t/g,"$1"+v.charAt(0));var y=-t.getTimezoneOffset(),w=a||!y?"Z":y>0?"+":"-";if(!a){var k=(y=Math.abs(y))%60;w+=l(Math.floor(y/60))+":"+l(k)}e=e.replace(/(^|[^\\])K/g,"$1"+w);var A=(a?t.getUTCDay():t.getDay())+1;return e=(e=(e=(e=(e=e.replace(new RegExp(n[0],"g"),n[A])).replace(new RegExp(o[0],"g"),o[A])).replace(new RegExp(s[0],"g"),s[c])).replace(new RegExp(r[0],"g"),r[c])).replace(/\\(.)/g,"$1")}},{key:"getTimeUnitsfromTimestamp",value:function(t,e,i){var a=this.w;void 0!==a.config.xaxis.min&&(t=a.config.xaxis.min),void 0!==a.config.xaxis.max&&(e=a.config.xaxis.max);var s=this.getDate(t),r=this.getDate(e),n=this.formatDate(s,"yyyy MM dd HH mm ss").split(" "),o=this.formatDate(r,"yyyy MM dd HH mm ss").split(" ");return{minSecond:parseInt(n[5],10),maxSecond:parseInt(o[5],10),minMinute:parseInt(n[4],10),maxMinute:parseInt(o[4],10),minHour:parseInt(n[3],10),maxHour:parseInt(o[3],10),minDate:parseInt(n[2],10),maxDate:parseInt(o[2],10),minMonth:parseInt(n[1],10)-1,maxMonth:parseInt(o[1],10)-1,minYear:parseInt(n[0],10),maxYear:parseInt(o[0],10)}}},{key:"isLeapYear",value:function(t){return t%4==0&&t%100!=0||t%400==0}},{key:"calculcateLastDaysOfMonth",value:function(t,e,i){return this.determineDaysOfMonths(t,e)-i}},{key:"determineDaysOfYear",value:function(t){var e=365;return this.isLeapYear(t)&&(e=366),e}},{key:"determineRemainingDaysOfYear",value:function(t,e,i){var a=this.daysCntOfYear[e]+i;return e>1&&this.isLeapYear()&&a++,a}},{key:"determineDaysOfMonths",value:function(t,e){var i=30;switch(t=f.monthMod(t),!0){case this.months30.indexOf(t)>-1:2===t&&(i=this.isLeapYear(e)?29:28);break;case this.months31.indexOf(t)>-1:default:i=31}return i}}]),t}(),F=function(t){o(s,t);var i=d(s);function s(){return e(this,s),i.apply(this,arguments)}return a(s,[{key:"draw",value:function(t,e){var i=this.w,a=new b(this.ctx);this.rangeBarOptions=this.w.config.plotOptions.rangeBar,this.series=t,this.seriesRangeStart=i.globals.seriesRangeStart,this.seriesRangeEnd=i.globals.seriesRangeEnd,this.barHelpers.initVariables(t);for(var s=a.group({class:"apexcharts-rangebar-series apexcharts-plot-series"}),r=0;r<t.length;r++){var o,l,h,c=void 0,d=void 0,g=void 0,u=i.globals.comboCharts?e[r]:r,p=a.group({class:"apexcharts-series",seriesName:f.escapeString(i.globals.seriesNames[u]),rel:r+1,"data:realIndex":u});t[r].length>0&&(this.visibleI=this.visibleI+1);var x=0,m=0;this.yRatio.length>1&&(this.yaxisIndex=u);var v=this.barHelpers.initialPositions();d=v.y,h=v.zeroW,c=v.x,m=v.barWidth,o=v.xDivision,l=v.zeroH;for(var y=a.group({class:"apexcharts-datalabels","data:realIndex":u}),w=0;w<i.globals.dataPoints;w++){var k=this.barHelpers.getStrokeWidth(r,w,u),A=this.seriesRangeStart[r][w],S=this.seriesRangeEnd[r][w],C=null,L=null,P={x:c,y:d,strokeWidth:k,elSeries:p};if(g=v.yDivision,x=v.barHeight,this.isHorizontal){L=d+x*this.visibleI;var T=this.seriesLen;i.config.plotOptions.bar.rangeBarGroupRows&&(T=1);var z=(g-x*T)/2;if(void 0===i.config.series[r].data[w])break;if(this.isTimelineBar&&i.config.series[r].data[w].x){var I=this.detectOverlappingBars({i:r,j:w,barYPosition:L,srty:z,barHeight:x,yDivision:g,initPositions:v});x=I.barHeight,L=I.barYPosition}m=(C=this.drawRangeBarPaths(n({indexes:{i:r,j:w,realIndex:u},barHeight:x,barYPosition:L,zeroW:h,yDivision:g,y1:A,y2:S},P))).barWidth}else x=(C=this.drawRangeColumnPaths(n({indexes:{i:r,j:w,realIndex:u},zeroH:l,barWidth:m,xDivision:o},P))).barHeight;d=C.y,c=C.x;var M=this.barHelpers.getPathFillColor(t,r,w,u),E=i.globals.stroke.colors[u];this.renderSeries({realIndex:u,pathFill:M,lineFill:E,j:w,i:r,x:c,y:d,y1:A,y2:S,pathFrom:C.pathFrom,pathTo:C.pathTo,strokeWidth:k,elSeries:p,series:t,barHeight:x,barYPosition:L,barWidth:m,elDataLabelsWrap:y,visibleSeries:this.visibleI,type:"rangebar"})}s.add(p)}return s}},{key:"detectOverlappingBars",value:function(t){var e=t.i,i=t.j,a=t.barYPosition,s=t.srty,r=t.barHeight,n=t.yDivision,o=t.initPositions,l=this.w,h=[],c=l.config.series[e].data[i].rangeName,d=l.config.series[e].data[i].x,g=l.globals.labels.indexOf(d),u=l.globals.seriesRangeBarTimeline[e].findIndex((function(t){return t.x===d&&t.overlaps.length>0}));return a=l.config.plotOptions.bar.rangeBarGroupRows?s+n*g:s+r*this.visibleI+n*g,u>-1&&!l.config.plotOptions.bar.rangeBarOverlap&&(h=l.globals.seriesRangeBarTimeline[e][u].overlaps).indexOf(c)>-1&&(a=(r=o.barHeight/h.length)*this.visibleI+n*(100-parseInt(this.barOptions.barHeight,10))/100/2+r*(this.visibleI+h.indexOf(c))+n*g),{barYPosition:a,barHeight:r}}},{key:"drawRangeColumnPaths",value:function(t){var e=t.indexes,i=t.x,a=(t.strokeWidth,t.xDivision),s=t.barWidth,r=t.zeroH,n=this.w,o=e.i,l=e.j,h=this.yRatio[this.yaxisIndex],c=e.realIndex,d=this.getRangeValue(c,l),g=Math.min(d.start,d.end),u=Math.max(d.start,d.end);n.globals.isXNumeric&&(i=(n.globals.seriesX[o][l]-n.globals.minX)/this.xRatio-s/2);var f=i+s*this.visibleI;void 0===this.series[o][l]||null===this.series[o][l]?g=r:(g=r-g/h,u=r-u/h);var p=Math.abs(u-g),x=this.barHelpers.getColumnPaths({barXPosition:f,barWidth:s,y1:g,y2:u,strokeWidth:this.strokeWidth,series:this.seriesRangeEnd,realIndex:e.realIndex,i:c,j:l,w:n});return n.globals.isXNumeric||(i+=a),{pathTo:x.pathTo,pathFrom:x.pathFrom,barHeight:p,x:i,y:u,barXPosition:f}}},{key:"drawRangeBarPaths",value:function(t){var e=t.indexes,i=t.y,a=t.y1,s=t.y2,r=t.yDivision,n=t.barHeight,o=t.barYPosition,l=t.zeroW,h=this.w,c=l+a/this.invertedYRatio,d=l+s/this.invertedYRatio,g=Math.abs(d-c),u=this.barHelpers.getBarpaths({barYPosition:o,barHeight:n,x1:c,x2:d,strokeWidth:this.strokeWidth,series:this.seriesRangeEnd,i:e.realIndex,realIndex:e.realIndex,j:e.j,w:h});return h.globals.isXNumeric||(i+=r),{pathTo:u.pathTo,pathFrom:u.pathFrom,barWidth:g,x:d,y:i}}},{key:"getRangeValue",value:function(t,e){var i=this.w;return{start:i.globals.seriesRangeStart[t][e],end:i.globals.seriesRangeEnd[t][e]}}},{key:"getTooltipValues",value:function(t){var e=t.ctx,i=t.seriesIndex,a=t.dataPointIndex,s=t.y1,r=t.y2,n=t.w,o=n.globals.seriesRangeStart[i][a],l=n.globals.seriesRangeEnd[i][a],h=n.globals.labels[a],c=n.config.series[i].name?n.config.series[i].name:"",d=n.config.tooltip.y.formatter,g=n.config.tooltip.y.title.formatter,u={w:n,seriesIndex:i,dataPointIndex:a};"function"==typeof g&&(c=g(c,u)),s&&r&&(o=s,l=r,n.config.series[i].data[a].x&&(h=n.config.series[i].data[a].x+":"),"function"==typeof d&&(h=d(h,u)));var f="",p="",x=n.globals.colors[i];if(void 0===n.config.tooltip.x.formatter)if("datetime"===n.config.xaxis.type){var b=new Y(e);f=b.formatDate(b.getDate(o),n.config.tooltip.x.format),p=b.formatDate(b.getDate(l),n.config.tooltip.x.format)}else f=o,p=l;else f=n.config.tooltip.x.formatter(o),p=n.config.tooltip.x.formatter(l);return{start:o,end:l,startVal:f,endVal:p,ylabel:h,color:x,seriesName:c}}},{key:"buildCustomTooltipHTML",value:function(t){var e=t.color,i=t.seriesName;return'<div class="apexcharts-tooltip-rangebar"><div> <span class="series-name" style="color: '+e+'">'+(i||"")+'</span></div><div> <span class="category">'+t.ylabel+' </span> <span class="value start-value">'+t.start+'</span> <span class="separator">-</span> <span class="value end-value">'+t.end+"</span></div></div>"}}]),s}(X),R=function(){function t(i){e(this,t),this.opts=i}return a(t,[{key:"line",value:function(){return{chart:{animations:{easing:"swing"}},dataLabels:{enabled:!1},stroke:{width:5,curve:"straight"},markers:{size:0,hover:{sizeOffset:6}},xaxis:{crosshairs:{width:1}}}}},{key:"sparkline",value:function(t){this.opts.yaxis[0].show=!1,this.opts.yaxis[0].title.text="",this.opts.yaxis[0].axisBorder.show=!1,this.opts.yaxis[0].axisTicks.show=!1,this.opts.yaxis[0].floating=!0;return f.extend(t,{grid:{show:!1,padding:{left:0,right:0,top:0,bottom:0}},legend:{show:!1},xaxis:{labels:{show:!1},tooltip:{enabled:!1},axisBorder:{show:!1},axisTicks:{show:!1}},chart:{toolbar:{show:!1},zoom:{enabled:!1}},dataLabels:{enabled:!1}})}},{key:"bar",value:function(){return{chart:{stacked:!1,animations:{easing:"swing"}},plotOptions:{bar:{dataLabels:{position:"center"}}},dataLabels:{style:{colors:["#fff"]},background:{enabled:!1}},stroke:{width:0,lineCap:"square"},fill:{opacity:.85},legend:{markers:{shape:"square",radius:2,size:8}},tooltip:{shared:!1},xaxis:{tooltip:{enabled:!1},tickPlacement:"between",crosshairs:{width:"barWidth",position:"back",fill:{type:"gradient"},dropShadow:{enabled:!1},stroke:{width:0}}}}}},{key:"candlestick",value:function(){return{stroke:{width:1,colors:["#333"]},fill:{opacity:1},dataLabels:{enabled:!1},tooltip:{shared:!0,custom:function(t){var e=t.seriesIndex,i=t.dataPointIndex,a=t.w;return'<div class="apexcharts-tooltip-candlestick"><div>Open: <span class="value">'+a.globals.seriesCandleO[e][i]+'</span></div><div>High: <span class="value">'+a.globals.seriesCandleH[e][i]+'</span></div><div>Low: <span class="value">'+a.globals.seriesCandleL[e][i]+'</span></div><div>Close: <span class="value">'+a.globals.seriesCandleC[e][i]+"</span></div></div>"}},states:{active:{filter:{type:"none"}}},xaxis:{crosshairs:{width:1}}}}},{key:"rangeBar",value:function(){return{stroke:{width:0,lineCap:"square"},plotOptions:{bar:{dataLabels:{position:"center"}}},dataLabels:{enabled:!1,formatter:function(t,e){e.ctx;var i=e.seriesIndex,a=e.dataPointIndex,s=e.w,r=s.globals.seriesRangeStart[i][a];return s.globals.seriesRangeEnd[i][a]-r},background:{enabled:!1},style:{colors:["#fff"]}},tooltip:{shared:!1,followCursor:!0,custom:function(t){return t.w.config.plotOptions&&t.w.config.plotOptions.bar&&t.w.config.plotOptions.bar.horizontal?function(t){var e=new F(t.ctx,null),i=e.getTooltipValues(t),a=i.color,s=i.seriesName,r=i.ylabel,n=i.startVal,o=i.endVal;return e.buildCustomTooltipHTML({color:a,seriesName:s,ylabel:r,start:n,end:o})}(t):function(t){var e=new F(t.ctx,null),i=e.getTooltipValues(t),a=i.color,s=i.seriesName,r=i.ylabel,n=i.start,o=i.end;return e.buildCustomTooltipHTML({color:a,seriesName:s,ylabel:r,start:n,end:o})}(t)}},xaxis:{tickPlacement:"between",tooltip:{enabled:!1},crosshairs:{stroke:{width:0}}}}}},{key:"area",value:function(){return{stroke:{width:4},fill:{type:"gradient",gradient:{inverseColors:!1,shade:"light",type:"vertical",opacityFrom:.65,opacityTo:.5,stops:[0,100,100]}},markers:{size:0,hover:{sizeOffset:6}},tooltip:{followCursor:!1}}}},{key:"brush",value:function(t){return f.extend(t,{chart:{toolbar:{autoSelected:"selection",show:!1},zoom:{enabled:!1}},dataLabels:{enabled:!1},stroke:{width:1},tooltip:{enabled:!1},xaxis:{tooltip:{enabled:!1}}})}},{key:"stacked100",value:function(t){t.dataLabels=t.dataLabels||{},t.dataLabels.formatter=t.dataLabels.formatter||void 0;var e=t.dataLabels.formatter;return t.yaxis.forEach((function(e,i){t.yaxis[i].min=0,t.yaxis[i].max=100})),"bar"===t.chart.type&&(t.dataLabels.formatter=e||function(t){return"number"==typeof t&&t?t.toFixed(0)+"%":t}),t}},{key:"convertCatToNumeric",value:function(t){return t.xaxis.convertedCatToNumeric=!0,t}},{key:"convertCatToNumericXaxis",value:function(t,e,i){t.xaxis.type="numeric",t.xaxis.labels=t.xaxis.labels||{},t.xaxis.labels.formatter=t.xaxis.labels.formatter||function(t){return f.isNumber(t)?Math.floor(t):t};var a=t.xaxis.labels.formatter,s=t.xaxis.categories&&t.xaxis.categories.length?t.xaxis.categories:t.labels;return i&&i.length&&(s=i.map((function(t){return Array.isArray(t)?t:String(t)}))),s&&s.length&&(t.xaxis.labels.formatter=function(t){return f.isNumber(t)?a(s[Math.floor(t)-1]):a(t)}),t.xaxis.categories=[],t.labels=[],t.xaxis.tickAmount=t.xaxis.tickAmount||"dataPoints",t}},{key:"bubble",value:function(){return{dataLabels:{style:{colors:["#fff"]}},tooltip:{shared:!1,intersect:!0},xaxis:{crosshairs:{width:0}},fill:{type:"solid",gradient:{shade:"light",inverse:!0,shadeIntensity:.55,opacityFrom:.4,opacityTo:.8}}}}},{key:"scatter",value:function(){return{dataLabels:{enabled:!1},tooltip:{shared:!1,intersect:!0},markers:{size:6,strokeWidth:1,hover:{sizeOffset:2}}}}},{key:"heatmap",value:function(){return{chart:{stacked:!1},fill:{opacity:1},dataLabels:{style:{colors:["#fff"]}},stroke:{colors:["#fff"]},tooltip:{followCursor:!0,marker:{show:!1},x:{show:!1}},legend:{position:"top",markers:{shape:"square",size:10,offsetY:2}},grid:{padding:{right:20}}}}},{key:"treemap",value:function(){return{chart:{zoom:{enabled:!1}},dataLabels:{style:{fontSize:14,fontWeight:600,colors:["#fff"]}},stroke:{show:!0,width:2,colors:["#fff"]},legend:{show:!1},fill:{gradient:{stops:[0,100]}},tooltip:{followCursor:!0,x:{show:!1}},grid:{padding:{left:0,right:0}},xaxis:{crosshairs:{show:!1},tooltip:{enabled:!1}}}}},{key:"pie",value:function(){return{chart:{toolbar:{show:!1}},plotOptions:{pie:{donut:{labels:{show:!1}}}},dataLabels:{formatter:function(t){return t.toFixed(1)+"%"},style:{colors:["#fff"]},background:{enabled:!1},dropShadow:{enabled:!0}},stroke:{colors:["#fff"]},fill:{opacity:1,gradient:{shade:"light",stops:[0,100]}},tooltip:{theme:"dark",fillSeriesColor:!0},legend:{position:"right"}}}},{key:"donut",value:function(){return{chart:{toolbar:{show:!1}},dataLabels:{formatter:function(t){return t.toFixed(1)+"%"},style:{colors:["#fff"]},background:{enabled:!1},dropShadow:{enabled:!0}},stroke:{colors:["#fff"]},fill:{opacity:1,gradient:{shade:"light",shadeIntensity:.35,stops:[80,100],opacityFrom:1,opacityTo:1}},tooltip:{theme:"dark",fillSeriesColor:!0},legend:{position:"right"}}}},{key:"polarArea",value:function(){return this.opts.yaxis[0].tickAmount=this.opts.yaxis[0].tickAmount?this.opts.yaxis[0].tickAmount:6,{chart:{toolbar:{show:!1}},dataLabels:{formatter:function(t){return t.toFixed(1)+"%"},enabled:!1},stroke:{show:!0,width:2},fill:{opacity:.7},tooltip:{theme:"dark",fillSeriesColor:!0},legend:{position:"right"}}}},{key:"radar",value:function(){return this.opts.yaxis[0].labels.offsetY=this.opts.yaxis[0].labels.offsetY?this.opts.yaxis[0].labels.offsetY:6,{dataLabels:{enabled:!1,style:{fontSize:"11px"}},stroke:{width:2},markers:{size:3,strokeWidth:1,strokeOpacity:1},fill:{opacity:.2},tooltip:{shared:!1,intersect:!0,followCursor:!0},grid:{show:!1},xaxis:{labels:{formatter:function(t){return t},style:{colors:["#a8a8a8"],fontSize:"11px"}},tooltip:{enabled:!1},crosshairs:{show:!1}}}}},{key:"radialBar",value:function(){return{chart:{animations:{dynamicAnimation:{enabled:!0,speed:800}},toolbar:{show:!1}},fill:{gradient:{shade:"dark",shadeIntensity:.4,inverseColors:!1,type:"diagonal2",opacityFrom:1,opacityTo:1,stops:[70,98,100]}},legend:{show:!1,position:"right"},tooltip:{enabled:!1,fillSeriesColor:!0}}}}]),t}(),D=function(){function i(t){e(this,i),this.opts=t}return a(i,[{key:"init",value:function(e){var i=e.responsiveOverride,a=this.opts,s=new S,r=new R(a);this.chartType=a.chart.type,"histogram"===this.chartType&&(a.chart.type="bar",a=f.extend({plotOptions:{bar:{columnWidth:"99.99%"}}},a)),a=this.extendYAxis(a),a=this.extendAnnotations(a);var n=s.init(),o={};if(a&&"object"===t(a)){var l={};l=-1!==["line","area","bar","candlestick","rangeBar","histogram","bubble","scatter","heatmap","treemap","pie","polarArea","donut","radar","radialBar"].indexOf(a.chart.type)?r[a.chart.type]():r.line(),a.chart.brush&&a.chart.brush.enabled&&(l=r.brush(l)),a.chart.stacked&&"100%"===a.chart.stackType&&(a=r.stacked100(a)),this.checkForDarkTheme(window.Apex),this.checkForDarkTheme(a),a.xaxis=a.xaxis||window.Apex.xaxis||{},i||(a.xaxis.convertedCatToNumeric=!1),((a=this.checkForCatToNumericXAxis(this.chartType,l,a)).chart.sparkline&&a.chart.sparkline.enabled||window.Apex.chart&&window.Apex.chart.sparkline&&window.Apex.chart.sparkline.enabled)&&(l=r.sparkline(l)),o=f.extend(n,l)}var h=f.extend(o,window.Apex);return n=f.extend(h,a),n=this.handleUserInputErrors(n)}},{key:"checkForCatToNumericXAxis",value:function(t,e,i){var a=new R(i),s="bar"===t&&i.plotOptions&&i.plotOptions.bar&&i.plotOptions.bar.horizontal,r="pie"===t||"polarArea"===t||"donut"===t||"radar"===t||"radialBar"===t||"heatmap"===t,n="datetime"!==i.xaxis.type&&"numeric"!==i.xaxis.type,o=i.xaxis.tickPlacement?i.xaxis.tickPlacement:e.xaxis&&e.xaxis.tickPlacement;return s||r||!n||"between"===o||(i=a.convertCatToNumeric(i)),i}},{key:"extendYAxis",value:function(t,e){var i=new S;(void 0===t.yaxis||!t.yaxis||Array.isArray(t.yaxis)&&0===t.yaxis.length)&&(t.yaxis={}),t.yaxis.constructor!==Array&&window.Apex.yaxis&&window.Apex.yaxis.constructor!==Array&&(t.yaxis=f.extend(t.yaxis,window.Apex.yaxis)),t.yaxis.constructor!==Array?t.yaxis=[f.extend(i.yAxis,t.yaxis)]:t.yaxis=f.extendArray(t.yaxis,i.yAxis);var a=!1;t.yaxis.forEach((function(t){t.logarithmic&&(a=!0)}));var s=t.series;return e&&!s&&(s=e.config.series),a&&s.length!==t.yaxis.length&&s.length&&(t.yaxis=s.map((function(e,a){if(e.name||(s[a].name="series-".concat(a+1)),t.yaxis[a])return t.yaxis[a].seriesName=s[a].name,t.yaxis[a];var r=f.extend(i.yAxis,t.yaxis[0]);return r.show=!1,r}))),a&&s.length>1&&s.length!==t.yaxis.length&&console.warn("A multi-series logarithmic chart should have equal number of series and y-axes. Please make sure to equalize both."),t}},{key:"extendAnnotations",value:function(t){return void 0===t.annotations&&(t.annotations={},t.annotations.yaxis=[],t.annotations.xaxis=[],t.annotations.points=[]),t=this.extendYAxisAnnotations(t),t=this.extendXAxisAnnotations(t),t=this.extendPointAnnotations(t)}},{key:"extendYAxisAnnotations",value:function(t){var e=new S;return t.annotations.yaxis=f.extendArray(void 0!==t.annotations.yaxis?t.annotations.yaxis:[],e.yAxisAnnotation),t}},{key:"extendXAxisAnnotations",value:function(t){var e=new S;return t.annotations.xaxis=f.extendArray(void 0!==t.annotations.xaxis?t.annotations.xaxis:[],e.xAxisAnnotation),t}},{key:"extendPointAnnotations",value:function(t){var e=new S;return t.annotations.points=f.extendArray(void 0!==t.annotations.points?t.annotations.points:[],e.pointAnnotation),t}},{key:"checkForDarkTheme",value:function(t){t.theme&&"dark"===t.theme.mode&&(t.tooltip||(t.tooltip={}),"light"!==t.tooltip.theme&&(t.tooltip.theme="dark"),t.chart.foreColor||(t.chart.foreColor="#f6f7f8"),t.chart.background||(t.chart.background="#424242"),t.theme.palette||(t.theme.palette="palette4"))}},{key:"handleUserInputErrors",value:function(t){var e=t;if(e.tooltip.shared&&e.tooltip.intersect)throw new Error("tooltip.shared cannot be enabled when tooltip.intersect is true. Turn off any other option by setting it to false.");if("bar"===e.chart.type&&e.plotOptions.bar.horizontal){if(e.yaxis.length>1)throw new Error("Multiple Y Axis for bars are not supported. Switch to column chart by setting plotOptions.bar.horizontal=false");e.yaxis[0].reversed&&(e.yaxis[0].opposite=!0),e.xaxis.tooltip.enabled=!1,e.yaxis[0].tooltip.enabled=!1,e.chart.zoom.enabled=!1}return"bar"!==e.chart.type&&"rangeBar"!==e.chart.type||e.tooltip.shared&&("barWidth"===e.xaxis.crosshairs.width&&e.series.length>1&&(console.warn('crosshairs.width = "barWidth" is only supported in single series, not in a multi-series barChart.'),e.xaxis.crosshairs.width="tickWidth"),e.plotOptions.bar.horizontal&&(e.states.hover.type="none",e.tooltip.shared=!1),e.tooltip.followCursor||(console.warn("followCursor option in shared columns cannot be turned off. Please set %ctooltip.followCursor: true","color: blue;"),e.tooltip.followCursor=!0)),"candlestick"===e.chart.type&&e.yaxis[0].reversed&&(console.warn("Reversed y-axis in candlestick chart is not supported."),e.yaxis[0].reversed=!1),e.chart.group&&0===e.yaxis[0].labels.minWidth&&console.warn("It looks like you have multiple charts in synchronization. You must provide yaxis.labels.minWidth which must be EQUAL for all grouped charts to prevent incorrect behaviour."),Array.isArray(e.stroke.width)&&"line"!==e.chart.type&&"area"!==e.chart.type&&(console.warn("stroke.width option accepts array only for line and area charts. Reverted back to Number"),e.stroke.width=e.stroke.width[0]),e}}]),i}(),H=function(){function t(){e(this,t)}return a(t,[{key:"initGlobalVars",value:function(t){t.series=[],t.seriesCandleO=[],t.seriesCandleH=[],t.seriesCandleL=[],t.seriesCandleC=[],t.seriesRangeStart=[],t.seriesRangeEnd=[],t.seriesRangeBarTimeline=[],t.seriesPercent=[],t.seriesX=[],t.seriesZ=[],t.seriesNames=[],t.seriesTotals=[],t.seriesLog=[],t.seriesColors=[],t.stackedSeriesTotals=[],t.seriesXvalues=[],t.seriesYvalues=[],t.labels=[],t.categoryLabels=[],t.timescaleLabels=[],t.noLabelsProvided=!1,t.resizeTimer=null,t.selectionResizeTimer=null,t.delayedElements=[],t.pointsArray=[],t.dataLabelsRects=[],t.isXNumeric=!1,t.xaxisLabelsCount=0,t.skipLastTimelinelabel=!1,t.skipFirstTimelinelabel=!1,t.isDataXYZ=!1,t.isMultiLineX=!1,t.isMultipleYAxis=!1,t.maxY=-Number.MAX_VALUE,t.minY=Number.MIN_VALUE,t.minYArr=[],t.maxYArr=[],t.maxX=-Number.MAX_VALUE,t.minX=Number.MAX_VALUE,t.initialMaxX=-Number.MAX_VALUE,t.initialMinX=Number.MAX_VALUE,t.maxDate=0,t.minDate=Number.MAX_VALUE,t.minZ=Number.MAX_VALUE,t.maxZ=-Number.MAX_VALUE,t.minXDiff=Number.MAX_VALUE,t.yAxisScale=[],t.xAxisScale=null,t.xAxisTicksPositions=[],t.yLabelsCoords=[],t.yTitleCoords=[],t.barPadForNumericAxis=0,t.padHorizontal=0,t.xRange=0,t.yRange=[],t.zRange=0,t.dataPoints=0,t.xTickAmount=0}},{key:"globalVars",value:function(t){return{chartID:null,cuid:null,events:{beforeMount:[],mounted:[],updated:[],clicked:[],selection:[],dataPointSelection:[],zoomed:[],scrolled:[]},colors:[],clientX:null,clientY:null,fill:{colors:[]},stroke:{colors:[]},dataLabels:{style:{colors:[]}},radarPolygons:{fill:{colors:[]}},markers:{colors:[],size:t.markers.size,largestSize:0},animationEnded:!1,isTouchDevice:"ontouchstart"in window||navigator.msMaxTouchPoints,isDirty:!1,isExecCalled:!1,initialConfig:null,initialSeries:[],lastXAxis:[],lastYAxis:[],columnSeries:null,labels:[],timescaleLabels:[],noLabelsProvided:!1,allSeriesCollapsed:!1,collapsedSeries:[],collapsedSeriesIndices:[],ancillaryCollapsedSeries:[],ancillaryCollapsedSeriesIndices:[],risingSeries:[],dataFormatXNumeric:!1,capturedSeriesIndex:-1,capturedDataPointIndex:-1,selectedDataPoints:[],goldenPadding:35,invalidLogScale:!1,ignoreYAxisIndexes:[],yAxisSameScaleIndices:[],maxValsInArrayIndex:0,radialSize:0,selection:void 0,zoomEnabled:"zoom"===t.chart.toolbar.autoSelected&&t.chart.toolbar.tools.zoom&&t.chart.zoom.enabled,panEnabled:"pan"===t.chart.toolbar.autoSelected&&t.chart.toolbar.tools.pan,selectionEnabled:"selection"===t.chart.toolbar.autoSelected&&t.chart.toolbar.tools.selection,yaxis:null,mousedown:!1,lastClientPosition:{},visibleXRange:void 0,yValueDecimal:0,total:0,SVGNS:"http://www.w3.org/2000/svg",svgWidth:0,svgHeight:0,noData:!1,locale:{},dom:{},memory:{methodsToExec:[]},shouldAnimate:!0,skipLastTimelinelabel:!1,skipFirstTimelinelabel:!1,delayedElements:[],axisCharts:!0,isDataXYZ:!1,resized:!1,resizeTimer:null,comboCharts:!1,dataChanged:!1,previousPaths:[],allSeriesHasEqualX:!0,pointsArray:[],dataLabelsRects:[],lastDrawnDataLabelsIndexes:[],hasNullValues:!1,easing:null,zoomed:!1,gridWidth:0,gridHeight:0,rotateXLabels:!1,defaultLabels:!1,xLabelFormatter:void 0,yLabelFormatters:[],xaxisTooltipFormatter:void 0,ttKeyFormatter:void 0,ttVal:void 0,ttZFormatter:void 0,LINE_HEIGHT_RATIO:1.618,xAxisLabelsHeight:0,xAxisLabelsWidth:0,yAxisLabelsWidth:0,scaleX:1,scaleY:1,translateX:0,translateY:0,translateYAxisX:[],yAxisWidths:[],translateXAxisY:0,translateXAxisX:0,tooltip:null}}},{key:"init",value:function(t){var e=this.globalVars(t);return this.initGlobalVars(e),e.initialConfig=f.extend({},t),e.initialSeries=f.clone(t.series),e.lastXAxis=f.clone(e.initialConfig.xaxis),e.lastYAxis=f.clone(e.initialConfig.yaxis),e}}]),t}(),N=function(){function t(i){e(this,t),this.opts=i}return a(t,[{key:"init",value:function(){var t=new D(this.opts).init({responsiveOverride:!1});return{config:t,globals:(new H).init(t)}}}]),t}(),O=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w,this.twoDSeries=[],this.threeDSeries=[],this.twoDSeriesX=[],this.coreUtils=new y(this.ctx)}return a(t,[{key:"isMultiFormat",value:function(){return this.isFormatXY()||this.isFormat2DArray()}},{key:"isFormatXY",value:function(){var t=this.w.config.series.slice(),e=new M(this.ctx);if(this.activeSeriesIndex=e.getActiveConfigSeriesIndex(),void 0!==t[this.activeSeriesIndex].data&&t[this.activeSeriesIndex].data.length>0&&null!==t[this.activeSeriesIndex].data[0]&&void 0!==t[this.activeSeriesIndex].data[0].x&&null!==t[this.activeSeriesIndex].data[0])return!0}},{key:"isFormat2DArray",value:function(){var t=this.w.config.series.slice(),e=new M(this.ctx);if(this.activeSeriesIndex=e.getActiveConfigSeriesIndex(),void 0!==t[this.activeSeriesIndex].data&&t[this.activeSeriesIndex].data.length>0&&void 0!==t[this.activeSeriesIndex].data[0]&&null!==t[this.activeSeriesIndex].data[0]&&t[this.activeSeriesIndex].data[0].constructor===Array)return!0}},{key:"handleFormat2DArray",value:function(t,e){var i=this.w.config,a=this.w.globals;i.xaxis.sorted&&("datetime"===i.xaxis.type?t[e].data.sort((function(t,e){return new Date(t[0]).getTime()-new Date(e[0]).getTime()})):"numeric"===i.xaxis.type&&t[e].data.sort((function(t,e){return t[0]-e[0]})));for(var s=0;s<t[e].data.length;s++)if(void 0!==t[e].data[s][1]&&(Array.isArray(t[e].data[s][1])&&4===t[e].data[s][1].length?this.twoDSeries.push(f.parseNumber(t[e].data[s][1][3])):5===t[e].data[s].length?this.twoDSeries.push(f.parseNumber(t[e].data[s][4])):this.twoDSeries.push(f.parseNumber(t[e].data[s][1])),a.dataFormatXNumeric=!0),"datetime"===i.xaxis.type){var r=new Date(t[e].data[s][0]);r=new Date(r).getTime(),this.twoDSeriesX.push(r)}else this.twoDSeriesX.push(t[e].data[s][0]);for(var n=0;n<t[e].data.length;n++)void 0!==t[e].data[n][2]&&(this.threeDSeries.push(t[e].data[n][2]),a.isDataXYZ=!0)}},{key:"handleFormatXY",value:function(t,e){var i=this.w.config,a=this.w.globals,s=new Y(this.ctx),r=e;a.collapsedSeriesIndices.indexOf(e)>-1&&(r=this.activeSeriesIndex),i.xaxis.sorted&&("datetime"===i.xaxis.type?t[e].data.sort((function(t,e){return new Date(t.x).getTime()-new Date(e.x).getTime()})):"numeric"===i.xaxis.type&&t[e].data.sort((function(t,e){return t.x-e.x})));for(var n=0;n<t[e].data.length;n++)void 0!==t[e].data[n].y&&(Array.isArray(t[e].data[n].y)?this.twoDSeries.push(f.parseNumber(t[e].data[n].y[t[e].data[n].y.length-1])):this.twoDSeries.push(f.parseNumber(t[e].data[n].y)));for(var o=0;o<t[r].data.length;o++){var l="string"==typeof t[r].data[o].x,h=Array.isArray(t[r].data[o].x),c=!h&&!!s.isValidDate(t[r].data[o].x.toString());if(l||c)if(l||i.xaxis.convertedCatToNumeric){var d=a.isBarHorizontal&&a.isRangeData;"datetime"!==i.xaxis.type||d?(this.fallbackToCategory=!0,this.twoDSeriesX.push(t[r].data[o].x)):this.twoDSeriesX.push(s.parseDate(t[r].data[o].x))}else"datetime"===i.xaxis.type?this.twoDSeriesX.push(s.parseDate(t[r].data[o].x.toString())):(a.dataFormatXNumeric=!0,a.isXNumeric=!0,this.twoDSeriesX.push(parseFloat(t[r].data[o].x)));else h?(this.fallbackToCategory=!0,this.twoDSeriesX.push(t[r].data[o].x)):(a.isXNumeric=!0,a.dataFormatXNumeric=!0,this.twoDSeriesX.push(t[r].data[o].x))}if(t[e].data[0]&&void 0!==t[e].data[0].z){for(var g=0;g<t[e].data.length;g++)this.threeDSeries.push(t[e].data[g].z);a.isDataXYZ=!0}}},{key:"handleRangeData",value:function(t,e){var i=this.w.config,a=this.w.globals,s={};return this.isFormat2DArray()?s=this.handleRangeDataFormat("array",t,e):this.isFormatXY()&&(s=this.handleRangeDataFormat("xy",t,e)),a.seriesRangeStart.push(s.start),a.seriesRangeEnd.push(s.end),"datetime"===i.xaxis.type&&a.seriesRangeBarTimeline.push(s.rangeUniques),a.seriesRangeBarTimeline.forEach((function(t,e){t&&t.forEach((function(t,e){t.y.forEach((function(e,i){for(var a=0;a<t.y.length;a++)if(i!==a){var s=e.y1,r=e.y2,n=t.y[a].y1;s<=t.y[a].y2&&n<=r&&(t.overlaps.indexOf(e.rangeName)<0&&t.overlaps.push(e.rangeName),t.overlaps.indexOf(t.y[a].rangeName)<0&&t.overlaps.push(t.y[a].rangeName))}}))}))})),s}},{key:"handleCandleStickData",value:function(t,e){var i=this.w.globals,a={};return this.isFormat2DArray()?a=this.handleCandleStickDataFormat("array",t,e):this.isFormatXY()&&(a=this.handleCandleStickDataFormat("xy",t,e)),i.seriesCandleO[e]=a.o,i.seriesCandleH[e]=a.h,i.seriesCandleL[e]=a.l,i.seriesCandleC[e]=a.c,a}},{key:"handleRangeDataFormat",value:function(t,e,i){var a=[],s=[],r=e[i].data.filter((function(t,e,i){return e===i.findIndex((function(e){return e.x===t.x}))})).map((function(t,e){return{x:t.x,overlaps:[],y:[]}})),n="Please provide [Start, End] values in valid format. Read more https://apexcharts.com/docs/series/#rangecharts",o=new M(this.ctx).getActiveConfigSeriesIndex();if("array"===t){if(2!==e[o].data[0][1].length)throw new Error(n);for(var l=0;l<e[i].data.length;l++)a.push(e[i].data[l][1][0]),s.push(e[i].data[l][1][1])}else if("xy"===t){if(2!==e[o].data[0].y.length)throw new Error(n);for(var h=function(t){var n=f.randomId(),o=e[i].data[t].x,l={y1:e[i].data[t].y[0],y2:e[i].data[t].y[1],rangeName:n};e[i].data[t].rangeName=n;var h=r.findIndex((function(t){return t.x===o}));r[h].y.push(l),a.push(l.y1),s.push(l.y2)},c=0;c<e[i].data.length;c++)h(c)}return{start:a,end:s,rangeUniques:r}}},{key:"handleCandleStickDataFormat",value:function(t,e,i){var a=this.w,s=[],r=[],n=[],o=[],l="Please provide [Open, High, Low and Close] values in valid format. Read more https://apexcharts.com/docs/series/#candlestick";if("array"===t){if(!Array.isArray(e[i].data[0][1])&&5!==e[i].data[0].length||Array.isArray(e[i].data[0][1])&&4!==e[i].data[0][1].length)throw new Error(l);if(5===e[i].data[0].length)for(var h=0;h<e[i].data.length;h++)s.push(e[i].data[h][1]),r.push(e[i].data[h][2]),n.push(e[i].data[h][3]),o.push(e[i].data[h][4]);else for(var c=0;c<e[i].data.length;c++)s.push(e[i].data[c][1][0]),r.push(e[i].data[c][1][1]),n.push(e[i].data[c][1][2]),o.push(e[i].data[c][1][3])}else if("xy"===t){if(!a.globals.comboCharts&&4!==e[i].data[0].y.length||a.globals.comboCharts&&"candlestick"===e[i].type&&e[i].data.length&&4!==e[i].data[0].y.length)throw new Error(l);for(var d=0;d<e[i].data.length;d++)s.push(e[i].data[d].y[0]),r.push(e[i].data[d].y[1]),n.push(e[i].data[d].y[2]),o.push(e[i].data[d].y[3])}return{o:s,h:r,l:n,c:o}}},{key:"parseDataAxisCharts",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.ctx,a=this.w.config,s=this.w.globals,r=new Y(i),n=a.labels.length>0?a.labels.slice():a.xaxis.categories.slice();s.isTimelineBar="rangeBar"===a.chart.type&&"datetime"===a.xaxis.type;for(var o=function(){for(var t=0;t<n.length;t++)if("string"==typeof n[t]){if(!r.isValidDate(n[t]))throw new Error("You have provided invalid Date format. Please provide a valid JavaScript Date");e.twoDSeriesX.push(r.parseDate(n[t]))}else e.twoDSeriesX.push(n[t])},l=0;l<t.length;l++){if(this.twoDSeries=[],this.twoDSeriesX=[],this.threeDSeries=[],void 0===t[l].data)return void console.error("It is a possibility that you may have not included 'data' property in series.");if("rangeBar"!==a.chart.type&&"rangeArea"!==a.chart.type&&"rangeBar"!==t[l].type&&"rangeArea"!==t[l].type||(s.isRangeData=!0,this.handleRangeData(t,l)),this.isMultiFormat())this.isFormat2DArray()?this.handleFormat2DArray(t,l):this.isFormatXY()&&this.handleFormatXY(t,l),"candlestick"!==a.chart.type&&"candlestick"!==t[l].type||this.handleCandleStickData(t,l),s.series.push(this.twoDSeries),s.labels.push(this.twoDSeriesX),s.seriesX.push(this.twoDSeriesX),l!==this.activeSeriesIndex||this.fallbackToCategory||(s.isXNumeric=!0);else{"datetime"===a.xaxis.type?(s.isXNumeric=!0,o(),s.seriesX.push(this.twoDSeriesX)):"numeric"===a.xaxis.type&&(s.isXNumeric=!0,n.length>0&&(this.twoDSeriesX=n,s.seriesX.push(this.twoDSeriesX))),s.labels.push(this.twoDSeriesX);var h=t[l].data.map((function(t){return f.parseNumber(t)}));s.series.push(h)}s.seriesZ.push(this.threeDSeries),void 0!==t[l].name?s.seriesNames.push(t[l].name):s.seriesNames.push("series-"+parseInt(l+1,10)),void 0!==t[l].color?s.seriesColors.push(t[l].color):s.seriesColors.push(void 0)}return this.w}},{key:"parseDataNonAxisCharts",value:function(t){var e=this.w.globals,i=this.w.config;e.series=t.slice(),e.seriesNames=i.labels.slice();for(var a=0;a<e.series.length;a++)void 0===e.seriesNames[a]&&e.seriesNames.push("series-"+(a+1));return this.w}},{key:"handleExternalLabelsData",value:function(t){var e=this.w.config,i=this.w.globals;if(e.xaxis.categories.length>0)i.labels=e.xaxis.categories;else if(e.labels.length>0)i.labels=e.labels.slice();else if(this.fallbackToCategory){if(i.labels=i.labels[0],i.seriesRangeBarTimeline.length&&(i.seriesRangeBarTimeline.map((function(t){t.forEach((function(t){i.labels.indexOf(t.x)<0&&t.x&&i.labels.push(t.x)}))})),i.labels=i.labels.filter((function(t,e,i){return i.indexOf(t)===e}))),e.xaxis.convertedCatToNumeric)new R(e).convertCatToNumericXaxis(e,this.ctx,i.seriesX[0]),this._generateExternalLabels(t)}else this._generateExternalLabels(t)}},{key:"_generateExternalLabels",value:function(t){var e=this.w.globals,i=this.w.config,a=[];if(e.axisCharts){if(e.series.length>0)for(var s=0;s<e.series[e.maxValsInArrayIndex].length;s++)a.push(s+1);e.seriesX=[];for(var r=0;r<t.length;r++)e.seriesX.push(a);e.isXNumeric=!0}if(0===a.length){a=e.axisCharts?[]:e.series.map((function(t,e){return e+1}));for(var n=0;n<t.length;n++)e.seriesX.push(a)}e.labels=a,i.xaxis.convertedCatToNumeric&&(e.categoryLabels=a.map((function(t){return i.xaxis.labels.formatter(t)}))),e.noLabelsProvided=!0}},{key:"parseData",value:function(t){var e=this.w,i=e.config,a=e.globals;if(this.excludeCollapsedSeriesInYAxis(),this.fallbackToCategory=!1,this.ctx.core.resetGlobals(),this.ctx.core.isMultipleY(),a.axisCharts?this.parseDataAxisCharts(t):this.parseDataNonAxisCharts(t),this.coreUtils.getLargestSeries(),"bar"===i.chart.type&&i.chart.stacked){var s=new M(this.ctx);a.series=s.setNullSeriesToZeroValues(a.series)}this.coreUtils.getSeriesTotals(),a.axisCharts&&this.coreUtils.getStackedSeriesTotals(),this.coreUtils.getPercentSeries(),a.dataFormatXNumeric||a.isXNumeric&&("numeric"!==i.xaxis.type||0!==i.labels.length||0!==i.xaxis.categories.length)||this.handleExternalLabelsData(t);for(var r=this.coreUtils.getCategoryLabels(a.labels),n=0;n<r.length;n++)if(Array.isArray(r[n])){a.isMultiLineX=!0;break}}},{key:"excludeCollapsedSeriesInYAxis",value:function(){var t=this,e=this.w;e.globals.ignoreYAxisIndexes=e.globals.collapsedSeries.map((function(i,a){if(t.w.globals.isMultipleYAxis&&!e.config.chart.stacked)return i.index}))}}]),t}(),W=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w,this.tooltipKeyFormat="dd MMM"}return a(t,[{key:"xLabelFormat",value:function(t,e,i,a){var s=this.w;if("datetime"===s.config.xaxis.type&&void 0===s.config.xaxis.labels.formatter&&void 0===s.config.tooltip.x.formatter){var r=new Y(this.ctx);return r.formatDate(r.getDate(e),s.config.tooltip.x.format)}return t(e,i,a)}},{key:"defaultGeneralFormatter",value:function(t){return Array.isArray(t)?t.map((function(t){return t})):t}},{key:"defaultYFormatter",value:function(t,e,i){var a=this.w;return f.isNumber(t)&&(t=0!==a.globals.yValueDecimal?t.toFixed(void 0!==e.decimalsInFloat?e.decimalsInFloat:a.globals.yValueDecimal):a.globals.maxYArr[i]-a.globals.minYArr[i]<5?t.toFixed(1):t.toFixed(0)),t}},{key:"setLabelFormatters",value:function(){var t=this,e=this.w;return e.globals.xLabelFormatter=function(e){return t.defaultGeneralFormatter(e)},e.globals.xaxisTooltipFormatter=function(e){return t.defaultGeneralFormatter(e)},e.globals.ttKeyFormatter=function(e){return t.defaultGeneralFormatter(e)},e.globals.ttZFormatter=function(t){return t},e.globals.legendFormatter=function(e){return t.defaultGeneralFormatter(e)},void 0!==e.config.xaxis.labels.formatter?e.globals.xLabelFormatter=e.config.xaxis.labels.formatter:e.globals.xLabelFormatter=function(t){if(f.isNumber(t)){if(!e.config.xaxis.convertedCatToNumeric&&"numeric"===e.config.xaxis.type&&e.globals.dataPoints<50)return t.toFixed(1);if(e.globals.isBarHorizontal)if(e.globals.maxY-e.globals.minYArr<4)return t.toFixed(1);return t.toFixed(0)}return t},"function"==typeof e.config.tooltip.x.formatter?e.globals.ttKeyFormatter=e.config.tooltip.x.formatter:e.globals.ttKeyFormatter=e.globals.xLabelFormatter,"function"==typeof e.config.xaxis.tooltip.formatter&&(e.globals.xaxisTooltipFormatter=e.config.xaxis.tooltip.formatter),(Array.isArray(e.config.tooltip.y)||void 0!==e.config.tooltip.y.formatter)&&(e.globals.ttVal=e.config.tooltip.y),void 0!==e.config.tooltip.z.formatter&&(e.globals.ttZFormatter=e.config.tooltip.z.formatter),void 0!==e.config.legend.formatter&&(e.globals.legendFormatter=e.config.legend.formatter),e.config.yaxis.forEach((function(i,a){void 0!==i.labels.formatter?e.globals.yLabelFormatters[a]=i.labels.formatter:e.globals.yLabelFormatters[a]=function(s){return e.globals.xyCharts?Array.isArray(s)?s.map((function(e){return t.defaultYFormatter(e,i,a)})):t.defaultYFormatter(s,i,a):s}})),e.globals}},{key:"heatmapLabelFormatters",value:function(){var t=this.w;if("heatmap"===t.config.chart.type){t.globals.yAxisScale[0].result=t.globals.seriesNames.slice();var e=t.globals.seriesNames.reduce((function(t,e){return t.length>e.length?t:e}),0);t.globals.yAxisScale[0].niceMax=e,t.globals.yAxisScale[0].niceMin=e}}}]),t}(),B=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w}return a(t,[{key:"getLabel",value:function(t,e,i,a){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"12px",n=this.w,o=void 0===t[a]?"":t[a],l=o,h=n.globals.xLabelFormatter,c=n.config.xaxis.labels.formatter,d=!1,g=new W(this.ctx),u=o;l=g.xLabelFormat(h,o,u,{i:a,dateFormatter:new Y(this.ctx).formatDate,w:n}),void 0!==c&&(l=c(o,t[a],{i:a,dateFormatter:new Y(this.ctx).formatDate,w:n}));var f=function(t){var i=null;return e.forEach((function(t){"month"===t.unit?i="year":"day"===t.unit?i="month":"hour"===t.unit?i="day":"minute"===t.unit&&(i="hour")})),i===t};e.length>0?(d=f(e[a].unit),i=e[a].position,l=e[a].value):"datetime"===n.config.xaxis.type&&void 0===c&&(l=""),void 0===l&&(l=""),l=Array.isArray(l)?l:l.toString();var p=new b(this.ctx),x={};x=n.globals.rotateXLabels?p.getTextRects(l,parseInt(r,10),null,"rotate(".concat(n.config.xaxis.labels.rotate," 0 0)"),!1):p.getTextRects(l,parseInt(r,10));var m=!n.config.xaxis.labels.showDuplicates&&this.ctx.timeScale;return!Array.isArray(l)&&(0===l.indexOf("NaN")||0===l.toLowerCase().indexOf("invalid")||l.toLowerCase().indexOf("infinity")>=0||s.indexOf(l)>=0&&m)&&(l=""),{x:i,text:l,textRect:x,isBold:d}}},{key:"checkLabelBasedOnTickamount",value:function(t,e,i){var a=this.w,s=a.config.xaxis.tickAmount;return"dataPoints"===s&&(s=Math.round(a.globals.gridWidth/120)),s>i||t%Math.round(i/(s+1))==0||(e.text=""),e}},{key:"checkForOverflowingLabels",value:function(t,e,i,a,s){var r=this.w;if(0===t&&r.globals.skipFirstTimelinelabel&&(e.text=""),t===i-1&&r.globals.skipLastTimelinelabel&&(e.text=""),r.config.xaxis.labels.hideOverlappingLabels&&a.length>0){var n=s[s.length-1];e.x<n.textRect.width/(r.globals.rotateXLabels?Math.abs(r.config.xaxis.labels.rotate)/12:1.01)+n.x&&(e.text="")}return e}},{key:"checkForReversedLabels",value:function(t,e){var i=this.w;return i.config.yaxis[t]&&i.config.yaxis[t].reversed&&e.reverse(),e}},{key:"isYAxisHidden",value:function(t){var e=this.w,i=new y(this.ctx);return!e.config.yaxis[t].show||!e.config.yaxis[t].showForNullSeries&&i.isSeriesNull(t)&&-1===e.globals.collapsedSeriesIndices.indexOf(t)}},{key:"getYAxisForeColor",value:function(t,e){var i=this.w;return Array.isArray(t)&&i.globals.yAxisScale[e]&&this.ctx.theme.pushExtraColors(t,i.globals.yAxisScale[e].result.length,!1),t}},{key:"drawYAxisTicks",value:function(t,e,i,a,s,r,n){var o=this.w,l=new b(this.ctx),h=o.globals.translateY;if(a.show&&e>0){!0===o.config.yaxis[s].opposite&&(t+=a.width);for(var c=e;c>=0;c--){var d=h+e/10+o.config.yaxis[s].labels.offsetY-1;o.globals.isBarHorizontal&&(d=r*c),"heatmap"===o.config.chart.type&&(d+=r/2);var g=l.drawLine(t+i.offsetX-a.width+a.offsetX,d+a.offsetY,t+i.offsetX+a.offsetX,d+a.offsetY,a.color);n.add(g),h+=r}}}}]),t}(),V=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w}return a(t,[{key:"fixSvgStringForIe11",value:function(t){if(!f.isIE11())return t;var e=0,i=t.replace(/xmlns="http:\/\/www.w3.org\/2000\/svg"/g,(function(t){return 2===++e?'xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs"':t}));return i=(i=i.replace(/xmlns:NS\d+=""/g,"")).replace(/NS\d+:(\w+:\w+=")/g,"$1")}},{key:"getSvgString",value:function(){var t=this.w.globals.dom.Paper.svg();return this.fixSvgStringForIe11(t)}},{key:"cleanup",value:function(){var t=this.w,e=t.globals.dom.baseEl.getElementsByClassName("apexcharts-xcrosshairs"),i=t.globals.dom.baseEl.getElementsByClassName("apexcharts-ycrosshairs"),a=t.globals.dom.baseEl.querySelectorAll(".apexcharts-zoom-rect, .apexcharts-selection-rect");Array.prototype.forEach.call(a,(function(t){t.setAttribute("width",0)})),e&&e[0]&&(e[0].setAttribute("x",-500),e[0].setAttribute("x1",-500),e[0].setAttribute("x2",-500)),i&&i[0]&&(i[0].setAttribute("y",-100),i[0].setAttribute("y1",-100),i[0].setAttribute("y2",-100))}},{key:"svgUrl",value:function(){this.cleanup();var t=this.getSvgString(),e=new Blob([t],{type:"image/svg+xml;charset=utf-8"});return URL.createObjectURL(e)}},{key:"dataURI",value:function(){var t=this;return new Promise((function(e){var i=t.w;t.cleanup();var a=document.createElement("canvas");a.width=i.globals.svgWidth,a.height=parseInt(i.globals.dom.elWrap.style.height,10);var s="transparent"===i.config.chart.background?"#fff":i.config.chart.background,r=a.getContext("2d");r.fillStyle=s,r.fillRect(0,0,a.width,a.height);var n=t.getSvgString();if(window.canvg&&f.isIE11()){var o=window.canvg.Canvg.fromString(r,n,{ignoreClear:!0,ignoreDimensions:!0});o.start();var l=a.msToBlob();o.stop(),e({blob:l})}else{var h="data:image/svg+xml,"+encodeURIComponent(n),c=new Image;c.crossOrigin="anonymous",c.onload=function(){if(r.drawImage(c,0,0),a.msToBlob){var t=a.msToBlob();e({blob:t})}else{var i=a.toDataURL("image/png");e({imgURI:i})}},c.src=h}}))}},{key:"exportToSVG",value:function(){this.triggerDownload(this.svgUrl(),this.w.config.chart.toolbar.export.svg.filename,".svg")}},{key:"exportToPng",value:function(){var t=this;this.dataURI().then((function(e){var i=e.imgURI,a=e.blob;a?navigator.msSaveOrOpenBlob(a,t.w.globals.chartID+".png"):t.triggerDownload(i,t.w.config.chart.toolbar.export.png.filename,".png")}))}},{key:"exportToCSV",value:function(t){var e=this,i=t.series,a=t.columnDelimiter,s=t.lineDelimiter,r=void 0===s?"\n":s,n=this.w,o=[],l=[],h="data:text/csv;charset=utf-8,",c=new O(this.ctx),d=new B(this.ctx),g=function(t){var i="";if(n.globals.axisCharts){if("category"===n.config.xaxis.type||n.config.xaxis.convertedCatToNumeric)if(n.globals.isBarHorizontal){var s=n.globals.yLabelFormatters[0],r=new M(e.ctx).getActiveConfigSeriesIndex();i=s(n.globals.labels[t],{seriesIndex:r,dataPointIndex:t,w:n})}else i=d.getLabel(n.globals.labels,n.globals.timescaleLabels,0,t).text;"datetime"===n.config.xaxis.type&&(n.config.xaxis.categories.length?i=n.config.xaxis.categories[t]:n.config.labels.length&&(i=n.config.labels[t]))}else i=n.config.labels[t];return f.isNumber(i)?i:i.split(a).join("")};o.push(n.config.chart.toolbar.export.csv.headerCategory),i.map((function(t,e){var i=t.name?t.name:"series-".concat(e);n.globals.axisCharts&&o.push(i.split(a).join("")?i.split(a).join(""):"series-".concat(e))})),n.globals.axisCharts||(o.push(n.config.chart.toolbar.export.csv.headerValue),l.push(o.join(a))),i.map((function(t,e){n.globals.axisCharts?function(t,e){if(o.length&&0===e&&l.push(o.join(a)),t.data&&t.data.length)for(var s=0;s<t.data.length;s++){o=[];var r=g(s);if(r||(c.isFormatXY()?r=i[e].data[s].x:c.isFormat2DArray()&&(r=i[e].data[s]?i[e].data[s][0]:"")),0===e){o.push((d=r,"datetime"===n.config.xaxis.type&&String(d).length>=10?n.config.chart.toolbar.export.csv.dateFormatter(r):r.split(a).join("")));for(var h=0;h<n.globals.series.length;h++)o.push(n.globals.series[h][s])}("candlestick"===n.config.chart.type||t.type&&"candlestick"===t.type)&&(o.pop(),o.push(n.globals.seriesCandleO[e][s]),o.push(n.globals.seriesCandleH[e][s]),o.push(n.globals.seriesCandleL[e][s]),o.push(n.globals.seriesCandleC[e][s])),"rangeBar"===n.config.chart.type&&(o.pop(),o.push(n.globals.seriesRangeStart[e][s]),o.push(n.globals.seriesRangeEnd[e][s])),o.length&&l.push(o.join(a))}var d}(t,e):((o=[]).push(n.globals.labels[e].split(a).join("")),o.push(n.globals.series[e]),l.push(o.join(a)))})),h+=l.join(r),this.triggerDownload(encodeURI(h),n.config.chart.toolbar.export.csv.filename,".csv")}},{key:"triggerDownload",value:function(t,e,i){var a=document.createElement("a");a.href=t,a.download=(e||this.w.globals.chartID)+i,document.body.appendChild(a),a.click(),document.body.removeChild(a)}}]),t}(),G=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w;var a=this.w;this.axesUtils=new B(i),this.xaxisLabels=a.globals.labels.slice(),a.globals.timescaleLabels.length>0&&!a.globals.isBarHorizontal&&(this.xaxisLabels=a.globals.timescaleLabels.slice()),this.drawnLabels=[],this.drawnLabelsRects=[],"top"===a.config.xaxis.position?this.offY=0:this.offY=a.globals.gridHeight+1,this.offY=this.offY+a.config.xaxis.axisBorder.offsetY,this.isCategoryBarHorizontal="bar"===a.config.chart.type&&a.config.plotOptions.bar.horizontal,this.xaxisFontSize=a.config.xaxis.labels.style.fontSize,this.xaxisFontFamily=a.config.xaxis.labels.style.fontFamily,this.xaxisForeColors=a.config.xaxis.labels.style.colors,this.xaxisBorderWidth=a.config.xaxis.axisBorder.width,this.isCategoryBarHorizontal&&(this.xaxisBorderWidth=a.config.yaxis[0].axisBorder.width.toString()),this.xaxisBorderWidth.indexOf("%")>-1?this.xaxisBorderWidth=a.globals.gridWidth*parseInt(this.xaxisBorderWidth,10)/100:this.xaxisBorderWidth=parseInt(this.xaxisBorderWidth,10),this.xaxisBorderHeight=a.config.xaxis.axisBorder.height,this.yaxis=a.config.yaxis[0]}return a(t,[{key:"drawXaxis",value:function(){var t,e=this,i=this.w,a=new b(this.ctx),s=a.group({class:"apexcharts-xaxis",transform:"translate(".concat(i.config.xaxis.offsetX,", ").concat(i.config.xaxis.offsetY,")")}),r=a.group({class:"apexcharts-xaxis-texts-g",transform:"translate(".concat(i.globals.translateXAxisX,", ").concat(i.globals.translateXAxisY,")")});s.add(r);for(var n=i.globals.padHorizontal,o=[],l=0;l<this.xaxisLabels.length;l++)o.push(this.xaxisLabels[l]);var h=o.length;if(i.globals.isXNumeric){var c=h>1?h-1:h;t=i.globals.gridWidth/c,n=n+t/2+i.config.xaxis.labels.offsetX}else t=i.globals.gridWidth/o.length,n=n+t+i.config.xaxis.labels.offsetX;for(var d=function(s){var l=n-t/2+i.config.xaxis.labels.offsetX;0===s&&1===h&&t/2===n&&1===i.globals.dataPoints&&(l=i.globals.gridWidth/2);var c=e.axesUtils.getLabel(o,i.globals.timescaleLabels,l,s,e.drawnLabels,e.xaxisFontSize),d=28;i.globals.rotateXLabels&&(d=22);if((c=void 0!==i.config.xaxis.tickAmount&&"dataPoints"!==i.config.xaxis.tickAmount&&"datetime"!==i.config.xaxis.type?e.axesUtils.checkLabelBasedOnTickamount(s,c,h):e.axesUtils.checkForOverflowingLabels(s,c,h,e.drawnLabels,e.drawnLabelsRects)).text&&i.globals.xaxisLabelsCount++,i.config.xaxis.labels.show){var g=a.drawText({x:c.x,y:e.offY+i.config.xaxis.labels.offsetY+d-("top"===i.config.xaxis.position?i.globals.xAxisHeight+i.config.xaxis.axisTicks.height-2:0),text:c.text,textAnchor:"middle",fontWeight:c.isBold?600:i.config.xaxis.labels.style.fontWeight,fontSize:e.xaxisFontSize,fontFamily:e.xaxisFontFamily,foreColor:Array.isArray(e.xaxisForeColors)?i.config.xaxis.convertedCatToNumeric?e.xaxisForeColors[i.globals.minX+s-1]:e.xaxisForeColors[s]:e.xaxisForeColors,isPlainText:!1,cssClass:"apexcharts-xaxis-label "+i.config.xaxis.labels.style.cssClass});r.add(g);var u=document.createElementNS(i.globals.SVGNS,"title");u.textContent=Array.isArray(c.text)?c.text.join(" "):c.text,g.node.appendChild(u),""!==c.text&&(e.drawnLabels.push(c.text),e.drawnLabelsRects.push(c))}n+=t},g=0;g<=h-1;g++)d(g);if(void 0!==i.config.xaxis.title.text){var u=a.group({class:"apexcharts-xaxis-title"}),f=a.drawText({x:i.globals.gridWidth/2+i.config.xaxis.title.offsetX,y:this.offY-parseFloat(this.xaxisFontSize)+i.globals.xAxisLabelsHeight+i.config.xaxis.title.offsetY,text:i.config.xaxis.title.text,textAnchor:"middle",fontSize:i.config.xaxis.title.style.fontSize,fontFamily:i.config.xaxis.title.style.fontFamily,fontWeight:i.config.xaxis.title.style.fontWeight,foreColor:i.config.xaxis.title.style.color,cssClass:"apexcharts-xaxis-title-text "+i.config.xaxis.title.style.cssClass});u.add(f),s.add(u)}if(i.config.xaxis.axisBorder.show){var p=i.globals.barPadForNumericAxis,x=a.drawLine(i.globals.padHorizontal+i.config.xaxis.axisBorder.offsetX-p,this.offY,this.xaxisBorderWidth+p,this.offY,i.config.xaxis.axisBorder.color,0,this.xaxisBorderHeight);s.add(x)}return s}},{key:"drawXaxisInversed",value:function(t){var e,i,a=this,s=this.w,r=new b(this.ctx),n=s.config.yaxis[0].opposite?s.globals.translateYAxisX[t]:0,o=r.group({class:"apexcharts-yaxis apexcharts-xaxis-inversed",rel:t}),l=r.group({class:"apexcharts-yaxis-texts-g apexcharts-xaxis-inversed-texts-g",transform:"translate("+n+", 0)"});o.add(l);var h=[];if(s.config.yaxis[t].show)for(var c=0;c<this.xaxisLabels.length;c++)h.push(this.xaxisLabels[c]);e=s.globals.gridHeight/h.length,i=-e/2.2;var d=s.globals.yLabelFormatters[0],g=s.config.yaxis[0].labels;if(g.show)for(var u=function(n){var o=void 0===h[n]?"":h[n];o=d(o,{seriesIndex:t,dataPointIndex:n,w:s});var c=a.axesUtils.getYAxisForeColor(g.style.colors,t),u=0;Array.isArray(o)&&(u=o.length/2*parseInt(g.style.fontSize,10));var f=r.drawText({x:g.offsetX-15,y:i+e+g.offsetY-u,text:o,textAnchor:a.yaxis.opposite?"start":"end",foreColor:Array.isArray(c)?c[n]:c,fontSize:g.style.fontSize,fontFamily:g.style.fontFamily,fontWeight:g.style.fontWeight,isPlainText:!1,cssClass:"apexcharts-yaxis-label "+g.style.cssClass});l.add(f);var p=document.createElementNS(s.globals.SVGNS,"title");if(p.textContent=o.text,f.node.appendChild(p),0!==s.config.yaxis[t].labels.rotate){var x=r.rotateAroundCenter(f.node);f.node.setAttribute("transform","rotate(".concat(s.config.yaxis[t].labels.rotate," 0 ").concat(x.y,")"))}i+=e},f=0;f<=h.length-1;f++)u(f);if(void 0!==s.config.yaxis[0].title.text){var p=r.group({class:"apexcharts-yaxis-title apexcharts-xaxis-title-inversed",transform:"translate("+n+", 0)"}),x=r.drawText({x:0,y:s.globals.gridHeight/2,text:s.config.yaxis[0].title.text,textAnchor:"middle",foreColor:s.config.yaxis[0].title.style.color,fontSize:s.config.yaxis[0].title.style.fontSize,fontWeight:s.config.yaxis[0].title.style.fontWeight,fontFamily:s.config.yaxis[0].title.style.fontFamily,cssClass:"apexcharts-yaxis-title-text "+s.config.yaxis[0].title.style.cssClass});p.add(x),o.add(p)}var m=0;this.isCategoryBarHorizontal&&s.config.yaxis[0].opposite&&(m=s.globals.gridWidth);var v=s.config.xaxis.axisBorder;if(v.show){var y=r.drawLine(s.globals.padHorizontal+v.offsetX+m,1+v.offsetY,s.globals.padHorizontal+v.offsetX+m,s.globals.gridHeight+v.offsetY,v.color,0);o.add(y)}return s.config.yaxis[0].axisTicks.show&&this.axesUtils.drawYAxisTicks(m,h.length,s.config.yaxis[0].axisBorder,s.config.yaxis[0].axisTicks,0,e,o),o}},{key:"drawXaxisTicks",value:function(t,e){var i=this.w,a=t;if(!(t<0||t-2>i.globals.gridWidth)){var s=this.offY+i.config.xaxis.axisTicks.offsetY,r=s+i.config.xaxis.axisTicks.height;if("top"===i.config.xaxis.position&&(r=s-i.config.xaxis.axisTicks.height),i.config.xaxis.axisTicks.show){var n=new b(this.ctx).drawLine(t+i.config.xaxis.axisTicks.offsetX,s+i.config.xaxis.offsetY,a+i.config.xaxis.axisTicks.offsetX,r+i.config.xaxis.offsetY,i.config.xaxis.axisTicks.color);e.add(n),n.node.classList.add("apexcharts-xaxis-tick")}}}},{key:"getXAxisTicksPositions",value:function(){var t=this.w,e=[],i=this.xaxisLabels.length,a=t.globals.padHorizontal;if(t.globals.timescaleLabels.length>0)for(var s=0;s<i;s++)a=this.xaxisLabels[s].position,e.push(a);else for(var r=i,n=0;n<r;n++){var o=r;t.globals.isXNumeric&&"bar"!==t.config.chart.type&&(o-=1),a+=t.globals.gridWidth/o,e.push(a)}return e}},{key:"xAxisLabelCorrections",value:function(){var t=this.w,e=new b(this.ctx),i=t.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g"),a=t.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-texts-g text"),s=t.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-inversed text"),r=t.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-inversed-texts-g text tspan");if(t.globals.rotateXLabels||t.config.xaxis.labels.rotateAlways)for(var n=0;n<a.length;n++){var o=e.rotateAroundCenter(a[n]);o.y=o.y-1,o.x=o.x+1,a[n].setAttribute("transform","rotate(".concat(t.config.xaxis.labels.rotate," ").concat(o.x," ").concat(o.y,")")),a[n].setAttribute("text-anchor","end");i.setAttribute("transform","translate(0, ".concat(-10,")"));var l=a[n].childNodes;t.config.xaxis.labels.trim&&Array.prototype.forEach.call(l,(function(i){e.placeTextWithEllipsis(i,i.textContent,t.config.xaxis.labels.maxHeight-("bottom"===t.config.legend.position?20:10))}))}else!function(){for(var i=t.globals.gridWidth/(t.globals.labels.length+1),s=0;s<a.length;s++){var r=a[s].childNodes;t.config.xaxis.labels.trim&&"datetime"!==t.config.xaxis.type&&Array.prototype.forEach.call(r,(function(t){e.placeTextWithEllipsis(t,t.textContent,i)}))}}();if(s.length>0){var h=s[s.length-1].getBBox(),c=s[0].getBBox();h.x<-20&&s[s.length-1].parentNode.removeChild(s[s.length-1]),c.x+c.width>t.globals.gridWidth&&!t.globals.isBarHorizontal&&s[0].parentNode.removeChild(s[0]);for(var d=0;d<r.length;d++)e.placeTextWithEllipsis(r[d],r[d].textContent,t.config.yaxis[0].labels.maxWidth-2*parseFloat(t.config.yaxis[0].title.style.fontSize)-20)}}}]),t}(),_=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w;var a=this.w;this.xaxisLabels=a.globals.labels.slice(),this.axesUtils=new B(i),this.isTimelineBar="datetime"===a.config.xaxis.type&&a.globals.seriesRangeBarTimeline.length,a.globals.timescaleLabels.length>0&&(this.xaxisLabels=a.globals.timescaleLabels.slice())}return a(t,[{key:"drawGridArea",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=this.w,i=new b(this.ctx);null===t&&(t=i.group({class:"apexcharts-grid"}));var a=i.drawLine(e.globals.padHorizontal,1,e.globals.padHorizontal,e.globals.gridHeight,"transparent"),s=i.drawLine(e.globals.padHorizontal,e.globals.gridHeight,e.globals.gridWidth,e.globals.gridHeight,"transparent");return t.add(s),t.add(a),t}},{key:"drawGrid",value:function(){var t=null;return this.w.globals.axisCharts&&(t=this.renderGrid(),this.drawGridArea(t.el)),t}},{key:"createGridMask",value:function(){var t=this.w,e=t.globals,i=new b(this.ctx),a=Array.isArray(t.config.stroke.width)?0:t.config.stroke.width;if(Array.isArray(t.config.stroke.width)){var s=0;t.config.stroke.width.forEach((function(t){s=Math.max(s,t)})),a=s}e.dom.elGridRectMask=document.createElementNS(e.SVGNS,"clipPath"),e.dom.elGridRectMask.setAttribute("id","gridRectMask".concat(e.cuid)),e.dom.elGridRectMarkerMask=document.createElementNS(e.SVGNS,"clipPath"),e.dom.elGridRectMarkerMask.setAttribute("id","gridRectMarkerMask".concat(e.cuid));var r=t.config.chart.type,n=0,o=0;("bar"===r||"rangeBar"===r||t.globals.comboBarCount>0)&&t.globals.isXNumeric&&!t.globals.isBarHorizontal&&(n=t.config.grid.padding.left,o=t.config.grid.padding.right,e.barPadForNumericAxis>n&&(n=e.barPadForNumericAxis,o=e.barPadForNumericAxis)),e.dom.elGridRect=i.drawRect(-a/2-n-2,-a/2,e.gridWidth+a+o+n+4,e.gridHeight+a,0,"#fff"),new y(this).getLargestMarkerSize();var l=t.globals.markers.largestSize+1;e.dom.elGridRectMarker=i.drawRect(2*-l,2*-l,e.gridWidth+4*l,e.gridHeight+4*l,0,"#fff"),e.dom.elGridRectMask.appendChild(e.dom.elGridRect.node),e.dom.elGridRectMarkerMask.appendChild(e.dom.elGridRectMarker.node);var h=e.dom.baseEl.querySelector("defs");h.appendChild(e.dom.elGridRectMask),h.appendChild(e.dom.elGridRectMarkerMask)}},{key:"_drawGridLines",value:function(t){var e=t.i,i=t.x1,a=t.y1,s=t.x2,r=t.y2,n=t.xCount,o=t.parent,l=this.w;0===e&&l.globals.skipFirstTimelinelabel||e===n-1&&l.globals.skipLastTimelinelabel&&!l.config.xaxis.labels.formatter||"radar"===l.config.chart.type||(l.config.grid.xaxis.lines.show&&this._drawGridLine({x1:i,y1:a,x2:s,y2:r,parent:o}),new G(this.ctx).drawXaxisTicks(i,this.elg))}},{key:"_drawGridLine",value:function(t){var e=t.x1,i=t.y1,a=t.x2,s=t.y2,r=t.parent,n=this.w,o=r.node.classList.contains("apexcharts-gridlines-horizontal"),l=n.config.grid.strokeDashArray,h=n.globals.barPadForNumericAxis,c=new b(this).drawLine(e-(o?h:0),i,a+(o?h:0),s,n.config.grid.borderColor,l);c.node.classList.add("apexcharts-gridline"),r.add(c)}},{key:"_drawGridBandRect",value:function(t){var e=t.c,i=t.x1,a=t.y1,s=t.x2,r=t.y2,n=t.type,o=this.w,l=new b(this.ctx),h=o.globals.barPadForNumericAxis;if("column"!==n||"datetime"!==o.config.xaxis.type){var c=o.config.grid[n].colors[e],d=l.drawRect(i-("row"===n?h:0),a,s+("row"===n?2*h:0),r,0,c,o.config.grid[n].opacity);this.elg.add(d),d.attr("clip-path","url(#gridRectMask".concat(o.globals.cuid,")")),d.node.classList.add("apexcharts-grid-".concat(n))}}},{key:"_drawXYLines",value:function(t){var e=this,i=t.xCount,a=t.tickAmount,s=this.w;if(s.config.grid.xaxis.lines.show||s.config.xaxis.axisTicks.show){var r,n=s.globals.padHorizontal,o=s.globals.gridHeight;s.globals.timescaleLabels.length?function(t){for(var a=t.xC,s=t.x1,r=t.y1,n=t.x2,o=t.y2,l=0;l<a;l++)s=e.xaxisLabels[l].position,n=e.xaxisLabels[l].position,e._drawGridLines({i:l,x1:s,y1:r,x2:n,y2:o,xCount:i,parent:e.elgridLinesV})}({xC:i,x1:n,y1:0,x2:r,y2:o}):(s.globals.isXNumeric&&(i=s.globals.xAxisScale.result.length),s.config.xaxis.convertedCatToNumeric&&(i=s.globals.xaxisLabelsCount),function(t){var a=t.xC,r=t.x1,n=t.y1,o=t.x2,l=t.y2;if(void 0!==s.config.xaxis.tickAmount&&"dataPoints"!==s.config.xaxis.tickAmount)s.globals.dom.baseEl.querySelectorAll(".apexcharts-text.apexcharts-xaxis-label tspan:not(:empty)").forEach((function(t,a){var s=t.getBBox();e._drawGridLines({i:a,x1:s.x+s.width/2,y1:n,x2:s.x+s.width/2,y2:l,xCount:i,parent:e.elgridLinesV})}));else for(var h=0;h<a+(s.globals.isXNumeric?0:1);h++)0===h&&1===a&&1===s.globals.dataPoints&&(o=r=s.globals.gridWidth/2),e._drawGridLines({i:h,x1:r,y1:n,x2:o,y2:l,xCount:i,parent:e.elgridLinesV}),o=r+=s.globals.gridWidth/(s.globals.isXNumeric?a-1:a)}({xC:i,x1:n,y1:0,x2:r,y2:o}))}if(s.config.grid.yaxis.lines.show){var l=0,h=0,c=s.globals.gridWidth,d=a+1;this.isTimelineBar&&(d=s.globals.labels.length);for(var g=0;g<d+(this.isTimelineBar?1:0);g++)this._drawGridLine({x1:0,y1:l,x2:c,y2:h,parent:this.elgridLinesH}),h=l+=s.globals.gridHeight/(this.isTimelineBar?d:a)}}},{key:"_drawInvertedXYLines",value:function(t){var e=t.xCount,i=this.w;if(i.config.grid.xaxis.lines.show||i.config.xaxis.axisTicks.show)for(var a,s=i.globals.padHorizontal,r=i.globals.gridHeight,n=0;n<e+1;n++){i.config.grid.xaxis.lines.show&&this._drawGridLine({x1:s,y1:0,x2:a,y2:r,parent:this.elgridLinesV}),new G(this.ctx).drawXaxisTicks(s,this.elg),a=s=s+i.globals.gridWidth/e+.3}if(i.config.grid.yaxis.lines.show)for(var o=0,l=0,h=i.globals.gridWidth,c=0;c<i.globals.dataPoints+1;c++)this._drawGridLine({x1:0,y1:o,x2:h,y2:l,parent:this.elgridLinesH}),l=o+=i.globals.gridHeight/i.globals.dataPoints}},{key:"renderGrid",value:function(){var t=this.w,e=new b(this.ctx);this.elg=e.group({class:"apexcharts-grid"}),this.elgridLinesH=e.group({class:"apexcharts-gridlines-horizontal"}),this.elgridLinesV=e.group({class:"apexcharts-gridlines-vertical"}),this.elg.add(this.elgridLinesH),this.elg.add(this.elgridLinesV),t.config.grid.show||(this.elgridLinesV.hide(),this.elgridLinesH.hide());for(var i,a=t.globals.yAxisScale.length?t.globals.yAxisScale[0].result.length-1:5,s=0;s<t.globals.series.length&&(void 0!==t.globals.yAxisScale[s]&&(a=t.globals.yAxisScale[s].result.length-1),!(a>2));s++);return!t.globals.isBarHorizontal||this.isTimelineBar?(i=this.xaxisLabels.length,this.isTimelineBar&&(a=t.globals.labels.length,t.config.xaxis.tickAmount&&t.config.xaxis.labels.formatter&&(i=t.config.xaxis.tickAmount)),this._drawXYLines({xCount:i,tickAmount:a})):(i=a,a=t.globals.xTickAmount,this._drawInvertedXYLines({xCount:i,tickAmount:a})),this.drawGridBands(i,a),{el:this.elg,xAxisTickWidth:t.globals.gridWidth/i}}},{key:"drawGridBands",value:function(t,e){var i=this.w;if(void 0!==i.config.grid.row.colors&&i.config.grid.row.colors.length>0)for(var a=0,s=i.globals.gridHeight/e,r=i.globals.gridWidth,n=0,o=0;n<e;n++,o++)o>=i.config.grid.row.colors.length&&(o=0),this._drawGridBandRect({c:o,x1:0,y1:a,x2:r,y2:s,type:"row"}),a+=i.globals.gridHeight/e;if(void 0!==i.config.grid.column.colors&&i.config.grid.column.colors.length>0)for(var l=i.globals.isBarHorizontal||"category"!==i.config.xaxis.type&&!i.config.xaxis.convertedCatToNumeric?t:t-1,h=i.globals.padHorizontal,c=i.globals.padHorizontal+i.globals.gridWidth/l,d=i.globals.gridHeight,g=0,u=0;g<t;g++,u++)u>=i.config.grid.column.colors.length&&(u=0),this._drawGridBandRect({c:u,x1:h,y1:0,x2:c,y2:d,type:"column"}),h+=i.globals.gridWidth/l}}]),t}(),j=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w}return a(t,[{key:"niceScale",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,s=arguments.length>4?arguments[4]:void 0,r=this.w,n=Math.abs(e-t);if("dataPoints"===(i=this._adjustTicksForSmallRange(i,a,n))&&(i=r.globals.dataPoints-1),t===Number.MIN_VALUE&&0===e||!f.isNumber(t)&&!f.isNumber(e)||t===Number.MIN_VALUE&&e===-Number.MAX_VALUE){t=0,e=i;var o=this.linearScale(t,e,i);return o}t>e?(console.warn("axis.min cannot be greater than axis.max"),e=t+.1):t===e&&(t=0===t?0:t-.5,e=0===e?2:e+.5);var l=[];n<1&&s&&("candlestick"===r.config.chart.type||"candlestick"===r.config.series[a].type||r.globals.isRangeData)&&(e*=1.01);var h=i+1;h<2?h=2:h>2&&(h-=2);var c=n/h,d=Math.floor(f.log10(c)),g=Math.pow(10,d),u=Math.round(c/g);u<1&&(u=1);var p=u*g,x=p*Math.floor(t/p),b=p*Math.ceil(e/p),m=x;if(s&&n>2){for(;l.push(m),!((m+=p)>b););return{result:l,niceMin:l[0],niceMax:l[l.length-1]}}var v=t;(l=[]).push(v);for(var y=Math.abs(e-t)/i,w=0;w<=i;w++)v+=y,l.push(v);return l[l.length-2]>=e&&l.pop(),{result:l,niceMin:l[0],niceMax:l[l.length-1]}}},{key:"linearScale",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,a=arguments.length>3?arguments[3]:void 0,s=Math.abs(e-t),r=s/(i=this._adjustTicksForSmallRange(i,a,s));i===Number.MAX_VALUE&&(i=10,r=1);for(var n=[],o=t;i>=0;)n.push(o),o+=r,i-=1;return{result:n,niceMin:n[0],niceMax:n[n.length-1]}}},{key:"logarithmicScale",value:function(t){for(var e=[],i=Math.ceil(Math.log10(t))+1,a=0;a<i;a++)e.push(Math.pow(10,a));return{result:e,niceMin:e[0],niceMax:e[e.length-1]}}},{key:"_adjustTicksForSmallRange",value:function(t,e,i){var a=t;if(void 0!==e&&this.w.config.yaxis[e].labels.formatter&&void 0===this.w.config.yaxis[e].tickAmount){var s=this.w.config.yaxis[e].labels.formatter(1);f.isNumber(Number(s))&&!f.isFloat(s)&&(a=Math.ceil(i))}return a<t?a:t}},{key:"setYScaleForIndex",value:function(t,e,i){var a=this.w.globals,s=this.w.config,r=a.isBarHorizontal?s.xaxis:s.yaxis[t];void 0===a.yAxisScale[t]&&(a.yAxisScale[t]=[]);var n=Math.abs(i-e);if(r.logarithmic&&n<=5&&(a.invalidLogScale=!0),r.logarithmic&&n>5)a.allSeriesCollapsed=!1,a.yAxisScale[t]=this.logarithmicScale(i);else if(i!==-Number.MAX_VALUE&&f.isNumber(i))if(a.allSeriesCollapsed=!1,void 0===r.min&&void 0===r.max||r.forceNiceScale){var o=void 0===s.yaxis[t].max&&void 0===s.yaxis[t].min||s.yaxis[t].forceNiceScale;a.yAxisScale[t]=this.niceScale(e,i,r.tickAmount?r.tickAmount:n<5&&n>1?n+1:5,t,o)}else a.yAxisScale[t]=this.linearScale(e,i,r.tickAmount,t);else a.yAxisScale[t]=this.linearScale(0,5,5)}},{key:"setXScale",value:function(t,e){var i=this.w,a=i.globals,s=i.config.xaxis,r=Math.abs(e-t);return e!==-Number.MAX_VALUE&&f.isNumber(e)?a.xAxisScale=this.niceScale(t,e,s.tickAmount?s.tickAmount:r<5&&r>1?r+1:5,0):a.xAxisScale=this.linearScale(0,5,5),a.xAxisScale}},{key:"setMultipleYScales",value:function(){var t=this,e=this.w.globals,i=this.w.config,a=e.minYArr.concat([]),s=e.maxYArr.concat([]),r=[];i.yaxis.forEach((function(e,n){var o=n;i.series.forEach((function(t,i){t.name===e.seriesName&&(o=i,n!==i?r.push({index:i,similarIndex:n,alreadyExists:!0}):r.push({index:i}))}));var l=a[o],h=s[o];t.setYScaleForIndex(n,l,h)})),this.sameScaleInMultipleAxes(a,s,r)}},{key:"sameScaleInMultipleAxes",value:function(t,e,i){var a=this,s=this.w.config,r=this.w.globals,n=[];i.forEach((function(t){t.alreadyExists&&(void 0===n[t.index]&&(n[t.index]=[]),n[t.index].push(t.index),n[t.index].push(t.similarIndex))})),r.yAxisSameScaleIndices=n,n.forEach((function(t,e){n.forEach((function(i,a){var s,r;e!==a&&(s=t,r=i,s.filter((function(t){return-1!==r.indexOf(t)}))).length>0&&(n[e]=n[e].concat(n[a]))}))}));var o=n.map((function(t){return t.filter((function(e,i){return t.indexOf(e)===i}))})).map((function(t){return t.sort()}));n=n.filter((function(t){return!!t}));var l=o.slice(),h=l.map((function(t){return JSON.stringify(t)}));l=l.filter((function(t,e){return h.indexOf(JSON.stringify(t))===e}));var c=[],d=[];t.forEach((function(t,i){l.forEach((function(a,s){a.indexOf(i)>-1&&(void 0===c[s]&&(c[s]=[],d[s]=[]),c[s].push({key:i,value:t}),d[s].push({key:i,value:e[i]}))}))}));var g=Array.apply(null,Array(l.length)).map(Number.prototype.valueOf,Number.MIN_VALUE),u=Array.apply(null,Array(l.length)).map(Number.prototype.valueOf,-Number.MAX_VALUE);c.forEach((function(t,e){t.forEach((function(t,i){g[e]=Math.min(t.value,g[e])}))})),d.forEach((function(t,e){t.forEach((function(t,i){u[e]=Math.max(t.value,u[e])}))})),t.forEach((function(t,e){d.forEach((function(t,i){var n=g[i],o=u[i];s.chart.stacked&&(o=0,t.forEach((function(t,e){t.value!==-Number.MAX_VALUE&&(o+=t.value),n!==Number.MIN_VALUE&&(n+=c[i][e].value)}))),t.forEach((function(i,l){t[l].key===e&&(void 0!==s.yaxis[e].min&&(n="function"==typeof s.yaxis[e].min?s.yaxis[e].min(r.minY):s.yaxis[e].min),void 0!==s.yaxis[e].max&&(o="function"==typeof s.yaxis[e].max?s.yaxis[e].max(r.maxY):s.yaxis[e].max),a.setYScaleForIndex(e,n,o))}))}))}))}},{key:"autoScaleY",value:function(t,e,i){t||(t=this);var a=t.w;if(a.globals.isMultipleYAxis||a.globals.collapsedSeries.length)return console.warn("autoScaleYaxis is not supported in a multi-yaxis chart."),e;var s=a.globals.seriesX[0],r=a.config.chart.stacked;return e.forEach((function(t,n){for(var o=0,l=0;l<s.length;l++)if(s[l]>=i.xaxis.min){o=l;break}var h,c,d=a.globals.minYArr[n],g=a.globals.maxYArr[n],u=a.globals.stackedSeriesTotals;a.globals.series.forEach((function(n,l){var f=n[o];r?(f=u[o],h=c=f,u.forEach((function(t,e){s[e]<=i.xaxis.max&&s[e]>=i.xaxis.min&&(t>c&&null!==t&&(c=t),n[e]<h&&null!==n[e]&&(h=n[e]))}))):(h=c=f,n.forEach((function(t,e){if(s[e]<=i.xaxis.max&&s[e]>=i.xaxis.min){var r=t,n=t;a.globals.series.forEach((function(i,a){null!==t&&(r=Math.min(i[e],r),n=Math.max(i[e],n))})),n>c&&null!==n&&(c=n),r<h&&null!==r&&(h=r)}}))),void 0===h&&void 0===c&&(h=d,c=g),(c*=c<0?.9:1.1)<0&&c<g&&(c=g),(h*=h<0?1.1:.9)<0&&h>d&&(h=d),e.length>1?(e[l].min=void 0===t.min?h:t.min,e[l].max=void 0===t.max?c:t.max):(e[0].min=void 0===t.min?h:t.min,e[0].max=void 0===t.max?c:t.max)}))})),e}}]),t}(),U=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w,this.scales=new j(i)}return a(t,[{key:"init",value:function(){this.setYRange(),this.setXRange(),this.setZRange()}},{key:"getMinYMaxY",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number.MAX_VALUE,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-Number.MAX_VALUE,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,s=this.w.config,r=this.w.globals,n=-Number.MAX_VALUE,o=Number.MIN_VALUE;null===a&&(a=t+1);var l=r.series,h=l,c=l;"candlestick"===s.chart.type?(h=r.seriesCandleL,c=r.seriesCandleH):r.isRangeData&&(h=r.seriesRangeStart,c=r.seriesRangeEnd);for(var d=t;d<a;d++){r.dataPoints=Math.max(r.dataPoints,l[d].length);for(var g=0;g<r.series[d].length;g++){var u=l[d][g];null!==u&&f.isNumber(u)?(n=Math.max(n,c[d][g]),e=Math.min(e,h[d][g]),i=Math.max(i,h[d][g]),"candlestick"===this.w.config.chart.type&&(n=Math.max(n,r.seriesCandleO[d][g]),n=Math.max(n,r.seriesCandleH[d][g]),n=Math.max(n,r.seriesCandleL[d][g]),i=n=Math.max(n,r.seriesCandleC[d][g])),f.isFloat(u)&&(u=f.noExponents(u),r.yValueDecimal=Math.max(r.yValueDecimal,u.toString().split(".")[1].length)),o>h[d][g]&&h[d][g]<0&&(o=h[d][g])):r.hasNullValues=!0}}return"rangeBar"===s.chart.type&&r.seriesRangeStart.length&&r.isBarHorizontal&&"datetime"===s.xaxis.type&&(o=e),"bar"===s.chart.type&&(o<0&&n<0&&(n=0),o===Number.MIN_VALUE&&(o=0)),{minY:o,maxY:n,lowestY:e,highestY:i}}},{key:"setYRange",value:function(){var t=this.w.globals,e=this.w.config;t.maxY=-Number.MAX_VALUE,t.minY=Number.MIN_VALUE;var i=Number.MAX_VALUE;if(t.isMultipleYAxis)for(var a=0;a<t.series.length;a++){var s=this.getMinYMaxY(a,i,null,a+1);t.minYArr.push(s.minY),t.maxYArr.push(s.maxY),i=s.lowestY}var r=this.getMinYMaxY(0,i,null,t.series.length);if(t.minY=r.minY,t.maxY=r.maxY,i=r.lowestY,e.chart.stacked&&this._setStackedMinMax(),("line"===e.chart.type||"area"===e.chart.type||"candlestick"===e.chart.type||"rangeBar"===e.chart.type&&!t.isBarHorizontal)&&t.minY===Number.MIN_VALUE&&i!==-Number.MAX_VALUE&&i!==t.maxY){var n=t.maxY-i;i>=0&&i<=10&&(n=0),t.minY=i-5*n/100,i>0&&t.minY<0&&(t.minY=0),t.maxY=t.maxY+5*n/100}if(e.yaxis.forEach((function(e,i){void 0!==e.max&&("number"==typeof e.max?t.maxYArr[i]=e.max:"function"==typeof e.max&&(t.maxYArr[i]=e.max(t.isMultipleYAxis?t.maxYArr[i]:t.maxY)),t.maxY=t.maxYArr[i]),void 0!==e.min&&("number"==typeof e.min?t.minYArr[i]=e.min:"function"==typeof e.min&&(t.minYArr[i]=e.min(t.isMultipleYAxis?t.minYArr[i]===Number.MIN_VALUE?0:t.minYArr[i]:t.minY)),t.minY=t.minYArr[i])})),t.isBarHorizontal){["min","max"].forEach((function(i){void 0!==e.xaxis[i]&&"number"==typeof e.xaxis[i]&&("min"===i?t.minY=e.xaxis[i]:t.maxY=e.xaxis[i])}))}return t.isMultipleYAxis?(this.scales.setMultipleYScales(),t.minY=i,t.yAxisScale.forEach((function(e,i){t.minYArr[i]=e.niceMin,t.maxYArr[i]=e.niceMax}))):(this.scales.setYScaleForIndex(0,t.minY,t.maxY),t.minY=t.yAxisScale[0].niceMin,t.maxY=t.yAxisScale[0].niceMax,t.minYArr[0]=t.yAxisScale[0].niceMin,t.maxYArr[0]=t.yAxisScale[0].niceMax),{minY:t.minY,maxY:t.maxY,minYArr:t.minYArr,maxYArr:t.maxYArr,yAxisScale:t.yAxisScale}}},{key:"setXRange",value:function(){var t=this.w.globals,e=this.w.config,i="numeric"===e.xaxis.type||"datetime"===e.xaxis.type||"category"===e.xaxis.type&&!t.noLabelsProvided||t.noLabelsProvided||t.isXNumeric;if(t.isXNumeric&&function(){for(var e=0;e<t.series.length;e++)if(t.labels[e])for(var i=0;i<t.labels[e].length;i++)null!==t.labels[e][i]&&f.isNumber(t.labels[e][i])&&(t.maxX=Math.max(t.maxX,t.labels[e][i]),t.initialMaxX=Math.max(t.maxX,t.labels[e][i]),t.minX=Math.min(t.minX,t.labels[e][i]),t.initialMinX=Math.min(t.minX,t.labels[e][i]))}(),t.noLabelsProvided&&0===e.xaxis.categories.length&&(t.maxX=t.labels[t.labels.length-1],t.initialMaxX=t.labels[t.labels.length-1],t.minX=1,t.initialMinX=1),t.isXNumeric||t.noLabelsProvided||t.dataFormatXNumeric){var a;if(void 0===e.xaxis.tickAmount?(a=Math.round(t.svgWidth/150),"numeric"===e.xaxis.type&&t.dataPoints<30&&(a=t.dataPoints-1),a>t.dataPoints&&0!==t.dataPoints&&(a=t.dataPoints-1)):"dataPoints"===e.xaxis.tickAmount?(t.series.length>1&&(a=t.series[t.maxValsInArrayIndex].length-1),t.isXNumeric&&(a=t.maxX-t.minX-1)):a=e.xaxis.tickAmount,t.xTickAmount=a,void 0!==e.xaxis.max&&"number"==typeof e.xaxis.max&&(t.maxX=e.xaxis.max),void 0!==e.xaxis.min&&"number"==typeof e.xaxis.min&&(t.minX=e.xaxis.min),void 0!==e.xaxis.range&&(t.minX=t.maxX-e.xaxis.range),t.minX!==Number.MAX_VALUE&&t.maxX!==-Number.MAX_VALUE)if(e.xaxis.convertedCatToNumeric&&!t.dataFormatXNumeric){for(var s=[],r=t.minX-1;r<t.maxX;r++)s.push(r+1);t.xAxisScale={result:s,niceMin:s[0],niceMax:s[s.length-1]}}else t.xAxisScale=this.scales.setXScale(t.minX,t.maxX);else t.xAxisScale=this.scales.linearScale(1,a,a),t.noLabelsProvided&&t.labels.length>0&&(t.xAxisScale=this.scales.linearScale(1,t.labels.length,a-1),t.seriesX=t.labels.slice());i&&(t.labels=t.xAxisScale.result.slice())}return t.isBarHorizontal&&t.labels.length&&(t.xTickAmount=t.labels.length),this._handleSingleDataPoint(),this._getMinXDiff(),{minX:t.minX,maxX:t.maxX}}},{key:"setZRange",value:function(){var t=this.w.globals;if(t.isDataXYZ)for(var e=0;e<t.series.length;e++)if(void 0!==t.seriesZ[e])for(var i=0;i<t.seriesZ[e].length;i++)null!==t.seriesZ[e][i]&&f.isNumber(t.seriesZ[e][i])&&(t.maxZ=Math.max(t.maxZ,t.seriesZ[e][i]),t.minZ=Math.min(t.minZ,t.seriesZ[e][i]))}},{key:"_handleSingleDataPoint",value:function(){var t=this.w.globals,e=this.w.config;if(t.minX===t.maxX){var i=new Y(this.ctx);if("datetime"===e.xaxis.type){var a=i.getDate(t.minX);a.setUTCDate(a.getDate()-2),t.minX=new Date(a).getTime();var s=i.getDate(t.maxX);s.setUTCDate(s.getDate()+2),t.maxX=new Date(s).getTime()}else("numeric"===e.xaxis.type||"category"===e.xaxis.type&&!t.noLabelsProvided)&&(t.minX=t.minX-2,t.initialMinX=t.minX,t.maxX=t.maxX+2,t.initialMaxX=t.maxX)}}},{key:"_getMinXDiff",value:function(){var t=this.w.globals;t.isXNumeric&&t.seriesX.forEach((function(e,i){1===e.length&&e.push(t.seriesX[t.maxValsInArrayIndex][t.seriesX[t.maxValsInArrayIndex].length-1]);var a=e.slice();a.sort((function(t,e){return t-e})),a.forEach((function(e,a){if(a>0){var s=e-t.seriesX[i][a-1];s>0&&(t.minXDiff=Math.min(s,t.minXDiff))}})),1===t.dataPoints&&t.minXDiff===Number.MAX_VALUE&&(t.minXDiff=.5)}))}},{key:"_setStackedMinMax",value:function(){var t=this.w.globals,e=[],i=[];if(t.series.length)for(var a=0;a<t.series[t.maxValsInArrayIndex].length;a++)for(var s=0,r=0,n=0;n<t.series.length;n++)null!==t.series[n][a]&&f.isNumber(t.series[n][a])&&(t.series[n][a]>0?s=s+parseFloat(t.series[n][a])+1e-4:r+=parseFloat(t.series[n][a])),n===t.series.length-1&&(e.push(s),i.push(r));for(var o=0;o<e.length;o++)t.maxY=Math.max(t.maxY,e[o]),t.minY=Math.min(t.minY,i[o])}}]),t}(),q=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w;var a=this.w;this.xaxisFontSize=a.config.xaxis.labels.style.fontSize,this.axisFontFamily=a.config.xaxis.labels.style.fontFamily,this.xaxisForeColors=a.config.xaxis.labels.style.colors,this.isCategoryBarHorizontal="bar"===a.config.chart.type&&a.config.plotOptions.bar.horizontal,this.xAxisoffX=0,"bottom"===a.config.xaxis.position&&(this.xAxisoffX=a.globals.gridHeight),this.drawnLabels=[],this.axesUtils=new B(i)}return a(t,[{key:"drawYaxis",value:function(t){var e=this,i=this.w,a=new b(this.ctx),s=i.config.yaxis[t].labels.style,r=s.fontSize,n=s.fontFamily,o=s.fontWeight,l=a.group({class:"apexcharts-yaxis",rel:t,transform:"translate("+i.globals.translateYAxisX[t]+", 0)"});if(this.axesUtils.isYAxisHidden(t))return l;var h=a.group({class:"apexcharts-yaxis-texts-g"});l.add(h);var c=i.globals.yAxisScale[t].result.length-1,d=i.globals.gridHeight/c,g=i.globals.translateY,u=i.globals.yLabelFormatters[t],f=i.globals.yAxisScale[t].result.slice();f=this.axesUtils.checkForReversedLabels(t,f);var p="";if(i.config.yaxis[t].labels.show)for(var x=function(l){var x=f[l];x=u(x,l);var b=i.config.yaxis[t].labels.padding;i.config.yaxis[t].opposite&&0!==i.config.yaxis.length&&(b*=-1);var m=e.axesUtils.getYAxisForeColor(s.colors,t),v=a.drawText({x:b,y:g+c/10+i.config.yaxis[t].labels.offsetY+1,text:x,textAnchor:i.config.yaxis[t].opposite?"start":"end",fontSize:r,fontFamily:n,fontWeight:o,foreColor:Array.isArray(m)?m[l]:m,isPlainText:!1,cssClass:"apexcharts-yaxis-label "+s.cssClass});if(l===c&&(p=v),h.add(v),0!==i.config.yaxis[t].labels.rotate){var y=a.rotateAroundCenter(p.node),w=a.rotateAroundCenter(v.node);v.node.setAttribute("transform","rotate(".concat(i.config.yaxis[t].labels.rotate," ").concat(y.x," ").concat(w.y,")"))}g+=d},m=c;m>=0;m--)x(m);if(void 0!==i.config.yaxis[t].title.text){var v=a.group({class:"apexcharts-yaxis-title"}),y=0;i.config.yaxis[t].opposite&&(y=i.globals.translateYAxisX[t]);var w=a.drawText({x:y,y:i.globals.gridHeight/2+i.globals.translateY+i.config.yaxis[t].title.offsetY,text:i.config.yaxis[t].title.text,textAnchor:"end",foreColor:i.config.yaxis[t].title.style.color,fontSize:i.config.yaxis[t].title.style.fontSize,fontWeight:i.config.yaxis[t].title.style.fontWeight,fontFamily:i.config.yaxis[t].title.style.fontFamily,cssClass:"apexcharts-yaxis-title-text "+i.config.yaxis[t].title.style.cssClass});v.add(w),l.add(v)}var k=i.config.yaxis[t].axisBorder,A=31+k.offsetX;if(i.config.yaxis[t].opposite&&(A=-31-k.offsetX),k.show){var S=a.drawLine(A,i.globals.translateY+k.offsetY-2,A,i.globals.gridHeight+i.globals.translateY+k.offsetY+2,k.color,0,k.width);l.add(S)}return i.config.yaxis[t].axisTicks.show&&this.axesUtils.drawYAxisTicks(A,c,k,i.config.yaxis[t].axisTicks,t,d,l),l}},{key:"drawYaxisInversed",value:function(t){var e=this.w,i=new b(this.ctx),a=i.group({class:"apexcharts-xaxis apexcharts-yaxis-inversed"}),s=i.group({class:"apexcharts-xaxis-texts-g",transform:"translate(".concat(e.globals.translateXAxisX,", ").concat(e.globals.translateXAxisY,")")});a.add(s);var r=e.globals.yAxisScale[t].result.length-1,n=e.globals.gridWidth/r+.1,o=n+e.config.xaxis.labels.offsetX,l=e.globals.xLabelFormatter,h=e.globals.yAxisScale[t].result.slice(),c=e.globals.timescaleLabels;c.length>0&&(this.xaxisLabels=c.slice(),r=(h=c.slice()).length),h=this.axesUtils.checkForReversedLabels(t,h);var d=c.length;if(e.config.xaxis.labels.show)for(var g=d?0:r;d?g<d:g>=0;d?g++:g--){var u=h[g];u=l(u,g);var f=e.globals.gridWidth+e.globals.padHorizontal-(o-n+e.config.xaxis.labels.offsetX);if(c.length){var p=this.axesUtils.getLabel(h,c,f,g,this.drawnLabels,this.xaxisFontSize);f=p.x,u=p.text,this.drawnLabels.push(p.text),0===g&&e.globals.skipFirstTimelinelabel&&(u=""),g===h.length-1&&e.globals.skipLastTimelinelabel&&(u="")}var x=i.drawText({x:f,y:this.xAxisoffX+e.config.xaxis.labels.offsetY+30-("top"===e.config.xaxis.position?e.globals.xAxisHeight+e.config.xaxis.axisTicks.height-2:0),text:u,textAnchor:"middle",foreColor:Array.isArray(this.xaxisForeColors)?this.xaxisForeColors[t]:this.xaxisForeColors,fontSize:this.xaxisFontSize,fontFamily:this.xaxisFontFamily,fontWeight:e.config.xaxis.labels.style.fontWeight,isPlainText:!1,cssClass:"apexcharts-xaxis-label "+e.config.xaxis.labels.style.cssClass});s.add(x),x.tspan(u);var m=document.createElementNS(e.globals.SVGNS,"title");m.textContent=u,x.node.appendChild(m),o+=n}return this.inversedYAxisTitleText(a),this.inversedYAxisBorder(a),a}},{key:"inversedYAxisBorder",value:function(t){var e=this.w,i=new b(this.ctx),a=e.config.xaxis.axisBorder;if(a.show){var s=0;"bar"===e.config.chart.type&&e.globals.isXNumeric&&(s-=15);var r=i.drawLine(e.globals.padHorizontal+s+a.offsetX,this.xAxisoffX,e.globals.gridWidth,this.xAxisoffX,a.color,0,a.height);t.add(r)}}},{key:"inversedYAxisTitleText",value:function(t){var e=this.w,i=new b(this.ctx);if(void 0!==e.config.xaxis.title.text){var a=i.group({class:"apexcharts-xaxis-title apexcharts-yaxis-title-inversed"}),s=i.drawText({x:e.globals.gridWidth/2+e.config.xaxis.title.offsetX,y:this.xAxisoffX+parseFloat(this.xaxisFontSize)+parseFloat(e.config.xaxis.title.style.fontSize)+e.config.xaxis.title.offsetY+20,text:e.config.xaxis.title.text,textAnchor:"middle",fontSize:e.config.xaxis.title.style.fontSize,fontFamily:e.config.xaxis.title.style.fontFamily,fontWeight:e.config.xaxis.title.style.fontWeight,foreColor:e.config.xaxis.title.style.color,cssClass:"apexcharts-xaxis-title-text "+e.config.xaxis.title.style.cssClass});a.add(s),t.add(a)}}},{key:"yAxisTitleRotate",value:function(t,e){var i=this.w,a=new b(this.ctx),s={width:0,height:0},r={width:0,height:0},n=i.globals.dom.baseEl.querySelector(" .apexcharts-yaxis[rel='".concat(t,"'] .apexcharts-yaxis-texts-g"));null!==n&&(s=n.getBoundingClientRect());var o=i.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(t,"'] .apexcharts-yaxis-title text"));if(null!==o&&(r=o.getBoundingClientRect()),null!==o){var l=this.xPaddingForYAxisTitle(t,s,r,e);o.setAttribute("x",l.xPos-(e?10:0))}if(null!==o){var h=a.rotateAroundCenter(o);o.setAttribute("transform","rotate(".concat(e?-1*i.config.yaxis[t].title.rotate:i.config.yaxis[t].title.rotate," ").concat(h.x," ").concat(h.y,")"))}}},{key:"xPaddingForYAxisTitle",value:function(t,e,i,a){var s=this.w,r=0,n=0,o=10;return void 0===s.config.yaxis[t].title.text||t<0?{xPos:n,padd:0}:(a?(n=e.width+s.config.yaxis[t].title.offsetX+i.width/2+o/2,0===(r+=1)&&(n-=o/2)):(n=-1*e.width+s.config.yaxis[t].title.offsetX+o/2+i.width/2,s.globals.isBarHorizontal&&(o=25,n=-1*e.width-s.config.yaxis[t].title.offsetX-o)),{xPos:n,padd:o})}},{key:"setYAxisXPosition",value:function(t,e){var i=this.w,a=0,s=0,r=18,n=1;i.config.yaxis.length>1&&(this.multipleYs=!0),i.config.yaxis.map((function(o,l){var h=i.globals.ignoreYAxisIndexes.indexOf(l)>-1||!o.show||o.floating||0===t[l].width,c=t[l].width+e[l].width;o.opposite?i.globals.isBarHorizontal?(s=i.globals.gridWidth+i.globals.translateX-1,i.globals.translateYAxisX[l]=s-o.labels.offsetX):(s=i.globals.gridWidth+i.globals.translateX+n,h||(n=n+c+20),i.globals.translateYAxisX[l]=s-o.labels.offsetX+20):(a=i.globals.translateX-r,h||(r=r+c+20),i.globals.translateYAxisX[l]=a+o.labels.offsetX)}))}},{key:"setYAxisTextAlignments",value:function(){var t=this.w,e=t.globals.dom.baseEl.getElementsByClassName("apexcharts-yaxis");(e=f.listToArray(e)).forEach((function(e,i){var a=t.config.yaxis[i];if(a&&void 0!==a.labels.align){var s=t.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(i,"'] .apexcharts-yaxis-texts-g")),r=t.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis[rel='".concat(i,"'] .apexcharts-yaxis-label"));r=f.listToArray(r);var n=s.getBoundingClientRect();"left"===a.labels.align?(r.forEach((function(t,e){t.setAttribute("text-anchor","start")})),a.opposite||s.setAttribute("transform","translate(-".concat(n.width,", 0)"))):"center"===a.labels.align?(r.forEach((function(t,e){t.setAttribute("text-anchor","middle")})),s.setAttribute("transform","translate(".concat(n.width/2*(a.opposite?1:-1),", 0)"))):"right"===a.labels.align&&(r.forEach((function(t,e){t.setAttribute("text-anchor","end")})),a.opposite&&s.setAttribute("transform","translate(".concat(n.width,", 0)")))}}))}}]),t}(),Z=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w,this.documentEvent=f.bind(this.documentEvent,this)}return a(t,[{key:"addEventListener",value:function(t,e){var i=this.w;i.globals.events.hasOwnProperty(t)?i.globals.events[t].push(e):i.globals.events[t]=[e]}},{key:"removeEventListener",value:function(t,e){var i=this.w;if(i.globals.events.hasOwnProperty(t)){var a=i.globals.events[t].indexOf(e);-1!==a&&i.globals.events[t].splice(a,1)}}},{key:"fireEvent",value:function(t,e){var i=this.w;if(i.globals.events.hasOwnProperty(t)){e&&e.length||(e=[]);for(var a=i.globals.events[t],s=a.length,r=0;r<s;r++)a[r].apply(null,e)}}},{key:"setupEventHandlers",value:function(){var t=this,e=this.w,i=this.ctx,a=e.globals.dom.baseEl.querySelector(e.globals.chartClass);this.ctx.eventList.forEach((function(t){a.addEventListener(t,(function(t){var a=Object.assign({},e,{seriesIndex:e.globals.capturedSeriesIndex,dataPointIndex:e.globals.capturedDataPointIndex});"mousemove"===t.type||"touchmove"===t.type?"function"==typeof e.config.chart.events.mouseMove&&e.config.chart.events.mouseMove(t,i,a):("mouseup"===t.type&&1===t.which||"touchend"===t.type)&&("function"==typeof e.config.chart.events.click&&e.config.chart.events.click(t,i,a),i.ctx.events.fireEvent("click",[t,i,a]))}),{capture:!1,passive:!0})})),this.ctx.eventList.forEach((function(i){e.globals.dom.baseEl.addEventListener(i,t.documentEvent,{passive:!0})})),this.ctx.core.setupBrushHandler()}},{key:"documentEvent",value:function(t){var e=this.w,i=t.target.className;if("click"===t.type){var a=e.globals.dom.baseEl.querySelector(".apexcharts-menu");a&&a.classList.contains("apexcharts-menu-open")&&"apexcharts-menu-icon"!==i&&a.classList.remove("apexcharts-menu-open")}e.globals.clientX="touchmove"===t.type?t.touches[0].clientX:t.clientX,e.globals.clientY="touchmove"===t.type?t.touches[0].clientY:t.clientY}}]),t}(),$=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w}return a(t,[{key:"setCurrentLocaleValues",value:function(t){var e=this.w.config.chart.locales;window.Apex.chart&&window.Apex.chart.locales&&window.Apex.chart.locales.length>0&&(e=this.w.config.chart.locales.concat(window.Apex.chart.locales));var i=e.filter((function(e){return e.name===t}))[0];if(!i)throw new Error("Wrong locale name provided. Please make sure you set the correct locale name in options");var a=f.extend(A,i);this.w.globals.locale=a.options}}]),t}(),J=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w}return a(t,[{key:"drawAxis",value:function(t,e){var i,a,s=this.w.globals,r=this.w.config,n=new G(this.ctx),o=new q(this.ctx);s.axisCharts&&"radar"!==t&&(s.isBarHorizontal?(a=o.drawYaxisInversed(0),i=n.drawXaxisInversed(0),s.dom.elGraphical.add(i),s.dom.elGraphical.add(a)):(i=n.drawXaxis(),s.dom.elGraphical.add(i),r.yaxis.map((function(t,e){-1===s.ignoreYAxisIndexes.indexOf(e)&&(a=o.drawYaxis(e),s.dom.Paper.add(a))}))));r.yaxis.map((function(t,e){-1===s.ignoreYAxisIndexes.indexOf(e)&&o.yAxisTitleRotate(e,t.opposite)}))}}]),t}(),Q=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w}return a(t,[{key:"drawXCrosshairs",value:function(){var t=this.w,e=new b(this.ctx),i=new p(this.ctx),a=t.config.xaxis.crosshairs.fill.gradient,s=t.config.xaxis.crosshairs.dropShadow,r=t.config.xaxis.crosshairs.fill.type,n=a.colorFrom,o=a.colorTo,l=a.opacityFrom,h=a.opacityTo,c=a.stops,d=s.enabled,g=s.left,u=s.top,x=s.blur,m=s.color,v=s.opacity,y=t.config.xaxis.crosshairs.fill.color;if(t.config.xaxis.crosshairs.show){"gradient"===r&&(y=e.drawGradient("vertical",n,o,l,h,null,c,null));var w=e.drawRect();1===t.config.xaxis.crosshairs.width&&(w=e.drawLine()),w.attr({class:"apexcharts-xcrosshairs",x:0,y:0,y2:t.globals.gridHeight,width:f.isNumber(t.config.xaxis.crosshairs.width)?t.config.xaxis.crosshairs.width:0,height:t.globals.gridHeight,fill:y,filter:"none","fill-opacity":t.config.xaxis.crosshairs.opacity,stroke:t.config.xaxis.crosshairs.stroke.color,"stroke-width":t.config.xaxis.crosshairs.stroke.width,"stroke-dasharray":t.config.xaxis.crosshairs.stroke.dashArray}),d&&(w=i.dropShadow(w,{left:g,top:u,blur:x,color:m,opacity:v})),t.globals.dom.elGraphical.add(w)}}},{key:"drawYCrosshairs",value:function(){var t=this.w,e=new b(this.ctx),i=t.config.yaxis[0].crosshairs,a=t.globals.barPadForNumericAxis;if(t.config.yaxis[0].crosshairs.show){var s=e.drawLine(-a,0,t.globals.gridWidth+a,0,i.stroke.color,i.stroke.dashArray,i.stroke.width);s.attr({class:"apexcharts-ycrosshairs"}),t.globals.dom.elGraphical.add(s)}var r=e.drawLine(-a,0,t.globals.gridWidth+a,0,i.stroke.color,0,0);r.attr({class:"apexcharts-ycrosshairs-hidden"}),t.globals.dom.elGraphical.add(r)}}]),t}(),K=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w}return a(t,[{key:"checkResponsiveConfig",value:function(t){var e=this,i=this.w,a=i.config;if(0!==a.responsive.length){var s=a.responsive.slice();s.sort((function(t,e){return t.breakpoint>e.breakpoint?1:e.breakpoint>t.breakpoint?-1:0})).reverse();var r=new D({}),n=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=s[0].breakpoint,n=window.innerWidth>0?window.innerWidth:screen.width;if(n>a){var o=y.extendArrayProps(r,i.globals.initialConfig,i);t=f.extend(o,t),t=f.extend(i.config,t),e.overrideResponsiveOptions(t)}else for(var l=0;l<s.length;l++)n<s[l].breakpoint&&(t=y.extendArrayProps(r,s[l].options,i),t=f.extend(i.config,t),e.overrideResponsiveOptions(t))};if(t){var o=y.extendArrayProps(r,t,i);o=f.extend(i.config,o),n(o=f.extend(o,t))}else n({})}}},{key:"overrideResponsiveOptions",value:function(t){var e=new D(t).init({responsiveOverride:!0});this.w.config=e}}]),t}(),tt=function(){function t(i){e(this,t),this.ctx=i,this.colors=[],this.w=i.w;var a=this.w;this.isColorFn=!1,this.isHeatmapDistributed="treemap"===a.config.chart.type&&a.config.plotOptions.treemap.distributed||"heatmap"===a.config.chart.type&&a.config.plotOptions.heatmap.distributed,this.isBarDistributed=a.config.plotOptions.bar.distributed&&("bar"===a.config.chart.type||"rangeBar"===a.config.chart.type)}return a(t,[{key:"init",value:function(){this.setDefaultColors()}},{key:"setDefaultColors",value:function(){var t=this,e=this.w,i=new f;if(e.globals.dom.elWrap.classList.add("apexcharts-theme-".concat(e.config.theme.mode)),void 0===e.config.colors?e.globals.colors=this.predefined():(e.globals.colors=e.config.colors,Array.isArray(e.config.colors)&&e.config.colors.length>0&&"function"==typeof e.config.colors[0]&&(e.globals.colors=e.config.series.map((function(i,a){var s=e.config.colors[a];return s||(s=e.config.colors[0]),"function"==typeof s?(t.isColorFn=!0,s({value:e.globals.axisCharts?e.globals.series[a][0]?e.globals.series[a][0]:0:e.globals.series[a],seriesIndex:a,dataPointIndex:a,w:e})):s})))),e.globals.seriesColors.map((function(t,i){t&&(e.globals.colors[i]=t)})),e.config.theme.monochrome.enabled){var a=[],s=e.globals.series.length;(this.isBarDistributed||this.isHeatmapDistributed)&&(s=e.globals.series[0].length*e.globals.series.length);for(var r=e.config.theme.monochrome.color,n=1/(s/e.config.theme.monochrome.shadeIntensity),o=e.config.theme.monochrome.shadeTo,l=0,h=0;h<s;h++){var c=void 0;"dark"===o?(c=i.shadeColor(-1*l,r),l+=n):(c=i.shadeColor(l,r),l+=n),a.push(c)}e.globals.colors=a.slice()}var d=e.globals.colors.slice();this.pushExtraColors(e.globals.colors);["fill","stroke"].forEach((function(i){void 0===e.config[i].colors?e.globals[i].colors=t.isColorFn?e.config.colors:d:e.globals[i].colors=e.config[i].colors.slice(),t.pushExtraColors(e.globals[i].colors)})),void 0===e.config.dataLabels.style.colors?e.globals.dataLabels.style.colors=d:e.globals.dataLabels.style.colors=e.config.dataLabels.style.colors.slice(),this.pushExtraColors(e.globals.dataLabels.style.colors,50),void 0===e.config.plotOptions.radar.polygons.fill.colors?e.globals.radarPolygons.fill.colors=["dark"===e.config.theme.mode?"#424242":"#fff"]:e.globals.radarPolygons.fill.colors=e.config.plotOptions.radar.polygons.fill.colors.slice(),this.pushExtraColors(e.globals.radarPolygons.fill.colors,20),void 0===e.config.markers.colors?e.globals.markers.colors=d:e.globals.markers.colors=e.config.markers.colors.slice(),this.pushExtraColors(e.globals.markers.colors)}},{key:"pushExtraColors",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=this.w,s=e||a.globals.series.length;if(null===i&&(i=this.isBarDistributed||this.isHeatmapDistributed||"heatmap"===a.config.chart.type&&a.config.plotOptions.heatmap.colorScale.inverse),i&&a.globals.series.length&&(s=a.globals.series[a.globals.maxValsInArrayIndex].length*a.globals.series.length),t.length<s)for(var r=s-t.length,n=0;n<r;n++)t.push(t[n])}},{key:"updateThemeOptions",value:function(t){t.chart=t.chart||{},t.tooltip=t.tooltip||{};var e=t.theme.mode||"light",i=t.theme.palette?t.theme.palette:"dark"===e?"palette4":"palette1",a=t.chart.foreColor?t.chart.foreColor:"dark"===e?"#f6f7f8":"#373d3f";return t.tooltip.theme=e,t.chart.foreColor=a,t.theme.palette=i,t}},{key:"predefined",value:function(){switch(this.w.config.theme.palette){case"palette1":this.colors=["#008FFB","#00E396","#FEB019","#FF4560","#775DD0"];break;case"palette2":this.colors=["#3f51b5","#03a9f4","#4caf50","#f9ce1d","#FF9800"];break;case"palette3":this.colors=["#33b2df","#546E7A","#d4526e","#13d8aa","#A5978B"];break;case"palette4":this.colors=["#4ecdc4","#c7f464","#81D4FA","#fd6a6a","#546E7A"];break;case"palette5":this.colors=["#2b908f","#f9a3a4","#90ee7e","#fa4443","#69d2e7"];break;case"palette6":this.colors=["#449DD1","#F86624","#EA3546","#662E9B","#C5D86D"];break;case"palette7":this.colors=["#D7263D","#1B998B","#2E294E","#F46036","#E2C044"];break;case"palette8":this.colors=["#662E9B","#F86624","#F9C80E","#EA3546","#43BCCD"];break;case"palette9":this.colors=["#5C4742","#A5978B","#8D5B4C","#5A2A27","#C4BBAF"];break;case"palette10":this.colors=["#A300D6","#7D02EB","#5653FE","#2983FF","#00B1F2"];break;default:this.colors=["#008FFB","#00E396","#FEB019","#FF4560","#775DD0"]}return this.colors}}]),t}(),et=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w}return a(t,[{key:"draw",value:function(){this.drawTitleSubtitle("title"),this.drawTitleSubtitle("subtitle")}},{key:"drawTitleSubtitle",value:function(t){var e=this.w,i="title"===t?e.config.title:e.config.subtitle,a=e.globals.svgWidth/2,s=i.offsetY,r="middle";if("left"===i.align?(a=10,r="start"):"right"===i.align&&(a=e.globals.svgWidth-10,r="end"),a+=i.offsetX,s=s+parseInt(i.style.fontSize,10)+i.margin/2,void 0!==i.text){var n=new b(this.ctx).drawText({x:a,y:s,text:i.text,textAnchor:r,fontSize:i.style.fontSize,fontFamily:i.style.fontFamily,fontWeight:i.style.fontWeight,foreColor:i.style.color,opacity:1});n.node.setAttribute("class","apexcharts-".concat(t,"-text")),e.globals.dom.Paper.add(n)}}}]),t}(),it=function(){function t(i){e(this,t),this.w=i.w,this.dCtx=i}return a(t,[{key:"getTitleSubtitleCoords",value:function(t){var e=this.w,i=0,a=0,s="title"===t?e.config.title.floating:e.config.subtitle.floating,r=e.globals.dom.baseEl.querySelector(".apexcharts-".concat(t,"-text"));if(null!==r&&!s){var n=r.getBoundingClientRect();i=n.width,a=e.globals.axisCharts?n.height+5:n.height}return{width:i,height:a}}},{key:"getLegendsRect",value:function(){var t=this.w,e=t.globals.dom.baseEl.querySelector(".apexcharts-legend");t.config.legend.height||"top"!==t.config.legend.position&&"bottom"!==t.config.legend.position||(e.style.maxHeight=t.globals.svgHeight/2+"px");var i=Object.assign({},f.getBoundingClientRect(e));return null!==e&&!t.config.legend.floating&&t.config.legend.show?this.dCtx.lgRect={x:i.x,y:i.y,height:i.height,width:0===i.height?0:i.width}:this.dCtx.lgRect={x:0,y:0,height:0,width:0},"left"!==t.config.legend.position&&"right"!==t.config.legend.position||1.5*this.dCtx.lgRect.width>t.globals.svgWidth&&(this.dCtx.lgRect.width=t.globals.svgWidth/1.5),this.dCtx.lgRect}},{key:"getLargestStringFromMultiArr",value:function(t,e){var i=t;if(this.w.globals.isMultiLineX){var a=e.map((function(t,e){return Array.isArray(t)?t.length:1})),s=Math.max.apply(Math,g(a));i=e[a.indexOf(s)]}return i}}]),t}(),at=function(){function t(i){e(this,t),this.w=i.w,this.dCtx=i}return a(t,[{key:"getxAxisLabelsCoords",value:function(){var t,e=this.w,i=e.globals.labels.slice();if(e.config.xaxis.convertedCatToNumeric&&0===i.length&&(i=e.globals.categoryLabels),e.globals.timescaleLabels.length>0){var a=this.getxAxisTimeScaleLabelsCoords();t={width:a.width,height:a.height},e.globals.rotateXLabels=!1}else{this.dCtx.lgWidthForSideLegends="left"!==e.config.legend.position&&"right"!==e.config.legend.position||e.config.legend.floating?0:this.dCtx.lgRect.width;var s=e.globals.xLabelFormatter,r=f.getLargestStringFromArr(i),n=this.dCtx.dimHelpers.getLargestStringFromMultiArr(r,i);e.globals.isBarHorizontal&&(n=r=e.globals.yAxisScale[0].result.reduce((function(t,e){return t.length>e.length?t:e}),0));var o=new W(this.dCtx.ctx),l=r;r=o.xLabelFormat(s,r,l,{i:void 0,dateFormatter:new Y(this.dCtx.ctx).formatDate,w:e}),n=o.xLabelFormat(s,n,l,{i:void 0,dateFormatter:new Y(this.dCtx.ctx).formatDate,w:e}),(e.config.xaxis.convertedCatToNumeric&&void 0===r||""===String(r).trim())&&(n=r="1");var h=new b(this.dCtx.ctx),c=h.getTextRects(r,e.config.xaxis.labels.style.fontSize),d=c;if(r!==n&&(d=h.getTextRects(n,e.config.xaxis.labels.style.fontSize)),(t={width:c.width>=d.width?c.width:d.width,height:c.height>=d.height?c.height:d.height}).width*i.length>e.globals.svgWidth-this.dCtx.lgWidthForSideLegends-this.dCtx.yAxisWidth-this.dCtx.gridPad.left-this.dCtx.gridPad.right&&0!==e.config.xaxis.labels.rotate||e.config.xaxis.labels.rotateAlways){if(!e.globals.isBarHorizontal){e.globals.rotateXLabels=!0;var g=function(t){return h.getTextRects(t,e.config.xaxis.labels.style.fontSize,e.config.xaxis.labels.style.fontFamily,"rotate(".concat(e.config.xaxis.labels.rotate," 0 0)"),!1)};c=g(r),r!==n&&(d=g(n)),t.height=(c.height>d.height?c.height:d.height)/1.5,t.width=c.width>d.width?c.width:d.width}}else e.globals.rotateXLabels=!1}return e.config.xaxis.labels.show||(t={width:0,height:0}),{width:t.width,height:t.height}}},{key:"getxAxisTitleCoords",value:function(){var t=this.w,e=0,i=0;if(void 0!==t.config.xaxis.title.text){var a=new b(this.dCtx.ctx).getTextRects(t.config.xaxis.title.text,t.config.xaxis.title.style.fontSize);e=a.width,i=a.height}return{width:e,height:i}}},{key:"getxAxisTimeScaleLabelsCoords",value:function(){var t,e=this.w;this.dCtx.timescaleLabels=e.globals.timescaleLabels.slice();var i=this.dCtx.timescaleLabels.map((function(t){return t.value})),a=i.reduce((function(t,e){return void 0===t?(console.error("You have possibly supplied invalid Date format. Please supply a valid JavaScript Date"),0):t.length>e.length?t:e}),0);return 1.05*(t=new b(this.dCtx.ctx).getTextRects(a,e.config.xaxis.labels.style.fontSize)).width*i.length>e.globals.gridWidth&&0!==e.config.xaxis.labels.rotate&&(e.globals.overlappingXLabels=!0),t}},{key:"additionalPaddingXLabels",value:function(t){var e=this,i=this.w,a=i.globals,s=i.config,r=s.xaxis.type,n=t.width;a.skipLastTimelinelabel=!1,a.skipFirstTimelinelabel=!1;var o=i.config.yaxis[0].opposite&&i.globals.isBarHorizontal,l=function(t,s){(function(t){return-1!==a.collapsedSeriesIndices.indexOf(t)})(s)||function(t){if(e.dCtx.timescaleLabels&&e.dCtx.timescaleLabels.length){var s=e.dCtx.timescaleLabels[0],o=e.dCtx.timescaleLabels[e.dCtx.timescaleLabels.length-1].position+n/1.75-e.dCtx.yAxisWidthRight,l=s.position-n/1.75+e.dCtx.yAxisWidthLeft;o>a.svgWidth-a.translateX&&(a.skipLastTimelinelabel=!0),l<0&&(a.skipFirstTimelinelabel=!0)}else"datetime"===r?e.dCtx.gridPad.right<n&&!a.rotateXLabels&&(a.skipLastTimelinelabel=!0):"datetime"!==r&&e.dCtx.gridPad.right<n/2-e.dCtx.yAxisWidthRight&&!a.rotateXLabels&&("between"!==i.config.xaxis.tickPlacement||i.globals.isBarHorizontal)&&(e.dCtx.xPadRight=n/2+1)}()};s.yaxis.forEach((function(t,i){o?(e.dCtx.gridPad.left<n&&(e.dCtx.xPadLeft=n/2+1),e.dCtx.xPadRight=n/2+1):l(0,i)}))}}]),t}(),st=function(){function t(i){e(this,t),this.w=i.w,this.dCtx=i}return a(t,[{key:"getyAxisLabelsCoords",value:function(){var t=this,e=this.w,i=[],a=10,s=new B(this.dCtx.ctx);return e.config.yaxis.map((function(r,n){var o=e.globals.yAxisScale[n];if(!s.isYAxisHidden(n)&&r.labels.show&&o.result.length){var l=e.globals.yLabelFormatters[n],h=String(o.niceMin).length>String(o.niceMax).length?o.niceMin:o.niceMax,c=l(h,{seriesIndex:n,dataPointIndex:-1,w:e}),d=c;if(void 0!==c&&0!==c.length||(c=h),e.globals.isBarHorizontal){a=0;var g=e.globals.labels.slice();c=l(c=f.getLargestStringFromArr(g),{seriesIndex:n,dataPointIndex:-1,w:e}),d=t.dCtx.dimHelpers.getLargestStringFromMultiArr(c,g)}var u=new b(t.dCtx.ctx),p=u.getTextRects(c,r.labels.style.fontSize),x=p;c!==d&&(x=u.getTextRects(d,r.labels.style.fontSize)),i.push({width:(x.width>p.width?x.width:p.width)+a,height:x.height>p.height?x.height:p.height})}else i.push({width:0,height:0})})),i}},{key:"getyAxisTitleCoords",value:function(){var t=this,e=this.w,i=[];return e.config.yaxis.map((function(e,a){if(e.show&&void 0!==e.title.text){var s=new b(t.dCtx.ctx).getTextRects(e.title.text,e.title.style.fontSize,e.title.style.fontFamily,"rotate(-90 0 0)",!1);i.push({width:s.width,height:s.height})}else i.push({width:0,height:0})})),i}},{key:"getTotalYAxisWidth",value:function(){var t=this.w,e=0,i=0,a=0,s=t.globals.yAxisScale.length>1?10:0,r=new B(this.dCtx.ctx),n=function(n,o){var l=t.config.yaxis[o].floating,h=0;n.width>0&&!l?(h=n.width+s,function(e){return t.globals.ignoreYAxisIndexes.indexOf(e)>-1}(o)&&(h=h-n.width-s)):h=l||r.isYAxisHidden(o)?0:5,t.config.yaxis[o].opposite?a+=h:i+=h,e+=h};return t.globals.yLabelsCoords.map((function(t,e){n(t,e)})),t.globals.yTitleCoords.map((function(t,e){n(t,e)})),t.globals.isBarHorizontal&&(e=t.globals.yLabelsCoords[0].width+t.globals.yTitleCoords[0].width+15),this.dCtx.yAxisWidthLeft=i,this.dCtx.yAxisWidthRight=a,e}}]),t}(),rt=function(){function t(i){e(this,t),this.w=i.w,this.dCtx=i}return a(t,[{key:"gridPadForColumnsInNumericAxis",value:function(t){var e=this.w;if(e.globals.noData||e.globals.allSeriesCollapsed)return 0;var i=e.config.chart.type,a=0,s="bar"===i||"rangeBar"===i?e.config.series.length:1;if(e.globals.comboBarCount>0&&(s=e.globals.comboBarCount),e.globals.collapsedSeries.forEach((function(t){"bar"!==t.type&&"rangeBar"!==t.type||(s-=1)})),e.config.chart.stacked&&(s=1),("bar"===i||"rangeBar"===i||e.globals.comboBarCount>0)&&e.globals.isXNumeric&&!e.globals.isBarHorizontal&&s>0){var r,n,o=Math.abs(e.globals.initialMaxX-e.globals.initialMinX);o<=3&&(o=e.globals.dataPoints),r=o/t,e.globals.minXDiff&&e.globals.minXDiff/r>0&&(n=e.globals.minXDiff/r),n>t/2&&(n/=2),(a=n/s*parseInt(e.config.plotOptions.bar.columnWidth,10)/100)<1&&(a=1),a=a/(s>1?1:1.5)+5,e.globals.barPadForNumericAxis=a}return a}},{key:"gridPadFortitleSubtitle",value:function(){var t=this,e=this.w,i=e.globals,a=this.dCtx.isSparkline||!e.globals.axisCharts?0:10;["title","subtitle"].forEach((function(i){void 0!==e.config[i].text?a+=e.config[i].margin:a+=t.dCtx.isSparkline||!e.globals.axisCharts?0:5})),!e.config.legend.show||"bottom"!==e.config.legend.position||e.config.legend.floating||e.globals.axisCharts||(a+=10);var s=this.dCtx.dimHelpers.getTitleSubtitleCoords("title"),r=this.dCtx.dimHelpers.getTitleSubtitleCoords("subtitle");i.gridHeight=i.gridHeight-s.height-r.height-a,i.translateY=i.translateY+s.height+r.height+a}},{key:"setGridXPosForDualYAxis",value:function(t,e){var i=this.w,a=new B(this.dCtx.ctx);i.config.yaxis.map((function(s,r){-1!==i.globals.ignoreYAxisIndexes.indexOf(r)||s.floating||a.isYAxisHidden(r)||(s.opposite&&(i.globals.translateX=i.globals.translateX-(e[r].width+t[r].width)-parseInt(i.config.yaxis[r].labels.style.fontSize,10)/1.2-12),i.globals.translateX<2&&(i.globals.translateX=2))}))}}]),t}(),nt=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w,this.lgRect={},this.yAxisWidth=0,this.yAxisWidthLeft=0,this.yAxisWidthRight=0,this.xAxisHeight=0,this.isSparkline=this.w.config.chart.sparkline.enabled,this.dimHelpers=new it(this),this.dimYAxis=new st(this),this.dimXAxis=new at(this),this.dimGrid=new rt(this),this.lgWidthForSideLegends=0,this.gridPad=this.w.config.grid.padding,this.xPadRight=0,this.xPadLeft=0}return a(t,[{key:"plotCoords",value:function(){var t=this.w.globals;this.lgRect=this.dimHelpers.getLegendsRect(),t.axisCharts?this.setDimensionsForAxisCharts():this.setDimensionsForNonAxisCharts(),this.dimGrid.gridPadFortitleSubtitle(),t.gridHeight=t.gridHeight-this.gridPad.top-this.gridPad.bottom,t.gridWidth=t.gridWidth-this.gridPad.left-this.gridPad.right-this.xPadRight-this.xPadLeft;var e=this.dimGrid.gridPadForColumnsInNumericAxis(t.gridWidth);t.gridWidth=t.gridWidth-2*e,t.translateX=t.translateX+this.gridPad.left+this.xPadLeft+(e>0?e+4:0),t.translateY=t.translateY+this.gridPad.top}},{key:"setDimensionsForAxisCharts",value:function(){var t=this,e=this.w,i=e.globals,a=this.dimYAxis.getyAxisLabelsCoords(),s=this.dimYAxis.getyAxisTitleCoords();e.globals.yLabelsCoords=[],e.globals.yTitleCoords=[],e.config.yaxis.map((function(t,i){e.globals.yLabelsCoords.push({width:a[i].width,index:i}),e.globals.yTitleCoords.push({width:s[i].width,index:i})})),this.yAxisWidth=this.dimYAxis.getTotalYAxisWidth();var r=this.dimXAxis.getxAxisLabelsCoords(),n=this.dimXAxis.getxAxisTitleCoords();this.conditionalChecksForAxisCoords(r,n),i.translateXAxisY=e.globals.rotateXLabels?this.xAxisHeight/8:-4,i.translateXAxisX=e.globals.rotateXLabels&&e.globals.isXNumeric&&e.config.xaxis.labels.rotate<=-45?-this.xAxisWidth/4:0,e.globals.isBarHorizontal&&(i.rotateXLabels=!1,i.translateXAxisY=parseInt(e.config.xaxis.labels.style.fontSize,10)/1.5*-1),i.translateXAxisY=i.translateXAxisY+e.config.xaxis.labels.offsetY,i.translateXAxisX=i.translateXAxisX+e.config.xaxis.labels.offsetX;var o=this.yAxisWidth,l=this.xAxisHeight;i.xAxisLabelsHeight=this.xAxisHeight,i.xAxisLabelsWidth=this.xAxisWidth,i.xAxisHeight=this.xAxisHeight;var h=10;("radar"===e.config.chart.type||this.isSparkline)&&(o=0,l=i.goldenPadding),this.isSparkline&&(this.lgRect={height:0,width:0}),(this.isSparkline||"treemap"===e.config.chart.type)&&(o=0,l=0,h=0),this.isSparkline||this.dimXAxis.additionalPaddingXLabels(r);var c=function(){i.translateX=o,i.gridHeight=i.svgHeight-t.lgRect.height-l-(t.isSparkline||"treemap"===e.config.chart.type?0:e.globals.rotateXLabels?10:15),i.gridWidth=i.svgWidth-o};switch("top"===e.config.xaxis.position&&(h=i.xAxisHeight-e.config.xaxis.axisTicks.height-5),e.config.legend.position){case"bottom":i.translateY=h,c();break;case"top":i.translateY=this.lgRect.height+h,c();break;case"left":i.translateY=h,i.translateX=this.lgRect.width+o,i.gridHeight=i.svgHeight-l-12,i.gridWidth=i.svgWidth-this.lgRect.width-o;break;case"right":i.translateY=h,i.translateX=o,i.gridHeight=i.svgHeight-l-12,i.gridWidth=i.svgWidth-this.lgRect.width-o-5;break;default:throw new Error("Legend position not supported")}this.dimGrid.setGridXPosForDualYAxis(s,a),new q(this.ctx).setYAxisXPosition(a,s)}},{key:"setDimensionsForNonAxisCharts",value:function(){var t=this.w,e=t.globals,i=t.config,a=0;t.config.legend.show&&!t.config.legend.floating&&(a=20);var s="pie"===i.chart.type||"polarArea"===i.chart.type||"donut"===i.chart.type?"pie":"radialBar",r=i.plotOptions[s].offsetY,n=i.plotOptions[s].offsetX;if(!i.legend.show||i.legend.floating)return e.gridHeight=e.svgHeight-i.grid.padding.left+i.grid.padding.right,e.gridWidth=e.gridHeight,e.translateY=r,void(e.translateX=n+(e.svgWidth-e.gridWidth)/2);switch(i.legend.position){case"bottom":e.gridHeight=e.svgHeight-this.lgRect.height-e.goldenPadding,e.gridWidth=e.svgWidth,e.translateY=r-10,e.translateX=n+(e.svgWidth-e.gridWidth)/2;break;case"top":e.gridHeight=e.svgHeight-this.lgRect.height-e.goldenPadding,e.gridWidth=e.svgWidth,e.translateY=this.lgRect.height+r+10,e.translateX=n+(e.svgWidth-e.gridWidth)/2;break;case"left":e.gridWidth=e.svgWidth-this.lgRect.width-a,e.gridHeight="auto"!==i.chart.height?e.svgHeight:e.gridWidth,e.translateY=r,e.translateX=n+this.lgRect.width+a;break;case"right":e.gridWidth=e.svgWidth-this.lgRect.width-a-5,e.gridHeight="auto"!==i.chart.height?e.svgHeight:e.gridWidth,e.translateY=r,e.translateX=n+10;break;default:throw new Error("Legend position not supported")}}},{key:"conditionalChecksForAxisCoords",value:function(t,e){var i=this.w;this.xAxisHeight=(t.height+e.height)*(i.globals.isMultiLineX?1.2:i.globals.LINE_HEIGHT_RATIO)+(i.globals.rotateXLabels?22:10),this.xAxisWidth=t.width,this.xAxisHeight-e.height>i.config.xaxis.labels.maxHeight&&(this.xAxisHeight=i.config.xaxis.labels.maxHeight),i.config.xaxis.labels.minHeight&&this.xAxisHeight<i.config.xaxis.labels.minHeight&&(this.xAxisHeight=i.config.xaxis.labels.minHeight),i.config.xaxis.floating&&(this.xAxisHeight=0);var a=0,s=0;i.config.yaxis.forEach((function(t){a+=t.labels.minWidth,s+=t.labels.maxWidth})),this.yAxisWidth<a&&(this.yAxisWidth=a),this.yAxisWidth>s&&(this.yAxisWidth=s)}}]),t}(),ot=function(){function t(i){e(this,t),this.w=i.w,this.lgCtx=i}return a(t,[{key:"getLegendStyles",value:function(){var t=document.createElement("style");t.setAttribute("type","text/css");var e=document.createTextNode("\t\n    \t\n      .apexcharts-legend {\t\n        display: flex;\t\n        overflow: auto;\t\n        padding: 0 10px;\t\n      }\t\n      .apexcharts-legend.position-bottom, .apexcharts-legend.position-top {\t\n        flex-wrap: wrap\t\n      }\t\n      .apexcharts-legend.position-right, .apexcharts-legend.position-left {\t\n        flex-direction: column;\t\n        bottom: 0;\t\n      }\t\n      .apexcharts-legend.position-bottom.apexcharts-align-left, .apexcharts-legend.position-top.apexcharts-align-left, .apexcharts-legend.position-right, .apexcharts-legend.position-left {\t\n        justify-content: flex-start;\t\n      }\t\n      .apexcharts-legend.position-bottom.apexcharts-align-center, .apexcharts-legend.position-top.apexcharts-align-center {\t\n        justify-content: center;  \t\n      }\t\n      .apexcharts-legend.position-bottom.apexcharts-align-right, .apexcharts-legend.position-top.apexcharts-align-right {\t\n        justify-content: flex-end;\t\n      }\t\n      .apexcharts-legend-series {\t\n        cursor: pointer;\t\n        line-height: normal;\t\n      }\t\n      .apexcharts-legend.position-bottom .apexcharts-legend-series, .apexcharts-legend.position-top .apexcharts-legend-series{\t\n        display: flex;\t\n        align-items: center;\t\n      }\t\n      .apexcharts-legend-text {\t\n        position: relative;\t\n        font-size: 14px;\t\n      }\t\n      .apexcharts-legend-text *, .apexcharts-legend-marker * {\t\n        pointer-events: none;\t\n      }\t\n      .apexcharts-legend-marker {\t\n        position: relative;\t\n        display: inline-block;\t\n        cursor: pointer;\t\n        margin-right: 3px;\t\n        border-style: solid;\n      }\t\n      \t\n      .apexcharts-legend.apexcharts-align-right .apexcharts-legend-series, .apexcharts-legend.apexcharts-align-left .apexcharts-legend-series{\t\n        display: inline-block;\t\n      }\t\n      .apexcharts-legend-series.apexcharts-no-click {\t\n        cursor: auto;\t\n      }\t\n      .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {\t\n        display: none !important;\t\n      }\t\n      .apexcharts-inactive-legend {\t\n        opacity: 0.45;\t\n      }");return t.appendChild(e),t}},{key:"getLegendBBox",value:function(){var t=this.w.globals.dom.baseEl.querySelector(".apexcharts-legend").getBoundingClientRect(),e=t.width;return{clwh:t.height,clww:e}}},{key:"appendToForeignObject",value:function(){var t=this.w.globals;t.dom.elLegendForeign=document.createElementNS(t.SVGNS,"foreignObject");var e=t.dom.elLegendForeign;e.setAttribute("x",0),e.setAttribute("y",0),e.setAttribute("width",t.svgWidth),e.setAttribute("height",t.svgHeight),t.dom.elLegendWrap.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),e.appendChild(t.dom.elLegendWrap),e.appendChild(this.getLegendStyles()),t.dom.Paper.node.insertBefore(e,t.dom.elGraphical.node)}},{key:"toggleDataSeries",value:function(t,e){var i=this,a=this.w;if(a.globals.axisCharts||"radialBar"===a.config.chart.type){a.globals.resized=!0;var s=null,r=null;if(a.globals.risingSeries=[],a.globals.axisCharts?(s=a.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(t,"']")),r=parseInt(s.getAttribute("data:realIndex"),10)):(s=a.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(t+1,"']")),r=parseInt(s.getAttribute("rel"),10)-1),e)[{cs:a.globals.collapsedSeries,csi:a.globals.collapsedSeriesIndices},{cs:a.globals.ancillaryCollapsedSeries,csi:a.globals.ancillaryCollapsedSeriesIndices}].forEach((function(t){i.riseCollapsedSeries(t.cs,t.csi,r)}));else this.hideSeries({seriesEl:s,realIndex:r})}else{var n=a.globals.dom.Paper.select(" .apexcharts-series[rel='".concat(t+1,"'] path")),o=a.config.chart.type;if("pie"===o||"polarArea"===o||"donut"===o){var l=a.config.plotOptions.pie.donut.labels;new b(this.lgCtx.ctx).pathMouseDown(n.members[0],null),this.lgCtx.ctx.pie.printDataLabelsInner(n.members[0].node,l)}n.fire("click")}}},{key:"hideSeries",value:function(t){var e=t.seriesEl,i=t.realIndex,a=this.w,s=f.clone(a.config.series);if(a.globals.axisCharts){var r=!1;if(a.config.yaxis[i]&&a.config.yaxis[i].show&&a.config.yaxis[i].showAlways&&(r=!0,a.globals.ancillaryCollapsedSeriesIndices.indexOf(i)<0&&(a.globals.ancillaryCollapsedSeries.push({index:i,data:s[i].data.slice(),type:e.parentNode.className.baseVal.split("-")[1]}),a.globals.ancillaryCollapsedSeriesIndices.push(i))),!r){a.globals.collapsedSeries.push({index:i,data:s[i].data.slice(),type:e.parentNode.className.baseVal.split("-")[1]}),a.globals.collapsedSeriesIndices.push(i);var n=a.globals.risingSeries.indexOf(i);a.globals.risingSeries.splice(n,1)}}else a.globals.collapsedSeries.push({index:i,data:s[i]}),a.globals.collapsedSeriesIndices.push(i);for(var o=e.childNodes,l=0;l<o.length;l++)o[l].classList.contains("apexcharts-series-markers-wrap")&&(o[l].classList.contains("apexcharts-hide")?o[l].classList.remove("apexcharts-hide"):o[l].classList.add("apexcharts-hide"));a.globals.allSeriesCollapsed=a.globals.collapsedSeries.length===a.config.series.length,s=this._getSeriesBasedOnCollapsedState(s),this.lgCtx.ctx.updateHelpers._updateSeries(s,a.config.chart.animations.dynamicAnimation.enabled)}},{key:"riseCollapsedSeries",value:function(t,e,i){var a=this.w,s=f.clone(a.config.series);if(t.length>0){for(var r=0;r<t.length;r++)t[r].index===i&&(a.globals.axisCharts?(s[i].data=t[r].data.slice(),t.splice(r,1),e.splice(r,1),a.globals.risingSeries.push(i)):(s[i]=t[r].data,t.splice(r,1),e.splice(r,1),a.globals.risingSeries.push(i)));s=this._getSeriesBasedOnCollapsedState(s),this.lgCtx.ctx.updateHelpers._updateSeries(s,a.config.chart.animations.dynamicAnimation.enabled)}}},{key:"_getSeriesBasedOnCollapsedState",value:function(t){var e=this.w;return e.globals.axisCharts?t.forEach((function(i,a){e.globals.collapsedSeriesIndices.indexOf(a)>-1&&(t[a].data=[])})):t.forEach((function(i,a){e.globals.collapsedSeriesIndices.indexOf(a)>-1&&(t[a]=0)})),t}}]),t}(),lt=function(){function t(i,a){e(this,t),this.ctx=i,this.w=i.w,this.onLegendClick=this.onLegendClick.bind(this),this.onLegendHovered=this.onLegendHovered.bind(this),this.isBarsDistributed="bar"===this.w.config.chart.type&&this.w.config.plotOptions.bar.distributed&&1===this.w.config.series.length,this.legendHelpers=new ot(this)}return a(t,[{key:"init",value:function(){var t=this.w,e=t.globals,i=t.config;if((i.legend.showForSingleSeries&&1===e.series.length||this.isBarsDistributed||e.series.length>1||!e.axisCharts)&&i.legend.show){for(;e.dom.elLegendWrap.firstChild;)e.dom.elLegendWrap.removeChild(e.dom.elLegendWrap.firstChild);this.drawLegends(),f.isIE11()?document.getElementsByTagName("head")[0].appendChild(this.legendHelpers.getLegendStyles()):this.legendHelpers.appendToForeignObject(),"bottom"===i.legend.position||"top"===i.legend.position?this.legendAlignHorizontal():"right"!==i.legend.position&&"left"!==i.legend.position||this.legendAlignVertical()}}},{key:"drawLegends",value:function(){var t=this,e=this.w,i=e.config.legend.fontFamily,a=e.globals.seriesNames,s=e.globals.colors.slice();if("heatmap"===e.config.chart.type){var r=e.config.plotOptions.heatmap.colorScale.ranges;a=r.map((function(t){return t.name?t.name:t.from+" - "+t.to})),s=r.map((function(t){return t.color}))}else this.isBarsDistributed&&(a=e.globals.labels.slice());for(var n=e.globals.legendFormatter,o=e.config.legend.inverseOrder,l=o?a.length-1:0;o?l>=0:l<=a.length-1;o?l--:l++){var h=n(a[l],{seriesIndex:l,w:e}),c=!1,d=!1;if(e.globals.collapsedSeries.length>0)for(var g=0;g<e.globals.collapsedSeries.length;g++)e.globals.collapsedSeries[g].index===l&&(c=!0);if(e.globals.ancillaryCollapsedSeriesIndices.length>0)for(var u=0;u<e.globals.ancillaryCollapsedSeriesIndices.length;u++)e.globals.ancillaryCollapsedSeriesIndices[u]===l&&(d=!0);var p=document.createElement("span");p.classList.add("apexcharts-legend-marker");var x=e.config.legend.markers.offsetX,m=e.config.legend.markers.offsetY,v=e.config.legend.markers.height,w=e.config.legend.markers.width,k=e.config.legend.markers.strokeWidth,A=e.config.legend.markers.strokeColor,S=e.config.legend.markers.radius,C=p.style;C.background=s[l],C.color=s[l],C.setProperty("background",s[l],"important"),e.config.legend.markers.fillColors&&e.config.legend.markers.fillColors[l]&&(C.background=e.config.legend.markers.fillColors[l]),void 0!==e.globals.seriesColors[l]&&(C.background=e.globals.seriesColors[l],C.color=e.globals.seriesColors[l]),C.height=Array.isArray(v)?parseFloat(v[l])+"px":parseFloat(v)+"px",C.width=Array.isArray(w)?parseFloat(w[l])+"px":parseFloat(w)+"px",C.left=Array.isArray(x)?x[l]:x,C.top=Array.isArray(m)?m[l]:m,C.borderWidth=Array.isArray(k)?k[l]:k,C.borderColor=Array.isArray(A)?A[l]:A,C.borderRadius=Array.isArray(S)?parseFloat(S[l])+"px":parseFloat(S)+"px",e.config.legend.markers.customHTML&&(Array.isArray(e.config.legend.markers.customHTML)?e.config.legend.markers.customHTML[l]&&(p.innerHTML=e.config.legend.markers.customHTML[l]()):p.innerHTML=e.config.legend.markers.customHTML()),b.setAttrs(p,{rel:l+1,"data:collapsed":c||d}),(c||d)&&p.classList.add("apexcharts-inactive-legend");var L=document.createElement("div"),P=document.createElement("span");P.classList.add("apexcharts-legend-text"),P.innerHTML=Array.isArray(h)?h.join(" "):h;var T=e.config.legend.labels.useSeriesColors?e.globals.colors[l]:e.config.legend.labels.colors;T||(T=e.config.chart.foreColor),P.style.color=T,P.style.fontSize=parseFloat(e.config.legend.fontSize)+"px",P.style.fontWeight=e.config.legend.fontWeight,P.style.fontFamily=i||e.config.chart.fontFamily,b.setAttrs(P,{rel:l+1,i:l,"data:default-text":encodeURIComponent(h),"data:collapsed":c||d}),L.appendChild(p),L.appendChild(P);var z=new y(this.ctx);if(!e.config.legend.showForZeroSeries)0===z.getSeriesTotalByIndex(l)&&z.seriesHaveSameValues(l)&&!z.isSeriesNull(l)&&-1===e.globals.collapsedSeriesIndices.indexOf(l)&&-1===e.globals.ancillaryCollapsedSeriesIndices.indexOf(l)&&L.classList.add("apexcharts-hidden-zero-series");e.config.legend.showForNullSeries||z.isSeriesNull(l)&&-1===e.globals.collapsedSeriesIndices.indexOf(l)&&-1===e.globals.ancillaryCollapsedSeriesIndices.indexOf(l)&&L.classList.add("apexcharts-hidden-null-series"),e.globals.dom.elLegendWrap.appendChild(L),e.globals.dom.elLegendWrap.classList.add("apexcharts-align-".concat(e.config.legend.horizontalAlign)),e.globals.dom.elLegendWrap.classList.add("position-"+e.config.legend.position),L.classList.add("apexcharts-legend-series"),L.style.margin="".concat(e.config.legend.itemMargin.vertical,"px ").concat(e.config.legend.itemMargin.horizontal,"px"),e.globals.dom.elLegendWrap.style.width=e.config.legend.width?e.config.legend.width+"px":"",e.globals.dom.elLegendWrap.style.height=e.config.legend.height?e.config.legend.height+"px":"",b.setAttrs(L,{rel:l+1,seriesName:f.escapeString(a[l]),"data:collapsed":c||d}),(c||d)&&L.classList.add("apexcharts-inactive-legend"),e.config.legend.onItemClick.toggleDataSeries||L.classList.add("apexcharts-no-click")}e.globals.dom.elWrap.addEventListener("click",t.onLegendClick,!0),e.config.legend.onItemHover.highlightDataSeries&&(e.globals.dom.elWrap.addEventListener("mousemove",t.onLegendHovered,!0),e.globals.dom.elWrap.addEventListener("mouseout",t.onLegendHovered,!0))}},{key:"setLegendWrapXY",value:function(t,e){var i=this.w,a=i.globals.dom.baseEl.querySelector(".apexcharts-legend"),s=a.getBoundingClientRect(),r=0,n=0;if("bottom"===i.config.legend.position)n+=i.globals.svgHeight-s.height/2;else if("top"===i.config.legend.position){var o=new nt(this.ctx),l=o.dimHelpers.getTitleSubtitleCoords("title").height,h=o.dimHelpers.getTitleSubtitleCoords("subtitle").height;n=n+(l>0?l-10:0)+(h>0?h-10:0)}a.style.position="absolute",r=r+t+i.config.legend.offsetX,n=n+e+i.config.legend.offsetY,a.style.left=r+"px",a.style.top=n+"px","bottom"===i.config.legend.position?(a.style.top="auto",a.style.bottom=5-i.config.legend.offsetY+"px"):"right"===i.config.legend.position&&(a.style.left="auto",a.style.right=25+i.config.legend.offsetX+"px");["width","height"].forEach((function(t){a.style[t]&&(a.style[t]=parseInt(i.config.legend[t],10)+"px")}))}},{key:"legendAlignHorizontal",value:function(){var t=this.w;t.globals.dom.baseEl.querySelector(".apexcharts-legend").style.right=0;var e=this.legendHelpers.getLegendBBox(),i=new nt(this.ctx),a=i.dimHelpers.getTitleSubtitleCoords("title"),s=i.dimHelpers.getTitleSubtitleCoords("subtitle"),r=0;"bottom"===t.config.legend.position?r=-e.clwh/1.8:"top"===t.config.legend.position&&(r=a.height+s.height+t.config.title.margin+t.config.subtitle.margin-10),this.setLegendWrapXY(20,r)}},{key:"legendAlignVertical",value:function(){var t=this.w,e=this.legendHelpers.getLegendBBox(),i=0;"left"===t.config.legend.position&&(i=20),"right"===t.config.legend.position&&(i=t.globals.svgWidth-e.clww-10),this.setLegendWrapXY(i,20)}},{key:"onLegendHovered",value:function(t){var e=this.w,i=t.target.classList.contains("apexcharts-legend-text")||t.target.classList.contains("apexcharts-legend-marker");if("heatmap"===e.config.chart.type||this.isBarsDistributed){if(i){var a=parseInt(t.target.getAttribute("rel"),10)-1;this.ctx.events.fireEvent("legendHover",[this.ctx,a,this.w]),new M(this.ctx).highlightRangeInSeries(t,t.target)}}else!t.target.classList.contains("apexcharts-inactive-legend")&&i&&new M(this.ctx).toggleSeriesOnHover(t,t.target)}},{key:"onLegendClick",value:function(t){var e=this.w;if(t.target.classList.contains("apexcharts-legend-text")||t.target.classList.contains("apexcharts-legend-marker")){var i=parseInt(t.target.getAttribute("rel"),10)-1,a="true"===t.target.getAttribute("data:collapsed"),s=this.w.config.chart.events.legendClick;"function"==typeof s&&s(this.ctx,i,this.w),this.ctx.events.fireEvent("legendClick",[this.ctx,i,this.w]);var r=this.w.config.legend.markers.onClick;"function"==typeof r&&t.target.classList.contains("apexcharts-legend-marker")&&(r(this.ctx,i,this.w),this.ctx.events.fireEvent("legendMarkerClick",[this.ctx,i,this.w])),"treemap"!==e.config.chart.type&&"heatmap"!==e.config.chart.type&&!this.isBarsDistributed&&e.config.legend.onItemClick.toggleDataSeries&&this.legendHelpers.toggleDataSeries(i,a)}}}]),t}(),ht=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w;var a=this.w;this.ev=this.w.config.chart.events,this.selectedClass="apexcharts-selected",this.localeValues=this.w.globals.locale.toolbar,this.minX=a.globals.minX,this.maxX=a.globals.maxX}return a(t,[{key:"createToolbar",value:function(){var t=this,e=this.w,i=function(){return document.createElement("div")},a=i();if(a.setAttribute("class","apexcharts-toolbar"),a.style.top=e.config.chart.toolbar.offsetY+"px",a.style.right=3-e.config.chart.toolbar.offsetX+"px",e.globals.dom.elWrap.appendChild(a),this.elZoom=i(),this.elZoomIn=i(),this.elZoomOut=i(),this.elPan=i(),this.elSelection=i(),this.elZoomReset=i(),this.elMenuIcon=i(),this.elMenu=i(),this.elCustomIcons=[],this.t=e.config.chart.toolbar.tools,Array.isArray(this.t.customIcons))for(var s=0;s<this.t.customIcons.length;s++)this.elCustomIcons.push(i());var r=[],n=function(i,a,s){var n=i.toLowerCase();t.t[n]&&e.config.chart.zoom.enabled&&r.push({el:a,icon:"string"==typeof t.t[n]?t.t[n]:s,title:t.localeValues[i],class:"apexcharts-".concat(n,"-icon")})};n("zoomIn",this.elZoomIn,'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>\n</svg>\n'),n("zoomOut",this.elZoomOut,'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>\n</svg>\n');var o=function(i){t.t[i]&&e.config.chart[i].enabled&&r.push({el:"zoom"===i?t.elZoom:t.elSelection,icon:"string"==typeof t.t[i]?t.t[i]:"zoom"===i?'<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">\n    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>\n    <path d="M0 0h24v24H0V0z" fill="none"/>\n    <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/>\n</svg>':'<svg fill="#6E8192" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2z"/>\n</svg>',title:t.localeValues["zoom"===i?"selectionZoom":"selection"],class:e.globals.isTouchDevice?"apexcharts-element-hidden":"apexcharts-".concat(i,"-icon")})};o("zoom"),o("selection"),this.t.pan&&e.config.chart.zoom.enabled&&r.push({el:this.elPan,icon:"string"==typeof this.t.pan?this.t.pan:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="24" viewBox="0 0 24 24" width="24">\n    <defs>\n        <path d="M0 0h24v24H0z" id="a"/>\n    </defs>\n    <clipPath id="b">\n        <use overflow="visible" xlink:href="#a"/>\n    </clipPath>\n    <path clip-path="url(#b)" d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"/>\n</svg>',title:this.localeValues.pan,class:e.globals.isTouchDevice?"apexcharts-element-hidden":"apexcharts-pan-icon"}),n("reset",this.elZoomReset,'<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>\n    <path d="M0 0h24v24H0z" fill="none"/>\n</svg>'),this.t.download&&r.push({el:this.elMenuIcon,icon:"string"==typeof this.t.download?this.t.download:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>',title:this.localeValues.menu,class:"apexcharts-menu-icon"});for(var l=0;l<this.elCustomIcons.length;l++)r.push({el:this.elCustomIcons[l],icon:this.t.customIcons[l].icon,title:this.t.customIcons[l].title,index:this.t.customIcons[l].index,class:"apexcharts-toolbar-custom-icon "+this.t.customIcons[l].class});r.forEach((function(t,e){t.index&&f.moveIndexInArray(r,e,t.index)}));for(var h=0;h<r.length;h++)b.setAttrs(r[h].el,{class:r[h].class,title:r[h].title}),r[h].el.innerHTML=r[h].icon,a.appendChild(r[h].el);this._createHamburgerMenu(a),e.globals.zoomEnabled?this.elZoom.classList.add(this.selectedClass):e.globals.panEnabled?this.elPan.classList.add(this.selectedClass):e.globals.selectionEnabled&&this.elSelection.classList.add(this.selectedClass),this.addToolbarEventListeners()}},{key:"_createHamburgerMenu",value:function(t){this.elMenuItems=[],t.appendChild(this.elMenu),b.setAttrs(this.elMenu,{class:"apexcharts-menu"});var e=[{name:"exportSVG",title:this.localeValues.exportToSVG},{name:"exportPNG",title:this.localeValues.exportToPNG},{name:"exportCSV",title:this.localeValues.exportToCSV}];this.w.globals.allSeriesHasEqualX||e.splice(2,1);for(var i=0;i<e.length;i++)this.elMenuItems.push(document.createElement("div")),this.elMenuItems[i].innerHTML=e[i].title,b.setAttrs(this.elMenuItems[i],{class:"apexcharts-menu-item ".concat(e[i].name),title:e[i].title}),this.elMenu.appendChild(this.elMenuItems[i])}},{key:"addToolbarEventListeners",value:function(){var t=this;this.elZoomReset.addEventListener("click",this.handleZoomReset.bind(this)),this.elSelection.addEventListener("click",this.toggleZoomSelection.bind(this,"selection")),this.elZoom.addEventListener("click",this.toggleZoomSelection.bind(this,"zoom")),this.elZoomIn.addEventListener("click",this.handleZoomIn.bind(this)),this.elZoomOut.addEventListener("click",this.handleZoomOut.bind(this)),this.elPan.addEventListener("click",this.togglePanning.bind(this)),this.elMenuIcon.addEventListener("click",this.toggleMenu.bind(this)),this.elMenuItems.forEach((function(e){e.classList.contains("exportSVG")?e.addEventListener("click",t.handleDownload.bind(t,"svg")):e.classList.contains("exportPNG")?e.addEventListener("click",t.handleDownload.bind(t,"png")):e.classList.contains("exportCSV")&&e.addEventListener("click",t.handleDownload.bind(t,"csv"))}));for(var e=0;e<this.t.customIcons.length;e++)this.elCustomIcons[e].addEventListener("click",this.t.customIcons[e].click.bind(this,this.ctx,this.ctx.w))}},{key:"toggleZoomSelection",value:function(t){this.ctx.getSyncedCharts().forEach((function(e){e.ctx.toolbar.toggleOtherControls();var i="selection"===t?e.ctx.toolbar.elSelection:e.ctx.toolbar.elZoom,a="selection"===t?"selectionEnabled":"zoomEnabled";e.w.globals[a]=!e.w.globals[a],i.classList.contains(e.ctx.toolbar.selectedClass)?i.classList.remove(e.ctx.toolbar.selectedClass):i.classList.add(e.ctx.toolbar.selectedClass)}))}},{key:"getToolbarIconsReference",value:function(){var t=this.w;this.elZoom||(this.elZoom=t.globals.dom.baseEl.querySelector(".apexcharts-zoom-icon")),this.elPan||(this.elPan=t.globals.dom.baseEl.querySelector(".apexcharts-pan-icon")),this.elSelection||(this.elSelection=t.globals.dom.baseEl.querySelector(".apexcharts-selection-icon"))}},{key:"enableZoomPanFromToolbar",value:function(t){this.toggleOtherControls(),"pan"===t?this.w.globals.panEnabled=!0:this.w.globals.zoomEnabled=!0;var e="pan"===t?this.elPan:this.elZoom,i="pan"===t?this.elZoom:this.elPan;e&&e.classList.add(this.selectedClass),i&&i.classList.remove(this.selectedClass)}},{key:"togglePanning",value:function(){this.ctx.getSyncedCharts().forEach((function(t){t.ctx.toolbar.toggleOtherControls(),t.w.globals.panEnabled=!t.w.globals.panEnabled,t.ctx.toolbar.elPan.classList.contains(t.ctx.toolbar.selectedClass)?t.ctx.toolbar.elPan.classList.remove(t.ctx.toolbar.selectedClass):t.ctx.toolbar.elPan.classList.add(t.ctx.toolbar.selectedClass)}))}},{key:"toggleOtherControls",value:function(){var t=this,e=this.w;e.globals.panEnabled=!1,e.globals.zoomEnabled=!1,e.globals.selectionEnabled=!1,this.getToolbarIconsReference(),[this.elPan,this.elSelection,this.elZoom].forEach((function(e){e&&e.classList.remove(t.selectedClass)}))}},{key:"handleZoomIn",value:function(){var t=this.w;t.globals.isTimelineBar&&(this.minX=t.globals.minY,this.maxX=t.globals.maxY);var e=(this.minX+this.maxX)/2,i=(this.minX+e)/2,a=(this.maxX+e)/2,s=this._getNewMinXMaxX(i,a);t.globals.disableZoomIn||this.zoomUpdateOptions(s.minX,s.maxX)}},{key:"handleZoomOut",value:function(){var t=this.w;if(t.globals.isTimelineBar&&(this.minX=t.globals.minY,this.maxX=t.globals.maxY),!("datetime"===t.config.xaxis.type&&new Date(this.minX).getUTCFullYear()<1e3)){var e=(this.minX+this.maxX)/2,i=this.minX-(e-this.minX),a=this.maxX-(e-this.maxX),s=this._getNewMinXMaxX(i,a);t.globals.disableZoomOut||this.zoomUpdateOptions(s.minX,s.maxX)}}},{key:"_getNewMinXMaxX",value:function(t,e){var i=this.w.config.xaxis.convertedCatToNumeric;return{minX:i?Math.floor(t):t,maxX:i?Math.floor(e):e}}},{key:"zoomUpdateOptions",value:function(t,e){var i=this.w;if(void 0!==t||void 0!==e){if(!(i.config.xaxis.convertedCatToNumeric&&(t<1&&(t=1,e=i.globals.dataPoints),e-t<2))){var a={min:t,max:e},s=this.getBeforeZoomRange(a);s&&(a=s.xaxis);var r={xaxis:a},n=f.clone(i.globals.initialConfig.yaxis);if(i.config.chart.zoom.autoScaleYaxis)n=new j(this.ctx).autoScaleY(this.ctx,n,{xaxis:a});i.config.chart.group||(r.yaxis=n),this.w.globals.zoomed=!0,this.ctx.updateHelpers._updateOptions(r,!1,this.w.config.chart.animations.dynamicAnimation.enabled),this.zoomCallback(a,n)}}else this.handleZoomReset()}},{key:"zoomCallback",value:function(t,e){"function"==typeof this.ev.zoomed&&this.ev.zoomed(this.ctx,{xaxis:t,yaxis:e})}},{key:"getBeforeZoomRange",value:function(t,e){var i=null;return"function"==typeof this.ev.beforeZoom&&(i=this.ev.beforeZoom(this,{xaxis:t,yaxis:e})),i}},{key:"toggleMenu",value:function(){var t=this;window.setTimeout((function(){t.elMenu.classList.contains("apexcharts-menu-open")?t.elMenu.classList.remove("apexcharts-menu-open"):t.elMenu.classList.add("apexcharts-menu-open")}),0)}},{key:"handleDownload",value:function(t){var e=this.w,i=new V(this.ctx);switch(t){case"svg":i.exportToSVG(this.ctx);break;case"png":i.exportToPng(this.ctx);break;case"csv":i.exportToCSV({series:e.config.series,columnDelimiter:e.config.chart.toolbar.export.csv.columnDelimiter})}}},{key:"handleZoomReset",value:function(t){this.ctx.getSyncedCharts().forEach((function(t){var e=t.w;if(e.globals.lastXAxis.min=void 0,e.globals.lastXAxis.max=void 0,t.updateHelpers.revertDefaultAxisMinMax(),"function"==typeof e.config.chart.events.beforeResetZoom){var i=e.config.chart.events.beforeResetZoom(t,e);i&&t.updateHelpers.revertDefaultAxisMinMax(i)}"function"==typeof e.config.chart.events.zoomed&&t.ctx.toolbar.zoomCallback({min:e.config.xaxis.min,max:e.config.xaxis.max}),e.globals.zoomed=!1;var a=t.ctx.series.emptyCollapsedSeries(f.clone(e.globals.initialSeries));t.updateHelpers._updateSeries(a,e.config.chart.animations.dynamicAnimation.enabled)}))}},{key:"destroy",value:function(){this.elZoom=null,this.elZoomIn=null,this.elZoomOut=null,this.elPan=null,this.elSelection=null,this.elZoomReset=null,this.elMenuIcon=null}}]),t}(),ct=function(t){o(s,t);var i=d(s);function s(t){var a;return e(this,s),(a=i.call(this,t)).ctx=t,a.w=t.w,a.dragged=!1,a.graphics=new b(a.ctx),a.eventList=["mousedown","mouseleave","mousemove","touchstart","touchmove","mouseup","touchend"],a.clientX=0,a.clientY=0,a.startX=0,a.endX=0,a.dragX=0,a.startY=0,a.endY=0,a.dragY=0,a.moveDirection="none",a}return a(s,[{key:"init",value:function(t){var e=this,i=t.xyRatios,a=this.w,s=this;this.xyRatios=i,this.zoomRect=this.graphics.drawRect(0,0,0,0),this.selectionRect=this.graphics.drawRect(0,0,0,0),this.gridRect=a.globals.dom.baseEl.querySelector(".apexcharts-grid"),this.zoomRect.node.classList.add("apexcharts-zoom-rect"),this.selectionRect.node.classList.add("apexcharts-selection-rect"),a.globals.dom.elGraphical.add(this.zoomRect),a.globals.dom.elGraphical.add(this.selectionRect),"x"===a.config.chart.selection.type?this.slDraggableRect=this.selectionRect.draggable({minX:0,minY:0,maxX:a.globals.gridWidth,maxY:a.globals.gridHeight}).on("dragmove",this.selectionDragging.bind(this,"dragging")):"y"===a.config.chart.selection.type?this.slDraggableRect=this.selectionRect.draggable({minX:0,maxX:a.globals.gridWidth}).on("dragmove",this.selectionDragging.bind(this,"dragging")):this.slDraggableRect=this.selectionRect.draggable().on("dragmove",this.selectionDragging.bind(this,"dragging")),this.preselectedSelection(),this.hoverArea=a.globals.dom.baseEl.querySelector("".concat(a.globals.chartClass," .apexcharts-svg")),this.hoverArea.classList.add("apexcharts-zoomable"),this.eventList.forEach((function(t){e.hoverArea.addEventListener(t,s.svgMouseEvents.bind(s,i),{capture:!1,passive:!0})}))}},{key:"destroy",value:function(){this.slDraggableRect&&(this.slDraggableRect.draggable(!1),this.slDraggableRect.off(),this.selectionRect.off()),this.selectionRect=null,this.zoomRect=null,this.gridRect=null}},{key:"svgMouseEvents",value:function(t,e){var i=this.w,a=this,s=this.ctx.toolbar,r=i.globals.zoomEnabled?i.config.chart.zoom.type:i.config.chart.selection.type,n=i.config.chart.toolbar.autoSelected;e.shiftKey?(this.shiftWasPressed=!0,s.enableZoomPanFromToolbar("pan"===n?"zoom":"pan")):this.shiftWasPressed&&(s.enableZoomPanFromToolbar(n),this.shiftWasPressed=!1);var o=e.target.classList;if(!(o.contains("apexcharts-selection-rect")||o.contains("apexcharts-legend-marker")||o.contains("apexcharts-legend-text")||e.target.parentNode.classList.contains("apexcharts-toolbar"))){if(a.clientX="touchmove"===e.type||"touchstart"===e.type?e.touches[0].clientX:"touchend"===e.type?e.changedTouches[0].clientX:e.clientX,a.clientY="touchmove"===e.type||"touchstart"===e.type?e.touches[0].clientY:"touchend"===e.type?e.changedTouches[0].clientY:e.clientY,"mousedown"===e.type&&1===e.which){var l=a.gridRect.getBoundingClientRect();a.startX=a.clientX-l.left,a.startY=a.clientY-l.top,a.dragged=!1,a.w.globals.mousedown=!0}if(("mousemove"===e.type&&1===e.which||"touchmove"===e.type)&&(a.dragged=!0,i.globals.panEnabled?(i.globals.selection=null,a.w.globals.mousedown&&a.panDragging({context:a,zoomtype:r,xyRatios:t})):(a.w.globals.mousedown&&i.globals.zoomEnabled||a.w.globals.mousedown&&i.globals.selectionEnabled)&&(a.selection=a.selectionDrawing({context:a,zoomtype:r}))),"mouseup"===e.type||"touchend"===e.type||"mouseleave"===e.type){var h=a.gridRect.getBoundingClientRect();a.w.globals.mousedown&&(a.endX=a.clientX-h.left,a.endY=a.clientY-h.top,a.dragX=Math.abs(a.endX-a.startX),a.dragY=Math.abs(a.endY-a.startY),(i.globals.zoomEnabled||i.globals.selectionEnabled)&&a.selectionDrawn({context:a,zoomtype:r}),i.globals.panEnabled&&i.config.xaxis.convertedCatToNumeric&&a.delayedPanScrolled()),i.globals.zoomEnabled&&a.hideSelectionRect(this.selectionRect),a.dragged=!1,a.w.globals.mousedown=!1}this.makeSelectionRectDraggable()}}},{key:"makeSelectionRectDraggable",value:function(){var t=this.w;if(this.selectionRect){var e=this.selectionRect.node.getBoundingClientRect();e.width>0&&e.height>0&&this.slDraggableRect.selectize({points:"l, r",pointSize:8,pointType:"rect"}).resize({constraint:{minX:0,minY:0,maxX:t.globals.gridWidth,maxY:t.globals.gridHeight}}).on("resizing",this.selectionDragging.bind(this,"resizing"))}}},{key:"preselectedSelection",value:function(){var t=this.w,e=this.xyRatios;if(!t.globals.zoomEnabled)if(void 0!==t.globals.selection&&null!==t.globals.selection)this.drawSelectionRect(t.globals.selection);else if(void 0!==t.config.chart.selection.xaxis.min&&void 0!==t.config.chart.selection.xaxis.max){var i=(t.config.chart.selection.xaxis.min-t.globals.minX)/e.xRatio,a={x:i,y:0,width:t.globals.gridWidth-(t.globals.maxX-t.config.chart.selection.xaxis.max)/e.xRatio-i,height:t.globals.gridHeight,translateX:0,translateY:0,selectionEnabled:!0};this.drawSelectionRect(a),this.makeSelectionRectDraggable(),"function"==typeof t.config.chart.events.selection&&t.config.chart.events.selection(this.ctx,{xaxis:{min:t.config.chart.selection.xaxis.min,max:t.config.chart.selection.xaxis.max},yaxis:{}})}}},{key:"drawSelectionRect",value:function(t){var e=t.x,i=t.y,a=t.width,s=t.height,r=t.translateX,n=void 0===r?0:r,o=t.translateY,l=void 0===o?0:o,h=this.w,c=this.zoomRect,d=this.selectionRect;if(this.dragged||null!==h.globals.selection){var g={transform:"translate("+n+", "+l+")"};h.globals.zoomEnabled&&this.dragged&&(a<0&&(a=1),c.attr({x:e,y:i,width:a,height:s,fill:h.config.chart.zoom.zoomedArea.fill.color,"fill-opacity":h.config.chart.zoom.zoomedArea.fill.opacity,stroke:h.config.chart.zoom.zoomedArea.stroke.color,"stroke-width":h.config.chart.zoom.zoomedArea.stroke.width,"stroke-opacity":h.config.chart.zoom.zoomedArea.stroke.opacity}),b.setAttrs(c.node,g)),h.globals.selectionEnabled&&(d.attr({x:e,y:i,width:a>0?a:0,height:s>0?s:0,fill:h.config.chart.selection.fill.color,"fill-opacity":h.config.chart.selection.fill.opacity,stroke:h.config.chart.selection.stroke.color,"stroke-width":h.config.chart.selection.stroke.width,"stroke-dasharray":h.config.chart.selection.stroke.dashArray,"stroke-opacity":h.config.chart.selection.stroke.opacity}),b.setAttrs(d.node,g))}}},{key:"hideSelectionRect",value:function(t){t&&t.attr({x:0,y:0,width:0,height:0})}},{key:"selectionDrawing",value:function(t){var e=t.context,i=t.zoomtype,a=this.w,s=e,r=this.gridRect.getBoundingClientRect(),n=s.startX-1,o=s.startY,l=!1,h=!1,c=s.clientX-r.left-n,d=s.clientY-r.top-o,g={};return Math.abs(c+n)>a.globals.gridWidth?c=a.globals.gridWidth-n:s.clientX-r.left<0&&(c=n),n>s.clientX-r.left&&(l=!0,c=Math.abs(c)),o>s.clientY-r.top&&(h=!0,d=Math.abs(d)),g="x"===i?{x:l?n-c:n,y:0,width:c,height:a.globals.gridHeight}:"y"===i?{x:0,y:h?o-d:o,width:a.globals.gridWidth,height:d}:{x:l?n-c:n,y:h?o-d:o,width:c,height:d},s.drawSelectionRect(g),s.selectionDragging("resizing"),g}},{key:"selectionDragging",value:function(t,e){var i=this,a=this.w,s=this.xyRatios,r=this.selectionRect,n=0;"resizing"===t&&(n=30);var o=function(t){return parseFloat(r.node.getAttribute(t))},l={x:o("x"),y:o("y"),width:o("width"),height:o("height")};a.globals.selection=l,"function"==typeof a.config.chart.events.selection&&a.globals.selectionEnabled&&(clearTimeout(this.w.globals.selectionResizeTimer),this.w.globals.selectionResizeTimer=window.setTimeout((function(){var t=i.gridRect.getBoundingClientRect(),e=r.node.getBoundingClientRect(),n={xaxis:{min:a.globals.xAxisScale.niceMin+(e.left-t.left)*s.xRatio,max:a.globals.xAxisScale.niceMin+(e.right-t.left)*s.xRatio},yaxis:{min:a.globals.yAxisScale[0].niceMin+(t.bottom-e.bottom)*s.yRatio[0],max:a.globals.yAxisScale[0].niceMax-(e.top-t.top)*s.yRatio[0]}};a.config.chart.events.selection(i.ctx,n),a.config.chart.brush.enabled&&void 0!==a.config.chart.events.brushScrolled&&a.config.chart.events.brushScrolled(i.ctx,n)}),n))}},{key:"selectionDrawn",value:function(t){var e=t.context,i=t.zoomtype,a=this.w,s=e,r=this.xyRatios,n=this.ctx.toolbar;if(s.startX>s.endX){var o=s.startX;s.startX=s.endX,s.endX=o}if(s.startY>s.endY){var l=s.startY;s.startY=s.endY,s.endY=l}var h=void 0,c=void 0;a.globals.isTimelineBar?(h=a.globals.yAxisScale[0].niceMin+s.startX*r.invertedYRatio,c=a.globals.yAxisScale[0].niceMin+s.endX*r.invertedYRatio):(h=a.globals.xAxisScale.niceMin+s.startX*r.xRatio,c=a.globals.xAxisScale.niceMin+s.endX*r.xRatio);var d=[],g=[];if(a.config.yaxis.forEach((function(t,e){d.push(a.globals.yAxisScale[e].niceMax-r.yRatio[e]*s.startY),g.push(a.globals.yAxisScale[e].niceMax-r.yRatio[e]*s.endY)})),s.dragged&&(s.dragX>10||s.dragY>10)&&h!==c)if(a.globals.zoomEnabled){var u=f.clone(a.globals.initialConfig.yaxis),p=f.clone(a.globals.initialConfig.xaxis);if(a.globals.zoomed=!0,a.config.xaxis.convertedCatToNumeric&&(h=Math.floor(h),c=Math.floor(c),h<1&&(h=1,c=a.globals.dataPoints),c-h<2&&(c=h+1)),"xy"!==i&&"x"!==i||(p={min:h,max:c}),"xy"!==i&&"y"!==i||u.forEach((function(t,e){u[e].min=g[e],u[e].max=d[e]})),a.config.chart.zoom.autoScaleYaxis){var x=new j(s.ctx);u=x.autoScaleY(s.ctx,u,{xaxis:p})}if(n){var b=n.getBeforeZoomRange(p,u);b&&(p=b.xaxis?b.xaxis:p,u=b.yaxis?b.yaxis:u)}var m={xaxis:p};a.config.chart.group||(m.yaxis=u),s.ctx.updateHelpers._updateOptions(m,!1,s.w.config.chart.animations.dynamicAnimation.enabled),"function"==typeof a.config.chart.events.zoomed&&n.zoomCallback(p,u)}else if(a.globals.selectionEnabled){var v,y=null;v={min:h,max:c},"xy"!==i&&"y"!==i||(y=f.clone(a.config.yaxis)).forEach((function(t,e){y[e].min=g[e],y[e].max=d[e]})),a.globals.selection=s.selection,"function"==typeof a.config.chart.events.selection&&a.config.chart.events.selection(s.ctx,{xaxis:v,yaxis:y})}}},{key:"panDragging",value:function(t){var e=t.context,i=this.w,a=e;if(void 0!==i.globals.lastClientPosition.x){var s=i.globals.lastClientPosition.x-a.clientX,r=i.globals.lastClientPosition.y-a.clientY;Math.abs(s)>Math.abs(r)&&s>0?this.moveDirection="left":Math.abs(s)>Math.abs(r)&&s<0?this.moveDirection="right":Math.abs(r)>Math.abs(s)&&r>0?this.moveDirection="up":Math.abs(r)>Math.abs(s)&&r<0&&(this.moveDirection="down")}i.globals.lastClientPosition={x:a.clientX,y:a.clientY};var n=i.globals.minX,o=i.globals.maxX;i.config.xaxis.convertedCatToNumeric||a.panScrolled(n,o)}},{key:"delayedPanScrolled",value:function(){var t=this.w,e=t.globals.minX,i=t.globals.maxX,a=(t.globals.maxX-t.globals.minX)/2;"left"===this.moveDirection?(e=t.globals.minX+a,i=t.globals.maxX+a):"right"===this.moveDirection&&(e=t.globals.minX-a,i=t.globals.maxX-a),e=Math.floor(e),i=Math.floor(i),this.updateScrolledChart({xaxis:{min:e,max:i}},e,i)}},{key:"panScrolled",value:function(t,e){var i=this.w,a=this.xyRatios,s=f.clone(i.globals.initialConfig.yaxis);"left"===this.moveDirection?(t=i.globals.minX+i.globals.gridWidth/15*a.xRatio,e=i.globals.maxX+i.globals.gridWidth/15*a.xRatio):"right"===this.moveDirection&&(t=i.globals.minX-i.globals.gridWidth/15*a.xRatio,e=i.globals.maxX-i.globals.gridWidth/15*a.xRatio),(t<i.globals.initialMinX||e>i.globals.initialMaxX)&&(t=i.globals.minX,e=i.globals.maxX);var r={min:t,max:e};i.config.chart.zoom.autoScaleYaxis&&(s=new j(this.ctx).autoScaleY(this.ctx,s,{xaxis:r}));var n={xaxis:{min:t,max:e}};i.config.chart.group||(n.yaxis=s),this.updateScrolledChart(n,t,e)}},{key:"updateScrolledChart",value:function(t,e,i){var a=this.w;this.ctx.updateHelpers._updateOptions(t,!1,!1),"function"==typeof a.config.chart.events.scrolled&&a.config.chart.events.scrolled(this.ctx,{xaxis:{min:e,max:i}})}}]),s}(ht),dt=function(){function t(i){e(this,t),this.w=i.w,this.ttCtx=i,this.ctx=i.ctx}return a(t,[{key:"getNearestValues",value:function(t){var e=t.hoverArea,i=t.elGrid,a=t.clientX,s=t.clientY,r=this.w,n=r.globals.gridWidth,o=n/(r.globals.dataPoints-1),l=i.getBoundingClientRect(),h=this.hasBars();!r.globals.comboCharts&&!h||r.config.xaxis.convertedCatToNumeric||(o=n/r.globals.dataPoints);var c=a-l.left-r.globals.barPadForNumericAxis,d=s-l.top;c<0||d<0||c>r.globals.gridWidth||d>r.globals.gridHeight?(e.classList.remove("hovering-zoom"),e.classList.remove("hovering-pan")):r.globals.zoomEnabled?(e.classList.remove("hovering-pan"),e.classList.add("hovering-zoom")):r.globals.panEnabled&&(e.classList.remove("hovering-zoom"),e.classList.add("hovering-pan"));var g=Math.round(c/o);h&&!r.config.xaxis.convertedCatToNumeric&&(g=Math.ceil(c/o),g-=1);for(var u,p=null,x=null,b=[],m=0;m<r.globals.seriesXvalues.length;m++)b.push([r.globals.seriesXvalues[m][0]-1e-6].concat(r.globals.seriesXvalues[m]));return b=b.map((function(t){return t.filter((function(t){return t}))})),u=r.globals.seriesYvalues.map((function(t){return t.filter((function(t){return f.isNumber(t)}))})),r.globals.isXNumeric&&(p=(x=this.closestInMultiArray(c,d,b,u)).index,g=x.j,null!==p&&(b=r.globals.seriesXvalues[p],g=(x=this.closestInArray(c,b)).index)),r.globals.capturedSeriesIndex=null===p?-1:p,(!g||g<1)&&(g=0),r.globals.capturedDataPointIndex=g,{capturedSeries:p,j:g,hoverX:c,hoverY:d}}},{key:"closestInMultiArray",value:function(t,e,i,a){var s=this.w,r=0,n=null,o=-1;s.globals.series.length>1?r=this.getFirstActiveXArray(i):n=0;var l=a[r][0],h=i[r][0],c=Math.abs(t-h),d=Math.abs(e-l),g=d+c;return a.map((function(s,r){s.map((function(s,l){var h=Math.abs(e-a[r][l]),u=Math.abs(t-i[r][l]),f=u+h;f<g&&(g=f,c=u,d=h,n=r,o=l)}))})),{index:n,j:o}}},{key:"getFirstActiveXArray",value:function(t){for(var e=0,i=t.map((function(t,e){return t.length>0?e:-1})),a=0;a<i.length;a++)if(-1!==i[a]){e=i[a];break}return e}},{key:"closestInArray",value:function(t,e){for(var i=e[0],a=null,s=Math.abs(t-i),r=0;r<e.length;r++){var n=Math.abs(t-e[r]);n<s&&(s=n,a=r)}return{index:a}}},{key:"isXoverlap",value:function(t){var e=[],i=this.w.globals.seriesX.filter((function(t){return void 0!==t[0]}));if(i.length>0)for(var a=0;a<i.length-1;a++)void 0!==i[a][t]&&void 0!==i[a+1][t]&&i[a][t]!==i[a+1][t]&&e.push("unEqual");return 0===e.length}},{key:"isInitialSeriesSameLen",value:function(){for(var t=!0,e=this.w.globals.initialSeries,i=0;i<e.length-1;i++)if(e[i].data.length!==e[i+1].data.length){t=!1;break}return t}},{key:"getBarsHeight",value:function(t){return g(t).reduce((function(t,e){return t+e.getBBox().height}),0)}},{key:"getElMarkers",value:function(){return this.w.globals.dom.baseEl.querySelectorAll(" .apexcharts-series-markers")}},{key:"getAllMarkers",value:function(){var t=this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers-wrap");(t=g(t)).sort((function(t,e){return Number(e.getAttribute("data:realIndex"))<Number(t.getAttribute("data:realIndex"))?0:-1}));var e=[];return t.forEach((function(t){e.push(t.querySelector(".apexcharts-marker"))})),e}},{key:"hasMarkers",value:function(){return this.getElMarkers().length>0}},{key:"getElBars",value:function(){return this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-bar-series,  .apexcharts-candlestick-series, .apexcharts-rangebar-series")}},{key:"hasBars",value:function(){return this.getElBars().length>0}},{key:"getHoverMarkerSize",value:function(t){var e=this.w,i=e.config.markers.hover.size;return void 0===i&&(i=e.globals.markers.size[t]+e.config.markers.hover.sizeOffset),i}},{key:"toggleAllTooltipSeriesGroups",value:function(t){var e=this.w,i=this.ttCtx;0===i.allTooltipSeriesGroups.length&&(i.allTooltipSeriesGroups=e.globals.dom.baseEl.querySelectorAll(".apexcharts-tooltip-series-group"));for(var a=i.allTooltipSeriesGroups,s=0;s<a.length;s++)"enable"===t?(a[s].classList.add("apexcharts-active"),a[s].style.display=e.config.tooltip.items.display):(a[s].classList.remove("apexcharts-active"),a[s].style.display="none")}}]),t}(),gt=function(){function t(i){e(this,t),this.w=i.w,this.ctx=i.ctx,this.ttCtx=i,this.tooltipUtil=new dt(i)}return a(t,[{key:"drawSeriesTexts",value:function(t){var e=t.shared,i=void 0===e||e,a=t.ttItems,s=t.i,r=void 0===s?0:s,n=t.j,o=void 0===n?null:n,l=t.y1,h=t.y2,c=t.e,d=this.w;void 0!==d.config.tooltip.custom?this.handleCustomTooltip({i:r,j:o,y1:l,y2:h,w:d}):this.toggleActiveInactiveSeries(i);var g=this.getValuesToPrint({i:r,j:o});this.printLabels({i:r,j:o,values:g,ttItems:a,shared:i,e:c});var u=this.ttCtx.getElTooltip();this.ttCtx.tooltipRect.ttWidth=u.getBoundingClientRect().width,this.ttCtx.tooltipRect.ttHeight=u.getBoundingClientRect().height}},{key:"printLabels",value:function(t){var e,i=this,a=t.i,s=t.j,r=t.values,o=t.ttItems,l=t.shared,h=t.e,c=this.w,d=r.xVal,g=r.zVal,u=r.xAxisTTVal,f="",p=c.globals.colors[a];null!==s&&c.config.plotOptions.bar.distributed&&(p=c.globals.colors[s]);for(var x=function(t,r){var x=i.getFormatters(a);f=i.getSeriesName({fn:x.yLbTitleFormatter,index:a,seriesIndex:a,j:s}),"treemap"===c.config.chart.type&&(f=x.yLbTitleFormatter(String(c.config.series[a].data[s].x),{series:c.globals.series,seriesIndex:a,dataPointIndex:s,w:c}));var b=c.config.tooltip.inverseOrder?r:t;if(c.globals.axisCharts){var m=function(t){return x.yLbFormatter(c.globals.series[t][s],{series:c.globals.series,seriesIndex:t,dataPointIndex:s,w:c})};l?(x=i.getFormatters(b),f=i.getSeriesName({fn:x.yLbTitleFormatter,index:b,seriesIndex:a,j:s}),p=c.globals.colors[b],e=m(b)):(h&&h.target&&h.target.getAttribute("fill")&&(p=h.target.getAttribute("fill")),e=m(a))}null===s&&(e=x.yLbFormatter(c.globals.series[a],n(n({},c),{},{seriesIndex:a,dataPointIndex:a}))),i.DOMHandling({i:a,t:b,j:s,ttItems:o,values:{val:e,xVal:d,xAxisTTVal:u,zVal:g},seriesName:f,shared:l,pColor:p})},b=0,m=c.globals.series.length-1;b<c.globals.series.length;b++,m--)x(b,m)}},{key:"getFormatters",value:function(t){var e,i=this.w,a=i.globals.yLabelFormatters[t];return void 0!==i.globals.ttVal?Array.isArray(i.globals.ttVal)?(a=i.globals.ttVal[t]&&i.globals.ttVal[t].formatter,e=i.globals.ttVal[t]&&i.globals.ttVal[t].title&&i.globals.ttVal[t].title.formatter):(a=i.globals.ttVal.formatter,"function"==typeof i.globals.ttVal.title.formatter&&(e=i.globals.ttVal.title.formatter)):e=i.config.tooltip.y.title.formatter,"function"!=typeof a&&(a=i.globals.yLabelFormatters[0]?i.globals.yLabelFormatters[0]:function(t){return t}),"function"!=typeof e&&(e=function(t){return t}),{yLbFormatter:a,yLbTitleFormatter:e}}},{key:"getSeriesName",value:function(t){var e=t.fn,i=t.index,a=t.seriesIndex,s=t.j,r=this.w;return e(String(r.globals.seriesNames[i]),{series:r.globals.series,seriesIndex:a,dataPointIndex:s,w:r})}},{key:"DOMHandling",value:function(t){t.i;var e=t.t,i=(t.j,t.ttItems),a=t.values,s=t.seriesName,r=t.shared,n=t.pColor,o=this.w,l=this.ttCtx,h=a.val,c=a.xVal,d=a.xAxisTTVal,g=a.zVal,u=null;u=i[e].children,o.config.tooltip.fillSeriesColor&&(i[e].style.backgroundColor=n,u[0].style.display="none"),l.showTooltipTitle&&(null===l.tooltipTitle&&(l.tooltipTitle=o.globals.dom.baseEl.querySelector(".apexcharts-tooltip-title")),l.tooltipTitle.innerHTML=c),l.blxaxisTooltip&&(l.xaxisTooltipText.innerHTML=""!==d?d:c);var f=i[e].querySelector(".apexcharts-tooltip-text-label");f&&(f.innerHTML=s||"");var p=i[e].querySelector(".apexcharts-tooltip-text-value");(p&&(p.innerHTML=void 0!==h?h:""),u[0]&&u[0].classList.contains("apexcharts-tooltip-marker")&&(o.config.tooltip.marker.fillColors&&Array.isArray(o.config.tooltip.marker.fillColors)&&(n=o.config.tooltip.marker.fillColors[e]),u[0].style.backgroundColor=n),o.config.tooltip.marker.show||(u[0].style.display="none"),null!==g)&&(i[e].querySelector(".apexcharts-tooltip-text-z-label").innerHTML=o.config.tooltip.z.title,i[e].querySelector(".apexcharts-tooltip-text-z-value").innerHTML=void 0!==g?g:"");r&&u[0]&&(null==h||o.globals.collapsedSeriesIndices.indexOf(e)>-1?u[0].parentNode.style.display="none":u[0].parentNode.style.display=o.config.tooltip.items.display)}},{key:"toggleActiveInactiveSeries",value:function(t){var e=this.w;if(t)this.tooltipUtil.toggleAllTooltipSeriesGroups("enable");else{this.tooltipUtil.toggleAllTooltipSeriesGroups("disable");var i=e.globals.dom.baseEl.querySelector(".apexcharts-tooltip-series-group");i&&(i.classList.add("apexcharts-active"),i.style.display=e.config.tooltip.items.display)}}},{key:"getValuesToPrint",value:function(t){var e=t.i,i=t.j,a=this.w,s=this.ctx.series.filteredSeriesX(),r="",n="",o=null,l=null,h={series:a.globals.series,seriesIndex:e,dataPointIndex:i,w:a},c=a.globals.ttZFormatter;null===i?l=a.globals.series[e]:a.globals.isXNumeric&&"treemap"!==a.config.chart.type?(r=s[e][i],0===s[e].length&&(r=s[this.tooltipUtil.getFirstActiveXArray(s)][i])):r=void 0!==a.globals.labels[i]?a.globals.labels[i]:"";var d=r;a.globals.isXNumeric&&"datetime"===a.config.xaxis.type?r=new W(this.ctx).xLabelFormat(a.globals.ttKeyFormatter,d,d,{i:void 0,dateFormatter:new Y(this.ctx).formatDate,w:this.w}):r=a.globals.isBarHorizontal?a.globals.yLabelFormatters[0](d,h):a.globals.xLabelFormatter(d,h);return void 0!==a.config.tooltip.x.formatter&&(r=a.globals.ttKeyFormatter(d,h)),a.globals.seriesZ.length>0&&a.globals.seriesZ[e].length>0&&(o=c(a.globals.seriesZ[e][i],a)),n="function"==typeof a.config.xaxis.tooltip.formatter?a.globals.xaxisTooltipFormatter(d,h):r,{val:Array.isArray(l)?l.join(" "):l,xVal:Array.isArray(r)?r.join(" "):r,xAxisTTVal:Array.isArray(n)?n.join(" "):n,zVal:o}}},{key:"handleCustomTooltip",value:function(t){var e=t.i,i=t.j,a=t.y1,s=t.y2,r=t.w,n=this.ttCtx.getElTooltip(),o=r.config.tooltip.custom;Array.isArray(o)&&o[e]&&(o=o[e]),n.innerHTML=o({ctx:this.ctx,series:r.globals.series,seriesIndex:e,dataPointIndex:i,y1:a,y2:s,w:r})}}]),t}(),ut=function(){function t(i){e(this,t),this.ttCtx=i,this.ctx=i.ctx,this.w=i.w}return a(t,[{key:"moveXCrosshairs",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=this.ttCtx,a=this.w,s=i.getElXCrosshairs(),r=t-i.xcrosshairsWidth/2,n=a.globals.labels.slice().length;if(null!==e&&(r=a.globals.gridWidth/n*e),null!==s&&(s.setAttribute("x",r),s.setAttribute("x1",r),s.setAttribute("x2",r),s.setAttribute("y2",a.globals.gridHeight),s.classList.add("apexcharts-active")),r<0&&(r=0),r>a.globals.gridWidth&&(r=a.globals.gridWidth),i.blxaxisTooltip){var o=r;"tickWidth"!==a.config.xaxis.crosshairs.width&&"barWidth"!==a.config.xaxis.crosshairs.width||(o=r+i.xcrosshairsWidth/2),this.moveXAxisTooltip(o)}}},{key:"moveYCrosshairs",value:function(t){var e=this.ttCtx;null!==e.ycrosshairs&&b.setAttrs(e.ycrosshairs,{y1:t,y2:t}),null!==e.ycrosshairsHidden&&b.setAttrs(e.ycrosshairsHidden,{y1:t,y2:t})}},{key:"moveXAxisTooltip",value:function(t){var e=this.w,i=this.ttCtx;if(null!==i.xaxisTooltip){i.xaxisTooltip.classList.add("apexcharts-active");var a=i.xaxisOffY+e.config.xaxis.tooltip.offsetY+e.globals.translateY+1+e.config.xaxis.offsetY;if(t-=i.xaxisTooltip.getBoundingClientRect().width/2,!isNaN(t)){t+=e.globals.translateX;var s;s=new b(this.ctx).getTextRects(i.xaxisTooltipText.innerHTML),i.xaxisTooltipText.style.minWidth=s.width+"px",i.xaxisTooltip.style.left=t+"px",i.xaxisTooltip.style.top=a+"px"}}}},{key:"moveYAxisTooltip",value:function(t){var e=this.w,i=this.ttCtx;null===i.yaxisTTEls&&(i.yaxisTTEls=e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));var a=parseInt(i.ycrosshairsHidden.getAttribute("y1"),10),s=e.globals.translateY+a,r=i.yaxisTTEls[t].getBoundingClientRect().height,n=e.globals.translateYAxisX[t]-2;e.config.yaxis[t].opposite&&(n-=26),s-=r/2,-1===e.globals.ignoreYAxisIndexes.indexOf(t)?(i.yaxisTTEls[t].classList.add("apexcharts-active"),i.yaxisTTEls[t].style.top=s+"px",i.yaxisTTEls[t].style.left=n+e.config.yaxis[t].tooltip.offsetX+"px"):i.yaxisTTEls[t].classList.remove("apexcharts-active")}},{key:"moveTooltip",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=this.w,s=this.ttCtx,r=s.getElTooltip(),n=s.tooltipRect,o=null!==i?parseFloat(i):1,l=parseFloat(t)+o+5,h=parseFloat(e)+o/2;if(l>a.globals.gridWidth/2&&(l=l-n.ttWidth-o-15),l>a.globals.gridWidth-n.ttWidth-10&&(l=a.globals.gridWidth-n.ttWidth),l<-20&&(l=-20),a.config.tooltip.followCursor){var c=s.getElGrid(),d=c.getBoundingClientRect();h=s.e.clientY+a.globals.translateY-d.top-n.ttHeight/2}if(!a.config.tooltip.followCursor){var g=this.positionChecks(n,l,h);l=g.x,h=g.y}isNaN(l)||(l+=a.globals.translateX,r.style.left=l+"px",r.style.top=h+"px")}},{key:"positionChecks",value:function(t,e,i){var a=this.w;return t.ttHeight/2+i>a.globals.gridHeight&&(i=a.globals.gridHeight-t.ttHeight+a.globals.translateY),i<0&&(i=0),{x:e,y:i}}},{key:"moveMarkers",value:function(t,e){var i=this.w,a=this.ttCtx;if(i.globals.markers.size[t]>0)for(var s=i.globals.dom.baseEl.querySelectorAll(" .apexcharts-series[data\\:realIndex='".concat(t,"'] .apexcharts-marker")),r=0;r<s.length;r++)parseInt(s[r].getAttribute("rel"),10)===e&&(a.marker.resetPointsSize(),a.marker.enlargeCurrentPoint(e,s[r]));else a.marker.resetPointsSize(),this.moveDynamicPointOnHover(e,t)}},{key:"moveDynamicPointOnHover",value:function(t,e){var i,a,s=this.w,r=this.ttCtx,n=s.globals.pointsArray,o=r.tooltipUtil.getHoverMarkerSize(e),l=s.config.series[e].type;if(!l||"column"!==l&&"candlestick"!==l){i=n[e][t][0],a=n[e][t][1]?n[e][t][1]:0;var h=s.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(e,"'] .apexcharts-series-markers circle"));h&&a<s.globals.gridHeight&&a>0&&(h.setAttribute("r",o),h.setAttribute("cx",i),h.setAttribute("cy",a)),this.moveXCrosshairs(i),r.fixedTooltip||this.moveTooltip(i,a,o)}}},{key:"moveDynamicPointsOnHover",value:function(t){var e,i=this.ttCtx,a=i.w,s=0,r=0,n=a.globals.pointsArray;e=new M(this.ctx).getActiveConfigSeriesIndex(!0);var o=i.tooltipUtil.getHoverMarkerSize(e);n[e]&&(s=n[e][t][0],r=n[e][t][1]);var l=i.tooltipUtil.getAllMarkers();if(null!==l)for(var h=0;h<a.globals.series.length;h++){var c=n[h];if(a.globals.comboCharts&&void 0===c&&l.splice(h,0,null),c&&c.length){var d=n[h][t][1];l[h].setAttribute("cx",s),null!==d&&!isNaN(d)&&d<a.globals.gridHeight&&d>0?(l[h]&&l[h].setAttribute("r",o),l[h]&&l[h].setAttribute("cy",d)):l[h]&&l[h].setAttribute("r",0)}}if(this.moveXCrosshairs(s),!i.fixedTooltip){var g=r||a.globals.gridHeight;this.moveTooltip(s,g,o)}}},{key:"moveStickyTooltipOverBars",value:function(t){var e,i=this.w,a=this.ttCtx,s=i.globals.columnSeries?i.globals.columnSeries.length:i.globals.series.length,r=s>=2&&s%2==0?Math.floor(s/2):Math.floor(s/2)+1,n=i.globals.dom.baseEl.querySelector(".apexcharts-bar-series .apexcharts-series[rel='".concat(r,"'] path[j='").concat(t,"'], .apexcharts-candlestick-series .apexcharts-series[rel='").concat(r,"'] path[j='").concat(t,"'], .apexcharts-rangebar-series .apexcharts-series[rel='").concat(r,"'] path[j='").concat(t,"']")),o=n?parseFloat(n.getAttribute("cx")):0,l=n?parseFloat(n.getAttribute("barWidth")):0;i.globals.isXNumeric?o-=s%2!=0?l/2:0:(o=a.xAxisTicksPositions[t-1]+a.dataPointsDividedWidth/2,isNaN(o)&&(o=a.xAxisTicksPositions[t]-a.dataPointsDividedWidth/2));var h=a.getElGrid().getBoundingClientRect();if(e=a.e.clientY-h.top-a.tooltipRect.ttHeight/2,this.moveXCrosshairs(o),!a.fixedTooltip){var c=e||i.globals.gridHeight;this.moveTooltip(o,c)}}}]),t}(),ft=function(){function t(i){e(this,t),this.w=i.w,this.ttCtx=i,this.ctx=i.ctx,this.tooltipPosition=new ut(i)}return a(t,[{key:"drawDynamicPoints",value:function(){var t=this.w,e=new b(this.ctx),i=new P(this.ctx),a=t.globals.dom.baseEl.querySelectorAll(".apexcharts-series");a=g(a),t.config.chart.stacked&&a.sort((function(t,e){return parseFloat(t.getAttribute("data:realIndex"))-parseFloat(e.getAttribute("data:realIndex"))}));for(var s=0;s<a.length;s++){var r=a[s].querySelector(".apexcharts-series-markers-wrap");if(null!==r){var n=void 0,o="apexcharts-marker w".concat((Math.random()+1).toString(36).substring(4));"line"!==t.config.chart.type&&"area"!==t.config.chart.type||t.globals.comboCharts||t.config.tooltip.intersect||(o+=" no-pointer-events");var l=i.getMarkerConfig(o,s);(n=e.drawMarker(0,0,l)).node.setAttribute("default-marker-size",0);var h=document.createElementNS(t.globals.SVGNS,"g");h.classList.add("apexcharts-series-markers"),h.appendChild(n.node),r.appendChild(h)}}}},{key:"enlargeCurrentPoint",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,s=this.w;"bubble"!==s.config.chart.type&&this.newPointSize(t,e);var r=e.getAttribute("cx"),n=e.getAttribute("cy");if(null!==i&&null!==a&&(r=i,n=a),this.tooltipPosition.moveXCrosshairs(r),!this.fixedTooltip){if("radar"===s.config.chart.type){var o=this.ttCtx.getElGrid(),l=o.getBoundingClientRect();r=this.ttCtx.e.clientX-l.left}this.tooltipPosition.moveTooltip(r,n,s.config.markers.hover.size)}}},{key:"enlargePoints",value:function(t){for(var e=this.w,i=this,a=this.ttCtx,s=t,r=e.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"),n=e.config.markers.hover.size,o=0;o<r.length;o++){var l=r[o].getAttribute("rel"),h=r[o].getAttribute("index");if(void 0===n&&(n=e.globals.markers.size[h]+e.config.markers.hover.sizeOffset),s===parseInt(l,10)){i.newPointSize(s,r[o]);var c=r[o].getAttribute("cx"),d=r[o].getAttribute("cy");i.tooltipPosition.moveXCrosshairs(c),a.fixedTooltip||i.tooltipPosition.moveTooltip(c,d,n)}else i.oldPointSize(r[o])}}},{key:"newPointSize",value:function(t,e){var i=this.w,a=i.config.markers.hover.size,s=0===t?e.parentNode.firstChild:e.parentNode.lastChild;if("0"!==s.getAttribute("default-marker-size")){var r=parseInt(s.getAttribute("index"),10);void 0===a&&(a=i.globals.markers.size[r]+i.config.markers.hover.sizeOffset),s.setAttribute("r",a)}}},{key:"oldPointSize",value:function(t){var e=parseFloat(t.getAttribute("default-marker-size"));t.setAttribute("r",e)}},{key:"resetPointsSize",value:function(){for(var t=this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"),e=0;e<t.length;e++){var i=parseFloat(t[e].getAttribute("default-marker-size"));f.isNumber(i)?t[e].setAttribute("r",i):t[e].setAttribute("r",0)}}}]),t}(),pt=function(){function t(i){e(this,t),this.w=i.w,this.ttCtx=i}return a(t,[{key:"getAttr",value:function(t,e){return parseFloat(t.target.getAttribute(e))}},{key:"handleHeatTreeTooltip",value:function(t){var e=t.e,i=t.opt,a=t.x,s=t.y,r=t.type,n=this.ttCtx,o=this.w;if(e.target.classList.contains("apexcharts-".concat(r,"-rect"))){var l=this.getAttr(e,"i"),h=this.getAttr(e,"j"),c=this.getAttr(e,"cx"),d=this.getAttr(e,"cy"),g=this.getAttr(e,"width"),u=this.getAttr(e,"height");if(n.tooltipLabels.drawSeriesTexts({ttItems:i.ttItems,i:l,j:h,shared:!1,e:e}),o.globals.capturedSeriesIndex=l,o.globals.capturedDataPointIndex=h,a=c+n.tooltipRect.ttWidth/2+g,s=d+n.tooltipRect.ttHeight/2-u/2,n.tooltipPosition.moveXCrosshairs(c+g/2),a>o.globals.gridWidth/2&&(a=c-n.tooltipRect.ttWidth/2+g),n.w.config.tooltip.followCursor){var f=n.getElGrid().getBoundingClientRect();(a=n.e.clientX-f.left+10)>o.globals.gridWidth/2&&(a=a-n.tooltipRect.ttWidth-10),s=n.e.clientY-f.top+o.globals.translateY/2-10}}return{x:a,y:s}}},{key:"handleMarkerTooltip",value:function(t){var e,i,a=t.e,s=t.opt,r=t.x,n=t.y,o=this.w,l=this.ttCtx;if(a.target.classList.contains("apexcharts-marker")){var h=parseInt(s.paths.getAttribute("cx"),10),c=parseInt(s.paths.getAttribute("cy"),10),d=parseFloat(s.paths.getAttribute("val"));if(i=parseInt(s.paths.getAttribute("rel"),10),e=parseInt(s.paths.parentNode.parentNode.parentNode.getAttribute("rel"),10)-1,l.intersect){var g=f.findAncestor(s.paths,"apexcharts-series");g&&(e=parseInt(g.getAttribute("data:realIndex"),10))}if(l.tooltipLabels.drawSeriesTexts({ttItems:s.ttItems,i:e,j:i,shared:!l.showOnIntersect&&o.config.tooltip.shared,e:a}),"mouseup"===a.type&&l.markerClick(a,e,i),o.globals.capturedSeriesIndex=e,o.globals.capturedDataPointIndex=i,r=h,n=c+o.globals.translateY-1.4*l.tooltipRect.ttHeight,l.w.config.tooltip.followCursor){var u=l.getElGrid().getBoundingClientRect();n=l.e.clientY+o.globals.translateY-u.top}d<0&&(n=c),l.marker.enlargeCurrentPoint(i,s.paths,r,n)}return{x:r,y:n}}},{key:"handleBarTooltip",value:function(t){var e,i,a=t.e,s=t.opt,r=this.w,n=this.ttCtx,o=n.getElTooltip(),l=0,h=0,c=0,d=this.getBarTooltipXY({e:a,opt:s});e=d.i;var g=d.barHeight,u=d.j;if(r.globals.capturedSeriesIndex=e,r.globals.capturedDataPointIndex=u,r.globals.isBarHorizontal&&n.tooltipUtil.hasBars()||!r.config.tooltip.shared?(h=d.x,c=d.y,i=Array.isArray(r.config.stroke.width)?r.config.stroke.width[e]:r.config.stroke.width,l=h):r.globals.comboCharts||r.config.tooltip.shared||(l/=2),isNaN(c)?c=r.globals.svgHeight-n.tooltipRect.ttHeight:c<0&&(c=0),h+n.tooltipRect.ttWidth>r.globals.gridWidth?h-=n.tooltipRect.ttWidth:h<0&&(h=0),n.w.config.tooltip.followCursor){var f=n.getElGrid().getBoundingClientRect();c=n.e.clientY-f.top}if(null===n.tooltip&&(n.tooltip=r.globals.dom.baseEl.querySelector(".apexcharts-tooltip")),r.config.tooltip.shared||(r.globals.comboBarCount>0?n.tooltipPosition.moveXCrosshairs(l+i/2):n.tooltipPosition.moveXCrosshairs(l)),!n.fixedTooltip&&(!r.config.tooltip.shared||r.globals.isBarHorizontal&&n.tooltipUtil.hasBars())){var p=r.globals.isMultipleYAxis?r.config.yaxis[x]&&r.config.yaxis[x].reversed:r.config.yaxis[0].reversed;p&&(h-=n.tooltipRect.ttWidth)<0&&(h=0),o.style.left=h+r.globals.translateX+"px";var x=parseInt(s.paths.parentNode.getAttribute("data:realIndex"),10);!p||r.globals.isBarHorizontal&&n.tooltipUtil.hasBars()||(c=c+g-2*(r.globals.series[e][u]<0?g:0)),n.tooltipRect.ttHeight+c>r.globals.gridHeight?(c=r.globals.gridHeight-n.tooltipRect.ttHeight+r.globals.translateY,o.style.top=c+"px"):o.style.top=c+r.globals.translateY-n.tooltipRect.ttHeight/2+"px"}}},{key:"getBarTooltipXY",value:function(t){var e=t.e,i=t.opt,a=this.w,s=null,r=this.ttCtx,n=0,o=0,l=0,h=0,c=0,d=e.target.classList;if(d.contains("apexcharts-bar-area")||d.contains("apexcharts-candlestick-area")||d.contains("apexcharts-rangebar-area")){var g=e.target,u=g.getBoundingClientRect(),f=i.elGrid.getBoundingClientRect(),p=u.height;c=u.height;var x=u.width,b=parseInt(g.getAttribute("cx"),10),m=parseInt(g.getAttribute("cy"),10);h=parseFloat(g.getAttribute("barWidth"));var v="touchmove"===e.type?e.touches[0].clientX:e.clientX;s=parseInt(g.getAttribute("j"),10),n=parseInt(g.parentNode.getAttribute("rel"),10)-1;var y=g.getAttribute("data-range-y1"),w=g.getAttribute("data-range-y2");a.globals.comboCharts&&(n=parseInt(g.parentNode.getAttribute("data:realIndex"),10)),r.tooltipLabels.drawSeriesTexts({ttItems:i.ttItems,i:n,j:s,y1:y?parseInt(y,10):null,y2:w?parseInt(w,10):null,shared:!r.showOnIntersect&&a.config.tooltip.shared,e:e}),a.config.tooltip.followCursor?a.globals.isBarHorizontal?(o=v-f.left+15,l=m-r.dataPointsDividedHeight+p/2-r.tooltipRect.ttHeight/2):(o=a.globals.isXNumeric?b-x/2:b-r.dataPointsDividedWidth+x/2,l=e.clientY-f.top-r.tooltipRect.ttHeight/2-15):a.globals.isBarHorizontal?((o=b)<r.xyRatios.baseLineInvertedY&&(o=b-r.tooltipRect.ttWidth),l=m-r.dataPointsDividedHeight+p/2-r.tooltipRect.ttHeight/2):(o=a.globals.isXNumeric?b-x/2:b-r.dataPointsDividedWidth+x/2,l=m)}return{x:o,y:l,barHeight:c,barWidth:h,i:n,j:s}}}]),t}(),xt=function(){function t(i){e(this,t),this.w=i.w,this.ttCtx=i}return a(t,[{key:"drawXaxisTooltip",value:function(){var t=this.w,e=this.ttCtx,i="bottom"===t.config.xaxis.position;e.xaxisOffY=i?t.globals.gridHeight+1:-t.globals.xAxisHeight-t.config.xaxis.axisTicks.height+3;var a=i?"apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom":"apexcharts-xaxistooltip apexcharts-xaxistooltip-top",s=t.globals.dom.elWrap;e.blxaxisTooltip&&(null===t.globals.dom.baseEl.querySelector(".apexcharts-xaxistooltip")&&(e.xaxisTooltip=document.createElement("div"),e.xaxisTooltip.setAttribute("class",a+" apexcharts-theme-"+t.config.tooltip.theme),s.appendChild(e.xaxisTooltip),e.xaxisTooltipText=document.createElement("div"),e.xaxisTooltipText.classList.add("apexcharts-xaxistooltip-text"),e.xaxisTooltipText.style.fontFamily=t.config.xaxis.tooltip.style.fontFamily||t.config.chart.fontFamily,e.xaxisTooltipText.style.fontSize=t.config.xaxis.tooltip.style.fontSize,e.xaxisTooltip.appendChild(e.xaxisTooltipText)))}},{key:"drawYaxisTooltip",value:function(){for(var t=this.w,e=this.ttCtx,i=function(i){var a=t.config.yaxis[i].opposite||t.config.yaxis[i].crosshairs.opposite;e.yaxisOffX=a?t.globals.gridWidth+1:1;var s="apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(i,a?" apexcharts-yaxistooltip-right":" apexcharts-yaxistooltip-left");t.globals.yAxisSameScaleIndices.map((function(e,a){e.map((function(e,a){a===i&&(s+=t.config.yaxis[a].show?" ":" apexcharts-yaxistooltip-hidden")}))}));var r=t.globals.dom.elWrap;null===t.globals.dom.baseEl.querySelector(".apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(i))&&(e.yaxisTooltip=document.createElement("div"),e.yaxisTooltip.setAttribute("class",s+" apexcharts-theme-"+t.config.tooltip.theme),r.appendChild(e.yaxisTooltip),0===i&&(e.yaxisTooltipText=[]),e.yaxisTooltipText[i]=document.createElement("div"),e.yaxisTooltipText[i].classList.add("apexcharts-yaxistooltip-text"),e.yaxisTooltip.appendChild(e.yaxisTooltipText[i]))},a=0;a<t.config.yaxis.length;a++)i(a)}},{key:"setXCrosshairWidth",value:function(){var t=this.w,e=this.ttCtx,i=e.getElXCrosshairs();if(e.xcrosshairsWidth=parseInt(t.config.xaxis.crosshairs.width,10),t.globals.comboCharts){var a=t.globals.dom.baseEl.querySelector(".apexcharts-bar-area");if(null!==a&&"barWidth"===t.config.xaxis.crosshairs.width){var s=parseFloat(a.getAttribute("barWidth"));e.xcrosshairsWidth=s}else if("tickWidth"===t.config.xaxis.crosshairs.width){var r=t.globals.labels.length;e.xcrosshairsWidth=t.globals.gridWidth/r}}else if("tickWidth"===t.config.xaxis.crosshairs.width){var n=t.globals.labels.length;e.xcrosshairsWidth=t.globals.gridWidth/n}else if("barWidth"===t.config.xaxis.crosshairs.width){var o=t.globals.dom.baseEl.querySelector(".apexcharts-bar-area");if(null!==o){var l=parseFloat(o.getAttribute("barWidth"));e.xcrosshairsWidth=l}else e.xcrosshairsWidth=1}t.globals.isBarHorizontal&&(e.xcrosshairsWidth=0),null!==i&&e.xcrosshairsWidth>0&&i.setAttribute("width",e.xcrosshairsWidth)}},{key:"handleYCrosshair",value:function(){var t=this.w,e=this.ttCtx;e.ycrosshairs=t.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs"),e.ycrosshairsHidden=t.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs-hidden")}},{key:"drawYaxisTooltipText",value:function(t,e,i){var a=this.ttCtx,s=this.w,r=s.globals.yLabelFormatters[t];if(a.yaxisTooltips[t]){var n=a.getElGrid().getBoundingClientRect(),o=(e-n.top)*i.yRatio[t],l=s.globals.maxYArr[t]-s.globals.minYArr[t],h=s.globals.minYArr[t]+(l-o);a.tooltipPosition.moveYCrosshairs(e-n.top),a.yaxisTooltipText[t].innerHTML=r(h),a.tooltipPosition.moveYAxisTooltip(t)}}}]),t}(),bt=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w;var a=this.w;this.tConfig=a.config.tooltip,this.tooltipUtil=new dt(this),this.tooltipLabels=new gt(this),this.tooltipPosition=new ut(this),this.marker=new ft(this),this.intersect=new pt(this),this.axesTooltip=new xt(this),this.showOnIntersect=this.tConfig.intersect,this.showTooltipTitle=this.tConfig.x.show,this.fixedTooltip=this.tConfig.fixed.enabled,this.xaxisTooltip=null,this.yaxisTTEls=null,this.isBarShared=!a.globals.isBarHorizontal&&this.tConfig.shared}return a(t,[{key:"getElTooltip",value:function(t){return t||(t=this),t.w.globals.dom.baseEl.querySelector(".apexcharts-tooltip")}},{key:"getElXCrosshairs",value:function(){return this.w.globals.dom.baseEl.querySelector(".apexcharts-xcrosshairs")}},{key:"getElGrid",value:function(){return this.w.globals.dom.baseEl.querySelector(".apexcharts-grid")}},{key:"drawTooltip",value:function(t){var e=this.w;this.xyRatios=t,this.blxaxisTooltip=e.config.xaxis.tooltip.enabled&&e.globals.axisCharts,this.yaxisTooltips=e.config.yaxis.map((function(t,i){return!!(t.show&&t.tooltip.enabled&&e.globals.axisCharts)})),this.allTooltipSeriesGroups=[],e.globals.axisCharts||(this.showTooltipTitle=!1);var i=document.createElement("div");if(i.classList.add("apexcharts-tooltip"),i.classList.add("apexcharts-theme-".concat(this.tConfig.theme)),e.globals.dom.elWrap.appendChild(i),e.globals.axisCharts){this.axesTooltip.drawXaxisTooltip(),this.axesTooltip.drawYaxisTooltip(),this.axesTooltip.setXCrosshairWidth(),this.axesTooltip.handleYCrosshair();var a=new G(this.ctx);this.xAxisTicksPositions=a.getXAxisTicksPositions()}if(!e.globals.comboCharts&&!this.tConfig.intersect&&"bar"!==e.config.chart.type&&"rangeBar"!==e.config.chart.type||this.tConfig.shared||(this.showOnIntersect=!0),0!==e.config.markers.size&&0!==e.globals.markers.largestSize||this.marker.drawDynamicPoints(this),e.globals.collapsedSeries.length!==e.globals.series.length){this.dataPointsDividedHeight=e.globals.gridHeight/e.globals.dataPoints,this.dataPointsDividedWidth=e.globals.gridWidth/e.globals.dataPoints,this.showTooltipTitle&&(this.tooltipTitle=document.createElement("div"),this.tooltipTitle.classList.add("apexcharts-tooltip-title"),this.tooltipTitle.style.fontFamily=this.tConfig.style.fontFamily||e.config.chart.fontFamily,this.tooltipTitle.style.fontSize=this.tConfig.style.fontSize,i.appendChild(this.tooltipTitle));var s=e.globals.series.length;(e.globals.xyCharts||e.globals.comboCharts)&&this.tConfig.shared&&(s=this.showOnIntersect?1:e.globals.series.length),this.legendLabels=e.globals.dom.baseEl.querySelectorAll(".apexcharts-legend-text"),this.ttItems=this.createTTElements(s),this.addSVGEvents()}}},{key:"createTTElements",value:function(t){for(var e=this.w,i=[],a=this.getElTooltip(),s=0;s<t;s++){var r=document.createElement("div");r.classList.add("apexcharts-tooltip-series-group"),r.style.order=e.config.tooltip.inverseOrder?t-s:s+1,this.tConfig.shared&&this.tConfig.enabledOnSeries&&Array.isArray(this.tConfig.enabledOnSeries)&&this.tConfig.enabledOnSeries.indexOf(s)<0&&r.classList.add("apexcharts-tooltip-series-group-hidden");var n=document.createElement("span");n.classList.add("apexcharts-tooltip-marker"),n.style.backgroundColor=e.globals.colors[s],r.appendChild(n);var o=document.createElement("div");o.classList.add("apexcharts-tooltip-text"),o.style.fontFamily=this.tConfig.style.fontFamily||e.config.chart.fontFamily,o.style.fontSize=this.tConfig.style.fontSize;var l=document.createElement("div");l.classList.add("apexcharts-tooltip-y-group");var h=document.createElement("span");h.classList.add("apexcharts-tooltip-text-label"),l.appendChild(h);var c=document.createElement("span");c.classList.add("apexcharts-tooltip-text-value"),l.appendChild(c);var d=document.createElement("div");d.classList.add("apexcharts-tooltip-z-group");var g=document.createElement("span");g.classList.add("apexcharts-tooltip-text-z-label"),d.appendChild(g);var u=document.createElement("span");u.classList.add("apexcharts-tooltip-text-z-value"),d.appendChild(u),o.appendChild(l),o.appendChild(d),r.appendChild(o),a.appendChild(r),i.push(r)}return i}},{key:"addSVGEvents",value:function(){var t=this.w,e=t.config.chart.type,i=this.getElTooltip(),a=!("bar"!==e&&"candlestick"!==e&&"rangeBar"!==e),s="area"===e||"line"===e||"scatter"===e||"bubble"===e||"radar"===e,r=t.globals.dom.Paper.node,n=this.getElGrid();n&&(this.seriesBound=n.getBoundingClientRect());var o,l=[],h=[],c={hoverArea:r,elGrid:n,tooltipEl:i,tooltipY:l,tooltipX:h,ttItems:this.ttItems};if(t.globals.axisCharts&&(s?o=t.globals.dom.baseEl.querySelectorAll(".apexcharts-series[data\\:longestSeries='true'] .apexcharts-marker"):a?o=t.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-bar-area, .apexcharts-series .apexcharts-candlestick-area, .apexcharts-series .apexcharts-rangebar-area"):"heatmap"!==e&&"treemap"!==e||(o=t.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-heatmap, .apexcharts-series .apexcharts-treemap")),o&&o.length))for(var d=0;d<o.length;d++)l.push(o[d].getAttribute("cy")),h.push(o[d].getAttribute("cx"));if(t.globals.xyCharts&&!this.showOnIntersect||t.globals.comboCharts&&!this.showOnIntersect||a&&this.tooltipUtil.hasBars()&&this.tConfig.shared)this.addPathsEventListeners([r],c);else if(a&&!t.globals.comboCharts||s&&this.showOnIntersect)this.addDatapointEventsListeners(c);else if(!t.globals.axisCharts||"heatmap"===e||"treemap"===e){var g=t.globals.dom.baseEl.querySelectorAll(".apexcharts-series");this.addPathsEventListeners(g,c)}if(this.showOnIntersect){var u=t.globals.dom.baseEl.querySelectorAll(".apexcharts-line-series .apexcharts-marker, .apexcharts-area-series .apexcharts-marker");u.length>0&&this.addPathsEventListeners(u,c),this.tooltipUtil.hasBars()&&!this.tConfig.shared&&this.addDatapointEventsListeners(c)}}},{key:"drawFixedTooltipRect",value:function(){var t=this.w,e=this.getElTooltip(),i=e.getBoundingClientRect(),a=i.width+10,s=i.height+10,r=this.tConfig.fixed.offsetX,n=this.tConfig.fixed.offsetY,o=this.tConfig.fixed.position.toLowerCase();return o.indexOf("right")>-1&&(r=r+t.globals.svgWidth-a+10),o.indexOf("bottom")>-1&&(n=n+t.globals.svgHeight-s-10),e.style.left=r+"px",e.style.top=n+"px",{x:r,y:n,ttWidth:a,ttHeight:s}}},{key:"addDatapointEventsListeners",value:function(t){var e=this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers .apexcharts-marker, .apexcharts-bar-area, .apexcharts-candlestick-area, .apexcharts-rangebar-area");this.addPathsEventListeners(e,t)}},{key:"addPathsEventListeners",value:function(t,e){for(var i=this,a=function(a){var s={paths:t[a],tooltipEl:e.tooltipEl,tooltipY:e.tooltipY,tooltipX:e.tooltipX,elGrid:e.elGrid,hoverArea:e.hoverArea,ttItems:e.ttItems};["mousemove","mouseup","touchmove","mouseout","touchend"].map((function(e){return t[a].addEventListener(e,i.seriesHover.bind(i,s),{capture:!1,passive:!0})}))},s=0;s<t.length;s++)a(s)}},{key:"seriesHover",value:function(t,e){var i=this,a=[],s=this.w;s.config.chart.group&&(a=this.ctx.getGroupedCharts()),s.globals.axisCharts&&(s.globals.minX===-1/0&&s.globals.maxX===1/0||0===s.globals.dataPoints)||(a.length?a.forEach((function(a){var s=i.getElTooltip(a),r={paths:t.paths,tooltipEl:s,tooltipY:t.tooltipY,tooltipX:t.tooltipX,elGrid:t.elGrid,hoverArea:t.hoverArea,ttItems:a.w.globals.tooltip.ttItems};a.w.globals.minX===i.w.globals.minX&&a.w.globals.maxX===i.w.globals.maxX&&a.w.globals.tooltip.seriesHoverByContext({chartCtx:a,ttCtx:a.w.globals.tooltip,opt:r,e:e})})):this.seriesHoverByContext({chartCtx:this.ctx,ttCtx:this.w.globals.tooltip,opt:t,e:e}))}},{key:"seriesHoverByContext",value:function(t){var e=t.chartCtx,i=t.ttCtx,a=t.opt,s=t.e,r=e.w,n=this.getElTooltip();(i.tooltipRect={x:0,y:0,ttWidth:n.getBoundingClientRect().width,ttHeight:n.getBoundingClientRect().height},i.e=s,!i.tooltipUtil.hasBars()||r.globals.comboCharts||i.isBarShared)||this.tConfig.onDatasetHover.highlightDataSeries&&new M(e).toggleSeriesOnHover(s,s.target.parentNode);i.fixedTooltip&&i.drawFixedTooltipRect(),r.globals.axisCharts?i.axisChartsTooltips({e:s,opt:a,tooltipRect:i.tooltipRect}):i.nonAxisChartsTooltips({e:s,opt:a,tooltipRect:i.tooltipRect})}},{key:"axisChartsTooltips",value:function(t){var e,i,a=t.e,s=t.opt,r=this.w,n=s.elGrid.getBoundingClientRect(),o="touchmove"===a.type?a.touches[0].clientX:a.clientX,l="touchmove"===a.type?a.touches[0].clientY:a.clientY;if(this.clientY=l,this.clientX=o,r.globals.capturedSeriesIndex=-1,r.globals.capturedDataPointIndex=-1,l<n.top||l>n.top+n.height)this.handleMouseOut(s);else{if(Array.isArray(this.tConfig.enabledOnSeries)&&!r.config.tooltip.shared){var h=parseInt(s.paths.getAttribute("index"),10);if(this.tConfig.enabledOnSeries.indexOf(h)<0)return void this.handleMouseOut(s)}var c=this.getElTooltip(),d=this.getElXCrosshairs(),g=r.globals.xyCharts||"bar"===r.config.chart.type&&!r.globals.isBarHorizontal&&this.tooltipUtil.hasBars()&&this.tConfig.shared||r.globals.comboCharts&&this.tooltipUtil.hasBars();if(r.globals.isBarHorizontal&&this.tooltipUtil.hasBars()&&(g=!1),"mousemove"===a.type||"touchmove"===a.type||"mouseup"===a.type){null!==d&&d.classList.add("apexcharts-active");var u=this.yaxisTooltips.filter((function(t){return!0===t}));if(null!==this.ycrosshairs&&u.length&&this.ycrosshairs.classList.add("apexcharts-active"),g&&!this.showOnIntersect)this.handleStickyTooltip(a,o,l,s);else if("heatmap"===r.config.chart.type||"treemap"===r.config.chart.type){var f=this.intersect.handleHeatTreeTooltip({e:a,opt:s,x:e,y:i,type:r.config.chart.type});e=f.x,i=f.y,c.style.left=e+"px",c.style.top=i+"px"}else this.tooltipUtil.hasBars()&&this.intersect.handleBarTooltip({e:a,opt:s}),this.tooltipUtil.hasMarkers()&&this.intersect.handleMarkerTooltip({e:a,opt:s,x:e,y:i});if(this.yaxisTooltips.length)for(var p=0;p<r.config.yaxis.length;p++)this.axesTooltip.drawYaxisTooltipText(p,l,this.xyRatios);s.tooltipEl.classList.add("apexcharts-active")}else"mouseout"!==a.type&&"touchend"!==a.type||this.handleMouseOut(s)}}},{key:"nonAxisChartsTooltips",value:function(t){var e=t.e,i=t.opt,a=t.tooltipRect,s=this.w,r=i.paths.getAttribute("rel"),n=this.getElTooltip(),o=s.globals.dom.elWrap.getBoundingClientRect();if("mousemove"===e.type||"touchmove"===e.type){n.classList.add("apexcharts-active"),this.tooltipLabels.drawSeriesTexts({ttItems:i.ttItems,i:parseInt(r,10)-1,shared:!1});var l=s.globals.clientX-o.left-a.ttWidth/2,h=s.globals.clientY-o.top-a.ttHeight-10;n.style.left=l+"px",n.style.top=h+"px"}else"mouseout"!==e.type&&"touchend"!==e.type||n.classList.remove("apexcharts-active")}},{key:"handleStickyTooltip",value:function(t,e,i,a){var s=this.w,r=this.tooltipUtil.getNearestValues({context:this,hoverArea:a.hoverArea,elGrid:a.elGrid,clientX:e,clientY:i}),n=r.j,o=r.capturedSeries;r.hoverX<0||r.hoverX>s.globals.gridWidth?this.handleMouseOut(a):null!==o?this.handleStickyCapturedSeries(t,o,a,n):this.tooltipUtil.isXoverlap(n)&&this.create(t,this,0,n,a.ttItems)}},{key:"handleStickyCapturedSeries",value:function(t,e,i,a){var s=this.w;null===s.globals.series[e][a]?this.handleMouseOut(i):void 0!==s.globals.series[e][a]?this.tConfig.shared&&this.tooltipUtil.isXoverlap(a)&&this.tooltipUtil.isInitialSeriesSameLen()?this.create(t,this,e,a,i.ttItems):this.create(t,this,e,a,i.ttItems,!1):this.tooltipUtil.isXoverlap(a)&&this.create(t,this,0,a,i.ttItems)}},{key:"deactivateHoverFilter",value:function(){for(var t=this.w,e=new b(this.ctx),i=t.globals.dom.Paper.select(".apexcharts-bar-area"),a=0;a<i.length;a++)e.pathMouseLeave(i[a])}},{key:"handleMouseOut",value:function(t){var e=this.w,i=this.getElXCrosshairs();if(t.tooltipEl.classList.remove("apexcharts-active"),this.deactivateHoverFilter(),"bubble"!==e.config.chart.type&&this.marker.resetPointsSize(),null!==i&&i.classList.remove("apexcharts-active"),null!==this.ycrosshairs&&this.ycrosshairs.classList.remove("apexcharts-active"),this.blxaxisTooltip&&this.xaxisTooltip.classList.remove("apexcharts-active"),this.yaxisTooltips.length){null===this.yaxisTTEls&&(this.yaxisTTEls=e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));for(var a=0;a<this.yaxisTTEls.length;a++)this.yaxisTTEls[a].classList.remove("apexcharts-active")}e.config.legend.tooltipHoverFormatter&&this.legendLabels.forEach((function(t){var e=t.getAttribute("data:default-text");t.innerHTML=decodeURIComponent(e)}))}},{key:"markerClick",value:function(t,e,i){var a=this.w;"function"==typeof a.config.chart.events.markerClick&&a.config.chart.events.markerClick(t,this.ctx,{seriesIndex:e,dataPointIndex:i,w:a}),this.ctx.events.fireEvent("markerClick",[t,this.ctx,{seriesIndex:e,dataPointIndex:i,w:a}])}},{key:"create",value:function(t,e,i,a,s){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,n=this.w,o=e;"mouseup"===t.type&&this.markerClick(t,i,a),null===r&&(r=this.tConfig.shared);var l=this.tooltipUtil.hasMarkers(),h=this.tooltipUtil.getElBars();if(n.config.legend.tooltipHoverFormatter){var c=n.config.legend.tooltipHoverFormatter,d=Array.from(this.legendLabels);d.forEach((function(t){var e=t.getAttribute("data:default-text");t.innerHTML=decodeURIComponent(e)}));for(var g=0;g<d.length;g++){var u=d[g],f=parseInt(u.getAttribute("i"),10),p=decodeURIComponent(u.getAttribute("data:default-text")),x=c(p,{seriesIndex:r?f:i,dataPointIndex:a,w:n});if(r)u.innerHTML=n.globals.collapsedSeriesIndices.indexOf(f)<0?x:p;else if(u.innerHTML=f===i?x:p,i===f)break}}if(r){if(o.tooltipLabels.drawSeriesTexts({ttItems:s,i:i,j:a,shared:!this.showOnIntersect&&this.tConfig.shared}),l&&(n.globals.markers.largestSize>0?o.marker.enlargePoints(a):o.tooltipPosition.moveDynamicPointsOnHover(a)),this.tooltipUtil.hasBars()&&(this.barSeriesHeight=this.tooltipUtil.getBarsHeight(h),this.barSeriesHeight>0)){var m=new b(this.ctx),v=n.globals.dom.Paper.select(".apexcharts-bar-area[j='".concat(a,"']"));this.deactivateHoverFilter(),this.tooltipPosition.moveStickyTooltipOverBars(a);for(var y=0;y<v.length;y++)m.pathMouseEnter(v[y])}}else o.tooltipLabels.drawSeriesTexts({shared:!1,ttItems:s,i:i,j:a}),this.tooltipUtil.hasBars()&&o.tooltipPosition.moveStickyTooltipOverBars(a),l&&o.tooltipPosition.moveMarkers(i,a)}}]),t}(),mt=function(t){o(s,t);var i=d(s);function s(){return e(this,s),i.apply(this,arguments)}return a(s,[{key:"draw",value:function(t,e){var i=this,a=this.w;this.graphics=new b(this.ctx),this.bar=new X(this.ctx,this.xyRatios);var s=new y(this.ctx,a);t=s.getLogSeries(t),this.yRatio=s.getLogYRatios(this.yRatio),this.barHelpers.initVariables(t),"100%"===a.config.chart.stackType&&(t=a.globals.seriesPercent.slice()),this.series=t,this.totalItems=0,this.prevY=[],this.prevX=[],this.prevYF=[],this.prevXF=[],this.prevYVal=[],this.prevXVal=[],this.xArrj=[],this.xArrjF=[],this.xArrjVal=[],this.yArrj=[],this.yArrjF=[],this.yArrjVal=[];for(var r=0;r<t.length;r++)t[r].length>0&&(this.totalItems+=t[r].length);for(var o=this.graphics.group({class:"apexcharts-bar-series apexcharts-plot-series"}),l=0,h=0,c=function(s,r){var c=void 0,d=void 0,g=void 0,u=void 0,p=[],x=[],b=a.globals.comboCharts?e[s]:s;i.yRatio.length>1&&(i.yaxisIndex=b),i.isReversed=a.config.yaxis[i.yaxisIndex]&&a.config.yaxis[i.yaxisIndex].reversed;var m=i.graphics.group({class:"apexcharts-series",seriesName:f.escapeString(a.globals.seriesNames[b]),rel:s+1,"data:realIndex":b});i.ctx.series.addCollapsedClassToSeries(m,b);var v=i.graphics.group({class:"apexcharts-datalabels","data:realIndex":b}),y=0,w=0,k=i.initialPositions(l,h,c,d,g,u);h=k.y,y=k.barHeight,d=k.yDivision,u=k.zeroW,l=k.x,w=k.barWidth,c=k.xDivision,g=k.zeroH,i.yArrj=[],i.yArrjF=[],i.yArrjVal=[],i.xArrj=[],i.xArrjF=[],i.xArrjVal=[],1===i.prevY.length&&i.prevY[0].every((function(t){return isNaN(t)}))&&(i.prevY[0]=i.prevY[0].map((function(t){return g})),i.prevYF[0]=i.prevYF[0].map((function(t){return 0})));for(var A=0;A<a.globals.dataPoints;A++){var S=i.barHelpers.getStrokeWidth(s,A,b),C={indexes:{i:s,j:A,realIndex:b,bc:r},strokeWidth:S,x:l,y:h,elSeries:m},L=null;i.isHorizontal?(L=i.drawStackedBarPaths(n(n({},C),{},{zeroW:u,barHeight:y,yDivision:d})),w=i.series[s][A]/i.invertedYRatio):(L=i.drawStackedColumnPaths(n(n({},C),{},{xDivision:c,barWidth:w,zeroH:g})),y=i.series[s][A]/i.yRatio[i.yaxisIndex]),h=L.y,l=L.x,p.push(l),x.push(h);var P=i.barHelpers.getPathFillColor(t,s,A,b);m=i.renderSeries({realIndex:b,pathFill:P,j:A,i:s,pathFrom:L.pathFrom,pathTo:L.pathTo,strokeWidth:S,elSeries:m,x:l,y:h,series:t,barHeight:y,barWidth:w,elDataLabelsWrap:v,type:"bar",visibleSeries:0})}a.globals.seriesXvalues[b]=p,a.globals.seriesYvalues[b]=x,i.prevY.push(i.yArrj),i.prevYF.push(i.yArrjF),i.prevYVal.push(i.yArrjVal),i.prevX.push(i.xArrj),i.prevXF.push(i.xArrjF),i.prevXVal.push(i.xArrjVal),o.add(m)},d=0,g=0;d<t.length;d++,g++)c(d,g);return o}},{key:"initialPositions",value:function(t,e,i,a,s,r){var n,o,l=this.w;return this.isHorizontal?(n=(n=a=l.globals.gridHeight/l.globals.dataPoints)*parseInt(l.config.plotOptions.bar.barHeight,10)/100,r=this.baseLineInvertedY+l.globals.padHorizontal+(this.isReversed?l.globals.gridWidth:0)-(this.isReversed?2*this.baseLineInvertedY:0),e=(a-n)/2):(o=i=l.globals.gridWidth/l.globals.dataPoints,o=l.globals.isXNumeric&&l.globals.dataPoints>1?(i=l.globals.minXDiff/this.xRatio)*parseInt(this.barOptions.columnWidth,10)/100:o*parseInt(l.config.plotOptions.bar.columnWidth,10)/100,s=this.baseLineY[this.yaxisIndex]+(this.isReversed?l.globals.gridHeight:0)-(this.isReversed?2*this.baseLineY[this.yaxisIndex]:0),t=l.globals.padHorizontal+(i-o)/2),{x:t,y:e,yDivision:a,xDivision:i,barHeight:n,barWidth:o,zeroH:s,zeroW:r}}},{key:"drawStackedBarPaths",value:function(t){for(var e,i=t.indexes,a=t.barHeight,s=t.strokeWidth,r=t.zeroW,n=t.x,o=t.y,l=t.yDivision,h=t.elSeries,c=this.w,d=o,g=i.i,u=i.j,f=0,p=0;p<this.prevXF.length;p++)f+=this.prevXF[p][u];if(g>0){var x=r;this.prevXVal[g-1][u]<0?x=this.series[g][u]>=0?this.prevX[g-1][u]+f-2*(this.isReversed?f:0):this.prevX[g-1][u]:this.prevXVal[g-1][u]>=0&&(x=this.series[g][u]>=0?this.prevX[g-1][u]:this.prevX[g-1][u]-f+2*(this.isReversed?f:0)),e=x}else e=r;n=null===this.series[g][u]?e:e+this.series[g][u]/this.invertedYRatio-2*(this.isReversed?this.series[g][u]/this.invertedYRatio:0),this.xArrj.push(n),this.xArrjF.push(Math.abs(e-n)),this.xArrjVal.push(this.series[g][u]);var b=this.barHelpers.getBarpaths({barYPosition:d,barHeight:a,x1:e,x2:n,strokeWidth:s,series:this.series,realIndex:i.realIndex,i:g,j:u,w:c});return this.barHelpers.barBackground({j:u,i:g,y1:d,y2:a,elSeries:h}),o+=l,{pathTo:b.pathTo,pathFrom:b.pathFrom,x:n,y:o}}},{key:"drawStackedColumnPaths",value:function(t){var e=t.indexes,i=t.x,a=t.y,s=t.xDivision,r=t.barWidth,n=t.zeroH,o=(t.strokeWidth,t.elSeries),l=this.w,h=e.i,c=e.j,d=e.bc;if(l.globals.isXNumeric){var g=l.globals.seriesX[h][c];g||(g=0),i=(g-l.globals.minX)/this.xRatio-r/2}for(var u,f=i,p=0,x=0;x<this.prevYF.length;x++)p+=isNaN(this.prevYF[x][c])?0:this.prevYF[x][c];if(h>0&&!l.globals.isXNumeric||h>0&&l.globals.isXNumeric&&l.globals.seriesX[h-1][c]===l.globals.seriesX[h][c]){var b,m,v=Math.min(this.yRatio.length+1,h+1);if(void 0!==this.prevY[h-1])for(var y=1;y<v;y++)if(!isNaN(this.prevY[h-y][c])){m=this.prevY[h-y][c];break}for(var w=1;w<v;w++){if(this.prevYVal[h-w][c]<0){b=this.series[h][c]>=0?m-p+2*(this.isReversed?p:0):m;break}if(this.prevYVal[h-w][c]>=0){b=this.series[h][c]>=0?m:m+p-2*(this.isReversed?p:0);break}}void 0===b&&(b=l.globals.gridHeight),u=this.prevYF[0].every((function(t){return 0===t}))&&this.prevYF.slice(1,h).every((function(t){return t.every((function(t){return isNaN(t)}))}))?l.globals.gridHeight-n:b}else u=l.globals.gridHeight-n;a=u-this.series[h][c]/this.yRatio[this.yaxisIndex]+2*(this.isReversed?this.series[h][c]/this.yRatio[this.yaxisIndex]:0),this.yArrj.push(a),this.yArrjF.push(Math.abs(u-a)),this.yArrjVal.push(this.series[h][c]);var k=this.barHelpers.getColumnPaths({barXPosition:f,barWidth:r,y1:u,y2:a,yRatio:this.yRatio[this.yaxisIndex],strokeWidth:this.strokeWidth,series:this.series,realIndex:e.realIndex,i:h,j:c,w:l});return this.barHelpers.barBackground({bc:d,j:c,i:h,x1:f,x2:r,elSeries:o}),i+=s,{pathTo:k.pathTo,pathFrom:k.pathFrom,x:l.globals.isXNumeric?i-s:i,y:a}}}]),s}(X),vt=function(t){o(s,t);var i=d(s);function s(){return e(this,s),i.apply(this,arguments)}return a(s,[{key:"draw",value:function(t,e){var i=this.w,a=new b(this.ctx),s=new L(this.ctx);this.candlestickOptions=this.w.config.plotOptions.candlestick;var r=new y(this.ctx,i);t=r.getLogSeries(t),this.series=t,this.yRatio=r.getLogYRatios(this.yRatio),this.barHelpers.initVariables(t);for(var n=a.group({class:"apexcharts-candlestick-series apexcharts-plot-series"}),o=0;o<t.length;o++){var l,h,c=void 0,d=void 0,g=[],u=[],p=i.globals.comboCharts?e[o]:o,x=a.group({class:"apexcharts-series",seriesName:f.escapeString(i.globals.seriesNames[p]),rel:o+1,"data:realIndex":p});t[o].length>0&&(this.visibleI=this.visibleI+1);var m,v;this.yRatio.length>1&&(this.yaxisIndex=p);var w=this.barHelpers.initialPositions();d=w.y,m=w.barHeight,c=w.x,v=w.barWidth,l=w.xDivision,h=w.zeroH,u.push(c+v/2);for(var k=a.group({class:"apexcharts-datalabels","data:realIndex":p}),A=0;A<i.globals.dataPoints;A++){var S,C=this.barHelpers.getStrokeWidth(o,A,p),P=this.drawCandleStickPaths({indexes:{i:o,j:A,realIndex:p},x:c,y:d,xDivision:l,barWidth:v,zeroH:h,strokeWidth:C,elSeries:x});d=P.y,c=P.x,S=P.color,A>0&&u.push(c+v/2),g.push(d);var T=s.fillPath({seriesNumber:p,dataPointIndex:A,color:S,value:t[o][A]}),z=this.candlestickOptions.wick.useFillColor?S:void 0;this.renderSeries({realIndex:p,pathFill:T,lineFill:z,j:A,i:o,pathFrom:P.pathFrom,pathTo:P.pathTo,strokeWidth:C,elSeries:x,x:c,y:d,series:t,barHeight:m,barWidth:v,elDataLabelsWrap:k,visibleSeries:this.visibleI,type:"candlestick"})}i.globals.seriesXvalues[p]=u,i.globals.seriesYvalues[p]=g,n.add(x)}return n}},{key:"drawCandleStickPaths",value:function(t){var e=t.indexes,i=t.x,a=(t.y,t.xDivision),s=t.barWidth,r=t.zeroH,n=t.strokeWidth,o=this.w,l=new b(this.ctx),h=e.i,c=e.j,d=!0,g=o.config.plotOptions.candlestick.colors.upward,u=o.config.plotOptions.candlestick.colors.downward,f=this.yRatio[this.yaxisIndex],p=e.realIndex,x=this.getOHLCValue(p,c),m=r,v=r;x.o>x.c&&(d=!1);var y=Math.min(x.o,x.c),w=Math.max(x.o,x.c);o.globals.isXNumeric&&(i=(o.globals.seriesX[p][c]-o.globals.minX)/this.xRatio-s/2);var k=i+s*this.visibleI;void 0===this.series[h][c]||null===this.series[h][c]?y=r:(y=r-y/f,w=r-w/f,m=r-x.h/f,v=r-x.l/f);var A=l.move(k,r),S=l.move(k,y);return o.globals.previousPaths.length>0&&(S=this.getPreviousPath(p,c,!0)),A=l.move(k,w)+l.line(k+s/2,w)+l.line(k+s/2,m)+l.line(k+s/2,w)+l.line(k+s,w)+l.line(k+s,y)+l.line(k+s/2,y)+l.line(k+s/2,v)+l.line(k+s/2,y)+l.line(k,y)+l.line(k,w-n/2),S+=l.move(k,y),o.globals.isXNumeric||(i+=a),{pathTo:A,pathFrom:S,x:i,y:w,barXPosition:k,color:d?g:u}}},{key:"getOHLCValue",value:function(t,e){var i=this.w;return{o:i.globals.seriesCandleO[t][e],h:i.globals.seriesCandleH[t][e],l:i.globals.seriesCandleL[t][e],c:i.globals.seriesCandleC[t][e]}}}]),s}(X),yt=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w}return a(t,[{key:"checkColorRange",value:function(){var t=this.w,e=!1,i=t.config.plotOptions[t.config.chart.type];return i.colorScale.ranges.length>0&&i.colorScale.ranges.map((function(t,i){t.from<=0&&(e=!0)})),e}},{key:"getShadeColor",value:function(t,e,i,a){var s=this.w,r=1,n=s.config.plotOptions[t].shadeIntensity,o=this.determineColor(t,e,i);s.globals.hasNegs||a?r=s.config.plotOptions[t].reverseNegativeShade?o.percent<0?o.percent/100*(1.25*n):(1-o.percent/100)*(1.25*n):o.percent<=0?1-(1+o.percent/100)*n:(1-o.percent/100)*n:(r=1-o.percent/100,"treemap"===t&&(r=(1-o.percent/100)*(1.25*n)));var l=o.color,h=new f;return s.config.plotOptions[t].enableShades&&(r<0&&(r=0),l="dark"===this.w.config.theme.mode?f.hexToRgba(h.shadeColor(-1*r,o.color),s.config.fill.opacity):f.hexToRgba(h.shadeColor(r,o.color),s.config.fill.opacity)),{color:l,colorProps:o}}},{key:"determineColor",value:function(t,e,i){var a=this.w,s=a.globals.series[e][i],r=a.config.plotOptions[t],n=r.colorScale.inverse?i:e;a.config.plotOptions[t].distributed&&(n=i);var o=a.globals.colors[n],l=null,h=Math.min.apply(Math,g(a.globals.series[e])),c=Math.max.apply(Math,g(a.globals.series[e]));r.distributed||"heatmap"!==t||(h=a.globals.minY,c=a.globals.maxY),void 0!==r.colorScale.min&&(h=r.colorScale.min<a.globals.minY?r.colorScale.min:a.globals.minY,c=r.colorScale.max>a.globals.maxY?r.colorScale.max:a.globals.maxY);var d=Math.abs(c)+Math.abs(h),u=100*s/(0===d?d-1e-6:d);r.colorScale.ranges.length>0&&r.colorScale.ranges.map((function(t,e){if(s>=t.from&&s<=t.to){o=t.color,l=t.foreColor?t.foreColor:null,h=t.from,c=t.to;var i=Math.abs(c)+Math.abs(h);u=100*s/(0===i?i-1e-6:i)}}));return{color:o,foreColor:l,percent:u}}},{key:"calculateDataLabels",value:function(t){var e=t.text,i=t.x,a=t.y,s=t.i,r=t.j,n=t.colorProps,o=t.fontSize,l=this.w.config.dataLabels,h=new b(this.ctx),c=new z(this.ctx),d=null;if(l.enabled){d=h.group({class:"apexcharts-data-labels"});var g=l.offsetX,u=l.offsetY,f=i+g,p=a+parseFloat(l.style.fontSize)/3+u;c.plotDataLabelsText({x:f,y:p,text:e,i:s,j:r,color:n.foreColor,parent:d,fontSize:o,dataLabelsConfig:l})}return d}},{key:"addListeners",value:function(t){var e=new b(this.ctx);t.node.addEventListener("mouseenter",e.pathMouseEnter.bind(this,t)),t.node.addEventListener("mouseleave",e.pathMouseLeave.bind(this,t)),t.node.addEventListener("mousedown",e.pathMouseDown.bind(this,t))}}]),t}(),wt=function(){function t(i,a){e(this,t),this.ctx=i,this.w=i.w,this.xRatio=a.xRatio,this.yRatio=a.yRatio,this.dynamicAnim=this.w.config.chart.animations.dynamicAnimation,this.helpers=new yt(i),this.rectRadius=this.w.config.plotOptions.heatmap.radius,this.strokeWidth=this.w.config.stroke.show?this.w.config.stroke.width:0}return a(t,[{key:"draw",value:function(t){var e=this.w,i=new b(this.ctx),a=i.group({class:"apexcharts-heatmap"});a.attr("clip-path","url(#gridRectMask".concat(e.globals.cuid,")"));var s=e.globals.gridWidth/e.globals.dataPoints,r=e.globals.gridHeight/e.globals.series.length,n=0,o=!1;this.negRange=this.helpers.checkColorRange();var l=t.slice();e.config.yaxis[0].reversed&&(o=!0,l.reverse());for(var h=o?0:l.length-1;o?h<l.length:h>=0;o?h++:h--){var c=i.group({class:"apexcharts-series apexcharts-heatmap-series",seriesName:f.escapeString(e.globals.seriesNames[h]),rel:h+1,"data:realIndex":h});if(this.ctx.series.addCollapsedClassToSeries(c,h),e.config.chart.dropShadow.enabled){var d=e.config.chart.dropShadow;new p(this.ctx).dropShadow(c,d,h)}for(var g=0,u=e.config.plotOptions.heatmap.shadeIntensity,x=0;x<l[h].length;x++){var m=this.helpers.getShadeColor(e.config.chart.type,h,x,this.negRange),v=m.color,y=m.colorProps;if("image"===e.config.fill.type)v=new L(this.ctx).fillPath({seriesNumber:h,dataPointIndex:x,opacity:e.globals.hasNegs?y.percent<0?1-(1+y.percent/100):u+y.percent/100:y.percent/100,patternID:f.randomId(),width:e.config.fill.image.width?e.config.fill.image.width:s,height:e.config.fill.image.height?e.config.fill.image.height:r});var w=this.rectRadius,k=i.drawRect(g,n,s,r,w);if(k.attr({cx:g,cy:n}),k.node.classList.add("apexcharts-heatmap-rect"),c.add(k),k.attr({fill:v,i:h,index:h,j:x,val:l[h][x],"stroke-width":this.strokeWidth,stroke:e.config.plotOptions.heatmap.useFillColorAsStroke?v:e.globals.stroke.colors[0],color:v}),this.helpers.addListeners(k),e.config.chart.animations.enabled&&!e.globals.dataChanged){var A=1;e.globals.resized||(A=e.config.chart.animations.speed),this.animateHeatMap(k,g,n,s,r,A)}if(e.globals.dataChanged){var S=1;if(this.dynamicAnim.enabled&&e.globals.shouldAnimate){S=this.dynamicAnim.speed;var C=e.globals.previousPaths[h]&&e.globals.previousPaths[h][x]&&e.globals.previousPaths[h][x].color;C||(C="rgba(255, 255, 255, 0)"),this.animateHeatColor(k,f.isColorHex(C)?C:f.rgb2hex(C),f.isColorHex(v)?v:f.rgb2hex(v),S)}}var P=(0,e.config.dataLabels.formatter)(e.globals.series[h][x],{value:e.globals.series[h][x],seriesIndex:h,dataPointIndex:x,w:e}),T=this.helpers.calculateDataLabels({text:P,x:g+s/2,y:n+r/2,i:h,j:x,colorProps:y,series:l});null!==T&&c.add(T),g+=s}n+=r,a.add(c)}var z=e.globals.yAxisScale[0].result.slice();e.config.yaxis[0].reversed?z.unshift(""):z.push(""),e.globals.yAxisScale[0].result=z;var I=e.globals.gridHeight/e.globals.series.length;return e.config.yaxis[0].labels.offsetY=-I/2,a}},{key:"animateHeatMap",value:function(t,e,i,a,s,r){var n=new x(this.ctx);n.animateRect(t,{x:e+a/2,y:i+s/2,width:0,height:0},{x:e,y:i,width:a,height:s},r,(function(){n.animationCompleted(t)}))}},{key:"animateHeatColor",value:function(t,e,i,a){t.attr({fill:e}).animate(a).attr({fill:i})}}]),t}(),kt=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w}return a(t,[{key:"drawYAxisTexts",value:function(t,e,i,a){var s=this.w,r=s.config.yaxis[0],n=s.globals.yLabelFormatters[0];return new b(this.ctx).drawText({x:t+r.labels.offsetX,y:e+r.labels.offsetY,text:n(a,i),textAnchor:"middle",fontSize:r.labels.style.fontSize,fontFamily:r.labels.style.fontFamily,foreColor:Array.isArray(r.labels.style.colors)?r.labels.style.colors[i]:r.labels.style.colors})}}]),t}(),At=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w;var a=this.w;this.chartType=this.w.config.chart.type,this.initialAnim=this.w.config.chart.animations.enabled,this.dynamicAnim=this.initialAnim&&this.w.config.chart.animations.dynamicAnimation.enabled,this.animBeginArr=[0],this.animDur=0,this.donutDataLabels=this.w.config.plotOptions.pie.donut.labels,this.lineColorArr=void 0!==a.globals.stroke.colors?a.globals.stroke.colors:a.globals.colors,this.defaultSize=Math.min(a.globals.gridWidth,a.globals.gridHeight),this.centerY=this.defaultSize/2,this.centerX=a.globals.gridWidth/2,"radialBar"===a.config.chart.type?this.fullAngle=360:this.fullAngle=Math.abs(a.config.plotOptions.pie.endAngle-a.config.plotOptions.pie.startAngle),this.initialAngle=a.config.plotOptions.pie.startAngle%this.fullAngle,a.globals.radialSize=this.defaultSize/2.05-a.config.stroke.width-(a.config.chart.sparkline.enabled?0:a.config.chart.dropShadow.blur),this.donutSize=a.globals.radialSize*parseInt(a.config.plotOptions.pie.donut.size,10)/100,this.maxY=0,this.sliceLabels=[],this.sliceSizes=[],this.prevSectorAngleArr=[]}return a(t,[{key:"draw",value:function(t){var e=this,i=this.w,a=new b(this.ctx);if(this.ret=a.group({class:"apexcharts-pie"}),i.globals.noData)return this.ret;for(var s=0,r=0;r<t.length;r++)s+=f.negToZero(t[r]);var n=[],o=a.group();0===s&&(s=1e-5),t.forEach((function(t){e.maxY=Math.max(e.maxY,t)})),i.config.yaxis[0].max&&(this.maxY=i.config.yaxis[0].max),"polarArea"===this.chartType&&this.drawPolarElements();for(var l=0;l<t.length;l++){var h=this.fullAngle*f.negToZero(t[l])/s;n.push(h),"polarArea"===this.chartType?(n[l]=this.fullAngle/t.length,this.sliceSizes.push(i.globals.radialSize*t[l]/this.maxY)):this.sliceSizes.push(i.globals.radialSize)}if(i.globals.dataChanged){for(var c,d=0,g=0;g<i.globals.previousPaths.length;g++)d+=f.negToZero(i.globals.previousPaths[g]);for(var u=0;u<i.globals.previousPaths.length;u++)c=this.fullAngle*f.negToZero(i.globals.previousPaths[u])/d,this.prevSectorAngleArr.push(c)}this.donutSize<0&&(this.donutSize=0);var p=i.config.plotOptions.pie.customScale,x=i.globals.gridWidth/2,m=i.globals.gridHeight/2,v=x-i.globals.gridWidth/2*p,y=m-i.globals.gridHeight/2*p;if("donut"===this.chartType){var w=a.drawCircle(this.donutSize);w.attr({cx:this.centerX,cy:this.centerY,fill:i.config.plotOptions.pie.donut.background?i.config.plotOptions.pie.donut.background:"transparent"}),o.add(w)}var k=this.drawArcs(n,t);if(this.sliceLabels.forEach((function(t){k.add(t)})),o.attr({transform:"translate(".concat(v,", ").concat(y,") scale(").concat(p,")")}),o.add(k),this.ret.add(o),this.donutDataLabels.show){var A=this.renderInnerDataLabels(this.donutDataLabels,{hollowSize:this.donutSize,centerX:this.centerX,centerY:this.centerY,opacity:this.donutDataLabels.show,translateX:v,translateY:y});this.ret.add(A)}return this.ret}},{key:"drawArcs",value:function(t,e){var i=this.w,a=new p(this.ctx),s=new b(this.ctx),r=new L(this.ctx),n=s.group({class:"apexcharts-slices"}),o=this.initialAngle,l=this.initialAngle,h=this.initialAngle,c=this.initialAngle;this.strokeWidth=i.config.stroke.show?i.config.stroke.width:0;for(var d=0;d<t.length;d++){var g=s.group({class:"apexcharts-series apexcharts-pie-series",seriesName:f.escapeString(i.globals.seriesNames[d]),rel:d+1,"data:realIndex":d});n.add(g),l=c,h=(o=h)+t[d],c=l+this.prevSectorAngleArr[d];var u=h<o?this.fullAngle+h-o:h-o,x=r.fillPath({seriesNumber:d,size:this.sliceSizes[d],value:e[d]}),m=this.getChangedPath(l,c),v=s.drawPath({d:m,stroke:Array.isArray(this.lineColorArr)?this.lineColorArr[d]:this.lineColorArr,strokeWidth:0,fill:x,fillOpacity:i.config.fill.opacity,classes:"apexcharts-pie-area apexcharts-".concat(this.chartType.toLowerCase(),"-slice-").concat(d)});if(v.attr({index:0,j:d}),i.config.chart.dropShadow.enabled){var y=i.config.chart.dropShadow;a.dropShadow(v,y,d)}this.addListeners(v,this.donutDataLabels),b.setAttrs(v.node,{"data:angle":u,"data:startAngle":o,"data:strokeWidth":this.strokeWidth,"data:value":e[d]});var w={x:0,y:0};"pie"===this.chartType||"polarArea"===this.chartType?w=f.polarToCartesian(this.centerX,this.centerY,i.globals.radialSize/1.25+i.config.plotOptions.pie.dataLabels.offset,(o+u/2)%this.fullAngle):"donut"===this.chartType&&(w=f.polarToCartesian(this.centerX,this.centerY,(i.globals.radialSize+this.donutSize)/2+i.config.plotOptions.pie.dataLabels.offset,(o+u/2)%this.fullAngle)),g.add(v);var k=0;if(!this.initialAnim||i.globals.resized||i.globals.dataChanged?this.animBeginArr.push(0):(0===(k=u/this.fullAngle*i.config.chart.animations.speed)&&(k=1),this.animDur=k+this.animDur,this.animBeginArr.push(this.animDur)),this.dynamicAnim&&i.globals.dataChanged?this.animatePaths(v,{size:this.sliceSizes[d],endAngle:h,startAngle:o,prevStartAngle:l,prevEndAngle:c,animateStartingPos:!0,i:d,animBeginArr:this.animBeginArr,shouldSetPrevPaths:!0,dur:i.config.chart.animations.dynamicAnimation.speed}):this.animatePaths(v,{size:this.sliceSizes[d],endAngle:h,startAngle:o,i:d,totalItems:t.length-1,animBeginArr:this.animBeginArr,dur:k}),i.config.plotOptions.pie.expandOnClick&&"polarArea"!==this.chartType&&v.click(this.pieClicked.bind(this,d)),i.config.dataLabels.enabled){var A=w.x,S=w.y,C=100*u/this.fullAngle+"%";if(0!==u&&i.config.plotOptions.pie.dataLabels.minAngleToShowLabel<t[d]){var P=i.config.dataLabels.formatter;void 0!==P&&(C=P(i.globals.seriesPercent[d][0],{seriesIndex:d,w:i}));var T=i.globals.dataLabels.style.colors[d],z=s.group({class:"apexcharts-datalabels"}),I=s.drawText({x:A,y:S,text:C,textAnchor:"middle",fontSize:i.config.dataLabels.style.fontSize,fontFamily:i.config.dataLabels.style.fontFamily,fontWeight:i.config.dataLabels.style.fontWeight,foreColor:T});if(z.add(I),i.config.dataLabels.dropShadow.enabled){var M=i.config.dataLabels.dropShadow;a.dropShadow(I,M)}I.node.classList.add("apexcharts-pie-label"),i.config.chart.animations.animate&&!1===i.globals.resized&&(I.node.classList.add("apexcharts-pie-label-delay"),I.node.style.animationDelay=i.config.chart.animations.speed/940+"s"),this.sliceLabels.push(z)}}}return n}},{key:"addListeners",value:function(t,e){var i=new b(this.ctx);t.node.addEventListener("mouseenter",i.pathMouseEnter.bind(this,t)),t.node.addEventListener("mouseleave",i.pathMouseLeave.bind(this,t)),t.node.addEventListener("mouseleave",this.revertDataLabelsInner.bind(this,t.node,e)),t.node.addEventListener("mousedown",i.pathMouseDown.bind(this,t)),this.donutDataLabels.total.showAlways||(t.node.addEventListener("mouseenter",this.printDataLabelsInner.bind(this,t.node,e)),t.node.addEventListener("mousedown",this.printDataLabelsInner.bind(this,t.node,e)))}},{key:"animatePaths",value:function(t,e){var i=this.w,a=e.endAngle<e.startAngle?this.fullAngle+e.endAngle-e.startAngle:e.endAngle-e.startAngle,s=a,r=e.startAngle,n=e.startAngle;void 0!==e.prevStartAngle&&void 0!==e.prevEndAngle&&(r=e.prevEndAngle,s=e.prevEndAngle<e.prevStartAngle?this.fullAngle+e.prevEndAngle-e.prevStartAngle:e.prevEndAngle-e.prevStartAngle),e.i===i.config.series.length-1&&(a+n>this.fullAngle?e.endAngle=e.endAngle-(a+n):a+n<this.fullAngle&&(e.endAngle=e.endAngle+(this.fullAngle-(a+n)))),a===this.fullAngle&&(a=this.fullAngle-.01),this.animateArc(t,r,n,a,s,e)}},{key:"animateArc",value:function(t,e,i,a,s,r){var n,o=this,l=this.w,h=new x(this.ctx),c=r.size;(isNaN(e)||isNaN(s))&&(e=i,s=a,r.dur=0);var d=a,g=i,u=e<i?this.fullAngle+e-i:e-i;l.globals.dataChanged&&r.shouldSetPrevPaths&&r.prevEndAngle&&(n=o.getPiePath({me:o,startAngle:r.prevStartAngle,angle:r.prevEndAngle<r.prevStartAngle?this.fullAngle+r.prevEndAngle-r.prevStartAngle:r.prevEndAngle-r.prevStartAngle,size:c}),t.attr({d:n})),0!==r.dur?t.animate(r.dur,l.globals.easing,r.animBeginArr[r.i]).afterAll((function(){"pie"!==o.chartType&&"donut"!==o.chartType&&"polarArea"!==o.chartType||this.animate(l.config.chart.animations.dynamicAnimation.speed).attr({"stroke-width":o.strokeWidth}),r.i===l.config.series.length-1&&h.animationCompleted(t)})).during((function(l){d=u+(a-u)*l,r.animateStartingPos&&(d=s+(a-s)*l,g=e-s+(i-(e-s))*l),n=o.getPiePath({me:o,startAngle:g,angle:d,size:c}),t.node.setAttribute("data:pathOrig",n),t.attr({d:n})})):(n=o.getPiePath({me:o,startAngle:g,angle:a,size:c}),r.isTrack||(l.globals.animationEnded=!0),t.node.setAttribute("data:pathOrig",n),t.attr({d:n,"stroke-width":o.strokeWidth}))}},{key:"pieClicked",value:function(t){var e,i=this.w,a=this,s=a.sliceSizes[t]+(i.config.plotOptions.pie.expandOnClick?4:0),r=i.globals.dom.Paper.select(".apexcharts-".concat(a.chartType.toLowerCase(),"-slice-").concat(t)).members[0];if("true"!==r.attr("data:pieClicked")){var n=i.globals.dom.baseEl.getElementsByClassName("apexcharts-pie-area");Array.prototype.forEach.call(n,(function(t){t.setAttribute("data:pieClicked","false");var e=t.getAttribute("data:pathOrig");t.setAttribute("d",e)})),r.attr("data:pieClicked","true");var o=parseInt(r.attr("data:startAngle"),10),l=parseInt(r.attr("data:angle"),10);e=a.getPiePath({me:a,startAngle:o,angle:l,size:s}),360!==l&&r.plot(e)}else{r.attr({"data:pieClicked":"false"}),this.revertDataLabelsInner(r.node,this.donutDataLabels);var h=r.attr("data:pathOrig");r.attr({d:h})}}},{key:"getChangedPath",value:function(t,e){var i="";return this.dynamicAnim&&this.w.globals.dataChanged&&(i=this.getPiePath({me:this,startAngle:t,angle:e-t,size:this.size})),i}},{key:"getPiePath",value:function(t){var e=t.me,i=t.startAngle,a=t.angle,s=t.size,r=i,n=Math.PI*(r-90)/180,o=a+i;Math.ceil(o)>=this.fullAngle+this.w.config.plotOptions.pie.startAngle%this.fullAngle&&(o=this.fullAngle+this.w.config.plotOptions.pie.startAngle%this.fullAngle-.01),Math.ceil(o)>this.fullAngle&&(o-=this.fullAngle);var l=Math.PI*(o-90)/180,h=e.centerX+s*Math.cos(n),c=e.centerY+s*Math.sin(n),d=e.centerX+s*Math.cos(l),g=e.centerY+s*Math.sin(l),u=f.polarToCartesian(e.centerX,e.centerY,e.donutSize,o),p=f.polarToCartesian(e.centerX,e.centerY,e.donutSize,r),x=a>180?1:0,b=["M",h,c,"A",s,s,0,x,1,d,g];return"donut"===e.chartType?[].concat(b,["L",u.x,u.y,"A",e.donutSize,e.donutSize,0,x,0,p.x,p.y,"L",h,c,"z"]).join(" "):"pie"===e.chartType||"polarArea"===e.chartType?[].concat(b,["L",e.centerX,e.centerY,"L",h,c]).join(" "):[].concat(b).join(" ")}},{key:"drawPolarElements",value:function(){var t=this.w,e=new j(this.ctx),i=new b(this.ctx),a=new kt(this.ctx),s=i.group(),r=i.group(),n=e.niceScale(0,Math.ceil(this.maxY),t.config.yaxis[0].tickAmount,0,!0),o=n.result.reverse(),l=n.result.length;this.maxY=n.niceMax;for(var h=t.globals.radialSize,c=h/(l-1),d=0;d<l-1;d++){var g=i.drawCircle(h);if(g.attr({cx:this.centerX,cy:this.centerY,fill:"none","stroke-width":t.config.plotOptions.polarArea.rings.strokeWidth,stroke:t.config.plotOptions.polarArea.rings.strokeColor}),t.config.yaxis[0].show){var u=a.drawYAxisTexts(this.centerX,this.centerY-h+parseInt(t.config.yaxis[0].labels.style.fontSize,10)/2,d,o[d]);r.add(u)}s.add(g),h-=c}this.ret.add(s),this.ret.add(r)}},{key:"renderInnerDataLabels",value:function(t,e){var i=this.w,a=new b(this.ctx),s=a.group({class:"apexcharts-datalabels-group",transform:"translate(".concat(e.translateX?e.translateX:0,", ").concat(e.translateY?e.translateY:0,") scale(").concat(i.config.plotOptions.pie.customScale,")")}),r=t.total.show;s.node.style.opacity=e.opacity;var n,o,l=e.centerX,h=e.centerY;n=void 0===t.name.color?i.globals.colors[0]:t.name.color;var c=t.name.fontSize,d=t.name.fontFamily,g=t.value.fontWeight;o=void 0===t.value.color?i.config.chart.foreColor:t.value.color;var u=t.value.formatter,f="",p="";if(r?(n=t.total.color,c=t.total.fontSize,d=t.total.fontFamily,g=t.total.fontWeight,p=t.total.label,f=t.total.formatter(i)):1===i.globals.series.length&&(f=u(i.globals.series[0],i),p=i.globals.seriesNames[0]),p&&(p=t.name.formatter(p,t.total.show,i)),t.name.show){var x=a.drawText({x:l,y:h+parseFloat(t.name.offsetY),text:p,textAnchor:"middle",foreColor:n,fontSize:c,fontWeight:g,fontFamily:d});x.node.classList.add("apexcharts-datalabel-label"),s.add(x)}if(t.value.show){var m=t.name.show?parseFloat(t.value.offsetY)+16:t.value.offsetY,v=a.drawText({x:l,y:h+m,text:f,textAnchor:"middle",foreColor:o,fontWeight:t.value.fontWeight,fontSize:t.value.fontSize,fontFamily:t.value.fontFamily});v.node.classList.add("apexcharts-datalabel-value"),s.add(v)}return s}},{key:"printInnerLabels",value:function(t,e,i,a){var s,r=this.w;a?s=void 0===t.name.color?r.globals.colors[parseInt(a.parentNode.getAttribute("rel"),10)-1]:t.name.color:r.globals.series.length>1&&t.total.show&&(s=t.total.color);var n=r.globals.dom.baseEl.querySelector(".apexcharts-datalabel-label"),o=r.globals.dom.baseEl.querySelector(".apexcharts-datalabel-value");i=(0,t.value.formatter)(i,r),a||"function"!=typeof t.total.formatter||(i=t.total.formatter(r));var l=e===t.total.label;e=t.name.formatter(e,l,r),null!==n&&(n.textContent=e),null!==o&&(o.textContent=i),null!==n&&(n.style.fill=s)}},{key:"printDataLabelsInner",value:function(t,e){var i=this.w,a=t.getAttribute("data:value"),s=i.globals.seriesNames[parseInt(t.parentNode.getAttribute("rel"),10)-1];i.globals.series.length>1&&this.printInnerLabels(e,s,a,t);var r=i.globals.dom.baseEl.querySelector(".apexcharts-datalabels-group");null!==r&&(r.style.opacity=1)}},{key:"revertDataLabelsInner",value:function(t,e,i){var a=this,s=this.w,r=s.globals.dom.baseEl.querySelector(".apexcharts-datalabels-group"),n=!1,o=s.globals.dom.baseEl.getElementsByClassName("apexcharts-pie-area"),l=function(t){var i=t.makeSliceOut,s=t.printLabel;Array.prototype.forEach.call(o,(function(t){"true"===t.getAttribute("data:pieClicked")&&(i&&(n=!0),s&&a.printDataLabelsInner(t,e))}))};if(l({makeSliceOut:!0,printLabel:!1}),e.total.show&&s.globals.series.length>1)n&&!e.total.showAlways?l({makeSliceOut:!1,printLabel:!0}):this.printInnerLabels(e,e.total.label,e.total.formatter(s));else if(l({makeSliceOut:!1,printLabel:!0}),!n)if(s.globals.selectedDataPoints.length&&s.globals.series.length>1)if(s.globals.selectedDataPoints[0].length>0){var h=s.globals.selectedDataPoints[0],c=s.globals.dom.baseEl.querySelector(".apexcharts-".concat(this.chartType.toLowerCase(),"-slice-").concat(h));this.printDataLabelsInner(c,e)}else r&&s.globals.selectedDataPoints.length&&0===s.globals.selectedDataPoints[0].length&&(r.style.opacity=0);else r&&s.globals.series.length>1&&(r.style.opacity=0)}}]),t}(),St=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w,this.chartType=this.w.config.chart.type,this.initialAnim=this.w.config.chart.animations.enabled,this.dynamicAnim=this.initialAnim&&this.w.config.chart.animations.dynamicAnimation.enabled,this.animDur=0;var a=this.w;this.graphics=new b(this.ctx),this.lineColorArr=void 0!==a.globals.stroke.colors?a.globals.stroke.colors:a.globals.colors,this.defaultSize=a.globals.svgHeight<a.globals.svgWidth?a.globals.gridHeight+1.5*a.globals.goldenPadding:a.globals.gridWidth,this.isLog=a.config.yaxis[0].logarithmic,this.coreUtils=new y(this.ctx),this.maxValue=this.isLog?this.coreUtils.getLogVal(a.globals.maxY,0):a.globals.maxY,this.minValue=this.isLog?this.coreUtils.getLogVal(this.w.globals.minY,0):a.globals.minY,this.polygons=a.config.plotOptions.radar.polygons,this.strokeWidth=a.config.stroke.show?a.config.stroke.width:0,this.size=this.defaultSize/2.1-this.strokeWidth-a.config.chart.dropShadow.blur,a.config.xaxis.labels.show&&(this.size=this.size-a.globals.xAxisLabelsWidth/1.75),void 0!==a.config.plotOptions.radar.size&&(this.size=a.config.plotOptions.radar.size),this.dataRadiusOfPercent=[],this.dataRadius=[],this.angleArr=[],this.yaxisLabelsTextsPos=[]}return a(t,[{key:"draw",value:function(t){var e=this,i=this.w,a=new L(this.ctx),s=[],r=new z(this.ctx);t.length&&(this.dataPointsLen=t[i.globals.maxValsInArrayIndex].length),this.disAngle=2*Math.PI/this.dataPointsLen;var o=i.globals.gridWidth/2,l=i.globals.gridHeight/2,h=o+i.config.plotOptions.radar.offsetX,c=l+i.config.plotOptions.radar.offsetY,d=this.graphics.group({class:"apexcharts-radar-series apexcharts-plot-series",transform:"translate(".concat(h||0,", ").concat(c||0,")")}),g=[],u=null,x=null;if(this.yaxisLabels=this.graphics.group({class:"apexcharts-yaxis"}),t.forEach((function(t,o){var l=t.length===i.globals.dataPoints,h=e.graphics.group().attr({class:"apexcharts-series","data:longestSeries":l,seriesName:f.escapeString(i.globals.seriesNames[o]),rel:o+1,"data:realIndex":o});e.dataRadiusOfPercent[o]=[],e.dataRadius[o]=[],e.angleArr[o]=[],t.forEach((function(t,i){var a=Math.abs(e.maxValue-e.minValue);t+=Math.abs(e.minValue),e.isLog&&(t=e.coreUtils.getLogVal(t,0)),e.dataRadiusOfPercent[o][i]=t/a,e.dataRadius[o][i]=e.dataRadiusOfPercent[o][i]*e.size,e.angleArr[o][i]=i*e.disAngle})),g=e.getDataPointsPos(e.dataRadius[o],e.angleArr[o]);var c=e.createPaths(g,{x:0,y:0});u=e.graphics.group({class:"apexcharts-series-markers-wrap apexcharts-element-hidden"}),x=e.graphics.group({class:"apexcharts-datalabels","data:realIndex":o}),i.globals.delayedElements.push({el:u.node,index:o});var d={i:o,realIndex:o,animationDelay:o,initialSpeed:i.config.chart.animations.speed,dataChangeSpeed:i.config.chart.animations.dynamicAnimation.speed,className:"apexcharts-radar",shouldClipToGrid:!1,bindEventsOnPaths:!1,stroke:i.globals.stroke.colors[o],strokeLineCap:i.config.stroke.lineCap},b=null;i.globals.previousPaths.length>0&&(b=e.getPreviousPath(o));for(var m=0;m<c.linePathsTo.length;m++){var v=e.graphics.renderPaths(n(n({},d),{},{pathFrom:null===b?c.linePathsFrom[m]:b,pathTo:c.linePathsTo[m],strokeWidth:Array.isArray(e.strokeWidth)?e.strokeWidth[o]:e.strokeWidth,fill:"none",drawShadow:!1}));h.add(v);var y=a.fillPath({seriesNumber:o}),w=e.graphics.renderPaths(n(n({},d),{},{pathFrom:null===b?c.areaPathsFrom[m]:b,pathTo:c.areaPathsTo[m],strokeWidth:0,fill:y,drawShadow:!1}));if(i.config.chart.dropShadow.enabled){var k=new p(e.ctx),A=i.config.chart.dropShadow;k.dropShadow(w,Object.assign({},A,{noUserSpaceOnUse:!0}),o)}h.add(w)}t.forEach((function(t,a){var s=new P(e.ctx).getMarkerConfig("apexcharts-marker",o,a),l=e.graphics.drawMarker(g[a].x,g[a].y,s);l.attr("rel",a),l.attr("j",a),l.attr("index",o),l.node.setAttribute("default-marker-size",s.pSize);var c=e.graphics.group({class:"apexcharts-series-markers"});c&&c.add(l),u.add(c),h.add(u);var d=i.config.dataLabels;if(d.enabled){var f=d.formatter(i.globals.series[o][a],{seriesIndex:o,dataPointIndex:a,w:i});r.plotDataLabelsText({x:g[a].x,y:g[a].y,text:f,textAnchor:"middle",i:o,j:o,parent:x,offsetCorrection:!1,dataLabelsConfig:n({},d)})}h.add(x)})),s.push(h)})),this.drawPolygons({parent:d}),i.config.xaxis.labels.show){var b=this.drawXAxisTexts();d.add(b)}return d.add(this.yaxisLabels),s.forEach((function(t){d.add(t)})),d}},{key:"drawPolygons",value:function(t){for(var e=this,i=this.w,a=t.parent,s=new kt(this.ctx),r=i.globals.yAxisScale[0].result.reverse(),n=r.length,o=[],l=this.size/(n-1),h=0;h<n;h++)o[h]=l*h;o.reverse();var c=[],d=[];o.forEach((function(t,i){var a=e.getPolygonPos(t),s="";a.forEach((function(t,a){if(0===i){var r=e.graphics.drawLine(t.x,t.y,0,0,Array.isArray(e.polygons.connectorColors)?e.polygons.connectorColors[a]:e.polygons.connectorColors);d.push(r)}0===a&&e.yaxisLabelsTextsPos.push({x:t.x,y:t.y}),s+=t.x+","+t.y+" "})),c.push(s)})),c.forEach((function(t,s){var r=e.polygons.strokeColors,n=e.polygons.strokeWidth,o=e.graphics.drawPolygon(t,Array.isArray(r)?r[s]:r,Array.isArray(n)?n[s]:n,i.globals.radarPolygons.fill.colors[s]);a.add(o)})),d.forEach((function(t){a.add(t)})),i.config.yaxis[0].show&&this.yaxisLabelsTextsPos.forEach((function(t,i){var a=s.drawYAxisTexts(t.x,t.y,i,r[i]);e.yaxisLabels.add(a)}))}},{key:"drawXAxisTexts",value:function(){var t=this,e=this.w,i=e.config.xaxis.labels,a=this.graphics.group({class:"apexcharts-xaxis"}),s=this.getPolygonPos(this.size);return e.globals.labels.forEach((function(r,o){var l=e.config.xaxis.labels.formatter,h=new z(t.ctx);if(s[o]){var c=t.getTextPos(s[o],t.size),d=l(r,{seriesIndex:-1,dataPointIndex:o,w:e});h.plotDataLabelsText({x:c.newX,y:c.newY,text:d,textAnchor:c.textAnchor,i:o,j:o,parent:a,color:Array.isArray(i.style.colors)&&i.style.colors[o]?i.style.colors[o]:"#a8a8a8",dataLabelsConfig:n({textAnchor:c.textAnchor,dropShadow:{enabled:!1}},i),offsetCorrection:!1})}})),a}},{key:"createPaths",value:function(t,e){var i=this,a=[],s=[],r=[],n=[];if(t.length){s=[this.graphics.move(e.x,e.y)],n=[this.graphics.move(e.x,e.y)];var o=this.graphics.move(t[0].x,t[0].y),l=this.graphics.move(t[0].x,t[0].y);t.forEach((function(e,a){o+=i.graphics.line(e.x,e.y),l+=i.graphics.line(e.x,e.y),a===t.length-1&&(o+="Z",l+="Z")})),a.push(o),r.push(l)}return{linePathsFrom:s,linePathsTo:a,areaPathsFrom:n,areaPathsTo:r}}},{key:"getTextPos",value:function(t,e){var i="middle",a=t.x,s=t.y;return Math.abs(t.x)>=10?t.x>0?(i="start",a+=10):t.x<0&&(i="end",a-=10):i="middle",Math.abs(t.y)>=e-10&&(t.y<0?s-=10:t.y>0&&(s+=10)),{textAnchor:i,newX:a,newY:s}}},{key:"getPreviousPath",value:function(t){for(var e=this.w,i=null,a=0;a<e.globals.previousPaths.length;a++){var s=e.globals.previousPaths[a];s.paths.length>0&&parseInt(s.realIndex,10)===parseInt(t,10)&&void 0!==e.globals.previousPaths[a].paths[0]&&(i=e.globals.previousPaths[a].paths[0].d)}return i}},{key:"getDataPointsPos",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.dataPointsLen;t=t||[],e=e||[];for(var a=[],s=0;s<i;s++){var r={};r.x=t[s]*Math.sin(e[s]),r.y=-t[s]*Math.cos(e[s]),a.push(r)}return a}},{key:"getPolygonPos",value:function(t){for(var e=[],i=2*Math.PI/this.dataPointsLen,a=0;a<this.dataPointsLen;a++){var s={};s.x=t*Math.sin(a*i),s.y=-t*Math.cos(a*i),e.push(s)}return e}}]),t}(),Ct=function(t){o(s,t);var i=d(s);function s(t){var a;e(this,s),(a=i.call(this,t)).ctx=t,a.w=t.w,a.animBeginArr=[0],a.animDur=0;var r=a.w;return a.startAngle=r.config.plotOptions.radialBar.startAngle,a.endAngle=r.config.plotOptions.radialBar.endAngle,a.totalAngle=Math.abs(r.config.plotOptions.radialBar.endAngle-r.config.plotOptions.radialBar.startAngle),a.trackStartAngle=r.config.plotOptions.radialBar.track.startAngle,a.trackEndAngle=r.config.plotOptions.radialBar.track.endAngle,a.radialDataLabels=r.config.plotOptions.radialBar.dataLabels,a.trackStartAngle||(a.trackStartAngle=a.startAngle),a.trackEndAngle||(a.trackEndAngle=a.endAngle),360===a.endAngle&&(a.endAngle=359.99),a.margin=parseInt(r.config.plotOptions.radialBar.track.margin,10),a}return a(s,[{key:"draw",value:function(t){var e=this.w,i=new b(this.ctx),a=i.group({class:"apexcharts-radialbar"});if(e.globals.noData)return a;var s=i.group(),r=this.defaultSize/2,n=e.globals.gridWidth/2,o=this.defaultSize/2.05;e.config.chart.sparkline.enabled||(o=o-e.config.stroke.width-e.config.chart.dropShadow.blur);var l=e.globals.fill.colors;if(e.config.plotOptions.radialBar.track.show){var h=this.drawTracks({size:o,centerX:n,centerY:r,colorArr:l,series:t});s.add(h)}var c=this.drawArcs({size:o,centerX:n,centerY:r,colorArr:l,series:t}),d=360;e.config.plotOptions.radialBar.startAngle<0&&(d=this.totalAngle);var g=(360-d)/360;if(e.globals.radialSize=o-o*g,this.radialDataLabels.value.show){var u=Math.max(this.radialDataLabels.value.offsetY,this.radialDataLabels.name.offsetY);e.globals.radialSize+=u*g}return s.add(c.g),"front"===e.config.plotOptions.radialBar.hollow.position&&(c.g.add(c.elHollow),c.dataLabels&&c.g.add(c.dataLabels)),a.add(s),a}},{key:"drawTracks",value:function(t){var e=this.w,i=new b(this.ctx),a=i.group({class:"apexcharts-tracks"}),s=new p(this.ctx),r=new L(this.ctx),n=this.getStrokeWidth(t);t.size=t.size-n/2;for(var o=0;o<t.series.length;o++){var l=i.group({class:"apexcharts-radialbar-track apexcharts-track"});a.add(l),l.attr({rel:o+1}),t.size=t.size-n-this.margin;var h=e.config.plotOptions.radialBar.track,c=r.fillPath({seriesNumber:0,size:t.size,fillColors:Array.isArray(h.background)?h.background[o]:h.background,solid:!0}),d=this.trackStartAngle,g=this.trackEndAngle;Math.abs(g)+Math.abs(d)>=360&&(g=360-Math.abs(this.startAngle)-.1);var u=i.drawPath({d:"",stroke:c,strokeWidth:n*parseInt(h.strokeWidth,10)/100,fill:"none",strokeOpacity:h.opacity,classes:"apexcharts-radialbar-area"});if(h.dropShadow.enabled){var f=h.dropShadow;s.dropShadow(u,f)}l.add(u),u.attr("id","apexcharts-radialbarTrack-"+o),this.animatePaths(u,{centerX:t.centerX,centerY:t.centerY,endAngle:g,startAngle:d,size:t.size,i:o,totalItems:2,animBeginArr:0,dur:0,isTrack:!0,easing:e.globals.easing})}return a}},{key:"drawArcs",value:function(t){var e=this.w,i=new b(this.ctx),a=new L(this.ctx),s=new p(this.ctx),r=i.group(),n=this.getStrokeWidth(t);t.size=t.size-n/2;var o=e.config.plotOptions.radialBar.hollow.background,l=t.size-n*t.series.length-this.margin*t.series.length-n*parseInt(e.config.plotOptions.radialBar.track.strokeWidth,10)/100/2,h=l-e.config.plotOptions.radialBar.hollow.margin;void 0!==e.config.plotOptions.radialBar.hollow.image&&(o=this.drawHollowImage(t,r,l,o));var c=this.drawHollow({size:h,centerX:t.centerX,centerY:t.centerY,fill:o||"transparent"});if(e.config.plotOptions.radialBar.hollow.dropShadow.enabled){var d=e.config.plotOptions.radialBar.hollow.dropShadow;s.dropShadow(c,d)}var g=1;!this.radialDataLabels.total.show&&e.globals.series.length>1&&(g=0);var u=null;this.radialDataLabels.show&&(u=this.renderInnerDataLabels(this.radialDataLabels,{hollowSize:l,centerX:t.centerX,centerY:t.centerY,opacity:g})),"back"===e.config.plotOptions.radialBar.hollow.position&&(r.add(c),u&&r.add(u));var x=!1;e.config.plotOptions.radialBar.inverseOrder&&(x=!0);for(var m=x?t.series.length-1:0;x?m>=0:m<t.series.length;x?m--:m++){var v=i.group({class:"apexcharts-series apexcharts-radial-series",seriesName:f.escapeString(e.globals.seriesNames[m])});r.add(v),v.attr({rel:m+1,"data:realIndex":m}),this.ctx.series.addCollapsedClassToSeries(v,m),t.size=t.size-n-this.margin;var y=a.fillPath({seriesNumber:m,size:t.size,value:t.series[m]}),w=this.startAngle,k=void 0,A=f.negToZero(t.series[m]>100?100:t.series[m])/100,S=Math.round(this.totalAngle*A)+this.startAngle,C=void 0;e.globals.dataChanged&&(k=this.startAngle,C=Math.round(this.totalAngle*f.negToZero(e.globals.previousPaths[m])/100)+k),Math.abs(S)+Math.abs(w)>=360&&(S-=.01),Math.abs(C)+Math.abs(k)>=360&&(C-=.01);var P=S-w,T=Array.isArray(e.config.stroke.dashArray)?e.config.stroke.dashArray[m]:e.config.stroke.dashArray,z=i.drawPath({d:"",stroke:y,strokeWidth:n,fill:"none",fillOpacity:e.config.fill.opacity,classes:"apexcharts-radialbar-area apexcharts-radialbar-slice-"+m,strokeDashArray:T});if(b.setAttrs(z.node,{"data:angle":P,"data:value":t.series[m]}),e.config.chart.dropShadow.enabled){var I=e.config.chart.dropShadow;s.dropShadow(z,I,m)}this.addListeners(z,this.radialDataLabels),v.add(z),z.attr({index:0,j:m});var M=0;!this.initialAnim||e.globals.resized||e.globals.dataChanged||(M=(S-w)/360*e.config.chart.animations.speed,this.animDur=M/(1.2*t.series.length)+this.animDur,this.animBeginArr.push(this.animDur)),e.globals.dataChanged&&(M=(S-w)/360*e.config.chart.animations.dynamicAnimation.speed,this.animDur=M/(1.2*t.series.length)+this.animDur,this.animBeginArr.push(this.animDur)),this.animatePaths(z,{centerX:t.centerX,centerY:t.centerY,endAngle:S,startAngle:w,prevEndAngle:C,prevStartAngle:k,size:t.size,i:m,totalItems:2,animBeginArr:this.animBeginArr,dur:M,shouldSetPrevPaths:!0,easing:e.globals.easing})}return{g:r,elHollow:c,dataLabels:u}}},{key:"drawHollow",value:function(t){var e=new b(this.ctx).drawCircle(2*t.size);return e.attr({class:"apexcharts-radialbar-hollow",cx:t.centerX,cy:t.centerY,r:t.size,fill:t.fill}),e}},{key:"drawHollowImage",value:function(t,e,i,a){var s=this.w,r=new L(this.ctx),n=f.randomId(),o=s.config.plotOptions.radialBar.hollow.image;if(s.config.plotOptions.radialBar.hollow.imageClipped)r.clippedImgArea({width:i,height:i,image:o,patternID:"pattern".concat(s.globals.cuid).concat(n)}),a="url(#pattern".concat(s.globals.cuid).concat(n,")");else{var l=s.config.plotOptions.radialBar.hollow.imageWidth,h=s.config.plotOptions.radialBar.hollow.imageHeight;if(void 0===l&&void 0===h){var c=s.globals.dom.Paper.image(o).loaded((function(e){this.move(t.centerX-e.width/2+s.config.plotOptions.radialBar.hollow.imageOffsetX,t.centerY-e.height/2+s.config.plotOptions.radialBar.hollow.imageOffsetY)}));e.add(c)}else{var d=s.globals.dom.Paper.image(o).loaded((function(e){this.move(t.centerX-l/2+s.config.plotOptions.radialBar.hollow.imageOffsetX,t.centerY-h/2+s.config.plotOptions.radialBar.hollow.imageOffsetY),this.size(l,h)}));e.add(d)}}return a}},{key:"getStrokeWidth",value:function(t){var e=this.w;return t.size*(100-parseInt(e.config.plotOptions.radialBar.hollow.size,10))/100/(t.series.length+1)-this.margin}}]),s}(At),Lt=function(){function t(i){e(this,t),this.w=i.w,this.lineCtx=i}return a(t,[{key:"sameValueSeriesFix",value:function(t,e){var i=this.w;if("line"===i.config.chart.type&&("gradient"===i.config.fill.type||"gradient"===i.config.fill.type[t])&&new y(this.lineCtx.ctx,i).seriesHaveSameValues(t)){var a=e[t].slice();a[a.length-1]=a[a.length-1]+1e-6,e[t]=a}return e}},{key:"calculatePoints",value:function(t){var e=t.series,i=t.realIndex,a=t.x,s=t.y,r=t.i,n=t.j,o=t.prevY,l=this.w,h=[],c=[];if(0===n){var d=this.lineCtx.categoryAxisCorrection+l.config.markers.offsetX;l.globals.isXNumeric&&(d=(l.globals.seriesX[i][0]-l.globals.minX)/this.lineCtx.xRatio+l.config.markers.offsetX),h.push(d),c.push(f.isNumber(e[r][0])?o+l.config.markers.offsetY:null),h.push(a+l.config.markers.offsetX),c.push(f.isNumber(e[r][n+1])?s+l.config.markers.offsetY:null)}else h.push(a+l.config.markers.offsetX),c.push(f.isNumber(e[r][n+1])?s+l.config.markers.offsetY:null);return{x:h,y:c}}},{key:"checkPreviousPaths",value:function(t){for(var e=t.pathFromLine,i=t.pathFromArea,a=t.realIndex,s=this.w,r=0;r<s.globals.previousPaths.length;r++){var n=s.globals.previousPaths[r];("line"===n.type||"area"===n.type)&&n.paths.length>0&&parseInt(n.realIndex,10)===parseInt(a,10)&&("line"===n.type?(this.lineCtx.appendPathFrom=!1,e=s.globals.previousPaths[r].paths[0].d):"area"===n.type&&(this.lineCtx.appendPathFrom=!1,i=s.globals.previousPaths[r].paths[0].d,s.config.stroke.show&&s.globals.previousPaths[r].paths[1]&&(e=s.globals.previousPaths[r].paths[1].d)))}return{pathFromLine:e,pathFromArea:i}}},{key:"determineFirstPrevY",value:function(t){var e=t.i,i=t.series,a=t.prevY,s=t.lineYPosition,r=this.w;if(void 0!==i[e][0])a=(s=r.config.chart.stacked&&e>0?this.lineCtx.prevSeriesY[e-1][0]:this.lineCtx.zeroY)-i[e][0]/this.lineCtx.yRatio[this.lineCtx.yaxisIndex]+2*(this.lineCtx.isReversed?i[e][0]/this.lineCtx.yRatio[this.lineCtx.yaxisIndex]:0);else if(r.config.chart.stacked&&e>0&&void 0===i[e][0])for(var n=e-1;n>=0;n--)if(null!==i[n][0]&&void 0!==i[n][0]){a=s=this.lineCtx.prevSeriesY[n][0];break}return{prevY:a,lineYPosition:s}}}]),t}(),Pt=function(){function t(i,a,s){e(this,t),this.ctx=i,this.w=i.w,this.xyRatios=a,this.pointsChart=!("bubble"!==this.w.config.chart.type&&"scatter"!==this.w.config.chart.type)||s,this.scatter=new T(this.ctx),this.noNegatives=this.w.globals.minX===Number.MAX_VALUE,this.lineHelpers=new Lt(this),this.markers=new P(this.ctx),this.prevSeriesY=[],this.categoryAxisCorrection=0,this.yaxisIndex=0}return a(t,[{key:"draw",value:function(t,e,i){var a=this.w,s=new b(this.ctx),r=a.globals.comboCharts?e:a.config.chart.type,n=s.group({class:"apexcharts-".concat(r,"-series apexcharts-plot-series")}),o=new y(this.ctx,a);this.yRatio=this.xyRatios.yRatio,this.zRatio=this.xyRatios.zRatio,this.xRatio=this.xyRatios.xRatio,this.baseLineY=this.xyRatios.baseLineY,t=o.getLogSeries(t),this.yRatio=o.getLogYRatios(this.yRatio);for(var l=[],h=0;h<t.length;h++){t=this.lineHelpers.sameValueSeriesFix(h,t);var c=a.globals.comboCharts?i[h]:h;this._initSerieVariables(t,h,c);var d=[],g=[],u=a.globals.padHorizontal+this.categoryAxisCorrection;this.ctx.series.addCollapsedClassToSeries(this.elSeries,c),a.globals.isXNumeric&&a.globals.seriesX.length>0&&(u=(a.globals.seriesX[c][0]-a.globals.minX)/this.xRatio),g.push(u);var f,p=u,x=p,m=this.zeroY;m=this.lineHelpers.determineFirstPrevY({i:h,series:t,prevY:m,lineYPosition:0}).prevY,d.push(m),f=m;var v=this._calculatePathsFrom({series:t,i:h,realIndex:c,prevX:x,prevY:m}),w=this._iterateOverDataPoints({series:t,realIndex:c,i:h,x:u,y:1,pX:p,pY:f,pathsFrom:v,linePaths:[],areaPaths:[],seriesIndex:i,lineYPosition:0,xArrj:g,yArrj:d});this._handlePaths({type:r,realIndex:c,i:h,paths:w}),this.elSeries.add(this.elPointsMain),this.elSeries.add(this.elDataLabelsWrap),l.push(this.elSeries)}if(a.config.chart.stacked)for(var k=l.length;k>0;k--)n.add(l[k-1]);else for(var A=0;A<l.length;A++)n.add(l[A]);return n}},{key:"_initSerieVariables",value:function(t,e,i){var a=this.w,s=new b(this.ctx);this.xDivision=a.globals.gridWidth/(a.globals.dataPoints-("on"===a.config.xaxis.tickPlacement?1:0)),this.strokeWidth=Array.isArray(a.config.stroke.width)?a.config.stroke.width[i]:a.config.stroke.width,this.yRatio.length>1&&(this.yaxisIndex=i),this.isReversed=a.config.yaxis[this.yaxisIndex]&&a.config.yaxis[this.yaxisIndex].reversed,this.zeroY=a.globals.gridHeight-this.baseLineY[this.yaxisIndex]-(this.isReversed?a.globals.gridHeight:0)+(this.isReversed?2*this.baseLineY[this.yaxisIndex]:0),this.areaBottomY=this.zeroY,(this.zeroY>a.globals.gridHeight||"end"===a.config.plotOptions.area.fillTo)&&(this.areaBottomY=a.globals.gridHeight),this.categoryAxisCorrection=this.xDivision/2,this.elSeries=s.group({class:"apexcharts-series",seriesName:f.escapeString(a.globals.seriesNames[i])}),this.elPointsMain=s.group({class:"apexcharts-series-markers-wrap","data:realIndex":i}),this.elDataLabelsWrap=s.group({class:"apexcharts-datalabels","data:realIndex":i});var r=t[e].length===a.globals.dataPoints;this.elSeries.attr({"data:longestSeries":r,rel:e+1,"data:realIndex":i}),this.appendPathFrom=!0}},{key:"_calculatePathsFrom",value:function(t){var e,i,a,s,r=t.series,n=t.i,o=t.realIndex,l=t.prevX,h=t.prevY,c=this.w,d=new b(this.ctx);if(null===r[n][0]){for(var g=0;g<r[n].length;g++)if(null!==r[n][g]){l=this.xDivision*g,h=this.zeroY-r[n][g]/this.yRatio[this.yaxisIndex],e=d.move(l,h),i=d.move(l,this.areaBottomY);break}}else e=d.move(l,h),i=d.move(l,this.areaBottomY)+d.line(l,h);if(a=d.move(-1,this.zeroY)+d.line(-1,this.zeroY),s=d.move(-1,this.zeroY)+d.line(-1,this.zeroY),c.globals.previousPaths.length>0){var u=this.lineHelpers.checkPreviousPaths({pathFromLine:a,pathFromArea:s,realIndex:o});a=u.pathFromLine,s=u.pathFromArea}return{prevX:l,prevY:h,linePath:e,areaPath:i,pathFromLine:a,pathFromArea:s}}},{key:"_handlePaths",value:function(t){var e=t.type,i=t.realIndex,a=t.i,s=t.paths,r=this.w,o=new b(this.ctx),l=new L(this.ctx);this.prevSeriesY.push(s.yArrj),r.globals.seriesXvalues[i]=s.xArrj,r.globals.seriesYvalues[i]=s.yArrj,this.pointsChart||r.globals.delayedElements.push({el:this.elPointsMain.node,index:i});var h={i:a,realIndex:i,animationDelay:a,initialSpeed:r.config.chart.animations.speed,dataChangeSpeed:r.config.chart.animations.dynamicAnimation.speed,className:"apexcharts-".concat(e)};if("area"===e)for(var c=l.fillPath({seriesNumber:i}),d=0;d<s.areaPaths.length;d++){var g=o.renderPaths(n(n({},h),{},{pathFrom:s.pathFromArea,pathTo:s.areaPaths[d],stroke:"none",strokeWidth:0,strokeLineCap:null,fill:c}));this.elSeries.add(g)}if(r.config.stroke.show&&!this.pointsChart){var u=null;u="line"===e?l.fillPath({seriesNumber:i,i:a}):r.globals.stroke.colors[i];for(var f=0;f<s.linePaths.length;f++){var p=o.renderPaths(n(n({},h),{},{pathFrom:s.pathFromLine,pathTo:s.linePaths[f],stroke:u,strokeWidth:this.strokeWidth,strokeLineCap:r.config.stroke.lineCap,fill:"none"}));this.elSeries.add(p)}}}},{key:"_iterateOverDataPoints",value:function(t){for(var e=t.series,i=t.realIndex,a=t.i,s=t.x,r=t.y,n=t.pX,o=t.pY,l=t.pathsFrom,h=t.linePaths,c=t.areaPaths,d=t.seriesIndex,g=t.lineYPosition,u=t.xArrj,p=t.yArrj,x=this.w,m=new b(this.ctx),v=this.yRatio,y=l.prevY,w=l.linePath,k=l.areaPath,A=l.pathFromLine,S=l.pathFromArea,C=f.isNumber(x.globals.minYArr[i])?x.globals.minYArr[i]:x.globals.minY,L=x.globals.dataPoints>1?x.globals.dataPoints-1:x.globals.dataPoints,P=0;P<L;P++){var T=void 0===e[a][P+1]||null===e[a][P+1];if(x.globals.isXNumeric){var z=x.globals.seriesX[i][P+1];void 0===x.globals.seriesX[i][P+1]&&(z=x.globals.seriesX[i][L-1]),s=(z-x.globals.minX)/this.xRatio}else s+=this.xDivision;if(x.config.chart.stacked)if(a>0&&x.globals.collapsedSeries.length<x.config.series.length-1){g=this.prevSeriesY[function(t){for(var e=t,i=0;i<x.globals.series.length;i++)if(x.globals.collapsedSeriesIndices.indexOf(t)>-1){e--;break}return e>=0?e:0}(a-1)][P+1]}else g=this.zeroY;else g=this.zeroY;r=T?g-C/v[this.yaxisIndex]+2*(this.isReversed?C/v[this.yaxisIndex]:0):g-e[a][P+1]/v[this.yaxisIndex]+2*(this.isReversed?e[a][P+1]/v[this.yaxisIndex]:0),u.push(s),p.push(r);var I=this.lineHelpers.calculatePoints({series:e,x:s,y:r,realIndex:i,i:a,j:P,prevY:y}),M=this._createPaths({series:e,i:a,realIndex:i,j:P,x:s,y:r,pX:n,pY:o,linePath:w,areaPath:k,linePaths:h,areaPaths:c,seriesIndex:d});c=M.areaPaths,h=M.linePaths,n=M.pX,o=M.pY,k=M.areaPath,w=M.linePath,this.appendPathFrom&&(A+=m.line(s,this.zeroY),S+=m.line(s,this.zeroY)),this.handleNullDataPoints(e,I,a,P,i),this._handleMarkersAndLabels({pointsPos:I,series:e,x:s,y:r,prevY:y,i:a,j:P,realIndex:i})}return{yArrj:p,xArrj:u,pathFromArea:S,areaPaths:c,pathFromLine:A,linePaths:h}}},{key:"_handleMarkersAndLabels",value:function(t){var e=t.pointsPos,i=(t.series,t.x,t.y,t.prevY,t.i),a=t.j,s=t.realIndex,r=this.w,n=new z(this.ctx);if(this.pointsChart)this.scatter.draw(this.elSeries,a,{realIndex:s,pointsPos:e,zRatio:this.zRatio,elParent:this.elPointsMain});else{r.globals.series[i].length>1&&this.elPointsMain.node.classList.add("apexcharts-element-hidden");var o=this.markers.plotChartMarkers(e,s,a+1);null!==o&&this.elPointsMain.add(o)}var l=n.drawDataLabel(e,s,a+1,null);null!==l&&this.elDataLabelsWrap.add(l)}},{key:"_createPaths",value:function(t){var e=t.series,i=t.i,a=t.realIndex,s=t.j,r=t.x,n=t.y,o=t.pX,l=t.pY,h=t.linePath,c=t.areaPath,d=t.linePaths,g=t.areaPaths,u=t.seriesIndex,f=this.w,p=new b(this.ctx),x=f.config.stroke.curve,m=this.areaBottomY;if(Array.isArray(f.config.stroke.curve)&&(x=Array.isArray(u)?f.config.stroke.curve[u[i]]:f.config.stroke.curve[i]),"smooth"===x){var v=.35*(r-o);f.globals.hasNullValues?(null!==e[i][s]&&(null!==e[i][s+1]?(h=p.move(o,l)+p.curve(o+v,l,r-v,n,r+1,n),c=p.move(o+1,l)+p.curve(o+v,l,r-v,n,r+1,n)+p.line(r,m)+p.line(o,m)+"z"):(h=p.move(o,l),c=p.move(o,l)+"z")),d.push(h),g.push(c)):(h+=p.curve(o+v,l,r-v,n,r,n),c+=p.curve(o+v,l,r-v,n,r,n)),o=r,l=n,s===e[i].length-2&&(c=c+p.curve(o,l,r,n,r,m)+p.move(r,n)+"z",f.globals.hasNullValues||(d.push(h),g.push(c)))}else{if(null===e[i][s+1]){h+=p.move(r,n);var y=f.globals.isXNumeric?(f.globals.seriesX[a][s]-f.globals.minX)/this.xRatio:r-this.xDivision;c=c+p.line(y,m)+p.move(r,n)+"z"}null===e[i][s]&&(h+=p.move(r,n),c+=p.move(r,m)),"stepline"===x?(h=h+p.line(r,null,"H")+p.line(null,n,"V"),c=c+p.line(r,null,"H")+p.line(null,n,"V")):"straight"===x&&(h+=p.line(r,n),c+=p.line(r,n)),s===e[i].length-2&&(c=c+p.line(r,m)+p.move(r,n)+"z",d.push(h),g.push(c))}return{linePaths:d,areaPaths:g,pX:o,pY:l,linePath:h,areaPath:c}}},{key:"handleNullDataPoints",value:function(t,e,i,a,s){var r=this.w;if(null===t[i][a]&&r.config.markers.showNullDataPoints||1===t[i].length){var n=this.markers.plotChartMarkers(e,s,a+1,this.strokeWidth-r.config.markers.strokeWidth/2,!0);null!==n&&this.elPointsMain.add(n)}}}]),t}();window.TreemapSquared={},window.TreemapSquared.generate=function(){function t(e,i,a,s){this.xoffset=e,this.yoffset=i,this.height=s,this.width=a,this.shortestEdge=function(){return Math.min(this.height,this.width)},this.getCoordinates=function(t){var e,i=[],a=this.xoffset,s=this.yoffset,n=r(t)/this.height,o=r(t)/this.width;if(this.width>=this.height)for(e=0;e<t.length;e++)i.push([a,s,a+n,s+t[e]/n]),s+=t[e]/n;else for(e=0;e<t.length;e++)i.push([a,s,a+t[e]/o,s+o]),a+=t[e]/o;return i},this.cutArea=function(e){var i;if(this.width>=this.height){var a=e/this.height,s=this.width-a;i=new t(this.xoffset+a,this.yoffset,s,this.height)}else{var r=e/this.width,n=this.height-r;i=new t(this.xoffset,this.yoffset+r,this.width,n)}return i}}function e(e,a,s,n,o){return n=void 0===n?0:n,o=void 0===o?0:o,function(t){var e,i,a=[];for(e=0;e<t.length;e++)for(i=0;i<t[e].length;i++)a.push(t[e][i]);return a}(i(function(t,e){var i,a=[],s=e/r(t);for(i=0;i<t.length;i++)a[i]=t[i]*s;return a}(e,a*s),[],new t(n,o,a,s),[]))}function i(t,e,s,n){var o,l,h;if(0!==t.length)return o=s.shortestEdge(),function(t,e,i){var s;if(0===t.length)return!0;(s=t.slice()).push(e);var r=a(t,i),n=a(s,i);return r>=n}(e,l=t[0],o)?(e.push(l),i(t.slice(1),e,s,n)):(h=s.cutArea(r(e),n),n.push(s.getCoordinates(e)),i(t,[],h,n)),n;n.push(s.getCoordinates(e))}function a(t,e){var i=Math.min.apply(Math,t),a=Math.max.apply(Math,t),s=r(t);return Math.max(Math.pow(e,2)*a/Math.pow(s,2),Math.pow(s,2)/(Math.pow(e,2)*i))}function s(t){return t&&t.constructor===Array}function r(t){var e,i=0;for(e=0;e<t.length;e++)i+=t[e];return i}function n(t){var e,i=0;if(s(t[0]))for(e=0;e<t.length;e++)i+=n(t[e]);else i=r(t);return i}return function t(i,a,r,o,l){o=void 0===o?0:o,l=void 0===l?0:l;var h,c,d=[],g=[];if(s(i[0])){for(c=0;c<i.length;c++)d[c]=n(i[c]);for(h=e(d,a,r,o,l),c=0;c<i.length;c++)g.push(t(i[c],h[c][2]-h[c][0],h[c][3]-h[c][1],h[c][0],h[c][1]))}else g=e(i,a,r,o,l);return g}}();var Tt,zt,It=function(){function t(i,a){e(this,t),this.ctx=i,this.w=i.w,this.strokeWidth=this.w.config.stroke.width,this.helpers=new yt(i),this.dynamicAnim=this.w.config.chart.animations.dynamicAnimation,this.labels=[]}return a(t,[{key:"draw",value:function(t){var e=this,i=this.w,a=new b(this.ctx),s=new L(this.ctx),r=a.group({class:"apexcharts-treemap"});if(i.globals.noData)return r;var n=[];return t.forEach((function(t){var e=t.map((function(t){return Math.abs(t)}));n.push(e)})),this.negRange=this.helpers.checkColorRange(),i.config.series.forEach((function(t,i){t.data.forEach((function(t){Array.isArray(e.labels[i])||(e.labels[i]=[]),e.labels[i].push(t.x)}))})),window.TreemapSquared.generate(n,i.globals.gridWidth,i.globals.gridHeight).forEach((function(n,o){var l=a.group({class:"apexcharts-series apexcharts-treemap-series",seriesName:f.escapeString(i.globals.seriesNames[o]),rel:o+1,"data:realIndex":o});if(i.config.chart.dropShadow.enabled){var h=i.config.chart.dropShadow;new p(e.ctx).dropShadow(r,h,o)}var c=a.group({class:"apexcharts-data-labels"});n.forEach((function(r,n){var h=r[0],c=r[1],d=r[2],g=r[3],u=a.drawRect(h,c,d-h,g-c,0,"#fff",1,e.strokeWidth,i.config.plotOptions.treemap.useFillColorAsStroke?p:i.globals.stroke.colors[o]);u.attr({cx:h,cy:c,index:o,i:o,j:n,width:d-h,height:g-c});var f=e.helpers.getShadeColor(i.config.chart.type,o,n,e.negRange),p=f.color;void 0!==i.config.series[o].data[n]&&i.config.series[o].data[n].fillColor&&(p=i.config.series[o].data[n].fillColor);var x=s.fillPath({color:p,seriesNumber:o,dataPointIndex:n});u.node.classList.add("apexcharts-treemap-rect"),u.attr({fill:x}),e.helpers.addListeners(u);var b={x:h+(d-h)/2,y:c+(g-c)/2,width:0,height:0},m={x:h,y:c,width:d-h,height:g-c};if(i.config.chart.animations.enabled&&!i.globals.dataChanged){var v=1;i.globals.resized||(v=i.config.chart.animations.speed),e.animateTreemap(u,b,m,v)}if(i.globals.dataChanged){var y=1;e.dynamicAnim.enabled&&i.globals.shouldAnimate&&(y=e.dynamicAnim.speed,i.globals.previousPaths[o][n]&&i.globals.previousPaths[o][n].rect&&(b=i.globals.previousPaths[o][n].rect),e.animateTreemap(u,b,m,y))}var w=e.getFontSize(r),k=i.config.dataLabels.formatter(e.labels[o][n],{value:i.globals.series[o][n],seriesIndex:o,dataPointIndex:n,w:i}),A=e.helpers.calculateDataLabels({text:k,x:(h+d)/2,y:(c+g)/2+e.strokeWidth/2+w/3,i:o,j:n,colorProps:f,fontSize:w,series:t});i.config.dataLabels.enabled&&A&&e.rotateToFitLabel(A,k,h,c,d,g),l.add(u),null!==A&&l.add(A)})),l.add(c),r.add(l)})),r}},{key:"getFontSize",value:function(t){var e=this.w;var i,a,s,r,n=function t(e){var i,a=0;if(Array.isArray(e[0]))for(i=0;i<e.length;i++)a+=t(e[i]);else for(i=0;i<e.length;i++)a+=e[i].length;return a}(this.labels)/function t(e){var i,a=0;if(Array.isArray(e[0]))for(i=0;i<e.length;i++)a+=t(e[i]);else for(i=0;i<e.length;i++)a+=1;return a}(this.labels);return i=t[2]-t[0],a=t[3]-t[1],s=i*a,r=Math.pow(s,.5),Math.min(r/n,parseInt(e.config.dataLabels.style.fontSize,10))}},{key:"rotateToFitLabel",value:function(t,e,i,a,s,r){var n=new b(this.ctx),o=n.getTextRects(e);if(o.width+5>s-i&&o.width<=r-a){var l=n.rotateAroundCenter(t.node);t.node.setAttribute("transform","rotate(-90 ".concat(l.x," ").concat(l.y,")"))}}},{key:"animateTreemap",value:function(t,e,i,a){var s=new x(this.ctx);s.animateRect(t,{x:e.x,y:e.y,width:e.width,height:e.height},{x:i.x,y:i.y,width:i.width,height:i.height},a,(function(){s.animationCompleted(t)}))}}]),t}(),Mt=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w,this.timeScaleArray=[],this.utc=this.w.config.xaxis.labels.datetimeUTC}return a(t,[{key:"calculateTimeScaleTicks",value:function(t,e){var i=this,a=this.w;if(a.globals.allSeriesCollapsed)return a.globals.labels=[],a.globals.timescaleLabels=[],[];var s=new Y(this.ctx),r=(e-t)/864e5;this.determineInterval(r),a.globals.disableZoomIn=!1,a.globals.disableZoomOut=!1,r<.005?a.globals.disableZoomIn=!0:r>5e4&&(a.globals.disableZoomOut=!0);var o=s.getTimeUnitsfromTimestamp(t,e,this.utc),l=a.globals.gridWidth/r,h=l/24,c=h/60,d=c/60,g=Math.floor(24*r),u=Math.floor(24*r*60),f=Math.floor(24*r*60*60),p=Math.floor(r),x=Math.floor(r/30),b=Math.floor(r/365),m={minSecond:o.minSecond,minMinute:o.minMinute,minHour:o.minHour,minDate:o.minDate,minMonth:o.minMonth,minYear:o.minYear},v={firstVal:m,currentSecond:m.minSecond,currentMinute:m.minMinute,currentHour:m.minHour,currentMonthDate:m.minDate,currentDate:m.minDate,currentMonth:m.minMonth,currentYear:m.minYear,daysWidthOnXAxis:l,hoursWidthOnXAxis:h,minutesWidthOnXAxis:c,secondsWidthOnXAxis:d,numberOfSeconds:f,numberOfMinutes:u,numberOfHours:g,numberOfDays:p,numberOfMonths:x,numberOfYears:b};switch(this.tickInterval){case"years":this.generateYearScale(v);break;case"months":case"half_year":this.generateMonthScale(v);break;case"months_days":case"months_fortnight":case"days":case"week_days":this.generateDayScale(v);break;case"hours":this.generateHourScale(v);break;case"minutes":this.generateMinuteScale(v)}var y=this.timeScaleArray.map((function(t){var e={position:t.position,unit:t.unit,year:t.year,day:t.day?t.day:1,hour:t.hour?t.hour:0,month:t.month+1};return"month"===t.unit?n(n({},e),{},{day:1,value:t.value+1}):"day"===t.unit||"hour"===t.unit?n(n({},e),{},{value:t.value}):"minute"===t.unit?n(n({},e),{},{value:t.value,minute:t.value}):t}));return y.filter((function(t){var e=1,s=Math.ceil(a.globals.gridWidth/120),r=t.value;void 0!==a.config.xaxis.tickAmount&&(s=a.config.xaxis.tickAmount),y.length>s&&(e=Math.floor(y.length/s));var n=!1,o=!1;switch(i.tickInterval){case"years":"year"===t.unit&&(n=!0);break;case"half_year":e=7,"year"===t.unit&&(n=!0);break;case"months":e=1,"year"===t.unit&&(n=!0);break;case"months_fortnight":e=15,"year"!==t.unit&&"month"!==t.unit||(n=!0),30===r&&(o=!0);break;case"months_days":e=10,"month"===t.unit&&(n=!0),30===r&&(o=!0);break;case"week_days":e=8,"month"===t.unit&&(n=!0);break;case"days":e=1,"month"===t.unit&&(n=!0);break;case"hours":"day"===t.unit&&(n=!0);break;case"minutes":r%5!=0&&(o=!0)}if("minutes"===i.tickInterval||"hours"===i.tickInterval){if(!o)return!0}else if((r%e==0||n)&&!o)return!0}))}},{key:"recalcDimensionsBasedOnFormat",value:function(t,e){var i=this.w,a=this.formatDates(t),s=this.removeOverlappingTS(a);i.globals.timescaleLabels=s.slice(),new nt(this.ctx).plotCoords()}},{key:"determineInterval",value:function(t){switch(!0){case t>1825:this.tickInterval="years";break;case t>800&&t<=1825:this.tickInterval="half_year";break;case t>180&&t<=800:this.tickInterval="months";break;case t>90&&t<=180:this.tickInterval="months_fortnight";break;case t>60&&t<=90:this.tickInterval="months_days";break;case t>30&&t<=60:this.tickInterval="week_days";break;case t>2&&t<=30:this.tickInterval="days";break;case t>.1&&t<=2:this.tickInterval="hours";break;case t<.1:this.tickInterval="minutes";break;default:this.tickInterval="days"}}},{key:"generateYearScale",value:function(t){var e=t.firstVal,i=t.currentMonth,a=t.currentYear,s=t.daysWidthOnXAxis,r=t.numberOfYears,n=e.minYear,o=0,l=new Y(this.ctx),h="year";if(e.minDate>1||e.minMonth>0){var c=l.determineRemainingDaysOfYear(e.minYear,e.minMonth,e.minDate);o=(l.determineDaysOfYear(e.minYear)-c+1)*s,n=e.minYear+1,this.timeScaleArray.push({position:o,value:n,unit:h,year:n,month:f.monthMod(i+1)})}else 1===e.minDate&&0===e.minMonth&&this.timeScaleArray.push({position:o,value:n,unit:h,year:a,month:f.monthMod(i+1)});for(var d=n,g=o,u=0;u<r;u++)d++,g=l.determineDaysOfYear(d-1)*s+g,this.timeScaleArray.push({position:g,value:d,unit:h,year:d,month:1})}},{key:"generateMonthScale",value:function(t){var e=t.firstVal,i=t.currentMonthDate,a=t.currentMonth,s=t.currentYear,r=t.daysWidthOnXAxis,n=t.numberOfMonths,o=a,l=0,h=new Y(this.ctx),c="month",d=0;if(e.minDate>1){l=(h.determineDaysOfMonths(a+1,e.minYear)-i+1)*r,o=f.monthMod(a+1);var g=s+d,u=f.monthMod(o),p=o;0===o&&(c="year",p=g,u=1,g+=d+=1),this.timeScaleArray.push({position:l,value:p,unit:c,year:g,month:u})}else this.timeScaleArray.push({position:l,value:o,unit:c,year:s,month:f.monthMod(a)});for(var x=o+1,b=l,m=0,v=1;m<n;m++,v++){0===(x=f.monthMod(x))?(c="year",d+=1):c="month";var y=this._getYear(s,x,d);b=h.determineDaysOfMonths(x,y)*r+b;var w=0===x?y:x;this.timeScaleArray.push({position:b,value:w,unit:c,year:y,month:0===x?1:x}),x++}}},{key:"generateDayScale",value:function(t){var e=t.firstVal,i=t.currentMonth,a=t.currentYear,s=t.hoursWidthOnXAxis,r=t.numberOfDays,n=new Y(this.ctx),o="day",l=e.minDate+1,h=l,c=function(t,e,i){return t>n.determineDaysOfMonths(e+1,i)?(h=1,o="month",g=e+=1,e):e},d=(24-e.minHour)*s,g=l,u=c(h,i,a);0===e.minHour&&1===e.minDate&&(d=0,g=f.monthMod(e.minMonth),o="month",h=e.minDate,r++),this.timeScaleArray.push({position:d,value:g,unit:o,year:this._getYear(a,u,0),month:f.monthMod(u),day:h});for(var p=d,x=0;x<r;x++){o="day",u=c(h+=1,u,this._getYear(a,u,0));var b=this._getYear(a,u,0);p=24*s+p;var m=1===h?f.monthMod(u):h;this.timeScaleArray.push({position:p,value:m,unit:o,year:b,month:f.monthMod(u),day:m})}}},{key:"generateHourScale",value:function(t){var e=t.firstVal,i=t.currentDate,a=t.currentMonth,s=t.currentYear,r=t.minutesWidthOnXAxis,n=t.numberOfHours,o=new Y(this.ctx),l="hour",h=function(t,e){return t>o.determineDaysOfMonths(e+1,s)&&(x=1,e+=1),{month:e,date:x}},c=function(t,e){return t>o.determineDaysOfMonths(e+1,s)?e+=1:e},d=60-(e.minMinute+e.minSecond/60),g=d*r,u=e.minHour+1,p=u+1;60===d&&(g=0,p=(u=e.minHour)+1);var x=i,b=c(x,a);this.timeScaleArray.push({position:g,value:u,unit:l,day:x,hour:p,year:s,month:f.monthMod(b)});for(var m=g,v=0;v<n;v++){if(l="hour",p>=24)p=0,l="day",b=h(x+=1,b).month,b=c(x,b);var y=this._getYear(s,b,0);m=0===p&&0===v?d*r:60*r+m;var w=0===p?x:p;this.timeScaleArray.push({position:m,value:w,unit:l,hour:p,day:x,year:y,month:f.monthMod(b)}),p++}}},{key:"generateMinuteScale",value:function(t){var e=t.firstVal,i=(t.currentSecond,t.currentMinute,t.currentHour),a=t.currentDate,s=t.currentMonth,r=t.currentYear,n=t.minutesWidthOnXAxis,o=t.secondsWidthOnXAxis,l=t.numberOfMinutes,h="minute",c=(60-e.minSecond)*o,d=e.minMinute+1,g=d+1,u=a,p=s,x=r,b=i;this.timeScaleArray.push({position:c,value:d,unit:h,day:u,hour:b,minute:g,year:x,month:f.monthMod(p)});for(var m=c,v=0;v<l;v++)g>=60&&(g=0,24===(b+=1)&&(b=0)),m=n+m,this.timeScaleArray.push({position:m,value:g,unit:h,hour:b,minute:g,day:u,year:this._getYear(r,p,0),month:f.monthMod(p)}),g++}},{key:"createRawDateString",value:function(t,e){var i=t.year;return i+="-"+("0"+t.month.toString()).slice(-2),"day"===t.unit?i+="day"===t.unit?"-"+("0"+e).slice(-2):"-01":i+="-"+("0"+(t.day?t.day:"1")).slice(-2),"hour"===t.unit?i+="hour"===t.unit?"T"+("0"+e).slice(-2):"T00":i+="T"+("0"+(t.hour?t.hour:"0")).slice(-2),i+="minute"===t.unit?":"+("0"+e).slice(-2)+":00":":00:00",this.utc&&(i+=".000Z"),i}},{key:"formatDates",value:function(t){var e=this,i=this.w;return t.map((function(t){var a=t.value.toString(),s=new Y(e.ctx),r=e.createRawDateString(t,a),n=s.getDate(s.parseDate(r));if(e.utc||(n=s.getDate(s.parseDateWithTimezone(r))),void 0===i.config.xaxis.labels.format){var o="dd MMM",l=i.config.xaxis.labels.datetimeFormatter;"year"===t.unit&&(o=l.year),"month"===t.unit&&(o=l.month),"day"===t.unit&&(o=l.day),"hour"===t.unit&&(o=l.hour),"minute"===t.unit&&(o=l.minute),a=s.formatDate(n,o)}else a=s.formatDate(n,i.config.xaxis.labels.format);return{dateString:r,position:t.position,value:a,unit:t.unit,year:t.year,month:t.month}}))}},{key:"removeOverlappingTS",value:function(t){var e,i=this,a=new b(this.ctx),s=!1;t.length>0&&t[0].value&&t.every((function(e){return e.value.length===t[0].value.length}))&&(s=!0,e=a.getTextRects(t[0].value).width);var r=0,n=t.map((function(n,o){if(o>0&&i.w.config.xaxis.labels.hideOverlappingLabels){var l=s?e:a.getTextRects(t[r].value).width,h=t[r].position;return n.position>h+l+10?(r=o,n):null}return n}));return n=n.filter((function(t){return null!==t}))}},{key:"_getYear",value:function(t,e,i){return t+Math.floor(e/12)+i}}]),t}(),Et=function(){function t(i,a){e(this,t),this.ctx=a,this.w=a.w,this.el=i}return a(t,[{key:"setupElements",value:function(){var t=this.w.globals,e=this.w.config,i=e.chart.type;t.axisCharts=["line","area","bar","rangeBar","candlestick","scatter","bubble","radar","heatmap","treemap"].indexOf(i)>-1,t.xyCharts=["line","area","bar","rangeBar","candlestick","scatter","bubble"].indexOf(i)>-1,t.isBarHorizontal=("bar"===e.chart.type||"rangeBar"===e.chart.type)&&e.plotOptions.bar.horizontal,t.chartClass=".apexcharts"+t.chartID,t.dom.baseEl=this.el,t.dom.elWrap=document.createElement("div"),b.setAttrs(t.dom.elWrap,{id:t.chartClass.substring(1),class:"apexcharts-canvas "+t.chartClass.substring(1)}),this.el.appendChild(t.dom.elWrap),t.dom.Paper=new window.SVG.Doc(t.dom.elWrap),t.dom.Paper.attr({class:"apexcharts-svg","xmlns:data":"ApexChartsNS",transform:"translate(".concat(e.chart.offsetX,", ").concat(e.chart.offsetY,")")}),t.dom.Paper.node.style.background=e.chart.background,this.setSVGDimensions(),t.dom.elGraphical=t.dom.Paper.group().attr({class:"apexcharts-inner apexcharts-graphical"}),t.dom.elAnnotations=t.dom.Paper.group().attr({class:"apexcharts-annotations"}),t.dom.elDefs=t.dom.Paper.defs(),t.dom.elLegendWrap=document.createElement("div"),t.dom.elLegendWrap.classList.add("apexcharts-legend"),t.dom.elWrap.appendChild(t.dom.elLegendWrap),t.dom.Paper.add(t.dom.elGraphical),t.dom.elGraphical.add(t.dom.elDefs)}},{key:"plotChartType",value:function(t,e){var i=this.w,a=i.config,s=i.globals,r={series:[],i:[]},n={series:[],i:[]},o={series:[],i:[]},l={series:[],i:[]},h={series:[],i:[]},c={series:[],i:[]};s.series.map((function(e,d){void 0!==t[d].type?("column"===t[d].type||"bar"===t[d].type?(s.series.length>1&&a.plotOptions.bar.horizontal&&console.warn("Horizontal bars are not supported in a mixed/combo chart. Please turn off `plotOptions.bar.horizontal`"),h.series.push(e),h.i.push(d),i.globals.columnSeries=h.series):"area"===t[d].type?(n.series.push(e),n.i.push(d)):"line"===t[d].type?(r.series.push(e),r.i.push(d)):"scatter"===t[d].type?(o.series.push(e),o.i.push(d)):"bubble"===t[d].type?(l.series.push(e),l.i.push(d)):"candlestick"===t[d].type?(c.series.push(e),c.i.push(d)):console.warn("You have specified an unrecognized chart type. Available types for this propery are line/area/column/bar/scatter/bubble"),s.comboCharts=!0):(r.series.push(e),r.i.push(d))}));var d=new Pt(this.ctx,e),g=new vt(this.ctx,e);this.ctx.pie=new At(this.ctx);var u=new Ct(this.ctx);this.ctx.rangeBar=new F(this.ctx,e);var f=new St(this.ctx),p=[];if(s.comboCharts){if(n.series.length>0&&p.push(d.draw(n.series,"area",n.i)),h.series.length>0)if(i.config.chart.stacked){var x=new mt(this.ctx,e);p.push(x.draw(h.series,h.i))}else{var b=new X(this.ctx,e);p.push(b.draw(h.series,h.i))}if(r.series.length>0&&p.push(d.draw(r.series,"line",r.i)),c.series.length>0&&p.push(g.draw(c.series,c.i)),o.series.length>0){var m=new Pt(this.ctx,e,!0);p.push(m.draw(o.series,"scatter",o.i))}if(l.series.length>0){var v=new Pt(this.ctx,e,!0);p.push(v.draw(l.series,"bubble",l.i))}}else switch(a.chart.type){case"line":p=d.draw(s.series,"line");break;case"area":p=d.draw(s.series,"area");break;case"bar":if(a.chart.stacked)p=new mt(this.ctx,e).draw(s.series);else p=new X(this.ctx,e).draw(s.series);break;case"candlestick":p=new vt(this.ctx,e).draw(s.series);break;case"rangeBar":p=this.ctx.rangeBar.draw(s.series);break;case"heatmap":p=new wt(this.ctx,e).draw(s.series);break;case"treemap":p=new It(this.ctx,e).draw(s.series);break;case"pie":case"donut":case"polarArea":p=this.ctx.pie.draw(s.series);break;case"radialBar":p=u.draw(s.series);break;case"radar":p=f.draw(s.series);break;default:p=d.draw(s.series)}return p}},{key:"setSVGDimensions",value:function(){var t=this.w.globals,e=this.w.config;t.svgWidth=e.chart.width,t.svgHeight=e.chart.height;var i=f.getDimensions(this.el),a=e.chart.width.toString().split(/[0-9]+/g).pop();"%"===a?f.isNumber(i[0])&&(0===i[0].width&&(i=f.getDimensions(this.el.parentNode)),t.svgWidth=i[0]*parseInt(e.chart.width,10)/100):"px"!==a&&""!==a||(t.svgWidth=parseInt(e.chart.width,10));var s=e.chart.height.toString().split(/[0-9]+/g).pop();if("auto"!==t.svgHeight&&""!==t.svgHeight)if("%"===s){var r=f.getDimensions(this.el.parentNode);t.svgHeight=r[1]*parseInt(e.chart.height,10)/100}else t.svgHeight=parseInt(e.chart.height,10);else t.axisCharts?t.svgHeight=t.svgWidth/1.61:t.svgHeight=t.svgWidth/1.2;if(t.svgWidth<0&&(t.svgWidth=0),t.svgHeight<0&&(t.svgHeight=0),b.setAttrs(t.dom.Paper.node,{width:t.svgWidth,height:t.svgHeight}),"%"!==s){var n=e.chart.sparkline.enabled?0:t.axisCharts?e.chart.parentHeightOffset:0;t.dom.Paper.node.parentNode.parentNode.style.minHeight=t.svgHeight+n+"px"}t.dom.elWrap.style.width=t.svgWidth+"px",t.dom.elWrap.style.height=t.svgHeight+"px"}},{key:"shiftGraphPosition",value:function(){var t=this.w.globals,e=t.translateY,i={transform:"translate("+t.translateX+", "+e+")"};b.setAttrs(t.dom.elGraphical.node,i)}},{key:"resizeNonAxisCharts",value:function(){var t=this.w,e=t.globals,i=0,a=t.config.chart.sparkline.enabled?1:15;a+=t.config.grid.padding.bottom,"top"!==t.config.legend.position&&"bottom"!==t.config.legend.position||!t.config.legend.show||t.config.legend.floating||(i=new lt(this.ctx).legendHelpers.getLegendBBox().clwh+10);var s=t.globals.dom.baseEl.querySelector(".apexcharts-radialbar, .apexcharts-pie"),r=2.05*t.globals.radialSize;if(s&&!t.config.chart.sparkline.enabled){var n=f.getBoundingClientRect(s);r=n.bottom;var o=n.bottom-n.top;r=Math.max(2.05*t.globals.radialSize,o)}var l=r+e.translateY+i+a;e.dom.elLegendForeign&&e.dom.elLegendForeign.setAttribute("height",l),e.dom.elWrap.style.height=l+"px",b.setAttrs(e.dom.Paper.node,{height:l}),e.dom.Paper.node.parentNode.parentNode.style.minHeight=l+"px"}},{key:"coreCalculations",value:function(){new U(this.ctx).init()}},{key:"resetGlobals",value:function(){var t=this,e=function(){return t.w.config.series.map((function(t){return[]}))},i=new H,a=this.w.globals;i.initGlobalVars(a),a.seriesXvalues=e(),a.seriesYvalues=e()}},{key:"isMultipleY",value:function(){if(this.w.config.yaxis.constructor===Array&&this.w.config.yaxis.length>1)return this.w.globals.isMultipleYAxis=!0,!0}},{key:"xySettings",value:function(){var t=null,e=this.w;if(e.globals.axisCharts){if("back"===e.config.xaxis.crosshairs.position)new Q(this.ctx).drawXCrosshairs();if("back"===e.config.yaxis[0].crosshairs.position)new Q(this.ctx).drawYCrosshairs();if("datetime"===e.config.xaxis.type&&void 0===e.config.xaxis.labels.formatter){this.ctx.timeScale=new Mt(this.ctx);var i=[];isFinite(e.globals.minX)&&isFinite(e.globals.maxX)&&!e.globals.isBarHorizontal?i=this.ctx.timeScale.calculateTimeScaleTicks(e.globals.minX,e.globals.maxX):e.globals.isBarHorizontal&&(i=this.ctx.timeScale.calculateTimeScaleTicks(e.globals.minY,e.globals.maxY)),this.ctx.timeScale.recalcDimensionsBasedOnFormat(i)}t=new y(this.ctx).getCalculatedRatios()}return t}},{key:"updateSourceChart",value:function(t){this.ctx.w.globals.selection=void 0,this.ctx.updateHelpers._updateOptions({chart:{selection:{xaxis:{min:t.w.globals.minX,max:t.w.globals.maxX}}}},!1,!1)}},{key:"setupBrushHandler",value:function(){var t=this,e=this.w;if(e.config.chart.brush.enabled&&"function"!=typeof e.config.chart.events.selection){var i=e.config.chart.brush.targets||[e.config.chart.brush.target];i.forEach((function(e){var i=ApexCharts.getChartByID(e);i.w.globals.brushSource=t.ctx,"function"!=typeof i.w.config.chart.events.zoomed&&(i.w.config.chart.events.zoomed=function(){t.updateSourceChart(i)}),"function"!=typeof i.w.config.chart.events.scrolled&&(i.w.config.chart.events.scrolled=function(){t.updateSourceChart(i)})})),e.config.chart.events.selection=function(t,a){i.forEach((function(t){var i=ApexCharts.getChartByID(t),s=f.clone(e.config.yaxis);if(e.config.chart.brush.autoScaleYaxis&&1===i.w.globals.series.length){var r=new j(i);s=r.autoScaleY(i,s,a)}var o=i.w.config.yaxis.reduce((function(t,e,a){return[].concat(g(t),[n(n({},i.w.config.yaxis[a]),{},{min:s[0].min,max:s[0].max})])}),[]);i.ctx.updateHelpers._updateOptions({xaxis:{min:a.xaxis.min,max:a.xaxis.max},yaxis:o},!1,!1,!1,!1)}))}}}}]),t}(),Xt=function(){function i(t){e(this,i),this.ctx=t,this.w=t.w}return a(i,[{key:"_updateOptions",value:function(e){var i=this,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],n=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=[this.ctx];r&&(o=this.ctx.getSyncedCharts()),this.ctx.w.globals.isExecCalled&&(o=[this.ctx],this.ctx.w.globals.isExecCalled=!1),o.forEach((function(r){var o=r.w;return o.globals.shouldAnimate=s,a||(o.globals.resized=!0,o.globals.dataChanged=!0,s&&r.series.getPreviousPaths()),e&&"object"===t(e)&&(r.config=new D(e),e=y.extendArrayProps(r.config,e,o),r.w.globals.chartID!==i.ctx.w.globals.chartID&&delete e.series,o.config=f.extend(o.config,e),n&&(o.globals.lastXAxis=e.xaxis?f.clone(e.xaxis):[],o.globals.lastYAxis=e.yaxis?f.clone(e.yaxis):[],o.globals.initialConfig=f.extend({},o.config),o.globals.initialSeries=f.clone(o.config.series))),r.update(e)}))}},{key:"_updateSeries",value:function(t,e){var i,a=this,s=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=this.w;return r.globals.shouldAnimate=e,r.globals.dataChanged=!0,e&&this.ctx.series.getPreviousPaths(),r.globals.axisCharts?(0===(i=t.map((function(t,e){return a._extendSeries(t,e)}))).length&&(i=[{data:[]}]),r.config.series=i):r.config.series=t.slice(),s&&(r.globals.initialSeries=f.clone(r.config.series)),this.ctx.update()}},{key:"_extendSeries",value:function(t,e){var i=this.w,a=i.config.series[e];return n(n({},i.config.series[e]),{},{name:t.name?t.name:a&&a.name,color:t.color?t.color:a&&a.color,type:t.type?t.type:a&&a.type,data:t.data?t.data:a&&a.data})}},{key:"toggleDataPointSelection",value:function(t,e){var i=this.w,a=null,s=".apexcharts-series[data\\:realIndex='".concat(t,"']");return i.globals.axisCharts?a=i.globals.dom.Paper.select("".concat(s," path[j='").concat(e,"'], ").concat(s," circle[j='").concat(e,"'], ").concat(s," rect[j='").concat(e,"']")).members[0]:void 0===e&&(a=i.globals.dom.Paper.select("".concat(s," path[j='").concat(t,"']")).members[0],"pie"!==i.config.chart.type&&"polarArea"!==i.config.chart.type&&"donut"!==i.config.chart.type||this.ctx.pie.pieClicked(t)),a?(new b(this.ctx).pathMouseDown(a,null),a.node?a.node:null):(console.warn("toggleDataPointSelection: Element not found"),null)}},{key:"forceXAxisUpdate",value:function(t){var e=this.w;if(["min","max"].forEach((function(i){void 0!==t.xaxis[i]&&(e.config.xaxis[i]=t.xaxis[i],e.globals.lastXAxis[i]=t.xaxis[i])})),t.xaxis.categories&&t.xaxis.categories.length&&(e.config.xaxis.categories=t.xaxis.categories),e.config.xaxis.convertedCatToNumeric){var i=new R(t);t=i.convertCatToNumericXaxis(t,this.ctx)}return t}},{key:"forceYAxisUpdate",value:function(t){var e=this.w;return e.config.chart.stacked&&"100%"===e.config.chart.stackType&&(Array.isArray(t.yaxis)?t.yaxis.forEach((function(e,i){t.yaxis[i].min=0,t.yaxis[i].max=100})):(t.yaxis.min=0,t.yaxis.max=100)),t}},{key:"revertDefaultAxisMinMax",value:function(t){var e=this,i=this.w,a=i.globals.lastXAxis,s=i.globals.lastYAxis;t&&t.xaxis&&(a=t.xaxis),t&&t.yaxis&&(s=t.yaxis),i.config.xaxis.min=a.min,i.config.xaxis.max=a.max;var r=function(t){void 0!==s[t]&&(i.config.yaxis[t].min=s[t].min,i.config.yaxis[t].max=s[t].max)};i.config.yaxis.map((function(t,a){i.globals.zoomed||void 0!==s[a]?r(a):void 0!==e.ctx.opts.yaxis[a]&&(t.min=e.ctx.opts.yaxis[a].min,t.max=e.ctx.opts.yaxis[a].max)}))}}]),i}();Tt="undefined"!=typeof window?window:void 0,zt=function(e,i){var a=(void 0!==this?this:e).SVG=function(t){if(a.supported)return t=new a.Doc(t),a.parser.draw||a.prepare(),t};if(a.ns="http://www.w3.org/2000/svg",a.xmlns="http://www.w3.org/2000/xmlns/",a.xlink="http://www.w3.org/1999/xlink",a.svgjs="http://svgjs.com/svgjs",a.supported=!0,!a.supported)return!1;a.did=1e3,a.eid=function(t){return"Svgjs"+d(t)+a.did++},a.create=function(t){var e=i.createElementNS(this.ns,t);return e.setAttribute("id",this.eid(t)),e},a.extend=function(){var t,e;e=(t=[].slice.call(arguments)).pop();for(var i=t.length-1;i>=0;i--)if(t[i])for(var s in e)t[i].prototype[s]=e[s];a.Set&&a.Set.inherit&&a.Set.inherit()},a.invent=function(t){var e="function"==typeof t.create?t.create:function(){this.constructor.call(this,a.create(t.create))};return t.inherit&&(e.prototype=new t.inherit),t.extend&&a.extend(e,t.extend),t.construct&&a.extend(t.parent||a.Container,t.construct),e},a.adopt=function(t){return t?t.instance?t.instance:((i="svg"==t.nodeName?t.parentNode instanceof e.SVGElement?new a.Nested:new a.Doc:"linearGradient"==t.nodeName?new a.Gradient("linear"):"radialGradient"==t.nodeName?new a.Gradient("radial"):a[d(t.nodeName)]?new(a[d(t.nodeName)]):new a.Element(t)).type=t.nodeName,i.node=t,t.instance=i,i instanceof a.Doc&&i.namespace().defs(),i.setData(JSON.parse(t.getAttribute("svgjs:data"))||{}),i):null;var i},a.prepare=function(){var t=i.getElementsByTagName("body")[0],e=(t?new a.Doc(t):a.adopt(i.documentElement).nested()).size(2,0);a.parser={body:t||i.documentElement,draw:e.style("opacity:0;position:absolute;left:-100%;top:-100%;overflow:hidden").node,poly:e.polyline().node,path:e.path().node,native:a.create("svg")}},a.parser={native:a.create("svg")},i.addEventListener("DOMContentLoaded",(function(){a.parser.draw||a.prepare()}),!1),a.regex={numberAndUnit:/^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i,hex:/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,rgb:/rgb\((\d+),(\d+),(\d+)\)/,reference:/#([a-z0-9\-_]+)/i,transforms:/\)\s*,?\s*/,whitespace:/\s/g,isHex:/^#[a-f0-9]{3,6}$/i,isRgb:/^rgb\(/,isCss:/[^:]+:[^;]+;?/,isBlank:/^(\s+)?$/,isNumber:/^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,isPercent:/^-?[\d\.]+%$/,isImage:/\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i,delimiter:/[\s,]+/,hyphen:/([^e])\-/gi,pathLetters:/[MLHVCSQTAZ]/gi,isPathLetter:/[MLHVCSQTAZ]/i,numbersWithDots:/((\d?\.\d+(?:e[+-]?\d+)?)((?:\.\d+(?:e[+-]?\d+)?)+))+/gi,dots:/\./g},a.utils={map:function(t,e){for(var i=t.length,a=[],s=0;s<i;s++)a.push(e(t[s]));return a},filter:function(t,e){for(var i=t.length,a=[],s=0;s<i;s++)e(t[s])&&a.push(t[s]);return a},filterSVGElements:function(t){return this.filter(t,(function(t){return t instanceof e.SVGElement}))}},a.defaults={attrs:{"fill-opacity":1,"stroke-opacity":1,"stroke-width":0,"stroke-linejoin":"miter","stroke-linecap":"butt",fill:"#000000",stroke:"#000000",opacity:1,x:0,y:0,cx:0,cy:0,width:0,height:0,r:0,rx:0,ry:0,offset:0,"stop-opacity":1,"stop-color":"#000000","font-size":16,"font-family":"Helvetica, Arial, sans-serif","text-anchor":"start"}},a.Color=function(e){var i,s;this.r=0,this.g=0,this.b=0,e&&("string"==typeof e?a.regex.isRgb.test(e)?(i=a.regex.rgb.exec(e.replace(a.regex.whitespace,"")),this.r=parseInt(i[1]),this.g=parseInt(i[2]),this.b=parseInt(i[3])):a.regex.isHex.test(e)&&(i=a.regex.hex.exec(4==(s=e).length?["#",s.substring(1,2),s.substring(1,2),s.substring(2,3),s.substring(2,3),s.substring(3,4),s.substring(3,4)].join(""):s),this.r=parseInt(i[1],16),this.g=parseInt(i[2],16),this.b=parseInt(i[3],16)):"object"===t(e)&&(this.r=e.r,this.g=e.g,this.b=e.b))},a.extend(a.Color,{toString:function(){return this.toHex()},toHex:function(){return"#"+g(this.r)+g(this.g)+g(this.b)},toRgb:function(){return"rgb("+[this.r,this.g,this.b].join()+")"},brightness:function(){return this.r/255*.3+this.g/255*.59+this.b/255*.11},morph:function(t){return this.destination=new a.Color(t),this},at:function(t){return this.destination?(t=t<0?0:t>1?1:t,new a.Color({r:~~(this.r+(this.destination.r-this.r)*t),g:~~(this.g+(this.destination.g-this.g)*t),b:~~(this.b+(this.destination.b-this.b)*t)})):this}}),a.Color.test=function(t){return t+="",a.regex.isHex.test(t)||a.regex.isRgb.test(t)},a.Color.isRgb=function(t){return t&&"number"==typeof t.r&&"number"==typeof t.g&&"number"==typeof t.b},a.Color.isColor=function(t){return a.Color.isRgb(t)||a.Color.test(t)},a.Array=function(t,e){0==(t=(t||[]).valueOf()).length&&e&&(t=e.valueOf()),this.value=this.parse(t)},a.extend(a.Array,{toString:function(){return this.value.join(" ")},valueOf:function(){return this.value},parse:function(t){return t=t.valueOf(),Array.isArray(t)?t:this.split(t)}}),a.PointArray=function(t,e){a.Array.call(this,t,e||[[0,0]])},a.PointArray.prototype=new a.Array,a.PointArray.prototype.constructor=a.PointArray;for(var s={M:function(t,e,i){return e.x=i.x=t[0],e.y=i.y=t[1],["M",e.x,e.y]},L:function(t,e){return e.x=t[0],e.y=t[1],["L",t[0],t[1]]},H:function(t,e){return e.x=t[0],["H",t[0]]},V:function(t,e){return e.y=t[0],["V",t[0]]},C:function(t,e){return e.x=t[4],e.y=t[5],["C",t[0],t[1],t[2],t[3],t[4],t[5]]},Q:function(t,e){return e.x=t[2],e.y=t[3],["Q",t[0],t[1],t[2],t[3]]},Z:function(t,e,i){return e.x=i.x,e.y=i.y,["Z"]}},r="mlhvqtcsaz".split(""),n=0,o=r.length;n<o;++n)s[r[n]]=function(t){return function(e,i,a){if("H"==t)e[0]=e[0]+i.x;else if("V"==t)e[0]=e[0]+i.y;else if("A"==t)e[5]=e[5]+i.x,e[6]=e[6]+i.y;else for(var r=0,n=e.length;r<n;++r)e[r]=e[r]+(r%2?i.y:i.x);return s[t](e,i,a)}}(r[n].toUpperCase());a.PathArray=function(t,e){a.Array.call(this,t,e||[["M",0,0]])},a.PathArray.prototype=new a.Array,a.PathArray.prototype.constructor=a.PathArray,a.extend(a.PathArray,{toString:function(){return function(t){for(var e=0,i=t.length,a="";e<i;e++)a+=t[e][0],null!=t[e][1]&&(a+=t[e][1],null!=t[e][2]&&(a+=" ",a+=t[e][2],null!=t[e][3]&&(a+=" ",a+=t[e][3],a+=" ",a+=t[e][4],null!=t[e][5]&&(a+=" ",a+=t[e][5],a+=" ",a+=t[e][6],null!=t[e][7]&&(a+=" ",a+=t[e][7])))));return a+" "}(this.value)},move:function(t,e){var i=this.bbox();return i.x,i.y,this},at:function(t){if(!this.destination)return this;for(var e=this.value,i=this.destination.value,s=[],r=new a.PathArray,n=0,o=e.length;n<o;n++){s[n]=[e[n][0]];for(var l=1,h=e[n].length;l<h;l++)s[n][l]=e[n][l]+(i[n][l]-e[n][l])*t;"A"===s[n][0]&&(s[n][4]=+(0!=s[n][4]),s[n][5]=+(0!=s[n][5]))}return r.value=s,r},parse:function(t){if(t instanceof a.PathArray)return t.valueOf();var e,i={M:2,L:2,H:1,V:1,C:6,S:4,Q:4,T:2,A:7,Z:0};t="string"==typeof t?t.replace(a.regex.numbersWithDots,h).replace(a.regex.pathLetters," $& ").replace(a.regex.hyphen,"$1 -").trim().split(a.regex.delimiter):t.reduce((function(t,e){return[].concat.call(t,e)}),[]);var r=[],n=new a.Point,o=new a.Point,l=0,c=t.length;do{a.regex.isPathLetter.test(t[l])?(e=t[l],++l):"M"==e?e="L":"m"==e&&(e="l"),r.push(s[e].call(null,t.slice(l,l+=i[e.toUpperCase()]).map(parseFloat),n,o))}while(c>l);return r},bbox:function(){return a.parser.draw||a.prepare(),a.parser.path.setAttribute("d",this.toString()),a.parser.path.getBBox()}}),a.Number=a.invent({create:function(t,e){this.value=0,this.unit=e||"","number"==typeof t?this.value=isNaN(t)?0:isFinite(t)?t:t<0?-34e37:34e37:"string"==typeof t?(e=t.match(a.regex.numberAndUnit))&&(this.value=parseFloat(e[1]),"%"==e[5]?this.value/=100:"s"==e[5]&&(this.value*=1e3),this.unit=e[5]):t instanceof a.Number&&(this.value=t.valueOf(),this.unit=t.unit)},extend:{toString:function(){return("%"==this.unit?~~(1e8*this.value)/1e6:"s"==this.unit?this.value/1e3:this.value)+this.unit},toJSON:function(){return this.toString()},valueOf:function(){return this.value},plus:function(t){return t=new a.Number(t),new a.Number(this+t,this.unit||t.unit)},minus:function(t){return t=new a.Number(t),new a.Number(this-t,this.unit||t.unit)},times:function(t){return t=new a.Number(t),new a.Number(this*t,this.unit||t.unit)},divide:function(t){return t=new a.Number(t),new a.Number(this/t,this.unit||t.unit)},to:function(t){var e=new a.Number(this);return"string"==typeof t&&(e.unit=t),e},morph:function(t){return this.destination=new a.Number(t),t.relative&&(this.destination.value+=this.value),this},at:function(t){return this.destination?new a.Number(this.destination).minus(this).times(t).plus(this):this}}}),a.Element=a.invent({create:function(t){this._stroke=a.defaults.attrs.stroke,this._event=null,this.dom={},(this.node=t)&&(this.type=t.nodeName,this.node.instance=this,this._stroke=t.getAttribute("stroke")||this._stroke)},extend:{x:function(t){return this.attr("x",t)},y:function(t){return this.attr("y",t)},cx:function(t){return null==t?this.x()+this.width()/2:this.x(t-this.width()/2)},cy:function(t){return null==t?this.y()+this.height()/2:this.y(t-this.height()/2)},move:function(t,e){return this.x(t).y(e)},center:function(t,e){return this.cx(t).cy(e)},width:function(t){return this.attr("width",t)},height:function(t){return this.attr("height",t)},size:function(t,e){var i=u(this,t,e);return this.width(new a.Number(i.width)).height(new a.Number(i.height))},clone:function(t){this.writeDataToDom();var e=x(this.node.cloneNode(!0));return t?t.add(e):this.after(e),e},remove:function(){return this.parent()&&this.parent().removeElement(this),this},replace:function(t){return this.after(t).remove(),t},addTo:function(t){return t.put(this)},putIn:function(t){return t.add(this)},id:function(t){return this.attr("id",t)},show:function(){return this.style("display","")},hide:function(){return this.style("display","none")},visible:function(){return"none"!=this.style("display")},toString:function(){return this.attr("id")},classes:function(){var t=this.attr("class");return null==t?[]:t.trim().split(a.regex.delimiter)},hasClass:function(t){return-1!=this.classes().indexOf(t)},addClass:function(t){if(!this.hasClass(t)){var e=this.classes();e.push(t),this.attr("class",e.join(" "))}return this},removeClass:function(t){return this.hasClass(t)&&this.attr("class",this.classes().filter((function(e){return e!=t})).join(" ")),this},toggleClass:function(t){return this.hasClass(t)?this.removeClass(t):this.addClass(t)},reference:function(t){return a.get(this.attr(t))},parent:function(t){var i=this;if(!i.node.parentNode)return null;if(i=a.adopt(i.node.parentNode),!t)return i;for(;i&&i.node instanceof e.SVGElement;){if("string"==typeof t?i.matches(t):i instanceof t)return i;if(!i.node.parentNode||"#document"==i.node.parentNode.nodeName)return null;i=a.adopt(i.node.parentNode)}},doc:function(){return this instanceof a.Doc?this:this.parent(a.Doc)},parents:function(t){var e=[],i=this;do{if(!(i=i.parent(t))||!i.node)break;e.push(i)}while(i.parent);return e},matches:function(t){return function(t,e){return(t.matches||t.matchesSelector||t.msMatchesSelector||t.mozMatchesSelector||t.webkitMatchesSelector||t.oMatchesSelector).call(t,e)}(this.node,t)},native:function(){return this.node},svg:function(t){var e=i.createElement("svg");if(!(t&&this instanceof a.Parent))return e.appendChild(t=i.createElement("svg")),this.writeDataToDom(),t.appendChild(this.node.cloneNode(!0)),e.innerHTML.replace(/^<svg>/,"").replace(/<\/svg>$/,"");e.innerHTML="<svg>"+t.replace(/\n/,"").replace(/<([\w:-]+)([^<]+?)\/>/g,"<$1$2></$1>")+"</svg>";for(var s=0,r=e.firstChild.childNodes.length;s<r;s++)this.node.appendChild(e.firstChild.firstChild);return this},writeDataToDom:function(){return(this.each||this.lines)&&(this.each?this:this.lines()).each((function(){this.writeDataToDom()})),this.node.removeAttribute("svgjs:data"),Object.keys(this.dom).length&&this.node.setAttribute("svgjs:data",JSON.stringify(this.dom)),this},setData:function(t){return this.dom=t,this},is:function(t){return function(t,e){return t instanceof e}(this,t)}}}),a.easing={"-":function(t){return t},"<>":function(t){return-Math.cos(t*Math.PI)/2+.5},">":function(t){return Math.sin(t*Math.PI/2)},"<":function(t){return 1-Math.cos(t*Math.PI/2)}},a.morph=function(t){return function(e,i){return new a.MorphObj(e,i).at(t)}},a.Situation=a.invent({create:function(t){this.init=!1,this.reversed=!1,this.reversing=!1,this.duration=new a.Number(t.duration).valueOf(),this.delay=new a.Number(t.delay).valueOf(),this.start=+new Date+this.delay,this.finish=this.start+this.duration,this.ease=t.ease,this.loop=0,this.loops=!1,this.animations={},this.attrs={},this.styles={},this.transforms=[],this.once={}}}),a.FX=a.invent({create:function(t){this._target=t,this.situations=[],this.active=!1,this.situation=null,this.paused=!1,this.lastPos=0,this.pos=0,this.absPos=0,this._speed=1},extend:{animate:function(e,i,s){"object"===t(e)&&(i=e.ease,s=e.delay,e=e.duration);var r=new a.Situation({duration:e||1e3,delay:s||0,ease:a.easing[i||"-"]||i});return this.queue(r),this},target:function(t){return t&&t instanceof a.Element?(this._target=t,this):this._target},timeToAbsPos:function(t){return(t-this.situation.start)/(this.situation.duration/this._speed)},absPosToTime:function(t){return this.situation.duration/this._speed*t+this.situation.start},startAnimFrame:function(){this.stopAnimFrame(),this.animationFrame=e.requestAnimationFrame(function(){this.step()}.bind(this))},stopAnimFrame:function(){e.cancelAnimationFrame(this.animationFrame)},start:function(){return!this.active&&this.situation&&(this.active=!0,this.startCurrent()),this},startCurrent:function(){return this.situation.start=+new Date+this.situation.delay/this._speed,this.situation.finish=this.situation.start+this.situation.duration/this._speed,this.initAnimations().step()},queue:function(t){return("function"==typeof t||t instanceof a.Situation)&&this.situations.push(t),this.situation||(this.situation=this.situations.shift()),this},dequeue:function(){return this.stop(),this.situation=this.situations.shift(),this.situation&&(this.situation instanceof a.Situation?this.start():this.situation.call(this)),this},initAnimations:function(){var t,e=this.situation;if(e.init)return this;for(var i in e.animations){t=this.target()[i](),Array.isArray(t)||(t=[t]),Array.isArray(e.animations[i])||(e.animations[i]=[e.animations[i]]);for(var s=t.length;s--;)e.animations[i][s]instanceof a.Number&&(t[s]=new a.Number(t[s])),e.animations[i][s]=t[s].morph(e.animations[i][s])}for(var i in e.attrs)e.attrs[i]=new a.MorphObj(this.target().attr(i),e.attrs[i]);for(var i in e.styles)e.styles[i]=new a.MorphObj(this.target().style(i),e.styles[i]);return e.initialTransformation=this.target().matrixify(),e.init=!0,this},clearQueue:function(){return this.situations=[],this},clearCurrent:function(){return this.situation=null,this},stop:function(t,e){var i=this.active;return this.active=!1,e&&this.clearQueue(),t&&this.situation&&(!i&&this.startCurrent(),this.atEnd()),this.stopAnimFrame(),this.clearCurrent()},after:function(t){var e=this.last();return this.target().on("finished.fx",(function i(a){a.detail.situation==e&&(t.call(this,e),this.off("finished.fx",i))})),this._callStart()},during:function(t){var e=this.last(),i=function(i){i.detail.situation==e&&t.call(this,i.detail.pos,a.morph(i.detail.pos),i.detail.eased,e)};return this.target().off("during.fx",i).on("during.fx",i),this.after((function(){this.off("during.fx",i)})),this._callStart()},afterAll:function(t){var e=function e(i){t.call(this),this.off("allfinished.fx",e)};return this.target().off("allfinished.fx",e).on("allfinished.fx",e),this._callStart()},last:function(){return this.situations.length?this.situations[this.situations.length-1]:this.situation},add:function(t,e,i){return this.last()[i||"animations"][t]=e,this._callStart()},step:function(t){var e,i,a;t||(this.absPos=this.timeToAbsPos(+new Date)),!1!==this.situation.loops?(e=Math.max(this.absPos,0),i=Math.floor(e),!0===this.situation.loops||i<this.situation.loops?(this.pos=e-i,a=this.situation.loop,this.situation.loop=i):(this.absPos=this.situation.loops,this.pos=1,a=this.situation.loop-1,this.situation.loop=this.situation.loops),this.situation.reversing&&(this.situation.reversed=this.situation.reversed!=Boolean((this.situation.loop-a)%2))):(this.absPos=Math.min(this.absPos,1),this.pos=this.absPos),this.pos<0&&(this.pos=0),this.situation.reversed&&(this.pos=1-this.pos);var s=this.situation.ease(this.pos);for(var r in this.situation.once)r>this.lastPos&&r<=s&&(this.situation.once[r].call(this.target(),this.pos,s),delete this.situation.once[r]);return this.active&&this.target().fire("during",{pos:this.pos,eased:s,fx:this,situation:this.situation}),this.situation?(this.eachAt(),1==this.pos&&!this.situation.reversed||this.situation.reversed&&0==this.pos?(this.stopAnimFrame(),this.target().fire("finished",{fx:this,situation:this.situation}),this.situations.length||(this.target().fire("allfinished"),this.situations.length||(this.target().off(".fx"),this.active=!1)),this.active?this.dequeue():this.clearCurrent()):!this.paused&&this.active&&this.startAnimFrame(),this.lastPos=s,this):this},eachAt:function(){var t,e=this,i=this.target(),s=this.situation;for(var r in s.animations)t=[].concat(s.animations[r]).map((function(t){return"string"!=typeof t&&t.at?t.at(s.ease(e.pos),e.pos):t})),i[r].apply(i,t);for(var r in s.attrs)t=[r].concat(s.attrs[r]).map((function(t){return"string"!=typeof t&&t.at?t.at(s.ease(e.pos),e.pos):t})),i.attr.apply(i,t);for(var r in s.styles)t=[r].concat(s.styles[r]).map((function(t){return"string"!=typeof t&&t.at?t.at(s.ease(e.pos),e.pos):t})),i.style.apply(i,t);if(s.transforms.length){t=s.initialTransformation,r=0;for(var n=s.transforms.length;r<n;r++){var o=s.transforms[r];o instanceof a.Matrix?t=o.relative?t.multiply((new a.Matrix).morph(o).at(s.ease(this.pos))):t.morph(o).at(s.ease(this.pos)):(o.relative||o.undo(t.extract()),t=t.multiply(o.at(s.ease(this.pos))))}i.matrix(t)}return this},once:function(t,e,i){var a=this.last();return i||(t=a.ease(t)),a.once[t]=e,this},_callStart:function(){return setTimeout(function(){this.start()}.bind(this),0),this}},parent:a.Element,construct:{animate:function(t,e,i){return(this.fx||(this.fx=new a.FX(this))).animate(t,e,i)},delay:function(t){return(this.fx||(this.fx=new a.FX(this))).delay(t)},stop:function(t,e){return this.fx&&this.fx.stop(t,e),this},finish:function(){return this.fx&&this.fx.finish(),this}}}),a.MorphObj=a.invent({create:function(t,e){return a.Color.isColor(e)?new a.Color(t).morph(e):a.regex.delimiter.test(t)?a.regex.pathLetters.test(t)?new a.PathArray(t).morph(e):new a.Array(t).morph(e):a.regex.numberAndUnit.test(e)?new a.Number(t).morph(e):(this.value=t,void(this.destination=e))},extend:{at:function(t,e){return e<1?this.value:this.destination},valueOf:function(){return this.value}}}),a.extend(a.FX,{attr:function(e,i,a){if("object"===t(e))for(var s in e)this.attr(s,e[s]);else this.add(e,i,"attrs");return this},plot:function(t,e,i,a){return 4==arguments.length?this.plot([t,e,i,a]):this.add("plot",new(this.target().morphArray)(t))}}),a.Box=a.invent({create:function(e,i,s,r){if(!("object"!==t(e)||e instanceof a.Element))return a.Box.call(this,null!=e.left?e.left:e.x,null!=e.top?e.top:e.y,e.width,e.height);4==arguments.length&&(this.x=e,this.y=i,this.width=s,this.height=r),b(this)}}),a.BBox=a.invent({create:function(t){if(a.Box.apply(this,[].slice.call(arguments)),t instanceof a.Element){var e;try{if(!i.documentElement.contains){for(var s=t.node;s.parentNode;)s=s.parentNode;if(s!=i)throw new Error("Element not in the dom")}e=t.node.getBBox()}catch(i){if(t instanceof a.Shape){a.parser.draw||a.prepare();var r=t.clone(a.parser.draw.instance).show();e=r.node.getBBox(),r.remove()}else e={x:t.node.clientLeft,y:t.node.clientTop,width:t.node.clientWidth,height:t.node.clientHeight}}a.Box.call(this,e)}},inherit:a.Box,parent:a.Element,construct:{bbox:function(){return new a.BBox(this)}}}),a.BBox.prototype.constructor=a.BBox,a.Matrix=a.invent({create:function(e){var i=p([1,0,0,1,0,0]);e=e instanceof a.Element?e.matrixify():"string"==typeof e?p(e.split(a.regex.delimiter).map(parseFloat)):6==arguments.length?p([].slice.call(arguments)):Array.isArray(e)?p(e):"object"===t(e)?e:i;for(var s=v.length-1;s>=0;--s)this[v[s]]=null!=e[v[s]]?e[v[s]]:i[v[s]]},extend:{extract:function(){var t=f(this,0,1),e=(f(this,1,0),180/Math.PI*Math.atan2(t.y,t.x)-90);return{x:this.e,y:this.f,transformedX:(this.e*Math.cos(e*Math.PI/180)+this.f*Math.sin(e*Math.PI/180))/Math.sqrt(this.a*this.a+this.b*this.b),transformedY:(this.f*Math.cos(e*Math.PI/180)+this.e*Math.sin(-e*Math.PI/180))/Math.sqrt(this.c*this.c+this.d*this.d),rotation:e,a:this.a,b:this.b,c:this.c,d:this.d,e:this.e,f:this.f,matrix:new a.Matrix(this)}},clone:function(){return new a.Matrix(this)},morph:function(t){return this.destination=new a.Matrix(t),this},multiply:function(t){return new a.Matrix(this.native().multiply(function(t){return t instanceof a.Matrix||(t=new a.Matrix(t)),t}(t).native()))},inverse:function(){return new a.Matrix(this.native().inverse())},translate:function(t,e){return new a.Matrix(this.native().translate(t||0,e||0))},native:function(){for(var t=a.parser.native.createSVGMatrix(),e=v.length-1;e>=0;e--)t[v[e]]=this[v[e]];return t},toString:function(){return"matrix("+m(this.a)+","+m(this.b)+","+m(this.c)+","+m(this.d)+","+m(this.e)+","+m(this.f)+")"}},parent:a.Element,construct:{ctm:function(){return new a.Matrix(this.node.getCTM())},screenCTM:function(){if(this instanceof a.Nested){var t=this.rect(1,1),e=t.node.getScreenCTM();return t.remove(),new a.Matrix(e)}return new a.Matrix(this.node.getScreenCTM())}}}),a.Point=a.invent({create:function(e,i){var a;a=Array.isArray(e)?{x:e[0],y:e[1]}:"object"===t(e)?{x:e.x,y:e.y}:null!=e?{x:e,y:null!=i?i:e}:{x:0,y:0},this.x=a.x,this.y=a.y},extend:{clone:function(){return new a.Point(this)},morph:function(t,e){return this.destination=new a.Point(t,e),this}}}),a.extend(a.Element,{point:function(t,e){return new a.Point(t,e).transform(this.screenCTM().inverse())}}),a.extend(a.Element,{attr:function(e,i,s){if(null==e){for(e={},s=(i=this.node.attributes).length-1;s>=0;s--)e[i[s].nodeName]=a.regex.isNumber.test(i[s].nodeValue)?parseFloat(i[s].nodeValue):i[s].nodeValue;return e}if("object"===t(e))for(var r in e)this.attr(r,e[r]);else if(null===i)this.node.removeAttribute(e);else{if(null==i)return null==(i=this.node.getAttribute(e))?a.defaults.attrs[e]:a.regex.isNumber.test(i)?parseFloat(i):i;"stroke-width"==e?this.attr("stroke",parseFloat(i)>0?this._stroke:null):"stroke"==e&&(this._stroke=i),"fill"!=e&&"stroke"!=e||(a.regex.isImage.test(i)&&(i=this.doc().defs().image(i,0,0)),i instanceof a.Image&&(i=this.doc().defs().pattern(0,0,(function(){this.add(i)})))),"number"==typeof i?i=new a.Number(i):a.Color.isColor(i)?i=new a.Color(i):Array.isArray(i)&&(i=new a.Array(i)),"leading"==e?this.leading&&this.leading(i):"string"==typeof s?this.node.setAttributeNS(s,e,i.toString()):this.node.setAttribute(e,i.toString()),!this.rebuild||"font-size"!=e&&"x"!=e||this.rebuild(e,i)}return this}}),a.extend(a.Element,{transform:function(e,i){var s;return"object"!==t(e)?(s=new a.Matrix(this).extract(),"string"==typeof e?s[e]:s):(s=new a.Matrix(this),i=!!i||!!e.relative,null!=e.a&&(s=i?s.multiply(new a.Matrix(e)):new a.Matrix(e)),this.attr("transform",s))}}),a.extend(a.Element,{untransform:function(){return this.attr("transform",null)},matrixify:function(){return(this.attr("transform")||"").split(a.regex.transforms).slice(0,-1).map((function(t){var e=t.trim().split("(");return[e[0],e[1].split(a.regex.delimiter).map((function(t){return parseFloat(t)}))]})).reduce((function(t,e){return"matrix"==e[0]?t.multiply(p(e[1])):t[e[0]].apply(t,e[1])}),new a.Matrix)},toParent:function(t){if(this==t)return this;var e=this.screenCTM(),i=t.screenCTM().inverse();return this.addTo(t).untransform().transform(i.multiply(e)),this},toDoc:function(){return this.toParent(this.doc())}}),a.Transformation=a.invent({create:function(e,i){if(arguments.length>1&&"boolean"!=typeof i)return this.constructor.call(this,[].slice.call(arguments));if(Array.isArray(e))for(var a=0,s=this.arguments.length;a<s;++a)this[this.arguments[a]]=e[a];else if("object"===t(e))for(a=0,s=this.arguments.length;a<s;++a)this[this.arguments[a]]=e[this.arguments[a]];this.inversed=!1,!0===i&&(this.inversed=!0)}}),a.Translate=a.invent({parent:a.Matrix,inherit:a.Transformation,create:function(t,e){this.constructor.apply(this,[].slice.call(arguments))},extend:{arguments:["transformedX","transformedY"],method:"translate"}}),a.extend(a.Element,{style:function(e,i){if(0==arguments.length)return this.node.style.cssText||"";if(arguments.length<2)if("object"===t(e))for(var s in e)this.style(s,e[s]);else{if(!a.regex.isCss.test(e))return this.node.style[c(e)];for(e=e.split(/\s*;\s*/).filter((function(t){return!!t})).map((function(t){return t.split(/\s*:\s*/)}));i=e.pop();)this.style(i[0],i[1])}else this.node.style[c(e)]=null===i||a.regex.isBlank.test(i)?"":i;return this}}),a.Parent=a.invent({create:function(t){this.constructor.call(this,t)},inherit:a.Element,extend:{children:function(){return a.utils.map(a.utils.filterSVGElements(this.node.childNodes),(function(t){return a.adopt(t)}))},add:function(t,e){return null==e?this.node.appendChild(t.node):t.node!=this.node.childNodes[e]&&this.node.insertBefore(t.node,this.node.childNodes[e]),this},put:function(t,e){return this.add(t,e),t},has:function(t){return this.index(t)>=0},index:function(t){return[].slice.call(this.node.childNodes).indexOf(t.node)},get:function(t){return a.adopt(this.node.childNodes[t])},first:function(){return this.get(0)},last:function(){return this.get(this.node.childNodes.length-1)},each:function(t,e){for(var i=this.children(),s=0,r=i.length;s<r;s++)i[s]instanceof a.Element&&t.apply(i[s],[s,i]),e&&i[s]instanceof a.Container&&i[s].each(t,e);return this},removeElement:function(t){return this.node.removeChild(t.node),this},clear:function(){for(;this.node.hasChildNodes();)this.node.removeChild(this.node.lastChild);return delete this._defs,this},defs:function(){return this.doc().defs()}}}),a.extend(a.Parent,{ungroup:function(t,e){return 0===e||this instanceof a.Defs||this.node==a.parser.draw||(t=t||(this instanceof a.Doc?this:this.parent(a.Parent)),e=e||1/0,this.each((function(){return this instanceof a.Defs?this:this instanceof a.Parent?this.ungroup(t,e-1):this.toParent(t)})),this.node.firstChild||this.remove()),this},flatten:function(t,e){return this.ungroup(t,e)}}),a.Container=a.invent({create:function(t){this.constructor.call(this,t)},inherit:a.Parent}),a.ViewBox=a.invent({parent:a.Container,construct:{}}),["click","dblclick","mousedown","mouseup","mouseover","mouseout","mousemove","touchstart","touchmove","touchleave","touchend","touchcancel"].forEach((function(t){a.Element.prototype[t]=function(e){return a.on(this.node,t,e),this}})),a.listeners=[],a.handlerMap=[],a.listenerId=0,a.on=function(t,e,i,s,r){var n=i.bind(s||t.instance||t),o=(a.handlerMap.indexOf(t)+1||a.handlerMap.push(t))-1,l=e.split(".")[0],h=e.split(".")[1]||"*";a.listeners[o]=a.listeners[o]||{},a.listeners[o][l]=a.listeners[o][l]||{},a.listeners[o][l][h]=a.listeners[o][l][h]||{},i._svgjsListenerId||(i._svgjsListenerId=++a.listenerId),a.listeners[o][l][h][i._svgjsListenerId]=n,t.addEventListener(l,n,r||{passive:!0})},a.off=function(t,e,i){var s=a.handlerMap.indexOf(t),r=e&&e.split(".")[0],n=e&&e.split(".")[1],o="";if(-1!=s)if(i){if("function"==typeof i&&(i=i._svgjsListenerId),!i)return;a.listeners[s][r]&&a.listeners[s][r][n||"*"]&&(t.removeEventListener(r,a.listeners[s][r][n||"*"][i],!1),delete a.listeners[s][r][n||"*"][i])}else if(n&&r){if(a.listeners[s][r]&&a.listeners[s][r][n]){for(var l in a.listeners[s][r][n])a.off(t,[r,n].join("."),l);delete a.listeners[s][r][n]}}else if(n)for(var h in a.listeners[s])for(var o in a.listeners[s][h])n===o&&a.off(t,[h,n].join("."));else if(r){if(a.listeners[s][r]){for(var o in a.listeners[s][r])a.off(t,[r,o].join("."));delete a.listeners[s][r]}}else{for(var h in a.listeners[s])a.off(t,h);delete a.listeners[s],delete a.handlerMap[s]}},a.extend(a.Element,{on:function(t,e,i,s){return a.on(this.node,t,e,i,s),this},off:function(t,e){return a.off(this.node,t,e),this},fire:function(t,i){return t instanceof e.Event?this.node.dispatchEvent(t):this.node.dispatchEvent(t=new a.CustomEvent(t,{detail:i,cancelable:!0})),this._event=t,this},event:function(){return this._event}}),a.Defs=a.invent({create:"defs",inherit:a.Container}),a.G=a.invent({create:"g",inherit:a.Container,extend:{x:function(t){return null==t?this.transform("x"):this.transform({x:t-this.x()},!0)}},construct:{group:function(){return this.put(new a.G)}}}),a.Doc=a.invent({create:function(t){t&&("svg"==(t="string"==typeof t?i.getElementById(t):t).nodeName?this.constructor.call(this,t):(this.constructor.call(this,a.create("svg")),t.appendChild(this.node),this.size("100%","100%")),this.namespace().defs())},inherit:a.Container,extend:{namespace:function(){return this.attr({xmlns:a.ns,version:"1.1"}).attr("xmlns:xlink",a.xlink,a.xmlns).attr("xmlns:svgjs",a.svgjs,a.xmlns)},defs:function(){var t;return this._defs||((t=this.node.getElementsByTagName("defs")[0])?this._defs=a.adopt(t):this._defs=new a.Defs,this.node.appendChild(this._defs.node)),this._defs},parent:function(){return this.node.parentNode&&"#document"!=this.node.parentNode.nodeName?this.node.parentNode:null},remove:function(){return this.parent()&&this.parent().removeChild(this.node),this},clear:function(){for(;this.node.hasChildNodes();)this.node.removeChild(this.node.lastChild);return delete this._defs,a.parser.draw&&!a.parser.draw.parentNode&&this.node.appendChild(a.parser.draw),this},clone:function(t){this.writeDataToDom();var e=this.node,i=x(e.cloneNode(!0));return t?(t.node||t).appendChild(i.node):e.parentNode.insertBefore(i.node,e.nextSibling),i}}}),a.extend(a.Element,{}),a.Gradient=a.invent({create:function(t){this.constructor.call(this,a.create(t+"Gradient")),this.type=t},inherit:a.Container,extend:{at:function(t,e,i){return this.put(new a.Stop).update(t,e,i)},update:function(t){return this.clear(),"function"==typeof t&&t.call(this,this),this},fill:function(){return"url(#"+this.id()+")"},toString:function(){return this.fill()},attr:function(t,e,i){return"transform"==t&&(t="gradientTransform"),a.Container.prototype.attr.call(this,t,e,i)}},construct:{gradient:function(t,e){return this.defs().gradient(t,e)}}}),a.extend(a.Gradient,a.FX,{from:function(t,e){return"radial"==(this._target||this).type?this.attr({fx:new a.Number(t),fy:new a.Number(e)}):this.attr({x1:new a.Number(t),y1:new a.Number(e)})},to:function(t,e){return"radial"==(this._target||this).type?this.attr({cx:new a.Number(t),cy:new a.Number(e)}):this.attr({x2:new a.Number(t),y2:new a.Number(e)})}}),a.extend(a.Defs,{gradient:function(t,e){return this.put(new a.Gradient(t)).update(e)}}),a.Stop=a.invent({create:"stop",inherit:a.Element,extend:{update:function(t){return("number"==typeof t||t instanceof a.Number)&&(t={offset:arguments[0],color:arguments[1],opacity:arguments[2]}),null!=t.opacity&&this.attr("stop-opacity",t.opacity),null!=t.color&&this.attr("stop-color",t.color),null!=t.offset&&this.attr("offset",new a.Number(t.offset)),this}}}),a.Pattern=a.invent({create:"pattern",inherit:a.Container,extend:{fill:function(){return"url(#"+this.id()+")"},update:function(t){return this.clear(),"function"==typeof t&&t.call(this,this),this},toString:function(){return this.fill()},attr:function(t,e,i){return"transform"==t&&(t="patternTransform"),a.Container.prototype.attr.call(this,t,e,i)}},construct:{pattern:function(t,e,i){return this.defs().pattern(t,e,i)}}}),a.extend(a.Defs,{pattern:function(t,e,i){return this.put(new a.Pattern).update(i).attr({x:0,y:0,width:t,height:e,patternUnits:"userSpaceOnUse"})}}),a.Shape=a.invent({create:function(t){this.constructor.call(this,t)},inherit:a.Element}),a.Symbol=a.invent({create:"symbol",inherit:a.Container,construct:{symbol:function(){return this.put(new a.Symbol)}}}),a.Use=a.invent({create:"use",inherit:a.Shape,extend:{element:function(t,e){return this.attr("href",(e||"")+"#"+t,a.xlink)}},construct:{use:function(t,e){return this.put(new a.Use).element(t,e)}}}),a.Rect=a.invent({create:"rect",inherit:a.Shape,construct:{rect:function(t,e){return this.put(new a.Rect).size(t,e)}}}),a.Circle=a.invent({create:"circle",inherit:a.Shape,construct:{circle:function(t){return this.put(new a.Circle).rx(new a.Number(t).divide(2)).move(0,0)}}}),a.extend(a.Circle,a.FX,{rx:function(t){return this.attr("r",t)},ry:function(t){return this.rx(t)}}),a.Ellipse=a.invent({create:"ellipse",inherit:a.Shape,construct:{ellipse:function(t,e){return this.put(new a.Ellipse).size(t,e).move(0,0)}}}),a.extend(a.Ellipse,a.Rect,a.FX,{rx:function(t){return this.attr("rx",t)},ry:function(t){return this.attr("ry",t)}}),a.extend(a.Circle,a.Ellipse,{x:function(t){return null==t?this.cx()-this.rx():this.cx(t+this.rx())},y:function(t){return null==t?this.cy()-this.ry():this.cy(t+this.ry())},cx:function(t){return null==t?this.attr("cx"):this.attr("cx",t)},cy:function(t){return null==t?this.attr("cy"):this.attr("cy",t)},width:function(t){return null==t?2*this.rx():this.rx(new a.Number(t).divide(2))},height:function(t){return null==t?2*this.ry():this.ry(new a.Number(t).divide(2))},size:function(t,e){var i=u(this,t,e);return this.rx(new a.Number(i.width).divide(2)).ry(new a.Number(i.height).divide(2))}}),a.Line=a.invent({create:"line",inherit:a.Shape,extend:{array:function(){return new a.PointArray([[this.attr("x1"),this.attr("y1")],[this.attr("x2"),this.attr("y2")]])},plot:function(t,e,i,s){return null==t?this.array():(t=void 0!==e?{x1:t,y1:e,x2:i,y2:s}:new a.PointArray(t).toLine(),this.attr(t))},move:function(t,e){return this.attr(this.array().move(t,e).toLine())},size:function(t,e){var i=u(this,t,e);return this.attr(this.array().size(i.width,i.height).toLine())}},construct:{line:function(t,e,i,s){return a.Line.prototype.plot.apply(this.put(new a.Line),null!=t?[t,e,i,s]:[0,0,0,0])}}}),a.Polyline=a.invent({create:"polyline",inherit:a.Shape,construct:{polyline:function(t){return this.put(new a.Polyline).plot(t||new a.PointArray)}}}),a.Polygon=a.invent({create:"polygon",inherit:a.Shape,construct:{polygon:function(t){return this.put(new a.Polygon).plot(t||new a.PointArray)}}}),a.extend(a.Polyline,a.Polygon,{array:function(){return this._array||(this._array=new a.PointArray(this.attr("points")))},plot:function(t){return null==t?this.array():this.clear().attr("points","string"==typeof t?t:this._array=new a.PointArray(t))},clear:function(){return delete this._array,this},move:function(t,e){return this.attr("points",this.array().move(t,e))},size:function(t,e){var i=u(this,t,e);return this.attr("points",this.array().size(i.width,i.height))}}),a.extend(a.Line,a.Polyline,a.Polygon,{morphArray:a.PointArray,x:function(t){return null==t?this.bbox().x:this.move(t,this.bbox().y)},y:function(t){return null==t?this.bbox().y:this.move(this.bbox().x,t)},width:function(t){var e=this.bbox();return null==t?e.width:this.size(t,e.height)},height:function(t){var e=this.bbox();return null==t?e.height:this.size(e.width,t)}}),a.Path=a.invent({create:"path",inherit:a.Shape,extend:{morphArray:a.PathArray,array:function(){return this._array||(this._array=new a.PathArray(this.attr("d")))},plot:function(t){return null==t?this.array():this.clear().attr("d","string"==typeof t?t:this._array=new a.PathArray(t))},clear:function(){return delete this._array,this}},construct:{path:function(t){return this.put(new a.Path).plot(t||new a.PathArray)}}}),a.Image=a.invent({create:"image",inherit:a.Shape,extend:{load:function(t){if(!t)return this;var i=this,s=new e.Image;return a.on(s,"load",(function(){a.off(s);var e=i.parent(a.Pattern);null!==e&&(0==i.width()&&0==i.height()&&i.size(s.width,s.height),e&&0==e.width()&&0==e.height()&&e.size(i.width(),i.height()),"function"==typeof i._loaded&&i._loaded.call(i,{width:s.width,height:s.height,ratio:s.width/s.height,url:t}))})),a.on(s,"error",(function(t){a.off(s),"function"==typeof i._error&&i._error.call(i,t)})),this.attr("href",s.src=this.src=t,a.xlink)},loaded:function(t){return this._loaded=t,this},error:function(t){return this._error=t,this}},construct:{image:function(t,e,i){return this.put(new a.Image).load(t).size(e||0,i||e||0)}}}),a.Text=a.invent({create:function(){this.constructor.call(this,a.create("text")),this.dom.leading=new a.Number(1.3),this._rebuild=!0,this._build=!1,this.attr("font-family",a.defaults.attrs["font-family"])},inherit:a.Shape,extend:{x:function(t){return null==t?this.attr("x"):this.attr("x",t)},text:function(t){if(void 0===t){t="";for(var e=this.node.childNodes,i=0,s=e.length;i<s;++i)0!=i&&3!=e[i].nodeType&&1==a.adopt(e[i]).dom.newLined&&(t+="\n"),t+=e[i].textContent;return t}if(this.clear().build(!0),"function"==typeof t)t.call(this,this);else{i=0;for(var r=(t=t.split("\n")).length;i<r;i++)this.tspan(t[i]).newLine()}return this.build(!1).rebuild()},size:function(t){return this.attr("font-size",t).rebuild()},leading:function(t){return null==t?this.dom.leading:(this.dom.leading=new a.Number(t),this.rebuild())},lines:function(){var t=(this.textPath&&this.textPath()||this).node,e=a.utils.map(a.utils.filterSVGElements(t.childNodes),(function(t){return a.adopt(t)}));return new a.Set(e)},rebuild:function(t){if("boolean"==typeof t&&(this._rebuild=t),this._rebuild){var e=this,i=0,s=this.dom.leading*new a.Number(this.attr("font-size"));this.lines().each((function(){this.dom.newLined&&(e.textPath()||this.attr("x",e.attr("x")),"\n"==this.text()?i+=s:(this.attr("dy",s+i),i=0))})),this.fire("rebuild")}return this},build:function(t){return this._build=!!t,this},setData:function(t){return this.dom=t,this.dom.leading=new a.Number(t.leading||1.3),this}},construct:{text:function(t){return this.put(new a.Text).text(t)},plain:function(t){return this.put(new a.Text).plain(t)}}}),a.Tspan=a.invent({create:"tspan",inherit:a.Shape,extend:{text:function(t){return null==t?this.node.textContent+(this.dom.newLined?"\n":""):("function"==typeof t?t.call(this,this):this.plain(t),this)},dx:function(t){return this.attr("dx",t)},dy:function(t){return this.attr("dy",t)},newLine:function(){var t=this.parent(a.Text);return this.dom.newLined=!0,this.dy(t.dom.leading*t.attr("font-size")).attr("x",t.x())}}}),a.extend(a.Text,a.Tspan,{plain:function(t){return!1===this._build&&this.clear(),this.node.appendChild(i.createTextNode(t)),this},tspan:function(t){var e=(this.textPath&&this.textPath()||this).node,i=new a.Tspan;return!1===this._build&&this.clear(),e.appendChild(i.node),i.text(t)},clear:function(){for(var t=(this.textPath&&this.textPath()||this).node;t.hasChildNodes();)t.removeChild(t.lastChild);return this},length:function(){return this.node.getComputedTextLength()}}),a.TextPath=a.invent({create:"textPath",inherit:a.Parent,parent:a.Text,construct:{morphArray:a.PathArray,array:function(){var t=this.track();return t?t.array():null},plot:function(t){var e=this.track(),i=null;return e&&(i=e.plot(t)),null==t?i:this},track:function(){var t=this.textPath();if(t)return t.reference("href")},textPath:function(){if(this.node.firstChild&&"textPath"==this.node.firstChild.nodeName)return a.adopt(this.node.firstChild)}}}),a.Nested=a.invent({create:function(){this.constructor.call(this,a.create("svg")),this.style("overflow","visible")},inherit:a.Container,construct:{nested:function(){return this.put(new a.Nested)}}});var l={stroke:["color","width","opacity","linecap","linejoin","miterlimit","dasharray","dashoffset"],fill:["color","opacity","rule"],prefix:function(t,e){return"color"==e?t:t+"-"+e}};function h(t,e,i,s){return i+s.replace(a.regex.dots," .")}function c(t){return t.toLowerCase().replace(/-(.)/g,(function(t,e){return e.toUpperCase()}))}function d(t){return t.charAt(0).toUpperCase()+t.slice(1)}function g(t){var e=t.toString(16);return 1==e.length?"0"+e:e}function u(t,e,i){if(null==e||null==i){var a=t.bbox();null==e?e=a.width/a.height*i:null==i&&(i=a.height/a.width*e)}return{width:e,height:i}}function f(t,e,i){return{x:e*t.a+i*t.c+0,y:e*t.b+i*t.d+0}}function p(t){return{a:t[0],b:t[1],c:t[2],d:t[3],e:t[4],f:t[5]}}function x(t){for(var i=t.childNodes.length-1;i>=0;i--)t.childNodes[i]instanceof e.SVGElement&&x(t.childNodes[i]);return a.adopt(t).id(a.eid(t.nodeName))}function b(t){return null==t.x&&(t.x=0,t.y=0,t.width=0,t.height=0),t.w=t.width,t.h=t.height,t.x2=t.x+t.width,t.y2=t.y+t.height,t.cx=t.x+t.width/2,t.cy=t.y+t.height/2,t}function m(t){return Math.abs(t)>1e-37?t:0}["fill","stroke"].forEach((function(t){var e={};e[t]=function(e){if(void 0===e)return this;if("string"==typeof e||a.Color.isRgb(e)||e&&"function"==typeof e.fill)this.attr(t,e);else for(var i=l[t].length-1;i>=0;i--)null!=e[l[t][i]]&&this.attr(l.prefix(t,l[t][i]),e[l[t][i]]);return this},a.extend(a.Element,a.FX,e)})),a.extend(a.Element,a.FX,{translate:function(t,e){return this.transform({x:t,y:e})},matrix:function(t){return this.attr("transform",new a.Matrix(6==arguments.length?[].slice.call(arguments):t))},opacity:function(t){return this.attr("opacity",t)},dx:function(t){return this.x(new a.Number(t).plus(this instanceof a.FX?0:this.x()),!0)},dy:function(t){return this.y(new a.Number(t).plus(this instanceof a.FX?0:this.y()),!0)}}),a.extend(a.Path,{length:function(){return this.node.getTotalLength()},pointAt:function(t){return this.node.getPointAtLength(t)}}),a.Set=a.invent({create:function(t){Array.isArray(t)?this.members=t:this.clear()},extend:{add:function(){for(var t=[].slice.call(arguments),e=0,i=t.length;e<i;e++)this.members.push(t[e]);return this},remove:function(t){var e=this.index(t);return e>-1&&this.members.splice(e,1),this},each:function(t){for(var e=0,i=this.members.length;e<i;e++)t.apply(this.members[e],[e,this.members]);return this},clear:function(){return this.members=[],this},length:function(){return this.members.length},has:function(t){return this.index(t)>=0},index:function(t){return this.members.indexOf(t)},get:function(t){return this.members[t]},first:function(){return this.get(0)},last:function(){return this.get(this.members.length-1)},valueOf:function(){return this.members}},construct:{set:function(t){return new a.Set(t)}}}),a.FX.Set=a.invent({create:function(t){this.set=t}}),a.Set.inherit=function(){var t=[];for(var e in a.Shape.prototype)"function"==typeof a.Shape.prototype[e]&&"function"!=typeof a.Set.prototype[e]&&t.push(e);for(var e in t.forEach((function(t){a.Set.prototype[t]=function(){for(var e=0,i=this.members.length;e<i;e++)this.members[e]&&"function"==typeof this.members[e][t]&&this.members[e][t].apply(this.members[e],arguments);return"animate"==t?this.fx||(this.fx=new a.FX.Set(this)):this}})),t=[],a.FX.prototype)"function"==typeof a.FX.prototype[e]&&"function"!=typeof a.FX.Set.prototype[e]&&t.push(e);t.forEach((function(t){a.FX.Set.prototype[t]=function(){for(var e=0,i=this.set.members.length;e<i;e++)this.set.members[e].fx[t].apply(this.set.members[e].fx,arguments);return this}}))},a.extend(a.Element,{}),a.extend(a.Element,{remember:function(e,i){if("object"===t(arguments[0]))for(var a in e)this.remember(a,e[a]);else{if(1==arguments.length)return this.memory()[e];this.memory()[e]=i}return this},forget:function(){if(0==arguments.length)this._memory={};else for(var t=arguments.length-1;t>=0;t--)delete this.memory()[arguments[t]];return this},memory:function(){return this._memory||(this._memory={})}}),a.get=function(t){var e=i.getElementById(function(t){var e=(t||"").toString().match(a.regex.reference);if(e)return e[1]}(t)||t);return a.adopt(e)},a.select=function(t,e){return new a.Set(a.utils.map((e||i).querySelectorAll(t),(function(t){return a.adopt(t)})))},a.extend(a.Parent,{select:function(t){return a.select(t,this.node)}});var v="abcdef".split("");if("function"!=typeof e.CustomEvent){var y=function(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var a=i.createEvent("CustomEvent");return a.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),a};y.prototype=e.Event.prototype,a.CustomEvent=y}else a.CustomEvent=e.CustomEvent;return a}, true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return zt(Tt,Tt.document)}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined,
/*! svg.filter.js - v2.0.2 - 2016-02-24
  * https://github.com/wout/svg.filter.js
  * Copyright (c) 2016 Wout Fierens; Licensed MIT */
function(){SVG.Filter=SVG.invent({create:"filter",inherit:SVG.Parent,extend:{source:"SourceGraphic",sourceAlpha:"SourceAlpha",background:"BackgroundImage",backgroundAlpha:"BackgroundAlpha",fill:"FillPaint",stroke:"StrokePaint",autoSetIn:!0,put:function(t,e){return this.add(t,e),!t.attr("in")&&this.autoSetIn&&t.attr("in",this.source),t.attr("result")||t.attr("result",t),t},blend:function(t,e,i){return this.put(new SVG.BlendEffect(t,e,i))},colorMatrix:function(t,e){return this.put(new SVG.ColorMatrixEffect(t,e))},convolveMatrix:function(t){return this.put(new SVG.ConvolveMatrixEffect(t))},componentTransfer:function(t){return this.put(new SVG.ComponentTransferEffect(t))},composite:function(t,e,i){return this.put(new SVG.CompositeEffect(t,e,i))},flood:function(t,e){return this.put(new SVG.FloodEffect(t,e))},offset:function(t,e){return this.put(new SVG.OffsetEffect(t,e))},image:function(t){return this.put(new SVG.ImageEffect(t))},merge:function(){var t=[void 0];for(var e in arguments)t.push(arguments[e]);return this.put(new(SVG.MergeEffect.bind.apply(SVG.MergeEffect,t)))},gaussianBlur:function(t,e){return this.put(new SVG.GaussianBlurEffect(t,e))},morphology:function(t,e){return this.put(new SVG.MorphologyEffect(t,e))},diffuseLighting:function(t,e,i){return this.put(new SVG.DiffuseLightingEffect(t,e,i))},displacementMap:function(t,e,i,a,s){return this.put(new SVG.DisplacementMapEffect(t,e,i,a,s))},specularLighting:function(t,e,i,a){return this.put(new SVG.SpecularLightingEffect(t,e,i,a))},tile:function(){return this.put(new SVG.TileEffect)},turbulence:function(t,e,i,a,s){return this.put(new SVG.TurbulenceEffect(t,e,i,a,s))},toString:function(){return"url(#"+this.attr("id")+")"}}}),SVG.extend(SVG.Defs,{filter:function(t){var e=this.put(new SVG.Filter);return"function"==typeof t&&t.call(e,e),e}}),SVG.extend(SVG.Container,{filter:function(t){return this.defs().filter(t)}}),SVG.extend(SVG.Element,SVG.G,SVG.Nested,{filter:function(t){return this.filterer=t instanceof SVG.Element?t:this.doc().filter(t),this.doc()&&this.filterer.doc()!==this.doc()&&this.doc().defs().add(this.filterer),this.attr("filter",this.filterer),this.filterer},unfilter:function(t){return this.filterer&&!0===t&&this.filterer.remove(),delete this.filterer,this.attr("filter",null)}}),SVG.Effect=SVG.invent({create:function(){this.constructor.call(this)},inherit:SVG.Element,extend:{in:function(t){return null==t?this.parent()&&this.parent().select('[result="'+this.attr("in")+'"]').get(0)||this.attr("in"):this.attr("in",t)},result:function(t){return null==t?this.attr("result"):this.attr("result",t)},toString:function(){return this.result()}}}),SVG.ParentEffect=SVG.invent({create:function(){this.constructor.call(this)},inherit:SVG.Parent,extend:{in:function(t){return null==t?this.parent()&&this.parent().select('[result="'+this.attr("in")+'"]').get(0)||this.attr("in"):this.attr("in",t)},result:function(t){return null==t?this.attr("result"):this.attr("result",t)},toString:function(){return this.result()}}});var t={blend:function(t,e){return this.parent()&&this.parent().blend(this,t,e)},colorMatrix:function(t,e){return this.parent()&&this.parent().colorMatrix(t,e).in(this)},convolveMatrix:function(t){return this.parent()&&this.parent().convolveMatrix(t).in(this)},componentTransfer:function(t){return this.parent()&&this.parent().componentTransfer(t).in(this)},composite:function(t,e){return this.parent()&&this.parent().composite(this,t,e)},flood:function(t,e){return this.parent()&&this.parent().flood(t,e)},offset:function(t,e){return this.parent()&&this.parent().offset(t,e).in(this)},image:function(t){return this.parent()&&this.parent().image(t)},merge:function(){return this.parent()&&this.parent().merge.apply(this.parent(),[this].concat(arguments))},gaussianBlur:function(t,e){return this.parent()&&this.parent().gaussianBlur(t,e).in(this)},morphology:function(t,e){return this.parent()&&this.parent().morphology(t,e).in(this)},diffuseLighting:function(t,e,i){return this.parent()&&this.parent().diffuseLighting(t,e,i).in(this)},displacementMap:function(t,e,i,a){return this.parent()&&this.parent().displacementMap(this,t,e,i,a)},specularLighting:function(t,e,i,a){return this.parent()&&this.parent().specularLighting(t,e,i,a).in(this)},tile:function(){return this.parent()&&this.parent().tile().in(this)},turbulence:function(t,e,i,a,s){return this.parent()&&this.parent().turbulence(t,e,i,a,s).in(this)}};SVG.extend(SVG.Effect,t),SVG.extend(SVG.ParentEffect,t),SVG.ChildEffect=SVG.invent({create:function(){this.constructor.call(this)},inherit:SVG.Element,extend:{in:function(t){this.attr("in",t)}}});var e={blend:function(t,e,i){this.attr({in:t,in2:e,mode:i||"normal"})},colorMatrix:function(t,e){"matrix"==t&&(e=s(e)),this.attr({type:t,values:void 0===e?null:e})},convolveMatrix:function(t){t=s(t),this.attr({order:Math.sqrt(t.split(" ").length),kernelMatrix:t})},composite:function(t,e,i){this.attr({in:t,in2:e,operator:i})},flood:function(t,e){this.attr("flood-color",t),null!=e&&this.attr("flood-opacity",e)},offset:function(t,e){this.attr({dx:t,dy:e})},image:function(t){this.attr("href",t,SVG.xlink)},displacementMap:function(t,e,i,a,s){this.attr({in:t,in2:e,scale:i,xChannelSelector:a,yChannelSelector:s})},gaussianBlur:function(t,e){null!=t||null!=e?this.attr("stdDeviation",r(Array.prototype.slice.call(arguments))):this.attr("stdDeviation","0 0")},morphology:function(t,e){this.attr({operator:t,radius:e})},tile:function(){},turbulence:function(t,e,i,a,s){this.attr({numOctaves:e,seed:i,stitchTiles:a,baseFrequency:t,type:s})}},i={merge:function(){var t;if(arguments[0]instanceof SVG.Set){var e=this;arguments[0].each((function(t){this instanceof SVG.MergeNode?e.put(this):(this instanceof SVG.Effect||this instanceof SVG.ParentEffect)&&e.put(new SVG.MergeNode(this))}))}else{t=Array.isArray(arguments[0])?arguments[0]:arguments;for(var i=0;i<t.length;i++)t[i]instanceof SVG.MergeNode?this.put(t[i]):this.put(new SVG.MergeNode(t[i]))}},componentTransfer:function(t){if(this.rgb=new SVG.Set,["r","g","b","a"].forEach(function(t){this[t]=new(SVG["Func"+t.toUpperCase()])("identity"),this.rgb.add(this[t]),this.node.appendChild(this[t].node)}.bind(this)),t)for(var e in t.rgb&&(["r","g","b"].forEach(function(e){this[e].attr(t.rgb)}.bind(this)),delete t.rgb),t)this[e].attr(t[e])},diffuseLighting:function(t,e,i){this.attr({surfaceScale:t,diffuseConstant:e,kernelUnitLength:i})},specularLighting:function(t,e,i,a){this.attr({surfaceScale:t,diffuseConstant:e,specularExponent:i,kernelUnitLength:a})}},a={distantLight:function(t,e){this.attr({azimuth:t,elevation:e})},pointLight:function(t,e,i){this.attr({x:t,y:e,z:i})},spotLight:function(t,e,i,a,s,r){this.attr({x:t,y:e,z:i,pointsAtX:a,pointsAtY:s,pointsAtZ:r})},mergeNode:function(t){this.attr("in",t)}};function s(t){return Array.isArray(t)&&(t=new SVG.Array(t)),t.toString().replace(/^\s+/,"").replace(/\s+$/,"").replace(/\s+/g," ")}function r(t){if(!Array.isArray(t))return t;for(var e=0,i=t.length,a=[];e<i;e++)a.push(t[e]);return a.join(" ")}function n(){var t=function(){};for(var e in"function"==typeof arguments[arguments.length-1]&&(t=arguments[arguments.length-1],Array.prototype.splice.call(arguments,arguments.length-1,1)),arguments)for(var i in arguments[e])t(arguments[e][i],i,arguments[e])}["r","g","b","a"].forEach((function(t){a["Func"+t.toUpperCase()]=function(t){switch(this.attr("type",t),t){case"table":this.attr("tableValues",arguments[1]);break;case"linear":this.attr("slope",arguments[1]),this.attr("intercept",arguments[2]);break;case"gamma":this.attr("amplitude",arguments[1]),this.attr("exponent",arguments[2]),this.attr("offset",arguments[2])}}})),n(e,(function(t,e){var i=e.charAt(0).toUpperCase()+e.slice(1);SVG[i+"Effect"]=SVG.invent({create:function(){this.constructor.call(this,SVG.create("fe"+i)),t.apply(this,arguments),this.result(this.attr("id")+"Out")},inherit:SVG.Effect,extend:{}})})),n(i,(function(t,e){var i=e.charAt(0).toUpperCase()+e.slice(1);SVG[i+"Effect"]=SVG.invent({create:function(){this.constructor.call(this,SVG.create("fe"+i)),t.apply(this,arguments),this.result(this.attr("id")+"Out")},inherit:SVG.ParentEffect,extend:{}})})),n(a,(function(t,e){var i=e.charAt(0).toUpperCase()+e.slice(1);SVG[i]=SVG.invent({create:function(){this.constructor.call(this,SVG.create("fe"+i)),t.apply(this,arguments)},inherit:SVG.ChildEffect,extend:{}})})),SVG.extend(SVG.MergeEffect,{in:function(t){return t instanceof SVG.MergeNode?this.add(t,0):this.add(new SVG.MergeNode(t),0),this}}),SVG.extend(SVG.CompositeEffect,SVG.BlendEffect,SVG.DisplacementMapEffect,{in2:function(t){return null==t?this.parent()&&this.parent().select('[result="'+this.attr("in2")+'"]').get(0)||this.attr("in2"):this.attr("in2",t)}}),SVG.filter={sepiatone:[.343,.669,.119,0,0,.249,.626,.13,0,0,.172,.334,.111,0,0,0,0,0,1,0]}}.call(void 0),function(){function t(t,s,r,n,o,l,h){for(var c=t.slice(s,r||h),d=n.slice(o,l||h),g=0,u={pos:[0,0],start:[0,0]},f={pos:[0,0],start:[0,0]};;){if(c[g]=e.call(u,c[g]),d[g]=e.call(f,d[g]),c[g][0]!=d[g][0]||"M"==c[g][0]||"A"==c[g][0]&&(c[g][4]!=d[g][4]||c[g][5]!=d[g][5])?(Array.prototype.splice.apply(c,[g,1].concat(a.call(u,c[g]))),Array.prototype.splice.apply(d,[g,1].concat(a.call(f,d[g])))):(c[g]=i.call(u,c[g]),d[g]=i.call(f,d[g])),++g==c.length&&g==d.length)break;g==c.length&&c.push(["C",u.pos[0],u.pos[1],u.pos[0],u.pos[1],u.pos[0],u.pos[1]]),g==d.length&&d.push(["C",f.pos[0],f.pos[1],f.pos[0],f.pos[1],f.pos[0],f.pos[1]])}return{start:c,dest:d}}function e(t){switch(t[0]){case"z":case"Z":t[0]="L",t[1]=this.start[0],t[2]=this.start[1];break;case"H":t[0]="L",t[2]=this.pos[1];break;case"V":t[0]="L",t[2]=t[1],t[1]=this.pos[0];break;case"T":t[0]="Q",t[3]=t[1],t[4]=t[2],t[1]=this.reflection[1],t[2]=this.reflection[0];break;case"S":t[0]="C",t[6]=t[4],t[5]=t[3],t[4]=t[2],t[3]=t[1],t[2]=this.reflection[1],t[1]=this.reflection[0]}return t}function i(t){var e=t.length;return this.pos=[t[e-2],t[e-1]],-1!="SCQT".indexOf(t[0])&&(this.reflection=[2*this.pos[0]-t[e-4],2*this.pos[1]-t[e-3]]),t}function a(t){var e=[t];switch(t[0]){case"M":return this.pos=this.start=[t[1],t[2]],e;case"L":t[5]=t[3]=t[1],t[6]=t[4]=t[2],t[1]=this.pos[0],t[2]=this.pos[1];break;case"Q":t[6]=t[4],t[5]=t[3],t[4]=1*t[4]/3+2*t[2]/3,t[3]=1*t[3]/3+2*t[1]/3,t[2]=1*this.pos[1]/3+2*t[2]/3,t[1]=1*this.pos[0]/3+2*t[1]/3;break;case"A":t=(e=function(t,e){var i,a,s,r,n,o,l,h,c,d,g,u,f,p,x,b,m,v,y,w,k,A,S,C,L,P,T=Math.abs(e[1]),z=Math.abs(e[2]),I=e[3]%360,M=e[4],E=e[5],X=e[6],Y=e[7],F=new SVG.Point(t),R=new SVG.Point(X,Y),D=[];if(0===T||0===z||F.x===R.x&&F.y===R.y)return[["C",F.x,F.y,R.x,R.y,R.x,R.y]];i=new SVG.Point((F.x-R.x)/2,(F.y-R.y)/2).transform((new SVG.Matrix).rotate(I)),(a=i.x*i.x/(T*T)+i.y*i.y/(z*z))>1&&(T*=a=Math.sqrt(a),z*=a);s=(new SVG.Matrix).rotate(I).scale(1/T,1/z).rotate(-I),F=F.transform(s),R=R.transform(s),r=[R.x-F.x,R.y-F.y],o=r[0]*r[0]+r[1]*r[1],n=Math.sqrt(o),r[0]/=n,r[1]/=n,l=o<4?Math.sqrt(1-o/4):0,M===E&&(l*=-1);h=new SVG.Point((R.x+F.x)/2+l*-r[1],(R.y+F.y)/2+l*r[0]),c=new SVG.Point(F.x-h.x,F.y-h.y),d=new SVG.Point(R.x-h.x,R.y-h.y),g=Math.acos(c.x/Math.sqrt(c.x*c.x+c.y*c.y)),c.y<0&&(g*=-1);u=Math.acos(d.x/Math.sqrt(d.x*d.x+d.y*d.y)),d.y<0&&(u*=-1);E&&g>u&&(u+=2*Math.PI);!E&&g<u&&(u-=2*Math.PI);for(p=Math.ceil(2*Math.abs(g-u)/Math.PI),b=[],m=g,f=(u-g)/p,x=4*Math.tan(f/4)/3,k=0;k<=p;k++)y=Math.cos(m),v=Math.sin(m),w=new SVG.Point(h.x+y,h.y+v),b[k]=[new SVG.Point(w.x+x*v,w.y-x*y),w,new SVG.Point(w.x-x*v,w.y+x*y)],m+=f;for(b[0][0]=b[0][1].clone(),b[b.length-1][2]=b[b.length-1][1].clone(),s=(new SVG.Matrix).rotate(I).scale(T,z).rotate(-I),k=0,A=b.length;k<A;k++)b[k][0]=b[k][0].transform(s),b[k][1]=b[k][1].transform(s),b[k][2]=b[k][2].transform(s);for(k=1,A=b.length;k<A;k++)S=(w=b[k-1][2]).x,C=w.y,L=(w=b[k][0]).x,P=w.y,X=(w=b[k][1]).x,Y=w.y,D.push(["C",S,C,L,P,X,Y]);return D}(this.pos,t))[0]}return t[0]="C",this.pos=[t[5],t[6]],this.reflection=[2*t[5]-t[3],2*t[6]-t[4]],e}function s(t,e){if(!1===e)return!1;for(var i=e,a=t.length;i<a;++i)if("M"==t[i][0])return i;return!1}SVG.extend(SVG.PathArray,{morph:function(e){for(var i=this.value,a=this.parse(e),r=0,n=0,o=!1,l=!1;!1!==r||!1!==n;){var h;o=s(i,!1!==r&&r+1),l=s(a,!1!==n&&n+1),!1===r&&(r=0==(h=new SVG.PathArray(c.start).bbox()).height||0==h.width?i.push(i[0])-1:i.push(["M",h.x+h.width/2,h.y+h.height/2])-1),!1===n&&(n=0==(h=new SVG.PathArray(c.dest).bbox()).height||0==h.width?a.push(a[0])-1:a.push(["M",h.x+h.width/2,h.y+h.height/2])-1);var c=t(i,r,o,a,n,l);i=i.slice(0,r).concat(c.start,!1===o?[]:i.slice(o)),a=a.slice(0,n).concat(c.dest,!1===l?[]:a.slice(l)),r=!1!==o&&r+c.start.length,n=!1!==l&&n+c.dest.length}return this.value=i,this.destination=new SVG.PathArray,this.destination.value=a,this}})}(),
/*! svg.draggable.js - v2.2.2 - 2019-01-08
  * https://github.com/svgdotjs/svg.draggable.js
  * Copyright (c) 2019 Wout Fierens; Licensed MIT */
function(){function t(t){t.remember("_draggable",this),this.el=t}t.prototype.init=function(t,e){var i=this;this.constraint=t,this.value=e,this.el.on("mousedown.drag",(function(t){i.start(t)})),this.el.on("touchstart.drag",(function(t){i.start(t)}))},t.prototype.transformPoint=function(t,e){var i=(t=t||window.event).changedTouches&&t.changedTouches[0]||t;return this.p.x=i.clientX-(e||0),this.p.y=i.clientY,this.p.matrixTransform(this.m)},t.prototype.getBBox=function(){var t=this.el.bbox();return this.el instanceof SVG.Nested&&(t=this.el.rbox()),(this.el instanceof SVG.G||this.el instanceof SVG.Use||this.el instanceof SVG.Nested)&&(t.x=this.el.x(),t.y=this.el.y()),t},t.prototype.start=function(t){if("click"!=t.type&&"mousedown"!=t.type&&"mousemove"!=t.type||1==(t.which||t.buttons)){var e=this;if(this.el.fire("beforedrag",{event:t,handler:this}),!this.el.event().defaultPrevented){t.preventDefault(),t.stopPropagation(),this.parent=this.parent||this.el.parent(SVG.Nested)||this.el.parent(SVG.Doc),this.p=this.parent.node.createSVGPoint(),this.m=this.el.node.getScreenCTM().inverse();var i,a=this.getBBox();if(this.el instanceof SVG.Text)switch(i=this.el.node.getComputedTextLength(),this.el.attr("text-anchor")){case"middle":i/=2;break;case"start":i=0}this.startPoints={point:this.transformPoint(t,i),box:a,transform:this.el.transform()},SVG.on(window,"mousemove.drag",(function(t){e.drag(t)})),SVG.on(window,"touchmove.drag",(function(t){e.drag(t)})),SVG.on(window,"mouseup.drag",(function(t){e.end(t)})),SVG.on(window,"touchend.drag",(function(t){e.end(t)})),this.el.fire("dragstart",{event:t,p:this.startPoints.point,m:this.m,handler:this})}}},t.prototype.drag=function(t){var e=this.getBBox(),i=this.transformPoint(t),a=this.startPoints.box.x+i.x-this.startPoints.point.x,s=this.startPoints.box.y+i.y-this.startPoints.point.y,r=this.constraint,n=i.x-this.startPoints.point.x,o=i.y-this.startPoints.point.y;if(this.el.fire("dragmove",{event:t,p:i,m:this.m,handler:this}),this.el.event().defaultPrevented)return i;if("function"==typeof r){var l=r.call(this.el,a,s,this.m);"boolean"==typeof l&&(l={x:l,y:l}),!0===l.x?this.el.x(a):!1!==l.x&&this.el.x(l.x),!0===l.y?this.el.y(s):!1!==l.y&&this.el.y(l.y)}else"object"==typeof r&&(null!=r.minX&&a<r.minX?n=(a=r.minX)-this.startPoints.box.x:null!=r.maxX&&a>r.maxX-e.width&&(n=(a=r.maxX-e.width)-this.startPoints.box.x),null!=r.minY&&s<r.minY?o=(s=r.minY)-this.startPoints.box.y:null!=r.maxY&&s>r.maxY-e.height&&(o=(s=r.maxY-e.height)-this.startPoints.box.y),null!=r.snapToGrid&&(a-=a%r.snapToGrid,s-=s%r.snapToGrid,n-=n%r.snapToGrid,o-=o%r.snapToGrid),this.el instanceof SVG.G?this.el.matrix(this.startPoints.transform).transform({x:n,y:o},!0):this.el.move(a,s));return i},t.prototype.end=function(t){var e=this.drag(t);this.el.fire("dragend",{event:t,p:e,m:this.m,handler:this}),SVG.off(window,"mousemove.drag"),SVG.off(window,"touchmove.drag"),SVG.off(window,"mouseup.drag"),SVG.off(window,"touchend.drag")},SVG.extend(SVG.Element,{draggable:function(e,i){"function"!=typeof e&&"object"!=typeof e||(i=e,e=!0);var a=this.remember("_draggable")||new t(this);return(e=void 0===e||e)?a.init(i||{},e):(this.off("mousedown.drag"),this.off("touchstart.drag")),this}})}.call(void 0),function(){function t(t){this.el=t,t.remember("_selectHandler",this),this.pointSelection={isSelected:!1},this.rectSelection={isSelected:!1},this.pointsList={lt:[0,0],rt:["width",0],rb:["width","height"],lb:[0,"height"],t:["width",0],r:["width","height"],b:["width","height"],l:[0,"height"]},this.pointCoord=function(t,e,i){var a="string"!=typeof t?t:e[t];return i?a/2:a},this.pointCoords=function(t,e){var i=this.pointsList[t];return{x:this.pointCoord(i[0],e,"t"===t||"b"===t),y:this.pointCoord(i[1],e,"r"===t||"l"===t)}}}t.prototype.init=function(t,e){var i=this.el.bbox();this.options={};var a=this.el.selectize.defaults.points;for(var s in this.el.selectize.defaults)this.options[s]=this.el.selectize.defaults[s],void 0!==e[s]&&(this.options[s]=e[s]);var r=["points","pointsExclude"];for(var s in r){var n=this.options[r[s]];"string"==typeof n?n=n.length>0?n.split(/\s*,\s*/i):[]:"boolean"==typeof n&&"points"===r[s]&&(n=n?a:[]),this.options[r[s]]=n}this.options.points=[a,this.options.points].reduce((function(t,e){return t.filter((function(t){return e.indexOf(t)>-1}))})),this.options.points=[this.options.points,this.options.pointsExclude].reduce((function(t,e){return t.filter((function(t){return e.indexOf(t)<0}))})),this.parent=this.el.parent(),this.nested=this.nested||this.parent.group(),this.nested.matrix(new SVG.Matrix(this.el).translate(i.x,i.y)),this.options.deepSelect&&-1!==["line","polyline","polygon"].indexOf(this.el.type)?this.selectPoints(t):this.selectRect(t),this.observe(),this.cleanup()},t.prototype.selectPoints=function(t){return this.pointSelection.isSelected=t,this.pointSelection.set||(this.pointSelection.set=this.parent.set(),this.drawPoints()),this},t.prototype.getPointArray=function(){var t=this.el.bbox();return this.el.array().valueOf().map((function(e){return[e[0]-t.x,e[1]-t.y]}))},t.prototype.drawPoints=function(){for(var t=this,e=this.getPointArray(),i=0,a=e.length;i<a;++i){var s=function(e){return function(i){(i=i||window.event).preventDefault?i.preventDefault():i.returnValue=!1,i.stopPropagation();var a=i.pageX||i.touches[0].pageX,s=i.pageY||i.touches[0].pageY;t.el.fire("point",{x:a,y:s,i:e,event:i})}}(i),r=this.drawPoint(e[i][0],e[i][1]).addClass(this.options.classPoints).addClass(this.options.classPoints+"_point").on("touchstart",s).on("mousedown",s);this.pointSelection.set.add(r)}},t.prototype.drawPoint=function(t,e){var i=this.options.pointType;switch(i){case"circle":return this.drawCircle(t,e);case"rect":return this.drawRect(t,e);default:if("function"==typeof i)return i.call(this,t,e);throw new Error("Unknown "+i+" point type!")}},t.prototype.drawCircle=function(t,e){return this.nested.circle(this.options.pointSize).center(t,e)},t.prototype.drawRect=function(t,e){return this.nested.rect(this.options.pointSize,this.options.pointSize).center(t,e)},t.prototype.updatePointSelection=function(){var t=this.getPointArray();this.pointSelection.set.each((function(e){this.cx()===t[e][0]&&this.cy()===t[e][1]||this.center(t[e][0],t[e][1])}))},t.prototype.updateRectSelection=function(){var t=this,e=this.el.bbox();if(this.rectSelection.set.get(0).attr({width:e.width,height:e.height}),this.options.points.length&&this.options.points.map((function(i,a){var s=t.pointCoords(i,e);t.rectSelection.set.get(a+1).center(s.x,s.y)})),this.options.rotationPoint){var i=this.rectSelection.set.length();this.rectSelection.set.get(i-1).center(e.width/2,20)}},t.prototype.selectRect=function(t){var e=this,i=this.el.bbox();function a(t){return function(i){(i=i||window.event).preventDefault?i.preventDefault():i.returnValue=!1,i.stopPropagation();var a=i.pageX||i.touches[0].pageX,s=i.pageY||i.touches[0].pageY;e.el.fire(t,{x:a,y:s,event:i})}}if(this.rectSelection.isSelected=t,this.rectSelection.set=this.rectSelection.set||this.parent.set(),this.rectSelection.set.get(0)||this.rectSelection.set.add(this.nested.rect(i.width,i.height).addClass(this.options.classRect)),this.options.points.length&&this.rectSelection.set.length()<2){this.options.points.map((function(t,s){var r=e.pointCoords(t,i),n=e.drawPoint(r.x,r.y).attr("class",e.options.classPoints+"_"+t).on("mousedown",a(t)).on("touchstart",a(t));e.rectSelection.set.add(n)})),this.rectSelection.set.each((function(){this.addClass(e.options.classPoints)}))}if(this.options.rotationPoint&&(this.options.points&&!this.rectSelection.set.get(9)||!this.options.points&&!this.rectSelection.set.get(1))){var s=function(t){(t=t||window.event).preventDefault?t.preventDefault():t.returnValue=!1,t.stopPropagation();var i=t.pageX||t.touches[0].pageX,a=t.pageY||t.touches[0].pageY;e.el.fire("rot",{x:i,y:a,event:t})},r=this.drawPoint(i.width/2,20).attr("class",this.options.classPoints+"_rot").on("touchstart",s).on("mousedown",s);this.rectSelection.set.add(r)}},t.prototype.handler=function(){var t=this.el.bbox();this.nested.matrix(new SVG.Matrix(this.el).translate(t.x,t.y)),this.rectSelection.isSelected&&this.updateRectSelection(),this.pointSelection.isSelected&&this.updatePointSelection()},t.prototype.observe=function(){var t=this;if(MutationObserver)if(this.rectSelection.isSelected||this.pointSelection.isSelected)this.observerInst=this.observerInst||new MutationObserver((function(){t.handler()})),this.observerInst.observe(this.el.node,{attributes:!0});else try{this.observerInst.disconnect(),delete this.observerInst}catch(t){}else this.el.off("DOMAttrModified.select"),(this.rectSelection.isSelected||this.pointSelection.isSelected)&&this.el.on("DOMAttrModified.select",(function(){t.handler()}))},t.prototype.cleanup=function(){!this.rectSelection.isSelected&&this.rectSelection.set&&(this.rectSelection.set.each((function(){this.remove()})),this.rectSelection.set.clear(),delete this.rectSelection.set),!this.pointSelection.isSelected&&this.pointSelection.set&&(this.pointSelection.set.each((function(){this.remove()})),this.pointSelection.set.clear(),delete this.pointSelection.set),this.pointSelection.isSelected||this.rectSelection.isSelected||(this.nested.remove(),delete this.nested)},SVG.extend(SVG.Element,{selectize:function(e,i){return"object"==typeof e&&(i=e,e=!0),(this.remember("_selectHandler")||new t(this)).init(void 0===e||e,i||{}),this}}),SVG.Element.prototype.selectize.defaults={points:["lt","rt","rb","lb","t","r","b","l"],pointsExclude:[],classRect:"svg_select_boundingRect",classPoints:"svg_select_points",pointSize:7,rotationPoint:!0,deepSelect:!1,pointType:"circle"}}(),function(){(function(){function t(t){t.remember("_resizeHandler",this),this.el=t,this.parameters={},this.lastUpdateCall=null,this.p=t.doc().node.createSVGPoint()}t.prototype.transformPoint=function(t,e,i){return this.p.x=t-(this.offset.x-window.pageXOffset),this.p.y=e-(this.offset.y-window.pageYOffset),this.p.matrixTransform(i||this.m)},t.prototype._extractPosition=function(t){return{x:null!=t.clientX?t.clientX:t.touches[0].clientX,y:null!=t.clientY?t.clientY:t.touches[0].clientY}},t.prototype.init=function(t){var e=this;if(this.stop(),"stop"!==t){for(var i in this.options={},this.el.resize.defaults)this.options[i]=this.el.resize.defaults[i],void 0!==t[i]&&(this.options[i]=t[i]);this.el.on("lt.resize",(function(t){e.resize(t||window.event)})),this.el.on("rt.resize",(function(t){e.resize(t||window.event)})),this.el.on("rb.resize",(function(t){e.resize(t||window.event)})),this.el.on("lb.resize",(function(t){e.resize(t||window.event)})),this.el.on("t.resize",(function(t){e.resize(t||window.event)})),this.el.on("r.resize",(function(t){e.resize(t||window.event)})),this.el.on("b.resize",(function(t){e.resize(t||window.event)})),this.el.on("l.resize",(function(t){e.resize(t||window.event)})),this.el.on("rot.resize",(function(t){e.resize(t||window.event)})),this.el.on("point.resize",(function(t){e.resize(t||window.event)})),this.update()}},t.prototype.stop=function(){return this.el.off("lt.resize"),this.el.off("rt.resize"),this.el.off("rb.resize"),this.el.off("lb.resize"),this.el.off("t.resize"),this.el.off("r.resize"),this.el.off("b.resize"),this.el.off("l.resize"),this.el.off("rot.resize"),this.el.off("point.resize"),this},t.prototype.resize=function(t){var e=this;this.m=this.el.node.getScreenCTM().inverse(),this.offset={x:window.pageXOffset,y:window.pageYOffset};var i=this._extractPosition(t.detail.event);if(this.parameters={type:this.el.type,p:this.transformPoint(i.x,i.y),x:t.detail.x,y:t.detail.y,box:this.el.bbox(),rotation:this.el.transform().rotation},"text"===this.el.type&&(this.parameters.fontSize=this.el.attr()["font-size"]),void 0!==t.detail.i){var a=this.el.array().valueOf();this.parameters.i=t.detail.i,this.parameters.pointCoords=[a[t.detail.i][0],a[t.detail.i][1]]}switch(t.type){case"lt":this.calc=function(t,e){var i=this.snapToGrid(t,e);if(this.parameters.box.width-i[0]>0&&this.parameters.box.height-i[1]>0){if("text"===this.parameters.type)return this.el.move(this.parameters.box.x+i[0],this.parameters.box.y),void this.el.attr("font-size",this.parameters.fontSize-i[0]);i=this.checkAspectRatio(i),this.el.move(this.parameters.box.x+i[0],this.parameters.box.y+i[1]).size(this.parameters.box.width-i[0],this.parameters.box.height-i[1])}};break;case"rt":this.calc=function(t,e){var i=this.snapToGrid(t,e,2);if(this.parameters.box.width+i[0]>0&&this.parameters.box.height-i[1]>0){if("text"===this.parameters.type)return this.el.move(this.parameters.box.x-i[0],this.parameters.box.y),void this.el.attr("font-size",this.parameters.fontSize+i[0]);i=this.checkAspectRatio(i,!0),this.el.move(this.parameters.box.x,this.parameters.box.y+i[1]).size(this.parameters.box.width+i[0],this.parameters.box.height-i[1])}};break;case"rb":this.calc=function(t,e){var i=this.snapToGrid(t,e,0);if(this.parameters.box.width+i[0]>0&&this.parameters.box.height+i[1]>0){if("text"===this.parameters.type)return this.el.move(this.parameters.box.x-i[0],this.parameters.box.y),void this.el.attr("font-size",this.parameters.fontSize+i[0]);i=this.checkAspectRatio(i),this.el.move(this.parameters.box.x,this.parameters.box.y).size(this.parameters.box.width+i[0],this.parameters.box.height+i[1])}};break;case"lb":this.calc=function(t,e){var i=this.snapToGrid(t,e,1);if(this.parameters.box.width-i[0]>0&&this.parameters.box.height+i[1]>0){if("text"===this.parameters.type)return this.el.move(this.parameters.box.x+i[0],this.parameters.box.y),void this.el.attr("font-size",this.parameters.fontSize-i[0]);i=this.checkAspectRatio(i,!0),this.el.move(this.parameters.box.x+i[0],this.parameters.box.y).size(this.parameters.box.width-i[0],this.parameters.box.height+i[1])}};break;case"t":this.calc=function(t,e){var i=this.snapToGrid(t,e,2);if(this.parameters.box.height-i[1]>0){if("text"===this.parameters.type)return;this.el.move(this.parameters.box.x,this.parameters.box.y+i[1]).height(this.parameters.box.height-i[1])}};break;case"r":this.calc=function(t,e){var i=this.snapToGrid(t,e,0);if(this.parameters.box.width+i[0]>0){if("text"===this.parameters.type)return;this.el.move(this.parameters.box.x,this.parameters.box.y).width(this.parameters.box.width+i[0])}};break;case"b":this.calc=function(t,e){var i=this.snapToGrid(t,e,0);if(this.parameters.box.height+i[1]>0){if("text"===this.parameters.type)return;this.el.move(this.parameters.box.x,this.parameters.box.y).height(this.parameters.box.height+i[1])}};break;case"l":this.calc=function(t,e){var i=this.snapToGrid(t,e,1);if(this.parameters.box.width-i[0]>0){if("text"===this.parameters.type)return;this.el.move(this.parameters.box.x+i[0],this.parameters.box.y).width(this.parameters.box.width-i[0])}};break;case"rot":this.calc=function(t,e){var i=t+this.parameters.p.x,a=e+this.parameters.p.y,s=Math.atan2(this.parameters.p.y-this.parameters.box.y-this.parameters.box.height/2,this.parameters.p.x-this.parameters.box.x-this.parameters.box.width/2),r=Math.atan2(a-this.parameters.box.y-this.parameters.box.height/2,i-this.parameters.box.x-this.parameters.box.width/2),n=this.parameters.rotation+180*(r-s)/Math.PI+this.options.snapToAngle/2;this.el.center(this.parameters.box.cx,this.parameters.box.cy).rotate(n-n%this.options.snapToAngle,this.parameters.box.cx,this.parameters.box.cy)};break;case"point":this.calc=function(t,e){var i=this.snapToGrid(t,e,this.parameters.pointCoords[0],this.parameters.pointCoords[1]),a=this.el.array().valueOf();a[this.parameters.i][0]=this.parameters.pointCoords[0]+i[0],a[this.parameters.i][1]=this.parameters.pointCoords[1]+i[1],this.el.plot(a)}}this.el.fire("resizestart",{dx:this.parameters.x,dy:this.parameters.y,event:t}),SVG.on(window,"touchmove.resize",(function(t){e.update(t||window.event)})),SVG.on(window,"touchend.resize",(function(){e.done()})),SVG.on(window,"mousemove.resize",(function(t){e.update(t||window.event)})),SVG.on(window,"mouseup.resize",(function(){e.done()}))},t.prototype.update=function(t){if(t){var e=this._extractPosition(t),i=this.transformPoint(e.x,e.y),a=i.x-this.parameters.p.x,s=i.y-this.parameters.p.y;this.lastUpdateCall=[a,s],this.calc(a,s),this.el.fire("resizing",{dx:a,dy:s,event:t})}else this.lastUpdateCall&&this.calc(this.lastUpdateCall[0],this.lastUpdateCall[1])},t.prototype.done=function(){this.lastUpdateCall=null,SVG.off(window,"mousemove.resize"),SVG.off(window,"mouseup.resize"),SVG.off(window,"touchmove.resize"),SVG.off(window,"touchend.resize"),this.el.fire("resizedone")},t.prototype.snapToGrid=function(t,e,i,a){var s;return void 0!==a?s=[(i+t)%this.options.snapToGrid,(a+e)%this.options.snapToGrid]:(i=null==i?3:i,s=[(this.parameters.box.x+t+(1&i?0:this.parameters.box.width))%this.options.snapToGrid,(this.parameters.box.y+e+(2&i?0:this.parameters.box.height))%this.options.snapToGrid]),t<0&&(s[0]-=this.options.snapToGrid),e<0&&(s[1]-=this.options.snapToGrid),t-=Math.abs(s[0])<this.options.snapToGrid/2?s[0]:s[0]-(t<0?-this.options.snapToGrid:this.options.snapToGrid),e-=Math.abs(s[1])<this.options.snapToGrid/2?s[1]:s[1]-(e<0?-this.options.snapToGrid:this.options.snapToGrid),this.constraintToBox(t,e,i,a)},t.prototype.constraintToBox=function(t,e,i,a){var s,r,n=this.options.constraint||{};return void 0!==a?(s=i,r=a):(s=this.parameters.box.x+(1&i?0:this.parameters.box.width),r=this.parameters.box.y+(2&i?0:this.parameters.box.height)),void 0!==n.minX&&s+t<n.minX&&(t=n.minX-s),void 0!==n.maxX&&s+t>n.maxX&&(t=n.maxX-s),void 0!==n.minY&&r+e<n.minY&&(e=n.minY-r),void 0!==n.maxY&&r+e>n.maxY&&(e=n.maxY-r),[t,e]},t.prototype.checkAspectRatio=function(t,e){if(!this.options.saveAspectRatio)return t;var i=t.slice(),a=this.parameters.box.width/this.parameters.box.height,s=this.parameters.box.width+t[0],r=this.parameters.box.height-t[1],n=s/r;return n<a?(i[1]=s/a-this.parameters.box.height,e&&(i[1]=-i[1])):n>a&&(i[0]=this.parameters.box.width-r*a,e&&(i[0]=-i[0])),i},SVG.extend(SVG.Element,{resize:function(e){return(this.remember("_resizeHandler")||new t(this)).init(e||{}),this}}),SVG.Element.prototype.resize.defaults={snapToAngle:.1,snapToGrid:1,constraint:{},saveAspectRatio:!1}}).call(this)}();!function(t,e){void 0===e&&(e={});var i=e.insertAt;if(t&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css","top"===i&&a.firstChild?a.insertBefore(s,a.firstChild):a.appendChild(s),s.styleSheet?s.styleSheet.cssText=t:s.appendChild(document.createTextNode(t))}}('.apexcharts-canvas {\n  position: relative;\n  user-select: none;\n  /* cannot give overflow: hidden as it will crop tooltips which overflow outside chart area */\n}\n\n\n/* scrollbar is not visible by default for legend, hence forcing the visibility */\n.apexcharts-canvas ::-webkit-scrollbar {\n  -webkit-appearance: none;\n  width: 6px;\n}\n\n.apexcharts-canvas ::-webkit-scrollbar-thumb {\n  border-radius: 4px;\n  background-color: rgba(0, 0, 0, .5);\n  box-shadow: 0 0 1px rgba(255, 255, 255, .5);\n  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .5);\n}\n\n\n.apexcharts-inner {\n  position: relative;\n}\n\n.apexcharts-text tspan {\n  font-family: inherit;\n}\n\n.legend-mouseover-inactive {\n  transition: 0.15s ease all;\n  opacity: 0.20;\n}\n\n.apexcharts-series-collapsed {\n  opacity: 0;\n}\n\n.apexcharts-tooltip {\n  border-radius: 5px;\n  box-shadow: 2px 2px 6px -4px #999;\n  cursor: default;\n  font-size: 14px;\n  left: 62px;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  top: 20px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  white-space: nowrap;\n  z-index: 12;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-tooltip.apexcharts-active {\n  opacity: 1;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-tooltip.apexcharts-theme-light {\n  border: 1px solid #e3e3e3;\n  background: rgba(255, 255, 255, 0.96);\n}\n\n.apexcharts-tooltip.apexcharts-theme-dark {\n  color: #fff;\n  background: rgba(30, 30, 30, 0.8);\n}\n\n.apexcharts-tooltip * {\n  font-family: inherit;\n}\n\n\n.apexcharts-tooltip-title {\n  padding: 6px;\n  font-size: 15px;\n  margin-bottom: 4px;\n}\n\n.apexcharts-tooltip.apexcharts-theme-light .apexcharts-tooltip-title {\n  background: #ECEFF1;\n  border-bottom: 1px solid #ddd;\n}\n\n.apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-title {\n  background: rgba(0, 0, 0, 0.7);\n  border-bottom: 1px solid #333;\n}\n\n.apexcharts-tooltip-text-value,\n.apexcharts-tooltip-text-z-value {\n  display: inline-block;\n  font-weight: 600;\n  margin-left: 5px;\n}\n\n.apexcharts-tooltip-text-z-label:empty,\n.apexcharts-tooltip-text-z-value:empty {\n  display: none;\n}\n\n.apexcharts-tooltip-text-value,\n.apexcharts-tooltip-text-z-value {\n  font-weight: 600;\n}\n\n.apexcharts-tooltip-marker {\n  width: 12px;\n  height: 12px;\n  position: relative;\n  top: 0px;\n  margin-right: 10px;\n  border-radius: 50%;\n}\n\n.apexcharts-tooltip-series-group {\n  padding: 0 10px;\n  display: none;\n  text-align: left;\n  justify-content: left;\n  align-items: center;\n}\n\n.apexcharts-tooltip-series-group.apexcharts-active .apexcharts-tooltip-marker {\n  opacity: 1;\n}\n\n.apexcharts-tooltip-series-group.apexcharts-active,\n.apexcharts-tooltip-series-group:last-child {\n  padding-bottom: 4px;\n}\n\n.apexcharts-tooltip-series-group-hidden {\n  opacity: 0;\n  height: 0;\n  line-height: 0;\n  padding: 0 !important;\n}\n\n.apexcharts-tooltip-y-group {\n  padding: 6px 0 5px;\n}\n\n.apexcharts-tooltip-candlestick {\n  padding: 4px 8px;\n}\n\n.apexcharts-tooltip-candlestick>div {\n  margin: 4px 0;\n}\n\n.apexcharts-tooltip-candlestick span.value {\n  font-weight: bold;\n}\n\n.apexcharts-tooltip-rangebar {\n  padding: 5px 8px;\n}\n\n.apexcharts-tooltip-rangebar .category {\n  font-weight: 600;\n  color: #777;\n}\n\n.apexcharts-tooltip-rangebar .series-name {\n  font-weight: bold;\n  display: block;\n  margin-bottom: 5px;\n}\n\n.apexcharts-xaxistooltip {\n  opacity: 0;\n  padding: 9px 10px;\n  pointer-events: none;\n  color: #373d3f;\n  font-size: 13px;\n  text-align: center;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n  background: #ECEFF1;\n  border: 1px solid #90A4AE;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-xaxistooltip.apexcharts-theme-dark {\n  background: rgba(0, 0, 0, 0.7);\n  border: 1px solid rgba(0, 0, 0, 0.5);\n  color: #fff;\n}\n\n.apexcharts-xaxistooltip:after,\n.apexcharts-xaxistooltip:before {\n  left: 50%;\n  border: solid transparent;\n  content: " ";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n}\n\n.apexcharts-xaxistooltip:after {\n  border-color: rgba(236, 239, 241, 0);\n  border-width: 6px;\n  margin-left: -6px;\n}\n\n.apexcharts-xaxistooltip:before {\n  border-color: rgba(144, 164, 174, 0);\n  border-width: 7px;\n  margin-left: -7px;\n}\n\n.apexcharts-xaxistooltip-bottom:after,\n.apexcharts-xaxistooltip-bottom:before {\n  bottom: 100%;\n}\n\n.apexcharts-xaxistooltip-top:after,\n.apexcharts-xaxistooltip-top:before {\n  top: 100%;\n}\n\n.apexcharts-xaxistooltip-bottom:after {\n  border-bottom-color: #ECEFF1;\n}\n\n.apexcharts-xaxistooltip-bottom:before {\n  border-bottom-color: #90A4AE;\n}\n\n.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:after {\n  border-bottom-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:before {\n  border-bottom-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-xaxistooltip-top:after {\n  border-top-color: #ECEFF1\n}\n\n.apexcharts-xaxistooltip-top:before {\n  border-top-color: #90A4AE;\n}\n\n.apexcharts-xaxistooltip-top.apexcharts-theme-dark:after {\n  border-top-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-xaxistooltip-top.apexcharts-theme-dark:before {\n  border-top-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-xaxistooltip.apexcharts-active {\n  opacity: 1;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-yaxistooltip {\n  opacity: 0;\n  padding: 4px 10px;\n  pointer-events: none;\n  color: #373d3f;\n  font-size: 13px;\n  text-align: center;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n  background: #ECEFF1;\n  border: 1px solid #90A4AE;\n}\n\n.apexcharts-yaxistooltip.apexcharts-theme-dark {\n  background: rgba(0, 0, 0, 0.7);\n  border: 1px solid rgba(0, 0, 0, 0.5);\n  color: #fff;\n}\n\n.apexcharts-yaxistooltip:after,\n.apexcharts-yaxistooltip:before {\n  top: 50%;\n  border: solid transparent;\n  content: " ";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n}\n\n.apexcharts-yaxistooltip:after {\n  border-color: rgba(236, 239, 241, 0);\n  border-width: 6px;\n  margin-top: -6px;\n}\n\n.apexcharts-yaxistooltip:before {\n  border-color: rgba(144, 164, 174, 0);\n  border-width: 7px;\n  margin-top: -7px;\n}\n\n.apexcharts-yaxistooltip-left:after,\n.apexcharts-yaxistooltip-left:before {\n  left: 100%;\n}\n\n.apexcharts-yaxistooltip-right:after,\n.apexcharts-yaxistooltip-right:before {\n  right: 100%;\n}\n\n.apexcharts-yaxistooltip-left:after {\n  border-left-color: #ECEFF1;\n}\n\n.apexcharts-yaxistooltip-left:before {\n  border-left-color: #90A4AE;\n}\n\n.apexcharts-yaxistooltip-left.apexcharts-theme-dark:after {\n  border-left-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-yaxistooltip-left.apexcharts-theme-dark:before {\n  border-left-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-yaxistooltip-right:after {\n  border-right-color: #ECEFF1;\n}\n\n.apexcharts-yaxistooltip-right:before {\n  border-right-color: #90A4AE;\n}\n\n.apexcharts-yaxistooltip-right.apexcharts-theme-dark:after {\n  border-right-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-yaxistooltip-right.apexcharts-theme-dark:before {\n  border-right-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-yaxistooltip.apexcharts-active {\n  opacity: 1;\n}\n\n.apexcharts-yaxistooltip-hidden {\n  display: none;\n}\n\n.apexcharts-xcrosshairs,\n.apexcharts-ycrosshairs {\n  pointer-events: none;\n  opacity: 0;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-xcrosshairs.apexcharts-active,\n.apexcharts-ycrosshairs.apexcharts-active {\n  opacity: 1;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-ycrosshairs-hidden {\n  opacity: 0;\n}\n\n.apexcharts-selection-rect {\n  cursor: move;\n}\n\n.svg_select_boundingRect, .svg_select_points_rot {\n  pointer-events: none;\n  opacity: 0;\n  visibility: hidden;\n}\n.apexcharts-selection-rect + g .svg_select_boundingRect,\n.apexcharts-selection-rect + g .svg_select_points_rot {\n  opacity: 0;\n  visibility: hidden;\n}\n\n.apexcharts-selection-rect + g .svg_select_points_l,\n.apexcharts-selection-rect + g .svg_select_points_r {\n  cursor: ew-resize;\n  opacity: 1;\n  visibility: visible;\n}\n\n.svg_select_points {\n  fill: #efefef;\n  stroke: #333;\n  rx: 2;\n}\n\n.apexcharts-svg.apexcharts-zoomable.hovering-zoom {\n  cursor: crosshair\n}\n\n.apexcharts-svg.apexcharts-zoomable.hovering-pan {\n  cursor: move\n}\n\n.apexcharts-zoom-icon,\n.apexcharts-zoomin-icon,\n.apexcharts-zoomout-icon,\n.apexcharts-reset-icon,\n.apexcharts-pan-icon,\n.apexcharts-selection-icon,\n.apexcharts-menu-icon,\n.apexcharts-toolbar-custom-icon {\n  cursor: pointer;\n  width: 20px;\n  height: 20px;\n  line-height: 24px;\n  color: #6E8192;\n  text-align: center;\n}\n\n.apexcharts-zoom-icon svg,\n.apexcharts-zoomin-icon svg,\n.apexcharts-zoomout-icon svg,\n.apexcharts-reset-icon svg,\n.apexcharts-menu-icon svg {\n  fill: #6E8192;\n}\n\n.apexcharts-selection-icon svg {\n  fill: #444;\n  transform: scale(0.76)\n}\n\n.apexcharts-theme-dark .apexcharts-zoom-icon svg,\n.apexcharts-theme-dark .apexcharts-zoomin-icon svg,\n.apexcharts-theme-dark .apexcharts-zoomout-icon svg,\n.apexcharts-theme-dark .apexcharts-reset-icon svg,\n.apexcharts-theme-dark .apexcharts-pan-icon svg,\n.apexcharts-theme-dark .apexcharts-selection-icon svg,\n.apexcharts-theme-dark .apexcharts-menu-icon svg,\n.apexcharts-theme-dark .apexcharts-toolbar-custom-icon svg {\n  fill: #f3f4f5;\n}\n\n.apexcharts-canvas .apexcharts-zoom-icon.apexcharts-selected svg,\n.apexcharts-canvas .apexcharts-selection-icon.apexcharts-selected svg,\n.apexcharts-canvas .apexcharts-reset-zoom-icon.apexcharts-selected svg {\n  fill: #008FFB;\n}\n\n.apexcharts-theme-light .apexcharts-selection-icon:not(.apexcharts-selected):hover svg,\n.apexcharts-theme-light .apexcharts-zoom-icon:not(.apexcharts-selected):hover svg,\n.apexcharts-theme-light .apexcharts-zoomin-icon:hover svg,\n.apexcharts-theme-light .apexcharts-zoomout-icon:hover svg,\n.apexcharts-theme-light .apexcharts-reset-icon:hover svg,\n.apexcharts-theme-light .apexcharts-menu-icon:hover svg {\n  fill: #333;\n}\n\n.apexcharts-selection-icon,\n.apexcharts-menu-icon {\n  position: relative;\n}\n\n.apexcharts-reset-icon {\n  margin-left: 5px;\n}\n\n.apexcharts-zoom-icon,\n.apexcharts-reset-icon,\n.apexcharts-menu-icon {\n  transform: scale(0.85);\n}\n\n.apexcharts-zoomin-icon,\n.apexcharts-zoomout-icon {\n  transform: scale(0.7)\n}\n\n.apexcharts-zoomout-icon {\n  margin-right: 3px;\n}\n\n.apexcharts-pan-icon {\n  transform: scale(0.62);\n  position: relative;\n  left: 1px;\n  top: 0px;\n}\n\n.apexcharts-pan-icon svg {\n  fill: #fff;\n  stroke: #6E8192;\n  stroke-width: 2;\n}\n\n.apexcharts-pan-icon.apexcharts-selected svg {\n  stroke: #008FFB;\n}\n\n.apexcharts-pan-icon:not(.apexcharts-selected):hover svg {\n  stroke: #333;\n}\n\n.apexcharts-toolbar {\n  position: absolute;\n  z-index: 11;\n  max-width: 176px;\n  text-align: right;\n  border-radius: 3px;\n  padding: 0px 6px 2px 6px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.apexcharts-menu {\n  background: #fff;\n  position: absolute;\n  top: 100%;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  padding: 3px;\n  right: 10px;\n  opacity: 0;\n  min-width: 110px;\n  transition: 0.15s ease all;\n  pointer-events: none;\n}\n\n.apexcharts-menu.apexcharts-menu-open {\n  opacity: 1;\n  pointer-events: all;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-menu-item {\n  padding: 6px 7px;\n  font-size: 12px;\n  cursor: pointer;\n}\n\n.apexcharts-theme-light .apexcharts-menu-item:hover {\n  background: #eee;\n}\n\n.apexcharts-theme-dark .apexcharts-menu {\n  background: rgba(0, 0, 0, 0.7);\n  color: #fff;\n}\n\n@media screen and (min-width: 768px) {\n  .apexcharts-canvas:hover .apexcharts-toolbar {\n    opacity: 1;\n  }\n}\n\n.apexcharts-datalabel.apexcharts-element-hidden {\n  opacity: 0;\n}\n\n.apexcharts-pie-label,\n.apexcharts-datalabels,\n.apexcharts-datalabel,\n.apexcharts-datalabel-label,\n.apexcharts-datalabel-value {\n  cursor: default;\n  pointer-events: none;\n}\n\n.apexcharts-pie-label-delay {\n  opacity: 0;\n  animation-name: opaque;\n  animation-duration: 0.3s;\n  animation-fill-mode: forwards;\n  animation-timing-function: ease;\n}\n\n.apexcharts-canvas .apexcharts-element-hidden {\n  opacity: 0;\n}\n\n.apexcharts-hide .apexcharts-series-points {\n  opacity: 0;\n}\n\n.apexcharts-gridline,\n.apexcharts-annotation-rect,\n.apexcharts-tooltip .apexcharts-marker,\n.apexcharts-area-series .apexcharts-area,\n.apexcharts-line,\n.apexcharts-zoom-rect,\n.apexcharts-toolbar svg,\n.apexcharts-area-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,\n.apexcharts-line-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,\n.apexcharts-radar-series path,\n.apexcharts-radar-series polygon {\n  pointer-events: none;\n}\n\n\n/* markers */\n\n.apexcharts-marker {\n  transition: 0.15s ease all;\n}\n\n@keyframes opaque {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n\n/* Resize generated styles */\n\n@keyframes resizeanim {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.resize-triggers {\n  animation: 1ms resizeanim;\n  visibility: hidden;\n  opacity: 0;\n}\n\n.resize-triggers,\n.resize-triggers>div,\n.contract-trigger:before {\n  content: " ";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n}\n\n.resize-triggers>div {\n  background: #eee;\n  overflow: auto;\n}\n\n.contract-trigger:before {\n  width: 200%;\n  height: 200%;\n}'),function(){function t(t){var e=t.__resizeTriggers__,i=e.firstElementChild,a=e.lastElementChild,s=i?i.firstElementChild:null;a&&(a.scrollLeft=a.scrollWidth,a.scrollTop=a.scrollHeight),s&&(s.style.width=i.offsetWidth+1+"px",s.style.height=i.offsetHeight+1+"px"),i&&(i.scrollLeft=i.scrollWidth,i.scrollTop=i.scrollHeight)}function e(e){var i=this;t(this),this.__resizeRAF__&&r(this.__resizeRAF__),this.__resizeRAF__=s((function(){(function(t){return t.offsetWidth!=t.__resizeLast__.width||t.offsetHeight!=t.__resizeLast__.height})(i)&&(i.__resizeLast__.width=i.offsetWidth,i.__resizeLast__.height=i.offsetHeight,i.__resizeListeners__.forEach((function(t){t.call(e)})))}))}var i,a,s=(i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(t){return window.setTimeout(t,20)},function(t){return i(t)}),r=(a=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.clearTimeout,function(t){return a(t)}),n=!1,o="animationstart",l="Webkit Moz O ms".split(" "),h="webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),c=document.createElement("fakeelement");if(void 0!==c.style.animationName&&(n=!0),!1===n)for(var d=0;d<l.length;d++)if(void 0!==c.style[l[d]+"AnimationName"]){o=h[d];break}window.addResizeListener=function(i,a){i.__resizeTriggers__||("static"==getComputedStyle(i).position&&(i.style.position="relative"),i.__resizeLast__={},i.__resizeListeners__=[],(i.__resizeTriggers__=document.createElement("div")).className="resize-triggers",i.__resizeTriggers__.innerHTML='<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>',i.appendChild(i.__resizeTriggers__),t(i),i.addEventListener("scroll",e,!0),o&&i.__resizeTriggers__.addEventListener(o,(function(e){"resizeanim"==e.animationName&&t(i)}))),i.__resizeListeners__.push(a)},window.removeResizeListener=function(t,i){t&&(t.__resizeListeners__.splice(t.__resizeListeners__.indexOf(i),1),t.__resizeListeners__.length||(t.removeEventListener("scroll",e),t.__resizeTriggers__.parentNode&&(t.__resizeTriggers__=!t.removeChild(t.__resizeTriggers__))))}}(),void 0===window.Apex&&(window.Apex={});var Yt=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w}return a(t,[{key:"initModules",value:function(){this.ctx.publicMethods=["updateOptions","updateSeries","appendData","appendSeries","toggleSeries","showSeries","hideSeries","setLocale","resetSeries","zoomX","toggleDataPointSelection","dataURI","addXaxisAnnotation","addYaxisAnnotation","addPointAnnotation","clearAnnotations","removeAnnotation","paper","destroy"],this.ctx.eventList=["click","mousedown","mousemove","touchstart","touchmove","mouseup","touchend"],this.ctx.animations=new x(this.ctx),this.ctx.axes=new J(this.ctx),this.ctx.core=new Et(this.ctx.el,this.ctx),this.ctx.config=new D({}),this.ctx.data=new O(this.ctx),this.ctx.grid=new _(this.ctx),this.ctx.graphics=new b(this.ctx),this.ctx.coreUtils=new y(this.ctx),this.ctx.crosshairs=new Q(this.ctx),this.ctx.events=new Z(this.ctx),this.ctx.exports=new V(this.ctx),this.ctx.localization=new $(this.ctx),this.ctx.options=new S,this.ctx.responsive=new K(this.ctx),this.ctx.series=new M(this.ctx),this.ctx.theme=new tt(this.ctx),this.ctx.formatters=new W(this.ctx),this.ctx.titleSubtitle=new et(this.ctx),this.ctx.legend=new lt(this.ctx),this.ctx.toolbar=new ht(this.ctx),this.ctx.dimensions=new nt(this.ctx),this.ctx.updateHelpers=new Xt(this.ctx),this.ctx.zoomPanSelection=new ct(this.ctx),this.ctx.w.globals.tooltip=new bt(this.ctx)}}]),t}(),Ft=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w}return a(t,[{key:"clear",value:function(t){var e=t.isUpdating;this.ctx.zoomPanSelection&&this.ctx.zoomPanSelection.destroy(),this.ctx.toolbar&&this.ctx.toolbar.destroy(),this.ctx.animations=null,this.ctx.axes=null,this.ctx.annotations=null,this.ctx.core=null,this.ctx.data=null,this.ctx.grid=null,this.ctx.series=null,this.ctx.responsive=null,this.ctx.theme=null,this.ctx.formatters=null,this.ctx.titleSubtitle=null,this.ctx.legend=null,this.ctx.dimensions=null,this.ctx.options=null,this.ctx.crosshairs=null,this.ctx.zoomPanSelection=null,this.ctx.updateHelpers=null,this.ctx.toolbar=null,this.ctx.localization=null,this.ctx.w.globals.tooltip=null,this.clearDomElements({isUpdating:e})}},{key:"killSVG",value:function(t){t.each((function(t,e){this.removeClass("*"),this.off(),this.stop()}),!0),t.ungroup(),t.clear()}},{key:"clearDomElements",value:function(t){var e=this,i=t.isUpdating,a=this.w.globals.dom.Paper.node;a.parentNode&&a.parentNode.parentNode&&!i&&(a.parentNode.parentNode.style.minHeight="unset");var s=this.w.globals.dom.baseEl;s&&this.ctx.eventList.forEach((function(t){s.removeEventListener(t,e.ctx.events.documentEvent)}));var r=this.w.globals.dom;if(null!==this.ctx.el)for(;this.ctx.el.firstChild;)this.ctx.el.removeChild(this.ctx.el.firstChild);this.killSVG(r.Paper),r.Paper.remove(),r.elWrap=null,r.elGraphical=null,r.elAnnotations=null,r.elLegendWrap=null,r.baseEl=null,r.elGridRect=null,r.elGridRectMask=null,r.elGridRectMarkerMask=null,r.elDefs=null}}]),t}();return function(){function t(i,a){e(this,t),this.opts=a,this.ctx=this,this.w=new N(a).init(),this.el=i,this.w.globals.cuid=f.randomId(),this.w.globals.chartID=this.w.config.chart.id?f.escapeString(this.w.config.chart.id):this.w.globals.cuid,new Yt(this).initModules(),this.create=f.bind(this.create,this),this.windowResizeHandler=this._windowResizeHandler.bind(this),this.parentResizeHandler=this._parentResizeCallback.bind(this)}return a(t,[{key:"render",value:function(){var t=this;return new Promise((function(e,i){if(null!==t.el){void 0===Apex._chartInstances&&(Apex._chartInstances=[]),t.w.config.chart.id&&Apex._chartInstances.push({id:t.w.globals.chartID,group:t.w.config.chart.group,chart:t}),t.setLocale(t.w.config.chart.defaultLocale);var a=t.w.config.chart.events.beforeMount;"function"==typeof a&&a(t,t.w),t.events.fireEvent("beforeMount",[t,t.w]),window.addEventListener("resize",t.windowResizeHandler),window.addResizeListener(t.el.parentNode,t.parentResizeHandler);var s=t.create(t.w.config.series,{});if(!s)return e(t);t.mount(s).then((function(){"function"==typeof t.w.config.chart.events.mounted&&t.w.config.chart.events.mounted(t,t.w),t.events.fireEvent("mounted",[t,t.w]),e(s)})).catch((function(t){i(t)}))}else i(new Error("Element not found"))}))}},{key:"create",value:function(t,e){var i=this.w;new Yt(this).initModules();var a=this.w.globals;(a.noData=!1,a.animationEnded=!1,this.responsive.checkResponsiveConfig(e),i.config.xaxis.convertedCatToNumeric)&&new R(i.config).convertCatToNumericXaxis(i.config,this.ctx);if(null===this.el)return a.animationEnded=!0,null;if(this.core.setupElements(),"treemap"===i.config.chart.type&&(i.config.grid.show=!1,i.config.yaxis[0].show=!1),0===a.svgWidth)return a.animationEnded=!0,null;var s=y.checkComboSeries(t);a.comboCharts=s.comboCharts,a.comboBarCount=s.comboBarCount;var r=t.every((function(t){return t.data&&0===t.data.length}));(0===t.length||r)&&this.series.handleNoData(),this.events.setupEventHandlers(),this.data.parseData(t),this.theme.init(),new P(this).setGlobalMarkerSize(),this.formatters.setLabelFormatters(),this.titleSubtitle.draw(),a.noData&&a.collapsedSeries.length!==a.series.length&&!i.config.legend.showForSingleSeries||this.legend.init(),this.series.hasAllSeriesEqualX(),a.axisCharts&&(this.core.coreCalculations(),"category"!==i.config.xaxis.type&&this.formatters.setLabelFormatters()),this.formatters.heatmapLabelFormatters(),this.dimensions.plotCoords();var n=this.core.xySettings();this.grid.createGridMask();var o=this.core.plotChartType(t,n),l=new z(this);l.bringForward(),i.config.dataLabels.background.enabled&&l.dataLabelsBackground(),this.core.shiftGraphPosition();var h={plot:{left:i.globals.translateX,top:i.globals.translateY,width:i.globals.gridWidth,height:i.globals.gridHeight}};return{elGraph:o,xyRatios:n,elInner:i.globals.dom.elGraphical,dimensions:h}}},{key:"mount",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,i=this,a=i.w;return new Promise((function(s,r){if(null===i.el)return r(new Error("Not enough data to display or target element not found"));(null===e||a.globals.allSeriesCollapsed)&&i.series.handleNoData(),"treemap"!==a.config.chart.type&&i.axes.drawAxis(a.config.chart.type,e.xyRatios),i.grid=new _(i);var n=i.grid.drawGrid();i.annotations=new C(i),i.annotations.drawImageAnnos(),i.annotations.drawTextAnnos(),"back"===a.config.grid.position&&n&&a.globals.dom.elGraphical.add(n.el);var o=new G(t.ctx),l=new q(t.ctx);if(null!==n&&(o.xAxisLabelCorrections(n.xAxisTickWidth),l.setYAxisTextAlignments()),"back"===a.config.annotations.position&&(a.globals.dom.Paper.add(a.globals.dom.elAnnotations),i.annotations.drawAxesAnnotations()),Array.isArray(e.elGraph))for(var h=0;h<e.elGraph.length;h++)a.globals.dom.elGraphical.add(e.elGraph[h]);else a.globals.dom.elGraphical.add(e.elGraph);if("front"===a.config.grid.position&&n&&a.globals.dom.elGraphical.add(n.el),"front"===a.config.xaxis.crosshairs.position&&i.crosshairs.drawXCrosshairs(),"front"===a.config.yaxis[0].crosshairs.position&&i.crosshairs.drawYCrosshairs(),"front"===a.config.annotations.position&&(a.globals.dom.Paper.add(a.globals.dom.elAnnotations),i.annotations.drawAxesAnnotations()),!a.globals.noData){if(a.config.tooltip.enabled&&!a.globals.noData&&i.w.globals.tooltip.drawTooltip(e.xyRatios),a.globals.axisCharts&&(a.globals.isXNumeric||a.config.xaxis.convertedCatToNumeric||a.globals.isTimelineBar))(a.config.chart.zoom.enabled||a.config.chart.selection&&a.config.chart.selection.enabled||a.config.chart.pan&&a.config.chart.pan.enabled)&&i.zoomPanSelection.init({xyRatios:e.xyRatios});else{var c=a.config.chart.toolbar.tools;["zoom","zoomin","zoomout","selection","pan","reset"].forEach((function(t){c[t]=!1}))}a.config.chart.toolbar.show&&!a.globals.allSeriesCollapsed&&i.toolbar.createToolbar()}a.globals.memory.methodsToExec.length>0&&a.globals.memory.methodsToExec.forEach((function(t){t.method(t.params,!1,t.context)})),a.globals.axisCharts||a.globals.noData||i.core.resizeNonAxisCharts(),s(i)}))}},{key:"destroy",value:function(){window.removeEventListener("resize",this.windowResizeHandler),window.removeResizeListener(this.el.parentNode,this.parentResizeHandler);var t=this.w.config.chart.id;t&&Apex._chartInstances.forEach((function(e,i){e.id===f.escapeString(t)&&Apex._chartInstances.splice(i,1)})),new Ft(this.ctx).clear({isUpdating:!1})}},{key:"updateOptions",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],s=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],r=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],n=this.w;return n.globals.selection=void 0,t.series&&(this.series.resetSeries(!1,!0,!1),t.series.length&&t.series[0].data&&(t.series=t.series.map((function(t,i){return e.updateHelpers._extendSeries(t,i)}))),this.updateHelpers.revertDefaultAxisMinMax()),t.xaxis&&(t=this.updateHelpers.forceXAxisUpdate(t)),t.yaxis&&(t=this.updateHelpers.forceYAxisUpdate(t)),n.globals.collapsedSeriesIndices.length>0&&this.series.clearPreviousPaths(),t.theme&&(t=this.theme.updateThemeOptions(t)),this.updateHelpers._updateOptions(t,i,a,s,r)}},{key:"updateSeries",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return this.series.resetSeries(!1),this.updateHelpers.revertDefaultAxisMinMax(),this.updateHelpers._updateSeries(t,e,i)}},{key:"appendSeries",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=this.w.config.series.slice();return a.push(t),this.series.resetSeries(!1),this.updateHelpers.revertDefaultAxisMinMax(),this.updateHelpers._updateSeries(a,e,i)}},{key:"appendData",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=this;i.w.globals.dataChanged=!0,i.series.getPreviousPaths();for(var a=i.w.config.series.slice(),s=0;s<a.length;s++)if(null!==t[s]&&void 0!==t[s])for(var r=0;r<t[s].data.length;r++)a[s].data.push(t[s].data[r]);return i.w.config.series=a,e&&(i.w.globals.initialSeries=f.clone(i.w.config.series)),this.update()}},{key:"update",value:function(t){var e=this;return new Promise((function(i,a){new Ft(e.ctx).clear({isUpdating:!0});var s=e.create(e.w.config.series,t);if(!s)return i(e);e.mount(s).then((function(){"function"==typeof e.w.config.chart.events.updated&&e.w.config.chart.events.updated(e,e.w),e.events.fireEvent("updated",[e,e.w]),e.w.globals.isDirty=!0,i(e)})).catch((function(t){a(t)}))}))}},{key:"getSyncedCharts",value:function(){var t=this.getGroupedCharts(),e=[this];return t.length&&(e=[],t.forEach((function(t){e.push(t)}))),e}},{key:"getGroupedCharts",value:function(){var t=this;return Apex._chartInstances.filter((function(t){if(t.group)return!0})).map((function(e){return t.w.config.chart.group===e.group?e.chart:t}))}},{key:"toggleSeries",value:function(t){return this.series.toggleSeries(t)}},{key:"showSeries",value:function(t){this.series.showSeries(t)}},{key:"hideSeries",value:function(t){this.series.hideSeries(t)}},{key:"resetSeries",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.series.resetSeries(t,e)}},{key:"addEventListener",value:function(t,e){this.events.addEventListener(t,e)}},{key:"removeEventListener",value:function(t,e){this.events.removeEventListener(t,e)}},{key:"addXaxisAnnotation",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,a=this;i&&(a=i),a.annotations.addXaxisAnnotationExternal(t,e,a)}},{key:"addYaxisAnnotation",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,a=this;i&&(a=i),a.annotations.addYaxisAnnotationExternal(t,e,a)}},{key:"addPointAnnotation",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,a=this;i&&(a=i),a.annotations.addPointAnnotationExternal(t,e,a)}},{key:"clearAnnotations",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,e=this;t&&(e=t),e.annotations.clearAnnotations(e)}},{key:"removeAnnotation",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,i=this;e&&(i=e),i.annotations.removeAnnotation(i,t)}},{key:"getChartArea",value:function(){return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner")}},{key:"getSeriesTotalXRange",value:function(t,e){return this.coreUtils.getSeriesTotalsXRange(t,e)}},{key:"getHighestValueInSeries",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=new U(this.ctx);return e.getMinYMaxY(t).highestY}},{key:"getLowestValueInSeries",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=new U(this.ctx);return e.getMinYMaxY(t).lowestY}},{key:"getSeriesTotal",value:function(){return this.w.globals.seriesTotals}},{key:"toggleDataPointSelection",value:function(t,e){return this.updateHelpers.toggleDataPointSelection(t,e)}},{key:"zoomX",value:function(t,e){this.ctx.toolbar.zoomUpdateOptions(t,e)}},{key:"setLocale",value:function(t){this.localization.setCurrentLocaleValues(t)}},{key:"dataURI",value:function(){return new V(this.ctx).dataURI()}},{key:"paper",value:function(){return this.w.globals.dom.Paper}},{key:"_parentResizeCallback",value:function(){!this.w.globals.noData&&this.w.globals.animationEnded&&this.w.config.chart.redrawOnParentResize&&this._windowResize()}},{key:"_windowResize",value:function(){var t=this;clearTimeout(this.w.globals.resizeTimer),this.w.globals.resizeTimer=window.setTimeout((function(){t.w.globals.resized=!0,t.w.globals.dataChanged=!1,t.ctx.update()}),150)}},{key:"_windowResizeHandler",value:function(){var t=this.w.config.chart.redrawOnWindowResize;"function"==typeof t&&(t=t()),t&&this._windowResize()}}],[{key:"getChartByID",value:function(t){var e=f.escapeString(t),i=Apex._chartInstances.filter((function(t){return t.id===e}))[0];return i&&i.chart}},{key:"initOnLoad",value:function(){for(var e=document.querySelectorAll("[data-apexcharts]"),i=0;i<e.length;i++){new t(e[i],JSON.parse(e[i].getAttribute("data-options"))).render()}}},{key:"exec",value:function(t,e){var i=this.getChartByID(t);if(i){i.w.globals.isExecCalled=!0;var a=null;if(-1!==i.publicMethods.indexOf(e)){for(var s=arguments.length,r=new Array(s>2?s-2:0),n=2;n<s;n++)r[n-2]=arguments[n];a=i[e].apply(i,r)}return a}}},{key:"merge",value:function(t,e){return f.extend(t,e)}}]),t}()}));


/***/ }),

/***/ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js":
/*!************************************************************!*\
  !*** ./node_modules/vue-apexcharts/dist/vue-apexcharts.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! apexcharts/dist/apexcharts.min */ "./node_modules/apexcharts/dist/apexcharts.min.js")) :
  undefined;
}(this, (function (ApexCharts) { 'use strict';

  ApexCharts = ApexCharts && ApexCharts.hasOwnProperty('default') ? ApexCharts['default'] : ApexCharts;

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var ApexChartsComponent = {
    props: {
      options: {
        type: Object
      },
      type: {
        type: String
      },
      series: {
        type: Array,
        required: true,
        default: function _default() {
          return [];
        }
      },
      width: {
        default: "100%"
      },
      height: {
        default: "auto"
      }
    },
    data: function data() {
      return {
        chart: null
      };
    },
    beforeMount: function beforeMount() {
      window.ApexCharts = ApexCharts;
    },
    mounted: function mounted() {
      this.init();
    },
    created: function created() {
      var _this = this;

      this.$watch("options", function (options) {
        if (!_this.chart && options) {
          _this.init();
        } else {
          _this.chart.updateOptions(_this.options);
        }
      });
      this.$watch("series", function (series) {
        if (!_this.chart && series) {
          _this.init();
        } else {
          _this.chart.updateSeries(_this.series);
        }
      });
      var watched = ["type", "width", "height"];
      watched.forEach(function (prop) {
        _this.$watch(prop, function () {
          _this.refresh();
        });
      });
    },
    beforeDestroy: function beforeDestroy() {
      if (!this.chart) {
        return;
      }

      this.destroy();
    },
    render: function render(createElement) {
      return createElement("div");
    },
    methods: {
      init: function init() {
        var _this2 = this;

        var newOptions = {
          chart: {
            type: this.type || this.options.chart.type || "line",
            height: this.height,
            width: this.width,
            events: {}
          },
          series: this.series
        };
        Object.keys(this.$listeners).forEach(function (evt) {
          newOptions.chart.events[evt] = _this2.$listeners[evt];
        });
        var config = this.extend(this.options, newOptions);
        this.chart = new ApexCharts(this.$el, config);
        return this.chart.render();
      },
      isObject: function isObject(item) {
        return item && _typeof(item) === "object" && !Array.isArray(item) && item != null;
      },
      extend: function extend(target, source) {
        var _this3 = this;

        if (typeof Object.assign !== "function") {
          (function () {
            Object.assign = function (target) {
              // We must check against these specific cases.
              if (target === undefined || target === null) {
                throw new TypeError("Cannot convert undefined or null to object");
              }

              var output = Object(target);

              for (var index = 1; index < arguments.length; index++) {
                var _source = arguments[index];

                if (_source !== undefined && _source !== null) {
                  for (var nextKey in _source) {
                    if (_source.hasOwnProperty(nextKey)) {
                      output[nextKey] = _source[nextKey];
                    }
                  }
                }
              }

              return output;
            };
          })();
        }

        var output = Object.assign({}, target);

        if (this.isObject(target) && this.isObject(source)) {
          Object.keys(source).forEach(function (key) {
            if (_this3.isObject(source[key])) {
              if (!(key in target)) {
                Object.assign(output, _defineProperty({}, key, source[key]));
              } else {
                output[key] = _this3.extend(target[key], source[key]);
              }
            } else {
              Object.assign(output, _defineProperty({}, key, source[key]));
            }
          });
        }

        return output;
      },
      refresh: function refresh() {
        this.destroy();
        return this.init();
      },
      destroy: function destroy() {
        this.chart.destroy();
      },
      updateSeries: function updateSeries(newSeries, animate) {
        return this.chart.updateSeries(newSeries, animate);
      },
      updateOptions: function updateOptions(newOptions, redrawPaths, animate, updateSyncedCharts) {
        return this.chart.updateOptions(newOptions, redrawPaths, animate, updateSyncedCharts);
      },
      toggleSeries: function toggleSeries(seriesName) {
        return this.chart.toggleSeries(seriesName);
      },
      showSeries: function showSeries(seriesName) {
        this.chart.showSeries(seriesName);
      },
      hideSeries: function hideSeries(seriesName) {
        this.chart.hideSeries(seriesName);
      },
      appendSeries: function appendSeries(newSeries, animate) {
        return this.chart.appendSeries(newSeries, animate);
      },
      resetSeries: function resetSeries() {
        this.chart.resetSeries();
      },
      zoomX: function zoomX(min, max) {
        this.chart.zoomX(min, max);
      },
      toggleDataPointSelection: function toggleDataPointSelection(seriesIndex, dataPointIndex) {
        this.chart.toggleDataPointSelection(seriesIndex, dataPointIndex);
      },
      appendData: function appendData(newData) {
        return this.chart.appendData(newData);
      },
      addText: function addText(options) {
        this.chart.addText(options);
      },
      addImage: function addImage(options) {
        this.chart.addImage(options);
      },
      addShape: function addShape(options) {
        this.chart.addShape(options);
      },
      dataURI: function dataURI() {
        return this.chart.dataURI();
      },
      setLocale: function setLocale(localeName) {
        return this.chart.setLocale(localeName);
      },
      addXaxisAnnotation: function addXaxisAnnotation(options, pushToMemory) {
        this.chart.addXaxisAnnotation(options, pushToMemory);
      },
      addYaxisAnnotation: function addYaxisAnnotation(options, pushToMemory) {
        this.chart.addYaxisAnnotation(options, pushToMemory);
      },
      addPointAnnotation: function addPointAnnotation(options, pushToMemory) {
        this.chart.addPointAnnotation(options, pushToMemory);
      },
      removeAnnotation: function removeAnnotation(id, options) {
        this.chart.removeAnnotation(id, options);
      },
      clearAnnotations: function clearAnnotations() {
        this.chart.clearAnnotations();
      }
    }
  };

  var VueApexCharts = ApexChartsComponent;
  window.ApexCharts = ApexCharts;

  VueApexCharts.install = function (Vue) {
    //adding a global method or property
    Vue.ApexCharts = ApexCharts;
    window.ApexCharts = ApexCharts; // add the instance method

    Object.defineProperty(Vue.prototype, '$apexcharts', {
      get: function get() {
        return ApexCharts;
      }
    });
  };

  return VueApexCharts;

})));


/***/ }),

/***/ "./node_modules/vue-good-table/dist/vue-good-table.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/vue-good-table/dist/vue-good-table.esm.js ***!
  \****************************************************************/
/*! exports provided: default, VueGoodTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VueGoodTable", function() { return __vue_component__$6; });
/**
 * vue-good-table v2.21.0
 * (c) 2018-present xaksis <shay@crayonbits.com>
 * https://github.com/xaksis/vue-good-table
 * Released under the MIT License.
 */

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _([1, 2]).forEach(function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = isArray(collection) ? arrayEach : baseEach;
  return func(collection, typeof iteratee == 'function' ? iteratee : identity);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

var lodash_foreach = forEach;

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]',
    funcTag$1 = '[object Function]',
    genTag$1 = '[object GeneratorFunction]';

/** Used to detect unsigned integer values. */
var reIsUint$1 = /^(?:0|[1-9]\d*)$/;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes$1(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg$1(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString$1 = objectProto$1.toString;

/** Built-in value references. */
var propertyIsEnumerable$1 = objectProto$1.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys$1 = overArg$1(Object.keys, Object),
    nativeMax = Math.max;

/** Detect if properties shadowing those on `Object.prototype` are non-enumerable. */
var nonEnumShadows = !propertyIsEnumerable$1.call({ 'valueOf': 1 }, 'valueOf');

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys$1(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray$1(value) || isArguments$1(value))
    ? baseTimes$1(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$1.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex$1(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$1.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys$1(object) {
  if (!isPrototype$1(object)) {
    return nativeKeys$1(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$1.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex$1(value, length) {
  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length &&
    (typeof value == 'number' || reIsUint$1.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject$1(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike$1(object) && isIndex$1(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype$1(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$1;

  return value === proto;
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments$1(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject$1(value) && hasOwnProperty$1.call(value, 'callee') &&
    (!propertyIsEnumerable$1.call(value, 'callee') || objectToString$1.call(value) == argsTag$1);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray$1 = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike$1(value) {
  return value != null && isLength$1(value.length) && !isFunction$1(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject$1(value) {
  return isObjectLike$1(value) && isArrayLike$1(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction$1(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject$1(value) ? objectToString$1.call(value) : '';
  return tag == funcTag$1 || tag == genTag$1;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength$1(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject$1(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike$1(value) {
  return !!value && typeof value == 'object';
}

/**
 * Assigns own enumerable string keyed properties of source objects to the
 * destination object. Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object` and is loosely based on
 * [`Object.assign`](https://mdn.io/Object/assign).
 *
 * @static
 * @memberOf _
 * @since 0.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assignIn
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assign({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'c': 3 }
 */
var assign = createAssigner(function(object, source) {
  if (nonEnumShadows || isPrototype$1(source) || isArrayLike$1(source)) {
    copyObject(source, keys$1(source), object);
    return;
  }
  for (var key in source) {
    if (hasOwnProperty$1.call(source, key)) {
      assignValue(object, key, source[key]);
    }
  }
});

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys$1(object) {
  return isArrayLike$1(object) ? arrayLikeKeys$1(object) : baseKeys$1(object);
}

var lodash_assign = assign;

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var lodash_clonedeep = createCommonjsModule(function (module, exports) {
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
  var result;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      if (isHostObject(value)) {
        return object ? value : {};
      }
      result = initCloneObject(isFunc ? {} : value);
      if (!isDeep) {
        return copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (!isArr) {
    var props = isFull ? getAllKeys(value) : keys(value);
  }
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
  });
  return result;
}

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(proto) {
  return isObject(proto) ? objectCreate(proto) : {};
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var result = new buffer.constructor(buffer.length);
  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor);
}

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, true, true);
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = cloneDeep;
});

var lodash_filter = createCommonjsModule(function (module, exports) {
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to compose bitmasks for comparison styles. */
var UNORDERED_COMPARE_FLAG = 1,
    PARTIAL_COMPARE_FLAG = 2;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array ? array.length : 0,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values ? values.length : 0;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

/**
 * The base implementation of `_.filter` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function baseFilter(collection, predicate) {
  var result = [];
  baseEach(collection, function(value, index, collection) {
    if (predicate(value, index, collection)) {
      result.push(value);
    }
  });
  return result;
}

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {boolean} [bitmask] The bitmask of comparison flags.
 *  The bitmask may be composed of the following flags:
 *     1 - Unordered comparison
 *     2 - Partial comparison
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, customizer, bitmask, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
}

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = arrayTag,
      othTag = arrayTag;

  if (!objIsArr) {
    objTag = getTag(object);
    objTag = objTag == argsTag ? objectTag : objTag;
  }
  if (!othIsArr) {
    othTag = getTag(other);
    othTag = othTag == argsTag ? objectTag : othTag;
  }
  var objIsObj = objTag == objectTag && !isHostObject(object),
      othIsObj = othTag == objectTag && !isHostObject(other),
      isSameTag = objTag == othTag;

  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, equalFunc, customizer, bitmask, stack)
      : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
  }
  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
}

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
}

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
  };
}

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & UNORDERED_COMPARE_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!seen.has(othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
              return seen.add(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, customizer, bitmask, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= UNORDERED_COMPARE_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
      objProps = keys(object),
      objLength = objProps.length,
      othProps = keys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = isKey(path, object) ? [path] : castPath(path);

  var result,
      index = -1,
      length = path.length;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result) {
    return result;
  }
  var length = object ? object.length : 0;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Iterates over elements of `collection`, returning an array of all elements
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * **Note:** Unlike `_.remove`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity]
 *  The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see _.reject
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * _.filter(users, function(o) { return !o.active; });
 * // => objects for ['fred']
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, { 'age': 36, 'active': true });
 * // => objects for ['barney']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, ['active', false]);
 * // => objects for ['fred']
 *
 * // The `_.property` iteratee shorthand.
 * _.filter(users, 'active');
 * // => objects for ['barney']
 */
function filter(collection, predicate) {
  var func = isArray(collection) ? arrayFilter : baseFilter;
  return func(collection, baseIteratee(predicate));
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = filter;
});

var lodash_isequal = createCommonjsModule(function (module, exports) {
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    asyncTag = '[object AsyncFunction]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    nullTag = '[object Null]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    proxyTag = '[object Proxy]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    undefinedTag = '[object Undefined]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = isEqual;
});

// all diacritics
var diacritics = 
	{
		'a' : ['a','à','á','â','ã','ä','å','æ','ā','ă','ą','ǎ','ǟ','ǡ','ǻ','ȁ','ȃ','ȧ','ɐ','ɑ','ɒ','ͣ','а','ӑ','ӓ','ᵃ','ᵄ','ᶏ','ḁ','ẚ','ạ','ả','ấ','ầ','ẩ','ẫ','ậ','ắ','ằ','ẳ','ẵ','ặ','ₐ','ⱥ','ａ'],
		'A' : ['A','À','Á','Â','Ã','Ä','Å','Ā','Ă','Ą','Ǎ','Ǟ','Ǡ','Ǻ','Ȁ','Ȃ','Ȧ','Ⱥ','А','Ӑ','Ӓ','ᴀ','ᴬ','Ḁ','Ạ','Ả','Ấ','Ầ','Ẩ','Ẫ','Ậ','Ắ','Ằ','Ẳ','Ẵ','Ặ','Ａ'],
		 
		'b' : ['b','ƀ','ƃ','ɓ','ᖯ','ᵇ','ᵬ','ᶀ','ḃ','ḅ','ḇ','ｂ'],
		'B' : ['B','Ɓ','Ƃ','Ƀ','ʙ','ᛒ','ᴃ','ᴮ','ᴯ','Ḃ','Ḅ','Ḇ','Ｂ'],
		 
		'c' : ['c','ç','ć','ĉ','ċ','č','ƈ','ȼ','ɕ','ͨ','ᴄ','ᶜ','ḉ','ↄ','ｃ'],
		'C' : ['C','Ç','Ć','Ĉ','Ċ','Č','Ƈ','Ȼ','ʗ','Ḉ','Ｃ'],
		
		'd' : ['d','ď','đ','Ƌ','ƌ','ȡ','ɖ','ɗ','ͩ','ᵈ','ᵭ','ᶁ','ᶑ','ḋ','ḍ','ḏ','ḑ','ḓ','ｄ'],
		'D' : ['D','Ď','Đ','Ɖ','Ɗ','ᴰ','Ḋ','Ḍ','Ḏ','Ḑ','Ḓ','Ｄ'],
		
		'e' : ['e','è','é','ê','ë','ē','ĕ','ė','ę','ě','ǝ','ȅ','ȇ','ȩ','ɇ','ɘ','ͤ','ᵉ','ᶒ','ḕ','ḗ','ḙ','ḛ','ḝ','ẹ','ẻ','ẽ','ế','ề','ể','ễ','ệ','ₑ','ｅ'],
		'E' : ['E','È','É','Ê','Ë','Ē','Ĕ','Ė','Ę','Ě','Œ','Ǝ','Ɛ','Ȅ','Ȇ','Ȩ','Ɇ','ɛ','ɜ','ɶ','Є','Э','э','є','Ӭ','ӭ','ᴇ','ᴈ','ᴱ','ᴲ','ᵋ','ᵌ','ᶓ','ᶔ','ᶟ','Ḕ','Ḗ','Ḙ','Ḛ','Ḝ','Ẹ','Ẻ','Ẽ','Ế','Ề','Ể','Ễ','Ệ','Ｅ','𐐁','𐐩'],
		
		'f' : ['f','ƒ','ᵮ','ᶂ','ᶠ','ḟ','ｆ'],
		'F' : ['F','Ƒ','Ḟ','ⅎ','Ｆ'],
		
		'g' : ['g','ĝ','ğ','ġ','ģ','ǥ','ǧ','ǵ','ɠ','ɡ','ᵍ','ᵷ','ᵹ','ᶃ','ᶢ','ḡ','ｇ'],
		'G' : ['G','Ĝ','Ğ','Ġ','Ģ','Ɠ','Ǥ','Ǧ','Ǵ','ɢ','ʛ','ᴳ','Ḡ','Ｇ'],
		
		'h' : ['h','ĥ','ħ','ƕ','ȟ','ɥ','ɦ','ʮ','ʯ','ʰ','ʱ','ͪ','Һ','һ','ᑋ','ᶣ','ḣ','ḥ','ḧ','ḩ','ḫ','ⱨ','ｈ'],
		'H' : ['H','Ĥ','Ħ','Ȟ','ʜ','ᕼ','ᚺ','ᚻ','ᴴ','Ḣ','Ḥ','Ḧ','Ḩ','Ḫ','Ⱨ','Ｈ'],
		
		'i' : ['i','ì','í','î','ï','ĩ','ī','ĭ','į','ǐ','ȉ','ȋ','ɨ','ͥ','ᴉ','ᵎ','ᵢ','ᶖ','ᶤ','ḭ','ḯ','ỉ','ị','ｉ'],
		'I' : ['I','Ì','Í','Î','Ï','Ĩ','Ī','Ĭ','Į','İ','Ǐ','Ȉ','Ȋ','ɪ','І','ᴵ','ᵻ','ᶦ','ᶧ','Ḭ','Ḯ','Ỉ','Ị','Ｉ'],
		
		'j' : ['j','ĵ','ǰ','ɉ','ʝ','ʲ','ᶡ','ᶨ','ｊ'],
		'J' : ['J','Ĵ','ᴊ','ᴶ','Ｊ'],
		
		'k' : ['k','ķ','ƙ','ǩ','ʞ','ᵏ','ᶄ','ḱ','ḳ','ḵ','ⱪ','ｋ'],
		'K' : ['K','Ķ','Ƙ','Ǩ','ᴷ','Ḱ','Ḳ','Ḵ','Ⱪ','Ｋ'],
		
		'l' : ['l','ĺ','ļ','ľ','ŀ','ł','ƚ','ȴ','ɫ','ɬ','ɭ','ˡ','ᶅ','ᶩ','ᶪ','ḷ','ḹ','ḻ','ḽ','ℓ','ⱡ'],
		'L' : ['L','Ĺ','Ļ','Ľ','Ŀ','Ł','Ƚ','ʟ','ᴌ','ᴸ','ᶫ','Ḷ','Ḹ','Ḻ','Ḽ','Ⱡ','Ɫ'],
		
		'm' : ['m','ɯ','ɰ','ɱ','ͫ','ᴟ','ᵐ','ᵚ','ᵯ','ᶆ','ᶬ','ᶭ','ḿ','ṁ','ṃ','㎡','㎥','ｍ'],
		'M' : ['M','Ɯ','ᴍ','ᴹ','Ḿ','Ṁ','Ṃ','Ｍ'],
		
		'n' : ['n','ñ','ń','ņ','ň','ŉ','ƞ','ǹ','ȵ','ɲ','ɳ','ᵰ','ᶇ','ᶮ','ᶯ','ṅ','ṇ','ṉ','ṋ','ⁿ','ｎ'],
		'N' : ['N','Ñ','Ń','Ņ','Ň','Ɲ','Ǹ','Ƞ','ɴ','ᴎ','ᴺ','ᴻ','ᶰ','Ṅ','Ṇ','Ṉ','Ṋ','Ｎ'],
		
		'o' : ['o','ò','ó','ô','õ','ö','ø','ō','ŏ','ő','ơ','ǒ','ǫ','ǭ','ǿ','ȍ','ȏ','ȫ','ȭ','ȯ','ȱ','ɵ','ͦ','о','ӧ','ө','ᴏ','ᴑ','ᴓ','ᴼ','ᵒ','ᶱ','ṍ','ṏ','ṑ','ṓ','ọ','ỏ','ố','ồ','ổ','ỗ','ộ','ớ','ờ','ở','ỡ','ợ','ₒ','ｏ','𐐬'],
		'O' : ['O','Ò','Ó','Ô','Õ','Ö','Ø','Ō','Ŏ','Ő','Ɵ','Ơ','Ǒ','Ǫ','Ǭ','Ǿ','Ȍ','Ȏ','Ȫ','Ȭ','Ȯ','Ȱ','О','Ӧ','Ө','Ṍ','Ṏ','Ṑ','Ṓ','Ọ','Ỏ','Ố','Ồ','Ổ','Ỗ','Ộ','Ớ','Ờ','Ở','Ỡ','Ợ','Ｏ','𐐄'],
		
		'p' : ['p','ᵖ','ᵱ','ᵽ','ᶈ','ṕ','ṗ','ｐ'],
		'P' : ['P','Ƥ','ᴘ','ᴾ','Ṕ','Ṗ','Ᵽ','Ｐ'],
		
		'q' : ['q','ɋ','ʠ','ᛩ','ｑ'],
		'Q' : ['Q','Ɋ','Ｑ'],
		
		'r' : ['r','ŕ','ŗ','ř','ȑ','ȓ','ɍ','ɹ','ɻ','ʳ','ʴ','ʵ','ͬ','ᵣ','ᵲ','ᶉ','ṙ','ṛ','ṝ','ṟ'],
		'R' : ['R','Ŕ','Ŗ','Ř','Ʀ','Ȑ','Ȓ','Ɍ','ʀ','ʁ','ʶ','ᚱ','ᴙ','ᴚ','ᴿ','Ṙ','Ṛ','Ṝ','Ṟ','Ɽ'],
		
		's' : ['s','ś','ŝ','ş','š','ș','ʂ','ᔆ','ᶊ','ṡ','ṣ','ṥ','ṧ','ṩ','ｓ'],
		'S' : ['S','Ś','Ŝ','Ş','Š','Ș','ȿ','ˢ','ᵴ','Ṡ','Ṣ','Ṥ','Ṧ','Ṩ','Ｓ'],
		
		't' : ['t','ţ','ť','ŧ','ƫ','ƭ','ț','ʇ','ͭ','ᵀ','ᵗ','ᵵ','ᶵ','ṫ','ṭ','ṯ','ṱ','ẗ','ｔ'],
		'T' : ['T','Ţ','Ť','Ƭ','Ʈ','Ț','Ⱦ','ᴛ','ᵀ','Ṫ','Ṭ','Ṯ','Ṱ','Ｔ'],
	 	
		'u' : ['u','ù','ú','û','ü','ũ','ū','ŭ','ů','ű','ų','ư','ǔ','ǖ','ǘ','ǚ','ǜ','ȕ','ȗ','ͧ','ߎ','ᵘ','ᵤ','ṳ','ṵ','ṷ','ṹ','ṻ','ụ','ủ','ứ','ừ','ử','ữ','ự','ｕ'],
		'U' : ['U','Ù','Ú','Û','Ü','Ũ','Ū','Ŭ','Ů','Ű','Ų','Ư','Ǔ','Ǖ','Ǘ','Ǚ','Ǜ','Ȕ','Ȗ','Ʉ','ᴜ','ᵁ','ᵾ','Ṳ','Ṵ','Ṷ','Ṹ','Ṻ','Ụ','Ủ','Ứ','Ừ','Ử','Ữ','Ự','Ｕ'],
		
		'v' : ['v','ʋ','ͮ','ᵛ','ᵥ','ᶹ','ṽ','ṿ','ⱱ','ｖ','ⱴ'],
		'V' : ['V','Ʋ','Ʌ','ʌ','ᴠ','ᶌ','Ṽ','Ṿ','Ｖ'],
		
		'w' : ['w','ŵ','ʷ','ᵂ','ẁ','ẃ','ẅ','ẇ','ẉ','ẘ','ⱳ','ｗ'],
		'W' : ['W','Ŵ','ʍ','ᴡ','Ẁ','Ẃ','Ẅ','Ẇ','Ẉ','Ⱳ','Ｗ'],
		
		'x' : ['x','̽','͓','ᶍ','ͯ','ẋ','ẍ','ₓ','ｘ'],
		'X' : ['X','ˣ','ͯ','Ẋ','Ẍ','☒','✕','✖','✗','✘','Ｘ'],
		
		'y' : ['y','ý','ÿ','ŷ','ȳ','ɏ','ʸ','ẏ','ỳ','ỵ','ỷ','ỹ','ｙ'],
		'Y' : ['Y','Ý','Ŷ','Ÿ','Ƴ','ƴ','Ȳ','Ɏ','ʎ','ʏ','Ẏ','Ỳ','Ỵ','Ỷ','Ỹ','Ｙ'],
		
		'z' : ['z','ź','ż','ž','ƶ','ȥ','ɀ','ʐ','ʑ','ᙆ','ᙇ','ᶻ','ᶼ','ᶽ','ẑ','ẓ','ẕ','ⱬ','ｚ'],
		'Z' : ['Z','Ź','Ż','Ž','Ƶ','Ȥ','ᴢ','ᵶ','Ẑ','Ẓ','Ẕ','Ⱬ','Ｚ']
	};

/*
 * Main function of the module which removes all diacritics from the received text
 */
var diacriticless = function (text) {
    var result = [];

	// iterate over all the characters of the received text
    for(var i=0; i<text.length; i++) {
        var searchChar = text.charAt(i);
        var foundChar = false;

		// iterate over all the diacritics
        for(var key in diacritics) {
            var indexChar = diacritics[key].indexOf(searchChar);
			
			// check if the current character is a diacritic
            if (indexChar !== -1) {
				// as the character is a diacritic, adds into the result array, the key of the found diacritic
                result.push(key);
                foundChar = true;
                break;
            }
        }

        // check if the character was not found
        if (!foundChar) {
			// as the character was not found, returns it
            result.push(searchChar);
        }
    }

    return result.join("");
};

var escapeRegExp = function escapeRegExp(str) {
  return str.replace(/[\\^$*+?.()|[\]{}]/g, '\\$&');
};

var defaultType = {
  format: function format(x) {
    return x;
  },
  filterPredicate: function filterPredicate(rowval, filter) {
    var skipDiacritics = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var fromDropdown = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    // take care of nulls
    if (typeof rowval === 'undefined' || rowval === null) {
      return false;
    } // row value


    var rowValue = skipDiacritics ? String(rowval).toLowerCase() : diacriticless(escapeRegExp(String(rowval)).toLowerCase()); // search term

    var searchTerm = skipDiacritics ? filter.toLowerCase() : diacriticless(escapeRegExp(filter).toLowerCase()); // comparison

    return fromDropdown ? rowValue === searchTerm : rowValue.indexOf(searchTerm) > -1;
  },
  compare: function compare(x, y) {
    function cook(d) {
      if (typeof d === 'undefined' || d === null) return '';
      return diacriticless(d.toLowerCase());
    }

    x = cook(x);
    y = cook(y);
    if (x < y) return -1;
    if (x > y) return 1;
    return 0;
  }
};

//
//
//
//
//
//
//
//
//
//
var script = {
  name: 'VgtPaginationPageInfo',
  props: {
    currentPage: {
      "default": 1
    },
    lastPage: {
      "default": 1
    },
    totalRecords: {
      "default": 0
    },
    ofText: {
      "default": 'of',
      type: String
    },
    pageText: {
      "default": 'page',
      type: String
    }
  },
  data: function data() {
    return {};
  },
  computed: {
    pageInfo: function pageInfo() {
      return "".concat(this.ofText, " ").concat(this.lastPage);
    }
  },
  methods: {
    changePage: function changePage(event) {
      var value = parseInt(event.target.value, 10); //! invalid number

      if (Number.isNaN(value) || value > this.lastPage || value < 1) {
        event.target.value = this.currentPage;
        return false;
      } //* valid number


      event.target.value = value;
      this.$emit('page-changed', value);
    }
  },
  mounted: function mounted() {},
  components: {}
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "footer__navigation__page-info"
  }, [_vm._v("\n  " + _vm._s(_vm.pageText) + " "), _c('input', {
    staticClass: "footer__navigation__page-info__current-entry",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": _vm.currentPage
    },
    on: {
      "keyup": function keyup($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
          return null;
        }

        $event.stopPropagation();
        return _vm.changePage($event);
      }
    }
  }), _vm._v(" " + _vm._s(_vm.pageInfo) + "\n")]);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = undefined;
/* scoped */

var __vue_scope_id__ = "data-v-9a8cd1f4";
/* module identifier */

var __vue_module_identifier__ = undefined;
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__ =
/*#__PURE__*/
normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

//
var DEFAULT_ROWS_PER_PAGE_DROPDOWN = [10, 20, 30, 40, 50];
var script$1 = {
  name: 'VgtPagination',
  props: {
    styleClass: {
      "default": 'table table-bordered'
    },
    total: {
      "default": null
    },
    perPage: {},
    rtl: {
      "default": false
    },
    customRowsPerPageDropdown: {
      "default": function _default() {
        return [];
      }
    },
    paginateDropdownAllowAll: {
      "default": true
    },
    mode: {
      "default": 'records'
    },
    // text options
    nextText: {
      "default": 'Next'
    },
    prevText: {
      "default": 'Prev'
    },
    rowsPerPageText: {
      "default": 'Rows per page:'
    },
    ofText: {
      "default": 'of'
    },
    pageText: {
      "default": 'page'
    },
    allText: {
      "default": 'All'
    }
  },
  data: function data() {
    return {
      currentPage: 1,
      prevPage: 0,
      currentPerPage: 10,
      rowsPerPageOptions: []
    };
  },
  watch: {
    perPage: {
      handler: function handler(newValue, oldValue) {
        this.handlePerPage();
        this.perPageChanged(oldValue);
      },
      immediate: true
    },
    customRowsPerPageDropdown: function customRowsPerPageDropdown() {
      this.handlePerPage();
    },
    total: {
      handler: function handler(newValue, oldValue) {
        if (this.rowsPerPageOptions.indexOf(this.currentPerPage) === -1) {
          this.currentPerPage = newValue;
        }
      }
    }
  },
  computed: {
    // Number of pages
    pagesCount: function pagesCount() {
      var quotient = Math.floor(this.total / this.currentPerPage);
      var remainder = this.total % this.currentPerPage;
      return remainder === 0 ? quotient : quotient + 1;
    },
    // Current displayed items
    paginatedInfo: function paginatedInfo() {
      var first = (this.currentPage - 1) * this.currentPerPage + 1;
      var last = Math.min(this.total, this.currentPage * this.currentPerPage);

      if (last === 0) {
        first = 0;
      }

      return "".concat(first, " - ").concat(last, " ").concat(this.ofText, " ").concat(this.total);
    },
    // Can go to next page
    nextIsPossible: function nextIsPossible() {
      return this.currentPage < this.pagesCount;
    },
    // Can go to previous page
    prevIsPossible: function prevIsPossible() {
      return this.currentPage > 1;
    }
  },
  methods: {
    // Change current page
    changePage: function changePage(pageNumber) {
      var emit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (pageNumber > 0 && this.total > this.currentPerPage * (pageNumber - 1)) {
        this.prevPage = this.currentPage;
        this.currentPage = pageNumber;
        if (emit) this.pageChanged();
      }
    },
    // Go to next page
    nextPage: function nextPage() {
      if (this.nextIsPossible) {
        this.prevPage = this.currentPage;
        ++this.currentPage;
        this.pageChanged();
      }
    },
    // Go to previous page
    previousPage: function previousPage() {
      if (this.prevIsPossible) {
        this.prevPage = this.currentPage;
        --this.currentPage;
        this.pageChanged();
      }
    },
    // Indicate page changing
    pageChanged: function pageChanged() {
      this.$emit('page-changed', {
        currentPage: this.currentPage,
        prevPage: this.prevPage
      });
    },
    // Indicate per page changing
    perPageChanged: function perPageChanged(oldValue) {
      // go back to first page
      if (oldValue) {
        //* only emit if this isn't first initialization
        this.$emit('per-page-changed', {
          currentPerPage: this.currentPerPage
        });
      }

      this.changePage(1, false);
    },
    // Handle per page changing
    handlePerPage: function handlePerPage() {
      //* if there's a custom dropdown then we use that
      if (this.customRowsPerPageDropdown !== null && Array.isArray(this.customRowsPerPageDropdown) && this.customRowsPerPageDropdown.length !== 0) {
        this.rowsPerPageOptions = lodash_clonedeep(this.customRowsPerPageDropdown);
      } else {
        //* otherwise we use the default rows per page dropdown
        this.rowsPerPageOptions = lodash_clonedeep(DEFAULT_ROWS_PER_PAGE_DROPDOWN);
      }

      if (this.perPage) {
        this.currentPerPage = this.perPage; // if perPage doesn't already exist, we add it

        var found = false;

        for (var i = 0; i < this.rowsPerPageOptions.length; i++) {
          if (this.rowsPerPageOptions[i] === this.perPage) {
            found = true;
          }
        }

        if (!found && this.perPage !== -1) {
          this.rowsPerPageOptions.unshift(this.perPage);
        }
      } else {
        // reset to default
        this.currentPerPage = 10;
      }
    }
  },
  mounted: function mounted() {},
  components: {
    'pagination-page-info': __vue_component__
  }
};

/* script */
var __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "vgt-wrap__footer vgt-clearfix"
  }, [_c('div', {
    staticClass: "footer__row-count vgt-pull-left"
  }, [_c('span', {
    staticClass: "footer__row-count__label"
  }, [_vm._v(_vm._s(_vm.rowsPerPageText))]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.currentPerPage,
      expression: "currentPerPage"
    }],
    staticClass: "footer__row-count__select",
    attrs: {
      "autocomplete": "off",
      "name": "perPageSelect"
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.currentPerPage = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.perPageChanged]
    }
  }, [_vm._l(_vm.rowsPerPageOptions, function (option, idx) {
    return _c('option', {
      key: 'rows-dropdown-option-' + idx,
      domProps: {
        "value": option
      }
    }, [_vm._v("\n        " + _vm._s(option) + "\n      ")]);
  }), _vm._v(" "), _vm.paginateDropdownAllowAll ? _c('option', {
    domProps: {
      "value": _vm.total
    }
  }, [_vm._v(_vm._s(_vm.allText))]) : _vm._e()], 2)]), _vm._v(" "), _c('div', {
    staticClass: "footer__navigation vgt-pull-right"
  }, [_c('a', {
    staticClass: "footer__navigation__page-btn",
    "class": {
      disabled: !_vm.prevIsPossible
    },
    attrs: {
      "href": "javascript:undefined",
      "tabindex": "0"
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        $event.stopPropagation();
        return _vm.previousPage($event);
      }
    }
  }, [_c('span', {
    staticClass: "chevron",
    "class": {
      'left': !_vm.rtl,
      'right': _vm.rtl
    }
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.prevText))])]), _vm._v(" "), _vm.mode === 'pages' ? _c('pagination-page-info', {
    attrs: {
      "totalRecords": _vm.total,
      "lastPage": _vm.pagesCount,
      "currentPage": _vm.currentPage,
      "ofText": _vm.ofText,
      "pageText": _vm.pageText
    },
    on: {
      "page-changed": _vm.changePage
    }
  }) : _c('div', {
    staticClass: "footer__navigation__info"
  }, [_vm._v(_vm._s(_vm.paginatedInfo))]), _vm._v(" "), _c('a', {
    staticClass: "footer__navigation__page-btn",
    "class": {
      disabled: !_vm.nextIsPossible
    },
    attrs: {
      "href": "javascript:undefined",
      "tabindex": "0"
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        $event.stopPropagation();
        return _vm.nextPage($event);
      }
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.nextText))]), _vm._v(" "), _c('span', {
    staticClass: "chevron",
    "class": {
      'right': !_vm.rtl,
      'left': _vm.rtl
    }
  })])], 1)]);
};

var __vue_staticRenderFns__$1 = [];
/* style */

var __vue_inject_styles__$1 = undefined;
/* scoped */

var __vue_scope_id__$1 = undefined;
/* module identifier */

var __vue_module_identifier__$1 = undefined;
/* functional template */

var __vue_is_functional_template__$1 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$1 =
/*#__PURE__*/
normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, undefined, undefined);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$2 = {
  name: 'VgtGlobalSearch',
  props: ['value', 'searchEnabled', 'globalSearchPlaceholder'],
  data: function data() {
    return {
      globalSearchTerm: null
    };
  },
  computed: {
    showControlBar: function showControlBar() {
      if (this.searchEnabled) return true;
      if (this.$slots && this.$slots['internal-table-actions']) return true;
      return false;
    }
  },
  methods: {
    updateValue: function updateValue(value) {
      this.$emit('input', value);
      this.$emit('on-keyup', value);
    },
    entered: function entered(value) {
      this.$emit('on-enter', value);
    }
  }
};

/* script */
var __vue_script__$2 = script$2;
/* template */

var __vue_render__$2 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _vm.showControlBar ? _c('div', {
    staticClass: "vgt-global-search vgt-clearfix"
  }, [_c('div', {
    staticClass: "vgt-global-search__input vgt-pull-left"
  }, [_vm.searchEnabled ? _c('span', {
    staticClass: "input__icon"
  }, [_c('div', {
    staticClass: "magnifying-glass"
  })]) : _vm._e(), _vm._v(" "), _vm.searchEnabled ? _c('input', {
    staticClass: "vgt-input vgt-pull-left",
    attrs: {
      "type": "text",
      "placeholder": _vm.globalSearchPlaceholder
    },
    domProps: {
      "value": _vm.value
    },
    on: {
      "input": function input($event) {
        return _vm.updateValue($event.target.value);
      },
      "keyup": function keyup($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
          return null;
        }

        return _vm.entered($event.target.value);
      }
    }
  }) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "vgt-global-search__actions vgt-pull-right"
  }, [_vm._t("internal-table-actions")], 2)]) : _vm._e();
};

var __vue_staticRenderFns__$2 = [];
/* style */

var __vue_inject_styles__$2 = undefined;
/* scoped */

var __vue_scope_id__$2 = undefined;
/* module identifier */

var __vue_module_identifier__$2 = undefined;
/* functional template */

var __vue_is_functional_template__$2 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$2 =
/*#__PURE__*/
normalizeComponent({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, undefined, undefined);

var script$3 = {
  name: 'VgtFilterRow',
  props: ['lineNumbers', 'columns', 'typedColumns', 'globalSearchEnabled', 'selectable', 'mode'],
  watch: {
    columns: {
      handler: function handler(newValue, oldValue) {
        this.populateInitialFilters();
      },
      deep: true,
      immediate: true
    }
  },
  data: function data() {
    return {
      columnFilters: {},
      timer: null
    };
  },
  computed: {
    // to create a filter row, we need to
    // make sure that there is atleast 1 column
    // that requires filtering
    hasFilterRow: function hasFilterRow() {
      // if (this.mode === 'remote' || !this.globalSearchEnabled) {
      for (var i = 0; i < this.columns.length; i++) {
        var col = this.columns[i];

        if (col.filterOptions && col.filterOptions.enabled) {
          return true;
        }
      } // }


      return false;
    }
  },
  methods: {
    reset: function reset() {
      var emitEvent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.columnFilters = {};

      if (emitEvent) {
        this.$emit('filter-changed', this.columnFilters);
      }
    },
    isFilterable: function isFilterable(column) {
      return column.filterOptions && column.filterOptions.enabled;
    },
    isDropdown: function isDropdown(column) {
      return this.isFilterable(column) && column.filterOptions.filterDropdownItems && column.filterOptions.filterDropdownItems.length;
    },
    isDropdownObjects: function isDropdownObjects(column) {
      return this.isDropdown(column) && _typeof(column.filterOptions.filterDropdownItems[0]) === 'object';
    },
    isDropdownArray: function isDropdownArray(column) {
      return this.isDropdown(column) && _typeof(column.filterOptions.filterDropdownItems[0]) !== 'object';
    },
    // get column's defined placeholder or default one
    getPlaceholder: function getPlaceholder(column) {
      var placeholder = this.isFilterable(column) && column.filterOptions.placeholder || "Filter ".concat(column.label);
      return placeholder;
    },
    updateFiltersOnEnter: function updateFiltersOnEnter(column, value) {
      if (this.timer) clearTimeout(this.timer);
      this.updateFiltersImmediately(column.field, value);
    },
    updateFiltersOnKeyup: function updateFiltersOnKeyup(column, value) {
      // if the trigger is enter, we don't filter on keyup
      if (column.filterOptions.trigger === 'enter') return;
      this.updateFilters(column, value);
    },
    updateSlotFilter: function updateSlotFilter(column, value) {
      var fieldToFilter = column.filterOptions.slotFilterField || column.field;

      if (typeof column.filterOptions.formatValue === 'function') {
        value = column.filterOptions.formatValue(value);
      }

      this.updateFiltersImmediately(fieldToFilter, value);
    },
    // since vue doesn't detect property addition and deletion, we
    // need to create helper function to set property etc
    updateFilters: function updateFilters(column, value) {
      var _this = this;

      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(function () {
        _this.updateFiltersImmediately(column.field, value);
      }, 400);
    },
    updateFiltersImmediately: function updateFiltersImmediately(field, value) {
      this.$set(this.columnFilters, field, value);
      this.$emit('filter-changed', this.columnFilters);
    },
    populateInitialFilters: function populateInitialFilters() {
      for (var i = 0; i < this.columns.length; i++) {
        var col = this.columns[i]; // lets see if there are initial
        // filters supplied by user

        if (this.isFilterable(col) && typeof col.filterOptions.filterValue !== 'undefined' && col.filterOptions.filterValue !== null) {
          this.$set(this.columnFilters, col.field, col.filterOptions.filterValue); // this.updateFilters(col, col.filterOptions.filterValue);
          // this.$set(col.filterOptions, 'filterValue', undefined);
        }
      } //* lets emit event once all filters are set


      this.$emit('filter-changed', this.columnFilters);
    }
  }
};

/* script */
var __vue_script__$3 = script$3;
/* template */

var __vue_render__$3 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _vm.hasFilterRow ? _c('tr', [_vm.lineNumbers ? _c('th') : _vm._e(), _vm._v(" "), _vm.selectable ? _c('th') : _vm._e(), _vm._v(" "), _vm._l(_vm.columns, function (column, index) {
    return !column.hidden ? _c('th', {
      key: index,
      staticClass: "filter-th"
    }, [_vm._t("column-filter", [_vm.isFilterable(column) ? _c('div', [!_vm.isDropdown(column) ? _c('input', {
      staticClass: "vgt-input",
      attrs: {
        "type": "text",
        "placeholder": _vm.getPlaceholder(column)
      },
      domProps: {
        "value": _vm.columnFilters[column.field]
      },
      on: {
        "keyup": function keyup($event) {
          if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
            return null;
          }

          return _vm.updateFiltersOnEnter(column, $event.target.value);
        },
        "input": function input($event) {
          return _vm.updateFiltersOnKeyup(column, $event.target.value);
        }
      }
    }) : _vm._e(), _vm._v(" "), _vm.isDropdownArray(column) ? _c('select', {
      staticClass: "vgt-select",
      domProps: {
        "value": _vm.columnFilters[column.field]
      },
      on: {
        "change": function change($event) {
          return _vm.updateFilters(column, $event.target.value);
        }
      }
    }, [_c('option', {
      key: "-1",
      attrs: {
        "value": ""
      }
    }, [_vm._v(_vm._s(_vm.getPlaceholder(column)))]), _vm._v(" "), _vm._l(column.filterOptions.filterDropdownItems, function (option, i) {
      return _c('option', {
        key: i,
        domProps: {
          "value": option
        }
      }, [_vm._v("\n              " + _vm._s(option) + "\n            ")]);
    })], 2) : _vm._e(), _vm._v(" "), _vm.isDropdownObjects(column) ? _c('select', {
      staticClass: "vgt-select",
      domProps: {
        "value": _vm.columnFilters[column.field]
      },
      on: {
        "change": function change($event) {
          return _vm.updateFilters(column, $event.target.value, true);
        }
      }
    }, [_c('option', {
      key: "-1",
      attrs: {
        "value": ""
      }
    }, [_vm._v(_vm._s(_vm.getPlaceholder(column)))]), _vm._v(" "), _vm._l(column.filterOptions.filterDropdownItems, function (option, i) {
      return _c('option', {
        key: i,
        domProps: {
          "value": option.value
        }
      }, [_vm._v(_vm._s(option.text))]);
    })], 2) : _vm._e()]) : _vm._e()], {
      "column": column,
      "updateFilters": _vm.updateSlotFilter
    })], 2) : _vm._e();
  })], 2) : _vm._e();
};

var __vue_staticRenderFns__$3 = [];
/* style */

var __vue_inject_styles__$3 = undefined;
/* scoped */

var __vue_scope_id__$3 = "data-v-1c6bfd21";
/* module identifier */

var __vue_module_identifier__$3 = undefined;
/* functional template */

var __vue_is_functional_template__$3 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$3 =
/*#__PURE__*/
normalizeComponent({
  render: __vue_render__$3,
  staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, undefined, undefined, undefined);

var DEFAULT_SORT_TYPE = 'asc';

function getColumnFirstSortType(column) {
  return column.firstSortType || DEFAULT_SORT_TYPE;
}

function getCurrentPrimarySort(sortArray, column) {
  return sortArray.length === 1 && sortArray[0].field === column.field ? sortArray[0].type : undefined;
}

function getNextSort(currentSort) {
  return currentSort === 'asc' ? 'desc' : DEFAULT_SORT_TYPE;
}

function getIndex(sortArray, column) {
  for (var i = 0; i < sortArray.length; i++) {
    if (column.field === sortArray[i].field) return i;
  }

  return -1;
}

var primarySort = function (sortArray, column) {
  var currentPrimarySort = getCurrentPrimarySort(sortArray, column);
  return [{
    field: column.field,
    type: currentPrimarySort ? getNextSort(currentPrimarySort) : getColumnFirstSortType(column)
  }];
};

var secondarySort = function (sortArray, column) {
  var index = getIndex(sortArray, column);

  if (index === -1) {
    sortArray.push({
      field: column.field,
      type: getColumnFirstSortType(column)
    });
  } else {
    sortArray[index].type = getNextSort(sortArray[index].type);
  }

  return sortArray;
};

//
var script$4 = {
  name: 'VgtTableHeader',
  props: {
    lineNumbers: {
      "default": false,
      type: Boolean
    },
    selectable: {
      "default": false,
      type: Boolean
    },
    allSelected: {
      "default": false,
      type: Boolean
    },
    allSelectedIndeterminate: {
      "default": false,
      type: Boolean
    },
    columns: {
      type: Array
    },
    mode: {
      type: String
    },
    typedColumns: {},
    //* Sort related
    sortable: {
      type: Boolean
    },
    // sortColumn: {
    //   type: Number,
    // },
    // sortType: {
    //   type: String,
    // },
    // utility functions
    // isSortableColumn: {
    //   type: Function,
    // },
    getClasses: {
      type: Function
    },
    //* search related
    searchEnabled: {
      type: Boolean
    },
    tableRef: {},
    paginated: {}
  },
  watch: {
    columns: {
      handler: function handler() {
        this.setColumnStyles();
      },
      immediate: true
    },
    tableRef: {
      handler: function handler() {
        this.setColumnStyles();
      },
      immediate: true
    },
    paginated: {
      handler: function handler() {
        if (this.tableRef) {
          this.setColumnStyles();
        }
      },
      deep: true
    }
  },
  data: function data() {
    return {
      checkBoxThStyle: {},
      lineNumberThStyle: {},
      columnStyles: [],
      sorts: []
    };
  },
  computed: {},
  methods: {
    reset: function reset() {
      this.$refs['filter-row'].reset(true);
    },
    toggleSelectAll: function toggleSelectAll() {
      this.$emit('on-toggle-select-all');
    },
    isSortableColumn: function isSortableColumn(column) {
      var sortable = column.sortable;
      var isSortable = typeof sortable === 'boolean' ? sortable : this.sortable;
      return isSortable;
    },
    sort: function sort(e, column) {
      //* if column is not sortable, return right here
      if (!this.isSortableColumn(column)) return;

      if (e.shiftKey) {
        this.sorts = secondarySort(this.sorts, column);
      } else {
        this.sorts = primarySort(this.sorts, column);
      }

      this.$emit('on-sort-change', this.sorts);
    },
    setInitialSort: function setInitialSort(sorts) {
      this.sorts = sorts;
      this.$emit('on-sort-change', this.sorts);
    },
    getColumnSort: function getColumnSort(column) {
      for (var i = 0; i < this.sorts.length; i += 1) {
        if (this.sorts[i].field === column.field) {
          return this.sorts[i].type || 'asc';
        }
      }

      return null;
    },
    getHeaderClasses: function getHeaderClasses(column, index) {
      var classes = lodash_assign({}, this.getClasses(index, 'th'), {
        sortable: this.isSortableColumn(column),
        'sorting sorting-desc': this.getColumnSort(column) === 'desc',
        'sorting sorting-asc': this.getColumnSort(column) === 'asc'
      });
      return classes;
    },
    filterRows: function filterRows(columnFilters) {
      this.$emit('filter-changed', columnFilters);
    },
    getWidthStyle: function getWidthStyle(dom) {
      if (window && window.getComputedStyle && dom) {
        var cellStyle = window.getComputedStyle(dom, null);
        return {
          width: cellStyle.width
        };
      }

      return {
        width: 'auto'
      };
    },
    setColumnStyles: function setColumnStyles() {
      var colStyles = [];

      for (var i = 0; i < this.columns.length; i++) {
        if (this.tableRef) {
          var skip = 0;
          if (this.selectable) skip++;
          if (this.lineNumbers) skip++;
          var cell = this.tableRef.rows[0].cells[i + skip];
          colStyles.push(this.getWidthStyle(cell));
        } else {
          colStyles.push({
            minWidth: this.columns[i].width ? this.columns[i].width : 'auto',
            maxWidth: this.columns[i].width ? this.columns[i].width : 'auto',
            width: this.columns[i].width ? this.columns[i].width : 'auto'
          });
        }
      }

      this.columnStyles = colStyles;
    },
    getColumnStyle: function getColumnStyle(column, index) {
      var styleObject = {
        minWidth: column.width ? column.width : 'auto',
        maxWidth: column.width ? column.width : 'auto',
        width: column.width ? column.width : 'auto'
      }; //* if fixed header we need to get width from original table

      if (this.tableRef) {
        if (this.selectable) index++;
        if (this.lineNumbers) index++;
        var cell = this.tableRef.rows[0].cells[index];
        var cellStyle = window.getComputedStyle(cell, null);
        styleObject.width = cellStyle.width;
      }

      return styleObject;
    }
  },
  mounted: function mounted() {
    window.addEventListener('resize', this.setColumnStyles);
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.setColumnStyles);
  },
  components: {
    'vgt-filter-row': __vue_component__$3
  }
};

/* script */
var __vue_script__$4 = script$4;
/* template */

var __vue_render__$4 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('thead', [_c('tr', [_vm.lineNumbers ? _c('th', {
    staticClass: "line-numbers"
  }) : _vm._e(), _vm._v(" "), _vm.selectable ? _c('th', {
    staticClass: "vgt-checkbox-col"
  }, [_c('input', {
    attrs: {
      "type": "checkbox"
    },
    domProps: {
      "checked": _vm.allSelected,
      "indeterminate": _vm.allSelectedIndeterminate
    },
    on: {
      "change": _vm.toggleSelectAll
    }
  })]) : _vm._e(), _vm._v(" "), _vm._l(_vm.columns, function (column, index) {
    return !column.hidden ? _c('th', {
      key: index,
      "class": _vm.getHeaderClasses(column, index),
      style: _vm.columnStyles[index],
      on: {
        "click": function click($event) {
          return _vm.sort($event, column);
        }
      }
    }, [_vm._t("table-column", [_c('span', [_vm._v(_vm._s(column.label))])], {
      "column": column
    })], 2) : _vm._e();
  })], 2), _vm._v(" "), _c("vgt-filter-row", {
    ref: "filter-row",
    tag: "tr",
    attrs: {
      "global-search-enabled": _vm.searchEnabled,
      "line-numbers": _vm.lineNumbers,
      "selectable": _vm.selectable,
      "columns": _vm.columns,
      "mode": _vm.mode,
      "typed-columns": _vm.typedColumns
    },
    on: {
      "filter-changed": _vm.filterRows
    },
    scopedSlots: _vm._u([{
      key: "column-filter",
      fn: function fn(props) {
        return [_vm._t("column-filter", null, {
          "column": props.column,
          "updateFilters": props.updateFilters
        })];
      }
    }], null, true)
  })], 1);
};

var __vue_staticRenderFns__$4 = [];
/* style */

var __vue_inject_styles__$4 = undefined;
/* scoped */

var __vue_scope_id__$4 = "data-v-2d1e3c02";
/* module identifier */

var __vue_module_identifier__$4 = undefined;
/* functional template */

var __vue_is_functional_template__$4 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$4 =
/*#__PURE__*/
normalizeComponent({
  render: __vue_render__$4,
  staticRenderFns: __vue_staticRenderFns__$4
}, __vue_inject_styles__$4, __vue_script__$4, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, false, undefined, undefined, undefined);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$5 = {
  name: 'VgtHeaderRow',
  props: {
    headerRow: {
      type: Object
    },
    columns: {
      type: Array
    },
    lineNumbers: {
      type: Boolean
    },
    selectable: {
      type: Boolean
    },
    selectAllByGroup: {
      type: Boolean
    },
    collapsable: {
      type: [Boolean, Number],
      "default": false
    },
    collectFormatted: {
      type: Function
    },
    formattedRow: {
      type: Function
    },
    getClasses: {
      type: Function
    },
    fullColspan: {
      type: Number
    },
    groupIndex: {
      type: Number
    }
  },
  data: function data() {
    return {};
  },
  computed: {
    allSelected: function allSelected() {
      var headerRow = this.headerRow,
          groupChildObject = this.groupChildObject;
      return headerRow.children.filter(function (row) {
        return row.vgtSelected;
      }).length === headerRow.children.length;
    }
  },
  methods: {
    columnCollapsable: function columnCollapsable(currentIndex) {
      if (this.collapsable === true) {
        return currentIndex === 0;
      }

      return currentIndex === this.collapsable;
    },
    toggleSelectGroup: function toggleSelectGroup(event) {
      this.$emit('on-select-group-change', {
        groupIndex: this.groupIndex,
        checked: event.target.checked
      });
    }
  },
  mounted: function mounted() {},
  components: {}
};

/* script */
var __vue_script__$5 = script$5;
/* template */

var __vue_render__$5 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('tr', [_vm.headerRow.mode === 'span' ? _c('th', {
    staticClass: "vgt-left-align vgt-row-header",
    attrs: {
      "colspan": _vm.fullColspan
    }
  }, [_vm.selectAllByGroup ? [_vm._t("table-header-group-select", [_c('input', {
    attrs: {
      "type": "checkbox"
    },
    domProps: {
      "checked": _vm.allSelected
    },
    on: {
      "change": function change($event) {
        return _vm.toggleSelectGroup($event);
      }
    }
  })], {
    "columns": _vm.columns,
    "row": _vm.headerRow
  })] : _vm._e(), _vm._v(" "), _c('span', {
    on: {
      "click": function click($event) {
        _vm.collapsable ? _vm.$emit('vgtExpand', !_vm.headerRow.vgtIsExpanded) : function () {};
      }
    }
  }, [_vm.collapsable ? _c('span', {
    staticClass: "triangle",
    "class": {
      'expand': _vm.headerRow.vgtIsExpanded
    }
  }) : _vm._e(), _vm._v(" "), _vm._t("table-header-row", [_vm.headerRow.html ? _c('span', {
    domProps: {
      "innerHTML": _vm._s(_vm.headerRow.label)
    }
  }) : _c('span', [_vm._v("\n          " + _vm._s(_vm.headerRow.label) + "\n        ")])], {
    "row": _vm.headerRow
  })], 2)], 2) : _vm._e(), _vm._v(" "), _vm.headerRow.mode !== 'span' && _vm.lineNumbers ? _c('th', {
    staticClass: "vgt-row-header"
  }) : _vm._e(), _vm._v(" "), _vm.headerRow.mode !== 'span' && _vm.selectable ? _c('th', {
    staticClass: "vgt-row-header"
  }, [_vm.selectAllByGroup ? [_vm._t("table-header-group-select", [_c('input', {
    attrs: {
      "type": "checkbox"
    },
    domProps: {
      "checked": _vm.allSelected
    },
    on: {
      "change": function change($event) {
        return _vm.toggleSelectGroup($event);
      }
    }
  })], {
    "columns": _vm.columns,
    "row": _vm.headerRow
  })] : _vm._e()], 2) : _vm._e(), _vm._v(" "), _vm._l(_vm.columns, function (column, i) {
    return _vm.headerRow.mode !== 'span' && !column.hidden ? _c('th', {
      key: i,
      staticClass: "vgt-row-header",
      "class": _vm.getClasses(i, 'td'),
      on: {
        "click": function click($event) {
          _vm.columnCollapsable(i) ? _vm.$emit('vgtExpand', !_vm.headerRow.vgtIsExpanded) : function () {};
        }
      }
    }, [_vm.columnCollapsable(i) ? _c('span', {
      staticClass: "triangle",
      "class": {
        'expand': _vm.headerRow.vgtIsExpanded
      }
    }) : _vm._e(), _vm._v(" "), _vm._t("table-header-row", [!column.html ? _c('span', [_vm._v("\n        " + _vm._s(_vm.collectFormatted(_vm.headerRow, column, true)) + "\n      ")]) : _vm._e(), _vm._v(" "), column.html ? _c('span', {
      domProps: {
        "innerHTML": _vm._s(_vm.collectFormatted(_vm.headerRow, column, true))
      }
    }) : _vm._e()], {
      "row": _vm.headerRow,
      "column": column,
      "formattedRow": _vm.formattedRow(_vm.headerRow, true)
    })], 2) : _vm._e();
  })], 2);
};

var __vue_staticRenderFns__$5 = [];
/* style */

var __vue_inject_styles__$5 = undefined;
/* scoped */

var __vue_scope_id__$5 = undefined;
/* module identifier */

var __vue_module_identifier__$5 = undefined;
/* functional template */

var __vue_is_functional_template__$5 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$5 =
/*#__PURE__*/
normalizeComponent({
  render: __vue_render__$5,
  staticRenderFns: __vue_staticRenderFns__$5
}, __vue_inject_styles__$5, __vue_script__$5, __vue_scope_id__$5, __vue_is_functional_template__$5, __vue_module_identifier__$5, false, undefined, undefined, undefined);

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * var result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var timestamp = toDate(dirtyDate).getTime();
  var amount = toInteger(dirtyAmount);
  return new Date(timestamp + amount);
}

var MILLISECONDS_IN_MINUTE = 60000;
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */

function getTimezoneOffsetInMilliseconds(dirtyDate) {
  var date = new Date(dirtyDate.getTime());
  var baseTimezoneOffset = date.getTimezoneOffset();
  date.setSeconds(0, 0);
  var millisecondsPartOfTimezoneOffset = date.getTime() % MILLISECONDS_IN_MINUTE;
  return baseTimezoneOffset * MILLISECONDS_IN_MINUTE + millisecondsPartOfTimezoneOffset;
}

/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * var result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * var result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */

function compareAsc(dirtyDateLeft, dirtyDateRight) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var dateLeft = toDate(dirtyDateLeft);
  var dateRight = toDate(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Now `isValid` doesn't throw an exception
 *   if the first argument is not an instance of Date.
 *   Instead, argument is converted beforehand using `toDate`.
 *
 *   Examples:
 *
 *   | `isValid` argument        | Before v2.0.0 | v2.0.0 onward |
 *   |---------------------------|---------------|---------------|
 *   | `new Date()`              | `true`        | `true`        |
 *   | `new Date('2016-01-01')`  | `true`        | `true`        |
 *   | `new Date('')`            | `false`       | `false`       |
 *   | `new Date(1488370835081)` | `true`        | `true`        |
 *   | `new Date(NaN)`           | `false`       | `false`       |
 *   | `'2016-01-01'`            | `TypeError`   | `true`        |
 *   | `''`                      | `TypeError`   | `false`       |
 *   | `1488370835081`           | `TypeError`   | `true`        |
 *   | `NaN`                     | `TypeError`   | `false`       |
 *
 *   We introduce this change to make *date-fns* consistent with ECMAScript behavior
 *   that try to coerce arguments to the expected type
 *   (which is also the case with other *date-fns* functions).
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * var result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * var result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * var result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = toDate(dirtyDate);
  return !isNaN(date);
}

var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};
function formatDistance(token, count, options) {
  options = options || {};
  var result;

  if (typeof formatDistanceLocale[token] === 'string') {
    result = formatDistanceLocale[token];
  } else if (count === 1) {
    result = formatDistanceLocale[token].one;
  } else {
    result = formatDistanceLocale[token].other.replace('{{count}}', count);
  }

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
}

function buildFormatLongFn(args) {
  return function (dirtyOptions) {
    var options = dirtyOptions || {};
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};

var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};
function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
}

function buildLocalizeFn(args) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var context = options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    return valuesArray[index];
  };
}

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'] // Note: in English, the names of days of the week and months are capitalized.
  // If you are making a new locale based on this one, check if the same is true for the language you're working on.
  // Generally, formatted dates should look like they are in the middle of a sentence,
  // e.g. in Spanish language the weekdays and months should be in the lowercase.

};
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

function ordinalNumber(dirtyNumber, _dirtyOptions) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`:
  //
  //   var options = dirtyOptions || {}
  //   var unit = String(options.unit)
  //
  // where `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
}

var localize = {
  ordinalNumber: ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return Number(quarter) - 1;
    }
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};

function buildMatchPatternFn(args) {
  return function (dirtyString, dirtyOptions) {
    var string = String(dirtyString);
    var options = dirtyOptions || {};
    var matchResult = string.match(args.matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);

    if (!parseResult) {
      return null;
    }

    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    return {
      value: value,
      rest: string.slice(matchedString.length)
    };
  };
}

function buildMatchFn(args) {
  return function (dirtyString, dirtyOptions) {
    var string = String(dirtyString);
    var options = dirtyOptions || {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var value;

    if (Object.prototype.toString.call(parsePatterns) === '[object Array]') {
      value = parsePatterns.findIndex(function (pattern) {
        return pattern.test(string);
      });
    } else {
      value = findKey(parsePatterns, function (pattern) {
        return pattern.test(string);
      });
    }

    value = args.valueCallback ? args.valueCallback(value) : value;
    value = options.valueCallback ? options.valueCallback(value) : value;
    return {
      value: value,
      rest: string.slice(matchedString.length)
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }
}

var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10);
    }
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1;
    }
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};

/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */

var locale = {
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};

/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * var result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var amount = toInteger(dirtyAmount);
  return addMilliseconds(dirtyDate, -amount);
}

function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function (date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return addLeadingZeros(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function (date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : addLeadingZeros(month + 1, 2);
  },
  // Day of the month
  d: function (date, token) {
    return addLeadingZeros(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function (date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
      case 'aaa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function (date, token) {
    return addLeadingZeros(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function (date, token) {
    return addLeadingZeros(date.getUTCHours(), token.length);
  },
  // Minute
  m: function (date, token) {
    return addLeadingZeros(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function (date, token) {
    return addLeadingZeros(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function (date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return addLeadingZeros(fractionalSeconds, token.length);
  }
};

var MILLISECONDS_IN_DAY = 86400000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCDayOfYear(dirtyDate) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = toDate(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeek(dirtyDate) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var weekStartsOn = 1;
  var date = toDate(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeekYear(dirtyDate) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = toDate(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCISOWeek(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCISOWeek(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeekYear(dirtyDate) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var year = getUTCISOWeekYear(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCISOWeek(fourthOfJanuary);
  return date;
}

var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeek(dirtyDate) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = toDate(dirtyDate);
  var diff = startOfUTCISOWeek(date).getTime() - startOfUTCISOWeekYear(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeek(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = toDate(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeekYear(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = toDate(dirtyDate, dirtyOptions);
  var year = date.getUTCFullYear();
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCWeek(firstWeekOfNextYear, dirtyOptions);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCWeek(firstWeekOfThisYear, dirtyOptions);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate);
  var year = getUTCWeekYear(dirtyDate, dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCWeek(firstWeek, dirtyOptions);
  return date;
}

var MILLISECONDS_IN_WEEK$1 = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeek(dirtyDate, options) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = toDate(dirtyDate);
  var diff = startOfUTCWeek(date, options).getTime() - startOfUTCWeekYear(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK$1) + 1;
}

var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
  /*
   * |     | Unit                           |     | Unit                           |
   * |-----|--------------------------------|-----|--------------------------------|
   * |  a  | AM, PM                         |  A* | Milliseconds in day            |
   * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
   * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
   * |  d  | Day of month                   |  D  | Day of year                    |
   * |  e  | Local day of week              |  E  | Day of week                    |
   * |  f  |                                |  F* | Day of week in month           |
   * |  g* | Modified Julian day            |  G  | Era                            |
   * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
   * |  i! | ISO day of week                |  I! | ISO week of year               |
   * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
   * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
   * |  l* | (deprecated)                   |  L  | Stand-alone month              |
   * |  m  | Minute                         |  M  | Month                          |
   * |  n  |                                |  N  |                                |
   * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
   * |  p! | Long localized time            |  P! | Long localized date            |
   * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
   * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
   * |  s  | Second                         |  S  | Fraction of second             |
   * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
   * |  u  | Extended year                  |  U* | Cyclic year                    |
   * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
   * |  w  | Local week of year             |  W* | Week of month                  |
   * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
   * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
   * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
   *
   * Letters marked by * are not implemented but reserved by Unicode standard.
   *
   * Letters marked by ! are non-standard, but implemented by date-fns:
   * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
   * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
   *   i.e. 7 for Sunday, 1 for Monday, etc.
   * - `I` is ISO week of year, as opposed to `w` which is local week of year.
   * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
   *   `R` is supposed to be used in conjunction with `I` and `i`
   *   for universal ISO week-numbering date, whereas
   *   `Y` is supposed to be used in conjunction with `w` and `e`
   *   for week-numbering date specific to the locale.
   * - `P` is long localized date format
   * - `p` is long localized time format
   */

};
var formatters$1 = {
  // Era
  G: function (date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return formatters.y(date, token);
  },
  // Local week-numbering year
  Y: function (date, token, localize, options) {
    var signedWeekYear = getUTCWeekYear(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return addLeadingZeros(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return addLeadingZeros(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function (date, token) {
    var isoWeekYear = getUTCISOWeekYear(date); // Padding

    return addLeadingZeros(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    var year = date.getUTCFullYear();
    return addLeadingZeros(year, token.length);
  },
  // Quarter
  Q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return addLeadingZeros(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return addLeadingZeros(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return formatters.M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return addLeadingZeros(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function (date, token, localize, options) {
    var week = getUTCWeek(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return addLeadingZeros(week, token.length);
  },
  // ISO week of year
  I: function (date, token, localize) {
    var isoWeek = getUTCISOWeek(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return addLeadingZeros(isoWeek, token.length);
  },
  // Day of the month
  d: function (date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return formatters.d(date, token);
  },
  // Day of year
  D: function (date, token, localize) {
    var dayOfYear = getUTCDayOfYear(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return addLeadingZeros(dayOfYear, token.length);
  },
  // Day of week
  E: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return addLeadingZeros(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return addLeadingZeros(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return addLeadingZeros(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return formatters.h(date, token);
  },
  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return formatters.H(date, token);
  },
  // Hour [0-11]
  K: function (date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return addLeadingZeros(hours, token.length);
  },
  // Hour [1-24]
  k: function (date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return addLeadingZeros(hours, token.length);
  },
  // Minute
  m: function (date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return formatters.m(date, token);
  },
  // Second
  s: function (date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return formatters.s(date, token);
  },
  // Fraction of second
  S: function (date, token) {
    return formatters.S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return addLeadingZeros(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return addLeadingZeros(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = addLeadingZeros(Math.floor(absOffset / 60), 2);
  var minutes = addLeadingZeros(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
}

function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
}

function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/);
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
}

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};

var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token) {
  if (token === 'YYYY') {
    throw new RangeError('Use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr');
  } else if (token === 'YY') {
    throw new RangeError('Use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr');
  } else if (token === 'D') {
    throw new RangeError('Use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr');
  } else if (token === 'DD') {
    throw new RangeError('Use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr');
  }
}

// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'(.*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Su            |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Su            | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Su, Sa        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Su            |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Su            |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | AM, PM                          | a..aaa  | AM, PM                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bbb  | AM, PM, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 1, 2, ..., 11, 0                  |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 0001, ..., 999               |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 05/29/1453                        | 7     |
 * |                                 | PP      | May 29, 1453                      | 7     |
 * |                                 | PPP     | May 29th, 1453                    | 7     |
 * |                                 | PPPP    | Sunday, May 29th, 1453            | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 05/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | May 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | May 29th, 1453 at ...             | 7     |
 * |                                 | PPPPpppp| Sunday, May 29th, 1453 at ...     | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 9. `D` and `DD` tokens represent days of the year but they are ofthen confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The second argument is now required for the sake of explicitness.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   format(new Date(2016, 0, 1))
 *
 *   // v2.0.0 onward
 *   format(new Date(2016, 0, 1), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
 *   ```
 *
 * - New format string API for `format` function
 *   which is based on [Unicode Technical Standard #35](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).
 *   See [this post](https://blog.date-fns.org/post/unicode-tokens-in-date-fns-v2-sreatyki91jg) for more details.
 *
 * - Characters are now escaped using single quote symbols (`'`) instead of square brackets.
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * var result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var formatStr = String(dirtyFormatStr);
  var options = dirtyOptions || {};
  var locale$1 = options.locale || locale;
  var localeFirstWeekContainsDate = locale$1.options && locale$1.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var localeWeekStartsOn = locale$1.options && locale$1.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale$1.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale$1.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = toDate(dirtyDate);

  if (!isValid(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = getTimezoneOffsetInMilliseconds(originalDate);
  var utcDate = subMilliseconds(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale$1,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = longFormatters[firstCharacter];
      return longFormatter(substring, locale$1.formatLong, formatterOptions);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = formatters$1[firstCharacter];

    if (formatter) {
      if (!options.useAdditionalWeekYearTokens && isProtectedWeekYearToken(substring)) {
        throwProtectedError(substring);
      }

      if (!options.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(substring)) {
        throwProtectedError(substring);
      }

      return formatter(utcDate, substring, locale$1.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

function assign$1(target, dirtyObject) {
  if (target == null) {
    throw new TypeError('assign requires that input parameter not be null or undefined');
  }

  dirtyObject = dirtyObject || {};

  for (var property in dirtyObject) {
    if (dirtyObject.hasOwnProperty(property)) {
      target[property] = dirtyObject[property];
    }
  }

  return target;
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function setUTCDay(dirtyDate, dirtyDay, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = toDate(dirtyDate);
  var day = toInteger(dirtyDay);
  var currentDay = date.getUTCDay();
  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;
  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function setUTCISODay(dirtyDate, dirtyDay) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var day = toInteger(dirtyDay);

  if (day % 7 === 0) {
    day = day - 7;
  }

  var weekStartsOn = 1;
  var date = toDate(dirtyDate);
  var currentDay = date.getUTCDay();
  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;
  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function setUTCISOWeek(dirtyDate, dirtyISOWeek) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var date = toDate(dirtyDate);
  var isoWeek = toInteger(dirtyISOWeek);
  var diff = getUTCISOWeek(date) - isoWeek;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date;
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function setUTCWeek(dirtyDate, dirtyWeek, options) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var date = toDate(dirtyDate);
  var week = toInteger(dirtyWeek);
  var diff = getUTCWeek(date, options) - week;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date;
}

var MILLISECONDS_IN_HOUR = 3600000;
var MILLISECONDS_IN_MINUTE$1 = 60000;
var MILLISECONDS_IN_SECOND = 1000;
var numericPatterns = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/ // 0 to 9999, -0 to -9999

};
var timezonePatterns = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};

function parseNumericPattern(pattern, string, valueCallback) {
  var matchResult = string.match(pattern);

  if (!matchResult) {
    return null;
  }

  var value = parseInt(matchResult[0], 10);
  return {
    value: valueCallback ? valueCallback(value) : value,
    rest: string.slice(matchResult[0].length)
  };
}

function parseTimezonePattern(pattern, string) {
  var matchResult = string.match(pattern);

  if (!matchResult) {
    return null;
  } // Input is 'Z'


  if (matchResult[0] === 'Z') {
    return {
      value: 0,
      rest: string.slice(1)
    };
  }

  var sign = matchResult[1] === '+' ? 1 : -1;
  var hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0;
  var minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0;
  var seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0;
  return {
    value: sign * (hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE$1 + seconds * MILLISECONDS_IN_SECOND),
    rest: string.slice(matchResult[0].length)
  };
}

function parseAnyDigitsSigned(string, valueCallback) {
  return parseNumericPattern(numericPatterns.anyDigitsSigned, string, valueCallback);
}

function parseNDigits(n, string, valueCallback) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigit, string, valueCallback);

    case 2:
      return parseNumericPattern(numericPatterns.twoDigits, string, valueCallback);

    case 3:
      return parseNumericPattern(numericPatterns.threeDigits, string, valueCallback);

    case 4:
      return parseNumericPattern(numericPatterns.fourDigits, string, valueCallback);

    default:
      return parseNumericPattern(new RegExp('^\\d{1,' + n + '}'), string, valueCallback);
  }
}

function parseNDigitsSigned(n, string, valueCallback) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigitSigned, string, valueCallback);

    case 2:
      return parseNumericPattern(numericPatterns.twoDigitsSigned, string, valueCallback);

    case 3:
      return parseNumericPattern(numericPatterns.threeDigitsSigned, string, valueCallback);

    case 4:
      return parseNumericPattern(numericPatterns.fourDigitsSigned, string, valueCallback);

    default:
      return parseNumericPattern(new RegExp('^-?\\d{1,' + n + '}'), string, valueCallback);
  }
}

function dayPeriodEnumToHours(enumValue) {
  switch (enumValue) {
    case 'morning':
      return 4;

    case 'evening':
      return 17;

    case 'pm':
    case 'noon':
    case 'afternoon':
      return 12;

    case 'am':
    case 'midnight':
    case 'night':
    default:
      return 0;
  }
}

function normalizeTwoDigitYear(twoDigitYear, currentYear) {
  var isCommonEra = currentYear > 0; // Absolute number of the current year:
  // 1 -> 1 AC
  // 0 -> 1 BC
  // -1 -> 2 BC

  var absCurrentYear = isCommonEra ? currentYear : 1 - currentYear;
  var result;

  if (absCurrentYear <= 50) {
    result = twoDigitYear || 100;
  } else {
    var rangeEnd = absCurrentYear + 50;
    var rangeEndCentury = Math.floor(rangeEnd / 100) * 100;
    var isPreviousCentury = twoDigitYear >= rangeEnd % 100;
    result = twoDigitYear + rangeEndCentury - (isPreviousCentury ? 100 : 0);
  }

  return isCommonEra ? result : 1 - result;
}

var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // User for validation

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O* | Timezone (GMT)                 |
 * |  p  |                                |  P  |                                |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z* | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `parse` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 */


var parsers = {
  // Era
  G: {
    priority: 140,
    parse: function (string, token, match, _options) {
      switch (token) {
        // AD, BC
        case 'G':
        case 'GG':
        case 'GGG':
          return match.era(string, {
            width: 'abbreviated'
          }) || match.era(string, {
            width: 'narrow'
          });
        // A, B

        case 'GGGGG':
          return match.era(string, {
            width: 'narrow'
          });
        // Anno Domini, Before Christ

        case 'GGGG':
        default:
          return match.era(string, {
            width: 'wide'
          }) || match.era(string, {
            width: 'abbreviated'
          }) || match.era(string, {
            width: 'narrow'
          });
      }
    },
    set: function (date, flags, value, _options) {
      flags.era = value;
      date.setUTCFullYear(value, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['R', 'u', 't', 'T']
  },
  // Year
  y: {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_Patterns
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    priority: 130,
    parse: function (string, token, match, _options) {
      var valueCallback = function (year) {
        return {
          year: year,
          isTwoDigitYear: token === 'yy'
        };
      };

      switch (token) {
        case 'y':
          return parseNDigits(4, string, valueCallback);

        case 'yo':
          return match.ordinalNumber(string, {
            unit: 'year',
            valueCallback: valueCallback
          });

        default:
          return parseNDigits(token.length, string, valueCallback);
      }
    },
    validate: function (_date, value, _options) {
      return value.isTwoDigitYear || value.year > 0;
    },
    set: function (date, flags, value, _options) {
      var currentYear = date.getUTCFullYear();

      if (value.isTwoDigitYear) {
        var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
        date.setUTCFullYear(normalizedTwoDigitYear, 0, 1);
        date.setUTCHours(0, 0, 0, 0);
        return date;
      }

      var year = !('era' in flags) || flags.era === 1 ? value.year : 1 - value.year;
      date.setUTCFullYear(year, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'u', 'w', 'I', 'i', 'e', 'c', 't', 'T']
  },
  // Local week-numbering year
  Y: {
    priority: 130,
    parse: function (string, token, match, _options) {
      var valueCallback = function (year) {
        return {
          year: year,
          isTwoDigitYear: token === 'YY'
        };
      };

      switch (token) {
        case 'Y':
          return parseNDigits(4, string, valueCallback);

        case 'Yo':
          return match.ordinalNumber(string, {
            unit: 'year',
            valueCallback: valueCallback
          });

        default:
          return parseNDigits(token.length, string, valueCallback);
      }
    },
    validate: function (_date, value, _options) {
      return value.isTwoDigitYear || value.year > 0;
    },
    set: function (date, flags, value, options) {
      var currentYear = getUTCWeekYear(date, options);

      if (value.isTwoDigitYear) {
        var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
        date.setUTCFullYear(normalizedTwoDigitYear, 0, options.firstWeekContainsDate);
        date.setUTCHours(0, 0, 0, 0);
        return startOfUTCWeek(date, options);
      }

      var year = !('era' in flags) || flags.era === 1 ? value.year : 1 - value.year;
      date.setUTCFullYear(year, 0, options.firstWeekContainsDate);
      date.setUTCHours(0, 0, 0, 0);
      return startOfUTCWeek(date, options);
    },
    incompatibleTokens: ['y', 'R', 'u', 'Q', 'q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T']
  },
  // ISO week-numbering year
  R: {
    priority: 130,
    parse: function (string, token, _match, _options) {
      if (token === 'R') {
        return parseNDigitsSigned(4, string);
      }

      return parseNDigitsSigned(token.length, string);
    },
    set: function (_date, _flags, value, _options) {
      var firstWeekOfYear = new Date(0);
      firstWeekOfYear.setUTCFullYear(value, 0, 4);
      firstWeekOfYear.setUTCHours(0, 0, 0, 0);
      return startOfUTCISOWeek(firstWeekOfYear);
    },
    incompatibleTokens: ['G', 'y', 'Y', 'u', 'Q', 'q', 'M', 'L', 'w', 'd', 'D', 'e', 'c', 't', 'T']
  },
  // Extended year
  u: {
    priority: 130,
    parse: function (string, token, _match, _options) {
      if (token === 'u') {
        return parseNDigitsSigned(4, string);
      }

      return parseNDigitsSigned(token.length, string);
    },
    set: function (date, _flags, value, _options) {
      date.setUTCFullYear(value, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['G', 'y', 'Y', 'R', 'w', 'I', 'i', 'e', 'c', 't', 'T']
  },
  // Quarter
  Q: {
    priority: 120,
    parse: function (string, token, match, _options) {
      switch (token) {
        // 1, 2, 3, 4
        case 'Q':
        case 'QQ':
          // 01, 02, 03, 04
          return parseNDigits(token.length, string);
        // 1st, 2nd, 3rd, 4th

        case 'Qo':
          return match.ordinalNumber(string, {
            unit: 'quarter'
          });
        // Q1, Q2, Q3, Q4

        case 'QQQ':
          return match.quarter(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.quarter(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // 1, 2, 3, 4 (narrow quarter; could be not numerical)

        case 'QQQQQ':
          return match.quarter(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // 1st quarter, 2nd quarter, ...

        case 'QQQQ':
        default:
          return match.quarter(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.quarter(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.quarter(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 4;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMonth((value - 1) * 3, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T']
  },
  // Stand-alone quarter
  q: {
    priority: 120,
    parse: function (string, token, match, _options) {
      switch (token) {
        // 1, 2, 3, 4
        case 'q':
        case 'qq':
          // 01, 02, 03, 04
          return parseNDigits(token.length, string);
        // 1st, 2nd, 3rd, 4th

        case 'qo':
          return match.ordinalNumber(string, {
            unit: 'quarter'
          });
        // Q1, Q2, Q3, Q4

        case 'qqq':
          return match.quarter(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.quarter(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // 1, 2, 3, 4 (narrow quarter; could be not numerical)

        case 'qqqqq':
          return match.quarter(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // 1st quarter, 2nd quarter, ...

        case 'qqqq':
        default:
          return match.quarter(string, {
            width: 'wide',
            context: 'standalone'
          }) || match.quarter(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.quarter(string, {
            width: 'narrow',
            context: 'standalone'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 4;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMonth((value - 1) * 3, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'Q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T']
  },
  // Month
  M: {
    priority: 110,
    parse: function (string, token, match, _options) {
      var valueCallback = function (value) {
        return value - 1;
      };

      switch (token) {
        // 1, 2, ..., 12
        case 'M':
          return parseNumericPattern(numericPatterns.month, string, valueCallback);
        // 01, 02, ..., 12

        case 'MM':
          return parseNDigits(2, string, valueCallback);
        // 1st, 2nd, ..., 12th

        case 'Mo':
          return match.ordinalNumber(string, {
            unit: 'month',
            valueCallback: valueCallback
          });
        // Jan, Feb, ..., Dec

        case 'MMM':
          return match.month(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.month(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // J, F, ..., D

        case 'MMMMM':
          return match.month(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // January, February, ..., December

        case 'MMMM':
        default:
          return match.month(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.month(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.month(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 11;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMonth(value, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'q', 'Q', 'L', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']
  },
  // Stand-alone month
  L: {
    priority: 110,
    parse: function (string, token, match, _options) {
      var valueCallback = function (value) {
        return value - 1;
      };

      switch (token) {
        // 1, 2, ..., 12
        case 'L':
          return parseNumericPattern(numericPatterns.month, string, valueCallback);
        // 01, 02, ..., 12

        case 'LL':
          return parseNDigits(2, string, valueCallback);
        // 1st, 2nd, ..., 12th

        case 'Lo':
          return match.ordinalNumber(string, {
            unit: 'month',
            valueCallback: valueCallback
          });
        // Jan, Feb, ..., Dec

        case 'LLL':
          return match.month(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.month(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // J, F, ..., D

        case 'LLLLL':
          return match.month(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // January, February, ..., December

        case 'LLLL':
        default:
          return match.month(string, {
            width: 'wide',
            context: 'standalone'
          }) || match.month(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.month(string, {
            width: 'narrow',
            context: 'standalone'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 11;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMonth(value, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'q', 'Q', 'M', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']
  },
  // Local week of year
  w: {
    priority: 100,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'w':
          return parseNumericPattern(numericPatterns.week, string);

        case 'wo':
          return match.ordinalNumber(string, {
            unit: 'week'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 53;
    },
    set: function (date, _flags, value, options) {
      return startOfUTCWeek(setUTCWeek(date, value, options), options);
    },
    incompatibleTokens: ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T']
  },
  // ISO week of year
  I: {
    priority: 100,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'I':
          return parseNumericPattern(numericPatterns.week, string);

        case 'Io':
          return match.ordinalNumber(string, {
            unit: 'week'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 53;
    },
    set: function (date, _flags, value, options) {
      return startOfUTCISOWeek(setUTCISOWeek(date, value, options), options);
    },
    incompatibleTokens: ['y', 'Y', 'u', 'q', 'Q', 'M', 'L', 'w', 'd', 'D', 'e', 'c', 't', 'T']
  },
  // Day of the month
  d: {
    priority: 90,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'd':
          return parseNumericPattern(numericPatterns.date, string);

        case 'do':
          return match.ordinalNumber(string, {
            unit: 'date'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (date, value, _options) {
      var year = date.getUTCFullYear();
      var isLeapYear = isLeapYearIndex(year);
      var month = date.getUTCMonth();

      if (isLeapYear) {
        return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR[month];
      } else {
        return value >= 1 && value <= DAYS_IN_MONTH[month];
      }
    },
    set: function (date, _flags, value, _options) {
      date.setUTCDate(value);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'q', 'Q', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']
  },
  // Day of year
  D: {
    priority: 90,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'D':
        case 'DD':
          return parseNumericPattern(numericPatterns.dayOfYear, string);

        case 'Do':
          return match.ordinalNumber(string, {
            unit: 'date'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (date, value, _options) {
      var year = date.getUTCFullYear();
      var isLeapYear = isLeapYearIndex(year);

      if (isLeapYear) {
        return value >= 1 && value <= 366;
      } else {
        return value >= 1 && value <= 365;
      }
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMonth(0, value);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'q', 'Q', 'M', 'L', 'w', 'I', 'd', 'E', 'i', 'e', 'c', 't', 'T']
  },
  // Day of week
  E: {
    priority: 90,
    parse: function (string, token, match, _options) {
      switch (token) {
        // Tue
        case 'E':
        case 'EE':
        case 'EEE':
          return match.day(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // T

        case 'EEEEE':
          return match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tu

        case 'EEEEEE':
          return match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tuesday

        case 'EEEE':
        default:
          return match.day(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.day(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 6;
    },
    set: function (date, _flags, value, options) {
      date = setUTCDay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['D', 'i', 'e', 'c', 't', 'T']
  },
  // Local day of week
  e: {
    priority: 90,
    parse: function (string, token, match, options) {
      var valueCallback = function (value) {
        var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
        return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
      };

      switch (token) {
        // 3
        case 'e':
        case 'ee':
          // 03
          return parseNDigits(token.length, string, valueCallback);
        // 3rd

        case 'eo':
          return match.ordinalNumber(string, {
            unit: 'day',
            valueCallback: valueCallback
          });
        // Tue

        case 'eee':
          return match.day(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // T

        case 'eeeee':
          return match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tu

        case 'eeeeee':
          return match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tuesday

        case 'eeee':
        default:
          return match.day(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.day(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 6;
    },
    set: function (date, _flags, value, options) {
      date = setUTCDay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'E', 'i', 'c', 't', 'T']
  },
  // Stand-alone local day of week
  c: {
    priority: 90,
    parse: function (string, token, match, options) {
      var valueCallback = function (value) {
        var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
        return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
      };

      switch (token) {
        // 3
        case 'c':
        case 'cc':
          // 03
          return parseNDigits(token.length, string, valueCallback);
        // 3rd

        case 'co':
          return match.ordinalNumber(string, {
            unit: 'day',
            valueCallback: valueCallback
          });
        // Tue

        case 'ccc':
          return match.day(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.day(string, {
            width: 'short',
            context: 'standalone'
          }) || match.day(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // T

        case 'ccccc':
          return match.day(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // Tu

        case 'cccccc':
          return match.day(string, {
            width: 'short',
            context: 'standalone'
          }) || match.day(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // Tuesday

        case 'cccc':
        default:
          return match.day(string, {
            width: 'wide',
            context: 'standalone'
          }) || match.day(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.day(string, {
            width: 'short',
            context: 'standalone'
          }) || match.day(string, {
            width: 'narrow',
            context: 'standalone'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 6;
    },
    set: function (date, _flags, value, options) {
      date = setUTCDay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'E', 'i', 'e', 't', 'T']
  },
  // ISO day of week
  i: {
    priority: 90,
    parse: function (string, token, match, _options) {
      var valueCallback = function (value) {
        if (value === 0) {
          return 7;
        }

        return value;
      };

      switch (token) {
        // 2
        case 'i':
        case 'ii':
          // 02
          return parseNDigits(token.length, string);
        // 2nd

        case 'io':
          return match.ordinalNumber(string, {
            unit: 'day'
          });
        // Tue

        case 'iii':
          return match.day(string, {
            width: 'abbreviated',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'short',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting',
            valueCallback: valueCallback
          });
        // T

        case 'iiiii':
          return match.day(string, {
            width: 'narrow',
            context: 'formatting',
            valueCallback: valueCallback
          });
        // Tu

        case 'iiiiii':
          return match.day(string, {
            width: 'short',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting',
            valueCallback: valueCallback
          });
        // Tuesday

        case 'iiii':
        default:
          return match.day(string, {
            width: 'wide',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'abbreviated',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'short',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting',
            valueCallback: valueCallback
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 7;
    },
    set: function (date, _flags, value, options) {
      date = setUTCISODay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['y', 'Y', 'u', 'q', 'Q', 'M', 'L', 'w', 'd', 'D', 'E', 'e', 'c', 't', 'T']
  },
  // AM or PM
  a: {
    priority: 80,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'a':
        case 'aa':
        case 'aaa':
          return match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'aaaaa':
          return match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'aaaa':
        default:
          return match.dayPeriod(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    set: function (date, _flags, value, _options) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['b', 'B', 'H', 'K', 'k', 't', 'T']
  },
  // AM, PM, midnight
  b: {
    priority: 80,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'b':
        case 'bb':
        case 'bbb':
          return match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'bbbbb':
          return match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'bbbb':
        default:
          return match.dayPeriod(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    set: function (date, _flags, value, _options) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['a', 'B', 'H', 'K', 'k', 't', 'T']
  },
  // in the morning, in the afternoon, in the evening, at night
  B: {
    priority: 80,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'B':
        case 'BB':
        case 'BBB':
          return match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'BBBBB':
          return match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'BBBB':
        default:
          return match.dayPeriod(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    set: function (date, _flags, value, _options) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['a', 'b', 't', 'T']
  },
  // Hour [1-12]
  h: {
    priority: 70,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'h':
          return parseNumericPattern(numericPatterns.hour12h, string);

        case 'ho':
          return match.ordinalNumber(string, {
            unit: 'hour'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 12;
    },
    set: function (date, _flags, value, _options) {
      var isPM = date.getUTCHours() >= 12;

      if (isPM && value < 12) {
        date.setUTCHours(value + 12, 0, 0, 0);
      } else if (!isPM && value === 12) {
        date.setUTCHours(0, 0, 0, 0);
      } else {
        date.setUTCHours(value, 0, 0, 0);
      }

      return date;
    },
    incompatibleTokens: ['H', 'K', 'k', 't', 'T']
  },
  // Hour [0-23]
  H: {
    priority: 70,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'H':
          return parseNumericPattern(numericPatterns.hour23h, string);

        case 'Ho':
          return match.ordinalNumber(string, {
            unit: 'hour'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 23;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCHours(value, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['a', 'b', 'h', 'K', 'k', 't', 'T']
  },
  // Hour [0-11]
  K: {
    priority: 70,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'K':
          return parseNumericPattern(numericPatterns.hour11h, string);

        case 'Ko':
          return match.ordinalNumber(string, {
            unit: 'hour'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 11;
    },
    set: function (date, _flags, value, _options) {
      var isPM = date.getUTCHours() >= 12;

      if (isPM && value < 12) {
        date.setUTCHours(value + 12, 0, 0, 0);
      } else {
        date.setUTCHours(value, 0, 0, 0);
      }

      return date;
    },
    incompatibleTokens: ['a', 'b', 'h', 'H', 'k', 't', 'T']
  },
  // Hour [1-24]
  k: {
    priority: 70,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'k':
          return parseNumericPattern(numericPatterns.hour24h, string);

        case 'ko':
          return match.ordinalNumber(string, {
            unit: 'hour'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 24;
    },
    set: function (date, _flags, value, _options) {
      var hours = value <= 24 ? value % 24 : value;
      date.setUTCHours(hours, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['a', 'b', 'h', 'H', 'K', 't', 'T']
  },
  // Minute
  m: {
    priority: 60,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'm':
          return parseNumericPattern(numericPatterns.minute, string);

        case 'mo':
          return match.ordinalNumber(string, {
            unit: 'minute'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 59;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMinutes(value, 0, 0);
      return date;
    },
    incompatibleTokens: ['t', 'T']
  },
  // Second
  s: {
    priority: 50,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 's':
          return parseNumericPattern(numericPatterns.second, string);

        case 'so':
          return match.ordinalNumber(string, {
            unit: 'second'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 59;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCSeconds(value, 0);
      return date;
    },
    incompatibleTokens: ['t', 'T']
  },
  // Fraction of second
  S: {
    priority: 30,
    parse: function (string, token, _match, _options) {
      var valueCallback = function (value) {
        return Math.floor(value * Math.pow(10, -token.length + 3));
      };

      return parseNDigits(token.length, string, valueCallback);
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMilliseconds(value);
      return date;
    },
    incompatibleTokens: ['t', 'T']
  },
  // Timezone (ISO-8601. +00:00 is `'Z'`)
  X: {
    priority: 10,
    parse: function (string, token, _match, _options) {
      switch (token) {
        case 'X':
          return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, string);

        case 'XX':
          return parseTimezonePattern(timezonePatterns.basic, string);

        case 'XXXX':
          return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, string);

        case 'XXXXX':
          return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, string);

        case 'XXX':
        default:
          return parseTimezonePattern(timezonePatterns.extended, string);
      }
    },
    set: function (date, flags, value, _options) {
      if (flags.timestampIsSet) {
        return date;
      }

      return new Date(date.getTime() - value);
    },
    incompatibleTokens: ['t', 'T', 'x']
  },
  // Timezone (ISO-8601)
  x: {
    priority: 10,
    parse: function (string, token, _match, _options) {
      switch (token) {
        case 'x':
          return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, string);

        case 'xx':
          return parseTimezonePattern(timezonePatterns.basic, string);

        case 'xxxx':
          return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, string);

        case 'xxxxx':
          return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, string);

        case 'xxx':
        default:
          return parseTimezonePattern(timezonePatterns.extended, string);
      }
    },
    set: function (date, flags, value, _options) {
      if (flags.timestampIsSet) {
        return date;
      }

      return new Date(date.getTime() - value);
    },
    incompatibleTokens: ['t', 'T', 'X']
  },
  // Seconds timestamp
  t: {
    priority: 40,
    parse: function (string, _token, _match, _options) {
      return parseAnyDigitsSigned(string);
    },
    set: function (_date, _flags, value, _options) {
      return [new Date(value * 1000), {
        timestampIsSet: true
      }];
    },
    incompatibleTokens: '*'
  },
  // Milliseconds timestamp
  T: {
    priority: 20,
    parse: function (string, _token, _match, _options) {
      return parseAnyDigitsSigned(string);
    },
    set: function (_date, _flags, value, _options) {
      return [new Date(value), {
        timestampIsSet: true
      }];
    },
    incompatibleTokens: '*'
  }
};

var TIMEZONE_UNIT_PRIORITY = 10; // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp$1 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp$1 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp$1 = /^'(.*?)'?$/;
var doubleQuoteRegExp$1 = /''/g;
var notWhitespaceRegExp = /\S/;
var unescapedLatinCharacterRegExp$1 = /[a-zA-Z]/;
/**
 * @name parse
 * @category Common Helpers
 * @summary Parse the date.
 *
 * @description
 * Return the date parsed from string using the given format string.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters in the format string wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 *
 * Format of the format string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 5 below the table).
 *
 * Not all tokens are compatible. Combinations that don't make sense or could lead to bugs are prohibited
 * and will throw `RangeError`. For example usage of 24-hour format token with AM/PM token will throw an exception:
 *
 * ```javascript
 * parse('23 AM', 'HH a', new Date())
 * //=> RangeError: The format string mustn't contain `HH` and `a` at the same time
 * ```
 *
 * See the compatibility table: https://docs.google.com/spreadsheets/d/e/2PACX-1vQOPU3xUhplll6dyoMmVUXHKl_8CRDs6_ueLmex3SoqwhuolkuN3O05l4rqx5h1dKX8eb46Ul-CCSrq/pubhtml?gid=0&single=true
 *
 * Accepted format string patterns:
 * | Unit                            |Prior| Pattern | Result examples                   | Notes |
 * |---------------------------------|-----|---------|-----------------------------------|-------|
 * | Era                             | 140 | G..GGG  | AD, BC                            |       |
 * |                                 |     | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 |     | GGGGG   | A, B                              |       |
 * | Calendar year                   | 130 | y       | 44, 1, 1900, 2017, 9999           | 4     |
 * |                                 |     | yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | yy      | 44, 01, 00, 17                    | 4     |
 * |                                 |     | yyy     | 044, 001, 123, 999                | 4     |
 * |                                 |     | yyyy    | 0044, 0001, 1900, 2017            | 4     |
 * |                                 |     | yyyyy   | ...                               | 2,4   |
 * | Local week-numbering year       | 130 | Y       | 44, 1, 1900, 2017, 9000           | 4     |
 * |                                 |     | Yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | YY      | 44, 01, 00, 17                    | 4,6   |
 * |                                 |     | YYY     | 044, 001, 123, 999                | 4     |
 * |                                 |     | YYYY    | 0044, 0001, 1900, 2017            | 4,6   |
 * |                                 |     | YYYYY   | ...                               | 2,4   |
 * | ISO week-numbering year         | 130 | R       | -43, 1, 1900, 2017, 9999, -9999   | 4,5   |
 * |                                 |     | RR      | -43, 01, 00, 17                   | 4,5   |
 * |                                 |     | RRR     | -043, 001, 123, 999, -999         | 4,5   |
 * |                                 |     | RRRR    | -0043, 0001, 2017, 9999, -9999    | 4,5   |
 * |                                 |     | RRRRR   | ...                               | 2,4,5 |
 * | Extended year                   | 130 | u       | -43, 1, 1900, 2017, 9999, -999    | 4     |
 * |                                 |     | uu      | -43, 01, 99, -99                  | 4     |
 * |                                 |     | uuu     | -043, 001, 123, 999, -999         | 4     |
 * |                                 |     | uuuu    | -0043, 0001, 2017, 9999, -9999    | 4     |
 * |                                 |     | uuuuu   | ...                               | 2,4   |
 * | Quarter (formatting)            | 120 | Q       | 1, 2, 3, 4                        |       |
 * |                                 |     | Qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | QQ      | 01, 02, 03, 04                    |       |
 * |                                 |     | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | 120 | q       | 1, 2, 3, 4                        |       |
 * |                                 |     | qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | qq      | 01, 02, 03, 04                    |       |
 * |                                 |     | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | qqqqq   | 1, 2, 3, 4                        | 3     |
 * | Month (formatting)              | 110 | M       | 1, 2, ..., 12                     |       |
 * |                                 |     | Mo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | MM      | 01, 02, ..., 12                   |       |
 * |                                 |     | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | MMMM    | January, February, ..., December  | 2     |
 * |                                 |     | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | 110 | L       | 1, 2, ..., 12                     |       |
 * |                                 |     | Lo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | LL      | 01, 02, ..., 12                   |       |
 * |                                 |     | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | LLLL    | January, February, ..., December  | 2     |
 * |                                 |     | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | 100 | w       | 1, 2, ..., 53                     |       |
 * |                                 |     | wo      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | 100 | I       | 1, 2, ..., 53                     | 5     |
 * |                                 |     | Io      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | II      | 01, 02, ..., 53                   | 5     |
 * | Day of month                    |  90 | d       | 1, 2, ..., 31                     |       |
 * |                                 |     | do      | 1st, 2nd, ..., 31st               | 5     |
 * |                                 |     | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     |  90 | D       | 1, 2, ..., 365, 366               | 7     |
 * |                                 |     | Do      | 1st, 2nd, ..., 365th, 366th       | 5     |
 * |                                 |     | DD      | 01, 02, ..., 365, 366             | 7     |
 * |                                 |     | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 |     | DDDD    | ...                               | 2     |
 * | Day of week (formatting)        |  90 | E..EEE  | Mon, Tue, Wed, ..., Su            |       |
 * |                                 |     | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 |     | EEEEEE  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | ISO day of week (formatting)    |  90 | i       | 1, 2, 3, ..., 7                   | 5     |
 * |                                 |     | io      | 1st, 2nd, ..., 7th                | 5     |
 * |                                 |     | ii      | 01, 02, ..., 07                   | 5     |
 * |                                 |     | iii     | Mon, Tue, Wed, ..., Su            | 5     |
 * |                                 |     | iiii    | Monday, Tuesday, ..., Sunday      | 2,5   |
 * |                                 |     | iiiii   | M, T, W, T, F, S, S               | 5     |
 * |                                 |     | iiiiii  | Mo, Tu, We, Th, Fr, Su, Sa        | 5     |
 * | Local day of week (formatting)  |  90 | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | eo      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | ee      | 02, 03, ..., 01                   |       |
 * |                                 |     | eee     | Mon, Tue, Wed, ..., Su            |       |
 * |                                 |     | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 |     | eeeeee  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | Local day of week (stand-alone) |  90 | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | co      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | cc      | 02, 03, ..., 01                   |       |
 * |                                 |     | ccc     | Mon, Tue, Wed, ..., Su            |       |
 * |                                 |     | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 |     | cccccc  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | AM, PM                          |  80 | a..aaa  | AM, PM                            |       |
 * |                                 |     | aaaa    | a.m., p.m.                        | 2     |
 * |                                 |     | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          |  80 | b..bbb  | AM, PM, noon, midnight            |       |
 * |                                 |     | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 |     | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             |  80 | B..BBB  | at night, in the morning, ...     |       |
 * |                                 |     | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 |     | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     |  70 | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 |     | ho      | 1st, 2nd, ..., 11th, 12th         | 5     |
 * |                                 |     | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     |  70 | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 |     | Ho      | 0th, 1st, 2nd, ..., 23rd          | 5     |
 * |                                 |     | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     |  70 | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 |     | Ko      | 1st, 2nd, ..., 11th, 0th          | 5     |
 * |                                 |     | KK      | 1, 2, ..., 11, 0                  |       |
 * | Hour [1-24]                     |  70 | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 |     | ko      | 24th, 1st, 2nd, ..., 23rd         | 5     |
 * |                                 |     | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          |  60 | m       | 0, 1, ..., 59                     |       |
 * |                                 |     | mo      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | mm      | 00, 01, ..., 59                   |       |
 * | Second                          |  50 | s       | 0, 1, ..., 59                     |       |
 * |                                 |     | so      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | ss      | 00, 01, ..., 59                   |       |
 * | Seconds timestamp               |  40 | t       | 512969520                         |       |
 * |                                 |     | tt      | ...                               | 2     |
 * | Fraction of second              |  30 | S       | 0, 1, ..., 9                      |       |
 * |                                 |     | SS      | 00, 01, ..., 99                   |       |
 * |                                 |     | SSS     | 000, 0001, ..., 999               |       |
 * |                                 |     | SSSS    | ...                               | 2     |
 * | Milliseconds timestamp          |  20 | T       | 512969520900                      |       |
 * |                                 |     | TT      | ...                               | 2     |
 * | Timezone (ISO-8601 w/ Z)        |  10 | X       | -08, +0530, Z                     |       |
 * |                                 |     | XX      | -0800, +0530, Z                   |       |
 * |                                 |     | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 |     | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 |     | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       |  10 | x       | -08, +0530, +00                   |       |
 * |                                 |     | xx      | -0800, +0530, +0000               |       |
 * |                                 |     | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 |     | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 |     | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Long localized date             |  NA | P       | 05/29/1453                        | 5,8   |
 * |                                 |     | PP      | May 29, 1453                      |       |
 * |                                 |     | PPP     | May 29th, 1453                    |       |
 * |                                 |     | PPPP    | Sunday, May 29th, 1453            | 2,5,8 |
 * | Long localized time             |  NA | p       | 12:00 AM                          | 5,8   |
 * |                                 |     | pp      | 12:00:00 AM                       |       |
 * | Combination of date and time    |  NA | Pp      | 05/29/1453, 12:00 AM              |       |
 * |                                 |     | PPpp    | May 29, 1453, 12:00:00 AM         |       |
 * |                                 |     | PPPpp   | May 29th, 1453 at ...             |       |
 * |                                 |     | PPPPpp  | Sunday, May 29th, 1453 at ...     | 2,5,8 |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular.
 *    In `format` function, they will produce different result:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 *    `parse` will try to match both formatting and stand-alone units interchangably.
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table:
 *    - for numerical units (`yyyyyyyy`) `parse` will try to match a number
 *      as wide as the sequence
 *    - for text units (`MMMMMMMM`) `parse` will try to match the widest variation of the unit.
 *      These variations are marked with "2" in the last column of the table.
 *
 * 3. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 4. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` will try to guess the century of two digit year by proximity with `backupDate`:
 *
 *    `parse('50', 'yy', new Date(2018, 0, 1)) //=> Sat Jan 01 2050 00:00:00`
 *
 *    `parse('75', 'yy', new Date(2018, 0, 1)) //=> Wed Jan 01 1975 00:00:00`
 *
 *    while `uu` will just assign the year as is:
 *
 *    `parse('50', 'uu', new Date(2018, 0, 1)) //=> Sat Jan 01 0050 00:00:00`
 *
 *    `parse('75', 'uu', new Date(2018, 0, 1)) //=> Tue Jan 01 0075 00:00:00`
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [setISOWeekYear]{@link https://date-fns.org/docs/setISOWeekYear}
 *    and [setWeekYear]{@link https://date-fns.org/docs/setWeekYear}).
 *
 * 5. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 6. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 7. `D` and `DD` tokens represent days of the year but they are ofthen confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 8. `P+` tokens do not have a defined priority since they are merely aliases to other tokens based
 *    on the given locale.
 *
 *    using `en-US` locale: `P` => `MM/dd/yyyy`
 *    using `en-US` locale: `p` => `hh:mm a`
 *    using `pt-BR` locale: `P` => `dd/MM/yyyy`
 *    using `pt-BR` locale: `p` => `HH:mm`
 *
 * Values will be assigned to the date in the descending order of its unit's priority.
 * Units of an equal priority overwrite each other in the order of appearance.
 *
 * If no values of higher priority are parsed (e.g. when parsing string 'January 1st' without a year),
 * the values will be taken from 3rd argument `backupDate` which works as a context of parsing.
 *
 * `backupDate` must be passed for correct work of the function.
 * If you're not sure which `backupDate` to supply, create a new instance of Date:
 * `parse('02/11/2014', 'MM/dd/yyyy', new Date())`
 * In this case parsing will be done in the context of the current date.
 * If `backupDate` is `Invalid Date` or a value not convertible to valid `Date`,
 * then `Invalid Date` will be returned.
 *
 * The result may vary by locale.
 *
 * If `formatString` matches with `dateString` but does not provides tokens, `backupDate` will be returned.
 *
 * If parsing failed, `Invalid Date` will be returned.
 * Invalid Date is a Date, whose time value is NaN.
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Old `parse` was renamed to `toDate`.
 *   Now `parse` is a new function which parses a string using a provided format.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   parse('2016-01-01')
 *
 *   // v2.0.0 onward
 *   toDate('2016-01-01')
 *   parse('2016-01-01', 'yyyy-MM-dd', new Date())
 *   ```
 *
 * @param {String} dateString - the string to parse
 * @param {String} formatString - the string of tokens
 * @param {Date|Number} backupDate - defines values missing from the parsed dateString
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {Date} the parsed date
 * @throws {TypeError} 3 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} `options.locale` must contain `match` property
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Parse 11 February 2014 from middle-endian format:
 * var result = parse('02/11/2014', 'MM/dd/yyyy', new Date())
 * //=> Tue Feb 11 2014 00:00:00
 *
 * @example
 * // Parse 28th of February in Esperanto locale in the context of 2010 year:
 * import eo from 'date-fns/locale/eo'
 * var result = parse('28-a de februaro', "do 'de' MMMM", new Date(2010, 0, 1), {
 *   locale: eo
 * })
 * //=> Sun Feb 28 2010 00:00:00
 */

function parse(dirtyDateString, dirtyFormatString, dirtyBackupDate, dirtyOptions) {
  if (arguments.length < 3) {
    throw new TypeError('3 arguments required, but only ' + arguments.length + ' present');
  }

  var dateString = String(dirtyDateString);
  var formatString = String(dirtyFormatString);
  var options = dirtyOptions || {};
  var locale$1 = options.locale || locale;

  if (!locale$1.match) {
    throw new RangeError('locale must contain match property');
  }

  var localeFirstWeekContainsDate = locale$1.options && locale$1.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var localeWeekStartsOn = locale$1.options && locale$1.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (formatString === '') {
    if (dateString === '') {
      return toDate(dirtyBackupDate);
    } else {
      return new Date(NaN);
    }
  }

  var subFnOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale$1 // If timezone isn't specified, it will be set to the system timezone

  };
  var setters = [{
    priority: TIMEZONE_UNIT_PRIORITY,
    set: dateToSystemTimezone,
    index: 0
  }];
  var i;
  var tokens = formatString.match(longFormattingTokensRegExp$1).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = longFormatters[firstCharacter];
      return longFormatter(substring, locale$1.formatLong, subFnOptions);
    }

    return substring;
  }).join('').match(formattingTokensRegExp$1);
  var usedTokens = [];

  for (i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (!options.useAdditionalWeekYearTokens && isProtectedWeekYearToken(token)) {
      throwProtectedError(token);
    }

    if (!options.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(token)) {
      throwProtectedError(token);
    }

    var firstCharacter = token[0];
    var parser = parsers[firstCharacter];

    if (parser) {
      var incompatibleTokens = parser.incompatibleTokens;

      if (Array.isArray(incompatibleTokens)) {
        var incompatibleToken = void 0;

        for (var _i = 0; _i < usedTokens.length; _i++) {
          var usedToken = usedTokens[_i].token;

          if (incompatibleTokens.indexOf(usedToken) !== -1 || usedToken === firstCharacter) {
            incompatibleToken = usedTokens[_i];
            break;
          }
        }

        if (incompatibleToken) {
          throw new RangeError("The format string mustn't contain `".concat(incompatibleToken.fullToken, "` and `").concat(token, "` at the same time"));
        }
      } else if (parser.incompatibleTokens === '*' && usedTokens.length) {
        throw new RangeError("The format string mustn't contain `".concat(token, "` and any other token at the same time"));
      }

      usedTokens.push({
        token: firstCharacter,
        fullToken: token
      });
      var parseResult = parser.parse(dateString, token, locale$1.match, subFnOptions);

      if (!parseResult) {
        return new Date(NaN);
      }

      setters.push({
        priority: parser.priority,
        set: parser.set,
        validate: parser.validate,
        value: parseResult.value,
        index: setters.length
      });
      dateString = parseResult.rest;
    } else {
      if (firstCharacter.match(unescapedLatinCharacterRegExp$1)) {
        throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
      } // Replace two single quote characters with one single quote character


      if (token === "''") {
        token = "'";
      } else if (firstCharacter === "'") {
        token = cleanEscapedString$1(token);
      } // Cut token from string, or, if string doesn't match the token, return Invalid Date


      if (dateString.indexOf(token) === 0) {
        dateString = dateString.slice(token.length);
      } else {
        return new Date(NaN);
      }
    }
  } // Check if the remaining input contains something other than whitespace


  if (dateString.length > 0 && notWhitespaceRegExp.test(dateString)) {
    return new Date(NaN);
  }

  var uniquePrioritySetters = setters.map(function (setter) {
    return setter.priority;
  }).sort(function (a, b) {
    return b - a;
  }).filter(function (priority, index, array) {
    return array.indexOf(priority) === index;
  }).map(function (priority) {
    return setters.filter(function (setter) {
      return setter.priority === priority;
    }).reverse();
  }).map(function (setterArray) {
    return setterArray[0];
  });
  var date = toDate(dirtyBackupDate);

  if (isNaN(date)) {
    return new Date(NaN);
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/37


  var utcDate = subMilliseconds(date, getTimezoneOffsetInMilliseconds(date));
  var flags = {};

  for (i = 0; i < uniquePrioritySetters.length; i++) {
    var setter = uniquePrioritySetters[i];

    if (setter.validate && !setter.validate(utcDate, setter.value, subFnOptions)) {
      return new Date(NaN);
    }

    var result = setter.set(utcDate, flags, setter.value, subFnOptions); // Result is tuple (date, flags)

    if (result[0]) {
      utcDate = result[0];
      assign$1(flags, result[1]); // Result is date
    } else {
      utcDate = result;
    }
  }

  return utcDate;
}

function dateToSystemTimezone(date, flags) {
  if (flags.timestampIsSet) {
    return date;
  }

  var convertedDate = new Date(0);
  convertedDate.setFullYear(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
  convertedDate.setHours(date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
  return convertedDate;
}

function cleanEscapedString$1(input) {
  return input.match(escapedStringRegExp$1)[1].replace(doubleQuoteRegExp$1, "'");
}

var date = lodash_clonedeep(defaultType);
date.isRight = true;

date.compare = function (x, y, column) {
  function cook(d) {
    if (column && column.dateInputFormat) {
      return parse("".concat(d), "".concat(column.dateInputFormat), new Date());
    }

    return d;
  }

  x = cook(x);
  y = cook(y);

  if (!isValid(x)) {
    return -1;
  }

  if (!isValid(y)) {
    return 1;
  }

  return compareAsc(x, y);
};

date.format = function (v, column) {
  if (v === undefined || v === null) return ''; // convert to date

  var date = parse(v, column.dateInputFormat, new Date());

  if (isValid(date)) {
    return format(date, column.dateOutputFormat);
  }

  console.error("Not a valid date: \"".concat(v, "\""));
  return null;
};

var date$1 = /*#__PURE__*/Object.freeze({
  'default': date
});

var number = lodash_clonedeep(defaultType);
number.isRight = true;

number.filterPredicate = function (rowval, filter) {
  return number.compare(rowval, filter) === 0;
};

number.compare = function (x, y) {
  function cook(d) {
    // if d is null or undefined we give it the smallest
    // possible value
    if (d === undefined || d === null) return -Infinity;
    return d.indexOf('.') >= 0 ? parseFloat(d) : parseInt(d, 10);
  }

  x = typeof x === 'number' ? x : cook(x);
  y = typeof y === 'number' ? y : cook(y);
  if (x < y) return -1;
  if (x > y) return 1;
  return 0;
};

var number$1 = /*#__PURE__*/Object.freeze({
  'default': number
});

var decimal = lodash_clonedeep(number);

decimal.format = function (v) {
  if (v === undefined || v === null) return '';
  return parseFloat(Math.round(v * 100) / 100).toFixed(2);
};

var decimal$1 = /*#__PURE__*/Object.freeze({
  'default': decimal
});

var percentage = lodash_clonedeep(number);

percentage.format = function (v) {
  if (v === undefined || v === null) return '';
  return "".concat(parseFloat(v * 100).toFixed(2), "%");
};

var percentage$1 = /*#__PURE__*/Object.freeze({
  'default': percentage
});

var _boolean = lodash_clonedeep(defaultType);

_boolean.isRight = true;

_boolean.filterPredicate = function (rowval, filter) {
  return _boolean.compare(rowval, filter) === 0;
};

_boolean.compare = function (x, y) {
  function cook(d) {
    if (typeof d === 'boolean') return d ? 1 : 0;
    if (typeof d === 'string') return d === 'true' ? 1 : 0;
    return -Infinity;
  }

  x = cook(x);
  y = cook(y);
  if (x < y) return -1;
  if (x > y) return 1;
  return 0;
};

var _boolean$1 = /*#__PURE__*/Object.freeze({
  'default': _boolean
});

var index = {
  date: date$1,
  decimal: decimal$1,
  number: number$1,
  percentage: percentage$1,
  "boolean": _boolean$1
};

var dataTypes = {};
var coreDataTypes = index;
lodash_foreach(Object.keys(coreDataTypes), function (key) {
  var compName = key.replace(/^\.\//, '').replace(/\.js/, '');
  dataTypes[compName] = coreDataTypes[key]["default"];
});
var script$6 = {
  name: 'vue-good-table',
  props: {
    isLoading: {
      "default": null,
      type: Boolean
    },
    maxHeight: {
      "default": null,
      type: String
    },
    fixedHeader: Boolean,
    theme: {
      "default": ''
    },
    mode: {
      "default": 'local'
    },
    // could be remote
    totalRows: {},
    // required if mode = 'remote'
    styleClass: {
      "default": 'vgt-table bordered'
    },
    columns: {},
    rows: {},
    lineNumbers: Boolean,
    responsive: {
      "default": true,
      type: Boolean
    },
    rtl: Boolean,
    rowStyleClass: {
      "default": null,
      type: [Function, String]
    },
    compactMode: Boolean,
    groupOptions: {
      "default": function _default() {
        return {
          enabled: false,
          collapsable: false,
          rowKey: null
        };
      }
    },
    selectOptions: {
      "default": function _default() {
        return {
          enabled: false,
          selectionInfoClass: '',
          selectionText: 'rows selected',
          clearSelectionText: 'clear',
          disableSelectInfo: false,
          selectAllByGroup: false
        };
      }
    },
    // sort
    sortOptions: {
      "default": function _default() {
        return {
          enabled: true,
          initialSortBy: {}
        };
      }
    },
    // pagination
    paginationOptions: {
      "default": function _default() {
        return {
          enabled: false,
          perPage: 10,
          perPageDropdown: null,
          position: 'bottom',
          dropdownAllowAll: true,
          mode: 'records' // or pages

        };
      }
    },
    searchOptions: {
      "default": function _default() {
        return {
          enabled: false,
          trigger: null,
          externalQuery: null,
          searchFn: null,
          placeholder: 'Search Table'
        };
      }
    }
  },
  data: function data() {
    return {
      // loading state for remote mode
      tableLoading: false,
      // text options
      nextText: 'Next',
      prevText: 'Prev',
      rowsPerPageText: 'Rows per page',
      ofText: 'of',
      allText: 'All',
      pageText: 'page',
      // internal select options
      selectable: false,
      selectOnCheckboxOnly: false,
      selectAllByPage: true,
      disableSelectInfo: false,
      selectionInfoClass: '',
      selectionText: 'rows selected',
      clearSelectionText: 'clear',
      // keys for rows that are currently expanded
      maintainExpanded: true,
      expandedRowKeys: new Set(),
      // internal sort options
      sortable: true,
      defaultSortBy: null,
      // internal search options
      searchEnabled: false,
      searchTrigger: null,
      externalSearchQuery: null,
      searchFn: null,
      searchPlaceholder: 'Search Table',
      searchSkipDiacritics: false,
      // internal pagination options
      perPage: null,
      paginate: false,
      paginateOnTop: false,
      paginateOnBottom: true,
      customRowsPerPageDropdown: [],
      paginateDropdownAllowAll: true,
      paginationMode: 'records',
      currentPage: 1,
      currentPerPage: 10,
      sorts: [],
      globalSearchTerm: '',
      filteredRows: [],
      columnFilters: {},
      forceSearch: false,
      sortChanged: false,
      dataTypes: dataTypes || {}
    };
  },
  watch: {
    rows: {
      handler: function handler() {
        this.$emit('update:isLoading', false);
        this.filterRows(this.columnFilters, false);
      },
      deep: true,
      immediate: true
    },
    selectOptions: {
      handler: function handler() {
        this.initializeSelect();
      },
      deep: true,
      immediate: true
    },
    paginationOptions: {
      handler: function handler(newValue, oldValue) {
        if (!lodash_isequal(newValue, oldValue)) {
          this.initializePagination();
        }
      },
      deep: true,
      immediate: true
    },
    searchOptions: {
      handler: function handler() {
        if (this.searchOptions.externalQuery !== undefined && this.searchOptions.externalQuery !== this.searchTerm) {
          //* we need to set searchTerm to externalQuery first.
          this.externalSearchQuery = this.searchOptions.externalQuery;
          this.handleSearch();
        }

        this.initializeSearch();
      },
      deep: true,
      immediate: true
    },
    sortOptions: {
      handler: function handler(newValue, oldValue) {
        if (!lodash_isequal(newValue, oldValue)) {
          this.initializeSort();
        }
      },
      deep: true
    },
    selectedRows: function selectedRows(newValue, oldValue) {
      if (!lodash_isequal(newValue, oldValue)) {
        this.$emit('on-selected-rows-change', {
          selectedRows: this.selectedRows
        });
      }
    }
  },
  computed: {
    tableStyles: function tableStyles() {
      if (this.compactMode) return this.tableStyleClasses + 'vgt-compact';else return this.tableStyleClasses;
    },
    hasFooterSlot: function hasFooterSlot() {
      return !!this.$slots['table-actions-bottom'];
    },
    wrapperStyles: function wrapperStyles() {
      return {
        overflow: 'scroll-y',
        maxHeight: this.maxHeight ? this.maxHeight : 'auto'
      };
    },
    rowKeyField: function rowKeyField() {
      return this.groupOptions.rowKey || 'vgt_header_id';
    },
    hasHeaderRowTemplate: function hasHeaderRowTemplate() {
      return !!this.$slots['table-header-row'] || !!this.$scopedSlots['table-header-row'];
    },
    showEmptySlot: function showEmptySlot() {
      if (!this.paginated.length) return true;

      if (this.paginated[0].label === 'no groups' && !this.paginated[0].children.length) {
        return true;
      }

      return false;
    },
    allSelected: function allSelected() {
      return this.selectedRowCount > 0 && (this.selectAllByPage && this.selectedPageRowsCount === this.totalPageRowCount || !this.selectAllByPage && this.selectedRowCount === this.totalRowCount);
    },
    allSelectedIndeterminate: function allSelectedIndeterminate() {
      return !this.allSelected && (this.selectAllByPage && this.selectedPageRowsCount > 0 || !this.selectAllByPage && this.selectedRowCount > 0);
    },
    selectionInfo: function selectionInfo() {
      return "".concat(this.selectedRowCount, " ").concat(this.selectionText);
    },
    selectedRowCount: function selectedRowCount() {
      return this.selectedRows.length;
    },
    selectedPageRowsCount: function selectedPageRowsCount() {
      return this.selectedPageRows.length;
    },
    selectedPageRows: function selectedPageRows() {
      var selectedRows = [];
      lodash_foreach(this.paginated, function (headerRow) {
        lodash_foreach(headerRow.children, function (row) {
          if (row.vgtSelected) {
            selectedRows.push(row);
          }
        });
      });
      return selectedRows;
    },
    selectedRows: function selectedRows() {
      var selectedRows = [];
      lodash_foreach(this.processedRows, function (headerRow) {
        lodash_foreach(headerRow.children, function (row) {
          if (row.vgtSelected) {
            selectedRows.push(row);
          }
        });
      });
      return selectedRows.sort(function (r1, r2) {
        return r1.originalIndex - r2.originalIndex;
      });
    },
    fullColspan: function fullColspan() {
      var fullColspan = 0;

      for (var i = 0; i < this.columns.length; i += 1) {
        if (!this.columns[i].hidden) {
          fullColspan += 1;
        }
      }

      if (this.lineNumbers) fullColspan++;
      if (this.selectable) fullColspan++;
      return fullColspan;
    },
    groupHeaderOnTop: function groupHeaderOnTop() {
      if (this.groupOptions && this.groupOptions.enabled && this.groupOptions.headerPosition && this.groupOptions.headerPosition === 'bottom') {
        return false;
      }

      if (this.groupOptions && this.groupOptions.enabled) return true; // will only get here if groupOptions is false

      return false;
    },
    groupHeaderOnBottom: function groupHeaderOnBottom() {
      if (this.groupOptions && this.groupOptions.enabled && this.groupOptions.headerPosition && this.groupOptions.headerPosition === 'bottom') {
        return true;
      }

      return false;
    },
    totalRowCount: function totalRowCount() {
      var total = 0;
      lodash_foreach(this.processedRows, function (headerRow) {
        total += headerRow.children ? headerRow.children.length : 0;
      });
      return total;
    },
    totalPageRowCount: function totalPageRowCount() {
      var total = 0;
      lodash_foreach(this.paginated, function (headerRow) {
        total += headerRow.children ? headerRow.children.length : 0;
      });
      return total;
    },
    wrapStyleClasses: function wrapStyleClasses() {
      var classes = 'vgt-wrap';
      if (this.rtl) classes += ' rtl';
      classes += " ".concat(this.theme);
      return classes;
    },
    tableStyleClasses: function tableStyleClasses() {
      var classes = this.styleClass;
      classes += " ".concat(this.theme);
      return classes;
    },
    searchTerm: function searchTerm() {
      return this.externalSearchQuery != null ? this.externalSearchQuery : this.globalSearchTerm;
    },
    //
    globalSearchAllowed: function globalSearchAllowed() {
      if (this.searchEnabled && !!this.globalSearchTerm && this.searchTrigger !== 'enter') {
        return true;
      }

      if (this.externalSearchQuery != null && this.searchTrigger !== 'enter') {
        return true;
      }

      if (this.forceSearch) {
        this.forceSearch = false;
        return true;
      }

      return false;
    },
    // this is done everytime sortColumn
    // or sort type changes
    //----------------------------------------
    processedRows: function processedRows() {
      var _this = this;

      // we only process rows when mode is local
      var computedRows = this.filteredRows;

      if (this.mode === 'remote') {
        return computedRows;
      } // take care of the global filter here also


      if (this.globalSearchAllowed) {
        // here also we need to de-construct and then
        // re-construct the rows.
        var allRows = [];
        lodash_foreach(this.filteredRows, function (headerRow) {
          allRows.push.apply(allRows, _toConsumableArray(headerRow.children));
        });
        var filteredRows = [];
        lodash_foreach(allRows, function (row) {
          lodash_foreach(_this.columns, function (col) {
            // if col does not have search disabled,
            if (!col.globalSearchDisabled) {
              // if a search function is provided,
              // use that for searching, otherwise,
              // use the default search behavior
              if (_this.searchFn) {
                var foundMatch = _this.searchFn(row, col, _this.collectFormatted(row, col), _this.searchTerm);

                if (foundMatch) {
                  filteredRows.push(row);
                  return false; // break the loop
                }
              } else {
                // comparison
                var matched = defaultType.filterPredicate(_this.collectFormatted(row, col), _this.searchTerm, _this.searchSkipDiacritics);

                if (matched) {
                  filteredRows.push(row);
                  return false; // break loop
                }
              }
            }
          });
        }); // this is where we emit on search

        this.$emit('on-search', {
          searchTerm: this.searchTerm,
          rowCount: filteredRows.length
        }); // here we need to reconstruct the nested structure
        // of rows

        computedRows = [];
        lodash_foreach(this.filteredRows, function (headerRow) {
          var i = headerRow.vgt_header_id;
          var children = lodash_filter(filteredRows, ['vgt_id', i]);

          if (children.length) {
            var newHeaderRow = lodash_clonedeep(headerRow);
            newHeaderRow.children = children;
            computedRows.push(newHeaderRow);
          }
        });
      }

      if (this.sorts.length) {
        //* we need to sort
        computedRows.forEach(function (cRows) {
          cRows.children.sort(function (xRow, yRow) {
            //* we need to get column for each sort
            var sortValue;

            for (var i = 0; i < _this.sorts.length; i += 1) {
              var column = _this.getColumnForField(_this.sorts[i].field);

              var xvalue = _this.collect(xRow, _this.sorts[i].field);

              var yvalue = _this.collect(yRow, _this.sorts[i].field); //* if a custom sort function has been provided we use that


              var sortFn = column.sortFn;

              if (sortFn && typeof sortFn === 'function') {
                sortValue = sortValue || sortFn(xvalue, yvalue, column, xRow, yRow) * (_this.sorts[i].type === 'desc' ? -1 : 1);
              } else {
                //* else we use our own sort
                sortValue = sortValue || column.typeDef.compare(xvalue, yvalue, column) * (_this.sorts[i].type === 'desc' ? -1 : 1);
              }
            }

            return sortValue;
          });
        });
      } // if the filtering is event based, we need to maintain filter
      // rows


      if (this.searchTrigger === 'enter') {
        this.filteredRows = computedRows;
      }

      return computedRows;
    },
    paginated: function paginated() {
      var _this2 = this;

      if (!this.processedRows.length) return [];

      if (this.mode === 'remote') {
        return this.processedRows;
      } //* flatten the rows for paging.


      var paginatedRows = [];
      lodash_foreach(this.processedRows, function (childRows) {
        var _paginatedRows;

        //* only add headers when group options are enabled.
        if (_this2.groupOptions.enabled) {
          paginatedRows.push(childRows);
        }

        (_paginatedRows = paginatedRows).push.apply(_paginatedRows, _toConsumableArray(childRows.children));
      });

      if (this.paginate) {
        var pageStart = (this.currentPage - 1) * this.currentPerPage; // in case of filtering we might be on a page that is
        // not relevant anymore
        // also, if setting to all, current page will not be valid

        if (pageStart >= paginatedRows.length || this.currentPerPage === -1) {
          this.currentPage = 1;
          pageStart = 0;
        } // calculate page end now


        var pageEnd = paginatedRows.length + 1; // if the setting is set to 'all'

        if (this.currentPerPage !== -1) {
          pageEnd = this.currentPage * this.currentPerPage;
        }

        paginatedRows = paginatedRows.slice(pageStart, pageEnd);
      } // reconstruct paginated rows here


      var reconstructedRows = [];
      paginatedRows.forEach(function (flatRow) {
        //* header row?
        if (flatRow.vgt_header_id !== undefined) {
          _this2.handleExpanded(flatRow);

          var newHeaderRow = lodash_clonedeep(flatRow);
          newHeaderRow.children = [];
          reconstructedRows.push(newHeaderRow);
        } else {
          //* child row
          var hRow = reconstructedRows.find(function (r) {
            return r.vgt_header_id === flatRow.vgt_id;
          });

          if (!hRow) {
            hRow = _this2.processedRows.find(function (r) {
              return r.vgt_header_id === flatRow.vgt_id;
            });

            if (hRow) {
              hRow = lodash_clonedeep(hRow);
              hRow.children = [];
              reconstructedRows.push(hRow);
            }
          }

          hRow.children.push(flatRow);
        }
      });
      return reconstructedRows;
    },
    originalRows: function originalRows() {
      var rows = lodash_clonedeep(this.rows);
      var nestedRows = [];

      if (!this.groupOptions.enabled) {
        nestedRows = this.handleGrouped([{
          label: 'no groups',
          children: rows
        }]);
      } else {
        nestedRows = this.handleGrouped(rows);
      } // we need to preserve the original index of
      // rows so lets do that


      var index = 0;
      lodash_foreach(nestedRows, function (headerRow, i) {
        lodash_foreach(headerRow.children, function (row, j) {
          row.originalIndex = index++;
        });
      });
      return nestedRows;
    },
    typedColumns: function typedColumns() {
      var columns = lodash_assign(this.columns, []);

      for (var i = 0; i < this.columns.length; i++) {
        var column = columns[i];
        column.typeDef = this.dataTypes[column.type] || defaultType;
      }

      return columns;
    },
    hasRowClickListener: function hasRowClickListener() {
      return this.$listeners && this.$listeners['on-row-click'];
    }
  },
  methods: {
    //* we need to check for expanded row state here
    //* to maintain it when sorting/filtering
    handleExpanded: function handleExpanded(headerRow) {
      if (this.maintainExpanded && this.expandedRowKeys.has(headerRow[this.rowKeyField])) {
        this.$set(headerRow, 'vgtIsExpanded', true);
      } else {
        this.$set(headerRow, 'vgtIsExpanded', false);
      }
    },
    toggleExpand: function toggleExpand(id) {
      var _this3 = this;

      var headerRow = this.filteredRows.find(function (r) {
        return r[_this3.rowKeyField] === id;
      });

      if (headerRow) {
        this.$set(headerRow, 'vgtIsExpanded', !headerRow.vgtIsExpanded);
      }

      if (this.maintainExpanded && headerRow.vgtIsExpanded) {
        this.expandedRowKeys.add(headerRow[this.rowKeyField]);
      } else {
        this.expandedRowKeys["delete"](headerRow[this.rowKeyField]);
      }
    },
    expandAll: function expandAll() {
      var _this4 = this;

      this.filteredRows.forEach(function (row) {
        _this4.$set(row, 'vgtIsExpanded', true);

        if (_this4.maintainExpanded) {
          _this4.expandedRowKeys.add(row[_this4.rowKeyField]);
        }
      });
    },
    collapseAll: function collapseAll() {
      var _this5 = this;

      this.filteredRows.forEach(function (row) {
        _this5.$set(row, 'vgtIsExpanded', false);

        _this5.expandedRowKeys.clear();
      });
    },
    getColumnForField: function getColumnForField(field) {
      for (var i = 0; i < this.typedColumns.length; i += 1) {
        if (this.typedColumns[i].field === field) return this.typedColumns[i];
      }
    },
    handleSearch: function handleSearch() {
      this.resetTable(); // for remote mode, we need to emit on-search

      if (this.mode === 'remote') {
        this.$emit('on-search', {
          searchTerm: this.searchTerm
        });
      }
    },
    reset: function reset() {
      this.initializeSort();
      this.changePage(1);
      this.$refs['table-header-primary'].reset(true);

      if (this.$refs['table-header-secondary']) {
        this.$refs['table-header-secondary'].reset(true);
      }
    },
    emitSelectedRows: function emitSelectedRows() {
      this.$emit('on-select-all', {
        selected: this.selectedRowCount === this.totalRowCount,
        selectedRows: this.selectedRows
      });
    },
    unselectAllInternal: function unselectAllInternal(forceAll) {
      var _this6 = this;

      var rows = this.selectAllByPage && !forceAll ? this.paginated : this.filteredRows;
      lodash_foreach(rows, function (headerRow, i) {
        lodash_foreach(headerRow.children, function (row, j) {
          _this6.$set(row, 'vgtSelected', false);
        });
      });
      this.emitSelectedRows();
    },
    toggleSelectAll: function toggleSelectAll() {
      var _this7 = this;

      if (this.allSelected) {
        this.unselectAllInternal();
        return;
      }

      var rows = this.selectAllByPage ? this.paginated : this.filteredRows;
      lodash_foreach(rows, function (headerRow) {
        lodash_foreach(headerRow.children, function (row) {
          _this7.$set(row, 'vgtSelected', true);
        });
      });
      this.emitSelectedRows();
    },
    toggleSelectGroup: function toggleSelectGroup(event, headerRow) {
      var _this8 = this;

      lodash_foreach(headerRow.children, function (row) {
        _this8.$set(row, 'vgtSelected', event.checked);
      });
    },
    changePage: function changePage(value) {
      if (this.paginationOptions.enabled) {
        var paginationWidget = this.$refs.paginationBottom;

        if (this.paginationOptions.position === 'top') {
          paginationWidget = this.$refs.paginationTop;
        }

        if (paginationWidget) {
          paginationWidget.currentPage = value; // we also need to set the currentPage
          // for table.

          this.currentPage = value;
        }
      }
    },
    pageChangedEvent: function pageChangedEvent() {
      return {
        currentPage: this.currentPage,
        currentPerPage: this.currentPerPage,
        total: Math.floor(this.totalRowCount / this.currentPerPage)
      };
    },
    pageChanged: function pageChanged(pagination) {
      this.currentPage = pagination.currentPage;
      var pageChangedEvent = this.pageChangedEvent();
      pageChangedEvent.prevPage = pagination.prevPage;
      this.$emit('on-page-change', pageChangedEvent);

      if (this.mode === 'remote') {
        this.$emit('update:isLoading', true);
      }
    },
    perPageChanged: function perPageChanged(pagination) {
      this.currentPerPage = pagination.currentPerPage; //* update perPage also

      var perPageChangedEvent = this.pageChangedEvent();
      this.$emit('on-per-page-change', perPageChangedEvent);

      if (this.mode === 'remote') {
        this.$emit('update:isLoading', true);
      }
    },
    changeSort: function changeSort(sorts) {
      this.sorts = sorts;
      this.$emit('on-sort-change', sorts); // every time we change sort we need to reset to page 1

      this.changePage(1); // if the mode is remote, we don't need to do anything
      // after this. just set table loading to true

      if (this.mode === 'remote') {
        this.$emit('update:isLoading', true);
        return;
      }

      this.sortChanged = true;
    },
    // checkbox click should always do the following
    onCheckboxClicked: function onCheckboxClicked(row, index, event) {
      this.$set(row, 'vgtSelected', !row.vgtSelected);
      this.$emit('on-row-click', {
        row: row,
        pageIndex: index,
        selected: !!row.vgtSelected,
        event: event
      });
    },
    onRowDoubleClicked: function onRowDoubleClicked(row, index, event) {
      this.$emit('on-row-dblclick', {
        row: row,
        pageIndex: index,
        selected: !!row.vgtSelected,
        event: event
      });
    },
    onRowClicked: function onRowClicked(row, index, event) {
      if (this.selectable && !this.selectOnCheckboxOnly) {
        this.$set(row, 'vgtSelected', !row.vgtSelected);
      }

      this.$emit('on-row-click', {
        row: row,
        pageIndex: index,
        selected: !!row.vgtSelected,
        event: event
      });
    },
    onRowAuxClicked: function onRowAuxClicked(row, index, event) {
      this.$emit('on-row-aux-click', {
        row: row,
        pageIndex: index,
        selected: !!row.vgtSelected,
        event: event
      });
    },
    onCellClicked: function onCellClicked(row, column, rowIndex, event) {
      this.$emit('on-cell-click', {
        row: row,
        column: column,
        rowIndex: rowIndex,
        event: event
      });
    },
    onMouseenter: function onMouseenter(row, index) {
      this.$emit('on-row-mouseenter', {
        row: row,
        pageIndex: index
      });
    },
    onMouseleave: function onMouseleave(row, index) {
      this.$emit('on-row-mouseleave', {
        row: row,
        pageIndex: index
      });
    },
    searchTableOnEnter: function searchTableOnEnter() {
      if (this.searchTrigger === 'enter') {
        this.handleSearch(); // we reset the filteredRows here because
        // we want to search across everything.

        this.filteredRows = lodash_clonedeep(this.originalRows);
        this.forceSearch = true;
        this.sortChanged = true;
      }
    },
    searchTableOnKeyUp: function searchTableOnKeyUp() {
      if (this.searchTrigger !== 'enter') {
        this.handleSearch();
      }
    },
    resetTable: function resetTable() {
      this.unselectAllInternal(true); // every time we searchTable

      this.changePage(1);
    },
    // field can be:
    // 1. function
    // 2. regular property - ex: 'prop'
    // 3. nested property path - ex: 'nested.prop'
    collect: function collect(obj, field) {
      // utility function to get nested property
      function dig(obj, selector) {
        var result = obj;
        var splitter = selector.split('.');

        for (var i = 0; i < splitter.length; i++) {
          if (typeof result === 'undefined' || result === null) {
            return undefined;
          }

          result = result[splitter[i]];
        }

        return result;
      }

      if (typeof field === 'function') return field(obj);
      if (typeof field === 'string') return dig(obj, field);
      return undefined;
    },
    collectFormatted: function collectFormatted(obj, column) {
      var headerRow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var value;

      if (headerRow && column.headerField) {
        value = this.collect(obj, column.headerField);
      } else {
        value = this.collect(obj, column.field);
      }

      if (value === undefined) return ''; // if user has supplied custom formatter,
      // use that here

      if (column.formatFn && typeof column.formatFn === 'function') {
        return column.formatFn(value, obj);
      } // lets format the resultant data


      var type = column.typeDef; // this will only happen if we try to collect formatted
      // before types have been initialized. for example: on
      // load when external query is specified.

      if (!type) {
        type = this.dataTypes[column.type] || defaultType;
      }

      var result = type.format(value, column); // we must have some values in compact mode

      if (this.compactMode && (result == '' || result == null)) return '-';
      return result;
    },
    formattedRow: function formattedRow(row) {
      var isHeaderRow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var formattedRow = {};

      for (var i = 0; i < this.typedColumns.length; i++) {
        var col = this.typedColumns[i]; // what happens if field is

        if (col.field) {
          formattedRow[col.field] = this.collectFormatted(row, col, isHeaderRow);
        }
      }

      return formattedRow;
    },
    // Get classes for the given column index & element.
    getClasses: function getClasses(index, element, row) {
      var _this$typedColumns$in = this.typedColumns[index],
          typeDef = _this$typedColumns$in.typeDef,
          custom = _this$typedColumns$in["".concat(element, "Class")];

      var isRight = typeDef.isRight;
      if (this.rtl) isRight = true;
      var classes = {
        'vgt-right-align': isRight,
        'vgt-left-align': !isRight
      }; // for td we need to check if value is
      // a function.

      if (typeof custom === 'function') {
        classes[custom(row)] = true;
      } else if (typeof custom === 'string') {
        classes[custom] = true;
      }

      return classes;
    },
    // method to filter rows
    filterRows: function filterRows(columnFilters) {
      var _this9 = this;

      var fromFilter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      // if (!this.rows.length) return;
      // this is invoked either as a result of changing filters
      // or as a result of modifying rows.
      this.columnFilters = columnFilters;
      var computedRows = lodash_clonedeep(this.originalRows); // do we have a filter to care about?
      // if not we don't need to do anything

      if (this.columnFilters && Object.keys(this.columnFilters).length) {
        // every time we filter rows, we need to set current page
        // to 1
        // if the mode is remote, we only need to reset, if this is
        // being called from filter, not when rows are changing
        if (this.mode !== 'remote' || fromFilter) {
          this.changePage(1);
        } // we need to emit an event and that's that.
        // but this only needs to be invoked if filter is changing
        // not when row object is modified.


        if (fromFilter) {
          this.$emit('on-column-filter', {
            columnFilters: this.columnFilters
          });
        } // if mode is remote, we don't do any filtering here.


        if (this.mode === 'remote') {
          if (fromFilter) {
            this.$emit('update:isLoading', true);
          } else {
            // if remote filtering has already been taken care of.
            this.filteredRows = computedRows;
          }

          return;
        }

        var _loop = function _loop(i) {
          var col = _this9.typedColumns[i];

          if (_this9.columnFilters[col.field]) {
            computedRows = lodash_foreach(computedRows, function (headerRow) {
              var newChildren = headerRow.children.filter(function (row) {
                // If column has a custom filter, use that.
                if (col.filterOptions && typeof col.filterOptions.filterFn === 'function') {
                  return col.filterOptions.filterFn(_this9.collect(row, col.field), _this9.columnFilters[col.field]);
                } // Otherwise Use default filters


                var typeDef = col.typeDef;
                return typeDef.filterPredicate(_this9.collect(row, col.field), _this9.columnFilters[col.field], false, col.filterOptions && _typeof(col.filterOptions.filterDropdownItems) === 'object');
              }); // should we remove the header?

              headerRow.children = newChildren;
            });
          }
        };

        for (var i = 0; i < this.typedColumns.length; i++) {
          _loop(i);
        }
      }

      this.filteredRows = computedRows;
    },
    getCurrentIndex: function getCurrentIndex(index) {
      return (this.currentPage - 1) * this.currentPerPage + index + 1;
    },
    getRowStyleClass: function getRowStyleClass(row) {
      var classes = '';
      if (this.hasRowClickListener) classes += 'clickable';
      var rowStyleClasses;

      if (typeof this.rowStyleClass === 'function') {
        rowStyleClasses = this.rowStyleClass(row);
      } else {
        rowStyleClasses = this.rowStyleClass;
      }

      if (rowStyleClasses) {
        classes += " ".concat(rowStyleClasses);
      }

      return classes;
    },
    handleGrouped: function handleGrouped(originalRows) {
      var _this10 = this;

      lodash_foreach(originalRows, function (headerRow, i) {
        headerRow.vgt_header_id = i;

        if (_this10.groupOptions.maintainExpanded && _this10.expandedRowKeys.has(headerRow[_this10.groupOptions.rowKey])) {
          _this10.$set(headerRow, 'vgtIsExpanded', true);
        }

        lodash_foreach(headerRow.children, function (childRow) {
          childRow.vgt_id = i;
        });
      });
      return originalRows;
    },
    initializePagination: function initializePagination() {
      var _this11 = this;

      var _this$paginationOptio = this.paginationOptions,
          enabled = _this$paginationOptio.enabled,
          perPage = _this$paginationOptio.perPage,
          position = _this$paginationOptio.position,
          perPageDropdown = _this$paginationOptio.perPageDropdown,
          dropdownAllowAll = _this$paginationOptio.dropdownAllowAll,
          nextLabel = _this$paginationOptio.nextLabel,
          prevLabel = _this$paginationOptio.prevLabel,
          rowsPerPageLabel = _this$paginationOptio.rowsPerPageLabel,
          ofLabel = _this$paginationOptio.ofLabel,
          pageLabel = _this$paginationOptio.pageLabel,
          allLabel = _this$paginationOptio.allLabel,
          setCurrentPage = _this$paginationOptio.setCurrentPage,
          mode = _this$paginationOptio.mode;

      if (typeof enabled === 'boolean') {
        this.paginate = enabled;
      }

      if (typeof perPage === 'number') {
        this.perPage = perPage;
      }

      if (position === 'top') {
        this.paginateOnTop = true; // default is false

        this.paginateOnBottom = false; // default is true
      } else if (position === 'both') {
        this.paginateOnTop = true;
        this.paginateOnBottom = true;
      }

      if (Array.isArray(perPageDropdown) && perPageDropdown.length) {
        this.customRowsPerPageDropdown = perPageDropdown;

        if (!this.perPage) {
          var _perPageDropdown = _slicedToArray(perPageDropdown, 1);

          this.perPage = _perPageDropdown[0];
        }
      }

      if (typeof dropdownAllowAll === 'boolean') {
        this.paginateDropdownAllowAll = dropdownAllowAll;
      }

      if (typeof mode === 'string') {
        this.paginationMode = mode;
      }

      if (typeof nextLabel === 'string') {
        this.nextText = nextLabel;
      }

      if (typeof prevLabel === 'string') {
        this.prevText = prevLabel;
      }

      if (typeof rowsPerPageLabel === 'string') {
        this.rowsPerPageText = rowsPerPageLabel;
      }

      if (typeof ofLabel === 'string') {
        this.ofText = ofLabel;
      }

      if (typeof pageLabel === 'string') {
        this.pageText = pageLabel;
      }

      if (typeof allLabel === 'string') {
        this.allText = allLabel;
      }

      if (typeof setCurrentPage === 'number') {
        setTimeout(function () {
          _this11.changePage(setCurrentPage);
        }, 500);
      }
    },
    initializeSearch: function initializeSearch() {
      var _this$searchOptions = this.searchOptions,
          enabled = _this$searchOptions.enabled,
          trigger = _this$searchOptions.trigger,
          externalQuery = _this$searchOptions.externalQuery,
          searchFn = _this$searchOptions.searchFn,
          placeholder = _this$searchOptions.placeholder,
          skipDiacritics = _this$searchOptions.skipDiacritics;

      if (typeof enabled === 'boolean') {
        this.searchEnabled = enabled;
      }

      if (trigger === 'enter') {
        this.searchTrigger = trigger;
      }

      if (typeof externalQuery === 'string') {
        this.externalSearchQuery = externalQuery;
      }

      if (typeof searchFn === 'function') {
        this.searchFn = searchFn;
      }

      if (typeof placeholder === 'string') {
        this.searchPlaceholder = placeholder;
      }

      if (typeof skipDiacritics === 'boolean') {
        this.searchSkipDiacritics = skipDiacritics;
      }
    },
    initializeSort: function initializeSort() {
      var _this$sortOptions = this.sortOptions,
          enabled = _this$sortOptions.enabled,
          initialSortBy = _this$sortOptions.initialSortBy;

      if (typeof enabled === 'boolean') {
        this.sortable = enabled;
      } //* initialSortBy can be an array or an object


      if (_typeof(initialSortBy) === 'object') {
        var ref = this.fixedHeader ? this.$refs['table-header-secondary'] : this.$refs['table-header-primary'];

        if (Array.isArray(initialSortBy)) {
          ref.setInitialSort(initialSortBy);
        } else {
          var hasField = Object.prototype.hasOwnProperty.call(initialSortBy, 'field');
          if (hasField) ref.setInitialSort([initialSortBy]);
        }
      }
    },
    initializeSelect: function initializeSelect() {
      var _this$selectOptions = this.selectOptions,
          enabled = _this$selectOptions.enabled,
          selectionInfoClass = _this$selectOptions.selectionInfoClass,
          selectionText = _this$selectOptions.selectionText,
          clearSelectionText = _this$selectOptions.clearSelectionText,
          selectOnCheckboxOnly = _this$selectOptions.selectOnCheckboxOnly,
          selectAllByPage = _this$selectOptions.selectAllByPage,
          disableSelectInfo = _this$selectOptions.disableSelectInfo,
          selectAllByGroup = _this$selectOptions.selectAllByGroup;

      if (typeof enabled === 'boolean') {
        this.selectable = enabled;
      }

      if (typeof selectOnCheckboxOnly === 'boolean') {
        this.selectOnCheckboxOnly = selectOnCheckboxOnly;
      }

      if (typeof selectAllByPage === 'boolean') {
        this.selectAllByPage = selectAllByPage;
      }

      if (typeof selectAllByGroup === 'boolean') {
        this.selectAllByGroup = selectAllByGroup;
      }

      if (typeof disableSelectInfo === 'boolean') {
        this.disableSelectInfo = disableSelectInfo;
      }

      if (typeof selectionInfoClass === 'string') {
        this.selectionInfoClass = selectionInfoClass;
      }

      if (typeof selectionText === 'string') {
        this.selectionText = selectionText;
      }

      if (typeof clearSelectionText === 'string') {
        this.clearSelectionText = clearSelectionText;
      }
    }
  },
  mounted: function mounted() {
    if (this.perPage) {
      this.currentPerPage = this.perPage;
    }

    this.initializeSort();
  },
  components: {
    'vgt-pagination': __vue_component__$1,
    'vgt-global-search': __vue_component__$2,
    'vgt-header-row': __vue_component__$5,
    'vgt-table-header': __vue_component__$4
  }
};

/* script */
var __vue_script__$6 = script$6;
/* template */

var __vue_render__$6 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    "class": _vm.wrapStyleClasses
  }, [_vm.isLoading ? _c('div', {
    staticClass: "vgt-loading vgt-center-align"
  }, [_vm._t("loadingContent", [_c('span', {
    staticClass: "vgt-loading__content"
  }, [_vm._v("\n        Loading...\n      ")])])], 2) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "vgt-inner-wrap",
    "class": {
      'is-loading': _vm.isLoading
    }
  }, [_vm.paginate && _vm.paginateOnTop ? _vm._t("pagination-top", [_c('vgt-pagination', {
    ref: "paginationTop",
    attrs: {
      "perPage": _vm.perPage,
      "rtl": _vm.rtl,
      "total": _vm.totalRows || _vm.totalRowCount,
      "mode": _vm.paginationMode,
      "nextText": _vm.nextText,
      "prevText": _vm.prevText,
      "rowsPerPageText": _vm.rowsPerPageText,
      "customRowsPerPageDropdown": _vm.customRowsPerPageDropdown,
      "paginateDropdownAllowAll": _vm.paginateDropdownAllowAll,
      "ofText": _vm.ofText,
      "pageText": _vm.pageText,
      "allText": _vm.allText
    },
    on: {
      "page-changed": _vm.pageChanged,
      "per-page-changed": _vm.perPageChanged
    }
  })], {
    "pageChanged": _vm.pageChanged,
    "perPageChanged": _vm.perPageChanged,
    "total": _vm.totalRows || _vm.totalRowCount
  }) : _vm._e(), _vm._v(" "), _c('vgt-global-search', {
    attrs: {
      "search-enabled": _vm.searchEnabled && _vm.externalSearchQuery == null,
      "global-search-placeholder": _vm.searchPlaceholder
    },
    on: {
      "on-keyup": _vm.searchTableOnKeyUp,
      "on-enter": _vm.searchTableOnEnter
    },
    model: {
      value: _vm.globalSearchTerm,
      callback: function callback($$v) {
        _vm.globalSearchTerm = $$v;
      },
      expression: "globalSearchTerm"
    }
  }, [_c('template', {
    slot: "internal-table-actions"
  }, [_vm._t("table-actions")], 2)], 2), _vm._v(" "), _vm.selectedRowCount && !_vm.disableSelectInfo ? _c('div', {
    staticClass: "vgt-selection-info-row clearfix",
    "class": _vm.selectionInfoClass
  }, [_vm._v("\n      " + _vm._s(_vm.selectionInfo) + "\n      "), _c('a', {
    attrs: {
      "href": ""
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.unselectAllInternal(true);
      }
    }
  }, [_vm._v("\n        " + _vm._s(_vm.clearSelectionText) + "\n      ")]), _vm._v(" "), _c('div', {
    staticClass: "vgt-selection-info-row__actions vgt-pull-right"
  }, [_vm._t("selected-row-actions")], 2)]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "vgt-fixed-header"
  }, [_vm.fixedHeader ? _c('table', {
    "class": _vm.tableStyleClasses
  }, [_c("vgt-table-header", {
    ref: "table-header-secondary",
    tag: "thead",
    attrs: {
      "columns": _vm.columns,
      "line-numbers": _vm.lineNumbers,
      "selectable": _vm.selectable,
      "all-selected": _vm.allSelected,
      "all-selected-indeterminate": _vm.allSelectedIndeterminate,
      "mode": _vm.mode,
      "sortable": _vm.sortable,
      "typed-columns": _vm.typedColumns,
      "getClasses": _vm.getClasses,
      "searchEnabled": _vm.searchEnabled,
      "paginated": _vm.paginated,
      "table-ref": _vm.$refs.table
    },
    on: {
      "on-toggle-select-all": _vm.toggleSelectAll,
      "on-sort-change": _vm.changeSort,
      "filter-changed": _vm.filterRows
    },
    scopedSlots: _vm._u([{
      key: "table-column",
      fn: function fn(props) {
        return [_vm._t("table-column", [_c('span', [_vm._v(_vm._s(props.column.label))])], {
          "column": props.column
        })];
      }
    }], null, true)
  })], 1) : _vm._e()]), _vm._v(" "), _c('div', {
    "class": {
      'vgt-responsive': _vm.responsive
    },
    style: _vm.wrapperStyles
  }, [_c('table', {
    ref: "table",
    "class": _vm.tableStyles
  }, [_c("vgt-table-header", {
    ref: "table-header-primary",
    tag: "thead",
    attrs: {
      "columns": _vm.columns,
      "line-numbers": _vm.lineNumbers,
      "selectable": _vm.selectable,
      "all-selected": _vm.allSelected,
      "all-selected-indeterminate": _vm.allSelectedIndeterminate,
      "mode": _vm.mode,
      "sortable": _vm.sortable,
      "typed-columns": _vm.typedColumns,
      "getClasses": _vm.getClasses,
      "searchEnabled": _vm.searchEnabled
    },
    on: {
      "on-toggle-select-all": _vm.toggleSelectAll,
      "on-sort-change": _vm.changeSort,
      "filter-changed": _vm.filterRows
    },
    scopedSlots: _vm._u([{
      key: "table-column",
      fn: function fn(props) {
        return [_vm._t("table-column", [_c('span', [_vm._v(_vm._s(props.column.label))])], {
          "column": props.column
        })];
      }
    }, {
      key: "column-filter",
      fn: function fn(props) {
        return [_vm._t("column-filter", null, {
          "column": props.column,
          "updateFilters": props.updateFilters
        })];
      }
    }], null, true)
  }), _vm._v(" "), _vm._l(_vm.paginated, function (headerRow, index) {
    return _c('tbody', {
      key: index
    }, [_vm.groupHeaderOnTop ? _c('vgt-header-row', {
      "class": _vm.getRowStyleClass(headerRow),
      attrs: {
        "header-row": headerRow,
        "columns": _vm.columns,
        "line-numbers": _vm.lineNumbers,
        "selectable": _vm.selectable,
        "select-all-by-group": _vm.selectAllByGroup,
        "collapsable": _vm.groupOptions.collapsable,
        "collect-formatted": _vm.collectFormatted,
        "formatted-row": _vm.formattedRow,
        "get-classes": _vm.getClasses,
        "full-colspan": _vm.fullColspan,
        "groupIndex": index
      },
      on: {
        "vgtExpand": function vgtExpand($event) {
          return _vm.toggleExpand(headerRow[_vm.rowKeyField]);
        },
        "on-select-group-change": function onSelectGroupChange($event) {
          return _vm.toggleSelectGroup($event, headerRow);
        }
      },
      scopedSlots: _vm._u([{
        key: "table-header-row",
        fn: function fn(props) {
          return _vm.hasHeaderRowTemplate ? [_vm._t("table-header-row", null, {
            "column": props.column,
            "formattedRow": props.formattedRow,
            "row": props.row
          })] : undefined;
        }
      }], null, true)
    }) : _vm._e(), _vm._v(" "), _vm._l(headerRow.children, function (row, index) {
      return (_vm.groupOptions.collapsable ? headerRow.vgtIsExpanded : true) ? _c('tr', {
        key: row.originalIndex,
        "class": _vm.getRowStyleClass(row),
        on: {
          "mouseenter": function mouseenter($event) {
            return _vm.onMouseenter(row, index);
          },
          "mouseleave": function mouseleave($event) {
            return _vm.onMouseleave(row, index);
          },
          "dblclick": function dblclick($event) {
            return _vm.onRowDoubleClicked(row, index, $event);
          },
          "click": function click($event) {
            return _vm.onRowClicked(row, index, $event);
          },
          "auxclick": function auxclick($event) {
            return _vm.onRowAuxClicked(row, index, $event);
          }
        }
      }, [_vm.lineNumbers ? _c('th', {
        staticClass: "line-numbers"
      }, [_vm._v("\n              " + _vm._s(_vm.getCurrentIndex(index)) + "\n            ")]) : _vm._e(), _vm._v(" "), _vm.selectable ? _c('th', {
        staticClass: "vgt-checkbox-col",
        on: {
          "click": function click($event) {
            $event.stopPropagation();
            return _vm.onCheckboxClicked(row, index, $event);
          }
        }
      }, [_c('input', {
        attrs: {
          "type": "checkbox"
        },
        domProps: {
          "checked": row.vgtSelected
        }
      })]) : _vm._e(), _vm._v(" "), _vm._l(_vm.columns, function (column, i) {
        return !column.hidden && column.field ? _c('td', {
          key: i,
          "class": _vm.getClasses(i, 'td', row),
          attrs: {
            "data-label": _vm.compactMode ? column.label : undefined
          },
          on: {
            "click": function click($event) {
              return _vm.onCellClicked(row, column, index, $event);
            }
          }
        }, [_vm._t("table-row", [!column.html ? _c('span', [_vm._v("\n                  " + _vm._s(_vm.collectFormatted(row, column)) + "\n                ")]) : _vm._e(), _vm._v(" "), column.html ? _c('span', {
          domProps: {
            "innerHTML": _vm._s(_vm.collect(row, column.field))
          }
        }) : _vm._e()], {
          "row": row,
          "column": column,
          "formattedRow": _vm.formattedRow(row),
          "index": index
        })], 2) : _vm._e();
      })], 2) : _vm._e();
    }), _vm._v(" "), _vm.groupHeaderOnBottom ? _c('vgt-header-row', {
      attrs: {
        "header-row": headerRow,
        "columns": _vm.columns,
        "line-numbers": _vm.lineNumbers,
        "selectable": _vm.selectable,
        "select-all-by-group": _vm.selectAllByGroup,
        "collect-formatted": _vm.collectFormatted,
        "formatted-row": _vm.formattedRow,
        "get-classes": _vm.getClasses,
        "full-colspan": _vm.fullColspan,
        "groupIndex": index
      },
      on: {
        "on-select-group-change": function onSelectGroupChange($event) {
          return _vm.toggleSelectGroup($event, headerRow);
        }
      },
      scopedSlots: _vm._u([{
        key: "table-header-row",
        fn: function fn(props) {
          return _vm.hasHeaderRowTemplate ? [_vm._t("table-header-row", null, {
            "column": props.column,
            "formattedRow": props.formattedRow,
            "row": props.row
          })] : undefined;
        }
      }], null, true)
    }) : _vm._e()], 2);
  }), _vm._v(" "), _vm.showEmptySlot ? _c('tbody', [_c('tr', [_c('td', {
    attrs: {
      "colspan": _vm.fullColspan
    }
  }, [_vm._t("emptystate", [_c('div', {
    staticClass: "vgt-center-align vgt-text-disabled"
  }, [_vm._v("\n                  No data for table\n                ")])])], 2)])]) : _vm._e()], 2)]), _vm._v(" "), _vm.hasFooterSlot ? _c('div', {
    staticClass: "vgt-wrap__actions-footer"
  }, [_vm._t("table-actions-bottom")], 2) : _vm._e(), _vm._v(" "), _vm.paginate && _vm.paginateOnBottom ? _vm._t("pagination-bottom", [_c('vgt-pagination', {
    ref: "paginationBottom",
    attrs: {
      "perPage": _vm.perPage,
      "rtl": _vm.rtl,
      "total": _vm.totalRows || _vm.totalRowCount,
      "mode": _vm.paginationMode,
      "nextText": _vm.nextText,
      "prevText": _vm.prevText,
      "rowsPerPageText": _vm.rowsPerPageText,
      "customRowsPerPageDropdown": _vm.customRowsPerPageDropdown,
      "paginateDropdownAllowAll": _vm.paginateDropdownAllowAll,
      "ofText": _vm.ofText,
      "pageText": _vm.pageText,
      "allText": _vm.allText
    },
    on: {
      "page-changed": _vm.pageChanged,
      "per-page-changed": _vm.perPageChanged
    }
  })], {
    "pageChanged": _vm.pageChanged,
    "perPageChanged": _vm.perPageChanged,
    "total": _vm.totalRows || _vm.totalRowCount
  }) : _vm._e()], 2)]);
};

var __vue_staticRenderFns__$6 = [];
/* style */

var __vue_inject_styles__$6 = undefined;
/* scoped */

var __vue_scope_id__$6 = undefined;
/* module identifier */

var __vue_module_identifier__$6 = undefined;
/* functional template */

var __vue_is_functional_template__$6 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$6 =
/*#__PURE__*/
normalizeComponent({
  render: __vue_render__$6,
  staticRenderFns: __vue_staticRenderFns__$6
}, __vue_inject_styles__$6, __vue_script__$6, __vue_scope_id__$6, __vue_is_functional_template__$6, __vue_module_identifier__$6, false, undefined, undefined, undefined);

var VueGoodTablePlugin = {
  install: function install(Vue, options) {
    Vue.component(__vue_component__$6.name, __vue_component__$6);
  }
}; // Automatic installation if Vue has been added to the global scope.

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueGoodTablePlugin);
}

/* harmony default export */ __webpack_exports__["default"] = (VueGoodTablePlugin);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

}]);