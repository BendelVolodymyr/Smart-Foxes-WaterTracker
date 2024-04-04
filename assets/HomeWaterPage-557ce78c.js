import{_ as x,o as ae,r as d,w as qr,i as sr,T as Qt,k as wn,l as Gr,h as b,j as l,m as Ee,p as fe,q as Kr,C as Ur,v as Xr,n as Vr,R as qe,x as st,y as En,z as Pn,A as kn,B as Qr,M as Jt,u as ar,D as Jr,E as Zr}from"./index-0839e89f.js";function me(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function cr(e){if(!me(e))return e;const t={};return Object.keys(e).forEach(n=>{t[n]=cr(e[n])}),t}function ce(e,t,n={clone:!0}){const r=n.clone?x({},e):e;return me(e)&&me(t)&&Object.keys(t).forEach(o=>{o!=="__proto__"&&(me(t[o])&&o in e&&me(e[o])?r[o]=ce(e[o],t[o],n):n.clone?r[o]=me(t[o])?cr(t[o]):t[o]:r[o]=t[o])}),r}const eo=Object.freeze(Object.defineProperty({__proto__:null,default:ce,isPlainObject:me},Symbol.toStringTag,{value:"Module"}));function Xe(e){let t="https://mui.com/production-error/?code="+e;for(let n=1;n<arguments.length;n+=1)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}const to=Object.freeze(Object.defineProperty({__proto__:null,default:Xe},Symbol.toStringTag,{value:"Module"}));var lr={exports:{}},D={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zt=Symbol.for("react.element"),en=Symbol.for("react.portal"),mt=Symbol.for("react.fragment"),gt=Symbol.for("react.strict_mode"),yt=Symbol.for("react.profiler"),xt=Symbol.for("react.provider"),bt=Symbol.for("react.context"),no=Symbol.for("react.server_context"),vt=Symbol.for("react.forward_ref"),wt=Symbol.for("react.suspense"),Et=Symbol.for("react.suspense_list"),Pt=Symbol.for("react.memo"),kt=Symbol.for("react.lazy"),ro=Symbol.for("react.offscreen"),ur;ur=Symbol.for("react.module.reference");function re(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Zt:switch(e=e.type,e){case mt:case yt:case gt:case wt:case Et:return e;default:switch(e=e&&e.$$typeof,e){case no:case bt:case vt:case kt:case Pt:case xt:return e;default:return t}}case en:return t}}}D.ContextConsumer=bt;D.ContextProvider=xt;D.Element=Zt;D.ForwardRef=vt;D.Fragment=mt;D.Lazy=kt;D.Memo=Pt;D.Portal=en;D.Profiler=yt;D.StrictMode=gt;D.Suspense=wt;D.SuspenseList=Et;D.isAsyncMode=function(){return!1};D.isConcurrentMode=function(){return!1};D.isContextConsumer=function(e){return re(e)===bt};D.isContextProvider=function(e){return re(e)===xt};D.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Zt};D.isForwardRef=function(e){return re(e)===vt};D.isFragment=function(e){return re(e)===mt};D.isLazy=function(e){return re(e)===kt};D.isMemo=function(e){return re(e)===Pt};D.isPortal=function(e){return re(e)===en};D.isProfiler=function(e){return re(e)===yt};D.isStrictMode=function(e){return re(e)===gt};D.isSuspense=function(e){return re(e)===wt};D.isSuspenseList=function(e){return re(e)===Et};D.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===mt||e===yt||e===gt||e===wt||e===Et||e===ro||typeof e=="object"&&e!==null&&(e.$$typeof===kt||e.$$typeof===Pt||e.$$typeof===xt||e.$$typeof===bt||e.$$typeof===vt||e.$$typeof===ur||e.getModuleId!==void 0)};D.typeOf=re;lr.exports=D;var Sn=lr.exports;const oo=/^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;function dr(e){const t=`${e}`.match(oo);return t&&t[1]||""}function fr(e,t=""){return e.displayName||e.name||dr(e)||t}function Tn(e,t,n){const r=fr(t);return e.displayName||(r!==""?`${n}(${r})`:n)}function io(e){if(e!=null){if(typeof e=="string")return e;if(typeof e=="function")return fr(e,"Component");if(typeof e=="object")switch(e.$$typeof){case Sn.ForwardRef:return Tn(e,e.render,"ForwardRef");case Sn.Memo:return Tn(e,e.type,"memo");default:return}}}const so=Object.freeze(Object.defineProperty({__proto__:null,default:io,getFunctionName:dr},Symbol.toStringTag,{value:"Module"}));function tn(e){if(typeof e!="string")throw new Error(Xe(7));return e.charAt(0).toUpperCase()+e.slice(1)}const ao=Object.freeze(Object.defineProperty({__proto__:null,default:tn},Symbol.toStringTag,{value:"Module"}));function Mn(...e){return e.reduce((t,n)=>n==null?t:function(...o){t.apply(this,o),n.apply(this,o)},()=>{})}function co(e,t=166){let n;function r(...o){const i=()=>{e.apply(this,o)};clearTimeout(n),n=setTimeout(i,t)}return r.clear=()=>{clearTimeout(n)},r}function Ve(e){return ae(e).defaultView||window}const On={};function lo(e,t){const n=d.useRef(On);return n.current===On&&(n.current=e(t)),n}const uo=[];function fo(e){d.useEffect(e,uo)}class nn{constructor(){this.currentId=null,this.clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}static create(){return new nn}start(t,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},t)}}function ho(){const e=lo(nn.create).current;return fo(e.disposeEffect),e}function po(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function hr(e,t){const n=x({},t);return Object.keys(e).forEach(r=>{if(r.toString().match(/^(components|slots)$/))n[r]=x({},e[r],n[r]);else if(r.toString().match(/^(componentsProps|slotProps)$/)){const o=e[r]||{},i=t[r];n[r]={},!i||!Object.keys(i)?n[r]=o:!o||!Object.keys(o)?n[r]=i:(n[r]=x({},i),Object.keys(o).forEach(s=>{n[r][s]=hr(o[s],i[s])}))}else n[r]===void 0&&(n[r]=e[r])}),n}function St(e,t,n=void 0){const r={};return Object.keys(e).forEach(o=>{r[o]=e[o].reduce((i,s)=>{if(s){const a=t(s);a!==""&&i.push(a),n&&n[s]&&i.push(n[s])}return i},[]).join(" ")}),r}const $n=e=>e,mo=()=>{let e=$n;return{configure(t){e=t},generate(t){return e(t)},reset(){e=$n}}},go=mo(),yo=go,xo={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function Ze(e,t,n="Mui"){const r=xo[t];return r?`${n}-${r}`:`${yo.generate(e)}-${t}`}function Tt(e,t,n="Mui"){const r={};return t.forEach(o=>{r[o]=Ze(e,o,n)}),r}function bo(e,t=Number.MIN_SAFE_INTEGER,n=Number.MAX_SAFE_INTEGER){return Math.max(t,Math.min(e,n))}const vo=Object.freeze(Object.defineProperty({__proto__:null,default:bo},Symbol.toStringTag,{value:"Module"}));var wo=qr(function(e,t){var n=e.styles,r=sr([n],void 0,d.useContext(Qt)),o=d.useRef();return wn(function(){var i=t.key+"-global",s=new t.sheet.constructor({key:i,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),a=!1,c=document.querySelector('style[data-emotion="'+i+" "+r.name+'"]');return t.sheet.tags.length&&(s.before=t.sheet.tags[0]),c!==null&&(a=!0,c.setAttribute("data-emotion",i),s.hydrate([c])),o.current=[s,a],function(){s.flush()}},[t]),wn(function(){var i=o.current,s=i[0],a=i[1];if(a){i[1]=!1;return}if(r.next!==void 0&&Gr(t,r.next,!0),s.tags.length){var c=s.tags[s.tags.length-1].nextElementSibling;s.before=c,s.flush()}t.insert("",r,s,!1)},[t,r.name]),null});function pr(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return sr(t)}var Eo=function(){var t=pr.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};function U(e){const t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new e.constructor(+e):typeof e=="number"||t==="[object Number]"||typeof e=="string"||t==="[object String]"?new Date(e):new Date(NaN)}function ue(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}function Ft(e,t){const n=U(e);if(isNaN(t))return ue(e,NaN);if(!t)return n;const r=n.getDate(),o=ue(e,n.getTime());o.setMonth(n.getMonth()+t+1,0);const i=o.getDate();return r>=i?o:(n.setFullYear(o.getFullYear(),o.getMonth(),r),n)}const mr=6048e5,Po=864e5;let ko={};function Mt(){return ko}function Qe(e,t){var a,c,u,f;const n=Mt(),r=(t==null?void 0:t.weekStartsOn)??((c=(a=t==null?void 0:t.locale)==null?void 0:a.options)==null?void 0:c.weekStartsOn)??n.weekStartsOn??((f=(u=n.locale)==null?void 0:u.options)==null?void 0:f.weekStartsOn)??0,o=U(e),i=o.getDay(),s=(i<r?7:0)+i-r;return o.setDate(o.getDate()-s),o.setHours(0,0,0,0),o}function ut(e){return Qe(e,{weekStartsOn:1})}function gr(e){const t=U(e),n=t.getFullYear(),r=ue(e,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const o=ut(r),i=ue(e,0);i.setFullYear(n,0,4),i.setHours(0,0,0,0);const s=ut(i);return t.getTime()>=o.getTime()?n+1:t.getTime()>=s.getTime()?n:n-1}function Cn(e){const t=U(e);return t.setHours(0,0,0,0),t}function jn(e){const t=U(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function So(e,t){const n=Cn(e),r=Cn(t),o=+n-jn(n),i=+r-jn(r);return Math.round((o-i)/Po)}function To(e){const t=gr(e),n=ue(e,0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),ut(n)}function Mo(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function Oo(e){if(!Mo(e)&&typeof e!="number")return!1;const t=U(e);return!isNaN(Number(t))}function $o(e){const t=U(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}function Co(e){const t=U(e);return t.setDate(1),t.setHours(0,0,0,0),t}function jo(e){const t=U(e),n=ue(e,0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}const _o={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Ro=(e,t,n)=>{let r;const o=_o[e];return typeof o=="string"?r=o:t===1?r=o.one:r=o.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function Nt(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const Do={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Ao={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Wo={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Fo={date:Nt({formats:Do,defaultWidth:"full"}),time:Nt({formats:Ao,defaultWidth:"full"}),dateTime:Nt({formats:Wo,defaultWidth:"full"})},No={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Io=(e,t,n,r)=>No[e];function Le(e){return(t,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let o;if(r==="formatting"&&e.formattingValues){const s=e.defaultFormattingWidth||e.defaultWidth,a=n!=null&&n.width?String(n.width):s;o=e.formattingValues[a]||e.formattingValues[s]}else{const s=e.defaultWidth,a=n!=null&&n.width?String(n.width):e.defaultWidth;o=e.values[a]||e.values[s]}const i=e.argumentCallback?e.argumentCallback(t):t;return o[i]}}const Bo={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},zo={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Lo={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Ho={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Yo={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},qo={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Go=(e,t)=>{const n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},Ko={ordinalNumber:Go,era:Le({values:Bo,defaultWidth:"wide"}),quarter:Le({values:zo,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Le({values:Lo,defaultWidth:"wide"}),day:Le({values:Ho,defaultWidth:"wide"}),dayPeriod:Le({values:Yo,defaultWidth:"wide",formattingValues:qo,defaultFormattingWidth:"wide"})};function He(e){return(t,n={})=>{const r=n.width,o=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=t.match(o);if(!i)return null;const s=i[0],a=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(a)?Xo(a,p=>p.test(s)):Uo(a,p=>p.test(s));let u;u=e.valueCallback?e.valueCallback(c):c,u=n.valueCallback?n.valueCallback(u):u;const f=t.slice(s.length);return{value:u,rest:f}}}function Uo(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function Xo(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function Vo(e){return(t,n={})=>{const r=t.match(e.matchPattern);if(!r)return null;const o=r[0],i=t.match(e.parsePattern);if(!i)return null;let s=e.valueCallback?e.valueCallback(i[0]):i[0];s=n.valueCallback?n.valueCallback(s):s;const a=t.slice(o.length);return{value:s,rest:a}}}const Qo=/^(\d+)(th|st|nd|rd)?/i,Jo=/\d+/i,Zo={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},ei={any:[/^b/i,/^(a|c)/i]},ti={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},ni={any:[/1/i,/2/i,/3/i,/4/i]},ri={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},oi={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},ii={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},si={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},ai={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},ci={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},li={ordinalNumber:Vo({matchPattern:Qo,parsePattern:Jo,valueCallback:e=>parseInt(e,10)}),era:He({matchPatterns:Zo,defaultMatchWidth:"wide",parsePatterns:ei,defaultParseWidth:"any"}),quarter:He({matchPatterns:ti,defaultMatchWidth:"wide",parsePatterns:ni,defaultParseWidth:"any",valueCallback:e=>e+1}),month:He({matchPatterns:ri,defaultMatchWidth:"wide",parsePatterns:oi,defaultParseWidth:"any"}),day:He({matchPatterns:ii,defaultMatchWidth:"wide",parsePatterns:si,defaultParseWidth:"any"}),dayPeriod:He({matchPatterns:ai,defaultMatchWidth:"any",parsePatterns:ci,defaultParseWidth:"any"})},ui={code:"en-US",formatDistance:Ro,formatLong:Fo,formatRelative:Io,localize:Ko,match:li,options:{weekStartsOn:0,firstWeekContainsDate:1}};function di(e){const t=U(e);return So(t,jo(t))+1}function fi(e){const t=U(e),n=+ut(t)-+To(t);return Math.round(n/mr)+1}function yr(e,t){var f,p,h,v;const n=U(e),r=n.getFullYear(),o=Mt(),i=(t==null?void 0:t.firstWeekContainsDate)??((p=(f=t==null?void 0:t.locale)==null?void 0:f.options)==null?void 0:p.firstWeekContainsDate)??o.firstWeekContainsDate??((v=(h=o.locale)==null?void 0:h.options)==null?void 0:v.firstWeekContainsDate)??1,s=ue(e,0);s.setFullYear(r+1,0,i),s.setHours(0,0,0,0);const a=Qe(s,t),c=ue(e,0);c.setFullYear(r,0,i),c.setHours(0,0,0,0);const u=Qe(c,t);return n.getTime()>=a.getTime()?r+1:n.getTime()>=u.getTime()?r:r-1}function hi(e,t){var a,c,u,f;const n=Mt(),r=(t==null?void 0:t.firstWeekContainsDate)??((c=(a=t==null?void 0:t.locale)==null?void 0:a.options)==null?void 0:c.firstWeekContainsDate)??n.firstWeekContainsDate??((f=(u=n.locale)==null?void 0:u.options)==null?void 0:f.firstWeekContainsDate)??1,o=yr(e,t),i=ue(e,0);return i.setFullYear(o,0,r),i.setHours(0,0,0,0),Qe(i,t)}function pi(e,t){const n=U(e),r=+Qe(n,t)-+hi(n,t);return Math.round(r/mr)+1}function R(e,t){const n=e<0?"-":"",r=Math.abs(e).toString().padStart(t,"0");return n+r}const pe={y(e,t){const n=e.getFullYear(),r=n>0?n:1-n;return R(t==="yy"?r%100:r,t.length)},M(e,t){const n=e.getMonth();return t==="M"?String(n+1):R(n+1,2)},d(e,t){return R(e.getDate(),t.length)},a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(e,t){return R(e.getHours()%12||12,t.length)},H(e,t){return R(e.getHours(),t.length)},m(e,t){return R(e.getMinutes(),t.length)},s(e,t){return R(e.getSeconds(),t.length)},S(e,t){const n=t.length,r=e.getMilliseconds(),o=Math.trunc(r*Math.pow(10,n-3));return R(o,t.length)}},Oe={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},_n={G:function(e,t,n){const r=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if(t==="yo"){const r=e.getFullYear(),o=r>0?r:1-r;return n.ordinalNumber(o,{unit:"year"})}return pe.y(e,t)},Y:function(e,t,n,r){const o=yr(e,r),i=o>0?o:1-o;if(t==="YY"){const s=i%100;return R(s,2)}return t==="Yo"?n.ordinalNumber(i,{unit:"year"}):R(i,t.length)},R:function(e,t){const n=gr(e);return R(n,t.length)},u:function(e,t){const n=e.getFullYear();return R(n,t.length)},Q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return R(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return R(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){const r=e.getMonth();switch(t){case"M":case"MM":return pe.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){const r=e.getMonth();switch(t){case"L":return String(r+1);case"LL":return R(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){const o=pi(e,r);return t==="wo"?n.ordinalNumber(o,{unit:"week"}):R(o,t.length)},I:function(e,t,n){const r=fi(e);return t==="Io"?n.ordinalNumber(r,{unit:"week"}):R(r,t.length)},d:function(e,t,n){return t==="do"?n.ordinalNumber(e.getDate(),{unit:"date"}):pe.d(e,t)},D:function(e,t,n){const r=di(e);return t==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):R(r,t.length)},E:function(e,t,n){const r=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){const o=e.getDay(),i=(o-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return R(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});case"eeee":default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){const o=e.getDay(),i=(o-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return R(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});case"cccc":default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(e,t,n){const r=e.getDay(),o=r===0?7:r;switch(t){case"i":return String(o);case"ii":return R(o,t.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){const o=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(e,t,n){const r=e.getHours();let o;switch(r===12?o=Oe.noon:r===0?o=Oe.midnight:o=r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(e,t,n){const r=e.getHours();let o;switch(r>=17?o=Oe.evening:r>=12?o=Oe.afternoon:r>=4?o=Oe.morning:o=Oe.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(e,t,n){if(t==="ho"){let r=e.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return pe.h(e,t)},H:function(e,t,n){return t==="Ho"?n.ordinalNumber(e.getHours(),{unit:"hour"}):pe.H(e,t)},K:function(e,t,n){const r=e.getHours()%12;return t==="Ko"?n.ordinalNumber(r,{unit:"hour"}):R(r,t.length)},k:function(e,t,n){let r=e.getHours();return r===0&&(r=24),t==="ko"?n.ordinalNumber(r,{unit:"hour"}):R(r,t.length)},m:function(e,t,n){return t==="mo"?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):pe.m(e,t)},s:function(e,t,n){return t==="so"?n.ordinalNumber(e.getSeconds(),{unit:"second"}):pe.s(e,t)},S:function(e,t){return pe.S(e,t)},X:function(e,t,n){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(t){case"X":return Dn(r);case"XXXX":case"XX":return be(r);case"XXXXX":case"XXX":default:return be(r,":")}},x:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"x":return Dn(r);case"xxxx":case"xx":return be(r);case"xxxxx":case"xxx":default:return be(r,":")}},O:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+Rn(r,":");case"OOOO":default:return"GMT"+be(r,":")}},z:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+Rn(r,":");case"zzzz":default:return"GMT"+be(r,":")}},t:function(e,t,n){const r=Math.trunc(e.getTime()/1e3);return R(r,t.length)},T:function(e,t,n){const r=e.getTime();return R(r,t.length)}};function Rn(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),o=Math.trunc(r/60),i=r%60;return i===0?n+String(o):n+String(o)+t+R(i,2)}function Dn(e,t){return e%60===0?(e>0?"-":"+")+R(Math.abs(e)/60,2):be(e,t)}function be(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),o=R(Math.trunc(r/60),2),i=R(r%60,2);return n+o+t+i}const An=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},xr=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},mi=(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],r=n[1],o=n[2];if(!o)return An(e,t);let i;switch(r){case"P":i=t.dateTime({width:"short"});break;case"PP":i=t.dateTime({width:"medium"});break;case"PPP":i=t.dateTime({width:"long"});break;case"PPPP":default:i=t.dateTime({width:"full"});break}return i.replace("{{date}}",An(r,t)).replace("{{time}}",xr(o,t))},gi={p:xr,P:mi},yi=/^D+$/,xi=/^Y+$/,bi=["D","DD","YY","YYYY"];function vi(e){return yi.test(e)}function wi(e){return xi.test(e)}function Ei(e,t,n){const r=Pi(e,t,n);if(console.warn(r),bi.includes(e))throw new RangeError(r)}function Pi(e,t,n){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const ki=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Si=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Ti=/^'([^]*?)'?$/,Mi=/''/g,Oi=/[a-zA-Z]/;function br(e,t,n){var f,p,h,v,y,m,k,w;const r=Mt(),o=(n==null?void 0:n.locale)??r.locale??ui,i=(n==null?void 0:n.firstWeekContainsDate)??((p=(f=n==null?void 0:n.locale)==null?void 0:f.options)==null?void 0:p.firstWeekContainsDate)??r.firstWeekContainsDate??((v=(h=r.locale)==null?void 0:h.options)==null?void 0:v.firstWeekContainsDate)??1,s=(n==null?void 0:n.weekStartsOn)??((m=(y=n==null?void 0:n.locale)==null?void 0:y.options)==null?void 0:m.weekStartsOn)??r.weekStartsOn??((w=(k=r.locale)==null?void 0:k.options)==null?void 0:w.weekStartsOn)??0,a=U(e);if(!Oo(a))throw new RangeError("Invalid time value");let c=t.match(Si).map(E=>{const g=E[0];if(g==="p"||g==="P"){const S=gi[g];return S(E,o.formatLong)}return E}).join("").match(ki).map(E=>{if(E==="''")return{isToken:!1,value:"'"};const g=E[0];if(g==="'")return{isToken:!1,value:$i(E)};if(_n[g])return{isToken:!0,value:E};if(g.match(Oi))throw new RangeError("Format string contains an unescaped latin alphabet character `"+g+"`");return{isToken:!1,value:E}});o.localize.preprocessor&&(c=o.localize.preprocessor(a,c));const u={firstWeekContainsDate:i,weekStartsOn:s,locale:o};return c.map(E=>{if(!E.isToken)return E.value;const g=E.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&wi(g)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&vi(g))&&Ei(g,t,String(e));const S=_n[g[0]];return S(a,g,o.localize,u)}).join("")}function $i(e){const t=e.match(Ti);return t?t[1].replace(Mi,"'"):e}function Ci(e,t){const n=U(e),r=U(t);return n.getTime()>r.getTime()}function ji(e,t){const n=U(e),r=U(t);return+n<+r}const _i=e=>d.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",...e},d.createElement("title",null,`
		solidleft
	`),d.createElement("path",{d:"M10.293 16.707c-0.187-0.188-0.292-0.442-0.292-0.707s0.105-0.519 0.292-0.707l10-10c0.092-0.098 0.202-0.177 0.325-0.232s0.255-0.084 0.389-0.086c0.134-0.002 0.268 0.022 0.392 0.073s0.238 0.125 0.333 0.22c0.095 0.095 0.17 0.208 0.22 0.333s0.075 0.258 0.073 0.392c-0.002 0.134-0.032 0.267-0.086 0.389s-0.133 0.233-0.232 0.325l-9.293 9.293 9.293 9.293c0.098 0.091 0.177 0.202 0.232 0.325s0.084 0.255 0.086 0.389c0.002 0.134-0.022 0.268-0.073 0.392s-0.125 0.238-0.22 0.333c-0.095 0.095-0.208 0.17-0.333 0.22s-0.258 0.075-0.392 0.073c-0.134-0.002-0.267-0.032-0.389-0.086s-0.233-0.134-0.325-0.232l-10-10z"})),Ri=e=>d.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",...e},d.createElement("title",null,`
		solid-right
	`),d.createElement("path",{d:"M21.707 16.707c0.187-0.188 0.292-0.442 0.292-0.707s-0.105-0.519-0.292-0.707l-10-10c-0.092-0.098-0.202-0.177-0.325-0.232s-0.255-0.084-0.389-0.086c-0.134-0.002-0.268 0.022-0.392 0.073s-0.238 0.125-0.333 0.22c-0.095 0.095-0.17 0.208-0.22 0.333s-0.075 0.258-0.073 0.392c0.002 0.134 0.032 0.267 0.086 0.389s0.133 0.233 0.232 0.325l9.293 9.293-9.293 9.293c-0.098 0.091-0.177 0.202-0.232 0.325s-0.084 0.255-0.086 0.389c-0.002 0.134 0.022 0.268 0.073 0.392s0.125 0.238 0.22 0.333c0.095 0.095 0.208 0.17 0.333 0.22s0.258 0.075 0.392 0.073c0.134-0.002 0.267-0.032 0.389-0.086s0.233-0.134 0.325-0.232l10-10z"})),Di=b.div`
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

`,Ai=b(_i)`

fill: ${e=>e.disabled?e.theme.colors.primary.bg:e.theme.colors.primary.accent};
  width: 14px;
  height: auto;


`,Wi=b(Ri)`

fill: ${e=>e.disabled?e.theme.colors.primary.bg:e.theme.colors.primary.accent};
  width: 14px;
  height: auto;


`,Fi=({selectedDate:e,setSelectedDate:t})=>{const n=new Date().getMonth(),r=new Date().getFullYear(),o=ji(e,Ft(new Date,-12)),i=Ci(e,new Date(r,n,1)),s=br(e,"MMMM"),a=e.getFullYear(),c=()=>{t(Ft(e,-1))},u=()=>{t(Ft(e,1))};return l.jsxs(Di,{children:[l.jsx("button",{onClick:c,disabled:o,children:l.jsx(Ai,{disabled:o})}),l.jsx("span",{children:`${s}, ${a}`}),l.jsx("button",{onClick:u,disabled:i,children:l.jsx(Wi,{disabled:i})})]})};function X(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function vr(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=vr(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function ge(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=vr(e))&&(r&&(r+=" "),r+=t);return r}function wr(e){return typeof e=="string"}function Ni(e,t,n){return e===void 0||wr(e)?t:x({},t,{ownerState:x({},t.ownerState,n)})}function Er(e,t=[]){if(e===void 0)return{};const n={};return Object.keys(e).filter(r=>r.match(/^on[A-Z]/)&&typeof e[r]=="function"&&!t.includes(r)).forEach(r=>{n[r]=e[r]}),n}function Ii(e,t,n){return typeof e=="function"?e(t,n):e}function Wn(e){if(e===void 0)return{};const t={};return Object.keys(e).filter(n=>!(n.match(/^on[A-Z]/)&&typeof e[n]=="function")).forEach(n=>{t[n]=e[n]}),t}function Bi(e){const{getSlotProps:t,additionalProps:n,externalSlotProps:r,externalForwardedProps:o,className:i}=e;if(!t){const v=ge(n==null?void 0:n.className,i,o==null?void 0:o.className,r==null?void 0:r.className),y=x({},n==null?void 0:n.style,o==null?void 0:o.style,r==null?void 0:r.style),m=x({},n,o,r);return v.length>0&&(m.className=v),Object.keys(y).length>0&&(m.style=y),{props:m,internalRef:void 0}}const s=Er(x({},o,r)),a=Wn(r),c=Wn(o),u=t(s),f=ge(u==null?void 0:u.className,n==null?void 0:n.className,i,o==null?void 0:o.className,r==null?void 0:r.className),p=x({},u==null?void 0:u.style,n==null?void 0:n.style,o==null?void 0:o.style,r==null?void 0:r.style),h=x({},u,n,c,a);return f.length>0&&(h.className=f),Object.keys(p).length>0&&(h.style=p),{props:h,internalRef:u.ref}}const zi=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function dt(e){var t;const{elementType:n,externalSlotProps:r,ownerState:o,skipResolvingSlotProps:i=!1}=e,s=X(e,zi),a=i?{}:Ii(r,o),{props:c,internalRef:u}=Bi(x({},s,{externalSlotProps:a})),f=Ee(u,a==null?void 0:a.ref,(t=e.additionalProps)==null?void 0:t.ref);return Ni(n,x({},c,{ref:f}),o)}var et={},Pr={exports:{}};(function(e){function t(n){return n&&n.__esModule?n:{default:n}}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(Pr);var kr=Pr.exports;const Li=fe(Kr);var It={exports:{}},Fn;function Hi(){return Fn||(Fn=1,function(e){function t(n,r){if(n==null)return{};var o={},i=Object.keys(n),s,a;for(a=0;a<i.length;a++)s=i[a],!(r.indexOf(s)>=0)&&(o[s]=n[s]);return o}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}(It)),It.exports}let Gt;typeof document=="object"&&(Gt=Xr({key:"css",prepend:!0}));function Yi(e){const{injectFirst:t,children:n}=e;return t&&Gt?l.jsx(Ur,{value:Gt,children:n}):n}function qi(e){return e==null||Object.keys(e).length===0}function Gi(e){const{styles:t,defaultTheme:n={}}=e,r=typeof t=="function"?o=>t(qi(o)?n:o):t;return l.jsx(wo,{styles:r})}/**
 * @mui/styled-engine v5.15.14
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Ki(e,t){return Vr(e,t)}const Ui=(e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))},Xi=Object.freeze(Object.defineProperty({__proto__:null,GlobalStyles:Gi,StyledEngineProvider:Yi,ThemeContext:Qt,css:pr,default:Ki,internal_processStyles:Ui,keyframes:Eo},Symbol.toStringTag,{value:"Module"})),Vi=fe(Xi),Qi=fe(eo),Ji=fe(ao),Zi=fe(so),es=["values","unit","step"],ts=e=>{const t=Object.keys(e).map(n=>({key:n,val:e[n]}))||[];return t.sort((n,r)=>n.val-r.val),t.reduce((n,r)=>x({},n,{[r.key]:r.val}),{})};function Sr(e){const{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5}=e,o=X(e,es),i=ts(t),s=Object.keys(i);function a(h){return`@media (min-width:${typeof t[h]=="number"?t[h]:h}${n})`}function c(h){return`@media (max-width:${(typeof t[h]=="number"?t[h]:h)-r/100}${n})`}function u(h,v){const y=s.indexOf(v);return`@media (min-width:${typeof t[h]=="number"?t[h]:h}${n}) and (max-width:${(y!==-1&&typeof t[s[y]]=="number"?t[s[y]]:v)-r/100}${n})`}function f(h){return s.indexOf(h)+1<s.length?u(h,s[s.indexOf(h)+1]):a(h)}function p(h){const v=s.indexOf(h);return v===0?a(s[1]):v===s.length-1?c(s[v]):u(h,s[s.indexOf(h)+1]).replace("@media","@media not all and")}return x({keys:s,values:i,up:a,down:c,between:u,only:f,not:p,unit:n},o)}const ns={borderRadius:4},rs=ns;function Ke(e,t){return t?ce(e,t,{clone:!1}):e}const rn={xs:0,sm:600,md:900,lg:1200,xl:1536},Nn={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${rn[e]}px)`};function de(e,t,n){const r=e.theme||{};if(Array.isArray(t)){const i=r.breakpoints||Nn;return t.reduce((s,a,c)=>(s[i.up(i.keys[c])]=n(t[c]),s),{})}if(typeof t=="object"){const i=r.breakpoints||Nn;return Object.keys(t).reduce((s,a)=>{if(Object.keys(i.values||rn).indexOf(a)!==-1){const c=i.up(a);s[c]=n(t[a],a)}else{const c=a;s[c]=t[c]}return s},{})}return n(t)}function os(e={}){var t;return((t=e.keys)==null?void 0:t.reduce((r,o)=>{const i=e.up(o);return r[i]={},r},{}))||{}}function is(e,t){return e.reduce((n,r)=>{const o=n[r];return(!o||Object.keys(o).length===0)&&delete n[r],n},t)}function Ot(e,t,n=!0){if(!t||typeof t!="string")return null;if(e&&e.vars&&n){const r=`vars.${t}`.split(".").reduce((o,i)=>o&&o[i]?o[i]:null,e);if(r!=null)return r}return t.split(".").reduce((r,o)=>r&&r[o]!=null?r[o]:null,e)}function ft(e,t,n,r=n){let o;return typeof e=="function"?o=e(n):Array.isArray(e)?o=e[n]||r:o=Ot(e,n)||r,t&&(o=t(o,r,e)),o}function H(e){const{prop:t,cssProperty:n=e.prop,themeKey:r,transform:o}=e,i=s=>{if(s[t]==null)return null;const a=s[t],c=s.theme,u=Ot(c,r)||{};return de(s,a,p=>{let h=ft(u,o,p);return p===h&&typeof p=="string"&&(h=ft(u,o,`${t}${p==="default"?"":tn(p)}`,p)),n===!1?h:{[n]:h}})};return i.propTypes={},i.filterProps=[t],i}function ss(e){const t={};return n=>(t[n]===void 0&&(t[n]=e(n)),t[n])}const as={m:"margin",p:"padding"},cs={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},In={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},ls=ss(e=>{if(e.length>2)if(In[e])e=In[e];else return[e];const[t,n]=e.split(""),r=as[t],o=cs[n]||"";return Array.isArray(o)?o.map(i=>r+i):[r+o]}),on=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],sn=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...on,...sn];function tt(e,t,n,r){var o;const i=(o=Ot(e,t,!1))!=null?o:n;return typeof i=="number"?s=>typeof s=="string"?s:i*s:Array.isArray(i)?s=>typeof s=="string"?s:i[s]:typeof i=="function"?i:()=>{}}function Tr(e){return tt(e,"spacing",8)}function nt(e,t){if(typeof t=="string"||t==null)return t;const n=Math.abs(t),r=e(n);return t>=0?r:typeof r=="number"?-r:`-${r}`}function us(e,t){return n=>e.reduce((r,o)=>(r[o]=nt(t,n),r),{})}function ds(e,t,n,r){if(t.indexOf(n)===-1)return null;const o=ls(n),i=us(o,r),s=e[n];return de(e,s,i)}function Mr(e,t){const n=Tr(e.theme);return Object.keys(e).map(r=>ds(e,t,r,n)).reduce(Ke,{})}function B(e){return Mr(e,on)}B.propTypes={};B.filterProps=on;function z(e){return Mr(e,sn)}z.propTypes={};z.filterProps=sn;function fs(e=8){if(e.mui)return e;const t=Tr({spacing:e}),n=(...r)=>(r.length===0?[1]:r).map(i=>{const s=t(i);return typeof s=="number"?`${s}px`:s}).join(" ");return n.mui=!0,n}function $t(...e){const t=e.reduce((r,o)=>(o.filterProps.forEach(i=>{r[i]=o}),r),{}),n=r=>Object.keys(r).reduce((o,i)=>t[i]?Ke(o,t[i](r)):o,{});return n.propTypes={},n.filterProps=e.reduce((r,o)=>r.concat(o.filterProps),[]),n}function te(e){return typeof e!="number"?e:`${e}px solid`}function oe(e,t){return H({prop:e,themeKey:"borders",transform:t})}const hs=oe("border",te),ps=oe("borderTop",te),ms=oe("borderRight",te),gs=oe("borderBottom",te),ys=oe("borderLeft",te),xs=oe("borderColor"),bs=oe("borderTopColor"),vs=oe("borderRightColor"),ws=oe("borderBottomColor"),Es=oe("borderLeftColor"),Ps=oe("outline",te),ks=oe("outlineColor"),Ct=e=>{if(e.borderRadius!==void 0&&e.borderRadius!==null){const t=tt(e.theme,"shape.borderRadius",4),n=r=>({borderRadius:nt(t,r)});return de(e,e.borderRadius,n)}return null};Ct.propTypes={};Ct.filterProps=["borderRadius"];$t(hs,ps,ms,gs,ys,xs,bs,vs,ws,Es,Ct,Ps,ks);const jt=e=>{if(e.gap!==void 0&&e.gap!==null){const t=tt(e.theme,"spacing",8),n=r=>({gap:nt(t,r)});return de(e,e.gap,n)}return null};jt.propTypes={};jt.filterProps=["gap"];const _t=e=>{if(e.columnGap!==void 0&&e.columnGap!==null){const t=tt(e.theme,"spacing",8),n=r=>({columnGap:nt(t,r)});return de(e,e.columnGap,n)}return null};_t.propTypes={};_t.filterProps=["columnGap"];const Rt=e=>{if(e.rowGap!==void 0&&e.rowGap!==null){const t=tt(e.theme,"spacing",8),n=r=>({rowGap:nt(t,r)});return de(e,e.rowGap,n)}return null};Rt.propTypes={};Rt.filterProps=["rowGap"];const Ss=H({prop:"gridColumn"}),Ts=H({prop:"gridRow"}),Ms=H({prop:"gridAutoFlow"}),Os=H({prop:"gridAutoColumns"}),$s=H({prop:"gridAutoRows"}),Cs=H({prop:"gridTemplateColumns"}),js=H({prop:"gridTemplateRows"}),_s=H({prop:"gridTemplateAreas"}),Rs=H({prop:"gridArea"});$t(jt,_t,Rt,Ss,Ts,Ms,Os,$s,Cs,js,_s,Rs);function We(e,t){return t==="grey"?t:e}const Ds=H({prop:"color",themeKey:"palette",transform:We}),As=H({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:We}),Ws=H({prop:"backgroundColor",themeKey:"palette",transform:We});$t(Ds,As,Ws);function J(e){return e<=1&&e!==0?`${e*100}%`:e}const Fs=H({prop:"width",transform:J}),an=e=>{if(e.maxWidth!==void 0&&e.maxWidth!==null){const t=n=>{var r,o;const i=((r=e.theme)==null||(r=r.breakpoints)==null||(r=r.values)==null?void 0:r[n])||rn[n];return i?((o=e.theme)==null||(o=o.breakpoints)==null?void 0:o.unit)!=="px"?{maxWidth:`${i}${e.theme.breakpoints.unit}`}:{maxWidth:i}:{maxWidth:J(n)}};return de(e,e.maxWidth,t)}return null};an.filterProps=["maxWidth"];const Ns=H({prop:"minWidth",transform:J}),Is=H({prop:"height",transform:J}),Bs=H({prop:"maxHeight",transform:J}),zs=H({prop:"minHeight",transform:J});H({prop:"size",cssProperty:"width",transform:J});H({prop:"size",cssProperty:"height",transform:J});const Ls=H({prop:"boxSizing"});$t(Fs,an,Ns,Is,Bs,zs,Ls);const Hs={border:{themeKey:"borders",transform:te},borderTop:{themeKey:"borders",transform:te},borderRight:{themeKey:"borders",transform:te},borderBottom:{themeKey:"borders",transform:te},borderLeft:{themeKey:"borders",transform:te},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:te},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:Ct},color:{themeKey:"palette",transform:We},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:We},backgroundColor:{themeKey:"palette",transform:We},p:{style:z},pt:{style:z},pr:{style:z},pb:{style:z},pl:{style:z},px:{style:z},py:{style:z},padding:{style:z},paddingTop:{style:z},paddingRight:{style:z},paddingBottom:{style:z},paddingLeft:{style:z},paddingX:{style:z},paddingY:{style:z},paddingInline:{style:z},paddingInlineStart:{style:z},paddingInlineEnd:{style:z},paddingBlock:{style:z},paddingBlockStart:{style:z},paddingBlockEnd:{style:z},m:{style:B},mt:{style:B},mr:{style:B},mb:{style:B},ml:{style:B},mx:{style:B},my:{style:B},margin:{style:B},marginTop:{style:B},marginRight:{style:B},marginBottom:{style:B},marginLeft:{style:B},marginX:{style:B},marginY:{style:B},marginInline:{style:B},marginInlineStart:{style:B},marginInlineEnd:{style:B},marginBlock:{style:B},marginBlockStart:{style:B},marginBlockEnd:{style:B},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:jt},rowGap:{style:Rt},columnGap:{style:_t},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:J},maxWidth:{style:an},minWidth:{transform:J},height:{transform:J},maxHeight:{transform:J},minHeight:{transform:J},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}},rt=Hs;function Ys(...e){const t=e.reduce((r,o)=>r.concat(Object.keys(o)),[]),n=new Set(t);return e.every(r=>n.size===Object.keys(r).length)}function qs(e,t){return typeof e=="function"?e(t):e}function Or(){function e(n,r,o,i){const s={[n]:r,theme:o},a=i[n];if(!a)return{[n]:r};const{cssProperty:c=n,themeKey:u,transform:f,style:p}=a;if(r==null)return null;if(u==="typography"&&r==="inherit")return{[n]:r};const h=Ot(o,u)||{};return p?p(s):de(s,r,y=>{let m=ft(h,f,y);return y===m&&typeof y=="string"&&(m=ft(h,f,`${n}${y==="default"?"":tn(y)}`,y)),c===!1?m:{[c]:m}})}function t(n){var r;const{sx:o,theme:i={}}=n||{};if(!o)return null;const s=(r=i.unstable_sxConfig)!=null?r:rt;function a(c){let u=c;if(typeof c=="function")u=c(i);else if(typeof c!="object")return c;if(!u)return null;const f=os(i.breakpoints),p=Object.keys(f);let h=f;return Object.keys(u).forEach(v=>{const y=qs(u[v],i);if(y!=null)if(typeof y=="object")if(s[v])h=Ke(h,e(v,y,i,s));else{const m=de({theme:i},y,k=>({[v]:k}));Ys(m,y)?h[v]=t({sx:y,theme:i}):h=Ke(h,m)}else h=Ke(h,e(v,y,i,s))}),is(p,h)}return Array.isArray(o)?o.map(a):a(o)}return t}const $r=Or();$r.filterProps=["sx"];const cn=$r;function Cr(e,t){const n=this;return n.vars&&typeof n.getColorSchemeSelector=="function"?{[n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/,"*:where($1)")]:t}:n.palette.mode===e?t:{}}const Gs=["breakpoints","palette","spacing","shape"];function ln(e={},...t){const{breakpoints:n={},palette:r={},spacing:o,shape:i={}}=e,s=X(e,Gs),a=Sr(n),c=fs(o);let u=ce({breakpoints:a,direction:"ltr",components:{},palette:x({mode:"light"},r),spacing:c,shape:x({},rs,i)},s);return u.applyStyles=Cr,u=t.reduce((f,p)=>ce(f,p),u),u.unstable_sxConfig=x({},rt,s==null?void 0:s.unstable_sxConfig),u.unstable_sx=function(p){return cn({sx:p,theme:this})},u}const Ks=Object.freeze(Object.defineProperty({__proto__:null,default:ln,private_createBreakpoints:Sr,unstable_applyStyles:Cr},Symbol.toStringTag,{value:"Module"})),Us=fe(Ks),Xs=["sx"],Vs=e=>{var t,n;const r={systemProps:{},otherProps:{}},o=(t=e==null||(n=e.theme)==null?void 0:n.unstable_sxConfig)!=null?t:rt;return Object.keys(e).forEach(i=>{o[i]?r.systemProps[i]=e[i]:r.otherProps[i]=e[i]}),r};function Qs(e){const{sx:t}=e,n=X(e,Xs),{systemProps:r,otherProps:o}=Vs(n);let i;return Array.isArray(t)?i=[r,...t]:typeof t=="function"?i=(...s)=>{const a=t(...s);return me(a)?x({},r,a):r}:i=x({},r,t),x({},o,{sx:i})}const Js=Object.freeze(Object.defineProperty({__proto__:null,default:cn,extendSxProp:Qs,unstable_createStyleFunctionSx:Or,unstable_defaultSxConfig:rt},Symbol.toStringTag,{value:"Module"})),Zs=fe(Js);var Fe=kr;Object.defineProperty(et,"__esModule",{value:!0});var ea=et.default=ha;et.shouldForwardProp=ct;et.systemDefaultTheme=void 0;var ee=Fe(Li),Kt=Fe(Hi()),Bn=aa(Vi),ta=Qi;Fe(Ji);Fe(Zi);var na=Fe(Us),ra=Fe(Zs);const oa=["ownerState"],ia=["variants"],sa=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function jr(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(jr=function(r){return r?n:t})(e)}function aa(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=jr(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(i!=="default"&&Object.prototype.hasOwnProperty.call(e,i)){var s=o?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}function ca(e){return Object.keys(e).length===0}function la(e){return typeof e=="string"&&e.charCodeAt(0)>96}function ct(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const ua=et.systemDefaultTheme=(0,na.default)(),da=e=>e&&e.charAt(0).toLowerCase()+e.slice(1);function at({defaultTheme:e,theme:t,themeId:n}){return ca(t)?e:t[n]||t}function fa(e){return e?(t,n)=>n[e]:null}function lt(e,t){let{ownerState:n}=t,r=(0,Kt.default)(t,oa);const o=typeof e=="function"?e((0,ee.default)({ownerState:n},r)):e;if(Array.isArray(o))return o.flatMap(i=>lt(i,(0,ee.default)({ownerState:n},r)));if(o&&typeof o=="object"&&Array.isArray(o.variants)){const{variants:i=[]}=o;let a=(0,Kt.default)(o,ia);return i.forEach(c=>{let u=!0;typeof c.props=="function"?u=c.props((0,ee.default)({ownerState:n},r,n)):Object.keys(c.props).forEach(f=>{(n==null?void 0:n[f])!==c.props[f]&&r[f]!==c.props[f]&&(u=!1)}),u&&(Array.isArray(a)||(a=[a]),a.push(typeof c.style=="function"?c.style((0,ee.default)({ownerState:n},r,n)):c.style))}),a}return o}function ha(e={}){const{themeId:t,defaultTheme:n=ua,rootShouldForwardProp:r=ct,slotShouldForwardProp:o=ct}=e,i=s=>(0,ra.default)((0,ee.default)({},s,{theme:at((0,ee.default)({},s,{defaultTheme:n,themeId:t}))}));return i.__mui_systemSx=!0,(s,a={})=>{(0,Bn.internal_processStyles)(s,P=>P.filter(C=>!(C!=null&&C.__mui_systemSx)));const{name:c,slot:u,skipVariantsResolver:f,skipSx:p,overridesResolver:h=fa(da(u))}=a,v=(0,Kt.default)(a,sa),y=f!==void 0?f:u&&u!=="Root"&&u!=="root"||!1,m=p||!1;let k,w=ct;u==="Root"||u==="root"?w=r:u?w=o:la(s)&&(w=void 0);const E=(0,Bn.default)(s,(0,ee.default)({shouldForwardProp:w,label:k},v)),g=P=>typeof P=="function"&&P.__emotion_real!==P||(0,ta.isPlainObject)(P)?C=>lt(P,(0,ee.default)({},C,{theme:at({theme:C.theme,defaultTheme:n,themeId:t})})):P,S=(P,...C)=>{let j=g(P);const W=C?C.map(g):[];c&&h&&W.push(N=>{const _=at((0,ee.default)({},N,{defaultTheme:n,themeId:t}));if(!_.components||!_.components[c]||!_.components[c].styleOverrides)return null;const I=_.components[c].styleOverrides,$={};return Object.entries(I).forEach(([T,M])=>{$[T]=lt(M,(0,ee.default)({},N,{theme:_}))}),h(N,$)}),c&&!y&&W.push(N=>{var _;const I=at((0,ee.default)({},N,{defaultTheme:n,themeId:t})),$=I==null||(_=I.components)==null||(_=_[c])==null?void 0:_.variants;return lt({variants:$},(0,ee.default)({},N,{theme:I}))}),m||W.push(i);const G=W.length-C.length;if(Array.isArray(P)&&G>0){const N=new Array(G).fill("");j=[...P,...N],j.raw=[...P.raw,...N]}const L=E(j,...W);return s.muiName&&(L.muiName=s.muiName),L};return E.withConfig&&(S.withConfig=E.withConfig),S}}function pa(e,t){return x({toolbar:{minHeight:56,[e.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[e.up("sm")]:{minHeight:64}}},t)}var Y={};const ma=fe(to),ga=fe(vo);var _r=kr;Object.defineProperty(Y,"__esModule",{value:!0});var zn=Y.alpha=Wr;Y.blend=$a;Y.colorChannel=void 0;var ya=Y.darken=dn;Y.decomposeColor=ne;Y.emphasize=Oa;var xa=Y.getContrastRatio=ka;Y.getLuminance=ht;Y.hexToRgb=Rr;Y.hslToRgb=Ar;var ba=Y.lighten=fn;Y.private_safeAlpha=Sa;Y.private_safeColorChannel=void 0;Y.private_safeDarken=Ta;Y.private_safeEmphasize=Fr;Y.private_safeLighten=Ma;Y.recomposeColor=Ne;Y.rgbToHex=Pa;var Ln=_r(ma),va=_r(ga);function un(e,t=0,n=1){return(0,va.default)(e,t,n)}function Rr(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let n=e.match(t);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,o)=>o<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function wa(e){const t=e.toString(16);return t.length===1?`0${t}`:t}function ne(e){if(e.type)return e;if(e.charAt(0)==="#")return ne(Rr(e));const t=e.indexOf("("),n=e.substring(0,t);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error((0,Ln.default)(9,e));let r=e.substring(t+1,e.length-1),o;if(n==="color"){if(r=r.split(" "),o=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(o)===-1)throw new Error((0,Ln.default)(10,o))}else r=r.split(",");return r=r.map(i=>parseFloat(i)),{type:n,values:r,colorSpace:o}}const Dr=e=>{const t=ne(e);return t.values.slice(0,3).map((n,r)=>t.type.indexOf("hsl")!==-1&&r!==0?`${n}%`:n).join(" ")};Y.colorChannel=Dr;const Ea=(e,t)=>{try{return Dr(e)}catch{return e}};Y.private_safeColorChannel=Ea;function Ne(e){const{type:t,colorSpace:n}=e;let{values:r}=e;return t.indexOf("rgb")!==-1?r=r.map((o,i)=>i<3?parseInt(o,10):o):t.indexOf("hsl")!==-1&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),t.indexOf("color")!==-1?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${t}(${r})`}function Pa(e){if(e.indexOf("#")===0)return e;const{values:t}=ne(e);return`#${t.map((n,r)=>wa(r===3?Math.round(255*n):n)).join("")}`}function Ar(e){e=ne(e);const{values:t}=e,n=t[0],r=t[1]/100,o=t[2]/100,i=r*Math.min(o,1-o),s=(u,f=(u+n/30)%12)=>o-i*Math.max(Math.min(f-3,9-f,1),-1);let a="rgb";const c=[Math.round(s(0)*255),Math.round(s(8)*255),Math.round(s(4)*255)];return e.type==="hsla"&&(a+="a",c.push(t[3])),Ne({type:a,values:c})}function ht(e){e=ne(e);let t=e.type==="hsl"||e.type==="hsla"?ne(Ar(e)).values:e.values;return t=t.map(n=>(e.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function ka(e,t){const n=ht(e),r=ht(t);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function Wr(e,t){return e=ne(e),t=un(t),(e.type==="rgb"||e.type==="hsl")&&(e.type+="a"),e.type==="color"?e.values[3]=`/${t}`:e.values[3]=t,Ne(e)}function Sa(e,t,n){try{return Wr(e,t)}catch{return e}}function dn(e,t){if(e=ne(e),t=un(t),e.type.indexOf("hsl")!==-1)e.values[2]*=1-t;else if(e.type.indexOf("rgb")!==-1||e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]*=1-t;return Ne(e)}function Ta(e,t,n){try{return dn(e,t)}catch{return e}}function fn(e,t){if(e=ne(e),t=un(t),e.type.indexOf("hsl")!==-1)e.values[2]+=(100-e.values[2])*t;else if(e.type.indexOf("rgb")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;else if(e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(1-e.values[n])*t;return Ne(e)}function Ma(e,t,n){try{return fn(e,t)}catch{return e}}function Oa(e,t=.15){return ht(e)>.5?dn(e,t):fn(e,t)}function Fr(e,t,n){try{return Fr(e,t)}catch{return e}}function $a(e,t,n,r=1){const o=(c,u)=>Math.round((c**(1/r)*(1-n)+u**(1/r)*n)**r),i=ne(e),s=ne(t),a=[o(i.values[0],s.values[0]),o(i.values[1],s.values[1]),o(i.values[2],s.values[2])];return Ne({type:"rgb",values:a})}const Ca={black:"#000",white:"#fff"},Je=Ca,ja={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},_a=ja,Ra={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},$e=Ra,Da={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},Ce=Da,Aa={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},Ye=Aa,Wa={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},je=Wa,Fa={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},_e=Fa,Na={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},Re=Na,Ia=["mode","contrastThreshold","tonalOffset"],Hn={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:Je.white,default:Je.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},Bt={text:{primary:Je.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:Je.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function Yn(e,t,n,r){const o=r.light||r,i=r.dark||r*1.5;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:t==="light"?e.light=ba(e.main,o):t==="dark"&&(e.dark=ya(e.main,i)))}function Ba(e="light"){return e==="dark"?{main:je[200],light:je[50],dark:je[400]}:{main:je[700],light:je[400],dark:je[800]}}function za(e="light"){return e==="dark"?{main:$e[200],light:$e[50],dark:$e[400]}:{main:$e[500],light:$e[300],dark:$e[700]}}function La(e="light"){return e==="dark"?{main:Ce[500],light:Ce[300],dark:Ce[700]}:{main:Ce[700],light:Ce[400],dark:Ce[800]}}function Ha(e="light"){return e==="dark"?{main:_e[400],light:_e[300],dark:_e[700]}:{main:_e[700],light:_e[500],dark:_e[900]}}function Ya(e="light"){return e==="dark"?{main:Re[400],light:Re[300],dark:Re[700]}:{main:Re[800],light:Re[500],dark:Re[900]}}function qa(e="light"){return e==="dark"?{main:Ye[400],light:Ye[300],dark:Ye[700]}:{main:"#ed6c02",light:Ye[500],dark:Ye[900]}}function Ga(e){const{mode:t="light",contrastThreshold:n=3,tonalOffset:r=.2}=e,o=X(e,Ia),i=e.primary||Ba(t),s=e.secondary||za(t),a=e.error||La(t),c=e.info||Ha(t),u=e.success||Ya(t),f=e.warning||qa(t);function p(m){return xa(m,Bt.text.primary)>=n?Bt.text.primary:Hn.text.primary}const h=({color:m,name:k,mainShade:w=500,lightShade:E=300,darkShade:g=700})=>{if(m=x({},m),!m.main&&m[w]&&(m.main=m[w]),!m.hasOwnProperty("main"))throw new Error(Xe(11,k?` (${k})`:"",w));if(typeof m.main!="string")throw new Error(Xe(12,k?` (${k})`:"",JSON.stringify(m.main)));return Yn(m,"light",E,r),Yn(m,"dark",g,r),m.contrastText||(m.contrastText=p(m.main)),m},v={dark:Bt,light:Hn};return ce(x({common:x({},Je),mode:t,primary:h({color:i,name:"primary"}),secondary:h({color:s,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:h({color:a,name:"error"}),warning:h({color:f,name:"warning"}),info:h({color:c,name:"info"}),success:h({color:u,name:"success"}),grey:_a,contrastThreshold:n,getContrastText:p,augmentColor:h,tonalOffset:r},v[t]),o)}const Ka=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function Ua(e){return Math.round(e*1e5)/1e5}const qn={textTransform:"uppercase"},Gn='"Roboto", "Helvetica", "Arial", sans-serif';function Xa(e,t){const n=typeof t=="function"?t(e):t,{fontFamily:r=Gn,fontSize:o=14,fontWeightLight:i=300,fontWeightRegular:s=400,fontWeightMedium:a=500,fontWeightBold:c=700,htmlFontSize:u=16,allVariants:f,pxToRem:p}=n,h=X(n,Ka),v=o/14,y=p||(w=>`${w/u*v}rem`),m=(w,E,g,S,P)=>x({fontFamily:r,fontWeight:w,fontSize:y(E),lineHeight:g},r===Gn?{letterSpacing:`${Ua(S/E)}em`}:{},P,f),k={h1:m(i,96,1.167,-1.5),h2:m(i,60,1.2,-.5),h3:m(s,48,1.167,0),h4:m(s,34,1.235,.25),h5:m(s,24,1.334,0),h6:m(a,20,1.6,.15),subtitle1:m(s,16,1.75,.15),subtitle2:m(a,14,1.57,.1),body1:m(s,16,1.5,.15),body2:m(s,14,1.43,.15),button:m(a,14,1.75,.4,qn),caption:m(s,12,1.66,.4),overline:m(s,12,2.66,1,qn),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return ce(x({htmlFontSize:u,pxToRem:y,fontFamily:r,fontSize:o,fontWeightLight:i,fontWeightRegular:s,fontWeightMedium:a,fontWeightBold:c},k),h,{clone:!1})}const Va=.2,Qa=.14,Ja=.12;function F(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Va})`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Qa})`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Ja})`].join(",")}const Za=["none",F(0,2,1,-1,0,1,1,0,0,1,3,0),F(0,3,1,-2,0,2,2,0,0,1,5,0),F(0,3,3,-2,0,3,4,0,0,1,8,0),F(0,2,4,-1,0,4,5,0,0,1,10,0),F(0,3,5,-1,0,5,8,0,0,1,14,0),F(0,3,5,-1,0,6,10,0,0,1,18,0),F(0,4,5,-2,0,7,10,1,0,2,16,1),F(0,5,5,-3,0,8,10,1,0,3,14,2),F(0,5,6,-3,0,9,12,1,0,3,16,2),F(0,6,6,-3,0,10,14,1,0,4,18,3),F(0,6,7,-4,0,11,15,1,0,4,20,3),F(0,7,8,-4,0,12,17,2,0,5,22,4),F(0,7,8,-4,0,13,19,2,0,5,24,4),F(0,7,9,-4,0,14,21,2,0,5,26,4),F(0,8,9,-5,0,15,22,2,0,6,28,5),F(0,8,10,-5,0,16,24,2,0,6,30,5),F(0,8,11,-5,0,17,26,2,0,6,32,5),F(0,9,11,-5,0,18,28,2,0,7,34,6),F(0,9,12,-6,0,19,29,2,0,7,36,6),F(0,10,13,-6,0,20,31,3,0,8,38,7),F(0,10,13,-6,0,21,33,3,0,8,40,7),F(0,10,14,-6,0,22,35,3,0,8,42,7),F(0,11,14,-7,0,23,36,3,0,9,44,8),F(0,11,15,-7,0,24,38,3,0,9,46,8)],ec=Za,tc=["duration","easing","delay"],nc={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},rc={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function Kn(e){return`${Math.round(e)}ms`}function oc(e){if(!e)return 0;const t=e/36;return Math.round((4+15*t**.25+t/5)*10)}function ic(e){const t=x({},nc,e.easing),n=x({},rc,e.duration);return x({getAutoHeightDuration:oc,create:(o=["all"],i={})=>{const{duration:s=n.standard,easing:a=t.easeInOut,delay:c=0}=i;return X(i,tc),(Array.isArray(o)?o:[o]).map(u=>`${u} ${typeof s=="string"?s:Kn(s)} ${a} ${typeof c=="string"?c:Kn(c)}`).join(",")}},e,{easing:t,duration:n})}const sc={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},ac=sc,cc=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function lc(e={},...t){const{mixins:n={},palette:r={},transitions:o={},typography:i={}}=e,s=X(e,cc);if(e.vars)throw new Error(Xe(18));const a=Ga(r),c=ln(e);let u=ce(c,{mixins:pa(c.breakpoints,n),palette:a,shadows:ec.slice(),typography:Xa(a,i),transitions:ic(o),zIndex:x({},ac)});return u=ce(u,s),u=t.reduce((f,p)=>ce(f,p),u),u.unstable_sxConfig=x({},rt,s==null?void 0:s.unstable_sxConfig),u.unstable_sx=function(p){return cn({sx:p,theme:this})},u}const uc=lc(),hn=uc,pn="$$material";function dc(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const fc=e=>dc(e)&&e!=="classes",hc=fc,pc=ea({themeId:pn,defaultTheme:hn,rootShouldForwardProp:hc}),Ie=pc;function mc(e){const{theme:t,name:n,props:r}=e;return!t||!t.components||!t.components[n]||!t.components[n].defaultProps?r:hr(t.components[n].defaultProps,r)}function gc(e){return Object.keys(e).length===0}function yc(e=null){const t=d.useContext(Qt);return!t||gc(t)?e:t}const xc=ln();function Nr(e=xc){return yc(e)}function bc({props:e,name:t,defaultTheme:n,themeId:r}){let o=Nr(n);return r&&(o=o[r]||o),mc({theme:o,name:t,props:e})}function Dt({props:e,name:t}){return bc({props:e,name:t,defaultTheme:hn,themeId:pn})}function Ut(e,t){return Ut=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},Ut(e,t)}function vc(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Ut(e,t)}const Un={disabled:!1},Ir=qe.createContext(null);var wc=function(t){return t.scrollTop},Ge="unmounted",ve="exited",we="entering",Ae="entered",Xt="exiting",he=function(e){vc(t,e);function t(r,o){var i;i=e.call(this,r,o)||this;var s=o,a=s&&!s.isMounting?r.enter:r.appear,c;return i.appearStatus=null,r.in?a?(c=ve,i.appearStatus=we):c=Ae:r.unmountOnExit||r.mountOnEnter?c=Ge:c=ve,i.state={status:c},i.nextCallback=null,i}t.getDerivedStateFromProps=function(o,i){var s=o.in;return s&&i.status===Ge?{status:ve}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(o){var i=null;if(o!==this.props){var s=this.state.status;this.props.in?s!==we&&s!==Ae&&(i=we):(s===we||s===Ae)&&(i=Xt)}this.updateStatus(!1,i)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var o=this.props.timeout,i,s,a;return i=s=a=o,o!=null&&typeof o!="number"&&(i=o.exit,s=o.enter,a=o.appear!==void 0?o.appear:s),{exit:i,enter:s,appear:a}},n.updateStatus=function(o,i){if(o===void 0&&(o=!1),i!==null)if(this.cancelNextCallback(),i===we){if(this.props.unmountOnExit||this.props.mountOnEnter){var s=this.props.nodeRef?this.props.nodeRef.current:st.findDOMNode(this);s&&wc(s)}this.performEnter(o)}else this.performExit();else this.props.unmountOnExit&&this.state.status===ve&&this.setState({status:Ge})},n.performEnter=function(o){var i=this,s=this.props.enter,a=this.context?this.context.isMounting:o,c=this.props.nodeRef?[a]:[st.findDOMNode(this),a],u=c[0],f=c[1],p=this.getTimeouts(),h=a?p.appear:p.enter;if(!o&&!s||Un.disabled){this.safeSetState({status:Ae},function(){i.props.onEntered(u)});return}this.props.onEnter(u,f),this.safeSetState({status:we},function(){i.props.onEntering(u,f),i.onTransitionEnd(h,function(){i.safeSetState({status:Ae},function(){i.props.onEntered(u,f)})})})},n.performExit=function(){var o=this,i=this.props.exit,s=this.getTimeouts(),a=this.props.nodeRef?void 0:st.findDOMNode(this);if(!i||Un.disabled){this.safeSetState({status:ve},function(){o.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:Xt},function(){o.props.onExiting(a),o.onTransitionEnd(s.exit,function(){o.safeSetState({status:ve},function(){o.props.onExited(a)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(o,i){i=this.setNextCallback(i),this.setState(o,i)},n.setNextCallback=function(o){var i=this,s=!0;return this.nextCallback=function(a){s&&(s=!1,i.nextCallback=null,o(a))},this.nextCallback.cancel=function(){s=!1},this.nextCallback},n.onTransitionEnd=function(o,i){this.setNextCallback(i);var s=this.props.nodeRef?this.props.nodeRef.current:st.findDOMNode(this),a=o==null&&!this.props.addEndListener;if(!s||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var c=this.props.nodeRef?[this.nextCallback]:[s,this.nextCallback],u=c[0],f=c[1];this.props.addEndListener(u,f)}o!=null&&setTimeout(this.nextCallback,o)},n.render=function(){var o=this.state.status;if(o===Ge)return null;var i=this.props,s=i.children;i.in,i.mountOnEnter,i.unmountOnExit,i.appear,i.enter,i.exit,i.timeout,i.addEndListener,i.onEnter,i.onEntering,i.onEntered,i.onExit,i.onExiting,i.onExited,i.nodeRef;var a=X(i,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return qe.createElement(Ir.Provider,{value:null},typeof s=="function"?s(o,a):qe.cloneElement(qe.Children.only(s),a))},t}(qe.Component);he.contextType=Ir;he.propTypes={};function De(){}he.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:De,onEntering:De,onEntered:De,onExit:De,onExiting:De,onExited:De};he.UNMOUNTED=Ge;he.EXITED=ve;he.ENTERING=we;he.ENTERED=Ae;he.EXITING=Xt;const Br=he;function zr(){const e=Nr(hn);return e[pn]||e}const Lr=e=>e.scrollTop;function pt(e,t){var n,r;const{timeout:o,easing:i,style:s={}}=e;return{duration:(n=s.transitionDuration)!=null?n:typeof o=="number"?o:o[t.mode]||0,easing:(r=s.transitionTimingFunction)!=null?r:typeof i=="object"?i[t.mode]:i,delay:s.transitionDelay}}const Ec=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function Vt(e){return`scale(${e}, ${e**2})`}const Pc={entering:{opacity:1,transform:Vt(1)},entered:{opacity:1,transform:"none"}},zt=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),Hr=d.forwardRef(function(t,n){const{addEndListener:r,appear:o=!0,children:i,easing:s,in:a,onEnter:c,onEntered:u,onEntering:f,onExit:p,onExited:h,onExiting:v,style:y,timeout:m="auto",TransitionComponent:k=Br}=t,w=X(t,Ec),E=ho(),g=d.useRef(),S=zr(),P=d.useRef(null),C=Ee(P,i.ref,n),j=T=>M=>{if(T){const O=P.current;M===void 0?T(O):T(O,M)}},W=j(f),G=j((T,M)=>{Lr(T);const{duration:O,delay:K,easing:V}=pt({style:y,timeout:m,easing:s},{mode:"enter"});let se;m==="auto"?(se=S.transitions.getAutoHeightDuration(T.clientHeight),g.current=se):se=O,T.style.transition=[S.transitions.create("opacity",{duration:se,delay:K}),S.transitions.create("transform",{duration:zt?se:se*.666,delay:K,easing:V})].join(","),c&&c(T,M)}),L=j(u),N=j(v),_=j(T=>{const{duration:M,delay:O,easing:K}=pt({style:y,timeout:m,easing:s},{mode:"exit"});let V;m==="auto"?(V=S.transitions.getAutoHeightDuration(T.clientHeight),g.current=V):V=M,T.style.transition=[S.transitions.create("opacity",{duration:V,delay:O}),S.transitions.create("transform",{duration:zt?V:V*.666,delay:zt?O:O||V*.333,easing:K})].join(","),T.style.opacity=0,T.style.transform=Vt(.75),p&&p(T)}),I=j(h),$=T=>{m==="auto"&&E.start(g.current||0,T),r&&r(P.current,T)};return l.jsx(k,x({appear:o,in:a,nodeRef:P,onEnter:G,onEntered:L,onEntering:W,onExit:_,onExited:I,onExiting:N,addEndListener:$,timeout:m==="auto"?null:m},w,{children:(T,M)=>d.cloneElement(i,x({style:x({opacity:0,transform:Vt(.75),visibility:T==="exited"&&!a?"hidden":void 0},Pc[T],y,i.props.style),ref:C},M))}))});Hr.muiSupportAuto=!0;const kc=Hr;function Sc(e){const t=ae(e);return t.body===e?Ve(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function Ue(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function Xn(e){return parseInt(Ve(e).getComputedStyle(e).paddingRight,10)||0}function Tc(e){const n=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,r=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return n||r}function Vn(e,t,n,r,o){const i=[t,n,...r];[].forEach.call(e.children,s=>{const a=i.indexOf(s)===-1,c=!Tc(s);a&&c&&Ue(s,o)})}function Lt(e,t){let n=-1;return e.some((r,o)=>t(r)?(n=o,!0):!1),n}function Mc(e,t){const n=[],r=e.container;if(!t.disableScrollLock){if(Sc(r)){const s=po(ae(r));n.push({value:r.style.paddingRight,property:"padding-right",el:r}),r.style.paddingRight=`${Xn(r)+s}px`;const a=ae(r).querySelectorAll(".mui-fixed");[].forEach.call(a,c=>{n.push({value:c.style.paddingRight,property:"padding-right",el:c}),c.style.paddingRight=`${Xn(c)+s}px`})}let i;if(r.parentNode instanceof DocumentFragment)i=ae(r).body;else{const s=r.parentElement,a=Ve(r);i=(s==null?void 0:s.nodeName)==="HTML"&&a.getComputedStyle(s).overflowY==="scroll"?s:r}n.push({value:i.style.overflow,property:"overflow",el:i},{value:i.style.overflowX,property:"overflow-x",el:i},{value:i.style.overflowY,property:"overflow-y",el:i}),i.style.overflow="hidden"}return()=>{n.forEach(({value:i,el:s,property:a})=>{i?s.style.setProperty(a,i):s.style.removeProperty(a)})}}function Oc(e){const t=[];return[].forEach.call(e.children,n=>{n.getAttribute("aria-hidden")==="true"&&t.push(n)}),t}class $c{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,n){let r=this.modals.indexOf(t);if(r!==-1)return r;r=this.modals.length,this.modals.push(t),t.modalRef&&Ue(t.modalRef,!1);const o=Oc(n);Vn(n,t.mount,t.modalRef,o,!0);const i=Lt(this.containers,s=>s.container===n);return i!==-1?(this.containers[i].modals.push(t),r):(this.containers.push({modals:[t],container:n,restore:null,hiddenSiblings:o}),r)}mount(t,n){const r=Lt(this.containers,i=>i.modals.indexOf(t)!==-1),o=this.containers[r];o.restore||(o.restore=Mc(o,n))}remove(t,n=!0){const r=this.modals.indexOf(t);if(r===-1)return r;const o=Lt(this.containers,s=>s.modals.indexOf(t)!==-1),i=this.containers[o];if(i.modals.splice(i.modals.indexOf(t),1),this.modals.splice(r,1),i.modals.length===0)i.restore&&i.restore(),t.modalRef&&Ue(t.modalRef,n),Vn(i.container,t.mount,t.modalRef,i.hiddenSiblings,!1),this.containers.splice(o,1);else{const s=i.modals[i.modals.length-1];s.modalRef&&Ue(s.modalRef,!1)}return r}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}function Cc(e){return typeof e=="function"?e():e}function jc(e){return e?e.props.hasOwnProperty("in"):!1}const _c=new $c;function Rc(e){const{container:t,disableEscapeKeyDown:n=!1,disableScrollLock:r=!1,manager:o=_c,closeAfterTransition:i=!1,onTransitionEnter:s,onTransitionExited:a,children:c,onClose:u,open:f,rootRef:p}=e,h=d.useRef({}),v=d.useRef(null),y=d.useRef(null),m=Ee(y,p),[k,w]=d.useState(!f),E=jc(c);let g=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(g=!1);const S=()=>ae(v.current),P=()=>(h.current.modalRef=y.current,h.current.mount=v.current,h.current),C=()=>{o.mount(P(),{disableScrollLock:r}),y.current&&(y.current.scrollTop=0)},j=En(()=>{const M=Cc(t)||S().body;o.add(P(),M),y.current&&C()}),W=d.useCallback(()=>o.isTopModal(P()),[o]),G=En(M=>{v.current=M,M&&(f&&W()?C():y.current&&Ue(y.current,g))}),L=d.useCallback(()=>{o.remove(P(),g)},[g,o]);d.useEffect(()=>()=>{L()},[L]),d.useEffect(()=>{f?j():(!E||!i)&&L()},[f,L,E,i,j]);const N=M=>O=>{var K;(K=M.onKeyDown)==null||K.call(M,O),!(O.key!=="Escape"||O.which===229||!W())&&(n||(O.stopPropagation(),u&&u(O,"escapeKeyDown")))},_=M=>O=>{var K;(K=M.onClick)==null||K.call(M,O),O.target===O.currentTarget&&u&&u(O,"backdropClick")};return{getRootProps:(M={})=>{const O=Er(e);delete O.onTransitionEnter,delete O.onTransitionExited;const K=x({},O,M);return x({role:"presentation"},K,{onKeyDown:N(K),ref:m})},getBackdropProps:(M={})=>{const O=M;return x({"aria-hidden":!0},O,{onClick:_(O),open:f})},getTransitionProps:()=>{const M=()=>{w(!1),s&&s()},O=()=>{w(!0),a&&a(),i&&L()};return{onEnter:Mn(M,c==null?void 0:c.props.onEnter),onExited:Mn(O,c==null?void 0:c.props.onExited)}},rootRef:m,portalRef:G,isTopModal:W,exited:k,hasTransition:E}}const Dc=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function Ac(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function Wc(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=r=>e.ownerDocument.querySelector(`input[type="radio"]${r}`);let n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}function Fc(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||Wc(e))}function Nc(e){const t=[],n=[];return Array.from(e.querySelectorAll(Dc)).forEach((r,o)=>{const i=Ac(r);i===-1||!Fc(r)||(i===0?t.push(r):n.push({documentOrder:o,tabIndex:i,node:r}))}),n.sort((r,o)=>r.tabIndex===o.tabIndex?r.documentOrder-o.documentOrder:r.tabIndex-o.tabIndex).map(r=>r.node).concat(t)}function Ic(){return!0}function Bc(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:r=!1,disableRestoreFocus:o=!1,getTabbable:i=Nc,isEnabled:s=Ic,open:a}=e,c=d.useRef(!1),u=d.useRef(null),f=d.useRef(null),p=d.useRef(null),h=d.useRef(null),v=d.useRef(!1),y=d.useRef(null),m=Ee(t.ref,y),k=d.useRef(null);d.useEffect(()=>{!a||!y.current||(v.current=!n)},[n,a]),d.useEffect(()=>{if(!a||!y.current)return;const g=ae(y.current);return y.current.contains(g.activeElement)||(y.current.hasAttribute("tabIndex")||y.current.setAttribute("tabIndex","-1"),v.current&&y.current.focus()),()=>{o||(p.current&&p.current.focus&&(c.current=!0,p.current.focus()),p.current=null)}},[a]),d.useEffect(()=>{if(!a||!y.current)return;const g=ae(y.current),S=j=>{k.current=j,!(r||!s()||j.key!=="Tab")&&g.activeElement===y.current&&j.shiftKey&&(c.current=!0,f.current&&f.current.focus())},P=()=>{const j=y.current;if(j===null)return;if(!g.hasFocus()||!s()||c.current){c.current=!1;return}if(j.contains(g.activeElement)||r&&g.activeElement!==u.current&&g.activeElement!==f.current)return;if(g.activeElement!==h.current)h.current=null;else if(h.current!==null)return;if(!v.current)return;let W=[];if((g.activeElement===u.current||g.activeElement===f.current)&&(W=i(y.current)),W.length>0){var G,L;const N=!!((G=k.current)!=null&&G.shiftKey&&((L=k.current)==null?void 0:L.key)==="Tab"),_=W[0],I=W[W.length-1];typeof _!="string"&&typeof I!="string"&&(N?I.focus():_.focus())}else j.focus()};g.addEventListener("focusin",P),g.addEventListener("keydown",S,!0);const C=setInterval(()=>{g.activeElement&&g.activeElement.tagName==="BODY"&&P()},50);return()=>{clearInterval(C),g.removeEventListener("focusin",P),g.removeEventListener("keydown",S,!0)}},[n,r,o,s,a,i]);const w=g=>{p.current===null&&(p.current=g.relatedTarget),v.current=!0,h.current=g.target;const S=t.props.onFocus;S&&S(g)},E=g=>{p.current===null&&(p.current=g.relatedTarget),v.current=!0};return l.jsxs(d.Fragment,{children:[l.jsx("div",{tabIndex:a?0:-1,onFocus:E,ref:u,"data-testid":"sentinelStart"}),d.cloneElement(t,{ref:m,onFocus:w}),l.jsx("div",{tabIndex:a?0:-1,onFocus:E,ref:f,"data-testid":"sentinelEnd"})]})}function zc(e){return typeof e=="function"?e():e}const Lc=d.forwardRef(function(t,n){const{children:r,container:o,disablePortal:i=!1}=t,[s,a]=d.useState(null),c=Ee(d.isValidElement(r)?r.ref:null,n);if(Pn(()=>{i||a(zc(o)||document.body)},[o,i]),Pn(()=>{if(s&&!i)return kn(n,s),()=>{kn(n,null)}},[n,s,i]),i){if(d.isValidElement(r)){const u={ref:c};return d.cloneElement(r,u)}return l.jsx(d.Fragment,{children:r})}return l.jsx(d.Fragment,{children:s&&Qr.createPortal(r,s)})}),Hc=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],Yc={entering:{opacity:1},entered:{opacity:1}},qc=d.forwardRef(function(t,n){const r=zr(),o={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:i,appear:s=!0,children:a,easing:c,in:u,onEnter:f,onEntered:p,onEntering:h,onExit:v,onExited:y,onExiting:m,style:k,timeout:w=o,TransitionComponent:E=Br}=t,g=X(t,Hc),S=d.useRef(null),P=Ee(S,a.ref,n),C=$=>T=>{if($){const M=S.current;T===void 0?$(M):$(M,T)}},j=C(h),W=C(($,T)=>{Lr($);const M=pt({style:k,timeout:w,easing:c},{mode:"enter"});$.style.webkitTransition=r.transitions.create("opacity",M),$.style.transition=r.transitions.create("opacity",M),f&&f($,T)}),G=C(p),L=C(m),N=C($=>{const T=pt({style:k,timeout:w,easing:c},{mode:"exit"});$.style.webkitTransition=r.transitions.create("opacity",T),$.style.transition=r.transitions.create("opacity",T),v&&v($)}),_=C(y),I=$=>{i&&i(S.current,$)};return l.jsx(E,x({appear:s,in:u,nodeRef:S,onEnter:W,onEntered:G,onEntering:j,onExit:N,onExited:_,onExiting:L,addEndListener:I,timeout:w},g,{children:($,T)=>d.cloneElement(a,x({style:x({opacity:0,visibility:$==="exited"&&!u?"hidden":void 0},Yc[$],k,a.props.style),ref:P},T))}))}),Gc=qc;function Kc(e){return Ze("MuiBackdrop",e)}Tt("MuiBackdrop",["root","invisible"]);const Uc=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],Xc=e=>{const{classes:t,invisible:n}=e;return St({root:["root",n&&"invisible"]},Kc,t)},Vc=Ie("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})(({ownerState:e})=>x({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),Qc=d.forwardRef(function(t,n){var r,o,i;const s=Dt({props:t,name:"MuiBackdrop"}),{children:a,className:c,component:u="div",components:f={},componentsProps:p={},invisible:h=!1,open:v,slotProps:y={},slots:m={},TransitionComponent:k=Gc,transitionDuration:w}=s,E=X(s,Uc),g=x({},s,{component:u,invisible:h}),S=Xc(g),P=(r=y.root)!=null?r:p.root;return l.jsx(k,x({in:v,timeout:w},E,{children:l.jsx(Vc,x({"aria-hidden":!0},P,{as:(o=(i=m.root)!=null?i:f.Root)!=null?o:u,className:ge(S.root,c,P==null?void 0:P.className),ownerState:x({},g,P==null?void 0:P.ownerState),classes:S,ref:n,children:a}))}))}),Jc=Qc;function Zc(e){return Ze("MuiModal",e)}Tt("MuiModal",["root","hidden","backdrop"]);const el=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],tl=e=>{const{open:t,exited:n,classes:r}=e;return St({root:["root",!t&&n&&"hidden"],backdrop:["backdrop"]},Zc,r)},nl=Ie("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})(({theme:e,ownerState:t})=>x({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),rl=Ie(Jc,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),ol=d.forwardRef(function(t,n){var r,o,i,s,a,c;const u=Dt({name:"MuiModal",props:t}),{BackdropComponent:f=rl,BackdropProps:p,className:h,closeAfterTransition:v=!1,children:y,container:m,component:k,components:w={},componentsProps:E={},disableAutoFocus:g=!1,disableEnforceFocus:S=!1,disableEscapeKeyDown:P=!1,disablePortal:C=!1,disableRestoreFocus:j=!1,disableScrollLock:W=!1,hideBackdrop:G=!1,keepMounted:L=!1,onBackdropClick:N,open:_,slotProps:I,slots:$}=u,T=X(u,el),M=x({},u,{closeAfterTransition:v,disableAutoFocus:g,disableEnforceFocus:S,disableEscapeKeyDown:P,disablePortal:C,disableRestoreFocus:j,disableScrollLock:W,hideBackdrop:G,keepMounted:L}),{getRootProps:O,getBackdropProps:K,getTransitionProps:V,portalRef:se,isTopModal:ot,exited:Z,hasTransition:it}=Rc(x({},M,{rootRef:n})),ye=x({},M,{exited:Z}),le=tl(ye),Pe={};if(y.props.tabIndex===void 0&&(Pe.tabIndex="-1"),it){const{onEnter:A,onExited:q}=V();Pe.onEnter=A,Pe.onExited=q}const ke=(r=(o=$==null?void 0:$.root)!=null?o:w.Root)!=null?r:nl,Be=(i=(s=$==null?void 0:$.backdrop)!=null?s:w.Backdrop)!=null?i:f,ze=(a=I==null?void 0:I.root)!=null?a:E.root,Se=(c=I==null?void 0:I.backdrop)!=null?c:E.backdrop,At=dt({elementType:ke,externalSlotProps:ze,externalForwardedProps:T,getSlotProps:O,additionalProps:{ref:n,as:k},ownerState:ye,className:ge(h,ze==null?void 0:ze.className,le==null?void 0:le.root,!ye.open&&ye.exited&&(le==null?void 0:le.hidden))}),Wt=dt({elementType:Be,externalSlotProps:Se,additionalProps:p,getSlotProps:A=>K(x({},A,{onClick:q=>{N&&N(q),A!=null&&A.onClick&&A.onClick(q)}})),className:ge(Se==null?void 0:Se.className,p==null?void 0:p.className,le==null?void 0:le.backdrop),ownerState:ye});return!L&&!_&&(!it||Z)?null:l.jsx(Lc,{ref:se,container:m,disablePortal:C,children:l.jsxs(ke,x({},At,{children:[!G&&f?l.jsx(Be,x({},Wt)):null,l.jsx(Bc,{disableEnforceFocus:S,disableAutoFocus:g,disableRestoreFocus:j,isEnabled:ot,open:_,children:d.cloneElement(y,Pe)})]}))})}),il=ol,sl=e=>{let t;return e<1?t=5.11916*e**2:t=4.5*Math.log(e+1)+2,(t/100).toFixed(2)},Qn=sl;function al(e){return Ze("MuiPaper",e)}Tt("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const cl=["className","component","elevation","square","variant"],ll=e=>{const{square:t,elevation:n,variant:r,classes:o}=e,i={root:["root",r,!t&&"rounded",r==="elevation"&&`elevation${n}`]};return St(i,al,o)},ul=Ie("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,n.variant==="elevation"&&t[`elevation${n.elevation}`]]}})(({theme:e,ownerState:t})=>{var n;return x({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},t.variant==="elevation"&&x({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${zn("#fff",Qn(t.elevation))}, ${zn("#fff",Qn(t.elevation))})`},e.vars&&{backgroundImage:(n=e.vars.overlays)==null?void 0:n[t.elevation]}))}),dl=d.forwardRef(function(t,n){const r=Dt({props:t,name:"MuiPaper"}),{className:o,component:i="div",elevation:s=1,square:a=!1,variant:c="elevation"}=r,u=X(r,cl),f=x({},r,{component:i,elevation:s,square:a,variant:c}),p=ll(f);return l.jsx(ul,x({as:i,ownerState:f,className:ge(p.root,o),ref:n},u))}),fl=dl;function hl(e){return Ze("MuiPopover",e)}Tt("MuiPopover",["root","paper"]);const pl=["onEntering"],ml=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps","disableScrollLock"],gl=["slotProps"];function Jn(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.height/2:t==="bottom"&&(n=e.height),n}function Zn(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.width/2:t==="right"&&(n=e.width),n}function er(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function Ht(e){return typeof e=="function"?e():e}const yl=e=>{const{classes:t}=e;return St({root:["root"],paper:["paper"]},hl,t)},xl=Ie(il,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),bl=Ie(fl,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),vl=d.forwardRef(function(t,n){var r,o,i;const s=Dt({props:t,name:"MuiPopover"}),{action:a,anchorEl:c,anchorOrigin:u={vertical:"top",horizontal:"left"},anchorPosition:f,anchorReference:p="anchorEl",children:h,className:v,container:y,elevation:m=8,marginThreshold:k=16,open:w,PaperProps:E={},slots:g,slotProps:S,transformOrigin:P={vertical:"top",horizontal:"left"},TransitionComponent:C=kc,transitionDuration:j="auto",TransitionProps:{onEntering:W}={},disableScrollLock:G=!1}=s,L=X(s.TransitionProps,pl),N=X(s,ml),_=(r=S==null?void 0:S.paper)!=null?r:E,I=d.useRef(),$=Ee(I,_.ref),T=x({},s,{anchorOrigin:u,anchorReference:p,elevation:m,marginThreshold:k,externalPaperSlotProps:_,transformOrigin:P,TransitionComponent:C,transitionDuration:j,TransitionProps:L}),M=yl(T),O=d.useCallback(()=>{if(p==="anchorPosition")return f;const A=Ht(c),Q=(A&&A.nodeType===1?A:ae(I.current).body).getBoundingClientRect();return{top:Q.top+Jn(Q,u.vertical),left:Q.left+Zn(Q,u.horizontal)}},[c,u.horizontal,u.vertical,f,p]),K=d.useCallback(A=>({vertical:Jn(A,P.vertical),horizontal:Zn(A,P.horizontal)}),[P.horizontal,P.vertical]),V=d.useCallback(A=>{const q={width:A.offsetWidth,height:A.offsetHeight},Q=K(q);if(p==="none")return{top:null,left:null,transformOrigin:er(Q)};const mn=O();let Te=mn.top-Q.vertical,Me=mn.left-Q.horizontal;const gn=Te+q.height,yn=Me+q.width,xn=Ve(Ht(c)),bn=xn.innerHeight-k,vn=xn.innerWidth-k;if(k!==null&&Te<k){const ie=Te-k;Te-=ie,Q.vertical+=ie}else if(k!==null&&gn>bn){const ie=gn-bn;Te-=ie,Q.vertical+=ie}if(k!==null&&Me<k){const ie=Me-k;Me-=ie,Q.horizontal+=ie}else if(yn>vn){const ie=yn-vn;Me-=ie,Q.horizontal+=ie}return{top:`${Math.round(Te)}px`,left:`${Math.round(Me)}px`,transformOrigin:er(Q)}},[c,p,O,K,k]),[se,ot]=d.useState(w),Z=d.useCallback(()=>{const A=I.current;if(!A)return;const q=V(A);q.top!==null&&(A.style.top=q.top),q.left!==null&&(A.style.left=q.left),A.style.transformOrigin=q.transformOrigin,ot(!0)},[V]);d.useEffect(()=>(G&&window.addEventListener("scroll",Z),()=>window.removeEventListener("scroll",Z)),[c,G,Z]);const it=(A,q)=>{W&&W(A,q),Z()},ye=()=>{ot(!1)};d.useEffect(()=>{w&&Z()}),d.useImperativeHandle(a,()=>w?{updatePosition:()=>{Z()}}:null,[w,Z]),d.useEffect(()=>{if(!w)return;const A=co(()=>{Z()}),q=Ve(c);return q.addEventListener("resize",A),()=>{A.clear(),q.removeEventListener("resize",A)}},[c,w,Z]);let le=j;j==="auto"&&!C.muiSupportAuto&&(le=void 0);const Pe=y||(c?ae(Ht(c)).body:void 0),ke=(o=g==null?void 0:g.root)!=null?o:xl,Be=(i=g==null?void 0:g.paper)!=null?i:bl,ze=dt({elementType:Be,externalSlotProps:x({},_,{style:se?_.style:x({},_.style,{opacity:0})}),additionalProps:{elevation:m,ref:$},ownerState:T,className:ge(M.paper,_==null?void 0:_.className)}),Se=dt({elementType:ke,externalSlotProps:(S==null?void 0:S.root)||{},externalForwardedProps:N,additionalProps:{ref:n,slotProps:{backdrop:{invisible:!0}},container:Pe,open:w},ownerState:T,className:ge(M.root,v)}),{slotProps:At}=Se,Wt=X(Se,gl);return l.jsx(ke,x({},Wt,!wr(ke)&&{slotProps:At,disableScrollLock:G},{children:l.jsx(C,x({appear:!0,in:w,onEntering:it,onExited:ye,timeout:le},L,{children:l.jsx(Be,x({},ze,{children:h}))}))}))}),wl=vl,El=b.div`
display: flex;
flex-direction:column;
gap: 16px;
padding: 24px 13px;


border-radius: 10px;
background:${e=>e.theme.colors.primary.bg};
box-shadow: 0px 4px 4px 0px rgba(64, 123, 255, 0.30);



`,Pl=b.h2`
color:${e=>e.theme.colors.primary.accent};
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 1.25;
`,kl=b.ul`
display: flex;
flex-direction: column;
gap: 16px;

color: ${e=>e.theme.colors.primary.text};

font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 1.25;
`,Yt=b.li`

span{
  color:${e=>e.theme.colors.primary.accent};

  font-size: 18px;

  font-weight: 500;
  line-height: 1.33;
}

`,Sl=({selectedDate:e})=>{console.log(e);const t=br(e,"MMMM"),n=e.getDate();return l.jsxs(El,{children:[l.jsxs(Pl,{children:[" ",n,", ",t]}),l.jsxs(kl,{children:[l.jsxs(Yt,{children:["Daily Norma: ",l.jsx("span",{children:"1.2 L"})]}),l.jsxs(Yt,{children:["Fulfillment of the daily norm: ",l.jsx("span",{children:"100 %"})]}),l.jsxs(Yt,{children:["How many servings of water: ",l.jsx("span",{children:"6"})]})]})]})},Tl=b.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,Ml=b.div`
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
 
`,Ol=b.ul`
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fill, 32px);
  gap: 16px 26px;
  
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;
  
  @media (min-width: ${({theme:e})=>e.screens.tab}){
grid-template-columns: repeat(auto-fill, 34px);  
gap: 20px 34px;

font-size: 16px;
line-height: 1.25;

}
@media (min-width: ${({theme:e})=>e.screens.desk}){
 
gap: 20px 22px;

}
`,$l=b.li`
  display: flex;
  flex-direction: column;
  gap:4px;
  align-items: center;
  position: relative;
  cursor: pointer;
  padding: 0px;

 

@media(min-width: ${({theme:e})=>e.screens.tab}) {
 
}

`,Cl=b.div`
width: 34px;
height: 34px;
border-radius: 20px;
display: flex;
justify-content: center;
align-items: center;
background-color: ${e=>e.theme.colors.primary.bg};

border: 2px solid
    ${({theme:e,percentage:t})=>t<100?e.colors.secondary.color4:e.colors.primary.bg};

`,jl=b.p`
z-index: 1;
margin: 0;
`,_l=b.p`


margin: 0;
font-size: 10px;
font-style: normal;
font-weight: 400;
line-height: 1.6;
color: ${e=>e.theme.colors.secondary.color3};

@media(min-width: ${({theme:e})=>e.screens.tab}) {
  font-size: 13px;
  line-height: 1.53;
}

`,Rl=({selectedDate:e,onDayClick:t})=>{const n=Co(e),o=$o(e).getDate()-n.getDate()+1,i=[];for(let s=1;s<=o;s++){const a=new Date(e.getFullYear(),e.getMonth(),s);i.push(l.jsxs($l,{onClick:c=>t(c,a),children:[l.jsx(Cl,{percentage:100,children:l.jsx(jl,{children:s})}),l.jsx(_l,{children:"100%"})]},s))}return l.jsx(Ol,{children:i})},Dl=()=>{const[e,t]=d.useState(new Date),[n,r]=d.useState(null),o=(c,u)=>{t(u),r(c.currentTarget)},i=()=>{r(null)},s=!!n,a=s?"simple-popover":void 0;return l.jsxs(Tl,{children:[l.jsxs(Ml,{children:[l.jsx("h3",{children:"Month"}),l.jsx(Fi,{selectedDate:e,setSelectedDate:t})]}),l.jsx(Rl,{selectedDate:e,onDayClick:o}),l.jsx(wl,{id:a,open:s,anchorEl:n,onClose:i,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"bottom",horizontal:"right"},children:l.jsx(Sl,{selectedDate:e})})]})},Al=b.div`
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
`,Wl=b.div`
display: flex;
flex-direction: column;

width: 280px;
height: 507px;


@media (min-width: ${({theme:e})=>e.screens.tab}) {
  width: 704px;
}

`,Fl=b.div`
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


`,Nl=(e,t=!1)=>{const n=new Date(e);let r=n.getHours();const o=n.getMinutes();let i="";if(t){const s=r>=12?"PM":"AM";r=r%12,r=r||12,i=`${r.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")} ${s}`}else i=`${r.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")}`;return i},Il=e=>d.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",...e},d.createElement("title",null,"glass_26"),d.createElement("path",{fill:"#407bff",d:"M5.565 2.783l1.901 26.363v0.072h16.367l1.901-26.353v-0.082h-20.169zM23.16 28.479h-15.017l-1.426-19.747h0.784l1.289 17.403c0.008 0.092 0.049 0.177 0.115 0.24s0.153 0.098 0.244 0.099h0.030c0.047-0.003 0.093-0.016 0.136-0.037s0.080-0.051 0.111-0.087c0.031-0.036 0.055-0.078 0.070-0.124s0.021-0.094 0.017-0.141l-1.289-17.351h16.362l-1.426 19.747zM24.637 7.994h-16.468l-0.283-3.847c-0.009-0.094-0.052-0.181-0.122-0.244s-0.16-0.097-0.252-0.095c-0.095 0.009-0.183 0.055-0.245 0.129s-0.094 0.169-0.088 0.266l0.283 3.795h-0.794l-0.324-4.483h18.617l-0.324 4.478z"}),d.createElement("path",{fill:"#407bff",d:"M11.359 12.384c0.236 0 0.467-0.071 0.663-0.204s0.349-0.322 0.439-0.543c0.090-0.221 0.114-0.465 0.068-0.699s-0.16-0.45-0.327-0.62c-0.167-0.169-0.38-0.285-0.611-0.331s-0.471-0.023-0.689 0.069c-0.218 0.092-0.404 0.247-0.536 0.446s-0.201 0.433-0.201 0.672c0 0.321 0.126 0.629 0.35 0.856s0.527 0.355 0.844 0.355zM11.359 10.697c0.093 0 0.184 0.028 0.261 0.080s0.138 0.127 0.173 0.214c0.036 0.087 0.045 0.183 0.027 0.276s-0.063 0.178-0.129 0.244c-0.066 0.067-0.15 0.112-0.241 0.131s-0.186 0.009-0.272-0.027c-0.086-0.036-0.159-0.097-0.211-0.176s-0.079-0.171-0.079-0.265c0-0.127 0.050-0.248 0.138-0.337s0.208-0.14 0.332-0.14z"}),d.createElement("path",{fill:"#407bff",d:"M11.354 16.318c0.003 0.239 0.076 0.472 0.209 0.669s0.321 0.35 0.539 0.439 0.458 0.111 0.689 0.062c0.231-0.049 0.442-0.166 0.607-0.336s0.277-0.387 0.321-0.621 0.019-0.477-0.072-0.698c-0.091-0.22-0.245-0.408-0.442-0.54s-0.427-0.201-0.663-0.2c-0.158 0.001-0.313 0.033-0.459 0.095s-0.277 0.153-0.387 0.267-0.198 0.249-0.256 0.397c-0.059 0.148-0.088 0.307-0.086 0.467zM13.013 16.318c0 0.094-0.028 0.187-0.079 0.265s-0.125 0.14-0.211 0.176c-0.086 0.036-0.18 0.046-0.272 0.027s-0.175-0.064-0.241-0.131-0.111-0.152-0.129-0.244c-0.018-0.093-0.009-0.188 0.027-0.276s0.096-0.162 0.173-0.214 0.168-0.080 0.261-0.080c0.125 0 0.244 0.050 0.333 0.14s0.138 0.211 0.138 0.337z"}),d.createElement("path",{fill:"#407bff",d:"M19.834 16.349c0.236 0 0.467-0.071 0.663-0.204s0.349-0.322 0.439-0.543c0.090-0.221 0.114-0.465 0.068-0.699s-0.16-0.45-0.327-0.62c-0.167-0.169-0.379-0.285-0.611-0.331s-0.471-0.023-0.689 0.069c-0.218 0.092-0.404 0.247-0.535 0.446s-0.201 0.433-0.201 0.672c0 0.321 0.126 0.629 0.349 0.856s0.527 0.355 0.844 0.355zM19.834 14.666c0.093 0 0.184 0.028 0.262 0.081s0.138 0.127 0.173 0.215c0.035 0.088 0.044 0.184 0.026 0.276s-0.064 0.178-0.13 0.244c-0.066 0.066-0.151 0.111-0.242 0.129s-0.186 0.008-0.272-0.029-0.159-0.099-0.21-0.178c-0.051-0.079-0.078-0.172-0.077-0.266 0.001-0.126 0.051-0.246 0.14-0.334s0.207-0.138 0.331-0.138z"}),d.createElement("path",{fill:"#407bff",d:"M15.677 14.066c0.236 0 0.467-0.071 0.663-0.204s0.349-0.322 0.439-0.543c0.090-0.221 0.114-0.464 0.068-0.699s-0.16-0.45-0.327-0.62c-0.167-0.169-0.38-0.285-0.611-0.331s-0.471-0.023-0.689 0.069c-0.218 0.092-0.404 0.247-0.536 0.446s-0.201 0.433-0.201 0.672c0 0.321 0.126 0.629 0.35 0.856s0.527 0.354 0.844 0.354zM15.677 12.379c0.093 0 0.184 0.028 0.261 0.080s0.138 0.127 0.173 0.214c0.036 0.087 0.045 0.183 0.027 0.276s-0.063 0.177-0.129 0.244c-0.066 0.067-0.15 0.112-0.241 0.131s-0.186 0.009-0.272-0.027-0.159-0.097-0.211-0.176c-0.052-0.079-0.079-0.171-0.079-0.265-0.003-0.065 0.006-0.129 0.028-0.19s0.056-0.116 0.1-0.164c0.044-0.047 0.097-0.084 0.156-0.11s0.122-0.039 0.186-0.039v0.026z"}),d.createElement("path",{fill:"#407bff",d:"M13.402 20.929c0.005 0.197 0.067 0.387 0.178 0.548s0.267 0.285 0.447 0.357c0.181 0.072 0.378 0.088 0.568 0.047s0.363-0.139 0.498-0.279c0.135-0.141 0.227-0.319 0.263-0.512s0.015-0.393-0.060-0.574c-0.075-0.181-0.202-0.336-0.363-0.445s-0.351-0.167-0.545-0.167c-0.264 0.007-0.514 0.118-0.699 0.309s-0.287 0.449-0.287 0.716zM14.388 20.662c0.052 0 0.103 0.016 0.146 0.045s0.077 0.071 0.097 0.12 0.025 0.102 0.015 0.154c-0.010 0.052-0.035 0.099-0.072 0.137s-0.084 0.063-0.135 0.073c-0.051 0.010-0.104 0.005-0.152-0.015s-0.089-0.054-0.118-0.098c-0.029-0.044-0.044-0.096-0.044-0.148 0-0.071 0.028-0.139 0.077-0.189s0.116-0.078 0.186-0.078z"}),d.createElement("path",{fill:"#407bff",d:"M18.17 19.816c0.202 0.007 0.402-0.048 0.574-0.157s0.306-0.269 0.388-0.457c0.081-0.188 0.105-0.397 0.068-0.599s-0.133-0.388-0.275-0.534c-0.143-0.146-0.325-0.245-0.524-0.285s-0.405-0.018-0.591 0.063c-0.186 0.081-0.345 0.216-0.454 0.389s-0.166 0.375-0.161 0.58c0.006 0.262 0.111 0.511 0.292 0.697s0.426 0.295 0.684 0.304zM18.17 18.549c0.070 0 0.137 0.028 0.186 0.078s0.077 0.118 0.077 0.189c0 0.071-0.028 0.139-0.077 0.189s-0.116 0.078-0.186 0.078c-0.070 0-0.138-0.028-0.188-0.078s-0.079-0.118-0.080-0.189c0-0.035 0.007-0.071 0.020-0.103s0.033-0.062 0.058-0.087 0.055-0.044 0.087-0.057c0.032-0.013 0.067-0.019 0.102-0.019z"}),d.createElement("path",{fill:"#407bff",d:"M20.253 11.538c0.2 0 0.395-0.060 0.562-0.173s0.296-0.273 0.372-0.46c0.077-0.187 0.097-0.394 0.058-0.593s-0.135-0.382-0.277-0.525c-0.141-0.143-0.322-0.241-0.518-0.281s-0.399-0.019-0.584 0.058c-0.185 0.078-0.343 0.209-0.454 0.378s-0.17 0.367-0.17 0.57c0 0.272 0.107 0.533 0.296 0.725s0.447 0.3 0.715 0.3zM20.253 10.271c0.039-0.011 0.080-0.013 0.12-0.006s0.078 0.024 0.11 0.049c0.032 0.025 0.059 0.057 0.077 0.094s0.028 0.078 0.028 0.119-0.009 0.082-0.028 0.119c-0.018 0.037-0.044 0.069-0.077 0.094s-0.070 0.042-0.11 0.049c-0.040 0.008-0.081 0.006-0.12-0.006-0.039 0.011-0.080 0.013-0.12 0.006s-0.078-0.024-0.11-0.049c-0.032-0.025-0.059-0.057-0.077-0.094s-0.028-0.078-0.028-0.119 0.009-0.082 0.028-0.119c0.018-0.037 0.044-0.069 0.077-0.094s0.070-0.042 0.11-0.049c0.040-0.008 0.081-0.006 0.12 0.006z"}),d.createElement("path",{fill:"#407bff",d:"M10.369 27.191c-0.045 0.021-0.086 0.052-0.119 0.089s-0.059 0.082-0.074 0.13c-0.016 0.048-0.021 0.099-0.017 0.149s0.019 0.099 0.043 0.144c0.031 0.060 0.078 0.11 0.135 0.145s0.122 0.054 0.189 0.055c0.056 0.002 0.112-0.011 0.162-0.036 1.545-0.803 3.255-1.225 4.99-1.231 1.837 0.027 3.648 0.441 5.319 1.215 0.066 0.035 0.141 0.049 0.215 0.039s0.143-0.042 0.198-0.093c0.055-0.051 0.094-0.118 0.11-0.192s0.010-0.151-0.018-0.221c-0.036-0.091-0.105-0.164-0.192-0.205-1.769-0.821-3.687-1.258-5.633-1.282-1.845 0.002-3.664 0.444-5.309 1.292z"})),Bl=e=>d.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:1024,height:1024,viewBox:"0 0 1024 1024",...e},d.createElement("title",null,"edit"),d.createElement("path",{fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:4,strokeWidth:42.6667,d:"M719.445 191.445l71.979-72.021c14.479-14.479 34.482-23.435 56.576-23.435 44.189 0 80.011 35.822 80.011 80.011 0 22.094-8.955 42.097-23.435 56.576l-453.077 453.077c-21.936 21.924-49.153 38.567-79.579 47.856l-1.36 0.357-114.56 34.133 34.133-114.56c9.647-31.785 26.289-59.002 48.214-80.94l381.098-381.055zM719.445 191.445l112.555 112.555M768 597.333v202.667c0 53.019-42.981 96-96 96v0h-448c-53.019 0-96-42.981-96-96v0-448c0-53.019 42.981-96 96-96v0h202.667"})),zl=e=>d.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:1024,height:1024,viewBox:"0 0 1024 1024",...e},d.createElement("title",null,"delete"),d.createElement("path",{fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:4,strokeWidth:42.6667,d:"M628.907 384l-14.763 384M409.856 768l-14.763-384M820.395 247.040c14.592 2.219 29.099 4.565 43.605 7.083M820.395 247.040l-45.568 592.341c-3.952 49.747-45.294 88.619-95.716 88.619-0.010 0-0.020 0-0.030 0h-334.164c-0.008 0-0.018 0-0.028 0-50.422 0-91.764-38.872-95.694-88.283l-0.021-0.336-45.568-592.341M820.395 247.040c-38.791-6.358-89.724-12.366-141.193-16.476l-7.202-0.463M203.605 247.040c-25.242 3.599-40.074 6.065-54.844 8.706l11.239-1.666M203.605 247.040c38.789-6.358 89.722-12.366 141.19-16.476l7.205-0.463M672 230.101v-39.083c0-50.347-38.827-92.331-89.173-93.909-21.11-0.721-45.921-1.132-70.827-1.132-24.908 0-49.719 0.411-74.428 1.226l3.602-0.094c-50.347 1.579-89.173 43.605-89.173 93.909v39.083M672 230.101c-47.901-3.932-103.689-6.173-160-6.173-56.31 0-112.097 2.241-167.276 6.64l7.276-0.466"})),Ll=e=>d.createElement("svg",{fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:4,strokeWidth:42.6667,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...e},d.createElement("path",{d:"M512 256v512M768 512h-512"})),Hl=b.div`
  
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
 
`,Yl=b.ul`
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

  `,ql=b.div`
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

`,Gl=b.span`
color:${e=>e.theme.colors.primary.accent};


font-size: 18px;

font-weight: 400;
line-height: 1.33;
`,Kl=b(Il)`
  fill:${e=>e.theme.colors.primary.accent};
  width: 26px;
  height: auto;


  @media (min-width: ${({theme:e})=>e.screens.tab}){
    width: 36px;
  }
  
`,Ul=b(Bl)`
  stroke:  ${e=>e.theme.colors.secondary.color3};
  width: 16px;
  height: 16px;
`,Xl=b(zl)`
   stroke: ${e=>e.theme.colors.secondary.color2};
  width: 16px;
  height: 16px;
`,Vl=b.div`
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

`,Ql=b.button`

  &:hover::after {
   
    background-color: ${e=>e.theme.colors.primary.accent};
   
  }`,Jl=b.button`
 
 
  &:hover::after {
   
    background-color:  ${e=>e.theme.colors.secondary.color2};
    
  }`,Yr=b(Ll)`
  fill: ${e=>e.theme.colors.primary.accent};
  stroke: ${e=>e.theme.colors.primary.accent};
  width: 16px;
  height: 16px;

  @media (min-width: ${({theme:e})=>e.screens.tab}){
    width: 24px;
  height: 24px;
  }
 
`,Zl=b.button`
display: flex;
align-items: center;
gap: 8px;

font-size: 16px;
font-weight: 500;
line-height: 1.25;
color: ${e=>e.theme.colors.primary.accent};


&:hover {
    color: ${e=>e.theme.colors.secondary.color4};
    ${Yr} {
      fill: ${e=>e.theme.colors.secondary.color4};
      stroke: ${e=>e.theme.colors.secondary.color4};
  }
}


@media (min-width: ${({theme:e})=>e.screens.tab}){
  font-size: 18px;
line-height: 1.33;
  }

`,e0=b.div`

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
`,t0=b.div`
display: flex;
flex-direction: column-reverse;
gap: 24px;

@media (min-width: ${({theme:e})=>e.screens.tab}){
    flex-direction: row;
    justify-content: end;
}
`,n0=b.button`

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

`,r0=b.button`

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
`,o0=({id:e})=>{const{closeModal:t}=d.useContext(Jt),n=ar();console.log(e);const r=()=>{n(Jr(e)),t()};return l.jsxs(e0,{children:[l.jsx("h3",{children:"Delete entry"}),l.jsx("p",{children:"Are you sure you want to delete the entry?"}),l.jsxs(t0,{children:[l.jsx(n0,{type:"button",onClick:()=>t(),children:"Cancel"}),l.jsx(r0,{type:"submit",onClick:r,children:"Delete"})]})]})},i0=()=>l.jsx("div",{children:" Тут колись буде модалка TodayEditModal"}),s0=({handleAddWaterClick:e})=>{const t=[{id:1,portion:"250",date:"2024-03-30T20:00:00.000Z"},{id:2,portion:"250",date:"2024-03-30T10:00:00.000Z"},{id:3,portion:"250",date:"2024-03-30T15:00:00.000Z"},{id:4,portion:"250",date:"2024-03-30T18:00:00.000Z"},{id:5,portion:"250",date:"2024-03-30T19:00:00.000Z"},{id:6,portion:"250",date:"2024-03-30T20:00:00.000Z"}],{openModal:n}=d.useContext(Jt),[r,o]=d.useState(null),i=a=>{n(l.jsx(l.Fragment,{children:l.jsx(o0,{id:a})}))},s=a=>{o(a),console.log(r),n(l.jsx(l.Fragment,{children:l.jsx(i0,{portion:a})}))};return l.jsxs(Hl,{children:[l.jsx("h3",{children:"Today"}),t&&t.length>0&&l.jsx(Yl,{children:t.map(a=>l.jsxs("li",{children:[l.jsxs(ql,{children:[l.jsx(Kl,{}),l.jsx(Gl,{children:`${a.portion} ml `}),l.jsx("span",{children:Nl(a.date,!0)})]}),l.jsxs(Vl,{children:[l.jsx(Ql,{onClick:()=>s(a),children:l.jsx(Ul,{})}),l.jsx(Jl,{onClick:()=>i(a.id),children:l.jsx(Xl,{})})]})]},a.id))}),l.jsxs(Zl,{onClick:e,children:[l.jsx(Yr,{})," Add water"]})]})},a0=b.div`
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
`,c0=b.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
  justify-content: left;
`,l0=b.p`
  font-size: 18px;
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 24px;
  color: ${e=>e.theme.colors.primary.text};
  white-space: nowrap;
`,u0=b.button`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  color: #8baeff;
`,d0=b.p`
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  color: ${e=>e.theme.colors.primary.accent};
`,f0=b.div`
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
`,h0=b.div`
  width: 592px;
  height: 712px;
  padding: 32px 24px 32px 24px;
  border-radius: 10px;
  background-color: ${e=>e.theme.colors.primary.bg};
`,p0=b.h2`
  font-size: 26px;
  font-weight: 500;
  line-height: 32px;
  color: ${e=>e.theme.colors.primary.text};
`,m0=b.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  margin-top: 24px;
  margin-bottom: 12px;
`,xe=b.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: ${e=>e.theme.colors.primary.text};
`,tr=b.span`
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: ${e=>e.theme.colors.primary.accent};
`,g0=b.div`
  width: 544px;
  border: 1px solid;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 24px;
  border-color: ${e=>e.theme.colors.secondary.color5};
`,y0=b.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  color: #8f8f8f;
`,x0=b.span`
  color: ${e=>e.theme.colors.primary.accent};
`,b0=b.form`
  display: flex;
  flex-direction: column;
`,nr=b.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  color: ${e=>e.theme.colors.primary.text};
`,rr=b.label`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`,or=b.input`
  width: 14px;
  height: 14px;
  border: 1px solid;
  border-color: ${e=>e.theme.colors.primary.accent};
  color: ${e=>e.theme.colors.primary.bg};
  border-radius: 50%;
`,v0=b.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`,ir=b.label`
  width: 544px;
  display: flex;
  gap: 8px;
  flex-direction: column;
`,qt=b.input`
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
`,w0=b.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`,E0=b.label`
  width: 544px;
  display: flex;
  gap: 16px;
  flex-direction: column;
  margin-bottom: 24px;
`,P0=b.button`
  border-radius: 10px;
  padding: 10px 30px;
  width: 160px;
  color: ${e=>e.theme.colors.primary.bg};
  background-color: ${e=>e.theme.colors.primary.accent};
`,k0=b.div`
  width: 544px;
  display: flex;
  justify-content: end;
`,S0=b.button``,T0=b.div`
  width: 544px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,M0=b.span`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: ${e=>e.theme.colors.primary.accent};
`,O0=b.svg`
  background-color:;
`,$0=({onClose:e})=>{const t=ar(),n={weight:.03,activity:.04},r={weight:.04,activity:.06},[o,i]=d.useState(n),[s,a]=d.useState(""),[c,u]=d.useState(""),[f,p]=d.useState(""),[h,v]=d.useState("");d.useEffect(()=>{const w=E=>{E.code==="Escape"&&e()};return window.addEventListener("keydown",w),()=>{window.removeEventListener("keydown",w)}},[e]);const y=d.useCallback(()=>{if(!s||!f)return;const w=(s*o.weight+f/60*o.activity).toFixed(2);u(w)},[o,s,f]);d.useEffect(()=>{y()},[y]);const m=w=>{const E=w.target.value,g=parseFloat(E);!isNaN(g)&&g>=1?v(g):E===""&&v("")},k=w=>{w.preventDefault();const E=parseFloat(c);if(!(f>0&&s>0||h>0)){alert("Fill all fields");return}(isNaN(E)||E<=0)&&alert("Enter a valid intake goal"),t(Zr(h||E)).then(S=>{S.error||(e(),a(""),p(""),v(""))})};return l.jsx(f0,{children:l.jsxs(h0,{children:[l.jsxs(T0,{children:[l.jsx(p0,{children:"My daily norma"}),l.jsx(S0,{onClick:()=>e(),children:l.jsx(O0,{width:"24",height:"24",children:l.jsx("path",{d:"M6 18L18 6M6 6L18 18",stroke:"#407BFF","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})})})]}),l.jsxs(m0,{children:[l.jsxs(xe,{children:["For girl: ",l.jsx(tr,{children:"V=(M*0,03) + (T*0,4)"})]}),l.jsxs(xe,{children:["For man: ",l.jsx(tr,{children:"V=(M*0,04) + (T*0,6)"})]})]}),l.jsx(g0,{children:l.jsxs(y0,{children:[l.jsx(x0,{children:"*"})," V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]})}),l.jsxs(b0,{children:[l.jsxs(w0,{children:[l.jsx(nr,{children:"Calculate your rate:"}),l.jsxs(v0,{children:[l.jsxs(rr,{children:[l.jsx(or,{type:"radio",name:"gender",value:"woman",onChange:()=>i(n)}),l.jsx(xe,{children:"For woman"})]}),l.jsxs(rr,{children:[l.jsx(or,{type:"radio",name:"gender",value:"man",onChange:()=>i(r)}),l.jsx(xe,{children:"For man"})]})]}),l.jsxs(ir,{children:[l.jsx(xe,{children:"Your weight in kilograms:"}),l.jsx(qt,{type:"number",name:"userWeight",placeholder:"0",value:s,min:0,max:250,onChange:w=>a(w.target.value)})]}),l.jsxs(ir,{children:[l.jsx(xe,{children:"The time of active participation in sports or other activities with a high physical. load in hours:"}),l.jsx(qt,{type:"number",name:"userActive",placeholder:"0",value:f,min:0,onChange:w=>p(w.target.value)})]}),l.jsxs(xe,{children:["The required amount of water in liters per day:",l.jsxs(M0,{children:[" ",c||2," L"]})]})]}),l.jsxs(E0,{children:[l.jsx(nr,{children:"Write down how much water you will drink:"}),l.jsx(qt,{type:"number",name:"userWaterPredict",placeholder:"0",value:h,min:0,onChange:m})]}),l.jsx(k0,{children:l.jsx(P0,{onClick:k,children:"Save"})})]})]})})},C0=()=>{const[e,t]=d.useState(!1),n=()=>{t(!0)},r=()=>{t(!1)};return l.jsxs(a0,{children:[l.jsx(l0,{children:"My daily norma"}),l.jsxs(c0,{children:[l.jsxs(d0,{children:[" ",2," L"]}),l.jsx(u0,{onClick:n,children:"Edit"})]}),e&&l.jsx($0,{onClose:r})]})},j0=()=>l.jsx("div",{children:" Тут колись буде модалка AddWaterModal"}),R0=()=>{const{openModal:e}=d.useContext(Jt),t=()=>{e(l.jsx(l.Fragment,{children:l.jsx(j0,{})}))};return l.jsxs(Al,{children:[l.jsx(Wl,{children:l.jsx(C0,{})}),l.jsxs(Fl,{children:[l.jsx(s0,{handleAddWaterClick:t}),l.jsx(Dl,{})]})]})};export{R0 as default};
