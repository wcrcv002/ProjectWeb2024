(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ic(t,e){const n=new Set(t.split(","));return e?r=>n.has(r.toLowerCase()):r=>n.has(r)}const le={},Qn=[],tt=()=>{},Hg=()=>!1,qi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),oc=t=>t.startsWith("onUpdate:"),Fe=Object.assign,ac=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},zg=Object.prototype.hasOwnProperty,Y=(t,e)=>zg.call(t,e),q=Array.isArray,Jn=t=>Hi(t)==="[object Map]",jh=t=>Hi(t)==="[object Set]",K=t=>typeof t=="function",Te=t=>typeof t=="string",_r=t=>typeof t=="symbol",de=t=>t!==null&&typeof t=="object",$h=t=>(de(t)||K(t))&&K(t.then)&&K(t.catch),qh=Object.prototype.toString,Hi=t=>qh.call(t),Kg=t=>Hi(t).slice(8,-1),Hh=t=>Hi(t)==="[object Object]",cc=t=>Te(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Fr=ic(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),zi=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Wg=/-(\w)/g,sr=zi(t=>t.replace(Wg,(e,n)=>n?n.toUpperCase():"")),Gg=/\B([A-Z])/g,yr=zi(t=>t.replace(Gg,"-$1").toLowerCase()),zh=zi(t=>t.charAt(0).toUpperCase()+t.slice(1)),Uo=zi(t=>t?`on${zh(t)}`:""),on=(t,e)=>!Object.is(t,e),Bo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},mi=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Qg=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ql;const Kh=()=>ql||(ql=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function lc(t){if(q(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Te(r)?Zg(r):lc(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Te(t)||de(t))return t}const Jg=/;(?![^(]*\))/g,Yg=/:([^]+)/,Xg=/\/\*[^]*?\*\//g;function Zg(t){const e={};return t.replace(Xg,"").split(Jg).forEach(n=>{if(n){const r=n.split(Yg);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function uc(t){let e="";if(Te(t))e=t;else if(q(t))for(let n=0;n<t.length;n++){const r=uc(t[n]);r&&(e+=r+" ")}else if(de(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const em="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",tm=ic(em);function Wh(t){return!!t||t===""}const pt=t=>Te(t)?t:t==null?"":q(t)||de(t)&&(t.toString===qh||!K(t.toString))?JSON.stringify(t,Gh,2):String(t),Gh=(t,e)=>e&&e.__v_isRef?Gh(t,e.value):Jn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[jo(r,i)+" =>"]=s,n),{})}:jh(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>jo(n))}:_r(e)?jo(e):de(e)&&!q(e)&&!Hh(e)?String(e):e,jo=(t,e="")=>{var n;return _r(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let it;class nm{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=it,!e&&it&&(this.index=(it.scopes||(it.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=it;try{return it=this,e()}finally{it=n}}}on(){it=this}off(){it=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function rm(t,e=it){e&&e.active&&e.effects.push(t)}function sm(){return it}let An;class hc{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,rm(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,xn();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(im(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Mn()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Zt,n=An;try{return Zt=!0,An=this,this._runnings++,Hl(this),this.fn()}finally{zl(this),this._runnings--,An=n,Zt=e}}stop(){var e;this.active&&(Hl(this),zl(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function im(t){return t.value}function Hl(t){t._trackId++,t._depsLength=0}function zl(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Qh(t.deps[e],t);t.deps.length=t._depsLength}}function Qh(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Zt=!0,_a=0;const Jh=[];function xn(){Jh.push(Zt),Zt=!1}function Mn(){const t=Jh.pop();Zt=t===void 0?!0:t}function dc(){_a++}function fc(){for(_a--;!_a&&ya.length;)ya.shift()()}function Yh(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Qh(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const ya=[];function Xh(t,e,n){dc();for(const r of t.keys()){let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&ya.push(r.scheduler)))}fc()}const Zh=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},va=new WeakMap,Rn=Symbol(""),Ea=Symbol("");function We(t,e,n){if(Zt&&An){let r=va.get(t);r||va.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Zh(()=>r.delete(n))),Yh(An,s)}}function Mt(t,e,n,r,s,i){const o=va.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&q(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||!_r(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":q(t)?cc(n)&&a.push(o.get("length")):(a.push(o.get(Rn)),Jn(t)&&a.push(o.get(Ea)));break;case"delete":q(t)||(a.push(o.get(Rn)),Jn(t)&&a.push(o.get(Ea)));break;case"set":Jn(t)&&a.push(o.get(Rn));break}dc();for(const c of a)c&&Xh(c,4);fc()}const om=ic("__proto__,__v_isRef,__isVue"),ed=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(_r)),Kl=am();function am(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=te(this);for(let i=0,o=this.length;i<o;i++)We(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(te)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){xn(),dc();const r=te(this)[e].apply(this,n);return fc(),Mn(),r}}),t}function cm(t){const e=te(this);return We(e,"has",t),e.hasOwnProperty(t)}class td{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Tm:id:i?sd:rd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=q(e);if(!s){if(o&&Y(Kl,n))return Reflect.get(Kl,n,r);if(n==="hasOwnProperty")return cm}const a=Reflect.get(e,n,r);return(_r(n)?ed.has(n):om(n))||(s||We(e,"get",n),i)?a:Ge(a)?o&&cc(n)?a:a.value:de(a)?s?od(a):mc(a):a}}class nd extends td{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=ir(i);if(!_i(r)&&!ir(r)&&(i=te(i),r=te(r)),!q(e)&&Ge(i)&&!Ge(r))return c?!1:(i.value=r,!0)}const o=q(e)&&cc(n)?Number(n)<e.length:Y(e,n),a=Reflect.set(e,n,r,s);return e===te(s)&&(o?on(r,i)&&Mt(e,"set",n,r):Mt(e,"add",n,r)),a}deleteProperty(e,n){const r=Y(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Mt(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!_r(n)||!ed.has(n))&&We(e,"has",n),r}ownKeys(e){return We(e,"iterate",q(e)?"length":Rn),Reflect.ownKeys(e)}}class lm extends td{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const um=new nd,hm=new lm,dm=new nd(!0),pc=t=>t,Ki=t=>Reflect.getPrototypeOf(t);function js(t,e,n=!1,r=!1){t=t.__v_raw;const s=te(t),i=te(e);n||(on(e,i)&&We(s,"get",e),We(s,"get",i));const{has:o}=Ki(s),a=r?pc:n?yc:Qr;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function $s(t,e=!1){const n=this.__v_raw,r=te(n),s=te(t);return e||(on(t,s)&&We(r,"has",t),We(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function qs(t,e=!1){return t=t.__v_raw,!e&&We(te(t),"iterate",Rn),Reflect.get(t,"size",t)}function Wl(t){t=te(t);const e=te(this);return Ki(e).has.call(e,t)||(e.add(t),Mt(e,"add",t,t)),this}function Gl(t,e){e=te(e);const n=te(this),{has:r,get:s}=Ki(n);let i=r.call(n,t);i||(t=te(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?on(e,o)&&Mt(n,"set",t,e):Mt(n,"add",t,e),this}function Ql(t){const e=te(this),{has:n,get:r}=Ki(e);let s=n.call(e,t);s||(t=te(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Mt(e,"delete",t,void 0),i}function Jl(){const t=te(this),e=t.size!==0,n=t.clear();return e&&Mt(t,"clear",void 0,void 0),n}function Hs(t,e){return function(r,s){const i=this,o=i.__v_raw,a=te(o),c=e?pc:t?yc:Qr;return!t&&We(a,"iterate",Rn),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function zs(t,e,n){return function(...r){const s=this.__v_raw,i=te(s),o=Jn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?pc:e?yc:Qr;return!e&&We(i,"iterate",c?Ea:Rn),{next(){const{value:d,done:p}=l.next();return p?{value:d,done:p}:{value:a?[u(d[0]),u(d[1])]:u(d),done:p}},[Symbol.iterator](){return this}}}}function Ht(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function fm(){const t={get(i){return js(this,i)},get size(){return qs(this)},has:$s,add:Wl,set:Gl,delete:Ql,clear:Jl,forEach:Hs(!1,!1)},e={get(i){return js(this,i,!1,!0)},get size(){return qs(this)},has:$s,add:Wl,set:Gl,delete:Ql,clear:Jl,forEach:Hs(!1,!0)},n={get(i){return js(this,i,!0)},get size(){return qs(this,!0)},has(i){return $s.call(this,i,!0)},add:Ht("add"),set:Ht("set"),delete:Ht("delete"),clear:Ht("clear"),forEach:Hs(!0,!1)},r={get(i){return js(this,i,!0,!0)},get size(){return qs(this,!0)},has(i){return $s.call(this,i,!0)},add:Ht("add"),set:Ht("set"),delete:Ht("delete"),clear:Ht("clear"),forEach:Hs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=zs(i,!1,!1),n[i]=zs(i,!0,!1),e[i]=zs(i,!1,!0),r[i]=zs(i,!0,!0)}),[t,n,e,r]}const[pm,gm,mm,_m]=fm();function gc(t,e){const n=e?t?_m:mm:t?gm:pm;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Y(n,s)&&s in r?n:r,s,i)}const ym={get:gc(!1,!1)},vm={get:gc(!1,!0)},Em={get:gc(!0,!1)},rd=new WeakMap,sd=new WeakMap,id=new WeakMap,Tm=new WeakMap;function Im(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function wm(t){return t.__v_skip||!Object.isExtensible(t)?0:Im(Kg(t))}function mc(t){return ir(t)?t:_c(t,!1,um,ym,rd)}function Am(t){return _c(t,!1,dm,vm,sd)}function od(t){return _c(t,!0,hm,Em,id)}function _c(t,e,n,r,s){if(!de(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=wm(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Yn(t){return ir(t)?Yn(t.__v_raw):!!(t&&t.__v_isReactive)}function ir(t){return!!(t&&t.__v_isReadonly)}function _i(t){return!!(t&&t.__v_isShallow)}function ad(t){return Yn(t)||ir(t)}function te(t){const e=t&&t.__v_raw;return e?te(e):t}function cd(t){return Object.isExtensible(t)&&mi(t,"__v_skip",!0),t}const Qr=t=>de(t)?mc(t):t,yc=t=>de(t)?od(t):t;class ld{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new hc(()=>e(this._value),()=>ri(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=te(this);return(!e._cacheable||e.effect.dirty)&&on(e._value,e._value=e.effect.run())&&ri(e,4),ud(e),e.effect._dirtyLevel>=2&&ri(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Rm(t,e,n=!1){let r,s;const i=K(t);return i?(r=t,s=tt):(r=t.get,s=t.set),new ld(r,s,i||!s,n)}function ud(t){var e;Zt&&An&&(t=te(t),Yh(An,(e=t.dep)!=null?e:t.dep=Zh(()=>t.dep=void 0,t instanceof ld?t:void 0)))}function ri(t,e=4,n){t=te(t);const r=t.dep;r&&Xh(r,e)}function Ge(t){return!!(t&&t.__v_isRef===!0)}function $o(t){return Sm(t,!1)}function Sm(t,e){return Ge(t)?t:new Pm(t,e)}class Pm{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:te(e),this._value=n?e:Qr(e)}get value(){return ud(this),this._value}set value(e){const n=this.__v_isShallow||_i(e)||ir(e);e=n?e:te(e),on(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Qr(e),ri(this,4))}}function Cm(t){return Ge(t)?t.value:t}const bm={get:(t,e,n)=>Cm(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ge(s)&&!Ge(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function hd(t){return Yn(t)?t:new Proxy(t,bm)}/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function en(t,e,n,r){try{return r?t(...r):t()}catch(s){Wi(s,e,n)}}function ct(t,e,n,r){if(K(t)){const i=en(t,e,n,r);return i&&$h(i)&&i.catch(o=>{Wi(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(ct(t[i],e,n,r));return s}function Wi(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){en(c,null,10,[t,o,a]);return}}Dm(t,n,s,r)}function Dm(t,e,n,r=!0){console.error(t)}let Jr=!1,Ta=!1;const xe=[];let _t=0;const Xn=[];let Kt=null,_n=0;const dd=Promise.resolve();let vc=null;function km(t){const e=vc||dd;return t?e.then(this?t.bind(this):t):e}function Vm(t){let e=_t+1,n=xe.length;for(;e<n;){const r=e+n>>>1,s=xe[r],i=Yr(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function Ec(t){(!xe.length||!xe.includes(t,Jr&&t.allowRecurse?_t+1:_t))&&(t.id==null?xe.push(t):xe.splice(Vm(t.id),0,t),fd())}function fd(){!Jr&&!Ta&&(Ta=!0,vc=dd.then(gd))}function Nm(t){const e=xe.indexOf(t);e>_t&&xe.splice(e,1)}function Om(t){q(t)?Xn.push(...t):(!Kt||!Kt.includes(t,t.allowRecurse?_n+1:_n))&&Xn.push(t),fd()}function Yl(t,e,n=Jr?_t+1:0){for(;n<xe.length;n++){const r=xe[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;xe.splice(n,1),n--,r()}}}function pd(t){if(Xn.length){const e=[...new Set(Xn)].sort((n,r)=>Yr(n)-Yr(r));if(Xn.length=0,Kt){Kt.push(...e);return}for(Kt=e,_n=0;_n<Kt.length;_n++)Kt[_n]();Kt=null,_n=0}}const Yr=t=>t.id==null?1/0:t.id,xm=(t,e)=>{const n=Yr(t)-Yr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function gd(t){Ta=!1,Jr=!0,xe.sort(xm);try{for(_t=0;_t<xe.length;_t++){const e=xe[_t];e&&e.active!==!1&&en(e,null,14)}}finally{_t=0,xe.length=0,pd(),Jr=!1,vc=null,(xe.length||Xn.length)&&gd()}}function Mm(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||le;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:p}=r[u]||le;p&&(s=n.map(g=>Te(g)?g.trim():g)),d&&(s=n.map(Qg))}let a,c=r[a=Uo(e)]||r[a=Uo(sr(e))];!c&&i&&(c=r[a=Uo(yr(e))]),c&&ct(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ct(l,t,6,s)}}function md(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!K(t)){const c=l=>{const u=md(l,e,!0);u&&(a=!0,Fe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(de(t)&&r.set(t,null),null):(q(i)?i.forEach(c=>o[c]=null):Fe(o,i),de(t)&&r.set(t,o),o)}function Gi(t,e){return!t||!qi(e)?!1:(e=e.slice(2).replace(/Once$/,""),Y(t,e[0].toLowerCase()+e.slice(1))||Y(t,yr(e))||Y(t,e))}let vt=null,Qi=null;function yi(t){const e=vt;return vt=t,Qi=t&&t.type.__scopeId||null,e}function Lm(t){Qi=t}function Fm(){Qi=null}function Um(t,e=vt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&au(-1);const i=yi(e);let o;try{o=t(...s)}finally{yi(i),r._d&&au(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function qo(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:d,data:p,setupState:g,ctx:k,inheritAttrs:C}=t;let b,F;const X=yi(t);try{if(n.shapeFlag&4){const Z=s||r,ge=Z;b=mt(u.call(ge,Z,d,i,g,p,k)),F=c}else{const Z=e;b=mt(Z.length>1?Z(i,{attrs:c,slots:a,emit:l}):Z(i,null)),F=e.props?c:Bm(c)}}catch(Z){jr.length=0,Wi(Z,t,1),b=nt(Cn)}let U=b;if(F&&C!==!1){const Z=Object.keys(F),{shapeFlag:ge}=U;Z.length&&ge&7&&(o&&Z.some(oc)&&(F=jm(F,o)),U=or(U,F))}return n.dirs&&(U=or(U),U.dirs=U.dirs?U.dirs.concat(n.dirs):n.dirs),n.transition&&(U.transition=n.transition),b=U,yi(X),b}const Bm=t=>{let e;for(const n in t)(n==="class"||n==="style"||qi(n))&&((e||(e={}))[n]=t[n]);return e},jm=(t,e)=>{const n={};for(const r in t)(!oc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function $m(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Xl(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const p=u[d];if(o[p]!==r[p]&&!Gi(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Xl(r,o,l):!0:!!o;return!1}function Xl(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Gi(n,i))return!0}return!1}function qm({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Hm=Symbol.for("v-ndc"),zm=t=>t.__isSuspense;function Km(t,e){e&&e.pendingBranch?q(t)?e.effects.push(...t):e.effects.push(t):Om(t)}const Wm=Symbol.for("v-scx"),Gm=()=>ii(Wm),Ks={};function Ho(t,e,n){return _d(t,e,n)}function _d(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=le){if(e&&i){const z=e;e=(...Se)=>{z(...Se),ge()}}const c=qe,l=z=>r===!0?z:Kn(z,r===!1?1:void 0);let u,d=!1,p=!1;if(Ge(t)?(u=()=>t.value,d=_i(t)):Yn(t)?(u=()=>l(t),d=!0):q(t)?(p=!0,d=t.some(z=>Yn(z)||_i(z)),u=()=>t.map(z=>{if(Ge(z))return z.value;if(Yn(z))return l(z);if(K(z))return en(z,c,2)})):K(t)?e?u=()=>en(t,c,2):u=()=>(g&&g(),ct(t,c,3,[k])):u=tt,e&&r){const z=u;u=()=>Kn(z())}let g,k=z=>{g=U.onStop=()=>{en(z,c,4),g=U.onStop=void 0}},C;if(Zi)if(k=tt,e?n&&ct(e,c,3,[u(),p?[]:void 0,k]):u(),s==="sync"){const z=Gm();C=z.__watcherHandles||(z.__watcherHandles=[])}else return tt;let b=p?new Array(t.length).fill(Ks):Ks;const F=()=>{if(!(!U.active||!U.dirty))if(e){const z=U.run();(r||d||(p?z.some((Se,Qe)=>on(Se,b[Qe])):on(z,b)))&&(g&&g(),ct(e,c,3,[z,b===Ks?void 0:p&&b[0]===Ks?[]:b,k]),b=z)}else U.run()};F.allowRecurse=!!e;let X;s==="sync"?X=F:s==="post"?X=()=>ze(F,c&&c.suspense):(F.pre=!0,c&&(F.id=c.uid),X=()=>Ec(F));const U=new hc(u,tt,X),Z=sm(),ge=()=>{U.stop(),Z&&ac(Z.effects,U)};return e?n?F():b=U.run():s==="post"?ze(U.run.bind(U),c&&c.suspense):U.run(),C&&C.push(ge),ge}function Qm(t,e,n){const r=this.proxy,s=Te(t)?t.includes(".")?yd(r,t):()=>r[t]:t.bind(r,r);let i;K(e)?i=e:(i=e.handler,n=e);const o=_s(this),a=_d(s,i.bind(r),n);return o(),a}function yd(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Kn(t,e,n=0,r){if(!de(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(r=r||new Set,r.has(t))return t;if(r.add(t),Ge(t))Kn(t.value,e,n,r);else if(q(t))for(let s=0;s<t.length;s++)Kn(t[s],e,n,r);else if(jh(t)||Jn(t))t.forEach(s=>{Kn(s,e,n,r)});else if(Hh(t))for(const s in t)Kn(t[s],e,n,r);return t}function pn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(xn(),ct(c,n,8,[t.el,a,t,e]),Mn())}}const si=t=>!!t.type.__asyncLoader,vd=t=>t.type.__isKeepAlive;function Jm(t,e){Ed(t,"a",e)}function Ym(t,e){Ed(t,"da",e)}function Ed(t,e,n=qe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ji(e,r,n),n){let s=n.parent;for(;s&&s.parent;)vd(s.parent.vnode)&&Xm(r,e,n,s),s=s.parent}}function Xm(t,e,n,r){const s=Ji(e,t,r,!0);Id(()=>{ac(r[e],s)},n)}function Ji(t,e,n=qe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;xn();const a=_s(n),c=ct(e,n,t,o);return a(),Mn(),c});return r?s.unshift(i):s.push(i),i}}const $t=t=>(e,n=qe)=>(!Zi||t==="sp")&&Ji(t,(...r)=>e(...r),n),Zm=$t("bm"),Td=$t("m"),e_=$t("bu"),t_=$t("u"),n_=$t("bum"),Id=$t("um"),r_=$t("sp"),s_=$t("rtg"),i_=$t("rtc");function o_(t,e=qe){Ji("ec",t,e)}function a_(t,e,n,r){let s;const i=n&&n[r];if(q(t)||Te(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(de(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const Ia=t=>t?Od(t)?Ac(t)||t.proxy:Ia(t.parent):null,Ur=Fe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ia(t.parent),$root:t=>Ia(t.root),$emit:t=>t.emit,$options:t=>Tc(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Ec(t.update)}),$nextTick:t=>t.n||(t.n=km.bind(t.proxy)),$watch:t=>Qm.bind(t)}),zo=(t,e)=>t!==le&&!t.__isScriptSetup&&Y(t,e),c_={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(zo(r,e))return o[e]=1,r[e];if(s!==le&&Y(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&Y(l,e))return o[e]=3,i[e];if(n!==le&&Y(n,e))return o[e]=4,n[e];wa&&(o[e]=0)}}const u=Ur[e];let d,p;if(u)return e==="$attrs"&&We(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==le&&Y(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,Y(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return zo(s,e)?(s[e]=n,!0):r!==le&&Y(r,e)?(r[e]=n,!0):Y(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==le&&Y(t,o)||zo(e,o)||(a=i[0])&&Y(a,o)||Y(r,o)||Y(Ur,o)||Y(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Y(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Zl(t){return q(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let wa=!0;function l_(t){const e=Tc(t),n=t.proxy,r=t.ctx;wa=!1,e.beforeCreate&&eu(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:d,mounted:p,beforeUpdate:g,updated:k,activated:C,deactivated:b,beforeDestroy:F,beforeUnmount:X,destroyed:U,unmounted:Z,render:ge,renderTracked:z,renderTriggered:Se,errorCaptured:Qe,serverPrefetch:Dt,expose:Xe,inheritAttrs:Pr,components:Ls,directives:Fs,filters:xo}=e;if(l&&u_(l,r,null),o)for(const he in o){const se=o[he];K(se)&&(r[he]=se.bind(n))}if(s){const he=s.call(n,n);de(he)&&(t.data=mc(he))}if(wa=!0,i)for(const he in i){const se=i[he],dn=K(se)?se.bind(n,n):K(se.get)?se.get.bind(n,n):tt,Us=!K(se)&&K(se.set)?se.set.bind(n):tt,fn=$_({get:dn,set:Us});Object.defineProperty(r,he,{enumerable:!0,configurable:!0,get:()=>fn.value,set:ht=>fn.value=ht})}if(a)for(const he in a)wd(a[he],r,n,he);if(c){const he=K(c)?c.call(n):c;Reflect.ownKeys(he).forEach(se=>{m_(se,he[se])})}u&&eu(u,t,"c");function Be(he,se){q(se)?se.forEach(dn=>he(dn.bind(n))):se&&he(se.bind(n))}if(Be(Zm,d),Be(Td,p),Be(e_,g),Be(t_,k),Be(Jm,C),Be(Ym,b),Be(o_,Qe),Be(i_,z),Be(s_,Se),Be(n_,X),Be(Id,Z),Be(r_,Dt),q(Xe))if(Xe.length){const he=t.exposed||(t.exposed={});Xe.forEach(se=>{Object.defineProperty(he,se,{get:()=>n[se],set:dn=>n[se]=dn})})}else t.exposed||(t.exposed={});ge&&t.render===tt&&(t.render=ge),Pr!=null&&(t.inheritAttrs=Pr),Ls&&(t.components=Ls),Fs&&(t.directives=Fs)}function u_(t,e,n=tt){q(t)&&(t=Aa(t));for(const r in t){const s=t[r];let i;de(s)?"default"in s?i=ii(s.from||r,s.default,!0):i=ii(s.from||r):i=ii(s),Ge(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function eu(t,e,n){ct(q(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function wd(t,e,n,r){const s=r.includes(".")?yd(n,r):()=>n[r];if(Te(t)){const i=e[t];K(i)&&Ho(s,i)}else if(K(t))Ho(s,t.bind(n));else if(de(t))if(q(t))t.forEach(i=>wd(i,e,n,r));else{const i=K(t.handler)?t.handler.bind(n):e[t.handler];K(i)&&Ho(s,i,t)}}function Tc(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>vi(c,l,o,!0)),vi(c,e,o)),de(e)&&i.set(e,c),c}function vi(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&vi(t,i,n,!0),s&&s.forEach(o=>vi(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=h_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const h_={data:tu,props:nu,emits:nu,methods:Nr,computed:Nr,beforeCreate:je,created:je,beforeMount:je,mounted:je,beforeUpdate:je,updated:je,beforeDestroy:je,beforeUnmount:je,destroyed:je,unmounted:je,activated:je,deactivated:je,errorCaptured:je,serverPrefetch:je,components:Nr,directives:Nr,watch:f_,provide:tu,inject:d_};function tu(t,e){return e?t?function(){return Fe(K(t)?t.call(this,this):t,K(e)?e.call(this,this):e)}:e:t}function d_(t,e){return Nr(Aa(t),Aa(e))}function Aa(t){if(q(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function je(t,e){return t?[...new Set([].concat(t,e))]:e}function Nr(t,e){return t?Fe(Object.create(null),t,e):e}function nu(t,e){return t?q(t)&&q(e)?[...new Set([...t,...e])]:Fe(Object.create(null),Zl(t),Zl(e??{})):e}function f_(t,e){if(!t)return e;if(!e)return t;const n=Fe(Object.create(null),t);for(const r in e)n[r]=je(t[r],e[r]);return n}function Ad(){return{app:null,config:{isNativeTag:Hg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let p_=0;function g_(t,e){return function(r,s=null){K(r)||(r=Fe({},r)),s!=null&&!de(s)&&(s=null);const i=Ad(),o=new WeakSet;let a=!1;const c=i.app={_uid:p_++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:q_,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&K(l.install)?(o.add(l),l.install(c,...u)):K(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,d){if(!a){const p=nt(r,s);return p.appContext=i,d===!0?d="svg":d===!1&&(d=void 0),u&&e?e(p,l):t(p,l,d),a=!0,c._container=l,l.__vue_app__=c,Ac(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){const u=Br;Br=c;try{return l()}finally{Br=u}}};return c}}let Br=null;function m_(t,e){if(qe){let n=qe.provides;const r=qe.parent&&qe.parent.provides;r===n&&(n=qe.provides=Object.create(r)),n[t]=e}}function ii(t,e,n=!1){const r=qe||vt;if(r||Br){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Br._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&K(e)?e.call(r&&r.proxy):e}}function __(t,e,n,r=!1){const s={},i={};mi(i,Xi,1),t.propsDefaults=Object.create(null),Rd(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Am(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function y_(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=te(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let p=u[d];if(Gi(t.emitsOptions,p))continue;const g=e[p];if(c)if(Y(i,p))g!==i[p]&&(i[p]=g,l=!0);else{const k=sr(p);s[k]=Ra(c,a,k,g,t,!1)}else g!==i[p]&&(i[p]=g,l=!0)}}}else{Rd(t,e,s,i)&&(l=!0);let u;for(const d in a)(!e||!Y(e,d)&&((u=yr(d))===d||!Y(e,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(s[d]=Ra(c,a,d,void 0,t,!0)):delete s[d]);if(i!==a)for(const d in i)(!e||!Y(e,d))&&(delete i[d],l=!0)}l&&Mt(t,"set","$attrs")}function Rd(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Fr(c))continue;const l=e[c];let u;s&&Y(s,u=sr(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Gi(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=te(n),l=a||le;for(let u=0;u<i.length;u++){const d=i[u];n[d]=Ra(s,c,d,l[d],t,!Y(l,d))}}return o}function Ra(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=Y(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&K(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=_s(s);r=l[n]=c.call(null,e),u()}}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===yr(n))&&(r=!0))}return r}function Sd(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!K(t)){const u=d=>{c=!0;const[p,g]=Sd(d,e,!0);Fe(o,p),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return de(t)&&r.set(t,Qn),Qn;if(q(i))for(let u=0;u<i.length;u++){const d=sr(i[u]);ru(d)&&(o[d]=le)}else if(i)for(const u in i){const d=sr(u);if(ru(d)){const p=i[u],g=o[d]=q(p)||K(p)?{type:p}:Fe({},p);if(g){const k=ou(Boolean,g.type),C=ou(String,g.type);g[0]=k>-1,g[1]=C<0||k<C,(k>-1||Y(g,"default"))&&a.push(d)}}}const l=[o,a];return de(t)&&r.set(t,l),l}function ru(t){return t[0]!=="$"&&!Fr(t)}function su(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function iu(t,e){return su(t)===su(e)}function ou(t,e){return q(e)?e.findIndex(n=>iu(n,t)):K(e)&&iu(e,t)?0:-1}const Pd=t=>t[0]==="_"||t==="$stable",Ic=t=>q(t)?t.map(mt):[mt(t)],v_=(t,e,n)=>{if(e._n)return e;const r=Um((...s)=>Ic(e(...s)),n);return r._c=!1,r},Cd=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Pd(s))continue;const i=t[s];if(K(i))e[s]=v_(s,i,r);else if(i!=null){const o=Ic(i);e[s]=()=>o}}},bd=(t,e)=>{const n=Ic(e);t.slots.default=()=>n},E_=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=te(e),mi(e,"_",n)):Cd(e,t.slots={})}else t.slots={},e&&bd(t,e);mi(t.slots,Xi,1)},T_=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=le;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Fe(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Cd(e,s)),o=e}else e&&(bd(t,e),o={default:1});if(i)for(const a in s)!Pd(a)&&o[a]==null&&delete s[a]};function Sa(t,e,n,r,s=!1){if(q(t)){t.forEach((p,g)=>Sa(p,e&&(q(e)?e[g]:e),n,r,s));return}if(si(r)&&!s)return;const i=r.shapeFlag&4?Ac(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===le?a.refs={}:a.refs,d=a.setupState;if(l!=null&&l!==c&&(Te(l)?(u[l]=null,Y(d,l)&&(d[l]=null)):Ge(l)&&(l.value=null)),K(c))en(c,a,12,[o,u]);else{const p=Te(c),g=Ge(c);if(p||g){const k=()=>{if(t.f){const C=p?Y(d,c)?d[c]:u[c]:c.value;s?q(C)&&ac(C,i):q(C)?C.includes(i)||C.push(i):p?(u[c]=[i],Y(d,c)&&(d[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else p?(u[c]=o,Y(d,c)&&(d[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};o?(k.id=-1,ze(k,n)):k()}}}const ze=Km;function I_(t){return w_(t)}function w_(t,e){const n=Kh();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:p,setScopeId:g=tt,insertStaticContent:k}=t,C=(h,f,m,y=null,v=null,w=null,P=void 0,I=null,A=!!f.dynamicChildren)=>{if(h===f)return;h&&!br(h,f)&&(y=Bs(h),ht(h,v,w,!0),h=null),f.patchFlag===-2&&(A=!1,f.dynamicChildren=null);const{type:T,ref:D,shapeFlag:x}=f;switch(T){case Yi:b(h,f,m,y);break;case Cn:F(h,f,m,y);break;case Wo:h==null&&X(f,m,y,P);break;case gt:Ls(h,f,m,y,v,w,P,I,A);break;default:x&1?ge(h,f,m,y,v,w,P,I,A):x&6?Fs(h,f,m,y,v,w,P,I,A):(x&64||x&128)&&T.process(h,f,m,y,v,w,P,I,A,Bn)}D!=null&&v&&Sa(D,h&&h.ref,w,f||h,!f)},b=(h,f,m,y)=>{if(h==null)r(f.el=a(f.children),m,y);else{const v=f.el=h.el;f.children!==h.children&&l(v,f.children)}},F=(h,f,m,y)=>{h==null?r(f.el=c(f.children||""),m,y):f.el=h.el},X=(h,f,m,y)=>{[h.el,h.anchor]=k(h.children,f,m,y,h.el,h.anchor)},U=({el:h,anchor:f},m,y)=>{let v;for(;h&&h!==f;)v=p(h),r(h,m,y),h=v;r(f,m,y)},Z=({el:h,anchor:f})=>{let m;for(;h&&h!==f;)m=p(h),s(h),h=m;s(f)},ge=(h,f,m,y,v,w,P,I,A)=>{f.type==="svg"?P="svg":f.type==="math"&&(P="mathml"),h==null?z(f,m,y,v,w,P,I,A):Dt(h,f,v,w,P,I,A)},z=(h,f,m,y,v,w,P,I)=>{let A,T;const{props:D,shapeFlag:x,transition:N,dirs:B}=h;if(A=h.el=o(h.type,w,D&&D.is,D),x&8?u(A,h.children):x&16&&Qe(h.children,A,null,y,v,Ko(h,w),P,I),B&&pn(h,null,y,"created"),Se(A,h,h.scopeId,P,y),D){for(const re in D)re!=="value"&&!Fr(re)&&i(A,re,null,D[re],w,h.children,y,v,kt);"value"in D&&i(A,"value",null,D.value,w),(T=D.onVnodeBeforeMount)&&ft(T,y,h)}B&&pn(h,null,y,"beforeMount");const W=A_(v,N);W&&N.beforeEnter(A),r(A,f,m),((T=D&&D.onVnodeMounted)||W||B)&&ze(()=>{T&&ft(T,y,h),W&&N.enter(A),B&&pn(h,null,y,"mounted")},v)},Se=(h,f,m,y,v)=>{if(m&&g(h,m),y)for(let w=0;w<y.length;w++)g(h,y[w]);if(v){let w=v.subTree;if(f===w){const P=v.vnode;Se(h,P,P.scopeId,P.slotScopeIds,v.parent)}}},Qe=(h,f,m,y,v,w,P,I,A=0)=>{for(let T=A;T<h.length;T++){const D=h[T]=I?Wt(h[T]):mt(h[T]);C(null,D,f,m,y,v,w,P,I)}},Dt=(h,f,m,y,v,w,P)=>{const I=f.el=h.el;let{patchFlag:A,dynamicChildren:T,dirs:D}=f;A|=h.patchFlag&16;const x=h.props||le,N=f.props||le;let B;if(m&&gn(m,!1),(B=N.onVnodeBeforeUpdate)&&ft(B,m,f,h),D&&pn(f,h,m,"beforeUpdate"),m&&gn(m,!0),T?Xe(h.dynamicChildren,T,I,m,y,Ko(f,v),w):P||se(h,f,I,null,m,y,Ko(f,v),w,!1),A>0){if(A&16)Pr(I,f,x,N,m,y,v);else if(A&2&&x.class!==N.class&&i(I,"class",null,N.class,v),A&4&&i(I,"style",x.style,N.style,v),A&8){const W=f.dynamicProps;for(let re=0;re<W.length;re++){const ce=W[re],Ie=x[ce],st=N[ce];(st!==Ie||ce==="value")&&i(I,ce,Ie,st,v,h.children,m,y,kt)}}A&1&&h.children!==f.children&&u(I,f.children)}else!P&&T==null&&Pr(I,f,x,N,m,y,v);((B=N.onVnodeUpdated)||D)&&ze(()=>{B&&ft(B,m,f,h),D&&pn(f,h,m,"updated")},y)},Xe=(h,f,m,y,v,w,P)=>{for(let I=0;I<f.length;I++){const A=h[I],T=f[I],D=A.el&&(A.type===gt||!br(A,T)||A.shapeFlag&70)?d(A.el):m;C(A,T,D,null,y,v,w,P,!0)}},Pr=(h,f,m,y,v,w,P)=>{if(m!==y){if(m!==le)for(const I in m)!Fr(I)&&!(I in y)&&i(h,I,m[I],null,P,f.children,v,w,kt);for(const I in y){if(Fr(I))continue;const A=y[I],T=m[I];A!==T&&I!=="value"&&i(h,I,T,A,P,f.children,v,w,kt)}"value"in y&&i(h,"value",m.value,y.value,P)}},Ls=(h,f,m,y,v,w,P,I,A)=>{const T=f.el=h?h.el:a(""),D=f.anchor=h?h.anchor:a("");let{patchFlag:x,dynamicChildren:N,slotScopeIds:B}=f;B&&(I=I?I.concat(B):B),h==null?(r(T,m,y),r(D,m,y),Qe(f.children||[],m,D,v,w,P,I,A)):x>0&&x&64&&N&&h.dynamicChildren?(Xe(h.dynamicChildren,N,m,v,w,P,I),(f.key!=null||v&&f===v.subTree)&&Dd(h,f,!0)):se(h,f,m,D,v,w,P,I,A)},Fs=(h,f,m,y,v,w,P,I,A)=>{f.slotScopeIds=I,h==null?f.shapeFlag&512?v.ctx.activate(f,m,y,P,A):xo(f,m,y,v,w,P,A):Ll(h,f,A)},xo=(h,f,m,y,v,w,P)=>{const I=h.component=M_(h,y,v);if(vd(h)&&(I.ctx.renderer=Bn),L_(I),I.asyncDep){if(v&&v.registerDep(I,Be),!h.el){const A=I.subTree=nt(Cn);F(null,A,f,m)}}else Be(I,h,f,m,v,w,P)},Ll=(h,f,m)=>{const y=f.component=h.component;if($m(h,f,m))if(y.asyncDep&&!y.asyncResolved){he(y,f,m);return}else y.next=f,Nm(y.update),y.effect.dirty=!0,y.update();else f.el=h.el,y.vnode=f},Be=(h,f,m,y,v,w,P)=>{const I=()=>{if(h.isMounted){let{next:D,bu:x,u:N,parent:B,vnode:W}=h;{const jn=kd(h);if(jn){D&&(D.el=W.el,he(h,D,P)),jn.asyncDep.then(()=>{h.isUnmounted||I()});return}}let re=D,ce;gn(h,!1),D?(D.el=W.el,he(h,D,P)):D=W,x&&Bo(x),(ce=D.props&&D.props.onVnodeBeforeUpdate)&&ft(ce,B,D,W),gn(h,!0);const Ie=qo(h),st=h.subTree;h.subTree=Ie,C(st,Ie,d(st.el),Bs(st),h,v,w),D.el=Ie.el,re===null&&qm(h,Ie.el),N&&ze(N,v),(ce=D.props&&D.props.onVnodeUpdated)&&ze(()=>ft(ce,B,D,W),v)}else{let D;const{el:x,props:N}=f,{bm:B,m:W,parent:re}=h,ce=si(f);if(gn(h,!1),B&&Bo(B),!ce&&(D=N&&N.onVnodeBeforeMount)&&ft(D,re,f),gn(h,!0),x&&Fo){const Ie=()=>{h.subTree=qo(h),Fo(x,h.subTree,h,v,null)};ce?f.type.__asyncLoader().then(()=>!h.isUnmounted&&Ie()):Ie()}else{const Ie=h.subTree=qo(h);C(null,Ie,m,y,h,v,w),f.el=Ie.el}if(W&&ze(W,v),!ce&&(D=N&&N.onVnodeMounted)){const Ie=f;ze(()=>ft(D,re,Ie),v)}(f.shapeFlag&256||re&&si(re.vnode)&&re.vnode.shapeFlag&256)&&h.a&&ze(h.a,v),h.isMounted=!0,f=m=y=null}},A=h.effect=new hc(I,tt,()=>Ec(T),h.scope),T=h.update=()=>{A.dirty&&A.run()};T.id=h.uid,gn(h,!0),T()},he=(h,f,m)=>{f.component=h;const y=h.vnode.props;h.vnode=f,h.next=null,y_(h,f.props,y,m),T_(h,f.children,m),xn(),Yl(h),Mn()},se=(h,f,m,y,v,w,P,I,A=!1)=>{const T=h&&h.children,D=h?h.shapeFlag:0,x=f.children,{patchFlag:N,shapeFlag:B}=f;if(N>0){if(N&128){Us(T,x,m,y,v,w,P,I,A);return}else if(N&256){dn(T,x,m,y,v,w,P,I,A);return}}B&8?(D&16&&kt(T,v,w),x!==T&&u(m,x)):D&16?B&16?Us(T,x,m,y,v,w,P,I,A):kt(T,v,w,!0):(D&8&&u(m,""),B&16&&Qe(x,m,y,v,w,P,I,A))},dn=(h,f,m,y,v,w,P,I,A)=>{h=h||Qn,f=f||Qn;const T=h.length,D=f.length,x=Math.min(T,D);let N;for(N=0;N<x;N++){const B=f[N]=A?Wt(f[N]):mt(f[N]);C(h[N],B,m,null,v,w,P,I,A)}T>D?kt(h,v,w,!0,!1,x):Qe(f,m,y,v,w,P,I,A,x)},Us=(h,f,m,y,v,w,P,I,A)=>{let T=0;const D=f.length;let x=h.length-1,N=D-1;for(;T<=x&&T<=N;){const B=h[T],W=f[T]=A?Wt(f[T]):mt(f[T]);if(br(B,W))C(B,W,m,null,v,w,P,I,A);else break;T++}for(;T<=x&&T<=N;){const B=h[x],W=f[N]=A?Wt(f[N]):mt(f[N]);if(br(B,W))C(B,W,m,null,v,w,P,I,A);else break;x--,N--}if(T>x){if(T<=N){const B=N+1,W=B<D?f[B].el:y;for(;T<=N;)C(null,f[T]=A?Wt(f[T]):mt(f[T]),m,W,v,w,P,I,A),T++}}else if(T>N)for(;T<=x;)ht(h[T],v,w,!0),T++;else{const B=T,W=T,re=new Map;for(T=W;T<=N;T++){const Je=f[T]=A?Wt(f[T]):mt(f[T]);Je.key!=null&&re.set(Je.key,T)}let ce,Ie=0;const st=N-W+1;let jn=!1,Bl=0;const Cr=new Array(st);for(T=0;T<st;T++)Cr[T]=0;for(T=B;T<=x;T++){const Je=h[T];if(Ie>=st){ht(Je,v,w,!0);continue}let dt;if(Je.key!=null)dt=re.get(Je.key);else for(ce=W;ce<=N;ce++)if(Cr[ce-W]===0&&br(Je,f[ce])){dt=ce;break}dt===void 0?ht(Je,v,w,!0):(Cr[dt-W]=T+1,dt>=Bl?Bl=dt:jn=!0,C(Je,f[dt],m,null,v,w,P,I,A),Ie++)}const jl=jn?R_(Cr):Qn;for(ce=jl.length-1,T=st-1;T>=0;T--){const Je=W+T,dt=f[Je],$l=Je+1<D?f[Je+1].el:y;Cr[T]===0?C(null,dt,m,$l,v,w,P,I,A):jn&&(ce<0||T!==jl[ce]?fn(dt,m,$l,2):ce--)}}},fn=(h,f,m,y,v=null)=>{const{el:w,type:P,transition:I,children:A,shapeFlag:T}=h;if(T&6){fn(h.component.subTree,f,m,y);return}if(T&128){h.suspense.move(f,m,y);return}if(T&64){P.move(h,f,m,Bn);return}if(P===gt){r(w,f,m);for(let x=0;x<A.length;x++)fn(A[x],f,m,y);r(h.anchor,f,m);return}if(P===Wo){U(h,f,m);return}if(y!==2&&T&1&&I)if(y===0)I.beforeEnter(w),r(w,f,m),ze(()=>I.enter(w),v);else{const{leave:x,delayLeave:N,afterLeave:B}=I,W=()=>r(w,f,m),re=()=>{x(w,()=>{W(),B&&B()})};N?N(w,W,re):re()}else r(w,f,m)},ht=(h,f,m,y=!1,v=!1)=>{const{type:w,props:P,ref:I,children:A,dynamicChildren:T,shapeFlag:D,patchFlag:x,dirs:N}=h;if(I!=null&&Sa(I,null,m,h,!0),D&256){f.ctx.deactivate(h);return}const B=D&1&&N,W=!si(h);let re;if(W&&(re=P&&P.onVnodeBeforeUnmount)&&ft(re,f,h),D&6)qg(h.component,m,y);else{if(D&128){h.suspense.unmount(m,y);return}B&&pn(h,null,f,"beforeUnmount"),D&64?h.type.remove(h,f,m,v,Bn,y):T&&(w!==gt||x>0&&x&64)?kt(T,f,m,!1,!0):(w===gt&&x&384||!v&&D&16)&&kt(A,f,m),y&&Fl(h)}(W&&(re=P&&P.onVnodeUnmounted)||B)&&ze(()=>{re&&ft(re,f,h),B&&pn(h,null,f,"unmounted")},m)},Fl=h=>{const{type:f,el:m,anchor:y,transition:v}=h;if(f===gt){$g(m,y);return}if(f===Wo){Z(h);return}const w=()=>{s(m),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(h.shapeFlag&1&&v&&!v.persisted){const{leave:P,delayLeave:I}=v,A=()=>P(m,w);I?I(h.el,w,A):A()}else w()},$g=(h,f)=>{let m;for(;h!==f;)m=p(h),s(h),h=m;s(f)},qg=(h,f,m)=>{const{bum:y,scope:v,update:w,subTree:P,um:I}=h;y&&Bo(y),v.stop(),w&&(w.active=!1,ht(P,h,f,m)),I&&ze(I,f),ze(()=>{h.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},kt=(h,f,m,y=!1,v=!1,w=0)=>{for(let P=w;P<h.length;P++)ht(h[P],f,m,y,v)},Bs=h=>h.shapeFlag&6?Bs(h.component.subTree):h.shapeFlag&128?h.suspense.next():p(h.anchor||h.el);let Mo=!1;const Ul=(h,f,m)=>{h==null?f._vnode&&ht(f._vnode,null,null,!0):C(f._vnode||null,h,f,null,null,null,m),Mo||(Mo=!0,Yl(),pd(),Mo=!1),f._vnode=h},Bn={p:C,um:ht,m:fn,r:Fl,mt:xo,mc:Qe,pc:se,pbc:Xe,n:Bs,o:t};let Lo,Fo;return e&&([Lo,Fo]=e(Bn)),{render:Ul,hydrate:Lo,createApp:g_(Ul,Lo)}}function Ko({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function gn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function A_(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Dd(t,e,n=!1){const r=t.children,s=e.children;if(q(r)&&q(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Wt(s[i]),a.el=o.el),n||Dd(o,a)),a.type===Yi&&(a.el=o.el)}}function R_(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function kd(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:kd(e)}const S_=t=>t.__isTeleport,gt=Symbol.for("v-fgt"),Yi=Symbol.for("v-txt"),Cn=Symbol.for("v-cmt"),Wo=Symbol.for("v-stc"),jr=[];let ot=null;function $e(t=!1){jr.push(ot=t?null:[])}function P_(){jr.pop(),ot=jr[jr.length-1]||null}let Xr=1;function au(t){Xr+=t}function Vd(t){return t.dynamicChildren=Xr>0?ot||Qn:null,P_(),Xr>0&&ot&&ot.push(t),t}function Ke(t,e,n,r,s,i){return Vd(oe(t,e,n,r,s,i,!0))}function C_(t,e,n,r,s){return Vd(nt(t,e,n,r,s,!0))}function b_(t){return t?t.__v_isVNode===!0:!1}function br(t,e){return t.type===e.type&&t.key===e.key}const Xi="__vInternal",Nd=({key:t})=>t??null,oi=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Te(t)||Ge(t)||K(t)?{i:vt,r:t,k:e,f:!!n}:t:null);function oe(t,e=null,n=null,r=0,s=null,i=t===gt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Nd(e),ref:e&&oi(e),scopeId:Qi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:vt};return a?(wc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Te(n)?8:16),Xr>0&&!o&&ot&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&ot.push(c),c}const nt=D_;function D_(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Hm)&&(t=Cn),b_(t)){const a=or(t,e,!0);return n&&wc(a,n),Xr>0&&!i&&ot&&(a.shapeFlag&6?ot[ot.indexOf(t)]=a:ot.push(a)),a.patchFlag|=-2,a}if(j_(t)&&(t=t.__vccOpts),e){e=k_(e);let{class:a,style:c}=e;a&&!Te(a)&&(e.class=uc(a)),de(c)&&(ad(c)&&!q(c)&&(c=Fe({},c)),e.style=lc(c))}const o=Te(t)?1:zm(t)?128:S_(t)?64:de(t)?4:K(t)?2:0;return oe(t,e,n,r,s,o,i,!0)}function k_(t){return t?ad(t)||Xi in t?Fe({},t):t:null}function or(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?N_(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Nd(a),ref:e&&e.ref?n&&s?q(s)?s.concat(oi(e)):[s,oi(e)]:oi(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==gt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&or(t.ssContent),ssFallback:t.ssFallback&&or(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function V_(t=" ",e=0){return nt(Yi,null,t,e)}function Wn(t="",e=!1){return e?($e(),C_(Cn,null,t)):nt(Cn,null,t)}function mt(t){return t==null||typeof t=="boolean"?nt(Cn):q(t)?nt(gt,null,t.slice()):typeof t=="object"?Wt(t):nt(Yi,null,String(t))}function Wt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:or(t)}function wc(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(q(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),wc(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Xi in e)?e._ctx=vt:s===3&&vt&&(vt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else K(e)?(e={default:e,_ctx:vt},n=32):(e=String(e),r&64?(n=16,e=[V_(e)]):n=8);t.children=e,t.shapeFlag|=n}function N_(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=uc([e.class,r.class]));else if(s==="style")e.style=lc([e.style,r.style]);else if(qi(s)){const i=e[s],o=r[s];o&&i!==o&&!(q(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function ft(t,e,n,r=null){ct(t,e,7,[n,r])}const O_=Ad();let x_=0;function M_(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||O_,i={uid:x_++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new nm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Sd(r,s),emitsOptions:md(r,s),emit:null,emitted:null,propsDefaults:le,inheritAttrs:r.inheritAttrs,ctx:le,data:le,props:le,attrs:le,slots:le,refs:le,setupState:le,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Mm.bind(null,i),t.ce&&t.ce(i),i}let qe=null,Ei,Pa;{const t=Kh(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Ei=e("__VUE_INSTANCE_SETTERS__",n=>qe=n),Pa=e("__VUE_SSR_SETTERS__",n=>Zi=n)}const _s=t=>{const e=qe;return Ei(t),t.scope.on(),()=>{t.scope.off(),Ei(e)}},cu=()=>{qe&&qe.scope.off(),Ei(null)};function Od(t){return t.vnode.shapeFlag&4}let Zi=!1;function L_(t,e=!1){e&&Pa(e);const{props:n,children:r}=t.vnode,s=Od(t);__(t,n,s,e),E_(t,r);const i=s?F_(t,e):void 0;return e&&Pa(!1),i}function F_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=cd(new Proxy(t.ctx,c_));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?B_(t):null,i=_s(t);xn();const o=en(r,t,0,[t.props,s]);if(Mn(),i(),$h(o)){if(o.then(cu,cu),e)return o.then(a=>{lu(t,a,e)}).catch(a=>{Wi(a,t,0)});t.asyncDep=o}else lu(t,o,e)}else xd(t,e)}function lu(t,e,n){K(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:de(e)&&(t.setupState=hd(e)),xd(t,n)}let uu;function xd(t,e,n){const r=t.type;if(!t.render){if(!e&&uu&&!r.render){const s=r.template||Tc(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Fe(Fe({isCustomElement:i,delimiters:a},o),c);r.render=uu(s,l)}}t.render=r.render||tt}{const s=_s(t);xn();try{l_(t)}finally{Mn(),s()}}}function U_(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return We(t,"get","$attrs"),e[n]}}))}function B_(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return U_(t)},slots:t.slots,emit:t.emit,expose:e}}function Ac(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(hd(cd(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ur)return Ur[n](t)},has(e,n){return n in e||n in Ur}}))}function j_(t){return K(t)&&"__vccOpts"in t}const $_=(t,e)=>Rm(t,e,Zi),q_="3.4.21";/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const H_="http://www.w3.org/2000/svg",z_="http://www.w3.org/1998/Math/MathML",Gt=typeof document<"u"?document:null,hu=Gt&&Gt.createElement("template"),K_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Gt.createElementNS(H_,t):e==="mathml"?Gt.createElementNS(z_,t):Gt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Gt.createTextNode(t),createComment:t=>Gt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Gt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{hu.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const a=hu.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},W_=Symbol("_vtc");function G_(t,e,n){const r=t[W_];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const du=Symbol("_vod"),Q_=Symbol("_vsh"),J_=Symbol(""),Y_=/(^|;)\s*display\s*:/;function X_(t,e,n){const r=t.style,s=Te(n);let i=!1;if(n&&!s){if(e)if(Te(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&ai(r,a,"")}else for(const o in e)n[o]==null&&ai(r,o,"");for(const o in n)o==="display"&&(i=!0),ai(r,o,n[o])}else if(s){if(e!==n){const o=r[J_];o&&(n+=";"+o),r.cssText=n,i=Y_.test(n)}}else e&&t.removeAttribute("style");du in t&&(t[du]=i?r.display:"",t[Q_]&&(r.display="none"))}const fu=/\s*!important$/;function ai(t,e,n){if(q(n))n.forEach(r=>ai(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Z_(t,e);fu.test(n)?t.setProperty(yr(r),n.replace(fu,""),"important"):t[r]=n}}const pu=["Webkit","Moz","ms"],Go={};function Z_(t,e){const n=Go[e];if(n)return n;let r=sr(e);if(r!=="filter"&&r in t)return Go[e]=r;r=zh(r);for(let s=0;s<pu.length;s++){const i=pu[s]+r;if(i in t)return Go[e]=i}return e}const gu="http://www.w3.org/1999/xlink";function ey(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(gu,e.slice(6,e.length)):t.setAttributeNS(gu,e,n);else{const i=tm(e);n==null||i&&!Wh(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function ty(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const l=a==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";(l!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Wh(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function ny(t,e,n,r){t.addEventListener(e,n,r)}function ry(t,e,n,r){t.removeEventListener(e,n,r)}const mu=Symbol("_vei");function sy(t,e,n,r,s=null){const i=t[mu]||(t[mu]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=iy(e);if(r){const l=i[e]=cy(r,s);ny(t,a,l,c)}else o&&(ry(t,a,o,c),i[e]=void 0)}}const _u=/(?:Once|Passive|Capture)$/;function iy(t){let e;if(_u.test(t)){e={};let r;for(;r=t.match(_u);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):yr(t.slice(2)),e]}let Qo=0;const oy=Promise.resolve(),ay=()=>Qo||(oy.then(()=>Qo=0),Qo=Date.now());function cy(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;ct(ly(r,n.value),e,5,[r])};return n.value=t,n.attached=ay(),n}function ly(t,e){if(q(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const yu=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,uy=(t,e,n,r,s,i,o,a,c)=>{const l=s==="svg";e==="class"?G_(t,r,l):e==="style"?X_(t,n,r):qi(e)?oc(e)||sy(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):hy(t,e,r,l))?ty(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),ey(t,e,r,l))};function hy(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&yu(e)&&K(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return yu(e)&&Te(n)?!1:e in t}const dy=Fe({patchProp:uy},K_);let vu;function fy(){return vu||(vu=I_(dy))}const py=(...t)=>{const e=fy().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=my(r);if(!s)return;const i=e._component;!K(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,gy(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function gy(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function my(t){return Te(t)?document.querySelector(t):t}var Eu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Md=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},_y=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ld={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,d=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(p=64)),r.push(n[u],n[d],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Md(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):_y(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||d==null)throw new yy;const p=i<<2|a>>4;if(r.push(p),l!==64){const g=a<<4&240|l>>2;if(r.push(g),d!==64){const k=l<<6&192|d;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class yy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vy=function(t){const e=Md(t);return Ld.encodeByteArray(e,!0)},Ti=function(t){return vy(t).replace(/\./g,"")},Fd=function(t){try{return Ld.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ey(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty=()=>Ey().__FIREBASE_DEFAULTS__,Iy=()=>{if(typeof process>"u"||typeof Eu>"u")return;const t=Eu.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},wy=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Fd(t[1]);return e&&JSON.parse(e)},eo=()=>{try{return Ty()||Iy()||wy()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ud=t=>{var e,n;return(n=(e=eo())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ay=t=>{const e=Ud(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Bd=()=>{var t;return(t=eo())===null||t===void 0?void 0:t.config},jd=t=>{var e;return(e=eo())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sy(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ti(JSON.stringify(n)),Ti(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Py(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ye())}function Cy(){var t;const e=(t=eo())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function by(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Dy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ky(){const t=ye();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Vy(){return!Cy()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function $d(){try{return typeof indexedDB=="object"}catch{return!1}}function Ny(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy="FirebaseError";class qt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Oy,Object.setPrototypeOf(this,qt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ys.prototype.create)}}class ys{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?xy(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new qt(s,a,r)}}function xy(t,e){return t.replace(My,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const My=/\{\$([^}]+)}/g;function Ly(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ii(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Tu(i)&&Tu(o)){if(!Ii(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Tu(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Fy(t,e){const n=new Uy(t,e);return n.subscribe.bind(n)}class Uy{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");By(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Jo),s.error===void 0&&(s.error=Jo),s.complete===void 0&&(s.complete=Jo);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function By(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Jo(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(t){return t&&t._delegate?t._delegate:t}class bn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ry;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qy(e))try{this.getOrInitializeService({instanceIdentifier:mn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=mn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=mn){return this.instances.has(e)}getOptions(e=mn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:$y(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=mn){return this.component?this.component.multipleInstances?e:mn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $y(t){return t===mn?void 0:t}function qy(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new jy(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Q||(Q={}));const zy={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},Ky=Q.INFO,Wy={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},Gy=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Wy[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Rc{constructor(e){this.name=e,this._logLevel=Ky,this._logHandler=Gy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const Qy=(t,e)=>e.some(n=>t instanceof n);let Iu,wu;function Jy(){return Iu||(Iu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Yy(){return wu||(wu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qd=new WeakMap,Ca=new WeakMap,Hd=new WeakMap,Yo=new WeakMap,Sc=new WeakMap;function Xy(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(tn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&qd.set(n,t)}).catch(()=>{}),Sc.set(e,t),e}function Zy(t){if(Ca.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ca.set(t,e)}let ba={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ca.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Hd.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return tn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ev(t){ba=t(ba)}function tv(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Xo(this),e,...n);return Hd.set(r,e.sort?e.sort():[e]),tn(r)}:Yy().includes(t)?function(...e){return t.apply(Xo(this),e),tn(qd.get(this))}:function(...e){return tn(t.apply(Xo(this),e))}}function nv(t){return typeof t=="function"?tv(t):(t instanceof IDBTransaction&&Zy(t),Qy(t,Jy())?new Proxy(t,ba):t)}function tn(t){if(t instanceof IDBRequest)return Xy(t);if(Yo.has(t))return Yo.get(t);const e=nv(t);return e!==t&&(Yo.set(t,e),Sc.set(e,t)),e}const Xo=t=>Sc.get(t);function rv(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=tn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(tn(o.result),c.oldVersion,c.newVersion,tn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const sv=["get","getKey","getAll","getAllKeys","count"],iv=["put","add","delete","clear"],Zo=new Map;function Au(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Zo.get(e))return Zo.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=iv.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||sv.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Zo.set(e,i),i}ev(t=>({...t,get:(e,n,r)=>Au(e,n)||t.get(e,n,r),has:(e,n)=>!!Au(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(av(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function av(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Da="@firebase/app",Ru="0.9.29";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn=new Rc("@firebase/app"),cv="@firebase/app-compat",lv="@firebase/analytics-compat",uv="@firebase/analytics",hv="@firebase/app-check-compat",dv="@firebase/app-check",fv="@firebase/auth",pv="@firebase/auth-compat",gv="@firebase/database",mv="@firebase/database-compat",_v="@firebase/functions",yv="@firebase/functions-compat",vv="@firebase/installations",Ev="@firebase/installations-compat",Tv="@firebase/messaging",Iv="@firebase/messaging-compat",wv="@firebase/performance",Av="@firebase/performance-compat",Rv="@firebase/remote-config",Sv="@firebase/remote-config-compat",Pv="@firebase/storage",Cv="@firebase/storage-compat",bv="@firebase/firestore",Dv="@firebase/firestore-compat",kv="firebase",Vv="10.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka="[DEFAULT]",Nv={[Da]:"fire-core",[cv]:"fire-core-compat",[uv]:"fire-analytics",[lv]:"fire-analytics-compat",[dv]:"fire-app-check",[hv]:"fire-app-check-compat",[fv]:"fire-auth",[pv]:"fire-auth-compat",[gv]:"fire-rtdb",[mv]:"fire-rtdb-compat",[_v]:"fire-fn",[yv]:"fire-fn-compat",[vv]:"fire-iid",[Ev]:"fire-iid-compat",[Tv]:"fire-fcm",[Iv]:"fire-fcm-compat",[wv]:"fire-perf",[Av]:"fire-perf-compat",[Rv]:"fire-rc",[Sv]:"fire-rc-compat",[Pv]:"fire-gcs",[Cv]:"fire-gcs-compat",[bv]:"fire-fst",[Dv]:"fire-fst-compat","fire-js":"fire-js",[kv]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=new Map,Va=new Map;function Ov(t,e){try{t.container.addComponent(e)}catch(n){Dn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ar(t){const e=t.name;if(Va.has(e))return Dn.debug(`There were multiple attempts to register component ${e}.`),!1;Va.set(e,t);for(const n of wi.values())Ov(n,t);return!0}function Pc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},nn=new ys("app","Firebase",xv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw nn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr=Vv;function zd(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ka,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw nn.create("bad-app-name",{appName:String(s)});if(n||(n=Bd()),!n)throw nn.create("no-options");const i=wi.get(s);if(i){if(Ii(n,i.options)&&Ii(r,i.config))return i;throw nn.create("duplicate-app",{appName:s})}const o=new Hy(s);for(const c of Va.values())o.addComponent(c);const a=new Mv(n,r,o);return wi.set(s,a),a}function Kd(t=ka){const e=wi.get(t);if(!e&&t===ka&&Bd())return zd();if(!e)throw nn.create("no-app",{appName:t});return e}function rn(t,e,n){var r;let s=(r=Nv[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dn.warn(a.join(" "));return}ar(new bn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv="firebase-heartbeat-database",Fv=1,Zr="firebase-heartbeat-store";let ea=null;function Wd(){return ea||(ea=rv(Lv,Fv,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Zr)}catch(n){console.warn(n)}}}}).catch(t=>{throw nn.create("idb-open",{originalErrorMessage:t.message})})),ea}async function Uv(t){try{const n=(await Wd()).transaction(Zr),r=await n.objectStore(Zr).get(Gd(t));return await n.done,r}catch(e){if(e instanceof qt)Dn.warn(e.message);else{const n=nn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Dn.warn(n.message)}}}async function Su(t,e){try{const r=(await Wd()).transaction(Zr,"readwrite");await r.objectStore(Zr).put(e,Gd(t)),await r.done}catch(n){if(n instanceof qt)Dn.warn(n.message);else{const r=nn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Dn.warn(r.message)}}}function Gd(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bv=1024,jv=30*24*60*60*1e3;class $v{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Hv(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Pu();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=jv}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Pu(),{heartbeatsToSend:r,unsentEntries:s}=qv(this._heartbeatsCache.heartbeats),i=Ti(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Pu(){return new Date().toISOString().substring(0,10)}function qv(t,e=Bv){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Cu(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Cu(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Hv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $d()?Ny().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Uv(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Su(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Su(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Cu(t){return Ti(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zv(t){ar(new bn("platform-logger",e=>new ov(e),"PRIVATE")),ar(new bn("heartbeat",e=>new $v(e),"PRIVATE")),rn(Da,Ru,t),rn(Da,Ru,"esm2017"),rn("fire-js","")}zv("");var Kv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},S,Cc=Cc||{},L=Kv||self;function to(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Es(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Wv(t){return Object.prototype.hasOwnProperty.call(t,ta)&&t[ta]||(t[ta]=++Gv)}var ta="closure_uid_"+(1e9*Math.random()>>>0),Gv=0;function Qv(t,e,n){return t.call.apply(t.bind,arguments)}function Jv(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Me(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Me=Qv:Me=Jv,Me.apply(null,arguments)}function Ws(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Re(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function un(){this.s=this.s,this.o=this.o}var Yv=0;un.prototype.s=!1;un.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Yv!=0)&&Wv(this)};un.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Qd=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function bc(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function bu(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(to(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function Le(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Le.prototype.h=function(){this.defaultPrevented=!0};var Xv=function(){if(!L.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};L.addEventListener("test",n,e),L.removeEventListener("test",n,e)}catch{}return t}();function es(t){return/^[\s\xa0]*$/.test(t)}function no(){var t=L.navigator;return t&&(t=t.userAgent)?t:""}function yt(t){return no().indexOf(t)!=-1}function Dc(t){return Dc[" "](t),t}Dc[" "]=function(){};function Zv(t,e){var n=zE;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var eE=yt("Opera"),cr=yt("Trident")||yt("MSIE"),Jd=yt("Edge"),Na=Jd||cr,Yd=yt("Gecko")&&!(no().toLowerCase().indexOf("webkit")!=-1&&!yt("Edge"))&&!(yt("Trident")||yt("MSIE"))&&!yt("Edge"),tE=no().toLowerCase().indexOf("webkit")!=-1&&!yt("Edge");function Xd(){var t=L.document;return t?t.documentMode:void 0}var Oa;e:{var na="",ra=function(){var t=no();if(Yd)return/rv:([^\);]+)(\)|;)/.exec(t);if(Jd)return/Edge\/([\d\.]+)/.exec(t);if(cr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(tE)return/WebKit\/(\S+)/.exec(t);if(eE)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ra&&(na=ra?ra[1]:""),cr){var sa=Xd();if(sa!=null&&sa>parseFloat(na)){Oa=String(sa);break e}}Oa=na}var xa;if(L.document&&cr){var Du=Xd();xa=Du||parseInt(Oa,10)||void 0}else xa=void 0;var nE=xa;function ts(t,e){if(Le.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Yd){e:{try{Dc(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:rE[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ts.$.h.call(this)}}Re(ts,Le);var rE={2:"touch",3:"pen",4:"mouse"};ts.prototype.h=function(){ts.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ts="closure_listenable_"+(1e6*Math.random()|0),sE=0;function iE(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++sE,this.fa=this.ia=!1}function ro(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function kc(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function oE(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Zd(t){const e={};for(const n in t)e[n]=t[n];return e}const ku="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ef(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<ku.length;i++)n=ku[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function so(t){this.src=t,this.g={},this.h=0}so.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=La(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new iE(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function Ma(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Qd(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(ro(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function La(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var Vc="closure_lm_"+(1e6*Math.random()|0),ia={};function tf(t,e,n,r,s){if(r&&r.once)return rf(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)tf(t,e[i],n,r,s);return null}return n=xc(n),t&&t[Ts]?t.O(e,n,Es(r)?!!r.capture:!!r,s):nf(t,e,n,!1,r,s)}function nf(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Es(s)?!!s.capture:!!s,a=Oc(t);if(a||(t[Vc]=a=new so(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=aE(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)Xv||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(of(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function aE(){function t(n){return e.call(t.src,t.listener,n)}const e=cE;return t}function rf(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)rf(t,e[i],n,r,s);return null}return n=xc(n),t&&t[Ts]?t.P(e,n,Es(r)?!!r.capture:!!r,s):nf(t,e,n,!0,r,s)}function sf(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)sf(t,e[i],n,r,s);else r=Es(r)?!!r.capture:!!r,n=xc(n),t&&t[Ts]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=La(i,n,r,s),-1<n&&(ro(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Oc(t))&&(e=t.g[e.toString()],t=-1,e&&(t=La(e,n,r,s)),(n=-1<t?e[t]:null)&&Nc(n))}function Nc(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Ts])Ma(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(of(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Oc(e))?(Ma(n,t),n.h==0&&(n.src=null,e[Vc]=null)):ro(t)}}}function of(t){return t in ia?ia[t]:ia[t]="on"+t}function cE(t,e){if(t.fa)t=!0;else{e=new ts(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Nc(t),t=n.call(r,e)}return t}function Oc(t){return t=t[Vc],t instanceof so?t:null}var oa="__closure_events_fn_"+(1e9*Math.random()>>>0);function xc(t){return typeof t=="function"?t:(t[oa]||(t[oa]=function(e){return t.handleEvent(e)}),t[oa])}function Ae(){un.call(this),this.i=new so(this),this.S=this,this.J=null}Re(Ae,un);Ae.prototype[Ts]=!0;Ae.prototype.removeEventListener=function(t,e,n,r){sf(this,t,e,n,r)};function De(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Le(e,t);else if(e instanceof Le)e.target=e.target||t;else{var s=e;e=new Le(r,t),ef(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Gs(o,r,!0,e)&&s}if(o=e.g=t,s=Gs(o,r,!0,e)&&s,s=Gs(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Gs(o,r,!1,e)&&s}Ae.prototype.N=function(){if(Ae.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ro(n[r]);delete t.g[e],t.h--}}this.J=null};Ae.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ae.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Gs(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Ma(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Mc=L.JSON.stringify;class lE{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function uE(){var t=Lc;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class hE{constructor(){this.h=this.g=null}add(e,n){const r=af.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var af=new lE(()=>new dE,t=>t.reset());class dE{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function fE(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function pE(t){L.setTimeout(()=>{throw t},0)}let ns,rs=!1,Lc=new hE,cf=()=>{const t=L.Promise.resolve(void 0);ns=()=>{t.then(gE)}};var gE=()=>{for(var t;t=uE();){try{t.h.call(t.g)}catch(n){pE(n)}var e=af;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}rs=!1};function io(t,e){Ae.call(this),this.h=t||1,this.g=e||L,this.j=Me(this.qb,this),this.l=Date.now()}Re(io,Ae);S=io.prototype;S.ga=!1;S.T=null;S.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),De(this,"tick"),this.ga&&(Fc(this),this.start()))}};S.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Fc(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}S.N=function(){io.$.N.call(this),Fc(this),delete this.g};function Uc(t,e,n){if(typeof t=="function")n&&(t=Me(t,n));else if(t&&typeof t.handleEvent=="function")t=Me(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:L.setTimeout(t,e||0)}function lf(t){t.g=Uc(()=>{t.g=null,t.i&&(t.i=!1,lf(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class mE extends un{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:lf(this)}N(){super.N(),this.g&&(L.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ss(t){un.call(this),this.h=t,this.g={}}Re(ss,un);var Vu=[];function uf(t,e,n,r){Array.isArray(n)||(n&&(Vu[0]=n.toString()),n=Vu);for(var s=0;s<n.length;s++){var i=tf(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function hf(t){kc(t.g,function(e,n){this.g.hasOwnProperty(n)&&Nc(e)},t),t.g={}}ss.prototype.N=function(){ss.$.N.call(this),hf(this)};ss.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function oo(){this.g=!0}oo.prototype.Ea=function(){this.g=!1};function _E(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var d=u.split("_");o=2<=d.length&&d[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function yE(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Gn(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+EE(t,n)+(r?" "+r:"")})}function vE(t,e){t.info(function(){return"TIMEOUT: "+e})}oo.prototype.info=function(){};function EE(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Mc(n)}catch{return e}}var Ln={},Nu=null;function ao(){return Nu=Nu||new Ae}Ln.Ta="serverreachability";function df(t){Le.call(this,Ln.Ta,t)}Re(df,Le);function is(t){const e=ao();De(e,new df(e))}Ln.STAT_EVENT="statevent";function ff(t,e){Le.call(this,Ln.STAT_EVENT,t),this.stat=e}Re(ff,Le);function He(t){const e=ao();De(e,new ff(e,t))}Ln.Ua="timingevent";function pf(t,e){Le.call(this,Ln.Ua,t),this.size=e}Re(pf,Le);function Is(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return L.setTimeout(function(){t()},e)}var co={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},gf={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Bc(){}Bc.prototype.h=null;function Ou(t){return t.h||(t.h=t.i())}function mf(){}var ws={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function jc(){Le.call(this,"d")}Re(jc,Le);function $c(){Le.call(this,"c")}Re($c,Le);var Fa;function lo(){}Re(lo,Bc);lo.prototype.g=function(){return new XMLHttpRequest};lo.prototype.i=function(){return{}};Fa=new lo;function As(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new ss(this),this.P=TE,t=Na?125:void 0,this.V=new io(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new _f}function _f(){this.i=null,this.g="",this.h=!1}var TE=45e3,yf={},Ua={};S=As.prototype;S.setTimeout=function(t){this.P=t};function Ba(t,e,n){t.L=1,t.A=ho(Ut(e)),t.u=n,t.S=!0,vf(t,null)}function vf(t,e){t.G=Date.now(),Rs(t),t.B=Ut(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),Pf(n.i,"t",r),t.o=0,n=t.l.J,t.h=new _f,t.g=Gf(t.l,n?e:null,!t.u),0<t.O&&(t.M=new mE(Me(t.Pa,t,t.g),t.O)),uf(t.U,t.g,"readystatechange",t.nb),e=t.I?Zd(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),is(),_E(t.j,t.v,t.B,t.m,t.W,t.u)}S.nb=function(t){t=t.target;const e=this.M;e&&Et(t)==3?e.l():this.Pa(t)};S.Pa=function(t){try{if(t==this.g)e:{const u=Et(this.g);var e=this.g.Ia();const d=this.g.da();if(!(3>u)&&(u!=3||Na||this.g&&(this.h.h||this.g.ja()||Fu(this.g)))){this.J||u!=4||e==7||(e==8||0>=d?is(3):is(2)),uo(this);var n=this.g.da();this.ca=n;t:if(Ef(this)){var r=Fu(this.g);t="";var s=r.length,i=Et(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){vn(this),$r(this);var o="";break t}this.h.i=new L.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,yE(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!es(a)){var l=a;break t}}l=null}if(n=l)Gn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ja(this,n);else{this.i=!1,this.s=3,He(12),vn(this),$r(this);break e}}this.S?(Tf(this,u,o),Na&&this.i&&u==3&&(uf(this.U,this.V,"tick",this.mb),this.V.start())):(Gn(this.j,this.m,o,null),ja(this,o)),u==4&&vn(this),this.i&&!this.J&&(u==4?Hf(this.l,this):(this.i=!1,Rs(this)))}else $E(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,He(12)):(this.s=0,He(13)),vn(this),$r(this)}}}catch{}finally{}};function Ef(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function Tf(t,e,n){let r=!0,s;for(;!t.J&&t.o<n.length;)if(s=IE(t,n),s==Ua){e==4&&(t.s=4,He(14),r=!1),Gn(t.j,t.m,null,"[Incomplete Response]");break}else if(s==yf){t.s=4,He(15),Gn(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Gn(t.j,t.m,s,null),ja(t,s);Ef(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,He(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Gc(e),e.M=!0,He(11))):(Gn(t.j,t.m,n,"[Invalid Chunked Response]"),vn(t),$r(t))}S.mb=function(){if(this.g){var t=Et(this.g),e=this.g.ja();this.o<e.length&&(uo(this),Tf(this,t,e),this.i&&t!=4&&Rs(this))}};function IE(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?Ua:(n=Number(e.substring(n,r)),isNaN(n)?yf:(r+=1,r+n>e.length?Ua:(e=e.slice(r,r+n),t.o=r+n,e)))}S.cancel=function(){this.J=!0,vn(this)};function Rs(t){t.Y=Date.now()+t.P,If(t,t.P)}function If(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Is(Me(t.lb,t),e)}function uo(t){t.C&&(L.clearTimeout(t.C),t.C=null)}S.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(vE(this.j,this.B),this.L!=2&&(is(),He(17)),vn(this),this.s=2,$r(this)):If(this,this.Y-t)};function $r(t){t.l.H==0||t.J||Hf(t.l,t)}function vn(t){uo(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Fc(t.V),hf(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function ja(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||$a(n.i,t))){if(!t.K&&$a(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Si(n),mo(n);else break e;Wc(n),He(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Is(Me(n.ib,n),6e3));if(1>=Df(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else En(n,11)}else if((t.K||n.g==t)&&Si(n),!es(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const d=l[4];d!=null&&(n.Ga=d,n.l.info("SVER="+n.Ga));const p=l[5];p!=null&&typeof p=="number"&&0<p&&(r=1.5*p,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const k=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(k){var i=r.i;i.g||k.indexOf("spdy")==-1&&k.indexOf("quic")==-1&&k.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(qc(i,i.h),i.h=null))}if(r.F){const C=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;C&&(r.Da=C,ae(r.I,r.F,C))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=Wf(r,r.J?r.pa:null,r.Y),o.K){kf(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(uo(a),Rs(a)),r.g=o}else $f(r);0<n.j.length&&_o(n)}else l[0]!="stop"&&l[0]!="close"||En(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?En(n,7):Kc(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}is(4)}catch{}}function wE(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(to(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function AE(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(to(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function wf(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(to(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=AE(t),r=wE(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var Af=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function RE(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Sn(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Sn){this.h=t.h,Ai(this,t.j),this.s=t.s,this.g=t.g,Ri(this,t.m),this.l=t.l;var e=t.i,n=new os;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),xu(this,n),this.o=t.o}else t&&(e=String(t).match(Af))?(this.h=!1,Ai(this,e[1]||"",!0),this.s=Or(e[2]||""),this.g=Or(e[3]||"",!0),Ri(this,e[4]),this.l=Or(e[5]||"",!0),xu(this,e[6]||"",!0),this.o=Or(e[7]||"")):(this.h=!1,this.i=new os(null,this.h))}Sn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(xr(e,Mu,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(xr(e,Mu,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(xr(n,n.charAt(0)=="/"?CE:PE,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",xr(n,DE)),t.join("")};function Ut(t){return new Sn(t)}function Ai(t,e,n){t.j=n?Or(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ri(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function xu(t,e,n){e instanceof os?(t.i=e,kE(t.i,t.h)):(n||(e=xr(e,bE)),t.i=new os(e,t.h))}function ae(t,e,n){t.i.set(e,n)}function ho(t){return ae(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Or(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function xr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,SE),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function SE(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Mu=/[#\/\?@]/g,PE=/[#\?:]/g,CE=/[#\?]/g,bE=/[#\?@]/g,DE=/#/g;function os(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function hn(t){t.g||(t.g=new Map,t.h=0,t.i&&RE(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}S=os.prototype;S.add=function(t,e){hn(this),this.i=null,t=Er(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Rf(t,e){hn(t),e=Er(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Sf(t,e){return hn(t),e=Er(t,e),t.g.has(e)}S.forEach=function(t,e){hn(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};S.ta=function(){hn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};S.Z=function(t){hn(this);let e=[];if(typeof t=="string")Sf(this,t)&&(e=e.concat(this.g.get(Er(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};S.set=function(t,e){return hn(this),this.i=null,t=Er(this,t),Sf(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};S.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Pf(t,e,n){Rf(t,e),0<n.length&&(t.i=null,t.g.set(Er(t,e),bc(n)),t.h+=n.length)}S.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function Er(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function kE(t,e){e&&!t.j&&(hn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Rf(this,r),Pf(this,s,n))},t)),t.j=e}var VE=class{constructor(t,e){this.g=t,this.map=e}};function Cf(t){this.l=t||NE,L.PerformanceNavigationTiming?(t=L.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(L.g&&L.g.Ka&&L.g.Ka()&&L.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var NE=10;function bf(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Df(t){return t.h?1:t.g?t.g.size:0}function $a(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function qc(t,e){t.g?t.g.add(e):t.h=e}function kf(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Cf.prototype.cancel=function(){if(this.i=Vf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Vf(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return bc(t.i)}var OE=class{stringify(t){return L.JSON.stringify(t,void 0)}parse(t){return L.JSON.parse(t,void 0)}};function xE(){this.g=new OE}function ME(t,e,n){const r=n||"";try{wf(t,function(s,i){let o=s;Es(s)&&(o=Mc(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function LE(t,e){const n=new oo;if(L.Image){const r=new Image;r.onload=Ws(Qs,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ws(Qs,n,r,"TestLoadImage: error",!1,e),r.onabort=Ws(Qs,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ws(Qs,n,r,"TestLoadImage: timeout",!1,e),L.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Qs(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function fo(t){this.l=t.ec||null,this.j=t.ob||!1}Re(fo,Bc);fo.prototype.g=function(){return new po(this.l,this.j)};fo.prototype.i=function(t){return function(){return t}}({});function po(t,e){Ae.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Hc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Re(po,Ae);var Hc=0;S=po.prototype;S.open=function(t,e){if(this.readyState!=Hc)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,as(this)};S.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||L).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};S.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ss(this)),this.readyState=Hc};S.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,as(this)),this.g&&(this.readyState=3,as(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof L.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Nf(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Nf(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}S.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ss(this):as(this),this.readyState==3&&Nf(this)}};S.Za=function(t){this.g&&(this.response=this.responseText=t,Ss(this))};S.Ya=function(t){this.g&&(this.response=t,Ss(this))};S.ka=function(){this.g&&Ss(this)};function Ss(t){t.readyState=4,t.l=null,t.j=null,t.A=null,as(t)}S.setRequestHeader=function(t,e){this.v.append(t,e)};S.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};S.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function as(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(po.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var FE=L.JSON.parse;function pe(t){Ae.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Of,this.L=this.M=!1}Re(pe,Ae);var Of="",UE=/^https?$/i,BE=["POST","PUT"];S=pe.prototype;S.Oa=function(t){this.M=t};S.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Fa.g(),this.C=this.u?Ou(this.u):Ou(Fa),this.g.onreadystatechange=Me(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){Lu(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=L.FormData&&t instanceof L.FormData,!(0<=Qd(BE,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Lf(this),0<this.B&&((this.L=jE(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Me(this.ua,this)):this.A=Uc(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Lu(this,i)}};function jE(t){return cr&&typeof t.timeout=="number"&&t.ontimeout!==void 0}S.ua=function(){typeof Cc<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,De(this,"timeout"),this.abort(8))};function Lu(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,xf(t),go(t)}function xf(t){t.F||(t.F=!0,De(t,"complete"),De(t,"error"))}S.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,De(this,"complete"),De(this,"abort"),go(this))};S.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),go(this,!0)),pe.$.N.call(this)};S.La=function(){this.s||(this.G||this.v||this.l?Mf(this):this.kb())};S.kb=function(){Mf(this)};function Mf(t){if(t.h&&typeof Cc<"u"&&(!t.C[1]||Et(t)!=4||t.da()!=2)){if(t.v&&Et(t)==4)Uc(t.La,0,t);else if(De(t,"readystatechange"),Et(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(Af)[1]||null;!s&&L.self&&L.self.location&&(s=L.self.location.protocol.slice(0,-1)),r=!UE.test(s?s.toLowerCase():"")}n=r}if(n)De(t,"complete"),De(t,"success");else{t.m=6;try{var i=2<Et(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",xf(t)}}finally{go(t)}}}}function go(t,e){if(t.g){Lf(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||De(t,"ready");try{n.onreadystatechange=r}catch{}}}function Lf(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(L.clearTimeout(t.A),t.A=null)}S.isActive=function(){return!!this.g};function Et(t){return t.g?t.g.readyState:0}S.da=function(){try{return 2<Et(this)?this.g.status:-1}catch{return-1}};S.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};S.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),FE(e)}};function Fu(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Of:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function $E(t){const e={};t=(t.g&&2<=Et(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(es(t[r]))continue;var n=fE(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}oE(e,function(r){return r.join(", ")})}S.Ia=function(){return this.m};S.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Ff(t){let e="";return kc(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function zc(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Ff(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ae(t,e,n))}function Dr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Uf(t){this.Ga=0,this.j=[],this.l=new oo,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Dr("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Dr("baseRetryDelayMs",5e3,t),this.hb=Dr("retryDelaySeedMs",1e4,t),this.eb=Dr("forwardChannelMaxRetries",2,t),this.xa=Dr("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Cf(t&&t.concurrentRequestLimit),this.Ja=new xE,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}S=Uf.prototype;S.ra=8;S.H=1;function Kc(t){if(Bf(t),t.H==3){var e=t.W++,n=Ut(t.I);if(ae(n,"SID",t.K),ae(n,"RID",e),ae(n,"TYPE","terminate"),Ps(t,n),e=new As(t,t.l,e),e.L=2,e.A=ho(Ut(n)),n=!1,L.navigator&&L.navigator.sendBeacon)try{n=L.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&L.Image&&(new Image().src=e.A,n=!0),n||(e.g=Gf(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Rs(e)}Kf(t)}function mo(t){t.g&&(Gc(t),t.g.cancel(),t.g=null)}function Bf(t){mo(t),t.u&&(L.clearTimeout(t.u),t.u=null),Si(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&L.clearTimeout(t.m),t.m=null)}function _o(t){if(!bf(t.i)&&!t.m){t.m=!0;var e=t.Na;ns||cf(),rs||(ns(),rs=!0),Lc.add(e,t),t.C=0}}function qE(t,e){return Df(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Is(Me(t.Na,t,e),zf(t,t.C)),t.C++,!0)}S.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new As(this,this.l,t);let i=this.s;if(this.U&&(i?(i=Zd(i),ef(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=jf(this,s,e),n=Ut(this.I),ae(n,"RID",t),ae(n,"CVER",22),this.F&&ae(n,"X-HTTP-Session-Id",this.F),Ps(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Ff(i)))+"&"+e:this.o&&zc(n,this.o,i)),qc(this.i,s),this.bb&&ae(n,"TYPE","init"),this.P?(ae(n,"$req",e),ae(n,"SID","null"),s.aa=!0,Ba(s,n,null)):Ba(s,n,e),this.H=2}}else this.H==3&&(t?Uu(this,t):this.j.length==0||bf(this.i)||Uu(this))};function Uu(t,e){var n;e?n=e.m:n=t.W++;const r=Ut(t.I);ae(r,"SID",t.K),ae(r,"RID",n),ae(r,"AID",t.V),Ps(t,r),t.o&&t.s&&zc(r,t.o,t.s),n=new As(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=jf(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),qc(t.i,n),Ba(n,r,e)}function Ps(t,e){t.na&&kc(t.na,function(n,r){ae(e,r,n)}),t.h&&wf({},function(n,r){ae(e,r,n)})}function jf(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Me(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{ME(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function $f(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;ns||cf(),rs||(ns(),rs=!0),Lc.add(e,t),t.A=0}}function Wc(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Is(Me(t.Ma,t),zf(t,t.A)),t.A++,!0)}S.Ma=function(){if(this.u=null,qf(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Is(Me(this.jb,this),t)}};S.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,He(10),mo(this),qf(this))};function Gc(t){t.B!=null&&(L.clearTimeout(t.B),t.B=null)}function qf(t){t.g=new As(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Ut(t.wa);ae(e,"RID","rpc"),ae(e,"SID",t.K),ae(e,"AID",t.V),ae(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ae(e,"TO",t.qa),ae(e,"TYPE","xmlhttp"),Ps(t,e),t.o&&t.s&&zc(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=ho(Ut(e)),n.u=null,n.S=!0,vf(n,t)}S.ib=function(){this.v!=null&&(this.v=null,mo(this),Wc(this),He(19))};function Si(t){t.v!=null&&(L.clearTimeout(t.v),t.v=null)}function Hf(t,e){var n=null;if(t.g==e){Si(t),Gc(t),t.g=null;var r=2}else if($a(t.i,e))n=e.F,kf(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var s=t.C;r=ao(),De(r,new pf(r,n)),_o(t)}else $f(t);else if(s=e.s,s==3||s==0&&0<e.ca||!(r==1&&qE(t,e)||r==2&&Wc(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:En(t,5);break;case 4:En(t,10);break;case 3:En(t,6);break;default:En(t,2)}}}function zf(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function En(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Me(t.pb,t);n||(n=new Sn("//www.google.com/images/cleardot.gif"),L.location&&L.location.protocol=="http"||Ai(n,"https"),ho(n)),LE(n.toString(),r)}else He(2);t.H=0,t.h&&t.h.za(e),Kf(t),Bf(t)}S.pb=function(t){t?(this.l.info("Successfully pinged google.com"),He(2)):(this.l.info("Failed to ping google.com"),He(1))};function Kf(t){if(t.H=0,t.ma=[],t.h){const e=Vf(t.i);(e.length!=0||t.j.length!=0)&&(bu(t.ma,e),bu(t.ma,t.j),t.i.i.length=0,bc(t.j),t.j.length=0),t.h.ya()}}function Wf(t,e,n){var r=n instanceof Sn?Ut(n):new Sn(n);if(r.g!="")e&&(r.g=e+"."+r.g),Ri(r,r.m);else{var s=L.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new Sn(null);r&&Ai(i,r),e&&(i.g=e),s&&Ri(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&ae(r,n,e),ae(r,"VER",t.ra),Ps(t,r),r}function Gf(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new pe(new fo({ob:n})):new pe(t.va),e.Oa(t.J),e}S.isActive=function(){return!!this.h&&this.h.isActive(this)};function Qf(){}S=Qf.prototype;S.Ba=function(){};S.Aa=function(){};S.za=function(){};S.ya=function(){};S.isActive=function(){return!0};S.Va=function(){};function Pi(){if(cr&&!(10<=Number(nE)))throw Error("Environmental error: no available transport.")}Pi.prototype.g=function(t,e){return new Ye(t,e)};function Ye(t,e){Ae.call(this),this.g=new Uf(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!es(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!es(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Tr(this)}Re(Ye,Ae);Ye.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;He(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Wf(t,null,t.Y),_o(t)};Ye.prototype.close=function(){Kc(this.g)};Ye.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Mc(t),t=n);e.j.push(new VE(e.fb++,t)),e.H==3&&_o(e)};Ye.prototype.N=function(){this.g.h=null,delete this.j,Kc(this.g),delete this.g,Ye.$.N.call(this)};function Jf(t){jc.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Re(Jf,jc);function Yf(){$c.call(this),this.status=1}Re(Yf,$c);function Tr(t){this.g=t}Re(Tr,Qf);Tr.prototype.Ba=function(){De(this.g,"a")};Tr.prototype.Aa=function(t){De(this.g,new Jf(t))};Tr.prototype.za=function(t){De(this.g,new Yf)};Tr.prototype.ya=function(){De(this.g,"b")};function HE(){this.blockSize=-1}function ut(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Re(ut,HE);ut.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function aa(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}ut.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)aa(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){aa(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){aa(this,r),s=0;break}}this.h=s,this.i+=e};ut.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ne(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var zE={};function Qc(t){return-128<=t&&128>t?Zv(t,function(e){return new ne([e|0],0>e?-1:0)}):new ne([t|0],0>t?-1:0)}function Tt(t){if(isNaN(t)||!isFinite(t))return Zn;if(0>t)return Ce(Tt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=qa;return new ne(e,0)}function Xf(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ce(Xf(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Tt(Math.pow(e,8)),r=Zn,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=Tt(Math.pow(e,i)),r=r.R(i).add(Tt(o))):(r=r.R(n),r=r.add(Tt(o)))}return r}var qa=4294967296,Zn=Qc(0),Ha=Qc(1),Bu=Qc(16777216);S=ne.prototype;S.ea=function(){if(Ze(this))return-Ce(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:qa+r)*e,e*=qa}return t};S.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Nt(this))return"0";if(Ze(this))return"-"+Ce(this).toString(t);for(var e=Tt(Math.pow(t,6)),n=this,r="";;){var s=bi(n,e).g;n=Ci(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,Nt(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};S.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Nt(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Ze(t){return t.h==-1}S.X=function(t){return t=Ci(this,t),Ze(t)?-1:Nt(t)?0:1};function Ce(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ne(n,~t.h).add(Ha)}S.abs=function(){return Ze(this)?Ce(this):this};S.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new ne(n,n[n.length-1]&-2147483648?-1:0)};function Ci(t,e){return t.add(Ce(e))}S.R=function(t){if(Nt(this)||Nt(t))return Zn;if(Ze(this))return Ze(t)?Ce(this).R(Ce(t)):Ce(Ce(this).R(t));if(Ze(t))return Ce(this.R(Ce(t)));if(0>this.X(Bu)&&0>t.X(Bu))return Tt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,Js(n,2*r+2*s),n[2*r+2*s+1]+=i*c,Js(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Js(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Js(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ne(n,0)};function Js(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function kr(t,e){this.g=t,this.h=e}function bi(t,e){if(Nt(e))throw Error("division by zero");if(Nt(t))return new kr(Zn,Zn);if(Ze(t))return e=bi(Ce(t),e),new kr(Ce(e.g),Ce(e.h));if(Ze(e))return e=bi(t,Ce(e)),new kr(Ce(e.g),e.h);if(30<t.g.length){if(Ze(t)||Ze(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Ha,r=e;0>=r.X(t);)n=ju(n),r=ju(r);var s=$n(n,1),i=$n(r,1);for(r=$n(r,2),n=$n(n,2);!Nt(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=$n(r,1),n=$n(n,1)}return e=Ci(t,s.R(e)),new kr(s,e)}for(s=Zn;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=Tt(n),o=i.R(e);Ze(o)||0<o.X(t);)n-=r,i=Tt(n),o=i.R(e);Nt(i)&&(i=Ha),s=s.add(i),t=Ci(t,o)}return new kr(s,t)}S.gb=function(t){return bi(this,t).h};S.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ne(n,this.h&t.h)};S.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ne(n,this.h|t.h)};S.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ne(n,this.h^t.h)};function ju(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ne(n,t.h)}function $n(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new ne(s,t.h)}Pi.prototype.createWebChannel=Pi.prototype.g;Ye.prototype.send=Ye.prototype.u;Ye.prototype.open=Ye.prototype.m;Ye.prototype.close=Ye.prototype.close;co.NO_ERROR=0;co.TIMEOUT=8;co.HTTP_ERROR=6;gf.COMPLETE="complete";mf.EventType=ws;ws.OPEN="a";ws.CLOSE="b";ws.ERROR="c";ws.MESSAGE="d";Ae.prototype.listen=Ae.prototype.O;pe.prototype.listenOnce=pe.prototype.P;pe.prototype.getLastError=pe.prototype.Sa;pe.prototype.getLastErrorCode=pe.prototype.Ia;pe.prototype.getStatus=pe.prototype.da;pe.prototype.getResponseJson=pe.prototype.Wa;pe.prototype.getResponseText=pe.prototype.ja;pe.prototype.send=pe.prototype.ha;pe.prototype.setWithCredentials=pe.prototype.Oa;ut.prototype.digest=ut.prototype.l;ut.prototype.reset=ut.prototype.reset;ut.prototype.update=ut.prototype.j;ne.prototype.add=ne.prototype.add;ne.prototype.multiply=ne.prototype.R;ne.prototype.modulo=ne.prototype.gb;ne.prototype.compare=ne.prototype.X;ne.prototype.toNumber=ne.prototype.ea;ne.prototype.toString=ne.prototype.toString;ne.prototype.getBits=ne.prototype.D;ne.fromNumber=Tt;ne.fromString=Xf;var KE=function(){return new Pi},WE=function(){return ao()},ca=co,GE=gf,QE=Ln,$u={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Ys=mf,JE=pe,YE=ut,er=ne;const qu="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ne.UNAUTHENTICATED=new Ne(null),Ne.GOOGLE_CREDENTIALS=new Ne("google-credentials-uid"),Ne.FIRST_PARTY=new Ne("first-party-uid"),Ne.MOCK_USER=new Ne("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ir="10.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn=new Rc("@firebase/firestore");function Vr(){return kn.logLevel}function R(t,...e){if(kn.logLevel<=Q.DEBUG){const n=e.map(Jc);kn.debug(`Firestore (${Ir}): ${t}`,...n)}}function St(t,...e){if(kn.logLevel<=Q.ERROR){const n=e.map(Jc);kn.error(`Firestore (${Ir}): ${t}`,...n)}}function lr(t,...e){if(kn.logLevel<=Q.WARN){const n=e.map(Jc);kn.warn(`Firestore (${Ir}): ${t}`,...n)}}function Jc(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(t="Unexpected state"){const e=`FIRESTORE (${Ir}) INTERNAL ASSERTION FAILED: `+t;throw St(e),new Error(e)}function ie(t,e){t||M()}function H(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends qt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class XE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ne.UNAUTHENTICATED))}shutdown(){}}class ZE{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class eT{constructor(e){this.t=e,this.currentUser=Ne.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Lt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Lt,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{R("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(R("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Lt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(R("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ie(typeof r.accessToken=="string"),new Zf(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ie(e===null||typeof e=="string"),new Ne(e)}}class tT{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ne.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class nT{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new tT(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ne.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class rT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class sT{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&R("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,R("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{R("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):R("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ie(typeof n.token=="string"),this.R=n.token,new rT(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iT(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=iT(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ee(t,e){return t<e?-1:t>e?1:0}function ur(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new V(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new V(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new V(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ee.fromMillis(Date.now())}static fromDate(e){return Ee.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ee(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ee(this.nanoseconds,e.nanoseconds):ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.timestamp=e}static fromTimestamp(e){return new j(e)}static min(){return new j(new Ee(0,0))}static max(){return new j(new Ee(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,n,r){n===void 0?n=0:n>e.length&&M(),r===void 0?r=e.length-n:r>e.length-n&&M(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return cs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof cs?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ue extends cs{construct(e,n,r){return new ue(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new V(E.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new ue(n)}static emptyPath(){return new ue([])}}const oT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class be extends cs{construct(e,n,r){return new be(e,n,r)}static isValidIdentifier(e){return oT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),be.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new be(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new V(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new V(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new V(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new V(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new be(n)}static emptyPath(){return new be([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.path=e}static fromPath(e){return new O(ue.fromString(e))}static fromName(e){return new O(ue.fromString(e).popFirst(5))}static empty(){return new O(ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ue.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new O(new ue(e.slice()))}}function aT(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=j.fromTimestamp(r===1e9?new Ee(n+1,0):new Ee(n,r));return new an(s,O.empty(),e)}function cT(t){return new an(t.readTime,t.key,-1)}class an{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new an(j.min(),O.empty(),-1)}static max(){return new an(j.max(),O.empty(),-1)}}function lT(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=O.comparator(t.documentKey,e.documentKey),n!==0?n:ee(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class hT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cs(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==uT)throw t;R("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new _((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof _?n:_.resolve(n)}catch(n){return _.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):_.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):_.reject(n)}static resolve(e){return new _((n,r)=>{n(e)})}static reject(e){return new _((n,r)=>{r(e)})}static waitFor(e){return new _((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=_.resolve(!1);for(const r of e)n=n.next(s=>s?_.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new _((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new _((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new Lt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new qr(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const s=Xc(r.target.error);this.V.reject(new qr(e,s))}}static open(e,n,r,s){try{return new Yc(n,e.transaction(s,r))}catch(i){throw new qr(n,i)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(R("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new fT(n)}}class Tn{constructor(e,n,r){this.name=e,this.version=n,this.p=r,Tn.S(ye())===12.2&&St("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return R("SimpleDb","Removing database:",e),yn(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!$d())return!1;if(Tn.C())return!0;const e=ye(),n=Tn.S(e),r=0<n&&n<10,s=Tn.v(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(R("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;n(o)},s.onblocked=()=>{r(new qr(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new V(E.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new V(E.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new qr(e,o))},s.onupgradeneeded=i=>{R("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.N(o,s.transaction,i.oldVersion,this.version).next(()=>{R("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=n=>this.L(n)),this.db}B(e){this.L=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,s){const i=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=Yc.open(this.db,e,i?"readonly":"readwrite",r),c=s(a).next(l=>(a.g(),l)).catch(l=>(a.abort(l),_.reject(l))).toPromise();return c.catch(()=>{}),await a.m,c}catch(a){const c=a,l=c.name!=="FirebaseError"&&o<3;if(R("SimpleDb","Transaction failed with error:",c.message,"Retrying:",l),this.close(),!l)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class dT{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return yn(this.k.delete())}}class qr extends V{constructor(e,n){super(E.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function bs(t){return t.name==="IndexedDbTransactionError"}class fT{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(R("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(R("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),yn(r)}add(e){return R("SimpleDb","ADD",this.store.name,e,e),yn(this.store.add(e))}get(e){return yn(this.store.get(e)).next(n=>(n===void 0&&(n=null),R("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return R("SimpleDb","DELETE",this.store.name,e),yn(this.store.delete(e))}count(){return R("SimpleDb","COUNT",this.store.name),yn(this.store.count())}W(e,n){const r=this.options(e,n),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new _((o,a)=>{i.onerror=c=>{a(c.target.error)},i.onsuccess=c=>{o(c.target.result)}})}{const i=this.cursor(r),o=[];return this.G(i,(a,c)=>{o.push(c)}).next(()=>o)}}j(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new _((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}H(e,n){R("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.J=!1;const s=this.cursor(r);return this.G(s,(i,o,a)=>a.delete())}Y(e,n){let r;n?r=e:(r={},n=e);const s=this.cursor(r);return this.G(s,n)}Z(e){const n=this.cursor({});return new _((r,s)=>{n.onerror=i=>{const o=Xc(i.target.error);s(o)},n.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(e,n){const r=[];return new _((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const c=new dT(a),l=n(a.primaryKey,a.value,c);if(l instanceof _){const u=l.catch(d=>(c.done(),_.reject(d)));r.push(u)}c.isDone?s():c.$===null?a.continue():a.continue(c.$)}}).next(()=>_.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function yn(t){return new _((e,n)=>{t.onsuccess=r=>{const s=r.target.result;e(s)},t.onerror=r=>{const s=Xc(r.target.error);n(s)}})}let Hu=!1;function Xc(t){const e=Tn.S(ye());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new V("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Hu||(Hu=!0,setTimeout(()=>{throw r},0)),r}}return t}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Zc._e=-1;function yo(t){return t==null}function Di(t){return t===0&&1/t==-1/0}function pT(t){return typeof t=="number"&&Number.isInteger(t)&&!Di(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zu(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function wr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function tp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e,n){this.comparator=e,this.root=n||Pe.EMPTY}insert(e,n){return new fe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Pe.BLACK,null,null))}remove(e){return new fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Xs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Xs(this.root,e,this.comparator,!1)}getReverseIterator(){return new Xs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Xs(this.root,e,this.comparator,!0)}}class Xs{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Pe{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Pe.RED,this.left=s??Pe.EMPTY,this.right=i??Pe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Pe(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Pe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Pe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();const e=this.left.check();if(e!==this.right.check())throw M();return e+(this.isRed()?0:1)}}Pe.EMPTY=null,Pe.RED=!0,Pe.BLACK=!1;Pe.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Pe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this.comparator=e,this.data=new fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ku(this.data.getIterator())}getIteratorFrom(e){return new Ku(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ke)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ke(this.comparator);return n.data=e,n}}class Ku{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.fields=e,e.sort(be.comparator)}static empty(){return new at([])}unionWith(e){let n=new ke(be.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new at(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ur(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new np("Invalid base64 string: "+i):i}}(e);return new Ue(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Ue(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ue.EMPTY_BYTE_STRING=new Ue("");const gT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function cn(t){if(ie(!!t),typeof t=="string"){let e=0;const n=gT.exec(t);if(ie(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:_e(t.seconds),nanos:_e(t.nanos)}}function _e(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Vn(t){return typeof t=="string"?Ue.fromBase64String(t):Ue.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function tl(t){const e=t.mapValue.fields.__previous_value__;return el(e)?tl(e):e}function ls(t){const e=cn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ee(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{constructor(e,n,r,s,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class us{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new us("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof us&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Nn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?el(t)?4:_T(t)?9007199254740991:10:M()}function Pt(t,e){if(t===e)return!0;const n=Nn(t);if(n!==Nn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ls(t).isEqual(ls(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=cn(s.timestampValue),a=cn(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Vn(s.bytesValue).isEqual(Vn(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return _e(s.geoPointValue.latitude)===_e(i.geoPointValue.latitude)&&_e(s.geoPointValue.longitude)===_e(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return _e(s.integerValue)===_e(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=_e(s.doubleValue),a=_e(i.doubleValue);return o===a?Di(o)===Di(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ur(t.arrayValue.values||[],e.arrayValue.values||[],Pt);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(zu(o)!==zu(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Pt(o[c],a[c])))return!1;return!0}(t,e);default:return M()}}function hs(t,e){return(t.values||[]).find(n=>Pt(n,e))!==void 0}function hr(t,e){if(t===e)return 0;const n=Nn(t),r=Nn(e);if(n!==r)return ee(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ee(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=_e(i.integerValue||i.doubleValue),c=_e(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return Wu(t.timestampValue,e.timestampValue);case 4:return Wu(ls(t),ls(e));case 5:return ee(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Vn(i),c=Vn(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=ee(a[l],c[l]);if(u!==0)return u}return ee(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=ee(_e(i.latitude),_e(o.latitude));return a!==0?a:ee(_e(i.longitude),_e(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=hr(a[l],c[l]);if(u)return u}return ee(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===Zs.mapValue&&o===Zs.mapValue)return 0;if(i===Zs.mapValue)return 1;if(o===Zs.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let d=0;d<c.length&&d<u.length;++d){const p=ee(c[d],u[d]);if(p!==0)return p;const g=hr(a[c[d]],l[u[d]]);if(g!==0)return g}return ee(c.length,u.length)}(t.mapValue,e.mapValue);default:throw M()}}function Wu(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ee(t,e);const n=cn(t),r=cn(e),s=ee(n.seconds,r.seconds);return s!==0?s:ee(n.nanos,r.nanos)}function dr(t){return za(t)}function za(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=cn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Vn(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return O.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=za(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${za(n.fields[o])}`;return s+"}"}(t.mapValue):M()}function Ka(t){return!!t&&"integerValue"in t}function nl(t){return!!t&&"arrayValue"in t}function Gu(t){return!!t&&"nullValue"in t}function Qu(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ci(t){return!!t&&"mapValue"in t}function Hr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return wr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Hr(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Hr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function _T(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.value=e}static empty(){return new et({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ci(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Hr(n)}setAll(e){let n=be.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Hr(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());ci(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Pt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];ci(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){wr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new et(Hr(this.value))}}function rp(t){const e=[];return wr(t.fields,(n,r)=>{const s=new be([n]);if(ci(r)){const i=rp(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new at(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Oe(e,0,j.min(),j.min(),j.min(),et.empty(),0)}static newFoundDocument(e,n,r,s){return new Oe(e,1,n,j.min(),r,s,0)}static newNoDocument(e,n){return new Oe(e,2,n,j.min(),j.min(),et.empty(),0)}static newUnknownDocument(e,n){return new Oe(e,3,n,j.min(),j.min(),et.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(j.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=et.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=j.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Oe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Oe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,n){this.position=e,this.inclusive=n}}function Ju(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=O.comparator(O.fromName(o.referenceValue),n.key):r=hr(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Yu(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Pt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,n="asc"){this.field=e,this.dir=n}}function yT(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{}class ve extends sp{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new ET(e,n,r):n==="array-contains"?new wT(e,r):n==="in"?new AT(e,r):n==="not-in"?new RT(e,r):n==="array-contains-any"?new ST(e,r):new ve(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new TT(e,r):new IT(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(hr(n,this.value)):n!==null&&Nn(this.value)===Nn(n)&&this.matchesComparison(hr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ct extends sp{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new Ct(e,n)}matches(e){return ip(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function ip(t){return t.op==="and"}function op(t){return vT(t)&&ip(t)}function vT(t){for(const e of t.filters)if(e instanceof Ct)return!1;return!0}function Wa(t){if(t instanceof ve)return t.field.canonicalString()+t.op.toString()+dr(t.value);if(op(t))return t.filters.map(e=>Wa(e)).join(",");{const e=t.filters.map(n=>Wa(n)).join(",");return`${t.op}(${e})`}}function ap(t,e){return t instanceof ve?function(r,s){return s instanceof ve&&r.op===s.op&&r.field.isEqual(s.field)&&Pt(r.value,s.value)}(t,e):t instanceof Ct?function(r,s){return s instanceof Ct&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&ap(o,s.filters[a]),!0):!1}(t,e):void M()}function cp(t){return t instanceof ve?function(n){return`${n.field.canonicalString()} ${n.op} ${dr(n.value)}`}(t):t instanceof Ct?function(n){return n.op.toString()+" {"+n.getFilters().map(cp).join(" ,")+"}"}(t):"Filter"}class ET extends ve{constructor(e,n,r){super(e,n,r),this.key=O.fromName(r.referenceValue)}matches(e){const n=O.comparator(e.key,this.key);return this.matchesComparison(n)}}class TT extends ve{constructor(e,n){super(e,"in",n),this.keys=lp("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class IT extends ve{constructor(e,n){super(e,"not-in",n),this.keys=lp("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function lp(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>O.fromName(r.referenceValue))}class wT extends ve{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return nl(n)&&hs(n.arrayValue,this.value)}}class AT extends ve{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&hs(this.value.arrayValue,n)}}class RT extends ve{constructor(e,n){super(e,"not-in",n)}matches(e){if(hs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!hs(this.value.arrayValue,n)}}class ST extends ve{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!nl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>hs(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function Xu(t,e=null,n=[],r=[],s=null,i=null,o=null){return new PT(t,e,n,r,s,i,o)}function rl(t){const e=H(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Wa(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),yo(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>dr(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>dr(r)).join(",")),e.ce=n}return e.ce}function sl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!yT(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ap(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Yu(t.startAt,e.startAt)&&Yu(t.endAt,e.endAt)}function Ga(t){return O.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function CT(t,e,n,r,s,i,o,a){return new vo(t,e,n,r,s,i,o,a)}function up(t){return new vo(t)}function Zu(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function bT(t){return t.collectionGroup!==null}function zr(t){const e=H(t);if(e.le===null){e.le=[];const n=new Set;for(const i of e.explicitOrderBy)e.le.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ke(be.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.le.push(new Vi(i,r))}),n.has(be.keyField().canonicalString())||e.le.push(new Vi(be.keyField(),r))}return e.le}function It(t){const e=H(t);return e.he||(e.he=DT(e,zr(t))),e.he}function DT(t,e){if(t.limitType==="F")return Xu(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Vi(s.field,i)});const n=t.endAt?new ki(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ki(t.startAt.position,t.startAt.inclusive):null;return Xu(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Qa(t,e,n){return new vo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Eo(t,e){return sl(It(t),It(e))&&t.limitType===e.limitType}function hp(t){return`${rl(It(t))}|lt:${t.limitType}`}function qn(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>cp(s)).join(", ")}]`),yo(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>dr(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>dr(s)).join(",")),`Target(${r})`}(It(t))}; limitType=${t.limitType})`}function To(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):O.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of zr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=Ju(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,zr(r),s)||r.endAt&&!function(o,a,c){const l=Ju(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,zr(r),s))}(t,e)}function kT(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function dp(t){return(e,n)=>{let r=!1;for(const s of zr(t)){const i=VT(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function VT(t,e,n){const r=t.field.isKeyField()?O.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?hr(c,l):M()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return M()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){wr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return tp(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT=new fe(O.comparator);function Bt(){return NT}const fp=new fe(O.comparator);function Mr(...t){let e=fp;for(const n of t)e=e.insert(n.key,n);return e}function pp(t){let e=fp;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function In(){return Kr()}function gp(){return Kr()}function Kr(){return new Ar(t=>t.toString(),(t,e)=>t.isEqual(e))}const OT=new fe(O.comparator),xT=new ke(O.comparator);function G(...t){let e=xT;for(const n of t)e=e.add(n);return e}const MT=new ke(ee);function LT(){return MT}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Di(e)?"-0":e}}function _p(t){return{integerValue:""+t}}function FT(t,e){return pT(e)?_p(e):mp(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(){this._=void 0}}function UT(t,e,n){return t instanceof ds?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&el(i)&&(i=tl(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof fs?vp(t,e):t instanceof ps?Ep(t,e):function(s,i){const o=yp(s,i),a=eh(o)+eh(s.Ie);return Ka(o)&&Ka(s.Ie)?_p(a):mp(s.serializer,a)}(t,e)}function BT(t,e,n){return t instanceof fs?vp(t,e):t instanceof ps?Ep(t,e):n}function yp(t,e){return t instanceof Ni?function(r){return Ka(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ds extends Io{}class fs extends Io{constructor(e){super(),this.elements=e}}function vp(t,e){const n=Tp(e);for(const r of t.elements)n.some(s=>Pt(s,r))||n.push(r);return{arrayValue:{values:n}}}class ps extends Io{constructor(e){super(),this.elements=e}}function Ep(t,e){let n=Tp(e);for(const r of t.elements)n=n.filter(s=>!Pt(s,r));return{arrayValue:{values:n}}}class Ni extends Io{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function eh(t){return _e(t.integerValue||t.doubleValue)}function Tp(t){return nl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(e,n){this.field=e,this.transform=n}}function $T(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof fs&&s instanceof fs||r instanceof ps&&s instanceof ps?ur(r.elements,s.elements,Pt):r instanceof Ni&&s instanceof Ni?Pt(r.Ie,s.Ie):r instanceof ds&&s instanceof ds}(t.transform,e.transform)}class qT{constructor(e,n){this.version=e,this.transformResults=n}}class Ft{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ft}static exists(e){return new Ft(void 0,e)}static updateTime(e){return new Ft(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function li(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class wo{}function Ip(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ap(t.key,Ft.none()):new Ds(t.key,t.data,Ft.none());{const n=t.data,r=et.empty();let s=new ke(be.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Fn(t.key,r,new at(s.toArray()),Ft.none())}}function HT(t,e,n){t instanceof Ds?function(s,i,o){const a=s.value.clone(),c=nh(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Fn?function(s,i,o){if(!li(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=nh(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(wp(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Wr(t,e,n,r){return t instanceof Ds?function(i,o,a,c){if(!li(i.precondition,o))return a;const l=i.value.clone(),u=rh(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Fn?function(i,o,a,c){if(!li(i.precondition,o))return a;const l=rh(i.fieldTransforms,c,o),u=o.data;return u.setAll(wp(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(i,o,a){return li(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function zT(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=yp(r.transform,s||null);i!=null&&(n===null&&(n=et.empty()),n.set(r.field,i))}return n||null}function th(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ur(r,s,(i,o)=>$T(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ds extends wo{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Fn extends wo{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function wp(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function nh(t,e,n){const r=new Map;ie(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,BT(o,a,n[s]))}return r}function rh(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,UT(i,o,e))}return r}class Ap extends wo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class KT extends wo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&HT(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Wr(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Wr(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=gp();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=Ip(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(j.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),G())}isEqual(e){return this.batchId===e.batchId&&ur(this.mutations,e.mutations,(n,r)=>th(n,r))&&ur(this.baseMutations,e.baseMutations,(n,r)=>th(n,r))}}class il{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ie(e.mutations.length===r.length);let s=function(){return OT}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new il(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me,J;function JT(t){switch(t){default:return M();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function Rp(t){if(t===void 0)return St("GRPC error has no .code"),E.UNKNOWN;switch(t){case me.OK:return E.OK;case me.CANCELLED:return E.CANCELLED;case me.UNKNOWN:return E.UNKNOWN;case me.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case me.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case me.INTERNAL:return E.INTERNAL;case me.UNAVAILABLE:return E.UNAVAILABLE;case me.UNAUTHENTICATED:return E.UNAUTHENTICATED;case me.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case me.NOT_FOUND:return E.NOT_FOUND;case me.ALREADY_EXISTS:return E.ALREADY_EXISTS;case me.PERMISSION_DENIED:return E.PERMISSION_DENIED;case me.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case me.ABORTED:return E.ABORTED;case me.OUT_OF_RANGE:return E.OUT_OF_RANGE;case me.UNIMPLEMENTED:return E.UNIMPLEMENTED;case me.DATA_LOSS:return E.DATA_LOSS;default:return M()}}(J=me||(me={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YT(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XT=new er([4294967295,4294967295],0);function sh(t){const e=YT().encode(t),n=new YE;return n.update(e),new Uint8Array(n.digest())}function ih(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new er([n,r],0),new er([s,i],0)]}class ol{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Lr(`Invalid padding: ${n}`);if(r<0)throw new Lr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Lr(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Lr(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=er.fromNumber(this.Te)}de(e,n,r){let s=e.add(n.multiply(er.fromNumber(r)));return s.compare(XT)===1&&(s=new er([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=sh(e),[r,s]=ih(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new ol(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=sh(e),[r,s]=ih(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Lr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,ks.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ao(j.min(),s,new fe(ee),Bt(),G())}}class ks{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ks(r,n,G(),G(),G())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,n,r,s){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=s}}class Sp{constructor(e,n){this.targetId=e,this.fe=n}}class Pp{constructor(e,n,r=Ue.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class oh{constructor(){this.ge=0,this.pe=ch(),this.ye=Ue.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=G(),n=G(),r=G();return this.pe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:M()}}),new ks(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=ch()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,ie(this.ge>=0)}Le(){this.Se=!0,this.we=!0}}class ZT{constructor(e){this.Be=e,this.ke=new Map,this.qe=Bt(),this.Qe=ah(),this.Ke=new fe(ee)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:M()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.fe.count,s=this.Ye(n);if(s){const i=s.target;if(Ga(i))if(r===0){const o=new O(i.path);this.We(n,o,Oe.newNoDocument(o,j.min()))}else ie(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,l)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Vn(r).toUint8Array()}catch(c){if(c instanceof np)return lr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new ol(o,s,i)}catch(c){return lr(c instanceof Lr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Be.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Be.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&Ga(a.target)){const c=new O(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,Oe.newNoDocument(c,e))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=G();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ye(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(e));const s=new Ao(e,n,this.Ke,this.qe,r);return this.qe=Bt(),this.Qe=ah(),this.Ke=new fe(ee),s}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.st(e,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new oh,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new ke(ee),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||R("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Be._t(e)}He(e){this.ke.set(e,new oh),this.Be.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Be.getRemoteKeysForTarget(e).has(n)}}function ah(){return new fe(O.comparator)}function ch(){return new fe(O.comparator)}const eI={asc:"ASCENDING",desc:"DESCENDING"},tI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},nI={and:"AND",or:"OR"};class rI{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ja(t,e){return t.useProto3Json||yo(e)?e:{value:e}}function Oi(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Cp(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function sI(t,e){return Oi(t,e.toTimestamp())}function wt(t){return ie(!!t),j.fromTimestamp(function(n){const r=cn(n);return new Ee(r.seconds,r.nanos)}(t))}function al(t,e){return Ya(t,e).canonicalString()}function Ya(t,e){const n=function(s){return new ue(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function bp(t){const e=ue.fromString(t);return ie(Op(e)),e}function Xa(t,e){return al(t.databaseId,e.path)}function la(t,e){const n=bp(e);if(n.get(1)!==t.databaseId.projectId)throw new V(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new V(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new O(kp(n))}function Dp(t,e){return al(t.databaseId,e)}function iI(t){const e=bp(t);return e.length===4?ue.emptyPath():kp(e)}function Za(t){return new ue(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function kp(t){return ie(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function lh(t,e,n){return{name:Xa(t,e),fields:n.value.mapValue.fields}}function oI(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:M()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(ie(u===void 0||typeof u=="string"),Ue.fromBase64String(u||"")):(ie(u===void 0||u instanceof Uint8Array),Ue.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?E.UNKNOWN:Rp(l.code);return new V(u,l.message||"")}(o);n=new Pp(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=la(t,r.document.name),i=wt(r.document.updateTime),o=r.document.createTime?wt(r.document.createTime):j.min(),a=new et({mapValue:{fields:r.document.fields}}),c=Oe.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new ui(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=la(t,r.document),i=r.readTime?wt(r.readTime):j.min(),o=Oe.newNoDocument(s,i),a=r.removedTargetIds||[];n=new ui([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=la(t,r.document),i=r.removedTargetIds||[];n=new ui([],i,s,null)}else{if(!("filter"in e))return M();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new QT(s,i),a=r.targetId;n=new Sp(a,o)}}return n}function aI(t,e){let n;if(e instanceof Ds)n={update:lh(t,e.key,e.value)};else if(e instanceof Ap)n={delete:Xa(t,e.key)};else if(e instanceof Fn)n={update:lh(t,e.key,e.data),updateMask:mI(e.fieldMask)};else{if(!(e instanceof KT))return M();n={verify:Xa(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof ds)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof fs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ps)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ni)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw M()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:sI(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:M()}(t,e.precondition)),n}function cI(t,e){return t&&t.length>0?(ie(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?wt(s.updateTime):wt(i);return o.isEqual(j.min())&&(o=wt(i)),new qT(o,s.transformResults||[])}(n,e))):[]}function lI(t,e){return{documents:[Dp(t,e.path)]}}function uI(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Dp(t,s);const i=function(l){if(l.length!==0)return Np(Ct.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(l){if(l.length!==0)return l.map(u=>function(p){return{field:Hn(p.field),direction:fI(p.dir)}}(u))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Ja(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),{ut:n,parent:s}}function hI(t){let e=iI(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ie(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(d){const p=Vp(d);return p instanceof Ct&&op(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(p=>function(k){return new Vi(zn(k.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(d){let p;return p=typeof d=="object"?d.value:d,yo(p)?null:p}(n.limit));let c=null;n.startAt&&(c=function(d){const p=!!d.before,g=d.values||[];return new ki(g,p)}(n.startAt));let l=null;return n.endAt&&(l=function(d){const p=!d.before,g=d.values||[];return new ki(g,p)}(n.endAt)),CT(e,s,o,i,a,"F",c,l)}function dI(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Vp(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=zn(n.unaryFilter.field);return ve.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=zn(n.unaryFilter.field);return ve.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=zn(n.unaryFilter.field);return ve.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=zn(n.unaryFilter.field);return ve.create(o,"!=",{nullValue:"NULL_VALUE"});default:return M()}}(t):t.fieldFilter!==void 0?function(n){return ve.create(zn(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Ct.create(n.compositeFilter.filters.map(r=>Vp(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return M()}}(n.compositeFilter.op))}(t):M()}function fI(t){return eI[t]}function pI(t){return tI[t]}function gI(t){return nI[t]}function Hn(t){return{fieldPath:t.canonicalString()}}function zn(t){return be.fromServerFormat(t.fieldPath)}function Np(t){return t instanceof ve?function(n){if(n.op==="=="){if(Qu(n.value))return{unaryFilter:{field:Hn(n.field),op:"IS_NAN"}};if(Gu(n.value))return{unaryFilter:{field:Hn(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Qu(n.value))return{unaryFilter:{field:Hn(n.field),op:"IS_NOT_NAN"}};if(Gu(n.value))return{unaryFilter:{field:Hn(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Hn(n.field),op:pI(n.op),value:n.value}}}(t):t instanceof Ct?function(n){const r=n.getFilters().map(s=>Np(s));return r.length===1?r[0]:{compositeFilter:{op:gI(n.op),filters:r}}}(t):M()}function mI(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Op(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e,n,r,s,i=j.min(),o=j.min(),a=Ue.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Xt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Xt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(e){this.ct=e}}function yI(t){const e=hI({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Qa(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(){this._n=new EI}addToCollectionParentIndex(e,n){return this._n.add(n),_.resolve()}getCollectionParents(e,n){return _.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return _.resolve()}deleteFieldIndex(e,n){return _.resolve()}deleteAllFieldIndexes(e){return _.resolve()}createTargetIndexes(e,n){return _.resolve()}getDocumentsMatchingTarget(e,n){return _.resolve(null)}getIndexType(e,n){return _.resolve(0)}getFieldIndexes(e,n){return _.resolve([])}getNextCollectionGroupToUpdate(e){return _.resolve(null)}getMinOffset(e,n){return _.resolve(an.min())}getMinOffsetFromCollectionGroup(e,n){return _.resolve(an.min())}updateCollectionGroup(e,n,r){return _.resolve()}updateIndexEntries(e,n){return _.resolve()}}class EI{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ke(ue.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ke(ue.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new fr(0)}static Ln(){return new fr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(){this.changes=new Ar(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Oe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?_.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Wr(r.mutation,s,at.empty(),Ee.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,G()).next(()=>r))}getLocalViewOfDocuments(e,n,r=G()){const s=In();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Mr();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=In();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,G()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Bt();const o=Kr(),a=function(){return Kr()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof Fn)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Wr(u.mutation,l,u.mutation.getFieldMask(),Ee.now())):o.set(l.key,at.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var d;return a.set(l,new II(u,(d=o.get(l))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Kr();let s=new fe((o,a)=>o-a),i=G();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||at.empty();u=a.applyToLocalView(l,u),r.set(c,u);const d=(s.get(a.batchId)||G()).add(c);s=s.insert(a.batchId,d)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,d=gp();u.forEach(p=>{if(!i.has(p)){const g=Ip(n.get(p),r.get(p));g!==null&&d.set(p,g),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,d))}return _.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return O.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):bT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):_.resolve(In());let a=-1,c=i;return o.next(l=>_.forEach(l,(u,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),i.get(u)?_.resolve():this.remoteDocumentCache.getEntry(e,u).next(p=>{c=c.insert(u,p)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,G())).next(u=>({batchId:a,changes:pp(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new O(n)).next(r=>{let s=Mr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Mr();return this.indexManager.getCollectionParents(e,i).next(a=>_.forEach(a,c=>{const l=function(d,p){return new vo(p,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r,s).next(u=>{u.forEach((d,p)=>{o=o.insert(d,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,Oe.newInvalidDocument(u)))});let a=Mr();return o.forEach((c,l)=>{const u=i.get(c);u!==void 0&&Wr(u.mutation,l,at.empty(),Ee.now()),To(n,l)&&(a=a.insert(c,l))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return _.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:wt(s.createTime)}}(n)),_.resolve()}getNamedQuery(e,n){return _.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(s){return{name:s.name,query:yI(s.bundledQuery),readTime:wt(s.readTime)}}(n)),_.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(){this.overlays=new fe(O.comparator),this.hr=new Map}getOverlay(e,n){return _.resolve(this.overlays.get(n))}getOverlays(e,n){const r=In();return _.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),_.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),_.resolve()}getOverlaysForCollection(e,n,r){const s=In(),i=n.length+1,o=new O(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return _.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new fe((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=In(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=In(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return _.resolve(a)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new GT(n,r));let i=this.hr.get(n);i===void 0&&(i=G(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(){this.Pr=new ke(we.Ir),this.Tr=new ke(we.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new we(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new we(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new O(new ue([])),r=new we(n,e),s=new we(n,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new O(new ue([])),r=new we(n,e),s=new we(n,e+1);let i=G();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new we(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class we{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return O.comparator(e.key,n.key)||ee(e.pr,n.pr)}static Er(e,n){return ee(e.pr,n.pr)||O.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new ke(we.Ir)}checkEmpty(e){return _.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new WT(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.wr=this.wr.add(new we(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return _.resolve(o)}lookupMutationBatch(e,n){return _.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.br(r),i=s<0?0:s;return _.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return _.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return _.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new we(n,0),s=new we(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const a=this.Sr(o.pr);i.push(a)}),_.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ke(ee);return n.forEach(s=>{const i=new we(s,0),o=new we(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],a=>{r=r.add(a.pr)})}),_.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;O.isDocumentKey(i)||(i=i.child(""));const o=new we(new O(i),0);let a=new ke(ee);return this.wr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.pr)),!0)},o),_.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ie(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return _.forEach(n.mutations,s=>{const i=new we(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new we(n,0),s=this.wr.firstAfterOrEqual(r);return _.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,_.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(e){this.vr=e,this.docs=function(){return new fe(O.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return _.resolve(r?r.document.mutableCopy():Oe.newInvalidDocument(n))}getEntries(e,n){let r=Bt();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Oe.newInvalidDocument(s))}),_.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Bt();const o=n.path,a=new O(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||lT(cT(u),r)<=0||(s.has(u.key)||To(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return _.resolve(i)}getAllFromCollectionGroup(e,n,r,s){M()}Fr(e,n){return _.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new CI(this)}getSize(e){return _.resolve(this.size)}}class CI extends TI{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(e,s)):this.ar.removeEntry(r)}),_.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(e){this.persistence=e,this.Mr=new Ar(n=>rl(n),sl),this.lastRemoteSnapshotVersion=j.min(),this.highestTargetId=0,this.Or=0,this.Nr=new cl,this.targetCount=0,this.Lr=fr.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,s)=>n(s)),_.resolve()}getLastRemoteSnapshotVersion(e){return _.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return _.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),_.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),_.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new fr(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,_.resolve()}updateTargetData(e,n){return this.qn(n),_.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,_.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),_.waitFor(i).next(()=>s)}getTargetCount(e){return _.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return _.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),_.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),_.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),_.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return _.resolve(r)}containsKey(e,n){return _.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e,n){this.Br={},this.overlays={},this.kr=new Zc(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new bI(this),this.indexManager=new vI,this.remoteDocumentCache=function(s){return new PI(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new _I(n),this.$r=new AI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new RI,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new SI(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){R("MemoryPersistence","Starting transaction:",e);const s=new kI(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(e,n){return _.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class kI extends hT{constructor(e){super(),this.currentSequenceNumber=e}}class ll{constructor(e){this.persistence=e,this.zr=new cl,this.jr=null}static Hr(e){return new ll(e)}get Jr(){if(this.jr)return this.jr;throw M()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),_.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),_.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),_.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return _.forEach(this.Jr,r=>{const s=O.fromPath(r);return this.Yr(e,s).next(i=>{i||n.removeEntry(s,j.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return _.or([()=>_.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(e,n){let r=G(),s=G();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ul(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Vy()?8:Tn.v(ye())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ji(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new VI;return this.Ji(e,n,o).next(a=>{if(i.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>i.result)}Yi(e,n,r,s){return r.documentReadCount<this.Wi?(Vr()<=Q.DEBUG&&R("QueryEngine","SDK will not create cache indexes for query:",qn(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),_.resolve()):(Vr()<=Q.DEBUG&&R("QueryEngine","Query:",qn(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(Vr()<=Q.DEBUG&&R("QueryEngine","The SDK decides to create cache indexes for query:",qn(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,It(n))):_.resolve())}ji(e,n){if(Zu(n))return _.resolve(null);let r=It(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Qa(n,null,"F"),r=It(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=G(...i);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Zi(n,a);return this.Xi(n,l,o,c.readTime)?this.ji(e,Qa(n,null,"F")):this.es(e,l,n,c)}))})))}Hi(e,n,r,s){return Zu(n)||s.isEqual(j.min())?_.resolve(null):this.zi.getDocuments(e,r).next(i=>{const o=this.Zi(n,i);return this.Xi(n,o,r,s)?_.resolve(null):(Vr()<=Q.DEBUG&&R("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),qn(n)),this.es(e,o,n,aT(s,-1)).next(a=>a))})}Zi(e,n){let r=new ke(dp(e));return n.forEach((s,i)=>{To(e,i)&&(r=r.add(i))}),r}Xi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(e,n,r){return Vr()<=Q.DEBUG&&R("QueryEngine","Using full collection scan to execute query:",qn(n)),this.zi.getDocumentsMatchingQuery(e,n,an.min(),r)}es(e,n,r,s){return this.zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(e,n,r,s){this.persistence=e,this.ts=n,this.serializer=s,this.ns=new fe(ee),this.rs=new Ar(i=>rl(i),sl),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new wI(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function xI(t,e,n,r){return new OI(t,e,n,r)}async function xp(t,e){const n=H(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=G();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({us:l,removedBatchIds:o,addedBatchIds:a}))})})}function MI(t,e){const n=H(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const d=l.batch,p=d.keys();let g=_.resolve();return p.forEach(k=>{g=g.next(()=>u.getEntry(c,k)).next(C=>{const b=l.docVersions.get(k);ie(b!==null),C.version.compareTo(b)<0&&(d.applyToRemoteDocument(C,l),C.isValidDocument()&&(C.setReadTime(l.commitVersion),u.addEntry(C)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(c,d))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=G();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Mp(t){const e=H(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function LI(t,e){const n=H(t),r=e.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const a=[];e.targetChanges.forEach((u,d)=>{const p=s.get(d);if(!p)return;a.push(n.Qr.removeMatchingKeys(i,u.removedDocuments,d).next(()=>n.Qr.addMatchingKeys(i,u.addedDocuments,d)));let g=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?g=g.withResumeToken(Ue.EMPTY_BYTE_STRING,j.min()).withLastLimboFreeSnapshotVersion(j.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,r)),s=s.insert(d,g),function(C,b,F){return C.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0}(p,g,u)&&a.push(n.Qr.updateTargetData(i,g))});let c=Bt(),l=G();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(FI(i,o,e.documentUpdates).next(u=>{c=u.cs,l=u.ls})),!r.isEqual(j.min())){const u=n.Qr.getLastRemoteSnapshotVersion(i).next(d=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return _.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.ns=s,i))}function FI(t,e,n){let r=G(),s=G();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Bt();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(j.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):R("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{cs:o,ls:s}})}function UI(t,e){const n=H(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function BI(t,e){const n=H(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,e).next(i=>i?(s=i,_.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new Xt(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function ec(t,e,n){const r=H(t),s=r.ns.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!bs(o))throw o;R("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(s.target)}function uh(t,e,n){const r=H(t);let s=j.min(),i=G();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const d=H(c),p=d.rs.get(u);return p!==void 0?_.resolve(d.ns.get(p)):d.Qr.getTargetData(l,u)}(r,o,It(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?s:j.min(),n?i:G())).next(a=>(jI(r,kT(e),a),{documents:a,hs:i})))}function jI(t,e,n){let r=t.ss.get(e)||j.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ss.set(e,r)}class hh{constructor(){this.activeTargetIds=LT()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class $I{constructor(){this.no=new hh,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new hh,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){R("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){R("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ei=null;function ua(){return ei===null?ei=function(){return 268435456+Math.round(2147483648*Math.random())}():ei++,"0x"+ei.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve="WebChannelConnection";class KI extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${s}/databases/${i}`,this.yo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get wo(){return!1}So(n,r,s,i,o){const a=ua(),c=this.bo(n,r.toUriEncodedString());R("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(l,i,o),this.Co(n,c,l,s).then(u=>(R("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw lr("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}vo(n,r,s,i,o,a){return this.So(n,r,s,i,o)}Do(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ir}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}bo(n,r){const s=HI[n];return`${this.fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,r,s){const i=ua();return new Promise((o,a)=>{const c=new JE;c.setWithCredentials(!0),c.listenOnce(GE.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ca.NO_ERROR:const u=c.getResponseJson();R(Ve,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case ca.TIMEOUT:R(Ve,`RPC '${e}' ${i} timed out`),a(new V(E.DEADLINE_EXCEEDED,"Request time out"));break;case ca.HTTP_ERROR:const d=c.getStatus();if(R(Ve,`RPC '${e}' ${i} failed with status:`,d,"response text:",c.getResponseText()),d>0){let p=c.getResponseJson();Array.isArray(p)&&(p=p[0]);const g=p==null?void 0:p.error;if(g&&g.status&&g.message){const k=function(b){const F=b.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(F)>=0?F:E.UNKNOWN}(g.status);a(new V(k,g.message))}else a(new V(E.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new V(E.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{R(Ve,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);R(Ve,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}Fo(e,n,r){const s=ua(),i=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=KE(),a=WE(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");R(Ve,`Creating RPC '${e}' stream ${s}: ${u}`,c);const d=o.createWebChannel(u,c);let p=!1,g=!1;const k=new zI({lo:b=>{g?R(Ve,`Not sending because RPC '${e}' stream ${s} is closed:`,b):(p||(R(Ve,`Opening RPC '${e}' stream ${s} transport.`),d.open(),p=!0),R(Ve,`RPC '${e}' stream ${s} sending:`,b),d.send(b))},ho:()=>d.close()}),C=(b,F,X)=>{b.listen(F,U=>{try{X(U)}catch(Z){setTimeout(()=>{throw Z},0)}})};return C(d,Ys.EventType.OPEN,()=>{g||R(Ve,`RPC '${e}' stream ${s} transport opened.`)}),C(d,Ys.EventType.CLOSE,()=>{g||(g=!0,R(Ve,`RPC '${e}' stream ${s} transport closed`),k.Vo())}),C(d,Ys.EventType.ERROR,b=>{g||(g=!0,lr(Ve,`RPC '${e}' stream ${s} transport errored:`,b),k.Vo(new V(E.UNAVAILABLE,"The operation could not be completed")))}),C(d,Ys.EventType.MESSAGE,b=>{var F;if(!g){const X=b.data[0];ie(!!X);const U=X,Z=U.error||((F=U[0])===null||F===void 0?void 0:F.error);if(Z){R(Ve,`RPC '${e}' stream ${s} received error:`,Z);const ge=Z.status;let z=function(Dt){const Xe=me[Dt];if(Xe!==void 0)return Rp(Xe)}(ge),Se=Z.message;z===void 0&&(z=E.INTERNAL,Se="Unknown error status: "+ge+" with message "+Z.message),g=!0,k.Vo(new V(z,Se)),d.close()}else R(Ve,`RPC '${e}' stream ${s} received:`,X),k.mo(X)}}),C(a,QE.STAT_EVENT,b=>{b.stat===$u.PROXY?R(Ve,`RPC '${e}' stream ${s} detected buffering proxy`):b.stat===$u.NOPROXY&&R(Ve,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.Ro()},0),k}}function ha(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(t){return new rI(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(e,n,r=1e3,s=1.5,i=6e4){this.oi=e,this.timerId=n,this.Mo=r,this.xo=s,this.Oo=i,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Bo),s=Math.max(0,n-r);s>0&&R("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(e,n,r,s,i,o,a,c){this.oi=e,this.$o=r,this.Uo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new Lp(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(St(n.toString()),St("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Wo===n&&this.o_(r,s)},r=>{e(()=>{const s=new V(E.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(s)})})}o_(e,n){const r=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(s=>{r(()=>this.__(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return R("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():(R("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class WI extends Fp{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}a_(e,n){return this.connection.Fo("Listen",e,n)}onMessage(e){this.jo.reset();const n=oI(this.serializer,e),r=function(i){if(!("targetChange"in i))return j.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?j.min():o.readTime?wt(o.readTime):j.min()}(e);return this.listener.u_(n,r)}c_(e){const n={};n.database=Za(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=Ga(c)?{documents:lI(i,c)}:{query:uI(i,c).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Cp(i,o.resumeToken);const l=Ja(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(j.min())>0){a.readTime=Oi(i,o.snapshotVersion.toTimestamp());const l=Ja(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=dI(this.serializer,e);r&&(n.labels=r),this.t_(n)}l_(e){const n={};n.database=Za(this.serializer),n.removeTarget=e,this.t_(n)}}class GI extends Fp{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,n){return this.connection.Fo("Write",e,n)}onMessage(e){if(ie(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const n=cI(e.writeResults,e.commitTime),r=wt(e.commitTime);return this.listener.T_(r,n)}return ie(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=Za(this.serializer),this.t_(e)}I_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>aI(this.serializer,r))};this.t_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.A_=!1}R_(){if(this.A_)throw new V(E.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(e,Ya(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new V(E.UNKNOWN,i.toString())})}vo(e,n,r,s,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(e,Ya(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new V(E.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class JI{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(St(n),this.g_=!1):R("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io(o=>{r.enqueueAndForget(async()=>{Un(this)&&(R("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=H(c);l.v_.add(4),await Vs(l),l.x_.set("Unknown"),l.v_.delete(4),await So(l)}(this))})}),this.x_=new JI(r,s)}}async function So(t){if(Un(t))for(const e of t.F_)await e(!0)}async function Vs(t){for(const e of t.F_)await e(!1)}function Up(t,e){const n=H(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),pl(n)?fl(n):Rr(n).Jo()&&dl(n,e))}function hl(t,e){const n=H(t),r=Rr(n);n.C_.delete(e),r.Jo()&&Bp(n,e),n.C_.size===0&&(r.Jo()?r.Xo():Un(n)&&n.x_.set("Unknown"))}function dl(t,e){if(t.O_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(j.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Rr(t).c_(e)}function Bp(t,e){t.O_.Oe(e),Rr(t).l_(e)}function fl(t){t.O_=new ZT({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.C_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Rr(t).start(),t.x_.p_()}function pl(t){return Un(t)&&!Rr(t).Ho()&&t.C_.size>0}function Un(t){return H(t).v_.size===0}function jp(t){t.O_=void 0}async function XI(t){t.C_.forEach((e,n)=>{dl(t,e)})}async function ZI(t,e){jp(t),pl(t)?(t.x_.S_(e),fl(t)):t.x_.set("Unknown")}async function ew(t,e,n){if(t.x_.set("Online"),e instanceof Pp&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.C_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.C_.delete(a),s.O_.removeTarget(a))}(t,e)}catch(r){R("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await xi(t,r)}else if(e instanceof ui?t.O_.$e(e):e instanceof Sp?t.O_.Je(e):t.O_.Ge(e),!n.isEqual(j.min()))try{const r=await Mp(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.O_.it(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.C_.get(l);u&&i.C_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.C_.get(c);if(!u)return;i.C_.set(c,u.withResumeToken(Ue.EMPTY_BYTE_STRING,u.snapshotVersion)),Bp(i,c);const d=new Xt(u.target,c,l,u.sequenceNumber);dl(i,d)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){R("RemoteStore","Failed to raise snapshot:",r),await xi(t,r)}}async function xi(t,e,n){if(!bs(e))throw e;t.v_.add(1),await Vs(t),t.x_.set("Offline"),n||(n=()=>Mp(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{R("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await So(t)})}function $p(t,e){return e().catch(n=>xi(t,n,e))}async function Po(t){const e=H(t),n=ln(e);let r=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;tw(e);)try{const s=await UI(e.localStore,r);if(s===null){e.D_.length===0&&n.Xo();break}r=s.batchId,nw(e,s)}catch(s){await xi(e,s)}qp(e)&&Hp(e)}function tw(t){return Un(t)&&t.D_.length<10}function nw(t,e){t.D_.push(e);const n=ln(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function qp(t){return Un(t)&&!ln(t).Ho()&&t.D_.length>0}function Hp(t){ln(t).start()}async function rw(t){ln(t).d_()}async function sw(t){const e=ln(t);for(const n of t.D_)e.I_(n.mutations)}async function iw(t,e,n){const r=t.D_.shift(),s=il.from(r,e,n);await $p(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Po(t)}async function ow(t,e){e&&ln(t).P_&&await async function(r,s){if(function(o){return JT(o)&&o!==E.ABORTED}(s.code)){const i=r.D_.shift();ln(r).Zo(),await $p(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Po(r)}}(t,e),qp(t)&&Hp(t)}async function fh(t,e){const n=H(t);n.asyncQueue.verifyOperationInProgress(),R("RemoteStore","RemoteStore received new credentials");const r=Un(n);n.v_.add(3),await Vs(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await So(n)}async function aw(t,e){const n=H(t);e?(n.v_.delete(2),await So(n)):e||(n.v_.add(2),await Vs(n),n.x_.set("Unknown"))}function Rr(t){return t.N_||(t.N_=function(n,r,s){const i=H(n);return i.R_(),new WI(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:XI.bind(null,t),To:ZI.bind(null,t),u_:ew.bind(null,t)}),t.F_.push(async e=>{e?(t.N_.Zo(),pl(t)?fl(t):t.x_.set("Unknown")):(await t.N_.stop(),jp(t))})),t.N_}function ln(t){return t.L_||(t.L_=function(n,r,s){const i=H(n);return i.R_(),new GI(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:rw.bind(null,t),To:ow.bind(null,t),E_:sw.bind(null,t),T_:iw.bind(null,t)}),t.F_.push(async e=>{e?(t.L_.Zo(),await Po(t)):(await t.L_.stop(),t.D_.length>0&&(R("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))})),t.L_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Lt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new gl(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ml(t,e){if(St("AsyncQueue",`${e}: ${t}`),bs(t))return new V(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||O.comparator(n.key,r.key):(n,r)=>O.comparator(n.key,r.key),this.keyedMap=Mr(),this.sortedSet=new fe(this.comparator)}static emptySet(e){return new tr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof tr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new tr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(){this.B_=new fe(O.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):M():this.B_=this.B_.insert(n,e)}k_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class pr{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new pr(e,n,tr.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Eo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(){this.q_=void 0,this.Q_=[]}K_(){return this.Q_.some(e=>e.U_())}}class lw{constructor(){this.queries=new Ar(e=>hp(e),Eo),this.onlineState="Unknown",this.W_=new Set}}async function uw(t,e){const n=H(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.K_()&&e.U_()&&(r=2):(i=new cw,r=e.U_()?0:1);try{switch(r){case 0:i.q_=await n.onListen(s,!0);break;case 1:i.q_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=ml(o,`Initialization of query '${qn(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.Q_.push(e),e.G_(n.onlineState),i.q_&&e.z_(i.q_)&&_l(n)}async function hw(t,e){const n=H(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Q_.indexOf(e);o>=0&&(i.Q_.splice(o,1),i.Q_.length===0?s=e.U_()?0:1:!i.K_()&&e.U_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function dw(t,e){const n=H(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.Q_)a.z_(s)&&(r=!0);o.q_=s}}r&&_l(n)}function fw(t,e,n){const r=H(t),s=r.queries.get(e);if(s)for(const i of s.Q_)i.onError(n);r.queries.delete(e)}function _l(t){t.W_.forEach(e=>{e.next()})}var tc,gh;(gh=tc||(tc={})).j_="default",gh.Cache="cache";class pw{constructor(e,n,r){this.query=e,this.H_=n,this.J_=!1,this.Y_=null,this.onlineState="Unknown",this.options=r||{}}z_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new pr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.J_?this.Z_(e)&&(this.H_.next(e),n=!0):this.X_(e,this.onlineState)&&(this.ea(e),n=!0),this.Y_=e,n}onError(e){this.H_.error(e)}G_(e){this.onlineState=e;let n=!1;return this.Y_&&!this.J_&&this.X_(this.Y_,e)&&(this.ea(this.Y_),n=!0),n}X_(e,n){if(!e.fromCache||!this.U_())return!0;const r=n!=="Offline";return(!this.options.ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Z_(e){if(e.docChanges.length>0)return!0;const n=this.Y_&&this.Y_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ea(e){e=pr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.J_=!0,this.H_.next(e)}U_(){return this.options.source!==tc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(e){this.key=e}}class Kp{constructor(e){this.key=e}}class gw{constructor(e,n){this.query=e,this.ua=n,this.ca=null,this.hasCachedResults=!1,this.current=!1,this.la=G(),this.mutatedKeys=G(),this.ha=dp(e),this.Pa=new tr(this.ha)}get Ia(){return this.ua}Ta(e,n){const r=n?n.Ea:new ph,s=n?n.Pa:this.Pa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,d)=>{const p=s.get(u),g=To(this.query,d)?d:null,k=!!p&&this.mutatedKeys.has(p.key),C=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let b=!1;p&&g?p.data.isEqual(g.data)?k!==C&&(r.track({type:3,doc:g}),b=!0):this.da(p,g)||(r.track({type:2,doc:g}),b=!0,(c&&this.ha(g,c)>0||l&&this.ha(g,l)<0)&&(a=!0)):!p&&g?(r.track({type:0,doc:g}),b=!0):p&&!g&&(r.track({type:1,doc:p}),b=!0,(c||l)&&(a=!0)),b&&(g?(o=o.add(g),i=C?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{Pa:o,Ea:r,Xi:a,mutatedKeys:i}}da(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Pa;this.Pa=e.Pa,this.mutatedKeys=e.mutatedKeys;const o=e.Ea.k_();o.sort((u,d)=>function(g,k){const C=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M()}};return C(g)-C(k)}(u.type,d.type)||this.ha(u.doc,d.doc)),this.Aa(r),s=s!=null&&s;const a=n&&!s?this.Ra():[],c=this.la.size===0&&this.current&&!s?1:0,l=c!==this.ca;return this.ca=c,o.length!==0||l?{snapshot:new pr(this.query,e.Pa,i,o,e.mutatedKeys,c===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Va:a}:{Va:a}}G_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Pa:this.Pa,Ea:new ph,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Va:[]}}ma(e){return!this.ua.has(e)&&!!this.Pa.has(e)&&!this.Pa.get(e).hasLocalMutations}Aa(e){e&&(e.addedDocuments.forEach(n=>this.ua=this.ua.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ua=this.ua.delete(n)),this.current=e.current)}Ra(){if(!this.current)return[];const e=this.la;this.la=G(),this.Pa.forEach(r=>{this.ma(r.key)&&(this.la=this.la.add(r.key))});const n=[];return e.forEach(r=>{this.la.has(r)||n.push(new Kp(r))}),this.la.forEach(r=>{e.has(r)||n.push(new zp(r))}),n}fa(e){this.ua=e.hs,this.la=G();const n=this.Ta(e.documents);return this.applyChanges(n,!0)}ga(){return pr.fromInitialDocuments(this.query,this.Pa,this.mutatedKeys,this.ca===0,this.hasCachedResults)}}class mw{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class _w{constructor(e){this.key=e,this.pa=!1}}class yw{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.ya={},this.wa=new Ar(a=>hp(a),Eo),this.Sa=new Map,this.ba=new Set,this.Da=new fe(O.comparator),this.Ca=new Map,this.va=new cl,this.Fa={},this.Ma=new Map,this.xa=fr.Ln(),this.onlineState="Unknown",this.Oa=void 0}get isPrimaryClient(){return this.Oa===!0}}async function vw(t,e,n=!0){const r=Xp(t);let s;const i=r.wa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ga()):s=await Wp(r,e,n,!0),s}async function Ew(t,e){const n=Xp(t);await Wp(n,e,!0,!1)}async function Wp(t,e,n,r){const s=await BI(t.localStore,It(e)),i=s.targetId,o=n?t.sharedClientState.addLocalQueryTarget(i):"not-current";let a;return r&&(a=await Tw(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Up(t.remoteStore,s),a}async function Tw(t,e,n,r,s){t.Na=(d,p,g)=>async function(C,b,F,X){let U=b.view.Ta(F);U.Xi&&(U=await uh(C.localStore,b.query,!1).then(({documents:Se})=>b.view.Ta(Se,U)));const Z=X&&X.targetChanges.get(b.targetId),ge=X&&X.targetMismatches.get(b.targetId)!=null,z=b.view.applyChanges(U,C.isPrimaryClient,Z,ge);return _h(C,b.targetId,z.Va),z.snapshot}(t,d,p,g);const i=await uh(t.localStore,e,!0),o=new gw(e,i.hs),a=o.Ta(i.documents),c=ks.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);_h(t,n,l.Va);const u=new mw(e,n,o);return t.wa.set(e,u),t.Sa.has(n)?t.Sa.get(n).push(e):t.Sa.set(n,[e]),l.snapshot}async function Iw(t,e,n){const r=H(t),s=r.wa.get(e),i=r.Sa.get(s.targetId);if(i.length>1)return r.Sa.set(s.targetId,i.filter(o=>!Eo(o,e))),void r.wa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ec(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&hl(r.remoteStore,s.targetId),nc(r,s.targetId)}).catch(Cs)):(nc(r,s.targetId),await ec(r.localStore,s.targetId,!0))}async function ww(t,e){const n=H(t),r=n.wa.get(e),s=n.Sa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),hl(n.remoteStore,r.targetId))}async function Aw(t,e,n){const r=kw(t);try{const s=await function(o,a){const c=H(o),l=Ee.now(),u=a.reduce((g,k)=>g.add(k.key),G());let d,p;return c.persistence.runTransaction("Locally write mutations","readwrite",g=>{let k=Bt(),C=G();return c.os.getEntries(g,u).next(b=>{k=b,k.forEach((F,X)=>{X.isValidDocument()||(C=C.add(F))})}).next(()=>c.localDocuments.getOverlayedDocuments(g,k)).next(b=>{d=b;const F=[];for(const X of a){const U=zT(X,d.get(X.key).overlayedDocument);U!=null&&F.push(new Fn(X.key,U,rp(U.value.mapValue),Ft.exists(!0)))}return c.mutationQueue.addMutationBatch(g,l,F,a)}).next(b=>{p=b;const F=b.applyToLocalDocumentSet(d,C);return c.documentOverlayCache.saveOverlays(g,b.batchId,F)})}).then(()=>({batchId:p.batchId,changes:pp(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.Fa[o.currentUser.toKey()];l||(l=new fe(ee)),l=l.insert(a,c),o.Fa[o.currentUser.toKey()]=l}(r,s.batchId,n),await Ns(r,s.changes),await Po(r.remoteStore)}catch(s){const i=ml(s,"Failed to persist write");n.reject(i)}}async function Gp(t,e){const n=H(t);try{const r=await LI(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Ca.get(i);o&&(ie(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.pa=!0:s.modifiedDocuments.size>0?ie(o.pa):s.removedDocuments.size>0&&(ie(o.pa),o.pa=!1))}),await Ns(n,r,e)}catch(r){await Cs(r)}}function mh(t,e,n){const r=H(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.wa.forEach((i,o)=>{const a=o.view.G_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=H(o);c.onlineState=a;let l=!1;c.queries.forEach((u,d)=>{for(const p of d.Q_)p.G_(a)&&(l=!0)}),l&&_l(c)}(r.eventManager,e),s.length&&r.ya.u_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Rw(t,e,n){const r=H(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ca.get(e),i=s&&s.key;if(i){let o=new fe(O.comparator);o=o.insert(i,Oe.newNoDocument(i,j.min()));const a=G().add(i),c=new Ao(j.min(),new Map,new fe(ee),o,a);await Gp(r,c),r.Da=r.Da.remove(i),r.Ca.delete(e),yl(r)}else await ec(r.localStore,e,!1).then(()=>nc(r,e,n)).catch(Cs)}async function Sw(t,e){const n=H(t),r=e.batch.batchId;try{const s=await MI(n.localStore,e);Jp(n,r,null),Qp(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ns(n,s)}catch(s){await Cs(s)}}async function Pw(t,e,n){const r=H(t);try{const s=await function(o,a){const c=H(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(d=>(ie(d!==null),u=d.keys(),c.mutationQueue.removeMutationBatch(l,d))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);Jp(r,e,n),Qp(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ns(r,s)}catch(s){await Cs(s)}}function Qp(t,e){(t.Ma.get(e)||[]).forEach(n=>{n.resolve()}),t.Ma.delete(e)}function Jp(t,e,n){const r=H(t);let s=r.Fa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Fa[r.currentUser.toKey()]=s}}function nc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Sa.get(e))t.wa.delete(r),n&&t.ya.La(r,n);t.Sa.delete(e),t.isPrimaryClient&&t.va.Vr(e).forEach(r=>{t.va.containsKey(r)||Yp(t,r)})}function Yp(t,e){t.ba.delete(e.path.canonicalString());const n=t.Da.get(e);n!==null&&(hl(t.remoteStore,n),t.Da=t.Da.remove(e),t.Ca.delete(n),yl(t))}function _h(t,e,n){for(const r of n)r instanceof zp?(t.va.addReference(r.key,e),Cw(t,r)):r instanceof Kp?(R("SyncEngine","Document no longer in limbo: "+r.key),t.va.removeReference(r.key,e),t.va.containsKey(r.key)||Yp(t,r.key)):M()}function Cw(t,e){const n=e.key,r=n.path.canonicalString();t.Da.get(n)||t.ba.has(r)||(R("SyncEngine","New document in limbo: "+n),t.ba.add(r),yl(t))}function yl(t){for(;t.ba.size>0&&t.Da.size<t.maxConcurrentLimboResolutions;){const e=t.ba.values().next().value;t.ba.delete(e);const n=new O(ue.fromString(e)),r=t.xa.next();t.Ca.set(r,new _w(n)),t.Da=t.Da.insert(n,r),Up(t.remoteStore,new Xt(It(up(n.path)),r,"TargetPurposeLimboResolution",Zc._e))}}async function Ns(t,e,n){const r=H(t),s=[],i=[],o=[];r.wa.isEmpty()||(r.wa.forEach((a,c)=>{o.push(r.Na(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=ul.Ki(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.ya.u_(s),await async function(c,l){const u=H(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>_.forEach(l,p=>_.forEach(p.qi,g=>u.persistence.referenceDelegate.addReference(d,p.targetId,g)).next(()=>_.forEach(p.Qi,g=>u.persistence.referenceDelegate.removeReference(d,p.targetId,g)))))}catch(d){if(!bs(d))throw d;R("LocalStore","Failed to update sequence numbers: "+d)}for(const d of l){const p=d.targetId;if(!d.fromCache){const g=u.ns.get(p),k=g.snapshotVersion,C=g.withLastLimboFreeSnapshotVersion(k);u.ns=u.ns.insert(p,C)}}}(r.localStore,i))}async function bw(t,e){const n=H(t);if(!n.currentUser.isEqual(e)){R("SyncEngine","User change. New user:",e.toKey());const r=await xp(n.localStore,e);n.currentUser=e,function(i,o){i.Ma.forEach(a=>{a.forEach(c=>{c.reject(new V(E.CANCELLED,o))})}),i.Ma.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ns(n,r.us)}}function Dw(t,e){const n=H(t),r=n.Ca.get(e);if(r&&r.pa)return G().add(r.key);{let s=G();const i=n.Sa.get(e);if(!i)return s;for(const o of i){const a=n.wa.get(o);s=s.unionWith(a.view.Ia)}return s}}function Xp(t){const e=H(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Gp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Dw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Rw.bind(null,e),e.ya.u_=dw.bind(null,e.eventManager),e.ya.La=fw.bind(null,e.eventManager),e}function kw(t){const e=H(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Sw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Pw.bind(null,e),e}class yh{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ro(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return xI(this.persistence,new NI,e.initialUser,this.serializer)}createPersistence(e){return new DI(ll.Hr,this.serializer)}createSharedClientState(e){return new $I}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Vw{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>mh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=bw.bind(null,this.syncEngine),await aw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new lw}()}createDatastore(e){const n=Ro(e.databaseInfo.databaseId),r=function(i){return new KI(i)}(e.databaseInfo);return function(i,o,a,c){return new QI(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new YI(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>mh(this.syncEngine,n,0),function(){return dh.D()?new dh:new qI}())}createSyncEngine(e,n){return function(s,i,o,a,c,l,u){const d=new yw(s,i,o,a,c,l);return u&&(d.Oa=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const s=H(r);R("RemoteStore","RemoteStore shutting down."),s.v_.add(5),await Vs(s),s.M_.shutdown(),s.x_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.qa(this.observer.next,e)}error(e){this.observer.error?this.qa(this.observer.error,e):St("Uncaught Error in snapshot listener:",e.toString())}Qa(){this.muted=!0}qa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Ne.UNAUTHENTICATED,this.clientId=ep.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{R("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(R("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new V(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Lt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ml(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function da(t,e){t.asyncQueue.verifyOperationInProgress(),R("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await xp(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function vh(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Mw(t);R("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>fh(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>fh(e.remoteStore,s)),t._onlineComponents=e}function xw(t){return t.name==="FirebaseError"?t.code===E.FAILED_PRECONDITION||t.code===E.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Mw(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){R("FirestoreClient","Using user provided OfflineComponentProvider");try{await da(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!xw(n))throw n;lr("Error using user provided cache. Falling back to memory cache: "+n),await da(t,new yh)}}else R("FirestoreClient","Using default OfflineComponentProvider"),await da(t,new yh);return t._offlineComponents}async function Zp(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(R("FirestoreClient","Using user provided OnlineComponentProvider"),await vh(t,t._uninitializedComponentsProvider._online)):(R("FirestoreClient","Using default OnlineComponentProvider"),await vh(t,new Vw))),t._onlineComponents}function Lw(t){return Zp(t).then(e=>e.syncEngine)}async function Fw(t){const e=await Zp(t),n=e.eventManager;return n.onListen=vw.bind(null,e.syncEngine),n.onUnlisten=Iw.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Ew.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=ww.bind(null,e.syncEngine),n}function Uw(t,e,n={}){const r=new Lt;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new Nw({next:p=>{o.enqueueAndForget(()=>hw(i,d)),p.fromCache&&c.source==="server"?l.reject(new V(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(p)},error:p=>l.reject(p)}),d=new pw(a,u,{includeMetadataChanges:!0,ta:!0});return uw(i,d)}(await Fw(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eg(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tg(t,e,n){if(!n)throw new V(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Bw(t,e,n,r){if(e===!0&&r===!0)throw new V(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Th(t){if(!O.isDocumentKey(t))throw new V(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ih(t){if(O.isDocumentKey(t))throw new V(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function vl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":M()}function Mi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new V(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=vl(t);throw new V(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new V(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new V(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Bw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=eg((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new V(E.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new V(E.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new V(E.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Co{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wh({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new V(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new V(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wh(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new XE;switch(r.type){case"firstParty":return new nT(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new V(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Eh.get(n);r&&(R("ComponentProvider","Removing Datastore"),Eh.delete(n),r.terminate())}(this),Promise.resolve()}}function jw(t,e,n,r={}){var s;const i=(t=Mi(t,Co))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&lr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=Ne.MOCK_USER;else{a=Sy(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new V(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Ne(l)}t._authCredentials=new ZE(new Zf(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new bo(this.firestore,e,this._query)}}class lt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new sn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new lt(this.firestore,e,this._key)}}class sn extends bo{constructor(e,n,r){super(e,n,up(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new lt(this.firestore,null,new O(e))}withConverter(e){return new sn(this.firestore,e,this._path)}}function fa(t,e,...n){if(t=rt(t),tg("collection","path",e),t instanceof Co){const r=ue.fromString(e,...n);return Ih(r),new sn(t,null,r)}{if(!(t instanceof lt||t instanceof sn))throw new V(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ue.fromString(e,...n));return Ih(r),new sn(t.firestore,null,r)}}function $w(t,e,...n){if(t=rt(t),arguments.length===1&&(e=ep.newId()),tg("doc","path",e),t instanceof Co){const r=ue.fromString(e,...n);return Th(r),new lt(t,null,new O(r))}{if(!(t instanceof lt||t instanceof sn))throw new V(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ue.fromString(e,...n));return Th(r),new lt(t.firestore,t instanceof sn?t.converter:null,new O(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new Lp(this,"async_queue_retry"),this.cu=()=>{const n=ha();n&&R("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=ha();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.lu(),this.hu(e)}enterRestrictedMode(e){if(!this.iu){this.iu=!0,this.au=e||!1;const n=ha();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.cu)}}enqueue(e){if(this.lu(),this.iu)return new Promise(()=>{});const n=new Lt;return this.hu(()=>this.iu&&this.au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ru.push(e),this.Pu()))}async Pu(){if(this.ru.length!==0){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(e){if(!bs(e))throw e;R("AsyncQueue","Operation failed with retryable error: "+e)}this.ru.length>0&&this.jo.qo(()=>this.Pu())}}hu(e){const n=this.nu.then(()=>(this._u=!0,e().catch(r=>{this.ou=r,this._u=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw St("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this._u=!1,r))));return this.nu=n,n}enqueueAfterDelay(e,n,r){this.lu(),this.uu.indexOf(e)>-1&&(n=0);const s=gl.createAndSchedule(this,e,n,r,i=>this.Iu(i));return this.su.push(s),s}lu(){this.ou&&M()}verifyOperationInProgress(){}async Tu(){let e;do e=this.nu,await e;while(e!==this.nu)}Eu(e){for(const n of this.su)if(n.timerId===e)return!0;return!1}du(e){return this.Tu().then(()=>{this.su.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.su)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tu()})}Au(e){this.uu.push(e)}Iu(e){const n=this.su.indexOf(e);this.su.splice(n,1)}}class El extends Co{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new qw}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||rg(this),this._firestoreClient.terminate()}}function pa(t,e){const n=typeof t=="object"?t:Kd(),r=typeof t=="string"?t:e||"(default)",s=Pc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Ay("firestore");i&&jw(s,...i)}return s}function ng(t){return t._firestoreClient||rg(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function rg(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,l,u){return new mT(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,eg(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new Ow(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new gr(Ue.fromBase64String(e))}catch(n){throw new V(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new gr(Ue.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new V(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new be(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new V(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new V(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ee(this._lat,e._lat)||ee(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hw=/^__.*__$/;class zw{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Fn(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ds(e,this.data,n,this.fieldTransforms)}}function sg(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M()}}class Al{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ru(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}mu(e){return new Al(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}fu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.mu({path:r,gu:!1});return s.pu(e),s}yu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.mu({path:r,gu:!1});return s.Ru(),s}wu(e){return this.mu({path:void 0,gu:!0})}Su(e){return Li(e,this.settings.methodName,this.settings.bu||!1,this.path,this.settings.Du)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ru(){if(this.path)for(let e=0;e<this.path.length;e++)this.pu(this.path.get(e))}pu(e){if(e.length===0)throw this.Su("Document fields must not be empty");if(sg(this.Vu)&&Hw.test(e))throw this.Su('Document fields cannot begin and end with "__"')}}class Kw{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ro(e)}Cu(e,n,r,s=!1){return new Al({Vu:e,methodName:n,Du:r,path:be.emptyPath(),gu:!1,bu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ww(t){const e=t._freezeSettings(),n=Ro(t._databaseId);return new Kw(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Gw(t,e,n,r,s,i={}){const o=t.Cu(i.merge||i.mergeFields?2:0,e,n,s);cg("Data must be an object, but it was:",o,r);const a=og(r,o);let c,l;if(i.merge)c=new at(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const d of i.mergeFields){const p=Qw(e,d,n);if(!o.contains(p))throw new V(E.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);Yw(u,p)||u.push(p)}c=new at(u),l=o.fieldTransforms.filter(d=>c.covers(d.field))}else c=null,l=o.fieldTransforms;return new zw(new et(a),c,l)}class Rl extends Il{_toFieldTransform(e){return new jT(e.path,new ds)}isEqual(e){return e instanceof Rl}}function ig(t,e){if(ag(t=rt(t)))return cg("Unsupported field value:",e,t),og(t,e);if(t instanceof Il)return function(r,s){if(!sg(s.Vu))throw s.Su(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Su(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.gu&&e.Vu!==4)throw e.Su("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=ig(a,s.wu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=rt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return FT(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ee.fromDate(r);return{timestampValue:Oi(s.serializer,i)}}if(r instanceof Ee){const i=new Ee(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Oi(s.serializer,i)}}if(r instanceof wl)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof gr)return{bytesValue:Cp(s.serializer,r._byteString)};if(r instanceof lt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Su(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:al(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Su(`Unsupported field value: ${vl(r)}`)}(t,e)}function og(t,e){const n={};return tp(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):wr(t,(r,s)=>{const i=ig(s,e.fu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function ag(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ee||t instanceof wl||t instanceof gr||t instanceof lt||t instanceof Il)}function cg(t,e,n){if(!ag(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=vl(n);throw r==="an object"?e.Su(t+" a custom object"):e.Su(t+" "+r)}}function Qw(t,e,n){if((e=rt(e))instanceof Tl)return e._internalPath;if(typeof e=="string")return lg(t,e);throw Li("Field path arguments must be of type string or ",t,!1,void 0,n)}const Jw=new RegExp("[~\\*/\\[\\]]");function lg(t,e,n){if(e.search(Jw)>=0)throw Li(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Tl(...e.split("."))._internalPath}catch{throw Li(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Li(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new V(E.INVALID_ARGUMENT,a+t+c)}function Yw(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Xw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(hg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Xw extends ug{data(){return super.data()}}function hg(t,e){return typeof e=="string"?lg(t,e):e instanceof Tl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zw(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new V(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class eA{convertValue(e,n="none"){switch(Nn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return _e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Vn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw M()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return wr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new wl(_e(e.latitude),_e(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=tl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ls(e));default:return null}}convertTimestamp(e){const n=cn(e);return new Ee(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ue.fromString(e);ie(Op(r));const s=new us(r.get(1),r.get(3)),i=new O(r.popFirst(5));return s.isEqual(n)||St(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tA(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class nA extends ug{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new hi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(hg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class hi extends nA{data(e={}){return super.data(e)}}class rA{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ti(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new hi(this._firestore,this._userDataWriter,r.key,r,new ti(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new V(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new hi(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ti(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new hi(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ti(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:sA(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function sA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M()}}class iA extends eA{constructor(e){super(),this.firestore=e}convertBytes(e){return new gr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new lt(this.firestore,null,n)}}function Ah(t){t=Mi(t,bo);const e=Mi(t.firestore,El),n=ng(e),r=new iA(e);return Zw(t._query),Uw(n,t._query).then(s=>new rA(e,r,t,s))}function oA(t,e){const n=Mi(t.firestore,El),r=$w(t),s=tA(t.converter,e);return aA(n,[Gw(Ww(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Ft.exists(!1))]).then(()=>r)}function aA(t,e){return function(r,s){const i=new Lt;return r.asyncQueue.enqueueAndForget(async()=>Aw(await Lw(r),s,i)),i.promise}(ng(t),e)}function cA(){return new Rl("serverTimestamp")}(function(e,n=!0){(function(s){Ir=s})(vr),ar(new bn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new El(new eT(r.getProvider("auth-internal")),new sT(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new V(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new us(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),rn(qu,"4.5.0",e),rn(qu,"4.5.0","esm2017")})();var lA="firebase",uA="10.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rn(lA,uA,"app");const hA={apiKey:"AIzaSyBEvl4cdZKLPrVEakOSo4LwBv3PmCjd6sA",authDomain:"web2566-9c8e5.firebaseapp.com",projectId:"web2566-9c8e5",storageBucket:"web2566-9c8e5.appspot.com",messagingSenderId:"233722259887",appId:"1:233722259887:web:59cc38f53a689284e4675a",measurementId:"G-PWZCNDCYCP"};zd(hA);const Do=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},dA={name:"HelloWorld",data(){return{userData:null,checkinData:[]}},methods:{async fetchRandomUserData(){try{const t=pa(),e=await Ah(fa(t,"students")),n=[];e.forEach(s=>{n.push({id:s.id,stdID:s.data().stdID,email:s.data().email,name:s.data().name})});const r=Math.floor(Math.random()*n.length);this.userData=n[r]}catch(t){console.error("Error fetching random user data:",t)}},async Check(){try{if(!this.userData||!this.userData.stdID){console.error("stdID is not defined");return}const t=pa(),e={stdID:this.userData.stdID,class_date:cA(),room:"SC6969",subject:"CP9999"},n=await oA(fa(t,"checkin"),e);console.log("Document written with ID: ",n.id),this.collectorData={id:n.id,...e}}catch(t){console.error("Error creating new collector:",t)}},async CheckList(){try{const t=pa(),e=await Ah(fa(t,"checkin")),n=[];e.forEach(r=>{n.push({id:r.id,...r.data()})}),this.checkinData=n}catch(t){console.error("Error fetching checkin data:",t)}}}},fA={key:0},pA={key:0},gA=oe("h2",null,"รายการการเช็คชื่อ",-1);function mA(t,e,n,r,s,i){return $e(),Ke("div",null,[oe("button",{onClick:e[0]||(e[0]=(...o)=>i.fetchRandomUserData&&i.fetchRandomUserData(...o))},"สุ่มเช็คชื่อ"),s.userData?($e(),Ke("div",fA,[oe("p",null,"ID: "+pt(s.userData.stdID),1),oe("p",null,"Email: "+pt(s.userData.email),1),oe("p",null,"Name: "+pt(s.userData.name),1),oe("button",{onClick:e[1]||(e[1]=(...o)=>i.Check&&i.Check(...o))},"เช็คชื่อ")])):Wn("",!0),oe("div",null,[oe("button",{onClick:e[2]||(e[2]=(...o)=>i.CheckList&&i.CheckList(...o))},"แสดงรายการการเช็คชื่อ"),s.checkinData.length?($e(),Ke("div",pA,[gA,oe("ul",null,[($e(!0),Ke(gt,null,a_(s.checkinData,(o,a)=>($e(),Ke("li",{key:a},[oe("p",null,"StdID: "+pt(o.stdID),1),oe("p",null,"Class Date: "+pt(o.class_date),1),oe("p",null,"Room: "+pt(o.room),1),oe("p",null,"Subject: "+pt(o.subject),1)]))),128))])])):Wn("",!0)])])}const _A=Do(dA,[["render",mA]]),yA={},vA=oe("h1",null,"KUTTTTTTTTTTTTTTTTTTTTTTTTTTT",-1),EA=[vA];function TA(t,e){return $e(),Ke("div",null,EA)}const IA=Do(yA,[["render",TA]]);function Sl(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function dg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wA=dg,fg=new ys("auth","Firebase",dg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi=new Rc("@firebase/auth");function AA(t,...e){Fi.logLevel<=Q.WARN&&Fi.warn(`Auth (${vr}): ${t}`,...e)}function di(t,...e){Fi.logLevel<=Q.ERROR&&Fi.error(`Auth (${vr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t,...e){throw Pl(t,...e)}function At(t,...e){return Pl(t,...e)}function pg(t,e,n){const r=Object.assign(Object.assign({},wA()),{[e]:n});return new ys("auth","Firebase",r).create(e,{appName:t.name})}function RA(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&bt(t,"argument-error"),pg(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Pl(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return fg.create(t,...e)}function $(t,e,...n){if(!t)throw Pl(e,...n)}function Ot(t){const e="INTERNAL ASSERTION FAILED: "+t;throw di(e),new Error(e)}function jt(t,e){t||Ot(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function SA(){return Rh()==="http:"||Rh()==="https:"}function Rh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(SA()||by()||"connection"in navigator)?navigator.onLine:!0}function CA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,n){this.shortDelay=e,this.longDelay=n,jt(n>e,"Short delay should be less than long delay!"),this.isMobile=Py()||Dy()}get(){return PA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cl(t,e){jt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA=new Os(3e4,6e4);function bl(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Sr(t,e,n,r,s={}){return mg(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=vs(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),gg.fetch()(_g(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function mg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},bA),e);try{const s=new VA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ni(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ni(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ni(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ni(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw pg(t,u,l);bt(t,u)}}catch(s){if(s instanceof qt)throw s;bt(t,"network-request-failed",{message:String(s)})}}async function kA(t,e,n,r,s={}){const i=await Sr(t,e,n,r,s);return"mfaPendingCredential"in i&&bt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function _g(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Cl(t.config,s):`${t.config.apiScheme}://${s}`}class VA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(At(this.auth,"network-request-failed")),DA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ni(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=At(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NA(t,e){return Sr(t,"POST","/v1/accounts:delete",e)}async function OA(t,e){return Sr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function xA(t,e=!1){const n=rt(t),r=await n.getIdToken(e),s=Dl(r);$(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Gr(ga(s.auth_time)),issuedAtTime:Gr(ga(s.iat)),expirationTime:Gr(ga(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ga(t){return Number(t)*1e3}function Dl(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return di("JWT malformed, contained fewer than 3 sections"),null;try{const s=Fd(n);return s?JSON.parse(s):(di("Failed to decode base64 JWT payload"),null)}catch(s){return di("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function MA(t){const e=Dl(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof qt&&LA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function LA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gr(this.lastLoginAt),this.creationTime=Gr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ui(t){var e;const n=t.auth,r=await t.getIdToken(),s=await gs(t,OA(n,{idToken:r}));$(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?jA(i.providerUserInfo):[],a=BA(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new yg(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function UA(t){const e=rt(t);await Ui(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function BA(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function jA(t){return t.map(e=>{var{providerId:n}=e,r=Sl(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $A(t,e){const n=await mg(t,{},async()=>{const r=vs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=_g(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",gg.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function qA(t,e){return Sr(t,"POST","/v2/accounts:revokeToken",bl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):MA(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return $(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await $A(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ms;return r&&($(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&($(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&($(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ms,this.toJSON())}_performRefresh(){return Ot("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Pn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Sl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new FA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new yg(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await gs(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return xA(this,e)}reload(){return UA(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Pn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ui(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await gs(this,NA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,k=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,F=(l=n.createdAt)!==null&&l!==void 0?l:void 0,X=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:U,emailVerified:Z,isAnonymous:ge,providerData:z,stsTokenManager:Se}=n;$(U&&Se,e,"internal-error");const Qe=ms.fromJSON(this.name,Se);$(typeof U=="string",e,"internal-error"),zt(d,e.name),zt(p,e.name),$(typeof Z=="boolean",e,"internal-error"),$(typeof ge=="boolean",e,"internal-error"),zt(g,e.name),zt(k,e.name),zt(C,e.name),zt(b,e.name),zt(F,e.name),zt(X,e.name);const Dt=new Pn({uid:U,auth:e,email:p,emailVerified:Z,displayName:d,isAnonymous:ge,photoURL:k,phoneNumber:g,tenantId:C,stsTokenManager:Qe,createdAt:F,lastLoginAt:X});return z&&Array.isArray(z)&&(Dt.providerData=z.map(Xe=>Object.assign({},Xe))),b&&(Dt._redirectEventId=b),Dt}static async _fromIdTokenResponse(e,n,r=!1){const s=new ms;s.updateFromServerResponse(n);const i=new Pn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ui(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh=new Map;function xt(t){jt(t instanceof Function,"Expected a class definition");let e=Sh.get(t);return e?(jt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Sh.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}vg.type="NONE";const Ph=vg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(t,e,n){return`firebase:${t}:${e}:${n}`}class nr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=fi(this.userKey,s.apiKey,i),this.fullPersistenceKey=fi("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Pn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new nr(xt(Ph),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||xt(Ph);const o=fi(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const d=Pn._fromJSON(e,u);l!==i&&(a=d),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new nr(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new nr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ch(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ig(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Eg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ag(e))return"Blackberry";if(Rg(e))return"Webos";if(kl(e))return"Safari";if((e.includes("chrome/")||Tg(e))&&!e.includes("edge/"))return"Chrome";if(wg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Eg(t=ye()){return/firefox\//i.test(t)}function kl(t=ye()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Tg(t=ye()){return/crios\//i.test(t)}function Ig(t=ye()){return/iemobile/i.test(t)}function wg(t=ye()){return/android/i.test(t)}function Ag(t=ye()){return/blackberry/i.test(t)}function Rg(t=ye()){return/webos/i.test(t)}function ko(t=ye()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function HA(t=ye()){var e;return ko(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function zA(){return ky()&&document.documentMode===10}function Sg(t=ye()){return ko(t)||wg(t)||Rg(t)||Ag(t)||/windows phone/i.test(t)||Ig(t)}function KA(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pg(t,e=[]){let n;switch(t){case"Browser":n=Ch(ye());break;case"Worker":n=`${Ch(ye())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${vr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GA(t,e={}){return Sr(t,"GET","/v2/passwordPolicy",bl(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA=6;class JA{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:QA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new bh(this),this.idTokenSubscription=new bh(this),this.beforeStateQueue=new WA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=fg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=xt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await nr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ui(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=CA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?rt(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(xt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await GA(this),n=new JA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ys("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await qA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&xt(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await nr.create(this,[xt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if($(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Pg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&AA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Vo(t){return rt(t)}class bh{constructor(e){this.auth=e,this.observer=null,this.addObserver=Fy(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function XA(t){Vl=t}function ZA(t){return Vl.loadJS(t)}function e0(){return Vl.gapiScript}function t0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n0(t,e){const n=Pc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ii(i,e??{}))return s;bt(s,"already-initialized")}return n.initialize({options:e})}function r0(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(xt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function s0(t,e,n){const r=Vo(t);$(r._canInitEmulator,r,"emulator-config-failed"),$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Cg(e),{host:o,port:a}=i0(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||o0()}function Cg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function i0(t){const e=Cg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Dh(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Dh(o)}}}function Dh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function o0(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ot("not implemented")}_getIdTokenResponse(e){return Ot("not implemented")}_linkToIdToken(e,n){return Ot("not implemented")}_getReauthenticationResolver(e){return Ot("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rr(t,e){return kA(t,"POST","/v1/accounts:signInWithIdp",bl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a0="http://localhost";class On extends bg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new On(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):bt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Sl(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new On(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return rr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,rr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,rr(e,n)}buildRequest(){const e={requestUri:a0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=vs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs extends Nl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends xs{constructor(){super("facebook.com")}static credential(e){return On._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qt.credential(e.oauthAccessToken)}catch{return null}}}Qt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt extends xs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return On._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Vt.credential(n,r)}catch{return null}}}Vt.GOOGLE_SIGN_IN_METHOD="google.com";Vt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends xs{constructor(){super("github.com")}static credential(e){return On._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jt.credential(e.oauthAccessToken)}catch{return null}}}Jt.GITHUB_SIGN_IN_METHOD="github.com";Jt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends xs{constructor(){super("twitter.com")}static credential(e,n){return On._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Yt.credential(n,r)}catch{return null}}}Yt.TWITTER_SIGN_IN_METHOD="twitter.com";Yt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Pn._fromIdTokenResponse(e,r,s),o=kh(r);return new mr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=kh(r);return new mr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function kh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi extends qt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Bi.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Bi(e,n,r,s)}}function Dg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Bi._fromErrorAndOperation(t,i,e,r):i})}async function c0(t,e,n=!1){const r=await gs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return mr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l0(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await gs(t,Dg(r,s,e,t),n);$(i.idToken,r,"internal-error");const o=Dl(i.idToken);$(o,r,"internal-error");const{sub:a}=o;return $(t.uid===a,r,"user-mismatch"),mr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&bt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u0(t,e,n=!1){const r="signIn",s=await Dg(t,r,e),i=await mr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function h0(t,e,n,r){return rt(t).onIdTokenChanged(e,n,r)}function d0(t,e,n){return rt(t).beforeAuthStateChanged(e,n)}function f0(t){return rt(t).signOut()}const ji="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ji,"1"),this.storage.removeItem(ji),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p0(){const t=ye();return kl(t)||ko(t)}const g0=1e3,m0=10;class Vg extends kg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=p0()&&KA(),this.fallbackToPolling=Sg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);zA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,m0):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},g0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Vg.type="LOCAL";const _0=Vg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng extends kg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ng.type="SESSION";const Og=Ng;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new No(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await y0(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}No.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Ol("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const p=d;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(){return window}function E0(t){Rt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xg(){return typeof Rt().WorkerGlobalScope<"u"&&typeof Rt().importScripts=="function"}async function T0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function I0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function w0(){return xg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg="firebaseLocalStorageDb",A0=1,$i="firebaseLocalStorage",Lg="fbase_key";class Ms{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Oo(t,e){return t.transaction([$i],e?"readwrite":"readonly").objectStore($i)}function R0(){const t=indexedDB.deleteDatabase(Mg);return new Ms(t).toPromise()}function sc(){const t=indexedDB.open(Mg,A0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore($i,{keyPath:Lg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains($i)?e(r):(r.close(),await R0(),e(await sc()))})})}async function Vh(t,e,n){const r=Oo(t,!0).put({[Lg]:e,value:n});return new Ms(r).toPromise()}async function S0(t,e){const n=Oo(t,!1).get(e),r=await new Ms(n).toPromise();return r===void 0?null:r.value}function Nh(t,e){const n=Oo(t,!0).delete(e);return new Ms(n).toPromise()}const P0=800,C0=3;class Fg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>C0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=No._getInstance(w0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await T0(),!this.activeServiceWorker)return;this.sender=new v0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||I0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await sc();return await Vh(e,ji,"1"),await Nh(e,ji),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Vh(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>S0(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Nh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Oo(s,!1).getAll();return new Ms(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),P0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Fg.type="LOCAL";const b0=Fg;new Os(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ug(t,e){return e?xt(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl extends bg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return rr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return rr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return rr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function D0(t){return u0(t.auth,new xl(t),t.bypassAuthState)}function k0(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),l0(n,new xl(t),t.bypassAuthState)}async function V0(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),c0(n,new xl(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return D0;case"linkViaPopup":case"linkViaRedirect":return V0;case"reauthViaPopup":case"reauthViaRedirect":return k0;default:bt(this.auth,"internal-error")}}resolve(e){jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N0=new Os(2e3,1e4);async function O0(t,e,n){const r=Vo(t);RA(t,e,Nl);const s=Ug(r,n);return new wn(r,"signInViaPopup",e,s).executeNotNull()}class wn extends Bg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,wn.currentPopupAction&&wn.currentPopupAction.cancel(),wn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){jt(this.filter.length===1,"Popup operations only handle one event");const e=Ol();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(At(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(At(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(At(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,N0.get())};e()}}wn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x0="pendingRedirect",pi=new Map;class M0 extends Bg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=pi.get(this.auth._key());if(!e){try{const r=await L0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}pi.set(this.auth._key(),e)}return this.bypassAuthState||pi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function L0(t,e){const n=B0(e),r=U0(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function F0(t,e){pi.set(t._key(),e)}function U0(t){return xt(t._redirectPersistence)}function B0(t){return fi(x0,t.config.apiKey,t.name)}async function j0(t,e,n=!1){const r=Vo(t),s=Ug(r,e),o=await new M0(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0=10*60*1e3;class q0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!H0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!jg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(At(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Oh(e))}saveEventToCache(e){this.cachedEventUids.add(Oh(e)),this.lastProcessedEventTime=Date.now()}}function Oh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function jg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function H0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return jg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z0(t,e={}){return Sr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,W0=/^https?/;async function G0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await z0(t);for(const n of e)try{if(Q0(n))return}catch{}bt(t,"unauthorized-domain")}function Q0(t){const e=rc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!W0.test(n))return!1;if(K0.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J0=new Os(3e4,6e4);function xh(){const t=Rt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Y0(t){return new Promise((e,n)=>{var r,s,i;function o(){xh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{xh(),n(At(t,"network-request-failed"))},timeout:J0.get()})}if(!((s=(r=Rt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Rt().gapi)===null||i===void 0)&&i.load)o();else{const a=t0("iframefcb");return Rt()[a]=()=>{gapi.load?o():n(At(t,"network-request-failed"))},ZA(`${e0()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw gi=null,e})}let gi=null;function X0(t){return gi=gi||Y0(t),gi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0=new Os(5e3,15e3),eR="__/auth/iframe",tR="emulator/auth/iframe",nR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sR(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Cl(e,tR):`https://${t.config.authDomain}/${eR}`,r={apiKey:e.apiKey,appName:t.name,v:vr},s=rR.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${vs(r).slice(1)}`}async function iR(t){const e=await X0(t),n=Rt().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:sR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nR,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=At(t,"network-request-failed"),a=Rt().setTimeout(()=>{i(o)},Z0.get());function c(){Rt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},aR=500,cR=600,lR="_blank",uR="http://localhost";class Mh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function hR(t,e,n,r=aR,s=cR){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},oR),{width:r.toString(),height:s.toString(),top:i,left:o}),l=ye().toLowerCase();n&&(a=Tg(l)?lR:n),Eg(l)&&(e=e||uR,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[g,k])=>`${p}${g}=${k},`,"");if(HA(l)&&a!=="_self")return dR(e||"",a),new Mh(null);const d=window.open(e||"",a,u);$(d,t,"popup-blocked");try{d.focus()}catch{}return new Mh(d)}function dR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fR="__/auth/handler",pR="emulator/auth/handler",gR=encodeURIComponent("fac");async function Lh(t,e,n,r,s,i){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:vr,eventId:s};if(e instanceof Nl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ly(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries(i||{}))o[u]=d}if(e instanceof xs){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${gR}=${encodeURIComponent(c)}`:"";return`${mR(t)}?${vs(a).slice(1)}${l}`}function mR({config:t}){return t.emulator?Cl(t,pR):`https://${t.authDomain}/${fR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma="webStorageSupport";class _R{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Og,this._completeRedirectFn=j0,this._overrideRedirectResult=F0}async _openPopup(e,n,r,s){var i;jt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Lh(e,n,r,rc(),s);return hR(e,o,Ol())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Lh(e,n,r,rc(),s);return E0(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(jt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await iR(e),r=new q0(e);return n.register("authEvent",s=>($(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ma,{type:ma},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ma];o!==void 0&&n(!!o),bt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=G0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Sg()||kl()||ko()}}const yR=_R;var Fh="@firebase/auth",Uh="1.6.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ER(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function TR(t){ar(new bn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Pg(t)},l=new YA(r,s,i,c);return r0(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ar(new bn("auth-internal",e=>{const n=Vo(e.getProvider("auth").getImmediate());return(r=>new vR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),rn(Fh,Uh,ER(t)),rn(Fh,Uh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IR=5*60,wR=jd("authIdTokenMaxAge")||IR;let Bh=null;const AR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>wR)return;const s=n==null?void 0:n.token;Bh!==s&&(Bh=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function RR(t=Kd()){const e=Pc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=n0(t,{popupRedirectResolver:yR,persistence:[b0,_0,Og]}),r=jd("authTokenSyncURL");if(r&&r.match(/^\/[^\/].*/)){const i=AR(r);d0(n,i,()=>i(n.currentUser)),h0(n,o=>i(o))}const s=Ud("auth");return s&&s0(n,`http://${s}`),n}function SR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}XA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=At("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",SR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});TR("Browser");const Ml=t=>(Lm("data-v-aad0cf90"),t=t(),Fm(),t),PR={key:0,id:"logout"},CR={key:1,id:"GoogleSignin"},bR=Ml(()=>oe("h3",null,"Google Signin",-1)),DR={class:"hello"},kR=Ml(()=>oe("br",null,null,-1)),VR={id:"content"},NR={key:0},OR={key:0},xR={key:1},MR={key:0},LR=Ml(()=>oe("br",null,null,-1)),FR={__name:"HelloWorld",setup(t){const e=RR(),n=new Vt,r=$o(""),s=$o(!1),i=$o(!1),o=()=>{O0(e,n).then(c=>{r.value=c.user.displayName,s.value=!0,i.value=c.user.email==="watsayot.p@kkumail.com",localStorage.setItem("user",JSON.stringify(r.value)),localStorage.setItem("isSignIn",JSON.stringify(s.value)),localStorage.setItem("isAdmin",JSON.stringify(i.value))}).catch(c=>{console.log(c)})},a=()=>{f0(e).then(()=>{r.value="",s.value=!1,i.value=!1,localStorage.removeItem("user"),localStorage.removeItem("isSignIn"),localStorage.removeItem("isAdmin")}).catch(c=>{console.log(c)})};return Td(()=>{const c=localStorage.getItem("user"),l=localStorage.getItem("isSignIn"),u=localStorage.getItem("isAdmin");c&&l&&u&&(r.value=JSON.parse(c),s.value=JSON.parse(l),i.value=JSON.parse(u))}),(c,l)=>($e(),Ke("div",null,[oe("header",null,[s.value?($e(),Ke("div",PR,[oe("button",{onClick:a},"logout")])):Wn("",!0),s.value?Wn("",!0):($e(),Ke("div",CR,[bR,oe("button",{onClick:o},"login")]))]),oe("div",DR,[oe("h1",null,pt(c.msg),1),kR,oe("div",VR,[i.value?($e(),Ke("h3",NR,[s.value?($e(),Ke("h2",OR,"สวัสดีอาจารย์: "+pt(r.value),1)):Wn("",!0),nt(_A)])):($e(),Ke("p",xR,[s.value?($e(),Ke("h2",MR,"สวัสดีคุณ: "+pt(r.value),1)):Wn("",!0),nt(IA)]))]),LR])]))}},UR=Do(FR,[["__scopeId","data-v-aad0cf90"]]),BR={id:"app"},jR={__name:"App",setup(t){return(e,n)=>($e(),Ke("div",BR,[nt(UR)]))}},$R=Do(jR,[["__scopeId","data-v-bad1a784"]]);py($R).mount("#app");
