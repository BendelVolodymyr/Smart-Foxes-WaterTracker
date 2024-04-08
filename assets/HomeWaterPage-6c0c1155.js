import{_ as b,o as ae,r as d,w as no,h as gr,T as tn,i as $n,k as ro,u as g,j as l,l as ke,m as fe,n as oo,C as io,p as so,q as ao,R as Ge,v as ct,x as Mn,y as Tn,z as On,A as co,b as nn,B as Lt,c as et,D as lo,M as rn,E as uo,I as xr,J as fo,G as yr,K as ho,O as Cn}from"./index-e02f7817.js";import{b as po,a as mo}from"./backgroundElementMainPageDesk2x@2-f75c1b59.js";function me(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function br(e){if(!me(e))return e;const t={};return Object.keys(e).forEach(n=>{t[n]=br(e[n])}),t}function ce(e,t,n={clone:!0}){const r=n.clone?b({},e):e;return me(e)&&me(t)&&Object.keys(t).forEach(o=>{o!=="__proto__"&&(me(t[o])&&o in e&&me(e[o])?r[o]=ce(e[o],t[o],n):n.clone?r[o]=me(t[o])?br(t[o]):t[o]:r[o]=t[o])}),r}const go=Object.freeze(Object.defineProperty({__proto__:null,default:ce,isPlainObject:me},Symbol.toStringTag,{value:"Module"}));function Ve(e){let t="https://mui.com/production-error/?code="+e;for(let n=1;n<arguments.length;n+=1)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}const xo=Object.freeze(Object.defineProperty({__proto__:null,default:Ve},Symbol.toStringTag,{value:"Module"}));var vr={exports:{}},_={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var on=Symbol.for("react.element"),sn=Symbol.for("react.portal"),xt=Symbol.for("react.fragment"),yt=Symbol.for("react.strict_mode"),bt=Symbol.for("react.profiler"),vt=Symbol.for("react.provider"),wt=Symbol.for("react.context"),yo=Symbol.for("react.server_context"),kt=Symbol.for("react.forward_ref"),St=Symbol.for("react.suspense"),Et=Symbol.for("react.suspense_list"),Pt=Symbol.for("react.memo"),$t=Symbol.for("react.lazy"),bo=Symbol.for("react.offscreen"),wr;wr=Symbol.for("react.module.reference");function re(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case on:switch(e=e.type,e){case xt:case bt:case yt:case St:case Et:return e;default:switch(e=e&&e.$$typeof,e){case yo:case wt:case kt:case $t:case Pt:case vt:return e;default:return t}}case sn:return t}}}_.ContextConsumer=wt;_.ContextProvider=vt;_.Element=on;_.ForwardRef=kt;_.Fragment=xt;_.Lazy=$t;_.Memo=Pt;_.Portal=sn;_.Profiler=bt;_.StrictMode=yt;_.Suspense=St;_.SuspenseList=Et;_.isAsyncMode=function(){return!1};_.isConcurrentMode=function(){return!1};_.isContextConsumer=function(e){return re(e)===wt};_.isContextProvider=function(e){return re(e)===vt};_.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===on};_.isForwardRef=function(e){return re(e)===kt};_.isFragment=function(e){return re(e)===xt};_.isLazy=function(e){return re(e)===$t};_.isMemo=function(e){return re(e)===Pt};_.isPortal=function(e){return re(e)===sn};_.isProfiler=function(e){return re(e)===bt};_.isStrictMode=function(e){return re(e)===yt};_.isSuspense=function(e){return re(e)===St};_.isSuspenseList=function(e){return re(e)===Et};_.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===xt||e===bt||e===yt||e===St||e===Et||e===bo||typeof e=="object"&&e!==null&&(e.$$typeof===$t||e.$$typeof===Pt||e.$$typeof===vt||e.$$typeof===wt||e.$$typeof===kt||e.$$typeof===wr||e.getModuleId!==void 0)};_.typeOf=re;vr.exports=_;var jn=vr.exports;const vo=/^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;function kr(e){const t=`${e}`.match(vo);return t&&t[1]||""}function Sr(e,t=""){return e.displayName||e.name||kr(e)||t}function Rn(e,t,n){const r=Sr(t);return e.displayName||(r!==""?`${n}(${r})`:n)}function wo(e){if(e!=null){if(typeof e=="string")return e;if(typeof e=="function")return Sr(e,"Component");if(typeof e=="object")switch(e.$$typeof){case jn.ForwardRef:return Rn(e,e.render,"ForwardRef");case jn.Memo:return Rn(e,e.type,"memo");default:return}}}const ko=Object.freeze(Object.defineProperty({__proto__:null,default:wo,getFunctionName:kr},Symbol.toStringTag,{value:"Module"}));function an(e){if(typeof e!="string")throw new Error(Ve(7));return e.charAt(0).toUpperCase()+e.slice(1)}const So=Object.freeze(Object.defineProperty({__proto__:null,default:an},Symbol.toStringTag,{value:"Module"}));function Dn(...e){return e.reduce((t,n)=>n==null?t:function(...o){t.apply(this,o),n.apply(this,o)},()=>{})}function Eo(e,t=166){let n;function r(...o){const i=()=>{e.apply(this,o)};clearTimeout(n),n=setTimeout(i,t)}return r.clear=()=>{clearTimeout(n)},r}function Qe(e){return ae(e).defaultView||window}const _n={};function Po(e,t){const n=d.useRef(_n);return n.current===_n&&(n.current=e(t)),n}const $o=[];function Mo(e){d.useEffect(e,$o)}class cn{constructor(){this.currentId=null,this.clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}static create(){return new cn}start(t,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},t)}}function To(){const e=Po(cn.create).current;return Mo(e.disposeEffect),e}function Oo(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function Er(e,t){const n=b({},t);return Object.keys(e).forEach(r=>{if(r.toString().match(/^(components|slots)$/))n[r]=b({},e[r],n[r]);else if(r.toString().match(/^(componentsProps|slotProps)$/)){const o=e[r]||{},i=t[r];n[r]={},!i||!Object.keys(i)?n[r]=o:!o||!Object.keys(o)?n[r]=i:(n[r]=b({},i),Object.keys(o).forEach(s=>{n[r][s]=Er(o[s],i[s])}))}else n[r]===void 0&&(n[r]=e[r])}),n}function Mt(e,t,n=void 0){const r={};return Object.keys(e).forEach(o=>{r[o]=e[o].reduce((i,s)=>{if(s){const a=t(s);a!==""&&i.push(a),n&&n[s]&&i.push(n[s])}return i},[]).join(" ")}),r}const Wn=e=>e,Co=()=>{let e=Wn;return{configure(t){e=t},generate(t){return e(t)},reset(){e=Wn}}},jo=Co(),Ro=jo,Do={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function tt(e,t,n="Mui"){const r=Do[t];return r?`${n}-${r}`:`${Ro.generate(e)}-${t}`}function Tt(e,t,n="Mui"){const r={};return t.forEach(o=>{r[o]=tt(e,o,n)}),r}function _o(e,t=Number.MIN_SAFE_INTEGER,n=Number.MAX_SAFE_INTEGER){return Math.max(t,Math.min(e,n))}const Wo=Object.freeze(Object.defineProperty({__proto__:null,default:_o},Symbol.toStringTag,{value:"Module"}));var Ao=no(function(e,t){var n=e.styles,r=gr([n],void 0,d.useContext(tn)),o=d.useRef();return $n(function(){var i=t.key+"-global",s=new t.sheet.constructor({key:i,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),a=!1,c=document.querySelector('style[data-emotion="'+i+" "+r.name+'"]');return t.sheet.tags.length&&(s.before=t.sheet.tags[0]),c!==null&&(a=!0,c.setAttribute("data-emotion",i),s.hydrate([c])),o.current=[s,a],function(){s.flush()}},[t]),$n(function(){var i=o.current,s=i[0],a=i[1];if(a){i[1]=!1;return}if(r.next!==void 0&&ro(t,r.next,!0),s.tags.length){var c=s.tags[s.tags.length-1].nextElementSibling;s.before=c,s.flush()}t.insert("",r,s,!1)},[t,r.name]),null});function Pr(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return gr(t)}var Fo=function(){var t=Pr.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};function H(e){const t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new e.constructor(+e):typeof e=="number"||t==="[object Number]"||typeof e=="string"||t==="[object String]"?new Date(e):new Date(NaN)}function ue(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}function zt(e,t){const n=H(e);if(isNaN(t))return ue(e,NaN);if(!t)return n;const r=n.getDate(),o=ue(e,n.getTime());o.setMonth(n.getMonth()+t+1,0);const i=o.getDate();return r>=i?o:(n.setFullYear(o.getFullYear(),o.getMonth(),r),n)}const $r=6048e5,No=864e5;let Io={};function Ot(){return Io}function Je(e,t){var a,c,u,p;const n=Ot(),r=(t==null?void 0:t.weekStartsOn)??((c=(a=t==null?void 0:t.locale)==null?void 0:a.options)==null?void 0:c.weekStartsOn)??n.weekStartsOn??((p=(u=n.locale)==null?void 0:u.options)==null?void 0:p.weekStartsOn)??0,o=H(e),i=o.getDay(),s=(i<r?7:0)+i-r;return o.setDate(o.getDate()-s),o.setHours(0,0,0,0),o}function ft(e){return Je(e,{weekStartsOn:1})}function Mr(e){const t=H(e),n=t.getFullYear(),r=ue(e,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const o=ft(r),i=ue(e,0);i.setFullYear(n,0,4),i.setHours(0,0,0,0);const s=ft(i);return t.getTime()>=o.getTime()?n+1:t.getTime()>=s.getTime()?n:n-1}function An(e){const t=H(e);return t.setHours(0,0,0,0),t}function Fn(e){const t=H(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function Lo(e,t){const n=An(e),r=An(t),o=+n-Fn(n),i=+r-Fn(r);return Math.round((o-i)/No)}function zo(e){const t=Mr(e),n=ue(e,0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),ft(n)}function Bo(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function Ho(e){if(!Bo(e)&&typeof e!="number")return!1;const t=H(e);return!isNaN(Number(t))}function Nn(e){const t=H(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}function Yo(e,t){const n=H(e.start),r=H(e.end);let o=+n>+r;const i=o?+n:+r,s=o?r:n;s.setHours(0,0,0,0);let a=(t==null?void 0:t.step)??1;if(!a)return[];a<0&&(a=-a,o=!o);const c=[];for(;+s<=i;)c.push(H(s)),s.setDate(s.getDate()+a),s.setHours(0,0,0,0);return o?c.reverse():c}function In(e){const t=H(e);return t.setDate(1),t.setHours(0,0,0,0),t}function qo(e){const t=H(e),n=ue(e,0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}const Go={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Uo=(e,t,n)=>{let r;const o=Go[e];return typeof o=="string"?r=o:t===1?r=o.one:r=o.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function Bt(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const Ko={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Xo={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Vo={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Qo={date:Bt({formats:Ko,defaultWidth:"full"}),time:Bt({formats:Xo,defaultWidth:"full"}),dateTime:Bt({formats:Vo,defaultWidth:"full"})},Jo={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Zo=(e,t,n,r)=>Jo[e];function He(e){return(t,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let o;if(r==="formatting"&&e.formattingValues){const s=e.defaultFormattingWidth||e.defaultWidth,a=n!=null&&n.width?String(n.width):s;o=e.formattingValues[a]||e.formattingValues[s]}else{const s=e.defaultWidth,a=n!=null&&n.width?String(n.width):e.defaultWidth;o=e.values[a]||e.values[s]}const i=e.argumentCallback?e.argumentCallback(t):t;return o[i]}}const ei={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},ti={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},ni={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},ri={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},oi={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},ii={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},si=(e,t)=>{const n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},ai={ordinalNumber:si,era:He({values:ei,defaultWidth:"wide"}),quarter:He({values:ti,defaultWidth:"wide",argumentCallback:e=>e-1}),month:He({values:ni,defaultWidth:"wide"}),day:He({values:ri,defaultWidth:"wide"}),dayPeriod:He({values:oi,defaultWidth:"wide",formattingValues:ii,defaultFormattingWidth:"wide"})};function Ye(e){return(t,n={})=>{const r=n.width,o=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=t.match(o);if(!i)return null;const s=i[0],a=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(a)?li(a,m=>m.test(s)):ci(a,m=>m.test(s));let u;u=e.valueCallback?e.valueCallback(c):c,u=n.valueCallback?n.valueCallback(u):u;const p=t.slice(s.length);return{value:u,rest:p}}}function ci(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function li(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function ui(e){return(t,n={})=>{const r=t.match(e.matchPattern);if(!r)return null;const o=r[0],i=t.match(e.parsePattern);if(!i)return null;let s=e.valueCallback?e.valueCallback(i[0]):i[0];s=n.valueCallback?n.valueCallback(s):s;const a=t.slice(o.length);return{value:s,rest:a}}}const di=/^(\d+)(th|st|nd|rd)?/i,fi=/\d+/i,hi={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},pi={any:[/^b/i,/^(a|c)/i]},mi={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},gi={any:[/1/i,/2/i,/3/i,/4/i]},xi={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},yi={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},bi={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},vi={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},wi={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},ki={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Si={ordinalNumber:ui({matchPattern:di,parsePattern:fi,valueCallback:e=>parseInt(e,10)}),era:Ye({matchPatterns:hi,defaultMatchWidth:"wide",parsePatterns:pi,defaultParseWidth:"any"}),quarter:Ye({matchPatterns:mi,defaultMatchWidth:"wide",parsePatterns:gi,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Ye({matchPatterns:xi,defaultMatchWidth:"wide",parsePatterns:yi,defaultParseWidth:"any"}),day:Ye({matchPatterns:bi,defaultMatchWidth:"wide",parsePatterns:vi,defaultParseWidth:"any"}),dayPeriod:Ye({matchPatterns:wi,defaultMatchWidth:"any",parsePatterns:ki,defaultParseWidth:"any"})},Ei={code:"en-US",formatDistance:Uo,formatLong:Qo,formatRelative:Zo,localize:ai,match:Si,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Pi(e){const t=H(e);return Lo(t,qo(t))+1}function $i(e){const t=H(e),n=+ft(t)-+zo(t);return Math.round(n/$r)+1}function Tr(e,t){var p,m,f,w;const n=H(e),r=n.getFullYear(),o=Ot(),i=(t==null?void 0:t.firstWeekContainsDate)??((m=(p=t==null?void 0:t.locale)==null?void 0:p.options)==null?void 0:m.firstWeekContainsDate)??o.firstWeekContainsDate??((w=(f=o.locale)==null?void 0:f.options)==null?void 0:w.firstWeekContainsDate)??1,s=ue(e,0);s.setFullYear(r+1,0,i),s.setHours(0,0,0,0);const a=Je(s,t),c=ue(e,0);c.setFullYear(r,0,i),c.setHours(0,0,0,0);const u=Je(c,t);return n.getTime()>=a.getTime()?r+1:n.getTime()>=u.getTime()?r:r-1}function Mi(e,t){var a,c,u,p;const n=Ot(),r=(t==null?void 0:t.firstWeekContainsDate)??((c=(a=t==null?void 0:t.locale)==null?void 0:a.options)==null?void 0:c.firstWeekContainsDate)??n.firstWeekContainsDate??((p=(u=n.locale)==null?void 0:u.options)==null?void 0:p.firstWeekContainsDate)??1,o=Tr(e,t),i=ue(e,0);return i.setFullYear(o,0,r),i.setHours(0,0,0,0),Je(i,t)}function Ti(e,t){const n=H(e),r=+Je(n,t)-+Mi(n,t);return Math.round(r/$r)+1}function D(e,t){const n=e<0?"-":"",r=Math.abs(e).toString().padStart(t,"0");return n+r}const pe={y(e,t){const n=e.getFullYear(),r=n>0?n:1-n;return D(t==="yy"?r%100:r,t.length)},M(e,t){const n=e.getMonth();return t==="M"?String(n+1):D(n+1,2)},d(e,t){return D(e.getDate(),t.length)},a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(e,t){return D(e.getHours()%12||12,t.length)},H(e,t){return D(e.getHours(),t.length)},m(e,t){return D(e.getMinutes(),t.length)},s(e,t){return D(e.getSeconds(),t.length)},S(e,t){const n=t.length,r=e.getMilliseconds(),o=Math.trunc(r*Math.pow(10,n-3));return D(o,t.length)}},Te={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Ln={G:function(e,t,n){const r=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if(t==="yo"){const r=e.getFullYear(),o=r>0?r:1-r;return n.ordinalNumber(o,{unit:"year"})}return pe.y(e,t)},Y:function(e,t,n,r){const o=Tr(e,r),i=o>0?o:1-o;if(t==="YY"){const s=i%100;return D(s,2)}return t==="Yo"?n.ordinalNumber(i,{unit:"year"}):D(i,t.length)},R:function(e,t){const n=Mr(e);return D(n,t.length)},u:function(e,t){const n=e.getFullYear();return D(n,t.length)},Q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return D(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return D(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){const r=e.getMonth();switch(t){case"M":case"MM":return pe.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){const r=e.getMonth();switch(t){case"L":return String(r+1);case"LL":return D(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){const o=Ti(e,r);return t==="wo"?n.ordinalNumber(o,{unit:"week"}):D(o,t.length)},I:function(e,t,n){const r=$i(e);return t==="Io"?n.ordinalNumber(r,{unit:"week"}):D(r,t.length)},d:function(e,t,n){return t==="do"?n.ordinalNumber(e.getDate(),{unit:"date"}):pe.d(e,t)},D:function(e,t,n){const r=Pi(e);return t==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):D(r,t.length)},E:function(e,t,n){const r=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){const o=e.getDay(),i=(o-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return D(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});case"eeee":default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){const o=e.getDay(),i=(o-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return D(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});case"cccc":default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(e,t,n){const r=e.getDay(),o=r===0?7:r;switch(t){case"i":return String(o);case"ii":return D(o,t.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){const o=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(e,t,n){const r=e.getHours();let o;switch(r===12?o=Te.noon:r===0?o=Te.midnight:o=r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(e,t,n){const r=e.getHours();let o;switch(r>=17?o=Te.evening:r>=12?o=Te.afternoon:r>=4?o=Te.morning:o=Te.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(e,t,n){if(t==="ho"){let r=e.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return pe.h(e,t)},H:function(e,t,n){return t==="Ho"?n.ordinalNumber(e.getHours(),{unit:"hour"}):pe.H(e,t)},K:function(e,t,n){const r=e.getHours()%12;return t==="Ko"?n.ordinalNumber(r,{unit:"hour"}):D(r,t.length)},k:function(e,t,n){let r=e.getHours();return r===0&&(r=24),t==="ko"?n.ordinalNumber(r,{unit:"hour"}):D(r,t.length)},m:function(e,t,n){return t==="mo"?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):pe.m(e,t)},s:function(e,t,n){return t==="so"?n.ordinalNumber(e.getSeconds(),{unit:"second"}):pe.s(e,t)},S:function(e,t){return pe.S(e,t)},X:function(e,t,n){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(t){case"X":return Bn(r);case"XXXX":case"XX":return be(r);case"XXXXX":case"XXX":default:return be(r,":")}},x:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"x":return Bn(r);case"xxxx":case"xx":return be(r);case"xxxxx":case"xxx":default:return be(r,":")}},O:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+zn(r,":");case"OOOO":default:return"GMT"+be(r,":")}},z:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+zn(r,":");case"zzzz":default:return"GMT"+be(r,":")}},t:function(e,t,n){const r=Math.trunc(e.getTime()/1e3);return D(r,t.length)},T:function(e,t,n){const r=e.getTime();return D(r,t.length)}};function zn(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),o=Math.trunc(r/60),i=r%60;return i===0?n+String(o):n+String(o)+t+D(i,2)}function Bn(e,t){return e%60===0?(e>0?"-":"+")+D(Math.abs(e)/60,2):be(e,t)}function be(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),o=D(Math.trunc(r/60),2),i=D(r%60,2);return n+o+t+i}const Hn=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},Or=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},Oi=(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],r=n[1],o=n[2];if(!o)return Hn(e,t);let i;switch(r){case"P":i=t.dateTime({width:"short"});break;case"PP":i=t.dateTime({width:"medium"});break;case"PPP":i=t.dateTime({width:"long"});break;case"PPPP":default:i=t.dateTime({width:"full"});break}return i.replace("{{date}}",Hn(r,t)).replace("{{time}}",Or(o,t))},Ci={p:Or,P:Oi},ji=/^D+$/,Ri=/^Y+$/,Di=["D","DD","YY","YYYY"];function _i(e){return ji.test(e)}function Wi(e){return Ri.test(e)}function Ai(e,t,n){const r=Fi(e,t,n);if(console.warn(r),Di.includes(e))throw new RangeError(r)}function Fi(e,t,n){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Ni=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Ii=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Li=/^'([^]*?)'?$/,zi=/''/g,Bi=/[a-zA-Z]/;function Ae(e,t,n){var p,m,f,w,y,h,v,P;const r=Ot(),o=(n==null?void 0:n.locale)??r.locale??Ei,i=(n==null?void 0:n.firstWeekContainsDate)??((m=(p=n==null?void 0:n.locale)==null?void 0:p.options)==null?void 0:m.firstWeekContainsDate)??r.firstWeekContainsDate??((w=(f=r.locale)==null?void 0:f.options)==null?void 0:w.firstWeekContainsDate)??1,s=(n==null?void 0:n.weekStartsOn)??((h=(y=n==null?void 0:n.locale)==null?void 0:y.options)==null?void 0:h.weekStartsOn)??r.weekStartsOn??((P=(v=r.locale)==null?void 0:v.options)==null?void 0:P.weekStartsOn)??0,a=H(e);if(!Ho(a))throw new RangeError("Invalid time value");let c=t.match(Ii).map(k=>{const x=k[0];if(x==="p"||x==="P"){const E=Ci[x];return E(k,o.formatLong)}return k}).join("").match(Ni).map(k=>{if(k==="''")return{isToken:!1,value:"'"};const x=k[0];if(x==="'")return{isToken:!1,value:Hi(k)};if(Ln[x])return{isToken:!0,value:k};if(x.match(Bi))throw new RangeError("Format string contains an unescaped latin alphabet character `"+x+"`");return{isToken:!1,value:k}});o.localize.preprocessor&&(c=o.localize.preprocessor(a,c));const u={firstWeekContainsDate:i,weekStartsOn:s,locale:o};return c.map(k=>{if(!k.isToken)return k.value;const x=k.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&Wi(x)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&_i(x))&&Ai(x,t,String(e));const E=Ln[x[0]];return E(a,x,o.localize,u)}).join("")}function Hi(e){const t=e.match(Li);return t?t[1].replace(zi,"'"):e}function Yi(e,t){const n=H(e),r=H(t);return n.getTime()>r.getTime()}function qi(e,t){const n=H(e),r=H(t);return+n<+r}const Gi=e=>d.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",...e},d.createElement("title",null,`
		solidleft
	`),d.createElement("path",{d:"M10.293 16.707c-0.187-0.188-0.292-0.442-0.292-0.707s0.105-0.519 0.292-0.707l10-10c0.092-0.098 0.202-0.177 0.325-0.232s0.255-0.084 0.389-0.086c0.134-0.002 0.268 0.022 0.392 0.073s0.238 0.125 0.333 0.22c0.095 0.095 0.17 0.208 0.22 0.333s0.075 0.258 0.073 0.392c-0.002 0.134-0.032 0.267-0.086 0.389s-0.133 0.233-0.232 0.325l-9.293 9.293 9.293 9.293c0.098 0.091 0.177 0.202 0.232 0.325s0.084 0.255 0.086 0.389c0.002 0.134-0.022 0.268-0.073 0.392s-0.125 0.238-0.22 0.333c-0.095 0.095-0.208 0.17-0.333 0.22s-0.258 0.075-0.392 0.073c-0.134-0.002-0.267-0.032-0.389-0.086s-0.233-0.134-0.325-0.232l-10-10z"})),Ui=e=>d.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",...e},d.createElement("title",null,`
		solid-right
	`),d.createElement("path",{d:"M21.707 16.707c0.187-0.188 0.292-0.442 0.292-0.707s-0.105-0.519-0.292-0.707l-10-10c-0.092-0.098-0.202-0.177-0.325-0.232s-0.255-0.084-0.389-0.086c-0.134-0.002-0.268 0.022-0.392 0.073s-0.238 0.125-0.333 0.22c-0.095 0.095-0.17 0.208-0.22 0.333s-0.075 0.258-0.073 0.392c0.002 0.134 0.032 0.267 0.086 0.389s0.133 0.233 0.232 0.325l9.293 9.293-9.293 9.293c-0.098 0.091-0.177 0.202-0.232 0.325s-0.084 0.255-0.086 0.389c-0.002 0.134 0.022 0.268 0.073 0.392s0.125 0.238 0.22 0.333c0.095 0.095 0.208 0.17 0.333 0.22s0.258 0.075 0.392 0.073c0.134-0.002 0.267-0.032 0.389-0.086s0.233-0.134 0.325-0.232l10-10z"})),Ki=g.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap:12px;
  width: 156px;
  height: 40px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
 
  color: ${e=>e.theme.colors.primary.accent};
  button > svg {
    
    background: transparent;
    border: none;
    cursor: ${e=>e.disabled?"default":"pointer"};
   
    pointer-events: ${e=>e.disabled?"none":"auto"};
    /* cursor: pointer; */
   
    margin: 0;
  }

  @media (min-width: ${({theme:e})=>e.screens.tab}){

    width: 192px;
  }

`,Yn=g.button`
 background: transparent;
    border: none;
    cursor: ${e=>e.disabled?"default":"pointer"};
    visibility: ${e=>e.disabled?"hidden":"visible"};
    pointer-events: ${e=>e.disabled?"none":"auto"};
  
   
    margin: 0;
`,Xi=g(Gi)`

fill: ${e=>e.theme.colors.primary.accent};
  width: 14px;
  height: auto;


`,Vi=g(Ui)`

fill: ${e=>e.theme.colors.primary.accent};
  width: 14px;
  height: auto;
 
 
`,Qi=({selectedDate:e,setSelectedDate:t,setCurrentMonth:n,setSelectedDay:r})=>{const o=new Date().getMonth(),i=new Date().getFullYear(),s=qi(e,zt(new Date,-12)),a=Yi(e,new Date(i,o,1)),c=Ae(e,"MMMM"),u=e.getFullYear(),p=()=>{t(zt(e,-1)),r(null),n(f=>f-1)},m=()=>{t(zt(e,1)),r(null),n(f=>f+1)};return l.jsxs(Ki,{children:[l.jsx(Yn,{onClick:p,disabled:s,children:l.jsx(Xi,{})}),l.jsx("span",{children:`${c}, ${u}`}),l.jsx(Yn,{onClick:m,disabled:a,children:l.jsx(Vi,{})})]})};function X(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Cr(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=Cr(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function ge(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=Cr(e))&&(r&&(r+=" "),r+=t);return r}function jr(e){return typeof e=="string"}function Ji(e,t,n){return e===void 0||jr(e)?t:b({},t,{ownerState:b({},t.ownerState,n)})}function Rr(e,t=[]){if(e===void 0)return{};const n={};return Object.keys(e).filter(r=>r.match(/^on[A-Z]/)&&typeof e[r]=="function"&&!t.includes(r)).forEach(r=>{n[r]=e[r]}),n}function Zi(e,t,n){return typeof e=="function"?e(t,n):e}function qn(e){if(e===void 0)return{};const t={};return Object.keys(e).filter(n=>!(n.match(/^on[A-Z]/)&&typeof e[n]=="function")).forEach(n=>{t[n]=e[n]}),t}function es(e){const{getSlotProps:t,additionalProps:n,externalSlotProps:r,externalForwardedProps:o,className:i}=e;if(!t){const w=ge(n==null?void 0:n.className,i,o==null?void 0:o.className,r==null?void 0:r.className),y=b({},n==null?void 0:n.style,o==null?void 0:o.style,r==null?void 0:r.style),h=b({},n,o,r);return w.length>0&&(h.className=w),Object.keys(y).length>0&&(h.style=y),{props:h,internalRef:void 0}}const s=Rr(b({},o,r)),a=qn(r),c=qn(o),u=t(s),p=ge(u==null?void 0:u.className,n==null?void 0:n.className,i,o==null?void 0:o.className,r==null?void 0:r.className),m=b({},u==null?void 0:u.style,n==null?void 0:n.style,o==null?void 0:o.style,r==null?void 0:r.style),f=b({},u,n,c,a);return p.length>0&&(f.className=p),Object.keys(m).length>0&&(f.style=m),{props:f,internalRef:u.ref}}const ts=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function ht(e){var t;const{elementType:n,externalSlotProps:r,ownerState:o,skipResolvingSlotProps:i=!1}=e,s=X(e,ts),a=i?{}:Zi(r,o),{props:c,internalRef:u}=es(b({},s,{externalSlotProps:a})),p=ke(u,a==null?void 0:a.ref,(t=e.additionalProps)==null?void 0:t.ref);return Ji(n,b({},c,{ref:p}),o)}var nt={},Dr={exports:{}};(function(e){function t(n){return n&&n.__esModule?n:{default:n}}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(Dr);var _r=Dr.exports;const ns=fe(oo);var Ht={exports:{}},Gn;function rs(){return Gn||(Gn=1,function(e){function t(n,r){if(n==null)return{};var o={},i=Object.keys(n),s,a;for(a=0;a<i.length;a++)s=i[a],!(r.indexOf(s)>=0)&&(o[s]=n[s]);return o}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}(Ht)),Ht.exports}let Vt;typeof document=="object"&&(Vt=so({key:"css",prepend:!0}));function os(e){const{injectFirst:t,children:n}=e;return t&&Vt?l.jsx(io,{value:Vt,children:n}):n}function is(e){return e==null||Object.keys(e).length===0}function ss(e){const{styles:t,defaultTheme:n={}}=e,r=typeof t=="function"?o=>t(is(o)?n:o):t;return l.jsx(Ao,{styles:r})}/**
 * @mui/styled-engine v5.15.14
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function as(e,t){return ao(e,t)}const cs=(e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))},ls=Object.freeze(Object.defineProperty({__proto__:null,GlobalStyles:ss,StyledEngineProvider:os,ThemeContext:tn,css:Pr,default:as,internal_processStyles:cs,keyframes:Fo},Symbol.toStringTag,{value:"Module"})),us=fe(ls),ds=fe(go),fs=fe(So),hs=fe(ko),ps=["values","unit","step"],ms=e=>{const t=Object.keys(e).map(n=>({key:n,val:e[n]}))||[];return t.sort((n,r)=>n.val-r.val),t.reduce((n,r)=>b({},n,{[r.key]:r.val}),{})};function Wr(e){const{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5}=e,o=X(e,ps),i=ms(t),s=Object.keys(i);function a(f){return`@media (min-width:${typeof t[f]=="number"?t[f]:f}${n})`}function c(f){return`@media (max-width:${(typeof t[f]=="number"?t[f]:f)-r/100}${n})`}function u(f,w){const y=s.indexOf(w);return`@media (min-width:${typeof t[f]=="number"?t[f]:f}${n}) and (max-width:${(y!==-1&&typeof t[s[y]]=="number"?t[s[y]]:w)-r/100}${n})`}function p(f){return s.indexOf(f)+1<s.length?u(f,s[s.indexOf(f)+1]):a(f)}function m(f){const w=s.indexOf(f);return w===0?a(s[1]):w===s.length-1?c(s[w]):u(f,s[s.indexOf(f)+1]).replace("@media","@media not all and")}return b({keys:s,values:i,up:a,down:c,between:u,only:p,not:m,unit:n},o)}const gs={borderRadius:4},xs=gs;function Ke(e,t){return t?ce(e,t,{clone:!1}):e}const ln={xs:0,sm:600,md:900,lg:1200,xl:1536},Un={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${ln[e]}px)`};function de(e,t,n){const r=e.theme||{};if(Array.isArray(t)){const i=r.breakpoints||Un;return t.reduce((s,a,c)=>(s[i.up(i.keys[c])]=n(t[c]),s),{})}if(typeof t=="object"){const i=r.breakpoints||Un;return Object.keys(t).reduce((s,a)=>{if(Object.keys(i.values||ln).indexOf(a)!==-1){const c=i.up(a);s[c]=n(t[a],a)}else{const c=a;s[c]=t[c]}return s},{})}return n(t)}function ys(e={}){var t;return((t=e.keys)==null?void 0:t.reduce((r,o)=>{const i=e.up(o);return r[i]={},r},{}))||{}}function bs(e,t){return e.reduce((n,r)=>{const o=n[r];return(!o||Object.keys(o).length===0)&&delete n[r],n},t)}function Ct(e,t,n=!0){if(!t||typeof t!="string")return null;if(e&&e.vars&&n){const r=`vars.${t}`.split(".").reduce((o,i)=>o&&o[i]?o[i]:null,e);if(r!=null)return r}return t.split(".").reduce((r,o)=>r&&r[o]!=null?r[o]:null,e)}function pt(e,t,n,r=n){let o;return typeof e=="function"?o=e(n):Array.isArray(e)?o=e[n]||r:o=Ct(e,n)||r,t&&(o=t(o,r,e)),o}function Y(e){const{prop:t,cssProperty:n=e.prop,themeKey:r,transform:o}=e,i=s=>{if(s[t]==null)return null;const a=s[t],c=s.theme,u=Ct(c,r)||{};return de(s,a,m=>{let f=pt(u,o,m);return m===f&&typeof m=="string"&&(f=pt(u,o,`${t}${m==="default"?"":an(m)}`,m)),n===!1?f:{[n]:f}})};return i.propTypes={},i.filterProps=[t],i}function vs(e){const t={};return n=>(t[n]===void 0&&(t[n]=e(n)),t[n])}const ws={m:"margin",p:"padding"},ks={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},Kn={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},Ss=vs(e=>{if(e.length>2)if(Kn[e])e=Kn[e];else return[e];const[t,n]=e.split(""),r=ws[t],o=ks[n]||"";return Array.isArray(o)?o.map(i=>r+i):[r+o]}),un=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],dn=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...un,...dn];function rt(e,t,n,r){var o;const i=(o=Ct(e,t,!1))!=null?o:n;return typeof i=="number"?s=>typeof s=="string"?s:i*s:Array.isArray(i)?s=>typeof s=="string"?s:i[s]:typeof i=="function"?i:()=>{}}function Ar(e){return rt(e,"spacing",8)}function ot(e,t){if(typeof t=="string"||t==null)return t;const n=Math.abs(t),r=e(n);return t>=0?r:typeof r=="number"?-r:`-${r}`}function Es(e,t){return n=>e.reduce((r,o)=>(r[o]=ot(t,n),r),{})}function Ps(e,t,n,r){if(t.indexOf(n)===-1)return null;const o=Ss(n),i=Es(o,r),s=e[n];return de(e,s,i)}function Fr(e,t){const n=Ar(e.theme);return Object.keys(e).map(r=>Ps(e,t,r,n)).reduce(Ke,{})}function L(e){return Fr(e,un)}L.propTypes={};L.filterProps=un;function z(e){return Fr(e,dn)}z.propTypes={};z.filterProps=dn;function $s(e=8){if(e.mui)return e;const t=Ar({spacing:e}),n=(...r)=>(r.length===0?[1]:r).map(i=>{const s=t(i);return typeof s=="number"?`${s}px`:s}).join(" ");return n.mui=!0,n}function jt(...e){const t=e.reduce((r,o)=>(o.filterProps.forEach(i=>{r[i]=o}),r),{}),n=r=>Object.keys(r).reduce((o,i)=>t[i]?Ke(o,t[i](r)):o,{});return n.propTypes={},n.filterProps=e.reduce((r,o)=>r.concat(o.filterProps),[]),n}function te(e){return typeof e!="number"?e:`${e}px solid`}function oe(e,t){return Y({prop:e,themeKey:"borders",transform:t})}const Ms=oe("border",te),Ts=oe("borderTop",te),Os=oe("borderRight",te),Cs=oe("borderBottom",te),js=oe("borderLeft",te),Rs=oe("borderColor"),Ds=oe("borderTopColor"),_s=oe("borderRightColor"),Ws=oe("borderBottomColor"),As=oe("borderLeftColor"),Fs=oe("outline",te),Ns=oe("outlineColor"),Rt=e=>{if(e.borderRadius!==void 0&&e.borderRadius!==null){const t=rt(e.theme,"shape.borderRadius",4),n=r=>({borderRadius:ot(t,r)});return de(e,e.borderRadius,n)}return null};Rt.propTypes={};Rt.filterProps=["borderRadius"];jt(Ms,Ts,Os,Cs,js,Rs,Ds,_s,Ws,As,Rt,Fs,Ns);const Dt=e=>{if(e.gap!==void 0&&e.gap!==null){const t=rt(e.theme,"spacing",8),n=r=>({gap:ot(t,r)});return de(e,e.gap,n)}return null};Dt.propTypes={};Dt.filterProps=["gap"];const _t=e=>{if(e.columnGap!==void 0&&e.columnGap!==null){const t=rt(e.theme,"spacing",8),n=r=>({columnGap:ot(t,r)});return de(e,e.columnGap,n)}return null};_t.propTypes={};_t.filterProps=["columnGap"];const Wt=e=>{if(e.rowGap!==void 0&&e.rowGap!==null){const t=rt(e.theme,"spacing",8),n=r=>({rowGap:ot(t,r)});return de(e,e.rowGap,n)}return null};Wt.propTypes={};Wt.filterProps=["rowGap"];const Is=Y({prop:"gridColumn"}),Ls=Y({prop:"gridRow"}),zs=Y({prop:"gridAutoFlow"}),Bs=Y({prop:"gridAutoColumns"}),Hs=Y({prop:"gridAutoRows"}),Ys=Y({prop:"gridTemplateColumns"}),qs=Y({prop:"gridTemplateRows"}),Gs=Y({prop:"gridTemplateAreas"}),Us=Y({prop:"gridArea"});jt(Dt,_t,Wt,Is,Ls,zs,Bs,Hs,Ys,qs,Gs,Us);function Fe(e,t){return t==="grey"?t:e}const Ks=Y({prop:"color",themeKey:"palette",transform:Fe}),Xs=Y({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:Fe}),Vs=Y({prop:"backgroundColor",themeKey:"palette",transform:Fe});jt(Ks,Xs,Vs);function J(e){return e<=1&&e!==0?`${e*100}%`:e}const Qs=Y({prop:"width",transform:J}),fn=e=>{if(e.maxWidth!==void 0&&e.maxWidth!==null){const t=n=>{var r,o;const i=((r=e.theme)==null||(r=r.breakpoints)==null||(r=r.values)==null?void 0:r[n])||ln[n];return i?((o=e.theme)==null||(o=o.breakpoints)==null?void 0:o.unit)!=="px"?{maxWidth:`${i}${e.theme.breakpoints.unit}`}:{maxWidth:i}:{maxWidth:J(n)}};return de(e,e.maxWidth,t)}return null};fn.filterProps=["maxWidth"];const Js=Y({prop:"minWidth",transform:J}),Zs=Y({prop:"height",transform:J}),ea=Y({prop:"maxHeight",transform:J}),ta=Y({prop:"minHeight",transform:J});Y({prop:"size",cssProperty:"width",transform:J});Y({prop:"size",cssProperty:"height",transform:J});const na=Y({prop:"boxSizing"});jt(Qs,fn,Js,Zs,ea,ta,na);const ra={border:{themeKey:"borders",transform:te},borderTop:{themeKey:"borders",transform:te},borderRight:{themeKey:"borders",transform:te},borderBottom:{themeKey:"borders",transform:te},borderLeft:{themeKey:"borders",transform:te},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:te},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:Rt},color:{themeKey:"palette",transform:Fe},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:Fe},backgroundColor:{themeKey:"palette",transform:Fe},p:{style:z},pt:{style:z},pr:{style:z},pb:{style:z},pl:{style:z},px:{style:z},py:{style:z},padding:{style:z},paddingTop:{style:z},paddingRight:{style:z},paddingBottom:{style:z},paddingLeft:{style:z},paddingX:{style:z},paddingY:{style:z},paddingInline:{style:z},paddingInlineStart:{style:z},paddingInlineEnd:{style:z},paddingBlock:{style:z},paddingBlockStart:{style:z},paddingBlockEnd:{style:z},m:{style:L},mt:{style:L},mr:{style:L},mb:{style:L},ml:{style:L},mx:{style:L},my:{style:L},margin:{style:L},marginTop:{style:L},marginRight:{style:L},marginBottom:{style:L},marginLeft:{style:L},marginX:{style:L},marginY:{style:L},marginInline:{style:L},marginInlineStart:{style:L},marginInlineEnd:{style:L},marginBlock:{style:L},marginBlockStart:{style:L},marginBlockEnd:{style:L},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:Dt},rowGap:{style:Wt},columnGap:{style:_t},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:J},maxWidth:{style:fn},minWidth:{transform:J},height:{transform:J},maxHeight:{transform:J},minHeight:{transform:J},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}},it=ra;function oa(...e){const t=e.reduce((r,o)=>r.concat(Object.keys(o)),[]),n=new Set(t);return e.every(r=>n.size===Object.keys(r).length)}function ia(e,t){return typeof e=="function"?e(t):e}function Nr(){function e(n,r,o,i){const s={[n]:r,theme:o},a=i[n];if(!a)return{[n]:r};const{cssProperty:c=n,themeKey:u,transform:p,style:m}=a;if(r==null)return null;if(u==="typography"&&r==="inherit")return{[n]:r};const f=Ct(o,u)||{};return m?m(s):de(s,r,y=>{let h=pt(f,p,y);return y===h&&typeof y=="string"&&(h=pt(f,p,`${n}${y==="default"?"":an(y)}`,y)),c===!1?h:{[c]:h}})}function t(n){var r;const{sx:o,theme:i={}}=n||{};if(!o)return null;const s=(r=i.unstable_sxConfig)!=null?r:it;function a(c){let u=c;if(typeof c=="function")u=c(i);else if(typeof c!="object")return c;if(!u)return null;const p=ys(i.breakpoints),m=Object.keys(p);let f=p;return Object.keys(u).forEach(w=>{const y=ia(u[w],i);if(y!=null)if(typeof y=="object")if(s[w])f=Ke(f,e(w,y,i,s));else{const h=de({theme:i},y,v=>({[w]:v}));oa(h,y)?f[w]=t({sx:y,theme:i}):f=Ke(f,h)}else f=Ke(f,e(w,y,i,s))}),bs(m,f)}return Array.isArray(o)?o.map(a):a(o)}return t}const Ir=Nr();Ir.filterProps=["sx"];const hn=Ir;function Lr(e,t){const n=this;return n.vars&&typeof n.getColorSchemeSelector=="function"?{[n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/,"*:where($1)")]:t}:n.palette.mode===e?t:{}}const sa=["breakpoints","palette","spacing","shape"];function pn(e={},...t){const{breakpoints:n={},palette:r={},spacing:o,shape:i={}}=e,s=X(e,sa),a=Wr(n),c=$s(o);let u=ce({breakpoints:a,direction:"ltr",components:{},palette:b({mode:"light"},r),spacing:c,shape:b({},xs,i)},s);return u.applyStyles=Lr,u=t.reduce((p,m)=>ce(p,m),u),u.unstable_sxConfig=b({},it,s==null?void 0:s.unstable_sxConfig),u.unstable_sx=function(m){return hn({sx:m,theme:this})},u}const aa=Object.freeze(Object.defineProperty({__proto__:null,default:pn,private_createBreakpoints:Wr,unstable_applyStyles:Lr},Symbol.toStringTag,{value:"Module"})),ca=fe(aa),la=["sx"],ua=e=>{var t,n;const r={systemProps:{},otherProps:{}},o=(t=e==null||(n=e.theme)==null?void 0:n.unstable_sxConfig)!=null?t:it;return Object.keys(e).forEach(i=>{o[i]?r.systemProps[i]=e[i]:r.otherProps[i]=e[i]}),r};function da(e){const{sx:t}=e,n=X(e,la),{systemProps:r,otherProps:o}=ua(n);let i;return Array.isArray(t)?i=[r,...t]:typeof t=="function"?i=(...s)=>{const a=t(...s);return me(a)?b({},r,a):r}:i=b({},r,t),b({},o,{sx:i})}const fa=Object.freeze(Object.defineProperty({__proto__:null,default:hn,extendSxProp:da,unstable_createStyleFunctionSx:Nr,unstable_defaultSxConfig:it},Symbol.toStringTag,{value:"Module"})),ha=fe(fa);var Ne=_r;Object.defineProperty(nt,"__esModule",{value:!0});var pa=nt.default=Ma;nt.shouldForwardProp=ut;nt.systemDefaultTheme=void 0;var ee=Ne(ns),Qt=Ne(rs()),Xn=wa(us),ma=ds;Ne(fs);Ne(hs);var ga=Ne(ca),xa=Ne(ha);const ya=["ownerState"],ba=["variants"],va=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function zr(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(zr=function(r){return r?n:t})(e)}function wa(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=zr(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(i!=="default"&&Object.prototype.hasOwnProperty.call(e,i)){var s=o?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}function ka(e){return Object.keys(e).length===0}function Sa(e){return typeof e=="string"&&e.charCodeAt(0)>96}function ut(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const Ea=nt.systemDefaultTheme=(0,ga.default)(),Pa=e=>e&&e.charAt(0).toLowerCase()+e.slice(1);function lt({defaultTheme:e,theme:t,themeId:n}){return ka(t)?e:t[n]||t}function $a(e){return e?(t,n)=>n[e]:null}function dt(e,t){let{ownerState:n}=t,r=(0,Qt.default)(t,ya);const o=typeof e=="function"?e((0,ee.default)({ownerState:n},r)):e;if(Array.isArray(o))return o.flatMap(i=>dt(i,(0,ee.default)({ownerState:n},r)));if(o&&typeof o=="object"&&Array.isArray(o.variants)){const{variants:i=[]}=o;let a=(0,Qt.default)(o,ba);return i.forEach(c=>{let u=!0;typeof c.props=="function"?u=c.props((0,ee.default)({ownerState:n},r,n)):Object.keys(c.props).forEach(p=>{(n==null?void 0:n[p])!==c.props[p]&&r[p]!==c.props[p]&&(u=!1)}),u&&(Array.isArray(a)||(a=[a]),a.push(typeof c.style=="function"?c.style((0,ee.default)({ownerState:n},r,n)):c.style))}),a}return o}function Ma(e={}){const{themeId:t,defaultTheme:n=Ea,rootShouldForwardProp:r=ut,slotShouldForwardProp:o=ut}=e,i=s=>(0,xa.default)((0,ee.default)({},s,{theme:lt((0,ee.default)({},s,{defaultTheme:n,themeId:t}))}));return i.__mui_systemSx=!0,(s,a={})=>{(0,Xn.internal_processStyles)(s,S=>S.filter(C=>!(C!=null&&C.__mui_systemSx)));const{name:c,slot:u,skipVariantsResolver:p,skipSx:m,overridesResolver:f=$a(Pa(u))}=a,w=(0,Qt.default)(a,va),y=p!==void 0?p:u&&u!=="Root"&&u!=="root"||!1,h=m||!1;let v,P=ut;u==="Root"||u==="root"?P=r:u?P=o:Sa(s)&&(P=void 0);const k=(0,Xn.default)(s,(0,ee.default)({shouldForwardProp:P,label:v},w)),x=S=>typeof S=="function"&&S.__emotion_real!==S||(0,ma.isPlainObject)(S)?C=>dt(S,(0,ee.default)({},C,{theme:lt({theme:C.theme,defaultTheme:n,themeId:t})})):S,E=(S,...C)=>{let j=x(S);const A=C?C.map(x):[];c&&f&&A.push(N=>{const R=lt((0,ee.default)({},N,{defaultTheme:n,themeId:t}));if(!R.components||!R.components[c]||!R.components[c].styleOverrides)return null;const I=R.components[c].styleOverrides,O={};return Object.entries(I).forEach(([$,M])=>{O[$]=dt(M,(0,ee.default)({},N,{theme:R}))}),f(N,O)}),c&&!y&&A.push(N=>{var R;const I=lt((0,ee.default)({},N,{defaultTheme:n,themeId:t})),O=I==null||(R=I.components)==null||(R=R[c])==null?void 0:R.variants;return dt({variants:O},(0,ee.default)({},N,{theme:I}))}),h||A.push(i);const U=A.length-C.length;if(Array.isArray(S)&&U>0){const N=new Array(U).fill("");j=[...S,...N],j.raw=[...S.raw,...N]}const B=k(j,...A);return s.muiName&&(B.muiName=s.muiName),B};return k.withConfig&&(E.withConfig=k.withConfig),E}}function Ta(e,t){return b({toolbar:{minHeight:56,[e.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[e.up("sm")]:{minHeight:64}}},t)}var q={};const Oa=fe(xo),Ca=fe(Wo);var Br=_r;Object.defineProperty(q,"__esModule",{value:!0});var Vn=q.alpha=Gr;q.blend=Ha;q.colorChannel=void 0;var ja=q.darken=gn;q.decomposeColor=ne;q.emphasize=Ba;var Ra=q.getContrastRatio=Na;q.getLuminance=mt;q.hexToRgb=Hr;q.hslToRgb=qr;var Da=q.lighten=xn;q.private_safeAlpha=Ia;q.private_safeColorChannel=void 0;q.private_safeDarken=La;q.private_safeEmphasize=Ur;q.private_safeLighten=za;q.recomposeColor=Ie;q.rgbToHex=Fa;var Qn=Br(Oa),_a=Br(Ca);function mn(e,t=0,n=1){return(0,_a.default)(e,t,n)}function Hr(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let n=e.match(t);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,o)=>o<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function Wa(e){const t=e.toString(16);return t.length===1?`0${t}`:t}function ne(e){if(e.type)return e;if(e.charAt(0)==="#")return ne(Hr(e));const t=e.indexOf("("),n=e.substring(0,t);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error((0,Qn.default)(9,e));let r=e.substring(t+1,e.length-1),o;if(n==="color"){if(r=r.split(" "),o=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(o)===-1)throw new Error((0,Qn.default)(10,o))}else r=r.split(",");return r=r.map(i=>parseFloat(i)),{type:n,values:r,colorSpace:o}}const Yr=e=>{const t=ne(e);return t.values.slice(0,3).map((n,r)=>t.type.indexOf("hsl")!==-1&&r!==0?`${n}%`:n).join(" ")};q.colorChannel=Yr;const Aa=(e,t)=>{try{return Yr(e)}catch{return e}};q.private_safeColorChannel=Aa;function Ie(e){const{type:t,colorSpace:n}=e;let{values:r}=e;return t.indexOf("rgb")!==-1?r=r.map((o,i)=>i<3?parseInt(o,10):o):t.indexOf("hsl")!==-1&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),t.indexOf("color")!==-1?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${t}(${r})`}function Fa(e){if(e.indexOf("#")===0)return e;const{values:t}=ne(e);return`#${t.map((n,r)=>Wa(r===3?Math.round(255*n):n)).join("")}`}function qr(e){e=ne(e);const{values:t}=e,n=t[0],r=t[1]/100,o=t[2]/100,i=r*Math.min(o,1-o),s=(u,p=(u+n/30)%12)=>o-i*Math.max(Math.min(p-3,9-p,1),-1);let a="rgb";const c=[Math.round(s(0)*255),Math.round(s(8)*255),Math.round(s(4)*255)];return e.type==="hsla"&&(a+="a",c.push(t[3])),Ie({type:a,values:c})}function mt(e){e=ne(e);let t=e.type==="hsl"||e.type==="hsla"?ne(qr(e)).values:e.values;return t=t.map(n=>(e.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function Na(e,t){const n=mt(e),r=mt(t);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function Gr(e,t){return e=ne(e),t=mn(t),(e.type==="rgb"||e.type==="hsl")&&(e.type+="a"),e.type==="color"?e.values[3]=`/${t}`:e.values[3]=t,Ie(e)}function Ia(e,t,n){try{return Gr(e,t)}catch{return e}}function gn(e,t){if(e=ne(e),t=mn(t),e.type.indexOf("hsl")!==-1)e.values[2]*=1-t;else if(e.type.indexOf("rgb")!==-1||e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]*=1-t;return Ie(e)}function La(e,t,n){try{return gn(e,t)}catch{return e}}function xn(e,t){if(e=ne(e),t=mn(t),e.type.indexOf("hsl")!==-1)e.values[2]+=(100-e.values[2])*t;else if(e.type.indexOf("rgb")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;else if(e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(1-e.values[n])*t;return Ie(e)}function za(e,t,n){try{return xn(e,t)}catch{return e}}function Ba(e,t=.15){return mt(e)>.5?gn(e,t):xn(e,t)}function Ur(e,t,n){try{return Ur(e,t)}catch{return e}}function Ha(e,t,n,r=1){const o=(c,u)=>Math.round((c**(1/r)*(1-n)+u**(1/r)*n)**r),i=ne(e),s=ne(t),a=[o(i.values[0],s.values[0]),o(i.values[1],s.values[1]),o(i.values[2],s.values[2])];return Ie({type:"rgb",values:a})}const Ya={black:"#000",white:"#fff"},Ze=Ya,qa={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},Ga=qa,Ua={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},Oe=Ua,Ka={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},Ce=Ka,Xa={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},qe=Xa,Va={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},je=Va,Qa={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},Re=Qa,Ja={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},De=Ja,Za=["mode","contrastThreshold","tonalOffset"],Jn={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:Ze.white,default:Ze.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},Yt={text:{primary:Ze.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:Ze.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function Zn(e,t,n,r){const o=r.light||r,i=r.dark||r*1.5;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:t==="light"?e.light=Da(e.main,o):t==="dark"&&(e.dark=ja(e.main,i)))}function ec(e="light"){return e==="dark"?{main:je[200],light:je[50],dark:je[400]}:{main:je[700],light:je[400],dark:je[800]}}function tc(e="light"){return e==="dark"?{main:Oe[200],light:Oe[50],dark:Oe[400]}:{main:Oe[500],light:Oe[300],dark:Oe[700]}}function nc(e="light"){return e==="dark"?{main:Ce[500],light:Ce[300],dark:Ce[700]}:{main:Ce[700],light:Ce[400],dark:Ce[800]}}function rc(e="light"){return e==="dark"?{main:Re[400],light:Re[300],dark:Re[700]}:{main:Re[700],light:Re[500],dark:Re[900]}}function oc(e="light"){return e==="dark"?{main:De[400],light:De[300],dark:De[700]}:{main:De[800],light:De[500],dark:De[900]}}function ic(e="light"){return e==="dark"?{main:qe[400],light:qe[300],dark:qe[700]}:{main:"#ed6c02",light:qe[500],dark:qe[900]}}function sc(e){const{mode:t="light",contrastThreshold:n=3,tonalOffset:r=.2}=e,o=X(e,Za),i=e.primary||ec(t),s=e.secondary||tc(t),a=e.error||nc(t),c=e.info||rc(t),u=e.success||oc(t),p=e.warning||ic(t);function m(h){return Ra(h,Yt.text.primary)>=n?Yt.text.primary:Jn.text.primary}const f=({color:h,name:v,mainShade:P=500,lightShade:k=300,darkShade:x=700})=>{if(h=b({},h),!h.main&&h[P]&&(h.main=h[P]),!h.hasOwnProperty("main"))throw new Error(Ve(11,v?` (${v})`:"",P));if(typeof h.main!="string")throw new Error(Ve(12,v?` (${v})`:"",JSON.stringify(h.main)));return Zn(h,"light",k,r),Zn(h,"dark",x,r),h.contrastText||(h.contrastText=m(h.main)),h},w={dark:Yt,light:Jn};return ce(b({common:b({},Ze),mode:t,primary:f({color:i,name:"primary"}),secondary:f({color:s,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:f({color:a,name:"error"}),warning:f({color:p,name:"warning"}),info:f({color:c,name:"info"}),success:f({color:u,name:"success"}),grey:Ga,contrastThreshold:n,getContrastText:m,augmentColor:f,tonalOffset:r},w[t]),o)}const ac=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function cc(e){return Math.round(e*1e5)/1e5}const er={textTransform:"uppercase"},tr='"Roboto", "Helvetica", "Arial", sans-serif';function lc(e,t){const n=typeof t=="function"?t(e):t,{fontFamily:r=tr,fontSize:o=14,fontWeightLight:i=300,fontWeightRegular:s=400,fontWeightMedium:a=500,fontWeightBold:c=700,htmlFontSize:u=16,allVariants:p,pxToRem:m}=n,f=X(n,ac),w=o/14,y=m||(P=>`${P/u*w}rem`),h=(P,k,x,E,S)=>b({fontFamily:r,fontWeight:P,fontSize:y(k),lineHeight:x},r===tr?{letterSpacing:`${cc(E/k)}em`}:{},S,p),v={h1:h(i,96,1.167,-1.5),h2:h(i,60,1.2,-.5),h3:h(s,48,1.167,0),h4:h(s,34,1.235,.25),h5:h(s,24,1.334,0),h6:h(a,20,1.6,.15),subtitle1:h(s,16,1.75,.15),subtitle2:h(a,14,1.57,.1),body1:h(s,16,1.5,.15),body2:h(s,14,1.43,.15),button:h(a,14,1.75,.4,er),caption:h(s,12,1.66,.4),overline:h(s,12,2.66,1,er),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return ce(b({htmlFontSize:u,pxToRem:y,fontFamily:r,fontSize:o,fontWeightLight:i,fontWeightRegular:s,fontWeightMedium:a,fontWeightBold:c},v),f,{clone:!1})}const uc=.2,dc=.14,fc=.12;function F(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${uc})`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${dc})`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${fc})`].join(",")}const hc=["none",F(0,2,1,-1,0,1,1,0,0,1,3,0),F(0,3,1,-2,0,2,2,0,0,1,5,0),F(0,3,3,-2,0,3,4,0,0,1,8,0),F(0,2,4,-1,0,4,5,0,0,1,10,0),F(0,3,5,-1,0,5,8,0,0,1,14,0),F(0,3,5,-1,0,6,10,0,0,1,18,0),F(0,4,5,-2,0,7,10,1,0,2,16,1),F(0,5,5,-3,0,8,10,1,0,3,14,2),F(0,5,6,-3,0,9,12,1,0,3,16,2),F(0,6,6,-3,0,10,14,1,0,4,18,3),F(0,6,7,-4,0,11,15,1,0,4,20,3),F(0,7,8,-4,0,12,17,2,0,5,22,4),F(0,7,8,-4,0,13,19,2,0,5,24,4),F(0,7,9,-4,0,14,21,2,0,5,26,4),F(0,8,9,-5,0,15,22,2,0,6,28,5),F(0,8,10,-5,0,16,24,2,0,6,30,5),F(0,8,11,-5,0,17,26,2,0,6,32,5),F(0,9,11,-5,0,18,28,2,0,7,34,6),F(0,9,12,-6,0,19,29,2,0,7,36,6),F(0,10,13,-6,0,20,31,3,0,8,38,7),F(0,10,13,-6,0,21,33,3,0,8,40,7),F(0,10,14,-6,0,22,35,3,0,8,42,7),F(0,11,14,-7,0,23,36,3,0,9,44,8),F(0,11,15,-7,0,24,38,3,0,9,46,8)],pc=hc,mc=["duration","easing","delay"],gc={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},xc={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function nr(e){return`${Math.round(e)}ms`}function yc(e){if(!e)return 0;const t=e/36;return Math.round((4+15*t**.25+t/5)*10)}function bc(e){const t=b({},gc,e.easing),n=b({},xc,e.duration);return b({getAutoHeightDuration:yc,create:(o=["all"],i={})=>{const{duration:s=n.standard,easing:a=t.easeInOut,delay:c=0}=i;return X(i,mc),(Array.isArray(o)?o:[o]).map(u=>`${u} ${typeof s=="string"?s:nr(s)} ${a} ${typeof c=="string"?c:nr(c)}`).join(",")}},e,{easing:t,duration:n})}const vc={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},wc=vc,kc=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function Sc(e={},...t){const{mixins:n={},palette:r={},transitions:o={},typography:i={}}=e,s=X(e,kc);if(e.vars)throw new Error(Ve(18));const a=sc(r),c=pn(e);let u=ce(c,{mixins:Ta(c.breakpoints,n),palette:a,shadows:pc.slice(),typography:lc(a,i),transitions:bc(o),zIndex:b({},wc)});return u=ce(u,s),u=t.reduce((p,m)=>ce(p,m),u),u.unstable_sxConfig=b({},it,s==null?void 0:s.unstable_sxConfig),u.unstable_sx=function(m){return hn({sx:m,theme:this})},u}const Ec=Sc(),yn=Ec,bn="$$material";function Pc(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const $c=e=>Pc(e)&&e!=="classes",Mc=$c,Tc=pa({themeId:bn,defaultTheme:yn,rootShouldForwardProp:Mc}),Le=Tc;function Oc(e){const{theme:t,name:n,props:r}=e;return!t||!t.components||!t.components[n]||!t.components[n].defaultProps?r:Er(t.components[n].defaultProps,r)}function Cc(e){return Object.keys(e).length===0}function jc(e=null){const t=d.useContext(tn);return!t||Cc(t)?e:t}const Rc=pn();function Kr(e=Rc){return jc(e)}function Dc({props:e,name:t,defaultTheme:n,themeId:r}){let o=Kr(n);return r&&(o=o[r]||o),Oc({theme:o,name:t,props:e})}function At({props:e,name:t}){return Dc({props:e,name:t,defaultTheme:yn,themeId:bn})}function Jt(e,t){return Jt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},Jt(e,t)}function _c(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Jt(e,t)}const rr={disabled:!1},Xr=Ge.createContext(null);var Wc=function(t){return t.scrollTop},Ue="unmounted",ve="exited",we="entering",We="entered",Zt="exiting",he=function(e){_c(t,e);function t(r,o){var i;i=e.call(this,r,o)||this;var s=o,a=s&&!s.isMounting?r.enter:r.appear,c;return i.appearStatus=null,r.in?a?(c=ve,i.appearStatus=we):c=We:r.unmountOnExit||r.mountOnEnter?c=Ue:c=ve,i.state={status:c},i.nextCallback=null,i}t.getDerivedStateFromProps=function(o,i){var s=o.in;return s&&i.status===Ue?{status:ve}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(o){var i=null;if(o!==this.props){var s=this.state.status;this.props.in?s!==we&&s!==We&&(i=we):(s===we||s===We)&&(i=Zt)}this.updateStatus(!1,i)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var o=this.props.timeout,i,s,a;return i=s=a=o,o!=null&&typeof o!="number"&&(i=o.exit,s=o.enter,a=o.appear!==void 0?o.appear:s),{exit:i,enter:s,appear:a}},n.updateStatus=function(o,i){if(o===void 0&&(o=!1),i!==null)if(this.cancelNextCallback(),i===we){if(this.props.unmountOnExit||this.props.mountOnEnter){var s=this.props.nodeRef?this.props.nodeRef.current:ct.findDOMNode(this);s&&Wc(s)}this.performEnter(o)}else this.performExit();else this.props.unmountOnExit&&this.state.status===ve&&this.setState({status:Ue})},n.performEnter=function(o){var i=this,s=this.props.enter,a=this.context?this.context.isMounting:o,c=this.props.nodeRef?[a]:[ct.findDOMNode(this),a],u=c[0],p=c[1],m=this.getTimeouts(),f=a?m.appear:m.enter;if(!o&&!s||rr.disabled){this.safeSetState({status:We},function(){i.props.onEntered(u)});return}this.props.onEnter(u,p),this.safeSetState({status:we},function(){i.props.onEntering(u,p),i.onTransitionEnd(f,function(){i.safeSetState({status:We},function(){i.props.onEntered(u,p)})})})},n.performExit=function(){var o=this,i=this.props.exit,s=this.getTimeouts(),a=this.props.nodeRef?void 0:ct.findDOMNode(this);if(!i||rr.disabled){this.safeSetState({status:ve},function(){o.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:Zt},function(){o.props.onExiting(a),o.onTransitionEnd(s.exit,function(){o.safeSetState({status:ve},function(){o.props.onExited(a)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(o,i){i=this.setNextCallback(i),this.setState(o,i)},n.setNextCallback=function(o){var i=this,s=!0;return this.nextCallback=function(a){s&&(s=!1,i.nextCallback=null,o(a))},this.nextCallback.cancel=function(){s=!1},this.nextCallback},n.onTransitionEnd=function(o,i){this.setNextCallback(i);var s=this.props.nodeRef?this.props.nodeRef.current:ct.findDOMNode(this),a=o==null&&!this.props.addEndListener;if(!s||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var c=this.props.nodeRef?[this.nextCallback]:[s,this.nextCallback],u=c[0],p=c[1];this.props.addEndListener(u,p)}o!=null&&setTimeout(this.nextCallback,o)},n.render=function(){var o=this.state.status;if(o===Ue)return null;var i=this.props,s=i.children;i.in,i.mountOnEnter,i.unmountOnExit,i.appear,i.enter,i.exit,i.timeout,i.addEndListener,i.onEnter,i.onEntering,i.onEntered,i.onExit,i.onExiting,i.onExited,i.nodeRef;var a=X(i,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Ge.createElement(Xr.Provider,{value:null},typeof s=="function"?s(o,a):Ge.cloneElement(Ge.Children.only(s),a))},t}(Ge.Component);he.contextType=Xr;he.propTypes={};function _e(){}he.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:_e,onEntering:_e,onEntered:_e,onExit:_e,onExiting:_e,onExited:_e};he.UNMOUNTED=Ue;he.EXITED=ve;he.ENTERING=we;he.ENTERED=We;he.EXITING=Zt;const Vr=he;function Qr(){const e=Kr(yn);return e[bn]||e}const Jr=e=>e.scrollTop;function gt(e,t){var n,r;const{timeout:o,easing:i,style:s={}}=e;return{duration:(n=s.transitionDuration)!=null?n:typeof o=="number"?o:o[t.mode]||0,easing:(r=s.transitionTimingFunction)!=null?r:typeof i=="object"?i[t.mode]:i,delay:s.transitionDelay}}const Ac=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function en(e){return`scale(${e}, ${e**2})`}const Fc={entering:{opacity:1,transform:en(1)},entered:{opacity:1,transform:"none"}},qt=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),Zr=d.forwardRef(function(t,n){const{addEndListener:r,appear:o=!0,children:i,easing:s,in:a,onEnter:c,onEntered:u,onEntering:p,onExit:m,onExited:f,onExiting:w,style:y,timeout:h="auto",TransitionComponent:v=Vr}=t,P=X(t,Ac),k=To(),x=d.useRef(),E=Qr(),S=d.useRef(null),C=ke(S,i.ref,n),j=$=>M=>{if($){const T=S.current;M===void 0?$(T):$(T,M)}},A=j(p),U=j(($,M)=>{Jr($);const{duration:T,delay:K,easing:V}=gt({style:y,timeout:h,easing:s},{mode:"enter"});let se;h==="auto"?(se=E.transitions.getAutoHeightDuration($.clientHeight),x.current=se):se=T,$.style.transition=[E.transitions.create("opacity",{duration:se,delay:K}),E.transitions.create("transform",{duration:qt?se:se*.666,delay:K,easing:V})].join(","),c&&c($,M)}),B=j(u),N=j(w),R=j($=>{const{duration:M,delay:T,easing:K}=gt({style:y,timeout:h,easing:s},{mode:"exit"});let V;h==="auto"?(V=E.transitions.getAutoHeightDuration($.clientHeight),x.current=V):V=M,$.style.transition=[E.transitions.create("opacity",{duration:V,delay:T}),E.transitions.create("transform",{duration:qt?V:V*.666,delay:qt?T:T||V*.333,easing:K})].join(","),$.style.opacity=0,$.style.transform=en(.75),m&&m($)}),I=j(f),O=$=>{h==="auto"&&k.start(x.current||0,$),r&&r(S.current,$)};return l.jsx(v,b({appear:o,in:a,nodeRef:S,onEnter:U,onEntered:B,onEntering:A,onExit:R,onExited:I,onExiting:N,addEndListener:O,timeout:h==="auto"?null:h},P,{children:($,M)=>d.cloneElement(i,b({style:b({opacity:0,transform:en(.75),visibility:$==="exited"&&!a?"hidden":void 0},Fc[$],y,i.props.style),ref:C},M))}))});Zr.muiSupportAuto=!0;const Nc=Zr;function Ic(e){const t=ae(e);return t.body===e?Qe(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function Xe(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function or(e){return parseInt(Qe(e).getComputedStyle(e).paddingRight,10)||0}function Lc(e){const n=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,r=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return n||r}function ir(e,t,n,r,o){const i=[t,n,...r];[].forEach.call(e.children,s=>{const a=i.indexOf(s)===-1,c=!Lc(s);a&&c&&Xe(s,o)})}function Gt(e,t){let n=-1;return e.some((r,o)=>t(r)?(n=o,!0):!1),n}function zc(e,t){const n=[],r=e.container;if(!t.disableScrollLock){if(Ic(r)){const s=Oo(ae(r));n.push({value:r.style.paddingRight,property:"padding-right",el:r}),r.style.paddingRight=`${or(r)+s}px`;const a=ae(r).querySelectorAll(".mui-fixed");[].forEach.call(a,c=>{n.push({value:c.style.paddingRight,property:"padding-right",el:c}),c.style.paddingRight=`${or(c)+s}px`})}let i;if(r.parentNode instanceof DocumentFragment)i=ae(r).body;else{const s=r.parentElement,a=Qe(r);i=(s==null?void 0:s.nodeName)==="HTML"&&a.getComputedStyle(s).overflowY==="scroll"?s:r}n.push({value:i.style.overflow,property:"overflow",el:i},{value:i.style.overflowX,property:"overflow-x",el:i},{value:i.style.overflowY,property:"overflow-y",el:i}),i.style.overflow="hidden"}return()=>{n.forEach(({value:i,el:s,property:a})=>{i?s.style.setProperty(a,i):s.style.removeProperty(a)})}}function Bc(e){const t=[];return[].forEach.call(e.children,n=>{n.getAttribute("aria-hidden")==="true"&&t.push(n)}),t}class Hc{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,n){let r=this.modals.indexOf(t);if(r!==-1)return r;r=this.modals.length,this.modals.push(t),t.modalRef&&Xe(t.modalRef,!1);const o=Bc(n);ir(n,t.mount,t.modalRef,o,!0);const i=Gt(this.containers,s=>s.container===n);return i!==-1?(this.containers[i].modals.push(t),r):(this.containers.push({modals:[t],container:n,restore:null,hiddenSiblings:o}),r)}mount(t,n){const r=Gt(this.containers,i=>i.modals.indexOf(t)!==-1),o=this.containers[r];o.restore||(o.restore=zc(o,n))}remove(t,n=!0){const r=this.modals.indexOf(t);if(r===-1)return r;const o=Gt(this.containers,s=>s.modals.indexOf(t)!==-1),i=this.containers[o];if(i.modals.splice(i.modals.indexOf(t),1),this.modals.splice(r,1),i.modals.length===0)i.restore&&i.restore(),t.modalRef&&Xe(t.modalRef,n),ir(i.container,t.mount,t.modalRef,i.hiddenSiblings,!1),this.containers.splice(o,1);else{const s=i.modals[i.modals.length-1];s.modalRef&&Xe(s.modalRef,!1)}return r}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}function Yc(e){return typeof e=="function"?e():e}function qc(e){return e?e.props.hasOwnProperty("in"):!1}const Gc=new Hc;function Uc(e){const{container:t,disableEscapeKeyDown:n=!1,disableScrollLock:r=!1,manager:o=Gc,closeAfterTransition:i=!1,onTransitionEnter:s,onTransitionExited:a,children:c,onClose:u,open:p,rootRef:m}=e,f=d.useRef({}),w=d.useRef(null),y=d.useRef(null),h=ke(y,m),[v,P]=d.useState(!p),k=qc(c);let x=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(x=!1);const E=()=>ae(w.current),S=()=>(f.current.modalRef=y.current,f.current.mount=w.current,f.current),C=()=>{o.mount(S(),{disableScrollLock:r}),y.current&&(y.current.scrollTop=0)},j=Mn(()=>{const M=Yc(t)||E().body;o.add(S(),M),y.current&&C()}),A=d.useCallback(()=>o.isTopModal(S()),[o]),U=Mn(M=>{w.current=M,M&&(p&&A()?C():y.current&&Xe(y.current,x))}),B=d.useCallback(()=>{o.remove(S(),x)},[x,o]);d.useEffect(()=>()=>{B()},[B]),d.useEffect(()=>{p?j():(!k||!i)&&B()},[p,B,k,i,j]);const N=M=>T=>{var K;(K=M.onKeyDown)==null||K.call(M,T),!(T.key!=="Escape"||T.which===229||!A())&&(n||(T.stopPropagation(),u&&u(T,"escapeKeyDown")))},R=M=>T=>{var K;(K=M.onClick)==null||K.call(M,T),T.target===T.currentTarget&&u&&u(T,"backdropClick")};return{getRootProps:(M={})=>{const T=Rr(e);delete T.onTransitionEnter,delete T.onTransitionExited;const K=b({},T,M);return b({role:"presentation"},K,{onKeyDown:N(K),ref:h})},getBackdropProps:(M={})=>{const T=M;return b({"aria-hidden":!0},T,{onClick:R(T),open:p})},getTransitionProps:()=>{const M=()=>{P(!1),s&&s()},T=()=>{P(!0),a&&a(),i&&B()};return{onEnter:Dn(M,c==null?void 0:c.props.onEnter),onExited:Dn(T,c==null?void 0:c.props.onExited)}},rootRef:h,portalRef:U,isTopModal:A,exited:v,hasTransition:k}}const Kc=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function Xc(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function Vc(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=r=>e.ownerDocument.querySelector(`input[type="radio"]${r}`);let n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}function Qc(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||Vc(e))}function Jc(e){const t=[],n=[];return Array.from(e.querySelectorAll(Kc)).forEach((r,o)=>{const i=Xc(r);i===-1||!Qc(r)||(i===0?t.push(r):n.push({documentOrder:o,tabIndex:i,node:r}))}),n.sort((r,o)=>r.tabIndex===o.tabIndex?r.documentOrder-o.documentOrder:r.tabIndex-o.tabIndex).map(r=>r.node).concat(t)}function Zc(){return!0}function el(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:r=!1,disableRestoreFocus:o=!1,getTabbable:i=Jc,isEnabled:s=Zc,open:a}=e,c=d.useRef(!1),u=d.useRef(null),p=d.useRef(null),m=d.useRef(null),f=d.useRef(null),w=d.useRef(!1),y=d.useRef(null),h=ke(t.ref,y),v=d.useRef(null);d.useEffect(()=>{!a||!y.current||(w.current=!n)},[n,a]),d.useEffect(()=>{if(!a||!y.current)return;const x=ae(y.current);return y.current.contains(x.activeElement)||(y.current.hasAttribute("tabIndex")||y.current.setAttribute("tabIndex","-1"),w.current&&y.current.focus()),()=>{o||(m.current&&m.current.focus&&(c.current=!0,m.current.focus()),m.current=null)}},[a]),d.useEffect(()=>{if(!a||!y.current)return;const x=ae(y.current),E=j=>{v.current=j,!(r||!s()||j.key!=="Tab")&&x.activeElement===y.current&&j.shiftKey&&(c.current=!0,p.current&&p.current.focus())},S=()=>{const j=y.current;if(j===null)return;if(!x.hasFocus()||!s()||c.current){c.current=!1;return}if(j.contains(x.activeElement)||r&&x.activeElement!==u.current&&x.activeElement!==p.current)return;if(x.activeElement!==f.current)f.current=null;else if(f.current!==null)return;if(!w.current)return;let A=[];if((x.activeElement===u.current||x.activeElement===p.current)&&(A=i(y.current)),A.length>0){var U,B;const N=!!((U=v.current)!=null&&U.shiftKey&&((B=v.current)==null?void 0:B.key)==="Tab"),R=A[0],I=A[A.length-1];typeof R!="string"&&typeof I!="string"&&(N?I.focus():R.focus())}else j.focus()};x.addEventListener("focusin",S),x.addEventListener("keydown",E,!0);const C=setInterval(()=>{x.activeElement&&x.activeElement.tagName==="BODY"&&S()},50);return()=>{clearInterval(C),x.removeEventListener("focusin",S),x.removeEventListener("keydown",E,!0)}},[n,r,o,s,a,i]);const P=x=>{m.current===null&&(m.current=x.relatedTarget),w.current=!0,f.current=x.target;const E=t.props.onFocus;E&&E(x)},k=x=>{m.current===null&&(m.current=x.relatedTarget),w.current=!0};return l.jsxs(d.Fragment,{children:[l.jsx("div",{tabIndex:a?0:-1,onFocus:k,ref:u,"data-testid":"sentinelStart"}),d.cloneElement(t,{ref:h,onFocus:P}),l.jsx("div",{tabIndex:a?0:-1,onFocus:k,ref:p,"data-testid":"sentinelEnd"})]})}function tl(e){return typeof e=="function"?e():e}const nl=d.forwardRef(function(t,n){const{children:r,container:o,disablePortal:i=!1}=t,[s,a]=d.useState(null),c=ke(d.isValidElement(r)?r.ref:null,n);if(Tn(()=>{i||a(tl(o)||document.body)},[o,i]),Tn(()=>{if(s&&!i)return On(n,s),()=>{On(n,null)}},[n,s,i]),i){if(d.isValidElement(r)){const u={ref:c};return d.cloneElement(r,u)}return l.jsx(d.Fragment,{children:r})}return l.jsx(d.Fragment,{children:s&&co.createPortal(r,s)})}),rl=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],ol={entering:{opacity:1},entered:{opacity:1}},il=d.forwardRef(function(t,n){const r=Qr(),o={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:i,appear:s=!0,children:a,easing:c,in:u,onEnter:p,onEntered:m,onEntering:f,onExit:w,onExited:y,onExiting:h,style:v,timeout:P=o,TransitionComponent:k=Vr}=t,x=X(t,rl),E=d.useRef(null),S=ke(E,a.ref,n),C=O=>$=>{if(O){const M=E.current;$===void 0?O(M):O(M,$)}},j=C(f),A=C((O,$)=>{Jr(O);const M=gt({style:v,timeout:P,easing:c},{mode:"enter"});O.style.webkitTransition=r.transitions.create("opacity",M),O.style.transition=r.transitions.create("opacity",M),p&&p(O,$)}),U=C(m),B=C(h),N=C(O=>{const $=gt({style:v,timeout:P,easing:c},{mode:"exit"});O.style.webkitTransition=r.transitions.create("opacity",$),O.style.transition=r.transitions.create("opacity",$),w&&w(O)}),R=C(y),I=O=>{i&&i(E.current,O)};return l.jsx(k,b({appear:s,in:u,nodeRef:E,onEnter:A,onEntered:U,onEntering:j,onExit:N,onExited:R,onExiting:B,addEndListener:I,timeout:P},x,{children:(O,$)=>d.cloneElement(a,b({style:b({opacity:0,visibility:O==="exited"&&!u?"hidden":void 0},ol[O],v,a.props.style),ref:S},$))}))}),sl=il;function al(e){return tt("MuiBackdrop",e)}Tt("MuiBackdrop",["root","invisible"]);const cl=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],ll=e=>{const{classes:t,invisible:n}=e;return Mt({root:["root",n&&"invisible"]},al,t)},ul=Le("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})(({ownerState:e})=>b({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),dl=d.forwardRef(function(t,n){var r,o,i;const s=At({props:t,name:"MuiBackdrop"}),{children:a,className:c,component:u="div",components:p={},componentsProps:m={},invisible:f=!1,open:w,slotProps:y={},slots:h={},TransitionComponent:v=sl,transitionDuration:P}=s,k=X(s,cl),x=b({},s,{component:u,invisible:f}),E=ll(x),S=(r=y.root)!=null?r:m.root;return l.jsx(v,b({in:w,timeout:P},k,{children:l.jsx(ul,b({"aria-hidden":!0},S,{as:(o=(i=h.root)!=null?i:p.Root)!=null?o:u,className:ge(E.root,c,S==null?void 0:S.className),ownerState:b({},x,S==null?void 0:S.ownerState),classes:E,ref:n,children:a}))}))}),fl=dl;function hl(e){return tt("MuiModal",e)}Tt("MuiModal",["root","hidden","backdrop"]);const pl=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],ml=e=>{const{open:t,exited:n,classes:r}=e;return Mt({root:["root",!t&&n&&"hidden"],backdrop:["backdrop"]},hl,r)},gl=Le("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})(({theme:e,ownerState:t})=>b({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),xl=Le(fl,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),yl=d.forwardRef(function(t,n){var r,o,i,s,a,c;const u=At({name:"MuiModal",props:t}),{BackdropComponent:p=xl,BackdropProps:m,className:f,closeAfterTransition:w=!1,children:y,container:h,component:v,components:P={},componentsProps:k={},disableAutoFocus:x=!1,disableEnforceFocus:E=!1,disableEscapeKeyDown:S=!1,disablePortal:C=!1,disableRestoreFocus:j=!1,disableScrollLock:A=!1,hideBackdrop:U=!1,keepMounted:B=!1,onBackdropClick:N,open:R,slotProps:I,slots:O}=u,$=X(u,pl),M=b({},u,{closeAfterTransition:w,disableAutoFocus:x,disableEnforceFocus:E,disableEscapeKeyDown:S,disablePortal:C,disableRestoreFocus:j,disableScrollLock:A,hideBackdrop:U,keepMounted:B}),{getRootProps:T,getBackdropProps:K,getTransitionProps:V,portalRef:se,isTopModal:st,exited:Z,hasTransition:at}=Uc(b({},M,{rootRef:n})),xe=b({},M,{exited:Z}),le=ml(xe),Se={};if(y.props.tabIndex===void 0&&(Se.tabIndex="-1"),at){const{onEnter:W,onExited:G}=V();Se.onEnter=W,Se.onExited=G}const Ee=(r=(o=O==null?void 0:O.root)!=null?o:P.Root)!=null?r:gl,ze=(i=(s=O==null?void 0:O.backdrop)!=null?s:P.Backdrop)!=null?i:p,Be=(a=I==null?void 0:I.root)!=null?a:k.root,Pe=(c=I==null?void 0:I.backdrop)!=null?c:k.backdrop,Nt=ht({elementType:Ee,externalSlotProps:Be,externalForwardedProps:$,getSlotProps:T,additionalProps:{ref:n,as:v},ownerState:xe,className:ge(f,Be==null?void 0:Be.className,le==null?void 0:le.root,!xe.open&&xe.exited&&(le==null?void 0:le.hidden))}),It=ht({elementType:ze,externalSlotProps:Pe,additionalProps:m,getSlotProps:W=>K(b({},W,{onClick:G=>{N&&N(G),W!=null&&W.onClick&&W.onClick(G)}})),className:ge(Pe==null?void 0:Pe.className,m==null?void 0:m.className,le==null?void 0:le.backdrop),ownerState:xe});return!B&&!R&&(!at||Z)?null:l.jsx(nl,{ref:se,container:h,disablePortal:C,children:l.jsxs(Ee,b({},Nt,{children:[!U&&p?l.jsx(ze,b({},It)):null,l.jsx(el,{disableEnforceFocus:E,disableAutoFocus:x,disableRestoreFocus:j,isEnabled:st,open:R,children:d.cloneElement(y,Se)})]}))})}),bl=yl,vl=e=>{let t;return e<1?t=5.11916*e**2:t=4.5*Math.log(e+1)+2,(t/100).toFixed(2)},sr=vl;function wl(e){return tt("MuiPaper",e)}Tt("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const kl=["className","component","elevation","square","variant"],Sl=e=>{const{square:t,elevation:n,variant:r,classes:o}=e,i={root:["root",r,!t&&"rounded",r==="elevation"&&`elevation${n}`]};return Mt(i,wl,o)},El=Le("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,n.variant==="elevation"&&t[`elevation${n.elevation}`]]}})(({theme:e,ownerState:t})=>{var n;return b({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},t.variant==="elevation"&&b({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${Vn("#fff",sr(t.elevation))}, ${Vn("#fff",sr(t.elevation))})`},e.vars&&{backgroundImage:(n=e.vars.overlays)==null?void 0:n[t.elevation]}))}),Pl=d.forwardRef(function(t,n){const r=At({props:t,name:"MuiPaper"}),{className:o,component:i="div",elevation:s=1,square:a=!1,variant:c="elevation"}=r,u=X(r,kl),p=b({},r,{component:i,elevation:s,square:a,variant:c}),m=Sl(p);return l.jsx(El,b({as:i,ownerState:p,className:ge(m.root,o),ref:n},u))}),$l=Pl;function Ml(e){return tt("MuiPopover",e)}Tt("MuiPopover",["root","paper"]);const Tl=["onEntering"],Ol=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps","disableScrollLock"],Cl=["slotProps"];function ar(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.height/2:t==="bottom"&&(n=e.height),n}function cr(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.width/2:t==="right"&&(n=e.width),n}function lr(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function Ut(e){return typeof e=="function"?e():e}const jl=e=>{const{classes:t}=e;return Mt({root:["root"],paper:["paper"]},Ml,t)},Rl=Le(bl,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Dl=Le($l,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),_l=d.forwardRef(function(t,n){var r,o,i;const s=At({props:t,name:"MuiPopover"}),{action:a,anchorEl:c,anchorOrigin:u={vertical:"top",horizontal:"left"},anchorPosition:p,anchorReference:m="anchorEl",children:f,className:w,container:y,elevation:h=8,marginThreshold:v=16,open:P,PaperProps:k={},slots:x,slotProps:E,transformOrigin:S={vertical:"top",horizontal:"left"},TransitionComponent:C=Nc,transitionDuration:j="auto",TransitionProps:{onEntering:A}={},disableScrollLock:U=!1}=s,B=X(s.TransitionProps,Tl),N=X(s,Ol),R=(r=E==null?void 0:E.paper)!=null?r:k,I=d.useRef(),O=ke(I,R.ref),$=b({},s,{anchorOrigin:u,anchorReference:m,elevation:h,marginThreshold:v,externalPaperSlotProps:R,transformOrigin:S,TransitionComponent:C,transitionDuration:j,TransitionProps:B}),M=jl($),T=d.useCallback(()=>{if(m==="anchorPosition")return p;const W=Ut(c),Q=(W&&W.nodeType===1?W:ae(I.current).body).getBoundingClientRect();return{top:Q.top+ar(Q,u.vertical),left:Q.left+cr(Q,u.horizontal)}},[c,u.horizontal,u.vertical,p,m]),K=d.useCallback(W=>({vertical:ar(W,S.vertical),horizontal:cr(W,S.horizontal)}),[S.horizontal,S.vertical]),V=d.useCallback(W=>{const G={width:W.offsetWidth,height:W.offsetHeight},Q=K(G);if(m==="none")return{top:null,left:null,transformOrigin:lr(Q)};const vn=T();let $e=vn.top-Q.vertical,Me=vn.left-Q.horizontal;const wn=$e+G.height,kn=Me+G.width,Sn=Qe(Ut(c)),En=Sn.innerHeight-v,Pn=Sn.innerWidth-v;if(v!==null&&$e<v){const ie=$e-v;$e-=ie,Q.vertical+=ie}else if(v!==null&&wn>En){const ie=wn-En;$e-=ie,Q.vertical+=ie}if(v!==null&&Me<v){const ie=Me-v;Me-=ie,Q.horizontal+=ie}else if(kn>Pn){const ie=kn-Pn;Me-=ie,Q.horizontal+=ie}return{top:`${Math.round($e)}px`,left:`${Math.round(Me)}px`,transformOrigin:lr(Q)}},[c,m,T,K,v]),[se,st]=d.useState(P),Z=d.useCallback(()=>{const W=I.current;if(!W)return;const G=V(W);G.top!==null&&(W.style.top=G.top),G.left!==null&&(W.style.left=G.left),W.style.transformOrigin=G.transformOrigin,st(!0)},[V]);d.useEffect(()=>(U&&window.addEventListener("scroll",Z),()=>window.removeEventListener("scroll",Z)),[c,U,Z]);const at=(W,G)=>{A&&A(W,G),Z()},xe=()=>{st(!1)};d.useEffect(()=>{P&&Z()}),d.useImperativeHandle(a,()=>P?{updatePosition:()=>{Z()}}:null,[P,Z]),d.useEffect(()=>{if(!P)return;const W=Eo(()=>{Z()}),G=Qe(c);return G.addEventListener("resize",W),()=>{W.clear(),G.removeEventListener("resize",W)}},[c,P,Z]);let le=j;j==="auto"&&!C.muiSupportAuto&&(le=void 0);const Se=y||(c?ae(Ut(c)).body:void 0),Ee=(o=x==null?void 0:x.root)!=null?o:Rl,ze=(i=x==null?void 0:x.paper)!=null?i:Dl,Be=ht({elementType:ze,externalSlotProps:b({},R,{style:se?R.style:b({},R.style,{opacity:0})}),additionalProps:{elevation:h,ref:O},ownerState:$,className:ge(M.paper,R==null?void 0:R.className)}),Pe=ht({elementType:Ee,externalSlotProps:(E==null?void 0:E.root)||{},externalForwardedProps:N,additionalProps:{ref:n,slotProps:{backdrop:{invisible:!0}},container:Se,open:P},ownerState:$,className:ge(M.root,w)}),{slotProps:Nt}=Pe,It=X(Pe,Cl);return l.jsx(Ee,b({},It,!jr(Ee)&&{slotProps:Nt,disableScrollLock:U},{children:l.jsx(C,b({appear:!0,in:P,onEntering:at,onExited:xe,timeout:le},B,{children:l.jsx(ze,b({},Be,{children:f}))}))}))}),Wl=_l,Al=g.div`
display: flex;
flex-direction:column;
gap: 16px;
padding: 24px 13px;


border-radius: 10px;
background:${e=>e.theme.colors.primary.bg};
box-shadow: 0px 4px 4px 0px rgba(64, 123, 255, 0.30);



`,Fl=g.h2`
color:${e=>e.theme.colors.primary.accent};
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 1.25;
`,Nl=g.ul`
display: flex;
flex-direction: column;
gap: 16px;

color: ${e=>e.theme.colors.primary.text};

font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 1.25;
`,Kt=g.li`

span{
  color:${e=>e.theme.colors.primary.accent};

  font-size: 18px;

  font-weight: 500;
  line-height: 1.33;
}

`,Il=({selectedDate:e,selectedDayData:t})=>{const n=Ae(e,"MMMM"),r=e.getDate(),o=nn().user.waterRate,i=o?(o/1e3).toFixed(1):"0",s=t?(t.waterRate/1e3).toFixed(1):i,a=t?t.percentagePerDay:"0",c=t?t.totalPortions:"0";return l.jsxs(Al,{children:[l.jsxs(Fl,{children:[" ",r,", ",n]}),l.jsxs(Nl,{children:[l.jsxs(Kt,{children:["Daily Norma: ",l.jsxs("span",{children:[s," L"]})]}),l.jsxs(Kt,{children:["Fulfillment of the daily norm: ",l.jsxs("span",{children:[a,"%"]})]}),l.jsxs(Kt,{children:["How many servings of water: ",l.jsx("span",{children:c})]})]})]})},Ll=g.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,zl=g.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom:16px;


 h3{
  font-size: 24px;
font-weight: 500;
line-height: 1.25;
 }

 @media (min-width: ${({theme:e})=>e.screens.tab}){
 

 h3{
  font-size: 26px;

line-height: 1.23;
 }
 }
 
`,Bl=g.ul`
  display: grid;
  justify-content: space-between;
  align-content: start;
  grid-template-columns: repeat(auto-fill, 32px);
  gap: 16px 26px;

  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;

  min-height: 476px;

  @media (min-width: ${({theme:e})=>e.screens.tab}) {
    grid-template-columns: repeat(auto-fill, 34px);
    gap: 20px 34px;

    font-size: 16px;
    line-height: 1.25;

    min-height: 292px;
  }
  @media (min-width: ${({theme:e})=>e.screens.desk}) {
    gap: 20px 22px;
  }
`,Hl=g.li`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  position: relative;
  cursor: pointer;
  padding: 0px;

  @media (min-width: ${({theme:e})=>e.screens.tab}) {
  }
`,Yl=g.div`
  width: 34px;
  height: 34px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${e=>e.theme.colors.primary.bg};

  border: 2px solid
    ${({theme:e,percentage:t})=>t<100?e.colors.secondary.color4:e.colors.primary.bg};
`,ql=g.p`
  z-index: 1;
  margin: 0;
`,Gl=g.p`
  margin: 0;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;
  color: ${e=>e.theme.colors.secondary.color3};

  @media (min-width: ${({theme:e})=>e.screens.tab}) {
    font-size: 13px;
    line-height: 1.53;
  }
`,Ul=e=>e.water.waterDayList,Kl=e=>e.water.waterMonthList,Xl=e=>e.water.waterRate,Ft=()=>{const e=Lt(Ul),t=Lt(Kl),n=Lt(Xl);return{waterDayList:e,waterMonthList:t,waterRate:n}},Vl=()=>{const[e,t]=d.useState(new Date),[n,r]=d.useState(e.getMonth()),[o,i]=d.useState(null),[s,a]=d.useState(null),c=et(),u=Ft().waterMonthList,p=()=>{a(null)},m=!!s,f=m?"simple-popover":void 0;d.useEffect(()=>{const h=In(e),v=Nn(e);o===null&&c(lo({startDate:h,endDate:v}))},[n,c,e,o]);const w=(h,v)=>{t(v),a(h.currentTarget),i(v.getDate())},y=u&&u.find(h=>{const[v]=h.date.split(",");return parseInt(v)===e.getDate()});return l.jsxs(Ll,{children:[l.jsxs(zl,{children:[l.jsx("h3",{children:"Month"}),l.jsx(Qi,{selectedDate:e,setSelectedDate:t,setCurrentMonth:r,setSelectedDay:i})]}),l.jsx(Bl,{children:Yo({start:In(e),end:Nn(e)}).map((h,v)=>{const P=h.getDate(),k=u.find(E=>{const[S]=E.date.split(",");return parseInt(S)===P}),x=k?k.percentagePerDay:null;return l.jsxs(Hl,{onClick:E=>w(E,h),children:[l.jsx(Yl,{percentage:x,children:l.jsx(ql,{children:P})}),l.jsxs(Gl,{children:[x||0,"%"]})]},v)})}),l.jsx(Wl,{id:f,open:m,anchorEl:s,onClose:p,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"bottom",horizontal:"right"},children:l.jsx(Il,{selectedDate:e,selectedDayData:y})})]})},Ql="/Smart-Foxes-WaterTracker/assets/botleHomeDesk-3ae51194.png",Jl="/Smart-Foxes-WaterTracker/assets/botlteHomeDesk2x-9a54d3e4.png",Zl="/Smart-Foxes-WaterTracker/assets/backgroundHomeTab-586d978e.png",e0="/Smart-Foxes-WaterTracker/assets/BackgroundHomeTab2x-642c3d3e.png",t0="/Smart-Foxes-WaterTracker/assets/bottleHomeTab-0bf3952c.png",n0="/Smart-Foxes-WaterTracker/assets/bottleHomeTab2x-ed4a96a1.png",r0="/Smart-Foxes-WaterTracker/assets/backgroundHomeMob-d1e9a558.png",o0="/Smart-Foxes-WaterTracker/assets/backgroundHomeMob2x-089f92e0.png",i0="/Smart-Foxes-WaterTracker/assets/bottleHomeMob-1cd9cdb8.png",s0="/Smart-Foxes-WaterTracker/assets/bottleHomeMob2x-0e2d77ce.png",a0=g.main`
display: flex;
flex-direction:column;

align-items: center;

color:${e=>e.theme.colors.primary.text};
background-color: ${e=>e.theme.colors.primary.bg};
background-image: image-set(
        url(${i0}) 1x,
        url(${s0}) 2x
      ),
      image-set(
        url(${r0}) 1x,
        url(${o0}) 2x
      );
background-position: center 106px, center;
background-size: auto, 100vw auto;
background-repeat: no-repeat;


@media (min-width: ${({theme:e})=>e.screens.tab}){
  background-image: image-set(
        url(${t0}) 1x,
        url(${n0}) 2x
      ),
      image-set(
        url(${Zl}) 1x,
        url(${e0}) 2x
      );
background-position: center 40px, center;

}


@media (min-width: ${({theme:e})=>e.screens.desk}) {
    flex-direction:row;
    align-items: flex-start;
    padding: 0px 112px;
  
    background-image: image-set(
        url(${Ql}) 1x,
        url(${Jl}) 2x
      ),
      image-set(
        url(${po}) 1x,
        url(${mo}) 2x
      );
background-position: left top, center;
  }
`,c0=g.section`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 240px;

width: 280px;
height: 507px;


@media (min-width: ${({theme:e})=>e.screens.tab}) {
  width: 704px;
  gap: 326px;
}

@media (min-width: ${({theme:e})=>e.screens.desk}) {

  gap: 466px;
}

`,l0=g.section`
display: flex;
flex-direction: column;
align-items: center;

border-radius: 10px;
background: ${e=>e.theme.colors.secondary.color1};
box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.30);

width: 280px;
height:auto;
padding: 24px 8px;
margin: 0;
margin-bottom:4px;


@media (min-width: ${({theme:e})=>e.screens.tab}) {
  width: 704px;
  padding: 32px 24px;
}

@media (min-width: ${({theme:e})=>e.screens.desk}) {
  min-width: 592px;
  
}


`,u0=(e,t=!1)=>{const n=new Date(e);let r=n.getHours();const o=n.getMinutes();let i="";if(t){const s=r>=12?"PM":"AM";r=r%12,r=r||12,i=`${r.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")} ${s}`}else i=`${r.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")}`;return i},d0=e=>d.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",...e},d.createElement("title",null,"glass_26"),d.createElement("path",{fill:"#407bff",d:"M5.565 2.783l1.901 26.363v0.072h16.367l1.901-26.353v-0.082h-20.169zM23.16 28.479h-15.017l-1.426-19.747h0.784l1.289 17.403c0.008 0.092 0.049 0.177 0.115 0.24s0.153 0.098 0.244 0.099h0.030c0.047-0.003 0.093-0.016 0.136-0.037s0.080-0.051 0.111-0.087c0.031-0.036 0.055-0.078 0.070-0.124s0.021-0.094 0.017-0.141l-1.289-17.351h16.362l-1.426 19.747zM24.637 7.994h-16.468l-0.283-3.847c-0.009-0.094-0.052-0.181-0.122-0.244s-0.16-0.097-0.252-0.095c-0.095 0.009-0.183 0.055-0.245 0.129s-0.094 0.169-0.088 0.266l0.283 3.795h-0.794l-0.324-4.483h18.617l-0.324 4.478z"}),d.createElement("path",{fill:"#407bff",d:"M11.359 12.384c0.236 0 0.467-0.071 0.663-0.204s0.349-0.322 0.439-0.543c0.090-0.221 0.114-0.465 0.068-0.699s-0.16-0.45-0.327-0.62c-0.167-0.169-0.38-0.285-0.611-0.331s-0.471-0.023-0.689 0.069c-0.218 0.092-0.404 0.247-0.536 0.446s-0.201 0.433-0.201 0.672c0 0.321 0.126 0.629 0.35 0.856s0.527 0.355 0.844 0.355zM11.359 10.697c0.093 0 0.184 0.028 0.261 0.080s0.138 0.127 0.173 0.214c0.036 0.087 0.045 0.183 0.027 0.276s-0.063 0.178-0.129 0.244c-0.066 0.067-0.15 0.112-0.241 0.131s-0.186 0.009-0.272-0.027c-0.086-0.036-0.159-0.097-0.211-0.176s-0.079-0.171-0.079-0.265c0-0.127 0.050-0.248 0.138-0.337s0.208-0.14 0.332-0.14z"}),d.createElement("path",{fill:"#407bff",d:"M11.354 16.318c0.003 0.239 0.076 0.472 0.209 0.669s0.321 0.35 0.539 0.439 0.458 0.111 0.689 0.062c0.231-0.049 0.442-0.166 0.607-0.336s0.277-0.387 0.321-0.621 0.019-0.477-0.072-0.698c-0.091-0.22-0.245-0.408-0.442-0.54s-0.427-0.201-0.663-0.2c-0.158 0.001-0.313 0.033-0.459 0.095s-0.277 0.153-0.387 0.267-0.198 0.249-0.256 0.397c-0.059 0.148-0.088 0.307-0.086 0.467zM13.013 16.318c0 0.094-0.028 0.187-0.079 0.265s-0.125 0.14-0.211 0.176c-0.086 0.036-0.18 0.046-0.272 0.027s-0.175-0.064-0.241-0.131-0.111-0.152-0.129-0.244c-0.018-0.093-0.009-0.188 0.027-0.276s0.096-0.162 0.173-0.214 0.168-0.080 0.261-0.080c0.125 0 0.244 0.050 0.333 0.14s0.138 0.211 0.138 0.337z"}),d.createElement("path",{fill:"#407bff",d:"M19.834 16.349c0.236 0 0.467-0.071 0.663-0.204s0.349-0.322 0.439-0.543c0.090-0.221 0.114-0.465 0.068-0.699s-0.16-0.45-0.327-0.62c-0.167-0.169-0.379-0.285-0.611-0.331s-0.471-0.023-0.689 0.069c-0.218 0.092-0.404 0.247-0.535 0.446s-0.201 0.433-0.201 0.672c0 0.321 0.126 0.629 0.349 0.856s0.527 0.355 0.844 0.355zM19.834 14.666c0.093 0 0.184 0.028 0.262 0.081s0.138 0.127 0.173 0.215c0.035 0.088 0.044 0.184 0.026 0.276s-0.064 0.178-0.13 0.244c-0.066 0.066-0.151 0.111-0.242 0.129s-0.186 0.008-0.272-0.029-0.159-0.099-0.21-0.178c-0.051-0.079-0.078-0.172-0.077-0.266 0.001-0.126 0.051-0.246 0.14-0.334s0.207-0.138 0.331-0.138z"}),d.createElement("path",{fill:"#407bff",d:"M15.677 14.066c0.236 0 0.467-0.071 0.663-0.204s0.349-0.322 0.439-0.543c0.090-0.221 0.114-0.464 0.068-0.699s-0.16-0.45-0.327-0.62c-0.167-0.169-0.38-0.285-0.611-0.331s-0.471-0.023-0.689 0.069c-0.218 0.092-0.404 0.247-0.536 0.446s-0.201 0.433-0.201 0.672c0 0.321 0.126 0.629 0.35 0.856s0.527 0.354 0.844 0.354zM15.677 12.379c0.093 0 0.184 0.028 0.261 0.080s0.138 0.127 0.173 0.214c0.036 0.087 0.045 0.183 0.027 0.276s-0.063 0.177-0.129 0.244c-0.066 0.067-0.15 0.112-0.241 0.131s-0.186 0.009-0.272-0.027-0.159-0.097-0.211-0.176c-0.052-0.079-0.079-0.171-0.079-0.265-0.003-0.065 0.006-0.129 0.028-0.19s0.056-0.116 0.1-0.164c0.044-0.047 0.097-0.084 0.156-0.11s0.122-0.039 0.186-0.039v0.026z"}),d.createElement("path",{fill:"#407bff",d:"M13.402 20.929c0.005 0.197 0.067 0.387 0.178 0.548s0.267 0.285 0.447 0.357c0.181 0.072 0.378 0.088 0.568 0.047s0.363-0.139 0.498-0.279c0.135-0.141 0.227-0.319 0.263-0.512s0.015-0.393-0.060-0.574c-0.075-0.181-0.202-0.336-0.363-0.445s-0.351-0.167-0.545-0.167c-0.264 0.007-0.514 0.118-0.699 0.309s-0.287 0.449-0.287 0.716zM14.388 20.662c0.052 0 0.103 0.016 0.146 0.045s0.077 0.071 0.097 0.12 0.025 0.102 0.015 0.154c-0.010 0.052-0.035 0.099-0.072 0.137s-0.084 0.063-0.135 0.073c-0.051 0.010-0.104 0.005-0.152-0.015s-0.089-0.054-0.118-0.098c-0.029-0.044-0.044-0.096-0.044-0.148 0-0.071 0.028-0.139 0.077-0.189s0.116-0.078 0.186-0.078z"}),d.createElement("path",{fill:"#407bff",d:"M18.17 19.816c0.202 0.007 0.402-0.048 0.574-0.157s0.306-0.269 0.388-0.457c0.081-0.188 0.105-0.397 0.068-0.599s-0.133-0.388-0.275-0.534c-0.143-0.146-0.325-0.245-0.524-0.285s-0.405-0.018-0.591 0.063c-0.186 0.081-0.345 0.216-0.454 0.389s-0.166 0.375-0.161 0.58c0.006 0.262 0.111 0.511 0.292 0.697s0.426 0.295 0.684 0.304zM18.17 18.549c0.070 0 0.137 0.028 0.186 0.078s0.077 0.118 0.077 0.189c0 0.071-0.028 0.139-0.077 0.189s-0.116 0.078-0.186 0.078c-0.070 0-0.138-0.028-0.188-0.078s-0.079-0.118-0.080-0.189c0-0.035 0.007-0.071 0.020-0.103s0.033-0.062 0.058-0.087 0.055-0.044 0.087-0.057c0.032-0.013 0.067-0.019 0.102-0.019z"}),d.createElement("path",{fill:"#407bff",d:"M20.253 11.538c0.2 0 0.395-0.060 0.562-0.173s0.296-0.273 0.372-0.46c0.077-0.187 0.097-0.394 0.058-0.593s-0.135-0.382-0.277-0.525c-0.141-0.143-0.322-0.241-0.518-0.281s-0.399-0.019-0.584 0.058c-0.185 0.078-0.343 0.209-0.454 0.378s-0.17 0.367-0.17 0.57c0 0.272 0.107 0.533 0.296 0.725s0.447 0.3 0.715 0.3zM20.253 10.271c0.039-0.011 0.080-0.013 0.12-0.006s0.078 0.024 0.11 0.049c0.032 0.025 0.059 0.057 0.077 0.094s0.028 0.078 0.028 0.119-0.009 0.082-0.028 0.119c-0.018 0.037-0.044 0.069-0.077 0.094s-0.070 0.042-0.11 0.049c-0.040 0.008-0.081 0.006-0.12-0.006-0.039 0.011-0.080 0.013-0.12 0.006s-0.078-0.024-0.11-0.049c-0.032-0.025-0.059-0.057-0.077-0.094s-0.028-0.078-0.028-0.119 0.009-0.082 0.028-0.119c0.018-0.037 0.044-0.069 0.077-0.094s0.070-0.042 0.11-0.049c0.040-0.008 0.081-0.006 0.12 0.006z"}),d.createElement("path",{fill:"#407bff",d:"M10.369 27.191c-0.045 0.021-0.086 0.052-0.119 0.089s-0.059 0.082-0.074 0.13c-0.016 0.048-0.021 0.099-0.017 0.149s0.019 0.099 0.043 0.144c0.031 0.060 0.078 0.11 0.135 0.145s0.122 0.054 0.189 0.055c0.056 0.002 0.112-0.011 0.162-0.036 1.545-0.803 3.255-1.225 4.99-1.231 1.837 0.027 3.648 0.441 5.319 1.215 0.066 0.035 0.141 0.049 0.215 0.039s0.143-0.042 0.198-0.093c0.055-0.051 0.094-0.118 0.11-0.192s0.010-0.151-0.018-0.221c-0.036-0.091-0.105-0.164-0.192-0.205-1.769-0.821-3.687-1.258-5.633-1.282-1.845 0.002-3.664 0.444-5.309 1.292z"})),f0=e=>d.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:1024,height:1024,viewBox:"0 0 1024 1024",...e},d.createElement("title",null,"edit"),d.createElement("path",{fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:4,strokeWidth:42.6667,d:"M719.445 191.445l71.979-72.021c14.479-14.479 34.482-23.435 56.576-23.435 44.189 0 80.011 35.822 80.011 80.011 0 22.094-8.955 42.097-23.435 56.576l-453.077 453.077c-21.936 21.924-49.153 38.567-79.579 47.856l-1.36 0.357-114.56 34.133 34.133-114.56c9.647-31.785 26.289-59.002 48.214-80.94l381.098-381.055zM719.445 191.445l112.555 112.555M768 597.333v202.667c0 53.019-42.981 96-96 96v0h-448c-53.019 0-96-42.981-96-96v0-448c0-53.019 42.981-96 96-96v0h202.667"})),h0=e=>d.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:1024,height:1024,viewBox:"0 0 1024 1024",...e},d.createElement("title",null,"delete"),d.createElement("path",{fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:4,strokeWidth:42.6667,d:"M628.907 384l-14.763 384M409.856 768l-14.763-384M820.395 247.040c14.592 2.219 29.099 4.565 43.605 7.083M820.395 247.040l-45.568 592.341c-3.952 49.747-45.294 88.619-95.716 88.619-0.010 0-0.020 0-0.030 0h-334.164c-0.008 0-0.018 0-0.028 0-50.422 0-91.764-38.872-95.694-88.283l-0.021-0.336-45.568-592.341M820.395 247.040c-38.791-6.358-89.724-12.366-141.193-16.476l-7.202-0.463M203.605 247.040c-25.242 3.599-40.074 6.065-54.844 8.706l11.239-1.666M203.605 247.040c38.789-6.358 89.722-12.366 141.19-16.476l7.205-0.463M672 230.101v-39.083c0-50.347-38.827-92.331-89.173-93.909-21.11-0.721-45.921-1.132-70.827-1.132-24.908 0-49.719 0.411-74.428 1.226l3.602-0.094c-50.347 1.579-89.173 43.605-89.173 93.909v39.083M672 230.101c-47.901-3.932-103.689-6.173-160-6.173-56.31 0-112.097 2.241-167.276 6.64l7.276-0.466"})),p0=e=>d.createElement("svg",{fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:4,strokeWidth:42.6667,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...e},d.createElement("path",{d:"M512 256v512M768 512h-512"})),m0=g.div`
  
  width: 100%;
  height: 260px;
  margin-bottom:24px;

  h3{
   

font-size: 24px;

font-weight: 500;
line-height: 1.25; 
margin-bottom: 9px;
  }



  @media (min-width: ${({theme:e})=>e.screens.tab}){

    h3{

   font-size: 26px;
   line-height: 1.23; 
   margin-bottom: 12px;
     }

  }
 
`,g0=g.ul`
height: 188px;
overflow: auto;
margin-bottom:12px;


li {
    display:flex;
  margin:0;
  padding: 12px 0;
  border-bottom: 1px solid ${e=>e.theme.colors.secondary.color5};

    
  }
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${e=>e.theme.colors.secondary.color3};
    border-radius: 20px;
  }

  `,x0=g.div`
display:flex;
align-items: center;
gap:12px;

font-size: 12px;
font-weight: 400;
line-height: 2;



@media (min-width: ${({theme:e})=>e.screens.tab}){

  
  & > :last-child {
      margin-left: auto;
    }
  }

`,y0=g.span`
color:${e=>e.theme.colors.primary.accent};


font-size: 18px;

font-weight: 400;
line-height: 1.33;
`,b0=g(d0)`
  fill:${e=>e.theme.colors.primary.accent};
  width: 26px;
  height: auto;


  @media (min-width: ${({theme:e})=>e.screens.tab}){
    width: 36px;
  }
  
`,v0=g(f0)`
  stroke:  ${e=>e.theme.colors.secondary.color3};
  width: 16px;
  height: 16px;
`,w0=g(h0)`
   stroke: ${e=>e.theme.colors.secondary.color2};
  width: 16px;
  height: 16px;
`,k0=g.div`
display: flex;
gap:18px;
align-items:center;
margin-left:auto;
margin-right:4px;
 button {
  margin-bottom:0px;
height: 16px;
  position: relative;


  &:hover::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    display: block;
    width: 100%;
    height: 1px;
    border-radius: 1px;
  }
 }

`,S0=g.button`

  &:hover::after {
   
    background-color: ${e=>e.theme.colors.primary.accent};
   
  }`,E0=g.button`
 
 
  &:hover::after {
   
    background-color:  ${e=>e.theme.colors.secondary.color2};
    
  }`,eo=g(p0)`
  fill: ${e=>e.theme.colors.primary.accent};
  stroke: ${e=>e.theme.colors.primary.accent};
  width: 16px;
  height: 16px;

  @media (min-width: ${({theme:e})=>e.screens.tab}){
    width: 24px;
  height: 24px;
  }
 
`,P0=g.button`
display: flex;
align-items: center;
gap: 8px;

font-size: 16px;
font-weight: 500;
line-height: 1.25;
color: ${e=>e.theme.colors.primary.accent};


&:hover {
    color: ${e=>e.theme.colors.secondary.color4};
    ${eo} {
      fill: ${e=>e.theme.colors.secondary.color4};
      stroke: ${e=>e.theme.colors.secondary.color4};
  }
}


@media (min-width: ${({theme:e})=>e.screens.tab}){
  font-size: 18px;
line-height: 1.33;
  }

`,$0=g.div`

width: 232px;
height: 216px;

display: flex;
flex-direction: column;


gap: 24px;
color: ${e=>e.theme.colors.primary.text};
h3{

font-size: 26px;
font-weight: 500;
line-height: 1.23;
}

p{


font-size: 18px;
font-weight: 500;
line-height: 1.11;
}


@media (min-width: ${({theme:e})=>e.screens.tab}){
    width: 534px;
height: 144px;
}

@media (min-width: ${({theme:e})=>e.screens.tab}){
    width: 534px;
height: 144px;
}
`,M0=g.div`
display: flex;
flex-direction: column-reverse;
gap: 24px;

@media (min-width: ${({theme:e})=>e.screens.tab}){
    flex-direction: row;
    justify-content: end;
}
`,T0=g.button`

padding: 8px 30px;


color: ${e=>e.theme.colors.primary.accent};
text-align: center;
font-size: 16px;
font-weight: 500;
line-height: 1.25;

border-radius: 10px;
background: ${e=>e.theme.colors.secondary.color5};
@media (min-width: ${({theme:e})=>e.screens.tab}){
    padding: 10px 30px;
    font-size: 18px;
    width: 160px;
    height: 44px;
}

`,O0=g.button`

padding: 8px 30px;


color: ${e=>e.theme.colors.primary.bg};
text-align: center;
font-size: 16px;
font-weight: 500;
line-height: 1.25;


border-radius: 10px;
background:${e=>e.theme.colors.secondary.color2};
box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

@media (min-width: ${({theme:e})=>e.screens.tab}){
    padding: 10px 30px;
    font-size: 18px;
    width: 160px;
    height: 44px;
}
`,C0=({id:e})=>{const{closeModal:t}=d.useContext(rn),n=et(),r=async()=>{await n(uo(e)),t(),n(xr())};return l.jsxs($0,{children:[l.jsx("h3",{children:"Delete entry"}),l.jsx("p",{children:"Are you sure you want to delete the entry?"}),l.jsxs(M0,{children:[l.jsx(T0,{type:"button",onClick:()=>t(),children:"Cancel"}),l.jsx(O0,{type:"submit",onClick:r,children:"Delete"})]})]})},j0=()=>l.jsx("div",{children:" Тут колись буде модалка TodayEditModal"}),R0=({handleAddWaterClick:e})=>{const{openModal:t}=d.useContext(rn),n=Ft().waterDayList,r=et();d.useEffect(()=>{r(xr())},[r]);const o=s=>{t(l.jsx(l.Fragment,{children:l.jsx(C0,{id:s})}))},i=s=>{t(l.jsx(l.Fragment,{children:l.jsx(j0,{portion:s})}))};return l.jsxs(m0,{children:[l.jsx("h3",{children:"Today"}),n&&n.length>0&&l.jsx(g0,{children:n.map(s=>l.jsxs("li",{children:[l.jsxs(x0,{children:[l.jsx(b0,{}),l.jsx(y0,{children:`${s.waterVolume} ml `}),l.jsx("span",{children:u0(s.dateAdded,!0)})]}),l.jsxs(k0,{children:[l.jsx(S0,{onClick:()=>i(s),children:l.jsx(v0,{})}),l.jsx(E0,{onClick:()=>o(s._id),children:l.jsx(w0,{})})]})]},s._id))}),l.jsxs(P0,{onClick:e,children:[l.jsx(eo,{})," Add water"]})]})},D0=g.div`
  padding: 8px 20px 8px 20px;
  border: 1px solid;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 164px;
  margin-top: 30px;
  margin-left: 73px;
  border-radius: 10px;
  border-color: ${e=>e.theme.colors.secondary.color1};
`,_0=g.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
  justify-content: left;
`,W0=g.p`
  font-size: 18px;
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 24px;
  color: ${e=>e.theme.colors.primary.text};
  white-space: nowrap;
`,A0=g.button`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  color: #8baeff;
`,F0=g.p`
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  color: ${e=>e.theme.colors.primary.accent};
`,N0=g.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1200;
  background: rgba(0, 0, 0, 0.8);
`,I0=g.div`
  width: 592px;
  height: 712px;
  padding: 32px 24px 32px 24px;
  border-radius: 10px;
  background-color: ${e=>e.theme.colors.primary.bg};
`,L0=g.h2`
  font-size: 26px;
  font-weight: 500;
  line-height: 32px;
  color: ${e=>e.theme.colors.primary.text};
`,z0=g.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  margin-top: 24px;
  margin-bottom: 12px;
`,ye=g.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: ${e=>e.theme.colors.primary.text};
`,ur=g.span`
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: ${e=>e.theme.colors.primary.accent};
`,B0=g.div`
  width: 544px;
  border: 1px solid;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 24px;
  border-color: ${e=>e.theme.colors.secondary.color5};
`,H0=g.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  color: #8f8f8f;
`,Y0=g.span`
  color: ${e=>e.theme.colors.primary.accent};
`,q0=g.form`
  display: flex;
  flex-direction: column;
`,dr=g.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  color: ${e=>e.theme.colors.primary.text};
`,fr=g.label`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`,hr=g.input`
  width: 14px;
  height: 14px;
  border: 1px solid;
  border-color: ${e=>e.theme.colors.primary.accent};
  color: ${e=>e.theme.colors.primary.bg};
  border-radius: 50%;
`,G0=g.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`,pr=g.label`
  width: 544px;
  display: flex;
  gap: 8px;
  flex-direction: column;
`,Xt=g.input`
  border-radius: 6px;
  border: 1px solid;
  width: 100%;
  color: ${e=>e.theme.colors.primary.accent};
  padding: 12px 10px 12px 10px;
  background: transparent;
  border-color: ${e=>e.theme.colors.secondary.color5};
  &::placeholder {
    color: ${e=>e.theme.colors.primary.accent};
  }
`,U0=g.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`,K0=g.label`
  width: 544px;
  display: flex;
  gap: 16px;
  flex-direction: column;
  margin-bottom: 24px;
`,X0=g.button`
  border-radius: 10px;
  padding: 10px 30px;
  width: 160px;
  color: ${e=>e.theme.colors.primary.bg};
  background-color: ${e=>e.theme.colors.primary.accent};
`,V0=g.div`
  width: 544px;
  display: flex;
  justify-content: end;
`,Q0=g.button``,J0=g.div`
  width: 544px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,Z0=g.span`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: ${e=>e.theme.colors.primary.accent};
`,eu=g.svg`
  background-color:;
`,tu=({onClose:e})=>{const t=et(),{user:n}=nn(),r={weight:.03,activity:.04},o={weight:.04,activity:.06},[i,s]=d.useState(r),[a,c]=d.useState(""),[u,p]=d.useState(""),[m,f]=d.useState(""),w=n.waterRate;d.useEffect(()=>{const k=x=>{x.code==="Escape"&&e()};return window.addEventListener("keydown",k),()=>{window.removeEventListener("keydown",k)}},[e]);const y=d.useCallback(()=>!a||!u?void 0:(a*i.weight+u/60*i.activity).toFixed(1),[i,a,u]),h=d.useMemo(()=>y(),[y]),v=k=>{const x=k.target.value,E=parseFloat(x);!isNaN(E)&&E>=1?f(E):x===""&&f("")},P=k=>{k.preventDefault();const x=parseFloat(h);if(!(u>0&&a>0||m>0)){alert("Fill all fields");return}t(fo(m||x)).then(S=>{S.error?(console.log(S.error),alert("Something went wrong ")):(e(),c(""),p(""),f(""))})};return l.jsx(N0,{children:l.jsxs(I0,{children:[l.jsxs(J0,{children:[l.jsx(L0,{children:"My daily norma"}),l.jsx(Q0,{onClick:()=>e(),children:l.jsx(eu,{width:"24",height:"24",children:l.jsx("path",{d:"M6 18L18 6M6 6L18 18",stroke:"#407BFF",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),l.jsxs(z0,{children:[l.jsxs(ye,{children:["For girl: ",l.jsx(ur,{children:"V=(M*0,03) + (T*0,4)"})]}),l.jsxs(ye,{children:["For man: ",l.jsx(ur,{children:"V=(M*0,04) + (T*0,6)"})]})]}),l.jsx(B0,{children:l.jsxs(H0,{children:[l.jsx(Y0,{children:"*"})," V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]})}),l.jsxs(q0,{children:[l.jsxs(U0,{children:[l.jsx(dr,{children:"Calculate your rate:"}),l.jsxs(G0,{children:[l.jsxs(fr,{children:[l.jsx(hr,{type:"radio",name:"gender",value:"woman",onChange:()=>s(r),checked:n.gender==="famale"}),l.jsx(ye,{children:"For woman"})]}),l.jsxs(fr,{children:[l.jsx(hr,{type:"radio",name:"gender",value:"man",onChange:()=>s(o),checked:n.gender==="male"}),l.jsx(ye,{children:"For man"})]})]}),l.jsxs(pr,{children:[l.jsx(ye,{children:"Your weight in kilograms:"}),l.jsx(Xt,{type:"number",name:"userWeight",placeholder:"0",value:a,min:0,max:250,onChange:k=>c(k.target.value)})]}),l.jsxs(pr,{children:[l.jsx(ye,{children:"The time of active participation in sports or other activities with a high physical. load in hours:"}),l.jsx(Xt,{type:"number",name:"userActive",placeholder:"0",value:u,min:0,onChange:k=>p(k.target.value)})]}),l.jsxs(ye,{children:["The required amount of water in liters per day:",l.jsxs(Z0,{children:[" ",h||(w/1e3).toFixed(1)," L"]})]})]}),l.jsxs(K0,{children:[l.jsx(dr,{children:"Write down how much water you will drink:"}),l.jsx(Xt,{type:"number",name:"userWaterPredict",placeholder:"0",value:m,min:0,onChange:v})]}),l.jsx(V0,{children:l.jsx(X0,{onClick:P,children:"Save"})})]})]})})},nu=()=>{const[e,t]=d.useState(!1),{user:n}=nn(),r=n.waterRate,o=()=>{t(!0)},i=()=>{t(!1)},s=(r/1e3).toFixed(1);return l.jsxs(D0,{children:[l.jsx(W0,{children:"My daily norma"}),l.jsxs(_0,{children:[l.jsxs(F0,{children:[" ",s||r," L"]}),l.jsx(A0,{onClick:o,children:"Edit"})]}),e&&l.jsx(tu,{onClose:i})]})};function ru(e){return yr({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.75 4.5a.75.75 0 0 1 .75.75V11h5.75a.75.75 0 0 1 0 1.5H12.5v5.75a.75.75 0 0 1-1.5 0V12.5H5.25a.75.75 0 0 1 0-1.5H11V5.25a.75.75 0 0 1 .75-.75Z"},child:[]}]})(e)}const ou=g.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  justify-content: center;
`,iu=g.h3`
  font-size: 26px;
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 32px;
`,su=g.span`
  font-size: 18px;
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 20px;
  margin-bottom: 16px;
`,au=g.div`
  display: flex;
  flex-direction: column;
`,cu=g.label`
  display: flex;
  justify-content: flex-start;
  gap: 12px;
  flex-direction: column;
`,lu=g.div`
  display: flex;
  flex-direction: row;
  gap: 7px;
`;g.input``;const uu=g.span`
  font-size: 16px;
  font-weight: ${e=>e.theme.fontWeights.regular};
  line-height: 20px;
`,du=g.label`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,fu=g.span``,hu=g.input`
  width: 544px;
  padding: 12px 10px;
  border-radius: 6px;
  border: 1px solid ${e=>e.theme.colors.secondary.color5};
`,pu=g.label`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
`,mu=g.span``,gu=g.input`
  padding: 12px 10px;
  border-radius: 6px;
  border: 1px solid ${e=>e.theme.colors.secondary.color5};
  width: 544px;
`,xu=g.div`
  display: flex;
  width: 544px;
  align-items: center;
  justify-content: flex-end;
  gap: 24px;
`,yu=g.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: ${e=>e.theme.fontWeights.bolt};
  line-height: 24px;
  padding: 6px 10px;
  width: 92px;
  border-radius: 40px;
  background-color: ${e=>e.theme.colors.secondary.color5};
  color: ${e=>e.theme.colors.primary.accent};
`,bu=g.button`
  font-size: 18px;
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 24px;
  text-align: center;
  color: ${e=>e.theme.colors.primary.bg};
  box-shadow: 0 4px 8px 0 ${e=>e.theme.colors.primary.accent};
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 6px 12px 0 ${e=>e.theme.colors.secondary.accent};
  }
  display: block;
  width: 160px;
  height: 44px;
  border-radius: 10px;
  padding: 10px 30px;
  background-color: ${e=>e.theme.colors.primary.accent};
`,mr=g.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  width: 40px;
  height: 40px;

  border: 1px solid ${e=>e.theme.colors.secondary.color3};
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0px 2px 4px 0px ${e=>e.theme.colors.primary.accent};
  }
`,vu=g(ru)`
  fill: ${e=>e.theme.colors.primary.accent};
  stroke: ${e=>e.theme.colors.primary.accent};
  width: 16px;
  height: 16px;

  @media (min-width: ${({theme:e})=>e.screens.tab}) {
    width: 24px;
    height: 24px;
  }
`,wu=g(ho)`
  fill: ${e=>e.theme.colors.primary.accent};
  stroke: ${e=>e.theme.colors.primary.accent};
  width: 16px;
  height: 16px;

  @media (min-width: ${({theme:e})=>e.screens.tab}) {
    width: 24px;
    height: 24px;
  }
`,ku=g.span`
  font-size: 18px;
  font-weight: ${e=>e.theme.fontWeights.bolt};
  line-height: 24px;
  text-align: center;
  color: ${e=>e.theme.colors.primary.accent};

`;function Su(e){const t=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return`${t}-${n}-${r}`}const Eu=({firstValue:e,firstTime:t,isEditing:n,onClose:r})=>{const o=Ft().waterDayList.portions,[i,s]=d.useState(e||0),[a,c]=d.useState(Ae(n&&e?new Date(t):new Date,"HH:mm")),[u,p]=d.useState(o||null),m=et(),f=h=>{const v=parseFloat(h.target.value);if(v>3e3){alert("не більше 3000 мл");return}s(v)},w=h=>{switch(console.log(h.currentTarget.id),h.currentTarget.id){case"increment":s(v=>v+50);break;case"decrement":s(v=>v>0?v-50:0);break}},y=h=>{h.preventDefault();const P=Su(new Date),k=u?u.find(S=>{S.time}):a,x=P+"T"+k,E={waterVolume:i,date:x};m(Cn(E)).thne;try{if(!m(Cn(E)).error)r(),s(""),c("");else throw new Error}catch(S){console.error(S),alert("Something went wrong"),r()}};return d.useEffect(()=>{n?(s(e||0),c(Ae(t,"HH:mm"))):(s(0),c(Ae(new Date,"HH:mm")))},[n,e,t]),l.jsxs(ou,{children:[l.jsx(iu,{children:" Add water"}),l.jsxs(au,{children:[l.jsx(su,{children:"Choose a value:"}),l.jsxs(cu,{children:[l.jsx(uu,{children:"Amount of water:"}),l.jsxs(lu,{children:[l.jsx(mr,{onClick:w,id:"decrement",children:l.jsx(wu,{})}),l.jsxs(yu,{children:[" ",i||0," L"]}),l.jsx(mr,{onClick:w,id:"increment",children:l.jsx(vu,{})})]})]})]}),l.jsxs(du,{children:[l.jsx(fu,{children:"Recording time:"}),l.jsx(hu,{type:"time",value:a,onChange:h=>c(h.target.value)})]}),l.jsxs(pu,{children:[l.jsx(mu,{children:"Enter the value of the water used:"}),l.jsx(gu,{type:"number",value:i,onChange:f,placeholder:"0"})]}),l.jsxs(xu,{children:[l.jsxs(ku,{children:[" ",i||0," Ml"]}),l.jsx(bu,{onClick:y,children:"Save"})]})]})};function Pu(e){return yr({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Circle_Plus"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M15,12.5H12.5V15a.5.5,0,0,1-1,0V12.5H9a.5.5,0,0,1,0-1h2.5V9a.5.5,0,0,1,1,0v2.5H15A.5.5,0,0,1,15,12.5Z"},child:[]},{tag:"path",attr:{d:"M12,21.932A9.934,9.934,0,1,1,21.932,12,9.944,9.944,0,0,1,12,21.932ZM12,3.065A8.934,8.934,0,1,0,20.932,12,8.944,8.944,0,0,0,12,3.065Z"},child:[]}]}]}]})(e)}const $u=g.input`
  width: 280px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
`,Mu=g.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`,to=g(Pu)`
  fill: ${e=>e.theme.colors.primary.bg};
  stroke: ${e=>e.theme.colors.primary.bg};
  width: 16px;
  height: 16px;

  @media (min-width: ${({theme:e})=>e.screens.tab}) {
    width: 24px;
    height: 24px;
  }
`,Tu=g.button`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: flex-start;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  color: ${e=>e.theme.colors.primary.bg};
  background-color: ${e=>e.theme.colors.primary.accent};
  border: 1px;
  border-radius: 10px;
  padding: 10px 30px;
  border-r &:hover {
    color: ${e=>e.theme.colors.secondary.color4};
    ${to} {
      fill: ${e=>e.theme.colors.secondary.color4};
      stroke: ${e=>e.theme.colors.secondary.color4};
    }
  }

  @media (min-width: ${({theme:e})=>e.screens.tab}) {
    font-size: 18px;
    line-height: 1.33;
  }
`,Ou=({TodayWaterList:e,handleAddWaterClick:t})=>(Ft().waterDayList.portions,l.jsxs(Mu,{children:[l.jsx($u,{type:"range",maxValue:100,minValue:0,readOnly:!0}),l.jsxs(Tu,{onClick:t,children:[l.jsx(to,{})," Add water"]})]})),Ru=()=>{const{openModal:e}=d.useContext(rn),t=()=>{e(l.jsx(l.Fragment,{children:l.jsx(Eu,{})}))};return l.jsxs(a0,{children:[l.jsxs(c0,{children:[l.jsx(nu,{}),l.jsx(Ou,{handleAddWaterClick:t})]}),l.jsxs(l0,{children:[l.jsx(R0,{handleAddWaterClick:t}),l.jsx(Vl,{})]})]})};export{Ru as default};
