!function(n,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r(require("lodash"),require("coreUtilsLib"),require("color"));else if("function"==typeof define&&define.amd)define(["lodash","coreUtilsLib","color"],r);else{var t="object"==typeof exports?r(require("lodash"),require("coreUtilsLib"),require("color")):r(n.lodash,n.coreUtilsLib,n.color);for(var e in t)("object"==typeof exports?exports:n)[e]=t[e]}}(this,function(n,r,t){return function(n){function r(e){if(t[e])return t[e].exports;var o=t[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var t={};return r.m=n,r.c=t,r.d=function(n,t,e){r.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:e})},r.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},r.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(t,"a",t),t},r.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},r.p="",r(r.s=8)}([function(r,t){r.exports=n},function(n,r,t){"use strict";function e(n,r,t,e){return t&&t[n]?function(n,r,t){return c[r.type]?c[r.type](n,r.value,t):n}(r,t[n],e):r}function o(n,r,t){var e=i.isUndefined(r[n])?t[n]:r[n];if(!i.isArray(e))return e;if(1===e.length)return r[e[0]]||t[e[0]];var o="";return e=i.reduce(e,function(n,e){var u,a,c=r[e]||t[e];return o=o||(u=c,a=i.parseInt(u).toString(),u=u.toString(),isNaN(a)||u===a?"":u.substr(u.indexOf(a)+a.length)),n+i.parseInt(c)},0),"x"===o&&(o="px"),e+o}var i=t(0),u=t(6),a=t(5).checkIsParamAnAliasAndGetUnaliasedValue,c={brightness:function(n,r){return n.value(r*n.hsv().v)},alpha:function(n,r){return n.alpha(r*n.alpha())},decrease:function(n,r){return i.parseInt(n)-i.parseInt(r)},increase:function(n,r){return i.parseInt(n)+i.parseInt(r)},multiply:function(n,r){return i.parseInt(n)*parseFloat(r)},max:function(n,r){return Math.max(i.parseInt(n),i.parseInt(r))},eval:function(n,r,t){return t[r](n)}};n.exports={renderParam:function(n,r,t,s,f){if(!r.params)return"";var l=a(r.params[n]),O=o(n,t,r.paramsDefaults);if(void 0===O||!l)return"";switch(l){case"BG_COLOR":case"COLOR":case"COLOR_ALPHA":O=function(n,r,t,e){var o="alpha-"+(Array.isArray(t[r])&&t[r][0]||r),u=i.isUndefined(e[o])?t[o]:e[o];return i.isUndefined(u)||(n=c.alpha(n,parseFloat(u))),n}(O=function(n,r){var t=n.split("color_");return 2===t.length&&(n=r[i.parseInt(t[1])]),i.includes(n,",")&&!i.includes(n,"rgb")&&(n="rgba("+n+")"),u(n)}(O,s),n,r.paramsDefaults,t);break;case"BORDER_RADIUS":t[n]&&(O=function(n){var r="";return i.forEach(n.replace(/px/g,"").split(" "),function(n){var t=Math.min(i.parseInt(n),99999);r+=" "+t+(0===t?"":"px")}),n=r.substring(1)}(O));break;case"BOX_SHADOW":if(function(n,r,t){var e="boxShadowToggleOn-"+n;return"false"===(r[e]||t[e])}(n,t,r.paramsDefaults))return""}return{type:l,value:O=e(n,O,r.paramsMutators,f)}}}},function(n,r,t){"use strict";var e=t(0);n.exports={identity:e.identity}},function(n,t){n.exports=r},function(n,r,t){"use strict";function e(n){var r=n,t=i.getFontFallback(n);return t&&(r=r+","+t),r=r.replace(/[^,]*[^\w,\d\-][^,]*/g,function(n){return"'"+n.replace(/\+/g," ")+"'"})}var o=t(0),i=t(3).fonts;n.exports={fontToCSSWithoutColor:function(n,r){return function(n){var r=n;o.includes(r,"#")&&(r=r.slice(0,r.indexOf("#"))),r=r.replace(/\{color_\d+\}/,"");var t=i.getFontFamily(r),u=e(t);return r.replace(t,u)+";"}(function(n,r){if(o.startsWith(n,"font_")){var t=n.split("font_");if(2===t.length)return r.font[t[1]]}return n}(n,r))},getFullFontFamily:e}},function(n,r,t){"use strict";var e=t(0),o=["BORDER_SIZE","BORDER_TOP_SIZE","BORDER_BOTTOM_SIZE","BORDER_LEFT_SIZE","BORDER_RIGHT_SIZE","PADDING_SIZE","PADDING_TOP_SIZE","PADDING_BOTTOM_SIZE","PADDING_LEFT_SIZE","PADDING_RIGHT_SIZE","MARGIN_SIZE","MARGIN_TOP_SIZE","MARGIN_BOTTOM_SIZE","MARGIN_LEFT_SIZE","MARGIN_RIGHT_SIZE","BG_SIZE","WIDTH_SIZE","HEIGHT_SIZE","TOP_SIZE","BOTTOM_SIZE","LEFT_SIZE","RIGHT_SIZE","TEXT_SIZE"],i=["TEXT_COLOR","BORDER_COLOR"],u=["BORDER_COLOR_ALPHA","BOX_SHADOW_COLOR_ALPHA","TEXT_COLOR_LEGACY_ALPHA"],a=["BG_COLOR_ALPHA"],c={};e.forEach(o,function(n){c[n]="SIZE"}),e.forEach(i,function(n){c[n]="COLOR"}),e.forEach(u,function(n){c[n]="COLOR_ALPHA"}),e.forEach(a,function(n){c[n]="BG_COLOR"}),n.exports={checkIsParamAnAliasAndGetUnaliasedValue:function(n){return c[n]?c[n]:n},PARAM_ALIAS_MAP:c,SIZE_ALIASES:o,COLOR_ALIASES:i,COLOR_ALPHA_ALIASES:u,BG_COLOR_ALIASES:a}},function(n,r){n.exports=t},function(n,r,t){"use strict";function e(n){return isNaN(n)?n:n+"px"}function o(n,r,t,e){var o=e.renderingEnv;return s.isNil(n)?"":(_[r]||_.DEFAULT)((p[r]||p.DEFAULT)(n,t,o))}function i(n,r,t,e,i){var u=f.renderParam(n,r,t,e.color,i.evals),a="SIZE"===u.type&&s.isString(u.value)?s.map(u.value.split(" "),function(n){return{value:n,type:"SIZE"}}):[u];return s.map(a,function(n){return o(n.value,n.type,e,i)})}function u(n,r,t,e,o){return n.$render(function(n){return"."+n}(e),function(n,r,t,e){return s.mapValues(n.params,function(o,i){var u=f.renderParam(i,n,r,t.color,e.evals);return function(n,r,t,e){var o=e.renderingEnv;return s.isNil(n)?"":(p[r]||p.DEFAULT)(n,t,o)}(u.value,u.type,t,e)})}(n,r,t,o),O)}function a(n,r,t,e,u){return s.map(n.css,function(a,c){var l="@"===c[0]?e+"_":"."+e;return(c=c.replace(/%/g,l))+" {"+(a=function(n,r){return n.replace(/((-webkit-)?animation(-name)?: ?)/gim,"$1"+r+"_")}(a=function(n,r,t,e,i){return n.replace(/\[(.*?)\]/g,function(n,u){var a=f.renderParam(u,r,t,e.color,i.evals);return o(a.value,a.type,e,i)})}(a=function(n,r,t,e,o){return n.replace(/calc\(\[([\w\d]+)\] ([-+*\/]) \[([\w\d]+)\]\)/g,function(n,u,a,c){for(var f=i(u,r,t,e,o),l=i(c,r,t,e,o),O=s.template("calc(${p1} ${sign} ${p2})"),_=[],p=0;p<Math.max(f.length,l.length);p++)_.push(O({p1:f[p]||f[0],p2:l[p]||l[0],sign:a}));return _.join(" ")})}(a,n,r,t,u),n,r,t,u),e))+"}"}).join("\n")}function c(n,r,t,e){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{evals:{}};return function(n){return"function"==typeof n.$render}(n)?u(n,r,t,e,o):a(n,r,t,e,o)+function(n,r,t,e){return n.mediaQueries&&n.mediaQueries.length?s.map(n.mediaQueries,function(n){var o=c({css:n.css},r,t,e);return[n.query,"{",o,"}"].join("")}).join("\n"):""}(n,r,t,e)}var s=t(0),f=t(1),l=t(4),O=t(2),_={BORDER_RADIUS:function(n){return"border-radius:"+n+";"},BOX_SHADOW:function(n){return"box-shadow:"+n+";"},FONT:function(n){return"font:"+n},FONT_FAMILY:function(n){return"font-family:"+n+";"},TRANSITION:function(n){return"transition:"+n+";"},INVERTED_ZOOM:function(n){return"zoom:"+n+";"},INVERTED_ZOOM_FIXED:function(n){return"zoom:"+n+";"},ORIENTATION_ZOOM_FIX:function(n){return"zoom:"+n+";"},ZOOM_BY_SCREEN_PROPERTIES:function(n){return"zoom:"+n+";"},DEFAULT:s.identity},p={BORDER_RADIUS:s.identity,TRANSITION:s.identity,ALPHA:s.identity,BORDER_SIDES:s.constant(""),ICON_TYPE:s.constant(""),BOX_SHADOW:e,SIZE:e,FONT:function(n,r){return l.fontToCSSWithoutColor(n,r)},FONT_FAMILY:function(n){return l.getFullFontFamily(n)},COLOR:function(n){return n.hexString()},BG_COLOR:function(n){return n.alpha()>0?n.rgbaString():"transparent"},COLOR_ALPHA:function(n){return n.alpha()>0?n.rgbaString():"transparent"},INVERTED_ZOOM:function(n,r,t){return t.siteZoomRatio},INVERTED_ZOOM_FIXED:function(n,r,t){return t.invertedZoomRatio},ORIENTATION_ZOOM_FIX:function(n,r,t){return t.orientationZoomFix},ZOOM_BY_SCREEN_PROPERTIES:function(n,r,t){return t.mobileZoom},URL:function(n,r,t){return"BASE_THEME_DIRECTORY"===n?t.baseThemeUrl:"WEB_THEME_DIRECTORY"===n?t.webThemeUrl:n},DEFAULT:s.identity};n.exports=c},function(n,r,t){"use strict";n.exports={createSkinCss:t(7),renderParam:t(1).renderParam}}])});