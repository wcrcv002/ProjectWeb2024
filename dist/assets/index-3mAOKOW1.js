(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function _c(t,e){const n=new Set(t.split(","));return e?r=>n.has(r.toLowerCase()):r=>n.has(r)}const ce={},tr=[],it=()=>{},lm=()=>!1,Xi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),yc=t=>t.startsWith("onUpdate:"),qe=Object.assign,vc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},um=Object.prototype.hasOwnProperty,X=(t,e)=>um.call(t,e),q=Array.isArray,nr=t=>Zi(t)==="[object Map]",sd=t=>Zi(t)==="[object Set]",W=t=>typeof t=="function",we=t=>typeof t=="string",Tr=t=>typeof t=="symbol",pe=t=>t!==null&&typeof t=="object",id=t=>(pe(t)||W(t))&&W(t.then)&&W(t.catch),od=Object.prototype.toString,Zi=t=>od.call(t),hm=t=>Zi(t).slice(8,-1),ad=t=>Zi(t)==="[object Object]",Ec=t=>we(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,qr=_c(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),eo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},dm=/-(\w)/g,Pt=eo(t=>t.replace(dm,(e,n)=>n?n.toUpperCase():"")),fm=/\B([A-Z])/g,wr=eo(t=>t.replace(fm,"-$1").toLowerCase()),to=eo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Qo=eo(t=>t?`on${to(t)}`:""),ln=(t,e)=>!Object.is(t,e),li=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ri=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Pa=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let nu;const cd=()=>nu||(nu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ic(t){if(q(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=we(r)?_m(r):Ic(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(we(t)||pe(t))return t}const pm=/;(?![^(]*\))/g,gm=/:([^]+)/,mm=/\/\*[^]*?\*\//g;function _m(t){const e={};return t.replace(mm,"").split(pm).forEach(n=>{if(n){const r=n.split(gm);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Tc(t){let e="";if(we(t))e=t;else if(q(t))for(let n=0;n<t.length;n++){const r=Tc(t[n]);r&&(e+=r+" ")}else if(pe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ym="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",vm=_c(ym);function ld(t){return!!t||t===""}const Me=t=>we(t)?t:t==null?"":q(t)||pe(t)&&(t.toString===od||!W(t.toString))?JSON.stringify(t,ud,2):String(t),ud=(t,e)=>e&&e.__v_isRef?ud(t,e.value):nr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Jo(r,i)+" =>"]=s,n),{})}:sd(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Jo(n))}:Tr(e)?Jo(e):pe(e)&&!q(e)&&!ad(e)?String(e):e,Jo=(t,e="")=>{var n;return Tr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ct;class Em{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ct,!e&&ct&&(this.index=(ct.scopes||(ct.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=ct;try{return ct=this,e()}finally{ct=n}}}on(){ct=this}off(){ct=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Im(t,e=ct){e&&e.active&&e.effects.push(t)}function Tm(){return ct}let bn;class wc{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Im(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Un();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(wm(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Bn()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=nn,n=bn;try{return nn=!0,bn=this,this._runnings++,ru(this),this.fn()}finally{su(this),this._runnings--,bn=n,nn=e}}stop(){var e;this.active&&(ru(this),su(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function wm(t){return t.value}function ru(t){t._trackId++,t._depsLength=0}function su(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)hd(t.deps[e],t);t.deps.length=t._depsLength}}function hd(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let nn=!0,ba=0;const dd=[];function Un(){dd.push(nn),nn=!1}function Bn(){const t=dd.pop();nn=t===void 0?!0:t}function Ac(){ba++}function Rc(){for(ba--;!ba&&Ca.length;)Ca.shift()()}function fd(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&hd(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Ca=[];function pd(t,e,n){Ac();for(const r of t.keys()){let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&Ca.push(r.scheduler)))}Rc()}const gd=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Da=new WeakMap,Cn=Symbol(""),ka=Symbol("");function Je(t,e,n){if(nn&&bn){let r=Da.get(t);r||Da.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=gd(()=>r.delete(n))),fd(bn,s)}}function Ft(t,e,n,r,s,i){const o=Da.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&q(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||!Tr(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":q(t)?Ec(n)&&a.push(o.get("length")):(a.push(o.get(Cn)),nr(t)&&a.push(o.get(ka)));break;case"delete":q(t)||(a.push(o.get(Cn)),nr(t)&&a.push(o.get(ka)));break;case"set":nr(t)&&a.push(o.get(Cn));break}Ac();for(const c of a)c&&pd(c,4);Rc()}const Am=_c("__proto__,__v_isRef,__isVue"),md=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Tr)),iu=Rm();function Rm(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ne(this);for(let i=0,o=this.length;i<o;i++)Je(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(ne)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Un(),Ac();const r=ne(this)[e].apply(this,n);return Rc(),Bn(),r}}),t}function Sm(t){const e=ne(this);return Je(e,"has",t),e.hasOwnProperty(t)}class _d{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Um:Id:i?Ed:vd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=q(e);if(!s){if(o&&X(iu,n))return Reflect.get(iu,n,r);if(n==="hasOwnProperty")return Sm}const a=Reflect.get(e,n,r);return(Tr(n)?md.has(n):Am(n))||(s||Je(e,"get",n),i)?a:Ye(a)?o&&Ec(n)?a:a.value:pe(a)?s?Td(a):bc(a):a}}class yd extends _d{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=ur(i);if(!Si(r)&&!ur(r)&&(i=ne(i),r=ne(r)),!q(e)&&Ye(i)&&!Ye(r))return c?!1:(i.value=r,!0)}const o=q(e)&&Ec(n)?Number(n)<e.length:X(e,n),a=Reflect.set(e,n,r,s);return e===ne(s)&&(o?ln(r,i)&&Ft(e,"set",n,r):Ft(e,"add",n,r)),a}deleteProperty(e,n){const r=X(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Ft(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Tr(n)||!md.has(n))&&Je(e,"has",n),r}ownKeys(e){return Je(e,"iterate",q(e)?"length":Cn),Reflect.ownKeys(e)}}class Pm extends _d{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const bm=new yd,Cm=new Pm,Dm=new yd(!0),Sc=t=>t,no=t=>Reflect.getPrototypeOf(t);function Ws(t,e,n=!1,r=!1){t=t.__v_raw;const s=ne(t),i=ne(e);n||(ln(e,i)&&Je(s,"get",e),Je(s,"get",i));const{has:o}=no(s),a=r?Sc:n?Dc:es;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Gs(t,e=!1){const n=this.__v_raw,r=ne(n),s=ne(t);return e||(ln(t,s)&&Je(r,"has",t),Je(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Qs(t,e=!1){return t=t.__v_raw,!e&&Je(ne(t),"iterate",Cn),Reflect.get(t,"size",t)}function ou(t){t=ne(t);const e=ne(this);return no(e).has.call(e,t)||(e.add(t),Ft(e,"add",t,t)),this}function au(t,e){e=ne(e);const n=ne(this),{has:r,get:s}=no(n);let i=r.call(n,t);i||(t=ne(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?ln(e,o)&&Ft(n,"set",t,e):Ft(n,"add",t,e),this}function cu(t){const e=ne(this),{has:n,get:r}=no(e);let s=n.call(e,t);s||(t=ne(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Ft(e,"delete",t,void 0),i}function lu(){const t=ne(this),e=t.size!==0,n=t.clear();return e&&Ft(t,"clear",void 0,void 0),n}function Js(t,e){return function(r,s){const i=this,o=i.__v_raw,a=ne(o),c=e?Sc:t?Dc:es;return!t&&Je(a,"iterate",Cn),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function Ys(t,e,n){return function(...r){const s=this.__v_raw,i=ne(s),o=nr(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Sc:e?Dc:es;return!e&&Je(i,"iterate",c?ka:Cn),{next(){const{value:h,done:p}=l.next();return p?{value:h,done:p}:{value:a?[u(h[0]),u(h[1])]:u(h),done:p}},[Symbol.iterator](){return this}}}}function Kt(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function km(){const t={get(i){return Ws(this,i)},get size(){return Qs(this)},has:Gs,add:ou,set:au,delete:cu,clear:lu,forEach:Js(!1,!1)},e={get(i){return Ws(this,i,!1,!0)},get size(){return Qs(this)},has:Gs,add:ou,set:au,delete:cu,clear:lu,forEach:Js(!1,!0)},n={get(i){return Ws(this,i,!0)},get size(){return Qs(this,!0)},has(i){return Gs.call(this,i,!0)},add:Kt("add"),set:Kt("set"),delete:Kt("delete"),clear:Kt("clear"),forEach:Js(!0,!1)},r={get(i){return Ws(this,i,!0,!0)},get size(){return Qs(this,!0)},has(i){return Gs.call(this,i,!0)},add:Kt("add"),set:Kt("set"),delete:Kt("delete"),clear:Kt("clear"),forEach:Js(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Ys(i,!1,!1),n[i]=Ys(i,!0,!1),e[i]=Ys(i,!1,!0),r[i]=Ys(i,!0,!0)}),[t,n,e,r]}const[Vm,Nm,Om,xm]=km();function Pc(t,e){const n=e?t?xm:Om:t?Nm:Vm;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(X(n,s)&&s in r?n:r,s,i)}const Mm={get:Pc(!1,!1)},Lm={get:Pc(!1,!0)},Fm={get:Pc(!0,!1)},vd=new WeakMap,Ed=new WeakMap,Id=new WeakMap,Um=new WeakMap;function Bm(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function jm(t){return t.__v_skip||!Object.isExtensible(t)?0:Bm(hm(t))}function bc(t){return ur(t)?t:Cc(t,!1,bm,Mm,vd)}function $m(t){return Cc(t,!1,Dm,Lm,Ed)}function Td(t){return Cc(t,!0,Cm,Fm,Id)}function Cc(t,e,n,r,s){if(!pe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=jm(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function rr(t){return ur(t)?rr(t.__v_raw):!!(t&&t.__v_isReactive)}function ur(t){return!!(t&&t.__v_isReadonly)}function Si(t){return!!(t&&t.__v_isShallow)}function wd(t){return rr(t)||ur(t)}function ne(t){const e=t&&t.__v_raw;return e?ne(e):t}function Ad(t){return Object.isExtensible(t)&&Ri(t,"__v_skip",!0),t}const es=t=>pe(t)?bc(t):t,Dc=t=>pe(t)?Td(t):t;class Rd{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new wc(()=>e(this._value),()=>ui(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=ne(this);return(!e._cacheable||e.effect.dirty)&&ln(e._value,e._value=e.effect.run())&&ui(e,4),Sd(e),e.effect._dirtyLevel>=2&&ui(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function qm(t,e,n=!1){let r,s;const i=W(t);return i?(r=t,s=it):(r=t.get,s=t.set),new Rd(r,s,i||!s,n)}function Sd(t){var e;nn&&bn&&(t=ne(t),fd(bn,(e=t.dep)!=null?e:t.dep=gd(()=>t.dep=void 0,t instanceof Rd?t:void 0)))}function ui(t,e=4,n){t=ne(t);const r=t.dep;r&&pd(r,e)}function Ye(t){return!!(t&&t.__v_isRef===!0)}function Yo(t){return Hm(t,!1)}function Hm(t,e){return Ye(t)?t:new zm(t,e)}class zm{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ne(e),this._value=n?e:es(e)}get value(){return Sd(this),this._value}set value(e){const n=this.__v_isShallow||Si(e)||ur(e);e=n?e:ne(e),ln(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:es(e),ui(this,4))}}function Km(t){return Ye(t)?t.value:t}const Wm={get:(t,e,n)=>Km(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ye(s)&&!Ye(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Pd(t){return rr(t)?t:new Proxy(t,Wm)}/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function rn(t,e,n,r){try{return r?t(...r):t()}catch(s){ro(s,e,n)}}function ht(t,e,n,r){if(W(t)){const i=rn(t,e,n,r);return i&&id(i)&&i.catch(o=>{ro(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(ht(t[i],e,n,r));return s}function ro(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){rn(c,null,10,[t,o,a]);return}}Gm(t,n,s,r)}function Gm(t,e,n,r=!0){console.error(t)}let ts=!1,Va=!1;const Ue=[];let vt=0;const sr=[];let Gt=null,En=0;const bd=Promise.resolve();let kc=null;function Qm(t){const e=kc||bd;return t?e.then(this?t.bind(this):t):e}function Jm(t){let e=vt+1,n=Ue.length;for(;e<n;){const r=e+n>>>1,s=Ue[r],i=ns(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function Vc(t){(!Ue.length||!Ue.includes(t,ts&&t.allowRecurse?vt+1:vt))&&(t.id==null?Ue.push(t):Ue.splice(Jm(t.id),0,t),Cd())}function Cd(){!ts&&!Va&&(Va=!0,kc=bd.then(kd))}function Ym(t){const e=Ue.indexOf(t);e>vt&&Ue.splice(e,1)}function Xm(t){q(t)?sr.push(...t):(!Gt||!Gt.includes(t,t.allowRecurse?En+1:En))&&sr.push(t),Cd()}function uu(t,e,n=ts?vt+1:0){for(;n<Ue.length;n++){const r=Ue[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;Ue.splice(n,1),n--,r()}}}function Dd(t){if(sr.length){const e=[...new Set(sr)].sort((n,r)=>ns(n)-ns(r));if(sr.length=0,Gt){Gt.push(...e);return}for(Gt=e,En=0;En<Gt.length;En++)Gt[En]();Gt=null,En=0}}const ns=t=>t.id==null?1/0:t.id,Zm=(t,e)=>{const n=ns(t)-ns(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function kd(t){Va=!1,ts=!0,Ue.sort(Zm);try{for(vt=0;vt<Ue.length;vt++){const e=Ue[vt];e&&e.active!==!1&&rn(e,null,14)}}finally{vt=0,Ue.length=0,Dd(),ts=!1,kc=null,(Ue.length||sr.length)&&kd()}}function e_(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ce;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=r[u]||ce;p&&(s=n.map(g=>we(g)?g.trim():g)),h&&(s=n.map(Pa))}let a,c=r[a=Qo(e)]||r[a=Qo(Pt(e))];!c&&i&&(c=r[a=Qo(wr(e))]),c&&ht(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ht(l,t,6,s)}}function Vd(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!W(t)){const c=l=>{const u=Vd(l,e,!0);u&&(a=!0,qe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(pe(t)&&r.set(t,null),null):(q(i)?i.forEach(c=>o[c]=null):qe(o,i),pe(t)&&r.set(t,o),o)}function so(t,e){return!t||!Xi(e)?!1:(e=e.slice(2).replace(/Once$/,""),X(t,e[0].toLowerCase()+e.slice(1))||X(t,wr(e))||X(t,e))}let Qe=null,io=null;function Pi(t){const e=Qe;return Qe=t,io=t&&t.type.__scopeId||null,e}function Nc(t){io=t}function Oc(){io=null}function Wn(t,e=Qe,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Tu(-1);const i=Pi(e);let o;try{o=t(...s)}finally{Pi(i),r._d&&Tu(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Xo(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:p,setupState:g,ctx:k,inheritAttrs:b}=t;let C,F;const Z=Pi(t);try{if(n.shapeFlag&4){const ee=s||r,_e=ee;C=yt(u.call(_e,ee,h,i,g,p,k)),F=c}else{const ee=e;C=yt(ee.length>1?ee(i,{attrs:c,slots:a,emit:l}):ee(i,null)),F=e.props?c:t_(c)}}catch(ee){Kr.length=0,ro(ee,t,1),C=ke(Vn)}let U=C;if(F&&b!==!1){const ee=Object.keys(F),{shapeFlag:_e}=U;ee.length&&_e&7&&(o&&ee.some(yc)&&(F=n_(F,o)),U=hr(U,F))}return n.dirs&&(U=hr(U),U.dirs=U.dirs?U.dirs.concat(n.dirs):n.dirs),n.transition&&(U.transition=n.transition),C=U,Pi(Z),C}const t_=t=>{let e;for(const n in t)(n==="class"||n==="style"||Xi(n))&&((e||(e={}))[n]=t[n]);return e},n_=(t,e)=>{const n={};for(const r in t)(!yc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function r_(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?hu(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const p=u[h];if(o[p]!==r[p]&&!so(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?hu(r,o,l):!0:!!o;return!1}function hu(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!so(n,i))return!0}return!1}function s_({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Nd="components";function du(t,e){return o_(Nd,t,!0,e)||t}const i_=Symbol.for("v-ndc");function o_(t,e,n=!0,r=!1){const s=Qe||Be;if(s){const i=s.type;if(t===Nd){const a=ty(i,!1);if(a&&(a===e||a===Pt(e)||a===to(Pt(e))))return i}const o=fu(s[t]||i[t],e)||fu(s.appContext[t],e);return!o&&r?i:o}}function fu(t,e){return t&&(t[e]||t[Pt(e)]||t[to(Pt(e))])}const a_=t=>t.__isSuspense;function c_(t,e){e&&e.pendingBranch?q(t)?e.effects.push(...t):e.effects.push(t):Xm(t)}const l_=Symbol.for("v-scx"),u_=()=>fi(l_),Xs={};function Zo(t,e,n){return Od(t,e,n)}function Od(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=ce){if(e&&i){const z=e;e=(...be)=>{z(...be),_e()}}const c=Be,l=z=>r===!0?z:Tn(z,r===!1?1:void 0);let u,h=!1,p=!1;if(Ye(t)?(u=()=>t.value,h=Si(t)):rr(t)?(u=()=>l(t),h=!0):q(t)?(p=!0,h=t.some(z=>rr(z)||Si(z)),u=()=>t.map(z=>{if(Ye(z))return z.value;if(rr(z))return l(z);if(W(z))return rn(z,c,2)})):W(t)?e?u=()=>rn(t,c,2):u=()=>(g&&g(),ht(t,c,3,[k])):u=it,e&&r){const z=u;u=()=>Tn(z())}let g,k=z=>{g=U.onStop=()=>{rn(z,c,4),g=U.onStop=void 0}},b;if(lo)if(k=it,e?n&&ht(e,c,3,[u(),p?[]:void 0,k]):u(),s==="sync"){const z=u_();b=z.__watcherHandles||(z.__watcherHandles=[])}else return it;let C=p?new Array(t.length).fill(Xs):Xs;const F=()=>{if(!(!U.active||!U.dirty))if(e){const z=U.run();(r||h||(p?z.some((be,Xe)=>ln(be,C[Xe])):ln(z,C)))&&(g&&g(),ht(e,c,3,[z,C===Xs?void 0:p&&C[0]===Xs?[]:C,k]),C=z)}else U.run()};F.allowRecurse=!!e;let Z;s==="sync"?Z=F:s==="post"?Z=()=>Ge(F,c&&c.suspense):(F.pre=!0,c&&(F.id=c.uid),Z=()=>Vc(F));const U=new wc(u,it,Z),ee=Tm(),_e=()=>{U.stop(),ee&&vc(ee.effects,U)};return e?n?F():C=U.run():s==="post"?Ge(U.run.bind(U),c&&c.suspense):U.run(),b&&b.push(_e),_e}function h_(t,e,n){const r=this.proxy,s=we(t)?t.includes(".")?xd(r,t):()=>r[t]:t.bind(r,r);let i;W(e)?i=e:(i=e.handler,n=e);const o=Ts(this),a=Od(s,i.bind(r),n);return o(),a}function xd(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Tn(t,e,n=0,r){if(!pe(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(r=r||new Set,r.has(t))return t;if(r.add(t),Ye(t))Tn(t.value,e,n,r);else if(q(t))for(let s=0;s<t.length;s++)Tn(t[s],e,n,r);else if(sd(t)||nr(t))t.forEach(s=>{Tn(s,e,n,r)});else if(ad(t))for(const s in t)Tn(t[s],e,n,r);return t}function hi(t,e){if(Qe===null)return t;const n=uo(Qe)||Qe.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=ce]=e[s];i&&(W(i)&&(i={mounted:i,updated:i}),i.deep&&Tn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function _n(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Un(),ht(c,n,8,[t.el,a,t,e]),Bn())}}const di=t=>!!t.type.__asyncLoader,Md=t=>t.type.__isKeepAlive;function d_(t,e){Ld(t,"a",e)}function f_(t,e){Ld(t,"da",e)}function Ld(t,e,n=Be){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(oo(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Md(s.parent.vnode)&&p_(r,e,n,s),s=s.parent}}function p_(t,e,n,r){const s=oo(e,t,r,!0);Ud(()=>{vc(r[e],s)},n)}function oo(t,e,n=Be,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Un();const a=Ts(n),c=ht(e,n,t,o);return a(),Bn(),c});return r?s.unshift(i):s.push(i),i}}const Ht=t=>(e,n=Be)=>(!lo||t==="sp")&&oo(t,(...r)=>e(...r),n),g_=Ht("bm"),Fd=Ht("m"),m_=Ht("bu"),__=Ht("u"),y_=Ht("bum"),Ud=Ht("um"),v_=Ht("sp"),E_=Ht("rtg"),I_=Ht("rtc");function T_(t,e=Be){oo("ec",t,e)}function ea(t,e,n,r){let s;const i=n&&n[r];if(q(t)||we(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(pe(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const Na=t=>t?Yd(t)?uo(t)||t.proxy:Na(t.parent):null,Hr=qe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Na(t.parent),$root:t=>Na(t.root),$emit:t=>t.emit,$options:t=>xc(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Vc(t.update)}),$nextTick:t=>t.n||(t.n=Qm.bind(t.proxy)),$watch:t=>h_.bind(t)}),ta=(t,e)=>t!==ce&&!t.__isScriptSetup&&X(t,e),w_={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(ta(r,e))return o[e]=1,r[e];if(s!==ce&&X(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&X(l,e))return o[e]=3,i[e];if(n!==ce&&X(n,e))return o[e]=4,n[e];Oa&&(o[e]=0)}}const u=Hr[e];let h,p;if(u)return e==="$attrs"&&Je(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ce&&X(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,X(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return ta(s,e)?(s[e]=n,!0):r!==ce&&X(r,e)?(r[e]=n,!0):X(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==ce&&X(t,o)||ta(e,o)||(a=i[0])&&X(a,o)||X(r,o)||X(Hr,o)||X(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:X(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function pu(t){return q(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Oa=!0;function A_(t){const e=xc(t),n=t.proxy,r=t.ctx;Oa=!1,e.beforeCreate&&gu(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:p,beforeUpdate:g,updated:k,activated:b,deactivated:C,beforeDestroy:F,beforeUnmount:Z,destroyed:U,unmounted:ee,render:_e,renderTracked:z,renderTriggered:be,errorCaptured:Xe,serverPrefetch:Vt,expose:nt,inheritAttrs:Vr,components:qs,directives:Hs,filters:zo}=e;if(l&&R_(l,r,null),o)for(const fe in o){const ie=o[fe];W(ie)&&(r[fe]=ie.bind(n))}if(s){const fe=s.call(n,n);pe(fe)&&(t.data=bc(fe))}if(Oa=!0,i)for(const fe in i){const ie=i[fe],gn=W(ie)?ie.bind(n,n):W(ie.get)?ie.get.bind(n,n):it,zs=!W(ie)&&W(ie.set)?ie.set.bind(n):it,mn=ry({get:gn,set:zs});Object.defineProperty(r,fe,{enumerable:!0,configurable:!0,get:()=>mn.value,set:pt=>mn.value=pt})}if(a)for(const fe in a)Bd(a[fe],r,n,fe);if(c){const fe=W(c)?c.call(n):c;Reflect.ownKeys(fe).forEach(ie=>{k_(ie,fe[ie])})}u&&gu(u,t,"c");function ze(fe,ie){q(ie)?ie.forEach(gn=>fe(gn.bind(n))):ie&&fe(ie.bind(n))}if(ze(g_,h),ze(Fd,p),ze(m_,g),ze(__,k),ze(d_,b),ze(f_,C),ze(T_,Xe),ze(I_,z),ze(E_,be),ze(y_,Z),ze(Ud,ee),ze(v_,Vt),q(nt))if(nt.length){const fe=t.exposed||(t.exposed={});nt.forEach(ie=>{Object.defineProperty(fe,ie,{get:()=>n[ie],set:gn=>n[ie]=gn})})}else t.exposed||(t.exposed={});_e&&t.render===it&&(t.render=_e),Vr!=null&&(t.inheritAttrs=Vr),qs&&(t.components=qs),Hs&&(t.directives=Hs)}function R_(t,e,n=it){q(t)&&(t=xa(t));for(const r in t){const s=t[r];let i;pe(s)?"default"in s?i=fi(s.from||r,s.default,!0):i=fi(s.from||r):i=fi(s),Ye(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function gu(t,e,n){ht(q(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Bd(t,e,n,r){const s=r.includes(".")?xd(n,r):()=>n[r];if(we(t)){const i=e[t];W(i)&&Zo(s,i)}else if(W(t))Zo(s,t.bind(n));else if(pe(t))if(q(t))t.forEach(i=>Bd(i,e,n,r));else{const i=W(t.handler)?t.handler.bind(n):e[t.handler];W(i)&&Zo(s,i,t)}}function xc(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>bi(c,l,o,!0)),bi(c,e,o)),pe(e)&&i.set(e,c),c}function bi(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&bi(t,i,n,!0),s&&s.forEach(o=>bi(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=S_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const S_={data:mu,props:_u,emits:_u,methods:Fr,computed:Fr,beforeCreate:Ke,created:Ke,beforeMount:Ke,mounted:Ke,beforeUpdate:Ke,updated:Ke,beforeDestroy:Ke,beforeUnmount:Ke,destroyed:Ke,unmounted:Ke,activated:Ke,deactivated:Ke,errorCaptured:Ke,serverPrefetch:Ke,components:Fr,directives:Fr,watch:b_,provide:mu,inject:P_};function mu(t,e){return e?t?function(){return qe(W(t)?t.call(this,this):t,W(e)?e.call(this,this):e)}:e:t}function P_(t,e){return Fr(xa(t),xa(e))}function xa(t){if(q(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ke(t,e){return t?[...new Set([].concat(t,e))]:e}function Fr(t,e){return t?qe(Object.create(null),t,e):e}function _u(t,e){return t?q(t)&&q(e)?[...new Set([...t,...e])]:qe(Object.create(null),pu(t),pu(e??{})):e}function b_(t,e){if(!t)return e;if(!e)return t;const n=qe(Object.create(null),t);for(const r in e)n[r]=Ke(t[r],e[r]);return n}function jd(){return{app:null,config:{isNativeTag:lm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let C_=0;function D_(t,e){return function(r,s=null){W(r)||(r=qe({},r)),s!=null&&!pe(s)&&(s=null);const i=jd(),o=new WeakSet;let a=!1;const c=i.app={_uid:C_++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:sy,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&W(l.install)?(o.add(l),l.install(c,...u)):W(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const p=ke(r,s);return p.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(p,l):t(p,l,h),a=!0,c._container=l,l.__vue_app__=c,uo(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){const u=zr;zr=c;try{return l()}finally{zr=u}}};return c}}let zr=null;function k_(t,e){if(Be){let n=Be.provides;const r=Be.parent&&Be.parent.provides;r===n&&(n=Be.provides=Object.create(r)),n[t]=e}}function fi(t,e,n=!1){const r=Be||Qe;if(r||zr){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:zr._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&W(e)?e.call(r&&r.proxy):e}}function V_(t,e,n,r=!1){const s={},i={};Ri(i,co,1),t.propsDefaults=Object.create(null),$d(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:$m(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function N_(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=ne(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let p=u[h];if(so(t.emitsOptions,p))continue;const g=e[p];if(c)if(X(i,p))g!==i[p]&&(i[p]=g,l=!0);else{const k=Pt(p);s[k]=Ma(c,a,k,g,t,!1)}else g!==i[p]&&(i[p]=g,l=!0)}}}else{$d(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!X(e,h)&&((u=wr(h))===h||!X(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Ma(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!X(e,h))&&(delete i[h],l=!0)}l&&Ft(t,"set","$attrs")}function $d(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(qr(c))continue;const l=e[c];let u;s&&X(s,u=Pt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:so(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=ne(n),l=a||ce;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Ma(s,c,h,l[h],t,!X(l,h))}}return o}function Ma(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=X(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&W(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=Ts(s);r=l[n]=c.call(null,e),u()}}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===wr(n))&&(r=!0))}return r}function qd(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!W(t)){const u=h=>{c=!0;const[p,g]=qd(h,e,!0);qe(o,p),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return pe(t)&&r.set(t,tr),tr;if(q(i))for(let u=0;u<i.length;u++){const h=Pt(i[u]);yu(h)&&(o[h]=ce)}else if(i)for(const u in i){const h=Pt(u);if(yu(h)){const p=i[u],g=o[h]=q(p)||W(p)?{type:p}:qe({},p);if(g){const k=Iu(Boolean,g.type),b=Iu(String,g.type);g[0]=k>-1,g[1]=b<0||k<b,(k>-1||X(g,"default"))&&a.push(h)}}}const l=[o,a];return pe(t)&&r.set(t,l),l}function yu(t){return t[0]!=="$"&&!qr(t)}function vu(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function Eu(t,e){return vu(t)===vu(e)}function Iu(t,e){return q(e)?e.findIndex(n=>Eu(n,t)):W(e)&&Eu(e,t)?0:-1}const Hd=t=>t[0]==="_"||t==="$stable",Mc=t=>q(t)?t.map(yt):[yt(t)],O_=(t,e,n)=>{if(e._n)return e;const r=Wn((...s)=>Mc(e(...s)),n);return r._c=!1,r},zd=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Hd(s))continue;const i=t[s];if(W(i))e[s]=O_(s,i,r);else if(i!=null){const o=Mc(i);e[s]=()=>o}}},Kd=(t,e)=>{const n=Mc(e);t.slots.default=()=>n},x_=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ne(e),Ri(e,"_",n)):zd(e,t.slots={})}else t.slots={},e&&Kd(t,e);Ri(t.slots,co,1)},M_=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ce;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(qe(s,e),!n&&a===1&&delete s._):(i=!e.$stable,zd(e,s)),o=e}else e&&(Kd(t,e),o={default:1});if(i)for(const a in s)!Hd(a)&&o[a]==null&&delete s[a]};function La(t,e,n,r,s=!1){if(q(t)){t.forEach((p,g)=>La(p,e&&(q(e)?e[g]:e),n,r,s));return}if(di(r)&&!s)return;const i=r.shapeFlag&4?uo(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ce?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(we(l)?(u[l]=null,X(h,l)&&(h[l]=null)):Ye(l)&&(l.value=null)),W(c))rn(c,a,12,[o,u]);else{const p=we(c),g=Ye(c);if(p||g){const k=()=>{if(t.f){const b=p?X(h,c)?h[c]:u[c]:c.value;s?q(b)&&vc(b,i):q(b)?b.includes(i)||b.push(i):p?(u[c]=[i],X(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else p?(u[c]=o,X(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};o?(k.id=-1,Ge(k,n)):k()}}}const Ge=c_;function L_(t){return F_(t)}function F_(t,e){const n=cd();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:p,setScopeId:g=it,insertStaticContent:k}=t,b=(d,f,m,y=null,v=null,w=null,P=void 0,T=null,A=!!f.dynamicChildren)=>{if(d===f)return;d&&!Or(d,f)&&(y=Ks(d),pt(d,v,w,!0),d=null),f.patchFlag===-2&&(A=!1,f.dynamicChildren=null);const{type:I,ref:D,shapeFlag:x}=f;switch(I){case ao:C(d,f,m,y);break;case Vn:F(d,f,m,y);break;case ra:d==null&&Z(f,m,y,P);break;case et:qs(d,f,m,y,v,w,P,T,A);break;default:x&1?_e(d,f,m,y,v,w,P,T,A):x&6?Hs(d,f,m,y,v,w,P,T,A):(x&64||x&128)&&I.process(d,f,m,y,v,w,P,T,A,Hn)}D!=null&&v&&La(D,d&&d.ref,w,f||d,!f)},C=(d,f,m,y)=>{if(d==null)r(f.el=a(f.children),m,y);else{const v=f.el=d.el;f.children!==d.children&&l(v,f.children)}},F=(d,f,m,y)=>{d==null?r(f.el=c(f.children||""),m,y):f.el=d.el},Z=(d,f,m,y)=>{[d.el,d.anchor]=k(d.children,f,m,y,d.el,d.anchor)},U=({el:d,anchor:f},m,y)=>{let v;for(;d&&d!==f;)v=p(d),r(d,m,y),d=v;r(f,m,y)},ee=({el:d,anchor:f})=>{let m;for(;d&&d!==f;)m=p(d),s(d),d=m;s(f)},_e=(d,f,m,y,v,w,P,T,A)=>{f.type==="svg"?P="svg":f.type==="math"&&(P="mathml"),d==null?z(f,m,y,v,w,P,T,A):Vt(d,f,v,w,P,T,A)},z=(d,f,m,y,v,w,P,T)=>{let A,I;const{props:D,shapeFlag:x,transition:N,dirs:B}=d;if(A=d.el=o(d.type,w,D&&D.is,D),x&8?u(A,d.children):x&16&&Xe(d.children,A,null,y,v,na(d,w),P,T),B&&_n(d,null,y,"created"),be(A,d,d.scopeId,P,y),D){for(const se in D)se!=="value"&&!qr(se)&&i(A,se,null,D[se],w,d.children,y,v,Nt);"value"in D&&i(A,"value",null,D.value,w),(I=D.onVnodeBeforeMount)&&mt(I,y,d)}B&&_n(d,null,y,"beforeMount");const G=U_(v,N);G&&N.beforeEnter(A),r(A,f,m),((I=D&&D.onVnodeMounted)||G||B)&&Ge(()=>{I&&mt(I,y,d),G&&N.enter(A),B&&_n(d,null,y,"mounted")},v)},be=(d,f,m,y,v)=>{if(m&&g(d,m),y)for(let w=0;w<y.length;w++)g(d,y[w]);if(v){let w=v.subTree;if(f===w){const P=v.vnode;be(d,P,P.scopeId,P.slotScopeIds,v.parent)}}},Xe=(d,f,m,y,v,w,P,T,A=0)=>{for(let I=A;I<d.length;I++){const D=d[I]=T?Qt(d[I]):yt(d[I]);b(null,D,f,m,y,v,w,P,T)}},Vt=(d,f,m,y,v,w,P)=>{const T=f.el=d.el;let{patchFlag:A,dynamicChildren:I,dirs:D}=f;A|=d.patchFlag&16;const x=d.props||ce,N=f.props||ce;let B;if(m&&yn(m,!1),(B=N.onVnodeBeforeUpdate)&&mt(B,m,f,d),D&&_n(f,d,m,"beforeUpdate"),m&&yn(m,!0),I?nt(d.dynamicChildren,I,T,m,y,na(f,v),w):P||ie(d,f,T,null,m,y,na(f,v),w,!1),A>0){if(A&16)Vr(T,f,x,N,m,y,v);else if(A&2&&x.class!==N.class&&i(T,"class",null,N.class,v),A&4&&i(T,"style",x.style,N.style,v),A&8){const G=f.dynamicProps;for(let se=0;se<G.length;se++){const ue=G[se],Ae=x[ue],at=N[ue];(at!==Ae||ue==="value")&&i(T,ue,Ae,at,v,d.children,m,y,Nt)}}A&1&&d.children!==f.children&&u(T,f.children)}else!P&&I==null&&Vr(T,f,x,N,m,y,v);((B=N.onVnodeUpdated)||D)&&Ge(()=>{B&&mt(B,m,f,d),D&&_n(f,d,m,"updated")},y)},nt=(d,f,m,y,v,w,P)=>{for(let T=0;T<f.length;T++){const A=d[T],I=f[T],D=A.el&&(A.type===et||!Or(A,I)||A.shapeFlag&70)?h(A.el):m;b(A,I,D,null,y,v,w,P,!0)}},Vr=(d,f,m,y,v,w,P)=>{if(m!==y){if(m!==ce)for(const T in m)!qr(T)&&!(T in y)&&i(d,T,m[T],null,P,f.children,v,w,Nt);for(const T in y){if(qr(T))continue;const A=y[T],I=m[T];A!==I&&T!=="value"&&i(d,T,I,A,P,f.children,v,w,Nt)}"value"in y&&i(d,"value",m.value,y.value,P)}},qs=(d,f,m,y,v,w,P,T,A)=>{const I=f.el=d?d.el:a(""),D=f.anchor=d?d.anchor:a("");let{patchFlag:x,dynamicChildren:N,slotScopeIds:B}=f;B&&(T=T?T.concat(B):B),d==null?(r(I,m,y),r(D,m,y),Xe(f.children||[],m,D,v,w,P,T,A)):x>0&&x&64&&N&&d.dynamicChildren?(nt(d.dynamicChildren,N,m,v,w,P,T),(f.key!=null||v&&f===v.subTree)&&Wd(d,f,!0)):ie(d,f,m,D,v,w,P,T,A)},Hs=(d,f,m,y,v,w,P,T,A)=>{f.slotScopeIds=T,d==null?f.shapeFlag&512?v.ctx.activate(f,m,y,P,A):zo(f,m,y,v,w,P,A):Jl(d,f,A)},zo=(d,f,m,y,v,w,P)=>{const T=d.component=J_(d,y,v);if(Md(d)&&(T.ctx.renderer=Hn),Y_(T),T.asyncDep){if(v&&v.registerDep(T,ze),!d.el){const A=T.subTree=ke(Vn);F(null,A,f,m)}}else ze(T,d,f,m,v,w,P)},Jl=(d,f,m)=>{const y=f.component=d.component;if(r_(d,f,m))if(y.asyncDep&&!y.asyncResolved){fe(y,f,m);return}else y.next=f,Ym(y.update),y.effect.dirty=!0,y.update();else f.el=d.el,y.vnode=f},ze=(d,f,m,y,v,w,P)=>{const T=()=>{if(d.isMounted){let{next:D,bu:x,u:N,parent:B,vnode:G}=d;{const zn=Gd(d);if(zn){D&&(D.el=G.el,fe(d,D,P)),zn.asyncDep.then(()=>{d.isUnmounted||T()});return}}let se=D,ue;yn(d,!1),D?(D.el=G.el,fe(d,D,P)):D=G,x&&li(x),(ue=D.props&&D.props.onVnodeBeforeUpdate)&&mt(ue,B,D,G),yn(d,!0);const Ae=Xo(d),at=d.subTree;d.subTree=Ae,b(at,Ae,h(at.el),Ks(at),d,v,w),D.el=Ae.el,se===null&&s_(d,Ae.el),N&&Ge(N,v),(ue=D.props&&D.props.onVnodeUpdated)&&Ge(()=>mt(ue,B,D,G),v)}else{let D;const{el:x,props:N}=f,{bm:B,m:G,parent:se}=d,ue=di(f);if(yn(d,!1),B&&li(B),!ue&&(D=N&&N.onVnodeBeforeMount)&&mt(D,se,f),yn(d,!0),x&&Go){const Ae=()=>{d.subTree=Xo(d),Go(x,d.subTree,d,v,null)};ue?f.type.__asyncLoader().then(()=>!d.isUnmounted&&Ae()):Ae()}else{const Ae=d.subTree=Xo(d);b(null,Ae,m,y,d,v,w),f.el=Ae.el}if(G&&Ge(G,v),!ue&&(D=N&&N.onVnodeMounted)){const Ae=f;Ge(()=>mt(D,se,Ae),v)}(f.shapeFlag&256||se&&di(se.vnode)&&se.vnode.shapeFlag&256)&&d.a&&Ge(d.a,v),d.isMounted=!0,f=m=y=null}},A=d.effect=new wc(T,it,()=>Vc(I),d.scope),I=d.update=()=>{A.dirty&&A.run()};I.id=d.uid,yn(d,!0),I()},fe=(d,f,m)=>{f.component=d;const y=d.vnode.props;d.vnode=f,d.next=null,N_(d,f.props,y,m),M_(d,f.children,m),Un(),uu(d),Bn()},ie=(d,f,m,y,v,w,P,T,A=!1)=>{const I=d&&d.children,D=d?d.shapeFlag:0,x=f.children,{patchFlag:N,shapeFlag:B}=f;if(N>0){if(N&128){zs(I,x,m,y,v,w,P,T,A);return}else if(N&256){gn(I,x,m,y,v,w,P,T,A);return}}B&8?(D&16&&Nt(I,v,w),x!==I&&u(m,x)):D&16?B&16?zs(I,x,m,y,v,w,P,T,A):Nt(I,v,w,!0):(D&8&&u(m,""),B&16&&Xe(x,m,y,v,w,P,T,A))},gn=(d,f,m,y,v,w,P,T,A)=>{d=d||tr,f=f||tr;const I=d.length,D=f.length,x=Math.min(I,D);let N;for(N=0;N<x;N++){const B=f[N]=A?Qt(f[N]):yt(f[N]);b(d[N],B,m,null,v,w,P,T,A)}I>D?Nt(d,v,w,!0,!1,x):Xe(f,m,y,v,w,P,T,A,x)},zs=(d,f,m,y,v,w,P,T,A)=>{let I=0;const D=f.length;let x=d.length-1,N=D-1;for(;I<=x&&I<=N;){const B=d[I],G=f[I]=A?Qt(f[I]):yt(f[I]);if(Or(B,G))b(B,G,m,null,v,w,P,T,A);else break;I++}for(;I<=x&&I<=N;){const B=d[x],G=f[N]=A?Qt(f[N]):yt(f[N]);if(Or(B,G))b(B,G,m,null,v,w,P,T,A);else break;x--,N--}if(I>x){if(I<=N){const B=N+1,G=B<D?f[B].el:y;for(;I<=N;)b(null,f[I]=A?Qt(f[I]):yt(f[I]),m,G,v,w,P,T,A),I++}}else if(I>N)for(;I<=x;)pt(d[I],v,w,!0),I++;else{const B=I,G=I,se=new Map;for(I=G;I<=N;I++){const Ze=f[I]=A?Qt(f[I]):yt(f[I]);Ze.key!=null&&se.set(Ze.key,I)}let ue,Ae=0;const at=N-G+1;let zn=!1,Zl=0;const Nr=new Array(at);for(I=0;I<at;I++)Nr[I]=0;for(I=B;I<=x;I++){const Ze=d[I];if(Ae>=at){pt(Ze,v,w,!0);continue}let gt;if(Ze.key!=null)gt=se.get(Ze.key);else for(ue=G;ue<=N;ue++)if(Nr[ue-G]===0&&Or(Ze,f[ue])){gt=ue;break}gt===void 0?pt(Ze,v,w,!0):(Nr[gt-G]=I+1,gt>=Zl?Zl=gt:zn=!0,b(Ze,f[gt],m,null,v,w,P,T,A),Ae++)}const eu=zn?B_(Nr):tr;for(ue=eu.length-1,I=at-1;I>=0;I--){const Ze=G+I,gt=f[Ze],tu=Ze+1<D?f[Ze+1].el:y;Nr[I]===0?b(null,gt,m,tu,v,w,P,T,A):zn&&(ue<0||I!==eu[ue]?mn(gt,m,tu,2):ue--)}}},mn=(d,f,m,y,v=null)=>{const{el:w,type:P,transition:T,children:A,shapeFlag:I}=d;if(I&6){mn(d.component.subTree,f,m,y);return}if(I&128){d.suspense.move(f,m,y);return}if(I&64){P.move(d,f,m,Hn);return}if(P===et){r(w,f,m);for(let x=0;x<A.length;x++)mn(A[x],f,m,y);r(d.anchor,f,m);return}if(P===ra){U(d,f,m);return}if(y!==2&&I&1&&T)if(y===0)T.beforeEnter(w),r(w,f,m),Ge(()=>T.enter(w),v);else{const{leave:x,delayLeave:N,afterLeave:B}=T,G=()=>r(w,f,m),se=()=>{x(w,()=>{G(),B&&B()})};N?N(w,G,se):se()}else r(w,f,m)},pt=(d,f,m,y=!1,v=!1)=>{const{type:w,props:P,ref:T,children:A,dynamicChildren:I,shapeFlag:D,patchFlag:x,dirs:N}=d;if(T!=null&&La(T,null,m,d,!0),D&256){f.ctx.deactivate(d);return}const B=D&1&&N,G=!di(d);let se;if(G&&(se=P&&P.onVnodeBeforeUnmount)&&mt(se,f,d),D&6)cm(d.component,m,y);else{if(D&128){d.suspense.unmount(m,y);return}B&&_n(d,null,f,"beforeUnmount"),D&64?d.type.remove(d,f,m,v,Hn,y):I&&(w!==et||x>0&&x&64)?Nt(I,f,m,!1,!0):(w===et&&x&384||!v&&D&16)&&Nt(A,f,m),y&&Yl(d)}(G&&(se=P&&P.onVnodeUnmounted)||B)&&Ge(()=>{se&&mt(se,f,d),B&&_n(d,null,f,"unmounted")},m)},Yl=d=>{const{type:f,el:m,anchor:y,transition:v}=d;if(f===et){am(m,y);return}if(f===ra){ee(d);return}const w=()=>{s(m),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(d.shapeFlag&1&&v&&!v.persisted){const{leave:P,delayLeave:T}=v,A=()=>P(m,w);T?T(d.el,w,A):A()}else w()},am=(d,f)=>{let m;for(;d!==f;)m=p(d),s(d),d=m;s(f)},cm=(d,f,m)=>{const{bum:y,scope:v,update:w,subTree:P,um:T}=d;y&&li(y),v.stop(),w&&(w.active=!1,pt(P,d,f,m)),T&&Ge(T,f),Ge(()=>{d.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},Nt=(d,f,m,y=!1,v=!1,w=0)=>{for(let P=w;P<d.length;P++)pt(d[P],f,m,y,v)},Ks=d=>d.shapeFlag&6?Ks(d.component.subTree):d.shapeFlag&128?d.suspense.next():p(d.anchor||d.el);let Ko=!1;const Xl=(d,f,m)=>{d==null?f._vnode&&pt(f._vnode,null,null,!0):b(f._vnode||null,d,f,null,null,null,m),Ko||(Ko=!0,uu(),Dd(),Ko=!1),f._vnode=d},Hn={p:b,um:pt,m:mn,r:Yl,mt:zo,mc:Xe,pc:ie,pbc:nt,n:Ks,o:t};let Wo,Go;return e&&([Wo,Go]=e(Hn)),{render:Xl,hydrate:Wo,createApp:D_(Xl,Wo)}}function na({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function yn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function U_(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Wd(t,e,n=!1){const r=t.children,s=e.children;if(q(r)&&q(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Qt(s[i]),a.el=o.el),n||Wd(o,a)),a.type===ao&&(a.el=o.el)}}function B_(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Gd(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Gd(e)}const j_=t=>t.__isTeleport,et=Symbol.for("v-fgt"),ao=Symbol.for("v-txt"),Vn=Symbol.for("v-cmt"),ra=Symbol.for("v-stc"),Kr=[];let lt=null;function ae(t=!1){Kr.push(lt=t?null:[])}function $_(){Kr.pop(),lt=Kr[Kr.length-1]||null}let rs=1;function Tu(t){rs+=t}function Qd(t){return t.dynamicChildren=rs>0?lt||tr:null,$_(),rs>0&&lt&&lt.push(t),t}function he(t,e,n,r,s,i){return Qd(K(t,e,n,r,s,i,!0))}function q_(t,e,n,r,s){return Qd(ke(t,e,n,r,s,!0))}function H_(t){return t?t.__v_isVNode===!0:!1}function Or(t,e){return t.type===e.type&&t.key===e.key}const co="__vInternal",Jd=({key:t})=>t??null,pi=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?we(t)||Ye(t)||W(t)?{i:Qe,r:t,k:e,f:!!n}:t:null);function K(t,e=null,n=null,r=0,s=null,i=t===et?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Jd(e),ref:e&&pi(e),scopeId:io,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Qe};return a?(Lc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=we(n)?8:16),rs>0&&!o&&lt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&lt.push(c),c}const ke=z_;function z_(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===i_)&&(t=Vn),H_(t)){const a=hr(t,e,!0);return n&&Lc(a,n),rs>0&&!i&&lt&&(a.shapeFlag&6?lt[lt.indexOf(t)]=a:lt.push(a)),a.patchFlag|=-2,a}if(ny(t)&&(t=t.__vccOpts),e){e=K_(e);let{class:a,style:c}=e;a&&!we(a)&&(e.class=Tc(a)),pe(c)&&(wd(c)&&!q(c)&&(c=qe({},c)),e.style=Ic(c))}const o=we(t)?1:a_(t)?128:j_(t)?64:pe(t)?4:W(t)?2:0;return K(t,e,n,r,s,o,i,!0)}function K_(t){return t?wd(t)||co in t?qe({},t):t:null}function hr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?W_(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Jd(a),ref:e&&e.ref?n&&s?q(s)?s.concat(pi(e)):[s,pi(e)]:pi(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==et?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&hr(t.ssContent),ssFallback:t.ssFallback&&hr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function en(t=" ",e=0){return ke(ao,null,t,e)}function _t(t="",e=!1){return e?(ae(),q_(Vn,null,t)):ke(Vn,null,t)}function yt(t){return t==null||typeof t=="boolean"?ke(Vn):q(t)?ke(et,null,t.slice()):typeof t=="object"?Qt(t):ke(ao,null,String(t))}function Qt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:hr(t)}function Lc(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(q(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Lc(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(co in e)?e._ctx=Qe:s===3&&Qe&&(Qe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else W(e)?(e={default:e,_ctx:Qe},n=32):(e=String(e),r&64?(n=16,e=[en(e)]):n=8);t.children=e,t.shapeFlag|=n}function W_(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Tc([e.class,r.class]));else if(s==="style")e.style=Ic([e.style,r.style]);else if(Xi(s)){const i=e[s],o=r[s];o&&i!==o&&!(q(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function mt(t,e,n,r=null){ht(t,e,7,[n,r])}const G_=jd();let Q_=0;function J_(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||G_,i={uid:Q_++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Em(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:qd(r,s),emitsOptions:Vd(r,s),emit:null,emitted:null,propsDefaults:ce,inheritAttrs:r.inheritAttrs,ctx:ce,data:ce,props:ce,attrs:ce,slots:ce,refs:ce,setupState:ce,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=e_.bind(null,i),t.ce&&t.ce(i),i}let Be=null,Ci,Fa;{const t=cd(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Ci=e("__VUE_INSTANCE_SETTERS__",n=>Be=n),Fa=e("__VUE_SSR_SETTERS__",n=>lo=n)}const Ts=t=>{const e=Be;return Ci(t),t.scope.on(),()=>{t.scope.off(),Ci(e)}},wu=()=>{Be&&Be.scope.off(),Ci(null)};function Yd(t){return t.vnode.shapeFlag&4}let lo=!1;function Y_(t,e=!1){e&&Fa(e);const{props:n,children:r}=t.vnode,s=Yd(t);V_(t,n,s,e),x_(t,r);const i=s?X_(t,e):void 0;return e&&Fa(!1),i}function X_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ad(new Proxy(t.ctx,w_));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?ey(t):null,i=Ts(t);Un();const o=rn(r,t,0,[t.props,s]);if(Bn(),i(),id(o)){if(o.then(wu,wu),e)return o.then(a=>{Au(t,a,e)}).catch(a=>{ro(a,t,0)});t.asyncDep=o}else Au(t,o,e)}else Xd(t,e)}function Au(t,e,n){W(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:pe(e)&&(t.setupState=Pd(e)),Xd(t,n)}let Ru;function Xd(t,e,n){const r=t.type;if(!t.render){if(!e&&Ru&&!r.render){const s=r.template||xc(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=qe(qe({isCustomElement:i,delimiters:a},o),c);r.render=Ru(s,l)}}t.render=r.render||it}{const s=Ts(t);Un();try{A_(t)}finally{Bn(),s()}}}function Z_(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Je(t,"get","$attrs"),e[n]}}))}function ey(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Z_(t)},slots:t.slots,emit:t.emit,expose:e}}function uo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Pd(Ad(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Hr)return Hr[n](t)},has(e,n){return n in e||n in Hr}}))}function ty(t,e=!0){return W(t)?t.displayName||t.name:t.name||e&&t.__name}function ny(t){return W(t)&&"__vccOpts"in t}const ry=(t,e)=>qm(t,e,lo),sy="3.4.21";/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const iy="http://www.w3.org/2000/svg",oy="http://www.w3.org/1998/Math/MathML",Jt=typeof document<"u"?document:null,Su=Jt&&Jt.createElement("template"),ay={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Jt.createElementNS(iy,t):e==="mathml"?Jt.createElementNS(oy,t):Jt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Jt.createTextNode(t),createComment:t=>Jt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Jt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Su.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const a=Su.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},cy=Symbol("_vtc");function ly(t,e,n){const r=t[cy];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Pu=Symbol("_vod"),uy=Symbol("_vsh"),hy=Symbol(""),dy=/(^|;)\s*display\s*:/;function fy(t,e,n){const r=t.style,s=we(n);let i=!1;if(n&&!s){if(e)if(we(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&gi(r,a,"")}else for(const o in e)n[o]==null&&gi(r,o,"");for(const o in n)o==="display"&&(i=!0),gi(r,o,n[o])}else if(s){if(e!==n){const o=r[hy];o&&(n+=";"+o),r.cssText=n,i=dy.test(n)}}else e&&t.removeAttribute("style");Pu in t&&(t[Pu]=i?r.display:"",t[uy]&&(r.display="none"))}const bu=/\s*!important$/;function gi(t,e,n){if(q(n))n.forEach(r=>gi(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=py(t,e);bu.test(n)?t.setProperty(wr(r),n.replace(bu,""),"important"):t[r]=n}}const Cu=["Webkit","Moz","ms"],sa={};function py(t,e){const n=sa[e];if(n)return n;let r=Pt(e);if(r!=="filter"&&r in t)return sa[e]=r;r=to(r);for(let s=0;s<Cu.length;s++){const i=Cu[s]+r;if(i in t)return sa[e]=i}return e}const Du="http://www.w3.org/1999/xlink";function gy(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Du,e.slice(6,e.length)):t.setAttributeNS(Du,e,n);else{const i=vm(e);n==null||i&&!ld(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function my(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const l=a==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";(l!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=ld(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Gn(t,e,n,r){t.addEventListener(e,n,r)}function _y(t,e,n,r){t.removeEventListener(e,n,r)}const ku=Symbol("_vei");function yy(t,e,n,r,s=null){const i=t[ku]||(t[ku]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=vy(e);if(r){const l=i[e]=Ty(r,s);Gn(t,a,l,c)}else o&&(_y(t,a,o,c),i[e]=void 0)}}const Vu=/(?:Once|Passive|Capture)$/;function vy(t){let e;if(Vu.test(t)){e={};let r;for(;r=t.match(Vu);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):wr(t.slice(2)),e]}let ia=0;const Ey=Promise.resolve(),Iy=()=>ia||(Ey.then(()=>ia=0),ia=Date.now());function Ty(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;ht(wy(r,n.value),e,5,[r])};return n.value=t,n.attached=Iy(),n}function wy(t,e){if(q(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Nu=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Ay=(t,e,n,r,s,i,o,a,c)=>{const l=s==="svg";e==="class"?ly(t,r,l):e==="style"?fy(t,n,r):Xi(e)?yc(e)||yy(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ry(t,e,r,l))?my(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),gy(t,e,r,l))};function Ry(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Nu(e)&&W(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Nu(e)&&we(n)?!1:e in t}const Ou=t=>{const e=t.props["onUpdate:modelValue"]||!1;return q(e)?n=>li(e,n):e};function Sy(t){t.target.composing=!0}function xu(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const oa=Symbol("_assign"),mi={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[oa]=Ou(s);const i=r||s.props&&s.props.type==="number";Gn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Pa(a)),t[oa](a)}),n&&Gn(t,"change",()=>{t.value=t.value.trim()}),e||(Gn(t,"compositionstart",Sy),Gn(t,"compositionend",xu),Gn(t,"change",xu))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[oa]=Ou(i),t.composing)return;const o=s||t.type==="number"?Pa(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===a)||(t.value=a))}},Py=["ctrl","shift","alt","meta"],by={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Py.some(n=>t[`${n}Key`]&&!e.includes(n))},Cy=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=by[e[o]];if(a&&a(s,e))return}return t(s,...i)})},Dy=qe({patchProp:Ay},ay);let Mu;function ky(){return Mu||(Mu=L_(Dy))}const Vy=(...t)=>{const e=ky().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Oy(r);if(!s)return;const i=e._component;!W(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,Ny(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Ny(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Oy(t){return we(t)?document.querySelector(t):t}var Lu={};/**
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
 */const Zd=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},xy=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ef={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(p=64)),r.push(n[u],n[h],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Zd(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):xy(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new My;const p=i<<2|a>>4;if(r.push(p),l!==64){const g=a<<4&240|l>>2;if(r.push(g),h!==64){const k=l<<6&192|h;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class My extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ly=function(t){const e=Zd(t);return ef.encodeByteArray(e,!0)},Di=function(t){return Ly(t).replace(/\./g,"")},tf=function(t){try{return ef.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Fy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Uy=()=>Fy().__FIREBASE_DEFAULTS__,By=()=>{if(typeof process>"u"||typeof Lu>"u")return;const t=Lu.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},jy=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&tf(t[1]);return e&&JSON.parse(e)},ho=()=>{try{return Uy()||By()||jy()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},nf=t=>{var e,n;return(n=(e=ho())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},$y=t=>{const e=nf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},rf=()=>{var t;return(t=ho())===null||t===void 0?void 0:t.config},sf=t=>{var e;return(e=ho())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class qy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Hy(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Di(JSON.stringify(n)),Di(JSON.stringify(o)),""].join(".")}/**
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
 */function Ee(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ee())}function Ky(){var t;const e=(t=ho())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Wy(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Gy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Qy(){const t=Ee();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Jy(){return!Ky()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function of(){try{return typeof indexedDB=="object"}catch{return!1}}function Yy(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Xy="FirebaseError";class zt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Xy,Object.setPrototypeOf(this,zt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ws.prototype.create)}}class ws{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Zy(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new zt(s,a,r)}}function Zy(t,e){return t.replace(ev,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const ev=/\{\$([^}]+)}/g;function tv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ki(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Fu(i)&&Fu(o)){if(!ki(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Fu(t){return t!==null&&typeof t=="object"}/**
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
 */function As(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function nv(t,e){const n=new rv(t,e);return n.subscribe.bind(n)}class rv{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");sv(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=aa),s.error===void 0&&(s.error=aa),s.complete===void 0&&(s.complete=aa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sv(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function aa(){}/**
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
 */function ot(t){return t&&t._delegate?t._delegate:t}class Nn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const vn="[DEFAULT]";/**
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
 */class iv{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new qy;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(av(e))try{this.getOrInitializeService({instanceIdentifier:vn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=vn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vn){return this.instances.has(e)}getOptions(e=vn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ov(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=vn){return this.component?this.component.multipleInstances?e:vn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ov(t){return t===vn?void 0:t}function av(t){return t.instantiationMode==="EAGER"}/**
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
 */class cv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new iv(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var J;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(J||(J={}));const lv={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},uv=J.INFO,hv={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},dv=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=hv[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fc{constructor(e){this.name=e,this._logLevel=uv,this._logHandler=dv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}const fv=(t,e)=>e.some(n=>t instanceof n);let Uu,Bu;function pv(){return Uu||(Uu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gv(){return Bu||(Bu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const af=new WeakMap,Ua=new WeakMap,cf=new WeakMap,ca=new WeakMap,Uc=new WeakMap;function mv(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(sn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&af.set(n,t)}).catch(()=>{}),Uc.set(e,t),e}function _v(t){if(Ua.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ua.set(t,e)}let Ba={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ua.get(t);if(e==="objectStoreNames")return t.objectStoreNames||cf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return sn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function yv(t){Ba=t(Ba)}function vv(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(la(this),e,...n);return cf.set(r,e.sort?e.sort():[e]),sn(r)}:gv().includes(t)?function(...e){return t.apply(la(this),e),sn(af.get(this))}:function(...e){return sn(t.apply(la(this),e))}}function Ev(t){return typeof t=="function"?vv(t):(t instanceof IDBTransaction&&_v(t),fv(t,pv())?new Proxy(t,Ba):t)}function sn(t){if(t instanceof IDBRequest)return mv(t);if(ca.has(t))return ca.get(t);const e=Ev(t);return e!==t&&(ca.set(t,e),Uc.set(e,t)),e}const la=t=>Uc.get(t);function Iv(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=sn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(sn(o.result),c.oldVersion,c.newVersion,sn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Tv=["get","getKey","getAll","getAllKeys","count"],wv=["put","add","delete","clear"],ua=new Map;function ju(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ua.get(e))return ua.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=wv.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Tv.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return ua.set(e,i),i}yv(t=>({...t,get:(e,n,r)=>ju(e,n)||t.get(e,n,r),has:(e,n)=>!!ju(e,n)||t.has(e,n)}));/**
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
 */class Av{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Rv(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Rv(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ja="@firebase/app",$u="0.9.29";/**
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
 */const On=new Fc("@firebase/app"),Sv="@firebase/app-compat",Pv="@firebase/analytics-compat",bv="@firebase/analytics",Cv="@firebase/app-check-compat",Dv="@firebase/app-check",kv="@firebase/auth",Vv="@firebase/auth-compat",Nv="@firebase/database",Ov="@firebase/database-compat",xv="@firebase/functions",Mv="@firebase/functions-compat",Lv="@firebase/installations",Fv="@firebase/installations-compat",Uv="@firebase/messaging",Bv="@firebase/messaging-compat",jv="@firebase/performance",$v="@firebase/performance-compat",qv="@firebase/remote-config",Hv="@firebase/remote-config-compat",zv="@firebase/storage",Kv="@firebase/storage-compat",Wv="@firebase/firestore",Gv="@firebase/firestore-compat",Qv="firebase",Jv="10.9.0";/**
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
 */const $a="[DEFAULT]",Yv={[ja]:"fire-core",[Sv]:"fire-core-compat",[bv]:"fire-analytics",[Pv]:"fire-analytics-compat",[Dv]:"fire-app-check",[Cv]:"fire-app-check-compat",[kv]:"fire-auth",[Vv]:"fire-auth-compat",[Nv]:"fire-rtdb",[Ov]:"fire-rtdb-compat",[xv]:"fire-fn",[Mv]:"fire-fn-compat",[Lv]:"fire-iid",[Fv]:"fire-iid-compat",[Uv]:"fire-fcm",[Bv]:"fire-fcm-compat",[jv]:"fire-perf",[$v]:"fire-perf-compat",[qv]:"fire-rc",[Hv]:"fire-rc-compat",[zv]:"fire-gcs",[Kv]:"fire-gcs-compat",[Wv]:"fire-fst",[Gv]:"fire-fst-compat","fire-js":"fire-js",[Qv]:"fire-js-all"};/**
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
 */const Vi=new Map,qa=new Map;function Xv(t,e){try{t.container.addComponent(e)}catch(n){On.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function dr(t){const e=t.name;if(qa.has(e))return On.debug(`There were multiple attempts to register component ${e}.`),!1;qa.set(e,t);for(const n of Vi.values())Xv(n,t);return!0}function Bc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Zv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},on=new ws("app","Firebase",Zv);/**
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
 */class eE{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Nn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw on.create("app-deleted",{appName:this._name})}}/**
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
 */const Ar=Jv;function lf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:$a,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw on.create("bad-app-name",{appName:String(s)});if(n||(n=rf()),!n)throw on.create("no-options");const i=Vi.get(s);if(i){if(ki(n,i.options)&&ki(r,i.config))return i;throw on.create("duplicate-app",{appName:s})}const o=new cv(s);for(const c of qa.values())o.addComponent(c);const a=new eE(n,r,o);return Vi.set(s,a),a}function uf(t=$a){const e=Vi.get(t);if(!e&&t===$a&&rf())return lf();if(!e)throw on.create("no-app",{appName:t});return e}function an(t,e,n){var r;let s=(r=Yv[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),On.warn(a.join(" "));return}dr(new Nn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const tE="firebase-heartbeat-database",nE=1,ss="firebase-heartbeat-store";let ha=null;function hf(){return ha||(ha=Iv(tE,nE,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ss)}catch(n){console.warn(n)}}}}).catch(t=>{throw on.create("idb-open",{originalErrorMessage:t.message})})),ha}async function rE(t){try{const n=(await hf()).transaction(ss),r=await n.objectStore(ss).get(df(t));return await n.done,r}catch(e){if(e instanceof zt)On.warn(e.message);else{const n=on.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});On.warn(n.message)}}}async function qu(t,e){try{const r=(await hf()).transaction(ss,"readwrite");await r.objectStore(ss).put(e,df(t)),await r.done}catch(n){if(n instanceof zt)On.warn(n.message);else{const r=on.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});On.warn(r.message)}}}function df(t){return`${t.name}!${t.options.appId}`}/**
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
 */const sE=1024,iE=30*24*60*60*1e3;class oE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new cE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Hu();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=iE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Hu(),{heartbeatsToSend:r,unsentEntries:s}=aE(this._heartbeatsCache.heartbeats),i=Di(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Hu(){return new Date().toISOString().substring(0,10)}function aE(t,e=sE){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),zu(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),zu(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class cE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return of()?Yy().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await rE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return qu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return qu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function zu(t){return Di(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function lE(t){dr(new Nn("platform-logger",e=>new Av(e),"PRIVATE")),dr(new Nn("heartbeat",e=>new oE(e),"PRIVATE")),an(ja,$u,t),an(ja,$u,"esm2017"),an("fire-js","")}lE("");var uE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},S,jc=jc||{},L=uE||self;function fo(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Rs(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function hE(t){return Object.prototype.hasOwnProperty.call(t,da)&&t[da]||(t[da]=++dE)}var da="closure_uid_"+(1e9*Math.random()>>>0),dE=0;function fE(t,e,n){return t.call.apply(t.bind,arguments)}function pE(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function je(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?je=fE:je=pE,je.apply(null,arguments)}function Zs(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Pe(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function fn(){this.s=this.s,this.o=this.o}var gE=0;fn.prototype.s=!1;fn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),gE!=0)&&hE(this)};fn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ff=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function $c(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Ku(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(fo(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function $e(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}$e.prototype.h=function(){this.defaultPrevented=!0};var mE=function(){if(!L.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};L.addEventListener("test",n,e),L.removeEventListener("test",n,e)}catch{}return t}();function is(t){return/^[\s\xa0]*$/.test(t)}function po(){var t=L.navigator;return t&&(t=t.userAgent)?t:""}function Et(t){return po().indexOf(t)!=-1}function qc(t){return qc[" "](t),t}qc[" "]=function(){};function _E(t,e){var n=lI;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var yE=Et("Opera"),fr=Et("Trident")||Et("MSIE"),pf=Et("Edge"),Ha=pf||fr,gf=Et("Gecko")&&!(po().toLowerCase().indexOf("webkit")!=-1&&!Et("Edge"))&&!(Et("Trident")||Et("MSIE"))&&!Et("Edge"),vE=po().toLowerCase().indexOf("webkit")!=-1&&!Et("Edge");function mf(){var t=L.document;return t?t.documentMode:void 0}var za;e:{var fa="",pa=function(){var t=po();if(gf)return/rv:([^\);]+)(\)|;)/.exec(t);if(pf)return/Edge\/([\d\.]+)/.exec(t);if(fr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(vE)return/WebKit\/(\S+)/.exec(t);if(yE)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(pa&&(fa=pa?pa[1]:""),fr){var ga=mf();if(ga!=null&&ga>parseFloat(fa)){za=String(ga);break e}}za=fa}var Ka;if(L.document&&fr){var Wu=mf();Ka=Wu||parseInt(za,10)||void 0}else Ka=void 0;var EE=Ka;function os(t,e){if($e.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(gf){e:{try{qc(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:IE[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&os.$.h.call(this)}}Pe(os,$e);var IE={2:"touch",3:"pen",4:"mouse"};os.prototype.h=function(){os.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ss="closure_listenable_"+(1e6*Math.random()|0),TE=0;function wE(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++TE,this.fa=this.ia=!1}function go(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Hc(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function AE(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function _f(t){const e={};for(const n in t)e[n]=t[n];return e}const Gu="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function yf(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Gu.length;i++)n=Gu[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function mo(t){this.src=t,this.g={},this.h=0}mo.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Ga(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new wE(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function Wa(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=ff(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(go(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ga(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var zc="closure_lm_"+(1e6*Math.random()|0),ma={};function vf(t,e,n,r,s){if(r&&r.once)return If(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)vf(t,e[i],n,r,s);return null}return n=Gc(n),t&&t[Ss]?t.O(e,n,Rs(r)?!!r.capture:!!r,s):Ef(t,e,n,!1,r,s)}function Ef(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Rs(s)?!!s.capture:!!s,a=Wc(t);if(a||(t[zc]=a=new mo(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=RE(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)mE||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(wf(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function RE(){function t(n){return e.call(t.src,t.listener,n)}const e=SE;return t}function If(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)If(t,e[i],n,r,s);return null}return n=Gc(n),t&&t[Ss]?t.P(e,n,Rs(r)?!!r.capture:!!r,s):Ef(t,e,n,!0,r,s)}function Tf(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Tf(t,e[i],n,r,s);else r=Rs(r)?!!r.capture:!!r,n=Gc(n),t&&t[Ss]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Ga(i,n,r,s),-1<n&&(go(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Wc(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ga(e,n,r,s)),(n=-1<t?e[t]:null)&&Kc(n))}function Kc(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Ss])Wa(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(wf(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Wc(e))?(Wa(n,t),n.h==0&&(n.src=null,e[zc]=null)):go(t)}}}function wf(t){return t in ma?ma[t]:ma[t]="on"+t}function SE(t,e){if(t.fa)t=!0;else{e=new os(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Kc(t),t=n.call(r,e)}return t}function Wc(t){return t=t[zc],t instanceof mo?t:null}var _a="__closure_events_fn_"+(1e9*Math.random()>>>0);function Gc(t){return typeof t=="function"?t:(t[_a]||(t[_a]=function(e){return t.handleEvent(e)}),t[_a])}function Se(){fn.call(this),this.i=new mo(this),this.S=this,this.J=null}Pe(Se,fn);Se.prototype[Ss]=!0;Se.prototype.removeEventListener=function(t,e,n,r){Tf(this,t,e,n,r)};function Ne(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new $e(e,t);else if(e instanceof $e)e.target=e.target||t;else{var s=e;e=new $e(r,t),yf(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=ei(o,r,!0,e)&&s}if(o=e.g=t,s=ei(o,r,!0,e)&&s,s=ei(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=ei(o,r,!1,e)&&s}Se.prototype.N=function(){if(Se.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)go(n[r]);delete t.g[e],t.h--}}this.J=null};Se.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Se.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function ei(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Wa(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Qc=L.JSON.stringify;class PE{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function bE(){var t=Jc;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class CE{constructor(){this.h=this.g=null}add(e,n){const r=Af.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Af=new PE(()=>new DE,t=>t.reset());class DE{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function kE(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function VE(t){L.setTimeout(()=>{throw t},0)}let as,cs=!1,Jc=new CE,Rf=()=>{const t=L.Promise.resolve(void 0);as=()=>{t.then(NE)}};var NE=()=>{for(var t;t=bE();){try{t.h.call(t.g)}catch(n){VE(n)}var e=Af;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}cs=!1};function _o(t,e){Se.call(this),this.h=t||1,this.g=e||L,this.j=je(this.qb,this),this.l=Date.now()}Pe(_o,Se);S=_o.prototype;S.ga=!1;S.T=null;S.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ne(this,"tick"),this.ga&&(Yc(this),this.start()))}};S.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Yc(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}S.N=function(){_o.$.N.call(this),Yc(this),delete this.g};function Xc(t,e,n){if(typeof t=="function")n&&(t=je(t,n));else if(t&&typeof t.handleEvent=="function")t=je(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:L.setTimeout(t,e||0)}function Sf(t){t.g=Xc(()=>{t.g=null,t.i&&(t.i=!1,Sf(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class OE extends fn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Sf(this)}N(){super.N(),this.g&&(L.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ls(t){fn.call(this),this.h=t,this.g={}}Pe(ls,fn);var Qu=[];function Pf(t,e,n,r){Array.isArray(n)||(n&&(Qu[0]=n.toString()),n=Qu);for(var s=0;s<n.length;s++){var i=vf(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function bf(t){Hc(t.g,function(e,n){this.g.hasOwnProperty(n)&&Kc(e)},t),t.g={}}ls.prototype.N=function(){ls.$.N.call(this),bf(this)};ls.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function yo(){this.g=!0}yo.prototype.Ea=function(){this.g=!1};function xE(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function ME(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function er(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+FE(t,n)+(r?" "+r:"")})}function LE(t,e){t.info(function(){return"TIMEOUT: "+e})}yo.prototype.info=function(){};function FE(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Qc(n)}catch{return e}}var jn={},Ju=null;function vo(){return Ju=Ju||new Se}jn.Ta="serverreachability";function Cf(t){$e.call(this,jn.Ta,t)}Pe(Cf,$e);function us(t){const e=vo();Ne(e,new Cf(e))}jn.STAT_EVENT="statevent";function Df(t,e){$e.call(this,jn.STAT_EVENT,t),this.stat=e}Pe(Df,$e);function We(t){const e=vo();Ne(e,new Df(e,t))}jn.Ua="timingevent";function kf(t,e){$e.call(this,jn.Ua,t),this.size=e}Pe(kf,$e);function Ps(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return L.setTimeout(function(){t()},e)}var Eo={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Vf={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Zc(){}Zc.prototype.h=null;function Yu(t){return t.h||(t.h=t.i())}function Nf(){}var bs={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function el(){$e.call(this,"d")}Pe(el,$e);function tl(){$e.call(this,"c")}Pe(tl,$e);var Qa;function Io(){}Pe(Io,Zc);Io.prototype.g=function(){return new XMLHttpRequest};Io.prototype.i=function(){return{}};Qa=new Io;function Cs(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new ls(this),this.P=UE,t=Ha?125:void 0,this.V=new _o(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Of}function Of(){this.i=null,this.g="",this.h=!1}var UE=45e3,xf={},Ja={};S=Cs.prototype;S.setTimeout=function(t){this.P=t};function Ya(t,e,n){t.L=1,t.A=wo(jt(e)),t.u=n,t.S=!0,Mf(t,null)}function Mf(t,e){t.G=Date.now(),Ds(t),t.B=jt(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),Hf(n.i,"t",r),t.o=0,n=t.l.J,t.h=new Of,t.g=hp(t.l,n?e:null,!t.u),0<t.O&&(t.M=new OE(je(t.Pa,t,t.g),t.O)),Pf(t.U,t.g,"readystatechange",t.nb),e=t.I?_f(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),us(),xE(t.j,t.v,t.B,t.m,t.W,t.u)}S.nb=function(t){t=t.target;const e=this.M;e&&It(t)==3?e.l():this.Pa(t)};S.Pa=function(t){try{if(t==this.g)e:{const u=It(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Ha||this.g&&(this.h.h||this.g.ja()||th(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?us(3):us(2)),To(this);var n=this.g.da();this.ca=n;t:if(Lf(this)){var r=th(this.g);t="";var s=r.length,i=It(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){wn(this),Wr(this);var o="";break t}this.h.i=new L.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,ME(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!is(a)){var l=a;break t}}l=null}if(n=l)er(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Xa(this,n);else{this.i=!1,this.s=3,We(12),wn(this),Wr(this);break e}}this.S?(Ff(this,u,o),Ha&&this.i&&u==3&&(Pf(this.U,this.V,"tick",this.mb),this.V.start())):(er(this.j,this.m,o,null),Xa(this,o)),u==4&&wn(this),this.i&&!this.J&&(u==4?ap(this.l,this):(this.i=!1,Ds(this)))}else oI(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,We(12)):(this.s=0,We(13)),wn(this),Wr(this)}}}catch{}finally{}};function Lf(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function Ff(t,e,n){let r=!0,s;for(;!t.J&&t.o<n.length;)if(s=BE(t,n),s==Ja){e==4&&(t.s=4,We(14),r=!1),er(t.j,t.m,null,"[Incomplete Response]");break}else if(s==xf){t.s=4,We(15),er(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else er(t.j,t.m,s,null),Xa(t,s);Lf(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,We(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),al(e),e.M=!0,We(11))):(er(t.j,t.m,n,"[Invalid Chunked Response]"),wn(t),Wr(t))}S.mb=function(){if(this.g){var t=It(this.g),e=this.g.ja();this.o<e.length&&(To(this),Ff(this,t,e),this.i&&t!=4&&Ds(this))}};function BE(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?Ja:(n=Number(e.substring(n,r)),isNaN(n)?xf:(r+=1,r+n>e.length?Ja:(e=e.slice(r,r+n),t.o=r+n,e)))}S.cancel=function(){this.J=!0,wn(this)};function Ds(t){t.Y=Date.now()+t.P,Uf(t,t.P)}function Uf(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Ps(je(t.lb,t),e)}function To(t){t.C&&(L.clearTimeout(t.C),t.C=null)}S.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(LE(this.j,this.B),this.L!=2&&(us(),We(17)),wn(this),this.s=2,Wr(this)):Uf(this,this.Y-t)};function Wr(t){t.l.H==0||t.J||ap(t.l,t)}function wn(t){To(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Yc(t.V),bf(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Xa(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Za(n.i,t))){if(!t.K&&Za(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)xi(n),Po(n);else break e;ol(n),We(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Ps(je(n.ib,n),6e3));if(1>=Wf(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else An(n,11)}else if((t.K||n.g==t)&&xi(n),!is(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const p=l[5];p!=null&&typeof p=="number"&&0<p&&(r=1.5*p,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const k=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(k){var i=r.i;i.g||k.indexOf("spdy")==-1&&k.indexOf("quic")==-1&&k.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(nl(i,i.h),i.h=null))}if(r.F){const b=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;b&&(r.Da=b,le(r.I,r.F,b))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=up(r,r.J?r.pa:null,r.Y),o.K){Gf(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(To(a),Ds(a)),r.g=o}else ip(r);0<n.j.length&&bo(n)}else l[0]!="stop"&&l[0]!="close"||An(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?An(n,7):il(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}us(4)}catch{}}function jE(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(fo(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function $E(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(fo(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Bf(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(fo(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=$E(t),r=jE(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var jf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function qE(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Dn(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Dn){this.h=t.h,Ni(this,t.j),this.s=t.s,this.g=t.g,Oi(this,t.m),this.l=t.l;var e=t.i,n=new hs;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Xu(this,n),this.o=t.o}else t&&(e=String(t).match(jf))?(this.h=!1,Ni(this,e[1]||"",!0),this.s=Ur(e[2]||""),this.g=Ur(e[3]||"",!0),Oi(this,e[4]),this.l=Ur(e[5]||"",!0),Xu(this,e[6]||"",!0),this.o=Ur(e[7]||"")):(this.h=!1,this.i=new hs(null,this.h))}Dn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Br(e,Zu,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Br(e,Zu,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Br(n,n.charAt(0)=="/"?KE:zE,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Br(n,GE)),t.join("")};function jt(t){return new Dn(t)}function Ni(t,e,n){t.j=n?Ur(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Oi(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Xu(t,e,n){e instanceof hs?(t.i=e,QE(t.i,t.h)):(n||(e=Br(e,WE)),t.i=new hs(e,t.h))}function le(t,e,n){t.i.set(e,n)}function wo(t){return le(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ur(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Br(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,HE),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function HE(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Zu=/[#\/\?@]/g,zE=/[#\?:]/g,KE=/[#\?]/g,WE=/[#\?@]/g,GE=/#/g;function hs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function pn(t){t.g||(t.g=new Map,t.h=0,t.i&&qE(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}S=hs.prototype;S.add=function(t,e){pn(this),this.i=null,t=Rr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function $f(t,e){pn(t),e=Rr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function qf(t,e){return pn(t),e=Rr(t,e),t.g.has(e)}S.forEach=function(t,e){pn(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};S.ta=function(){pn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};S.Z=function(t){pn(this);let e=[];if(typeof t=="string")qf(this,t)&&(e=e.concat(this.g.get(Rr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};S.set=function(t,e){return pn(this),this.i=null,t=Rr(this,t),qf(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};S.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Hf(t,e,n){$f(t,e),0<n.length&&(t.i=null,t.g.set(Rr(t,e),$c(n)),t.h+=n.length)}S.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function Rr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function QE(t,e){e&&!t.j&&(pn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&($f(this,r),Hf(this,s,n))},t)),t.j=e}var JE=class{constructor(t,e){this.g=t,this.map=e}};function zf(t){this.l=t||YE,L.PerformanceNavigationTiming?(t=L.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(L.g&&L.g.Ka&&L.g.Ka()&&L.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var YE=10;function Kf(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Wf(t){return t.h?1:t.g?t.g.size:0}function Za(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function nl(t,e){t.g?t.g.add(e):t.h=e}function Gf(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}zf.prototype.cancel=function(){if(this.i=Qf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Qf(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return $c(t.i)}var XE=class{stringify(t){return L.JSON.stringify(t,void 0)}parse(t){return L.JSON.parse(t,void 0)}};function ZE(){this.g=new XE}function eI(t,e,n){const r=n||"";try{Bf(t,function(s,i){let o=s;Rs(s)&&(o=Qc(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function tI(t,e){const n=new yo;if(L.Image){const r=new Image;r.onload=Zs(ti,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Zs(ti,n,r,"TestLoadImage: error",!1,e),r.onabort=Zs(ti,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Zs(ti,n,r,"TestLoadImage: timeout",!1,e),L.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ti(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Ao(t){this.l=t.ec||null,this.j=t.ob||!1}Pe(Ao,Zc);Ao.prototype.g=function(){return new Ro(this.l,this.j)};Ao.prototype.i=function(t){return function(){return t}}({});function Ro(t,e){Se.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=rl,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Pe(Ro,Se);var rl=0;S=Ro.prototype;S.open=function(t,e){if(this.readyState!=rl)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ds(this)};S.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||L).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};S.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ks(this)),this.readyState=rl};S.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ds(this)),this.g&&(this.readyState=3,ds(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof L.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Jf(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Jf(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}S.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ks(this):ds(this),this.readyState==3&&Jf(this)}};S.Za=function(t){this.g&&(this.response=this.responseText=t,ks(this))};S.Ya=function(t){this.g&&(this.response=t,ks(this))};S.ka=function(){this.g&&ks(this)};function ks(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ds(t)}S.setRequestHeader=function(t,e){this.v.append(t,e)};S.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};S.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ds(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ro.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var nI=L.JSON.parse;function me(t){Se.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Yf,this.L=this.M=!1}Pe(me,Se);var Yf="",rI=/^https?$/i,sI=["POST","PUT"];S=me.prototype;S.Oa=function(t){this.M=t};S.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Qa.g(),this.C=this.u?Yu(this.u):Yu(Qa),this.g.onreadystatechange=je(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){eh(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=L.FormData&&t instanceof L.FormData,!(0<=ff(sI,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{ep(this),0<this.B&&((this.L=iI(this.g))?(this.g.timeout=this.B,this.g.ontimeout=je(this.ua,this)):this.A=Xc(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){eh(this,i)}};function iI(t){return fr&&typeof t.timeout=="number"&&t.ontimeout!==void 0}S.ua=function(){typeof jc<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ne(this,"timeout"),this.abort(8))};function eh(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Xf(t),So(t)}function Xf(t){t.F||(t.F=!0,Ne(t,"complete"),Ne(t,"error"))}S.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ne(this,"complete"),Ne(this,"abort"),So(this))};S.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),So(this,!0)),me.$.N.call(this)};S.La=function(){this.s||(this.G||this.v||this.l?Zf(this):this.kb())};S.kb=function(){Zf(this)};function Zf(t){if(t.h&&typeof jc<"u"&&(!t.C[1]||It(t)!=4||t.da()!=2)){if(t.v&&It(t)==4)Xc(t.La,0,t);else if(Ne(t,"readystatechange"),It(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(jf)[1]||null;!s&&L.self&&L.self.location&&(s=L.self.location.protocol.slice(0,-1)),r=!rI.test(s?s.toLowerCase():"")}n=r}if(n)Ne(t,"complete"),Ne(t,"success");else{t.m=6;try{var i=2<It(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",Xf(t)}}finally{So(t)}}}}function So(t,e){if(t.g){ep(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Ne(t,"ready");try{n.onreadystatechange=r}catch{}}}function ep(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(L.clearTimeout(t.A),t.A=null)}S.isActive=function(){return!!this.g};function It(t){return t.g?t.g.readyState:0}S.da=function(){try{return 2<It(this)?this.g.status:-1}catch{return-1}};S.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};S.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),nI(e)}};function th(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Yf:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function oI(t){const e={};t=(t.g&&2<=It(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(is(t[r]))continue;var n=kE(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}AE(e,function(r){return r.join(", ")})}S.Ia=function(){return this.m};S.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function tp(t){let e="";return Hc(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function sl(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=tp(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):le(t,e,n))}function xr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function np(t){this.Ga=0,this.j=[],this.l=new yo,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=xr("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=xr("baseRetryDelayMs",5e3,t),this.hb=xr("retryDelaySeedMs",1e4,t),this.eb=xr("forwardChannelMaxRetries",2,t),this.xa=xr("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new zf(t&&t.concurrentRequestLimit),this.Ja=new ZE,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}S=np.prototype;S.ra=8;S.H=1;function il(t){if(rp(t),t.H==3){var e=t.W++,n=jt(t.I);if(le(n,"SID",t.K),le(n,"RID",e),le(n,"TYPE","terminate"),Vs(t,n),e=new Cs(t,t.l,e),e.L=2,e.A=wo(jt(n)),n=!1,L.navigator&&L.navigator.sendBeacon)try{n=L.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&L.Image&&(new Image().src=e.A,n=!0),n||(e.g=hp(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Ds(e)}lp(t)}function Po(t){t.g&&(al(t),t.g.cancel(),t.g=null)}function rp(t){Po(t),t.u&&(L.clearTimeout(t.u),t.u=null),xi(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&L.clearTimeout(t.m),t.m=null)}function bo(t){if(!Kf(t.i)&&!t.m){t.m=!0;var e=t.Na;as||Rf(),cs||(as(),cs=!0),Jc.add(e,t),t.C=0}}function aI(t,e){return Wf(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Ps(je(t.Na,t,e),cp(t,t.C)),t.C++,!0)}S.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Cs(this,this.l,t);let i=this.s;if(this.U&&(i?(i=_f(i),yf(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=sp(this,s,e),n=jt(this.I),le(n,"RID",t),le(n,"CVER",22),this.F&&le(n,"X-HTTP-Session-Id",this.F),Vs(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(tp(i)))+"&"+e:this.o&&sl(n,this.o,i)),nl(this.i,s),this.bb&&le(n,"TYPE","init"),this.P?(le(n,"$req",e),le(n,"SID","null"),s.aa=!0,Ya(s,n,null)):Ya(s,n,e),this.H=2}}else this.H==3&&(t?nh(this,t):this.j.length==0||Kf(this.i)||nh(this))};function nh(t,e){var n;e?n=e.m:n=t.W++;const r=jt(t.I);le(r,"SID",t.K),le(r,"RID",n),le(r,"AID",t.V),Vs(t,r),t.o&&t.s&&sl(r,t.o,t.s),n=new Cs(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=sp(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),nl(t.i,n),Ya(n,r,e)}function Vs(t,e){t.na&&Hc(t.na,function(n,r){le(e,r,n)}),t.h&&Bf({},function(n,r){le(e,r,n)})}function sp(t,e,n){n=Math.min(t.j.length,n);var r=t.h?je(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{eI(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function ip(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;as||Rf(),cs||(as(),cs=!0),Jc.add(e,t),t.A=0}}function ol(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Ps(je(t.Ma,t),cp(t,t.A)),t.A++,!0)}S.Ma=function(){if(this.u=null,op(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Ps(je(this.jb,this),t)}};S.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,We(10),Po(this),op(this))};function al(t){t.B!=null&&(L.clearTimeout(t.B),t.B=null)}function op(t){t.g=new Cs(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=jt(t.wa);le(e,"RID","rpc"),le(e,"SID",t.K),le(e,"AID",t.V),le(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&le(e,"TO",t.qa),le(e,"TYPE","xmlhttp"),Vs(t,e),t.o&&t.s&&sl(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=wo(jt(e)),n.u=null,n.S=!0,Mf(n,t)}S.ib=function(){this.v!=null&&(this.v=null,Po(this),ol(this),We(19))};function xi(t){t.v!=null&&(L.clearTimeout(t.v),t.v=null)}function ap(t,e){var n=null;if(t.g==e){xi(t),al(t),t.g=null;var r=2}else if(Za(t.i,e))n=e.F,Gf(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var s=t.C;r=vo(),Ne(r,new kf(r,n)),bo(t)}else ip(t);else if(s=e.s,s==3||s==0&&0<e.ca||!(r==1&&aI(t,e)||r==2&&ol(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:An(t,5);break;case 4:An(t,10);break;case 3:An(t,6);break;default:An(t,2)}}}function cp(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function An(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=je(t.pb,t);n||(n=new Dn("//www.google.com/images/cleardot.gif"),L.location&&L.location.protocol=="http"||Ni(n,"https"),wo(n)),tI(n.toString(),r)}else We(2);t.H=0,t.h&&t.h.za(e),lp(t),rp(t)}S.pb=function(t){t?(this.l.info("Successfully pinged google.com"),We(2)):(this.l.info("Failed to ping google.com"),We(1))};function lp(t){if(t.H=0,t.ma=[],t.h){const e=Qf(t.i);(e.length!=0||t.j.length!=0)&&(Ku(t.ma,e),Ku(t.ma,t.j),t.i.i.length=0,$c(t.j),t.j.length=0),t.h.ya()}}function up(t,e,n){var r=n instanceof Dn?jt(n):new Dn(n);if(r.g!="")e&&(r.g=e+"."+r.g),Oi(r,r.m);else{var s=L.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new Dn(null);r&&Ni(i,r),e&&(i.g=e),s&&Oi(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&le(r,n,e),le(r,"VER",t.ra),Vs(t,r),r}function hp(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new me(new Ao({ob:n})):new me(t.va),e.Oa(t.J),e}S.isActive=function(){return!!this.h&&this.h.isActive(this)};function dp(){}S=dp.prototype;S.Ba=function(){};S.Aa=function(){};S.za=function(){};S.ya=function(){};S.isActive=function(){return!0};S.Va=function(){};function Mi(){if(fr&&!(10<=Number(EE)))throw Error("Environmental error: no available transport.")}Mi.prototype.g=function(t,e){return new tt(t,e)};function tt(t,e){Se.call(this),this.g=new np(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!is(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!is(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Sr(this)}Pe(tt,Se);tt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;We(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=up(t,null,t.Y),bo(t)};tt.prototype.close=function(){il(this.g)};tt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Qc(t),t=n);e.j.push(new JE(e.fb++,t)),e.H==3&&bo(e)};tt.prototype.N=function(){this.g.h=null,delete this.j,il(this.g),delete this.g,tt.$.N.call(this)};function fp(t){el.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Pe(fp,el);function pp(){tl.call(this),this.status=1}Pe(pp,tl);function Sr(t){this.g=t}Pe(Sr,dp);Sr.prototype.Ba=function(){Ne(this.g,"a")};Sr.prototype.Aa=function(t){Ne(this.g,new fp(t))};Sr.prototype.za=function(t){Ne(this.g,new pp)};Sr.prototype.ya=function(){Ne(this.g,"b")};function cI(){this.blockSize=-1}function ft(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Pe(ft,cI);ft.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ya(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}ft.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)ya(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){ya(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){ya(this,r),s=0;break}}this.h=s,this.i+=e};ft.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function re(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var lI={};function cl(t){return-128<=t&&128>t?_E(t,function(e){return new re([e|0],0>e?-1:0)}):new re([t|0],0>t?-1:0)}function Tt(t){if(isNaN(t)||!isFinite(t))return ir;if(0>t)return De(Tt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=ec;return new re(e,0)}function gp(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return De(gp(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Tt(Math.pow(e,8)),r=ir,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=Tt(Math.pow(e,i)),r=r.R(i).add(Tt(o))):(r=r.R(n),r=r.add(Tt(o)))}return r}var ec=4294967296,ir=cl(0),tc=cl(1),rh=cl(16777216);S=re.prototype;S.ea=function(){if(rt(this))return-De(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:ec+r)*e,e*=ec}return t};S.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(xt(this))return"0";if(rt(this))return"-"+De(this).toString(t);for(var e=Tt(Math.pow(t,6)),n=this,r="";;){var s=Fi(n,e).g;n=Li(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,xt(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};S.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function xt(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function rt(t){return t.h==-1}S.X=function(t){return t=Li(this,t),rt(t)?-1:xt(t)?0:1};function De(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new re(n,~t.h).add(tc)}S.abs=function(){return rt(this)?De(this):this};S.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new re(n,n[n.length-1]&-2147483648?-1:0)};function Li(t,e){return t.add(De(e))}S.R=function(t){if(xt(this)||xt(t))return ir;if(rt(this))return rt(t)?De(this).R(De(t)):De(De(this).R(t));if(rt(t))return De(this.R(De(t)));if(0>this.X(rh)&&0>t.X(rh))return Tt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,ni(n,2*r+2*s),n[2*r+2*s+1]+=i*c,ni(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,ni(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,ni(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new re(n,0)};function ni(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Mr(t,e){this.g=t,this.h=e}function Fi(t,e){if(xt(e))throw Error("division by zero");if(xt(t))return new Mr(ir,ir);if(rt(t))return e=Fi(De(t),e),new Mr(De(e.g),De(e.h));if(rt(e))return e=Fi(t,De(e)),new Mr(De(e.g),e.h);if(30<t.g.length){if(rt(t)||rt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=tc,r=e;0>=r.X(t);)n=sh(n),r=sh(r);var s=Kn(n,1),i=Kn(r,1);for(r=Kn(r,2),n=Kn(n,2);!xt(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Kn(r,1),n=Kn(n,1)}return e=Li(t,s.R(e)),new Mr(s,e)}for(s=ir;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=Tt(n),o=i.R(e);rt(o)||0<o.X(t);)n-=r,i=Tt(n),o=i.R(e);xt(i)&&(i=tc),s=s.add(i),t=Li(t,o)}return new Mr(s,t)}S.gb=function(t){return Fi(this,t).h};S.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new re(n,this.h&t.h)};S.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new re(n,this.h|t.h)};S.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new re(n,this.h^t.h)};function sh(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new re(n,t.h)}function Kn(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new re(s,t.h)}Mi.prototype.createWebChannel=Mi.prototype.g;tt.prototype.send=tt.prototype.u;tt.prototype.open=tt.prototype.m;tt.prototype.close=tt.prototype.close;Eo.NO_ERROR=0;Eo.TIMEOUT=8;Eo.HTTP_ERROR=6;Vf.COMPLETE="complete";Nf.EventType=bs;bs.OPEN="a";bs.CLOSE="b";bs.ERROR="c";bs.MESSAGE="d";Se.prototype.listen=Se.prototype.O;me.prototype.listenOnce=me.prototype.P;me.prototype.getLastError=me.prototype.Sa;me.prototype.getLastErrorCode=me.prototype.Ia;me.prototype.getStatus=me.prototype.da;me.prototype.getResponseJson=me.prototype.Wa;me.prototype.getResponseText=me.prototype.ja;me.prototype.send=me.prototype.ha;me.prototype.setWithCredentials=me.prototype.Oa;ft.prototype.digest=ft.prototype.l;ft.prototype.reset=ft.prototype.reset;ft.prototype.update=ft.prototype.j;re.prototype.add=re.prototype.add;re.prototype.multiply=re.prototype.R;re.prototype.modulo=re.prototype.gb;re.prototype.compare=re.prototype.X;re.prototype.toNumber=re.prototype.ea;re.prototype.toString=re.prototype.toString;re.prototype.getBits=re.prototype.D;re.fromNumber=Tt;re.fromString=gp;var uI=function(){return new Mi},hI=function(){return vo()},va=Eo,dI=Vf,fI=jn,ih={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},ri=Nf,pI=me,gI=ft,or=re;const oh="@firebase/firestore";/**
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
 */class Le{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Le.UNAUTHENTICATED=new Le(null),Le.GOOGLE_CREDENTIALS=new Le("google-credentials-uid"),Le.FIRST_PARTY=new Le("first-party-uid"),Le.MOCK_USER=new Le("mock-user");/**
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
 */let Pr="10.9.0";/**
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
 */const xn=new Fc("@firebase/firestore");function Lr(){return xn.logLevel}function R(t,...e){if(xn.logLevel<=J.DEBUG){const n=e.map(ll);xn.debug(`Firestore (${Pr}): ${t}`,...n)}}function bt(t,...e){if(xn.logLevel<=J.ERROR){const n=e.map(ll);xn.error(`Firestore (${Pr}): ${t}`,...n)}}function pr(t,...e){if(xn.logLevel<=J.WARN){const n=e.map(ll);xn.warn(`Firestore (${Pr}): ${t}`,...n)}}function ll(t){if(typeof t=="string")return t;try{/**
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
 */function M(t="Unexpected state"){const e=`FIRESTORE (${Pr}) INTERNAL ASSERTION FAILED: `+t;throw bt(e),new Error(e)}function oe(t,e){t||M()}function H(t,e){return t}/**
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
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends zt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ut{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class mp{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class mI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Le.UNAUTHENTICATED))}shutdown(){}}class _I{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class yI{constructor(e){this.t=e,this.currentUser=Le.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Ut;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ut,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{R("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(R("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ut)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(R("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(oe(typeof r.accessToken=="string"),new mp(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return oe(e===null||typeof e=="string"),new Le(e)}}class vI{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Le.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class EI{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new vI(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Le.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class II{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class TI{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&R("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,R("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{R("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):R("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(oe(typeof n.token=="string"),this.R=n.token,new II(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function wI(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class _p{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=wI(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function te(t,e){return t<e?-1:t>e?1:0}function gr(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Te{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new V(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new V(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new V(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Te.fromMillis(Date.now())}static fromDate(e){return Te.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Te(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?te(this.nanoseconds,e.nanoseconds):te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class j{constructor(e){this.timestamp=e}static fromTimestamp(e){return new j(e)}static min(){return new j(new Te(0,0))}static max(){return new j(new Te(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class fs{constructor(e,n,r){n===void 0?n=0:n>e.length&&M(),r===void 0?r=e.length-n:r>e.length-n&&M(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return fs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof fs?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class de extends fs{construct(e,n,r){return new de(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new V(E.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new de(n)}static emptyPath(){return new de([])}}const AI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ve extends fs{construct(e,n,r){return new Ve(e,n,r)}static isValidIdentifier(e){return AI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ve.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ve(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new V(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new V(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new V(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new V(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ve(n)}static emptyPath(){return new Ve([])}}/**
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
 */class O{constructor(e){this.path=e}static fromPath(e){return new O(de.fromString(e))}static fromName(e){return new O(de.fromString(e).popFirst(5))}static empty(){return new O(de.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&de.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return de.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new O(new de(e.slice()))}}function RI(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=j.fromTimestamp(r===1e9?new Te(n+1,0):new Te(n,r));return new un(s,O.empty(),e)}function SI(t){return new un(t.readTime,t.key,-1)}class un{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new un(j.min(),O.empty(),-1)}static max(){return new un(j.max(),O.empty(),-1)}}function PI(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=O.comparator(t.documentKey,e.documentKey),n!==0?n:te(t.largestBatchId,e.largestBatchId))}/**
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
 */const bI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class CI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ns(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==bI)throw t;R("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ul{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new Ut,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new Gr(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const s=hl(r.target.error);this.V.reject(new Gr(e,s))}}static open(e,n,r,s){try{return new ul(n,e.transaction(s,r))}catch(i){throw new Gr(n,i)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(R("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new kI(n)}}class Rn{constructor(e,n,r){this.name=e,this.version=n,this.p=r,Rn.S(Ee())===12.2&&bt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return R("SimpleDb","Removing database:",e),In(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!of())return!1;if(Rn.C())return!0;const e=Ee(),n=Rn.S(e),r=0<n&&n<10,s=Rn.v(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(R("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;n(o)},s.onblocked=()=>{r(new Gr(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new V(E.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new V(E.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Gr(e,o))},s.onupgradeneeded=i=>{R("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.N(o,s.transaction,i.oldVersion,this.version).next(()=>{R("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=n=>this.L(n)),this.db}B(e){this.L=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,s){const i=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=ul.open(this.db,e,i?"readonly":"readwrite",r),c=s(a).next(l=>(a.g(),l)).catch(l=>(a.abort(l),_.reject(l))).toPromise();return c.catch(()=>{}),await a.m,c}catch(a){const c=a,l=c.name!=="FirebaseError"&&o<3;if(R("SimpleDb","Transaction failed with error:",c.message,"Retrying:",l),this.close(),!l)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class DI{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return In(this.k.delete())}}class Gr extends V{constructor(e,n){super(E.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Os(t){return t.name==="IndexedDbTransactionError"}class kI{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(R("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(R("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),In(r)}add(e){return R("SimpleDb","ADD",this.store.name,e,e),In(this.store.add(e))}get(e){return In(this.store.get(e)).next(n=>(n===void 0&&(n=null),R("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return R("SimpleDb","DELETE",this.store.name,e),In(this.store.delete(e))}count(){return R("SimpleDb","COUNT",this.store.name),In(this.store.count())}W(e,n){const r=this.options(e,n),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new _((o,a)=>{i.onerror=c=>{a(c.target.error)},i.onsuccess=c=>{o(c.target.result)}})}{const i=this.cursor(r),o=[];return this.G(i,(a,c)=>{o.push(c)}).next(()=>o)}}j(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new _((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}H(e,n){R("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.J=!1;const s=this.cursor(r);return this.G(s,(i,o,a)=>a.delete())}Y(e,n){let r;n?r=e:(r={},n=e);const s=this.cursor(r);return this.G(s,n)}Z(e){const n=this.cursor({});return new _((r,s)=>{n.onerror=i=>{const o=hl(i.target.error);s(o)},n.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(e,n){const r=[];return new _((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const c=new DI(a),l=n(a.primaryKey,a.value,c);if(l instanceof _){const u=l.catch(h=>(c.done(),_.reject(h)));r.push(u)}c.isDone?s():c.$===null?a.continue():a.continue(c.$)}}).next(()=>_.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function In(t){return new _((e,n)=>{t.onsuccess=r=>{const s=r.target.result;e(s)},t.onerror=r=>{const s=hl(r.target.error);n(s)}})}let ah=!1;function hl(t){const e=Rn.S(Ee());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new V("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ah||(ah=!0,setTimeout(()=>{throw r},0)),r}}return t}/**
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
 */class dl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}dl._e=-1;function Co(t){return t==null}function Ui(t){return t===0&&1/t==-1/0}function VI(t){return typeof t=="number"&&Number.isInteger(t)&&!Ui(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function ch(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function br(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function yp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ge{constructor(e,n){this.comparator=e,this.root=n||Ce.EMPTY}insert(e,n){return new ge(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ce.BLACK,null,null))}remove(e){return new ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ce.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new si(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new si(this.root,e,this.comparator,!1)}getReverseIterator(){return new si(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new si(this.root,e,this.comparator,!0)}}class si{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ce{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ce.RED,this.left=s??Ce.EMPTY,this.right=i??Ce.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ce(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ce.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ce.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();const e=this.left.check();if(e!==this.right.check())throw M();return e+(this.isRed()?0:1)}}Ce.EMPTY=null,Ce.RED=!0,Ce.BLACK=!1;Ce.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Ce(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Oe{constructor(e){this.comparator=e,this.data=new ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new lh(this.data.getIterator())}getIteratorFrom(e){return new lh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Oe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Oe(this.comparator);return n.data=e,n}}class lh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class ut{constructor(e){this.fields=e,e.sort(Ve.comparator)}static empty(){return new ut([])}unionWith(e){let n=new Oe(Ve.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new ut(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return gr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class vp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class He{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new vp("Invalid base64 string: "+i):i}}(e);return new He(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new He(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}He.EMPTY_BYTE_STRING=new He("");const NI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function hn(t){if(oe(!!t),typeof t=="string"){let e=0;const n=NI.exec(t);if(oe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ve(t.seconds),nanos:ve(t.nanos)}}function ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Mn(t){return typeof t=="string"?He.fromBase64String(t):He.fromUint8Array(t)}/**
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
 */function fl(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function pl(t){const e=t.mapValue.fields.__previous_value__;return fl(e)?pl(e):e}function ps(t){const e=hn(t.mapValue.fields.__local_write_time__.timestampValue);return new Te(e.seconds,e.nanos)}/**
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
 */class OI{constructor(e,n,r,s,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class gs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new gs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof gs&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ii={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ln(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?fl(t)?4:xI(t)?9007199254740991:10:M()}function Ct(t,e){if(t===e)return!0;const n=Ln(t);if(n!==Ln(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ps(t).isEqual(ps(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=hn(s.timestampValue),a=hn(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Mn(s.bytesValue).isEqual(Mn(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ve(s.geoPointValue.latitude)===ve(i.geoPointValue.latitude)&&ve(s.geoPointValue.longitude)===ve(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ve(s.integerValue)===ve(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ve(s.doubleValue),a=ve(i.doubleValue);return o===a?Ui(o)===Ui(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return gr(t.arrayValue.values||[],e.arrayValue.values||[],Ct);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(ch(o)!==ch(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Ct(o[c],a[c])))return!1;return!0}(t,e);default:return M()}}function ms(t,e){return(t.values||[]).find(n=>Ct(n,e))!==void 0}function mr(t,e){if(t===e)return 0;const n=Ln(t),r=Ln(e);if(n!==r)return te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return te(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=ve(i.integerValue||i.doubleValue),c=ve(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return uh(t.timestampValue,e.timestampValue);case 4:return uh(ps(t),ps(e));case 5:return te(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Mn(i),c=Mn(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=te(a[l],c[l]);if(u!==0)return u}return te(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=te(ve(i.latitude),ve(o.latitude));return a!==0?a:te(ve(i.longitude),ve(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=mr(a[l],c[l]);if(u)return u}return te(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===ii.mapValue&&o===ii.mapValue)return 0;if(i===ii.mapValue)return 1;if(o===ii.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const p=te(c[h],u[h]);if(p!==0)return p;const g=mr(a[c[h]],l[u[h]]);if(g!==0)return g}return te(c.length,u.length)}(t.mapValue,e.mapValue);default:throw M()}}function uh(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return te(t,e);const n=hn(t),r=hn(e),s=te(n.seconds,r.seconds);return s!==0?s:te(n.nanos,r.nanos)}function _r(t){return nc(t)}function nc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=hn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Mn(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return O.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=nc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${nc(n.fields[o])}`;return s+"}"}(t.mapValue):M()}function rc(t){return!!t&&"integerValue"in t}function gl(t){return!!t&&"arrayValue"in t}function hh(t){return!!t&&"nullValue"in t}function dh(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function _i(t){return!!t&&"mapValue"in t}function Qr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return br(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Qr(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Qr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function xI(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class st{constructor(e){this.value=e}static empty(){return new st({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!_i(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Qr(n)}setAll(e){let n=Ve.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Qr(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());_i(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ct(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];_i(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){br(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new st(Qr(this.value))}}function Ep(t){const e=[];return br(t.fields,(n,r)=>{const s=new Ve([n]);if(_i(r)){const i=Ep(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new ut(e)}/**
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
 */class Fe{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Fe(e,0,j.min(),j.min(),j.min(),st.empty(),0)}static newFoundDocument(e,n,r,s){return new Fe(e,1,n,j.min(),r,s,0)}static newNoDocument(e,n){return new Fe(e,2,n,j.min(),j.min(),st.empty(),0)}static newUnknownDocument(e,n){return new Fe(e,3,n,j.min(),j.min(),st.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(j.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=st.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=st.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=j.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Fe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Fe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Bi{constructor(e,n){this.position=e,this.inclusive=n}}function fh(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=O.comparator(O.fromName(o.referenceValue),n.key):r=mr(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function ph(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ct(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ji{constructor(e,n="asc"){this.field=e,this.dir=n}}function MI(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Ip{}class Ie extends Ip{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new FI(e,n,r):n==="array-contains"?new jI(e,r):n==="in"?new $I(e,r):n==="not-in"?new qI(e,r):n==="array-contains-any"?new HI(e,r):new Ie(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new UI(e,r):new BI(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(mr(n,this.value)):n!==null&&Ln(this.value)===Ln(n)&&this.matchesComparison(mr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Dt extends Ip{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new Dt(e,n)}matches(e){return Tp(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Tp(t){return t.op==="and"}function wp(t){return LI(t)&&Tp(t)}function LI(t){for(const e of t.filters)if(e instanceof Dt)return!1;return!0}function sc(t){if(t instanceof Ie)return t.field.canonicalString()+t.op.toString()+_r(t.value);if(wp(t))return t.filters.map(e=>sc(e)).join(",");{const e=t.filters.map(n=>sc(n)).join(",");return`${t.op}(${e})`}}function Ap(t,e){return t instanceof Ie?function(r,s){return s instanceof Ie&&r.op===s.op&&r.field.isEqual(s.field)&&Ct(r.value,s.value)}(t,e):t instanceof Dt?function(r,s){return s instanceof Dt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Ap(o,s.filters[a]),!0):!1}(t,e):void M()}function Rp(t){return t instanceof Ie?function(n){return`${n.field.canonicalString()} ${n.op} ${_r(n.value)}`}(t):t instanceof Dt?function(n){return n.op.toString()+" {"+n.getFilters().map(Rp).join(" ,")+"}"}(t):"Filter"}class FI extends Ie{constructor(e,n,r){super(e,n,r),this.key=O.fromName(r.referenceValue)}matches(e){const n=O.comparator(e.key,this.key);return this.matchesComparison(n)}}class UI extends Ie{constructor(e,n){super(e,"in",n),this.keys=Sp("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class BI extends Ie{constructor(e,n){super(e,"not-in",n),this.keys=Sp("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Sp(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>O.fromName(r.referenceValue))}class jI extends Ie{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return gl(n)&&ms(n.arrayValue,this.value)}}class $I extends Ie{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ms(this.value.arrayValue,n)}}class qI extends Ie{constructor(e,n){super(e,"not-in",n)}matches(e){if(ms(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ms(this.value.arrayValue,n)}}class HI extends Ie{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!gl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ms(this.value.arrayValue,r))}}/**
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
 */class zI{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function gh(t,e=null,n=[],r=[],s=null,i=null,o=null){return new zI(t,e,n,r,s,i,o)}function ml(t){const e=H(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>sc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Co(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>_r(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>_r(r)).join(",")),e.ce=n}return e.ce}function _l(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!MI(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Ap(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ph(t.startAt,e.startAt)&&ph(t.endAt,e.endAt)}function ic(t){return O.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Do{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function KI(t,e,n,r,s,i,o,a){return new Do(t,e,n,r,s,i,o,a)}function Pp(t){return new Do(t)}function mh(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function WI(t){return t.collectionGroup!==null}function Jr(t){const e=H(t);if(e.le===null){e.le=[];const n=new Set;for(const i of e.explicitOrderBy)e.le.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Oe(Ve.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.le.push(new ji(i,r))}),n.has(Ve.keyField().canonicalString())||e.le.push(new ji(Ve.keyField(),r))}return e.le}function wt(t){const e=H(t);return e.he||(e.he=GI(e,Jr(t))),e.he}function GI(t,e){if(t.limitType==="F")return gh(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ji(s.field,i)});const n=t.endAt?new Bi(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Bi(t.startAt.position,t.startAt.inclusive):null;return gh(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function oc(t,e,n){return new Do(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ko(t,e){return _l(wt(t),wt(e))&&t.limitType===e.limitType}function bp(t){return`${ml(wt(t))}|lt:${t.limitType}`}function Qn(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Rp(s)).join(", ")}]`),Co(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>_r(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>_r(s)).join(",")),`Target(${r})`}(wt(t))}; limitType=${t.limitType})`}function Vo(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):O.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Jr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=fh(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,Jr(r),s)||r.endAt&&!function(o,a,c){const l=fh(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,Jr(r),s))}(t,e)}function QI(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Cp(t){return(e,n)=>{let r=!1;for(const s of Jr(t)){const i=JI(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function JI(t,e,n){const r=t.field.isKeyField()?O.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?mr(c,l):M()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return M()}}/**
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
 */class Cr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){br(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return yp(this.inner)}size(){return this.innerSize}}/**
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
 */const YI=new ge(O.comparator);function $t(){return YI}const Dp=new ge(O.comparator);function jr(...t){let e=Dp;for(const n of t)e=e.insert(n.key,n);return e}function kp(t){let e=Dp;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Sn(){return Yr()}function Vp(){return Yr()}function Yr(){return new Cr(t=>t.toString(),(t,e)=>t.isEqual(e))}const XI=new ge(O.comparator),ZI=new Oe(O.comparator);function Q(...t){let e=ZI;for(const n of t)e=e.add(n);return e}const eT=new Oe(te);function tT(){return eT}/**
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
 */function Np(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ui(e)?"-0":e}}function Op(t){return{integerValue:""+t}}function nT(t,e){return VI(e)?Op(e):Np(t,e)}/**
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
 */class No{constructor(){this._=void 0}}function rT(t,e,n){return t instanceof _s?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&fl(i)&&(i=pl(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof ys?Mp(t,e):t instanceof vs?Lp(t,e):function(s,i){const o=xp(s,i),a=_h(o)+_h(s.Ie);return rc(o)&&rc(s.Ie)?Op(a):Np(s.serializer,a)}(t,e)}function sT(t,e,n){return t instanceof ys?Mp(t,e):t instanceof vs?Lp(t,e):n}function xp(t,e){return t instanceof $i?function(r){return rc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class _s extends No{}class ys extends No{constructor(e){super(),this.elements=e}}function Mp(t,e){const n=Fp(e);for(const r of t.elements)n.some(s=>Ct(s,r))||n.push(r);return{arrayValue:{values:n}}}class vs extends No{constructor(e){super(),this.elements=e}}function Lp(t,e){let n=Fp(e);for(const r of t.elements)n=n.filter(s=>!Ct(s,r));return{arrayValue:{values:n}}}class $i extends No{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function _h(t){return ve(t.integerValue||t.doubleValue)}function Fp(t){return gl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class iT{constructor(e,n){this.field=e,this.transform=n}}function oT(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof ys&&s instanceof ys||r instanceof vs&&s instanceof vs?gr(r.elements,s.elements,Ct):r instanceof $i&&s instanceof $i?Ct(r.Ie,s.Ie):r instanceof _s&&s instanceof _s}(t.transform,e.transform)}class aT{constructor(e,n){this.version=e,this.transformResults=n}}class Bt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Bt}static exists(e){return new Bt(void 0,e)}static updateTime(e){return new Bt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function yi(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Oo{}function Up(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new jp(t.key,Bt.none()):new xs(t.key,t.data,Bt.none());{const n=t.data,r=st.empty();let s=new Oe(Ve.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new $n(t.key,r,new ut(s.toArray()),Bt.none())}}function cT(t,e,n){t instanceof xs?function(s,i,o){const a=s.value.clone(),c=vh(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof $n?function(s,i,o){if(!yi(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=vh(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Bp(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Xr(t,e,n,r){return t instanceof xs?function(i,o,a,c){if(!yi(i.precondition,o))return a;const l=i.value.clone(),u=Eh(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof $n?function(i,o,a,c){if(!yi(i.precondition,o))return a;const l=Eh(i.fieldTransforms,c,o),u=o.data;return u.setAll(Bp(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return yi(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function lT(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=xp(r.transform,s||null);i!=null&&(n===null&&(n=st.empty()),n.set(r.field,i))}return n||null}function yh(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&gr(r,s,(i,o)=>oT(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class xs extends Oo{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class $n extends Oo{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Bp(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function vh(t,e,n){const r=new Map;oe(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,sT(o,a,n[s]))}return r}function Eh(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,rT(i,o,e))}return r}class jp extends Oo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class uT extends Oo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class hT{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&cT(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Xr(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Xr(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Vp();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=Up(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(j.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Q())}isEqual(e){return this.batchId===e.batchId&&gr(this.mutations,e.mutations,(n,r)=>yh(n,r))&&gr(this.baseMutations,e.baseMutations,(n,r)=>yh(n,r))}}class yl{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){oe(e.mutations.length===r.length);let s=function(){return XI}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new yl(e,n,r,s)}}/**
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
 */class dT{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class fT{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ye,Y;function pT(t){switch(t){default:return M();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function $p(t){if(t===void 0)return bt("GRPC error has no .code"),E.UNKNOWN;switch(t){case ye.OK:return E.OK;case ye.CANCELLED:return E.CANCELLED;case ye.UNKNOWN:return E.UNKNOWN;case ye.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case ye.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case ye.INTERNAL:return E.INTERNAL;case ye.UNAVAILABLE:return E.UNAVAILABLE;case ye.UNAUTHENTICATED:return E.UNAUTHENTICATED;case ye.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case ye.NOT_FOUND:return E.NOT_FOUND;case ye.ALREADY_EXISTS:return E.ALREADY_EXISTS;case ye.PERMISSION_DENIED:return E.PERMISSION_DENIED;case ye.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case ye.ABORTED:return E.ABORTED;case ye.OUT_OF_RANGE:return E.OUT_OF_RANGE;case ye.UNIMPLEMENTED:return E.UNIMPLEMENTED;case ye.DATA_LOSS:return E.DATA_LOSS;default:return M()}}(Y=ye||(ye={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function gT(){return new TextEncoder}/**
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
 */const mT=new or([4294967295,4294967295],0);function Ih(t){const e=gT().encode(t),n=new gI;return n.update(e),new Uint8Array(n.digest())}function Th(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new or([n,r],0),new or([s,i],0)]}class vl{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new $r(`Invalid padding: ${n}`);if(r<0)throw new $r(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new $r(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new $r(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=or.fromNumber(this.Te)}de(e,n,r){let s=e.add(n.multiply(or.fromNumber(r)));return s.compare(mT)===1&&(s=new or([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Ih(e),[r,s]=Th(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new vl(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=Ih(e),[r,s]=Th(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class $r extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class xo{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ms.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new xo(j.min(),s,new ge(te),$t(),Q())}}class Ms{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ms(r,n,Q(),Q(),Q())}}/**
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
 */class vi{constructor(e,n,r,s){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=s}}class qp{constructor(e,n){this.targetId=e,this.fe=n}}class Hp{constructor(e,n,r=He.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class wh{constructor(){this.ge=0,this.pe=Rh(),this.ye=He.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=Q(),n=Q(),r=Q();return this.pe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:M()}}),new Ms(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=Rh()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,oe(this.ge>=0)}Le(){this.Se=!0,this.we=!0}}class _T{constructor(e){this.Be=e,this.ke=new Map,this.qe=$t(),this.Qe=Ah(),this.Ke=new ge(te)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:M()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.fe.count,s=this.Ye(n);if(s){const i=s.target;if(ic(i))if(r===0){const o=new O(i.path);this.We(n,o,Fe.newNoDocument(o,j.min()))}else oe(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,l)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Mn(r).toUint8Array()}catch(c){if(c instanceof vp)return pr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new vl(o,s,i)}catch(c){return pr(c instanceof $r?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Be.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Be.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&ic(a.target)){const c=new O(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,Fe.newNoDocument(c,e))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=Q();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ye(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(e));const s=new xo(e,n,this.Ke,this.qe,r);return this.qe=$t(),this.Qe=Ah(),this.Ke=new ge(te),s}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.st(e,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new wh,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new Oe(te),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||R("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Be._t(e)}He(e){this.ke.set(e,new wh),this.Be.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Be.getRemoteKeysForTarget(e).has(n)}}function Ah(){return new ge(O.comparator)}function Rh(){return new ge(O.comparator)}const yT={asc:"ASCENDING",desc:"DESCENDING"},vT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ET={and:"AND",or:"OR"};class IT{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ac(t,e){return t.useProto3Json||Co(e)?e:{value:e}}function qi(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zp(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function TT(t,e){return qi(t,e.toTimestamp())}function At(t){return oe(!!t),j.fromTimestamp(function(n){const r=hn(n);return new Te(r.seconds,r.nanos)}(t))}function El(t,e){return cc(t,e).canonicalString()}function cc(t,e){const n=function(s){return new de(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Kp(t){const e=de.fromString(t);return oe(Yp(e)),e}function lc(t,e){return El(t.databaseId,e.path)}function Ea(t,e){const n=Kp(e);if(n.get(1)!==t.databaseId.projectId)throw new V(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new V(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new O(Gp(n))}function Wp(t,e){return El(t.databaseId,e)}function wT(t){const e=Kp(t);return e.length===4?de.emptyPath():Gp(e)}function uc(t){return new de(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Gp(t){return oe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Sh(t,e,n){return{name:lc(t,e),fields:n.value.mapValue.fields}}function AT(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:M()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(oe(u===void 0||typeof u=="string"),He.fromBase64String(u||"")):(oe(u===void 0||u instanceof Uint8Array),He.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?E.UNKNOWN:$p(l.code);return new V(u,l.message||"")}(o);n=new Hp(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ea(t,r.document.name),i=At(r.document.updateTime),o=r.document.createTime?At(r.document.createTime):j.min(),a=new st({mapValue:{fields:r.document.fields}}),c=Fe.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new vi(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ea(t,r.document),i=r.readTime?At(r.readTime):j.min(),o=Fe.newNoDocument(s,i),a=r.removedTargetIds||[];n=new vi([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ea(t,r.document),i=r.removedTargetIds||[];n=new vi([],i,s,null)}else{if(!("filter"in e))return M();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new fT(s,i),a=r.targetId;n=new qp(a,o)}}return n}function RT(t,e){let n;if(e instanceof xs)n={update:Sh(t,e.key,e.value)};else if(e instanceof jp)n={delete:lc(t,e.key)};else if(e instanceof $n)n={update:Sh(t,e.key,e.data),updateMask:OT(e.fieldMask)};else{if(!(e instanceof uT))return M();n={verify:lc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof _s)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ys)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof vs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof $i)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw M()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:TT(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:M()}(t,e.precondition)),n}function ST(t,e){return t&&t.length>0?(oe(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?At(s.updateTime):At(i);return o.isEqual(j.min())&&(o=At(i)),new aT(o,s.transformResults||[])}(n,e))):[]}function PT(t,e){return{documents:[Wp(t,e.path)]}}function bT(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Wp(t,s);const i=function(l){if(l.length!==0)return Jp(Dt.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(l){if(l.length!==0)return l.map(u=>function(p){return{field:Jn(p.field),direction:kT(p.dir)}}(u))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=ac(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),{ut:n,parent:s}}function CT(t){let e=wT(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){oe(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const p=Qp(h);return p instanceof Dt&&wp(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(p=>function(k){return new ji(Yn(k.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(h){let p;return p=typeof h=="object"?h.value:h,Co(p)?null:p}(n.limit));let c=null;n.startAt&&(c=function(h){const p=!!h.before,g=h.values||[];return new Bi(g,p)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const p=!h.before,g=h.values||[];return new Bi(g,p)}(n.endAt)),KI(e,s,o,i,a,"F",c,l)}function DT(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Qp(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Yn(n.unaryFilter.field);return Ie.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Yn(n.unaryFilter.field);return Ie.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Yn(n.unaryFilter.field);return Ie.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Yn(n.unaryFilter.field);return Ie.create(o,"!=",{nullValue:"NULL_VALUE"});default:return M()}}(t):t.fieldFilter!==void 0?function(n){return Ie.create(Yn(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Dt.create(n.compositeFilter.filters.map(r=>Qp(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return M()}}(n.compositeFilter.op))}(t):M()}function kT(t){return yT[t]}function VT(t){return vT[t]}function NT(t){return ET[t]}function Jn(t){return{fieldPath:t.canonicalString()}}function Yn(t){return Ve.fromServerFormat(t.fieldPath)}function Jp(t){return t instanceof Ie?function(n){if(n.op==="=="){if(dh(n.value))return{unaryFilter:{field:Jn(n.field),op:"IS_NAN"}};if(hh(n.value))return{unaryFilter:{field:Jn(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(dh(n.value))return{unaryFilter:{field:Jn(n.field),op:"IS_NOT_NAN"}};if(hh(n.value))return{unaryFilter:{field:Jn(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Jn(n.field),op:VT(n.op),value:n.value}}}(t):t instanceof Dt?function(n){const r=n.getFilters().map(s=>Jp(s));return r.length===1?r[0]:{compositeFilter:{op:NT(n.op),filters:r}}}(t):M()}function OT(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Yp(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class tn{constructor(e,n,r,s,i=j.min(),o=j.min(),a=He.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new tn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new tn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new tn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new tn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class xT{constructor(e){this.ct=e}}function MT(t){const e=CT({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?oc(e,e.limit,"L"):e}/**
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
 */class LT{constructor(){this._n=new FT}addToCollectionParentIndex(e,n){return this._n.add(n),_.resolve()}getCollectionParents(e,n){return _.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return _.resolve()}deleteFieldIndex(e,n){return _.resolve()}deleteAllFieldIndexes(e){return _.resolve()}createTargetIndexes(e,n){return _.resolve()}getDocumentsMatchingTarget(e,n){return _.resolve(null)}getIndexType(e,n){return _.resolve(0)}getFieldIndexes(e,n){return _.resolve([])}getNextCollectionGroupToUpdate(e){return _.resolve(null)}getMinOffset(e,n){return _.resolve(un.min())}getMinOffsetFromCollectionGroup(e,n){return _.resolve(un.min())}updateCollectionGroup(e,n,r){return _.resolve()}updateIndexEntries(e,n){return _.resolve()}}class FT{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Oe(de.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Oe(de.comparator)).toArray()}}/**
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
 */class yr{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new yr(0)}static Ln(){return new yr(-1)}}/**
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
 */class UT{constructor(){this.changes=new Cr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Fe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?_.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class BT{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class jT{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Xr(r.mutation,s,ut.empty(),Te.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Q()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Q()){const s=Sn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=jr();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Sn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Q()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=$t();const o=Yr(),a=function(){return Yr()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof $n)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Xr(u.mutation,l,u.mutation.getFieldMask(),Te.now())):o.set(l.key,ut.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new BT(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Yr();let s=new ge((o,a)=>o-a),i=Q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||ut.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||Q()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Vp();u.forEach(p=>{if(!i.has(p)){const g=Up(n.get(p),r.get(p));g!==null&&h.set(p,g),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return _.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return O.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):WI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):_.resolve(Sn());let a=-1,c=i;return o.next(l=>_.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?_.resolve():this.remoteDocumentCache.getEntry(e,u).next(p=>{c=c.insert(u,p)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,Q())).next(u=>({batchId:a,changes:kp(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new O(n)).next(r=>{let s=jr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=jr();return this.indexManager.getCollectionParents(e,i).next(a=>_.forEach(a,c=>{const l=function(h,p){return new Do(p,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r,s).next(u=>{u.forEach((h,p)=>{o=o.insert(h,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,Fe.newInvalidDocument(u)))});let a=jr();return o.forEach((c,l)=>{const u=i.get(c);u!==void 0&&Xr(u.mutation,l,ut.empty(),Te.now()),Vo(n,l)&&(a=a.insert(c,l))}),a})}}/**
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
 */class $T{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return _.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:At(s.createTime)}}(n)),_.resolve()}getNamedQuery(e,n){return _.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(s){return{name:s.name,query:MT(s.bundledQuery),readTime:At(s.readTime)}}(n)),_.resolve()}}/**
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
 */class qT{constructor(){this.overlays=new ge(O.comparator),this.hr=new Map}getOverlay(e,n){return _.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Sn();return _.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),_.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),_.resolve()}getOverlaysForCollection(e,n,r){const s=Sn(),i=n.length+1,o=new O(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return _.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new ge((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=Sn(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Sn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return _.resolve(a)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new dT(n,r));let i=this.hr.get(n);i===void 0&&(i=Q(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
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
 */class Il{constructor(){this.Pr=new Oe(Re.Ir),this.Tr=new Oe(Re.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new Re(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new Re(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new O(new de([])),r=new Re(n,e),s=new Re(n,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new O(new de([])),r=new Re(n,e),s=new Re(n,e+1);let i=Q();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Re(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Re{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return O.comparator(e.key,n.key)||te(e.pr,n.pr)}static Er(e,n){return te(e.pr,n.pr)||O.comparator(e.key,n.key)}}/**
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
 */class HT{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Oe(Re.Ir)}checkEmpty(e){return _.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new hT(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.wr=this.wr.add(new Re(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return _.resolve(o)}lookupMutationBatch(e,n){return _.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.br(r),i=s<0?0:s;return _.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return _.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return _.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Re(n,0),s=new Re(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const a=this.Sr(o.pr);i.push(a)}),_.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Oe(te);return n.forEach(s=>{const i=new Re(s,0),o=new Re(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],a=>{r=r.add(a.pr)})}),_.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;O.isDocumentKey(i)||(i=i.child(""));const o=new Re(new O(i),0);let a=new Oe(te);return this.wr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.pr)),!0)},o),_.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){oe(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return _.forEach(n.mutations,s=>{const i=new Re(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new Re(n,0),s=this.wr.firstAfterOrEqual(r);return _.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,_.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class zT{constructor(e){this.vr=e,this.docs=function(){return new ge(O.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return _.resolve(r?r.document.mutableCopy():Fe.newInvalidDocument(n))}getEntries(e,n){let r=$t();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Fe.newInvalidDocument(s))}),_.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=$t();const o=n.path,a=new O(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||PI(SI(u),r)<=0||(s.has(u.key)||Vo(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return _.resolve(i)}getAllFromCollectionGroup(e,n,r,s){M()}Fr(e,n){return _.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new KT(this)}getSize(e){return _.resolve(this.size)}}class KT extends UT{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(e,s)):this.ar.removeEntry(r)}),_.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class WT{constructor(e){this.persistence=e,this.Mr=new Cr(n=>ml(n),_l),this.lastRemoteSnapshotVersion=j.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Il,this.targetCount=0,this.Lr=yr.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,s)=>n(s)),_.resolve()}getLastRemoteSnapshotVersion(e){return _.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return _.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),_.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),_.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new yr(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,_.resolve()}updateTargetData(e,n){return this.qn(n),_.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,_.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),_.waitFor(i).next(()=>s)}getTargetCount(e){return _.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return _.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),_.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),_.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),_.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return _.resolve(r)}containsKey(e,n){return _.resolve(this.Nr.containsKey(n))}}/**
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
 */class GT{constructor(e,n){this.Br={},this.overlays={},this.kr=new dl(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new WT(this),this.indexManager=new LT,this.remoteDocumentCache=function(s){return new zT(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new xT(n),this.$r=new $T(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new qT,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new HT(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){R("MemoryPersistence","Starting transaction:",e);const s=new QT(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(e,n){return _.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class QT extends CI{constructor(e){super(),this.currentSequenceNumber=e}}class Tl{constructor(e){this.persistence=e,this.zr=new Il,this.jr=null}static Hr(e){return new Tl(e)}get Jr(){if(this.jr)return this.jr;throw M()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),_.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),_.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),_.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return _.forEach(this.Jr,r=>{const s=O.fromPath(r);return this.Yr(e,s).next(i=>{i||n.removeEntry(s,j.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return _.or([()=>_.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class wl{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(e,n){let r=Q(),s=Q();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new wl(e,n.fromCache,r,s)}}/**
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
 */class JT{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class YT{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Jy()?8:Rn.v(Ee())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ji(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new JT;return this.Ji(e,n,o).next(a=>{if(i.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>i.result)}Yi(e,n,r,s){return r.documentReadCount<this.Wi?(Lr()<=J.DEBUG&&R("QueryEngine","SDK will not create cache indexes for query:",Qn(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),_.resolve()):(Lr()<=J.DEBUG&&R("QueryEngine","Query:",Qn(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(Lr()<=J.DEBUG&&R("QueryEngine","The SDK decides to create cache indexes for query:",Qn(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,wt(n))):_.resolve())}ji(e,n){if(mh(n))return _.resolve(null);let r=wt(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=oc(n,null,"F"),r=wt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Q(...i);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Zi(n,a);return this.Xi(n,l,o,c.readTime)?this.ji(e,oc(n,null,"F")):this.es(e,l,n,c)}))})))}Hi(e,n,r,s){return mh(n)||s.isEqual(j.min())?_.resolve(null):this.zi.getDocuments(e,r).next(i=>{const o=this.Zi(n,i);return this.Xi(n,o,r,s)?_.resolve(null):(Lr()<=J.DEBUG&&R("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Qn(n)),this.es(e,o,n,RI(s,-1)).next(a=>a))})}Zi(e,n){let r=new Oe(Cp(e));return n.forEach((s,i)=>{Vo(e,i)&&(r=r.add(i))}),r}Xi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(e,n,r){return Lr()<=J.DEBUG&&R("QueryEngine","Using full collection scan to execute query:",Qn(n)),this.zi.getDocumentsMatchingQuery(e,n,un.min(),r)}es(e,n,r,s){return this.zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class XT{constructor(e,n,r,s){this.persistence=e,this.ts=n,this.serializer=s,this.ns=new ge(te),this.rs=new Cr(i=>ml(i),_l),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new jT(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function ZT(t,e,n,r){return new XT(t,e,n,r)}async function Xp(t,e){const n=H(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=Q();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({us:l,removedBatchIds:o,addedBatchIds:a}))})})}function ew(t,e){const n=H(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,p=h.keys();let g=_.resolve();return p.forEach(k=>{g=g.next(()=>u.getEntry(c,k)).next(b=>{const C=l.docVersions.get(k);oe(C!==null),b.version.compareTo(C)<0&&(h.applyToRemoteDocument(b,l),b.isValidDocument()&&(b.setReadTime(l.commitVersion),u.addEntry(b)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=Q();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Zp(t){const e=H(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function tw(t,e){const n=H(t),r=e.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const a=[];e.targetChanges.forEach((u,h)=>{const p=s.get(h);if(!p)return;a.push(n.Qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(i,u.addedDocuments,h)));let g=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?g=g.withResumeToken(He.EMPTY_BYTE_STRING,j.min()).withLastLimboFreeSnapshotVersion(j.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,r)),s=s.insert(h,g),function(b,C,F){return b.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-b.snapshotVersion.toMicroseconds()>=3e8?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0}(p,g,u)&&a.push(n.Qr.updateTargetData(i,g))});let c=$t(),l=Q();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(nw(i,o,e.documentUpdates).next(u=>{c=u.cs,l=u.ls})),!r.isEqual(j.min())){const u=n.Qr.getLastRemoteSnapshotVersion(i).next(h=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return _.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.ns=s,i))}function nw(t,e,n){let r=Q(),s=Q();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=$t();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(j.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):R("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{cs:o,ls:s}})}function rw(t,e){const n=H(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function sw(t,e){const n=H(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,e).next(i=>i?(s=i,_.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new tn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function hc(t,e,n){const r=H(t),s=r.ns.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Os(o))throw o;R("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(s.target)}function Ph(t,e,n){const r=H(t);let s=j.min(),i=Q();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=H(c),p=h.rs.get(u);return p!==void 0?_.resolve(h.ns.get(p)):h.Qr.getTargetData(l,u)}(r,o,wt(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?s:j.min(),n?i:Q())).next(a=>(iw(r,QI(e),a),{documents:a,hs:i})))}function iw(t,e,n){let r=t.ss.get(e)||j.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ss.set(e,r)}class bh{constructor(){this.activeTargetIds=tT()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ow{constructor(){this.no=new bh,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new bh,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class aw{io(e){}shutdown(){}}/**
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
 */class Ch{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){R("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){R("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let oi=null;function Ia(){return oi===null?oi=function(){return 268435456+Math.round(2147483648*Math.random())}():oi++,"0x"+oi.toString(16)}/**
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
 */const cw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class lw{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
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
 */const xe="WebChannelConnection";class uw extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${s}/databases/${i}`,this.yo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get wo(){return!1}So(n,r,s,i,o){const a=Ia(),c=this.bo(n,r.toUriEncodedString());R("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(l,i,o),this.Co(n,c,l,s).then(u=>(R("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw pr("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}vo(n,r,s,i,o,a){return this.So(n,r,s,i,o)}Do(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Pr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}bo(n,r){const s=cw[n];return`${this.fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,r,s){const i=Ia();return new Promise((o,a)=>{const c=new pI;c.setWithCredentials(!0),c.listenOnce(dI.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case va.NO_ERROR:const u=c.getResponseJson();R(xe,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case va.TIMEOUT:R(xe,`RPC '${e}' ${i} timed out`),a(new V(E.DEADLINE_EXCEEDED,"Request time out"));break;case va.HTTP_ERROR:const h=c.getStatus();if(R(xe,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let p=c.getResponseJson();Array.isArray(p)&&(p=p[0]);const g=p==null?void 0:p.error;if(g&&g.status&&g.message){const k=function(C){const F=C.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(F)>=0?F:E.UNKNOWN}(g.status);a(new V(k,g.message))}else a(new V(E.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new V(E.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{R(xe,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);R(xe,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}Fo(e,n,r){const s=Ia(),i=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=uI(),a=hI(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");R(xe,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let p=!1,g=!1;const k=new lw({lo:C=>{g?R(xe,`Not sending because RPC '${e}' stream ${s} is closed:`,C):(p||(R(xe,`Opening RPC '${e}' stream ${s} transport.`),h.open(),p=!0),R(xe,`RPC '${e}' stream ${s} sending:`,C),h.send(C))},ho:()=>h.close()}),b=(C,F,Z)=>{C.listen(F,U=>{try{Z(U)}catch(ee){setTimeout(()=>{throw ee},0)}})};return b(h,ri.EventType.OPEN,()=>{g||R(xe,`RPC '${e}' stream ${s} transport opened.`)}),b(h,ri.EventType.CLOSE,()=>{g||(g=!0,R(xe,`RPC '${e}' stream ${s} transport closed`),k.Vo())}),b(h,ri.EventType.ERROR,C=>{g||(g=!0,pr(xe,`RPC '${e}' stream ${s} transport errored:`,C),k.Vo(new V(E.UNAVAILABLE,"The operation could not be completed")))}),b(h,ri.EventType.MESSAGE,C=>{var F;if(!g){const Z=C.data[0];oe(!!Z);const U=Z,ee=U.error||((F=U[0])===null||F===void 0?void 0:F.error);if(ee){R(xe,`RPC '${e}' stream ${s} received error:`,ee);const _e=ee.status;let z=function(Vt){const nt=ye[Vt];if(nt!==void 0)return $p(nt)}(_e),be=ee.message;z===void 0&&(z=E.INTERNAL,be="Unknown error status: "+_e+" with message "+ee.message),g=!0,k.Vo(new V(z,be)),h.close()}else R(xe,`RPC '${e}' stream ${s} received:`,Z),k.mo(Z)}}),b(a,fI.STAT_EVENT,C=>{C.stat===ih.PROXY?R(xe,`RPC '${e}' stream ${s} detected buffering proxy`):C.stat===ih.NOPROXY&&R(xe,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.Ro()},0),k}}function Ta(){return typeof document<"u"?document:null}/**
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
 */function Mo(t){return new IT(t,!0)}/**
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
 */class eg{constructor(e,n,r=1e3,s=1.5,i=6e4){this.oi=e,this.timerId=n,this.Mo=r,this.xo=s,this.Oo=i,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Bo),s=Math.max(0,n-r);s>0&&R("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
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
 */class tg{constructor(e,n,r,s,i,o,a,c){this.oi=e,this.$o=r,this.Uo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new eg(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(bt(n.toString()),bt("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Wo===n&&this.o_(r,s)},r=>{e(()=>{const s=new V(E.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(s)})})}o_(e,n){const r=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(s=>{r(()=>this.__(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return R("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():(R("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class hw extends tg{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}a_(e,n){return this.connection.Fo("Listen",e,n)}onMessage(e){this.jo.reset();const n=AT(this.serializer,e),r=function(i){if(!("targetChange"in i))return j.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?j.min():o.readTime?At(o.readTime):j.min()}(e);return this.listener.u_(n,r)}c_(e){const n={};n.database=uc(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=ic(c)?{documents:PT(i,c)}:{query:bT(i,c).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=zp(i,o.resumeToken);const l=ac(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(j.min())>0){a.readTime=qi(i,o.snapshotVersion.toTimestamp());const l=ac(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=DT(this.serializer,e);r&&(n.labels=r),this.t_(n)}l_(e){const n={};n.database=uc(this.serializer),n.removeTarget=e,this.t_(n)}}class dw extends tg{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,n){return this.connection.Fo("Write",e,n)}onMessage(e){if(oe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const n=ST(e.writeResults,e.commitTime),r=At(e.commitTime);return this.listener.T_(r,n)}return oe(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=uc(this.serializer),this.t_(e)}I_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>RT(this.serializer,r))};this.t_(n)}}/**
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
 */class fw extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.A_=!1}R_(){if(this.A_)throw new V(E.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(e,cc(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new V(E.UNKNOWN,i.toString())})}vo(e,n,r,s,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(e,cc(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new V(E.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class pw{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(bt(n),this.g_=!1):R("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
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
 */class gw{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io(o=>{r.enqueueAndForget(async()=>{qn(this)&&(R("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=H(c);l.v_.add(4),await Ls(l),l.x_.set("Unknown"),l.v_.delete(4),await Lo(l)}(this))})}),this.x_=new pw(r,s)}}async function Lo(t){if(qn(t))for(const e of t.F_)await e(!0)}async function Ls(t){for(const e of t.F_)await e(!1)}function ng(t,e){const n=H(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),Pl(n)?Sl(n):Dr(n).Jo()&&Rl(n,e))}function Al(t,e){const n=H(t),r=Dr(n);n.C_.delete(e),r.Jo()&&rg(n,e),n.C_.size===0&&(r.Jo()?r.Xo():qn(n)&&n.x_.set("Unknown"))}function Rl(t,e){if(t.O_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(j.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Dr(t).c_(e)}function rg(t,e){t.O_.Oe(e),Dr(t).l_(e)}function Sl(t){t.O_=new _T({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.C_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Dr(t).start(),t.x_.p_()}function Pl(t){return qn(t)&&!Dr(t).Ho()&&t.C_.size>0}function qn(t){return H(t).v_.size===0}function sg(t){t.O_=void 0}async function mw(t){t.C_.forEach((e,n)=>{Rl(t,e)})}async function _w(t,e){sg(t),Pl(t)?(t.x_.S_(e),Sl(t)):t.x_.set("Unknown")}async function yw(t,e,n){if(t.x_.set("Online"),e instanceof Hp&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.C_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.C_.delete(a),s.O_.removeTarget(a))}(t,e)}catch(r){R("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Hi(t,r)}else if(e instanceof vi?t.O_.$e(e):e instanceof qp?t.O_.Je(e):t.O_.Ge(e),!n.isEqual(j.min()))try{const r=await Zp(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.O_.it(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.C_.get(l);u&&i.C_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.C_.get(c);if(!u)return;i.C_.set(c,u.withResumeToken(He.EMPTY_BYTE_STRING,u.snapshotVersion)),rg(i,c);const h=new tn(u.target,c,l,u.sequenceNumber);Rl(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){R("RemoteStore","Failed to raise snapshot:",r),await Hi(t,r)}}async function Hi(t,e,n){if(!Os(e))throw e;t.v_.add(1),await Ls(t),t.x_.set("Offline"),n||(n=()=>Zp(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{R("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await Lo(t)})}function ig(t,e){return e().catch(n=>Hi(t,n,e))}async function Fo(t){const e=H(t),n=dn(e);let r=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;vw(e);)try{const s=await rw(e.localStore,r);if(s===null){e.D_.length===0&&n.Xo();break}r=s.batchId,Ew(e,s)}catch(s){await Hi(e,s)}og(e)&&ag(e)}function vw(t){return qn(t)&&t.D_.length<10}function Ew(t,e){t.D_.push(e);const n=dn(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function og(t){return qn(t)&&!dn(t).Ho()&&t.D_.length>0}function ag(t){dn(t).start()}async function Iw(t){dn(t).d_()}async function Tw(t){const e=dn(t);for(const n of t.D_)e.I_(n.mutations)}async function ww(t,e,n){const r=t.D_.shift(),s=yl.from(r,e,n);await ig(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Fo(t)}async function Aw(t,e){e&&dn(t).P_&&await async function(r,s){if(function(o){return pT(o)&&o!==E.ABORTED}(s.code)){const i=r.D_.shift();dn(r).Zo(),await ig(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Fo(r)}}(t,e),og(t)&&ag(t)}async function Dh(t,e){const n=H(t);n.asyncQueue.verifyOperationInProgress(),R("RemoteStore","RemoteStore received new credentials");const r=qn(n);n.v_.add(3),await Ls(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await Lo(n)}async function Rw(t,e){const n=H(t);e?(n.v_.delete(2),await Lo(n)):e||(n.v_.add(2),await Ls(n),n.x_.set("Unknown"))}function Dr(t){return t.N_||(t.N_=function(n,r,s){const i=H(n);return i.R_(),new hw(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:mw.bind(null,t),To:_w.bind(null,t),u_:yw.bind(null,t)}),t.F_.push(async e=>{e?(t.N_.Zo(),Pl(t)?Sl(t):t.x_.set("Unknown")):(await t.N_.stop(),sg(t))})),t.N_}function dn(t){return t.L_||(t.L_=function(n,r,s){const i=H(n);return i.R_(),new dw(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:Iw.bind(null,t),To:Aw.bind(null,t),E_:Tw.bind(null,t),T_:ww.bind(null,t)}),t.F_.push(async e=>{e?(t.L_.Zo(),await Fo(t)):(await t.L_.stop(),t.D_.length>0&&(R("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))})),t.L_}/**
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
 */class bl{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Ut,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new bl(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Cl(t,e){if(bt("AsyncQueue",`${e}: ${t}`),Os(t))return new V(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ar{constructor(e){this.comparator=e?(n,r)=>e(n,r)||O.comparator(n.key,r.key):(n,r)=>O.comparator(n.key,r.key),this.keyedMap=jr(),this.sortedSet=new ge(this.comparator)}static emptySet(e){return new ar(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ar)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ar;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class kh{constructor(){this.B_=new ge(O.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):M():this.B_=this.B_.insert(n,e)}k_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class vr{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new vr(e,n,ar.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ko(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Sw{constructor(){this.q_=void 0,this.Q_=[]}K_(){return this.Q_.some(e=>e.U_())}}class Pw{constructor(){this.queries=new Cr(e=>bp(e),ko),this.onlineState="Unknown",this.W_=new Set}}async function bw(t,e){const n=H(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.K_()&&e.U_()&&(r=2):(i=new Sw,r=e.U_()?0:1);try{switch(r){case 0:i.q_=await n.onListen(s,!0);break;case 1:i.q_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=Cl(o,`Initialization of query '${Qn(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.Q_.push(e),e.G_(n.onlineState),i.q_&&e.z_(i.q_)&&Dl(n)}async function Cw(t,e){const n=H(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Q_.indexOf(e);o>=0&&(i.Q_.splice(o,1),i.Q_.length===0?s=e.U_()?0:1:!i.K_()&&e.U_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Dw(t,e){const n=H(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.Q_)a.z_(s)&&(r=!0);o.q_=s}}r&&Dl(n)}function kw(t,e,n){const r=H(t),s=r.queries.get(e);if(s)for(const i of s.Q_)i.onError(n);r.queries.delete(e)}function Dl(t){t.W_.forEach(e=>{e.next()})}var dc,Vh;(Vh=dc||(dc={})).j_="default",Vh.Cache="cache";class Vw{constructor(e,n,r){this.query=e,this.H_=n,this.J_=!1,this.Y_=null,this.onlineState="Unknown",this.options=r||{}}z_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new vr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.J_?this.Z_(e)&&(this.H_.next(e),n=!0):this.X_(e,this.onlineState)&&(this.ea(e),n=!0),this.Y_=e,n}onError(e){this.H_.error(e)}G_(e){this.onlineState=e;let n=!1;return this.Y_&&!this.J_&&this.X_(this.Y_,e)&&(this.ea(this.Y_),n=!0),n}X_(e,n){if(!e.fromCache||!this.U_())return!0;const r=n!=="Offline";return(!this.options.ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Z_(e){if(e.docChanges.length>0)return!0;const n=this.Y_&&this.Y_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ea(e){e=vr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.J_=!0,this.H_.next(e)}U_(){return this.options.source!==dc.Cache}}/**
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
 */class cg{constructor(e){this.key=e}}class lg{constructor(e){this.key=e}}class Nw{constructor(e,n){this.query=e,this.ua=n,this.ca=null,this.hasCachedResults=!1,this.current=!1,this.la=Q(),this.mutatedKeys=Q(),this.ha=Cp(e),this.Pa=new ar(this.ha)}get Ia(){return this.ua}Ta(e,n){const r=n?n.Ea:new kh,s=n?n.Pa:this.Pa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const p=s.get(u),g=Vo(this.query,h)?h:null,k=!!p&&this.mutatedKeys.has(p.key),b=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let C=!1;p&&g?p.data.isEqual(g.data)?k!==b&&(r.track({type:3,doc:g}),C=!0):this.da(p,g)||(r.track({type:2,doc:g}),C=!0,(c&&this.ha(g,c)>0||l&&this.ha(g,l)<0)&&(a=!0)):!p&&g?(r.track({type:0,doc:g}),C=!0):p&&!g&&(r.track({type:1,doc:p}),C=!0,(c||l)&&(a=!0)),C&&(g?(o=o.add(g),i=b?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{Pa:o,Ea:r,Xi:a,mutatedKeys:i}}da(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Pa;this.Pa=e.Pa,this.mutatedKeys=e.mutatedKeys;const o=e.Ea.k_();o.sort((u,h)=>function(g,k){const b=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M()}};return b(g)-b(k)}(u.type,h.type)||this.ha(u.doc,h.doc)),this.Aa(r),s=s!=null&&s;const a=n&&!s?this.Ra():[],c=this.la.size===0&&this.current&&!s?1:0,l=c!==this.ca;return this.ca=c,o.length!==0||l?{snapshot:new vr(this.query,e.Pa,i,o,e.mutatedKeys,c===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Va:a}:{Va:a}}G_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Pa:this.Pa,Ea:new kh,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Va:[]}}ma(e){return!this.ua.has(e)&&!!this.Pa.has(e)&&!this.Pa.get(e).hasLocalMutations}Aa(e){e&&(e.addedDocuments.forEach(n=>this.ua=this.ua.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ua=this.ua.delete(n)),this.current=e.current)}Ra(){if(!this.current)return[];const e=this.la;this.la=Q(),this.Pa.forEach(r=>{this.ma(r.key)&&(this.la=this.la.add(r.key))});const n=[];return e.forEach(r=>{this.la.has(r)||n.push(new lg(r))}),this.la.forEach(r=>{e.has(r)||n.push(new cg(r))}),n}fa(e){this.ua=e.hs,this.la=Q();const n=this.Ta(e.documents);return this.applyChanges(n,!0)}ga(){return vr.fromInitialDocuments(this.query,this.Pa,this.mutatedKeys,this.ca===0,this.hasCachedResults)}}class Ow{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class xw{constructor(e){this.key=e,this.pa=!1}}class Mw{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.ya={},this.wa=new Cr(a=>bp(a),ko),this.Sa=new Map,this.ba=new Set,this.Da=new ge(O.comparator),this.Ca=new Map,this.va=new Il,this.Fa={},this.Ma=new Map,this.xa=yr.Ln(),this.onlineState="Unknown",this.Oa=void 0}get isPrimaryClient(){return this.Oa===!0}}async function Lw(t,e,n=!0){const r=gg(t);let s;const i=r.wa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ga()):s=await ug(r,e,n,!0),s}async function Fw(t,e){const n=gg(t);await ug(n,e,!0,!1)}async function ug(t,e,n,r){const s=await sw(t.localStore,wt(e)),i=s.targetId,o=n?t.sharedClientState.addLocalQueryTarget(i):"not-current";let a;return r&&(a=await Uw(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&ng(t.remoteStore,s),a}async function Uw(t,e,n,r,s){t.Na=(h,p,g)=>async function(b,C,F,Z){let U=C.view.Ta(F);U.Xi&&(U=await Ph(b.localStore,C.query,!1).then(({documents:be})=>C.view.Ta(be,U)));const ee=Z&&Z.targetChanges.get(C.targetId),_e=Z&&Z.targetMismatches.get(C.targetId)!=null,z=C.view.applyChanges(U,b.isPrimaryClient,ee,_e);return Oh(b,C.targetId,z.Va),z.snapshot}(t,h,p,g);const i=await Ph(t.localStore,e,!0),o=new Nw(e,i.hs),a=o.Ta(i.documents),c=Ms.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);Oh(t,n,l.Va);const u=new Ow(e,n,o);return t.wa.set(e,u),t.Sa.has(n)?t.Sa.get(n).push(e):t.Sa.set(n,[e]),l.snapshot}async function Bw(t,e,n){const r=H(t),s=r.wa.get(e),i=r.Sa.get(s.targetId);if(i.length>1)return r.Sa.set(s.targetId,i.filter(o=>!ko(o,e))),void r.wa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await hc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Al(r.remoteStore,s.targetId),fc(r,s.targetId)}).catch(Ns)):(fc(r,s.targetId),await hc(r.localStore,s.targetId,!0))}async function jw(t,e){const n=H(t),r=n.wa.get(e),s=n.Sa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Al(n.remoteStore,r.targetId))}async function $w(t,e,n){const r=Qw(t);try{const s=await function(o,a){const c=H(o),l=Te.now(),u=a.reduce((g,k)=>g.add(k.key),Q());let h,p;return c.persistence.runTransaction("Locally write mutations","readwrite",g=>{let k=$t(),b=Q();return c.os.getEntries(g,u).next(C=>{k=C,k.forEach((F,Z)=>{Z.isValidDocument()||(b=b.add(F))})}).next(()=>c.localDocuments.getOverlayedDocuments(g,k)).next(C=>{h=C;const F=[];for(const Z of a){const U=lT(Z,h.get(Z.key).overlayedDocument);U!=null&&F.push(new $n(Z.key,U,Ep(U.value.mapValue),Bt.exists(!0)))}return c.mutationQueue.addMutationBatch(g,l,F,a)}).next(C=>{p=C;const F=C.applyToLocalDocumentSet(h,b);return c.documentOverlayCache.saveOverlays(g,C.batchId,F)})}).then(()=>({batchId:p.batchId,changes:kp(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.Fa[o.currentUser.toKey()];l||(l=new ge(te)),l=l.insert(a,c),o.Fa[o.currentUser.toKey()]=l}(r,s.batchId,n),await Fs(r,s.changes),await Fo(r.remoteStore)}catch(s){const i=Cl(s,"Failed to persist write");n.reject(i)}}async function hg(t,e){const n=H(t);try{const r=await tw(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Ca.get(i);o&&(oe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.pa=!0:s.modifiedDocuments.size>0?oe(o.pa):s.removedDocuments.size>0&&(oe(o.pa),o.pa=!1))}),await Fs(n,r,e)}catch(r){await Ns(r)}}function Nh(t,e,n){const r=H(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.wa.forEach((i,o)=>{const a=o.view.G_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=H(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const p of h.Q_)p.G_(a)&&(l=!0)}),l&&Dl(c)}(r.eventManager,e),s.length&&r.ya.u_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function qw(t,e,n){const r=H(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ca.get(e),i=s&&s.key;if(i){let o=new ge(O.comparator);o=o.insert(i,Fe.newNoDocument(i,j.min()));const a=Q().add(i),c=new xo(j.min(),new Map,new ge(te),o,a);await hg(r,c),r.Da=r.Da.remove(i),r.Ca.delete(e),kl(r)}else await hc(r.localStore,e,!1).then(()=>fc(r,e,n)).catch(Ns)}async function Hw(t,e){const n=H(t),r=e.batch.batchId;try{const s=await ew(n.localStore,e);fg(n,r,null),dg(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Fs(n,s)}catch(s){await Ns(s)}}async function zw(t,e,n){const r=H(t);try{const s=await function(o,a){const c=H(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(oe(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);fg(r,e,n),dg(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Fs(r,s)}catch(s){await Ns(s)}}function dg(t,e){(t.Ma.get(e)||[]).forEach(n=>{n.resolve()}),t.Ma.delete(e)}function fg(t,e,n){const r=H(t);let s=r.Fa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Fa[r.currentUser.toKey()]=s}}function fc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Sa.get(e))t.wa.delete(r),n&&t.ya.La(r,n);t.Sa.delete(e),t.isPrimaryClient&&t.va.Vr(e).forEach(r=>{t.va.containsKey(r)||pg(t,r)})}function pg(t,e){t.ba.delete(e.path.canonicalString());const n=t.Da.get(e);n!==null&&(Al(t.remoteStore,n),t.Da=t.Da.remove(e),t.Ca.delete(n),kl(t))}function Oh(t,e,n){for(const r of n)r instanceof cg?(t.va.addReference(r.key,e),Kw(t,r)):r instanceof lg?(R("SyncEngine","Document no longer in limbo: "+r.key),t.va.removeReference(r.key,e),t.va.containsKey(r.key)||pg(t,r.key)):M()}function Kw(t,e){const n=e.key,r=n.path.canonicalString();t.Da.get(n)||t.ba.has(r)||(R("SyncEngine","New document in limbo: "+n),t.ba.add(r),kl(t))}function kl(t){for(;t.ba.size>0&&t.Da.size<t.maxConcurrentLimboResolutions;){const e=t.ba.values().next().value;t.ba.delete(e);const n=new O(de.fromString(e)),r=t.xa.next();t.Ca.set(r,new xw(n)),t.Da=t.Da.insert(n,r),ng(t.remoteStore,new tn(wt(Pp(n.path)),r,"TargetPurposeLimboResolution",dl._e))}}async function Fs(t,e,n){const r=H(t),s=[],i=[],o=[];r.wa.isEmpty()||(r.wa.forEach((a,c)=>{o.push(r.Na(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=wl.Ki(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.ya.u_(s),await async function(c,l){const u=H(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>_.forEach(l,p=>_.forEach(p.qi,g=>u.persistence.referenceDelegate.addReference(h,p.targetId,g)).next(()=>_.forEach(p.Qi,g=>u.persistence.referenceDelegate.removeReference(h,p.targetId,g)))))}catch(h){if(!Os(h))throw h;R("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const p=h.targetId;if(!h.fromCache){const g=u.ns.get(p),k=g.snapshotVersion,b=g.withLastLimboFreeSnapshotVersion(k);u.ns=u.ns.insert(p,b)}}}(r.localStore,i))}async function Ww(t,e){const n=H(t);if(!n.currentUser.isEqual(e)){R("SyncEngine","User change. New user:",e.toKey());const r=await Xp(n.localStore,e);n.currentUser=e,function(i,o){i.Ma.forEach(a=>{a.forEach(c=>{c.reject(new V(E.CANCELLED,o))})}),i.Ma.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Fs(n,r.us)}}function Gw(t,e){const n=H(t),r=n.Ca.get(e);if(r&&r.pa)return Q().add(r.key);{let s=Q();const i=n.Sa.get(e);if(!i)return s;for(const o of i){const a=n.wa.get(o);s=s.unionWith(a.view.Ia)}return s}}function gg(t){const e=H(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=hg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Gw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=qw.bind(null,e),e.ya.u_=Dw.bind(null,e.eventManager),e.ya.La=kw.bind(null,e.eventManager),e}function Qw(t){const e=H(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Hw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zw.bind(null,e),e}class xh{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Mo(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return ZT(this.persistence,new YT,e.initialUser,this.serializer)}createPersistence(e){return new GT(Tl.Hr,this.serializer)}createSharedClientState(e){return new ow}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Jw{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Nh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ww.bind(null,this.syncEngine),await Rw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Pw}()}createDatastore(e){const n=Mo(e.databaseInfo.databaseId),r=function(i){return new uw(i)}(e.databaseInfo);return function(i,o,a,c){return new fw(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new gw(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Nh(this.syncEngine,n,0),function(){return Ch.D()?new Ch:new aw}())}createSyncEngine(e,n){return function(s,i,o,a,c,l,u){const h=new Mw(s,i,o,a,c,l);return u&&(h.Oa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const s=H(r);R("RemoteStore","RemoteStore shutting down."),s.v_.add(5),await Ls(s),s.M_.shutdown(),s.x_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 */class Yw{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.qa(this.observer.next,e)}error(e){this.observer.error?this.qa(this.observer.error,e):bt("Uncaught Error in snapshot listener:",e.toString())}Qa(){this.muted=!0}qa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class Xw{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Le.UNAUTHENTICATED,this.clientId=_p.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{R("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(R("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new V(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ut;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Cl(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function wa(t,e){t.asyncQueue.verifyOperationInProgress(),R("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Xp(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Mh(t,e){t.asyncQueue.verifyOperationInProgress();const n=await e0(t);R("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Dh(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Dh(e.remoteStore,s)),t._onlineComponents=e}function Zw(t){return t.name==="FirebaseError"?t.code===E.FAILED_PRECONDITION||t.code===E.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function e0(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){R("FirestoreClient","Using user provided OfflineComponentProvider");try{await wa(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Zw(n))throw n;pr("Error using user provided cache. Falling back to memory cache: "+n),await wa(t,new xh)}}else R("FirestoreClient","Using default OfflineComponentProvider"),await wa(t,new xh);return t._offlineComponents}async function mg(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(R("FirestoreClient","Using user provided OnlineComponentProvider"),await Mh(t,t._uninitializedComponentsProvider._online)):(R("FirestoreClient","Using default OnlineComponentProvider"),await Mh(t,new Jw))),t._onlineComponents}function t0(t){return mg(t).then(e=>e.syncEngine)}async function n0(t){const e=await mg(t),n=e.eventManager;return n.onListen=Lw.bind(null,e.syncEngine),n.onUnlisten=Bw.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Fw.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=jw.bind(null,e.syncEngine),n}function r0(t,e,n={}){const r=new Ut;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new Yw({next:p=>{o.enqueueAndForget(()=>Cw(i,h)),p.fromCache&&c.source==="server"?l.reject(new V(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(p)},error:p=>l.reject(p)}),h=new Vw(a,u,{includeMetadataChanges:!0,ta:!0});return bw(i,h)}(await n0(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function _g(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Lh=new Map;/**
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
 */function yg(t,e,n){if(!n)throw new V(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function s0(t,e,n,r){if(e===!0&&r===!0)throw new V(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Fh(t){if(!O.isDocumentKey(t))throw new V(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Uh(t){if(O.isDocumentKey(t))throw new V(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Vl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":M()}function zi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new V(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Vl(t);throw new V(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Bh{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new V(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new V(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}s0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=_g((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new V(E.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new V(E.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new V(E.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Uo{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Bh({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new V(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new V(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Bh(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new mI;switch(r.type){case"firstParty":return new EI(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new V(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Lh.get(n);r&&(R("ComponentProvider","Removing Datastore"),Lh.delete(n),r.terminate())}(this),Promise.resolve()}}function i0(t,e,n,r={}){var s;const i=(t=zi(t,Uo))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&pr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=Le.MOCK_USER;else{a=Hy(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new V(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Le(l)}t._authCredentials=new _I(new mp(a,c))}}/**
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
 */class Bo{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Bo(this.firestore,e,this._query)}}class dt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new cn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new dt(this.firestore,e,this._key)}}class cn extends Bo{constructor(e,n,r){super(e,n,Pp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new dt(this.firestore,null,new O(e))}withConverter(e){return new cn(this.firestore,e,this._path)}}function Xn(t,e,...n){if(t=ot(t),yg("collection","path",e),t instanceof Uo){const r=de.fromString(e,...n);return Uh(r),new cn(t,null,r)}{if(!(t instanceof dt||t instanceof cn))throw new V(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(de.fromString(e,...n));return Uh(r),new cn(t.firestore,null,r)}}function o0(t,e,...n){if(t=ot(t),arguments.length===1&&(e=_p.newId()),yg("doc","path",e),t instanceof Uo){const r=de.fromString(e,...n);return Fh(r),new dt(t,null,new O(r))}{if(!(t instanceof dt||t instanceof cn))throw new V(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(de.fromString(e,...n));return Fh(r),new dt(t.firestore,t instanceof cn?t.converter:null,new O(r))}}/**
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
 */class a0{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new eg(this,"async_queue_retry"),this.cu=()=>{const n=Ta();n&&R("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=Ta();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.lu(),this.hu(e)}enterRestrictedMode(e){if(!this.iu){this.iu=!0,this.au=e||!1;const n=Ta();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.cu)}}enqueue(e){if(this.lu(),this.iu)return new Promise(()=>{});const n=new Ut;return this.hu(()=>this.iu&&this.au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ru.push(e),this.Pu()))}async Pu(){if(this.ru.length!==0){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(e){if(!Os(e))throw e;R("AsyncQueue","Operation failed with retryable error: "+e)}this.ru.length>0&&this.jo.qo(()=>this.Pu())}}hu(e){const n=this.nu.then(()=>(this._u=!0,e().catch(r=>{this.ou=r,this._u=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw bt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this._u=!1,r))));return this.nu=n,n}enqueueAfterDelay(e,n,r){this.lu(),this.uu.indexOf(e)>-1&&(n=0);const s=bl.createAndSchedule(this,e,n,r,i=>this.Iu(i));return this.su.push(s),s}lu(){this.ou&&M()}verifyOperationInProgress(){}async Tu(){let e;do e=this.nu,await e;while(e!==this.nu)}Eu(e){for(const n of this.su)if(n.timerId===e)return!0;return!1}du(e){return this.Tu().then(()=>{this.su.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.su)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tu()})}Au(e){this.uu.push(e)}Iu(e){const n=this.su.indexOf(e);this.su.splice(n,1)}}class Nl extends Uo{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new a0}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Eg(this),this._firestoreClient.terminate()}}function Zn(t,e){const n=typeof t=="object"?t:uf(),r=typeof t=="string"?t:e||"(default)",s=Bc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=$y("firestore");i&&i0(s,...i)}return s}function vg(t){return t._firestoreClient||Eg(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Eg(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,l,u){return new OI(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,_g(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new Xw(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class Er{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Er(He.fromBase64String(e))}catch(n){throw new V(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Er(He.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ol{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new V(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ve(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class xl{constructor(e){this._methodName=e}}/**
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
 */class Ml{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new V(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new V(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return te(this._lat,e._lat)||te(this._long,e._long)}}/**
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
 */const c0=/^__.*__$/;class l0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new $n(e,this.data,this.fieldMask,n,this.fieldTransforms):new xs(e,this.data,n,this.fieldTransforms)}}function Ig(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M()}}class Ll{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ru(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}mu(e){return new Ll(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}fu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.mu({path:r,gu:!1});return s.pu(e),s}yu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.mu({path:r,gu:!1});return s.Ru(),s}wu(e){return this.mu({path:void 0,gu:!0})}Su(e){return Ki(e,this.settings.methodName,this.settings.bu||!1,this.path,this.settings.Du)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ru(){if(this.path)for(let e=0;e<this.path.length;e++)this.pu(this.path.get(e))}pu(e){if(e.length===0)throw this.Su("Document fields must not be empty");if(Ig(this.Vu)&&c0.test(e))throw this.Su('Document fields cannot begin and end with "__"')}}class u0{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Mo(e)}Cu(e,n,r,s=!1){return new Ll({Vu:e,methodName:n,Du:r,path:Ve.emptyPath(),gu:!1,bu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function h0(t){const e=t._freezeSettings(),n=Mo(t._databaseId);return new u0(t._databaseId,!!e.ignoreUndefinedProperties,n)}function d0(t,e,n,r,s,i={}){const o=t.Cu(i.merge||i.mergeFields?2:0,e,n,s);Rg("Data must be an object, but it was:",o,r);const a=wg(r,o);let c,l;if(i.merge)c=new ut(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const p=f0(e,h,n);if(!o.contains(p))throw new V(E.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);g0(u,p)||u.push(p)}c=new ut(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new l0(new st(a),c,l)}class Fl extends xl{_toFieldTransform(e){return new iT(e.path,new _s)}isEqual(e){return e instanceof Fl}}function Tg(t,e){if(Ag(t=ot(t)))return Rg("Unsupported field value:",e,t),wg(t,e);if(t instanceof xl)return function(r,s){if(!Ig(s.Vu))throw s.Su(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Su(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.gu&&e.Vu!==4)throw e.Su("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=Tg(a,s.wu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=ot(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return nT(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Te.fromDate(r);return{timestampValue:qi(s.serializer,i)}}if(r instanceof Te){const i=new Te(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:qi(s.serializer,i)}}if(r instanceof Ml)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Er)return{bytesValue:zp(s.serializer,r._byteString)};if(r instanceof dt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Su(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:El(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Su(`Unsupported field value: ${Vl(r)}`)}(t,e)}function wg(t,e){const n={};return yp(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):br(t,(r,s)=>{const i=Tg(s,e.fu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Ag(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Te||t instanceof Ml||t instanceof Er||t instanceof dt||t instanceof xl)}function Rg(t,e,n){if(!Ag(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Vl(n);throw r==="an object"?e.Su(t+" a custom object"):e.Su(t+" "+r)}}function f0(t,e,n){if((e=ot(e))instanceof Ol)return e._internalPath;if(typeof e=="string")return Sg(t,e);throw Ki("Field path arguments must be of type string or ",t,!1,void 0,n)}const p0=new RegExp("[~\\*/\\[\\]]");function Sg(t,e,n){if(e.search(p0)>=0)throw Ki(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ol(...e.split("."))._internalPath}catch{throw Ki(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ki(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new V(E.INVALID_ARGUMENT,a+t+c)}function g0(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Pg{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new m0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(bg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class m0 extends Pg{data(){return super.data()}}function bg(t,e){return typeof e=="string"?Sg(t,e):e instanceof Ol?e._internalPath:e._delegate._internalPath}/**
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
 */function _0(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new V(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class y0{convertValue(e,n="none"){switch(Ln(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Mn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw M()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return br(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Ml(ve(e.latitude),ve(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=pl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ps(e));default:return null}}convertTimestamp(e){const n=hn(e);return new Te(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=de.fromString(e);oe(Yp(r));const s=new gs(r.get(1),r.get(3)),i=new O(r.popFirst(5));return s.isEqual(n)||bt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function v0(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class ai{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class E0 extends Pg{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ei(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(bg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ei extends E0{data(e={}){return super.data(e)}}class I0{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ai(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ei(this._firestore,this._userDataWriter,r.key,r,new ai(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new V(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new Ei(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ai(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new Ei(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ai(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:T0(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function T0(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M()}}class w0 extends y0{constructor(e){super(),this.firestore=e}convertBytes(e){return new Er(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new dt(this.firestore,null,n)}}function Aa(t){t=zi(t,Bo);const e=zi(t.firestore,Nl),n=vg(e),r=new w0(e);return _0(t._query),r0(n,t._query).then(s=>new I0(e,r,t,s))}function pc(t,e){const n=zi(t.firestore,Nl),r=o0(t),s=v0(t.converter,e);return A0(n,[d0(h0(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Bt.exists(!1))]).then(()=>r)}function A0(t,e){return function(r,s){const i=new Ut;return r.asyncQueue.enqueueAndForget(async()=>$w(await t0(r),s,i)),i.promise}(vg(t),e)}function jh(){return new Fl("serverTimestamp")}(function(e,n=!0){(function(s){Pr=s})(Ar),dr(new Nn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Nl(new yI(r.getProvider("auth-internal")),new TI(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new V(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gs(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),an(oh,"4.5.0",e),an(oh,"4.5.0","esm2017")})();var R0="firebase",S0="10.9.0";/**
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
 */an(R0,S0,"app");const P0={apiKey:"AIzaSyBEvl4cdZKLPrVEakOSo4LwBv3PmCjd6sA",authDomain:"web2566-9c8e5.firebaseapp.com",projectId:"web2566-9c8e5",storageBucket:"web2566-9c8e5.appspot.com",messagingSenderId:"233722259887",appId:"1:233722259887:web:59cc38f53a689284e4675a",measurementId:"G-PWZCNDCYCP"};lf(P0);const Ul=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},b0={name:"HelloWorld",data(){return{userData:null,checkinData:[],questions:[],newQuestionText:"",userDataVisible:!1,checkinDataVisible:!1,questionVisible:!1}},methods:{async fetchRandomUserData(){try{const t=Zn(),e=await Aa(Xn(t,"students")),n=[];e.forEach(s=>{n.push({id:s.id,stdID:s.data().stdID,email:s.data().email,name:s.data().name})});const r=Math.floor(Math.random()*n.length);this.userData=n[r]}catch(t){console.error("Error fetching random user data:",t)}},async check(){try{if(!this.userData||!this.userData.stdID){console.error("stdID is not defined");return}const t=Zn(),e={stdID:this.userData.stdID,class_date:jh(),room:"SC6601ฺฺB",subject:"SC362202"},n=await pc(Xn(t,"checkin"),e);console.log("Document written with ID: ",n.id),this.collectorData={id:n.id,...e}}catch(t){console.error("Error creating new collector:",t)}},formatTime(t){const e=new Date(t.seconds*1e3),n=("0"+e.getHours()).slice(-2),r=("0"+e.getMinutes()).slice(-2);return`${n}:${r}`},async checkList(){try{const t=Zn(),e=await Aa(Xn(t,"checkin")),n=[];e.forEach(r=>{n.push({id:r.id,...r.data()})}),this.checkinData=n}catch(t){console.error("Error fetching checkin data:",t)}},async addQuestion(){try{const t=Zn(),e={text:this.newQuestionText,createdAt:jh()},n=await pc(Xn(t,"questions"),e);console.log("Document written with ID: ",n.id),this.questions.push({id:n.id,text:e.text,createdAt:e.createdAt,updatedAt:e.createdAt,answers:[]}),this.newQuestionText=""}catch(t){console.error("Error adding question:",t)}},async fetchStudentAnswers(t){try{const e=Zn(),n=await Aa(Xn(e,"answers")),r=[];n.forEach(s=>{r.push({id:s.id,...s.data()})}),this.questions[t].answers=r.filter(s=>s.questionId===this.questions[t].id)}catch(e){console.error("Error fetching answers:",e)}}},formatDate(t){return t.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}},Cg=t=>(Nc("data-v-bc4a071e"),t=t(),Oc(),t),C0={class:"teacher-container"},D0={class:"button-container"},k0={key:0,class:"checkin-data-box"},V0={key:1,class:"checkin-data-container"},N0=Cg(()=>K("h2",null,"รายการการเช็คชื่อ",-1)),O0={class:"checkin-grid"},x0=["onUpdate:modelValue"],M0=["onClick"],L0={key:0},F0=Cg(()=>K("h2",null,"แสดงคำตอบ",-1));function U0(t,e,n,r,s,i){const o=du("v-btn"),a=du("v-card");return ae(),he("div",C0,[K("div",D0,[ke(o,{onClick:i.fetchRandomUserData,class:"custom-button"},{default:Wn(()=>[en("สุ่มเช็คชื่อ")]),_:1},8,["onClick"]),ke(o,{onClick:i.addQuestion,class:"custom-button"},{default:Wn(()=>[en("เพิ่มคำถาม")]),_:1},8,["onClick"]),ke(o,{onClick:i.checkList,class:"custom-button"},{default:Wn(()=>[en("แสดงรายการการเช็คชื่อ")]),_:1},8,["onClick"])]),s.userData?(ae(),he("div",k0,[K("p",null,"ID: "+Me(s.userData.stdID),1),K("p",null,"Email: "+Me(s.userData.email),1),K("p",null,"Name: "+Me(s.userData.name),1),ke(o,{onClick:i.check,class:"custom-button"},{default:Wn(()=>[en("เช็คชื่อ")]),_:1},8,["onClick"])])):_t("",!0),s.checkinData.length?(ae(),he("div",V0,[N0,ke(a,null,{default:Wn(()=>[K("div",O0,[(ae(!0),he(et,null,ea(s.checkinData,(c,l)=>(ae(),he("div",{class:"checkin-data-box",key:l},[K("p",null,"รหัสนักศึกษา: "+Me(c.stdID),1),K("p",null,"เข้าเรียนเวลา: "+Me(i.formatTime(c.class_date)),1),K("p",null,"ห้อง: "+Me(c.room),1),K("p",null,"วิชา: "+Me(c.subject),1)]))),128))])]),_:1})])):_t("",!0),K("div",null,[(ae(!0),he(et,null,ea(s.questions,(c,l)=>(ae(),he("div",{key:l},[K("p",null,"คำถาม: "+Me(c.text),1),hi(K("textarea",{"onUpdate:modelValue":u=>c.text=u,placeholder:"กรุณากรอกคำถาม"},null,8,x0),[[mi,c.text]]),K("button",{onClick:u=>i.fetchStudentAnswers(l)},"แสดงคำตอบทั้งหมด",8,M0),c.answers.length?(ae(),he("div",L0,[F0,K("ul",null,[(ae(!0),he(et,null,ea(c.answers.filter(u=>u.questionId===c.id),(u,h)=>(ae(),he("li",{key:h},[K("p",null,"Student ID: "+Me(u.studentID),1),K("p",null,"Answer: "+Me(u.answer),1)]))),128))])])):_t("",!0)]))),128))])])}const B0=Ul(b0,[["render",U0],["__scopeId","data-v-bc4a071e"]]),j0={data(){return{studentName:"",studentID:"",section:"",checkedIn:!1}},methods:{async submitForm(){try{const t=Zn(),e=Xn(t,"checkin"),n={name:this.studentName,stdID:this.studentID,section:this.section,checkedIn:!0};await pc(e,n),console.log("ข้อมูลถูกบันทึกเรียบร้อยแล้วใน Firebase"),this.checkedIn=!0}catch(t){console.error("เกิดข้อผิดพลาดในการบันทึกข้อมูล:",t)}}}},Us=t=>(Nc("data-v-43ce2c72"),t=t(),Oc(),t),$0={class:"check-in-form"},q0=Us(()=>K("h2",null,"เช็คชื่อ",-1)),H0={class:"form-group"},z0=Us(()=>K("label",{for:"studentName"},"ชื่อ:",-1)),K0={class:"form-group"},W0=Us(()=>K("label",{for:"studentID"},"รหัสนักศึกษา:",-1)),G0={class:"form-group"},Q0=Us(()=>K("label",{for:"section"},"Section:",-1)),J0=Us(()=>K("button",{type:"submit"},"เช็คชื่อ",-1)),Y0={key:0,class:"confirmation"};function X0(t,e,n,r,s,i){return ae(),he("div",$0,[q0,K("form",{onSubmit:e[3]||(e[3]=Cy((...o)=>i.submitForm&&i.submitForm(...o),["prevent"])),class:"form"},[K("div",H0,[z0,hi(K("input",{type:"text",id:"name","onUpdate:modelValue":e[0]||(e[0]=o=>s.studentName=o),required:""},null,512),[[mi,s.studentName]])]),K("div",K0,[W0,hi(K("input",{type:"text",id:"stdID","onUpdate:modelValue":e[1]||(e[1]=o=>s.studentID=o),required:""},null,512),[[mi,s.studentID]])]),K("div",G0,[Q0,hi(K("input",{type:"text",id:"section","onUpdate:modelValue":e[2]||(e[2]=o=>s.section=o),required:""},null,512),[[mi,s.section]])]),J0],32),s.checkedIn?(ae(),he("div",Y0,[K("p",null,Me(s.studentName)+" ได้ทำการเช็คชื่อเรียบร้อยแล้วใน Section "+Me(s.section),1)])):_t("",!0)])}const Z0=Ul(j0,[["render",X0],["__scopeId","data-v-43ce2c72"]]);function Bl(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Dg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const eA=Dg,kg=new ws("auth","Firebase",Dg());/**
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
 */const Wi=new Fc("@firebase/auth");function tA(t,...e){Wi.logLevel<=J.WARN&&Wi.warn(`Auth (${Ar}): ${t}`,...e)}function Ii(t,...e){Wi.logLevel<=J.ERROR&&Wi.error(`Auth (${Ar}): ${t}`,...e)}/**
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
 */function kt(t,...e){throw jl(t,...e)}function Rt(t,...e){return jl(t,...e)}function Vg(t,e,n){const r=Object.assign(Object.assign({},eA()),{[e]:n});return new ws("auth","Firebase",r).create(e,{appName:t.name})}function nA(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&kt(t,"argument-error"),Vg(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function jl(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return kg.create(t,...e)}function $(t,e,...n){if(!t)throw jl(e,...n)}function Mt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ii(e),new Error(e)}function qt(t,e){t||Mt(e)}/**
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
 */function gc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function rA(){return $h()==="http:"||$h()==="https:"}function $h(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function sA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(rA()||Wy()||"connection"in navigator)?navigator.onLine:!0}function iA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Bs{constructor(e,n){this.shortDelay=e,this.longDelay=n,qt(n>e,"Short delay should be less than long delay!"),this.isMobile=zy()||Gy()}get(){return sA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function $l(t,e){qt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Ng{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Mt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Mt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Mt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const oA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const aA=new Bs(3e4,6e4);function ql(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function kr(t,e,n,r,s={}){return Og(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=As(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Ng.fetch()(xg(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Og(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},oA),e);try{const s=new lA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ci(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ci(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ci(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ci(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Vg(t,u,l);kt(t,u)}}catch(s){if(s instanceof zt)throw s;kt(t,"network-request-failed",{message:String(s)})}}async function cA(t,e,n,r,s={}){const i=await kr(t,e,n,r,s);return"mfaPendingCredential"in i&&kt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function xg(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?$l(t.config,s):`${t.config.apiScheme}://${s}`}class lA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Rt(this.auth,"network-request-failed")),aA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ci(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Rt(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function uA(t,e){return kr(t,"POST","/v1/accounts:delete",e)}async function hA(t,e){return kr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Zr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function dA(t,e=!1){const n=ot(t),r=await n.getIdToken(e),s=Hl(r);$(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Zr(Ra(s.auth_time)),issuedAtTime:Zr(Ra(s.iat)),expirationTime:Zr(Ra(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ra(t){return Number(t)*1e3}function Hl(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ii("JWT malformed, contained fewer than 3 sections"),null;try{const s=tf(n);return s?JSON.parse(s):(Ii("Failed to decode base64 JWT payload"),null)}catch(s){return Ii("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function fA(t){const e=Hl(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Es(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof zt&&pA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function pA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class gA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Mg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Zr(this.lastLoginAt),this.creationTime=Zr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Gi(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Es(t,hA(n,{idToken:r}));$(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?yA(i.providerUserInfo):[],a=_A(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Mg(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function mA(t){const e=ot(t);await Gi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _A(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function yA(t){return t.map(e=>{var{providerId:n}=e,r=Bl(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function vA(t,e){const n=await Og(t,{},async()=>{const r=As({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=xg(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ng.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function EA(t,e){return kr(t,"POST","/v2/accounts:revokeToken",ql(t,e))}/**
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
 */class Is{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fA(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return $(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await vA(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Is;return r&&($(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&($(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&($(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Is,this.toJSON())}_performRefresh(){return Mt("not implemented")}}/**
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
 */function Wt(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class kn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Bl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new gA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Mg(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Es(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return dA(this,e)}reload(){return mA(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new kn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Gi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Es(this,uA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,k=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,F=(l=n.createdAt)!==null&&l!==void 0?l:void 0,Z=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:U,emailVerified:ee,isAnonymous:_e,providerData:z,stsTokenManager:be}=n;$(U&&be,e,"internal-error");const Xe=Is.fromJSON(this.name,be);$(typeof U=="string",e,"internal-error"),Wt(h,e.name),Wt(p,e.name),$(typeof ee=="boolean",e,"internal-error"),$(typeof _e=="boolean",e,"internal-error"),Wt(g,e.name),Wt(k,e.name),Wt(b,e.name),Wt(C,e.name),Wt(F,e.name),Wt(Z,e.name);const Vt=new kn({uid:U,auth:e,email:p,emailVerified:ee,displayName:h,isAnonymous:_e,photoURL:k,phoneNumber:g,tenantId:b,stsTokenManager:Xe,createdAt:F,lastLoginAt:Z});return z&&Array.isArray(z)&&(Vt.providerData=z.map(nt=>Object.assign({},nt))),C&&(Vt._redirectEventId=C),Vt}static async _fromIdTokenResponse(e,n,r=!1){const s=new Is;s.updateFromServerResponse(n);const i=new kn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Gi(i),i}}/**
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
 */const qh=new Map;function Lt(t){qt(t instanceof Function,"Expected a class definition");let e=qh.get(t);return e?(qt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,qh.set(t,e),e)}/**
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
 */class Lg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Lg.type="NONE";const Hh=Lg;/**
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
 */function Ti(t,e,n){return`firebase:${t}:${e}:${n}`}class cr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ti(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ti("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?kn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new cr(Lt(Hh),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Lt(Hh);const o=Ti(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=kn._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new cr(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new cr(i,e,r))}}/**
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
 */function zh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Bg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Fg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($g(e))return"Blackberry";if(qg(e))return"Webos";if(zl(e))return"Safari";if((e.includes("chrome/")||Ug(e))&&!e.includes("edge/"))return"Chrome";if(jg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Fg(t=Ee()){return/firefox\//i.test(t)}function zl(t=Ee()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ug(t=Ee()){return/crios\//i.test(t)}function Bg(t=Ee()){return/iemobile/i.test(t)}function jg(t=Ee()){return/android/i.test(t)}function $g(t=Ee()){return/blackberry/i.test(t)}function qg(t=Ee()){return/webos/i.test(t)}function jo(t=Ee()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function IA(t=Ee()){var e;return jo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function TA(){return Qy()&&document.documentMode===10}function Hg(t=Ee()){return jo(t)||jg(t)||qg(t)||$g(t)||/windows phone/i.test(t)||Bg(t)}function wA(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function zg(t,e=[]){let n;switch(t){case"Browser":n=zh(Ee());break;case"Worker":n=`${zh(Ee())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ar}/${r}`}/**
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
 */class AA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function RA(t,e={}){return kr(t,"GET","/v2/passwordPolicy",ql(t,e))}/**
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
 */const SA=6;class PA{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:SA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class bA{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kh(this),this.idTokenSubscription=new Kh(this),this.beforeStateQueue=new AA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=kg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Lt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await cr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Gi(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=iA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ot(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Lt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await RA(this),n=new PA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ws("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await EA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Lt(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await cr.create(this,[Lt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if($(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=zg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&tA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function $o(t){return ot(t)}class Kh{constructor(e){this.auth=e,this.observer=null,this.addObserver=nv(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Kl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function CA(t){Kl=t}function DA(t){return Kl.loadJS(t)}function kA(){return Kl.gapiScript}function VA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function NA(t,e){const n=Bc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ki(i,e??{}))return s;kt(s,"already-initialized")}return n.initialize({options:e})}function OA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Lt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function xA(t,e,n){const r=$o(t);$(r._canInitEmulator,r,"emulator-config-failed"),$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Kg(e),{host:o,port:a}=MA(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||LA()}function Kg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function MA(t){const e=Kg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Wh(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Wh(o)}}}function Wh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function LA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Wg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Mt("not implemented")}_getIdTokenResponse(e){return Mt("not implemented")}_linkToIdToken(e,n){return Mt("not implemented")}_getReauthenticationResolver(e){return Mt("not implemented")}}/**
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
 */async function lr(t,e){return cA(t,"POST","/v1/accounts:signInWithIdp",ql(t,e))}/**
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
 */const FA="http://localhost";class Fn extends Wg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Fn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):kt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Bl(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Fn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return lr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,lr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,lr(e,n)}buildRequest(){const e={requestUri:FA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=As(n)}return e}}/**
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
 */class Wl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class js extends Wl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Yt extends js{constructor(){super("facebook.com")}static credential(e){return Fn._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yt.credential(e.oauthAccessToken)}catch{return null}}}Yt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yt.PROVIDER_ID="facebook.com";/**
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
 */class Ot extends js{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Fn._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ot.credential(n,r)}catch{return null}}}Ot.GOOGLE_SIGN_IN_METHOD="google.com";Ot.PROVIDER_ID="google.com";/**
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
 */class Xt extends js{constructor(){super("github.com")}static credential(e){return Fn._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xt.credential(e.oauthAccessToken)}catch{return null}}}Xt.GITHUB_SIGN_IN_METHOD="github.com";Xt.PROVIDER_ID="github.com";/**
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
 */class Zt extends js{constructor(){super("twitter.com")}static credential(e,n){return Fn._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Zt.credential(n,r)}catch{return null}}}Zt.TWITTER_SIGN_IN_METHOD="twitter.com";Zt.PROVIDER_ID="twitter.com";/**
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
 */class Ir{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await kn._fromIdTokenResponse(e,r,s),o=Gh(r);return new Ir({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Gh(r);return new Ir({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Gh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Qi extends zt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Qi.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Qi(e,n,r,s)}}function Gg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Qi._fromErrorAndOperation(t,i,e,r):i})}async function UA(t,e,n=!1){const r=await Es(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ir._forOperation(t,"link",r)}/**
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
 */async function BA(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Es(t,Gg(r,s,e,t),n);$(i.idToken,r,"internal-error");const o=Hl(i.idToken);$(o,r,"internal-error");const{sub:a}=o;return $(t.uid===a,r,"user-mismatch"),Ir._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&kt(r,"user-mismatch"),i}}/**
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
 */async function jA(t,e,n=!1){const r="signIn",s=await Gg(t,r,e),i=await Ir._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function $A(t,e,n,r){return ot(t).onIdTokenChanged(e,n,r)}function qA(t,e,n){return ot(t).beforeAuthStateChanged(e,n)}function HA(t){return ot(t).signOut()}const Ji="__sak";/**
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
 */class Qg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ji,"1"),this.storage.removeItem(Ji),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function zA(){const t=Ee();return zl(t)||jo(t)}const KA=1e3,WA=10;class Jg extends Qg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=zA()&&wA(),this.fallbackToPolling=Hg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);TA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,WA):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},KA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Jg.type="LOCAL";const GA=Jg;/**
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
 */class Yg extends Qg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Yg.type="SESSION";const Xg=Yg;/**
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
 */function QA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class qo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new qo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await QA(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qo.receivers=[];/**
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
 */function Gl(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class JA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Gl("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const p=h;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function St(){return window}function YA(t){St().location.href=t}/**
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
 */function Zg(){return typeof St().WorkerGlobalScope<"u"&&typeof St().importScripts=="function"}async function XA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ZA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function eR(){return Zg()?self:null}/**
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
 */const em="firebaseLocalStorageDb",tR=1,Yi="firebaseLocalStorage",tm="fbase_key";class $s{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ho(t,e){return t.transaction([Yi],e?"readwrite":"readonly").objectStore(Yi)}function nR(){const t=indexedDB.deleteDatabase(em);return new $s(t).toPromise()}function mc(){const t=indexedDB.open(em,tR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Yi,{keyPath:tm})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Yi)?e(r):(r.close(),await nR(),e(await mc()))})})}async function Qh(t,e,n){const r=Ho(t,!0).put({[tm]:e,value:n});return new $s(r).toPromise()}async function rR(t,e){const n=Ho(t,!1).get(e),r=await new $s(n).toPromise();return r===void 0?null:r.value}function Jh(t,e){const n=Ho(t,!0).delete(e);return new $s(n).toPromise()}const sR=800,iR=3;class nm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await mc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>iR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qo._getInstance(eR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await XA(),!this.activeServiceWorker)return;this.sender=new JA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ZA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await mc();return await Qh(e,Ji,"1"),await Jh(e,Ji),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Qh(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>rR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Jh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ho(s,!1).getAll();return new $s(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),sR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}nm.type="LOCAL";const oR=nm;new Bs(3e4,6e4);/**
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
 */function rm(t,e){return e?Lt(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ql extends Wg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return lr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return lr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return lr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function aR(t){return jA(t.auth,new Ql(t),t.bypassAuthState)}function cR(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),BA(n,new Ql(t),t.bypassAuthState)}async function lR(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),UA(n,new Ql(t),t.bypassAuthState)}/**
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
 */class sm{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return aR;case"linkViaPopup":case"linkViaRedirect":return lR;case"reauthViaPopup":case"reauthViaRedirect":return cR;default:kt(this.auth,"internal-error")}}resolve(e){qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const uR=new Bs(2e3,1e4);async function hR(t,e,n){const r=$o(t);nA(t,e,Wl);const s=rm(r,n);return new Pn(r,"signInViaPopup",e,s).executeNotNull()}class Pn extends sm{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Pn.currentPopupAction&&Pn.currentPopupAction.cancel(),Pn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){qt(this.filter.length===1,"Popup operations only handle one event");const e=Gl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Rt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Rt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Pn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Rt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,uR.get())};e()}}Pn.currentPopupAction=null;/**
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
 */const dR="pendingRedirect",wi=new Map;class fR extends sm{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=wi.get(this.auth._key());if(!e){try{const r=await pR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}wi.set(this.auth._key(),e)}return this.bypassAuthState||wi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pR(t,e){const n=_R(e),r=mR(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function gR(t,e){wi.set(t._key(),e)}function mR(t){return Lt(t._redirectPersistence)}function _R(t){return Ti(dR,t.config.apiKey,t.name)}async function yR(t,e,n=!1){const r=$o(t),s=rm(r,e),o=await new fR(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const vR=10*60*1e3;class ER{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!IR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!im(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Rt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=vR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yh(e))}saveEventToCache(e){this.cachedEventUids.add(Yh(e)),this.lastProcessedEventTime=Date.now()}}function Yh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function im({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function IR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return im(t);default:return!1}}/**
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
 */async function TR(t,e={}){return kr(t,"GET","/v1/projects",e)}/**
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
 */const wR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,AR=/^https?/;async function RR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await TR(t);for(const n of e)try{if(SR(n))return}catch{}kt(t,"unauthorized-domain")}function SR(t){const e=gc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!AR.test(n))return!1;if(wR.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const PR=new Bs(3e4,6e4);function Xh(){const t=St().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function bR(t){return new Promise((e,n)=>{var r,s,i;function o(){Xh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xh(),n(Rt(t,"network-request-failed"))},timeout:PR.get()})}if(!((s=(r=St().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=St().gapi)===null||i===void 0)&&i.load)o();else{const a=VA("iframefcb");return St()[a]=()=>{gapi.load?o():n(Rt(t,"network-request-failed"))},DA(`${kA()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Ai=null,e})}let Ai=null;function CR(t){return Ai=Ai||bR(t),Ai}/**
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
 */const DR=new Bs(5e3,15e3),kR="__/auth/iframe",VR="emulator/auth/iframe",NR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},OR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xR(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?$l(e,VR):`https://${t.config.authDomain}/${kR}`,r={apiKey:e.apiKey,appName:t.name,v:Ar},s=OR.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${As(r).slice(1)}`}async function MR(t){const e=await CR(t),n=St().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:xR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:NR,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Rt(t,"network-request-failed"),a=St().setTimeout(()=>{i(o)},DR.get());function c(){St().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const LR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},FR=500,UR=600,BR="_blank",jR="http://localhost";class Zh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $R(t,e,n,r=FR,s=UR){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},LR),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Ee().toLowerCase();n&&(a=Ug(l)?BR:n),Fg(l)&&(e=e||jR,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[g,k])=>`${p}${g}=${k},`,"");if(IA(l)&&a!=="_self")return qR(e||"",a),new Zh(null);const h=window.open(e||"",a,u);$(h,t,"popup-blocked");try{h.focus()}catch{}return new Zh(h)}function qR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const HR="__/auth/handler",zR="emulator/auth/handler",KR=encodeURIComponent("fac");async function ed(t,e,n,r,s,i){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ar,eventId:s};if(e instanceof Wl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",tv(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof js){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${KR}=${encodeURIComponent(c)}`:"";return`${WR(t)}?${As(a).slice(1)}${l}`}function WR({config:t}){return t.emulator?$l(t,zR):`https://${t.authDomain}/${HR}`}/**
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
 */const Sa="webStorageSupport";class GR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Xg,this._completeRedirectFn=yR,this._overrideRedirectResult=gR}async _openPopup(e,n,r,s){var i;qt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await ed(e,n,r,gc(),s);return $R(e,o,Gl())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await ed(e,n,r,gc(),s);return YA(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(qt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await MR(e),r=new ER(e);return n.register("authEvent",s=>($(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Sa,{type:Sa},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Sa];o!==void 0&&n(!!o),kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=RR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Hg()||zl()||jo()}}const QR=GR;var td="@firebase/auth",nd="1.6.2";/**
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
 */class JR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function YR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function XR(t){dr(new Nn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:zg(t)},l=new bA(r,s,i,c);return OA(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),dr(new Nn("auth-internal",e=>{const n=$o(e.getProvider("auth").getImmediate());return(r=>new JR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),an(td,nd,YR(t)),an(td,nd,"esm2017")}/**
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
 */const ZR=5*60,eS=sf("authIdTokenMaxAge")||ZR;let rd=null;const tS=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>eS)return;const s=n==null?void 0:n.token;rd!==s&&(rd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function nS(t=uf()){const e=Bc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=NA(t,{popupRedirectResolver:QR,persistence:[oR,GA,Xg]}),r=sf("authTokenSyncURL");if(r&&r.match(/^\/[^\/].*/)){const i=tS(r);qA(n,i,()=>i(n.currentUser)),$A(n,o=>i(o))}const s=nf("auth");return s&&xA(n,`http://${s}`),n}function rS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}CA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Rt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",rS().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});XR("Browser");const om=t=>(Nc("data-v-c649e124"),t=t(),Oc(),t),sS={key:0},iS={key:0},oS={key:1},aS={key:0},cS={key:1},lS={class:"logbutton"},uS={key:0,id:"logout"},hS={key:1,id:"GoogleSignin"},dS={class:"hello"},fS=om(()=>K("br",null,null,-1)),pS={id:"content"},gS={key:0},mS={key:0},_S=om(()=>K("br",null,null,-1)),yS={__name:"HelloWorld",setup(t){const e=nS(),n=new Ot,r=Yo(""),s=Yo(!1),i=Yo(!1),o=()=>{hR(e,n).then(c=>{r.value=c.user.displayName,s.value=!0,i.value=c.user.email==="watsayot.p@kkumail.com",localStorage.setItem("user",JSON.stringify(r.value)),localStorage.setItem("isSignIn",JSON.stringify(s.value)),localStorage.setItem("isAdmin",JSON.stringify(i.value))}).catch(c=>{console.log(c)})},a=()=>{HA(e).then(()=>{r.value="",s.value=!1,i.value=!1,localStorage.removeItem("user"),localStorage.removeItem("isSignIn"),localStorage.removeItem("isAdmin")}).catch(c=>{console.log(c)})};return Fd(()=>{const c=localStorage.getItem("user"),l=localStorage.getItem("isSignIn"),u=localStorage.getItem("isAdmin");c&&l&&u&&(r.value=JSON.parse(c),s.value=JSON.parse(l),i.value=JSON.parse(u))}),(c,l)=>(ae(),he("div",null,[K("header",null,[i.value?(ae(),he("h3",sS,[s.value?(ae(),he("h2",iS,Me(r.value),1)):_t("",!0)])):(ae(),he("p",oS,[en(" <<<<<<< HEAD "),s.value?(ae(),he("h2",aS,Me(r.value),1)):_t("",!0),en(" ======= "),s.value?(ae(),he("h2",cS,Me(r.value),1)):_t("",!0),en(" >>>>>>> 2fb8f6af1e86c450d776dd0ea8c98c33d41bc7f2 ")])),K("div",lS,[s.value?(ae(),he("div",uS,[K("button",{onClick:a},"logout")])):_t("",!0),s.value?_t("",!0):(ae(),he("div",hS,[K("button",{onClick:o},"login")]))])]),K("div",dS,[K("h1",null,Me(c.msg),1),fS,K("div",pS,[i.value?(ae(),he("h3",gS,[ke(B0)])):(ae(),he(et,{key:1},[s.value?(ae(),he("p",mS,[ke(Z0)])):_t("",!0)],64))]),_S])]))}},vS=Ul(yS,[["__scopeId","data-v-c649e124"]]),ES={id:"app"},IS={__name:"App",setup(t){return(e,n)=>(ae(),he("div",ES,[ke(vS)]))}};Vy(IS).mount("#app");
