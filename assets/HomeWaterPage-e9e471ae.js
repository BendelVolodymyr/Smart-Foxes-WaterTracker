import{_ as b,o as ae,r as d,w as Xr,f as dr,T as en,h as kn,i as Vr,e as v,j as l,k as Ee,l as fe,m as Qr,C as Jr,p as Zr,n as eo,R as qe,q as st,v as Sn,x as Mn,y as Tn,z as to,A as no,B as It,u as mt,D as ro,M as tn,E as oo,I as io,J as so}from"./index-7e48a6ff.js";function me(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function fr(e){if(!me(e))return e;const t={};return Object.keys(e).forEach(n=>{t[n]=fr(e[n])}),t}function ce(e,t,n={clone:!0}){const r=n.clone?b({},e):e;return me(e)&&me(t)&&Object.keys(t).forEach(o=>{o!=="__proto__"&&(me(t[o])&&o in e&&me(e[o])?r[o]=ce(e[o],t[o],n):n.clone?r[o]=me(t[o])?fr(t[o]):t[o]:r[o]=t[o])}),r}const ao=Object.freeze(Object.defineProperty({__proto__:null,default:ce,isPlainObject:me},Symbol.toStringTag,{value:"Module"}));function Xe(e){let t="https://mui.com/production-error/?code="+e;for(let n=1;n<arguments.length;n+=1)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}const co=Object.freeze(Object.defineProperty({__proto__:null,default:Xe},Symbol.toStringTag,{value:"Module"}));var hr={exports:{}},D={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nn=Symbol.for("react.element"),rn=Symbol.for("react.portal"),gt=Symbol.for("react.fragment"),yt=Symbol.for("react.strict_mode"),xt=Symbol.for("react.profiler"),bt=Symbol.for("react.provider"),vt=Symbol.for("react.context"),lo=Symbol.for("react.server_context"),wt=Symbol.for("react.forward_ref"),Et=Symbol.for("react.suspense"),Pt=Symbol.for("react.suspense_list"),kt=Symbol.for("react.memo"),St=Symbol.for("react.lazy"),uo=Symbol.for("react.offscreen"),pr;pr=Symbol.for("react.module.reference");function re(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case nn:switch(e=e.type,e){case gt:case xt:case yt:case Et:case Pt:return e;default:switch(e=e&&e.$$typeof,e){case lo:case vt:case wt:case St:case kt:case bt:return e;default:return t}}case rn:return t}}}D.ContextConsumer=vt;D.ContextProvider=bt;D.Element=nn;D.ForwardRef=wt;D.Fragment=gt;D.Lazy=St;D.Memo=kt;D.Portal=rn;D.Profiler=xt;D.StrictMode=yt;D.Suspense=Et;D.SuspenseList=Pt;D.isAsyncMode=function(){return!1};D.isConcurrentMode=function(){return!1};D.isContextConsumer=function(e){return re(e)===vt};D.isContextProvider=function(e){return re(e)===bt};D.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===nn};D.isForwardRef=function(e){return re(e)===wt};D.isFragment=function(e){return re(e)===gt};D.isLazy=function(e){return re(e)===St};D.isMemo=function(e){return re(e)===kt};D.isPortal=function(e){return re(e)===rn};D.isProfiler=function(e){return re(e)===xt};D.isStrictMode=function(e){return re(e)===yt};D.isSuspense=function(e){return re(e)===Et};D.isSuspenseList=function(e){return re(e)===Pt};D.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===gt||e===xt||e===yt||e===Et||e===Pt||e===uo||typeof e=="object"&&e!==null&&(e.$$typeof===St||e.$$typeof===kt||e.$$typeof===bt||e.$$typeof===vt||e.$$typeof===wt||e.$$typeof===pr||e.getModuleId!==void 0)};D.typeOf=re;hr.exports=D;var On=hr.exports;const fo=/^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;function mr(e){const t=`${e}`.match(fo);return t&&t[1]||""}function gr(e,t=""){return e.displayName||e.name||mr(e)||t}function $n(e,t,n){const r=gr(t);return e.displayName||(r!==""?`${n}(${r})`:n)}function ho(e){if(e!=null){if(typeof e=="string")return e;if(typeof e=="function")return gr(e,"Component");if(typeof e=="object")switch(e.$$typeof){case On.ForwardRef:return $n(e,e.render,"ForwardRef");case On.Memo:return $n(e,e.type,"memo");default:return}}}const po=Object.freeze(Object.defineProperty({__proto__:null,default:ho,getFunctionName:mr},Symbol.toStringTag,{value:"Module"}));function on(e){if(typeof e!="string")throw new Error(Xe(7));return e.charAt(0).toUpperCase()+e.slice(1)}const mo=Object.freeze(Object.defineProperty({__proto__:null,default:on},Symbol.toStringTag,{value:"Module"}));function Cn(...e){return e.reduce((t,n)=>n==null?t:function(...o){t.apply(this,o),n.apply(this,o)},()=>{})}function go(e,t=166){let n;function r(...o){const i=()=>{e.apply(this,o)};clearTimeout(n),n=setTimeout(i,t)}return r.clear=()=>{clearTimeout(n)},r}function Ve(e){return ae(e).defaultView||window}const jn={};function yo(e,t){const n=d.useRef(jn);return n.current===jn&&(n.current=e(t)),n}const xo=[];function bo(e){d.useEffect(e,xo)}class sn{constructor(){this.currentId=null,this.clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}static create(){return new sn}start(t,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},t)}}function vo(){const e=yo(sn.create).current;return bo(e.disposeEffect),e}function wo(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function yr(e,t){const n=b({},t);return Object.keys(e).forEach(r=>{if(r.toString().match(/^(components|slots)$/))n[r]=b({},e[r],n[r]);else if(r.toString().match(/^(componentsProps|slotProps)$/)){const o=e[r]||{},i=t[r];n[r]={},!i||!Object.keys(i)?n[r]=o:!o||!Object.keys(o)?n[r]=i:(n[r]=b({},i),Object.keys(o).forEach(s=>{n[r][s]=yr(o[s],i[s])}))}else n[r]===void 0&&(n[r]=e[r])}),n}function Mt(e,t,n=void 0){const r={};return Object.keys(e).forEach(o=>{r[o]=e[o].reduce((i,s)=>{if(s){const a=t(s);a!==""&&i.push(a),n&&n[s]&&i.push(n[s])}return i},[]).join(" ")}),r}const Rn=e=>e,Eo=()=>{let e=Rn;return{configure(t){e=t},generate(t){return e(t)},reset(){e=Rn}}},Po=Eo(),ko=Po,So={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function Ze(e,t,n="Mui"){const r=So[t];return r?`${n}-${r}`:`${ko.generate(e)}-${t}`}function Tt(e,t,n="Mui"){const r={};return t.forEach(o=>{r[o]=Ze(e,o,n)}),r}function Mo(e,t=Number.MIN_SAFE_INTEGER,n=Number.MAX_SAFE_INTEGER){return Math.max(t,Math.min(e,n))}const To=Object.freeze(Object.defineProperty({__proto__:null,default:Mo},Symbol.toStringTag,{value:"Module"}));var Oo=Xr(function(e,t){var n=e.styles,r=dr([n],void 0,d.useContext(en)),o=d.useRef();return kn(function(){var i=t.key+"-global",s=new t.sheet.constructor({key:i,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),a=!1,c=document.querySelector('style[data-emotion="'+i+" "+r.name+'"]');return t.sheet.tags.length&&(s.before=t.sheet.tags[0]),c!==null&&(a=!0,c.setAttribute("data-emotion",i),s.hydrate([c])),o.current=[s,a],function(){s.flush()}},[t]),kn(function(){var i=o.current,s=i[0],a=i[1];if(a){i[1]=!1;return}if(r.next!==void 0&&Vr(t,r.next,!0),s.tags.length){var c=s.tags[s.tags.length-1].nextElementSibling;s.before=c,s.flush()}t.insert("",r,s,!1)},[t,r.name]),null});function xr(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return dr(t)}var $o=function(){var t=xr.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};function H(e){const t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new e.constructor(+e):typeof e=="number"||t==="[object Number]"||typeof e=="string"||t==="[object String]"?new Date(e):new Date(NaN)}function ue(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}function Bt(e,t){const n=H(e);if(isNaN(t))return ue(e,NaN);if(!t)return n;const r=n.getDate(),o=ue(e,n.getTime());o.setMonth(n.getMonth()+t+1,0);const i=o.getDate();return r>=i?o:(n.setFullYear(o.getFullYear(),o.getMonth(),r),n)}const br=6048e5,Co=864e5;let jo={};function Ot(){return jo}function Qe(e,t){var a,c,u,f;const n=Ot(),r=(t==null?void 0:t.weekStartsOn)??((c=(a=t==null?void 0:t.locale)==null?void 0:a.options)==null?void 0:c.weekStartsOn)??n.weekStartsOn??((f=(u=n.locale)==null?void 0:u.options)==null?void 0:f.weekStartsOn)??0,o=H(e),i=o.getDay(),s=(i<r?7:0)+i-r;return o.setDate(o.getDate()-s),o.setHours(0,0,0,0),o}function ut(e){return Qe(e,{weekStartsOn:1})}function vr(e){const t=H(e),n=t.getFullYear(),r=ue(e,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const o=ut(r),i=ue(e,0);i.setFullYear(n,0,4),i.setHours(0,0,0,0);const s=ut(i);return t.getTime()>=o.getTime()?n+1:t.getTime()>=s.getTime()?n:n-1}function _n(e){const t=H(e);return t.setHours(0,0,0,0),t}function Dn(e){const t=H(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function Ro(e,t){const n=_n(e),r=_n(t),o=+n-Dn(n),i=+r-Dn(r);return Math.round((o-i)/Co)}function _o(e){const t=vr(e),n=ue(e,0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),ut(n)}function Do(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function Wo(e){if(!Do(e)&&typeof e!="number")return!1;const t=H(e);return!isNaN(Number(t))}function Wn(e){const t=H(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}function Ao(e,t){const n=H(e.start),r=H(e.end);let o=+n>+r;const i=o?+n:+r,s=o?r:n;s.setHours(0,0,0,0);let a=(t==null?void 0:t.step)??1;if(!a)return[];a<0&&(a=-a,o=!o);const c=[];for(;+s<=i;)c.push(H(s)),s.setDate(s.getDate()+a),s.setHours(0,0,0,0);return o?c.reverse():c}function An(e){const t=H(e);return t.setDate(1),t.setHours(0,0,0,0),t}function Fo(e){const t=H(e),n=ue(e,0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}const No={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Io=(e,t,n)=>{let r;const o=No[e];return typeof o=="string"?r=o:t===1?r=o.one:r=o.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function Lt(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const Bo={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Lo={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},zo={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Ho={date:Lt({formats:Bo,defaultWidth:"full"}),time:Lt({formats:Lo,defaultWidth:"full"}),dateTime:Lt({formats:zo,defaultWidth:"full"})},Yo={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},qo=(e,t,n,r)=>Yo[e];function ze(e){return(t,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let o;if(r==="formatting"&&e.formattingValues){const s=e.defaultFormattingWidth||e.defaultWidth,a=n!=null&&n.width?String(n.width):s;o=e.formattingValues[a]||e.formattingValues[s]}else{const s=e.defaultWidth,a=n!=null&&n.width?String(n.width):e.defaultWidth;o=e.values[a]||e.values[s]}const i=e.argumentCallback?e.argumentCallback(t):t;return o[i]}}const Go={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Ko={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Uo={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Xo={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Vo={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Qo={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Jo=(e,t)=>{const n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},Zo={ordinalNumber:Jo,era:ze({values:Go,defaultWidth:"wide"}),quarter:ze({values:Ko,defaultWidth:"wide",argumentCallback:e=>e-1}),month:ze({values:Uo,defaultWidth:"wide"}),day:ze({values:Xo,defaultWidth:"wide"}),dayPeriod:ze({values:Vo,defaultWidth:"wide",formattingValues:Qo,defaultFormattingWidth:"wide"})};function He(e){return(t,n={})=>{const r=n.width,o=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=t.match(o);if(!i)return null;const s=i[0],a=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(a)?ti(a,h=>h.test(s)):ei(a,h=>h.test(s));let u;u=e.valueCallback?e.valueCallback(c):c,u=n.valueCallback?n.valueCallback(u):u;const f=t.slice(s.length);return{value:u,rest:f}}}function ei(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function ti(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function ni(e){return(t,n={})=>{const r=t.match(e.matchPattern);if(!r)return null;const o=r[0],i=t.match(e.parsePattern);if(!i)return null;let s=e.valueCallback?e.valueCallback(i[0]):i[0];s=n.valueCallback?n.valueCallback(s):s;const a=t.slice(o.length);return{value:s,rest:a}}}const ri=/^(\d+)(th|st|nd|rd)?/i,oi=/\d+/i,ii={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},si={any:[/^b/i,/^(a|c)/i]},ai={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},ci={any:[/1/i,/2/i,/3/i,/4/i]},li={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},ui={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},di={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},fi={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},hi={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},pi={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},mi={ordinalNumber:ni({matchPattern:ri,parsePattern:oi,valueCallback:e=>parseInt(e,10)}),era:He({matchPatterns:ii,defaultMatchWidth:"wide",parsePatterns:si,defaultParseWidth:"any"}),quarter:He({matchPatterns:ai,defaultMatchWidth:"wide",parsePatterns:ci,defaultParseWidth:"any",valueCallback:e=>e+1}),month:He({matchPatterns:li,defaultMatchWidth:"wide",parsePatterns:ui,defaultParseWidth:"any"}),day:He({matchPatterns:di,defaultMatchWidth:"wide",parsePatterns:fi,defaultParseWidth:"any"}),dayPeriod:He({matchPatterns:hi,defaultMatchWidth:"any",parsePatterns:pi,defaultParseWidth:"any"})},gi={code:"en-US",formatDistance:Io,formatLong:Ho,formatRelative:qo,localize:Zo,match:mi,options:{weekStartsOn:0,firstWeekContainsDate:1}};function yi(e){const t=H(e);return Ro(t,Fo(t))+1}function xi(e){const t=H(e),n=+ut(t)-+_o(t);return Math.round(n/br)+1}function wr(e,t){var f,h,p,x;const n=H(e),r=n.getFullYear(),o=Ot(),i=(t==null?void 0:t.firstWeekContainsDate)??((h=(f=t==null?void 0:t.locale)==null?void 0:f.options)==null?void 0:h.firstWeekContainsDate)??o.firstWeekContainsDate??((x=(p=o.locale)==null?void 0:p.options)==null?void 0:x.firstWeekContainsDate)??1,s=ue(e,0);s.setFullYear(r+1,0,i),s.setHours(0,0,0,0);const a=Qe(s,t),c=ue(e,0);c.setFullYear(r,0,i),c.setHours(0,0,0,0);const u=Qe(c,t);return n.getTime()>=a.getTime()?r+1:n.getTime()>=u.getTime()?r:r-1}function bi(e,t){var a,c,u,f;const n=Ot(),r=(t==null?void 0:t.firstWeekContainsDate)??((c=(a=t==null?void 0:t.locale)==null?void 0:a.options)==null?void 0:c.firstWeekContainsDate)??n.firstWeekContainsDate??((f=(u=n.locale)==null?void 0:u.options)==null?void 0:f.firstWeekContainsDate)??1,o=wr(e,t),i=ue(e,0);return i.setFullYear(o,0,r),i.setHours(0,0,0,0),Qe(i,t)}function vi(e,t){const n=H(e),r=+Qe(n,t)-+bi(n,t);return Math.round(r/br)+1}function _(e,t){const n=e<0?"-":"",r=Math.abs(e).toString().padStart(t,"0");return n+r}const pe={y(e,t){const n=e.getFullYear(),r=n>0?n:1-n;return _(t==="yy"?r%100:r,t.length)},M(e,t){const n=e.getMonth();return t==="M"?String(n+1):_(n+1,2)},d(e,t){return _(e.getDate(),t.length)},a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(e,t){return _(e.getHours()%12||12,t.length)},H(e,t){return _(e.getHours(),t.length)},m(e,t){return _(e.getMinutes(),t.length)},s(e,t){return _(e.getSeconds(),t.length)},S(e,t){const n=t.length,r=e.getMilliseconds(),o=Math.trunc(r*Math.pow(10,n-3));return _(o,t.length)}},Oe={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Fn={G:function(e,t,n){const r=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if(t==="yo"){const r=e.getFullYear(),o=r>0?r:1-r;return n.ordinalNumber(o,{unit:"year"})}return pe.y(e,t)},Y:function(e,t,n,r){const o=wr(e,r),i=o>0?o:1-o;if(t==="YY"){const s=i%100;return _(s,2)}return t==="Yo"?n.ordinalNumber(i,{unit:"year"}):_(i,t.length)},R:function(e,t){const n=vr(e);return _(n,t.length)},u:function(e,t){const n=e.getFullYear();return _(n,t.length)},Q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return _(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return _(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){const r=e.getMonth();switch(t){case"M":case"MM":return pe.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){const r=e.getMonth();switch(t){case"L":return String(r+1);case"LL":return _(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){const o=vi(e,r);return t==="wo"?n.ordinalNumber(o,{unit:"week"}):_(o,t.length)},I:function(e,t,n){const r=xi(e);return t==="Io"?n.ordinalNumber(r,{unit:"week"}):_(r,t.length)},d:function(e,t,n){return t==="do"?n.ordinalNumber(e.getDate(),{unit:"date"}):pe.d(e,t)},D:function(e,t,n){const r=yi(e);return t==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):_(r,t.length)},E:function(e,t,n){const r=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){const o=e.getDay(),i=(o-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return _(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});case"eeee":default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){const o=e.getDay(),i=(o-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return _(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});case"cccc":default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(e,t,n){const r=e.getDay(),o=r===0?7:r;switch(t){case"i":return String(o);case"ii":return _(o,t.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){const o=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(e,t,n){const r=e.getHours();let o;switch(r===12?o=Oe.noon:r===0?o=Oe.midnight:o=r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(e,t,n){const r=e.getHours();let o;switch(r>=17?o=Oe.evening:r>=12?o=Oe.afternoon:r>=4?o=Oe.morning:o=Oe.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(e,t,n){if(t==="ho"){let r=e.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return pe.h(e,t)},H:function(e,t,n){return t==="Ho"?n.ordinalNumber(e.getHours(),{unit:"hour"}):pe.H(e,t)},K:function(e,t,n){const r=e.getHours()%12;return t==="Ko"?n.ordinalNumber(r,{unit:"hour"}):_(r,t.length)},k:function(e,t,n){let r=e.getHours();return r===0&&(r=24),t==="ko"?n.ordinalNumber(r,{unit:"hour"}):_(r,t.length)},m:function(e,t,n){return t==="mo"?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):pe.m(e,t)},s:function(e,t,n){return t==="so"?n.ordinalNumber(e.getSeconds(),{unit:"second"}):pe.s(e,t)},S:function(e,t){return pe.S(e,t)},X:function(e,t,n){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(t){case"X":return In(r);case"XXXX":case"XX":return be(r);case"XXXXX":case"XXX":default:return be(r,":")}},x:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"x":return In(r);case"xxxx":case"xx":return be(r);case"xxxxx":case"xxx":default:return be(r,":")}},O:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+Nn(r,":");case"OOOO":default:return"GMT"+be(r,":")}},z:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+Nn(r,":");case"zzzz":default:return"GMT"+be(r,":")}},t:function(e,t,n){const r=Math.trunc(e.getTime()/1e3);return _(r,t.length)},T:function(e,t,n){const r=e.getTime();return _(r,t.length)}};function Nn(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),o=Math.trunc(r/60),i=r%60;return i===0?n+String(o):n+String(o)+t+_(i,2)}function In(e,t){return e%60===0?(e>0?"-":"+")+_(Math.abs(e)/60,2):be(e,t)}function be(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),o=_(Math.trunc(r/60),2),i=_(r%60,2);return n+o+t+i}const Bn=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},Er=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},wi=(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],r=n[1],o=n[2];if(!o)return Bn(e,t);let i;switch(r){case"P":i=t.dateTime({width:"short"});break;case"PP":i=t.dateTime({width:"medium"});break;case"PPP":i=t.dateTime({width:"long"});break;case"PPPP":default:i=t.dateTime({width:"full"});break}return i.replace("{{date}}",Bn(r,t)).replace("{{time}}",Er(o,t))},Ei={p:Er,P:wi},Pi=/^D+$/,ki=/^Y+$/,Si=["D","DD","YY","YYYY"];function Mi(e){return Pi.test(e)}function Ti(e){return ki.test(e)}function Oi(e,t,n){const r=$i(e,t,n);if(console.warn(r),Si.includes(e))throw new RangeError(r)}function $i(e,t,n){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Ci=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ji=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Ri=/^'([^]*?)'?$/,_i=/''/g,Di=/[a-zA-Z]/;function Pr(e,t,n){var f,h,p,x,m,y,P,k;const r=Ot(),o=(n==null?void 0:n.locale)??r.locale??gi,i=(n==null?void 0:n.firstWeekContainsDate)??((h=(f=n==null?void 0:n.locale)==null?void 0:f.options)==null?void 0:h.firstWeekContainsDate)??r.firstWeekContainsDate??((x=(p=r.locale)==null?void 0:p.options)==null?void 0:x.firstWeekContainsDate)??1,s=(n==null?void 0:n.weekStartsOn)??((y=(m=n==null?void 0:n.locale)==null?void 0:m.options)==null?void 0:y.weekStartsOn)??r.weekStartsOn??((k=(P=r.locale)==null?void 0:P.options)==null?void 0:k.weekStartsOn)??0,a=H(e);if(!Wo(a))throw new RangeError("Invalid time value");let c=t.match(ji).map(w=>{const g=w[0];if(g==="p"||g==="P"){const S=Ei[g];return S(w,o.formatLong)}return w}).join("").match(Ci).map(w=>{if(w==="''")return{isToken:!1,value:"'"};const g=w[0];if(g==="'")return{isToken:!1,value:Wi(w)};if(Fn[g])return{isToken:!0,value:w};if(g.match(Di))throw new RangeError("Format string contains an unescaped latin alphabet character `"+g+"`");return{isToken:!1,value:w}});o.localize.preprocessor&&(c=o.localize.preprocessor(a,c));const u={firstWeekContainsDate:i,weekStartsOn:s,locale:o};return c.map(w=>{if(!w.isToken)return w.value;const g=w.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&Ti(g)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&Mi(g))&&Oi(g,t,String(e));const S=Fn[g[0]];return S(a,g,o.localize,u)}).join("")}function Wi(e){const t=e.match(Ri);return t?t[1].replace(_i,"'"):e}function Ai(e,t){const n=H(e),r=H(t);return n.getTime()>r.getTime()}function Fi(e,t){const n=H(e),r=H(t);return+n<+r}const Ni=e=>d.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",...e},d.createElement("title",null,`
		solidleft
	`),d.createElement("path",{d:"M10.293 16.707c-0.187-0.188-0.292-0.442-0.292-0.707s0.105-0.519 0.292-0.707l10-10c0.092-0.098 0.202-0.177 0.325-0.232s0.255-0.084 0.389-0.086c0.134-0.002 0.268 0.022 0.392 0.073s0.238 0.125 0.333 0.22c0.095 0.095 0.17 0.208 0.22 0.333s0.075 0.258 0.073 0.392c-0.002 0.134-0.032 0.267-0.086 0.389s-0.133 0.233-0.232 0.325l-9.293 9.293 9.293 9.293c0.098 0.091 0.177 0.202 0.232 0.325s0.084 0.255 0.086 0.389c0.002 0.134-0.022 0.268-0.073 0.392s-0.125 0.238-0.22 0.333c-0.095 0.095-0.208 0.17-0.333 0.22s-0.258 0.075-0.392 0.073c-0.134-0.002-0.267-0.032-0.389-0.086s-0.233-0.134-0.325-0.232l-10-10z"})),Ii=e=>d.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",...e},d.createElement("title",null,`
		solid-right
	`),d.createElement("path",{d:"M21.707 16.707c0.187-0.188 0.292-0.442 0.292-0.707s-0.105-0.519-0.292-0.707l-10-10c-0.092-0.098-0.202-0.177-0.325-0.232s-0.255-0.084-0.389-0.086c-0.134-0.002-0.268 0.022-0.392 0.073s-0.238 0.125-0.333 0.22c-0.095 0.095-0.17 0.208-0.22 0.333s-0.075 0.258-0.073 0.392c0.002 0.134 0.032 0.267 0.086 0.389s0.133 0.233 0.232 0.325l9.293 9.293-9.293 9.293c-0.098 0.091-0.177 0.202-0.232 0.325s-0.084 0.255-0.086 0.389c-0.002 0.134 0.022 0.268 0.073 0.392s0.125 0.238 0.22 0.333c0.095 0.095 0.208 0.17 0.333 0.22s0.258 0.075 0.392 0.073c0.134-0.002 0.267-0.032 0.389-0.086s0.233-0.134 0.325-0.232l10-10z"})),Bi=v.div`
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
  button {
    
    background: transparent;
    border: none;
    cursor: pointer;
   
    margin: 0;
  }

  @media (min-width: ${({theme:e})=>e.screens.tab}){

    width: 192px;
  }

`,Li=v(Ni)`

fill: ${e=>e.disabled?e.theme.colors.primary.bg:e.theme.colors.primary.accent};
  width: 14px;
  height: auto;


`,zi=v(Ii)`

fill: ${e=>e.disabled?e.theme.colors.primary.bg:e.theme.colors.primary.accent};
  width: 14px;
  height: auto;


`,Hi=({selectedDate:e,setSelectedDate:t,setCurrentMonth:n})=>{const r=new Date().getMonth(),o=new Date().getFullYear(),i=Fi(e,Bt(new Date,-12)),s=Ai(e,new Date(o,r,1)),a=Pr(e,"MMMM"),c=e.getFullYear(),u=()=>{t(Bt(e,-1)),n(h=>h-1)},f=()=>{t(Bt(e,1)),n(h=>h+1)};return l.jsxs(Bi,{children:[l.jsx("button",{onClick:u,disabled:i,children:l.jsx(Li,{disabled:i})}),l.jsx("span",{children:`${a}, ${c}`}),l.jsx("button",{onClick:f,disabled:s,children:l.jsx(zi,{disabled:s})})]})};function X(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function kr(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=kr(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function ge(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=kr(e))&&(r&&(r+=" "),r+=t);return r}function Sr(e){return typeof e=="string"}function Yi(e,t,n){return e===void 0||Sr(e)?t:b({},t,{ownerState:b({},t.ownerState,n)})}function Mr(e,t=[]){if(e===void 0)return{};const n={};return Object.keys(e).filter(r=>r.match(/^on[A-Z]/)&&typeof e[r]=="function"&&!t.includes(r)).forEach(r=>{n[r]=e[r]}),n}function qi(e,t,n){return typeof e=="function"?e(t,n):e}function Ln(e){if(e===void 0)return{};const t={};return Object.keys(e).filter(n=>!(n.match(/^on[A-Z]/)&&typeof e[n]=="function")).forEach(n=>{t[n]=e[n]}),t}function Gi(e){const{getSlotProps:t,additionalProps:n,externalSlotProps:r,externalForwardedProps:o,className:i}=e;if(!t){const x=ge(n==null?void 0:n.className,i,o==null?void 0:o.className,r==null?void 0:r.className),m=b({},n==null?void 0:n.style,o==null?void 0:o.style,r==null?void 0:r.style),y=b({},n,o,r);return x.length>0&&(y.className=x),Object.keys(m).length>0&&(y.style=m),{props:y,internalRef:void 0}}const s=Mr(b({},o,r)),a=Ln(r),c=Ln(o),u=t(s),f=ge(u==null?void 0:u.className,n==null?void 0:n.className,i,o==null?void 0:o.className,r==null?void 0:r.className),h=b({},u==null?void 0:u.style,n==null?void 0:n.style,o==null?void 0:o.style,r==null?void 0:r.style),p=b({},u,n,c,a);return f.length>0&&(p.className=f),Object.keys(h).length>0&&(p.style=h),{props:p,internalRef:u.ref}}const Ki=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function dt(e){var t;const{elementType:n,externalSlotProps:r,ownerState:o,skipResolvingSlotProps:i=!1}=e,s=X(e,Ki),a=i?{}:qi(r,o),{props:c,internalRef:u}=Gi(b({},s,{externalSlotProps:a})),f=Ee(u,a==null?void 0:a.ref,(t=e.additionalProps)==null?void 0:t.ref);return Yi(n,b({},c,{ref:f}),o)}var et={},Tr={exports:{}};(function(e){function t(n){return n&&n.__esModule?n:{default:n}}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(Tr);var Or=Tr.exports;const Ui=fe(Qr);var zt={exports:{}},zn;function Xi(){return zn||(zn=1,function(e){function t(n,r){if(n==null)return{};var o={},i=Object.keys(n),s,a;for(a=0;a<i.length;a++)s=i[a],!(r.indexOf(s)>=0)&&(o[s]=n[s]);return o}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}(zt)),zt.exports}let Xt;typeof document=="object"&&(Xt=Zr({key:"css",prepend:!0}));function Vi(e){const{injectFirst:t,children:n}=e;return t&&Xt?l.jsx(Jr,{value:Xt,children:n}):n}function Qi(e){return e==null||Object.keys(e).length===0}function Ji(e){const{styles:t,defaultTheme:n={}}=e,r=typeof t=="function"?o=>t(Qi(o)?n:o):t;return l.jsx(Oo,{styles:r})}/**
 * @mui/styled-engine v5.15.14
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Zi(e,t){return eo(e,t)}const es=(e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))},ts=Object.freeze(Object.defineProperty({__proto__:null,GlobalStyles:Ji,StyledEngineProvider:Vi,ThemeContext:en,css:xr,default:Zi,internal_processStyles:es,keyframes:$o},Symbol.toStringTag,{value:"Module"})),ns=fe(ts),rs=fe(ao),os=fe(mo),is=fe(po),ss=["values","unit","step"],as=e=>{const t=Object.keys(e).map(n=>({key:n,val:e[n]}))||[];return t.sort((n,r)=>n.val-r.val),t.reduce((n,r)=>b({},n,{[r.key]:r.val}),{})};function $r(e){const{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5}=e,o=X(e,ss),i=as(t),s=Object.keys(i);function a(p){return`@media (min-width:${typeof t[p]=="number"?t[p]:p}${n})`}function c(p){return`@media (max-width:${(typeof t[p]=="number"?t[p]:p)-r/100}${n})`}function u(p,x){const m=s.indexOf(x);return`@media (min-width:${typeof t[p]=="number"?t[p]:p}${n}) and (max-width:${(m!==-1&&typeof t[s[m]]=="number"?t[s[m]]:x)-r/100}${n})`}function f(p){return s.indexOf(p)+1<s.length?u(p,s[s.indexOf(p)+1]):a(p)}function h(p){const x=s.indexOf(p);return x===0?a(s[1]):x===s.length-1?c(s[x]):u(p,s[s.indexOf(p)+1]).replace("@media","@media not all and")}return b({keys:s,values:i,up:a,down:c,between:u,only:f,not:h,unit:n},o)}const cs={borderRadius:4},ls=cs;function Ke(e,t){return t?ce(e,t,{clone:!1}):e}const an={xs:0,sm:600,md:900,lg:1200,xl:1536},Hn={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${an[e]}px)`};function de(e,t,n){const r=e.theme||{};if(Array.isArray(t)){const i=r.breakpoints||Hn;return t.reduce((s,a,c)=>(s[i.up(i.keys[c])]=n(t[c]),s),{})}if(typeof t=="object"){const i=r.breakpoints||Hn;return Object.keys(t).reduce((s,a)=>{if(Object.keys(i.values||an).indexOf(a)!==-1){const c=i.up(a);s[c]=n(t[a],a)}else{const c=a;s[c]=t[c]}return s},{})}return n(t)}function us(e={}){var t;return((t=e.keys)==null?void 0:t.reduce((r,o)=>{const i=e.up(o);return r[i]={},r},{}))||{}}function ds(e,t){return e.reduce((n,r)=>{const o=n[r];return(!o||Object.keys(o).length===0)&&delete n[r],n},t)}function $t(e,t,n=!0){if(!t||typeof t!="string")return null;if(e&&e.vars&&n){const r=`vars.${t}`.split(".").reduce((o,i)=>o&&o[i]?o[i]:null,e);if(r!=null)return r}return t.split(".").reduce((r,o)=>r&&r[o]!=null?r[o]:null,e)}function ft(e,t,n,r=n){let o;return typeof e=="function"?o=e(n):Array.isArray(e)?o=e[n]||r:o=$t(e,n)||r,t&&(o=t(o,r,e)),o}function Y(e){const{prop:t,cssProperty:n=e.prop,themeKey:r,transform:o}=e,i=s=>{if(s[t]==null)return null;const a=s[t],c=s.theme,u=$t(c,r)||{};return de(s,a,h=>{let p=ft(u,o,h);return h===p&&typeof h=="string"&&(p=ft(u,o,`${t}${h==="default"?"":on(h)}`,h)),n===!1?p:{[n]:p}})};return i.propTypes={},i.filterProps=[t],i}function fs(e){const t={};return n=>(t[n]===void 0&&(t[n]=e(n)),t[n])}const hs={m:"margin",p:"padding"},ps={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},Yn={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},ms=fs(e=>{if(e.length>2)if(Yn[e])e=Yn[e];else return[e];const[t,n]=e.split(""),r=hs[t],o=ps[n]||"";return Array.isArray(o)?o.map(i=>r+i):[r+o]}),cn=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],ln=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...cn,...ln];function tt(e,t,n,r){var o;const i=(o=$t(e,t,!1))!=null?o:n;return typeof i=="number"?s=>typeof s=="string"?s:i*s:Array.isArray(i)?s=>typeof s=="string"?s:i[s]:typeof i=="function"?i:()=>{}}function Cr(e){return tt(e,"spacing",8)}function nt(e,t){if(typeof t=="string"||t==null)return t;const n=Math.abs(t),r=e(n);return t>=0?r:typeof r=="number"?-r:`-${r}`}function gs(e,t){return n=>e.reduce((r,o)=>(r[o]=nt(t,n),r),{})}function ys(e,t,n,r){if(t.indexOf(n)===-1)return null;const o=ms(n),i=gs(o,r),s=e[n];return de(e,s,i)}function jr(e,t){const n=Cr(e.theme);return Object.keys(e).map(r=>ys(e,t,r,n)).reduce(Ke,{})}function B(e){return jr(e,cn)}B.propTypes={};B.filterProps=cn;function L(e){return jr(e,ln)}L.propTypes={};L.filterProps=ln;function xs(e=8){if(e.mui)return e;const t=Cr({spacing:e}),n=(...r)=>(r.length===0?[1]:r).map(i=>{const s=t(i);return typeof s=="number"?`${s}px`:s}).join(" ");return n.mui=!0,n}function Ct(...e){const t=e.reduce((r,o)=>(o.filterProps.forEach(i=>{r[i]=o}),r),{}),n=r=>Object.keys(r).reduce((o,i)=>t[i]?Ke(o,t[i](r)):o,{});return n.propTypes={},n.filterProps=e.reduce((r,o)=>r.concat(o.filterProps),[]),n}function te(e){return typeof e!="number"?e:`${e}px solid`}function oe(e,t){return Y({prop:e,themeKey:"borders",transform:t})}const bs=oe("border",te),vs=oe("borderTop",te),ws=oe("borderRight",te),Es=oe("borderBottom",te),Ps=oe("borderLeft",te),ks=oe("borderColor"),Ss=oe("borderTopColor"),Ms=oe("borderRightColor"),Ts=oe("borderBottomColor"),Os=oe("borderLeftColor"),$s=oe("outline",te),Cs=oe("outlineColor"),jt=e=>{if(e.borderRadius!==void 0&&e.borderRadius!==null){const t=tt(e.theme,"shape.borderRadius",4),n=r=>({borderRadius:nt(t,r)});return de(e,e.borderRadius,n)}return null};jt.propTypes={};jt.filterProps=["borderRadius"];Ct(bs,vs,ws,Es,Ps,ks,Ss,Ms,Ts,Os,jt,$s,Cs);const Rt=e=>{if(e.gap!==void 0&&e.gap!==null){const t=tt(e.theme,"spacing",8),n=r=>({gap:nt(t,r)});return de(e,e.gap,n)}return null};Rt.propTypes={};Rt.filterProps=["gap"];const _t=e=>{if(e.columnGap!==void 0&&e.columnGap!==null){const t=tt(e.theme,"spacing",8),n=r=>({columnGap:nt(t,r)});return de(e,e.columnGap,n)}return null};_t.propTypes={};_t.filterProps=["columnGap"];const Dt=e=>{if(e.rowGap!==void 0&&e.rowGap!==null){const t=tt(e.theme,"spacing",8),n=r=>({rowGap:nt(t,r)});return de(e,e.rowGap,n)}return null};Dt.propTypes={};Dt.filterProps=["rowGap"];const js=Y({prop:"gridColumn"}),Rs=Y({prop:"gridRow"}),_s=Y({prop:"gridAutoFlow"}),Ds=Y({prop:"gridAutoColumns"}),Ws=Y({prop:"gridAutoRows"}),As=Y({prop:"gridTemplateColumns"}),Fs=Y({prop:"gridTemplateRows"}),Ns=Y({prop:"gridTemplateAreas"}),Is=Y({prop:"gridArea"});Ct(Rt,_t,Dt,js,Rs,_s,Ds,Ws,As,Fs,Ns,Is);function Ae(e,t){return t==="grey"?t:e}const Bs=Y({prop:"color",themeKey:"palette",transform:Ae}),Ls=Y({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:Ae}),zs=Y({prop:"backgroundColor",themeKey:"palette",transform:Ae});Ct(Bs,Ls,zs);function J(e){return e<=1&&e!==0?`${e*100}%`:e}const Hs=Y({prop:"width",transform:J}),un=e=>{if(e.maxWidth!==void 0&&e.maxWidth!==null){const t=n=>{var r,o;const i=((r=e.theme)==null||(r=r.breakpoints)==null||(r=r.values)==null?void 0:r[n])||an[n];return i?((o=e.theme)==null||(o=o.breakpoints)==null?void 0:o.unit)!=="px"?{maxWidth:`${i}${e.theme.breakpoints.unit}`}:{maxWidth:i}:{maxWidth:J(n)}};return de(e,e.maxWidth,t)}return null};un.filterProps=["maxWidth"];const Ys=Y({prop:"minWidth",transform:J}),qs=Y({prop:"height",transform:J}),Gs=Y({prop:"maxHeight",transform:J}),Ks=Y({prop:"minHeight",transform:J});Y({prop:"size",cssProperty:"width",transform:J});Y({prop:"size",cssProperty:"height",transform:J});const Us=Y({prop:"boxSizing"});Ct(Hs,un,Ys,qs,Gs,Ks,Us);const Xs={border:{themeKey:"borders",transform:te},borderTop:{themeKey:"borders",transform:te},borderRight:{themeKey:"borders",transform:te},borderBottom:{themeKey:"borders",transform:te},borderLeft:{themeKey:"borders",transform:te},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:te},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:jt},color:{themeKey:"palette",transform:Ae},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:Ae},backgroundColor:{themeKey:"palette",transform:Ae},p:{style:L},pt:{style:L},pr:{style:L},pb:{style:L},pl:{style:L},px:{style:L},py:{style:L},padding:{style:L},paddingTop:{style:L},paddingRight:{style:L},paddingBottom:{style:L},paddingLeft:{style:L},paddingX:{style:L},paddingY:{style:L},paddingInline:{style:L},paddingInlineStart:{style:L},paddingInlineEnd:{style:L},paddingBlock:{style:L},paddingBlockStart:{style:L},paddingBlockEnd:{style:L},m:{style:B},mt:{style:B},mr:{style:B},mb:{style:B},ml:{style:B},mx:{style:B},my:{style:B},margin:{style:B},marginTop:{style:B},marginRight:{style:B},marginBottom:{style:B},marginLeft:{style:B},marginX:{style:B},marginY:{style:B},marginInline:{style:B},marginInlineStart:{style:B},marginInlineEnd:{style:B},marginBlock:{style:B},marginBlockStart:{style:B},marginBlockEnd:{style:B},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:Rt},rowGap:{style:Dt},columnGap:{style:_t},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:J},maxWidth:{style:un},minWidth:{transform:J},height:{transform:J},maxHeight:{transform:J},minHeight:{transform:J},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}},rt=Xs;function Vs(...e){const t=e.reduce((r,o)=>r.concat(Object.keys(o)),[]),n=new Set(t);return e.every(r=>n.size===Object.keys(r).length)}function Qs(e,t){return typeof e=="function"?e(t):e}function Rr(){function e(n,r,o,i){const s={[n]:r,theme:o},a=i[n];if(!a)return{[n]:r};const{cssProperty:c=n,themeKey:u,transform:f,style:h}=a;if(r==null)return null;if(u==="typography"&&r==="inherit")return{[n]:r};const p=$t(o,u)||{};return h?h(s):de(s,r,m=>{let y=ft(p,f,m);return m===y&&typeof m=="string"&&(y=ft(p,f,`${n}${m==="default"?"":on(m)}`,m)),c===!1?y:{[c]:y}})}function t(n){var r;const{sx:o,theme:i={}}=n||{};if(!o)return null;const s=(r=i.unstable_sxConfig)!=null?r:rt;function a(c){let u=c;if(typeof c=="function")u=c(i);else if(typeof c!="object")return c;if(!u)return null;const f=us(i.breakpoints),h=Object.keys(f);let p=f;return Object.keys(u).forEach(x=>{const m=Qs(u[x],i);if(m!=null)if(typeof m=="object")if(s[x])p=Ke(p,e(x,m,i,s));else{const y=de({theme:i},m,P=>({[x]:P}));Vs(y,m)?p[x]=t({sx:m,theme:i}):p=Ke(p,y)}else p=Ke(p,e(x,m,i,s))}),ds(h,p)}return Array.isArray(o)?o.map(a):a(o)}return t}const _r=Rr();_r.filterProps=["sx"];const dn=_r;function Dr(e,t){const n=this;return n.vars&&typeof n.getColorSchemeSelector=="function"?{[n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/,"*:where($1)")]:t}:n.palette.mode===e?t:{}}const Js=["breakpoints","palette","spacing","shape"];function fn(e={},...t){const{breakpoints:n={},palette:r={},spacing:o,shape:i={}}=e,s=X(e,Js),a=$r(n),c=xs(o);let u=ce({breakpoints:a,direction:"ltr",components:{},palette:b({mode:"light"},r),spacing:c,shape:b({},ls,i)},s);return u.applyStyles=Dr,u=t.reduce((f,h)=>ce(f,h),u),u.unstable_sxConfig=b({},rt,s==null?void 0:s.unstable_sxConfig),u.unstable_sx=function(h){return dn({sx:h,theme:this})},u}const Zs=Object.freeze(Object.defineProperty({__proto__:null,default:fn,private_createBreakpoints:$r,unstable_applyStyles:Dr},Symbol.toStringTag,{value:"Module"})),ea=fe(Zs),ta=["sx"],na=e=>{var t,n;const r={systemProps:{},otherProps:{}},o=(t=e==null||(n=e.theme)==null?void 0:n.unstable_sxConfig)!=null?t:rt;return Object.keys(e).forEach(i=>{o[i]?r.systemProps[i]=e[i]:r.otherProps[i]=e[i]}),r};function ra(e){const{sx:t}=e,n=X(e,ta),{systemProps:r,otherProps:o}=na(n);let i;return Array.isArray(t)?i=[r,...t]:typeof t=="function"?i=(...s)=>{const a=t(...s);return me(a)?b({},r,a):r}:i=b({},r,t),b({},o,{sx:i})}const oa=Object.freeze(Object.defineProperty({__proto__:null,default:dn,extendSxProp:ra,unstable_createStyleFunctionSx:Rr,unstable_defaultSxConfig:rt},Symbol.toStringTag,{value:"Module"})),ia=fe(oa);var Fe=Or;Object.defineProperty(et,"__esModule",{value:!0});var sa=et.default=ba;et.shouldForwardProp=ct;et.systemDefaultTheme=void 0;var ee=Fe(Ui),Vt=Fe(Xi()),qn=ha(ns),aa=rs;Fe(os);Fe(is);var ca=Fe(ea),la=Fe(ia);const ua=["ownerState"],da=["variants"],fa=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function Wr(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(Wr=function(r){return r?n:t})(e)}function ha(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=Wr(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(i!=="default"&&Object.prototype.hasOwnProperty.call(e,i)){var s=o?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}function pa(e){return Object.keys(e).length===0}function ma(e){return typeof e=="string"&&e.charCodeAt(0)>96}function ct(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const ga=et.systemDefaultTheme=(0,ca.default)(),ya=e=>e&&e.charAt(0).toLowerCase()+e.slice(1);function at({defaultTheme:e,theme:t,themeId:n}){return pa(t)?e:t[n]||t}function xa(e){return e?(t,n)=>n[e]:null}function lt(e,t){let{ownerState:n}=t,r=(0,Vt.default)(t,ua);const o=typeof e=="function"?e((0,ee.default)({ownerState:n},r)):e;if(Array.isArray(o))return o.flatMap(i=>lt(i,(0,ee.default)({ownerState:n},r)));if(o&&typeof o=="object"&&Array.isArray(o.variants)){const{variants:i=[]}=o;let a=(0,Vt.default)(o,da);return i.forEach(c=>{let u=!0;typeof c.props=="function"?u=c.props((0,ee.default)({ownerState:n},r,n)):Object.keys(c.props).forEach(f=>{(n==null?void 0:n[f])!==c.props[f]&&r[f]!==c.props[f]&&(u=!1)}),u&&(Array.isArray(a)||(a=[a]),a.push(typeof c.style=="function"?c.style((0,ee.default)({ownerState:n},r,n)):c.style))}),a}return o}function ba(e={}){const{themeId:t,defaultTheme:n=ga,rootShouldForwardProp:r=ct,slotShouldForwardProp:o=ct}=e,i=s=>(0,la.default)((0,ee.default)({},s,{theme:at((0,ee.default)({},s,{defaultTheme:n,themeId:t}))}));return i.__mui_systemSx=!0,(s,a={})=>{(0,qn.internal_processStyles)(s,E=>E.filter(C=>!(C!=null&&C.__mui_systemSx)));const{name:c,slot:u,skipVariantsResolver:f,skipSx:h,overridesResolver:p=xa(ya(u))}=a,x=(0,Vt.default)(a,fa),m=f!==void 0?f:u&&u!=="Root"&&u!=="root"||!1,y=h||!1;let P,k=ct;u==="Root"||u==="root"?k=r:u?k=o:ma(s)&&(k=void 0);const w=(0,qn.default)(s,(0,ee.default)({shouldForwardProp:k,label:P},x)),g=E=>typeof E=="function"&&E.__emotion_real!==E||(0,aa.isPlainObject)(E)?C=>lt(E,(0,ee.default)({},C,{theme:at({theme:C.theme,defaultTheme:n,themeId:t})})):E,S=(E,...C)=>{let j=g(E);const A=C?C.map(g):[];c&&p&&A.push(N=>{const R=at((0,ee.default)({},N,{defaultTheme:n,themeId:t}));if(!R.components||!R.components[c]||!R.components[c].styleOverrides)return null;const I=R.components[c].styleOverrides,$={};return Object.entries(I).forEach(([M,T])=>{$[M]=lt(T,(0,ee.default)({},N,{theme:R}))}),p(N,$)}),c&&!m&&A.push(N=>{var R;const I=at((0,ee.default)({},N,{defaultTheme:n,themeId:t})),$=I==null||(R=I.components)==null||(R=R[c])==null?void 0:R.variants;return lt({variants:$},(0,ee.default)({},N,{theme:I}))}),y||A.push(i);const K=A.length-C.length;if(Array.isArray(E)&&K>0){const N=new Array(K).fill("");j=[...E,...N],j.raw=[...E.raw,...N]}const z=w(j,...A);return s.muiName&&(z.muiName=s.muiName),z};return w.withConfig&&(S.withConfig=w.withConfig),S}}function va(e,t){return b({toolbar:{minHeight:56,[e.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[e.up("sm")]:{minHeight:64}}},t)}var q={};const wa=fe(co),Ea=fe(To);var Ar=Or;Object.defineProperty(q,"__esModule",{value:!0});var Gn=q.alpha=Br;q.blend=Wa;q.colorChannel=void 0;var Pa=q.darken=pn;q.decomposeColor=ne;q.emphasize=Da;var ka=q.getContrastRatio=Ca;q.getLuminance=ht;q.hexToRgb=Fr;q.hslToRgb=Ir;var Sa=q.lighten=mn;q.private_safeAlpha=ja;q.private_safeColorChannel=void 0;q.private_safeDarken=Ra;q.private_safeEmphasize=Lr;q.private_safeLighten=_a;q.recomposeColor=Ne;q.rgbToHex=$a;var Kn=Ar(wa),Ma=Ar(Ea);function hn(e,t=0,n=1){return(0,Ma.default)(e,t,n)}function Fr(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let n=e.match(t);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,o)=>o<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function Ta(e){const t=e.toString(16);return t.length===1?`0${t}`:t}function ne(e){if(e.type)return e;if(e.charAt(0)==="#")return ne(Fr(e));const t=e.indexOf("("),n=e.substring(0,t);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error((0,Kn.default)(9,e));let r=e.substring(t+1,e.length-1),o;if(n==="color"){if(r=r.split(" "),o=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(o)===-1)throw new Error((0,Kn.default)(10,o))}else r=r.split(",");return r=r.map(i=>parseFloat(i)),{type:n,values:r,colorSpace:o}}const Nr=e=>{const t=ne(e);return t.values.slice(0,3).map((n,r)=>t.type.indexOf("hsl")!==-1&&r!==0?`${n}%`:n).join(" ")};q.colorChannel=Nr;const Oa=(e,t)=>{try{return Nr(e)}catch{return e}};q.private_safeColorChannel=Oa;function Ne(e){const{type:t,colorSpace:n}=e;let{values:r}=e;return t.indexOf("rgb")!==-1?r=r.map((o,i)=>i<3?parseInt(o,10):o):t.indexOf("hsl")!==-1&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),t.indexOf("color")!==-1?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${t}(${r})`}function $a(e){if(e.indexOf("#")===0)return e;const{values:t}=ne(e);return`#${t.map((n,r)=>Ta(r===3?Math.round(255*n):n)).join("")}`}function Ir(e){e=ne(e);const{values:t}=e,n=t[0],r=t[1]/100,o=t[2]/100,i=r*Math.min(o,1-o),s=(u,f=(u+n/30)%12)=>o-i*Math.max(Math.min(f-3,9-f,1),-1);let a="rgb";const c=[Math.round(s(0)*255),Math.round(s(8)*255),Math.round(s(4)*255)];return e.type==="hsla"&&(a+="a",c.push(t[3])),Ne({type:a,values:c})}function ht(e){e=ne(e);let t=e.type==="hsl"||e.type==="hsla"?ne(Ir(e)).values:e.values;return t=t.map(n=>(e.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function Ca(e,t){const n=ht(e),r=ht(t);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function Br(e,t){return e=ne(e),t=hn(t),(e.type==="rgb"||e.type==="hsl")&&(e.type+="a"),e.type==="color"?e.values[3]=`/${t}`:e.values[3]=t,Ne(e)}function ja(e,t,n){try{return Br(e,t)}catch{return e}}function pn(e,t){if(e=ne(e),t=hn(t),e.type.indexOf("hsl")!==-1)e.values[2]*=1-t;else if(e.type.indexOf("rgb")!==-1||e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]*=1-t;return Ne(e)}function Ra(e,t,n){try{return pn(e,t)}catch{return e}}function mn(e,t){if(e=ne(e),t=hn(t),e.type.indexOf("hsl")!==-1)e.values[2]+=(100-e.values[2])*t;else if(e.type.indexOf("rgb")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;else if(e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(1-e.values[n])*t;return Ne(e)}function _a(e,t,n){try{return mn(e,t)}catch{return e}}function Da(e,t=.15){return ht(e)>.5?pn(e,t):mn(e,t)}function Lr(e,t,n){try{return Lr(e,t)}catch{return e}}function Wa(e,t,n,r=1){const o=(c,u)=>Math.round((c**(1/r)*(1-n)+u**(1/r)*n)**r),i=ne(e),s=ne(t),a=[o(i.values[0],s.values[0]),o(i.values[1],s.values[1]),o(i.values[2],s.values[2])];return Ne({type:"rgb",values:a})}const Aa={black:"#000",white:"#fff"},Je=Aa,Fa={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},Na=Fa,Ia={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},$e=Ia,Ba={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},Ce=Ba,La={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},Ye=La,za={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},je=za,Ha={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},Re=Ha,Ya={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},_e=Ya,qa=["mode","contrastThreshold","tonalOffset"],Un={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:Je.white,default:Je.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},Ht={text:{primary:Je.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:Je.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function Xn(e,t,n,r){const o=r.light||r,i=r.dark||r*1.5;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:t==="light"?e.light=Sa(e.main,o):t==="dark"&&(e.dark=Pa(e.main,i)))}function Ga(e="light"){return e==="dark"?{main:je[200],light:je[50],dark:je[400]}:{main:je[700],light:je[400],dark:je[800]}}function Ka(e="light"){return e==="dark"?{main:$e[200],light:$e[50],dark:$e[400]}:{main:$e[500],light:$e[300],dark:$e[700]}}function Ua(e="light"){return e==="dark"?{main:Ce[500],light:Ce[300],dark:Ce[700]}:{main:Ce[700],light:Ce[400],dark:Ce[800]}}function Xa(e="light"){return e==="dark"?{main:Re[400],light:Re[300],dark:Re[700]}:{main:Re[700],light:Re[500],dark:Re[900]}}function Va(e="light"){return e==="dark"?{main:_e[400],light:_e[300],dark:_e[700]}:{main:_e[800],light:_e[500],dark:_e[900]}}function Qa(e="light"){return e==="dark"?{main:Ye[400],light:Ye[300],dark:Ye[700]}:{main:"#ed6c02",light:Ye[500],dark:Ye[900]}}function Ja(e){const{mode:t="light",contrastThreshold:n=3,tonalOffset:r=.2}=e,o=X(e,qa),i=e.primary||Ga(t),s=e.secondary||Ka(t),a=e.error||Ua(t),c=e.info||Xa(t),u=e.success||Va(t),f=e.warning||Qa(t);function h(y){return ka(y,Ht.text.primary)>=n?Ht.text.primary:Un.text.primary}const p=({color:y,name:P,mainShade:k=500,lightShade:w=300,darkShade:g=700})=>{if(y=b({},y),!y.main&&y[k]&&(y.main=y[k]),!y.hasOwnProperty("main"))throw new Error(Xe(11,P?` (${P})`:"",k));if(typeof y.main!="string")throw new Error(Xe(12,P?` (${P})`:"",JSON.stringify(y.main)));return Xn(y,"light",w,r),Xn(y,"dark",g,r),y.contrastText||(y.contrastText=h(y.main)),y},x={dark:Ht,light:Un};return ce(b({common:b({},Je),mode:t,primary:p({color:i,name:"primary"}),secondary:p({color:s,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:p({color:a,name:"error"}),warning:p({color:f,name:"warning"}),info:p({color:c,name:"info"}),success:p({color:u,name:"success"}),grey:Na,contrastThreshold:n,getContrastText:h,augmentColor:p,tonalOffset:r},x[t]),o)}const Za=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function ec(e){return Math.round(e*1e5)/1e5}const Vn={textTransform:"uppercase"},Qn='"Roboto", "Helvetica", "Arial", sans-serif';function tc(e,t){const n=typeof t=="function"?t(e):t,{fontFamily:r=Qn,fontSize:o=14,fontWeightLight:i=300,fontWeightRegular:s=400,fontWeightMedium:a=500,fontWeightBold:c=700,htmlFontSize:u=16,allVariants:f,pxToRem:h}=n,p=X(n,Za),x=o/14,m=h||(k=>`${k/u*x}rem`),y=(k,w,g,S,E)=>b({fontFamily:r,fontWeight:k,fontSize:m(w),lineHeight:g},r===Qn?{letterSpacing:`${ec(S/w)}em`}:{},E,f),P={h1:y(i,96,1.167,-1.5),h2:y(i,60,1.2,-.5),h3:y(s,48,1.167,0),h4:y(s,34,1.235,.25),h5:y(s,24,1.334,0),h6:y(a,20,1.6,.15),subtitle1:y(s,16,1.75,.15),subtitle2:y(a,14,1.57,.1),body1:y(s,16,1.5,.15),body2:y(s,14,1.43,.15),button:y(a,14,1.75,.4,Vn),caption:y(s,12,1.66,.4),overline:y(s,12,2.66,1,Vn),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return ce(b({htmlFontSize:u,pxToRem:m,fontFamily:r,fontSize:o,fontWeightLight:i,fontWeightRegular:s,fontWeightMedium:a,fontWeightBold:c},P),p,{clone:!1})}const nc=.2,rc=.14,oc=.12;function F(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${nc})`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${rc})`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${oc})`].join(",")}const ic=["none",F(0,2,1,-1,0,1,1,0,0,1,3,0),F(0,3,1,-2,0,2,2,0,0,1,5,0),F(0,3,3,-2,0,3,4,0,0,1,8,0),F(0,2,4,-1,0,4,5,0,0,1,10,0),F(0,3,5,-1,0,5,8,0,0,1,14,0),F(0,3,5,-1,0,6,10,0,0,1,18,0),F(0,4,5,-2,0,7,10,1,0,2,16,1),F(0,5,5,-3,0,8,10,1,0,3,14,2),F(0,5,6,-3,0,9,12,1,0,3,16,2),F(0,6,6,-3,0,10,14,1,0,4,18,3),F(0,6,7,-4,0,11,15,1,0,4,20,3),F(0,7,8,-4,0,12,17,2,0,5,22,4),F(0,7,8,-4,0,13,19,2,0,5,24,4),F(0,7,9,-4,0,14,21,2,0,5,26,4),F(0,8,9,-5,0,15,22,2,0,6,28,5),F(0,8,10,-5,0,16,24,2,0,6,30,5),F(0,8,11,-5,0,17,26,2,0,6,32,5),F(0,9,11,-5,0,18,28,2,0,7,34,6),F(0,9,12,-6,0,19,29,2,0,7,36,6),F(0,10,13,-6,0,20,31,3,0,8,38,7),F(0,10,13,-6,0,21,33,3,0,8,40,7),F(0,10,14,-6,0,22,35,3,0,8,42,7),F(0,11,14,-7,0,23,36,3,0,9,44,8),F(0,11,15,-7,0,24,38,3,0,9,46,8)],sc=ic,ac=["duration","easing","delay"],cc={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},lc={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function Jn(e){return`${Math.round(e)}ms`}function uc(e){if(!e)return 0;const t=e/36;return Math.round((4+15*t**.25+t/5)*10)}function dc(e){const t=b({},cc,e.easing),n=b({},lc,e.duration);return b({getAutoHeightDuration:uc,create:(o=["all"],i={})=>{const{duration:s=n.standard,easing:a=t.easeInOut,delay:c=0}=i;return X(i,ac),(Array.isArray(o)?o:[o]).map(u=>`${u} ${typeof s=="string"?s:Jn(s)} ${a} ${typeof c=="string"?c:Jn(c)}`).join(",")}},e,{easing:t,duration:n})}const fc={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},hc=fc,pc=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function mc(e={},...t){const{mixins:n={},palette:r={},transitions:o={},typography:i={}}=e,s=X(e,pc);if(e.vars)throw new Error(Xe(18));const a=Ja(r),c=fn(e);let u=ce(c,{mixins:va(c.breakpoints,n),palette:a,shadows:sc.slice(),typography:tc(a,i),transitions:dc(o),zIndex:b({},hc)});return u=ce(u,s),u=t.reduce((f,h)=>ce(f,h),u),u.unstable_sxConfig=b({},rt,s==null?void 0:s.unstable_sxConfig),u.unstable_sx=function(h){return dn({sx:h,theme:this})},u}const gc=mc(),gn=gc,yn="$$material";function yc(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const xc=e=>yc(e)&&e!=="classes",bc=xc,vc=sa({themeId:yn,defaultTheme:gn,rootShouldForwardProp:bc}),Ie=vc;function wc(e){const{theme:t,name:n,props:r}=e;return!t||!t.components||!t.components[n]||!t.components[n].defaultProps?r:yr(t.components[n].defaultProps,r)}function Ec(e){return Object.keys(e).length===0}function Pc(e=null){const t=d.useContext(en);return!t||Ec(t)?e:t}const kc=fn();function zr(e=kc){return Pc(e)}function Sc({props:e,name:t,defaultTheme:n,themeId:r}){let o=zr(n);return r&&(o=o[r]||o),wc({theme:o,name:t,props:e})}function Wt({props:e,name:t}){return Sc({props:e,name:t,defaultTheme:gn,themeId:yn})}function Qt(e,t){return Qt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},Qt(e,t)}function Mc(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Qt(e,t)}const Zn={disabled:!1},Hr=qe.createContext(null);var Tc=function(t){return t.scrollTop},Ge="unmounted",ve="exited",we="entering",We="entered",Jt="exiting",he=function(e){Mc(t,e);function t(r,o){var i;i=e.call(this,r,o)||this;var s=o,a=s&&!s.isMounting?r.enter:r.appear,c;return i.appearStatus=null,r.in?a?(c=ve,i.appearStatus=we):c=We:r.unmountOnExit||r.mountOnEnter?c=Ge:c=ve,i.state={status:c},i.nextCallback=null,i}t.getDerivedStateFromProps=function(o,i){var s=o.in;return s&&i.status===Ge?{status:ve}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(o){var i=null;if(o!==this.props){var s=this.state.status;this.props.in?s!==we&&s!==We&&(i=we):(s===we||s===We)&&(i=Jt)}this.updateStatus(!1,i)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var o=this.props.timeout,i,s,a;return i=s=a=o,o!=null&&typeof o!="number"&&(i=o.exit,s=o.enter,a=o.appear!==void 0?o.appear:s),{exit:i,enter:s,appear:a}},n.updateStatus=function(o,i){if(o===void 0&&(o=!1),i!==null)if(this.cancelNextCallback(),i===we){if(this.props.unmountOnExit||this.props.mountOnEnter){var s=this.props.nodeRef?this.props.nodeRef.current:st.findDOMNode(this);s&&Tc(s)}this.performEnter(o)}else this.performExit();else this.props.unmountOnExit&&this.state.status===ve&&this.setState({status:Ge})},n.performEnter=function(o){var i=this,s=this.props.enter,a=this.context?this.context.isMounting:o,c=this.props.nodeRef?[a]:[st.findDOMNode(this),a],u=c[0],f=c[1],h=this.getTimeouts(),p=a?h.appear:h.enter;if(!o&&!s||Zn.disabled){this.safeSetState({status:We},function(){i.props.onEntered(u)});return}this.props.onEnter(u,f),this.safeSetState({status:we},function(){i.props.onEntering(u,f),i.onTransitionEnd(p,function(){i.safeSetState({status:We},function(){i.props.onEntered(u,f)})})})},n.performExit=function(){var o=this,i=this.props.exit,s=this.getTimeouts(),a=this.props.nodeRef?void 0:st.findDOMNode(this);if(!i||Zn.disabled){this.safeSetState({status:ve},function(){o.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:Jt},function(){o.props.onExiting(a),o.onTransitionEnd(s.exit,function(){o.safeSetState({status:ve},function(){o.props.onExited(a)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(o,i){i=this.setNextCallback(i),this.setState(o,i)},n.setNextCallback=function(o){var i=this,s=!0;return this.nextCallback=function(a){s&&(s=!1,i.nextCallback=null,o(a))},this.nextCallback.cancel=function(){s=!1},this.nextCallback},n.onTransitionEnd=function(o,i){this.setNextCallback(i);var s=this.props.nodeRef?this.props.nodeRef.current:st.findDOMNode(this),a=o==null&&!this.props.addEndListener;if(!s||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var c=this.props.nodeRef?[this.nextCallback]:[s,this.nextCallback],u=c[0],f=c[1];this.props.addEndListener(u,f)}o!=null&&setTimeout(this.nextCallback,o)},n.render=function(){var o=this.state.status;if(o===Ge)return null;var i=this.props,s=i.children;i.in,i.mountOnEnter,i.unmountOnExit,i.appear,i.enter,i.exit,i.timeout,i.addEndListener,i.onEnter,i.onEntering,i.onEntered,i.onExit,i.onExiting,i.onExited,i.nodeRef;var a=X(i,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return qe.createElement(Hr.Provider,{value:null},typeof s=="function"?s(o,a):qe.cloneElement(qe.Children.only(s),a))},t}(qe.Component);he.contextType=Hr;he.propTypes={};function De(){}he.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:De,onEntering:De,onEntered:De,onExit:De,onExiting:De,onExited:De};he.UNMOUNTED=Ge;he.EXITED=ve;he.ENTERING=we;he.ENTERED=We;he.EXITING=Jt;const Yr=he;function qr(){const e=zr(gn);return e[yn]||e}const Gr=e=>e.scrollTop;function pt(e,t){var n,r;const{timeout:o,easing:i,style:s={}}=e;return{duration:(n=s.transitionDuration)!=null?n:typeof o=="number"?o:o[t.mode]||0,easing:(r=s.transitionTimingFunction)!=null?r:typeof i=="object"?i[t.mode]:i,delay:s.transitionDelay}}const Oc=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function Zt(e){return`scale(${e}, ${e**2})`}const $c={entering:{opacity:1,transform:Zt(1)},entered:{opacity:1,transform:"none"}},Yt=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),Kr=d.forwardRef(function(t,n){const{addEndListener:r,appear:o=!0,children:i,easing:s,in:a,onEnter:c,onEntered:u,onEntering:f,onExit:h,onExited:p,onExiting:x,style:m,timeout:y="auto",TransitionComponent:P=Yr}=t,k=X(t,Oc),w=vo(),g=d.useRef(),S=qr(),E=d.useRef(null),C=Ee(E,i.ref,n),j=M=>T=>{if(M){const O=E.current;T===void 0?M(O):M(O,T)}},A=j(f),K=j((M,T)=>{Gr(M);const{duration:O,delay:U,easing:V}=pt({style:m,timeout:y,easing:s},{mode:"enter"});let se;y==="auto"?(se=S.transitions.getAutoHeightDuration(M.clientHeight),g.current=se):se=O,M.style.transition=[S.transitions.create("opacity",{duration:se,delay:U}),S.transitions.create("transform",{duration:Yt?se:se*.666,delay:U,easing:V})].join(","),c&&c(M,T)}),z=j(u),N=j(x),R=j(M=>{const{duration:T,delay:O,easing:U}=pt({style:m,timeout:y,easing:s},{mode:"exit"});let V;y==="auto"?(V=S.transitions.getAutoHeightDuration(M.clientHeight),g.current=V):V=T,M.style.transition=[S.transitions.create("opacity",{duration:V,delay:O}),S.transitions.create("transform",{duration:Yt?V:V*.666,delay:Yt?O:O||V*.333,easing:U})].join(","),M.style.opacity=0,M.style.transform=Zt(.75),h&&h(M)}),I=j(p),$=M=>{y==="auto"&&w.start(g.current||0,M),r&&r(E.current,M)};return l.jsx(P,b({appear:o,in:a,nodeRef:E,onEnter:K,onEntered:z,onEntering:A,onExit:R,onExited:I,onExiting:N,addEndListener:$,timeout:y==="auto"?null:y},k,{children:(M,T)=>d.cloneElement(i,b({style:b({opacity:0,transform:Zt(.75),visibility:M==="exited"&&!a?"hidden":void 0},$c[M],m,i.props.style),ref:C},T))}))});Kr.muiSupportAuto=!0;const Cc=Kr;function jc(e){const t=ae(e);return t.body===e?Ve(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function Ue(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function er(e){return parseInt(Ve(e).getComputedStyle(e).paddingRight,10)||0}function Rc(e){const n=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,r=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return n||r}function tr(e,t,n,r,o){const i=[t,n,...r];[].forEach.call(e.children,s=>{const a=i.indexOf(s)===-1,c=!Rc(s);a&&c&&Ue(s,o)})}function qt(e,t){let n=-1;return e.some((r,o)=>t(r)?(n=o,!0):!1),n}function _c(e,t){const n=[],r=e.container;if(!t.disableScrollLock){if(jc(r)){const s=wo(ae(r));n.push({value:r.style.paddingRight,property:"padding-right",el:r}),r.style.paddingRight=`${er(r)+s}px`;const a=ae(r).querySelectorAll(".mui-fixed");[].forEach.call(a,c=>{n.push({value:c.style.paddingRight,property:"padding-right",el:c}),c.style.paddingRight=`${er(c)+s}px`})}let i;if(r.parentNode instanceof DocumentFragment)i=ae(r).body;else{const s=r.parentElement,a=Ve(r);i=(s==null?void 0:s.nodeName)==="HTML"&&a.getComputedStyle(s).overflowY==="scroll"?s:r}n.push({value:i.style.overflow,property:"overflow",el:i},{value:i.style.overflowX,property:"overflow-x",el:i},{value:i.style.overflowY,property:"overflow-y",el:i}),i.style.overflow="hidden"}return()=>{n.forEach(({value:i,el:s,property:a})=>{i?s.style.setProperty(a,i):s.style.removeProperty(a)})}}function Dc(e){const t=[];return[].forEach.call(e.children,n=>{n.getAttribute("aria-hidden")==="true"&&t.push(n)}),t}class Wc{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,n){let r=this.modals.indexOf(t);if(r!==-1)return r;r=this.modals.length,this.modals.push(t),t.modalRef&&Ue(t.modalRef,!1);const o=Dc(n);tr(n,t.mount,t.modalRef,o,!0);const i=qt(this.containers,s=>s.container===n);return i!==-1?(this.containers[i].modals.push(t),r):(this.containers.push({modals:[t],container:n,restore:null,hiddenSiblings:o}),r)}mount(t,n){const r=qt(this.containers,i=>i.modals.indexOf(t)!==-1),o=this.containers[r];o.restore||(o.restore=_c(o,n))}remove(t,n=!0){const r=this.modals.indexOf(t);if(r===-1)return r;const o=qt(this.containers,s=>s.modals.indexOf(t)!==-1),i=this.containers[o];if(i.modals.splice(i.modals.indexOf(t),1),this.modals.splice(r,1),i.modals.length===0)i.restore&&i.restore(),t.modalRef&&Ue(t.modalRef,n),tr(i.container,t.mount,t.modalRef,i.hiddenSiblings,!1),this.containers.splice(o,1);else{const s=i.modals[i.modals.length-1];s.modalRef&&Ue(s.modalRef,!1)}return r}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}function Ac(e){return typeof e=="function"?e():e}function Fc(e){return e?e.props.hasOwnProperty("in"):!1}const Nc=new Wc;function Ic(e){const{container:t,disableEscapeKeyDown:n=!1,disableScrollLock:r=!1,manager:o=Nc,closeAfterTransition:i=!1,onTransitionEnter:s,onTransitionExited:a,children:c,onClose:u,open:f,rootRef:h}=e,p=d.useRef({}),x=d.useRef(null),m=d.useRef(null),y=Ee(m,h),[P,k]=d.useState(!f),w=Fc(c);let g=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(g=!1);const S=()=>ae(x.current),E=()=>(p.current.modalRef=m.current,p.current.mount=x.current,p.current),C=()=>{o.mount(E(),{disableScrollLock:r}),m.current&&(m.current.scrollTop=0)},j=Sn(()=>{const T=Ac(t)||S().body;o.add(E(),T),m.current&&C()}),A=d.useCallback(()=>o.isTopModal(E()),[o]),K=Sn(T=>{x.current=T,T&&(f&&A()?C():m.current&&Ue(m.current,g))}),z=d.useCallback(()=>{o.remove(E(),g)},[g,o]);d.useEffect(()=>()=>{z()},[z]),d.useEffect(()=>{f?j():(!w||!i)&&z()},[f,z,w,i,j]);const N=T=>O=>{var U;(U=T.onKeyDown)==null||U.call(T,O),!(O.key!=="Escape"||O.which===229||!A())&&(n||(O.stopPropagation(),u&&u(O,"escapeKeyDown")))},R=T=>O=>{var U;(U=T.onClick)==null||U.call(T,O),O.target===O.currentTarget&&u&&u(O,"backdropClick")};return{getRootProps:(T={})=>{const O=Mr(e);delete O.onTransitionEnter,delete O.onTransitionExited;const U=b({},O,T);return b({role:"presentation"},U,{onKeyDown:N(U),ref:y})},getBackdropProps:(T={})=>{const O=T;return b({"aria-hidden":!0},O,{onClick:R(O),open:f})},getTransitionProps:()=>{const T=()=>{k(!1),s&&s()},O=()=>{k(!0),a&&a(),i&&z()};return{onEnter:Cn(T,c==null?void 0:c.props.onEnter),onExited:Cn(O,c==null?void 0:c.props.onExited)}},rootRef:y,portalRef:K,isTopModal:A,exited:P,hasTransition:w}}const Bc=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function Lc(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function zc(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=r=>e.ownerDocument.querySelector(`input[type="radio"]${r}`);let n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}function Hc(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||zc(e))}function Yc(e){const t=[],n=[];return Array.from(e.querySelectorAll(Bc)).forEach((r,o)=>{const i=Lc(r);i===-1||!Hc(r)||(i===0?t.push(r):n.push({documentOrder:o,tabIndex:i,node:r}))}),n.sort((r,o)=>r.tabIndex===o.tabIndex?r.documentOrder-o.documentOrder:r.tabIndex-o.tabIndex).map(r=>r.node).concat(t)}function qc(){return!0}function Gc(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:r=!1,disableRestoreFocus:o=!1,getTabbable:i=Yc,isEnabled:s=qc,open:a}=e,c=d.useRef(!1),u=d.useRef(null),f=d.useRef(null),h=d.useRef(null),p=d.useRef(null),x=d.useRef(!1),m=d.useRef(null),y=Ee(t.ref,m),P=d.useRef(null);d.useEffect(()=>{!a||!m.current||(x.current=!n)},[n,a]),d.useEffect(()=>{if(!a||!m.current)return;const g=ae(m.current);return m.current.contains(g.activeElement)||(m.current.hasAttribute("tabIndex")||m.current.setAttribute("tabIndex","-1"),x.current&&m.current.focus()),()=>{o||(h.current&&h.current.focus&&(c.current=!0,h.current.focus()),h.current=null)}},[a]),d.useEffect(()=>{if(!a||!m.current)return;const g=ae(m.current),S=j=>{P.current=j,!(r||!s()||j.key!=="Tab")&&g.activeElement===m.current&&j.shiftKey&&(c.current=!0,f.current&&f.current.focus())},E=()=>{const j=m.current;if(j===null)return;if(!g.hasFocus()||!s()||c.current){c.current=!1;return}if(j.contains(g.activeElement)||r&&g.activeElement!==u.current&&g.activeElement!==f.current)return;if(g.activeElement!==p.current)p.current=null;else if(p.current!==null)return;if(!x.current)return;let A=[];if((g.activeElement===u.current||g.activeElement===f.current)&&(A=i(m.current)),A.length>0){var K,z;const N=!!((K=P.current)!=null&&K.shiftKey&&((z=P.current)==null?void 0:z.key)==="Tab"),R=A[0],I=A[A.length-1];typeof R!="string"&&typeof I!="string"&&(N?I.focus():R.focus())}else j.focus()};g.addEventListener("focusin",E),g.addEventListener("keydown",S,!0);const C=setInterval(()=>{g.activeElement&&g.activeElement.tagName==="BODY"&&E()},50);return()=>{clearInterval(C),g.removeEventListener("focusin",E),g.removeEventListener("keydown",S,!0)}},[n,r,o,s,a,i]);const k=g=>{h.current===null&&(h.current=g.relatedTarget),x.current=!0,p.current=g.target;const S=t.props.onFocus;S&&S(g)},w=g=>{h.current===null&&(h.current=g.relatedTarget),x.current=!0};return l.jsxs(d.Fragment,{children:[l.jsx("div",{tabIndex:a?0:-1,onFocus:w,ref:u,"data-testid":"sentinelStart"}),d.cloneElement(t,{ref:y,onFocus:k}),l.jsx("div",{tabIndex:a?0:-1,onFocus:w,ref:f,"data-testid":"sentinelEnd"})]})}function Kc(e){return typeof e=="function"?e():e}const Uc=d.forwardRef(function(t,n){const{children:r,container:o,disablePortal:i=!1}=t,[s,a]=d.useState(null),c=Ee(d.isValidElement(r)?r.ref:null,n);if(Mn(()=>{i||a(Kc(o)||document.body)},[o,i]),Mn(()=>{if(s&&!i)return Tn(n,s),()=>{Tn(n,null)}},[n,s,i]),i){if(d.isValidElement(r)){const u={ref:c};return d.cloneElement(r,u)}return l.jsx(d.Fragment,{children:r})}return l.jsx(d.Fragment,{children:s&&to.createPortal(r,s)})}),Xc=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],Vc={entering:{opacity:1},entered:{opacity:1}},Qc=d.forwardRef(function(t,n){const r=qr(),o={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:i,appear:s=!0,children:a,easing:c,in:u,onEnter:f,onEntered:h,onEntering:p,onExit:x,onExited:m,onExiting:y,style:P,timeout:k=o,TransitionComponent:w=Yr}=t,g=X(t,Xc),S=d.useRef(null),E=Ee(S,a.ref,n),C=$=>M=>{if($){const T=S.current;M===void 0?$(T):$(T,M)}},j=C(p),A=C(($,M)=>{Gr($);const T=pt({style:P,timeout:k,easing:c},{mode:"enter"});$.style.webkitTransition=r.transitions.create("opacity",T),$.style.transition=r.transitions.create("opacity",T),f&&f($,M)}),K=C(h),z=C(y),N=C($=>{const M=pt({style:P,timeout:k,easing:c},{mode:"exit"});$.style.webkitTransition=r.transitions.create("opacity",M),$.style.transition=r.transitions.create("opacity",M),x&&x($)}),R=C(m),I=$=>{i&&i(S.current,$)};return l.jsx(w,b({appear:s,in:u,nodeRef:S,onEnter:A,onEntered:K,onEntering:j,onExit:N,onExited:R,onExiting:z,addEndListener:I,timeout:k},g,{children:($,M)=>d.cloneElement(a,b({style:b({opacity:0,visibility:$==="exited"&&!u?"hidden":void 0},Vc[$],P,a.props.style),ref:E},M))}))}),Jc=Qc;function Zc(e){return Ze("MuiBackdrop",e)}Tt("MuiBackdrop",["root","invisible"]);const el=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],tl=e=>{const{classes:t,invisible:n}=e;return Mt({root:["root",n&&"invisible"]},Zc,t)},nl=Ie("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})(({ownerState:e})=>b({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),rl=d.forwardRef(function(t,n){var r,o,i;const s=Wt({props:t,name:"MuiBackdrop"}),{children:a,className:c,component:u="div",components:f={},componentsProps:h={},invisible:p=!1,open:x,slotProps:m={},slots:y={},TransitionComponent:P=Jc,transitionDuration:k}=s,w=X(s,el),g=b({},s,{component:u,invisible:p}),S=tl(g),E=(r=m.root)!=null?r:h.root;return l.jsx(P,b({in:x,timeout:k},w,{children:l.jsx(nl,b({"aria-hidden":!0},E,{as:(o=(i=y.root)!=null?i:f.Root)!=null?o:u,className:ge(S.root,c,E==null?void 0:E.className),ownerState:b({},g,E==null?void 0:E.ownerState),classes:S,ref:n,children:a}))}))}),ol=rl;function il(e){return Ze("MuiModal",e)}Tt("MuiModal",["root","hidden","backdrop"]);const sl=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],al=e=>{const{open:t,exited:n,classes:r}=e;return Mt({root:["root",!t&&n&&"hidden"],backdrop:["backdrop"]},il,r)},cl=Ie("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})(({theme:e,ownerState:t})=>b({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),ll=Ie(ol,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),ul=d.forwardRef(function(t,n){var r,o,i,s,a,c;const u=Wt({name:"MuiModal",props:t}),{BackdropComponent:f=ll,BackdropProps:h,className:p,closeAfterTransition:x=!1,children:m,container:y,component:P,components:k={},componentsProps:w={},disableAutoFocus:g=!1,disableEnforceFocus:S=!1,disableEscapeKeyDown:E=!1,disablePortal:C=!1,disableRestoreFocus:j=!1,disableScrollLock:A=!1,hideBackdrop:K=!1,keepMounted:z=!1,onBackdropClick:N,open:R,slotProps:I,slots:$}=u,M=X(u,sl),T=b({},u,{closeAfterTransition:x,disableAutoFocus:g,disableEnforceFocus:S,disableEscapeKeyDown:E,disablePortal:C,disableRestoreFocus:j,disableScrollLock:A,hideBackdrop:K,keepMounted:z}),{getRootProps:O,getBackdropProps:U,getTransitionProps:V,portalRef:se,isTopModal:ot,exited:Z,hasTransition:it}=Ic(b({},T,{rootRef:n})),ye=b({},T,{exited:Z}),le=al(ye),Pe={};if(m.props.tabIndex===void 0&&(Pe.tabIndex="-1"),it){const{onEnter:W,onExited:G}=V();Pe.onEnter=W,Pe.onExited=G}const ke=(r=(o=$==null?void 0:$.root)!=null?o:k.Root)!=null?r:cl,Be=(i=(s=$==null?void 0:$.backdrop)!=null?s:k.Backdrop)!=null?i:f,Le=(a=I==null?void 0:I.root)!=null?a:w.root,Se=(c=I==null?void 0:I.backdrop)!=null?c:w.backdrop,Ft=dt({elementType:ke,externalSlotProps:Le,externalForwardedProps:M,getSlotProps:O,additionalProps:{ref:n,as:P},ownerState:ye,className:ge(p,Le==null?void 0:Le.className,le==null?void 0:le.root,!ye.open&&ye.exited&&(le==null?void 0:le.hidden))}),Nt=dt({elementType:Be,externalSlotProps:Se,additionalProps:h,getSlotProps:W=>U(b({},W,{onClick:G=>{N&&N(G),W!=null&&W.onClick&&W.onClick(G)}})),className:ge(Se==null?void 0:Se.className,h==null?void 0:h.className,le==null?void 0:le.backdrop),ownerState:ye});return!z&&!R&&(!it||Z)?null:l.jsx(Uc,{ref:se,container:y,disablePortal:C,children:l.jsxs(ke,b({},Ft,{children:[!K&&f?l.jsx(Be,b({},Nt)):null,l.jsx(Gc,{disableEnforceFocus:S,disableAutoFocus:g,disableRestoreFocus:j,isEnabled:ot,open:R,children:d.cloneElement(m,Pe)})]}))})}),dl=ul,fl=e=>{let t;return e<1?t=5.11916*e**2:t=4.5*Math.log(e+1)+2,(t/100).toFixed(2)},nr=fl;function hl(e){return Ze("MuiPaper",e)}Tt("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const pl=["className","component","elevation","square","variant"],ml=e=>{const{square:t,elevation:n,variant:r,classes:o}=e,i={root:["root",r,!t&&"rounded",r==="elevation"&&`elevation${n}`]};return Mt(i,hl,o)},gl=Ie("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,n.variant==="elevation"&&t[`elevation${n.elevation}`]]}})(({theme:e,ownerState:t})=>{var n;return b({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},t.variant==="elevation"&&b({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${Gn("#fff",nr(t.elevation))}, ${Gn("#fff",nr(t.elevation))})`},e.vars&&{backgroundImage:(n=e.vars.overlays)==null?void 0:n[t.elevation]}))}),yl=d.forwardRef(function(t,n){const r=Wt({props:t,name:"MuiPaper"}),{className:o,component:i="div",elevation:s=1,square:a=!1,variant:c="elevation"}=r,u=X(r,pl),f=b({},r,{component:i,elevation:s,square:a,variant:c}),h=ml(f);return l.jsx(gl,b({as:i,ownerState:f,className:ge(h.root,o),ref:n},u))}),xl=yl;function bl(e){return Ze("MuiPopover",e)}Tt("MuiPopover",["root","paper"]);const vl=["onEntering"],wl=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps","disableScrollLock"],El=["slotProps"];function rr(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.height/2:t==="bottom"&&(n=e.height),n}function or(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.width/2:t==="right"&&(n=e.width),n}function ir(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function Gt(e){return typeof e=="function"?e():e}const Pl=e=>{const{classes:t}=e;return Mt({root:["root"],paper:["paper"]},bl,t)},kl=Ie(dl,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Sl=Ie(xl,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),Ml=d.forwardRef(function(t,n){var r,o,i;const s=Wt({props:t,name:"MuiPopover"}),{action:a,anchorEl:c,anchorOrigin:u={vertical:"top",horizontal:"left"},anchorPosition:f,anchorReference:h="anchorEl",children:p,className:x,container:m,elevation:y=8,marginThreshold:P=16,open:k,PaperProps:w={},slots:g,slotProps:S,transformOrigin:E={vertical:"top",horizontal:"left"},TransitionComponent:C=Cc,transitionDuration:j="auto",TransitionProps:{onEntering:A}={},disableScrollLock:K=!1}=s,z=X(s.TransitionProps,vl),N=X(s,wl),R=(r=S==null?void 0:S.paper)!=null?r:w,I=d.useRef(),$=Ee(I,R.ref),M=b({},s,{anchorOrigin:u,anchorReference:h,elevation:y,marginThreshold:P,externalPaperSlotProps:R,transformOrigin:E,TransitionComponent:C,transitionDuration:j,TransitionProps:z}),T=Pl(M),O=d.useCallback(()=>{if(h==="anchorPosition")return f;const W=Gt(c),Q=(W&&W.nodeType===1?W:ae(I.current).body).getBoundingClientRect();return{top:Q.top+rr(Q,u.vertical),left:Q.left+or(Q,u.horizontal)}},[c,u.horizontal,u.vertical,f,h]),U=d.useCallback(W=>({vertical:rr(W,E.vertical),horizontal:or(W,E.horizontal)}),[E.horizontal,E.vertical]),V=d.useCallback(W=>{const G={width:W.offsetWidth,height:W.offsetHeight},Q=U(G);if(h==="none")return{top:null,left:null,transformOrigin:ir(Q)};const xn=O();let Me=xn.top-Q.vertical,Te=xn.left-Q.horizontal;const bn=Me+G.height,vn=Te+G.width,wn=Ve(Gt(c)),En=wn.innerHeight-P,Pn=wn.innerWidth-P;if(P!==null&&Me<P){const ie=Me-P;Me-=ie,Q.vertical+=ie}else if(P!==null&&bn>En){const ie=bn-En;Me-=ie,Q.vertical+=ie}if(P!==null&&Te<P){const ie=Te-P;Te-=ie,Q.horizontal+=ie}else if(vn>Pn){const ie=vn-Pn;Te-=ie,Q.horizontal+=ie}return{top:`${Math.round(Me)}px`,left:`${Math.round(Te)}px`,transformOrigin:ir(Q)}},[c,h,O,U,P]),[se,ot]=d.useState(k),Z=d.useCallback(()=>{const W=I.current;if(!W)return;const G=V(W);G.top!==null&&(W.style.top=G.top),G.left!==null&&(W.style.left=G.left),W.style.transformOrigin=G.transformOrigin,ot(!0)},[V]);d.useEffect(()=>(K&&window.addEventListener("scroll",Z),()=>window.removeEventListener("scroll",Z)),[c,K,Z]);const it=(W,G)=>{A&&A(W,G),Z()},ye=()=>{ot(!1)};d.useEffect(()=>{k&&Z()}),d.useImperativeHandle(a,()=>k?{updatePosition:()=>{Z()}}:null,[k,Z]),d.useEffect(()=>{if(!k)return;const W=go(()=>{Z()}),G=Ve(c);return G.addEventListener("resize",W),()=>{W.clear(),G.removeEventListener("resize",W)}},[c,k,Z]);let le=j;j==="auto"&&!C.muiSupportAuto&&(le=void 0);const Pe=m||(c?ae(Gt(c)).body:void 0),ke=(o=g==null?void 0:g.root)!=null?o:kl,Be=(i=g==null?void 0:g.paper)!=null?i:Sl,Le=dt({elementType:Be,externalSlotProps:b({},R,{style:se?R.style:b({},R.style,{opacity:0})}),additionalProps:{elevation:y,ref:$},ownerState:M,className:ge(T.paper,R==null?void 0:R.className)}),Se=dt({elementType:ke,externalSlotProps:(S==null?void 0:S.root)||{},externalForwardedProps:N,additionalProps:{ref:n,slotProps:{backdrop:{invisible:!0}},container:Pe,open:k},ownerState:M,className:ge(T.root,x)}),{slotProps:Ft}=Se,Nt=X(Se,El);return l.jsx(ke,b({},Nt,!Sr(ke)&&{slotProps:Ft,disableScrollLock:K},{children:l.jsx(C,b({appear:!0,in:k,onEntering:it,onExited:ye,timeout:le},z,{children:l.jsx(Be,b({},Le,{children:p}))}))}))}),Tl=Ml,Ol=v.div`
display: flex;
flex-direction:column;
gap: 16px;
padding: 24px 13px;


border-radius: 10px;
background:${e=>e.theme.colors.primary.bg};
box-shadow: 0px 4px 4px 0px rgba(64, 123, 255, 0.30);



`,$l=v.h2`
color:${e=>e.theme.colors.primary.accent};
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 1.25;
`,Cl=v.ul`
display: flex;
flex-direction: column;
gap: 16px;

color: ${e=>e.theme.colors.primary.text};

font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 1.25;
`,Kt=v.li`

span{
  color:${e=>e.theme.colors.primary.accent};

  font-size: 18px;

  font-weight: 500;
  line-height: 1.33;
}

`,jl=({selectedDate:e,selectedDayData:t})=>{const n=Pr(e,"MMMM"),r=e.getDate(),o=no().user.waterRate,i=o?(o/1e3).toFixed(1):"0",s=t?(t.waterRate/1e3).toFixed(1):i,a=t?t.percentagePerDay:"0",c=t?t.totalPortions:"0";return l.jsxs(Ol,{children:[l.jsxs($l,{children:[" ",r,", ",n]}),l.jsxs(Cl,{children:[l.jsxs(Kt,{children:["Daily Norma: ",l.jsxs("span",{children:[s," L"]})]}),l.jsxs(Kt,{children:["Fulfillment of the daily norm: ",l.jsxs("span",{children:[a,"%"]})]}),l.jsxs(Kt,{children:["How many servings of water: ",l.jsx("span",{children:c})]})]})]})},Rl=v.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,_l=v.div`
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
 
`,Dl=v.ul`
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
`,Wl=v.li`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  position: relative;
  cursor: pointer;
  padding: 0px;

  @media (min-width: ${({theme:e})=>e.screens.tab}) {
  }
`,Al=v.div`
  width: 34px;
  height: 34px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${e=>e.theme.colors.primary.bg};

  border: 2px solid
    ${({theme:e,percentage:t})=>t<100?e.colors.secondary.color4:e.colors.primary.bg};
`,Fl=v.p`
  z-index: 1;
  margin: 0;
`,Nl=v.p`
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
`,Il=e=>e.water.waterDayList,Bl=e=>e.water.waterMounthList,Ll=e=>e.water.waterRate,At=()=>{const e=It(Il),t=It(Bl),n=It(Ll);return{waterDayList:e,waterMonthList:t,waterRate:n}},zl=()=>{const[e,t]=d.useState(new Date),[n,r]=d.useState(e.getMonth()),[o,i]=d.useState(null),s=mt(),a=At().waterMonthList,c=()=>{i(null)},u=!!o,f=u?"simple-popover":void 0;d.useEffect(()=>{const x=An(e),m=Wn(e);r(e.getMonth()),s(ro({startDate:x,endDate:m}))},[n,s,e]);const h=(x,m)=>{t(m),i(x.currentTarget)},p=a&&a.find(x=>{const[m]=x.date.split(",");return parseInt(m)===e.getDate()});return l.jsxs(Rl,{children:[l.jsxs(_l,{children:[l.jsx("h3",{children:"Month"}),l.jsx(Hi,{selectedDate:e,setSelectedDate:t,setCurrentMonth:r})]}),l.jsx(Dl,{children:Ao({start:An(e),end:Wn(e)}).map((x,m)=>{const y=x.getDate(),P=a.find(w=>{const[g]=w.date.split(",");return parseInt(g)===y}),k=P?P.percentagePerDay:null;return l.jsxs(Wl,{onClick:w=>h(w,x),children:[l.jsx(Al,{percentage:k,children:l.jsx(Fl,{children:y})}),l.jsxs(Nl,{children:[k||0,"%"]})]},m)})}),l.jsx(Tl,{id:f,open:u,anchorEl:o,onClose:c,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"bottom",horizontal:"right"},children:l.jsx(jl,{selectedDate:e,selectedDayData:p})})]})},Hl=v.div`
display: flex;
flex-direction:column;

align-items: center;
color:${e=>e.theme.colors.primary.text};

background-image: url('/src/assets/backgroundHomePg/Bottle_Home_Mob.png'), url('/src/assets/backgroundHomePg/Background_Home_Mob.png');
background-position: center 106px, center;
background-size: auto, 100vw auto;
background-repeat: no-repeat;


@media (min-width: ${({theme:e})=>e.screens.tab}){
  background-image: url('/src/assets/backgroundHomePg/Bottle_Home_Tab.png'), url('/src/assets/backgroundHomePg/Background_Home_Tab.png');
background-position: center 40px, center;

}


@media (min-width: ${({theme:e})=>e.screens.desk}) {
    flex-direction:row;
    align-items: flex-start;

    background-image: url('/src/assets/backgroundHomePg/Botle_Home_desk.png'),  url('/src/assets/backgroundWelcomePg/backgroundElementMainPageDesk.png');
background-position: left top, center;
  }
`,Yl=v.div`
display: flex;
flex-direction: column;

width: 280px;
height: 507px;


@media (min-width: ${({theme:e})=>e.screens.tab}) {
  width: 704px;
}

`,ql=v.div`
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


@media (min-width: ${({theme:e})=>e.screens.tab}) {
  width: 704px;
  padding: 32px 24px;
}

@media (min-width: ${({theme:e})=>e.screens.desk}) {
  width: 592px;
  
}


`,Gl=(e,t=!1)=>{const n=new Date(e);let r=n.getHours();const o=n.getMinutes();let i="";if(t){const s=r>=12?"PM":"AM";r=r%12,r=r||12,i=`${r.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")} ${s}`}else i=`${r.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")}`;return i},Kl=e=>d.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",...e},d.createElement("title",null,"glass_26"),d.createElement("path",{fill:"#407bff",d:"M5.565 2.783l1.901 26.363v0.072h16.367l1.901-26.353v-0.082h-20.169zM23.16 28.479h-15.017l-1.426-19.747h0.784l1.289 17.403c0.008 0.092 0.049 0.177 0.115 0.24s0.153 0.098 0.244 0.099h0.030c0.047-0.003 0.093-0.016 0.136-0.037s0.080-0.051 0.111-0.087c0.031-0.036 0.055-0.078 0.070-0.124s0.021-0.094 0.017-0.141l-1.289-17.351h16.362l-1.426 19.747zM24.637 7.994h-16.468l-0.283-3.847c-0.009-0.094-0.052-0.181-0.122-0.244s-0.16-0.097-0.252-0.095c-0.095 0.009-0.183 0.055-0.245 0.129s-0.094 0.169-0.088 0.266l0.283 3.795h-0.794l-0.324-4.483h18.617l-0.324 4.478z"}),d.createElement("path",{fill:"#407bff",d:"M11.359 12.384c0.236 0 0.467-0.071 0.663-0.204s0.349-0.322 0.439-0.543c0.090-0.221 0.114-0.465 0.068-0.699s-0.16-0.45-0.327-0.62c-0.167-0.169-0.38-0.285-0.611-0.331s-0.471-0.023-0.689 0.069c-0.218 0.092-0.404 0.247-0.536 0.446s-0.201 0.433-0.201 0.672c0 0.321 0.126 0.629 0.35 0.856s0.527 0.355 0.844 0.355zM11.359 10.697c0.093 0 0.184 0.028 0.261 0.080s0.138 0.127 0.173 0.214c0.036 0.087 0.045 0.183 0.027 0.276s-0.063 0.178-0.129 0.244c-0.066 0.067-0.15 0.112-0.241 0.131s-0.186 0.009-0.272-0.027c-0.086-0.036-0.159-0.097-0.211-0.176s-0.079-0.171-0.079-0.265c0-0.127 0.050-0.248 0.138-0.337s0.208-0.14 0.332-0.14z"}),d.createElement("path",{fill:"#407bff",d:"M11.354 16.318c0.003 0.239 0.076 0.472 0.209 0.669s0.321 0.35 0.539 0.439 0.458 0.111 0.689 0.062c0.231-0.049 0.442-0.166 0.607-0.336s0.277-0.387 0.321-0.621 0.019-0.477-0.072-0.698c-0.091-0.22-0.245-0.408-0.442-0.54s-0.427-0.201-0.663-0.2c-0.158 0.001-0.313 0.033-0.459 0.095s-0.277 0.153-0.387 0.267-0.198 0.249-0.256 0.397c-0.059 0.148-0.088 0.307-0.086 0.467zM13.013 16.318c0 0.094-0.028 0.187-0.079 0.265s-0.125 0.14-0.211 0.176c-0.086 0.036-0.18 0.046-0.272 0.027s-0.175-0.064-0.241-0.131-0.111-0.152-0.129-0.244c-0.018-0.093-0.009-0.188 0.027-0.276s0.096-0.162 0.173-0.214 0.168-0.080 0.261-0.080c0.125 0 0.244 0.050 0.333 0.14s0.138 0.211 0.138 0.337z"}),d.createElement("path",{fill:"#407bff",d:"M19.834 16.349c0.236 0 0.467-0.071 0.663-0.204s0.349-0.322 0.439-0.543c0.090-0.221 0.114-0.465 0.068-0.699s-0.16-0.45-0.327-0.62c-0.167-0.169-0.379-0.285-0.611-0.331s-0.471-0.023-0.689 0.069c-0.218 0.092-0.404 0.247-0.535 0.446s-0.201 0.433-0.201 0.672c0 0.321 0.126 0.629 0.349 0.856s0.527 0.355 0.844 0.355zM19.834 14.666c0.093 0 0.184 0.028 0.262 0.081s0.138 0.127 0.173 0.215c0.035 0.088 0.044 0.184 0.026 0.276s-0.064 0.178-0.13 0.244c-0.066 0.066-0.151 0.111-0.242 0.129s-0.186 0.008-0.272-0.029-0.159-0.099-0.21-0.178c-0.051-0.079-0.078-0.172-0.077-0.266 0.001-0.126 0.051-0.246 0.14-0.334s0.207-0.138 0.331-0.138z"}),d.createElement("path",{fill:"#407bff",d:"M15.677 14.066c0.236 0 0.467-0.071 0.663-0.204s0.349-0.322 0.439-0.543c0.090-0.221 0.114-0.464 0.068-0.699s-0.16-0.45-0.327-0.62c-0.167-0.169-0.38-0.285-0.611-0.331s-0.471-0.023-0.689 0.069c-0.218 0.092-0.404 0.247-0.536 0.446s-0.201 0.433-0.201 0.672c0 0.321 0.126 0.629 0.35 0.856s0.527 0.354 0.844 0.354zM15.677 12.379c0.093 0 0.184 0.028 0.261 0.080s0.138 0.127 0.173 0.214c0.036 0.087 0.045 0.183 0.027 0.276s-0.063 0.177-0.129 0.244c-0.066 0.067-0.15 0.112-0.241 0.131s-0.186 0.009-0.272-0.027-0.159-0.097-0.211-0.176c-0.052-0.079-0.079-0.171-0.079-0.265-0.003-0.065 0.006-0.129 0.028-0.19s0.056-0.116 0.1-0.164c0.044-0.047 0.097-0.084 0.156-0.11s0.122-0.039 0.186-0.039v0.026z"}),d.createElement("path",{fill:"#407bff",d:"M13.402 20.929c0.005 0.197 0.067 0.387 0.178 0.548s0.267 0.285 0.447 0.357c0.181 0.072 0.378 0.088 0.568 0.047s0.363-0.139 0.498-0.279c0.135-0.141 0.227-0.319 0.263-0.512s0.015-0.393-0.060-0.574c-0.075-0.181-0.202-0.336-0.363-0.445s-0.351-0.167-0.545-0.167c-0.264 0.007-0.514 0.118-0.699 0.309s-0.287 0.449-0.287 0.716zM14.388 20.662c0.052 0 0.103 0.016 0.146 0.045s0.077 0.071 0.097 0.12 0.025 0.102 0.015 0.154c-0.010 0.052-0.035 0.099-0.072 0.137s-0.084 0.063-0.135 0.073c-0.051 0.010-0.104 0.005-0.152-0.015s-0.089-0.054-0.118-0.098c-0.029-0.044-0.044-0.096-0.044-0.148 0-0.071 0.028-0.139 0.077-0.189s0.116-0.078 0.186-0.078z"}),d.createElement("path",{fill:"#407bff",d:"M18.17 19.816c0.202 0.007 0.402-0.048 0.574-0.157s0.306-0.269 0.388-0.457c0.081-0.188 0.105-0.397 0.068-0.599s-0.133-0.388-0.275-0.534c-0.143-0.146-0.325-0.245-0.524-0.285s-0.405-0.018-0.591 0.063c-0.186 0.081-0.345 0.216-0.454 0.389s-0.166 0.375-0.161 0.58c0.006 0.262 0.111 0.511 0.292 0.697s0.426 0.295 0.684 0.304zM18.17 18.549c0.070 0 0.137 0.028 0.186 0.078s0.077 0.118 0.077 0.189c0 0.071-0.028 0.139-0.077 0.189s-0.116 0.078-0.186 0.078c-0.070 0-0.138-0.028-0.188-0.078s-0.079-0.118-0.080-0.189c0-0.035 0.007-0.071 0.020-0.103s0.033-0.062 0.058-0.087 0.055-0.044 0.087-0.057c0.032-0.013 0.067-0.019 0.102-0.019z"}),d.createElement("path",{fill:"#407bff",d:"M20.253 11.538c0.2 0 0.395-0.060 0.562-0.173s0.296-0.273 0.372-0.46c0.077-0.187 0.097-0.394 0.058-0.593s-0.135-0.382-0.277-0.525c-0.141-0.143-0.322-0.241-0.518-0.281s-0.399-0.019-0.584 0.058c-0.185 0.078-0.343 0.209-0.454 0.378s-0.17 0.367-0.17 0.57c0 0.272 0.107 0.533 0.296 0.725s0.447 0.3 0.715 0.3zM20.253 10.271c0.039-0.011 0.080-0.013 0.12-0.006s0.078 0.024 0.11 0.049c0.032 0.025 0.059 0.057 0.077 0.094s0.028 0.078 0.028 0.119-0.009 0.082-0.028 0.119c-0.018 0.037-0.044 0.069-0.077 0.094s-0.070 0.042-0.11 0.049c-0.040 0.008-0.081 0.006-0.12-0.006-0.039 0.011-0.080 0.013-0.12 0.006s-0.078-0.024-0.11-0.049c-0.032-0.025-0.059-0.057-0.077-0.094s-0.028-0.078-0.028-0.119 0.009-0.082 0.028-0.119c0.018-0.037 0.044-0.069 0.077-0.094s0.070-0.042 0.11-0.049c0.040-0.008 0.081-0.006 0.12 0.006z"}),d.createElement("path",{fill:"#407bff",d:"M10.369 27.191c-0.045 0.021-0.086 0.052-0.119 0.089s-0.059 0.082-0.074 0.13c-0.016 0.048-0.021 0.099-0.017 0.149s0.019 0.099 0.043 0.144c0.031 0.060 0.078 0.11 0.135 0.145s0.122 0.054 0.189 0.055c0.056 0.002 0.112-0.011 0.162-0.036 1.545-0.803 3.255-1.225 4.99-1.231 1.837 0.027 3.648 0.441 5.319 1.215 0.066 0.035 0.141 0.049 0.215 0.039s0.143-0.042 0.198-0.093c0.055-0.051 0.094-0.118 0.11-0.192s0.010-0.151-0.018-0.221c-0.036-0.091-0.105-0.164-0.192-0.205-1.769-0.821-3.687-1.258-5.633-1.282-1.845 0.002-3.664 0.444-5.309 1.292z"})),Ul=e=>d.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:1024,height:1024,viewBox:"0 0 1024 1024",...e},d.createElement("title",null,"edit"),d.createElement("path",{fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:4,strokeWidth:42.6667,d:"M719.445 191.445l71.979-72.021c14.479-14.479 34.482-23.435 56.576-23.435 44.189 0 80.011 35.822 80.011 80.011 0 22.094-8.955 42.097-23.435 56.576l-453.077 453.077c-21.936 21.924-49.153 38.567-79.579 47.856l-1.36 0.357-114.56 34.133 34.133-114.56c9.647-31.785 26.289-59.002 48.214-80.94l381.098-381.055zM719.445 191.445l112.555 112.555M768 597.333v202.667c0 53.019-42.981 96-96 96v0h-448c-53.019 0-96-42.981-96-96v0-448c0-53.019 42.981-96 96-96v0h202.667"})),Xl=e=>d.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:1024,height:1024,viewBox:"0 0 1024 1024",...e},d.createElement("title",null,"delete"),d.createElement("path",{fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:4,strokeWidth:42.6667,d:"M628.907 384l-14.763 384M409.856 768l-14.763-384M820.395 247.040c14.592 2.219 29.099 4.565 43.605 7.083M820.395 247.040l-45.568 592.341c-3.952 49.747-45.294 88.619-95.716 88.619-0.010 0-0.020 0-0.030 0h-334.164c-0.008 0-0.018 0-0.028 0-50.422 0-91.764-38.872-95.694-88.283l-0.021-0.336-45.568-592.341M820.395 247.040c-38.791-6.358-89.724-12.366-141.193-16.476l-7.202-0.463M203.605 247.040c-25.242 3.599-40.074 6.065-54.844 8.706l11.239-1.666M203.605 247.040c38.789-6.358 89.722-12.366 141.19-16.476l7.205-0.463M672 230.101v-39.083c0-50.347-38.827-92.331-89.173-93.909-21.11-0.721-45.921-1.132-70.827-1.132-24.908 0-49.719 0.411-74.428 1.226l3.602-0.094c-50.347 1.579-89.173 43.605-89.173 93.909v39.083M672 230.101c-47.901-3.932-103.689-6.173-160-6.173-56.31 0-112.097 2.241-167.276 6.64l7.276-0.466"})),Vl=e=>d.createElement("svg",{fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:4,strokeWidth:42.6667,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...e},d.createElement("path",{d:"M512 256v512M768 512h-512"})),Ql=v.div`
  
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
 
`,Jl=v.ul`
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

  `,Zl=v.div`
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

`,e0=v.span`
color:${e=>e.theme.colors.primary.accent};


font-size: 18px;

font-weight: 400;
line-height: 1.33;
`,t0=v(Kl)`
  fill:${e=>e.theme.colors.primary.accent};
  width: 26px;
  height: auto;


  @media (min-width: ${({theme:e})=>e.screens.tab}){
    width: 36px;
  }
  
`,n0=v(Ul)`
  stroke:  ${e=>e.theme.colors.secondary.color3};
  width: 16px;
  height: 16px;
`,r0=v(Xl)`
   stroke: ${e=>e.theme.colors.secondary.color2};
  width: 16px;
  height: 16px;
`,o0=v.div`
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

`,i0=v.button`

  &:hover::after {
   
    background-color: ${e=>e.theme.colors.primary.accent};
   
  }`,s0=v.button`
 
 
  &:hover::after {
   
    background-color:  ${e=>e.theme.colors.secondary.color2};
    
  }`,Ur=v(Vl)`
  fill: ${e=>e.theme.colors.primary.accent};
  stroke: ${e=>e.theme.colors.primary.accent};
  width: 16px;
  height: 16px;

  @media (min-width: ${({theme:e})=>e.screens.tab}){
    width: 24px;
  height: 24px;
  }
 
`,a0=v.button`
display: flex;
align-items: center;
gap: 8px;

font-size: 16px;
font-weight: 500;
line-height: 1.25;
color: ${e=>e.theme.colors.primary.accent};


&:hover {
    color: ${e=>e.theme.colors.secondary.color4};
    ${Ur} {
      fill: ${e=>e.theme.colors.secondary.color4};
      stroke: ${e=>e.theme.colors.secondary.color4};
  }
}


@media (min-width: ${({theme:e})=>e.screens.tab}){
  font-size: 18px;
line-height: 1.33;
  }

`,c0=v.div`

width: 232px;
height: 216px;

display: flex;
flex-direction: column;


gap: 24px;

h3{
color: #2F2F2F;
font-size: 26px;
font-weight: 500;
line-height: 1.23;
}

p{
color: #2F2F2F;

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
`,l0=v.div`
display: flex;
flex-direction: column-reverse;
gap: 24px;

@media (min-width: ${({theme:e})=>e.screens.tab}){
    flex-direction: row;
    justify-content: end;
}
`,u0=v.button`

padding: 8px 30px;


color: #407BFF;
text-align: center;
font-size: 16px;
font-weight: 500;
line-height: 1.25;

border-radius: 10px;
background:  #D7E3FF;
@media (min-width: ${({theme:e})=>e.screens.tab}){
    padding: 10px 30px;
    font-size: 18px;
    width: 160px;
    height: 44px;
}

`,d0=v.button`

padding: 8px 30px;


color: #FFF;
text-align: center;
font-size: 16px;
font-weight: 500;
line-height: 1.25;


border-radius: 10px;
background:#EF5050;
box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

@media (min-width: ${({theme:e})=>e.screens.tab}){
    padding: 10px 30px;
    font-size: 18px;
    width: 160px;
    height: 44px;
}
`,f0=({id:e})=>{const{closeModal:t}=d.useContext(tn),n=mt();console.log(e);const r=()=>{n(oo(e)),t()};return l.jsxs(c0,{children:[l.jsx("h3",{children:"Delete entry"}),l.jsx("p",{children:"Are you sure you want to delete the entry?"}),l.jsxs(l0,{children:[l.jsx(u0,{type:"button",onClick:()=>t(),children:"Cancel"}),l.jsx(d0,{type:"submit",onClick:r,children:"Delete"})]})]})},h0=()=>l.jsx("div",{children:" Тут колись буде модалка TodayEditModal"}),p0=({handleAddWaterClick:e})=>{const{openModal:t}=d.useContext(tn),[n,r]=d.useState(null),o=At().waterDayList,i=mt();d.useEffect(()=>{i(io())},[]);const s=c=>{t(l.jsx(l.Fragment,{children:l.jsx(f0,{id:c})}))},a=c=>{r(c),console.log(n),t(l.jsx(l.Fragment,{children:l.jsx(h0,{portion:c})}))};return l.jsxs(Ql,{children:[l.jsx("h3",{children:"Today"}),o&&o.length>0&&l.jsx(Jl,{children:o.map(c=>l.jsxs("li",{children:[l.jsxs(Zl,{children:[l.jsx(t0,{}),l.jsx(e0,{children:`${c.waterVolume} ml `}),l.jsx("span",{children:Gl(c.dateAdded,!0)})]}),l.jsxs(o0,{children:[l.jsx(i0,{onClick:()=>a(c._id),children:l.jsx(n0,{})}),l.jsx(s0,{onClick:()=>s(c._id),children:l.jsx(r0,{})})]})]},c._id))}),l.jsxs(a0,{onClick:e,children:[l.jsx(Ur,{})," Add water"]})]})},m0=v.div`
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
`,g0=v.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
  justify-content: left;
`,y0=v.p`
  font-size: 18px;
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 24px;
  color: ${e=>e.theme.colors.primary.text};
  white-space: nowrap;
`,x0=v.button`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  color: #8baeff;
`,b0=v.p`
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  color: ${e=>e.theme.colors.primary.accent};
`,v0=v.div`
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
`,w0=v.div`
  width: 592px;
  height: 712px;
  padding: 32px 24px 32px 24px;
  border-radius: 10px;
  background-color: ${e=>e.theme.colors.primary.bg};
`,E0=v.h2`
  font-size: 26px;
  font-weight: 500;
  line-height: 32px;
  color: ${e=>e.theme.colors.primary.text};
`,P0=v.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  margin-top: 24px;
  margin-bottom: 12px;
`,xe=v.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: ${e=>e.theme.colors.primary.text};
`,sr=v.span`
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: ${e=>e.theme.colors.primary.accent};
`,k0=v.div`
  width: 544px;
  border: 1px solid;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 24px;
  border-color: ${e=>e.theme.colors.secondary.color5};
`,S0=v.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  color: #8f8f8f;
`,M0=v.span`
  color: ${e=>e.theme.colors.primary.accent};
`,T0=v.form`
  display: flex;
  flex-direction: column;
`,ar=v.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  color: ${e=>e.theme.colors.primary.text};
`,cr=v.label`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`,lr=v.input`
  width: 14px;
  height: 14px;
  border: 1px solid;
  border-color: ${e=>e.theme.colors.primary.accent};
  color: ${e=>e.theme.colors.primary.bg};
  border-radius: 50%;
`,O0=v.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`,ur=v.label`
  width: 544px;
  display: flex;
  gap: 8px;
  flex-direction: column;
`,Ut=v.input`
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
`,$0=v.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`,C0=v.label`
  width: 544px;
  display: flex;
  gap: 16px;
  flex-direction: column;
  margin-bottom: 24px;
`,j0=v.button`
  border-radius: 10px;
  padding: 10px 30px;
  width: 160px;
  color: ${e=>e.theme.colors.primary.bg};
  background-color: ${e=>e.theme.colors.primary.accent};
`,R0=v.div`
  width: 544px;
  display: flex;
  justify-content: end;
`,_0=v.button``,D0=v.div`
  width: 544px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,W0=v.span`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: ${e=>e.theme.colors.primary.accent};
`,A0=v.svg`
  background-color:;
`,F0=({onClose:e})=>{const t=mt(),{waterRate:n}=At(),r={weight:.03,activity:.04},o={weight:.04,activity:.06},[i,s]=d.useState(r),[a,c]=d.useState(""),[u,f]=d.useState((n/1e3).toFixed(1)),[h,p]=d.useState(""),[x,m]=d.useState("");d.useEffect(()=>{const w=g=>{g.code==="Escape"&&e()};return window.addEventListener("keydown",w),()=>{window.removeEventListener("keydown",w)}},[e]);const y=d.useCallback(()=>{if(!a||!h)return;const w=(a*i.weight+h/60*i.activity).toFixed(1);f(w)},[i,a,h]);d.useEffect(()=>{y()},[y]);const P=w=>{const g=w.target.value,S=parseFloat(g);!isNaN(S)&&S>=1?m(S):g===""&&m("")},k=w=>{w.preventDefault();const g=parseFloat(u);if(!(h>0&&a>0||x>0)){alert("Fill all fields");return}(isNaN(g)||g<=0)&&alert("Enter a valid intake goal"),t(so(x||g)).then(E=>{E.error?(console.log(E.error),alert("Something went wrong ")):(e(),c(""),p(""),m(""))})};return l.jsx(v0,{children:l.jsxs(w0,{children:[l.jsxs(D0,{children:[l.jsx(E0,{children:"My daily norma"}),l.jsx(_0,{onClick:()=>e(),children:l.jsx(A0,{width:"24",height:"24",children:l.jsx("path",{d:"M6 18L18 6M6 6L18 18",stroke:"#407BFF","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})})})]}),l.jsxs(P0,{children:[l.jsxs(xe,{children:["For girl: ",l.jsx(sr,{children:"V=(M*0,03) + (T*0,4)"})]}),l.jsxs(xe,{children:["For man: ",l.jsx(sr,{children:"V=(M*0,04) + (T*0,6)"})]})]}),l.jsx(k0,{children:l.jsxs(S0,{children:[l.jsx(M0,{children:"*"})," V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]})}),l.jsxs(T0,{children:[l.jsxs($0,{children:[l.jsx(ar,{children:"Calculate your rate:"}),l.jsxs(O0,{children:[l.jsxs(cr,{children:[l.jsx(lr,{type:"radio",name:"gender",value:"woman",onChange:()=>s(r)}),l.jsx(xe,{children:"For woman"})]}),l.jsxs(cr,{children:[l.jsx(lr,{type:"radio",name:"gender",value:"man",onChange:()=>s(o)}),l.jsx(xe,{children:"For man"})]})]}),l.jsxs(ur,{children:[l.jsx(xe,{children:"Your weight in kilograms:"}),l.jsx(Ut,{type:"number",name:"userWeight",placeholder:"0",value:a,min:0,max:250,onChange:w=>c(w.target.value)})]}),l.jsxs(ur,{children:[l.jsx(xe,{children:"The time of active participation in sports or other activities with a high physical. load in hours:"}),l.jsx(Ut,{type:"number",name:"userActive",placeholder:"0",value:h,min:0,onChange:w=>p(w.target.value)})]}),l.jsxs(xe,{children:["The required amount of water in liters per day:",l.jsxs(W0,{children:[" ",u||2," L"]})]})]}),l.jsxs(C0,{children:[l.jsx(ar,{children:"Write down how much water you will drink:"}),l.jsx(Ut,{type:"number",name:"userWaterPredict",placeholder:"0",value:x,min:0,onChange:P})]}),l.jsx(R0,{children:l.jsx(j0,{onClick:k,children:"Save"})})]})]})})},N0=()=>{const[e,t]=d.useState(!1),{waterRate:n}=At(),r=()=>{t(!0)},o=()=>{t(!1)},i=(n/1e3).toFixed(1);return l.jsxs(m0,{children:[l.jsx(y0,{children:"My daily norma"}),l.jsxs(g0,{children:[l.jsxs(b0,{children:[" ",i||2," L"]}),l.jsx(x0,{onClick:r,children:"Edit"})]}),e&&l.jsx(F0,{onClose:o})]})},I0=()=>l.jsx("div",{children:" Тут колись буде модалка AddWaterModal"}),L0=()=>{const{openModal:e}=d.useContext(tn),t=()=>{e(l.jsx(l.Fragment,{children:l.jsx(I0,{})}))};return l.jsxs(Hl,{children:[l.jsx(Yl,{children:l.jsx(N0,{})}),l.jsxs(ql,{children:[l.jsx(p0,{handleAddWaterClick:t}),l.jsx(zl,{})]})]})};export{L0 as default};
