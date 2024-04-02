import{_ as b,o as ue,r as d,w as lo,s as wr,T as dn,a as Nn,i as uo,u as x,j as u,b as ke,g as me,c as fo,C as ho,d as po,n as mo,R as Ue,e as lt,f as Wn,h as Fn,k as In,l as go}from"./index-3c9738c5.js";function be(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function Sr(e){if(!be(e))return e;const t={};return Object.keys(e).forEach(n=>{t[n]=Sr(e[n])}),t}function de(e,t,n={clone:!0}){const r=n.clone?b({},e):e;return be(e)&&be(t)&&Object.keys(t).forEach(o=>{o!=="__proto__"&&(be(t[o])&&o in e&&be(e[o])?r[o]=de(e[o],t[o],n):n.clone?r[o]=be(t[o])?Sr(t[o]):t[o]:r[o]=t[o])}),r}const yo=Object.freeze(Object.defineProperty({__proto__:null,default:de,isPlainObject:be},Symbol.toStringTag,{value:"Module"}));function Je(e){let t="https://mui.com/production-error/?code="+e;for(let n=1;n<arguments.length;n+=1)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}const bo=Object.freeze(Object.defineProperty({__proto__:null,default:Je},Symbol.toStringTag,{value:"Module"}));var Er={exports:{}},D={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fn=Symbol.for("react.element"),hn=Symbol.for("react.portal"),bt=Symbol.for("react.fragment"),xt=Symbol.for("react.strict_mode"),vt=Symbol.for("react.profiler"),wt=Symbol.for("react.provider"),St=Symbol.for("react.context"),xo=Symbol.for("react.server_context"),Et=Symbol.for("react.forward_ref"),Pt=Symbol.for("react.suspense"),kt=Symbol.for("react.suspense_list"),$t=Symbol.for("react.memo"),Tt=Symbol.for("react.lazy"),vo=Symbol.for("react.offscreen"),Pr;Pr=Symbol.for("react.module.reference");function se(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case fn:switch(e=e.type,e){case bt:case vt:case xt:case Pt:case kt:return e;default:switch(e=e&&e.$$typeof,e){case xo:case St:case Et:case Tt:case $t:case wt:return e;default:return t}}case hn:return t}}}D.ContextConsumer=St;D.ContextProvider=wt;D.Element=fn;D.ForwardRef=Et;D.Fragment=bt;D.Lazy=Tt;D.Memo=$t;D.Portal=hn;D.Profiler=vt;D.StrictMode=xt;D.Suspense=Pt;D.SuspenseList=kt;D.isAsyncMode=function(){return!1};D.isConcurrentMode=function(){return!1};D.isContextConsumer=function(e){return se(e)===St};D.isContextProvider=function(e){return se(e)===wt};D.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===fn};D.isForwardRef=function(e){return se(e)===Et};D.isFragment=function(e){return se(e)===bt};D.isLazy=function(e){return se(e)===Tt};D.isMemo=function(e){return se(e)===$t};D.isPortal=function(e){return se(e)===hn};D.isProfiler=function(e){return se(e)===vt};D.isStrictMode=function(e){return se(e)===xt};D.isSuspense=function(e){return se(e)===Pt};D.isSuspenseList=function(e){return se(e)===kt};D.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===bt||e===vt||e===xt||e===Pt||e===kt||e===vo||typeof e=="object"&&e!==null&&(e.$$typeof===Tt||e.$$typeof===$t||e.$$typeof===wt||e.$$typeof===St||e.$$typeof===Et||e.$$typeof===Pr||e.getModuleId!==void 0)};D.typeOf=se;Er.exports=D;var Ln=Er.exports;const wo=/^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;function kr(e){const t=`${e}`.match(wo);return t&&t[1]||""}function $r(e,t=""){return e.displayName||e.name||kr(e)||t}function zn(e,t,n){const r=$r(t);return e.displayName||(r!==""?`${n}(${r})`:n)}function So(e){if(e!=null){if(typeof e=="string")return e;if(typeof e=="function")return $r(e,"Component");if(typeof e=="object")switch(e.$$typeof){case Ln.ForwardRef:return zn(e,e.render,"ForwardRef");case Ln.Memo:return zn(e,e.type,"memo");default:return}}}const Eo=Object.freeze(Object.defineProperty({__proto__:null,default:So,getFunctionName:kr},Symbol.toStringTag,{value:"Module"}));function pn(e){if(typeof e!="string")throw new Error(Je(7));return e.charAt(0).toUpperCase()+e.slice(1)}const Po=Object.freeze(Object.defineProperty({__proto__:null,default:pn},Symbol.toStringTag,{value:"Module"}));function Bn(...e){return e.reduce((t,n)=>n==null?t:function(...o){t.apply(this,o),n.apply(this,o)},()=>{})}function ko(e,t=166){let n;function r(...o){const i=()=>{e.apply(this,o)};clearTimeout(n),n=setTimeout(i,t)}return r.clear=()=>{clearTimeout(n)},r}function Ze(e){return ue(e).defaultView||window}const Yn={};function $o(e,t){const n=d.useRef(Yn);return n.current===Yn&&(n.current=e(t)),n}const To=[];function Mo(e){d.useEffect(e,To)}class mn{constructor(){this.currentId=null,this.clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}static create(){return new mn}start(t,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},t)}}function Oo(){const e=$o(mn.create).current;return Mo(e.disposeEffect),e}function Co(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function Tr(e,t){const n=b({},t);return Object.keys(e).forEach(r=>{if(r.toString().match(/^(components|slots)$/))n[r]=b({},e[r],n[r]);else if(r.toString().match(/^(componentsProps|slotProps)$/)){const o=e[r]||{},i=t[r];n[r]={},!i||!Object.keys(i)?n[r]=o:!o||!Object.keys(o)?n[r]=i:(n[r]=b({},i),Object.keys(o).forEach(s=>{n[r][s]=Tr(o[s],i[s])}))}else n[r]===void 0&&(n[r]=e[r])}),n}function Mt(e,t,n=void 0){const r={};return Object.keys(e).forEach(o=>{r[o]=e[o].reduce((i,s)=>{if(s){const a=t(s);a!==""&&i.push(a),n&&n[s]&&i.push(n[s])}return i},[]).join(" ")}),r}const Hn=e=>e,jo=()=>{let e=Hn;return{configure(t){e=t},generate(t){return e(t)},reset(){e=Hn}}},_o=jo(),Ro=_o,Do={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function nt(e,t,n="Mui"){const r=Do[t];return r?`${n}-${r}`:`${Ro.generate(e)}-${t}`}function Ot(e,t,n="Mui"){const r={};return t.forEach(o=>{r[o]=nt(e,o,n)}),r}function Ao(e,t=Number.MIN_SAFE_INTEGER,n=Number.MAX_SAFE_INTEGER){return Math.max(t,Math.min(e,n))}const No=Object.freeze(Object.defineProperty({__proto__:null,default:Ao},Symbol.toStringTag,{value:"Module"}));var Mr={exports:{}},A={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q=typeof Symbol=="function"&&Symbol.for,gn=Q?Symbol.for("react.element"):60103,yn=Q?Symbol.for("react.portal"):60106,Ct=Q?Symbol.for("react.fragment"):60107,jt=Q?Symbol.for("react.strict_mode"):60108,_t=Q?Symbol.for("react.profiler"):60114,Rt=Q?Symbol.for("react.provider"):60109,Dt=Q?Symbol.for("react.context"):60110,bn=Q?Symbol.for("react.async_mode"):60111,At=Q?Symbol.for("react.concurrent_mode"):60111,Nt=Q?Symbol.for("react.forward_ref"):60112,Wt=Q?Symbol.for("react.suspense"):60113,Wo=Q?Symbol.for("react.suspense_list"):60120,Ft=Q?Symbol.for("react.memo"):60115,It=Q?Symbol.for("react.lazy"):60116,Fo=Q?Symbol.for("react.block"):60121,Io=Q?Symbol.for("react.fundamental"):60117,Lo=Q?Symbol.for("react.responder"):60118,zo=Q?Symbol.for("react.scope"):60119;function te(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case gn:switch(e=e.type,e){case bn:case At:case Ct:case _t:case jt:case Wt:return e;default:switch(e=e&&e.$$typeof,e){case Dt:case Nt:case It:case Ft:case Rt:return e;default:return t}}case yn:return t}}}function Or(e){return te(e)===At}A.AsyncMode=bn;A.ConcurrentMode=At;A.ContextConsumer=Dt;A.ContextProvider=Rt;A.Element=gn;A.ForwardRef=Nt;A.Fragment=Ct;A.Lazy=It;A.Memo=Ft;A.Portal=yn;A.Profiler=_t;A.StrictMode=jt;A.Suspense=Wt;A.isAsyncMode=function(e){return Or(e)||te(e)===bn};A.isConcurrentMode=Or;A.isContextConsumer=function(e){return te(e)===Dt};A.isContextProvider=function(e){return te(e)===Rt};A.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===gn};A.isForwardRef=function(e){return te(e)===Nt};A.isFragment=function(e){return te(e)===Ct};A.isLazy=function(e){return te(e)===It};A.isMemo=function(e){return te(e)===Ft};A.isPortal=function(e){return te(e)===yn};A.isProfiler=function(e){return te(e)===_t};A.isStrictMode=function(e){return te(e)===jt};A.isSuspense=function(e){return te(e)===Wt};A.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ct||e===At||e===_t||e===jt||e===Wt||e===Wo||typeof e=="object"&&e!==null&&(e.$$typeof===It||e.$$typeof===Ft||e.$$typeof===Rt||e.$$typeof===Dt||e.$$typeof===Nt||e.$$typeof===Io||e.$$typeof===Lo||e.$$typeof===zo||e.$$typeof===Fo)};A.typeOf=te;Mr.exports=A;var Bo=Mr.exports,Cr=Bo,Yo={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ho={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},jr={};jr[Cr.ForwardRef]=Yo;jr[Cr.Memo]=Ho;var qo=lo(function(e,t){var n=e.styles,r=wr([n],void 0,d.useContext(dn)),o=d.useRef();return Nn(function(){var i=t.key+"-global",s=new t.sheet.constructor({key:i,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),a=!1,c=document.querySelector('style[data-emotion="'+i+" "+r.name+'"]');return t.sheet.tags.length&&(s.before=t.sheet.tags[0]),c!==null&&(a=!0,c.setAttribute("data-emotion",i),s.hydrate([c])),o.current=[s,a],function(){s.flush()}},[t]),Nn(function(){var i=o.current,s=i[0],a=i[1];if(a){i[1]=!1;return}if(r.next!==void 0&&uo(t,r.next,!0),s.tags.length){var c=s.tags[s.tags.length-1].nextElementSibling;s.before=c,s.flush()}t.insert("",r,s,!1)},[t,r.name]),null});function _r(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return wr(t)}var Go=function(){var t=_r.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};function X(e){const t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new e.constructor(+e):typeof e=="number"||t==="[object Number]"||typeof e=="string"||t==="[object String]"?new Date(e):new Date(NaN)}function he(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}function Qt(e,t){const n=X(e);if(isNaN(t))return he(e,NaN);if(!t)return n;const r=n.getDate(),o=he(e,n.getTime());o.setMonth(n.getMonth()+t+1,0);const i=o.getDate();return r>=i?o:(n.setFullYear(o.getFullYear(),o.getMonth(),r),n)}const Rr=6048e5,Ko=864e5;let Uo={};function Lt(){return Uo}function et(e,t){var a,c,l,f;const n=Lt(),r=(t==null?void 0:t.weekStartsOn)??((c=(a=t==null?void 0:t.locale)==null?void 0:a.options)==null?void 0:c.weekStartsOn)??n.weekStartsOn??((f=(l=n.locale)==null?void 0:l.options)==null?void 0:f.weekStartsOn)??0,o=X(e),i=o.getDay(),s=(i<r?7:0)+i-r;return o.setDate(o.getDate()-s),o.setHours(0,0,0,0),o}function ht(e){return et(e,{weekStartsOn:1})}function Dr(e){const t=X(e),n=t.getFullYear(),r=he(e,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const o=ht(r),i=he(e,0);i.setFullYear(n,0,4),i.setHours(0,0,0,0);const s=ht(i);return t.getTime()>=o.getTime()?n+1:t.getTime()>=s.getTime()?n:n-1}function qn(e){const t=X(e);return t.setHours(0,0,0,0),t}function Gn(e){const t=X(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function Xo(e,t){const n=qn(e),r=qn(t),o=+n-Gn(n),i=+r-Gn(r);return Math.round((o-i)/Ko)}function Qo(e){const t=Dr(e),n=he(e,0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),ht(n)}function Vo(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function Jo(e){if(!Vo(e)&&typeof e!="number")return!1;const t=X(e);return!isNaN(Number(t))}function Zo(e){const t=X(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}function ei(e){const t=X(e);return t.setDate(1),t.setHours(0,0,0,0),t}function ti(e){const t=X(e),n=he(e,0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}const ni={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},ri=(e,t,n)=>{let r;const o=ni[e];return typeof o=="string"?r=o:t===1?r=o.one:r=o.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function Vt(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const oi={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},ii={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},si={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},ai={date:Vt({formats:oi,defaultWidth:"full"}),time:Vt({formats:ii,defaultWidth:"full"}),dateTime:Vt({formats:si,defaultWidth:"full"})},ci={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},li=(e,t,n,r)=>ci[e];function qe(e){return(t,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let o;if(r==="formatting"&&e.formattingValues){const s=e.defaultFormattingWidth||e.defaultWidth,a=n!=null&&n.width?String(n.width):s;o=e.formattingValues[a]||e.formattingValues[s]}else{const s=e.defaultWidth,a=n!=null&&n.width?String(n.width):e.defaultWidth;o=e.values[a]||e.values[s]}const i=e.argumentCallback?e.argumentCallback(t):t;return o[i]}}const ui={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},di={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},fi={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},hi={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},pi={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},mi={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},gi=(e,t)=>{const n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},yi={ordinalNumber:gi,era:qe({values:ui,defaultWidth:"wide"}),quarter:qe({values:di,defaultWidth:"wide",argumentCallback:e=>e-1}),month:qe({values:fi,defaultWidth:"wide"}),day:qe({values:hi,defaultWidth:"wide"}),dayPeriod:qe({values:pi,defaultWidth:"wide",formattingValues:mi,defaultFormattingWidth:"wide"})};function Ge(e){return(t,n={})=>{const r=n.width,o=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=t.match(o);if(!i)return null;const s=i[0],a=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(a)?xi(a,p=>p.test(s)):bi(a,p=>p.test(s));let l;l=e.valueCallback?e.valueCallback(c):c,l=n.valueCallback?n.valueCallback(l):l;const f=t.slice(s.length);return{value:l,rest:f}}}function bi(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function xi(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function vi(e){return(t,n={})=>{const r=t.match(e.matchPattern);if(!r)return null;const o=r[0],i=t.match(e.parsePattern);if(!i)return null;let s=e.valueCallback?e.valueCallback(i[0]):i[0];s=n.valueCallback?n.valueCallback(s):s;const a=t.slice(o.length);return{value:s,rest:a}}}const wi=/^(\d+)(th|st|nd|rd)?/i,Si=/\d+/i,Ei={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Pi={any:[/^b/i,/^(a|c)/i]},ki={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},$i={any:[/1/i,/2/i,/3/i,/4/i]},Ti={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Mi={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Oi={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Ci={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},ji={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},_i={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Ri={ordinalNumber:vi({matchPattern:wi,parsePattern:Si,valueCallback:e=>parseInt(e,10)}),era:Ge({matchPatterns:Ei,defaultMatchWidth:"wide",parsePatterns:Pi,defaultParseWidth:"any"}),quarter:Ge({matchPatterns:ki,defaultMatchWidth:"wide",parsePatterns:$i,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Ge({matchPatterns:Ti,defaultMatchWidth:"wide",parsePatterns:Mi,defaultParseWidth:"any"}),day:Ge({matchPatterns:Oi,defaultMatchWidth:"wide",parsePatterns:Ci,defaultParseWidth:"any"}),dayPeriod:Ge({matchPatterns:ji,defaultMatchWidth:"any",parsePatterns:_i,defaultParseWidth:"any"})},Di={code:"en-US",formatDistance:ri,formatLong:ai,formatRelative:li,localize:yi,match:Ri,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Ai(e){const t=X(e);return Xo(t,ti(t))+1}function Ni(e){const t=X(e),n=+ht(t)-+Qo(t);return Math.round(n/Rr)+1}function Ar(e,t){var f,p,h,v;const n=X(e),r=n.getFullYear(),o=Lt(),i=(t==null?void 0:t.firstWeekContainsDate)??((p=(f=t==null?void 0:t.locale)==null?void 0:f.options)==null?void 0:p.firstWeekContainsDate)??o.firstWeekContainsDate??((v=(h=o.locale)==null?void 0:h.options)==null?void 0:v.firstWeekContainsDate)??1,s=he(e,0);s.setFullYear(r+1,0,i),s.setHours(0,0,0,0);const a=et(s,t),c=he(e,0);c.setFullYear(r,0,i),c.setHours(0,0,0,0);const l=et(c,t);return n.getTime()>=a.getTime()?r+1:n.getTime()>=l.getTime()?r:r-1}function Wi(e,t){var a,c,l,f;const n=Lt(),r=(t==null?void 0:t.firstWeekContainsDate)??((c=(a=t==null?void 0:t.locale)==null?void 0:a.options)==null?void 0:c.firstWeekContainsDate)??n.firstWeekContainsDate??((f=(l=n.locale)==null?void 0:l.options)==null?void 0:f.firstWeekContainsDate)??1,o=Ar(e,t),i=he(e,0);return i.setFullYear(o,0,r),i.setHours(0,0,0,0),et(i,t)}function Fi(e,t){const n=X(e),r=+et(n,t)-+Wi(n,t);return Math.round(r/Rr)+1}function R(e,t){const n=e<0?"-":"",r=Math.abs(e).toString().padStart(t,"0");return n+r}const ye={y(e,t){const n=e.getFullYear(),r=n>0?n:1-n;return R(t==="yy"?r%100:r,t.length)},M(e,t){const n=e.getMonth();return t==="M"?String(n+1):R(n+1,2)},d(e,t){return R(e.getDate(),t.length)},a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(e,t){return R(e.getHours()%12||12,t.length)},H(e,t){return R(e.getHours(),t.length)},m(e,t){return R(e.getMinutes(),t.length)},s(e,t){return R(e.getSeconds(),t.length)},S(e,t){const n=t.length,r=e.getMilliseconds(),o=Math.trunc(r*Math.pow(10,n-3));return R(o,t.length)}},je={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Kn={G:function(e,t,n){const r=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if(t==="yo"){const r=e.getFullYear(),o=r>0?r:1-r;return n.ordinalNumber(o,{unit:"year"})}return ye.y(e,t)},Y:function(e,t,n,r){const o=Ar(e,r),i=o>0?o:1-o;if(t==="YY"){const s=i%100;return R(s,2)}return t==="Yo"?n.ordinalNumber(i,{unit:"year"}):R(i,t.length)},R:function(e,t){const n=Dr(e);return R(n,t.length)},u:function(e,t){const n=e.getFullYear();return R(n,t.length)},Q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return R(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return R(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){const r=e.getMonth();switch(t){case"M":case"MM":return ye.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){const r=e.getMonth();switch(t){case"L":return String(r+1);case"LL":return R(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){const o=Fi(e,r);return t==="wo"?n.ordinalNumber(o,{unit:"week"}):R(o,t.length)},I:function(e,t,n){const r=Ni(e);return t==="Io"?n.ordinalNumber(r,{unit:"week"}):R(r,t.length)},d:function(e,t,n){return t==="do"?n.ordinalNumber(e.getDate(),{unit:"date"}):ye.d(e,t)},D:function(e,t,n){const r=Ai(e);return t==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):R(r,t.length)},E:function(e,t,n){const r=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){const o=e.getDay(),i=(o-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return R(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});case"eeee":default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){const o=e.getDay(),i=(o-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return R(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});case"cccc":default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(e,t,n){const r=e.getDay(),o=r===0?7:r;switch(t){case"i":return String(o);case"ii":return R(o,t.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){const o=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(e,t,n){const r=e.getHours();let o;switch(r===12?o=je.noon:r===0?o=je.midnight:o=r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(e,t,n){const r=e.getHours();let o;switch(r>=17?o=je.evening:r>=12?o=je.afternoon:r>=4?o=je.morning:o=je.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(e,t,n){if(t==="ho"){let r=e.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return ye.h(e,t)},H:function(e,t,n){return t==="Ho"?n.ordinalNumber(e.getHours(),{unit:"hour"}):ye.H(e,t)},K:function(e,t,n){const r=e.getHours()%12;return t==="Ko"?n.ordinalNumber(r,{unit:"hour"}):R(r,t.length)},k:function(e,t,n){let r=e.getHours();return r===0&&(r=24),t==="ko"?n.ordinalNumber(r,{unit:"hour"}):R(r,t.length)},m:function(e,t,n){return t==="mo"?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):ye.m(e,t)},s:function(e,t,n){return t==="so"?n.ordinalNumber(e.getSeconds(),{unit:"second"}):ye.s(e,t)},S:function(e,t){return ye.S(e,t)},X:function(e,t,n){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(t){case"X":return Xn(r);case"XXXX":case"XX":return Se(r);case"XXXXX":case"XXX":default:return Se(r,":")}},x:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"x":return Xn(r);case"xxxx":case"xx":return Se(r);case"xxxxx":case"xxx":default:return Se(r,":")}},O:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+Un(r,":");case"OOOO":default:return"GMT"+Se(r,":")}},z:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+Un(r,":");case"zzzz":default:return"GMT"+Se(r,":")}},t:function(e,t,n){const r=Math.trunc(e.getTime()/1e3);return R(r,t.length)},T:function(e,t,n){const r=e.getTime();return R(r,t.length)}};function Un(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),o=Math.trunc(r/60),i=r%60;return i===0?n+String(o):n+String(o)+t+R(i,2)}function Xn(e,t){return e%60===0?(e>0?"-":"+")+R(Math.abs(e)/60,2):Se(e,t)}function Se(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),o=R(Math.trunc(r/60),2),i=R(r%60,2);return n+o+t+i}const Qn=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},Nr=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},Ii=(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],r=n[1],o=n[2];if(!o)return Qn(e,t);let i;switch(r){case"P":i=t.dateTime({width:"short"});break;case"PP":i=t.dateTime({width:"medium"});break;case"PPP":i=t.dateTime({width:"long"});break;case"PPPP":default:i=t.dateTime({width:"full"});break}return i.replace("{{date}}",Qn(r,t)).replace("{{time}}",Nr(o,t))},Li={p:Nr,P:Ii},zi=/^D+$/,Bi=/^Y+$/,Yi=["D","DD","YY","YYYY"];function Hi(e){return zi.test(e)}function qi(e){return Bi.test(e)}function Gi(e,t,n){const r=Ki(e,t,n);if(console.warn(r),Yi.includes(e))throw new RangeError(r)}function Ki(e,t,n){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Ui=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Xi=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Qi=/^'([^]*?)'?$/,Vi=/''/g,Ji=/[a-zA-Z]/;function Wr(e,t,n){var f,p,h,v,g,m,S,E;const r=Lt(),o=(n==null?void 0:n.locale)??r.locale??Di,i=(n==null?void 0:n.firstWeekContainsDate)??((p=(f=n==null?void 0:n.locale)==null?void 0:f.options)==null?void 0:p.firstWeekContainsDate)??r.firstWeekContainsDate??((v=(h=r.locale)==null?void 0:h.options)==null?void 0:v.firstWeekContainsDate)??1,s=(n==null?void 0:n.weekStartsOn)??((m=(g=n==null?void 0:n.locale)==null?void 0:g.options)==null?void 0:m.weekStartsOn)??r.weekStartsOn??((E=(S=r.locale)==null?void 0:S.options)==null?void 0:E.weekStartsOn)??0,a=X(e);if(!Jo(a))throw new RangeError("Invalid time value");let c=t.match(Xi).map(P=>{const y=P[0];if(y==="p"||y==="P"){const k=Li[y];return k(P,o.formatLong)}return P}).join("").match(Ui).map(P=>{if(P==="''")return{isToken:!1,value:"'"};const y=P[0];if(y==="'")return{isToken:!1,value:Zi(P)};if(Kn[y])return{isToken:!0,value:P};if(y.match(Ji))throw new RangeError("Format string contains an unescaped latin alphabet character `"+y+"`");return{isToken:!1,value:P}});o.localize.preprocessor&&(c=o.localize.preprocessor(a,c));const l={firstWeekContainsDate:i,weekStartsOn:s,locale:o};return c.map(P=>{if(!P.isToken)return P.value;const y=P.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&qi(y)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&Hi(y))&&Gi(y,t,String(e));const k=Kn[y[0]];return k(a,y,o.localize,l)}).join("")}function Zi(e){const t=e.match(Qi);return t?t[1].replace(Vi,"'"):e}function es(e,t){const n=X(e),r=X(t);return n.getTime()>r.getTime()}function ts(e,t){const n=X(e),r=X(t);return+n<+r}const ns=e=>d.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",...e},d.createElement("title",null,`
		solidleft
	`),d.createElement("path",{d:"M10.293 16.707c-0.187-0.188-0.292-0.442-0.292-0.707s0.105-0.519 0.292-0.707l10-10c0.092-0.098 0.202-0.177 0.325-0.232s0.255-0.084 0.389-0.086c0.134-0.002 0.268 0.022 0.392 0.073s0.238 0.125 0.333 0.22c0.095 0.095 0.17 0.208 0.22 0.333s0.075 0.258 0.073 0.392c-0.002 0.134-0.032 0.267-0.086 0.389s-0.133 0.233-0.232 0.325l-9.293 9.293 9.293 9.293c0.098 0.091 0.177 0.202 0.232 0.325s0.084 0.255 0.086 0.389c0.002 0.134-0.022 0.268-0.073 0.392s-0.125 0.238-0.22 0.333c-0.095 0.095-0.208 0.17-0.333 0.22s-0.258 0.075-0.392 0.073c-0.134-0.002-0.267-0.032-0.389-0.086s-0.233-0.134-0.325-0.232l-10-10z"})),rs=e=>d.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",...e},d.createElement("title",null,`
		solid-right
	`),d.createElement("path",{d:"M21.707 16.707c0.187-0.188 0.292-0.442 0.292-0.707s-0.105-0.519-0.292-0.707l-10-10c-0.092-0.098-0.202-0.177-0.325-0.232s-0.255-0.084-0.389-0.086c-0.134-0.002-0.268 0.022-0.392 0.073s-0.238 0.125-0.333 0.22c-0.095 0.095-0.17 0.208-0.22 0.333s-0.075 0.258-0.073 0.392c0.002 0.134 0.032 0.267 0.086 0.389s0.133 0.233 0.232 0.325l9.293 9.293-9.293 9.293c-0.098 0.091-0.177 0.202-0.232 0.325s-0.084 0.255-0.086 0.389c-0.002 0.134 0.022 0.268 0.073 0.392s0.125 0.238 0.22 0.333c0.095 0.095 0.208 0.17 0.333 0.22s0.258 0.075 0.392 0.073c0.134-0.002 0.267-0.032 0.389-0.086s0.233-0.134 0.325-0.232l10-10z"})),os=x.div`
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

`,is=x(ns)`

fill: ${e=>e.disabled?e.theme.colors.primary.bg:e.theme.colors.primary.accent};
  width: 14px;
  height: auto;


`,ss=x(rs)`

fill: ${e=>e.disabled?e.theme.colors.primary.bg:e.theme.colors.primary.accent};
  width: 14px;
  height: auto;


`,as=({selectedDate:e,setSelectedDate:t})=>{const n=new Date().getMonth(),r=new Date().getFullYear(),o=ts(e,Qt(new Date,-12)),i=es(e,new Date(r,n,1)),s=Wr(e,"MMMM"),a=e.getFullYear(),c=()=>{t(Qt(e,-1))},l=()=>{t(Qt(e,1))};return u.jsxs(os,{children:[u.jsx("button",{onClick:c,disabled:o,children:u.jsx(is,{disabled:o})}),u.jsx("span",{children:`${s}, ${a}`}),u.jsx("button",{onClick:l,disabled:i,children:u.jsx(ss,{disabled:i})})]})};function V(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Fr(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=Fr(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function xe(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=Fr(e))&&(r&&(r+=" "),r+=t);return r}function Ir(e){return typeof e=="string"}function cs(e,t,n){return e===void 0||Ir(e)?t:b({},t,{ownerState:b({},t.ownerState,n)})}function Lr(e,t=[]){if(e===void 0)return{};const n={};return Object.keys(e).filter(r=>r.match(/^on[A-Z]/)&&typeof e[r]=="function"&&!t.includes(r)).forEach(r=>{n[r]=e[r]}),n}function ls(e,t,n){return typeof e=="function"?e(t,n):e}function Vn(e){if(e===void 0)return{};const t={};return Object.keys(e).filter(n=>!(n.match(/^on[A-Z]/)&&typeof e[n]=="function")).forEach(n=>{t[n]=e[n]}),t}function us(e){const{getSlotProps:t,additionalProps:n,externalSlotProps:r,externalForwardedProps:o,className:i}=e;if(!t){const v=xe(n==null?void 0:n.className,i,o==null?void 0:o.className,r==null?void 0:r.className),g=b({},n==null?void 0:n.style,o==null?void 0:o.style,r==null?void 0:r.style),m=b({},n,o,r);return v.length>0&&(m.className=v),Object.keys(g).length>0&&(m.style=g),{props:m,internalRef:void 0}}const s=Lr(b({},o,r)),a=Vn(r),c=Vn(o),l=t(s),f=xe(l==null?void 0:l.className,n==null?void 0:n.className,i,o==null?void 0:o.className,r==null?void 0:r.className),p=b({},l==null?void 0:l.style,n==null?void 0:n.style,o==null?void 0:o.style,r==null?void 0:r.style),h=b({},l,n,c,a);return f.length>0&&(h.className=f),Object.keys(p).length>0&&(h.style=p),{props:h,internalRef:l.ref}}const ds=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function pt(e){var t;const{elementType:n,externalSlotProps:r,ownerState:o,skipResolvingSlotProps:i=!1}=e,s=V(e,ds),a=i?{}:ls(r,o),{props:c,internalRef:l}=us(b({},s,{externalSlotProps:a})),f=ke(l,a==null?void 0:a.ref,(t=e.additionalProps)==null?void 0:t.ref);return cs(n,b({},c,{ref:f}),o)}var rt={},zr={exports:{}};(function(e){function t(n){return n&&n.__esModule?n:{default:n}}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(zr);var Br=zr.exports;const fs=me(fo);var Jt={exports:{}},Jn;function hs(){return Jn||(Jn=1,function(e){function t(n,r){if(n==null)return{};var o={},i=Object.keys(n),s,a;for(a=0;a<i.length;a++)s=i[a],!(r.indexOf(s)>=0)&&(o[s]=n[s]);return o}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}(Jt)),Jt.exports}let sn;typeof document=="object"&&(sn=po({key:"css",prepend:!0}));function ps(e){const{injectFirst:t,children:n}=e;return t&&sn?u.jsx(ho,{value:sn,children:n}):n}function ms(e){return e==null||Object.keys(e).length===0}function gs(e){const{styles:t,defaultTheme:n={}}=e,r=typeof t=="function"?o=>t(ms(o)?n:o):t;return u.jsx(qo,{styles:r})}/**
 * @mui/styled-engine v5.15.14
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function ys(e,t){return mo(e,t)}const bs=(e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))},xs=Object.freeze(Object.defineProperty({__proto__:null,GlobalStyles:gs,StyledEngineProvider:ps,ThemeContext:dn,css:_r,default:ys,internal_processStyles:bs,keyframes:Go},Symbol.toStringTag,{value:"Module"})),vs=me(xs),ws=me(yo),Ss=me(Po),Es=me(Eo),Ps=["values","unit","step"],ks=e=>{const t=Object.keys(e).map(n=>({key:n,val:e[n]}))||[];return t.sort((n,r)=>n.val-r.val),t.reduce((n,r)=>b({},n,{[r.key]:r.val}),{})};function Yr(e){const{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5}=e,o=V(e,Ps),i=ks(t),s=Object.keys(i);function a(h){return`@media (min-width:${typeof t[h]=="number"?t[h]:h}${n})`}function c(h){return`@media (max-width:${(typeof t[h]=="number"?t[h]:h)-r/100}${n})`}function l(h,v){const g=s.indexOf(v);return`@media (min-width:${typeof t[h]=="number"?t[h]:h}${n}) and (max-width:${(g!==-1&&typeof t[s[g]]=="number"?t[s[g]]:v)-r/100}${n})`}function f(h){return s.indexOf(h)+1<s.length?l(h,s[s.indexOf(h)+1]):a(h)}function p(h){const v=s.indexOf(h);return v===0?a(s[1]):v===s.length-1?c(s[v]):l(h,s[s.indexOf(h)+1]).replace("@media","@media not all and")}return b({keys:s,values:i,up:a,down:c,between:l,only:f,not:p,unit:n},o)}const $s={borderRadius:4},Ts=$s;function Qe(e,t){return t?de(e,t,{clone:!1}):e}const xn={xs:0,sm:600,md:900,lg:1200,xl:1536},Zn={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${xn[e]}px)`};function pe(e,t,n){const r=e.theme||{};if(Array.isArray(t)){const i=r.breakpoints||Zn;return t.reduce((s,a,c)=>(s[i.up(i.keys[c])]=n(t[c]),s),{})}if(typeof t=="object"){const i=r.breakpoints||Zn;return Object.keys(t).reduce((s,a)=>{if(Object.keys(i.values||xn).indexOf(a)!==-1){const c=i.up(a);s[c]=n(t[a],a)}else{const c=a;s[c]=t[c]}return s},{})}return n(t)}function Ms(e={}){var t;return((t=e.keys)==null?void 0:t.reduce((r,o)=>{const i=e.up(o);return r[i]={},r},{}))||{}}function Os(e,t){return e.reduce((n,r)=>{const o=n[r];return(!o||Object.keys(o).length===0)&&delete n[r],n},t)}function zt(e,t,n=!0){if(!t||typeof t!="string")return null;if(e&&e.vars&&n){const r=`vars.${t}`.split(".").reduce((o,i)=>o&&o[i]?o[i]:null,e);if(r!=null)return r}return t.split(".").reduce((r,o)=>r&&r[o]!=null?r[o]:null,e)}function mt(e,t,n,r=n){let o;return typeof e=="function"?o=e(n):Array.isArray(e)?o=e[n]||r:o=zt(e,n)||r,t&&(o=t(o,r,e)),o}function H(e){const{prop:t,cssProperty:n=e.prop,themeKey:r,transform:o}=e,i=s=>{if(s[t]==null)return null;const a=s[t],c=s.theme,l=zt(c,r)||{};return pe(s,a,p=>{let h=mt(l,o,p);return p===h&&typeof p=="string"&&(h=mt(l,o,`${t}${p==="default"?"":pn(p)}`,p)),n===!1?h:{[n]:h}})};return i.propTypes={},i.filterProps=[t],i}function Cs(e){const t={};return n=>(t[n]===void 0&&(t[n]=e(n)),t[n])}const js={m:"margin",p:"padding"},_s={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},er={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},Rs=Cs(e=>{if(e.length>2)if(er[e])e=er[e];else return[e];const[t,n]=e.split(""),r=js[t],o=_s[n]||"";return Array.isArray(o)?o.map(i=>r+i):[r+o]}),vn=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],wn=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...vn,...wn];function ot(e,t,n,r){var o;const i=(o=zt(e,t,!1))!=null?o:n;return typeof i=="number"?s=>typeof s=="string"?s:i*s:Array.isArray(i)?s=>typeof s=="string"?s:i[s]:typeof i=="function"?i:()=>{}}function Hr(e){return ot(e,"spacing",8)}function it(e,t){if(typeof t=="string"||t==null)return t;const n=Math.abs(t),r=e(n);return t>=0?r:typeof r=="number"?-r:`-${r}`}function Ds(e,t){return n=>e.reduce((r,o)=>(r[o]=it(t,n),r),{})}function As(e,t,n,r){if(t.indexOf(n)===-1)return null;const o=Rs(n),i=Ds(o,r),s=e[n];return pe(e,s,i)}function qr(e,t){const n=Hr(e.theme);return Object.keys(e).map(r=>As(e,t,r,n)).reduce(Qe,{})}function z(e){return qr(e,vn)}z.propTypes={};z.filterProps=vn;function B(e){return qr(e,wn)}B.propTypes={};B.filterProps=wn;function Ns(e=8){if(e.mui)return e;const t=Hr({spacing:e}),n=(...r)=>(r.length===0?[1]:r).map(i=>{const s=t(i);return typeof s=="number"?`${s}px`:s}).join(" ");return n.mui=!0,n}function Bt(...e){const t=e.reduce((r,o)=>(o.filterProps.forEach(i=>{r[i]=o}),r),{}),n=r=>Object.keys(r).reduce((o,i)=>t[i]?Qe(o,t[i](r)):o,{});return n.propTypes={},n.filterProps=e.reduce((r,o)=>r.concat(o.filterProps),[]),n}function oe(e){return typeof e!="number"?e:`${e}px solid`}function ae(e,t){return H({prop:e,themeKey:"borders",transform:t})}const Ws=ae("border",oe),Fs=ae("borderTop",oe),Is=ae("borderRight",oe),Ls=ae("borderBottom",oe),zs=ae("borderLeft",oe),Bs=ae("borderColor"),Ys=ae("borderTopColor"),Hs=ae("borderRightColor"),qs=ae("borderBottomColor"),Gs=ae("borderLeftColor"),Ks=ae("outline",oe),Us=ae("outlineColor"),Yt=e=>{if(e.borderRadius!==void 0&&e.borderRadius!==null){const t=ot(e.theme,"shape.borderRadius",4),n=r=>({borderRadius:it(t,r)});return pe(e,e.borderRadius,n)}return null};Yt.propTypes={};Yt.filterProps=["borderRadius"];Bt(Ws,Fs,Is,Ls,zs,Bs,Ys,Hs,qs,Gs,Yt,Ks,Us);const Ht=e=>{if(e.gap!==void 0&&e.gap!==null){const t=ot(e.theme,"spacing",8),n=r=>({gap:it(t,r)});return pe(e,e.gap,n)}return null};Ht.propTypes={};Ht.filterProps=["gap"];const qt=e=>{if(e.columnGap!==void 0&&e.columnGap!==null){const t=ot(e.theme,"spacing",8),n=r=>({columnGap:it(t,r)});return pe(e,e.columnGap,n)}return null};qt.propTypes={};qt.filterProps=["columnGap"];const Gt=e=>{if(e.rowGap!==void 0&&e.rowGap!==null){const t=ot(e.theme,"spacing",8),n=r=>({rowGap:it(t,r)});return pe(e,e.rowGap,n)}return null};Gt.propTypes={};Gt.filterProps=["rowGap"];const Xs=H({prop:"gridColumn"}),Qs=H({prop:"gridRow"}),Vs=H({prop:"gridAutoFlow"}),Js=H({prop:"gridAutoColumns"}),Zs=H({prop:"gridAutoRows"}),ea=H({prop:"gridTemplateColumns"}),ta=H({prop:"gridTemplateRows"}),na=H({prop:"gridTemplateAreas"}),ra=H({prop:"gridArea"});Bt(Ht,qt,Gt,Xs,Qs,Vs,Js,Zs,ea,ta,na,ra);function Ie(e,t){return t==="grey"?t:e}const oa=H({prop:"color",themeKey:"palette",transform:Ie}),ia=H({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:Ie}),sa=H({prop:"backgroundColor",themeKey:"palette",transform:Ie});Bt(oa,ia,sa);function ee(e){return e<=1&&e!==0?`${e*100}%`:e}const aa=H({prop:"width",transform:ee}),Sn=e=>{if(e.maxWidth!==void 0&&e.maxWidth!==null){const t=n=>{var r,o;const i=((r=e.theme)==null||(r=r.breakpoints)==null||(r=r.values)==null?void 0:r[n])||xn[n];return i?((o=e.theme)==null||(o=o.breakpoints)==null?void 0:o.unit)!=="px"?{maxWidth:`${i}${e.theme.breakpoints.unit}`}:{maxWidth:i}:{maxWidth:ee(n)}};return pe(e,e.maxWidth,t)}return null};Sn.filterProps=["maxWidth"];const ca=H({prop:"minWidth",transform:ee}),la=H({prop:"height",transform:ee}),ua=H({prop:"maxHeight",transform:ee}),da=H({prop:"minHeight",transform:ee});H({prop:"size",cssProperty:"width",transform:ee});H({prop:"size",cssProperty:"height",transform:ee});const fa=H({prop:"boxSizing"});Bt(aa,Sn,ca,la,ua,da,fa);const ha={border:{themeKey:"borders",transform:oe},borderTop:{themeKey:"borders",transform:oe},borderRight:{themeKey:"borders",transform:oe},borderBottom:{themeKey:"borders",transform:oe},borderLeft:{themeKey:"borders",transform:oe},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:oe},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:Yt},color:{themeKey:"palette",transform:Ie},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:Ie},backgroundColor:{themeKey:"palette",transform:Ie},p:{style:B},pt:{style:B},pr:{style:B},pb:{style:B},pl:{style:B},px:{style:B},py:{style:B},padding:{style:B},paddingTop:{style:B},paddingRight:{style:B},paddingBottom:{style:B},paddingLeft:{style:B},paddingX:{style:B},paddingY:{style:B},paddingInline:{style:B},paddingInlineStart:{style:B},paddingInlineEnd:{style:B},paddingBlock:{style:B},paddingBlockStart:{style:B},paddingBlockEnd:{style:B},m:{style:z},mt:{style:z},mr:{style:z},mb:{style:z},ml:{style:z},mx:{style:z},my:{style:z},margin:{style:z},marginTop:{style:z},marginRight:{style:z},marginBottom:{style:z},marginLeft:{style:z},marginX:{style:z},marginY:{style:z},marginInline:{style:z},marginInlineStart:{style:z},marginInlineEnd:{style:z},marginBlock:{style:z},marginBlockStart:{style:z},marginBlockEnd:{style:z},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:Ht},rowGap:{style:Gt},columnGap:{style:qt},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:ee},maxWidth:{style:Sn},minWidth:{transform:ee},height:{transform:ee},maxHeight:{transform:ee},minHeight:{transform:ee},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}},st=ha;function pa(...e){const t=e.reduce((r,o)=>r.concat(Object.keys(o)),[]),n=new Set(t);return e.every(r=>n.size===Object.keys(r).length)}function ma(e,t){return typeof e=="function"?e(t):e}function Gr(){function e(n,r,o,i){const s={[n]:r,theme:o},a=i[n];if(!a)return{[n]:r};const{cssProperty:c=n,themeKey:l,transform:f,style:p}=a;if(r==null)return null;if(l==="typography"&&r==="inherit")return{[n]:r};const h=zt(o,l)||{};return p?p(s):pe(s,r,g=>{let m=mt(h,f,g);return g===m&&typeof g=="string"&&(m=mt(h,f,`${n}${g==="default"?"":pn(g)}`,g)),c===!1?m:{[c]:m}})}function t(n){var r;const{sx:o,theme:i={}}=n||{};if(!o)return null;const s=(r=i.unstable_sxConfig)!=null?r:st;function a(c){let l=c;if(typeof c=="function")l=c(i);else if(typeof c!="object")return c;if(!l)return null;const f=Ms(i.breakpoints),p=Object.keys(f);let h=f;return Object.keys(l).forEach(v=>{const g=ma(l[v],i);if(g!=null)if(typeof g=="object")if(s[v])h=Qe(h,e(v,g,i,s));else{const m=pe({theme:i},g,S=>({[v]:S}));pa(m,g)?h[v]=t({sx:g,theme:i}):h=Qe(h,m)}else h=Qe(h,e(v,g,i,s))}),Os(p,h)}return Array.isArray(o)?o.map(a):a(o)}return t}const Kr=Gr();Kr.filterProps=["sx"];const En=Kr;function Ur(e,t){const n=this;return n.vars&&typeof n.getColorSchemeSelector=="function"?{[n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/,"*:where($1)")]:t}:n.palette.mode===e?t:{}}const ga=["breakpoints","palette","spacing","shape"];function Pn(e={},...t){const{breakpoints:n={},palette:r={},spacing:o,shape:i={}}=e,s=V(e,ga),a=Yr(n),c=Ns(o);let l=de({breakpoints:a,direction:"ltr",components:{},palette:b({mode:"light"},r),spacing:c,shape:b({},Ts,i)},s);return l.applyStyles=Ur,l=t.reduce((f,p)=>de(f,p),l),l.unstable_sxConfig=b({},st,s==null?void 0:s.unstable_sxConfig),l.unstable_sx=function(p){return En({sx:p,theme:this})},l}const ya=Object.freeze(Object.defineProperty({__proto__:null,default:Pn,private_createBreakpoints:Yr,unstable_applyStyles:Ur},Symbol.toStringTag,{value:"Module"})),ba=me(ya),xa=["sx"],va=e=>{var t,n;const r={systemProps:{},otherProps:{}},o=(t=e==null||(n=e.theme)==null?void 0:n.unstable_sxConfig)!=null?t:st;return Object.keys(e).forEach(i=>{o[i]?r.systemProps[i]=e[i]:r.otherProps[i]=e[i]}),r};function wa(e){const{sx:t}=e,n=V(e,xa),{systemProps:r,otherProps:o}=va(n);let i;return Array.isArray(t)?i=[r,...t]:typeof t=="function"?i=(...s)=>{const a=t(...s);return be(a)?b({},r,a):r}:i=b({},r,t),b({},o,{sx:i})}const Sa=Object.freeze(Object.defineProperty({__proto__:null,default:En,extendSxProp:wa,unstable_createStyleFunctionSx:Gr,unstable_defaultSxConfig:st},Symbol.toStringTag,{value:"Module"})),Ea=me(Sa);var Le=Br;Object.defineProperty(rt,"__esModule",{value:!0});var Pa=rt.default=Wa;rt.shouldForwardProp=dt;rt.systemDefaultTheme=void 0;var re=Le(fs),an=Le(hs()),tr=ja(vs),ka=ws;Le(Ss);Le(Es);var $a=Le(ba),Ta=Le(Ea);const Ma=["ownerState"],Oa=["variants"],Ca=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function Xr(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(Xr=function(r){return r?n:t})(e)}function ja(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=Xr(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(i!=="default"&&Object.prototype.hasOwnProperty.call(e,i)){var s=o?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}function _a(e){return Object.keys(e).length===0}function Ra(e){return typeof e=="string"&&e.charCodeAt(0)>96}function dt(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const Da=rt.systemDefaultTheme=(0,$a.default)(),Aa=e=>e&&e.charAt(0).toLowerCase()+e.slice(1);function ut({defaultTheme:e,theme:t,themeId:n}){return _a(t)?e:t[n]||t}function Na(e){return e?(t,n)=>n[e]:null}function ft(e,t){let{ownerState:n}=t,r=(0,an.default)(t,Ma);const o=typeof e=="function"?e((0,re.default)({ownerState:n},r)):e;if(Array.isArray(o))return o.flatMap(i=>ft(i,(0,re.default)({ownerState:n},r)));if(o&&typeof o=="object"&&Array.isArray(o.variants)){const{variants:i=[]}=o;let a=(0,an.default)(o,Oa);return i.forEach(c=>{let l=!0;typeof c.props=="function"?l=c.props((0,re.default)({ownerState:n},r,n)):Object.keys(c.props).forEach(f=>{(n==null?void 0:n[f])!==c.props[f]&&r[f]!==c.props[f]&&(l=!1)}),l&&(Array.isArray(a)||(a=[a]),a.push(typeof c.style=="function"?c.style((0,re.default)({ownerState:n},r,n)):c.style))}),a}return o}function Wa(e={}){const{themeId:t,defaultTheme:n=Da,rootShouldForwardProp:r=dt,slotShouldForwardProp:o=dt}=e,i=s=>(0,Ta.default)((0,re.default)({},s,{theme:ut((0,re.default)({},s,{defaultTheme:n,themeId:t}))}));return i.__mui_systemSx=!0,(s,a={})=>{(0,tr.internal_processStyles)(s,w=>w.filter(C=>!(C!=null&&C.__mui_systemSx)));const{name:c,slot:l,skipVariantsResolver:f,skipSx:p,overridesResolver:h=Na(Aa(l))}=a,v=(0,an.default)(a,Ca),g=f!==void 0?f:l&&l!=="Root"&&l!=="root"||!1,m=p||!1;let S,E=dt;l==="Root"||l==="root"?E=r:l?E=o:Ra(s)&&(E=void 0);const P=(0,tr.default)(s,(0,re.default)({shouldForwardProp:E,label:S},v)),y=w=>typeof w=="function"&&w.__emotion_real!==w||(0,ka.isPlainObject)(w)?C=>ft(w,(0,re.default)({},C,{theme:ut({theme:C.theme,defaultTheme:n,themeId:t})})):w,k=(w,...C)=>{let j=y(w);const W=C?C.map(y):[];c&&h&&W.push(I=>{const _=ut((0,re.default)({},I,{defaultTheme:n,themeId:t}));if(!_.components||!_.components[c]||!_.components[c].styleOverrides)return null;const L=_.components[c].styleOverrides,O={};return Object.entries(L).forEach(([$,T])=>{O[$]=ft(T,(0,re.default)({},I,{theme:_}))}),h(I,O)}),c&&!g&&W.push(I=>{var _;const L=ut((0,re.default)({},I,{defaultTheme:n,themeId:t})),O=L==null||(_=L.components)==null||(_=_[c])==null?void 0:_.variants;return ft({variants:O},(0,re.default)({},I,{theme:L}))}),m||W.push(i);const K=W.length-C.length;if(Array.isArray(w)&&K>0){const I=new Array(K).fill("");j=[...w,...I],j.raw=[...w.raw,...I]}const Y=P(j,...W);return s.muiName&&(Y.muiName=s.muiName),Y};return P.withConfig&&(k.withConfig=P.withConfig),k}}function Fa(e,t){return b({toolbar:{minHeight:56,[e.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[e.up("sm")]:{minHeight:64}}},t)}var q={};const Ia=me(bo),La=me(No);var Qr=Br;Object.defineProperty(q,"__esModule",{value:!0});var nr=q.alpha=eo;q.blend=Za;q.colorChannel=void 0;var za=q.darken=$n;q.decomposeColor=ie;q.emphasize=Ja;var Ba=q.getContrastRatio=Ua;q.getLuminance=gt;q.hexToRgb=Vr;q.hslToRgb=Zr;var Ya=q.lighten=Tn;q.private_safeAlpha=Xa;q.private_safeColorChannel=void 0;q.private_safeDarken=Qa;q.private_safeEmphasize=to;q.private_safeLighten=Va;q.recomposeColor=ze;q.rgbToHex=Ka;var rr=Qr(Ia),Ha=Qr(La);function kn(e,t=0,n=1){return(0,Ha.default)(e,t,n)}function Vr(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let n=e.match(t);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,o)=>o<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function qa(e){const t=e.toString(16);return t.length===1?`0${t}`:t}function ie(e){if(e.type)return e;if(e.charAt(0)==="#")return ie(Vr(e));const t=e.indexOf("("),n=e.substring(0,t);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error((0,rr.default)(9,e));let r=e.substring(t+1,e.length-1),o;if(n==="color"){if(r=r.split(" "),o=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(o)===-1)throw new Error((0,rr.default)(10,o))}else r=r.split(",");return r=r.map(i=>parseFloat(i)),{type:n,values:r,colorSpace:o}}const Jr=e=>{const t=ie(e);return t.values.slice(0,3).map((n,r)=>t.type.indexOf("hsl")!==-1&&r!==0?`${n}%`:n).join(" ")};q.colorChannel=Jr;const Ga=(e,t)=>{try{return Jr(e)}catch{return e}};q.private_safeColorChannel=Ga;function ze(e){const{type:t,colorSpace:n}=e;let{values:r}=e;return t.indexOf("rgb")!==-1?r=r.map((o,i)=>i<3?parseInt(o,10):o):t.indexOf("hsl")!==-1&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),t.indexOf("color")!==-1?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${t}(${r})`}function Ka(e){if(e.indexOf("#")===0)return e;const{values:t}=ie(e);return`#${t.map((n,r)=>qa(r===3?Math.round(255*n):n)).join("")}`}function Zr(e){e=ie(e);const{values:t}=e,n=t[0],r=t[1]/100,o=t[2]/100,i=r*Math.min(o,1-o),s=(l,f=(l+n/30)%12)=>o-i*Math.max(Math.min(f-3,9-f,1),-1);let a="rgb";const c=[Math.round(s(0)*255),Math.round(s(8)*255),Math.round(s(4)*255)];return e.type==="hsla"&&(a+="a",c.push(t[3])),ze({type:a,values:c})}function gt(e){e=ie(e);let t=e.type==="hsl"||e.type==="hsla"?ie(Zr(e)).values:e.values;return t=t.map(n=>(e.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function Ua(e,t){const n=gt(e),r=gt(t);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function eo(e,t){return e=ie(e),t=kn(t),(e.type==="rgb"||e.type==="hsl")&&(e.type+="a"),e.type==="color"?e.values[3]=`/${t}`:e.values[3]=t,ze(e)}function Xa(e,t,n){try{return eo(e,t)}catch{return e}}function $n(e,t){if(e=ie(e),t=kn(t),e.type.indexOf("hsl")!==-1)e.values[2]*=1-t;else if(e.type.indexOf("rgb")!==-1||e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]*=1-t;return ze(e)}function Qa(e,t,n){try{return $n(e,t)}catch{return e}}function Tn(e,t){if(e=ie(e),t=kn(t),e.type.indexOf("hsl")!==-1)e.values[2]+=(100-e.values[2])*t;else if(e.type.indexOf("rgb")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;else if(e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(1-e.values[n])*t;return ze(e)}function Va(e,t,n){try{return Tn(e,t)}catch{return e}}function Ja(e,t=.15){return gt(e)>.5?$n(e,t):Tn(e,t)}function to(e,t,n){try{return to(e,t)}catch{return e}}function Za(e,t,n,r=1){const o=(c,l)=>Math.round((c**(1/r)*(1-n)+l**(1/r)*n)**r),i=ie(e),s=ie(t),a=[o(i.values[0],s.values[0]),o(i.values[1],s.values[1]),o(i.values[2],s.values[2])];return ze({type:"rgb",values:a})}const ec={black:"#000",white:"#fff"},tt=ec,tc={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},nc=tc,rc={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},_e=rc,oc={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},Re=oc,ic={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},Ke=ic,sc={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},De=sc,ac={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},Ae=ac,cc={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},Ne=cc,lc=["mode","contrastThreshold","tonalOffset"],or={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:tt.white,default:tt.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},Zt={text:{primary:tt.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:tt.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function ir(e,t,n,r){const o=r.light||r,i=r.dark||r*1.5;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:t==="light"?e.light=Ya(e.main,o):t==="dark"&&(e.dark=za(e.main,i)))}function uc(e="light"){return e==="dark"?{main:De[200],light:De[50],dark:De[400]}:{main:De[700],light:De[400],dark:De[800]}}function dc(e="light"){return e==="dark"?{main:_e[200],light:_e[50],dark:_e[400]}:{main:_e[500],light:_e[300],dark:_e[700]}}function fc(e="light"){return e==="dark"?{main:Re[500],light:Re[300],dark:Re[700]}:{main:Re[700],light:Re[400],dark:Re[800]}}function hc(e="light"){return e==="dark"?{main:Ae[400],light:Ae[300],dark:Ae[700]}:{main:Ae[700],light:Ae[500],dark:Ae[900]}}function pc(e="light"){return e==="dark"?{main:Ne[400],light:Ne[300],dark:Ne[700]}:{main:Ne[800],light:Ne[500],dark:Ne[900]}}function mc(e="light"){return e==="dark"?{main:Ke[400],light:Ke[300],dark:Ke[700]}:{main:"#ed6c02",light:Ke[500],dark:Ke[900]}}function gc(e){const{mode:t="light",contrastThreshold:n=3,tonalOffset:r=.2}=e,o=V(e,lc),i=e.primary||uc(t),s=e.secondary||dc(t),a=e.error||fc(t),c=e.info||hc(t),l=e.success||pc(t),f=e.warning||mc(t);function p(m){return Ba(m,Zt.text.primary)>=n?Zt.text.primary:or.text.primary}const h=({color:m,name:S,mainShade:E=500,lightShade:P=300,darkShade:y=700})=>{if(m=b({},m),!m.main&&m[E]&&(m.main=m[E]),!m.hasOwnProperty("main"))throw new Error(Je(11,S?` (${S})`:"",E));if(typeof m.main!="string")throw new Error(Je(12,S?` (${S})`:"",JSON.stringify(m.main)));return ir(m,"light",P,r),ir(m,"dark",y,r),m.contrastText||(m.contrastText=p(m.main)),m},v={dark:Zt,light:or};return de(b({common:b({},tt),mode:t,primary:h({color:i,name:"primary"}),secondary:h({color:s,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:h({color:a,name:"error"}),warning:h({color:f,name:"warning"}),info:h({color:c,name:"info"}),success:h({color:l,name:"success"}),grey:nc,contrastThreshold:n,getContrastText:p,augmentColor:h,tonalOffset:r},v[t]),o)}const yc=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function bc(e){return Math.round(e*1e5)/1e5}const sr={textTransform:"uppercase"},ar='"Roboto", "Helvetica", "Arial", sans-serif';function xc(e,t){const n=typeof t=="function"?t(e):t,{fontFamily:r=ar,fontSize:o=14,fontWeightLight:i=300,fontWeightRegular:s=400,fontWeightMedium:a=500,fontWeightBold:c=700,htmlFontSize:l=16,allVariants:f,pxToRem:p}=n,h=V(n,yc),v=o/14,g=p||(E=>`${E/l*v}rem`),m=(E,P,y,k,w)=>b({fontFamily:r,fontWeight:E,fontSize:g(P),lineHeight:y},r===ar?{letterSpacing:`${bc(k/P)}em`}:{},w,f),S={h1:m(i,96,1.167,-1.5),h2:m(i,60,1.2,-.5),h3:m(s,48,1.167,0),h4:m(s,34,1.235,.25),h5:m(s,24,1.334,0),h6:m(a,20,1.6,.15),subtitle1:m(s,16,1.75,.15),subtitle2:m(a,14,1.57,.1),body1:m(s,16,1.5,.15),body2:m(s,14,1.43,.15),button:m(a,14,1.75,.4,sr),caption:m(s,12,1.66,.4),overline:m(s,12,2.66,1,sr),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return de(b({htmlFontSize:l,pxToRem:g,fontFamily:r,fontSize:o,fontWeightLight:i,fontWeightRegular:s,fontWeightMedium:a,fontWeightBold:c},S),h,{clone:!1})}const vc=.2,wc=.14,Sc=.12;function F(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${vc})`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${wc})`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Sc})`].join(",")}const Ec=["none",F(0,2,1,-1,0,1,1,0,0,1,3,0),F(0,3,1,-2,0,2,2,0,0,1,5,0),F(0,3,3,-2,0,3,4,0,0,1,8,0),F(0,2,4,-1,0,4,5,0,0,1,10,0),F(0,3,5,-1,0,5,8,0,0,1,14,0),F(0,3,5,-1,0,6,10,0,0,1,18,0),F(0,4,5,-2,0,7,10,1,0,2,16,1),F(0,5,5,-3,0,8,10,1,0,3,14,2),F(0,5,6,-3,0,9,12,1,0,3,16,2),F(0,6,6,-3,0,10,14,1,0,4,18,3),F(0,6,7,-4,0,11,15,1,0,4,20,3),F(0,7,8,-4,0,12,17,2,0,5,22,4),F(0,7,8,-4,0,13,19,2,0,5,24,4),F(0,7,9,-4,0,14,21,2,0,5,26,4),F(0,8,9,-5,0,15,22,2,0,6,28,5),F(0,8,10,-5,0,16,24,2,0,6,30,5),F(0,8,11,-5,0,17,26,2,0,6,32,5),F(0,9,11,-5,0,18,28,2,0,7,34,6),F(0,9,12,-6,0,19,29,2,0,7,36,6),F(0,10,13,-6,0,20,31,3,0,8,38,7),F(0,10,13,-6,0,21,33,3,0,8,40,7),F(0,10,14,-6,0,22,35,3,0,8,42,7),F(0,11,14,-7,0,23,36,3,0,9,44,8),F(0,11,15,-7,0,24,38,3,0,9,46,8)],Pc=Ec,kc=["duration","easing","delay"],$c={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},Tc={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function cr(e){return`${Math.round(e)}ms`}function Mc(e){if(!e)return 0;const t=e/36;return Math.round((4+15*t**.25+t/5)*10)}function Oc(e){const t=b({},$c,e.easing),n=b({},Tc,e.duration);return b({getAutoHeightDuration:Mc,create:(o=["all"],i={})=>{const{duration:s=n.standard,easing:a=t.easeInOut,delay:c=0}=i;return V(i,kc),(Array.isArray(o)?o:[o]).map(l=>`${l} ${typeof s=="string"?s:cr(s)} ${a} ${typeof c=="string"?c:cr(c)}`).join(",")}},e,{easing:t,duration:n})}const Cc={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},jc=Cc,_c=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function Rc(e={},...t){const{mixins:n={},palette:r={},transitions:o={},typography:i={}}=e,s=V(e,_c);if(e.vars)throw new Error(Je(18));const a=gc(r),c=Pn(e);let l=de(c,{mixins:Fa(c.breakpoints,n),palette:a,shadows:Pc.slice(),typography:xc(a,i),transitions:Oc(o),zIndex:b({},jc)});return l=de(l,s),l=t.reduce((f,p)=>de(f,p),l),l.unstable_sxConfig=b({},st,s==null?void 0:s.unstable_sxConfig),l.unstable_sx=function(p){return En({sx:p,theme:this})},l}const Dc=Rc(),Mn=Dc,On="$$material";function Ac(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const Nc=e=>Ac(e)&&e!=="classes",Wc=Nc,Fc=Pa({themeId:On,defaultTheme:Mn,rootShouldForwardProp:Wc}),Be=Fc;function Ic(e){const{theme:t,name:n,props:r}=e;return!t||!t.components||!t.components[n]||!t.components[n].defaultProps?r:Tr(t.components[n].defaultProps,r)}function Lc(e){return Object.keys(e).length===0}function zc(e=null){const t=d.useContext(dn);return!t||Lc(t)?e:t}const Bc=Pn();function no(e=Bc){return zc(e)}function Yc({props:e,name:t,defaultTheme:n,themeId:r}){let o=no(n);return r&&(o=o[r]||o),Ic({theme:o,name:t,props:e})}function Kt({props:e,name:t}){return Yc({props:e,name:t,defaultTheme:Mn,themeId:On})}function cn(e,t){return cn=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},cn(e,t)}function Hc(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,cn(e,t)}const lr={disabled:!1},ro=Ue.createContext(null);var qc=function(t){return t.scrollTop},Xe="unmounted",Ee="exited",Pe="entering",Fe="entered",ln="exiting",ge=function(e){Hc(t,e);function t(r,o){var i;i=e.call(this,r,o)||this;var s=o,a=s&&!s.isMounting?r.enter:r.appear,c;return i.appearStatus=null,r.in?a?(c=Ee,i.appearStatus=Pe):c=Fe:r.unmountOnExit||r.mountOnEnter?c=Xe:c=Ee,i.state={status:c},i.nextCallback=null,i}t.getDerivedStateFromProps=function(o,i){var s=o.in;return s&&i.status===Xe?{status:Ee}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(o){var i=null;if(o!==this.props){var s=this.state.status;this.props.in?s!==Pe&&s!==Fe&&(i=Pe):(s===Pe||s===Fe)&&(i=ln)}this.updateStatus(!1,i)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var o=this.props.timeout,i,s,a;return i=s=a=o,o!=null&&typeof o!="number"&&(i=o.exit,s=o.enter,a=o.appear!==void 0?o.appear:s),{exit:i,enter:s,appear:a}},n.updateStatus=function(o,i){if(o===void 0&&(o=!1),i!==null)if(this.cancelNextCallback(),i===Pe){if(this.props.unmountOnExit||this.props.mountOnEnter){var s=this.props.nodeRef?this.props.nodeRef.current:lt.findDOMNode(this);s&&qc(s)}this.performEnter(o)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Ee&&this.setState({status:Xe})},n.performEnter=function(o){var i=this,s=this.props.enter,a=this.context?this.context.isMounting:o,c=this.props.nodeRef?[a]:[lt.findDOMNode(this),a],l=c[0],f=c[1],p=this.getTimeouts(),h=a?p.appear:p.enter;if(!o&&!s||lr.disabled){this.safeSetState({status:Fe},function(){i.props.onEntered(l)});return}this.props.onEnter(l,f),this.safeSetState({status:Pe},function(){i.props.onEntering(l,f),i.onTransitionEnd(h,function(){i.safeSetState({status:Fe},function(){i.props.onEntered(l,f)})})})},n.performExit=function(){var o=this,i=this.props.exit,s=this.getTimeouts(),a=this.props.nodeRef?void 0:lt.findDOMNode(this);if(!i||lr.disabled){this.safeSetState({status:Ee},function(){o.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:ln},function(){o.props.onExiting(a),o.onTransitionEnd(s.exit,function(){o.safeSetState({status:Ee},function(){o.props.onExited(a)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(o,i){i=this.setNextCallback(i),this.setState(o,i)},n.setNextCallback=function(o){var i=this,s=!0;return this.nextCallback=function(a){s&&(s=!1,i.nextCallback=null,o(a))},this.nextCallback.cancel=function(){s=!1},this.nextCallback},n.onTransitionEnd=function(o,i){this.setNextCallback(i);var s=this.props.nodeRef?this.props.nodeRef.current:lt.findDOMNode(this),a=o==null&&!this.props.addEndListener;if(!s||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var c=this.props.nodeRef?[this.nextCallback]:[s,this.nextCallback],l=c[0],f=c[1];this.props.addEndListener(l,f)}o!=null&&setTimeout(this.nextCallback,o)},n.render=function(){var o=this.state.status;if(o===Xe)return null;var i=this.props,s=i.children;i.in,i.mountOnEnter,i.unmountOnExit,i.appear,i.enter,i.exit,i.timeout,i.addEndListener,i.onEnter,i.onEntering,i.onEntered,i.onExit,i.onExiting,i.onExited,i.nodeRef;var a=V(i,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Ue.createElement(ro.Provider,{value:null},typeof s=="function"?s(o,a):Ue.cloneElement(Ue.Children.only(s),a))},t}(Ue.Component);ge.contextType=ro;ge.propTypes={};function We(){}ge.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:We,onEntering:We,onEntered:We,onExit:We,onExiting:We,onExited:We};ge.UNMOUNTED=Xe;ge.EXITED=Ee;ge.ENTERING=Pe;ge.ENTERED=Fe;ge.EXITING=ln;const oo=ge;function io(){const e=no(Mn);return e[On]||e}const so=e=>e.scrollTop;function yt(e,t){var n,r;const{timeout:o,easing:i,style:s={}}=e;return{duration:(n=s.transitionDuration)!=null?n:typeof o=="number"?o:o[t.mode]||0,easing:(r=s.transitionTimingFunction)!=null?r:typeof i=="object"?i[t.mode]:i,delay:s.transitionDelay}}const Gc=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function un(e){return`scale(${e}, ${e**2})`}const Kc={entering:{opacity:1,transform:un(1)},entered:{opacity:1,transform:"none"}},en=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),ao=d.forwardRef(function(t,n){const{addEndListener:r,appear:o=!0,children:i,easing:s,in:a,onEnter:c,onEntered:l,onEntering:f,onExit:p,onExited:h,onExiting:v,style:g,timeout:m="auto",TransitionComponent:S=oo}=t,E=V(t,Gc),P=Oo(),y=d.useRef(),k=io(),w=d.useRef(null),C=ke(w,i.ref,n),j=$=>T=>{if($){const M=w.current;T===void 0?$(M):$(M,T)}},W=j(f),K=j(($,T)=>{so($);const{duration:M,delay:U,easing:J}=yt({style:g,timeout:m,easing:s},{mode:"enter"});let le;m==="auto"?(le=k.transitions.getAutoHeightDuration($.clientHeight),y.current=le):le=M,$.style.transition=[k.transitions.create("opacity",{duration:le,delay:U}),k.transitions.create("transform",{duration:en?le:le*.666,delay:U,easing:J})].join(","),c&&c($,T)}),Y=j(l),I=j(v),_=j($=>{const{duration:T,delay:M,easing:U}=yt({style:g,timeout:m,easing:s},{mode:"exit"});let J;m==="auto"?(J=k.transitions.getAutoHeightDuration($.clientHeight),y.current=J):J=T,$.style.transition=[k.transitions.create("opacity",{duration:J,delay:M}),k.transitions.create("transform",{duration:en?J:J*.666,delay:en?M:M||J*.333,easing:U})].join(","),$.style.opacity=0,$.style.transform=un(.75),p&&p($)}),L=j(h),O=$=>{m==="auto"&&P.start(y.current||0,$),r&&r(w.current,$)};return u.jsx(S,b({appear:o,in:a,nodeRef:w,onEnter:K,onEntered:Y,onEntering:W,onExit:_,onExited:L,onExiting:I,addEndListener:O,timeout:m==="auto"?null:m},E,{children:($,T)=>d.cloneElement(i,b({style:b({opacity:0,transform:un(.75),visibility:$==="exited"&&!a?"hidden":void 0},Kc[$],g,i.props.style),ref:C},T))}))});ao.muiSupportAuto=!0;const Uc=ao;function Xc(e){const t=ue(e);return t.body===e?Ze(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function Ve(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function ur(e){return parseInt(Ze(e).getComputedStyle(e).paddingRight,10)||0}function Qc(e){const n=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,r=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return n||r}function dr(e,t,n,r,o){const i=[t,n,...r];[].forEach.call(e.children,s=>{const a=i.indexOf(s)===-1,c=!Qc(s);a&&c&&Ve(s,o)})}function tn(e,t){let n=-1;return e.some((r,o)=>t(r)?(n=o,!0):!1),n}function Vc(e,t){const n=[],r=e.container;if(!t.disableScrollLock){if(Xc(r)){const s=Co(ue(r));n.push({value:r.style.paddingRight,property:"padding-right",el:r}),r.style.paddingRight=`${ur(r)+s}px`;const a=ue(r).querySelectorAll(".mui-fixed");[].forEach.call(a,c=>{n.push({value:c.style.paddingRight,property:"padding-right",el:c}),c.style.paddingRight=`${ur(c)+s}px`})}let i;if(r.parentNode instanceof DocumentFragment)i=ue(r).body;else{const s=r.parentElement,a=Ze(r);i=(s==null?void 0:s.nodeName)==="HTML"&&a.getComputedStyle(s).overflowY==="scroll"?s:r}n.push({value:i.style.overflow,property:"overflow",el:i},{value:i.style.overflowX,property:"overflow-x",el:i},{value:i.style.overflowY,property:"overflow-y",el:i}),i.style.overflow="hidden"}return()=>{n.forEach(({value:i,el:s,property:a})=>{i?s.style.setProperty(a,i):s.style.removeProperty(a)})}}function Jc(e){const t=[];return[].forEach.call(e.children,n=>{n.getAttribute("aria-hidden")==="true"&&t.push(n)}),t}class Zc{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,n){let r=this.modals.indexOf(t);if(r!==-1)return r;r=this.modals.length,this.modals.push(t),t.modalRef&&Ve(t.modalRef,!1);const o=Jc(n);dr(n,t.mount,t.modalRef,o,!0);const i=tn(this.containers,s=>s.container===n);return i!==-1?(this.containers[i].modals.push(t),r):(this.containers.push({modals:[t],container:n,restore:null,hiddenSiblings:o}),r)}mount(t,n){const r=tn(this.containers,i=>i.modals.indexOf(t)!==-1),o=this.containers[r];o.restore||(o.restore=Vc(o,n))}remove(t,n=!0){const r=this.modals.indexOf(t);if(r===-1)return r;const o=tn(this.containers,s=>s.modals.indexOf(t)!==-1),i=this.containers[o];if(i.modals.splice(i.modals.indexOf(t),1),this.modals.splice(r,1),i.modals.length===0)i.restore&&i.restore(),t.modalRef&&Ve(t.modalRef,n),dr(i.container,t.mount,t.modalRef,i.hiddenSiblings,!1),this.containers.splice(o,1);else{const s=i.modals[i.modals.length-1];s.modalRef&&Ve(s.modalRef,!1)}return r}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}function el(e){return typeof e=="function"?e():e}function tl(e){return e?e.props.hasOwnProperty("in"):!1}const nl=new Zc;function rl(e){const{container:t,disableEscapeKeyDown:n=!1,disableScrollLock:r=!1,manager:o=nl,closeAfterTransition:i=!1,onTransitionEnter:s,onTransitionExited:a,children:c,onClose:l,open:f,rootRef:p}=e,h=d.useRef({}),v=d.useRef(null),g=d.useRef(null),m=ke(g,p),[S,E]=d.useState(!f),P=tl(c);let y=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(y=!1);const k=()=>ue(v.current),w=()=>(h.current.modalRef=g.current,h.current.mount=v.current,h.current),C=()=>{o.mount(w(),{disableScrollLock:r}),g.current&&(g.current.scrollTop=0)},j=Wn(()=>{const T=el(t)||k().body;o.add(w(),T),g.current&&C()}),W=d.useCallback(()=>o.isTopModal(w()),[o]),K=Wn(T=>{v.current=T,T&&(f&&W()?C():g.current&&Ve(g.current,y))}),Y=d.useCallback(()=>{o.remove(w(),y)},[y,o]);d.useEffect(()=>()=>{Y()},[Y]),d.useEffect(()=>{f?j():(!P||!i)&&Y()},[f,Y,P,i,j]);const I=T=>M=>{var U;(U=T.onKeyDown)==null||U.call(T,M),!(M.key!=="Escape"||M.which===229||!W())&&(n||(M.stopPropagation(),l&&l(M,"escapeKeyDown")))},_=T=>M=>{var U;(U=T.onClick)==null||U.call(T,M),M.target===M.currentTarget&&l&&l(M,"backdropClick")};return{getRootProps:(T={})=>{const M=Lr(e);delete M.onTransitionEnter,delete M.onTransitionExited;const U=b({},M,T);return b({role:"presentation"},U,{onKeyDown:I(U),ref:m})},getBackdropProps:(T={})=>{const M=T;return b({"aria-hidden":!0},M,{onClick:_(M),open:f})},getTransitionProps:()=>{const T=()=>{E(!1),s&&s()},M=()=>{E(!0),a&&a(),i&&Y()};return{onEnter:Bn(T,c==null?void 0:c.props.onEnter),onExited:Bn(M,c==null?void 0:c.props.onExited)}},rootRef:m,portalRef:K,isTopModal:W,exited:S,hasTransition:P}}const ol=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function il(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function sl(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=r=>e.ownerDocument.querySelector(`input[type="radio"]${r}`);let n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}function al(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||sl(e))}function cl(e){const t=[],n=[];return Array.from(e.querySelectorAll(ol)).forEach((r,o)=>{const i=il(r);i===-1||!al(r)||(i===0?t.push(r):n.push({documentOrder:o,tabIndex:i,node:r}))}),n.sort((r,o)=>r.tabIndex===o.tabIndex?r.documentOrder-o.documentOrder:r.tabIndex-o.tabIndex).map(r=>r.node).concat(t)}function ll(){return!0}function ul(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:r=!1,disableRestoreFocus:o=!1,getTabbable:i=cl,isEnabled:s=ll,open:a}=e,c=d.useRef(!1),l=d.useRef(null),f=d.useRef(null),p=d.useRef(null),h=d.useRef(null),v=d.useRef(!1),g=d.useRef(null),m=ke(t.ref,g),S=d.useRef(null);d.useEffect(()=>{!a||!g.current||(v.current=!n)},[n,a]),d.useEffect(()=>{if(!a||!g.current)return;const y=ue(g.current);return g.current.contains(y.activeElement)||(g.current.hasAttribute("tabIndex")||g.current.setAttribute("tabIndex","-1"),v.current&&g.current.focus()),()=>{o||(p.current&&p.current.focus&&(c.current=!0,p.current.focus()),p.current=null)}},[a]),d.useEffect(()=>{if(!a||!g.current)return;const y=ue(g.current),k=j=>{S.current=j,!(r||!s()||j.key!=="Tab")&&y.activeElement===g.current&&j.shiftKey&&(c.current=!0,f.current&&f.current.focus())},w=()=>{const j=g.current;if(j===null)return;if(!y.hasFocus()||!s()||c.current){c.current=!1;return}if(j.contains(y.activeElement)||r&&y.activeElement!==l.current&&y.activeElement!==f.current)return;if(y.activeElement!==h.current)h.current=null;else if(h.current!==null)return;if(!v.current)return;let W=[];if((y.activeElement===l.current||y.activeElement===f.current)&&(W=i(g.current)),W.length>0){var K,Y;const I=!!((K=S.current)!=null&&K.shiftKey&&((Y=S.current)==null?void 0:Y.key)==="Tab"),_=W[0],L=W[W.length-1];typeof _!="string"&&typeof L!="string"&&(I?L.focus():_.focus())}else j.focus()};y.addEventListener("focusin",w),y.addEventListener("keydown",k,!0);const C=setInterval(()=>{y.activeElement&&y.activeElement.tagName==="BODY"&&w()},50);return()=>{clearInterval(C),y.removeEventListener("focusin",w),y.removeEventListener("keydown",k,!0)}},[n,r,o,s,a,i]);const E=y=>{p.current===null&&(p.current=y.relatedTarget),v.current=!0,h.current=y.target;const k=t.props.onFocus;k&&k(y)},P=y=>{p.current===null&&(p.current=y.relatedTarget),v.current=!0};return u.jsxs(d.Fragment,{children:[u.jsx("div",{tabIndex:a?0:-1,onFocus:P,ref:l,"data-testid":"sentinelStart"}),d.cloneElement(t,{ref:m,onFocus:E}),u.jsx("div",{tabIndex:a?0:-1,onFocus:P,ref:f,"data-testid":"sentinelEnd"})]})}function dl(e){return typeof e=="function"?e():e}const fl=d.forwardRef(function(t,n){const{children:r,container:o,disablePortal:i=!1}=t,[s,a]=d.useState(null),c=ke(d.isValidElement(r)?r.ref:null,n);if(Fn(()=>{i||a(dl(o)||document.body)},[o,i]),Fn(()=>{if(s&&!i)return In(n,s),()=>{In(n,null)}},[n,s,i]),i){if(d.isValidElement(r)){const l={ref:c};return d.cloneElement(r,l)}return u.jsx(d.Fragment,{children:r})}return u.jsx(d.Fragment,{children:s&&go.createPortal(r,s)})}),hl=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],pl={entering:{opacity:1},entered:{opacity:1}},ml=d.forwardRef(function(t,n){const r=io(),o={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:i,appear:s=!0,children:a,easing:c,in:l,onEnter:f,onEntered:p,onEntering:h,onExit:v,onExited:g,onExiting:m,style:S,timeout:E=o,TransitionComponent:P=oo}=t,y=V(t,hl),k=d.useRef(null),w=ke(k,a.ref,n),C=O=>$=>{if(O){const T=k.current;$===void 0?O(T):O(T,$)}},j=C(h),W=C((O,$)=>{so(O);const T=yt({style:S,timeout:E,easing:c},{mode:"enter"});O.style.webkitTransition=r.transitions.create("opacity",T),O.style.transition=r.transitions.create("opacity",T),f&&f(O,$)}),K=C(p),Y=C(m),I=C(O=>{const $=yt({style:S,timeout:E,easing:c},{mode:"exit"});O.style.webkitTransition=r.transitions.create("opacity",$),O.style.transition=r.transitions.create("opacity",$),v&&v(O)}),_=C(g),L=O=>{i&&i(k.current,O)};return u.jsx(P,b({appear:s,in:l,nodeRef:k,onEnter:W,onEntered:K,onEntering:j,onExit:I,onExited:_,onExiting:Y,addEndListener:L,timeout:E},y,{children:(O,$)=>d.cloneElement(a,b({style:b({opacity:0,visibility:O==="exited"&&!l?"hidden":void 0},pl[O],S,a.props.style),ref:w},$))}))}),gl=ml;function yl(e){return nt("MuiBackdrop",e)}Ot("MuiBackdrop",["root","invisible"]);const bl=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],xl=e=>{const{classes:t,invisible:n}=e;return Mt({root:["root",n&&"invisible"]},yl,t)},vl=Be("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})(({ownerState:e})=>b({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),wl=d.forwardRef(function(t,n){var r,o,i;const s=Kt({props:t,name:"MuiBackdrop"}),{children:a,className:c,component:l="div",components:f={},componentsProps:p={},invisible:h=!1,open:v,slotProps:g={},slots:m={},TransitionComponent:S=gl,transitionDuration:E}=s,P=V(s,bl),y=b({},s,{component:l,invisible:h}),k=xl(y),w=(r=g.root)!=null?r:p.root;return u.jsx(S,b({in:v,timeout:E},P,{children:u.jsx(vl,b({"aria-hidden":!0},w,{as:(o=(i=m.root)!=null?i:f.Root)!=null?o:l,className:xe(k.root,c,w==null?void 0:w.className),ownerState:b({},y,w==null?void 0:w.ownerState),classes:k,ref:n,children:a}))}))}),Sl=wl;function El(e){return nt("MuiModal",e)}Ot("MuiModal",["root","hidden","backdrop"]);const Pl=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],kl=e=>{const{open:t,exited:n,classes:r}=e;return Mt({root:["root",!t&&n&&"hidden"],backdrop:["backdrop"]},El,r)},$l=Be("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})(({theme:e,ownerState:t})=>b({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),Tl=Be(Sl,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),Ml=d.forwardRef(function(t,n){var r,o,i,s,a,c;const l=Kt({name:"MuiModal",props:t}),{BackdropComponent:f=Tl,BackdropProps:p,className:h,closeAfterTransition:v=!1,children:g,container:m,component:S,components:E={},componentsProps:P={},disableAutoFocus:y=!1,disableEnforceFocus:k=!1,disableEscapeKeyDown:w=!1,disablePortal:C=!1,disableRestoreFocus:j=!1,disableScrollLock:W=!1,hideBackdrop:K=!1,keepMounted:Y=!1,onBackdropClick:I,open:_,slotProps:L,slots:O}=l,$=V(l,Pl),T=b({},l,{closeAfterTransition:v,disableAutoFocus:y,disableEnforceFocus:k,disableEscapeKeyDown:w,disablePortal:C,disableRestoreFocus:j,disableScrollLock:W,hideBackdrop:K,keepMounted:Y}),{getRootProps:M,getBackdropProps:U,getTransitionProps:J,portalRef:le,isTopModal:at,exited:ne,hasTransition:ct}=rl(b({},T,{rootRef:n})),ve=b({},T,{exited:ne}),fe=kl(ve),$e={};if(g.props.tabIndex===void 0&&($e.tabIndex="-1"),ct){const{onEnter:N,onExited:G}=J();$e.onEnter=N,$e.onExited=G}const Te=(r=(o=O==null?void 0:O.root)!=null?o:E.Root)!=null?r:$l,Ye=(i=(s=O==null?void 0:O.backdrop)!=null?s:E.Backdrop)!=null?i:f,He=(a=L==null?void 0:L.root)!=null?a:P.root,Me=(c=L==null?void 0:L.backdrop)!=null?c:P.backdrop,Ut=pt({elementType:Te,externalSlotProps:He,externalForwardedProps:$,getSlotProps:M,additionalProps:{ref:n,as:S},ownerState:ve,className:xe(h,He==null?void 0:He.className,fe==null?void 0:fe.root,!ve.open&&ve.exited&&(fe==null?void 0:fe.hidden))}),Xt=pt({elementType:Ye,externalSlotProps:Me,additionalProps:p,getSlotProps:N=>U(b({},N,{onClick:G=>{I&&I(G),N!=null&&N.onClick&&N.onClick(G)}})),className:xe(Me==null?void 0:Me.className,p==null?void 0:p.className,fe==null?void 0:fe.backdrop),ownerState:ve});return!Y&&!_&&(!ct||ne)?null:u.jsx(fl,{ref:le,container:m,disablePortal:C,children:u.jsxs(Te,b({},Ut,{children:[!K&&f?u.jsx(Ye,b({},Xt)):null,u.jsx(ul,{disableEnforceFocus:k,disableAutoFocus:y,disableRestoreFocus:j,isEnabled:at,open:_,children:d.cloneElement(g,$e)})]}))})}),Ol=Ml,Cl=e=>{let t;return e<1?t=5.11916*e**2:t=4.5*Math.log(e+1)+2,(t/100).toFixed(2)},fr=Cl;function jl(e){return nt("MuiPaper",e)}Ot("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const _l=["className","component","elevation","square","variant"],Rl=e=>{const{square:t,elevation:n,variant:r,classes:o}=e,i={root:["root",r,!t&&"rounded",r==="elevation"&&`elevation${n}`]};return Mt(i,jl,o)},Dl=Be("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,n.variant==="elevation"&&t[`elevation${n.elevation}`]]}})(({theme:e,ownerState:t})=>{var n;return b({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},t.variant==="elevation"&&b({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${nr("#fff",fr(t.elevation))}, ${nr("#fff",fr(t.elevation))})`},e.vars&&{backgroundImage:(n=e.vars.overlays)==null?void 0:n[t.elevation]}))}),Al=d.forwardRef(function(t,n){const r=Kt({props:t,name:"MuiPaper"}),{className:o,component:i="div",elevation:s=1,square:a=!1,variant:c="elevation"}=r,l=V(r,_l),f=b({},r,{component:i,elevation:s,square:a,variant:c}),p=Rl(f);return u.jsx(Dl,b({as:i,ownerState:f,className:xe(p.root,o),ref:n},l))}),Nl=Al;function Wl(e){return nt("MuiPopover",e)}Ot("MuiPopover",["root","paper"]);const Fl=["onEntering"],Il=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps","disableScrollLock"],Ll=["slotProps"];function hr(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.height/2:t==="bottom"&&(n=e.height),n}function pr(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.width/2:t==="right"&&(n=e.width),n}function mr(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function nn(e){return typeof e=="function"?e():e}const zl=e=>{const{classes:t}=e;return Mt({root:["root"],paper:["paper"]},Wl,t)},Bl=Be(Ol,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Yl=Be(Nl,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),Hl=d.forwardRef(function(t,n){var r,o,i;const s=Kt({props:t,name:"MuiPopover"}),{action:a,anchorEl:c,anchorOrigin:l={vertical:"top",horizontal:"left"},anchorPosition:f,anchorReference:p="anchorEl",children:h,className:v,container:g,elevation:m=8,marginThreshold:S=16,open:E,PaperProps:P={},slots:y,slotProps:k,transformOrigin:w={vertical:"top",horizontal:"left"},TransitionComponent:C=Uc,transitionDuration:j="auto",TransitionProps:{onEntering:W}={},disableScrollLock:K=!1}=s,Y=V(s.TransitionProps,Fl),I=V(s,Il),_=(r=k==null?void 0:k.paper)!=null?r:P,L=d.useRef(),O=ke(L,_.ref),$=b({},s,{anchorOrigin:l,anchorReference:p,elevation:m,marginThreshold:S,externalPaperSlotProps:_,transformOrigin:w,TransitionComponent:C,transitionDuration:j,TransitionProps:Y}),T=zl($),M=d.useCallback(()=>{if(p==="anchorPosition")return f;const N=nn(c),Z=(N&&N.nodeType===1?N:ue(L.current).body).getBoundingClientRect();return{top:Z.top+hr(Z,l.vertical),left:Z.left+pr(Z,l.horizontal)}},[c,l.horizontal,l.vertical,f,p]),U=d.useCallback(N=>({vertical:hr(N,w.vertical),horizontal:pr(N,w.horizontal)}),[w.horizontal,w.vertical]),J=d.useCallback(N=>{const G={width:N.offsetWidth,height:N.offsetHeight},Z=U(G);if(p==="none")return{top:null,left:null,transformOrigin:mr(Z)};const Cn=M();let Oe=Cn.top-Z.vertical,Ce=Cn.left-Z.horizontal;const jn=Oe+G.height,_n=Ce+G.width,Rn=Ze(nn(c)),Dn=Rn.innerHeight-S,An=Rn.innerWidth-S;if(S!==null&&Oe<S){const ce=Oe-S;Oe-=ce,Z.vertical+=ce}else if(S!==null&&jn>Dn){const ce=jn-Dn;Oe-=ce,Z.vertical+=ce}if(S!==null&&Ce<S){const ce=Ce-S;Ce-=ce,Z.horizontal+=ce}else if(_n>An){const ce=_n-An;Ce-=ce,Z.horizontal+=ce}return{top:`${Math.round(Oe)}px`,left:`${Math.round(Ce)}px`,transformOrigin:mr(Z)}},[c,p,M,U,S]),[le,at]=d.useState(E),ne=d.useCallback(()=>{const N=L.current;if(!N)return;const G=J(N);G.top!==null&&(N.style.top=G.top),G.left!==null&&(N.style.left=G.left),N.style.transformOrigin=G.transformOrigin,at(!0)},[J]);d.useEffect(()=>(K&&window.addEventListener("scroll",ne),()=>window.removeEventListener("scroll",ne)),[c,K,ne]);const ct=(N,G)=>{W&&W(N,G),ne()},ve=()=>{at(!1)};d.useEffect(()=>{E&&ne()}),d.useImperativeHandle(a,()=>E?{updatePosition:()=>{ne()}}:null,[E,ne]),d.useEffect(()=>{if(!E)return;const N=ko(()=>{ne()}),G=Ze(c);return G.addEventListener("resize",N),()=>{N.clear(),G.removeEventListener("resize",N)}},[c,E,ne]);let fe=j;j==="auto"&&!C.muiSupportAuto&&(fe=void 0);const $e=g||(c?ue(nn(c)).body:void 0),Te=(o=y==null?void 0:y.root)!=null?o:Bl,Ye=(i=y==null?void 0:y.paper)!=null?i:Yl,He=pt({elementType:Ye,externalSlotProps:b({},_,{style:le?_.style:b({},_.style,{opacity:0})}),additionalProps:{elevation:m,ref:O},ownerState:$,className:xe(T.paper,_==null?void 0:_.className)}),Me=pt({elementType:Te,externalSlotProps:(k==null?void 0:k.root)||{},externalForwardedProps:I,additionalProps:{ref:n,slotProps:{backdrop:{invisible:!0}},container:$e,open:E},ownerState:$,className:xe(T.root,v)}),{slotProps:Ut}=Me,Xt=V(Me,Ll);return u.jsx(Te,b({},Xt,!Ir(Te)&&{slotProps:Ut,disableScrollLock:K},{children:u.jsx(C,b({appear:!0,in:E,onEntering:ct,onExited:ve,timeout:fe},Y,{children:u.jsx(Ye,b({},He,{children:h}))}))}))}),ql=Hl,Gl=x.div`
display: flex;
flex-direction:column;
gap: 16px;
padding: 24px 13px;


border-radius: 10px;
background:${e=>e.theme.colors.primary.bg};
box-shadow: 0px 4px 4px 0px rgba(64, 123, 255, 0.30);



`,Kl=x.h2`
color:${e=>e.theme.colors.primary.accent};
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 1.25;
`,Ul=x.ul`
display: flex;
flex-direction: column;
gap: 16px;

color: ${e=>e.theme.colors.primary.text};

font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 1.25;
`,rn=x.li`

span{
  color:${e=>e.theme.colors.primary.accent};

  font-size: 18px;

  font-weight: 500;
  line-height: 1.33;
}

`,Xl=({selectedDate:e})=>{console.log(e);const t=Wr(e,"MMMM"),n=e.getDate();return u.jsxs(Gl,{children:[u.jsxs(Kl,{children:[" ",n,", ",t]}),u.jsxs(Ul,{children:[u.jsxs(rn,{children:["Daily Norma: ",u.jsx("span",{children:"1.2 L"})]}),u.jsxs(rn,{children:["Fulfillment of the daily norm: ",u.jsx("span",{children:"100 %"})]}),u.jsxs(rn,{children:["How many servings of water: ",u.jsx("span",{children:"6"})]})]})]})},Ql=x.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,Vl=x.div`
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
 
`,Jl=x.ul`
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
@media (min-width: ${({theme:e})=>e.screens.tab}){
grid-template-columns: repeat(auto-fill, 34px);  
gap: 20px 22px;

}
`,Zl=x.li`
  display: flex;
  flex-direction: column;
  gap:4px;
  align-items: center;
  position: relative;
  cursor: pointer;
  padding: 0px;

 

@media(min-width: ${({theme:e})=>e.screens.tab}) {
 
}

`,e0=x.div`
width: 34px;
height: 34px;
border-radius: 20px;
display: flex;
justify-content: center;
align-items: center;
background-color: ${e=>e.theme.colors.primary.bg};

border: 2px solid
    ${({theme:e,percentage:t})=>t<100?e.colors.secondary.color4:e.colors.primary.bg};

`,t0=x.p`
z-index: 1;
margin: 0;
`,n0=x.p`


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

`,r0=({selectedDate:e,onDayClick:t})=>{const n=ei(e),o=Zo(e).getDate()-n.getDate()+1,i=[];for(let s=1;s<=o;s++){const a=new Date(e.getFullYear(),e.getMonth(),s);i.push(u.jsxs(Zl,{onClick:c=>t(c,a),children:[u.jsx(e0,{percentage:100,children:u.jsx(t0,{children:s})}),u.jsx(n0,{children:"100%"})]},s))}return u.jsx(Jl,{children:i})},o0=()=>{const[e,t]=d.useState(new Date),[n,r]=d.useState(null),o=(c,l)=>{t(l),r(c.currentTarget)},i=()=>{r(null)},s=!!n,a=s?"simple-popover":void 0;return u.jsxs(Ql,{children:[u.jsxs(Vl,{children:[u.jsx("h3",{children:"Month"}),u.jsx(as,{selectedDate:e,setSelectedDate:t})]}),u.jsx(r0,{selectedDate:e,onDayClick:o}),u.jsx(ql,{id:a,open:s,anchorEl:n,onClose:i,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"bottom",horizontal:"right"},children:u.jsx(Xl,{selectedDate:e})})]})},i0=x.div`
display: flex;
flex-direction:column;

align-items: center;
color:${e=>e.theme.colors.primary.text};




@media (min-width: ${({theme:e})=>e.screens.desk}) {
    flex-direction:row;
    align-items: flex-start;
  }
`,s0=x.div`
display: flex;
flex-direction: column;

width: 280px;
height: 200px;


@media (min-width: ${({theme:e})=>e.screens.tab}) {
  width: 704px;
}

`,a0=x.div`
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


`,c0=e=>{const t=new Date(e);let n=t.getHours();const r=t.getMinutes(),o=n>=12?"PM":"AM";return n=n%12,n=n||12,`${n.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")} ${o}`},l0=e=>d.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",...e},d.createElement("title",null,"glass_26"),d.createElement("path",{fill:"#407bff",d:"M5.565 2.783l1.901 26.363v0.072h16.367l1.901-26.353v-0.082h-20.169zM23.16 28.479h-15.017l-1.426-19.747h0.784l1.289 17.403c0.008 0.092 0.049 0.177 0.115 0.24s0.153 0.098 0.244 0.099h0.030c0.047-0.003 0.093-0.016 0.136-0.037s0.080-0.051 0.111-0.087c0.031-0.036 0.055-0.078 0.070-0.124s0.021-0.094 0.017-0.141l-1.289-17.351h16.362l-1.426 19.747zM24.637 7.994h-16.468l-0.283-3.847c-0.009-0.094-0.052-0.181-0.122-0.244s-0.16-0.097-0.252-0.095c-0.095 0.009-0.183 0.055-0.245 0.129s-0.094 0.169-0.088 0.266l0.283 3.795h-0.794l-0.324-4.483h18.617l-0.324 4.478z"}),d.createElement("path",{fill:"#407bff",d:"M11.359 12.384c0.236 0 0.467-0.071 0.663-0.204s0.349-0.322 0.439-0.543c0.090-0.221 0.114-0.465 0.068-0.699s-0.16-0.45-0.327-0.62c-0.167-0.169-0.38-0.285-0.611-0.331s-0.471-0.023-0.689 0.069c-0.218 0.092-0.404 0.247-0.536 0.446s-0.201 0.433-0.201 0.672c0 0.321 0.126 0.629 0.35 0.856s0.527 0.355 0.844 0.355zM11.359 10.697c0.093 0 0.184 0.028 0.261 0.080s0.138 0.127 0.173 0.214c0.036 0.087 0.045 0.183 0.027 0.276s-0.063 0.178-0.129 0.244c-0.066 0.067-0.15 0.112-0.241 0.131s-0.186 0.009-0.272-0.027c-0.086-0.036-0.159-0.097-0.211-0.176s-0.079-0.171-0.079-0.265c0-0.127 0.050-0.248 0.138-0.337s0.208-0.14 0.332-0.14z"}),d.createElement("path",{fill:"#407bff",d:"M11.354 16.318c0.003 0.239 0.076 0.472 0.209 0.669s0.321 0.35 0.539 0.439 0.458 0.111 0.689 0.062c0.231-0.049 0.442-0.166 0.607-0.336s0.277-0.387 0.321-0.621 0.019-0.477-0.072-0.698c-0.091-0.22-0.245-0.408-0.442-0.54s-0.427-0.201-0.663-0.2c-0.158 0.001-0.313 0.033-0.459 0.095s-0.277 0.153-0.387 0.267-0.198 0.249-0.256 0.397c-0.059 0.148-0.088 0.307-0.086 0.467zM13.013 16.318c0 0.094-0.028 0.187-0.079 0.265s-0.125 0.14-0.211 0.176c-0.086 0.036-0.18 0.046-0.272 0.027s-0.175-0.064-0.241-0.131-0.111-0.152-0.129-0.244c-0.018-0.093-0.009-0.188 0.027-0.276s0.096-0.162 0.173-0.214 0.168-0.080 0.261-0.080c0.125 0 0.244 0.050 0.333 0.14s0.138 0.211 0.138 0.337z"}),d.createElement("path",{fill:"#407bff",d:"M19.834 16.349c0.236 0 0.467-0.071 0.663-0.204s0.349-0.322 0.439-0.543c0.090-0.221 0.114-0.465 0.068-0.699s-0.16-0.45-0.327-0.62c-0.167-0.169-0.379-0.285-0.611-0.331s-0.471-0.023-0.689 0.069c-0.218 0.092-0.404 0.247-0.535 0.446s-0.201 0.433-0.201 0.672c0 0.321 0.126 0.629 0.349 0.856s0.527 0.355 0.844 0.355zM19.834 14.666c0.093 0 0.184 0.028 0.262 0.081s0.138 0.127 0.173 0.215c0.035 0.088 0.044 0.184 0.026 0.276s-0.064 0.178-0.13 0.244c-0.066 0.066-0.151 0.111-0.242 0.129s-0.186 0.008-0.272-0.029-0.159-0.099-0.21-0.178c-0.051-0.079-0.078-0.172-0.077-0.266 0.001-0.126 0.051-0.246 0.14-0.334s0.207-0.138 0.331-0.138z"}),d.createElement("path",{fill:"#407bff",d:"M15.677 14.066c0.236 0 0.467-0.071 0.663-0.204s0.349-0.322 0.439-0.543c0.090-0.221 0.114-0.464 0.068-0.699s-0.16-0.45-0.327-0.62c-0.167-0.169-0.38-0.285-0.611-0.331s-0.471-0.023-0.689 0.069c-0.218 0.092-0.404 0.247-0.536 0.446s-0.201 0.433-0.201 0.672c0 0.321 0.126 0.629 0.35 0.856s0.527 0.354 0.844 0.354zM15.677 12.379c0.093 0 0.184 0.028 0.261 0.080s0.138 0.127 0.173 0.214c0.036 0.087 0.045 0.183 0.027 0.276s-0.063 0.177-0.129 0.244c-0.066 0.067-0.15 0.112-0.241 0.131s-0.186 0.009-0.272-0.027-0.159-0.097-0.211-0.176c-0.052-0.079-0.079-0.171-0.079-0.265-0.003-0.065 0.006-0.129 0.028-0.19s0.056-0.116 0.1-0.164c0.044-0.047 0.097-0.084 0.156-0.11s0.122-0.039 0.186-0.039v0.026z"}),d.createElement("path",{fill:"#407bff",d:"M13.402 20.929c0.005 0.197 0.067 0.387 0.178 0.548s0.267 0.285 0.447 0.357c0.181 0.072 0.378 0.088 0.568 0.047s0.363-0.139 0.498-0.279c0.135-0.141 0.227-0.319 0.263-0.512s0.015-0.393-0.060-0.574c-0.075-0.181-0.202-0.336-0.363-0.445s-0.351-0.167-0.545-0.167c-0.264 0.007-0.514 0.118-0.699 0.309s-0.287 0.449-0.287 0.716zM14.388 20.662c0.052 0 0.103 0.016 0.146 0.045s0.077 0.071 0.097 0.12 0.025 0.102 0.015 0.154c-0.010 0.052-0.035 0.099-0.072 0.137s-0.084 0.063-0.135 0.073c-0.051 0.010-0.104 0.005-0.152-0.015s-0.089-0.054-0.118-0.098c-0.029-0.044-0.044-0.096-0.044-0.148 0-0.071 0.028-0.139 0.077-0.189s0.116-0.078 0.186-0.078z"}),d.createElement("path",{fill:"#407bff",d:"M18.17 19.816c0.202 0.007 0.402-0.048 0.574-0.157s0.306-0.269 0.388-0.457c0.081-0.188 0.105-0.397 0.068-0.599s-0.133-0.388-0.275-0.534c-0.143-0.146-0.325-0.245-0.524-0.285s-0.405-0.018-0.591 0.063c-0.186 0.081-0.345 0.216-0.454 0.389s-0.166 0.375-0.161 0.58c0.006 0.262 0.111 0.511 0.292 0.697s0.426 0.295 0.684 0.304zM18.17 18.549c0.070 0 0.137 0.028 0.186 0.078s0.077 0.118 0.077 0.189c0 0.071-0.028 0.139-0.077 0.189s-0.116 0.078-0.186 0.078c-0.070 0-0.138-0.028-0.188-0.078s-0.079-0.118-0.080-0.189c0-0.035 0.007-0.071 0.020-0.103s0.033-0.062 0.058-0.087 0.055-0.044 0.087-0.057c0.032-0.013 0.067-0.019 0.102-0.019z"}),d.createElement("path",{fill:"#407bff",d:"M20.253 11.538c0.2 0 0.395-0.060 0.562-0.173s0.296-0.273 0.372-0.46c0.077-0.187 0.097-0.394 0.058-0.593s-0.135-0.382-0.277-0.525c-0.141-0.143-0.322-0.241-0.518-0.281s-0.399-0.019-0.584 0.058c-0.185 0.078-0.343 0.209-0.454 0.378s-0.17 0.367-0.17 0.57c0 0.272 0.107 0.533 0.296 0.725s0.447 0.3 0.715 0.3zM20.253 10.271c0.039-0.011 0.080-0.013 0.12-0.006s0.078 0.024 0.11 0.049c0.032 0.025 0.059 0.057 0.077 0.094s0.028 0.078 0.028 0.119-0.009 0.082-0.028 0.119c-0.018 0.037-0.044 0.069-0.077 0.094s-0.070 0.042-0.11 0.049c-0.040 0.008-0.081 0.006-0.12-0.006-0.039 0.011-0.080 0.013-0.12 0.006s-0.078-0.024-0.11-0.049c-0.032-0.025-0.059-0.057-0.077-0.094s-0.028-0.078-0.028-0.119 0.009-0.082 0.028-0.119c0.018-0.037 0.044-0.069 0.077-0.094s0.070-0.042 0.11-0.049c0.040-0.008 0.081-0.006 0.12 0.006z"}),d.createElement("path",{fill:"#407bff",d:"M10.369 27.191c-0.045 0.021-0.086 0.052-0.119 0.089s-0.059 0.082-0.074 0.13c-0.016 0.048-0.021 0.099-0.017 0.149s0.019 0.099 0.043 0.144c0.031 0.060 0.078 0.11 0.135 0.145s0.122 0.054 0.189 0.055c0.056 0.002 0.112-0.011 0.162-0.036 1.545-0.803 3.255-1.225 4.99-1.231 1.837 0.027 3.648 0.441 5.319 1.215 0.066 0.035 0.141 0.049 0.215 0.039s0.143-0.042 0.198-0.093c0.055-0.051 0.094-0.118 0.11-0.192s0.010-0.151-0.018-0.221c-0.036-0.091-0.105-0.164-0.192-0.205-1.769-0.821-3.687-1.258-5.633-1.282-1.845 0.002-3.664 0.444-5.309 1.292z"})),u0=e=>d.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:1024,height:1024,viewBox:"0 0 1024 1024",...e},d.createElement("title",null,"edit"),d.createElement("path",{fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:4,strokeWidth:42.6667,d:"M719.445 191.445l71.979-72.021c14.479-14.479 34.482-23.435 56.576-23.435 44.189 0 80.011 35.822 80.011 80.011 0 22.094-8.955 42.097-23.435 56.576l-453.077 453.077c-21.936 21.924-49.153 38.567-79.579 47.856l-1.36 0.357-114.56 34.133 34.133-114.56c9.647-31.785 26.289-59.002 48.214-80.94l381.098-381.055zM719.445 191.445l112.555 112.555M768 597.333v202.667c0 53.019-42.981 96-96 96v0h-448c-53.019 0-96-42.981-96-96v0-448c0-53.019 42.981-96 96-96v0h202.667"})),d0=e=>d.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:1024,height:1024,viewBox:"0 0 1024 1024",...e},d.createElement("title",null,"delete"),d.createElement("path",{fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:4,strokeWidth:42.6667,d:"M628.907 384l-14.763 384M409.856 768l-14.763-384M820.395 247.040c14.592 2.219 29.099 4.565 43.605 7.083M820.395 247.040l-45.568 592.341c-3.952 49.747-45.294 88.619-95.716 88.619-0.010 0-0.020 0-0.030 0h-334.164c-0.008 0-0.018 0-0.028 0-50.422 0-91.764-38.872-95.694-88.283l-0.021-0.336-45.568-592.341M820.395 247.040c-38.791-6.358-89.724-12.366-141.193-16.476l-7.202-0.463M203.605 247.040c-25.242 3.599-40.074 6.065-54.844 8.706l11.239-1.666M203.605 247.040c38.789-6.358 89.722-12.366 141.19-16.476l7.205-0.463M672 230.101v-39.083c0-50.347-38.827-92.331-89.173-93.909-21.11-0.721-45.921-1.132-70.827-1.132-24.908 0-49.719 0.411-74.428 1.226l3.602-0.094c-50.347 1.579-89.173 43.605-89.173 93.909v39.083M672 230.101c-47.901-3.932-103.689-6.173-160-6.173-56.31 0-112.097 2.241-167.276 6.64l7.276-0.466"})),f0=e=>d.createElement("svg",{fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:4,strokeWidth:42.6667,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...e},d.createElement("path",{d:"M512 256v512M768 512h-512"})),h0=x.div`
  
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
 
`,p0=x.ul`
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

  `,m0=x.div`
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

`,g0=x.span`
color:${e=>e.theme.colors.primary.accent};


font-size: 18px;

font-weight: 400;
line-height: 1.33;
`,y0=x(l0)`
  fill:${e=>e.theme.colors.primary.accent};
  width: 26px;
  height: auto;


  @media (min-width: ${({theme:e})=>e.screens.tab}){
    width: 36px;
  }
  
`,b0=x(u0)`
  stroke:  ${e=>e.theme.colors.secondary.color3};
  width: 16px;
  height: 16px;
`,x0=x(d0)`
   stroke: ${e=>e.theme.colors.secondary.color2};
  width: 16px;
  height: 16px;
`,v0=x.div`
display: flex;
gap:18px;
align-items:center;
margin-left:auto;
margin-right:4px;
 button {
  margin-bottom:0px;

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

`,w0=x.button`

  &:hover::after {
   
    background-color: ${e=>e.theme.colors.primary.accent};
   
  }`,S0=x.button`
 
 
  &:hover::after {
   
    background-color:  ${e=>e.theme.colors.secondary.color2};
    
  }`,co=x(f0)`
  fill: ${e=>e.theme.colors.primary.accent};
  stroke: ${e=>e.theme.colors.primary.accent};
  width: 16px;
  height: 16px;

  @media (min-width: ${({theme:e})=>e.screens.tab}){
    width: 24px;
  height: 24px;
  }
 
`,E0=x.button`
display: flex;
align-items: center;
gap: 8px;

font-size: 16px;
font-weight: 500;
line-height: 1.25;
color: ${e=>e.theme.colors.primary.accent};


&:hover {
    color: ${e=>e.theme.colors.secondary.color4};
    ${co} {
      fill: ${e=>e.theme.colors.secondary.color4};
      stroke: ${e=>e.theme.colors.secondary.color4};
  }
}


@media (min-width: ${({theme:e})=>e.screens.tab}){
  font-size: 18px;
line-height: 1.33;
  }

`,P0=({handleAddWaterClick:e})=>{const t=[{id:1,portion:"250",date:"2024-03-30T20:00:00.000Z"},{id:2,portion:"250",date:"2024-03-30T10:00:00.000Z"},{id:3,portion:"250",date:"2024-03-30T15:00:00.000Z"},{id:4,portion:"250",date:"2024-03-30T18:00:00.000Z"},{id:5,portion:"250",date:"2024-03-30T19:00:00.000Z"},{id:6,portion:"250",date:"2024-03-30T20:00:00.000Z"}],n=o=>{console.log("delete",o)},r=o=>{console.log("edit",o)};return u.jsxs(h0,{children:[u.jsx("h3",{children:"Today"}),t&&t.length>0&&u.jsx(p0,{children:t.map(o=>u.jsxs("li",{children:[u.jsxs(m0,{children:[u.jsx(y0,{}),u.jsx(g0,{children:`${o.portion} ml `}),u.jsx("span",{children:c0(o.date)})]}),u.jsxs(v0,{children:[u.jsx(w0,{onClick:()=>r(o),children:u.jsx(b0,{})}),u.jsx(S0,{onClick:()=>n(o.id),children:u.jsx(x0,{})})]})]},o.id))}),u.jsxs(E0,{onClick:e,children:[u.jsx(co,{})," Add water"]})]})},k0=x.div`
  padding: 8px 20px 8px 20px;
  border: 1px solid;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 164px;
  border-radius: 10px;
  border-color: ${({theme:e})=>`${e.colors.secondary.color1}`};
`,$0=x.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
  justify-content: left;
`,T0=x.p`
  font-size: 18px;
  font-weight: ${({theme:e})=>`${e.fontWeights.medium}`};
  line-height: 24px;
  color: ${({theme:e})=>`${e.colors.primary.text}`};
  white-space: nowrap;
`,M0=x.button`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  color: #8baeff;
`,O0=x.p`
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  color: ${({theme:e})=>`${e.colors.primary.accent}`};
`,C0=x.div`
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
`,j0=x.div`
  width: 592px;
  height: 712px;
  padding: 32px 24px 32px 24px;
  border-radius: 10px;
  background-color: ${({theme:e})=>`${e.colors.primary.bg}`};
`,_0=x.h2`
  font-size: 26px;
  font-weight: 500;
  line-height: 32px;
  color: ${({theme:e})=>`${e.colors.primary.text}`};
`,R0=x.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  margin-top: 24px;
  margin-bottom: 12px;
`,we=x.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: ${({theme:e})=>`${e.colors.primary.text}`};
`,gr=x.span`
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: ${({theme:e})=>`${e.colors.primary.accent}`};
`,D0=x.div`
  width: 544px;
  border: 1px solid;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 24px;
  border-color: ${({theme:e})=>`${e.colors.secondary.color5}`};
`,A0=x.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  color: #8f8f8f;
`,N0=x.span`
  color: ${({theme:e})=>`${e.colors.primary.accent}`};
`,W0=x.form`
  display: flex;
  flex-direction: column;
`,yr=x.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  color: ${({theme:e})=>`${e.colors.primary.text}`};
`,br=x.label`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`,xr=x.input`
  width: 14px;
  height: 14px;
  border: 1px solid;
  border-color: ${({theme:e})=>`${e.colors.primary.accent}`};
  color: ${({theme:e})=>`${e.colors.primary.bg}`};
  border-radius: 50%;
`,F0=x.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`,vr=x.label`
  width: 544px;
  display: flex;
  gap: 8px;
  flex-direction: column;
`,on=x.input`
  border-radius: 6px;
  border: 1px solid;
  width: 100%;
  color: ${({theme:e})=>`${e.colors.primary.accent}`};
  padding: 12px 10px 12px 10px;
  background: transparent;
  border-color: ${({theme:e})=>`${e.colors.secondary.color5}`};
  &::placeholder {
    color: ${({theme:e})=>`${e.colors.primary.accent}`};
  }
`,I0=x.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`,L0=x.label`
  width: 544px;
  display: flex;
  gap: 16px;
  flex-direction: column;
  margin-bottom: 24px;
`,z0=x.button`
  border-radius: 10px;
  padding: 10px 30px;
  width: 160px;
  color: ${({theme:e})=>`${e.colors.primary.bg}`};
  background-color: ${({theme:e})=>`${e.colors.primary.accent}`};
`,B0=x.div`
  width: 544px;
  display: flex;
  justify-content: end;
`,Y0=x.button``,H0=x.div`
  width: 544px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,q0=x.span`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: ${({theme:e})=>`${e.colors.primary.accent}`};
`,G0=x.svg`
background-color: ;
`,K0=({onClose:e,SaveWaterNorma:t,dailyWaterNorma:n})=>{const r={weight:.03,activity:.04},o={weight:.04,activity:.06},[i,s]=d.useState(r),[a,c]=d.useState(),[l,f]=d.useState(n),[p,h]=d.useState(),[v,g]=d.useState();return d.useEffect(()=>{const m=S=>{S.code==="Escape"&&e()};return window.addEventListener("keydown",m),()=>{window.removeEventListener("keydown",m)}},[e]),u.jsx(C0,{children:u.jsxs(j0,{children:[u.jsxs(H0,{children:[u.jsx(_0,{children:"My daily norma"}),u.jsx(Y0,{onClick:()=>e(),children:u.jsx(G0,{width:"24",height:"24",children:u.jsx("path",{d:"M6 18L18 6M6 6L18 18",stroke:"#407BFF","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})})})]}),u.jsxs(R0,{children:[u.jsxs(we,{children:["For girl: ",u.jsx(gr,{children:"V=(M*0,03) + (T*0,4)"})]}),u.jsxs(we,{children:["For man: ",u.jsx(gr,{children:"V=(M*0,04) + (T*0,6)"})]})]}),u.jsx(D0,{children:u.jsxs(A0,{children:[u.jsx(N0,{children:"*"})," V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]})}),u.jsxs(W0,{onSubmit:t,children:[u.jsxs(I0,{children:[u.jsx(yr,{children:"Calculate your rate:"}),u.jsxs(F0,{children:[u.jsxs(br,{children:[u.jsx(xr,{type:"radio",name:"gender",value:"woman",onChange:()=>s(r)}),u.jsx(we,{children:"For woman"})]}),u.jsxs(br,{children:[u.jsx(xr,{type:"radio",name:"gender",value:"man",onChange:()=>s(o)}),u.jsx(we,{children:"For man"})]})]}),u.jsxs(vr,{children:[u.jsx(we,{children:"Your weight in kilograms:"}),u.jsx(on,{type:"number",name:"userWeight",placeholder:"0",value:a,min:0,max:250,onChange:()=>c()})]}),u.jsxs(vr,{children:[u.jsx(we,{children:"The time of active participation in sports or other activities with a high physical. load in hours:"}),u.jsx(on,{type:"number",name:"userActive",placeholder:"0",value:p,min:0,onChange:()=>h()})]}),u.jsxs(we,{children:["The required amount of water in liters per day:",u.jsxs(q0,{children:[" ",l," L"]})]})]}),u.jsxs(L0,{children:[u.jsx(yr,{children:"Write down how much water you will drink:"}),u.jsx(on,{type:"number",name:"userWaterPredict",placeholder:"0",value:v,min:0,onChange:()=>g()})]}),u.jsx(B0,{children:u.jsx(z0,{children:"Save"})})]})]})})},U0=()=>{const[e,t]=d.useState(2),[n,r]=d.useState(!1),o=()=>{r(!0)},i=()=>{r(!1)};return u.jsxs(k0,{children:[u.jsx(T0,{children:"My daily norma"}),u.jsxs($0,{children:[u.jsxs(O0,{children:[e," L"]}),u.jsx(M0,{onClick:o,children:"Edit"})]}),n&&u.jsx(K0,{onClose:i,dailyWaterNorma:e})]})},Q0=()=>{const[e,t]=d.useState(!1),n=()=>{t(!0)};return d.useEffect(()=>{e&&console.log("Modal opened")},[e]),u.jsxs(i0,{children:[u.jsx(s0,{children:u.jsx(U0,{ModalEditWaterNorma:n})}),u.jsxs(a0,{children:[u.jsx(P0,{handleAddWaterClick:n}),u.jsx(o0,{})]})]})};export{Q0 as default};
