// i18next, v1.5.10
// Copyright (c)2012 Jan MÃ¼hlemann (jamuhl).
// Distributed under MIT license
// http://i18next.com
(function(){function a(e,t){if(!t||typeof t=="function")return e;for(var n in t)e[n]=t[n];return e}function f(e,t,n){var r,i=0,s=e.length,o=s===undefined||typeof e=="function";if(n){if(o){for(r in e)if(t.apply(e[r],n)===!1)break}else for(;i<s;)if(t.apply(e[i++],n)===!1)break}else if(o){for(r in e)if(t.call(e[r],r,e[r])===!1)break}else for(;i<s;)if(t.call(e[i],i,e[i++])===!1)break;return e}function l(e){var t=function(e){if(window.XMLHttpRequest)return e(null,new XMLHttpRequest);if(window.ActiveXObject)try{return e(null,new ActiveXObject("Msxml2.XMLHTTP"))}catch(t){return e(null,new ActiveXObject("Microsoft.XMLHTTP"))}return e(new Error)},n=function(e){if(typeof e=="string")return e;var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t.join("&")},r=function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t+=String.fromCharCode(r):r>127&&r<2048?(t+=String.fromCharCode(r>>6|192),t+=String.fromCharCode(r&63|128)):(t+=String.fromCharCode(r>>12|224),t+=String.fromCharCode(r>>6&63|128),t+=String.fromCharCode(r&63|128))}return t},i=function(e){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";e=r(e);var n="",i,s,o,u,a,f,l,c=0;do i=e.charCodeAt(c++),s=e.charCodeAt(c++),o=e.charCodeAt(c++),u=i>>2,a=(i&3)<<4|s>>4,f=(s&15)<<2|o>>6,l=o&63,isNaN(s)?f=l=64:isNaN(o)&&(l=64),n+=t.charAt(u)+t.charAt(a)+t.charAt(f)+t.charAt(l),i=s=o="",u=a=f=l="";while(c<e.length);return n},s=function(){var e=arguments[0];for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])}return e},o=function(e,r,i,u){typeof i=="function"&&(u=i,i={}),i.cache=i.cache||!1,i.data=i.data||{},i.headers=i.headers||{},i.jsonp=i.jsonp||!1,i.async=i.async===undefined?!0:i.async;var a=s({accept:"*/*","content-type":"application/x-www-form-urlencoded;charset=UTF-8"},o.headers,i.headers),f;a["content-type"]==="application/json"?f=JSON.stringify(i.data):f=n(i.data);if(e==="GET"){var l=[];f&&(l.push(f),f=null),i.cache||l.push("_="+(new Date).getTime()),i.jsonp&&(l.push("callback="+i.jsonp),l.push("jsonp="+i.jsonp)),l="?"+l.join("&"),r+=l!=="?"?l:"";if(i.jsonp){var c=document.getElementsByTagName("head")[0],h=document.createElement("script");h.type="text/javascript",h.src=r,c.appendChild(h);return}}t(function(t,n){if(t)return u(t);n.open(e,r,i.async);for(var s in a)a.hasOwnProperty(s)&&n.setRequestHeader(s,a[s]);n.onreadystatechange=function(){if(n.readyState===4){var e=n.responseText||"";if(!u)return;u(n.status,{text:function(){return e},json:function(){return JSON.parse(e)}})}},n.send(f)})},u={authBasic:function(e,t){o.headers.Authorization="Basic "+i(e+":"+t)},connect:function(e,t,n){return o("CONNECT",e,t,n)},del:function(e,t,n){return o("DELETE",e,t,n)},get:function(e,t,n){return o("GET",e,t,n)},head:function(e,t,n){return o("HEAD",e,t,n)},headers:function(e){o.headers=e||{}},isAllowed:function(e,t,n){this.options(e,function(e,r){n(r.text().indexOf(t)!==-1)})},options:function(e,t,n){return o("OPTIONS",e,t,n)},patch:function(e,t,n){return o("PATCH",e,t,n)},post:function(e,t,n){return o("POST",e,t,n)},put:function(e,t,n){return o("PUT",e,t,n)},trace:function(e,t,n){return o("TRACE",e,t,n)}},a=e.type?e.type.toLowerCase():"get";u[a](e.url,{async:e.async},function(t,n){t===200?e.success(n.json(),t,null):e.error(n.text(),t,null)})}function d(e,s){typeof e=="function"&&(s=e,e={}),e=e||{},p.extend(u,e),typeof u.ns=="string"&&(u.ns={namespaces:[u.ns],defaultNs:u.ns}),u.interpolationPrefixEscaped=p.regexEscape(u.interpolationPrefix),u.interpolationSuffixEscaped=p.regexEscape(u.interpolationSuffix),u.lng||(u.lng=p.detectLanguage()),u.lng?u.useCookie&&p.cookie.create(u.cookieName,u.lng,u.cookieExpirationTime):(u.lng=u.fallbackLng,u.useCookie&&p.cookie.remove(u.cookieName)),o=p.toLanguages(u.lng),i=o[0],p.log("currentLng set to: "+i),M.setCurrentLng(i),t&&u.setJqueryExt&&E();var a;t&&t.Deferred&&(a=t.Deferred());if(u.resStore)return r=u.resStore,s&&s(C),a&&a.resolve(),a;var f=p.toLanguages(u.lng);typeof u.preload=="string"&&(u.preload=[u.preload]);for(var l=0,c=u.preload.length;l<c;l++){var h=p.toLanguages(u.preload[l]);for(var d=0,v=h.length;d<v;d++)f.indexOf(h[d])<0&&f.push(h[d])}return n.sync.load(f,u,function(e,t){r=t,s&&s(C),a&&a.resolve()}),a}function v(e,t){typeof e=="string"&&(e=[e]);for(var n=0,r=e.length;n<r;n++)u.preload.indexOf(e[n])<0&&u.preload.push(e[n]);return d(t)}function m(e){u.ns.defaultNs=e}function g(e,t){y([e],t)}function y(e,t){var i={dynamicLoad:u.dynamicLoad,resGetPath:u.resGetPath,getAsync:u.getAsync,ns:{namespaces:e,defaultNs:""}},s=p.toLanguages(u.lng);typeof u.preload=="string"&&(u.preload=[u.preload]);for(var o=0,a=u.preload.length;o<a;o++){var f=p.toLanguages(u.preload[o]);for(var l=0,c=f.length;l<c;l++)s.indexOf(f[l])<0&&s.push(f[l])}var h=[];for(var d=0,v=s.length;d<v;d++){var m=!1,g=r[s[d]];if(g)for(var y=0,b=e.length;y<b;y++)g[e[y]]||(m=!0);else m=!0;m&&h.push(s[d])}h.length?n.sync._fetch(h,i,function(i,s){var o=e.length*h.length;p.each(e,function(e,i){p.each(h,function(e,a){r[a]=r[a]||{},r[a][i]=s[a][i],o--,o===0&&t&&(u.useLocalStorage&&n.sync._storeLocal(r),t())})})}):t&&t()}function b(e,t){return d({lng:e},t)}function w(){return i}function E(){function e(e,n,r){if(n.length===0)return;var i="text";if(n.indexOf("[")===0){var s=n.split("]");n=s[1],i=s[0].substr(1,s[0].length-1)}n.indexOf(";")===n.length-1&&(n=n.substr(0,n.length-2));var o;i==="html"?(o=u.defaultValueFromContent?t.extend({defaultValue:e.html()},r):r,e.html(t.t(n,o))):i==="text"?(o=u.defaultValueFromContent?t.extend({defaultValue:e.text()},r):r,e.text(t.t(n,o))):(o=u.defaultValueFromContent?t.extend({defaultValue:e.attr(i)},r):r,e.attr(i,t.t(n,o)))}function n(n,r){var i=n.attr(u.selectorAttr);if(!i)return;!r&&u.useDataAttrOptions===!0&&(r=n.data("i18n-options")),r=r||{};if(i.indexOf(";")<=i.length-1){var s=i.split(";");t.each(s,function(t,i){e(n,i,r)})}else e(n,k,r);u.useDataAttrOptions===!0&&n.data("i18n-options",r)}t.t=t.t||C,t.fn.i18n=function(e){return this.each(function(){n(t(this),e);var r=t(this).find("["+u.selectorAttr+"]");r.each(function(){n(t(this),e)})})}}function S(e,t,n){return e.indexOf(u.interpolationPrefix)<0?e:(p.each(t,function(t,r){typeof r=="object"&&r!==null?e=S(e,r,n?n+"."+t:t):e=e.replace(new RegExp([u.interpolationPrefixEscaped,n?n+"."+t:t,u.interpolationSuffixEscaped].join(""),"g"),r)}),e)}function x(e,t){var n=p.extend({},t);delete n.postProcess;while(e.indexOf(u.reusePrefix)!=-1){s++;if(s>u.maxRecursion)break;var r=e.indexOf(u.reusePrefix),i=e.indexOf(u.reuseSuffix,r)+u.reuseSuffix.length,o=e.substring(r,i),a=o.replace(u.reusePrefix,"").replace(u.reuseSuffix,""),f=L(a,n);e=e.replace(o,f)}return e}function T(e){return e.context&&typeof e.context=="string"}function N(e){return e.count!==undefined&&typeof e.count!="string"&&e.count!==1}function C(e,t){return s=0,L(e,t)}function L(e,t){t=t||{};if(!r)return f;var s,a,f=t.defaultValue||e,l=o;if(t.lng){l=p.toLanguages(t.lng);if(!r[l[0]]){var c=u.getAsync;u.getAsync=!1,n.sync.load(l,u,function(e,t){p.extend(r,t),u.getAsync=c})}}var h=t.ns||u.ns.defaultNs;if(e.indexOf(u.nsseparator)>-1){var d=e.split(u.nsseparator);h=d[0],e=d[1]}if(T(t)){s=p.extend({},t),delete s.context,s.defaultValue=u.contextNotFound;var v=h+":"+e+"_"+t.context;a=C(v,s);if(a!=u.contextNotFound)return S(a,{context:t.context})}if(N(t)){s=p.extend({},t),delete s.count,s.defaultValue=u.pluralNotFound;var m=h+":"+e+u.pluralSuffix,g=M.get(i,t.count);g>=0?m=m+"_"+g:g===1&&(m=h+":"+e),a=C(m,s);if(a!=u.pluralNotFound)return S(a,{count:t.count})}var y,b=e.split(u.keyseparator);for(var w=0,E=l.length;w<E;w++){if(y)break;var k=l[w],A=0,D=r[k]&&r[k][h];while(b[A])D=D&&D[b[A]],A++;if(D!==undefined){if(typeof D=="string")D=S(D,t),D=x(D,t);else if(Object.prototype.toString.apply(D)==="[object Array]"&&!u.returnObjectTrees&&!t.returnObjectTrees)D=D.join("\n"),D=S(D,t),D=x(D,t);else if(!u.returnObjectTrees&&!t.returnObjectTrees)D="key '"+h+":"+e+" ("+k+")' "+"returned a object instead of string.",p.log(D);else for(var P in D)D[P]=L(h+":"+e+"."+P,t);y=D}}y===undefined&&u.sendMissing&&(t.lng?O.postMissing(t.lng,h,e,f,l):O.postMissing(u.lng,h,e,f,l));var H=t.postProcess||u.postProcess;return y!==undefined&&H&&_[H]&&(y=_[H](y,e,t)),y===undefined&&(f=S(f,t),f=x(f,t)),y!==undefined?y:f}function A(){var e,t=[];typeof window!="undefined"&&(function(){var e=window.location.search.substring(1),n=e.split("&");for(var r=0;r<n.length;r++){var i=n[r].indexOf("=");if(i>0){var s=n[r].substring(0,i),o=n[r].substring(i+1);t[s]=o}}}(),t[u.detectLngQS]&&(e=t[u.detectLngQS]));if(!e&&typeof document!="undefined"&&u.useCookie){var n=p.cookie.read(u.cookieName);n&&(e=n)}return!e&&typeof navigator!="undefined"&&(e=navigator.language?navigator.language:navigator.userLanguage),e}Array.prototype.indexOf||(Array.prototype.indexOf=function(e){"use strict";if(this==null)throw new TypeError;var t=Object(this),n=t.length>>>0;if(n===0)return-1;var r=0;arguments.length>0&&(r=Number(arguments[1]),r!=r?r=0:r!=0&&r!=Infinity&&r!=-Infinity&&(r=(r>0||-1)*Math.floor(Math.abs(r))));if(r>=n)return-1;var i=r>=0?r:Math.max(n-Math.abs(r),0);for(;i<n;i++)if(i in t&&t[i]===e)return i;return-1});var e=this,t=e.jQuery,n={},r={},i,s=0,o=[];typeof module!="undefined"&&module.exports?module.exports=n:(t&&(t.i18n=t.i18n||n),e.i18n=e.i18n||n);var u={lng:undefined,load:"all",preload:[],lowerCaseLng:!1,returnObjectTrees:!1,fallbackLng:"dev",detectLngQS:"setLng",ns:"translation",nsseparator:":",keyseparator:".",selectorAttr:"data-i18n",debug:!1,resGetPath:"locales/__lng__/__ns__.json",resPostPath:"locales/add/__lng__/__ns__",getAsync:!0,postAsync:!0,resStore:undefined,useLocalStorage:!1,localStorageExpirationTime:6048e5,dynamicLoad:!1,sendMissing:!1,sendMissingTo:"fallback",sendType:"POST",interpolationPrefix:"__",interpolationSuffix:"__",reusePrefix:"$t(",reuseSuffix:")",pluralSuffix:"_plural",pluralNotFound:["plural_not_found",Math.random()].join(""),contextNotFound:["context_not_found",Math.random()].join(""),setJqueryExt:!0,defaultValueFromContent:!0,useDataAttrOptions:!1,cookieExpirationTime:undefined,useCookie:!0,cookieName:"i18next",postProcess:undefined},c={create:function(e,t,n){var r;if(n){var i=new Date;i.setTime(i.getTime()+n*60*1e3),r="; expires="+i.toGMTString()}else r="";document.cookie=e+"="+t+r+"; path=/"},read:function(e){var t=e+"=",n=document.cookie.split(";");for(var r=0;r<n.length;r++){var i=n[r];while(i.charAt(0)==" ")i=i.substring(1,i.length);if(i.indexOf(t)===0)return i.substring(t.length,i.length)}return null},remove:function(e){this.create(e,"",-1)}},h={create:function(e,t,n){},read:function(e){return null},remove:function(e){}},p={extend:t?t.extend:a,each:t?t.each:f,ajax:t?t.ajax:l,cookie:typeof document!="undefined"?c:h,detectLanguage:A,log:function(e){u.debug&&typeof console!="undefined"&&console.log(e)},toLanguages:function(e){var t=[];if(typeof e=="string"&&e.indexOf("-")>-1){var n=e.split("-");e=u.lowerCaseLng?n[0].toLowerCase()+"-"+n[1].toLowerCase():n[0].toLowerCase()+"-"+n[1].toUpperCase(),u.load!=="unspecific"&&t.push(e),u.load!=="current"&&t.push(n[0])}else t.push(e);return t.indexOf(u.fallbackLng)===-1&&u.fallbackLng&&t.push(u.fallbackLng),t},regexEscape:function(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}},O={load:function(e,t,n){t.useLocalStorage?O._loadLocal(e,t,function(r,i){var s=[];for(var o=0,u=e.length;o<u;o++)i[e[o]]||s.push(e[o]);s.length>0?O._fetch(s,t,function(e,t){p.extend(i,t),O._storeLocal(t),n(null,i)}):n(null,i)}):O._fetch(e,t,function(e,t){n(null,t)})},_loadLocal:function(e,t,n){var r={},i=(new Date).getTime();if(window.localStorage){var s=e.length;p.each(e,function(e,o){var u=window.localStorage.getItem("res_"+o);u&&(u=JSON.parse(u),u.i18nStamp&&u.i18nStamp+t.localStorageExpirationTime>i&&(r[o]=u)),s--,s===0&&n(null,r)})}},_storeLocal:function(e){if(window.localStorage)for(var t in e)e[t].i18nStamp=(new Date).getTime(),window.localStorage.setItem("res_"+t,JSON.stringify(e[t]));return},_fetch:function(e,t,n){var r=t.ns,i={};if(!t.dynamicLoad){var s=r.namespaces.length*e.length,o;p.each(r.namespaces,function(r,u){p.each(e,function(e,r){var a=function(e,t){e&&(o=o||[],o.push(e)),i[r]=i[r]||{},i[r][u]=t,s--,s===0&&n(o,i)};typeof t.customLoad=="function"?t.customLoad(r,u,t,a):O._fetchOne(r,u,t,a)})})}else{var u=S(t.resGetPath,{lng:e.join("+"),ns:r.namespaces.join("+")});p.ajax({url:u,success:function(e,t,r){p.log("loaded: "+u),n(null,e)},error:function(e,t,r){p.log("failed loading: "+u),n("failed loading resource.json error: "+r)},dataType:"json",async:t.getAsync})}},_fetchOne:function(e,t,n,r){var i=S(n.resGetPath,{lng:e,ns:t});p.ajax({url:i,success:function(e,t,n){p.log("loaded: "+i),r(null,e)},error:function(e,t,n){p.log("failed loading: "+i),r(n,{})},dataType:"json",async:n.getAsync})},postMissing:function(e,t,n,i,s){var o={};o[n]=i;var a=[];if(u.sendMissingTo==="fallback")a.push({lng:u.fallbackLng,url:S(u.resPostPath,{lng:u.fallbackLng,ns:t})});else if(u.sendMissingTo==="current")a.push({lng:e,url:S(u.resPostPath,{lng:e,ns:t})});else if(u.sendMissingTo==="all")for(var f=0,l=s.length;f<l;f++)a.push({lng:s[f],url:S(u.resPostPath,{lng:s[f],ns:t})});for(var c=0,h=a.length;c<h;c++){var d=a[c];p.ajax({url:d.url,type:u.sendType,data:o,success:function(e,s,o){p.log("posted missing key '"+n+"' to: "+d.url),r[d.lng][t][n]=i},error:function(e,t,r){p.log("failed posting missing key '"+n+"' to: "+d.url)},dataType:"json",async:u.postAsync})}}},M={rules:{ach:{name:"Acholi",numbers:[1,2],plurals:function(e){return Number(e>1)}},af:{name:"Afrikaans",numbers:[1,2],plurals:function(e){return Number(e!=1)}},ak:{name:"Akan",numbers:[1,2],plurals:function(e){return Number(e>1)}},am:{name:"Amharic",numbers:[1,2],plurals:function(e){return Number(e>1)}},an:{name:"Aragonese",numbers:[1,2],plurals:function(e){return Number(e!=1)}},ar:{name:"Arabic",numbers:[0,1,2,3,11,100],plurals:function(e){return Number(e===0?0:e==1?1:e==2?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5)}},arn:{name:"Mapudungun",numbers:[1,2],plurals:function(e){return Number(e>1)}},ast:{name:"Asturian",numbers:[1,2],plurals:function(e){return Number(e!=1)}},ay:{name:"AymarÃ¡",numbers:[1],plurals:function(e){return 0}},az:{name:"Azerbaijani",numbers:[1,2],plurals:function(e){return Number(e!=1)}},be:{name:"Belarusian",numbers:[1,2,5],plurals:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)}},bg:{name:"Bulgarian",numbers:[1,2],plurals:function(e){return Number(e!=1)}},bn:{name:"Bengali",numbers:[1,2],plurals:function(e){return Number(e!=1)}},bo:{name:"Tibetan",numbers:[1],plurals:function(e){return 0}},br:{name:"Breton",numbers:[1,2],plurals:function(e){return Number(e>1)}},bs:{name:"Bosnian",numbers:[1,2,5],plurals:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)}},ca:{name:"Catalan",numbers:[1,2],plurals:function(e){return Number(e!=1)}},cgg:{name:"Chiga",numbers:[1],plurals:function(e){return 0}},cs:{name:"Czech",numbers:[1,2,5],plurals:function(e){return Number(e==1?0:e>=2&&e<=4?1:2)}},csb:{name:"Kashubian",numbers:[1,2,5],plurals:function(e){return Number(e==1?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)}},cy:{name:"Welsh",numbers:[1,2,3,8],plurals:function(e){return Number(e==1?0:e==2?1:e!=8&&e!=11?2:3)}},da:{name:"Danish",numbers:[1,2],plurals:function(e){return Number(e!=1)}},de:{name:"German",numbers:[1,2],plurals:function(e){return Number(e!=1)}},dz:{name:"Dzongkha",numbers:[1],plurals:function(e){return 0}},el:{name:"Greek",numbers:[1,2],plurals:function(e){return Number(e!=1)}},en:{name:"English",numbers:[1,2],plurals:function(e){return Number(e!=1)}},eo:{name:"Esperanto",numbers:[1,2],plurals:function(e){return Number(e!=1)}},es:{name:"Spanish",numbers:[1,2],plurals:function(e){return Number(e!=1)}},es_ar:{name:"Argentinean Spanish",numbers:[1,2],plurals:function(e){return Number(e!=1)}},et:{name:"Estonian",numbers:[1,2],plurals:function(e){return Number(e!=1)}},eu:{name:"Basque",numbers:[1,2],plurals:function(e){return Number(e!=1)}},fa:{name:"Persian",numbers:[1],plurals:function(e){return 0}},fi:{name:"Finnish",numbers:[1,2],plurals:function(e){return Number(e!=1)}},fil:{name:"Filipino",numbers:[1,2],plurals:function(e){return Number(e>1)}},fo:{name:"Faroese",numbers:[1,2],plurals:function(e){return Number(e!=1)}},fr:{name:"French",numbers:[1,2],plurals:function(e){return Number(e>1)}},fur:{name:"Friulian",numbers:[1,2],plurals:function(e){return Number(e!=1)}},fy:{name:"Frisian",numbers:[1,2],plurals:function(e){return Number(e!=1)}},ga:{name:"Irish",numbers:[1,2,3,7,11],plurals:function(e){return Number(e==1?0:e==2?1:e<7?2:e<11?3:4)}},gd:{name:"Scottish Gaelic",numbers:[1,2,3,20],plurals:function(e){return Number(e==1||e==11?0:e==2||e==12?1:e>2&&e<20?2:3)}},gl:{name:"Galician",numbers:[1,2],plurals:function(e){return Number(e!=1)}},gu:{name:"Gujarati",numbers:[1,2],plurals:function(e){return Number(e!=1)}},gun:{name:"Gun",numbers:[1,2],plurals:function(e){return Number(e>1)}},ha:{name:"Hausa",numbers:[1,2],plurals:function(e){return Number(e!=1)}},he:{name:"Hebrew",numbers:[1,2],plurals:function(e){return Number(e!=1)}},hi:{name:"Hindi",numbers:[1,2],plurals:function(e){return Number(e!=1)}},hr:{name:"Croatian",numbers:[1,2,5],plurals:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)}},hu:{name:"Hungarian",numbers:[1,2],plurals:function(e){return Number(e!=1)}},hy:{name:"Armenian",numbers:[1,2],plurals:function(e){return Number(e!=1)}},ia:{name:"Interlingua",numbers:[1,2],plurals:function(e){return Number(e!=1)}},id:{name:"Indonesian",numbers:[1],plurals:function(e){return 0}},is:{name:"Icelandic",numbers:[1,2],plurals:function(e){return Number(e%10!=1||e%100==11)}},it:{name:"Italian",numbers:[1,2],plurals:function(e){return Number(e!=1)}},ja:{name:"Japanese",numbers:[1],plurals:function(e){return 0}},jbo:{name:"Lojban",numbers:[1],plurals:function(e){return 0}},jv:{name:"Javanese",numbers:[0,1],plurals:function(e){return Number(e!==0)}},ka:{name:"Georgian",numbers:[1],plurals:function(e){return 0}},kk:{name:"Kazakh",numbers:[1],plurals:function(e){return 0}},km:{name:"Khmer",numbers:[1],plurals:function(e){return 0}},kn:{name:"Kannada",numbers:[1,2],plurals:function(e){return Number(e!=1)}},ko:{name:"Korean",numbers:[1],plurals:function(e){return 0}},ku:{name:"Kurdish",numbers:[1,2],plurals:function(e){return Number(e!=1)}},kw:{name:"Cornish",numbers:[1,2,3,4],plurals:function(e){return Number(e==1?0:e==2?1:e==3?2:3)}},ky:{name:"Kyrgyz",numbers:[1],plurals:function(e){return 0}},lb:{name:"Letzeburgesch",numbers:[1,2],plurals:function(e){return Number(e!=1)}},ln:{name:"Lingala",numbers:[1,2],plurals:function(e){return Number(e>1)}},lo:{name:"Lao",numbers:[1],plurals:function(e){return 0}},lt:{name:"Lithuanian",numbers:[1,2,10],plurals:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2)}},lv:{name:"Latvian",numbers:[0,1,2],plurals:function(e){return Number(e%10==1&&e%100!=11?0:e!==0?1:2)}},mai:{name:"Maithili",numbers:[1,2],plurals:function(e){return Number(e!=1)}},mfe:{name:"Mauritian Creole",numbers:[1,2],plurals:function(e){return Number(e>1)}},mg:{name:"Malagasy",numbers:[1,2],plurals:function(e){return Number(e>1)}},mi:{name:"Maori",numbers:[1,2],plurals:function(e){return Number(e>1)}},mk:{name:"Macedonian",numbers:[1,2],plurals:function(e){return Number(e==1||e%10==1?0:1)}},ml:{name:"Malayalam",numbers:[1,2],plurals:function(e){return Number(e!=1)}},mn:{name:"Mongolian",numbers:[1,2],plurals:function(e){return Number(e!=1)}},mnk:{name:"Mandinka",numbers:[0,1,2],plurals:function(e){return Number(e==1?1:2)}},mr:{name:"Marathi",numbers:[1,2],plurals:function(e){return Number(e!=1)}},ms:{name:"Malay",numbers:[1],plurals:function(e){return 0}},mt:{name:"Maltese",numbers:[1,2,11,20],plurals:function(e){return Number(e==1?0:e===0||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3)}},nah:{name:"Nahuatl",numbers:[1,2],plurals:function(e){return Number(e!=1)}},nap:{name:"Neapolitan",numbers:[1,2],plurals:function(e){return Number(e!=1)}},nb:{name:"Norwegian Bokmal",numbers:[1,2],plurals:function(e){return Number(e!=1)}},ne:{name:"Nepali",numbers:[1,2],plurals:function(e){return Number(e!=1)}},nl:{name:"Dutch",numbers:[1,2],plurals:function(e){return Number(e!=1)}},nn:{name:"Norwegian Nynorsk",numbers:[1,2],plurals:function(e){return Number(e!=1)}},no:{name:"Norwegian",numbers:[1,2],plurals:function(e){return Number(e!=1)}},nso:{name:"Northern Sotho",numbers:[1,2],plurals:function(e){return Number(e!=1)}},oc:{name:"Occitan",numbers:[1,2],plurals:function(e){return Number(e>1)}},or:{name:"Oriya",numbers:[2,1],plurals:function(e){return Number(e!=1)}},pa:{name:"Punjabi",numbers:[1,2],plurals:function(e){return Number(e!=1)}},pap:{name:"Papiamento",numbers:[1,2],plurals:function(e){return Number(e!=1)}},pl:{name:"Polish",numbers:[1,2,5],plurals:function(e){return Number(e==1?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)}},pms:{name:"Piemontese",numbers:[1,2],plurals:function(e){return Number(e!=1)}},ps:{name:"Pashto",numbers:[1,2],plurals:function(e){return Number(e!=1)}},pt:{name:"Portuguese",numbers:[1,2],plurals:function(e){return Number(e!=1)}},pt_br:{name:"Brazilian Portuguese",numbers:[1,2],plurals:function(e){return Number(e!=1)}},rm:{name:"Romansh",numbers:[1,2],plurals:function(e){return Number(e!=1)}},ro:{name:"Romanian",numbers:[1,2,20],plurals:function(e){return Number(e==1?0:e===0||e%100>0&&e%100<20?1:2)}},ru:{name:"Russian",numbers:[1,2,5],plurals:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)}},sah:{name:"Yakut",numbers:[1],plurals:function(e){return 0}},sco:{name:"Scots",numbers:[1,2],plurals:function(e){return Number(e!=1)}},se:{name:"Northern Sami",numbers:[1,2],plurals:function(e){return Number(e!=1)}},si:{name:"Sinhala",numbers:[1,2],plurals:function(e){return Number(e!=1)}},sk:{name:"Slovak",numbers:[1,2,5],plurals:function(e){return Number(e==1?0:e>=2&&e<=4?1:2)}},sl:{name:"Slovenian",numbers:[5,1,2,3],plurals:function(e){return Number(e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0)}},so:{name:"Somali",numbers:[1,2],plurals:function(e){return Number(e!=1)}},son:{name:"Songhay",numbers:[1,2],plurals:function(e){return Number(e!=1)}},sq:{name:"Albanian",numbers:[1,2],plurals:function(e){return Number(e!=1)}},sr:{name:"Serbian",numbers:[1,2,5],plurals:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)}},su:{name:"Sundanese",numbers:[1],plurals:function(e){return 0}},sv:{name:"Swedish",numbers:[1,2],plurals:function(e){return Number(e!=1)}},sw:{name:"Swahili",numbers:[1,2],plurals:function(e){return Number(e!=1)}},ta:{name:"Tamil",numbers:[1,2],plurals:function(e){return Number(e!=1)}},te:{name:"Telugu",numbers:[1,2],plurals:function(e){return Number(e!=1)}},tg:{name:"Tajik",numbers:[1,2],plurals:function(e){return Number(e>1)}},th:{name:"Thai",numbers:[1],plurals:function(e){return 0}},ti:{name:"Tigrinya",numbers:[1,2],plurals:function(e){return Number(e>1)}},tk:{name:"Turkmen",numbers:[1,2],plurals:function(e){return Number(e!=1)}},tr:{name:"Turkish",numbers:[1,2],plurals:function(e){return Number(e>1)}},tt:{name:"Tatar",numbers:[1],plurals:function(e){return 0}},ug:{name:"Uyghur",numbers:[1],plurals:function(e){return 0}},uk:{name:"Ukrainian",numbers:[1,2,5],plurals:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)}},ur:{name:"Urdu",numbers:[1,2],plurals:function(e){return Number(e!=1)}},uz:{name:"Uzbek",numbers:[1,2],plurals:function(e){return Number(e>1)}},vi:{name:"Vietnamese",numbers:[1],plurals:function(e){return 0}},wa:{name:"Walloon",numbers:[1,2],plurals:function(e){return Number(e>1)}},wo:{name:"Wolof",numbers:[1],plurals:function(e){return 0}},yo:{name:"Yoruba",numbers:[1,2],plurals:function(e){return Number(e!=1)}},zh:{name:"Chinese",numbers:[1],plurals:function(e){return 0}}},addRule:function(e,t){M.rules[e]=t},setCurrentLng:function(e){if(!M.currentRule||M.currentRule.lng!==e){var t=e.split("-");M.currentRule={lng:e,rule:M.rules[t[0]]}}},get:function(e,t){function r(t,n){var r;M.currentRule&&M.currentRule.lng===e?r=M.currentRule.rule:r=M.rules[t];if(r){var i=r.plurals(n),s=r.numbers[i];return r.numbers.length===2&&r.numbers[0]===1&&(s===2?s=-1:s===1&&(s=1)),s}return n===1?"1":"-1"}var n=e.split("-");return r(n[0],t)}},_={},D=function(e,t){_[e]=t},P=function(){function e(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}function t(e,t){for(var n=[];t>0;n[--t]=e);return n.join("")}var n=function(){return n.cache.hasOwnProperty(arguments[0])||(n.cache[arguments[0]]=n.parse(arguments[0])),n.format.call(null,n.cache[arguments[0]],arguments)};return n.format=function(n,r){var i=1,s=n.length,o="",u,a=[],f,l,c,h,p,d;for(f=0;f<s;f++){o=e(n[f]);if(o==="string")a.push(n[f]);else if(o==="array"){c=n[f];if(c[2]){u=r[i];for(l=0;l<c[2].length;l++){if(!u.hasOwnProperty(c[2][l]))throw P('[sprintf] property "%s" does not exist',c[2][l]);u=u[c[2][l]]}}else c[1]?u=r[c[1]]:u=r[i++];if(/[^s]/.test(c[8])&&e(u)!="number")throw P("[sprintf] expecting number but found %s",e(u));switch(c[8]){case"b":u=u.toString(2);break;case"c":u=String.fromCharCode(u);break;case"d":u=parseInt(u,10);break;case"e":u=c[7]?u.toExponential(c[7]):u.toExponential();break;case"f":u=c[7]?parseFloat(u).toFixed(c[7]):parseFloat(u);break;case"o":u=u.toString(8);break;case"s":u=(u=String(u))&&c[7]?u.substring(0,c[7]):u;break;case"u":u=Math.abs(u);break;case"x":u=u.toString(16);break;case"X":u=u.toString(16).toUpperCase()}u=/[def]/.test(c[8])&&c[3]&&u>=0?"+"+u:u,p=c[4]?c[4]=="0"?"0":c[4].charAt(1):" ",d=c[6]-String(u).length,h=c[6]?t(p,d):"",a.push(c[5]?u+h:h+u)}}return a.join("")},n.cache={},n.parse=function(e){var t=e,n=[],r=[],i=0;while(t){if((n=/^[^\x25]+/.exec(t))!==null)r.push(n[0]);else if((n=/^\x25{2}/.exec(t))!==null)r.push("%");else{if((n=/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(t))===null)throw"[sprintf] huh?";if(n[2]){i|=1;var s=[],o=n[2],u=[];if((u=/^([a-z_][a-z_\d]*)/i.exec(o))===null)throw"[sprintf] huh?";s.push(u[1]);while((o=o.substring(u[0].length))!=="")if((u=/^\.([a-z_][a-z_\d]*)/i.exec(o))!==null)s.push(u[1]);else{if((u=/^\[(\d+)\]/.exec(o))===null)throw"[sprintf] huh?";s.push(u[1])}n[2]=s}else i|=2;if(i===3)throw"[sprintf] mixing positional and named placeholders is not (yet) supported";r.push(n)}t=t.substring(n[0].length)}return r},n}(),H=function(e,t){return t.unshift(e),P.apply(null,t)};D("sprintf",function(e,t,n){return n.sprintf?Object.prototype.toString.apply(n.sprintf)==="[object Array]"?H(e,n.sprintf):typeof n.sprintf=="object"?P(e,n.sprintf):e:e}),n.init=d,n.setLng=b,n.preload=v,n.loadNamespace=g,n.loadNamespaces=y,n.setDefaultNamespace=m,n.t=C,n.translate=C,n.detectLanguage=p.detectLanguage,n.pluralExtensions=M,n.sync=O,n.functions=p,n.lng=w,n.addPostProcessor=D,n.options=u})();