import{o as X,r as l,c as f,j as s,_ as x,d as ee,e as Q,f as ae,R as ve,g as Se,h as zt,i as Yt,T as Bt,k as tt,l as nt,m as rt,p as Ht,q as je,v as Ne,w as me,x as $e,y as Re,z as ot,M as Tt}from"./index-a4511102.js";function it(...e){return e.reduce((t,n)=>n==null?t:function(...o){t.apply(this,o),n.apply(this,o)},()=>{})}function At(e,t=166){let n;function r(...o){const i=()=>{e.apply(this,o)};clearTimeout(n),n=setTimeout(i,t)}return r.clear=()=>{clearTimeout(n)},r}function Pe(e){return X(e).defaultView||window}const at={};function qt(e,t){const n=l.useRef(at);return n.current===at&&(n.current=e(t)),n}const Gt=[];function Ut(e){l.useEffect(e,Gt)}class Xe{constructor(){this.currentId=null,this.clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}static create(){return new Xe}start(t,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},t)}}function Xt(){const e=qt(Xe.create).current;return Ut(e.disposeEffect),e}function Qt(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function _(e){const t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new e.constructor(+e):typeof e=="number"||t==="[object Number]"||typeof e=="string"||t==="[object String]"?new Date(e):new Date(NaN)}function K(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}function Le(e,t){const n=_(e);if(isNaN(t))return K(e,NaN);if(!t)return n;const r=n.getDate(),o=K(e,n.getTime());o.setMonth(n.getMonth()+t+1,0);const i=o.getDate();return r>=i?o:(n.setFullYear(o.getFullYear(),o.getMonth(),r),n)}const St=6048e5,Vt=864e5;let Kt={};function We(){return Kt}function ke(e,t){var c,d,u,p;const n=We(),r=(t==null?void 0:t.weekStartsOn)??((d=(c=t==null?void 0:t.locale)==null?void 0:c.options)==null?void 0:d.weekStartsOn)??n.weekStartsOn??((p=(u=n.locale)==null?void 0:u.options)==null?void 0:p.weekStartsOn)??0,o=_(e),i=o.getDay(),a=(i<r?7:0)+i-r;return o.setDate(o.getDate()-a),o.setHours(0,0,0,0),o}function Oe(e){return ke(e,{weekStartsOn:1})}function Ot(e){const t=_(e),n=t.getFullYear(),r=K(e,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const o=Oe(r),i=K(e,0);i.setFullYear(n,0,4),i.setHours(0,0,0,0);const a=Oe(i);return t.getTime()>=o.getTime()?n+1:t.getTime()>=a.getTime()?n:n-1}function st(e){const t=_(e);return t.setHours(0,0,0,0),t}function ct(e){const t=_(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function Jt(e,t){const n=st(e),r=st(t),o=+n-ct(n),i=+r-ct(r);return Math.round((o-i)/Vt)}function Zt(e){const t=Ot(e),n=K(e,0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),Oe(n)}function en(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function tn(e){if(!en(e)&&typeof e!="number")return!1;const t=_(e);return!isNaN(Number(t))}function nn(e){const t=_(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}function rn(e){const t=_(e);return t.setDate(1),t.setHours(0,0,0,0),t}function on(e){const t=_(e),n=K(e,0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}const an={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},sn=(e,t,n)=>{let r;const o=an[e];return typeof o=="string"?r=o:t===1?r=o.one:r=o.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function _e(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const cn={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},ln={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},dn={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},un={date:_e({formats:cn,defaultWidth:"full"}),time:_e({formats:ln,defaultWidth:"full"}),dateTime:_e({formats:dn,defaultWidth:"full"})},fn={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},hn=(e,t,n,r)=>fn[e];function be(e){return(t,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let o;if(r==="formatting"&&e.formattingValues){const a=e.defaultFormattingWidth||e.defaultWidth,c=n!=null&&n.width?String(n.width):a;o=e.formattingValues[c]||e.formattingValues[a]}else{const a=e.defaultWidth,c=n!=null&&n.width?String(n.width):e.defaultWidth;o=e.values[c]||e.values[a]}const i=e.argumentCallback?e.argumentCallback(t):t;return o[i]}}const pn={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},mn={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},gn={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},xn={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},bn={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},yn={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},vn=(e,t)=>{const n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},wn={ordinalNumber:vn,era:be({values:pn,defaultWidth:"wide"}),quarter:be({values:mn,defaultWidth:"wide",argumentCallback:e=>e-1}),month:be({values:gn,defaultWidth:"wide"}),day:be({values:xn,defaultWidth:"wide"}),dayPeriod:be({values:bn,defaultWidth:"wide",formattingValues:yn,defaultFormattingWidth:"wide"})};function ye(e){return(t,n={})=>{const r=n.width,o=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=t.match(o);if(!i)return null;const a=i[0],c=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],d=Array.isArray(c)?Pn(c,m=>m.test(a)):En(c,m=>m.test(a));let u;u=e.valueCallback?e.valueCallback(d):d,u=n.valueCallback?n.valueCallback(u):u;const p=t.slice(a.length);return{value:u,rest:p}}}function En(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function Pn(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function kn(e){return(t,n={})=>{const r=t.match(e.matchPattern);if(!r)return null;const o=r[0],i=t.match(e.parsePattern);if(!i)return null;let a=e.valueCallback?e.valueCallback(i[0]):i[0];a=n.valueCallback?n.valueCallback(a):a;const c=t.slice(o.length);return{value:a,rest:c}}}const Mn=/^(\d+)(th|st|nd|rd)?/i,Tn=/\d+/i,Sn={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},On={any:[/^b/i,/^(a|c)/i]},Cn={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Dn={any:[/1/i,/2/i,/3/i,/4/i]},jn={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Nn={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},$n={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Rn={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Wn={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Fn={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},In={ordinalNumber:kn({matchPattern:Mn,parsePattern:Tn,valueCallback:e=>parseInt(e,10)}),era:ye({matchPatterns:Sn,defaultMatchWidth:"wide",parsePatterns:On,defaultParseWidth:"any"}),quarter:ye({matchPatterns:Cn,defaultMatchWidth:"wide",parsePatterns:Dn,defaultParseWidth:"any",valueCallback:e=>e+1}),month:ye({matchPatterns:jn,defaultMatchWidth:"wide",parsePatterns:Nn,defaultParseWidth:"any"}),day:ye({matchPatterns:$n,defaultMatchWidth:"wide",parsePatterns:Rn,defaultParseWidth:"any"}),dayPeriod:ye({matchPatterns:Wn,defaultMatchWidth:"any",parsePatterns:Fn,defaultParseWidth:"any"})},Ln={code:"en-US",formatDistance:sn,formatLong:un,formatRelative:hn,localize:wn,match:In,options:{weekStartsOn:0,firstWeekContainsDate:1}};function _n(e){const t=_(e);return Jt(t,on(t))+1}function zn(e){const t=_(e),n=+Oe(t)-+Zt(t);return Math.round(n/St)+1}function Ct(e,t){var p,m,E,k;const n=_(e),r=n.getFullYear(),o=We(),i=(t==null?void 0:t.firstWeekContainsDate)??((m=(p=t==null?void 0:t.locale)==null?void 0:p.options)==null?void 0:m.firstWeekContainsDate)??o.firstWeekContainsDate??((k=(E=o.locale)==null?void 0:E.options)==null?void 0:k.firstWeekContainsDate)??1,a=K(e,0);a.setFullYear(r+1,0,i),a.setHours(0,0,0,0);const c=ke(a,t),d=K(e,0);d.setFullYear(r,0,i),d.setHours(0,0,0,0);const u=ke(d,t);return n.getTime()>=c.getTime()?r+1:n.getTime()>=u.getTime()?r:r-1}function Yn(e,t){var c,d,u,p;const n=We(),r=(t==null?void 0:t.firstWeekContainsDate)??((d=(c=t==null?void 0:t.locale)==null?void 0:c.options)==null?void 0:d.firstWeekContainsDate)??n.firstWeekContainsDate??((p=(u=n.locale)==null?void 0:u.options)==null?void 0:p.firstWeekContainsDate)??1,o=Ct(e,t),i=K(e,0);return i.setFullYear(o,0,r),i.setHours(0,0,0,0),ke(i,t)}function Bn(e,t){const n=_(e),r=+ke(n,t)-+Yn(n,t);return Math.round(r/St)+1}function O(e,t){const n=e<0?"-":"",r=Math.abs(e).toString().padStart(t,"0");return n+r}const Z={y(e,t){const n=e.getFullYear(),r=n>0?n:1-n;return O(t==="yy"?r%100:r,t.length)},M(e,t){const n=e.getMonth();return t==="M"?String(n+1):O(n+1,2)},d(e,t){return O(e.getDate(),t.length)},a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(e,t){return O(e.getHours()%12||12,t.length)},H(e,t){return O(e.getHours(),t.length)},m(e,t){return O(e.getMinutes(),t.length)},s(e,t){return O(e.getSeconds(),t.length)},S(e,t){const n=t.length,r=e.getMilliseconds(),o=Math.trunc(r*Math.pow(10,n-3));return O(o,t.length)}},fe={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},lt={G:function(e,t,n){const r=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if(t==="yo"){const r=e.getFullYear(),o=r>0?r:1-r;return n.ordinalNumber(o,{unit:"year"})}return Z.y(e,t)},Y:function(e,t,n,r){const o=Ct(e,r),i=o>0?o:1-o;if(t==="YY"){const a=i%100;return O(a,2)}return t==="Yo"?n.ordinalNumber(i,{unit:"year"}):O(i,t.length)},R:function(e,t){const n=Ot(e);return O(n,t.length)},u:function(e,t){const n=e.getFullYear();return O(n,t.length)},Q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return O(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return O(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){const r=e.getMonth();switch(t){case"M":case"MM":return Z.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){const r=e.getMonth();switch(t){case"L":return String(r+1);case"LL":return O(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){const o=Bn(e,r);return t==="wo"?n.ordinalNumber(o,{unit:"week"}):O(o,t.length)},I:function(e,t,n){const r=zn(e);return t==="Io"?n.ordinalNumber(r,{unit:"week"}):O(r,t.length)},d:function(e,t,n){return t==="do"?n.ordinalNumber(e.getDate(),{unit:"date"}):Z.d(e,t)},D:function(e,t,n){const r=_n(e);return t==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):O(r,t.length)},E:function(e,t,n){const r=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){const o=e.getDay(),i=(o-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return O(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});case"eeee":default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){const o=e.getDay(),i=(o-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return O(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});case"cccc":default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(e,t,n){const r=e.getDay(),o=r===0?7:r;switch(t){case"i":return String(o);case"ii":return O(o,t.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){const o=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(e,t,n){const r=e.getHours();let o;switch(r===12?o=fe.noon:r===0?o=fe.midnight:o=r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(e,t,n){const r=e.getHours();let o;switch(r>=17?o=fe.evening:r>=12?o=fe.afternoon:r>=4?o=fe.morning:o=fe.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(e,t,n){if(t==="ho"){let r=e.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return Z.h(e,t)},H:function(e,t,n){return t==="Ho"?n.ordinalNumber(e.getHours(),{unit:"hour"}):Z.H(e,t)},K:function(e,t,n){const r=e.getHours()%12;return t==="Ko"?n.ordinalNumber(r,{unit:"hour"}):O(r,t.length)},k:function(e,t,n){let r=e.getHours();return r===0&&(r=24),t==="ko"?n.ordinalNumber(r,{unit:"hour"}):O(r,t.length)},m:function(e,t,n){return t==="mo"?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):Z.m(e,t)},s:function(e,t,n){return t==="so"?n.ordinalNumber(e.getSeconds(),{unit:"second"}):Z.s(e,t)},S:function(e,t){return Z.S(e,t)},X:function(e,t,n){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(t){case"X":return ut(r);case"XXXX":case"XX":return re(r);case"XXXXX":case"XXX":default:return re(r,":")}},x:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"x":return ut(r);case"xxxx":case"xx":return re(r);case"xxxxx":case"xxx":default:return re(r,":")}},O:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+dt(r,":");case"OOOO":default:return"GMT"+re(r,":")}},z:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+dt(r,":");case"zzzz":default:return"GMT"+re(r,":")}},t:function(e,t,n){const r=Math.trunc(e.getTime()/1e3);return O(r,t.length)},T:function(e,t,n){const r=e.getTime();return O(r,t.length)}};function dt(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),o=Math.trunc(r/60),i=r%60;return i===0?n+String(o):n+String(o)+t+O(i,2)}function ut(e,t){return e%60===0?(e>0?"-":"+")+O(Math.abs(e)/60,2):re(e,t)}function re(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),o=O(Math.trunc(r/60),2),i=O(r%60,2);return n+o+t+i}const ft=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},Dt=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},Hn=(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],r=n[1],o=n[2];if(!o)return ft(e,t);let i;switch(r){case"P":i=t.dateTime({width:"short"});break;case"PP":i=t.dateTime({width:"medium"});break;case"PPP":i=t.dateTime({width:"long"});break;case"PPPP":default:i=t.dateTime({width:"full"});break}return i.replace("{{date}}",ft(r,t)).replace("{{time}}",Dt(o,t))},An={p:Dt,P:Hn},qn=/^D+$/,Gn=/^Y+$/,Un=["D","DD","YY","YYYY"];function Xn(e){return qn.test(e)}function Qn(e){return Gn.test(e)}function Vn(e,t,n){const r=Kn(e,t,n);if(console.warn(r),Un.includes(e))throw new RangeError(r)}function Kn(e,t,n){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Jn=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Zn=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,er=/^'([^]*?)'?$/,tr=/''/g,nr=/[a-zA-Z]/;function jt(e,t,n){var p,m,E,k,g,M,P,D;const r=We(),o=(n==null?void 0:n.locale)??r.locale??Ln,i=(n==null?void 0:n.firstWeekContainsDate)??((m=(p=n==null?void 0:n.locale)==null?void 0:p.options)==null?void 0:m.firstWeekContainsDate)??r.firstWeekContainsDate??((k=(E=r.locale)==null?void 0:E.options)==null?void 0:k.firstWeekContainsDate)??1,a=(n==null?void 0:n.weekStartsOn)??((M=(g=n==null?void 0:n.locale)==null?void 0:g.options)==null?void 0:M.weekStartsOn)??r.weekStartsOn??((D=(P=r.locale)==null?void 0:P.options)==null?void 0:D.weekStartsOn)??0,c=_(e);if(!tn(c))throw new RangeError("Invalid time value");let d=t.match(Zn).map(T=>{const h=T[0];if(h==="p"||h==="P"){const v=An[h];return v(T,o.formatLong)}return T}).join("").match(Jn).map(T=>{if(T==="''")return{isToken:!1,value:"'"};const h=T[0];if(h==="'")return{isToken:!1,value:rr(T)};if(lt[h])return{isToken:!0,value:T};if(h.match(nr))throw new RangeError("Format string contains an unescaped latin alphabet character `"+h+"`");return{isToken:!1,value:T}});o.localize.preprocessor&&(d=o.localize.preprocessor(c,d));const u={firstWeekContainsDate:i,weekStartsOn:a,locale:o};return d.map(T=>{if(!T.isToken)return T.value;const h=T.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&Qn(h)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&Xn(h))&&Vn(h,t,String(e));const v=lt[h[0]];return v(c,h,o.localize,u)}).join("")}function rr(e){const t=e.match(er);return t?t[1].replace(tr,"'"):e}function or(e,t){const n=_(e),r=_(t);return n.getTime()>r.getTime()}function ir(e,t){const n=_(e),r=_(t);return+n<+r}const ar=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",...e},l.createElement("title",null,`
		solidleft
	`),l.createElement("path",{d:"M10.293 16.707c-0.187-0.188-0.292-0.442-0.292-0.707s0.105-0.519 0.292-0.707l10-10c0.092-0.098 0.202-0.177 0.325-0.232s0.255-0.084 0.389-0.086c0.134-0.002 0.268 0.022 0.392 0.073s0.238 0.125 0.333 0.22c0.095 0.095 0.17 0.208 0.22 0.333s0.075 0.258 0.073 0.392c-0.002 0.134-0.032 0.267-0.086 0.389s-0.133 0.233-0.232 0.325l-9.293 9.293 9.293 9.293c0.098 0.091 0.177 0.202 0.232 0.325s0.084 0.255 0.086 0.389c0.002 0.134-0.022 0.268-0.073 0.392s-0.125 0.238-0.22 0.333c-0.095 0.095-0.208 0.17-0.333 0.22s-0.258 0.075-0.392 0.073c-0.134-0.002-0.267-0.032-0.389-0.086s-0.233-0.134-0.325-0.232l-10-10z"})),sr=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",...e},l.createElement("title",null,`
		solid-right
	`),l.createElement("path",{d:"M21.707 16.707c0.187-0.188 0.292-0.442 0.292-0.707s-0.105-0.519-0.292-0.707l-10-10c-0.092-0.098-0.202-0.177-0.325-0.232s-0.255-0.084-0.389-0.086c-0.134-0.002-0.268 0.022-0.392 0.073s-0.238 0.125-0.333 0.22c-0.095 0.095-0.17 0.208-0.22 0.333s-0.075 0.258-0.073 0.392c0.002 0.134 0.032 0.267 0.086 0.389s0.133 0.233 0.232 0.325l9.293 9.293-9.293 9.293c-0.098 0.091-0.177 0.202-0.232 0.325s-0.084 0.255-0.086 0.389c-0.002 0.134 0.022 0.268 0.073 0.392s0.125 0.238 0.22 0.333c0.095 0.095 0.208 0.17 0.333 0.22s0.258 0.075 0.392 0.073c0.134-0.002 0.267-0.032 0.389-0.086s0.233-0.134 0.325-0.232l10-10z"})),cr=f.div`
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

`,lr=f(ar)`

fill: ${e=>e.disabled?e.theme.colors.primary.bg:e.theme.colors.primary.accent};
  width: 14px;
  height: auto;


`,dr=f(sr)`

fill: ${e=>e.disabled?e.theme.colors.primary.bg:e.theme.colors.primary.accent};
  width: 14px;
  height: auto;


`,ur=({selectedDate:e,setSelectedDate:t})=>{const n=new Date().getMonth(),r=new Date().getFullYear(),o=ir(e,Le(new Date,-12)),i=or(e,new Date(r,n,1)),a=jt(e,"MMMM"),c=e.getFullYear(),d=()=>{t(Le(e,-1))},u=()=>{t(Le(e,1))};return s.jsxs(cr,{children:[s.jsx("button",{onClick:d,disabled:o,children:s.jsx(lr,{disabled:o})}),s.jsx("span",{children:`${a}, ${c}`}),s.jsx("button",{onClick:u,disabled:i,children:s.jsx(dr,{disabled:i})})]})};function Nt(e){return typeof e=="string"}function fr(e,t,n){return e===void 0||Nt(e)?t:x({},t,{ownerState:x({},t.ownerState,n)})}function $t(e,t=[]){if(e===void 0)return{};const n={};return Object.keys(e).filter(r=>r.match(/^on[A-Z]/)&&typeof e[r]=="function"&&!t.includes(r)).forEach(r=>{n[r]=e[r]}),n}function hr(e,t,n){return typeof e=="function"?e(t,n):e}function ht(e){if(e===void 0)return{};const t={};return Object.keys(e).filter(n=>!(n.match(/^on[A-Z]/)&&typeof e[n]=="function")).forEach(n=>{t[n]=e[n]}),t}function pr(e){const{getSlotProps:t,additionalProps:n,externalSlotProps:r,externalForwardedProps:o,className:i}=e;if(!t){const k=ee(n==null?void 0:n.className,i,o==null?void 0:o.className,r==null?void 0:r.className),g=x({},n==null?void 0:n.style,o==null?void 0:o.style,r==null?void 0:r.style),M=x({},n,o,r);return k.length>0&&(M.className=k),Object.keys(g).length>0&&(M.style=g),{props:M,internalRef:void 0}}const a=$t(x({},o,r)),c=ht(r),d=ht(o),u=t(a),p=ee(u==null?void 0:u.className,n==null?void 0:n.className,i,o==null?void 0:o.className,r==null?void 0:r.className),m=x({},u==null?void 0:u.style,n==null?void 0:n.style,o==null?void 0:o.style,r==null?void 0:r.style),E=x({},u,n,d,c);return p.length>0&&(E.className=p),Object.keys(m).length>0&&(E.style=m),{props:E,internalRef:u.ref}}const mr=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function Ce(e){var t;const{elementType:n,externalSlotProps:r,ownerState:o,skipResolvingSlotProps:i=!1}=e,a=Q(e,mr),c=i?{}:hr(r,o),{props:d,internalRef:u}=pr(x({},a,{externalSlotProps:c})),p=ae(u,c==null?void 0:c.ref,(t=e.additionalProps)==null?void 0:t.ref);return fr(n,x({},d,{ref:p}),o)}function qe(e,t){return qe=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},qe(e,t)}function gr(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,qe(e,t)}const pt={disabled:!1},Rt=ve.createContext(null);var xr=function(t){return t.scrollTop},we="unmounted",oe="exited",ie="entering",pe="entered",Ge="exiting",J=function(e){gr(t,e);function t(r,o){var i;i=e.call(this,r,o)||this;var a=o,c=a&&!a.isMounting?r.enter:r.appear,d;return i.appearStatus=null,r.in?c?(d=oe,i.appearStatus=ie):d=pe:r.unmountOnExit||r.mountOnEnter?d=we:d=oe,i.state={status:d},i.nextCallback=null,i}t.getDerivedStateFromProps=function(o,i){var a=o.in;return a&&i.status===we?{status:oe}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(o){var i=null;if(o!==this.props){var a=this.state.status;this.props.in?a!==ie&&a!==pe&&(i=ie):(a===ie||a===pe)&&(i=Ge)}this.updateStatus(!1,i)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var o=this.props.timeout,i,a,c;return i=a=c=o,o!=null&&typeof o!="number"&&(i=o.exit,a=o.enter,c=o.appear!==void 0?o.appear:a),{exit:i,enter:a,appear:c}},n.updateStatus=function(o,i){if(o===void 0&&(o=!1),i!==null)if(this.cancelNextCallback(),i===ie){if(this.props.unmountOnExit||this.props.mountOnEnter){var a=this.props.nodeRef?this.props.nodeRef.current:Se.findDOMNode(this);a&&xr(a)}this.performEnter(o)}else this.performExit();else this.props.unmountOnExit&&this.state.status===oe&&this.setState({status:we})},n.performEnter=function(o){var i=this,a=this.props.enter,c=this.context?this.context.isMounting:o,d=this.props.nodeRef?[c]:[Se.findDOMNode(this),c],u=d[0],p=d[1],m=this.getTimeouts(),E=c?m.appear:m.enter;if(!o&&!a||pt.disabled){this.safeSetState({status:pe},function(){i.props.onEntered(u)});return}this.props.onEnter(u,p),this.safeSetState({status:ie},function(){i.props.onEntering(u,p),i.onTransitionEnd(E,function(){i.safeSetState({status:pe},function(){i.props.onEntered(u,p)})})})},n.performExit=function(){var o=this,i=this.props.exit,a=this.getTimeouts(),c=this.props.nodeRef?void 0:Se.findDOMNode(this);if(!i||pt.disabled){this.safeSetState({status:oe},function(){o.props.onExited(c)});return}this.props.onExit(c),this.safeSetState({status:Ge},function(){o.props.onExiting(c),o.onTransitionEnd(a.exit,function(){o.safeSetState({status:oe},function(){o.props.onExited(c)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(o,i){i=this.setNextCallback(i),this.setState(o,i)},n.setNextCallback=function(o){var i=this,a=!0;return this.nextCallback=function(c){a&&(a=!1,i.nextCallback=null,o(c))},this.nextCallback.cancel=function(){a=!1},this.nextCallback},n.onTransitionEnd=function(o,i){this.setNextCallback(i);var a=this.props.nodeRef?this.props.nodeRef.current:Se.findDOMNode(this),c=o==null&&!this.props.addEndListener;if(!a||c){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var d=this.props.nodeRef?[this.nextCallback]:[a,this.nextCallback],u=d[0],p=d[1];this.props.addEndListener(u,p)}o!=null&&setTimeout(this.nextCallback,o)},n.render=function(){var o=this.state.status;if(o===we)return null;var i=this.props,a=i.children;i.in,i.mountOnEnter,i.unmountOnExit,i.appear,i.enter,i.exit,i.timeout,i.addEndListener,i.onEnter,i.onEntering,i.onEntered,i.onExit,i.onExiting,i.onExited,i.nodeRef;var c=Q(i,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return ve.createElement(Rt.Provider,{value:null},typeof a=="function"?a(o,c):ve.cloneElement(ve.Children.only(a),c))},t}(ve.Component);J.contextType=Rt;J.propTypes={};function he(){}J.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:he,onEntering:he,onEntered:he,onExit:he,onExiting:he,onExited:he};J.UNMOUNTED=we;J.EXITED=oe;J.ENTERING=ie;J.ENTERED=pe;J.EXITING=Ge;const Wt=J;function Ft(){const e=zt(Yt);return e[Bt]||e}const It=e=>e.scrollTop;function De(e,t){var n,r;const{timeout:o,easing:i,style:a={}}=e;return{duration:(n=a.transitionDuration)!=null?n:typeof o=="number"?o:o[t.mode]||0,easing:(r=a.transitionTimingFunction)!=null?r:typeof i=="object"?i[t.mode]:i,delay:a.transitionDelay}}const br=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function Ue(e){return`scale(${e}, ${e**2})`}const yr={entering:{opacity:1,transform:Ue(1)},entered:{opacity:1,transform:"none"}},ze=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),Lt=l.forwardRef(function(t,n){const{addEndListener:r,appear:o=!0,children:i,easing:a,in:c,onEnter:d,onEntered:u,onEntering:p,onExit:m,onExited:E,onExiting:k,style:g,timeout:M="auto",TransitionComponent:P=Wt}=t,D=Q(t,br),T=Xt(),h=l.useRef(),v=Ft(),S=l.useRef(null),$=ae(S,i.ref,n),N=b=>y=>{if(b){const w=S.current;y===void 0?b(w):b(w,y)}},F=N(p),Y=N((b,y)=>{It(b);const{duration:w,delay:L,easing:B}=De({style:g,timeout:M,easing:a},{mode:"enter"});let U;M==="auto"?(U=v.transitions.getAutoHeightDuration(b.clientHeight),h.current=U):U=w,b.style.transition=[v.transitions.create("opacity",{duration:U,delay:L}),v.transitions.create("transform",{duration:ze?U:U*.666,delay:L,easing:B})].join(","),d&&d(b,y)}),I=N(u),A=N(k),W=N(b=>{const{duration:y,delay:w,easing:L}=De({style:g,timeout:M,easing:a},{mode:"exit"});let B;M==="auto"?(B=v.transitions.getAutoHeightDuration(b.clientHeight),h.current=B):B=y,b.style.transition=[v.transitions.create("opacity",{duration:B,delay:w}),v.transitions.create("transform",{duration:ze?B:B*.666,delay:ze?w:w||B*.333,easing:L})].join(","),b.style.opacity=0,b.style.transform=Ue(.75),m&&m(b)}),z=N(E),j=b=>{M==="auto"&&T.start(h.current||0,b),r&&r(S.current,b)};return s.jsx(P,x({appear:o,in:c,nodeRef:S,onEnter:Y,onEntered:I,onEntering:F,onExit:W,onExited:z,onExiting:A,addEndListener:j,timeout:M==="auto"?null:M},D,{children:(b,y)=>l.cloneElement(i,x({style:x({opacity:0,transform:Ue(.75),visibility:b==="exited"&&!c?"hidden":void 0},yr[b],g,i.props.style),ref:$},y))}))});Lt.muiSupportAuto=!0;const vr=Lt;function wr(e){const t=X(e);return t.body===e?Pe(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function Ee(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function mt(e){return parseInt(Pe(e).getComputedStyle(e).paddingRight,10)||0}function Er(e){const n=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,r=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return n||r}function gt(e,t,n,r,o){const i=[t,n,...r];[].forEach.call(e.children,a=>{const c=i.indexOf(a)===-1,d=!Er(a);c&&d&&Ee(a,o)})}function Ye(e,t){let n=-1;return e.some((r,o)=>t(r)?(n=o,!0):!1),n}function Pr(e,t){const n=[],r=e.container;if(!t.disableScrollLock){if(wr(r)){const a=Qt(X(r));n.push({value:r.style.paddingRight,property:"padding-right",el:r}),r.style.paddingRight=`${mt(r)+a}px`;const c=X(r).querySelectorAll(".mui-fixed");[].forEach.call(c,d=>{n.push({value:d.style.paddingRight,property:"padding-right",el:d}),d.style.paddingRight=`${mt(d)+a}px`})}let i;if(r.parentNode instanceof DocumentFragment)i=X(r).body;else{const a=r.parentElement,c=Pe(r);i=(a==null?void 0:a.nodeName)==="HTML"&&c.getComputedStyle(a).overflowY==="scroll"?a:r}n.push({value:i.style.overflow,property:"overflow",el:i},{value:i.style.overflowX,property:"overflow-x",el:i},{value:i.style.overflowY,property:"overflow-y",el:i}),i.style.overflow="hidden"}return()=>{n.forEach(({value:i,el:a,property:c})=>{i?a.style.setProperty(c,i):a.style.removeProperty(c)})}}function kr(e){const t=[];return[].forEach.call(e.children,n=>{n.getAttribute("aria-hidden")==="true"&&t.push(n)}),t}class Mr{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,n){let r=this.modals.indexOf(t);if(r!==-1)return r;r=this.modals.length,this.modals.push(t),t.modalRef&&Ee(t.modalRef,!1);const o=kr(n);gt(n,t.mount,t.modalRef,o,!0);const i=Ye(this.containers,a=>a.container===n);return i!==-1?(this.containers[i].modals.push(t),r):(this.containers.push({modals:[t],container:n,restore:null,hiddenSiblings:o}),r)}mount(t,n){const r=Ye(this.containers,i=>i.modals.indexOf(t)!==-1),o=this.containers[r];o.restore||(o.restore=Pr(o,n))}remove(t,n=!0){const r=this.modals.indexOf(t);if(r===-1)return r;const o=Ye(this.containers,a=>a.modals.indexOf(t)!==-1),i=this.containers[o];if(i.modals.splice(i.modals.indexOf(t),1),this.modals.splice(r,1),i.modals.length===0)i.restore&&i.restore(),t.modalRef&&Ee(t.modalRef,n),gt(i.container,t.mount,t.modalRef,i.hiddenSiblings,!1),this.containers.splice(o,1);else{const a=i.modals[i.modals.length-1];a.modalRef&&Ee(a.modalRef,!1)}return r}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}function Tr(e){return typeof e=="function"?e():e}function Sr(e){return e?e.props.hasOwnProperty("in"):!1}const Or=new Mr;function Cr(e){const{container:t,disableEscapeKeyDown:n=!1,disableScrollLock:r=!1,manager:o=Or,closeAfterTransition:i=!1,onTransitionEnter:a,onTransitionExited:c,children:d,onClose:u,open:p,rootRef:m}=e,E=l.useRef({}),k=l.useRef(null),g=l.useRef(null),M=ae(g,m),[P,D]=l.useState(!p),T=Sr(d);let h=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(h=!1);const v=()=>X(k.current),S=()=>(E.current.modalRef=g.current,E.current.mount=k.current,E.current),$=()=>{o.mount(S(),{disableScrollLock:r}),g.current&&(g.current.scrollTop=0)},N=tt(()=>{const y=Tr(t)||v().body;o.add(S(),y),g.current&&$()}),F=l.useCallback(()=>o.isTopModal(S()),[o]),Y=tt(y=>{k.current=y,y&&(p&&F()?$():g.current&&Ee(g.current,h))}),I=l.useCallback(()=>{o.remove(S(),h)},[h,o]);l.useEffect(()=>()=>{I()},[I]),l.useEffect(()=>{p?N():(!T||!i)&&I()},[p,I,T,i,N]);const A=y=>w=>{var L;(L=y.onKeyDown)==null||L.call(y,w),!(w.key!=="Escape"||w.which===229||!F())&&(n||(w.stopPropagation(),u&&u(w,"escapeKeyDown")))},W=y=>w=>{var L;(L=y.onClick)==null||L.call(y,w),w.target===w.currentTarget&&u&&u(w,"backdropClick")};return{getRootProps:(y={})=>{const w=$t(e);delete w.onTransitionEnter,delete w.onTransitionExited;const L=x({},w,y);return x({role:"presentation"},L,{onKeyDown:A(L),ref:M})},getBackdropProps:(y={})=>{const w=y;return x({"aria-hidden":!0},w,{onClick:W(w),open:p})},getTransitionProps:()=>{const y=()=>{D(!1),a&&a()},w=()=>{D(!0),c&&c(),i&&I()};return{onEnter:it(y,d==null?void 0:d.props.onEnter),onExited:it(w,d==null?void 0:d.props.onExited)}},rootRef:M,portalRef:Y,isTopModal:F,exited:P,hasTransition:T}}const Dr=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function jr(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function Nr(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=r=>e.ownerDocument.querySelector(`input[type="radio"]${r}`);let n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}function $r(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||Nr(e))}function Rr(e){const t=[],n=[];return Array.from(e.querySelectorAll(Dr)).forEach((r,o)=>{const i=jr(r);i===-1||!$r(r)||(i===0?t.push(r):n.push({documentOrder:o,tabIndex:i,node:r}))}),n.sort((r,o)=>r.tabIndex===o.tabIndex?r.documentOrder-o.documentOrder:r.tabIndex-o.tabIndex).map(r=>r.node).concat(t)}function Wr(){return!0}function Fr(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:r=!1,disableRestoreFocus:o=!1,getTabbable:i=Rr,isEnabled:a=Wr,open:c}=e,d=l.useRef(!1),u=l.useRef(null),p=l.useRef(null),m=l.useRef(null),E=l.useRef(null),k=l.useRef(!1),g=l.useRef(null),M=ae(t.ref,g),P=l.useRef(null);l.useEffect(()=>{!c||!g.current||(k.current=!n)},[n,c]),l.useEffect(()=>{if(!c||!g.current)return;const h=X(g.current);return g.current.contains(h.activeElement)||(g.current.hasAttribute("tabIndex")||g.current.setAttribute("tabIndex","-1"),k.current&&g.current.focus()),()=>{o||(m.current&&m.current.focus&&(d.current=!0,m.current.focus()),m.current=null)}},[c]),l.useEffect(()=>{if(!c||!g.current)return;const h=X(g.current),v=N=>{P.current=N,!(r||!a()||N.key!=="Tab")&&h.activeElement===g.current&&N.shiftKey&&(d.current=!0,p.current&&p.current.focus())},S=()=>{const N=g.current;if(N===null)return;if(!h.hasFocus()||!a()||d.current){d.current=!1;return}if(N.contains(h.activeElement)||r&&h.activeElement!==u.current&&h.activeElement!==p.current)return;if(h.activeElement!==E.current)E.current=null;else if(E.current!==null)return;if(!k.current)return;let F=[];if((h.activeElement===u.current||h.activeElement===p.current)&&(F=i(g.current)),F.length>0){var Y,I;const A=!!((Y=P.current)!=null&&Y.shiftKey&&((I=P.current)==null?void 0:I.key)==="Tab"),W=F[0],z=F[F.length-1];typeof W!="string"&&typeof z!="string"&&(A?z.focus():W.focus())}else N.focus()};h.addEventListener("focusin",S),h.addEventListener("keydown",v,!0);const $=setInterval(()=>{h.activeElement&&h.activeElement.tagName==="BODY"&&S()},50);return()=>{clearInterval($),h.removeEventListener("focusin",S),h.removeEventListener("keydown",v,!0)}},[n,r,o,a,c,i]);const D=h=>{m.current===null&&(m.current=h.relatedTarget),k.current=!0,E.current=h.target;const v=t.props.onFocus;v&&v(h)},T=h=>{m.current===null&&(m.current=h.relatedTarget),k.current=!0};return s.jsxs(l.Fragment,{children:[s.jsx("div",{tabIndex:c?0:-1,onFocus:T,ref:u,"data-testid":"sentinelStart"}),l.cloneElement(t,{ref:M,onFocus:D}),s.jsx("div",{tabIndex:c?0:-1,onFocus:T,ref:p,"data-testid":"sentinelEnd"})]})}function Ir(e){return typeof e=="function"?e():e}const Lr=l.forwardRef(function(t,n){const{children:r,container:o,disablePortal:i=!1}=t,[a,c]=l.useState(null),d=ae(l.isValidElement(r)?r.ref:null,n);if(nt(()=>{i||c(Ir(o)||document.body)},[o,i]),nt(()=>{if(a&&!i)return rt(n,a),()=>{rt(n,null)}},[n,a,i]),i){if(l.isValidElement(r)){const u={ref:d};return l.cloneElement(r,u)}return s.jsx(l.Fragment,{children:r})}return s.jsx(l.Fragment,{children:a&&Ht.createPortal(r,a)})}),_r=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],zr={entering:{opacity:1},entered:{opacity:1}},Yr=l.forwardRef(function(t,n){const r=Ft(),o={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:i,appear:a=!0,children:c,easing:d,in:u,onEnter:p,onEntered:m,onEntering:E,onExit:k,onExited:g,onExiting:M,style:P,timeout:D=o,TransitionComponent:T=Wt}=t,h=Q(t,_r),v=l.useRef(null),S=ae(v,c.ref,n),$=j=>b=>{if(j){const y=v.current;b===void 0?j(y):j(y,b)}},N=$(E),F=$((j,b)=>{It(j);const y=De({style:P,timeout:D,easing:d},{mode:"enter"});j.style.webkitTransition=r.transitions.create("opacity",y),j.style.transition=r.transitions.create("opacity",y),p&&p(j,b)}),Y=$(m),I=$(M),A=$(j=>{const b=De({style:P,timeout:D,easing:d},{mode:"exit"});j.style.webkitTransition=r.transitions.create("opacity",b),j.style.transition=r.transitions.create("opacity",b),k&&k(j)}),W=$(g),z=j=>{i&&i(v.current,j)};return s.jsx(T,x({appear:a,in:u,nodeRef:v,onEnter:F,onEntered:Y,onEntering:N,onExit:A,onExited:W,onExiting:I,addEndListener:z,timeout:D},h,{children:(j,b)=>l.cloneElement(c,x({style:x({opacity:0,visibility:j==="exited"&&!u?"hidden":void 0},zr[j],P,c.props.style),ref:S},b))}))}),Br=Yr;function Hr(e){return je("MuiBackdrop",e)}Ne("MuiBackdrop",["root","invisible"]);const Ar=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],qr=e=>{const{classes:t,invisible:n}=e;return Re({root:["root",n&&"invisible"]},Hr,t)},Gr=me("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})(({ownerState:e})=>x({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),Ur=l.forwardRef(function(t,n){var r,o,i;const a=$e({props:t,name:"MuiBackdrop"}),{children:c,className:d,component:u="div",components:p={},componentsProps:m={},invisible:E=!1,open:k,slotProps:g={},slots:M={},TransitionComponent:P=Br,transitionDuration:D}=a,T=Q(a,Ar),h=x({},a,{component:u,invisible:E}),v=qr(h),S=(r=g.root)!=null?r:m.root;return s.jsx(P,x({in:k,timeout:D},T,{children:s.jsx(Gr,x({"aria-hidden":!0},S,{as:(o=(i=M.root)!=null?i:p.Root)!=null?o:u,className:ee(v.root,d,S==null?void 0:S.className),ownerState:x({},h,S==null?void 0:S.ownerState),classes:v,ref:n,children:c}))}))}),Xr=Ur;function Qr(e){return je("MuiModal",e)}Ne("MuiModal",["root","hidden","backdrop"]);const Vr=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],Kr=e=>{const{open:t,exited:n,classes:r}=e;return Re({root:["root",!t&&n&&"hidden"],backdrop:["backdrop"]},Qr,r)},Jr=me("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})(({theme:e,ownerState:t})=>x({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),Zr=me(Xr,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),eo=l.forwardRef(function(t,n){var r,o,i,a,c,d;const u=$e({name:"MuiModal",props:t}),{BackdropComponent:p=Zr,BackdropProps:m,className:E,closeAfterTransition:k=!1,children:g,container:M,component:P,components:D={},componentsProps:T={},disableAutoFocus:h=!1,disableEnforceFocus:v=!1,disableEscapeKeyDown:S=!1,disablePortal:$=!1,disableRestoreFocus:N=!1,disableScrollLock:F=!1,hideBackdrop:Y=!1,keepMounted:I=!1,onBackdropClick:A,open:W,slotProps:z,slots:j}=u,b=Q(u,Vr),y=x({},u,{closeAfterTransition:k,disableAutoFocus:h,disableEnforceFocus:v,disableEscapeKeyDown:S,disablePortal:$,disableRestoreFocus:N,disableScrollLock:F,hideBackdrop:Y,keepMounted:I}),{getRootProps:w,getBackdropProps:L,getTransitionProps:B,portalRef:U,isTopModal:Me,exited:q,hasTransition:Te}=Cr(x({},y,{rootRef:n})),te=x({},y,{exited:q}),V=Kr(te),se={};if(g.props.tabIndex===void 0&&(se.tabIndex="-1"),Te){const{onEnter:C,onExited:R}=B();se.onEnter=C,se.onExited=R}const ce=(r=(o=j==null?void 0:j.root)!=null?o:D.Root)!=null?r:Jr,ge=(i=(a=j==null?void 0:j.backdrop)!=null?a:D.Backdrop)!=null?i:p,xe=(c=z==null?void 0:z.root)!=null?c:T.root,le=(d=z==null?void 0:z.backdrop)!=null?d:T.backdrop,Fe=Ce({elementType:ce,externalSlotProps:xe,externalForwardedProps:b,getSlotProps:w,additionalProps:{ref:n,as:P},ownerState:te,className:ee(E,xe==null?void 0:xe.className,V==null?void 0:V.root,!te.open&&te.exited&&(V==null?void 0:V.hidden))}),Ie=Ce({elementType:ge,externalSlotProps:le,additionalProps:m,getSlotProps:C=>L(x({},C,{onClick:R=>{A&&A(R),C!=null&&C.onClick&&C.onClick(R)}})),className:ee(le==null?void 0:le.className,m==null?void 0:m.className,V==null?void 0:V.backdrop),ownerState:te});return!I&&!W&&(!Te||q)?null:s.jsx(Lr,{ref:U,container:M,disablePortal:$,children:s.jsxs(ce,x({},Fe,{children:[!Y&&p?s.jsx(ge,x({},Ie)):null,s.jsx(Fr,{disableEnforceFocus:v,disableAutoFocus:h,disableRestoreFocus:N,isEnabled:Me,open:W,children:l.cloneElement(g,se)})]}))})}),to=eo,no=e=>{let t;return e<1?t=5.11916*e**2:t=4.5*Math.log(e+1)+2,(t/100).toFixed(2)},xt=no;function ro(e){return je("MuiPaper",e)}Ne("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const oo=["className","component","elevation","square","variant"],io=e=>{const{square:t,elevation:n,variant:r,classes:o}=e,i={root:["root",r,!t&&"rounded",r==="elevation"&&`elevation${n}`]};return Re(i,ro,o)},ao=me("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,n.variant==="elevation"&&t[`elevation${n.elevation}`]]}})(({theme:e,ownerState:t})=>{var n;return x({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},t.variant==="elevation"&&x({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${ot("#fff",xt(t.elevation))}, ${ot("#fff",xt(t.elevation))})`},e.vars&&{backgroundImage:(n=e.vars.overlays)==null?void 0:n[t.elevation]}))}),so=l.forwardRef(function(t,n){const r=$e({props:t,name:"MuiPaper"}),{className:o,component:i="div",elevation:a=1,square:c=!1,variant:d="elevation"}=r,u=Q(r,oo),p=x({},r,{component:i,elevation:a,square:c,variant:d}),m=io(p);return s.jsx(ao,x({as:i,ownerState:p,className:ee(m.root,o),ref:n},u))}),co=so;function lo(e){return je("MuiPopover",e)}Ne("MuiPopover",["root","paper"]);const uo=["onEntering"],fo=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps","disableScrollLock"],ho=["slotProps"];function bt(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.height/2:t==="bottom"&&(n=e.height),n}function yt(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.width/2:t==="right"&&(n=e.width),n}function vt(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function Be(e){return typeof e=="function"?e():e}const po=e=>{const{classes:t}=e;return Re({root:["root"],paper:["paper"]},lo,t)},mo=me(to,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),go=me(co,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),xo=l.forwardRef(function(t,n){var r,o,i;const a=$e({props:t,name:"MuiPopover"}),{action:c,anchorEl:d,anchorOrigin:u={vertical:"top",horizontal:"left"},anchorPosition:p,anchorReference:m="anchorEl",children:E,className:k,container:g,elevation:M=8,marginThreshold:P=16,open:D,PaperProps:T={},slots:h,slotProps:v,transformOrigin:S={vertical:"top",horizontal:"left"},TransitionComponent:$=vr,transitionDuration:N="auto",TransitionProps:{onEntering:F}={},disableScrollLock:Y=!1}=a,I=Q(a.TransitionProps,uo),A=Q(a,fo),W=(r=v==null?void 0:v.paper)!=null?r:T,z=l.useRef(),j=ae(z,W.ref),b=x({},a,{anchorOrigin:u,anchorReference:m,elevation:M,marginThreshold:P,externalPaperSlotProps:W,transformOrigin:S,TransitionComponent:$,transitionDuration:N,TransitionProps:I}),y=po(b),w=l.useCallback(()=>{if(m==="anchorPosition")return p;const C=Be(d),H=(C&&C.nodeType===1?C:X(z.current).body).getBoundingClientRect();return{top:H.top+bt(H,u.vertical),left:H.left+yt(H,u.horizontal)}},[d,u.horizontal,u.vertical,p,m]),L=l.useCallback(C=>({vertical:bt(C,S.vertical),horizontal:yt(C,S.horizontal)}),[S.horizontal,S.vertical]),B=l.useCallback(C=>{const R={width:C.offsetWidth,height:C.offsetHeight},H=L(R);if(m==="none")return{top:null,left:null,transformOrigin:vt(H)};const Qe=w();let de=Qe.top-H.vertical,ue=Qe.left-H.horizontal;const Ve=de+R.height,Ke=ue+R.width,Je=Pe(Be(d)),Ze=Je.innerHeight-P,et=Je.innerWidth-P;if(P!==null&&de<P){const G=de-P;de-=G,H.vertical+=G}else if(P!==null&&Ve>Ze){const G=Ve-Ze;de-=G,H.vertical+=G}if(P!==null&&ue<P){const G=ue-P;ue-=G,H.horizontal+=G}else if(Ke>et){const G=Ke-et;ue-=G,H.horizontal+=G}return{top:`${Math.round(de)}px`,left:`${Math.round(ue)}px`,transformOrigin:vt(H)}},[d,m,w,L,P]),[U,Me]=l.useState(D),q=l.useCallback(()=>{const C=z.current;if(!C)return;const R=B(C);R.top!==null&&(C.style.top=R.top),R.left!==null&&(C.style.left=R.left),C.style.transformOrigin=R.transformOrigin,Me(!0)},[B]);l.useEffect(()=>(Y&&window.addEventListener("scroll",q),()=>window.removeEventListener("scroll",q)),[d,Y,q]);const Te=(C,R)=>{F&&F(C,R),q()},te=()=>{Me(!1)};l.useEffect(()=>{D&&q()}),l.useImperativeHandle(c,()=>D?{updatePosition:()=>{q()}}:null,[D,q]),l.useEffect(()=>{if(!D)return;const C=At(()=>{q()}),R=Pe(d);return R.addEventListener("resize",C),()=>{C.clear(),R.removeEventListener("resize",C)}},[d,D,q]);let V=N;N==="auto"&&!$.muiSupportAuto&&(V=void 0);const se=g||(d?X(Be(d)).body:void 0),ce=(o=h==null?void 0:h.root)!=null?o:mo,ge=(i=h==null?void 0:h.paper)!=null?i:go,xe=Ce({elementType:ge,externalSlotProps:x({},W,{style:U?W.style:x({},W.style,{opacity:0})}),additionalProps:{elevation:M,ref:j},ownerState:b,className:ee(y.paper,W==null?void 0:W.className)}),le=Ce({elementType:ce,externalSlotProps:(v==null?void 0:v.root)||{},externalForwardedProps:A,additionalProps:{ref:n,slotProps:{backdrop:{invisible:!0}},container:se,open:D},ownerState:b,className:ee(y.root,k)}),{slotProps:Fe}=le,Ie=Q(le,ho);return s.jsx(ce,x({},Ie,!Nt(ce)&&{slotProps:Fe,disableScrollLock:Y},{children:s.jsx($,x({appear:!0,in:D,onEntering:Te,onExited:te,timeout:V},I,{children:s.jsx(ge,x({},xe,{children:E}))}))}))}),bo=xo,yo=f.div`
display: flex;
flex-direction:column;
gap: 16px;
padding: 24px 13px;


border-radius: 10px;
background:${e=>e.theme.colors.primary.bg};
box-shadow: 0px 4px 4px 0px rgba(64, 123, 255, 0.30);



`,vo=f.h2`
color:${e=>e.theme.colors.primary.accent};
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 1.25;
`,wo=f.ul`
display: flex;
flex-direction: column;
gap: 16px;

color: ${e=>e.theme.colors.primary.text};

font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 1.25;
`,He=f.li`

span{
  color:${e=>e.theme.colors.primary.accent};

  font-size: 18px;

  font-weight: 500;
  line-height: 1.33;
}

`,Eo=({selectedDate:e})=>{console.log(e);const t=jt(e,"MMMM"),n=e.getDate();return s.jsxs(yo,{children:[s.jsxs(vo,{children:[" ",n,", ",t]}),s.jsxs(wo,{children:[s.jsxs(He,{children:["Daily Norma: ",s.jsx("span",{children:"1.2 L"})]}),s.jsxs(He,{children:["Fulfillment of the daily norm: ",s.jsx("span",{children:"100 %"})]}),s.jsxs(He,{children:["How many servings of water: ",s.jsx("span",{children:"6"})]})]})]})},Po=f.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,ko=f.div`
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
 
`,Mo=f.ul`
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
`,To=f.li`
  display: flex;
  flex-direction: column;
  gap:4px;
  align-items: center;
  position: relative;
  cursor: pointer;
  padding: 0px;

 

@media(min-width: ${({theme:e})=>e.screens.tab}) {
 
}

`,So=f.div`
width: 34px;
height: 34px;
border-radius: 20px;
display: flex;
justify-content: center;
align-items: center;
background-color: ${e=>e.theme.colors.primary.bg};

border: 2px solid
    ${({theme:e,percentage:t})=>t<100?e.colors.secondary.color4:e.colors.primary.bg};

`,Oo=f.p`
z-index: 1;
margin: 0;
`,Co=f.p`


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

`,Do=({selectedDate:e,onDayClick:t})=>{const n=rn(e),o=nn(e).getDate()-n.getDate()+1,i=[];for(let a=1;a<=o;a++){const c=new Date(e.getFullYear(),e.getMonth(),a);i.push(s.jsxs(To,{onClick:d=>t(d,c),children:[s.jsx(So,{percentage:100,children:s.jsx(Oo,{children:a})}),s.jsx(Co,{children:"100%"})]},a))}return s.jsx(Mo,{children:i})},jo=()=>{const[e,t]=l.useState(new Date),[n,r]=l.useState(null),o=(d,u)=>{t(u),r(d.currentTarget)},i=()=>{r(null)},a=!!n,c=a?"simple-popover":void 0;return s.jsxs(Po,{children:[s.jsxs(ko,{children:[s.jsx("h3",{children:"Month"}),s.jsx(ur,{selectedDate:e,setSelectedDate:t})]}),s.jsx(Do,{selectedDate:e,onDayClick:o}),s.jsx(bo,{id:c,open:a,anchorEl:n,onClose:i,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"bottom",horizontal:"right"},children:s.jsx(Eo,{selectedDate:e})})]})},No=f.div`
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
`,$o=f.div`
display: flex;
flex-direction: column;

width: 280px;
height: 507px;


@media (min-width: ${({theme:e})=>e.screens.tab}) {
  width: 704px;
}

`,Ro=f.div`
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


`,Wo=(e,t=!1)=>{const n=new Date(e);let r=n.getHours();const o=n.getMinutes();let i="";if(t){const a=r>=12?"PM":"AM";r=r%12,r=r||12,i=`${r.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")} ${a}`}else i=`${r.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")}`;return i},Fo=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",...e},l.createElement("title",null,"glass_26"),l.createElement("path",{fill:"#407bff",d:"M5.565 2.783l1.901 26.363v0.072h16.367l1.901-26.353v-0.082h-20.169zM23.16 28.479h-15.017l-1.426-19.747h0.784l1.289 17.403c0.008 0.092 0.049 0.177 0.115 0.24s0.153 0.098 0.244 0.099h0.030c0.047-0.003 0.093-0.016 0.136-0.037s0.080-0.051 0.111-0.087c0.031-0.036 0.055-0.078 0.070-0.124s0.021-0.094 0.017-0.141l-1.289-17.351h16.362l-1.426 19.747zM24.637 7.994h-16.468l-0.283-3.847c-0.009-0.094-0.052-0.181-0.122-0.244s-0.16-0.097-0.252-0.095c-0.095 0.009-0.183 0.055-0.245 0.129s-0.094 0.169-0.088 0.266l0.283 3.795h-0.794l-0.324-4.483h18.617l-0.324 4.478z"}),l.createElement("path",{fill:"#407bff",d:"M11.359 12.384c0.236 0 0.467-0.071 0.663-0.204s0.349-0.322 0.439-0.543c0.090-0.221 0.114-0.465 0.068-0.699s-0.16-0.45-0.327-0.62c-0.167-0.169-0.38-0.285-0.611-0.331s-0.471-0.023-0.689 0.069c-0.218 0.092-0.404 0.247-0.536 0.446s-0.201 0.433-0.201 0.672c0 0.321 0.126 0.629 0.35 0.856s0.527 0.355 0.844 0.355zM11.359 10.697c0.093 0 0.184 0.028 0.261 0.080s0.138 0.127 0.173 0.214c0.036 0.087 0.045 0.183 0.027 0.276s-0.063 0.178-0.129 0.244c-0.066 0.067-0.15 0.112-0.241 0.131s-0.186 0.009-0.272-0.027c-0.086-0.036-0.159-0.097-0.211-0.176s-0.079-0.171-0.079-0.265c0-0.127 0.050-0.248 0.138-0.337s0.208-0.14 0.332-0.14z"}),l.createElement("path",{fill:"#407bff",d:"M11.354 16.318c0.003 0.239 0.076 0.472 0.209 0.669s0.321 0.35 0.539 0.439 0.458 0.111 0.689 0.062c0.231-0.049 0.442-0.166 0.607-0.336s0.277-0.387 0.321-0.621 0.019-0.477-0.072-0.698c-0.091-0.22-0.245-0.408-0.442-0.54s-0.427-0.201-0.663-0.2c-0.158 0.001-0.313 0.033-0.459 0.095s-0.277 0.153-0.387 0.267-0.198 0.249-0.256 0.397c-0.059 0.148-0.088 0.307-0.086 0.467zM13.013 16.318c0 0.094-0.028 0.187-0.079 0.265s-0.125 0.14-0.211 0.176c-0.086 0.036-0.18 0.046-0.272 0.027s-0.175-0.064-0.241-0.131-0.111-0.152-0.129-0.244c-0.018-0.093-0.009-0.188 0.027-0.276s0.096-0.162 0.173-0.214 0.168-0.080 0.261-0.080c0.125 0 0.244 0.050 0.333 0.14s0.138 0.211 0.138 0.337z"}),l.createElement("path",{fill:"#407bff",d:"M19.834 16.349c0.236 0 0.467-0.071 0.663-0.204s0.349-0.322 0.439-0.543c0.090-0.221 0.114-0.465 0.068-0.699s-0.16-0.45-0.327-0.62c-0.167-0.169-0.379-0.285-0.611-0.331s-0.471-0.023-0.689 0.069c-0.218 0.092-0.404 0.247-0.535 0.446s-0.201 0.433-0.201 0.672c0 0.321 0.126 0.629 0.349 0.856s0.527 0.355 0.844 0.355zM19.834 14.666c0.093 0 0.184 0.028 0.262 0.081s0.138 0.127 0.173 0.215c0.035 0.088 0.044 0.184 0.026 0.276s-0.064 0.178-0.13 0.244c-0.066 0.066-0.151 0.111-0.242 0.129s-0.186 0.008-0.272-0.029-0.159-0.099-0.21-0.178c-0.051-0.079-0.078-0.172-0.077-0.266 0.001-0.126 0.051-0.246 0.14-0.334s0.207-0.138 0.331-0.138z"}),l.createElement("path",{fill:"#407bff",d:"M15.677 14.066c0.236 0 0.467-0.071 0.663-0.204s0.349-0.322 0.439-0.543c0.090-0.221 0.114-0.464 0.068-0.699s-0.16-0.45-0.327-0.62c-0.167-0.169-0.38-0.285-0.611-0.331s-0.471-0.023-0.689 0.069c-0.218 0.092-0.404 0.247-0.536 0.446s-0.201 0.433-0.201 0.672c0 0.321 0.126 0.629 0.35 0.856s0.527 0.354 0.844 0.354zM15.677 12.379c0.093 0 0.184 0.028 0.261 0.080s0.138 0.127 0.173 0.214c0.036 0.087 0.045 0.183 0.027 0.276s-0.063 0.177-0.129 0.244c-0.066 0.067-0.15 0.112-0.241 0.131s-0.186 0.009-0.272-0.027-0.159-0.097-0.211-0.176c-0.052-0.079-0.079-0.171-0.079-0.265-0.003-0.065 0.006-0.129 0.028-0.19s0.056-0.116 0.1-0.164c0.044-0.047 0.097-0.084 0.156-0.11s0.122-0.039 0.186-0.039v0.026z"}),l.createElement("path",{fill:"#407bff",d:"M13.402 20.929c0.005 0.197 0.067 0.387 0.178 0.548s0.267 0.285 0.447 0.357c0.181 0.072 0.378 0.088 0.568 0.047s0.363-0.139 0.498-0.279c0.135-0.141 0.227-0.319 0.263-0.512s0.015-0.393-0.060-0.574c-0.075-0.181-0.202-0.336-0.363-0.445s-0.351-0.167-0.545-0.167c-0.264 0.007-0.514 0.118-0.699 0.309s-0.287 0.449-0.287 0.716zM14.388 20.662c0.052 0 0.103 0.016 0.146 0.045s0.077 0.071 0.097 0.12 0.025 0.102 0.015 0.154c-0.010 0.052-0.035 0.099-0.072 0.137s-0.084 0.063-0.135 0.073c-0.051 0.010-0.104 0.005-0.152-0.015s-0.089-0.054-0.118-0.098c-0.029-0.044-0.044-0.096-0.044-0.148 0-0.071 0.028-0.139 0.077-0.189s0.116-0.078 0.186-0.078z"}),l.createElement("path",{fill:"#407bff",d:"M18.17 19.816c0.202 0.007 0.402-0.048 0.574-0.157s0.306-0.269 0.388-0.457c0.081-0.188 0.105-0.397 0.068-0.599s-0.133-0.388-0.275-0.534c-0.143-0.146-0.325-0.245-0.524-0.285s-0.405-0.018-0.591 0.063c-0.186 0.081-0.345 0.216-0.454 0.389s-0.166 0.375-0.161 0.58c0.006 0.262 0.111 0.511 0.292 0.697s0.426 0.295 0.684 0.304zM18.17 18.549c0.070 0 0.137 0.028 0.186 0.078s0.077 0.118 0.077 0.189c0 0.071-0.028 0.139-0.077 0.189s-0.116 0.078-0.186 0.078c-0.070 0-0.138-0.028-0.188-0.078s-0.079-0.118-0.080-0.189c0-0.035 0.007-0.071 0.020-0.103s0.033-0.062 0.058-0.087 0.055-0.044 0.087-0.057c0.032-0.013 0.067-0.019 0.102-0.019z"}),l.createElement("path",{fill:"#407bff",d:"M20.253 11.538c0.2 0 0.395-0.060 0.562-0.173s0.296-0.273 0.372-0.46c0.077-0.187 0.097-0.394 0.058-0.593s-0.135-0.382-0.277-0.525c-0.141-0.143-0.322-0.241-0.518-0.281s-0.399-0.019-0.584 0.058c-0.185 0.078-0.343 0.209-0.454 0.378s-0.17 0.367-0.17 0.57c0 0.272 0.107 0.533 0.296 0.725s0.447 0.3 0.715 0.3zM20.253 10.271c0.039-0.011 0.080-0.013 0.12-0.006s0.078 0.024 0.11 0.049c0.032 0.025 0.059 0.057 0.077 0.094s0.028 0.078 0.028 0.119-0.009 0.082-0.028 0.119c-0.018 0.037-0.044 0.069-0.077 0.094s-0.070 0.042-0.11 0.049c-0.040 0.008-0.081 0.006-0.12-0.006-0.039 0.011-0.080 0.013-0.12 0.006s-0.078-0.024-0.11-0.049c-0.032-0.025-0.059-0.057-0.077-0.094s-0.028-0.078-0.028-0.119 0.009-0.082 0.028-0.119c0.018-0.037 0.044-0.069 0.077-0.094s0.070-0.042 0.11-0.049c0.040-0.008 0.081-0.006 0.12 0.006z"}),l.createElement("path",{fill:"#407bff",d:"M10.369 27.191c-0.045 0.021-0.086 0.052-0.119 0.089s-0.059 0.082-0.074 0.13c-0.016 0.048-0.021 0.099-0.017 0.149s0.019 0.099 0.043 0.144c0.031 0.060 0.078 0.11 0.135 0.145s0.122 0.054 0.189 0.055c0.056 0.002 0.112-0.011 0.162-0.036 1.545-0.803 3.255-1.225 4.99-1.231 1.837 0.027 3.648 0.441 5.319 1.215 0.066 0.035 0.141 0.049 0.215 0.039s0.143-0.042 0.198-0.093c0.055-0.051 0.094-0.118 0.11-0.192s0.010-0.151-0.018-0.221c-0.036-0.091-0.105-0.164-0.192-0.205-1.769-0.821-3.687-1.258-5.633-1.282-1.845 0.002-3.664 0.444-5.309 1.292z"})),Io=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:1024,height:1024,viewBox:"0 0 1024 1024",...e},l.createElement("title",null,"edit"),l.createElement("path",{fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:4,strokeWidth:42.6667,d:"M719.445 191.445l71.979-72.021c14.479-14.479 34.482-23.435 56.576-23.435 44.189 0 80.011 35.822 80.011 80.011 0 22.094-8.955 42.097-23.435 56.576l-453.077 453.077c-21.936 21.924-49.153 38.567-79.579 47.856l-1.36 0.357-114.56 34.133 34.133-114.56c9.647-31.785 26.289-59.002 48.214-80.94l381.098-381.055zM719.445 191.445l112.555 112.555M768 597.333v202.667c0 53.019-42.981 96-96 96v0h-448c-53.019 0-96-42.981-96-96v0-448c0-53.019 42.981-96 96-96v0h202.667"})),Lo=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:1024,height:1024,viewBox:"0 0 1024 1024",...e},l.createElement("title",null,"delete"),l.createElement("path",{fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:4,strokeWidth:42.6667,d:"M628.907 384l-14.763 384M409.856 768l-14.763-384M820.395 247.040c14.592 2.219 29.099 4.565 43.605 7.083M820.395 247.040l-45.568 592.341c-3.952 49.747-45.294 88.619-95.716 88.619-0.010 0-0.020 0-0.030 0h-334.164c-0.008 0-0.018 0-0.028 0-50.422 0-91.764-38.872-95.694-88.283l-0.021-0.336-45.568-592.341M820.395 247.040c-38.791-6.358-89.724-12.366-141.193-16.476l-7.202-0.463M203.605 247.040c-25.242 3.599-40.074 6.065-54.844 8.706l11.239-1.666M203.605 247.040c38.789-6.358 89.722-12.366 141.19-16.476l7.205-0.463M672 230.101v-39.083c0-50.347-38.827-92.331-89.173-93.909-21.11-0.721-45.921-1.132-70.827-1.132-24.908 0-49.719 0.411-74.428 1.226l3.602-0.094c-50.347 1.579-89.173 43.605-89.173 93.909v39.083M672 230.101c-47.901-3.932-103.689-6.173-160-6.173-56.31 0-112.097 2.241-167.276 6.64l7.276-0.466"})),_o=e=>l.createElement("svg",{fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:4,strokeWidth:42.6667,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...e},l.createElement("path",{d:"M512 256v512M768 512h-512"})),zo=f.div`
  
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
 
`,Yo=f.ul`
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

  `,Bo=f.div`
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

`,Ho=f.span`
color:${e=>e.theme.colors.primary.accent};


font-size: 18px;

font-weight: 400;
line-height: 1.33;
`,Ao=f(Fo)`
  fill:${e=>e.theme.colors.primary.accent};
  width: 26px;
  height: auto;


  @media (min-width: ${({theme:e})=>e.screens.tab}){
    width: 36px;
  }
  
`,qo=f(Io)`
  stroke:  ${e=>e.theme.colors.secondary.color3};
  width: 16px;
  height: 16px;
`,Go=f(Lo)`
   stroke: ${e=>e.theme.colors.secondary.color2};
  width: 16px;
  height: 16px;
`,Uo=f.div`
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

`,Xo=f.button`

  &:hover::after {
   
    background-color: ${e=>e.theme.colors.primary.accent};
   
  }`,Qo=f.button`
 
 
  &:hover::after {
   
    background-color:  ${e=>e.theme.colors.secondary.color2};
    
  }`,_t=f(_o)`
  fill: ${e=>e.theme.colors.primary.accent};
  stroke: ${e=>e.theme.colors.primary.accent};
  width: 16px;
  height: 16px;

  @media (min-width: ${({theme:e})=>e.screens.tab}){
    width: 24px;
  height: 24px;
  }
 
`,Vo=f.button`
display: flex;
align-items: center;
gap: 8px;

font-size: 16px;
font-weight: 500;
line-height: 1.25;
color: ${e=>e.theme.colors.primary.accent};


&:hover {
    color: ${e=>e.theme.colors.secondary.color4};
    ${_t} {
      fill: ${e=>e.theme.colors.secondary.color4};
      stroke: ${e=>e.theme.colors.secondary.color4};
  }
}


@media (min-width: ${({theme:e})=>e.screens.tab}){
  font-size: 18px;
line-height: 1.33;
  }

`,Ko=f.div`

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
`,Jo=f.div`
display: flex;
flex-direction: column-reverse;
gap: 24px;

@media (min-width: ${({theme:e})=>e.screens.tab}){
    flex-direction: row;
    justify-content: end;
}
`,Zo=f.button`

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

`,ei=f.button`

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
`,ti=({id:e})=>{const{closeModal:t}=l.useContext(Tt);console.log(e);const n=()=>{t()};return s.jsxs(Ko,{children:[s.jsx("h3",{children:"Delete entry"}),s.jsx("p",{children:"Are you sure you want to delete the entry?"}),s.jsxs(Jo,{children:[s.jsx(Zo,{type:"button",onClick:()=>t(),children:"Cancel"}),s.jsx(ei,{type:"submit",onClick:n,children:"Delete"})]})]})},ni=({handleAddWaterClick:e})=>{const t=[{id:1,portion:"250",date:"2024-03-30T20:00:00.000Z"},{id:2,portion:"250",date:"2024-03-30T10:00:00.000Z"},{id:3,portion:"250",date:"2024-03-30T15:00:00.000Z"},{id:4,portion:"250",date:"2024-03-30T18:00:00.000Z"},{id:5,portion:"250",date:"2024-03-30T19:00:00.000Z"},{id:6,portion:"250",date:"2024-03-30T20:00:00.000Z"}],{openModal:n}=l.useContext(Tt),[r,o]=l.useState(null),i=c=>{n(s.jsx(s.Fragment,{children:s.jsx(ti,{id:c})}))},a=c=>{o(c),console.log(r)};return s.jsxs(zo,{children:[s.jsx("h3",{children:"Today"}),t&&t.length>0&&s.jsx(Yo,{children:t.map(c=>s.jsxs("li",{children:[s.jsxs(Bo,{children:[s.jsx(Ao,{}),s.jsx(Ho,{children:`${c.portion} ml `}),s.jsx("span",{children:Wo(c.date,!0)})]}),s.jsxs(Uo,{children:[s.jsx(Xo,{onClick:()=>a(c),children:s.jsx(qo,{})}),s.jsx(Qo,{onClick:()=>i(c.id),children:s.jsx(Go,{})})]})]},c.id))}),s.jsxs(Vo,{onClick:e,children:[s.jsx(_t,{})," Add water"]})]})},ri=f.div`
  padding: 8px 20px 8px 20px;
  border: 1px solid;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 164px;
  border-radius: 10px;
  border-color: ${({theme:e})=>`${e.colors.secondary.color1}`};
`,oi=f.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
  justify-content: left;
`,ii=f.p`
  font-size: 18px;
  font-weight: ${({theme:e})=>`${e.fontWeights.medium}`};
  line-height: 24px;
  color: ${({theme:e})=>`${e.colors.primary.text}`};
  white-space: nowrap;
`,ai=f.button`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  color: #8baeff;
`,si=f.p`
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  color: ${({theme:e})=>`${e.colors.primary.accent}`};
`,ci=f.div`
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
`,li=f.div`
  width: 592px;
  height: 712px;
  padding: 32px 24px 32px 24px;
  border-radius: 10px;
  background-color: ${({theme:e})=>`${e.colors.primary.bg}`};
`,di=f.h2`
  font-size: 26px;
  font-weight: 500;
  line-height: 32px;
  color: ${({theme:e})=>`${e.colors.primary.text}`};
`,ui=f.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  margin-top: 24px;
  margin-bottom: 12px;
`,ne=f.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: ${({theme:e})=>`${e.colors.primary.text}`};
`,wt=f.span`
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: ${({theme:e})=>`${e.colors.primary.accent}`};
`,fi=f.div`
  width: 544px;
  border: 1px solid;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 24px;
  border-color: ${({theme:e})=>`${e.colors.secondary.color5}`};
`,hi=f.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  color: #8f8f8f;
`,pi=f.span`
  color: ${({theme:e})=>`${e.colors.primary.accent}`};
`,mi=f.form`
  display: flex;
  flex-direction: column;
`,Et=f.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  color: ${({theme:e})=>`${e.colors.primary.text}`};
`,Pt=f.label`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`,kt=f.input`
  width: 14px;
  height: 14px;
  border: 1px solid;
  border-color: ${({theme:e})=>`${e.colors.primary.accent}`};
  color: ${({theme:e})=>`${e.colors.primary.bg}`};
  border-radius: 50%;
`,gi=f.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`,Mt=f.label`
  width: 544px;
  display: flex;
  gap: 8px;
  flex-direction: column;
`,Ae=f.input`
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
`,xi=f.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`,bi=f.label`
  width: 544px;
  display: flex;
  gap: 16px;
  flex-direction: column;
  margin-bottom: 24px;
`,yi=f.button`
  border-radius: 10px;
  padding: 10px 30px;
  width: 160px;
  color: ${({theme:e})=>`${e.colors.primary.bg}`};
  background-color: ${({theme:e})=>`${e.colors.primary.accent}`};
`,vi=f.div`
  width: 544px;
  display: flex;
  justify-content: end;
`,wi=f.button``,Ei=f.div`
  width: 544px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,Pi=f.span`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: ${({theme:e})=>`${e.colors.primary.accent}`};
`,ki=f.svg`
background-color: ;
`,Mi=({onClose:e,SaveWaterNorma:t,dailyWaterNorma:n})=>{const r={weight:.03,activity:.04},o={weight:.04,activity:.06},[i,a]=l.useState(r),[c,d]=l.useState(),[u,p]=l.useState(n),[m,E]=l.useState(),[k,g]=l.useState();return l.useEffect(()=>{const M=P=>{P.code==="Escape"&&e()};return window.addEventListener("keydown",M),()=>{window.removeEventListener("keydown",M)}},[e]),s.jsx(ci,{children:s.jsxs(li,{children:[s.jsxs(Ei,{children:[s.jsx(di,{children:"My daily norma"}),s.jsx(wi,{onClick:()=>e(),children:s.jsx(ki,{width:"24",height:"24",children:s.jsx("path",{d:"M6 18L18 6M6 6L18 18",stroke:"#407BFF","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})})})]}),s.jsxs(ui,{children:[s.jsxs(ne,{children:["For girl: ",s.jsx(wt,{children:"V=(M*0,03) + (T*0,4)"})]}),s.jsxs(ne,{children:["For man: ",s.jsx(wt,{children:"V=(M*0,04) + (T*0,6)"})]})]}),s.jsx(fi,{children:s.jsxs(hi,{children:[s.jsx(pi,{children:"*"})," V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]})}),s.jsxs(mi,{onSubmit:t,children:[s.jsxs(xi,{children:[s.jsx(Et,{children:"Calculate your rate:"}),s.jsxs(gi,{children:[s.jsxs(Pt,{children:[s.jsx(kt,{type:"radio",name:"gender",value:"woman",onChange:()=>a(r)}),s.jsx(ne,{children:"For woman"})]}),s.jsxs(Pt,{children:[s.jsx(kt,{type:"radio",name:"gender",value:"man",onChange:()=>a(o)}),s.jsx(ne,{children:"For man"})]})]}),s.jsxs(Mt,{children:[s.jsx(ne,{children:"Your weight in kilograms:"}),s.jsx(Ae,{type:"number",name:"userWeight",placeholder:"0",value:c,min:0,max:250,onChange:()=>d()})]}),s.jsxs(Mt,{children:[s.jsx(ne,{children:"The time of active participation in sports or other activities with a high physical. load in hours:"}),s.jsx(Ae,{type:"number",name:"userActive",placeholder:"0",value:m,min:0,onChange:()=>E()})]}),s.jsxs(ne,{children:["The required amount of water in liters per day:",s.jsxs(Pi,{children:[" ",u," L"]})]})]}),s.jsxs(bi,{children:[s.jsx(Et,{children:"Write down how much water you will drink:"}),s.jsx(Ae,{type:"number",name:"userWaterPredict",placeholder:"0",value:k,min:0,onChange:()=>g()})]}),s.jsx(vi,{children:s.jsx(yi,{children:"Save"})})]})]})})},Ti=()=>{const[e,t]=l.useState(2),[n,r]=l.useState(!1),o=()=>{r(!0)},i=()=>{r(!1)};return s.jsxs(ri,{children:[s.jsx(ii,{children:"My daily norma"}),s.jsxs(oi,{children:[s.jsxs(si,{children:[e," L"]}),s.jsx(ai,{onClick:o,children:"Edit"})]}),n&&s.jsx(Mi,{onClose:i,dailyWaterNorma:e})]})},Oi=()=>{const[e,t]=l.useState(!1),n=()=>{t(!0)};return l.useEffect(()=>{e&&console.log("Modal opened")},[e]),s.jsxs(No,{children:[s.jsx($o,{children:s.jsx(Ti,{ModalEditWaterNorma:n})}),s.jsxs(Ro,{children:[s.jsx(ni,{handleAddWaterClick:n}),s.jsx(jo,{})]})]})};export{Oi as default};
