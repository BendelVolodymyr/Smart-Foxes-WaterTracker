import{_ as b,o as ae,r as d,w as Vr,h as fr,T as en,i as Sn,k as Qr,u as y,j as l,l as Ee,m as fe,n as Jr,C as Zr,p as eo,q as to,R as qe,v as at,x as Pn,y as Tn,z as Mn,A as no,b as ro,B as It,c as Ze,D as oo,M as tn,E as so,I as io,J as ao,K as co}from"./index-396a4190.js";import{b as lo,a as uo}from"./backgroundElementMainPageDesk2x@2-f75c1b59.js";function me(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function hr(e){if(!me(e))return e;const t={};return Object.keys(e).forEach(n=>{t[n]=hr(e[n])}),t}function ce(e,t,n={clone:!0}){const r=n.clone?b({},e):e;return me(e)&&me(t)&&Object.keys(t).forEach(o=>{o!=="__proto__"&&(me(t[o])&&o in e&&me(e[o])?r[o]=ce(e[o],t[o],n):n.clone?r[o]=me(t[o])?hr(t[o]):t[o]:r[o]=t[o])}),r}const fo=Object.freeze(Object.defineProperty({__proto__:null,default:ce,isPlainObject:me},Symbol.toStringTag,{value:"Module"}));function Xe(e){let t="https://mui.com/production-error/?code="+e;for(let n=1;n<arguments.length;n+=1)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}const ho=Object.freeze(Object.defineProperty({__proto__:null,default:Xe},Symbol.toStringTag,{value:"Module"}));var pr={exports:{}},_={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nn=Symbol.for("react.element"),rn=Symbol.for("react.portal"),gt=Symbol.for("react.fragment"),yt=Symbol.for("react.strict_mode"),xt=Symbol.for("react.profiler"),bt=Symbol.for("react.provider"),vt=Symbol.for("react.context"),po=Symbol.for("react.server_context"),wt=Symbol.for("react.forward_ref"),Et=Symbol.for("react.suspense"),kt=Symbol.for("react.suspense_list"),St=Symbol.for("react.memo"),Pt=Symbol.for("react.lazy"),mo=Symbol.for("react.offscreen"),mr;mr=Symbol.for("react.module.reference");function re(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case nn:switch(e=e.type,e){case gt:case xt:case yt:case Et:case kt:return e;default:switch(e=e&&e.$$typeof,e){case po:case vt:case wt:case Pt:case St:case bt:return e;default:return t}}case rn:return t}}}_.ContextConsumer=vt;_.ContextProvider=bt;_.Element=nn;_.ForwardRef=wt;_.Fragment=gt;_.Lazy=Pt;_.Memo=St;_.Portal=rn;_.Profiler=xt;_.StrictMode=yt;_.Suspense=Et;_.SuspenseList=kt;_.isAsyncMode=function(){return!1};_.isConcurrentMode=function(){return!1};_.isContextConsumer=function(e){return re(e)===vt};_.isContextProvider=function(e){return re(e)===bt};_.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===nn};_.isForwardRef=function(e){return re(e)===wt};_.isFragment=function(e){return re(e)===gt};_.isLazy=function(e){return re(e)===Pt};_.isMemo=function(e){return re(e)===St};_.isPortal=function(e){return re(e)===rn};_.isProfiler=function(e){return re(e)===xt};_.isStrictMode=function(e){return re(e)===yt};_.isSuspense=function(e){return re(e)===Et};_.isSuspenseList=function(e){return re(e)===kt};_.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===gt||e===xt||e===yt||e===Et||e===kt||e===mo||typeof e=="object"&&e!==null&&(e.$$typeof===Pt||e.$$typeof===St||e.$$typeof===bt||e.$$typeof===vt||e.$$typeof===wt||e.$$typeof===mr||e.getModuleId!==void 0)};_.typeOf=re;pr.exports=_;var $n=pr.exports;const go=/^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;function gr(e){const t=`${e}`.match(go);return t&&t[1]||""}function yr(e,t=""){return e.displayName||e.name||gr(e)||t}function On(e,t,n){const r=yr(t);return e.displayName||(r!==""?`${n}(${r})`:n)}function yo(e){if(e!=null){if(typeof e=="string")return e;if(typeof e=="function")return yr(e,"Component");if(typeof e=="object")switch(e.$$typeof){case $n.ForwardRef:return On(e,e.render,"ForwardRef");case $n.Memo:return On(e,e.type,"memo");default:return}}}const xo=Object.freeze(Object.defineProperty({__proto__:null,default:yo,getFunctionName:gr},Symbol.toStringTag,{value:"Module"}));function on(e){if(typeof e!="string")throw new Error(Xe(7));return e.charAt(0).toUpperCase()+e.slice(1)}const bo=Object.freeze(Object.defineProperty({__proto__:null,default:on},Symbol.toStringTag,{value:"Module"}));function Cn(...e){return e.reduce((t,n)=>n==null?t:function(...o){t.apply(this,o),n.apply(this,o)},()=>{})}function vo(e,t=166){let n;function r(...o){const s=()=>{e.apply(this,o)};clearTimeout(n),n=setTimeout(s,t)}return r.clear=()=>{clearTimeout(n)},r}function Ve(e){return ae(e).defaultView||window}const jn={};function wo(e,t){const n=d.useRef(jn);return n.current===jn&&(n.current=e(t)),n}const Eo=[];function ko(e){d.useEffect(e,Eo)}class sn{constructor(){this.currentId=null,this.clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}static create(){return new sn}start(t,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},t)}}function So(){const e=wo(sn.create).current;return ko(e.disposeEffect),e}function Po(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function xr(e,t){const n=b({},t);return Object.keys(e).forEach(r=>{if(r.toString().match(/^(components|slots)$/))n[r]=b({},e[r],n[r]);else if(r.toString().match(/^(componentsProps|slotProps)$/)){const o=e[r]||{},s=t[r];n[r]={},!s||!Object.keys(s)?n[r]=o:!o||!Object.keys(o)?n[r]=s:(n[r]=b({},s),Object.keys(o).forEach(i=>{n[r][i]=xr(o[i],s[i])}))}else n[r]===void 0&&(n[r]=e[r])}),n}function Tt(e,t,n=void 0){const r={};return Object.keys(e).forEach(o=>{r[o]=e[o].reduce((s,i)=>{if(i){const a=t(i);a!==""&&s.push(a),n&&n[i]&&s.push(n[i])}return s},[]).join(" ")}),r}const Rn=e=>e,To=()=>{let e=Rn;return{configure(t){e=t},generate(t){return e(t)},reset(){e=Rn}}},Mo=To(),$o=Mo,Oo={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function et(e,t,n="Mui"){const r=Oo[t];return r?`${n}-${r}`:`${$o.generate(e)}-${t}`}function Mt(e,t,n="Mui"){const r={};return t.forEach(o=>{r[o]=et(e,o,n)}),r}function Co(e,t=Number.MIN_SAFE_INTEGER,n=Number.MAX_SAFE_INTEGER){return Math.max(t,Math.min(e,n))}const jo=Object.freeze(Object.defineProperty({__proto__:null,default:Co},Symbol.toStringTag,{value:"Module"}));var Ro=Vr(function(e,t){var n=e.styles,r=fr([n],void 0,d.useContext(en)),o=d.useRef();return Sn(function(){var s=t.key+"-global",i=new t.sheet.constructor({key:s,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),a=!1,c=document.querySelector('style[data-emotion="'+s+" "+r.name+'"]');return t.sheet.tags.length&&(i.before=t.sheet.tags[0]),c!==null&&(a=!0,c.setAttribute("data-emotion",s),i.hydrate([c])),o.current=[i,a],function(){i.flush()}},[t]),Sn(function(){var s=o.current,i=s[0],a=s[1];if(a){s[1]=!1;return}if(r.next!==void 0&&Qr(t,r.next,!0),i.tags.length){var c=i.tags[i.tags.length-1].nextElementSibling;i.before=c,i.flush()}t.insert("",r,i,!1)},[t,r.name]),null});function br(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return fr(t)}var Do=function(){var t=br.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};function H(e){const t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new e.constructor(+e):typeof e=="number"||t==="[object Number]"||typeof e=="string"||t==="[object String]"?new Date(e):new Date(NaN)}function ue(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}function Lt(e,t){const n=H(e);if(isNaN(t))return ue(e,NaN);if(!t)return n;const r=n.getDate(),o=ue(e,n.getTime());o.setMonth(n.getMonth()+t+1,0);const s=o.getDate();return r>=s?o:(n.setFullYear(o.getFullYear(),o.getMonth(),r),n)}const vr=6048e5,_o=864e5;let Wo={};function $t(){return Wo}function Qe(e,t){var a,c,u,h;const n=$t(),r=(t==null?void 0:t.weekStartsOn)??((c=(a=t==null?void 0:t.locale)==null?void 0:a.options)==null?void 0:c.weekStartsOn)??n.weekStartsOn??((h=(u=n.locale)==null?void 0:u.options)==null?void 0:h.weekStartsOn)??0,o=H(e),s=o.getDay(),i=(s<r?7:0)+s-r;return o.setDate(o.getDate()-i),o.setHours(0,0,0,0),o}function dt(e){return Qe(e,{weekStartsOn:1})}function wr(e){const t=H(e),n=t.getFullYear(),r=ue(e,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const o=dt(r),s=ue(e,0);s.setFullYear(n,0,4),s.setHours(0,0,0,0);const i=dt(s);return t.getTime()>=o.getTime()?n+1:t.getTime()>=i.getTime()?n:n-1}function Dn(e){const t=H(e);return t.setHours(0,0,0,0),t}function _n(e){const t=H(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function Ao(e,t){const n=Dn(e),r=Dn(t),o=+n-_n(n),s=+r-_n(r);return Math.round((o-s)/_o)}function No(e){const t=wr(e),n=ue(e,0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),dt(n)}function Fo(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function Io(e){if(!Fo(e)&&typeof e!="number")return!1;const t=H(e);return!isNaN(Number(t))}function Wn(e){const t=H(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}function Lo(e,t){const n=H(e.start),r=H(e.end);let o=+n>+r;const s=o?+n:+r,i=o?r:n;i.setHours(0,0,0,0);let a=(t==null?void 0:t.step)??1;if(!a)return[];a<0&&(a=-a,o=!o);const c=[];for(;+i<=s;)c.push(H(i)),i.setDate(i.getDate()+a),i.setHours(0,0,0,0);return o?c.reverse():c}function An(e){const t=H(e);return t.setDate(1),t.setHours(0,0,0,0),t}function zo(e){const t=H(e),n=ue(e,0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}const Bo={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Ho=(e,t,n)=>{let r;const o=Bo[e];return typeof o=="string"?r=o:t===1?r=o.one:r=o.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function zt(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const Yo={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},qo={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Go={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Ko={date:zt({formats:Yo,defaultWidth:"full"}),time:zt({formats:qo,defaultWidth:"full"}),dateTime:zt({formats:Go,defaultWidth:"full"})},Uo={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Xo=(e,t,n,r)=>Uo[e];function Be(e){return(t,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let o;if(r==="formatting"&&e.formattingValues){const i=e.defaultFormattingWidth||e.defaultWidth,a=n!=null&&n.width?String(n.width):i;o=e.formattingValues[a]||e.formattingValues[i]}else{const i=e.defaultWidth,a=n!=null&&n.width?String(n.width):e.defaultWidth;o=e.values[a]||e.values[i]}const s=e.argumentCallback?e.argumentCallback(t):t;return o[s]}}const Vo={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Qo={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Jo={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Zo={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},es={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},ts={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},ns=(e,t)=>{const n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},rs={ordinalNumber:ns,era:Be({values:Vo,defaultWidth:"wide"}),quarter:Be({values:Qo,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Be({values:Jo,defaultWidth:"wide"}),day:Be({values:Zo,defaultWidth:"wide"}),dayPeriod:Be({values:es,defaultWidth:"wide",formattingValues:ts,defaultFormattingWidth:"wide"})};function He(e){return(t,n={})=>{const r=n.width,o=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],s=t.match(o);if(!s)return null;const i=s[0],a=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(a)?ss(a,p=>p.test(i)):os(a,p=>p.test(i));let u;u=e.valueCallback?e.valueCallback(c):c,u=n.valueCallback?n.valueCallback(u):u;const h=t.slice(i.length);return{value:u,rest:h}}}function os(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function ss(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function is(e){return(t,n={})=>{const r=t.match(e.matchPattern);if(!r)return null;const o=r[0],s=t.match(e.parsePattern);if(!s)return null;let i=e.valueCallback?e.valueCallback(s[0]):s[0];i=n.valueCallback?n.valueCallback(i):i;const a=t.slice(o.length);return{value:i,rest:a}}}const as=/^(\d+)(th|st|nd|rd)?/i,cs=/\d+/i,ls={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},us={any:[/^b/i,/^(a|c)/i]},ds={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},fs={any:[/1/i,/2/i,/3/i,/4/i]},hs={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},ps={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},ms={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},gs={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},ys={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},xs={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},bs={ordinalNumber:is({matchPattern:as,parsePattern:cs,valueCallback:e=>parseInt(e,10)}),era:He({matchPatterns:ls,defaultMatchWidth:"wide",parsePatterns:us,defaultParseWidth:"any"}),quarter:He({matchPatterns:ds,defaultMatchWidth:"wide",parsePatterns:fs,defaultParseWidth:"any",valueCallback:e=>e+1}),month:He({matchPatterns:hs,defaultMatchWidth:"wide",parsePatterns:ps,defaultParseWidth:"any"}),day:He({matchPatterns:ms,defaultMatchWidth:"wide",parsePatterns:gs,defaultParseWidth:"any"}),dayPeriod:He({matchPatterns:ys,defaultMatchWidth:"any",parsePatterns:xs,defaultParseWidth:"any"})},vs={code:"en-US",formatDistance:Ho,formatLong:Ko,formatRelative:Xo,localize:rs,match:bs,options:{weekStartsOn:0,firstWeekContainsDate:1}};function ws(e){const t=H(e);return Ao(t,zo(t))+1}function Es(e){const t=H(e),n=+dt(t)-+No(t);return Math.round(n/vr)+1}function Er(e,t){var h,p,f,v;const n=H(e),r=n.getFullYear(),o=$t(),s=(t==null?void 0:t.firstWeekContainsDate)??((p=(h=t==null?void 0:t.locale)==null?void 0:h.options)==null?void 0:p.firstWeekContainsDate)??o.firstWeekContainsDate??((v=(f=o.locale)==null?void 0:f.options)==null?void 0:v.firstWeekContainsDate)??1,i=ue(e,0);i.setFullYear(r+1,0,s),i.setHours(0,0,0,0);const a=Qe(i,t),c=ue(e,0);c.setFullYear(r,0,s),c.setHours(0,0,0,0);const u=Qe(c,t);return n.getTime()>=a.getTime()?r+1:n.getTime()>=u.getTime()?r:r-1}function ks(e,t){var a,c,u,h;const n=$t(),r=(t==null?void 0:t.firstWeekContainsDate)??((c=(a=t==null?void 0:t.locale)==null?void 0:a.options)==null?void 0:c.firstWeekContainsDate)??n.firstWeekContainsDate??((h=(u=n.locale)==null?void 0:u.options)==null?void 0:h.firstWeekContainsDate)??1,o=Er(e,t),s=ue(e,0);return s.setFullYear(o,0,r),s.setHours(0,0,0,0),Qe(s,t)}function Ss(e,t){const n=H(e),r=+Qe(n,t)-+ks(n,t);return Math.round(r/vr)+1}function D(e,t){const n=e<0?"-":"",r=Math.abs(e).toString().padStart(t,"0");return n+r}const pe={y(e,t){const n=e.getFullYear(),r=n>0?n:1-n;return D(t==="yy"?r%100:r,t.length)},M(e,t){const n=e.getMonth();return t==="M"?String(n+1):D(n+1,2)},d(e,t){return D(e.getDate(),t.length)},a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(e,t){return D(e.getHours()%12||12,t.length)},H(e,t){return D(e.getHours(),t.length)},m(e,t){return D(e.getMinutes(),t.length)},s(e,t){return D(e.getSeconds(),t.length)},S(e,t){const n=t.length,r=e.getMilliseconds(),o=Math.trunc(r*Math.pow(10,n-3));return D(o,t.length)}},$e={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Nn={G:function(e,t,n){const r=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if(t==="yo"){const r=e.getFullYear(),o=r>0?r:1-r;return n.ordinalNumber(o,{unit:"year"})}return pe.y(e,t)},Y:function(e,t,n,r){const o=Er(e,r),s=o>0?o:1-o;if(t==="YY"){const i=s%100;return D(i,2)}return t==="Yo"?n.ordinalNumber(s,{unit:"year"}):D(s,t.length)},R:function(e,t){const n=wr(e);return D(n,t.length)},u:function(e,t){const n=e.getFullYear();return D(n,t.length)},Q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return D(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return D(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){const r=e.getMonth();switch(t){case"M":case"MM":return pe.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){const r=e.getMonth();switch(t){case"L":return String(r+1);case"LL":return D(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){const o=Ss(e,r);return t==="wo"?n.ordinalNumber(o,{unit:"week"}):D(o,t.length)},I:function(e,t,n){const r=Es(e);return t==="Io"?n.ordinalNumber(r,{unit:"week"}):D(r,t.length)},d:function(e,t,n){return t==="do"?n.ordinalNumber(e.getDate(),{unit:"date"}):pe.d(e,t)},D:function(e,t,n){const r=ws(e);return t==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):D(r,t.length)},E:function(e,t,n){const r=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){const o=e.getDay(),s=(o-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(s);case"ee":return D(s,2);case"eo":return n.ordinalNumber(s,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});case"eeee":default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){const o=e.getDay(),s=(o-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(s);case"cc":return D(s,t.length);case"co":return n.ordinalNumber(s,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});case"cccc":default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(e,t,n){const r=e.getDay(),o=r===0?7:r;switch(t){case"i":return String(o);case"ii":return D(o,t.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){const o=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(e,t,n){const r=e.getHours();let o;switch(r===12?o=$e.noon:r===0?o=$e.midnight:o=r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(e,t,n){const r=e.getHours();let o;switch(r>=17?o=$e.evening:r>=12?o=$e.afternoon:r>=4?o=$e.morning:o=$e.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(e,t,n){if(t==="ho"){let r=e.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return pe.h(e,t)},H:function(e,t,n){return t==="Ho"?n.ordinalNumber(e.getHours(),{unit:"hour"}):pe.H(e,t)},K:function(e,t,n){const r=e.getHours()%12;return t==="Ko"?n.ordinalNumber(r,{unit:"hour"}):D(r,t.length)},k:function(e,t,n){let r=e.getHours();return r===0&&(r=24),t==="ko"?n.ordinalNumber(r,{unit:"hour"}):D(r,t.length)},m:function(e,t,n){return t==="mo"?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):pe.m(e,t)},s:function(e,t,n){return t==="so"?n.ordinalNumber(e.getSeconds(),{unit:"second"}):pe.s(e,t)},S:function(e,t){return pe.S(e,t)},X:function(e,t,n){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(t){case"X":return In(r);case"XXXX":case"XX":return be(r);case"XXXXX":case"XXX":default:return be(r,":")}},x:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"x":return In(r);case"xxxx":case"xx":return be(r);case"xxxxx":case"xxx":default:return be(r,":")}},O:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+Fn(r,":");case"OOOO":default:return"GMT"+be(r,":")}},z:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+Fn(r,":");case"zzzz":default:return"GMT"+be(r,":")}},t:function(e,t,n){const r=Math.trunc(e.getTime()/1e3);return D(r,t.length)},T:function(e,t,n){const r=e.getTime();return D(r,t.length)}};function Fn(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),o=Math.trunc(r/60),s=r%60;return s===0?n+String(o):n+String(o)+t+D(s,2)}function In(e,t){return e%60===0?(e>0?"-":"+")+D(Math.abs(e)/60,2):be(e,t)}function be(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),o=D(Math.trunc(r/60),2),s=D(r%60,2);return n+o+t+s}const Ln=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},kr=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},Ps=(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],r=n[1],o=n[2];if(!o)return Ln(e,t);let s;switch(r){case"P":s=t.dateTime({width:"short"});break;case"PP":s=t.dateTime({width:"medium"});break;case"PPP":s=t.dateTime({width:"long"});break;case"PPPP":default:s=t.dateTime({width:"full"});break}return s.replace("{{date}}",Ln(r,t)).replace("{{time}}",kr(o,t))},Ts={p:kr,P:Ps},Ms=/^D+$/,$s=/^Y+$/,Os=["D","DD","YY","YYYY"];function Cs(e){return Ms.test(e)}function js(e){return $s.test(e)}function Rs(e,t,n){const r=Ds(e,t,n);if(console.warn(r),Os.includes(e))throw new RangeError(r)}function Ds(e,t,n){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const _s=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Ws=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,As=/^'([^]*?)'?$/,Ns=/''/g,Fs=/[a-zA-Z]/;function Sr(e,t,n){var h,p,f,v,x,m,E,P;const r=$t(),o=(n==null?void 0:n.locale)??r.locale??vs,s=(n==null?void 0:n.firstWeekContainsDate)??((p=(h=n==null?void 0:n.locale)==null?void 0:h.options)==null?void 0:p.firstWeekContainsDate)??r.firstWeekContainsDate??((v=(f=r.locale)==null?void 0:f.options)==null?void 0:v.firstWeekContainsDate)??1,i=(n==null?void 0:n.weekStartsOn)??((m=(x=n==null?void 0:n.locale)==null?void 0:x.options)==null?void 0:m.weekStartsOn)??r.weekStartsOn??((P=(E=r.locale)==null?void 0:E.options)==null?void 0:P.weekStartsOn)??0,a=H(e);if(!Io(a))throw new RangeError("Invalid time value");let c=t.match(Ws).map(w=>{const g=w[0];if(g==="p"||g==="P"){const S=Ts[g];return S(w,o.formatLong)}return w}).join("").match(_s).map(w=>{if(w==="''")return{isToken:!1,value:"'"};const g=w[0];if(g==="'")return{isToken:!1,value:Is(w)};if(Nn[g])return{isToken:!0,value:w};if(g.match(Fs))throw new RangeError("Format string contains an unescaped latin alphabet character `"+g+"`");return{isToken:!1,value:w}});o.localize.preprocessor&&(c=o.localize.preprocessor(a,c));const u={firstWeekContainsDate:s,weekStartsOn:i,locale:o};return c.map(w=>{if(!w.isToken)return w.value;const g=w.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&js(g)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&Cs(g))&&Rs(g,t,String(e));const S=Nn[g[0]];return S(a,g,o.localize,u)}).join("")}function Is(e){const t=e.match(As);return t?t[1].replace(Ns,"'"):e}function Ls(e,t){const n=H(e),r=H(t);return n.getTime()>r.getTime()}function zs(e,t){const n=H(e),r=H(t);return+n<+r}const Bs=e=>d.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",...e},d.createElement("title",null,`
		solidleft
	`),d.createElement("path",{d:"M10.293 16.707c-0.187-0.188-0.292-0.442-0.292-0.707s0.105-0.519 0.292-0.707l10-10c0.092-0.098 0.202-0.177 0.325-0.232s0.255-0.084 0.389-0.086c0.134-0.002 0.268 0.022 0.392 0.073s0.238 0.125 0.333 0.22c0.095 0.095 0.17 0.208 0.22 0.333s0.075 0.258 0.073 0.392c-0.002 0.134-0.032 0.267-0.086 0.389s-0.133 0.233-0.232 0.325l-9.293 9.293 9.293 9.293c0.098 0.091 0.177 0.202 0.232 0.325s0.084 0.255 0.086 0.389c0.002 0.134-0.022 0.268-0.073 0.392s-0.125 0.238-0.22 0.333c-0.095 0.095-0.208 0.17-0.333 0.22s-0.258 0.075-0.392 0.073c-0.134-0.002-0.267-0.032-0.389-0.086s-0.233-0.134-0.325-0.232l-10-10z"})),Hs=e=>d.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",...e},d.createElement("title",null,`
		solid-right
	`),d.createElement("path",{d:"M21.707 16.707c0.187-0.188 0.292-0.442 0.292-0.707s-0.105-0.519-0.292-0.707l-10-10c-0.092-0.098-0.202-0.177-0.325-0.232s-0.255-0.084-0.389-0.086c-0.134-0.002-0.268 0.022-0.392 0.073s-0.238 0.125-0.333 0.22c-0.095 0.095-0.17 0.208-0.22 0.333s-0.075 0.258-0.073 0.392c0.002 0.134 0.032 0.267 0.086 0.389s0.133 0.233 0.232 0.325l9.293 9.293-9.293 9.293c-0.098 0.091-0.177 0.202-0.232 0.325s-0.084 0.255-0.086 0.389c-0.002 0.134 0.022 0.268 0.073 0.392s0.125 0.238 0.22 0.333c0.095 0.095 0.208 0.17 0.333 0.22s0.258 0.075 0.392 0.073c0.134-0.002 0.267-0.032 0.389-0.086s0.233-0.134 0.325-0.232l10-10z"})),Ys=y.div`
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

`,zn=y.button`
 background: transparent;
    border: none;
    cursor: ${e=>e.disabled?"default":"pointer"};
    visibility: ${e=>e.disabled?"hidden":"visible"};
    pointer-events: ${e=>e.disabled?"none":"auto"};
  
   
    margin: 0;
`,qs=y(Bs)`

fill: ${e=>e.theme.colors.primary.accent};
  width: 14px;
  height: auto;


`,Gs=y(Hs)`

fill: ${e=>e.theme.colors.primary.accent};
  width: 14px;
  height: auto;
 
 
`,Ks=({selectedDate:e,setSelectedDate:t,setCurrentMonth:n,setSelectedDay:r})=>{const o=new Date().getMonth(),s=new Date().getFullYear(),i=zs(e,Lt(new Date,-12)),a=Ls(e,new Date(s,o,1)),c=Sr(e,"MMMM"),u=e.getFullYear(),h=()=>{t(Lt(e,-1)),r(null),n(f=>f-1)},p=()=>{t(Lt(e,1)),r(null),n(f=>f+1)};return l.jsxs(Ys,{children:[l.jsx(zn,{onClick:h,disabled:i,children:l.jsx(qs,{})}),l.jsx("span",{children:`${c}, ${u}`}),l.jsx(zn,{onClick:p,disabled:a,children:l.jsx(Gs,{})})]})};function X(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,s;for(s=0;s<r.length;s++)o=r[s],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Pr(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=Pr(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function ge(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=Pr(e))&&(r&&(r+=" "),r+=t);return r}function Tr(e){return typeof e=="string"}function Us(e,t,n){return e===void 0||Tr(e)?t:b({},t,{ownerState:b({},t.ownerState,n)})}function Mr(e,t=[]){if(e===void 0)return{};const n={};return Object.keys(e).filter(r=>r.match(/^on[A-Z]/)&&typeof e[r]=="function"&&!t.includes(r)).forEach(r=>{n[r]=e[r]}),n}function Xs(e,t,n){return typeof e=="function"?e(t,n):e}function Bn(e){if(e===void 0)return{};const t={};return Object.keys(e).filter(n=>!(n.match(/^on[A-Z]/)&&typeof e[n]=="function")).forEach(n=>{t[n]=e[n]}),t}function Vs(e){const{getSlotProps:t,additionalProps:n,externalSlotProps:r,externalForwardedProps:o,className:s}=e;if(!t){const v=ge(n==null?void 0:n.className,s,o==null?void 0:o.className,r==null?void 0:r.className),x=b({},n==null?void 0:n.style,o==null?void 0:o.style,r==null?void 0:r.style),m=b({},n,o,r);return v.length>0&&(m.className=v),Object.keys(x).length>0&&(m.style=x),{props:m,internalRef:void 0}}const i=Mr(b({},o,r)),a=Bn(r),c=Bn(o),u=t(i),h=ge(u==null?void 0:u.className,n==null?void 0:n.className,s,o==null?void 0:o.className,r==null?void 0:r.className),p=b({},u==null?void 0:u.style,n==null?void 0:n.style,o==null?void 0:o.style,r==null?void 0:r.style),f=b({},u,n,c,a);return h.length>0&&(f.className=h),Object.keys(p).length>0&&(f.style=p),{props:f,internalRef:u.ref}}const Qs=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function ft(e){var t;const{elementType:n,externalSlotProps:r,ownerState:o,skipResolvingSlotProps:s=!1}=e,i=X(e,Qs),a=s?{}:Xs(r,o),{props:c,internalRef:u}=Vs(b({},i,{externalSlotProps:a})),h=Ee(u,a==null?void 0:a.ref,(t=e.additionalProps)==null?void 0:t.ref);return Us(n,b({},c,{ref:h}),o)}var tt={},$r={exports:{}};(function(e){function t(n){return n&&n.__esModule?n:{default:n}}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})($r);var Or=$r.exports;const Js=fe(Jr);var Bt={exports:{}},Hn;function Zs(){return Hn||(Hn=1,function(e){function t(n,r){if(n==null)return{};var o={},s=Object.keys(n),i,a;for(a=0;a<s.length;a++)i=s[a],!(r.indexOf(i)>=0)&&(o[i]=n[i]);return o}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}(Bt)),Bt.exports}let Xt;typeof document=="object"&&(Xt=eo({key:"css",prepend:!0}));function ei(e){const{injectFirst:t,children:n}=e;return t&&Xt?l.jsx(Zr,{value:Xt,children:n}):n}function ti(e){return e==null||Object.keys(e).length===0}function ni(e){const{styles:t,defaultTheme:n={}}=e,r=typeof t=="function"?o=>t(ti(o)?n:o):t;return l.jsx(Ro,{styles:r})}/**
 * @mui/styled-engine v5.15.14
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function ri(e,t){return to(e,t)}const oi=(e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))},si=Object.freeze(Object.defineProperty({__proto__:null,GlobalStyles:ni,StyledEngineProvider:ei,ThemeContext:en,css:br,default:ri,internal_processStyles:oi,keyframes:Do},Symbol.toStringTag,{value:"Module"})),ii=fe(si),ai=fe(fo),ci=fe(bo),li=fe(xo),ui=["values","unit","step"],di=e=>{const t=Object.keys(e).map(n=>({key:n,val:e[n]}))||[];return t.sort((n,r)=>n.val-r.val),t.reduce((n,r)=>b({},n,{[r.key]:r.val}),{})};function Cr(e){const{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5}=e,o=X(e,ui),s=di(t),i=Object.keys(s);function a(f){return`@media (min-width:${typeof t[f]=="number"?t[f]:f}${n})`}function c(f){return`@media (max-width:${(typeof t[f]=="number"?t[f]:f)-r/100}${n})`}function u(f,v){const x=i.indexOf(v);return`@media (min-width:${typeof t[f]=="number"?t[f]:f}${n}) and (max-width:${(x!==-1&&typeof t[i[x]]=="number"?t[i[x]]:v)-r/100}${n})`}function h(f){return i.indexOf(f)+1<i.length?u(f,i[i.indexOf(f)+1]):a(f)}function p(f){const v=i.indexOf(f);return v===0?a(i[1]):v===i.length-1?c(i[v]):u(f,i[i.indexOf(f)+1]).replace("@media","@media not all and")}return b({keys:i,values:s,up:a,down:c,between:u,only:h,not:p,unit:n},o)}const fi={borderRadius:4},hi=fi;function Ke(e,t){return t?ce(e,t,{clone:!1}):e}const an={xs:0,sm:600,md:900,lg:1200,xl:1536},Yn={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${an[e]}px)`};function de(e,t,n){const r=e.theme||{};if(Array.isArray(t)){const s=r.breakpoints||Yn;return t.reduce((i,a,c)=>(i[s.up(s.keys[c])]=n(t[c]),i),{})}if(typeof t=="object"){const s=r.breakpoints||Yn;return Object.keys(t).reduce((i,a)=>{if(Object.keys(s.values||an).indexOf(a)!==-1){const c=s.up(a);i[c]=n(t[a],a)}else{const c=a;i[c]=t[c]}return i},{})}return n(t)}function pi(e={}){var t;return((t=e.keys)==null?void 0:t.reduce((r,o)=>{const s=e.up(o);return r[s]={},r},{}))||{}}function mi(e,t){return e.reduce((n,r)=>{const o=n[r];return(!o||Object.keys(o).length===0)&&delete n[r],n},t)}function Ot(e,t,n=!0){if(!t||typeof t!="string")return null;if(e&&e.vars&&n){const r=`vars.${t}`.split(".").reduce((o,s)=>o&&o[s]?o[s]:null,e);if(r!=null)return r}return t.split(".").reduce((r,o)=>r&&r[o]!=null?r[o]:null,e)}function ht(e,t,n,r=n){let o;return typeof e=="function"?o=e(n):Array.isArray(e)?o=e[n]||r:o=Ot(e,n)||r,t&&(o=t(o,r,e)),o}function Y(e){const{prop:t,cssProperty:n=e.prop,themeKey:r,transform:o}=e,s=i=>{if(i[t]==null)return null;const a=i[t],c=i.theme,u=Ot(c,r)||{};return de(i,a,p=>{let f=ht(u,o,p);return p===f&&typeof p=="string"&&(f=ht(u,o,`${t}${p==="default"?"":on(p)}`,p)),n===!1?f:{[n]:f}})};return s.propTypes={},s.filterProps=[t],s}function gi(e){const t={};return n=>(t[n]===void 0&&(t[n]=e(n)),t[n])}const yi={m:"margin",p:"padding"},xi={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},qn={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},bi=gi(e=>{if(e.length>2)if(qn[e])e=qn[e];else return[e];const[t,n]=e.split(""),r=yi[t],o=xi[n]||"";return Array.isArray(o)?o.map(s=>r+s):[r+o]}),cn=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],ln=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...cn,...ln];function nt(e,t,n,r){var o;const s=(o=Ot(e,t,!1))!=null?o:n;return typeof s=="number"?i=>typeof i=="string"?i:s*i:Array.isArray(s)?i=>typeof i=="string"?i:s[i]:typeof s=="function"?s:()=>{}}function jr(e){return nt(e,"spacing",8)}function rt(e,t){if(typeof t=="string"||t==null)return t;const n=Math.abs(t),r=e(n);return t>=0?r:typeof r=="number"?-r:`-${r}`}function vi(e,t){return n=>e.reduce((r,o)=>(r[o]=rt(t,n),r),{})}function wi(e,t,n,r){if(t.indexOf(n)===-1)return null;const o=bi(n),s=vi(o,r),i=e[n];return de(e,i,s)}function Rr(e,t){const n=jr(e.theme);return Object.keys(e).map(r=>wi(e,t,r,n)).reduce(Ke,{})}function L(e){return Rr(e,cn)}L.propTypes={};L.filterProps=cn;function z(e){return Rr(e,ln)}z.propTypes={};z.filterProps=ln;function Ei(e=8){if(e.mui)return e;const t=jr({spacing:e}),n=(...r)=>(r.length===0?[1]:r).map(s=>{const i=t(s);return typeof i=="number"?`${i}px`:i}).join(" ");return n.mui=!0,n}function Ct(...e){const t=e.reduce((r,o)=>(o.filterProps.forEach(s=>{r[s]=o}),r),{}),n=r=>Object.keys(r).reduce((o,s)=>t[s]?Ke(o,t[s](r)):o,{});return n.propTypes={},n.filterProps=e.reduce((r,o)=>r.concat(o.filterProps),[]),n}function te(e){return typeof e!="number"?e:`${e}px solid`}function oe(e,t){return Y({prop:e,themeKey:"borders",transform:t})}const ki=oe("border",te),Si=oe("borderTop",te),Pi=oe("borderRight",te),Ti=oe("borderBottom",te),Mi=oe("borderLeft",te),$i=oe("borderColor"),Oi=oe("borderTopColor"),Ci=oe("borderRightColor"),ji=oe("borderBottomColor"),Ri=oe("borderLeftColor"),Di=oe("outline",te),_i=oe("outlineColor"),jt=e=>{if(e.borderRadius!==void 0&&e.borderRadius!==null){const t=nt(e.theme,"shape.borderRadius",4),n=r=>({borderRadius:rt(t,r)});return de(e,e.borderRadius,n)}return null};jt.propTypes={};jt.filterProps=["borderRadius"];Ct(ki,Si,Pi,Ti,Mi,$i,Oi,Ci,ji,Ri,jt,Di,_i);const Rt=e=>{if(e.gap!==void 0&&e.gap!==null){const t=nt(e.theme,"spacing",8),n=r=>({gap:rt(t,r)});return de(e,e.gap,n)}return null};Rt.propTypes={};Rt.filterProps=["gap"];const Dt=e=>{if(e.columnGap!==void 0&&e.columnGap!==null){const t=nt(e.theme,"spacing",8),n=r=>({columnGap:rt(t,r)});return de(e,e.columnGap,n)}return null};Dt.propTypes={};Dt.filterProps=["columnGap"];const _t=e=>{if(e.rowGap!==void 0&&e.rowGap!==null){const t=nt(e.theme,"spacing",8),n=r=>({rowGap:rt(t,r)});return de(e,e.rowGap,n)}return null};_t.propTypes={};_t.filterProps=["rowGap"];const Wi=Y({prop:"gridColumn"}),Ai=Y({prop:"gridRow"}),Ni=Y({prop:"gridAutoFlow"}),Fi=Y({prop:"gridAutoColumns"}),Ii=Y({prop:"gridAutoRows"}),Li=Y({prop:"gridTemplateColumns"}),zi=Y({prop:"gridTemplateRows"}),Bi=Y({prop:"gridTemplateAreas"}),Hi=Y({prop:"gridArea"});Ct(Rt,Dt,_t,Wi,Ai,Ni,Fi,Ii,Li,zi,Bi,Hi);function Ae(e,t){return t==="grey"?t:e}const Yi=Y({prop:"color",themeKey:"palette",transform:Ae}),qi=Y({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:Ae}),Gi=Y({prop:"backgroundColor",themeKey:"palette",transform:Ae});Ct(Yi,qi,Gi);function J(e){return e<=1&&e!==0?`${e*100}%`:e}const Ki=Y({prop:"width",transform:J}),un=e=>{if(e.maxWidth!==void 0&&e.maxWidth!==null){const t=n=>{var r,o;const s=((r=e.theme)==null||(r=r.breakpoints)==null||(r=r.values)==null?void 0:r[n])||an[n];return s?((o=e.theme)==null||(o=o.breakpoints)==null?void 0:o.unit)!=="px"?{maxWidth:`${s}${e.theme.breakpoints.unit}`}:{maxWidth:s}:{maxWidth:J(n)}};return de(e,e.maxWidth,t)}return null};un.filterProps=["maxWidth"];const Ui=Y({prop:"minWidth",transform:J}),Xi=Y({prop:"height",transform:J}),Vi=Y({prop:"maxHeight",transform:J}),Qi=Y({prop:"minHeight",transform:J});Y({prop:"size",cssProperty:"width",transform:J});Y({prop:"size",cssProperty:"height",transform:J});const Ji=Y({prop:"boxSizing"});Ct(Ki,un,Ui,Xi,Vi,Qi,Ji);const Zi={border:{themeKey:"borders",transform:te},borderTop:{themeKey:"borders",transform:te},borderRight:{themeKey:"borders",transform:te},borderBottom:{themeKey:"borders",transform:te},borderLeft:{themeKey:"borders",transform:te},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:te},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:jt},color:{themeKey:"palette",transform:Ae},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:Ae},backgroundColor:{themeKey:"palette",transform:Ae},p:{style:z},pt:{style:z},pr:{style:z},pb:{style:z},pl:{style:z},px:{style:z},py:{style:z},padding:{style:z},paddingTop:{style:z},paddingRight:{style:z},paddingBottom:{style:z},paddingLeft:{style:z},paddingX:{style:z},paddingY:{style:z},paddingInline:{style:z},paddingInlineStart:{style:z},paddingInlineEnd:{style:z},paddingBlock:{style:z},paddingBlockStart:{style:z},paddingBlockEnd:{style:z},m:{style:L},mt:{style:L},mr:{style:L},mb:{style:L},ml:{style:L},mx:{style:L},my:{style:L},margin:{style:L},marginTop:{style:L},marginRight:{style:L},marginBottom:{style:L},marginLeft:{style:L},marginX:{style:L},marginY:{style:L},marginInline:{style:L},marginInlineStart:{style:L},marginInlineEnd:{style:L},marginBlock:{style:L},marginBlockStart:{style:L},marginBlockEnd:{style:L},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:Rt},rowGap:{style:_t},columnGap:{style:Dt},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:J},maxWidth:{style:un},minWidth:{transform:J},height:{transform:J},maxHeight:{transform:J},minHeight:{transform:J},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}},ot=Zi;function ea(...e){const t=e.reduce((r,o)=>r.concat(Object.keys(o)),[]),n=new Set(t);return e.every(r=>n.size===Object.keys(r).length)}function ta(e,t){return typeof e=="function"?e(t):e}function Dr(){function e(n,r,o,s){const i={[n]:r,theme:o},a=s[n];if(!a)return{[n]:r};const{cssProperty:c=n,themeKey:u,transform:h,style:p}=a;if(r==null)return null;if(u==="typography"&&r==="inherit")return{[n]:r};const f=Ot(o,u)||{};return p?p(i):de(i,r,x=>{let m=ht(f,h,x);return x===m&&typeof x=="string"&&(m=ht(f,h,`${n}${x==="default"?"":on(x)}`,x)),c===!1?m:{[c]:m}})}function t(n){var r;const{sx:o,theme:s={}}=n||{};if(!o)return null;const i=(r=s.unstable_sxConfig)!=null?r:ot;function a(c){let u=c;if(typeof c=="function")u=c(s);else if(typeof c!="object")return c;if(!u)return null;const h=pi(s.breakpoints),p=Object.keys(h);let f=h;return Object.keys(u).forEach(v=>{const x=ta(u[v],s);if(x!=null)if(typeof x=="object")if(i[v])f=Ke(f,e(v,x,s,i));else{const m=de({theme:s},x,E=>({[v]:E}));ea(m,x)?f[v]=t({sx:x,theme:s}):f=Ke(f,m)}else f=Ke(f,e(v,x,s,i))}),mi(p,f)}return Array.isArray(o)?o.map(a):a(o)}return t}const _r=Dr();_r.filterProps=["sx"];const dn=_r;function Wr(e,t){const n=this;return n.vars&&typeof n.getColorSchemeSelector=="function"?{[n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/,"*:where($1)")]:t}:n.palette.mode===e?t:{}}const na=["breakpoints","palette","spacing","shape"];function fn(e={},...t){const{breakpoints:n={},palette:r={},spacing:o,shape:s={}}=e,i=X(e,na),a=Cr(n),c=Ei(o);let u=ce({breakpoints:a,direction:"ltr",components:{},palette:b({mode:"light"},r),spacing:c,shape:b({},hi,s)},i);return u.applyStyles=Wr,u=t.reduce((h,p)=>ce(h,p),u),u.unstable_sxConfig=b({},ot,i==null?void 0:i.unstable_sxConfig),u.unstable_sx=function(p){return dn({sx:p,theme:this})},u}const ra=Object.freeze(Object.defineProperty({__proto__:null,default:fn,private_createBreakpoints:Cr,unstable_applyStyles:Wr},Symbol.toStringTag,{value:"Module"})),oa=fe(ra),sa=["sx"],ia=e=>{var t,n;const r={systemProps:{},otherProps:{}},o=(t=e==null||(n=e.theme)==null?void 0:n.unstable_sxConfig)!=null?t:ot;return Object.keys(e).forEach(s=>{o[s]?r.systemProps[s]=e[s]:r.otherProps[s]=e[s]}),r};function aa(e){const{sx:t}=e,n=X(e,sa),{systemProps:r,otherProps:o}=ia(n);let s;return Array.isArray(t)?s=[r,...t]:typeof t=="function"?s=(...i)=>{const a=t(...i);return me(a)?b({},r,a):r}:s=b({},r,t),b({},o,{sx:s})}const ca=Object.freeze(Object.defineProperty({__proto__:null,default:dn,extendSxProp:aa,unstable_createStyleFunctionSx:Dr,unstable_defaultSxConfig:ot},Symbol.toStringTag,{value:"Module"})),la=fe(ca);var Ne=Or;Object.defineProperty(tt,"__esModule",{value:!0});var ua=tt.default=ka;tt.shouldForwardProp=lt;tt.systemDefaultTheme=void 0;var ee=Ne(Js),Vt=Ne(Zs()),Gn=ya(ii),da=ai;Ne(ci);Ne(li);var fa=Ne(oa),ha=Ne(la);const pa=["ownerState"],ma=["variants"],ga=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function Ar(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(Ar=function(r){return r?n:t})(e)}function ya(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=Ar(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(s!=="default"&&Object.prototype.hasOwnProperty.call(e,s)){var i=o?Object.getOwnPropertyDescriptor(e,s):null;i&&(i.get||i.set)?Object.defineProperty(r,s,i):r[s]=e[s]}return r.default=e,n&&n.set(e,r),r}function xa(e){return Object.keys(e).length===0}function ba(e){return typeof e=="string"&&e.charCodeAt(0)>96}function lt(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const va=tt.systemDefaultTheme=(0,fa.default)(),wa=e=>e&&e.charAt(0).toLowerCase()+e.slice(1);function ct({defaultTheme:e,theme:t,themeId:n}){return xa(t)?e:t[n]||t}function Ea(e){return e?(t,n)=>n[e]:null}function ut(e,t){let{ownerState:n}=t,r=(0,Vt.default)(t,pa);const o=typeof e=="function"?e((0,ee.default)({ownerState:n},r)):e;if(Array.isArray(o))return o.flatMap(s=>ut(s,(0,ee.default)({ownerState:n},r)));if(o&&typeof o=="object"&&Array.isArray(o.variants)){const{variants:s=[]}=o;let a=(0,Vt.default)(o,ma);return s.forEach(c=>{let u=!0;typeof c.props=="function"?u=c.props((0,ee.default)({ownerState:n},r,n)):Object.keys(c.props).forEach(h=>{(n==null?void 0:n[h])!==c.props[h]&&r[h]!==c.props[h]&&(u=!1)}),u&&(Array.isArray(a)||(a=[a]),a.push(typeof c.style=="function"?c.style((0,ee.default)({ownerState:n},r,n)):c.style))}),a}return o}function ka(e={}){const{themeId:t,defaultTheme:n=va,rootShouldForwardProp:r=lt,slotShouldForwardProp:o=lt}=e,s=i=>(0,ha.default)((0,ee.default)({},i,{theme:ct((0,ee.default)({},i,{defaultTheme:n,themeId:t}))}));return s.__mui_systemSx=!0,(i,a={})=>{(0,Gn.internal_processStyles)(i,k=>k.filter(C=>!(C!=null&&C.__mui_systemSx)));const{name:c,slot:u,skipVariantsResolver:h,skipSx:p,overridesResolver:f=Ea(wa(u))}=a,v=(0,Vt.default)(a,ga),x=h!==void 0?h:u&&u!=="Root"&&u!=="root"||!1,m=p||!1;let E,P=lt;u==="Root"||u==="root"?P=r:u?P=o:ba(i)&&(P=void 0);const w=(0,Gn.default)(i,(0,ee.default)({shouldForwardProp:P,label:E},v)),g=k=>typeof k=="function"&&k.__emotion_real!==k||(0,da.isPlainObject)(k)?C=>ut(k,(0,ee.default)({},C,{theme:ct({theme:C.theme,defaultTheme:n,themeId:t})})):k,S=(k,...C)=>{let j=g(k);const A=C?C.map(g):[];c&&f&&A.push(F=>{const R=ct((0,ee.default)({},F,{defaultTheme:n,themeId:t}));if(!R.components||!R.components[c]||!R.components[c].styleOverrides)return null;const I=R.components[c].styleOverrides,O={};return Object.entries(I).forEach(([T,M])=>{O[T]=ut(M,(0,ee.default)({},F,{theme:R}))}),f(F,O)}),c&&!x&&A.push(F=>{var R;const I=ct((0,ee.default)({},F,{defaultTheme:n,themeId:t})),O=I==null||(R=I.components)==null||(R=R[c])==null?void 0:R.variants;return ut({variants:O},(0,ee.default)({},F,{theme:I}))}),m||A.push(s);const K=A.length-C.length;if(Array.isArray(k)&&K>0){const F=new Array(K).fill("");j=[...k,...F],j.raw=[...k.raw,...F]}const B=w(j,...A);return i.muiName&&(B.muiName=i.muiName),B};return w.withConfig&&(S.withConfig=w.withConfig),S}}function Sa(e,t){return b({toolbar:{minHeight:56,[e.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[e.up("sm")]:{minHeight:64}}},t)}var q={};const Pa=fe(ho),Ta=fe(jo);var Nr=Or;Object.defineProperty(q,"__esModule",{value:!0});var Kn=q.alpha=zr;q.blend=Ia;q.colorChannel=void 0;var Ma=q.darken=pn;q.decomposeColor=ne;q.emphasize=Fa;var $a=q.getContrastRatio=_a;q.getLuminance=pt;q.hexToRgb=Fr;q.hslToRgb=Lr;var Oa=q.lighten=mn;q.private_safeAlpha=Wa;q.private_safeColorChannel=void 0;q.private_safeDarken=Aa;q.private_safeEmphasize=Br;q.private_safeLighten=Na;q.recomposeColor=Fe;q.rgbToHex=Da;var Un=Nr(Pa),Ca=Nr(Ta);function hn(e,t=0,n=1){return(0,Ca.default)(e,t,n)}function Fr(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let n=e.match(t);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,o)=>o<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function ja(e){const t=e.toString(16);return t.length===1?`0${t}`:t}function ne(e){if(e.type)return e;if(e.charAt(0)==="#")return ne(Fr(e));const t=e.indexOf("("),n=e.substring(0,t);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error((0,Un.default)(9,e));let r=e.substring(t+1,e.length-1),o;if(n==="color"){if(r=r.split(" "),o=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(o)===-1)throw new Error((0,Un.default)(10,o))}else r=r.split(",");return r=r.map(s=>parseFloat(s)),{type:n,values:r,colorSpace:o}}const Ir=e=>{const t=ne(e);return t.values.slice(0,3).map((n,r)=>t.type.indexOf("hsl")!==-1&&r!==0?`${n}%`:n).join(" ")};q.colorChannel=Ir;const Ra=(e,t)=>{try{return Ir(e)}catch{return e}};q.private_safeColorChannel=Ra;function Fe(e){const{type:t,colorSpace:n}=e;let{values:r}=e;return t.indexOf("rgb")!==-1?r=r.map((o,s)=>s<3?parseInt(o,10):o):t.indexOf("hsl")!==-1&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),t.indexOf("color")!==-1?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${t}(${r})`}function Da(e){if(e.indexOf("#")===0)return e;const{values:t}=ne(e);return`#${t.map((n,r)=>ja(r===3?Math.round(255*n):n)).join("")}`}function Lr(e){e=ne(e);const{values:t}=e,n=t[0],r=t[1]/100,o=t[2]/100,s=r*Math.min(o,1-o),i=(u,h=(u+n/30)%12)=>o-s*Math.max(Math.min(h-3,9-h,1),-1);let a="rgb";const c=[Math.round(i(0)*255),Math.round(i(8)*255),Math.round(i(4)*255)];return e.type==="hsla"&&(a+="a",c.push(t[3])),Fe({type:a,values:c})}function pt(e){e=ne(e);let t=e.type==="hsl"||e.type==="hsla"?ne(Lr(e)).values:e.values;return t=t.map(n=>(e.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function _a(e,t){const n=pt(e),r=pt(t);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function zr(e,t){return e=ne(e),t=hn(t),(e.type==="rgb"||e.type==="hsl")&&(e.type+="a"),e.type==="color"?e.values[3]=`/${t}`:e.values[3]=t,Fe(e)}function Wa(e,t,n){try{return zr(e,t)}catch{return e}}function pn(e,t){if(e=ne(e),t=hn(t),e.type.indexOf("hsl")!==-1)e.values[2]*=1-t;else if(e.type.indexOf("rgb")!==-1||e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]*=1-t;return Fe(e)}function Aa(e,t,n){try{return pn(e,t)}catch{return e}}function mn(e,t){if(e=ne(e),t=hn(t),e.type.indexOf("hsl")!==-1)e.values[2]+=(100-e.values[2])*t;else if(e.type.indexOf("rgb")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;else if(e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(1-e.values[n])*t;return Fe(e)}function Na(e,t,n){try{return mn(e,t)}catch{return e}}function Fa(e,t=.15){return pt(e)>.5?pn(e,t):mn(e,t)}function Br(e,t,n){try{return Br(e,t)}catch{return e}}function Ia(e,t,n,r=1){const o=(c,u)=>Math.round((c**(1/r)*(1-n)+u**(1/r)*n)**r),s=ne(e),i=ne(t),a=[o(s.values[0],i.values[0]),o(s.values[1],i.values[1]),o(s.values[2],i.values[2])];return Fe({type:"rgb",values:a})}const La={black:"#000",white:"#fff"},Je=La,za={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},Ba=za,Ha={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},Oe=Ha,Ya={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},Ce=Ya,qa={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},Ye=qa,Ga={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},je=Ga,Ka={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},Re=Ka,Ua={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},De=Ua,Xa=["mode","contrastThreshold","tonalOffset"],Xn={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:Je.white,default:Je.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},Ht={text:{primary:Je.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:Je.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function Vn(e,t,n,r){const o=r.light||r,s=r.dark||r*1.5;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:t==="light"?e.light=Oa(e.main,o):t==="dark"&&(e.dark=Ma(e.main,s)))}function Va(e="light"){return e==="dark"?{main:je[200],light:je[50],dark:je[400]}:{main:je[700],light:je[400],dark:je[800]}}function Qa(e="light"){return e==="dark"?{main:Oe[200],light:Oe[50],dark:Oe[400]}:{main:Oe[500],light:Oe[300],dark:Oe[700]}}function Ja(e="light"){return e==="dark"?{main:Ce[500],light:Ce[300],dark:Ce[700]}:{main:Ce[700],light:Ce[400],dark:Ce[800]}}function Za(e="light"){return e==="dark"?{main:Re[400],light:Re[300],dark:Re[700]}:{main:Re[700],light:Re[500],dark:Re[900]}}function ec(e="light"){return e==="dark"?{main:De[400],light:De[300],dark:De[700]}:{main:De[800],light:De[500],dark:De[900]}}function tc(e="light"){return e==="dark"?{main:Ye[400],light:Ye[300],dark:Ye[700]}:{main:"#ed6c02",light:Ye[500],dark:Ye[900]}}function nc(e){const{mode:t="light",contrastThreshold:n=3,tonalOffset:r=.2}=e,o=X(e,Xa),s=e.primary||Va(t),i=e.secondary||Qa(t),a=e.error||Ja(t),c=e.info||Za(t),u=e.success||ec(t),h=e.warning||tc(t);function p(m){return $a(m,Ht.text.primary)>=n?Ht.text.primary:Xn.text.primary}const f=({color:m,name:E,mainShade:P=500,lightShade:w=300,darkShade:g=700})=>{if(m=b({},m),!m.main&&m[P]&&(m.main=m[P]),!m.hasOwnProperty("main"))throw new Error(Xe(11,E?` (${E})`:"",P));if(typeof m.main!="string")throw new Error(Xe(12,E?` (${E})`:"",JSON.stringify(m.main)));return Vn(m,"light",w,r),Vn(m,"dark",g,r),m.contrastText||(m.contrastText=p(m.main)),m},v={dark:Ht,light:Xn};return ce(b({common:b({},Je),mode:t,primary:f({color:s,name:"primary"}),secondary:f({color:i,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:f({color:a,name:"error"}),warning:f({color:h,name:"warning"}),info:f({color:c,name:"info"}),success:f({color:u,name:"success"}),grey:Ba,contrastThreshold:n,getContrastText:p,augmentColor:f,tonalOffset:r},v[t]),o)}const rc=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function oc(e){return Math.round(e*1e5)/1e5}const Qn={textTransform:"uppercase"},Jn='"Roboto", "Helvetica", "Arial", sans-serif';function sc(e,t){const n=typeof t=="function"?t(e):t,{fontFamily:r=Jn,fontSize:o=14,fontWeightLight:s=300,fontWeightRegular:i=400,fontWeightMedium:a=500,fontWeightBold:c=700,htmlFontSize:u=16,allVariants:h,pxToRem:p}=n,f=X(n,rc),v=o/14,x=p||(P=>`${P/u*v}rem`),m=(P,w,g,S,k)=>b({fontFamily:r,fontWeight:P,fontSize:x(w),lineHeight:g},r===Jn?{letterSpacing:`${oc(S/w)}em`}:{},k,h),E={h1:m(s,96,1.167,-1.5),h2:m(s,60,1.2,-.5),h3:m(i,48,1.167,0),h4:m(i,34,1.235,.25),h5:m(i,24,1.334,0),h6:m(a,20,1.6,.15),subtitle1:m(i,16,1.75,.15),subtitle2:m(a,14,1.57,.1),body1:m(i,16,1.5,.15),body2:m(i,14,1.43,.15),button:m(a,14,1.75,.4,Qn),caption:m(i,12,1.66,.4),overline:m(i,12,2.66,1,Qn),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return ce(b({htmlFontSize:u,pxToRem:x,fontFamily:r,fontSize:o,fontWeightLight:s,fontWeightRegular:i,fontWeightMedium:a,fontWeightBold:c},E),f,{clone:!1})}const ic=.2,ac=.14,cc=.12;function N(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${ic})`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${ac})`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${cc})`].join(",")}const lc=["none",N(0,2,1,-1,0,1,1,0,0,1,3,0),N(0,3,1,-2,0,2,2,0,0,1,5,0),N(0,3,3,-2,0,3,4,0,0,1,8,0),N(0,2,4,-1,0,4,5,0,0,1,10,0),N(0,3,5,-1,0,5,8,0,0,1,14,0),N(0,3,5,-1,0,6,10,0,0,1,18,0),N(0,4,5,-2,0,7,10,1,0,2,16,1),N(0,5,5,-3,0,8,10,1,0,3,14,2),N(0,5,6,-3,0,9,12,1,0,3,16,2),N(0,6,6,-3,0,10,14,1,0,4,18,3),N(0,6,7,-4,0,11,15,1,0,4,20,3),N(0,7,8,-4,0,12,17,2,0,5,22,4),N(0,7,8,-4,0,13,19,2,0,5,24,4),N(0,7,9,-4,0,14,21,2,0,5,26,4),N(0,8,9,-5,0,15,22,2,0,6,28,5),N(0,8,10,-5,0,16,24,2,0,6,30,5),N(0,8,11,-5,0,17,26,2,0,6,32,5),N(0,9,11,-5,0,18,28,2,0,7,34,6),N(0,9,12,-6,0,19,29,2,0,7,36,6),N(0,10,13,-6,0,20,31,3,0,8,38,7),N(0,10,13,-6,0,21,33,3,0,8,40,7),N(0,10,14,-6,0,22,35,3,0,8,42,7),N(0,11,14,-7,0,23,36,3,0,9,44,8),N(0,11,15,-7,0,24,38,3,0,9,46,8)],uc=lc,dc=["duration","easing","delay"],fc={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},hc={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function Zn(e){return`${Math.round(e)}ms`}function pc(e){if(!e)return 0;const t=e/36;return Math.round((4+15*t**.25+t/5)*10)}function mc(e){const t=b({},fc,e.easing),n=b({},hc,e.duration);return b({getAutoHeightDuration:pc,create:(o=["all"],s={})=>{const{duration:i=n.standard,easing:a=t.easeInOut,delay:c=0}=s;return X(s,dc),(Array.isArray(o)?o:[o]).map(u=>`${u} ${typeof i=="string"?i:Zn(i)} ${a} ${typeof c=="string"?c:Zn(c)}`).join(",")}},e,{easing:t,duration:n})}const gc={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},yc=gc,xc=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function bc(e={},...t){const{mixins:n={},palette:r={},transitions:o={},typography:s={}}=e,i=X(e,xc);if(e.vars)throw new Error(Xe(18));const a=nc(r),c=fn(e);let u=ce(c,{mixins:Sa(c.breakpoints,n),palette:a,shadows:uc.slice(),typography:sc(a,s),transitions:mc(o),zIndex:b({},yc)});return u=ce(u,i),u=t.reduce((h,p)=>ce(h,p),u),u.unstable_sxConfig=b({},ot,i==null?void 0:i.unstable_sxConfig),u.unstable_sx=function(p){return dn({sx:p,theme:this})},u}const vc=bc(),gn=vc,yn="$$material";function wc(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const Ec=e=>wc(e)&&e!=="classes",kc=Ec,Sc=ua({themeId:yn,defaultTheme:gn,rootShouldForwardProp:kc}),Ie=Sc;function Pc(e){const{theme:t,name:n,props:r}=e;return!t||!t.components||!t.components[n]||!t.components[n].defaultProps?r:xr(t.components[n].defaultProps,r)}function Tc(e){return Object.keys(e).length===0}function Mc(e=null){const t=d.useContext(en);return!t||Tc(t)?e:t}const $c=fn();function Hr(e=$c){return Mc(e)}function Oc({props:e,name:t,defaultTheme:n,themeId:r}){let o=Hr(n);return r&&(o=o[r]||o),Pc({theme:o,name:t,props:e})}function Wt({props:e,name:t}){return Oc({props:e,name:t,defaultTheme:gn,themeId:yn})}function Qt(e,t){return Qt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},Qt(e,t)}function Cc(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Qt(e,t)}const er={disabled:!1},Yr=qe.createContext(null);var jc=function(t){return t.scrollTop},Ge="unmounted",ve="exited",we="entering",We="entered",Jt="exiting",he=function(e){Cc(t,e);function t(r,o){var s;s=e.call(this,r,o)||this;var i=o,a=i&&!i.isMounting?r.enter:r.appear,c;return s.appearStatus=null,r.in?a?(c=ve,s.appearStatus=we):c=We:r.unmountOnExit||r.mountOnEnter?c=Ge:c=ve,s.state={status:c},s.nextCallback=null,s}t.getDerivedStateFromProps=function(o,s){var i=o.in;return i&&s.status===Ge?{status:ve}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(o){var s=null;if(o!==this.props){var i=this.state.status;this.props.in?i!==we&&i!==We&&(s=we):(i===we||i===We)&&(s=Jt)}this.updateStatus(!1,s)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var o=this.props.timeout,s,i,a;return s=i=a=o,o!=null&&typeof o!="number"&&(s=o.exit,i=o.enter,a=o.appear!==void 0?o.appear:i),{exit:s,enter:i,appear:a}},n.updateStatus=function(o,s){if(o===void 0&&(o=!1),s!==null)if(this.cancelNextCallback(),s===we){if(this.props.unmountOnExit||this.props.mountOnEnter){var i=this.props.nodeRef?this.props.nodeRef.current:at.findDOMNode(this);i&&jc(i)}this.performEnter(o)}else this.performExit();else this.props.unmountOnExit&&this.state.status===ve&&this.setState({status:Ge})},n.performEnter=function(o){var s=this,i=this.props.enter,a=this.context?this.context.isMounting:o,c=this.props.nodeRef?[a]:[at.findDOMNode(this),a],u=c[0],h=c[1],p=this.getTimeouts(),f=a?p.appear:p.enter;if(!o&&!i||er.disabled){this.safeSetState({status:We},function(){s.props.onEntered(u)});return}this.props.onEnter(u,h),this.safeSetState({status:we},function(){s.props.onEntering(u,h),s.onTransitionEnd(f,function(){s.safeSetState({status:We},function(){s.props.onEntered(u,h)})})})},n.performExit=function(){var o=this,s=this.props.exit,i=this.getTimeouts(),a=this.props.nodeRef?void 0:at.findDOMNode(this);if(!s||er.disabled){this.safeSetState({status:ve},function(){o.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:Jt},function(){o.props.onExiting(a),o.onTransitionEnd(i.exit,function(){o.safeSetState({status:ve},function(){o.props.onExited(a)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(o,s){s=this.setNextCallback(s),this.setState(o,s)},n.setNextCallback=function(o){var s=this,i=!0;return this.nextCallback=function(a){i&&(i=!1,s.nextCallback=null,o(a))},this.nextCallback.cancel=function(){i=!1},this.nextCallback},n.onTransitionEnd=function(o,s){this.setNextCallback(s);var i=this.props.nodeRef?this.props.nodeRef.current:at.findDOMNode(this),a=o==null&&!this.props.addEndListener;if(!i||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var c=this.props.nodeRef?[this.nextCallback]:[i,this.nextCallback],u=c[0],h=c[1];this.props.addEndListener(u,h)}o!=null&&setTimeout(this.nextCallback,o)},n.render=function(){var o=this.state.status;if(o===Ge)return null;var s=this.props,i=s.children;s.in,s.mountOnEnter,s.unmountOnExit,s.appear,s.enter,s.exit,s.timeout,s.addEndListener,s.onEnter,s.onEntering,s.onEntered,s.onExit,s.onExiting,s.onExited,s.nodeRef;var a=X(s,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return qe.createElement(Yr.Provider,{value:null},typeof i=="function"?i(o,a):qe.cloneElement(qe.Children.only(i),a))},t}(qe.Component);he.contextType=Yr;he.propTypes={};function _e(){}he.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:_e,onEntering:_e,onEntered:_e,onExit:_e,onExiting:_e,onExited:_e};he.UNMOUNTED=Ge;he.EXITED=ve;he.ENTERING=we;he.ENTERED=We;he.EXITING=Jt;const qr=he;function Gr(){const e=Hr(gn);return e[yn]||e}const Kr=e=>e.scrollTop;function mt(e,t){var n,r;const{timeout:o,easing:s,style:i={}}=e;return{duration:(n=i.transitionDuration)!=null?n:typeof o=="number"?o:o[t.mode]||0,easing:(r=i.transitionTimingFunction)!=null?r:typeof s=="object"?s[t.mode]:s,delay:i.transitionDelay}}const Rc=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function Zt(e){return`scale(${e}, ${e**2})`}const Dc={entering:{opacity:1,transform:Zt(1)},entered:{opacity:1,transform:"none"}},Yt=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),Ur=d.forwardRef(function(t,n){const{addEndListener:r,appear:o=!0,children:s,easing:i,in:a,onEnter:c,onEntered:u,onEntering:h,onExit:p,onExited:f,onExiting:v,style:x,timeout:m="auto",TransitionComponent:E=qr}=t,P=X(t,Rc),w=So(),g=d.useRef(),S=Gr(),k=d.useRef(null),C=Ee(k,s.ref,n),j=T=>M=>{if(T){const $=k.current;M===void 0?T($):T($,M)}},A=j(h),K=j((T,M)=>{Kr(T);const{duration:$,delay:U,easing:V}=mt({style:x,timeout:m,easing:i},{mode:"enter"});let ie;m==="auto"?(ie=S.transitions.getAutoHeightDuration(T.clientHeight),g.current=ie):ie=$,T.style.transition=[S.transitions.create("opacity",{duration:ie,delay:U}),S.transitions.create("transform",{duration:Yt?ie:ie*.666,delay:U,easing:V})].join(","),c&&c(T,M)}),B=j(u),F=j(v),R=j(T=>{const{duration:M,delay:$,easing:U}=mt({style:x,timeout:m,easing:i},{mode:"exit"});let V;m==="auto"?(V=S.transitions.getAutoHeightDuration(T.clientHeight),g.current=V):V=M,T.style.transition=[S.transitions.create("opacity",{duration:V,delay:$}),S.transitions.create("transform",{duration:Yt?V:V*.666,delay:Yt?$:$||V*.333,easing:U})].join(","),T.style.opacity=0,T.style.transform=Zt(.75),p&&p(T)}),I=j(f),O=T=>{m==="auto"&&w.start(g.current||0,T),r&&r(k.current,T)};return l.jsx(E,b({appear:o,in:a,nodeRef:k,onEnter:K,onEntered:B,onEntering:A,onExit:R,onExited:I,onExiting:F,addEndListener:O,timeout:m==="auto"?null:m},P,{children:(T,M)=>d.cloneElement(s,b({style:b({opacity:0,transform:Zt(.75),visibility:T==="exited"&&!a?"hidden":void 0},Dc[T],x,s.props.style),ref:C},M))}))});Ur.muiSupportAuto=!0;const _c=Ur;function Wc(e){const t=ae(e);return t.body===e?Ve(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function Ue(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function tr(e){return parseInt(Ve(e).getComputedStyle(e).paddingRight,10)||0}function Ac(e){const n=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,r=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return n||r}function nr(e,t,n,r,o){const s=[t,n,...r];[].forEach.call(e.children,i=>{const a=s.indexOf(i)===-1,c=!Ac(i);a&&c&&Ue(i,o)})}function qt(e,t){let n=-1;return e.some((r,o)=>t(r)?(n=o,!0):!1),n}function Nc(e,t){const n=[],r=e.container;if(!t.disableScrollLock){if(Wc(r)){const i=Po(ae(r));n.push({value:r.style.paddingRight,property:"padding-right",el:r}),r.style.paddingRight=`${tr(r)+i}px`;const a=ae(r).querySelectorAll(".mui-fixed");[].forEach.call(a,c=>{n.push({value:c.style.paddingRight,property:"padding-right",el:c}),c.style.paddingRight=`${tr(c)+i}px`})}let s;if(r.parentNode instanceof DocumentFragment)s=ae(r).body;else{const i=r.parentElement,a=Ve(r);s=(i==null?void 0:i.nodeName)==="HTML"&&a.getComputedStyle(i).overflowY==="scroll"?i:r}n.push({value:s.style.overflow,property:"overflow",el:s},{value:s.style.overflowX,property:"overflow-x",el:s},{value:s.style.overflowY,property:"overflow-y",el:s}),s.style.overflow="hidden"}return()=>{n.forEach(({value:s,el:i,property:a})=>{s?i.style.setProperty(a,s):i.style.removeProperty(a)})}}function Fc(e){const t=[];return[].forEach.call(e.children,n=>{n.getAttribute("aria-hidden")==="true"&&t.push(n)}),t}class Ic{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,n){let r=this.modals.indexOf(t);if(r!==-1)return r;r=this.modals.length,this.modals.push(t),t.modalRef&&Ue(t.modalRef,!1);const o=Fc(n);nr(n,t.mount,t.modalRef,o,!0);const s=qt(this.containers,i=>i.container===n);return s!==-1?(this.containers[s].modals.push(t),r):(this.containers.push({modals:[t],container:n,restore:null,hiddenSiblings:o}),r)}mount(t,n){const r=qt(this.containers,s=>s.modals.indexOf(t)!==-1),o=this.containers[r];o.restore||(o.restore=Nc(o,n))}remove(t,n=!0){const r=this.modals.indexOf(t);if(r===-1)return r;const o=qt(this.containers,i=>i.modals.indexOf(t)!==-1),s=this.containers[o];if(s.modals.splice(s.modals.indexOf(t),1),this.modals.splice(r,1),s.modals.length===0)s.restore&&s.restore(),t.modalRef&&Ue(t.modalRef,n),nr(s.container,t.mount,t.modalRef,s.hiddenSiblings,!1),this.containers.splice(o,1);else{const i=s.modals[s.modals.length-1];i.modalRef&&Ue(i.modalRef,!1)}return r}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}function Lc(e){return typeof e=="function"?e():e}function zc(e){return e?e.props.hasOwnProperty("in"):!1}const Bc=new Ic;function Hc(e){const{container:t,disableEscapeKeyDown:n=!1,disableScrollLock:r=!1,manager:o=Bc,closeAfterTransition:s=!1,onTransitionEnter:i,onTransitionExited:a,children:c,onClose:u,open:h,rootRef:p}=e,f=d.useRef({}),v=d.useRef(null),x=d.useRef(null),m=Ee(x,p),[E,P]=d.useState(!h),w=zc(c);let g=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(g=!1);const S=()=>ae(v.current),k=()=>(f.current.modalRef=x.current,f.current.mount=v.current,f.current),C=()=>{o.mount(k(),{disableScrollLock:r}),x.current&&(x.current.scrollTop=0)},j=Pn(()=>{const M=Lc(t)||S().body;o.add(k(),M),x.current&&C()}),A=d.useCallback(()=>o.isTopModal(k()),[o]),K=Pn(M=>{v.current=M,M&&(h&&A()?C():x.current&&Ue(x.current,g))}),B=d.useCallback(()=>{o.remove(k(),g)},[g,o]);d.useEffect(()=>()=>{B()},[B]),d.useEffect(()=>{h?j():(!w||!s)&&B()},[h,B,w,s,j]);const F=M=>$=>{var U;(U=M.onKeyDown)==null||U.call(M,$),!($.key!=="Escape"||$.which===229||!A())&&(n||($.stopPropagation(),u&&u($,"escapeKeyDown")))},R=M=>$=>{var U;(U=M.onClick)==null||U.call(M,$),$.target===$.currentTarget&&u&&u($,"backdropClick")};return{getRootProps:(M={})=>{const $=Mr(e);delete $.onTransitionEnter,delete $.onTransitionExited;const U=b({},$,M);return b({role:"presentation"},U,{onKeyDown:F(U),ref:m})},getBackdropProps:(M={})=>{const $=M;return b({"aria-hidden":!0},$,{onClick:R($),open:h})},getTransitionProps:()=>{const M=()=>{P(!1),i&&i()},$=()=>{P(!0),a&&a(),s&&B()};return{onEnter:Cn(M,c==null?void 0:c.props.onEnter),onExited:Cn($,c==null?void 0:c.props.onExited)}},rootRef:m,portalRef:K,isTopModal:A,exited:E,hasTransition:w}}const Yc=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function qc(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function Gc(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=r=>e.ownerDocument.querySelector(`input[type="radio"]${r}`);let n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}function Kc(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||Gc(e))}function Uc(e){const t=[],n=[];return Array.from(e.querySelectorAll(Yc)).forEach((r,o)=>{const s=qc(r);s===-1||!Kc(r)||(s===0?t.push(r):n.push({documentOrder:o,tabIndex:s,node:r}))}),n.sort((r,o)=>r.tabIndex===o.tabIndex?r.documentOrder-o.documentOrder:r.tabIndex-o.tabIndex).map(r=>r.node).concat(t)}function Xc(){return!0}function Vc(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:r=!1,disableRestoreFocus:o=!1,getTabbable:s=Uc,isEnabled:i=Xc,open:a}=e,c=d.useRef(!1),u=d.useRef(null),h=d.useRef(null),p=d.useRef(null),f=d.useRef(null),v=d.useRef(!1),x=d.useRef(null),m=Ee(t.ref,x),E=d.useRef(null);d.useEffect(()=>{!a||!x.current||(v.current=!n)},[n,a]),d.useEffect(()=>{if(!a||!x.current)return;const g=ae(x.current);return x.current.contains(g.activeElement)||(x.current.hasAttribute("tabIndex")||x.current.setAttribute("tabIndex","-1"),v.current&&x.current.focus()),()=>{o||(p.current&&p.current.focus&&(c.current=!0,p.current.focus()),p.current=null)}},[a]),d.useEffect(()=>{if(!a||!x.current)return;const g=ae(x.current),S=j=>{E.current=j,!(r||!i()||j.key!=="Tab")&&g.activeElement===x.current&&j.shiftKey&&(c.current=!0,h.current&&h.current.focus())},k=()=>{const j=x.current;if(j===null)return;if(!g.hasFocus()||!i()||c.current){c.current=!1;return}if(j.contains(g.activeElement)||r&&g.activeElement!==u.current&&g.activeElement!==h.current)return;if(g.activeElement!==f.current)f.current=null;else if(f.current!==null)return;if(!v.current)return;let A=[];if((g.activeElement===u.current||g.activeElement===h.current)&&(A=s(x.current)),A.length>0){var K,B;const F=!!((K=E.current)!=null&&K.shiftKey&&((B=E.current)==null?void 0:B.key)==="Tab"),R=A[0],I=A[A.length-1];typeof R!="string"&&typeof I!="string"&&(F?I.focus():R.focus())}else j.focus()};g.addEventListener("focusin",k),g.addEventListener("keydown",S,!0);const C=setInterval(()=>{g.activeElement&&g.activeElement.tagName==="BODY"&&k()},50);return()=>{clearInterval(C),g.removeEventListener("focusin",k),g.removeEventListener("keydown",S,!0)}},[n,r,o,i,a,s]);const P=g=>{p.current===null&&(p.current=g.relatedTarget),v.current=!0,f.current=g.target;const S=t.props.onFocus;S&&S(g)},w=g=>{p.current===null&&(p.current=g.relatedTarget),v.current=!0};return l.jsxs(d.Fragment,{children:[l.jsx("div",{tabIndex:a?0:-1,onFocus:w,ref:u,"data-testid":"sentinelStart"}),d.cloneElement(t,{ref:m,onFocus:P}),l.jsx("div",{tabIndex:a?0:-1,onFocus:w,ref:h,"data-testid":"sentinelEnd"})]})}function Qc(e){return typeof e=="function"?e():e}const Jc=d.forwardRef(function(t,n){const{children:r,container:o,disablePortal:s=!1}=t,[i,a]=d.useState(null),c=Ee(d.isValidElement(r)?r.ref:null,n);if(Tn(()=>{s||a(Qc(o)||document.body)},[o,s]),Tn(()=>{if(i&&!s)return Mn(n,i),()=>{Mn(n,null)}},[n,i,s]),s){if(d.isValidElement(r)){const u={ref:c};return d.cloneElement(r,u)}return l.jsx(d.Fragment,{children:r})}return l.jsx(d.Fragment,{children:i&&no.createPortal(r,i)})}),Zc=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],el={entering:{opacity:1},entered:{opacity:1}},tl=d.forwardRef(function(t,n){const r=Gr(),o={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:s,appear:i=!0,children:a,easing:c,in:u,onEnter:h,onEntered:p,onEntering:f,onExit:v,onExited:x,onExiting:m,style:E,timeout:P=o,TransitionComponent:w=qr}=t,g=X(t,Zc),S=d.useRef(null),k=Ee(S,a.ref,n),C=O=>T=>{if(O){const M=S.current;T===void 0?O(M):O(M,T)}},j=C(f),A=C((O,T)=>{Kr(O);const M=mt({style:E,timeout:P,easing:c},{mode:"enter"});O.style.webkitTransition=r.transitions.create("opacity",M),O.style.transition=r.transitions.create("opacity",M),h&&h(O,T)}),K=C(p),B=C(m),F=C(O=>{const T=mt({style:E,timeout:P,easing:c},{mode:"exit"});O.style.webkitTransition=r.transitions.create("opacity",T),O.style.transition=r.transitions.create("opacity",T),v&&v(O)}),R=C(x),I=O=>{s&&s(S.current,O)};return l.jsx(w,b({appear:i,in:u,nodeRef:S,onEnter:A,onEntered:K,onEntering:j,onExit:F,onExited:R,onExiting:B,addEndListener:I,timeout:P},g,{children:(O,T)=>d.cloneElement(a,b({style:b({opacity:0,visibility:O==="exited"&&!u?"hidden":void 0},el[O],E,a.props.style),ref:k},T))}))}),nl=tl;function rl(e){return et("MuiBackdrop",e)}Mt("MuiBackdrop",["root","invisible"]);const ol=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],sl=e=>{const{classes:t,invisible:n}=e;return Tt({root:["root",n&&"invisible"]},rl,t)},il=Ie("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})(({ownerState:e})=>b({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),al=d.forwardRef(function(t,n){var r,o,s;const i=Wt({props:t,name:"MuiBackdrop"}),{children:a,className:c,component:u="div",components:h={},componentsProps:p={},invisible:f=!1,open:v,slotProps:x={},slots:m={},TransitionComponent:E=nl,transitionDuration:P}=i,w=X(i,ol),g=b({},i,{component:u,invisible:f}),S=sl(g),k=(r=x.root)!=null?r:p.root;return l.jsx(E,b({in:v,timeout:P},w,{children:l.jsx(il,b({"aria-hidden":!0},k,{as:(o=(s=m.root)!=null?s:h.Root)!=null?o:u,className:ge(S.root,c,k==null?void 0:k.className),ownerState:b({},g,k==null?void 0:k.ownerState),classes:S,ref:n,children:a}))}))}),cl=al;function ll(e){return et("MuiModal",e)}Mt("MuiModal",["root","hidden","backdrop"]);const ul=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],dl=e=>{const{open:t,exited:n,classes:r}=e;return Tt({root:["root",!t&&n&&"hidden"],backdrop:["backdrop"]},ll,r)},fl=Ie("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})(({theme:e,ownerState:t})=>b({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),hl=Ie(cl,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),pl=d.forwardRef(function(t,n){var r,o,s,i,a,c;const u=Wt({name:"MuiModal",props:t}),{BackdropComponent:h=hl,BackdropProps:p,className:f,closeAfterTransition:v=!1,children:x,container:m,component:E,components:P={},componentsProps:w={},disableAutoFocus:g=!1,disableEnforceFocus:S=!1,disableEscapeKeyDown:k=!1,disablePortal:C=!1,disableRestoreFocus:j=!1,disableScrollLock:A=!1,hideBackdrop:K=!1,keepMounted:B=!1,onBackdropClick:F,open:R,slotProps:I,slots:O}=u,T=X(u,ul),M=b({},u,{closeAfterTransition:v,disableAutoFocus:g,disableEnforceFocus:S,disableEscapeKeyDown:k,disablePortal:C,disableRestoreFocus:j,disableScrollLock:A,hideBackdrop:K,keepMounted:B}),{getRootProps:$,getBackdropProps:U,getTransitionProps:V,portalRef:ie,isTopModal:st,exited:Z,hasTransition:it}=Hc(b({},M,{rootRef:n})),ye=b({},M,{exited:Z}),le=dl(ye),ke={};if(x.props.tabIndex===void 0&&(ke.tabIndex="-1"),it){const{onEnter:W,onExited:G}=V();ke.onEnter=W,ke.onExited=G}const Se=(r=(o=O==null?void 0:O.root)!=null?o:P.Root)!=null?r:fl,Le=(s=(i=O==null?void 0:O.backdrop)!=null?i:P.Backdrop)!=null?s:h,ze=(a=I==null?void 0:I.root)!=null?a:w.root,Pe=(c=I==null?void 0:I.backdrop)!=null?c:w.backdrop,Nt=ft({elementType:Se,externalSlotProps:ze,externalForwardedProps:T,getSlotProps:$,additionalProps:{ref:n,as:E},ownerState:ye,className:ge(f,ze==null?void 0:ze.className,le==null?void 0:le.root,!ye.open&&ye.exited&&(le==null?void 0:le.hidden))}),Ft=ft({elementType:Le,externalSlotProps:Pe,additionalProps:p,getSlotProps:W=>U(b({},W,{onClick:G=>{F&&F(G),W!=null&&W.onClick&&W.onClick(G)}})),className:ge(Pe==null?void 0:Pe.className,p==null?void 0:p.className,le==null?void 0:le.backdrop),ownerState:ye});return!B&&!R&&(!it||Z)?null:l.jsx(Jc,{ref:ie,container:m,disablePortal:C,children:l.jsxs(Se,b({},Nt,{children:[!K&&h?l.jsx(Le,b({},Ft)):null,l.jsx(Vc,{disableEnforceFocus:S,disableAutoFocus:g,disableRestoreFocus:j,isEnabled:st,open:R,children:d.cloneElement(x,ke)})]}))})}),ml=pl,gl=e=>{let t;return e<1?t=5.11916*e**2:t=4.5*Math.log(e+1)+2,(t/100).toFixed(2)},rr=gl;function yl(e){return et("MuiPaper",e)}Mt("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const xl=["className","component","elevation","square","variant"],bl=e=>{const{square:t,elevation:n,variant:r,classes:o}=e,s={root:["root",r,!t&&"rounded",r==="elevation"&&`elevation${n}`]};return Tt(s,yl,o)},vl=Ie("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,n.variant==="elevation"&&t[`elevation${n.elevation}`]]}})(({theme:e,ownerState:t})=>{var n;return b({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},t.variant==="elevation"&&b({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${Kn("#fff",rr(t.elevation))}, ${Kn("#fff",rr(t.elevation))})`},e.vars&&{backgroundImage:(n=e.vars.overlays)==null?void 0:n[t.elevation]}))}),wl=d.forwardRef(function(t,n){const r=Wt({props:t,name:"MuiPaper"}),{className:o,component:s="div",elevation:i=1,square:a=!1,variant:c="elevation"}=r,u=X(r,xl),h=b({},r,{component:s,elevation:i,square:a,variant:c}),p=bl(h);return l.jsx(vl,b({as:s,ownerState:h,className:ge(p.root,o),ref:n},u))}),El=wl;function kl(e){return et("MuiPopover",e)}Mt("MuiPopover",["root","paper"]);const Sl=["onEntering"],Pl=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps","disableScrollLock"],Tl=["slotProps"];function or(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.height/2:t==="bottom"&&(n=e.height),n}function sr(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.width/2:t==="right"&&(n=e.width),n}function ir(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function Gt(e){return typeof e=="function"?e():e}const Ml=e=>{const{classes:t}=e;return Tt({root:["root"],paper:["paper"]},kl,t)},$l=Ie(ml,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Ol=Ie(El,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),Cl=d.forwardRef(function(t,n){var r,o,s;const i=Wt({props:t,name:"MuiPopover"}),{action:a,anchorEl:c,anchorOrigin:u={vertical:"top",horizontal:"left"},anchorPosition:h,anchorReference:p="anchorEl",children:f,className:v,container:x,elevation:m=8,marginThreshold:E=16,open:P,PaperProps:w={},slots:g,slotProps:S,transformOrigin:k={vertical:"top",horizontal:"left"},TransitionComponent:C=_c,transitionDuration:j="auto",TransitionProps:{onEntering:A}={},disableScrollLock:K=!1}=i,B=X(i.TransitionProps,Sl),F=X(i,Pl),R=(r=S==null?void 0:S.paper)!=null?r:w,I=d.useRef(),O=Ee(I,R.ref),T=b({},i,{anchorOrigin:u,anchorReference:p,elevation:m,marginThreshold:E,externalPaperSlotProps:R,transformOrigin:k,TransitionComponent:C,transitionDuration:j,TransitionProps:B}),M=Ml(T),$=d.useCallback(()=>{if(p==="anchorPosition")return h;const W=Gt(c),Q=(W&&W.nodeType===1?W:ae(I.current).body).getBoundingClientRect();return{top:Q.top+or(Q,u.vertical),left:Q.left+sr(Q,u.horizontal)}},[c,u.horizontal,u.vertical,h,p]),U=d.useCallback(W=>({vertical:or(W,k.vertical),horizontal:sr(W,k.horizontal)}),[k.horizontal,k.vertical]),V=d.useCallback(W=>{const G={width:W.offsetWidth,height:W.offsetHeight},Q=U(G);if(p==="none")return{top:null,left:null,transformOrigin:ir(Q)};const xn=$();let Te=xn.top-Q.vertical,Me=xn.left-Q.horizontal;const bn=Te+G.height,vn=Me+G.width,wn=Ve(Gt(c)),En=wn.innerHeight-E,kn=wn.innerWidth-E;if(E!==null&&Te<E){const se=Te-E;Te-=se,Q.vertical+=se}else if(E!==null&&bn>En){const se=bn-En;Te-=se,Q.vertical+=se}if(E!==null&&Me<E){const se=Me-E;Me-=se,Q.horizontal+=se}else if(vn>kn){const se=vn-kn;Me-=se,Q.horizontal+=se}return{top:`${Math.round(Te)}px`,left:`${Math.round(Me)}px`,transformOrigin:ir(Q)}},[c,p,$,U,E]),[ie,st]=d.useState(P),Z=d.useCallback(()=>{const W=I.current;if(!W)return;const G=V(W);G.top!==null&&(W.style.top=G.top),G.left!==null&&(W.style.left=G.left),W.style.transformOrigin=G.transformOrigin,st(!0)},[V]);d.useEffect(()=>(K&&window.addEventListener("scroll",Z),()=>window.removeEventListener("scroll",Z)),[c,K,Z]);const it=(W,G)=>{A&&A(W,G),Z()},ye=()=>{st(!1)};d.useEffect(()=>{P&&Z()}),d.useImperativeHandle(a,()=>P?{updatePosition:()=>{Z()}}:null,[P,Z]),d.useEffect(()=>{if(!P)return;const W=vo(()=>{Z()}),G=Ve(c);return G.addEventListener("resize",W),()=>{W.clear(),G.removeEventListener("resize",W)}},[c,P,Z]);let le=j;j==="auto"&&!C.muiSupportAuto&&(le=void 0);const ke=x||(c?ae(Gt(c)).body:void 0),Se=(o=g==null?void 0:g.root)!=null?o:$l,Le=(s=g==null?void 0:g.paper)!=null?s:Ol,ze=ft({elementType:Le,externalSlotProps:b({},R,{style:ie?R.style:b({},R.style,{opacity:0})}),additionalProps:{elevation:m,ref:O},ownerState:T,className:ge(M.paper,R==null?void 0:R.className)}),Pe=ft({elementType:Se,externalSlotProps:(S==null?void 0:S.root)||{},externalForwardedProps:F,additionalProps:{ref:n,slotProps:{backdrop:{invisible:!0}},container:ke,open:P},ownerState:T,className:ge(M.root,v)}),{slotProps:Nt}=Pe,Ft=X(Pe,Tl);return l.jsx(Se,b({},Ft,!Tr(Se)&&{slotProps:Nt,disableScrollLock:K},{children:l.jsx(C,b({appear:!0,in:P,onEntering:it,onExited:ye,timeout:le},B,{children:l.jsx(Le,b({},ze,{children:f}))}))}))}),jl=Cl,Rl=y.div`
display: flex;
flex-direction:column;
gap: 16px;
padding: 24px 13px;


border-radius: 10px;
background:${e=>e.theme.colors.primary.bg};
box-shadow: 0px 4px 4px 0px rgba(64, 123, 255, 0.30);



`,Dl=y.h2`
color:${e=>e.theme.colors.primary.accent};
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 1.25;
`,_l=y.ul`
display: flex;
flex-direction: column;
gap: 16px;

color: ${e=>e.theme.colors.primary.text};

font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 1.25;
`,Kt=y.li`

span{
  color:${e=>e.theme.colors.primary.accent};

  font-size: 18px;

  font-weight: 500;
  line-height: 1.33;
}

`,Wl=({selectedDate:e,selectedDayData:t})=>{const n=Sr(e,"MMMM"),r=e.getDate(),o=ro().user.waterRate,s=o?(o/1e3).toFixed(1):"0",i=t?(t.waterRate/1e3).toFixed(1):s,a=t?t.percentagePerDay:"0",c=t?t.totalPortions:"0";return l.jsxs(Rl,{children:[l.jsxs(Dl,{children:[" ",r,", ",n]}),l.jsxs(_l,{children:[l.jsxs(Kt,{children:["Daily Norma: ",l.jsxs("span",{children:[i," L"]})]}),l.jsxs(Kt,{children:["Fulfillment of the daily norm: ",l.jsxs("span",{children:[a,"%"]})]}),l.jsxs(Kt,{children:["How many servings of water: ",l.jsx("span",{children:c})]})]})]})},Al=y.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,Nl=y.div`
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
 
`,Fl=y.ul`
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
`,Il=y.li`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  position: relative;
  cursor: pointer;
  padding: 0px;

  @media (min-width: ${({theme:e})=>e.screens.tab}) {
  }
`,Ll=y.div`
  width: 34px;
  height: 34px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${e=>e.theme.colors.primary.bg};

  border: 2px solid
    ${({theme:e,percentage:t})=>t<100?e.colors.secondary.color4:e.colors.primary.bg};
`,zl=y.p`
  z-index: 1;
  margin: 0;
`,Bl=y.p`
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
`,Hl=e=>e.water.waterDayList,Yl=e=>e.water.waterMonthList,ql=e=>e.water.waterRate,At=()=>{const e=It(Hl),t=It(Yl),n=It(ql);return{waterDayList:e,waterMonthList:t,waterRate:n}},Gl=()=>{const[e,t]=d.useState(new Date),[n,r]=d.useState(e.getMonth()),[o,s]=d.useState(null),[i,a]=d.useState(null),c=Ze(),u=At().waterMonthList,h=()=>{a(null)},p=!!i,f=p?"simple-popover":void 0;d.useEffect(()=>{const m=An(e),E=Wn(e);o===null&&c(oo({startDate:m,endDate:E}))},[n,c,e,o]);const v=(m,E)=>{t(E),a(m.currentTarget),s(E.getDate())},x=u&&u.find(m=>{const[E]=m.date.split(",");return parseInt(E)===e.getDate()});return l.jsxs(Al,{children:[l.jsxs(Nl,{children:[l.jsx("h3",{children:"Month"}),l.jsx(Ks,{selectedDate:e,setSelectedDate:t,setCurrentMonth:r,setSelectedDay:s})]}),l.jsx(Fl,{children:Lo({start:An(e),end:Wn(e)}).map((m,E)=>{const P=m.getDate(),w=u.find(S=>{const[k]=S.date.split(",");return parseInt(k)===P}),g=w?w.percentagePerDay:null;return l.jsxs(Il,{onClick:S=>v(S,m),children:[l.jsx(Ll,{percentage:g,children:l.jsx(zl,{children:P})}),l.jsxs(Bl,{children:[g||0,"%"]})]},E)})}),l.jsx(jl,{id:f,open:p,anchorEl:i,onClose:h,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"bottom",horizontal:"right"},children:l.jsx(Wl,{selectedDate:e,selectedDayData:x})})]})},Kl="/Smart-Foxes-WaterTracker/assets/botleHomeDesk-3ae51194.png",Ul="/Smart-Foxes-WaterTracker/assets/botlteHomeDesk2x-9a54d3e4.png",Xl="/Smart-Foxes-WaterTracker/assets/backgroundHomeTab-586d978e.png",Vl="/Smart-Foxes-WaterTracker/assets/BackgroundHomeTab2x-642c3d3e.png",Ql="/Smart-Foxes-WaterTracker/assets/bottleHomeTab-0bf3952c.png",Jl="/Smart-Foxes-WaterTracker/assets/bottleHomeTab2x-ed4a96a1.png",Zl="/Smart-Foxes-WaterTracker/assets/backgroundHomeMob-d1e9a558.png",e0="/Smart-Foxes-WaterTracker/assets/backgroundHomeMob2x-089f92e0.png",t0="/Smart-Foxes-WaterTracker/assets/bottleHomeMob-1cd9cdb8.png",n0="/Smart-Foxes-WaterTracker/assets/bottleHomeMob2x-0e2d77ce.png",r0=y.main`
display: flex;
flex-direction:column;

align-items: center;
color:${e=>e.theme.colors.primary.text};
background-color: ${e=>e.theme.colors.primary.bg};
background-image: image-set(
        url(${t0}) 1x,
        url(${n0}) 2x
      ),
      image-set(
        url(${Zl}) 1x,
        url(${e0}) 2x
      );
background-position: center 106px, center;
background-size: auto, 100vw auto;
background-repeat: no-repeat;


@media (min-width: ${({theme:e})=>e.screens.tab}){
  background-image: image-set(
        url(${Ql}) 1x,
        url(${Jl}) 2x
      ),
      image-set(
        url(${Xl}) 1x,
        url(${Vl}) 2x
      );
background-position: center 40px, center;

}


@media (min-width: ${({theme:e})=>e.screens.desk}) {
    flex-direction:row;
    align-items: flex-start;

    background-image: image-set(
        url(${Kl}) 1x,
        url(${Ul}) 2x
      ),
      image-set(
        url(${lo}) 1x,
        url(${uo}) 2x
      );
background-position: left top, center;
  }
`,o0=y.section`
display: flex;
flex-direction: column;

width: 280px;
height: 507px;


@media (min-width: ${({theme:e})=>e.screens.tab}) {
  width: 704px;
}

`,s0=y.section`
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
  width: 592px;
  
}


`,i0=(e,t=!1)=>{const n=new Date(e);let r=n.getHours();const o=n.getMinutes();let s="";if(t){const i=r>=12?"PM":"AM";r=r%12,r=r||12,s=`${r.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")} ${i}`}else s=`${r.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")}`;return s},a0=e=>d.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",...e},d.createElement("title",null,"glass_26"),d.createElement("path",{fill:"#407bff",d:"M5.565 2.783l1.901 26.363v0.072h16.367l1.901-26.353v-0.082h-20.169zM23.16 28.479h-15.017l-1.426-19.747h0.784l1.289 17.403c0.008 0.092 0.049 0.177 0.115 0.24s0.153 0.098 0.244 0.099h0.030c0.047-0.003 0.093-0.016 0.136-0.037s0.080-0.051 0.111-0.087c0.031-0.036 0.055-0.078 0.070-0.124s0.021-0.094 0.017-0.141l-1.289-17.351h16.362l-1.426 19.747zM24.637 7.994h-16.468l-0.283-3.847c-0.009-0.094-0.052-0.181-0.122-0.244s-0.16-0.097-0.252-0.095c-0.095 0.009-0.183 0.055-0.245 0.129s-0.094 0.169-0.088 0.266l0.283 3.795h-0.794l-0.324-4.483h18.617l-0.324 4.478z"}),d.createElement("path",{fill:"#407bff",d:"M11.359 12.384c0.236 0 0.467-0.071 0.663-0.204s0.349-0.322 0.439-0.543c0.090-0.221 0.114-0.465 0.068-0.699s-0.16-0.45-0.327-0.62c-0.167-0.169-0.38-0.285-0.611-0.331s-0.471-0.023-0.689 0.069c-0.218 0.092-0.404 0.247-0.536 0.446s-0.201 0.433-0.201 0.672c0 0.321 0.126 0.629 0.35 0.856s0.527 0.355 0.844 0.355zM11.359 10.697c0.093 0 0.184 0.028 0.261 0.080s0.138 0.127 0.173 0.214c0.036 0.087 0.045 0.183 0.027 0.276s-0.063 0.178-0.129 0.244c-0.066 0.067-0.15 0.112-0.241 0.131s-0.186 0.009-0.272-0.027c-0.086-0.036-0.159-0.097-0.211-0.176s-0.079-0.171-0.079-0.265c0-0.127 0.050-0.248 0.138-0.337s0.208-0.14 0.332-0.14z"}),d.createElement("path",{fill:"#407bff",d:"M11.354 16.318c0.003 0.239 0.076 0.472 0.209 0.669s0.321 0.35 0.539 0.439 0.458 0.111 0.689 0.062c0.231-0.049 0.442-0.166 0.607-0.336s0.277-0.387 0.321-0.621 0.019-0.477-0.072-0.698c-0.091-0.22-0.245-0.408-0.442-0.54s-0.427-0.201-0.663-0.2c-0.158 0.001-0.313 0.033-0.459 0.095s-0.277 0.153-0.387 0.267-0.198 0.249-0.256 0.397c-0.059 0.148-0.088 0.307-0.086 0.467zM13.013 16.318c0 0.094-0.028 0.187-0.079 0.265s-0.125 0.14-0.211 0.176c-0.086 0.036-0.18 0.046-0.272 0.027s-0.175-0.064-0.241-0.131-0.111-0.152-0.129-0.244c-0.018-0.093-0.009-0.188 0.027-0.276s0.096-0.162 0.173-0.214 0.168-0.080 0.261-0.080c0.125 0 0.244 0.050 0.333 0.14s0.138 0.211 0.138 0.337z"}),d.createElement("path",{fill:"#407bff",d:"M19.834 16.349c0.236 0 0.467-0.071 0.663-0.204s0.349-0.322 0.439-0.543c0.090-0.221 0.114-0.465 0.068-0.699s-0.16-0.45-0.327-0.62c-0.167-0.169-0.379-0.285-0.611-0.331s-0.471-0.023-0.689 0.069c-0.218 0.092-0.404 0.247-0.535 0.446s-0.201 0.433-0.201 0.672c0 0.321 0.126 0.629 0.349 0.856s0.527 0.355 0.844 0.355zM19.834 14.666c0.093 0 0.184 0.028 0.262 0.081s0.138 0.127 0.173 0.215c0.035 0.088 0.044 0.184 0.026 0.276s-0.064 0.178-0.13 0.244c-0.066 0.066-0.151 0.111-0.242 0.129s-0.186 0.008-0.272-0.029-0.159-0.099-0.21-0.178c-0.051-0.079-0.078-0.172-0.077-0.266 0.001-0.126 0.051-0.246 0.14-0.334s0.207-0.138 0.331-0.138z"}),d.createElement("path",{fill:"#407bff",d:"M15.677 14.066c0.236 0 0.467-0.071 0.663-0.204s0.349-0.322 0.439-0.543c0.090-0.221 0.114-0.464 0.068-0.699s-0.16-0.45-0.327-0.62c-0.167-0.169-0.38-0.285-0.611-0.331s-0.471-0.023-0.689 0.069c-0.218 0.092-0.404 0.247-0.536 0.446s-0.201 0.433-0.201 0.672c0 0.321 0.126 0.629 0.35 0.856s0.527 0.354 0.844 0.354zM15.677 12.379c0.093 0 0.184 0.028 0.261 0.080s0.138 0.127 0.173 0.214c0.036 0.087 0.045 0.183 0.027 0.276s-0.063 0.177-0.129 0.244c-0.066 0.067-0.15 0.112-0.241 0.131s-0.186 0.009-0.272-0.027-0.159-0.097-0.211-0.176c-0.052-0.079-0.079-0.171-0.079-0.265-0.003-0.065 0.006-0.129 0.028-0.19s0.056-0.116 0.1-0.164c0.044-0.047 0.097-0.084 0.156-0.11s0.122-0.039 0.186-0.039v0.026z"}),d.createElement("path",{fill:"#407bff",d:"M13.402 20.929c0.005 0.197 0.067 0.387 0.178 0.548s0.267 0.285 0.447 0.357c0.181 0.072 0.378 0.088 0.568 0.047s0.363-0.139 0.498-0.279c0.135-0.141 0.227-0.319 0.263-0.512s0.015-0.393-0.060-0.574c-0.075-0.181-0.202-0.336-0.363-0.445s-0.351-0.167-0.545-0.167c-0.264 0.007-0.514 0.118-0.699 0.309s-0.287 0.449-0.287 0.716zM14.388 20.662c0.052 0 0.103 0.016 0.146 0.045s0.077 0.071 0.097 0.12 0.025 0.102 0.015 0.154c-0.010 0.052-0.035 0.099-0.072 0.137s-0.084 0.063-0.135 0.073c-0.051 0.010-0.104 0.005-0.152-0.015s-0.089-0.054-0.118-0.098c-0.029-0.044-0.044-0.096-0.044-0.148 0-0.071 0.028-0.139 0.077-0.189s0.116-0.078 0.186-0.078z"}),d.createElement("path",{fill:"#407bff",d:"M18.17 19.816c0.202 0.007 0.402-0.048 0.574-0.157s0.306-0.269 0.388-0.457c0.081-0.188 0.105-0.397 0.068-0.599s-0.133-0.388-0.275-0.534c-0.143-0.146-0.325-0.245-0.524-0.285s-0.405-0.018-0.591 0.063c-0.186 0.081-0.345 0.216-0.454 0.389s-0.166 0.375-0.161 0.58c0.006 0.262 0.111 0.511 0.292 0.697s0.426 0.295 0.684 0.304zM18.17 18.549c0.070 0 0.137 0.028 0.186 0.078s0.077 0.118 0.077 0.189c0 0.071-0.028 0.139-0.077 0.189s-0.116 0.078-0.186 0.078c-0.070 0-0.138-0.028-0.188-0.078s-0.079-0.118-0.080-0.189c0-0.035 0.007-0.071 0.020-0.103s0.033-0.062 0.058-0.087 0.055-0.044 0.087-0.057c0.032-0.013 0.067-0.019 0.102-0.019z"}),d.createElement("path",{fill:"#407bff",d:"M20.253 11.538c0.2 0 0.395-0.060 0.562-0.173s0.296-0.273 0.372-0.46c0.077-0.187 0.097-0.394 0.058-0.593s-0.135-0.382-0.277-0.525c-0.141-0.143-0.322-0.241-0.518-0.281s-0.399-0.019-0.584 0.058c-0.185 0.078-0.343 0.209-0.454 0.378s-0.17 0.367-0.17 0.57c0 0.272 0.107 0.533 0.296 0.725s0.447 0.3 0.715 0.3zM20.253 10.271c0.039-0.011 0.080-0.013 0.12-0.006s0.078 0.024 0.11 0.049c0.032 0.025 0.059 0.057 0.077 0.094s0.028 0.078 0.028 0.119-0.009 0.082-0.028 0.119c-0.018 0.037-0.044 0.069-0.077 0.094s-0.070 0.042-0.11 0.049c-0.040 0.008-0.081 0.006-0.12-0.006-0.039 0.011-0.080 0.013-0.12 0.006s-0.078-0.024-0.11-0.049c-0.032-0.025-0.059-0.057-0.077-0.094s-0.028-0.078-0.028-0.119 0.009-0.082 0.028-0.119c0.018-0.037 0.044-0.069 0.077-0.094s0.070-0.042 0.11-0.049c0.040-0.008 0.081-0.006 0.12 0.006z"}),d.createElement("path",{fill:"#407bff",d:"M10.369 27.191c-0.045 0.021-0.086 0.052-0.119 0.089s-0.059 0.082-0.074 0.13c-0.016 0.048-0.021 0.099-0.017 0.149s0.019 0.099 0.043 0.144c0.031 0.060 0.078 0.11 0.135 0.145s0.122 0.054 0.189 0.055c0.056 0.002 0.112-0.011 0.162-0.036 1.545-0.803 3.255-1.225 4.99-1.231 1.837 0.027 3.648 0.441 5.319 1.215 0.066 0.035 0.141 0.049 0.215 0.039s0.143-0.042 0.198-0.093c0.055-0.051 0.094-0.118 0.11-0.192s0.010-0.151-0.018-0.221c-0.036-0.091-0.105-0.164-0.192-0.205-1.769-0.821-3.687-1.258-5.633-1.282-1.845 0.002-3.664 0.444-5.309 1.292z"})),c0=e=>d.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:1024,height:1024,viewBox:"0 0 1024 1024",...e},d.createElement("title",null,"edit"),d.createElement("path",{fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:4,strokeWidth:42.6667,d:"M719.445 191.445l71.979-72.021c14.479-14.479 34.482-23.435 56.576-23.435 44.189 0 80.011 35.822 80.011 80.011 0 22.094-8.955 42.097-23.435 56.576l-453.077 453.077c-21.936 21.924-49.153 38.567-79.579 47.856l-1.36 0.357-114.56 34.133 34.133-114.56c9.647-31.785 26.289-59.002 48.214-80.94l381.098-381.055zM719.445 191.445l112.555 112.555M768 597.333v202.667c0 53.019-42.981 96-96 96v0h-448c-53.019 0-96-42.981-96-96v0-448c0-53.019 42.981-96 96-96v0h202.667"})),l0=e=>d.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:1024,height:1024,viewBox:"0 0 1024 1024",...e},d.createElement("title",null,"delete"),d.createElement("path",{fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:4,strokeWidth:42.6667,d:"M628.907 384l-14.763 384M409.856 768l-14.763-384M820.395 247.040c14.592 2.219 29.099 4.565 43.605 7.083M820.395 247.040l-45.568 592.341c-3.952 49.747-45.294 88.619-95.716 88.619-0.010 0-0.020 0-0.030 0h-334.164c-0.008 0-0.018 0-0.028 0-50.422 0-91.764-38.872-95.694-88.283l-0.021-0.336-45.568-592.341M820.395 247.040c-38.791-6.358-89.724-12.366-141.193-16.476l-7.202-0.463M203.605 247.040c-25.242 3.599-40.074 6.065-54.844 8.706l11.239-1.666M203.605 247.040c38.789-6.358 89.722-12.366 141.19-16.476l7.205-0.463M672 230.101v-39.083c0-50.347-38.827-92.331-89.173-93.909-21.11-0.721-45.921-1.132-70.827-1.132-24.908 0-49.719 0.411-74.428 1.226l3.602-0.094c-50.347 1.579-89.173 43.605-89.173 93.909v39.083M672 230.101c-47.901-3.932-103.689-6.173-160-6.173-56.31 0-112.097 2.241-167.276 6.64l7.276-0.466"})),u0=e=>d.createElement("svg",{fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:4,strokeWidth:42.6667,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...e},d.createElement("path",{d:"M512 256v512M768 512h-512"})),d0=y.div`
  
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
 
`,f0=y.ul`
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

  `,h0=y.div`
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

`,p0=y.span`
color:${e=>e.theme.colors.primary.accent};


font-size: 18px;

font-weight: 400;
line-height: 1.33;
`,m0=y(a0)`
  fill:${e=>e.theme.colors.primary.accent};
  width: 26px;
  height: auto;


  @media (min-width: ${({theme:e})=>e.screens.tab}){
    width: 36px;
  }
  
`,g0=y(c0)`
  stroke:  ${e=>e.theme.colors.secondary.color3};
  width: 16px;
  height: 16px;
`,y0=y(l0)`
   stroke: ${e=>e.theme.colors.secondary.color2};
  width: 16px;
  height: 16px;
`,x0=y.div`
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

`,b0=y.button`

  &:hover::after {
   
    background-color: ${e=>e.theme.colors.primary.accent};
   
  }`,v0=y.button`
 
 
  &:hover::after {
   
    background-color:  ${e=>e.theme.colors.secondary.color2};
    
  }`,Xr=y(u0)`
  fill: ${e=>e.theme.colors.primary.accent};
  stroke: ${e=>e.theme.colors.primary.accent};
  width: 16px;
  height: 16px;

  @media (min-width: ${({theme:e})=>e.screens.tab}){
    width: 24px;
  height: 24px;
  }
 
`,w0=y.button`
display: flex;
align-items: center;
gap: 8px;

font-size: 16px;
font-weight: 500;
line-height: 1.25;
color: ${e=>e.theme.colors.primary.accent};


&:hover {
    color: ${e=>e.theme.colors.secondary.color4};
    ${Xr} {
      fill: ${e=>e.theme.colors.secondary.color4};
      stroke: ${e=>e.theme.colors.secondary.color4};
  }
}


@media (min-width: ${({theme:e})=>e.screens.tab}){
  font-size: 18px;
line-height: 1.33;
  }

`,E0=y.div`

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
`,k0=y.div`
display: flex;
flex-direction: column-reverse;
gap: 24px;

@media (min-width: ${({theme:e})=>e.screens.tab}){
    flex-direction: row;
    justify-content: end;
}
`,S0=y.button`

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

`,P0=y.button`

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
`,T0=({id:e})=>{const{closeModal:t}=d.useContext(tn),n=Ze();console.log(e);const r=()=>{n(so(e)),t()};return l.jsxs(E0,{children:[l.jsx("h3",{children:"Delete entry"}),l.jsx("p",{children:"Are you sure you want to delete the entry?"}),l.jsxs(k0,{children:[l.jsx(S0,{type:"button",onClick:()=>t(),children:"Cancel"}),l.jsx(P0,{type:"submit",onClick:r,children:"Delete"})]})]})},M0=()=>l.jsx("div",{children:" Тут колись буде модалка TodayEditModal"}),$0=({handleAddWaterClick:e})=>{const{openModal:t}=d.useContext(tn),n=At().waterDayList,r=Ze();d.useEffect(()=>{r(io())},[r]);const o=i=>{t(l.jsx(l.Fragment,{children:l.jsx(T0,{id:i})}))},s=i=>{t(l.jsx(l.Fragment,{children:l.jsx(M0,{portion:i})}))};return l.jsxs(d0,{children:[l.jsx("h3",{children:"Today"}),n&&n.length>0&&l.jsx(f0,{children:n.map(i=>l.jsxs("li",{children:[l.jsxs(h0,{children:[l.jsx(m0,{}),l.jsx(p0,{children:`${i.waterVolume} ml `}),l.jsx("span",{children:i0(i.dateAdded,!0)})]}),l.jsxs(x0,{children:[l.jsx(b0,{onClick:()=>s(i),children:l.jsx(g0,{})}),l.jsx(v0,{onClick:()=>o(i._id),children:l.jsx(y0,{})})]})]},i._id))}),l.jsxs(w0,{onClick:e,children:[l.jsx(Xr,{})," Add water"]})]})},O0=y.div`
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
`,C0=y.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
  justify-content: left;
`,j0=y.p`
  font-size: 18px;
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 24px;
  color: ${e=>e.theme.colors.primary.text};
  white-space: nowrap;
`,R0=y.button`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  color: #8baeff;
`,D0=y.p`
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  color: ${e=>e.theme.colors.primary.accent};
`,_0=y.div`
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
`,W0=y.div`
  width: 592px;
  height: 712px;
  padding: 32px 24px 32px 24px;
  border-radius: 10px;
  background-color: ${e=>e.theme.colors.primary.bg};
`,A0=y.h2`
  font-size: 26px;
  font-weight: 500;
  line-height: 32px;
  color: ${e=>e.theme.colors.primary.text};
`,N0=y.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  margin-top: 24px;
  margin-bottom: 12px;
`,xe=y.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: ${e=>e.theme.colors.primary.text};
`,ar=y.span`
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: ${e=>e.theme.colors.primary.accent};
`,F0=y.div`
  width: 544px;
  border: 1px solid;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 24px;
  border-color: ${e=>e.theme.colors.secondary.color5};
`,I0=y.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  color: #8f8f8f;
`,L0=y.span`
  color: ${e=>e.theme.colors.primary.accent};
`,z0=y.form`
  display: flex;
  flex-direction: column;
`,cr=y.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  color: ${e=>e.theme.colors.primary.text};
`,lr=y.label`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`,ur=y.input`
  width: 14px;
  height: 14px;
  border: 1px solid;
  border-color: ${e=>e.theme.colors.primary.accent};
  color: ${e=>e.theme.colors.primary.bg};
  border-radius: 50%;
`,B0=y.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`,dr=y.label`
  width: 544px;
  display: flex;
  gap: 8px;
  flex-direction: column;
`,Ut=y.input`
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
`,H0=y.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`,Y0=y.label`
  width: 544px;
  display: flex;
  gap: 16px;
  flex-direction: column;
  margin-bottom: 24px;
`,q0=y.button`
  border-radius: 10px;
  padding: 10px 30px;
  width: 160px;
  color: ${e=>e.theme.colors.primary.bg};
  background-color: ${e=>e.theme.colors.primary.accent};
`,G0=y.div`
  width: 544px;
  display: flex;
  justify-content: end;
`,K0=y.button``,U0=y.div`
  width: 544px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,X0=y.span`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: ${e=>e.theme.colors.primary.accent};
`,V0=y.svg`
  background-color:;
`,Q0=({onClose:e})=>{const t=Ze(),{waterRate:n}=At(),r={weight:.03,activity:.04},o={weight:.04,activity:.06},[s,i]=d.useState(r),[a,c]=d.useState(""),[u,h]=d.useState((n/1e3).toFixed(1)),[p,f]=d.useState(""),[v,x]=d.useState("");d.useEffect(()=>{const w=g=>{g.code==="Escape"&&e()};return window.addEventListener("keydown",w),()=>{window.removeEventListener("keydown",w)}},[e]);const m=d.useCallback(()=>{if(!a||!p)return;const w=(a*s.weight+p/60*s.activity).toFixed(1);h(w)},[s,a,p]);d.useEffect(()=>{m()},[m]);const E=w=>{const g=w.target.value,S=parseFloat(g);!isNaN(S)&&S>=1?x(S):g===""&&x("")},P=w=>{w.preventDefault();const g=parseFloat(u);if(!(p>0&&a>0||v>0)){alert("Fill all fields");return}(isNaN(g)||g<=0)&&alert("Enter a valid intake goal"),t(ao(v||g)).then(k=>{k.error?(console.log(k.error),alert("Something went wrong ")):(e(),c(""),f(""),x(""))})};return l.jsx(_0,{children:l.jsxs(W0,{children:[l.jsxs(U0,{children:[l.jsx(A0,{children:"My daily norma"}),l.jsx(K0,{onClick:()=>e(),children:l.jsx(V0,{width:"24",height:"24",children:l.jsx("path",{d:"M6 18L18 6M6 6L18 18",stroke:"#407BFF","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})})})]}),l.jsxs(N0,{children:[l.jsxs(xe,{children:["For girl: ",l.jsx(ar,{children:"V=(M*0,03) + (T*0,4)"})]}),l.jsxs(xe,{children:["For man: ",l.jsx(ar,{children:"V=(M*0,04) + (T*0,6)"})]})]}),l.jsx(F0,{children:l.jsxs(I0,{children:[l.jsx(L0,{children:"*"})," V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]})}),l.jsxs(z0,{children:[l.jsxs(H0,{children:[l.jsx(cr,{children:"Calculate your rate:"}),l.jsxs(B0,{children:[l.jsxs(lr,{children:[l.jsx(ur,{type:"radio",name:"gender",value:"woman",onChange:()=>i(r)}),l.jsx(xe,{children:"For woman"})]}),l.jsxs(lr,{children:[l.jsx(ur,{type:"radio",name:"gender",value:"man",onChange:()=>i(o)}),l.jsx(xe,{children:"For man"})]})]}),l.jsxs(dr,{children:[l.jsx(xe,{children:"Your weight in kilograms:"}),l.jsx(Ut,{type:"number",name:"userWeight",placeholder:"0",value:a,min:0,max:250,onChange:w=>c(w.target.value)})]}),l.jsxs(dr,{children:[l.jsx(xe,{children:"The time of active participation in sports or other activities with a high physical. load in hours:"}),l.jsx(Ut,{type:"number",name:"userActive",placeholder:"0",value:p,min:0,onChange:w=>f(w.target.value)})]}),l.jsxs(xe,{children:["The required amount of water in liters per day:",l.jsxs(X0,{children:[" ",u||2," L"]})]})]}),l.jsxs(Y0,{children:[l.jsx(cr,{children:"Write down how much water you will drink:"}),l.jsx(Ut,{type:"number",name:"userWaterPredict",placeholder:"0",value:v,min:0,onChange:E})]}),l.jsx(G0,{children:l.jsx(q0,{onClick:P,children:"Save"})})]})]})})},J0=()=>{const[e,t]=d.useState(!1),{waterRate:n}=At(),r=()=>{t(!0)},o=()=>{t(!1)},s=(n/1e3).toFixed(1);return l.jsxs(O0,{children:[l.jsx(j0,{children:"My daily norma"}),l.jsxs(C0,{children:[l.jsxs(D0,{children:[" ",s||2," L"]}),l.jsx(R0,{onClick:r,children:"Edit"})]}),e&&l.jsx(Q0,{onClose:o})]})},Z0=y.div`
  display: flex;
  flex-direction: column;
`,eu=y.h3`
  margin-bottom: 24px;
`,tu=y.span``,nu=y.label`
  margin-top: 16px;
  margin-bottom: 24px;
`,ru=y.input``,ou=y.span``,su=y.label`
  margin-bottom: 24px;
`,iu=y.span``,au=y.input``,cu=y.label``,lu=y.span``,uu=y.input``,du=y.div``,fu=y.span``,hu=y.button``,pu=()=>l.jsxs(Z0,{children:[l.jsx(eu,{children:" Add water"}),l.jsx(tu,{children:"Choose a value:"}),l.jsxs(nu,{children:[l.jsx(ou,{children:"Amount of water:"}),l.jsx(ru,{})]}),l.jsxs(su,{children:[l.jsx(iu,{children:"Recording time:"}),l.jsx(au,{})]}),l.jsxs(cu,{children:[l.jsx(lu,{children:"Enter the value of the water used:"}),l.jsx(uu,{})]}),l.jsxs(du,{children:[l.jsxs(fu,{children:[" ",50," L"]}),l.jsx(hu,{children:"Save"})]})]}),yu=()=>{const e=Ze(),{openModal:t}=d.useContext(tn),n=()=>{t(l.jsx(l.Fragment,{children:l.jsx(pu,{})}))};return d.useEffect(()=>{e(co())},[e]),l.jsxs(r0,{children:[l.jsx(o0,{children:l.jsx(J0,{})}),l.jsxs(s0,{children:[l.jsx($0,{handleAddWaterClick:n}),l.jsx(Gl,{})]})]})};export{yu as default};
