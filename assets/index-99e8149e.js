import{u as g,t as Oe,N as Te,r as oe,g as De,G as Ae}from"./index-87555466.js";const le="/Smart-Foxes-WaterTracker/assets/backgroundMobile-0bf10f90.png",G="/Smart-Foxes-WaterTracker/assets/backgroundDesk-54c098d2.png",ce="/Smart-Foxes-WaterTracker/assets/backgroundTab-345a663e.png",At=g.div`
  /* @media (min-width: 320px) and (max-width: 768px) {
  width: 320px;
  margin: 0 auto;
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-image: url(${le});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 1px 40px;
  } */
  /* @media (min-width: 520px) and (max-width: 1200px) {
    background-image: url(${ce});
    background-repeat: no-repeat;
    background-size: cover;
  }
  @media (min-width: 768px) and (max-width: 1440px) {
    padding: 40px 32px;
  }
  @media (min-width: 1200px) and (max-width: 1440px) {
    background-image: url(${G});
    background-repeat: no-repeat;
    background-size: cover;
  }
  @media (min-width: 1440px) {
    padding: 49px 18px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    background-image: url(${G});
    background-repeat: no-repeat;
    background-size: cover;
  } */

  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-image: url(${le});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 1px 40px;

  @media (min-width: ${({theme:r})=>r.screens.tab}) {
    background-image: url(${ce});
    background-repeat: no-repeat;
    background-size: cover;
    padding: 40px 32px;
  }

  @media (min-width: ${({theme:r})=>r.screens.desk}) {
    padding: 40px 32px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    background-image: url(${G});
    background-repeat: no-repeat;
    background-size: cover;
  }
`,Ct=g.h2`
  color: ${Oe.lightTheme.colors.primary.text};
  font-size: 26px;
  font-weight: 500;
  line-height: 1.23;
`,jt=g.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  position: relative;
  z-index: 25;

  @media (min-width: 390px) and (max-width: 768px) {
    width: 350px;
  }

  @media (min-width: ${({theme:r})=>r.screens.tab}) {
    width: 336px;
  }

  @media (min-width: ${({theme:r})=>r.screens.desk}) {
    width: 384px;
  }
`,zt=g.label`
  color: ${r=>r.theme.colors.primary.text};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  width: 100%;
`,Nt=g.div`
  position: relative;
`,It=g.input`
  margin-top: 8px;
  width: 100%;
  height: 44px;
  border-radius: 6px;
  border: 1px solid ${r=>r.theme.colors.secondary.color5};
  color: ${r=>r.theme.colors.primary.accent};
  background: ${r=>r.theme.colors.primary.bg};
  padding: 12px 10px;
  outline: none;

  &::placeholder {
    color: ${r=>r.theme.colors.secondary.color3};
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
  }
  :focus {
    color: ${r=>r.theme.colors.primary.accent};
  }
`,Mt=g.button`
  border: none;
  background: transparent;
  position: absolute;
  left: 92%;
  bottom: 20%;
`,Rt=g.button`
  display: block;
  border-radius: 10px;
  padding: 8px 30px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  background: ${r=>r.theme.colors.primary.accent};
  color: ${r=>r.theme.colors.primary.bg};
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  width: 100%;
  cursor: pointer;
  transition: transform 150ms ease-in-out;
  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
  @media (min-width: ${({theme:r})=>r.screens.tab}) {
    padding: 10px 30px;
    font-size: 18px;
    line-height: 1.33;
  }
`,Pt=g(Te)`
  color: ${r=>r.theme.colors.primary.accent};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  transition: transform 150ms ease-in-out;
  &:hover {
    color: ${r=>r.theme.colors.secondary.color4};
  }
`,Vt=g.div`
  padding-top: 50px;
  margin: 0 auto;
  z-index: -1;
  position: relative;
  @media (min-width: 620px) and (max-width: 700px) {
    bottom: 95px;
    left: 0;
  }
  @media (min-width: 700px) and (max-width: 768px) {
    bottom: 120px;
    left: 0;
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    bottom: 311px;
    padding-left: 135px;
  }
  @media (min-width: 1440px) {
    bottom: 0;
    padding-left: 0;
    margin: 0;
  }
`,Ut=g.img``,Lt=g.p`
  color: ${r=>r.theme.colors.secondary.color2};
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
`,Zt=g.button`
  display: block;
  padding: 8px 30px;
  background: ${r=>r.theme.colors.primary.accent};
  color: ${r=>r.theme.colors.primary.bg};
  font-size: 16px;
  line-height: 1.25;
  font-weight: 500;
  width: 100%;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
  @media (min-width: ${({theme:r})=>r.screens.tab}) {
    padding: 10px 30px;
    font-size: 18px;
    line-height: 1.33;
  }
`,qt=()=>{const[r,e]=oe.useState(!0),[t,n]=oe.useState("password");return{handleShowPassword:()=>{e(!r),n(r===!0?"text":"password")},toggleIcon:r,type:t}},Gt="/Smart-Foxes-WaterTracker/assets/bottleAuth-2545dd91.png";function D(r){this._maxSize=r,this.clear()}D.prototype.clear=function(){this._size=0,this._values=Object.create(null)};D.prototype.get=function(r){return this._values[r]};D.prototype.set=function(r,e){return this._size>=this._maxSize&&this.clear(),r in this._values||this._size++,this._values[r]=e};var Ce=/[^.^\]^[]+|(?=\[\]|\.\.)/g,be=/^\d+$/,je=/^\d/,ze=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,Ne=/^\s*(['"]?)(.*?)(\1)\s*$/,J=512,fe=new D(J),de=new D(J),he=new D(J),T={Cache:D,split:Y,normalizePath:B,setter:function(r){var e=B(r);return de.get(r)||de.set(r,function(n,s){for(var i=0,a=e.length,u=n;i<a-1;){var o=e[i];if(o==="__proto__"||o==="constructor"||o==="prototype")return n;u=u[e[i++]]}u[e[i]]=s})},getter:function(r,e){var t=B(r);return he.get(r)||he.set(r,function(s){for(var i=0,a=t.length;i<a;)if(s!=null||!e)s=s[t[i++]];else return;return s})},join:function(r){return r.reduce(function(e,t){return e+(Q(t)||be.test(t)?"["+t+"]":(e?".":"")+t)},"")},forEach:function(r,e,t){Ie(Array.isArray(r)?r:Y(r),e,t)}};function B(r){return fe.get(r)||fe.set(r,Y(r).map(function(e){return e.replace(Ne,"$2")}))}function Y(r){return r.match(Ce)||[""]}function Ie(r,e,t){var n=r.length,s,i,a,u;for(i=0;i<n;i++)s=r[i],s&&(Pe(s)&&(s='"'+s+'"'),u=Q(s),a=!u&&/^\d+$/.test(s),e.call(t,s,u,a,i,r))}function Q(r){return typeof r=="string"&&r&&["'",'"'].indexOf(r.charAt(0))!==-1}function Me(r){return r.match(je)&&!r.match(be)}function Re(r){return ze.test(r)}function Pe(r){return!Q(r)&&(Me(r)||Re(r))}const Ve=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,P=r=>r.match(Ve)||[],V=r=>r[0].toUpperCase()+r.slice(1),ee=(r,e)=>P(r).join(e).toLowerCase(),ye=r=>P(r).reduce((e,t)=>`${e}${e?t[0].toUpperCase()+t.slice(1).toLowerCase():t.toLowerCase()}`,""),Ue=r=>V(ye(r)),Le=r=>ee(r,"_"),Ze=r=>ee(r,"-"),qe=r=>V(ee(r," ")),Ge=r=>P(r).map(V).join(" ");var H={words:P,upperFirst:V,camelCase:ye,pascalCase:Ue,snakeCase:Le,kebabCase:Ze,sentenceCase:qe,titleCase:Ge},te={exports:{}};te.exports=function(r){return we(Be(r),r)};te.exports.array=we;function we(r,e){var t=r.length,n=new Array(t),s={},i=t,a=He(e),u=Ye(r);for(e.forEach(function(l){if(!u.has(l[0])||!u.has(l[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});i--;)s[i]||o(r[i],i,new Set);return n;function o(l,c,f){if(f.has(l)){var d;try{d=", node was:"+JSON.stringify(l)}catch{d=""}throw new Error("Cyclic dependency"+d)}if(!u.has(l))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(l));if(!s[c]){s[c]=!0;var p=a.get(l)||new Set;if(p=Array.from(p),c=p.length){f.add(l);do{var y=p[--c];o(y,u.get(y),f)}while(c);f.delete(l)}n[--t]=l}}}function Be(r){for(var e=new Set,t=0,n=r.length;t<n;t++){var s=r[t];e.add(s[0]),e.add(s[1])}return Array.from(e)}function He(r){for(var e=new Map,t=0,n=r.length;t<n;t++){var s=r[t];e.has(s[0])||e.set(s[0],new Set),e.has(s[1])||e.set(s[1],new Set),e.get(s[0]).add(s[1])}return e}function Ye(r){for(var e=new Map,t=0,n=r.length;t<n;t++)e.set(r[t],t);return e}var Xe=te.exports;const Ke=De(Xe),We=Object.prototype.toString,Je=Error.prototype.toString,Qe=RegExp.prototype.toString,et=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",tt=/^Symbol\((.*)\)(.*)$/;function rt(r){return r!=+r?"NaN":r===0&&1/r<0?"-0":""+r}function pe(r,e=!1){if(r==null||r===!0||r===!1)return""+r;const t=typeof r;if(t==="number")return rt(r);if(t==="string")return e?`"${r}"`:r;if(t==="function")return"[Function "+(r.name||"anonymous")+"]";if(t==="symbol")return et.call(r).replace(tt,"Symbol($1)");const n=We.call(r).slice(8,-1);return n==="Date"?isNaN(r.getTime())?""+r:r.toISOString(r):n==="Error"||r instanceof Error?"["+Je.call(r)+"]":n==="RegExp"?Qe.call(r):null}function k(r,e){let t=pe(r,e);return t!==null?t:JSON.stringify(r,function(n,s){let i=pe(this[n],e);return i!==null?i:s},2)}function $e(r){return r==null?[]:[].concat(r)}let ve,Fe,ke,nt=/\$\{\s*(\w+)\s*\}/g;ve=Symbol.toStringTag;class me{constructor(e,t,n,s){this.name=void 0,this.message=void 0,this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=void 0,this.inner=void 0,this[ve]="Error",this.name="ValidationError",this.value=t,this.path=n,this.type=s,this.errors=[],this.inner=[],$e(e).forEach(i=>{if(x.isError(i)){this.errors.push(...i.errors);const a=i.inner.length?i.inner:[i];this.inner.push(...a)}else this.errors.push(i)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0]}}Fe=Symbol.hasInstance;ke=Symbol.toStringTag;class x extends Error{static formatError(e,t){const n=t.label||t.path||"this";return n!==t.path&&(t=Object.assign({},t,{path:n})),typeof e=="string"?e.replace(nt,(s,i)=>k(t[i])):typeof e=="function"?e(t):e}static isError(e){return e&&e.name==="ValidationError"}constructor(e,t,n,s,i){const a=new me(e,t,n,s);if(i)return a;super(),this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=[],this.inner=[],this[ke]="Error",this.name=a.name,this.message=a.message,this.type=a.type,this.value=a.value,this.path=a.path,this.errors=a.errors,this.inner=a.inner,Error.captureStackTrace&&Error.captureStackTrace(this,x)}static[Fe](e){return me[Symbol.hasInstance](e)||super[Symbol.hasInstance](e)}}let w={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:r,type:e,value:t,originalValue:n})=>{const s=n!=null&&n!==t?` (cast from the value \`${k(n,!0)}\`).`:".";return e!=="mixed"?`${r} must be a \`${e}\` type, but the final value was: \`${k(t,!0)}\``+s:`${r} must match the configured type. The validated value was: \`${k(t,!0)}\``+s}},m={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",datetime:"${path} must be a valid ISO date-time",datetime_precision:"${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",datetime_offset:'${path} must be a valid ISO date-time with UTC "Z" timezone',trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},st={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},X={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},it={isValue:"${path} field must be ${value}"},K={noUnknown:"${path} field has unspecified keys: ${unknown}"},at={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},ut={notType:r=>{const{path:e,value:t,spec:n}=r,s=n.types.length;if(Array.isArray(t)){if(t.length<s)return`${e} tuple value has too few items, expected a length of ${s} but got ${t.length} for value: \`${k(t,!0)}\``;if(t.length>s)return`${e} tuple value has too many items, expected a length of ${s} but got ${t.length} for value: \`${k(t,!0)}\``}return x.formatError(w.notType,r)}};Object.assign(Object.create(null),{mixed:w,string:m,number:st,date:X,object:K,array:at,boolean:it,tuple:ut});const re=r=>r&&r.__isYupSchema__;class M{static fromOptions(e,t){if(!t.then&&!t.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:n,then:s,otherwise:i}=t,a=typeof n=="function"?n:(...u)=>u.every(o=>o===n);return new M(e,(u,o)=>{var l;let c=a(...u)?s:i;return(l=c==null?void 0:c(o))!=null?l:o})}constructor(e,t){this.fn=void 0,this.refs=e,this.refs=e,this.fn=t}resolve(e,t){let n=this.refs.map(i=>i.getValue(t==null?void 0:t.value,t==null?void 0:t.parent,t==null?void 0:t.context)),s=this.fn(n,e,t);if(s===void 0||s===e)return e;if(!re(s))throw new TypeError("conditions must return a schema object");return s.resolve(t)}}const N={context:"$",value:"."};function Bt(r,e){return new _(r,e)}class _{constructor(e,t={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof e!="string")throw new TypeError("ref must be a string, got: "+e);if(this.key=e.trim(),e==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===N.context,this.isValue=this.key[0]===N.value,this.isSibling=!this.isContext&&!this.isValue;let n=this.isContext?N.context:this.isValue?N.value:"";this.path=this.key.slice(n.length),this.getter=this.path&&T.getter(this.path,!0),this.map=t.map}getValue(e,t,n){let s=this.isContext?n:this.isValue?e:t;return this.getter&&(s=this.getter(s||{})),this.map&&(s=this.map(s)),s}cast(e,t){return this.getValue(e,t==null?void 0:t.parent,t==null?void 0:t.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(e){return e&&e.__isYupRef}}_.prototype.__isYupRef=!0;const O=r=>r==null;function A(r){function e({value:t,path:n="",options:s,originalValue:i,schema:a},u,o){const{name:l,test:c,params:f,message:d,skipAbsent:p}=r;let{parent:y,context:b,abortEarly:F=a.spec.abortEarly,disableStackTrace:j=a.spec.disableStackTrace}=s;function E(h){return _.isRef(h)?h.getValue(t,y,b):h}function ne(h={}){const S=Object.assign({value:t,originalValue:i,label:a.spec.label,path:h.path||n,spec:a.spec,disableStackTrace:h.disableStackTrace||j},f,h.params);for(const ue of Object.keys(S))S[ue]=E(S[ue]);const ae=new x(x.formatError(h.message||d,S),t,S.path,h.type||l,S.disableStackTrace);return ae.params=S,ae}const L=F?u:o;let Z={path:n,parent:y,type:l,from:s.from,createError:ne,resolve:E,options:s,originalValue:i,schema:a};const q=h=>{x.isError(h)?L(h):h?o(null):L(ne())},se=h=>{x.isError(h)?L(h):u(h)};if(p&&O(t))return q(!0);let z;try{var ie;if(z=c.call(Z,t,Z),typeof((ie=z)==null?void 0:ie.then)=="function"){if(s.sync)throw new Error(`Validation test of type: "${Z.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(z).then(q,se)}}catch(h){se(h);return}q(z)}return e.OPTIONS=r,e}function ot(r,e,t,n=t){let s,i,a;return e?(T.forEach(e,(u,o,l)=>{let c=o?u.slice(1,u.length-1):u;r=r.resolve({context:n,parent:s,value:t});let f=r.type==="tuple",d=l?parseInt(c,10):0;if(r.innerType||f){if(f&&!l)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${a}" must contain an index to the tuple element, e.g. "${a}[0]"`);if(t&&d>=t.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${u}, in the path: ${e}. because there is no value at that index. `);s=t,t=t&&t[d],r=f?r.spec.types[d]:r.innerType}if(!l){if(!r.fields||!r.fields[c])throw new Error(`The schema does not contain the path: ${e}. (failed at: ${a} which is a type: "${r.type}")`);s=t,t=t&&t[c],r=r.fields[c]}i=c,a=o?"["+u+"]":"."+u}),{schema:r,parent:s,parentPath:i}):{parent:s,parentPath:e,schema:r}}class R extends Set{describe(){const e=[];for(const t of this.values())e.push(_.isRef(t)?t.describe():t);return e}resolveAll(e){let t=[];for(const n of this.values())t.push(e(n));return t}clone(){return new R(this.values())}merge(e,t){const n=this.clone();return e.forEach(s=>n.add(s)),t.forEach(s=>n.delete(s)),n}}function C(r,e=new Map){if(re(r)||!r||typeof r!="object")return r;if(e.has(r))return e.get(r);let t;if(r instanceof Date)t=new Date(r.getTime()),e.set(r,t);else if(r instanceof RegExp)t=new RegExp(r),e.set(r,t);else if(Array.isArray(r)){t=new Array(r.length),e.set(r,t);for(let n=0;n<r.length;n++)t[n]=C(r[n],e)}else if(r instanceof Map){t=new Map,e.set(r,t);for(const[n,s]of r.entries())t.set(n,C(s,e))}else if(r instanceof Set){t=new Set,e.set(r,t);for(const n of r)t.add(C(n,e))}else if(r instanceof Object){t={},e.set(r,t);for(const[n,s]of Object.entries(r))t[n]=C(s,e)}else throw Error(`Unable to clone ${r}`);return t}class ${constructor(e){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new R,this._blacklist=new R,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(w.notType)}),this.type=e.type,this._typeCheck=e.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},e==null?void 0:e.spec),this.withMutation(t=>{t.nonNullable()})}get _type(){return this.type}clone(e){if(this._mutate)return e&&Object.assign(this.spec,e),this;const t=Object.create(Object.getPrototypeOf(this));return t.type=this.type,t._typeCheck=this._typeCheck,t._whitelist=this._whitelist.clone(),t._blacklist=this._blacklist.clone(),t.internalTests=Object.assign({},this.internalTests),t.exclusiveTests=Object.assign({},this.exclusiveTests),t.deps=[...this.deps],t.conditions=[...this.conditions],t.tests=[...this.tests],t.transforms=[...this.transforms],t.spec=C(Object.assign({},this.spec,e)),t}label(e){let t=this.clone();return t.spec.label=e,t}meta(...e){if(e.length===0)return this.spec.meta;let t=this.clone();return t.spec.meta=Object.assign(t.spec.meta||{},e[0]),t}withMutation(e){let t=this._mutate;this._mutate=!0;let n=e(this);return this._mutate=t,n}concat(e){if(!e||e===this)return this;if(e.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${e.type}`);let t=this,n=e.clone();const s=Object.assign({},t.spec,n.spec);return n.spec=s,n.internalTests=Object.assign({},t.internalTests,n.internalTests),n._whitelist=t._whitelist.merge(e._whitelist,e._blacklist),n._blacklist=t._blacklist.merge(e._blacklist,e._whitelist),n.tests=t.tests,n.exclusiveTests=t.exclusiveTests,n.withMutation(i=>{e.tests.forEach(a=>{i.test(a.OPTIONS)})}),n.transforms=[...t.transforms,...n.transforms],n}isType(e){return e==null?!!(this.spec.nullable&&e===null||this.spec.optional&&e===void 0):this._typeCheck(e)}resolve(e){let t=this;if(t.conditions.length){let n=t.conditions;t=t.clone(),t.conditions=[],t=n.reduce((s,i)=>i.resolve(s,e),t),t=t.resolve(e)}return t}resolveOptions(e){var t,n,s,i;return Object.assign({},e,{from:e.from||[],strict:(t=e.strict)!=null?t:this.spec.strict,abortEarly:(n=e.abortEarly)!=null?n:this.spec.abortEarly,recursive:(s=e.recursive)!=null?s:this.spec.recursive,disableStackTrace:(i=e.disableStackTrace)!=null?i:this.spec.disableStackTrace})}cast(e,t={}){let n=this.resolve(Object.assign({value:e},t)),s=t.assert==="ignore-optionality",i=n._cast(e,t);if(t.assert!==!1&&!n.isType(i)){if(s&&O(i))return i;let a=k(e),u=k(i);throw new TypeError(`The value of ${t.path||"field"} could not be cast to a value that satisfies the schema type: "${n.type}". 

attempted value: ${a} 
`+(u!==a?`result of cast: ${u}`:""))}return i}_cast(e,t){let n=e===void 0?e:this.transforms.reduce((s,i)=>i.call(this,s,e,this),e);return n===void 0&&(n=this.getDefault(t)),n}_validate(e,t={},n,s){let{path:i,originalValue:a=e,strict:u=this.spec.strict}=t,o=e;u||(o=this._cast(o,Object.assign({assert:!1},t)));let l=[];for(let c of Object.values(this.internalTests))c&&l.push(c);this.runTests({path:i,value:o,originalValue:a,options:t,tests:l},n,c=>{if(c.length)return s(c,o);this.runTests({path:i,value:o,originalValue:a,options:t,tests:this.tests},n,s)})}runTests(e,t,n){let s=!1,{tests:i,value:a,originalValue:u,path:o,options:l}=e,c=b=>{s||(s=!0,t(b,a))},f=b=>{s||(s=!0,n(b,a))},d=i.length,p=[];if(!d)return f([]);let y={value:a,originalValue:u,path:o,options:l,schema:this};for(let b=0;b<i.length;b++){const F=i[b];F(y,c,function(E){E&&(Array.isArray(E)?p.push(...E):p.push(E)),--d<=0&&f(p)})}}asNestedTest({key:e,index:t,parent:n,parentPath:s,originalParent:i,options:a}){const u=e??t;if(u==null)throw TypeError("Must include `key` or `index` for nested validations");const o=typeof u=="number";let l=n[u];const c=Object.assign({},a,{strict:!0,parent:n,value:l,originalValue:i[u],key:void 0,[o?"index":"key"]:u,path:o||u.includes(".")?`${s||""}[${o?u:`"${u}"`}]`:(s?`${s}.`:"")+e});return(f,d,p)=>this.resolve(c)._validate(l,c,d,p)}validate(e,t){var n;let s=this.resolve(Object.assign({},t,{value:e})),i=(n=t==null?void 0:t.disableStackTrace)!=null?n:s.spec.disableStackTrace;return new Promise((a,u)=>s._validate(e,t,(o,l)=>{x.isError(o)&&(o.value=l),u(o)},(o,l)=>{o.length?u(new x(o,l,void 0,void 0,i)):a(l)}))}validateSync(e,t){var n;let s=this.resolve(Object.assign({},t,{value:e})),i,a=(n=t==null?void 0:t.disableStackTrace)!=null?n:s.spec.disableStackTrace;return s._validate(e,Object.assign({},t,{sync:!0}),(u,o)=>{throw x.isError(u)&&(u.value=o),u},(u,o)=>{if(u.length)throw new x(u,e,void 0,void 0,a);i=o}),i}isValid(e,t){return this.validate(e,t).then(()=>!0,n=>{if(x.isError(n))return!1;throw n})}isValidSync(e,t){try{return this.validateSync(e,t),!0}catch(n){if(x.isError(n))return!1;throw n}}_getDefault(e){let t=this.spec.default;return t==null?t:typeof t=="function"?t.call(this,e):C(t)}getDefault(e){return this.resolve(e||{})._getDefault(e)}default(e){return arguments.length===0?this._getDefault():this.clone({default:e})}strict(e=!0){return this.clone({strict:e})}nullability(e,t){const n=this.clone({nullable:e});return n.internalTests.nullable=A({message:t,name:"nullable",test(s){return s===null?this.schema.spec.nullable:!0}}),n}optionality(e,t){const n=this.clone({optional:e});return n.internalTests.optionality=A({message:t,name:"optionality",test(s){return s===void 0?this.schema.spec.optional:!0}}),n}optional(){return this.optionality(!0)}defined(e=w.defined){return this.optionality(!1,e)}nullable(){return this.nullability(!0)}nonNullable(e=w.notNull){return this.nullability(!1,e)}required(e=w.required){return this.clone().withMutation(t=>t.nonNullable(e).defined(e))}notRequired(){return this.clone().withMutation(e=>e.nullable().optional())}transform(e){let t=this.clone();return t.transforms.push(e),t}test(...e){let t;if(e.length===1?typeof e[0]=="function"?t={test:e[0]}:t=e[0]:e.length===2?t={name:e[0],test:e[1]}:t={name:e[0],message:e[1],test:e[2]},t.message===void 0&&(t.message=w.default),typeof t.test!="function")throw new TypeError("`test` is a required parameters");let n=this.clone(),s=A(t),i=t.exclusive||t.name&&n.exclusiveTests[t.name]===!0;if(t.exclusive&&!t.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return t.name&&(n.exclusiveTests[t.name]=!!t.exclusive),n.tests=n.tests.filter(a=>!(a.OPTIONS.name===t.name&&(i||a.OPTIONS.test===s.OPTIONS.test))),n.tests.push(s),n}when(e,t){!Array.isArray(e)&&typeof e!="string"&&(t=e,e=".");let n=this.clone(),s=$e(e).map(i=>new _(i));return s.forEach(i=>{i.isSibling&&n.deps.push(i.key)}),n.conditions.push(typeof t=="function"?new M(s,t):M.fromOptions(s,t)),n}typeError(e){let t=this.clone();return t.internalTests.typeError=A({message:e,name:"typeError",skipAbsent:!0,test(n){return this.schema._typeCheck(n)?!0:this.createError({params:{type:this.schema.type}})}}),t}oneOf(e,t=w.oneOf){let n=this.clone();return e.forEach(s=>{n._whitelist.add(s),n._blacklist.delete(s)}),n.internalTests.whiteList=A({message:t,name:"oneOf",skipAbsent:!0,test(s){let i=this.schema._whitelist,a=i.resolveAll(this.resolve);return a.includes(s)?!0:this.createError({params:{values:Array.from(i).join(", "),resolved:a}})}}),n}notOneOf(e,t=w.notOneOf){let n=this.clone();return e.forEach(s=>{n._blacklist.add(s),n._whitelist.delete(s)}),n.internalTests.blacklist=A({message:t,name:"notOneOf",test(s){let i=this.schema._blacklist,a=i.resolveAll(this.resolve);return a.includes(s)?this.createError({params:{values:Array.from(i).join(", "),resolved:a}}):!0}}),n}strip(e=!0){let t=this.clone();return t.spec.strip=e,t}describe(e){const t=(e?this.resolve(e):this).clone(),{label:n,meta:s,optional:i,nullable:a}=t.spec;return{meta:s,label:n,optional:i,nullable:a,default:t.getDefault(e),type:t.type,oneOf:t._whitelist.describe(),notOneOf:t._blacklist.describe(),tests:t.tests.map(o=>({name:o.OPTIONS.name,params:o.OPTIONS.params})).filter((o,l,c)=>c.findIndex(f=>f.name===o.name)===l)}}}$.prototype.__isYupSchema__=!0;for(const r of["validate","validateSync"])$.prototype[`${r}At`]=function(e,t,n={}){const{parent:s,parentPath:i,schema:a}=ot(this,e,t,n.context);return a[r](s&&s[i],Object.assign({},n,{parent:s,path:e}))};for(const r of["equals","is"])$.prototype[r]=$.prototype.oneOf;for(const r of["not","nope"])$.prototype[r]=$.prototype.notOneOf;const lt=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function ct(r){const e=W(r);if(!e)return Date.parse?Date.parse(r):Number.NaN;if(e.z===void 0&&e.plusMinus===void 0)return new Date(e.year,e.month,e.day,e.hour,e.minute,e.second,e.millisecond).valueOf();let t=0;return e.z!=="Z"&&e.plusMinus!==void 0&&(t=e.hourOffset*60+e.minuteOffset,e.plusMinus==="+"&&(t=0-t)),Date.UTC(e.year,e.month,e.day,e.hour,e.minute+t,e.second,e.millisecond)}function W(r){var e,t;const n=lt.exec(r);return n?{year:v(n[1]),month:v(n[2],1)-1,day:v(n[3],1),hour:v(n[4]),minute:v(n[5]),second:v(n[6]),millisecond:n[7]?v(n[7].substring(0,3)):0,precision:(e=(t=n[7])==null?void 0:t.length)!=null?e:void 0,z:n[8]||void 0,plusMinus:n[9]||void 0,hourOffset:v(n[10]),minuteOffset:v(n[11])}:null}function v(r,e=0){return Number(r)||e}let ft=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,dt=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,ht=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,pt="^\\d{4}-\\d{2}-\\d{2}",mt="\\d{2}:\\d{2}:\\d{2}",xt="(([+-]\\d{2}(:?\\d{2})?)|Z)",gt=new RegExp(`${pt}T${mt}(\\.\\d+)?${xt}$`),bt=r=>O(r)||r===r.trim(),yt={}.toString();function wt(){return new _e}class _e extends ${constructor(){super({type:"string",check(e){return e instanceof String&&(e=e.valueOf()),typeof e=="string"}}),this.withMutation(()=>{this.transform((e,t,n)=>{if(!n.spec.coerce||n.isType(e)||Array.isArray(e))return e;const s=e!=null&&e.toString?e.toString():e;return s===yt?e:s})})}required(e){return super.required(e).withMutation(t=>t.test({message:e||w.required,name:"required",skipAbsent:!0,test:n=>!!n.length}))}notRequired(){return super.notRequired().withMutation(e=>(e.tests=e.tests.filter(t=>t.OPTIONS.name!=="required"),e))}length(e,t=m.length){return this.test({message:t,name:"length",exclusive:!0,params:{length:e},skipAbsent:!0,test(n){return n.length===this.resolve(e)}})}min(e,t=m.min){return this.test({message:t,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(n){return n.length>=this.resolve(e)}})}max(e,t=m.max){return this.test({name:"max",exclusive:!0,message:t,params:{max:e},skipAbsent:!0,test(n){return n.length<=this.resolve(e)}})}matches(e,t){let n=!1,s,i;return t&&(typeof t=="object"?{excludeEmptyString:n=!1,message:s,name:i}=t:s=t),this.test({name:i||"matches",message:s||m.matches,params:{regex:e},skipAbsent:!0,test:a=>a===""&&n||a.search(e)!==-1})}email(e=m.email){return this.matches(ft,{name:"email",message:e,excludeEmptyString:!0})}url(e=m.url){return this.matches(dt,{name:"url",message:e,excludeEmptyString:!0})}uuid(e=m.uuid){return this.matches(ht,{name:"uuid",message:e,excludeEmptyString:!1})}datetime(e){let t="",n,s;return e&&(typeof e=="object"?{message:t="",allowOffset:n=!1,precision:s=void 0}=e:t=e),this.matches(gt,{name:"datetime",message:t||m.datetime,excludeEmptyString:!0}).test({name:"datetime_offset",message:t||m.datetime_offset,params:{allowOffset:n},skipAbsent:!0,test:i=>{if(!i||n)return!0;const a=W(i);return a?!!a.z:!1}}).test({name:"datetime_precision",message:t||m.datetime_precision,params:{precision:s},skipAbsent:!0,test:i=>{if(!i||s==null)return!0;const a=W(i);return a?a.precision===s:!1}})}ensure(){return this.default("").transform(e=>e===null?"":e)}trim(e=m.trim){return this.transform(t=>t!=null?t.trim():t).test({message:e,name:"trim",test:bt})}lowercase(e=m.lowercase){return this.transform(t=>O(t)?t:t.toLowerCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:t=>O(t)||t===t.toLowerCase()})}uppercase(e=m.uppercase){return this.transform(t=>O(t)?t:t.toUpperCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:t=>O(t)||t===t.toUpperCase()})}}wt.prototype=_e.prototype;let $t=new Date(""),vt=r=>Object.prototype.toString.call(r)==="[object Date]";class U extends ${constructor(){super({type:"date",check(e){return vt(e)&&!isNaN(e.getTime())}}),this.withMutation(()=>{this.transform((e,t,n)=>!n.spec.coerce||n.isType(e)||e===null?e:(e=ct(e),isNaN(e)?U.INVALID_DATE:new Date(e)))})}prepareParam(e,t){let n;if(_.isRef(e))n=e;else{let s=this.cast(e);if(!this._typeCheck(s))throw new TypeError(`\`${t}\` must be a Date or a value that can be \`cast()\` to a Date`);n=s}return n}min(e,t=X.min){let n=this.prepareParam(e,"min");return this.test({message:t,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(s){return s>=this.resolve(n)}})}max(e,t=X.max){let n=this.prepareParam(e,"max");return this.test({message:t,name:"max",exclusive:!0,params:{max:e},skipAbsent:!0,test(s){return s<=this.resolve(n)}})}}U.INVALID_DATE=$t;U.prototype;function Ft(r,e=[]){let t=[],n=new Set,s=new Set(e.map(([a,u])=>`${a}-${u}`));function i(a,u){let o=T.split(a)[0];n.add(o),s.has(`${u}-${o}`)||t.push([u,o])}for(const a of Object.keys(r)){let u=r[a];n.add(a),_.isRef(u)&&u.isSibling?i(u.path,a):re(u)&&"deps"in u&&u.deps.forEach(o=>i(o,a))}return Ke.array(Array.from(n),t).reverse()}function xe(r,e){let t=1/0;return r.some((n,s)=>{var i;if((i=e.path)!=null&&i.includes(n))return t=s,!0}),t}function Ee(r){return(e,t)=>xe(r,e)-xe(r,t)}const kt=(r,e,t)=>{if(typeof r!="string")return r;let n=r;try{n=JSON.parse(r)}catch{}return t.isType(n)?n:r};function I(r){if("fields"in r){const e={};for(const[t,n]of Object.entries(r.fields))e[t]=I(n);return r.setFields(e)}if(r.type==="array"){const e=r.optional();return e.innerType&&(e.innerType=I(e.innerType)),e}return r.type==="tuple"?r.optional().clone({types:r.spec.types.map(I)}):"optional"in r?r.optional():r}const _t=(r,e)=>{const t=[...T.normalizePath(e)];if(t.length===1)return t[0]in r;let n=t.pop(),s=T.getter(T.join(t),!0)(r);return!!(s&&n in s)};let ge=r=>Object.prototype.toString.call(r)==="[object Object]";function Et(r,e){let t=Object.keys(r.fields);return Object.keys(e).filter(n=>t.indexOf(n)===-1)}const St=Ee([]);function Ot(r){return new Se(r)}class Se extends ${constructor(e){super({type:"object",check(t){return ge(t)||typeof t=="function"}}),this.fields=Object.create(null),this._sortErrors=St,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{e&&this.shape(e)})}_cast(e,t={}){var n;let s=super._cast(e,t);if(s===void 0)return this.getDefault(t);if(!this._typeCheck(s))return s;let i=this.fields,a=(n=t.stripUnknown)!=null?n:this.spec.noUnknown,u=[].concat(this._nodes,Object.keys(s).filter(f=>!this._nodes.includes(f))),o={},l=Object.assign({},t,{parent:o,__validating:t.__validating||!1}),c=!1;for(const f of u){let d=i[f],p=f in s;if(d){let y,b=s[f];l.path=(t.path?`${t.path}.`:"")+f,d=d.resolve({value:b,context:t.context,parent:o});let F=d instanceof $?d.spec:void 0,j=F==null?void 0:F.strict;if(F!=null&&F.strip){c=c||f in s;continue}y=!t.__validating||!j?d.cast(s[f],l):s[f],y!==void 0&&(o[f]=y)}else p&&!a&&(o[f]=s[f]);(p!==f in o||o[f]!==s[f])&&(c=!0)}return c?o:s}_validate(e,t={},n,s){let{from:i=[],originalValue:a=e,recursive:u=this.spec.recursive}=t;t.from=[{schema:this,value:a},...i],t.__validating=!0,t.originalValue=a,super._validate(e,t,n,(o,l)=>{if(!u||!ge(l)){s(o,l);return}a=a||l;let c=[];for(let f of this._nodes){let d=this.fields[f];!d||_.isRef(d)||c.push(d.asNestedTest({options:t,key:f,parent:l,parentPath:t.path,originalParent:a}))}this.runTests({tests:c,value:l,originalValue:a,options:t},n,f=>{s(f.sort(this._sortErrors).concat(o),l)})})}clone(e){const t=super.clone(e);return t.fields=Object.assign({},this.fields),t._nodes=this._nodes,t._excludedEdges=this._excludedEdges,t._sortErrors=this._sortErrors,t}concat(e){let t=super.concat(e),n=t.fields;for(let[s,i]of Object.entries(this.fields)){const a=n[s];n[s]=a===void 0?i:a}return t.withMutation(s=>s.setFields(n,[...this._excludedEdges,...e._excludedEdges]))}_getDefault(e){if("default"in this.spec)return super._getDefault(e);if(!this._nodes.length)return;let t={};return this._nodes.forEach(n=>{var s;const i=this.fields[n];let a=e;(s=a)!=null&&s.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[n]})),t[n]=i&&"getDefault"in i?i.getDefault(a):void 0}),t}setFields(e,t){let n=this.clone();return n.fields=e,n._nodes=Ft(e,t),n._sortErrors=Ee(Object.keys(e)),t&&(n._excludedEdges=t),n}shape(e,t=[]){return this.clone().withMutation(n=>{let s=n._excludedEdges;return t.length&&(Array.isArray(t[0])||(t=[t]),s=[...n._excludedEdges,...t]),n.setFields(Object.assign(n.fields,e),s)})}partial(){const e={};for(const[t,n]of Object.entries(this.fields))e[t]="optional"in n&&n.optional instanceof Function?n.optional():n;return this.setFields(e)}deepPartial(){return I(this)}pick(e){const t={};for(const n of e)this.fields[n]&&(t[n]=this.fields[n]);return this.setFields(t,this._excludedEdges.filter(([n,s])=>e.includes(n)&&e.includes(s)))}omit(e){const t=[];for(const n of Object.keys(this.fields))e.includes(n)||t.push(n);return this.pick(t)}from(e,t,n){let s=T.getter(e,!0);return this.transform(i=>{if(!i)return i;let a=i;return _t(i,e)&&(a=Object.assign({},i),n||delete a[e],a[t]=s(i)),a})}json(){return this.transform(kt)}noUnknown(e=!0,t=K.noUnknown){typeof e!="boolean"&&(t=e,e=!0);let n=this.test({name:"noUnknown",exclusive:!0,message:t,test(s){if(s==null)return!0;const i=Et(this.schema,s);return!e||i.length===0||this.createError({params:{unknown:i.join(", ")}})}});return n.spec.noUnknown=e,n}unknown(e=!0,t=K.noUnknown){return this.noUnknown(!e,t)}transformKeys(e){return this.transform(t=>{if(!t)return t;const n={};for(const s of Object.keys(t))n[e(s)]=t[s];return n})}camelCase(){return this.transformKeys(H.camelCase)}snakeCase(){return this.transformKeys(H.snakeCase)}constantCase(){return this.transformKeys(e=>H.snakeCase(e).toUpperCase())}describe(e){const t=(e?this.resolve(e):this).clone(),n=super.describe(e);n.fields={};for(const[i,a]of Object.entries(t.fields)){var s;let u=e;(s=u)!=null&&s.value&&(u=Object.assign({},u,{parent:u.value,value:u.value[i]})),n.fields[i]=a.describe(u)}return n}}Ot.prototype=Se.prototype;function Ht(r){return Ae({tag:"svg",attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:`M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`},child:[]},{tag:"path",attr:{fill:"#FF3D00",d:`M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`},child:[]},{tag:"path",attr:{fill:"#4CAF50",d:`M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`},child:[]},{tag:"path",attr:{fill:"#1976D2",d:`M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`},child:[]}]})(r)}export{Ct as A,Mt as B,Lt as E,jt as F,It as I,At as L,wt as a,zt as b,Ot as c,Nt as d,Rt as e,Zt as f,Ht as g,Pt as h,Vt as i,Ut as j,Gt as k,Bt as l,qt as u};
