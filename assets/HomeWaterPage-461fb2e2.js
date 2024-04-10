import{D as U,r as l,J as $e,j as a,K as Xe,N as Dt,O as C,Q as Wt,R as ae,T as Ct,U as Ot,V as Qe,W as Le,X as Ae,Y as pe,Z as Ie,$ as ue,a0 as Ye,a1 as ke,a2 as Rt,a3 as Ft,a4 as Nt,a5 as zt,u as c,d as Se,a6 as Ce,f as ge,a7 as Ht,b as Lt,c as At,M as xe,a8 as It,a9 as Pe,G as wt,aa as Yt,ab as Bt,ac as _t,ad as qt}from"./index-43e2eedc.js";import{b as Ut,a as Vt}from"./backgroundElementMainPageDesk2x@2-f75c1b59.js";function Ke(...e){return e.reduce((t,n)=>n==null?t:function(...o){t.apply(this,o),n.apply(this,o)},()=>{})}function Gt(e,t=166){let n;function r(...o){const s=()=>{e.apply(this,o)};clearTimeout(n),n=setTimeout(s,t)}return r.clear=()=>{clearTimeout(n)},r}function he(e){return U(e).defaultView||window}function Xt(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}const Qt=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function Kt(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function Jt(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=r=>e.ownerDocument.querySelector(`input[type="radio"]${r}`);let n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}function Zt(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||Jt(e))}function en(e){const t=[],n=[];return Array.from(e.querySelectorAll(Qt)).forEach((r,o)=>{const s=Kt(r);s===-1||!Zt(r)||(s===0?t.push(r):n.push({documentOrder:o,tabIndex:s,node:r}))}),n.sort((r,o)=>r.tabIndex===o.tabIndex?r.documentOrder-o.documentOrder:r.tabIndex-o.tabIndex).map(r=>r.node).concat(t)}function tn(){return!0}function nn(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:r=!1,disableRestoreFocus:o=!1,getTabbable:s=en,isEnabled:i=tn,open:u}=e,d=l.useRef(!1),f=l.useRef(null),p=l.useRef(null),g=l.useRef(null),v=l.useRef(null),k=l.useRef(!1),x=l.useRef(null),j=$e(t.ref,x),y=l.useRef(null);l.useEffect(()=>{!u||!x.current||(k.current=!n)},[n,u]),l.useEffect(()=>{if(!u||!x.current)return;const h=U(x.current);return x.current.contains(h.activeElement)||(x.current.hasAttribute("tabIndex")||x.current.setAttribute("tabIndex","-1"),k.current&&x.current.focus()),()=>{o||(g.current&&g.current.focus&&(d.current=!0,g.current.focus()),g.current=null)}},[u]),l.useEffect(()=>{if(!u||!x.current)return;const h=U(x.current),b=R=>{y.current=R,!(r||!i()||R.key!=="Tab")&&h.activeElement===x.current&&R.shiftKey&&(d.current=!0,p.current&&p.current.focus())},P=()=>{const R=x.current;if(R===null)return;if(!h.hasFocus()||!i()||d.current){d.current=!1;return}if(R.contains(h.activeElement)||r&&h.activeElement!==f.current&&h.activeElement!==p.current)return;if(h.activeElement!==v.current)v.current=null;else if(v.current!==null)return;if(!k.current)return;let E=[];if((h.activeElement===f.current||h.activeElement===p.current)&&(E=s(x.current)),E.length>0){var D,H;const B=!!((D=y.current)!=null&&D.shiftKey&&((H=y.current)==null?void 0:H.key)==="Tab"),F=E[0],A=E[E.length-1];typeof F!="string"&&typeof A!="string"&&(B?A.focus():F.focus())}else R.focus()};h.addEventListener("focusin",P),h.addEventListener("keydown",b,!0);const O=setInterval(()=>{h.activeElement&&h.activeElement.tagName==="BODY"&&P()},50);return()=>{clearInterval(O),h.removeEventListener("focusin",P),h.removeEventListener("keydown",b,!0)}},[n,r,o,i,u,s]);const w=h=>{g.current===null&&(g.current=h.relatedTarget),k.current=!0,v.current=h.target;const b=t.props.onFocus;b&&b(h)},m=h=>{g.current===null&&(g.current=h.relatedTarget),k.current=!0};return a.jsxs(l.Fragment,{children:[a.jsx("div",{tabIndex:u?0:-1,onFocus:m,ref:f,"data-testid":"sentinelStart"}),l.cloneElement(t,{ref:j,onFocus:w}),a.jsx("div",{tabIndex:u?0:-1,onFocus:m,ref:p,"data-testid":"sentinelEnd"})]})}function rn(e){const t=U(e);return t.body===e?he(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function de(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function Je(e){return parseInt(he(e).getComputedStyle(e).paddingRight,10)||0}function on(e){const n=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,r=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return n||r}function Ze(e,t,n,r,o){const s=[t,n,...r];[].forEach.call(e.children,i=>{const u=s.indexOf(i)===-1,d=!on(i);u&&d&&de(i,o)})}function Oe(e,t){let n=-1;return e.some((r,o)=>t(r)?(n=o,!0):!1),n}function an(e,t){const n=[],r=e.container;if(!t.disableScrollLock){if(rn(r)){const i=Xt(U(r));n.push({value:r.style.paddingRight,property:"padding-right",el:r}),r.style.paddingRight=`${Je(r)+i}px`;const u=U(r).querySelectorAll(".mui-fixed");[].forEach.call(u,d=>{n.push({value:d.style.paddingRight,property:"padding-right",el:d}),d.style.paddingRight=`${Je(d)+i}px`})}let s;if(r.parentNode instanceof DocumentFragment)s=U(r).body;else{const i=r.parentElement,u=he(r);s=(i==null?void 0:i.nodeName)==="HTML"&&u.getComputedStyle(i).overflowY==="scroll"?i:r}n.push({value:s.style.overflow,property:"overflow",el:s},{value:s.style.overflowX,property:"overflow-x",el:s},{value:s.style.overflowY,property:"overflow-y",el:s}),s.style.overflow="hidden"}return()=>{n.forEach(({value:s,el:i,property:u})=>{s?i.style.setProperty(u,s):i.style.removeProperty(u)})}}function sn(e){const t=[];return[].forEach.call(e.children,n=>{n.getAttribute("aria-hidden")==="true"&&t.push(n)}),t}class cn{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,n){let r=this.modals.indexOf(t);if(r!==-1)return r;r=this.modals.length,this.modals.push(t),t.modalRef&&de(t.modalRef,!1);const o=sn(n);Ze(n,t.mount,t.modalRef,o,!0);const s=Oe(this.containers,i=>i.container===n);return s!==-1?(this.containers[s].modals.push(t),r):(this.containers.push({modals:[t],container:n,restore:null,hiddenSiblings:o}),r)}mount(t,n){const r=Oe(this.containers,s=>s.modals.indexOf(t)!==-1),o=this.containers[r];o.restore||(o.restore=an(o,n))}remove(t,n=!0){const r=this.modals.indexOf(t);if(r===-1)return r;const o=Oe(this.containers,i=>i.modals.indexOf(t)!==-1),s=this.containers[o];if(s.modals.splice(s.modals.indexOf(t),1),this.modals.splice(r,1),s.modals.length===0)s.restore&&s.restore(),t.modalRef&&de(t.modalRef,n),Ze(s.container,t.mount,t.modalRef,s.hiddenSiblings,!1),this.containers.splice(o,1);else{const i=s.modals[s.modals.length-1];i.modalRef&&de(i.modalRef,!1)}return r}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}function ln(e){return typeof e=="function"?e():e}function dn(e){return e?e.props.hasOwnProperty("in"):!1}const un=new cn;function hn(e){const{container:t,disableEscapeKeyDown:n=!1,disableScrollLock:r=!1,manager:o=un,closeAfterTransition:s=!1,onTransitionEnter:i,onTransitionExited:u,children:d,onClose:f,open:p,rootRef:g}=e,v=l.useRef({}),k=l.useRef(null),x=l.useRef(null),j=$e(x,g),[y,w]=l.useState(!p),m=dn(d);let h=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(h=!1);const b=()=>U(k.current),P=()=>(v.current.modalRef=x.current,v.current.mount=k.current,v.current),O=()=>{o.mount(P(),{disableScrollLock:r}),x.current&&(x.current.scrollTop=0)},R=Xe(()=>{const $=ln(t)||b().body;o.add(P(),$),x.current&&O()}),E=l.useCallback(()=>o.isTopModal(P()),[o]),D=Xe($=>{k.current=$,$&&(p&&E()?O():x.current&&de(x.current,h))}),H=l.useCallback(()=>{o.remove(P(),h)},[h,o]);l.useEffect(()=>()=>{H()},[H]),l.useEffect(()=>{p?R():(!m||!s)&&H()},[p,H,m,s,R]);const B=$=>W=>{var I;(I=$.onKeyDown)==null||I.call($,W),!(W.key!=="Escape"||W.which===229||!E())&&(n||(W.stopPropagation(),f&&f(W,"escapeKeyDown")))},F=$=>W=>{var I;(I=$.onClick)==null||I.call($,W),W.target===W.currentTarget&&f&&f(W,"backdropClick")};return{getRootProps:($={})=>{const W=Dt(e);delete W.onTransitionEnter,delete W.onTransitionExited;const I=C({},W,$);return C({role:"presentation"},I,{onKeyDown:B(I),ref:j})},getBackdropProps:($={})=>{const W=$;return C({"aria-hidden":!0},W,{onClick:F(W),open:p})},getTransitionProps:()=>{const $=()=>{w(!1),i&&i()},W=()=>{w(!0),u&&u(),s&&H()};return{onEnter:Ke($,d==null?void 0:d.props.onEnter),onExited:Ke(W,d==null?void 0:d.props.onExited)}},rootRef:j,portalRef:D,isTopModal:E,exited:y,hasTransition:m}}const fn=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],mn={entering:{opacity:1},entered:{opacity:1}},pn=l.forwardRef(function(t,n){const r=Wt(),o={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:s,appear:i=!0,children:u,easing:d,in:f,onEnter:p,onEntered:g,onEntering:v,onExit:k,onExited:x,onExiting:j,style:y,timeout:w=o,TransitionComponent:m=Ct}=t,h=ae(t,fn),b=l.useRef(null),P=$e(b,u.ref,n),O=T=>L=>{if(T){const $=b.current;L===void 0?T($):T($,L)}},R=O(v),E=O((T,L)=>{Ot(T);const $=Qe({style:y,timeout:w,easing:d},{mode:"enter"});T.style.webkitTransition=r.transitions.create("opacity",$),T.style.transition=r.transitions.create("opacity",$),p&&p(T,L)}),D=O(g),H=O(j),B=O(T=>{const L=Qe({style:y,timeout:w,easing:d},{mode:"exit"});T.style.webkitTransition=r.transitions.create("opacity",L),T.style.transition=r.transitions.create("opacity",L),k&&k(T)}),F=O(x),A=T=>{s&&s(b.current,T)};return a.jsx(m,C({appear:i,in:f,nodeRef:b,onEnter:E,onEntered:D,onEntering:R,onExit:B,onExited:F,onExiting:H,addEndListener:A,timeout:w},h,{children:(T,L)=>l.cloneElement(u,C({style:C({opacity:0,visibility:T==="exited"&&!f?"hidden":void 0},mn[T],y,u.props.style),ref:P},L))}))}),gn=pn;function xn(e){return Le("MuiBackdrop",e)}Ae("MuiBackdrop",["root","invisible"]);const wn=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],bn=e=>{const{classes:t,invisible:n}=e;return Ye({root:["root",n&&"invisible"]},xn,t)},yn=pe("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})(({ownerState:e})=>C({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),vn=l.forwardRef(function(t,n){var r,o,s;const i=Ie({props:t,name:"MuiBackdrop"}),{children:u,className:d,component:f="div",components:p={},componentsProps:g={},invisible:v=!1,open:k,slotProps:x={},slots:j={},TransitionComponent:y=gn,transitionDuration:w}=i,m=ae(i,wn),h=C({},i,{component:f,invisible:v}),b=bn(h),P=(r=x.root)!=null?r:g.root;return a.jsx(y,C({in:k,timeout:w},m,{children:a.jsx(yn,C({"aria-hidden":!0},P,{as:(o=(s=j.root)!=null?s:p.Root)!=null?o:f,className:ue(b.root,d,P==null?void 0:P.className),ownerState:C({},h,P==null?void 0:P.ownerState),classes:b,ref:n,children:u}))}))}),kn=vn;function Pn(e){return Le("MuiModal",e)}Ae("MuiModal",["root","hidden","backdrop"]);const Mn=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],En=e=>{const{open:t,exited:n,classes:r}=e;return Ye({root:["root",!t&&n&&"hidden"],backdrop:["backdrop"]},Pn,r)},$n=pe("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})(({theme:e,ownerState:t})=>C({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),Sn=pe(kn,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),Tn=l.forwardRef(function(t,n){var r,o,s,i,u,d;const f=Ie({name:"MuiModal",props:t}),{BackdropComponent:p=Sn,BackdropProps:g,className:v,closeAfterTransition:k=!1,children:x,container:j,component:y,components:w={},componentsProps:m={},disableAutoFocus:h=!1,disableEnforceFocus:b=!1,disableEscapeKeyDown:P=!1,disablePortal:O=!1,disableRestoreFocus:R=!1,disableScrollLock:E=!1,hideBackdrop:D=!1,keepMounted:H=!1,onBackdropClick:B,open:F,slotProps:A,slots:T}=f,L=ae(f,Mn),$=C({},f,{closeAfterTransition:k,disableAutoFocus:h,disableEnforceFocus:b,disableEscapeKeyDown:P,disablePortal:O,disableRestoreFocus:R,disableScrollLock:E,hideBackdrop:D,keepMounted:H}),{getRootProps:W,getBackdropProps:I,getTransitionProps:we,portalRef:je,isTopModal:be,exited:_,hasTransition:ye}=hn(C({},$,{rootRef:n})),Q=C({},$,{exited:_}),G=En(Q),J={};if(x.props.tabIndex===void 0&&(J.tabIndex="-1"),ye){const{onEnter:S,onExited:z}=we();J.onEnter=S,J.onExited=z}const Z=(r=(o=T==null?void 0:T.root)!=null?o:w.Root)!=null?r:$n,se=(s=(i=T==null?void 0:T.backdrop)!=null?i:w.Backdrop)!=null?s:p,ie=(u=A==null?void 0:A.root)!=null?u:m.root,ee=(d=A==null?void 0:A.backdrop)!=null?d:m.backdrop,De=ke({elementType:Z,externalSlotProps:ie,externalForwardedProps:L,getSlotProps:W,additionalProps:{ref:n,as:y},ownerState:Q,className:ue(v,ie==null?void 0:ie.className,G==null?void 0:G.root,!Q.open&&Q.exited&&(G==null?void 0:G.hidden))}),We=ke({elementType:se,externalSlotProps:ee,additionalProps:g,getSlotProps:S=>I(C({},S,{onClick:z=>{B&&B(z),S!=null&&S.onClick&&S.onClick(z)}})),className:ue(ee==null?void 0:ee.className,g==null?void 0:g.className,G==null?void 0:G.backdrop),ownerState:Q});return!H&&!F&&(!ye||_)?null:a.jsx(Rt,{ref:je,container:j,disablePortal:O,children:a.jsxs(Z,C({},De,{children:[!D&&p?a.jsx(se,C({},We)):null,a.jsx(nn,{disableEnforceFocus:b,disableAutoFocus:h,disableRestoreFocus:R,isEnabled:be,open:F,children:l.cloneElement(x,J)})]}))})}),jn=Tn;function Dn(e){return Le("MuiPopover",e)}Ae("MuiPopover",["root","paper"]);const Wn=["onEntering"],Cn=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps","disableScrollLock"],On=["slotProps"];function et(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.height/2:t==="bottom"&&(n=e.height),n}function tt(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.width/2:t==="right"&&(n=e.width),n}function nt(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function Re(e){return typeof e=="function"?e():e}const Rn=e=>{const{classes:t}=e;return Ye({root:["root"],paper:["paper"]},Dn,t)},Fn=pe(jn,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Nn=pe(Ft,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),zn=l.forwardRef(function(t,n){var r,o,s;const i=Ie({props:t,name:"MuiPopover"}),{action:u,anchorEl:d,anchorOrigin:f={vertical:"top",horizontal:"left"},anchorPosition:p,anchorReference:g="anchorEl",children:v,className:k,container:x,elevation:j=8,marginThreshold:y=16,open:w,PaperProps:m={},slots:h,slotProps:b,transformOrigin:P={vertical:"top",horizontal:"left"},TransitionComponent:O=zt,transitionDuration:R="auto",TransitionProps:{onEntering:E}={},disableScrollLock:D=!1}=i,H=ae(i.TransitionProps,Wn),B=ae(i,Cn),F=(r=b==null?void 0:b.paper)!=null?r:m,A=l.useRef(),T=$e(A,F.ref),L=C({},i,{anchorOrigin:f,anchorReference:g,elevation:j,marginThreshold:y,externalPaperSlotProps:F,transformOrigin:P,TransitionComponent:O,transitionDuration:R,TransitionProps:H}),$=Rn(L),W=l.useCallback(()=>{if(g==="anchorPosition")return p;const S=Re(d),Y=(S&&S.nodeType===1?S:U(A.current).body).getBoundingClientRect();return{top:Y.top+et(Y,f.vertical),left:Y.left+tt(Y,f.horizontal)}},[d,f.horizontal,f.vertical,p,g]),I=l.useCallback(S=>({vertical:et(S,P.vertical),horizontal:tt(S,P.horizontal)}),[P.horizontal,P.vertical]),we=l.useCallback(S=>{const z={width:S.offsetWidth,height:S.offsetHeight},Y=I(z);if(g==="none")return{top:null,left:null,transformOrigin:nt(Y)};const Be=W();let te=Be.top-Y.vertical,ne=Be.left-Y.horizontal;const _e=te+z.height,qe=ne+z.width,Ue=he(Re(d)),Ve=Ue.innerHeight-y,Ge=Ue.innerWidth-y;if(y!==null&&te<y){const q=te-y;te-=q,Y.vertical+=q}else if(y!==null&&_e>Ve){const q=_e-Ve;te-=q,Y.vertical+=q}if(y!==null&&ne<y){const q=ne-y;ne-=q,Y.horizontal+=q}else if(qe>Ge){const q=qe-Ge;ne-=q,Y.horizontal+=q}return{top:`${Math.round(te)}px`,left:`${Math.round(ne)}px`,transformOrigin:nt(Y)}},[d,g,W,I,y]),[je,be]=l.useState(w),_=l.useCallback(()=>{const S=A.current;if(!S)return;const z=we(S);z.top!==null&&(S.style.top=z.top),z.left!==null&&(S.style.left=z.left),S.style.transformOrigin=z.transformOrigin,be(!0)},[we]);l.useEffect(()=>(D&&window.addEventListener("scroll",_),()=>window.removeEventListener("scroll",_)),[d,D,_]);const ye=(S,z)=>{E&&E(S,z),_()},Q=()=>{be(!1)};l.useEffect(()=>{w&&_()}),l.useImperativeHandle(u,()=>w?{updatePosition:()=>{_()}}:null,[w,_]),l.useEffect(()=>{if(!w)return;const S=Gt(()=>{_()}),z=he(d);return z.addEventListener("resize",S),()=>{S.clear(),z.removeEventListener("resize",S)}},[d,w,_]);let G=R;R==="auto"&&!O.muiSupportAuto&&(G=void 0);const J=x||(d?U(Re(d)).body:void 0),Z=(o=h==null?void 0:h.root)!=null?o:Fn,se=(s=h==null?void 0:h.paper)!=null?s:Nn,ie=ke({elementType:se,externalSlotProps:C({},F,{style:je?F.style:C({},F.style,{opacity:0})}),additionalProps:{elevation:j,ref:T},ownerState:L,className:ue($.paper,F==null?void 0:F.className)}),ee=ke({elementType:Z,externalSlotProps:(b==null?void 0:b.root)||{},externalForwardedProps:B,additionalProps:{ref:n,slotProps:{backdrop:{invisible:!0}},container:J,open:w},ownerState:L,className:ue($.root,k)}),{slotProps:De}=ee,We=ae(ee,On);return a.jsx(Z,C({},We,!Nt(Z)&&{slotProps:De,disableScrollLock:D},{children:a.jsx(O,C({appear:!0,in:w,onEntering:ye,onExited:Q,timeout:G},H,{children:a.jsx(se,C({},ie,{children:v}))}))}))}),Hn=zn;function N(e){const t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new e.constructor(+e):typeof e=="number"||t==="[object Number]"||typeof e=="string"||t==="[object String]"?new Date(e):new Date(NaN)}function V(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}function Fe(e,t){const n=N(e);if(isNaN(t))return V(e,NaN);if(!t)return n;const r=n.getDate(),o=V(e,n.getTime());o.setMonth(n.getMonth()+t+1,0);const s=o.getDate();return r>=s?o:(n.setFullYear(o.getFullYear(),o.getMonth(),r),n)}const bt=6048e5,Ln=864e5;let An={};function Te(){return An}function fe(e,t){var u,d,f,p;const n=Te(),r=(t==null?void 0:t.weekStartsOn)??((d=(u=t==null?void 0:t.locale)==null?void 0:u.options)==null?void 0:d.weekStartsOn)??n.weekStartsOn??((p=(f=n.locale)==null?void 0:f.options)==null?void 0:p.weekStartsOn)??0,o=N(e),s=o.getDay(),i=(s<r?7:0)+s-r;return o.setDate(o.getDate()-i),o.setHours(0,0,0,0),o}function Me(e){return fe(e,{weekStartsOn:1})}function yt(e){const t=N(e),n=t.getFullYear(),r=V(e,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const o=Me(r),s=V(e,0);s.setFullYear(n,0,4),s.setHours(0,0,0,0);const i=Me(s);return t.getTime()>=o.getTime()?n+1:t.getTime()>=i.getTime()?n:n-1}function Ee(e){const t=N(e);return t.setHours(0,0,0,0),t}function rt(e){const t=N(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function In(e,t){const n=Ee(e),r=Ee(t),o=+n-rt(n),s=+r-rt(r);return Math.round((o-s)/Ln)}function Yn(e){const t=yt(e),n=V(e,0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),Me(n)}function Bn(e){return V(e,Date.now())}function _n(e,t){const n=Ee(e),r=Ee(t);return+n==+r}function qn(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function Un(e){if(!qn(e)&&typeof e!="number")return!1;const t=N(e);return!isNaN(Number(t))}function ot(e){const t=N(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}function Vn(e,t){const n=N(e.start),r=N(e.end);let o=+n>+r;const s=o?+n:+r,i=o?r:n;i.setHours(0,0,0,0);let u=(t==null?void 0:t.step)??1;if(!u)return[];u<0&&(u=-u,o=!o);const d=[];for(;+i<=s;)d.push(N(i)),i.setDate(i.getDate()+u),i.setHours(0,0,0,0);return o?d.reverse():d}function at(e){const t=N(e);return t.setDate(1),t.setHours(0,0,0,0),t}function Gn(e){const t=N(e),n=V(e,0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}const Xn={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Qn=(e,t,n)=>{let r;const o=Xn[e];return typeof o=="string"?r=o:t===1?r=o.one:r=o.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function Ne(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const Kn={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Jn={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Zn={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},er={date:Ne({formats:Kn,defaultWidth:"full"}),time:Ne({formats:Jn,defaultWidth:"full"}),dateTime:Ne({formats:Zn,defaultWidth:"full"})},tr={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},nr=(e,t,n,r)=>tr[e];function ce(e){return(t,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let o;if(r==="formatting"&&e.formattingValues){const i=e.defaultFormattingWidth||e.defaultWidth,u=n!=null&&n.width?String(n.width):i;o=e.formattingValues[u]||e.formattingValues[i]}else{const i=e.defaultWidth,u=n!=null&&n.width?String(n.width):e.defaultWidth;o=e.values[u]||e.values[i]}const s=e.argumentCallback?e.argumentCallback(t):t;return o[s]}}const rr={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},or={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},ar={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},sr={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},ir={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},cr={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},lr=(e,t)=>{const n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},dr={ordinalNumber:lr,era:ce({values:rr,defaultWidth:"wide"}),quarter:ce({values:or,defaultWidth:"wide",argumentCallback:e=>e-1}),month:ce({values:ar,defaultWidth:"wide"}),day:ce({values:sr,defaultWidth:"wide"}),dayPeriod:ce({values:ir,defaultWidth:"wide",formattingValues:cr,defaultFormattingWidth:"wide"})};function le(e){return(t,n={})=>{const r=n.width,o=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],s=t.match(o);if(!s)return null;const i=s[0],u=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],d=Array.isArray(u)?hr(u,g=>g.test(i)):ur(u,g=>g.test(i));let f;f=e.valueCallback?e.valueCallback(d):d,f=n.valueCallback?n.valueCallback(f):f;const p=t.slice(i.length);return{value:f,rest:p}}}function ur(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function hr(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function fr(e){return(t,n={})=>{const r=t.match(e.matchPattern);if(!r)return null;const o=r[0],s=t.match(e.parsePattern);if(!s)return null;let i=e.valueCallback?e.valueCallback(s[0]):s[0];i=n.valueCallback?n.valueCallback(i):i;const u=t.slice(o.length);return{value:i,rest:u}}}const mr=/^(\d+)(th|st|nd|rd)?/i,pr=/\d+/i,gr={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},xr={any:[/^b/i,/^(a|c)/i]},wr={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},br={any:[/1/i,/2/i,/3/i,/4/i]},yr={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},vr={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},kr={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Pr={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Mr={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Er={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},$r={ordinalNumber:fr({matchPattern:mr,parsePattern:pr,valueCallback:e=>parseInt(e,10)}),era:le({matchPatterns:gr,defaultMatchWidth:"wide",parsePatterns:xr,defaultParseWidth:"any"}),quarter:le({matchPatterns:wr,defaultMatchWidth:"wide",parsePatterns:br,defaultParseWidth:"any",valueCallback:e=>e+1}),month:le({matchPatterns:yr,defaultMatchWidth:"wide",parsePatterns:vr,defaultParseWidth:"any"}),day:le({matchPatterns:kr,defaultMatchWidth:"wide",parsePatterns:Pr,defaultParseWidth:"any"}),dayPeriod:le({matchPatterns:Mr,defaultMatchWidth:"any",parsePatterns:Er,defaultParseWidth:"any"})},Sr={code:"en-US",formatDistance:Qn,formatLong:er,formatRelative:nr,localize:dr,match:$r,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Tr(e){const t=N(e);return In(t,Gn(t))+1}function jr(e){const t=N(e),n=+Me(t)-+Yn(t);return Math.round(n/bt)+1}function vt(e,t){var p,g,v,k;const n=N(e),r=n.getFullYear(),o=Te(),s=(t==null?void 0:t.firstWeekContainsDate)??((g=(p=t==null?void 0:t.locale)==null?void 0:p.options)==null?void 0:g.firstWeekContainsDate)??o.firstWeekContainsDate??((k=(v=o.locale)==null?void 0:v.options)==null?void 0:k.firstWeekContainsDate)??1,i=V(e,0);i.setFullYear(r+1,0,s),i.setHours(0,0,0,0);const u=fe(i,t),d=V(e,0);d.setFullYear(r,0,s),d.setHours(0,0,0,0);const f=fe(d,t);return n.getTime()>=u.getTime()?r+1:n.getTime()>=f.getTime()?r:r-1}function Dr(e,t){var u,d,f,p;const n=Te(),r=(t==null?void 0:t.firstWeekContainsDate)??((d=(u=t==null?void 0:t.locale)==null?void 0:u.options)==null?void 0:d.firstWeekContainsDate)??n.firstWeekContainsDate??((p=(f=n.locale)==null?void 0:f.options)==null?void 0:p.firstWeekContainsDate)??1,o=vt(e,t),s=V(e,0);return s.setFullYear(o,0,r),s.setHours(0,0,0,0),fe(s,t)}function Wr(e,t){const n=N(e),r=+fe(n,t)-+Dr(n,t);return Math.round(r/bt)+1}function M(e,t){const n=e<0?"-":"",r=Math.abs(e).toString().padStart(t,"0");return n+r}const X={y(e,t){const n=e.getFullYear(),r=n>0?n:1-n;return M(t==="yy"?r%100:r,t.length)},M(e,t){const n=e.getMonth();return t==="M"?String(n+1):M(n+1,2)},d(e,t){return M(e.getDate(),t.length)},a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(e,t){return M(e.getHours()%12||12,t.length)},H(e,t){return M(e.getHours(),t.length)},m(e,t){return M(e.getMinutes(),t.length)},s(e,t){return M(e.getSeconds(),t.length)},S(e,t){const n=t.length,r=e.getMilliseconds(),o=Math.trunc(r*Math.pow(10,n-3));return M(o,t.length)}},re={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},st={G:function(e,t,n){const r=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if(t==="yo"){const r=e.getFullYear(),o=r>0?r:1-r;return n.ordinalNumber(o,{unit:"year"})}return X.y(e,t)},Y:function(e,t,n,r){const o=vt(e,r),s=o>0?o:1-o;if(t==="YY"){const i=s%100;return M(i,2)}return t==="Yo"?n.ordinalNumber(s,{unit:"year"}):M(s,t.length)},R:function(e,t){const n=yt(e);return M(n,t.length)},u:function(e,t){const n=e.getFullYear();return M(n,t.length)},Q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return M(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return M(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){const r=e.getMonth();switch(t){case"M":case"MM":return X.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){const r=e.getMonth();switch(t){case"L":return String(r+1);case"LL":return M(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){const o=Wr(e,r);return t==="wo"?n.ordinalNumber(o,{unit:"week"}):M(o,t.length)},I:function(e,t,n){const r=jr(e);return t==="Io"?n.ordinalNumber(r,{unit:"week"}):M(r,t.length)},d:function(e,t,n){return t==="do"?n.ordinalNumber(e.getDate(),{unit:"date"}):X.d(e,t)},D:function(e,t,n){const r=Tr(e);return t==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):M(r,t.length)},E:function(e,t,n){const r=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){const o=e.getDay(),s=(o-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(s);case"ee":return M(s,2);case"eo":return n.ordinalNumber(s,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});case"eeee":default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){const o=e.getDay(),s=(o-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(s);case"cc":return M(s,t.length);case"co":return n.ordinalNumber(s,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});case"cccc":default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(e,t,n){const r=e.getDay(),o=r===0?7:r;switch(t){case"i":return String(o);case"ii":return M(o,t.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){const o=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(e,t,n){const r=e.getHours();let o;switch(r===12?o=re.noon:r===0?o=re.midnight:o=r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(e,t,n){const r=e.getHours();let o;switch(r>=17?o=re.evening:r>=12?o=re.afternoon:r>=4?o=re.morning:o=re.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(e,t,n){if(t==="ho"){let r=e.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return X.h(e,t)},H:function(e,t,n){return t==="Ho"?n.ordinalNumber(e.getHours(),{unit:"hour"}):X.H(e,t)},K:function(e,t,n){const r=e.getHours()%12;return t==="Ko"?n.ordinalNumber(r,{unit:"hour"}):M(r,t.length)},k:function(e,t,n){let r=e.getHours();return r===0&&(r=24),t==="ko"?n.ordinalNumber(r,{unit:"hour"}):M(r,t.length)},m:function(e,t,n){return t==="mo"?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):X.m(e,t)},s:function(e,t,n){return t==="so"?n.ordinalNumber(e.getSeconds(),{unit:"second"}):X.s(e,t)},S:function(e,t){return X.S(e,t)},X:function(e,t,n){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(t){case"X":return ct(r);case"XXXX":case"XX":return K(r);case"XXXXX":case"XXX":default:return K(r,":")}},x:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"x":return ct(r);case"xxxx":case"xx":return K(r);case"xxxxx":case"xxx":default:return K(r,":")}},O:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+it(r,":");case"OOOO":default:return"GMT"+K(r,":")}},z:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+it(r,":");case"zzzz":default:return"GMT"+K(r,":")}},t:function(e,t,n){const r=Math.trunc(e.getTime()/1e3);return M(r,t.length)},T:function(e,t,n){const r=e.getTime();return M(r,t.length)}};function it(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),o=Math.trunc(r/60),s=r%60;return s===0?n+String(o):n+String(o)+t+M(s,2)}function ct(e,t){return e%60===0?(e>0?"-":"+")+M(Math.abs(e)/60,2):K(e,t)}function K(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),o=M(Math.trunc(r/60),2),s=M(r%60,2);return n+o+t+s}const lt=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},kt=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},Cr=(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],r=n[1],o=n[2];if(!o)return lt(e,t);let s;switch(r){case"P":s=t.dateTime({width:"short"});break;case"PP":s=t.dateTime({width:"medium"});break;case"PPP":s=t.dateTime({width:"long"});break;case"PPPP":default:s=t.dateTime({width:"full"});break}return s.replace("{{date}}",lt(r,t)).replace("{{time}}",kt(o,t))},Or={p:kt,P:Cr},Rr=/^D+$/,Fr=/^Y+$/,Nr=["D","DD","YY","YYYY"];function zr(e){return Rr.test(e)}function Hr(e){return Fr.test(e)}function Lr(e,t,n){const r=Ar(e,t,n);if(console.warn(r),Nr.includes(e))throw new RangeError(r)}function Ar(e,t,n){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Ir=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Yr=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Br=/^'([^]*?)'?$/,_r=/''/g,qr=/[a-zA-Z]/;function Pt(e,t,n){var p,g,v,k,x,j,y,w;const r=Te(),o=(n==null?void 0:n.locale)??r.locale??Sr,s=(n==null?void 0:n.firstWeekContainsDate)??((g=(p=n==null?void 0:n.locale)==null?void 0:p.options)==null?void 0:g.firstWeekContainsDate)??r.firstWeekContainsDate??((k=(v=r.locale)==null?void 0:v.options)==null?void 0:k.firstWeekContainsDate)??1,i=(n==null?void 0:n.weekStartsOn)??((j=(x=n==null?void 0:n.locale)==null?void 0:x.options)==null?void 0:j.weekStartsOn)??r.weekStartsOn??((w=(y=r.locale)==null?void 0:y.options)==null?void 0:w.weekStartsOn)??0,u=N(e);if(!Un(u))throw new RangeError("Invalid time value");let d=t.match(Yr).map(m=>{const h=m[0];if(h==="p"||h==="P"){const b=Or[h];return b(m,o.formatLong)}return m}).join("").match(Ir).map(m=>{if(m==="''")return{isToken:!1,value:"'"};const h=m[0];if(h==="'")return{isToken:!1,value:Ur(m)};if(st[h])return{isToken:!0,value:m};if(h.match(qr))throw new RangeError("Format string contains an unescaped latin alphabet character `"+h+"`");return{isToken:!1,value:m}});o.localize.preprocessor&&(d=o.localize.preprocessor(u,d));const f={firstWeekContainsDate:s,weekStartsOn:i,locale:o};return d.map(m=>{if(!m.isToken)return m.value;const h=m.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&Hr(h)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&zr(h))&&Lr(h,t,String(e));const b=st[h[0]];return b(u,h,o.localize,f)}).join("")}function Ur(e){const t=e.match(Br);return t?t[1].replace(_r,"'"):e}function Vr(e,t){const n=N(e),r=N(t);return n.getTime()>r.getTime()}function Gr(e,t){const n=N(e),r=N(t);return+n<+r}function Xr(e){return _n(e,Bn(e))}const Qr=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",...e},l.createElement("title",null,`
		solidleft
	`),l.createElement("path",{d:"M10.293 16.707c-0.187-0.188-0.292-0.442-0.292-0.707s0.105-0.519 0.292-0.707l10-10c0.092-0.098 0.202-0.177 0.325-0.232s0.255-0.084 0.389-0.086c0.134-0.002 0.268 0.022 0.392 0.073s0.238 0.125 0.333 0.22c0.095 0.095 0.17 0.208 0.22 0.333s0.075 0.258 0.073 0.392c-0.002 0.134-0.032 0.267-0.086 0.389s-0.133 0.233-0.232 0.325l-9.293 9.293 9.293 9.293c0.098 0.091 0.177 0.202 0.232 0.325s0.084 0.255 0.086 0.389c0.002 0.134-0.022 0.268-0.073 0.392s-0.125 0.238-0.22 0.333c-0.095 0.095-0.208 0.17-0.333 0.22s-0.258 0.075-0.392 0.073c-0.134-0.002-0.267-0.032-0.389-0.086s-0.233-0.134-0.325-0.232l-10-10z"})),Kr=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",...e},l.createElement("title",null,`
		solid-right
	`),l.createElement("path",{d:"M21.707 16.707c0.187-0.188 0.292-0.442 0.292-0.707s-0.105-0.519-0.292-0.707l-10-10c-0.092-0.098-0.202-0.177-0.325-0.232s-0.255-0.084-0.389-0.086c-0.134-0.002-0.268 0.022-0.392 0.073s-0.238 0.125-0.333 0.22c-0.095 0.095-0.17 0.208-0.22 0.333s-0.075 0.258-0.073 0.392c0.002 0.134 0.032 0.267 0.086 0.389s0.133 0.233 0.232 0.325l9.293 9.293-9.293 9.293c-0.098 0.091-0.177 0.202-0.232 0.325s-0.084 0.255-0.086 0.389c-0.002 0.134 0.022 0.268 0.073 0.392s0.125 0.238 0.22 0.333c0.095 0.095 0.208 0.17 0.333 0.22s0.258 0.075 0.392 0.073c0.134-0.002 0.267-0.032 0.389-0.086s0.233-0.134 0.325-0.232l10-10z"})),Jr=c.div`
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

`,dt=c.button`
 background: transparent;
    border: none;
    cursor: ${e=>e.disabled?"default":"pointer"};
    visibility: ${e=>e.disabled?"hidden":"visible"};
    pointer-events: ${e=>e.disabled?"none":"auto"};
  
   
    margin: 0;
`,Zr=c(Qr)`

fill: ${e=>e.theme.colors.primary.accent};
  width: 14px;
  height: auto;


`,eo=c(Kr)`

fill: ${e=>e.theme.colors.primary.accent};
  width: 14px;
  height: auto;
 
 
`,to=({selectedDate:e,setSelectedDate:t,setCurrentMonth:n,setSelectedDay:r})=>{const o=new Date().getMonth(),s=new Date().getFullYear(),i=Gr(e,Fe(new Date,-12)),u=Vr(e,new Date(s,o,1)),d=Pt(e,"MMMM"),f=e.getFullYear(),p=()=>{t(Fe(e,-1)),r(null),n(v=>v-1)},g=()=>{t(Fe(e,1)),r(null),n(v=>v+1)};return a.jsxs(Jr,{children:[a.jsx(dt,{onClick:p,disabled:i,children:a.jsx(Zr,{})}),a.jsx("span",{children:`${d}, ${f}`}),a.jsx(dt,{onClick:g,disabled:u,children:a.jsx(eo,{})})]})},no=c.div`
display: flex;
flex-direction:column;
gap: 16px;
padding: 24px 13px;


border-radius: 10px;
background:${e=>e.theme.colors.primary.bg};
box-shadow: 0px 4px 4px 0px rgba(64, 123, 255, 0.30);



`,ro=c.h2`
color:${e=>e.theme.colors.primary.accent};
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 1.25;
`,oo=c.ul`
display: flex;
flex-direction: column;
gap: 16px;

color: ${e=>e.theme.colors.primary.text};

font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 1.25;
`,ze=c.li`

span{
  color:${e=>e.theme.colors.primary.accent};

  font-size: 18px;

  font-weight: 500;
  line-height: 1.33;
}

`,ao=({selectedDate:e,selectedDayData:t})=>{const n=Pt(e,"MMMM"),r=e.getDate(),o=Se().user.waterRate,s=o?(o/1e3).toFixed(1):"0",i=t?(t.waterRate/1e3).toFixed(1):s,u=t?t.percentagePerDay:"0",d=t?t.totalPortions:"0";return a.jsxs(no,{children:[a.jsxs(ro,{children:[" ",r,", ",n]}),a.jsxs(oo,{children:[a.jsxs(ze,{children:["Daily Norma: ",a.jsxs("span",{children:[i," L"]})]}),a.jsxs(ze,{children:["Fulfillment of the daily norm: ",a.jsxs("span",{children:[u,"%"]})]}),a.jsxs(ze,{children:["How many servings of water: ",a.jsx("span",{children:d})]})]})]})},so=c.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,io=c.div`
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
 
`,co=c.ul`
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
`,lo=c.li`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  position: relative;
  cursor: pointer;
  padding: 0px;

  @media (min-width: ${({theme:e})=>e.screens.tab}) {
  }
`,uo=c.div`
  width: 34px;
  height: 34px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${e=>e.theme.colors.primary.bg};
  background-color: ${e=>e.isToday?"hsl(39deg 100% 68% / 23%);":e.theme.colors.primary.bg};
  border: 2px solid
    ${({theme:e,percentage:t})=>t<100?e.colors.secondary.color4:e.colors.primary.bg};
`,ho=c.p`
  z-index: 1;
  margin: 0;
`,fo=c.p`
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
`,mo=e=>e.water.waterDayList,po=e=>e.water.waterMonthList,go=e=>e.water.waterRate,me=()=>{const e=Ce(mo),t=Ce(po),n=Ce(go);return{waterDayList:e,waterMonthList:t,waterRate:n}},xo=()=>{const[e,t]=l.useState(new Date),[n,r]=l.useState(e.getMonth()),[o,s]=l.useState(null),[i,u]=l.useState(null),d=ge(),f=me().waterMonthList,p=me().waterDayList,g=Se().user.waterRate,v=()=>{u(null)},k=!!i,x=k?"simple-popover":void 0;l.useEffect(()=>{const w=at(e),m=ot(e);o===null&&d(Ht({startDate:w,endDate:m}))},[n,d,e,o,p]);const j=(w,m)=>{t(m),u(w.currentTarget),s(m.getDate())},y=f&&f.find(w=>{const[m]=w.date.split(",");return parseInt(m)===e.getDate()});return a.jsxs(so,{children:[a.jsxs(io,{children:[a.jsx("h3",{children:"Month"}),a.jsx(to,{selectedDate:e,setSelectedDate:t,setCurrentMonth:r,setSelectedDay:s})]}),a.jsx(co,{children:Vn({start:at(e),end:ot(e)}).map((w,m)=>{const h=w.getDate(),b=f.find(E=>{const[D]=E.date.split(",");return parseInt(D)===h}),P=b?b.totalWaterDrunk:0,O=g?Math.round(P/g*100):0,R=Xr(w);return a.jsxs(lo,{onClick:E=>j(E,w),children:[a.jsx(uo,{percentage:O,isToday:R,children:a.jsx(ho,{children:h})}),a.jsxs(fo,{children:[O||0,"%"]})]},m)})}),a.jsx(Hn,{id:x,open:k,anchorEl:i,onClose:v,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"bottom",horizontal:"right"},children:a.jsx(ao,{selectedDate:e,selectedDayData:y})})]})},wo="/Smart-Foxes-WaterTracker/assets/botleHomeDesk-3ae51194.png",bo="/Smart-Foxes-WaterTracker/assets/botlteHomeDesk2x-9a54d3e4.png",yo="/Smart-Foxes-WaterTracker/assets/bottleHomeTab-0bf3952c.png",vo="/Smart-Foxes-WaterTracker/assets/bottleHomeTab2x-ed4a96a1.png",ko="/Smart-Foxes-WaterTracker/assets/backgroundHomeMob-d1e9a558.png",Po="/Smart-Foxes-WaterTracker/assets/backgroundHomeMob2x-089f92e0.png",Mo="/Smart-Foxes-WaterTracker/assets/bottleHomeMob-1cd9cdb8.png",Eo="/Smart-Foxes-WaterTracker/assets/bottleHomeMob2x-0e2d77ce.png",$o=c.main`
display: flex;
flex-direction:column;

align-items: center;

color:${e=>e.theme.colors.primary.text};
background-color: ${e=>e.theme.colors.primary.bg};
background-image: image-set(
        url(${Mo}) 1x,
        url(${Eo}) 2x
      ),
      image-set(
        url(${ko}) 1x,
        url(${Po}) 2x
      );
background-position: center 106px, center;
background-size: auto, 100vw auto;
background-repeat: no-repeat;


@media (min-width: ${({theme:e})=>e.screens.tab}){
  background-image: image-set(
        url(${yo}) 1x,
        url(${vo}) 2x
      ),
      image-set(
        url(${Lt}) 1x,
        url(${At}) 2x
      );
background-position: center 40px, center;

}


@media (min-width: ${({theme:e})=>e.screens.desk}) {
    flex-direction:row;
    gap: 32px;
    align-items: flex-start;
    padding: 0px 112px;
  
    background-image: image-set(
        url(${wo}) 1x,
        url(${bo}) 2x
      ),
      image-set(
        url(${Ut}) 1x,
        url(${Vt}) 2x
      );
background-position: left top, center;
  }
`,So=c.section`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
gap: 240px;

width: 280px;
height: 507px;

margin-bottom:40px;
@media (min-width: ${({theme:e})=>e.screens.tab}) {
  width: 704px;
  gap: 326px;
}

@media (min-width: ${({theme:e})=>e.screens.desk}) {

  gap: 466px;
}

`,To=c.section`
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


`,ve=(e,t=!1)=>{const n=new Date(e);let r=n.getHours();const o=n.getMinutes();let s="";if(t){const i=r>=12?"PM":"AM";r=r%12,r=r||12,s=`${r.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")} ${i}`}else s=`${r.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")}`;return s},jo=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",...e},l.createElement("title",null,"glass_26"),l.createElement("path",{fill:"#407bff",d:"M5.565 2.783l1.901 26.363v0.072h16.367l1.901-26.353v-0.082h-20.169zM23.16 28.479h-15.017l-1.426-19.747h0.784l1.289 17.403c0.008 0.092 0.049 0.177 0.115 0.24s0.153 0.098 0.244 0.099h0.030c0.047-0.003 0.093-0.016 0.136-0.037s0.080-0.051 0.111-0.087c0.031-0.036 0.055-0.078 0.070-0.124s0.021-0.094 0.017-0.141l-1.289-17.351h16.362l-1.426 19.747zM24.637 7.994h-16.468l-0.283-3.847c-0.009-0.094-0.052-0.181-0.122-0.244s-0.16-0.097-0.252-0.095c-0.095 0.009-0.183 0.055-0.245 0.129s-0.094 0.169-0.088 0.266l0.283 3.795h-0.794l-0.324-4.483h18.617l-0.324 4.478z"}),l.createElement("path",{fill:"#407bff",d:"M11.359 12.384c0.236 0 0.467-0.071 0.663-0.204s0.349-0.322 0.439-0.543c0.090-0.221 0.114-0.465 0.068-0.699s-0.16-0.45-0.327-0.62c-0.167-0.169-0.38-0.285-0.611-0.331s-0.471-0.023-0.689 0.069c-0.218 0.092-0.404 0.247-0.536 0.446s-0.201 0.433-0.201 0.672c0 0.321 0.126 0.629 0.35 0.856s0.527 0.355 0.844 0.355zM11.359 10.697c0.093 0 0.184 0.028 0.261 0.080s0.138 0.127 0.173 0.214c0.036 0.087 0.045 0.183 0.027 0.276s-0.063 0.178-0.129 0.244c-0.066 0.067-0.15 0.112-0.241 0.131s-0.186 0.009-0.272-0.027c-0.086-0.036-0.159-0.097-0.211-0.176s-0.079-0.171-0.079-0.265c0-0.127 0.050-0.248 0.138-0.337s0.208-0.14 0.332-0.14z"}),l.createElement("path",{fill:"#407bff",d:"M11.354 16.318c0.003 0.239 0.076 0.472 0.209 0.669s0.321 0.35 0.539 0.439 0.458 0.111 0.689 0.062c0.231-0.049 0.442-0.166 0.607-0.336s0.277-0.387 0.321-0.621 0.019-0.477-0.072-0.698c-0.091-0.22-0.245-0.408-0.442-0.54s-0.427-0.201-0.663-0.2c-0.158 0.001-0.313 0.033-0.459 0.095s-0.277 0.153-0.387 0.267-0.198 0.249-0.256 0.397c-0.059 0.148-0.088 0.307-0.086 0.467zM13.013 16.318c0 0.094-0.028 0.187-0.079 0.265s-0.125 0.14-0.211 0.176c-0.086 0.036-0.18 0.046-0.272 0.027s-0.175-0.064-0.241-0.131-0.111-0.152-0.129-0.244c-0.018-0.093-0.009-0.188 0.027-0.276s0.096-0.162 0.173-0.214 0.168-0.080 0.261-0.080c0.125 0 0.244 0.050 0.333 0.14s0.138 0.211 0.138 0.337z"}),l.createElement("path",{fill:"#407bff",d:"M19.834 16.349c0.236 0 0.467-0.071 0.663-0.204s0.349-0.322 0.439-0.543c0.090-0.221 0.114-0.465 0.068-0.699s-0.16-0.45-0.327-0.62c-0.167-0.169-0.379-0.285-0.611-0.331s-0.471-0.023-0.689 0.069c-0.218 0.092-0.404 0.247-0.535 0.446s-0.201 0.433-0.201 0.672c0 0.321 0.126 0.629 0.349 0.856s0.527 0.355 0.844 0.355zM19.834 14.666c0.093 0 0.184 0.028 0.262 0.081s0.138 0.127 0.173 0.215c0.035 0.088 0.044 0.184 0.026 0.276s-0.064 0.178-0.13 0.244c-0.066 0.066-0.151 0.111-0.242 0.129s-0.186 0.008-0.272-0.029-0.159-0.099-0.21-0.178c-0.051-0.079-0.078-0.172-0.077-0.266 0.001-0.126 0.051-0.246 0.14-0.334s0.207-0.138 0.331-0.138z"}),l.createElement("path",{fill:"#407bff",d:"M15.677 14.066c0.236 0 0.467-0.071 0.663-0.204s0.349-0.322 0.439-0.543c0.090-0.221 0.114-0.464 0.068-0.699s-0.16-0.45-0.327-0.62c-0.167-0.169-0.38-0.285-0.611-0.331s-0.471-0.023-0.689 0.069c-0.218 0.092-0.404 0.247-0.536 0.446s-0.201 0.433-0.201 0.672c0 0.321 0.126 0.629 0.35 0.856s0.527 0.354 0.844 0.354zM15.677 12.379c0.093 0 0.184 0.028 0.261 0.080s0.138 0.127 0.173 0.214c0.036 0.087 0.045 0.183 0.027 0.276s-0.063 0.177-0.129 0.244c-0.066 0.067-0.15 0.112-0.241 0.131s-0.186 0.009-0.272-0.027-0.159-0.097-0.211-0.176c-0.052-0.079-0.079-0.171-0.079-0.265-0.003-0.065 0.006-0.129 0.028-0.19s0.056-0.116 0.1-0.164c0.044-0.047 0.097-0.084 0.156-0.11s0.122-0.039 0.186-0.039v0.026z"}),l.createElement("path",{fill:"#407bff",d:"M13.402 20.929c0.005 0.197 0.067 0.387 0.178 0.548s0.267 0.285 0.447 0.357c0.181 0.072 0.378 0.088 0.568 0.047s0.363-0.139 0.498-0.279c0.135-0.141 0.227-0.319 0.263-0.512s0.015-0.393-0.060-0.574c-0.075-0.181-0.202-0.336-0.363-0.445s-0.351-0.167-0.545-0.167c-0.264 0.007-0.514 0.118-0.699 0.309s-0.287 0.449-0.287 0.716zM14.388 20.662c0.052 0 0.103 0.016 0.146 0.045s0.077 0.071 0.097 0.12 0.025 0.102 0.015 0.154c-0.010 0.052-0.035 0.099-0.072 0.137s-0.084 0.063-0.135 0.073c-0.051 0.010-0.104 0.005-0.152-0.015s-0.089-0.054-0.118-0.098c-0.029-0.044-0.044-0.096-0.044-0.148 0-0.071 0.028-0.139 0.077-0.189s0.116-0.078 0.186-0.078z"}),l.createElement("path",{fill:"#407bff",d:"M18.17 19.816c0.202 0.007 0.402-0.048 0.574-0.157s0.306-0.269 0.388-0.457c0.081-0.188 0.105-0.397 0.068-0.599s-0.133-0.388-0.275-0.534c-0.143-0.146-0.325-0.245-0.524-0.285s-0.405-0.018-0.591 0.063c-0.186 0.081-0.345 0.216-0.454 0.389s-0.166 0.375-0.161 0.58c0.006 0.262 0.111 0.511 0.292 0.697s0.426 0.295 0.684 0.304zM18.17 18.549c0.070 0 0.137 0.028 0.186 0.078s0.077 0.118 0.077 0.189c0 0.071-0.028 0.139-0.077 0.189s-0.116 0.078-0.186 0.078c-0.070 0-0.138-0.028-0.188-0.078s-0.079-0.118-0.080-0.189c0-0.035 0.007-0.071 0.020-0.103s0.033-0.062 0.058-0.087 0.055-0.044 0.087-0.057c0.032-0.013 0.067-0.019 0.102-0.019z"}),l.createElement("path",{fill:"#407bff",d:"M20.253 11.538c0.2 0 0.395-0.060 0.562-0.173s0.296-0.273 0.372-0.46c0.077-0.187 0.097-0.394 0.058-0.593s-0.135-0.382-0.277-0.525c-0.141-0.143-0.322-0.241-0.518-0.281s-0.399-0.019-0.584 0.058c-0.185 0.078-0.343 0.209-0.454 0.378s-0.17 0.367-0.17 0.57c0 0.272 0.107 0.533 0.296 0.725s0.447 0.3 0.715 0.3zM20.253 10.271c0.039-0.011 0.080-0.013 0.12-0.006s0.078 0.024 0.11 0.049c0.032 0.025 0.059 0.057 0.077 0.094s0.028 0.078 0.028 0.119-0.009 0.082-0.028 0.119c-0.018 0.037-0.044 0.069-0.077 0.094s-0.070 0.042-0.11 0.049c-0.040 0.008-0.081 0.006-0.12-0.006-0.039 0.011-0.080 0.013-0.12 0.006s-0.078-0.024-0.11-0.049c-0.032-0.025-0.059-0.057-0.077-0.094s-0.028-0.078-0.028-0.119 0.009-0.082 0.028-0.119c0.018-0.037 0.044-0.069 0.077-0.094s0.070-0.042 0.11-0.049c0.040-0.008 0.081-0.006 0.12 0.006z"}),l.createElement("path",{fill:"#407bff",d:"M10.369 27.191c-0.045 0.021-0.086 0.052-0.119 0.089s-0.059 0.082-0.074 0.13c-0.016 0.048-0.021 0.099-0.017 0.149s0.019 0.099 0.043 0.144c0.031 0.060 0.078 0.11 0.135 0.145s0.122 0.054 0.189 0.055c0.056 0.002 0.112-0.011 0.162-0.036 1.545-0.803 3.255-1.225 4.99-1.231 1.837 0.027 3.648 0.441 5.319 1.215 0.066 0.035 0.141 0.049 0.215 0.039s0.143-0.042 0.198-0.093c0.055-0.051 0.094-0.118 0.11-0.192s0.010-0.151-0.018-0.221c-0.036-0.091-0.105-0.164-0.192-0.205-1.769-0.821-3.687-1.258-5.633-1.282-1.845 0.002-3.664 0.444-5.309 1.292z"})),Do=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:1024,height:1024,viewBox:"0 0 1024 1024",...e},l.createElement("title",null,"edit"),l.createElement("path",{fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:4,strokeWidth:42.6667,d:"M719.445 191.445l71.979-72.021c14.479-14.479 34.482-23.435 56.576-23.435 44.189 0 80.011 35.822 80.011 80.011 0 22.094-8.955 42.097-23.435 56.576l-453.077 453.077c-21.936 21.924-49.153 38.567-79.579 47.856l-1.36 0.357-114.56 34.133 34.133-114.56c9.647-31.785 26.289-59.002 48.214-80.94l381.098-381.055zM719.445 191.445l112.555 112.555M768 597.333v202.667c0 53.019-42.981 96-96 96v0h-448c-53.019 0-96-42.981-96-96v0-448c0-53.019 42.981-96 96-96v0h202.667"})),Wo=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:1024,height:1024,viewBox:"0 0 1024 1024",...e},l.createElement("title",null,"delete"),l.createElement("path",{fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:4,strokeWidth:42.6667,d:"M628.907 384l-14.763 384M409.856 768l-14.763-384M820.395 247.040c14.592 2.219 29.099 4.565 43.605 7.083M820.395 247.040l-45.568 592.341c-3.952 49.747-45.294 88.619-95.716 88.619-0.010 0-0.020 0-0.030 0h-334.164c-0.008 0-0.018 0-0.028 0-50.422 0-91.764-38.872-95.694-88.283l-0.021-0.336-45.568-592.341M820.395 247.040c-38.791-6.358-89.724-12.366-141.193-16.476l-7.202-0.463M203.605 247.040c-25.242 3.599-40.074 6.065-54.844 8.706l11.239-1.666M203.605 247.040c38.789-6.358 89.722-12.366 141.19-16.476l7.205-0.463M672 230.101v-39.083c0-50.347-38.827-92.331-89.173-93.909-21.11-0.721-45.921-1.132-70.827-1.132-24.908 0-49.719 0.411-74.428 1.226l3.602-0.094c-50.347 1.579-89.173 43.605-89.173 93.909v39.083M672 230.101c-47.901-3.932-103.689-6.173-160-6.173-56.31 0-112.097 2.241-167.276 6.64l7.276-0.466"})),Co=e=>l.createElement("svg",{fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:4,strokeWidth:42.6667,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...e},l.createElement("path",{d:"M512 256v512M768 512h-512"})),Oo=c.div`
  
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
 
`,Ro=c.ul`
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

  `,Mt=c.div`
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

`,Et=c.span`
color:${e=>e.theme.colors.primary.accent};


font-size: 18px;

font-weight: 400;
line-height: 1.33;
`,$t=c(jo)`
  fill:${e=>e.theme.colors.primary.accent};
  width: 26px;
  height: auto;


  @media (min-width: ${({theme:e})=>e.screens.tab}){
    width: 36px;
  }
  
`,Fo=c(Do)`
  stroke:  ${e=>e.theme.colors.secondary.color3};
  width: 16px;
  height: 16px;
`,No=c(Wo)`
   stroke: ${e=>e.theme.colors.secondary.color2};
  width: 16px;
  height: 16px;
`,zo=c.div`
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

`,Ho=c.button`

  &:hover::after {
   
    background-color: ${e=>e.theme.colors.primary.accent};
   
  }`,Lo=c.button`
 
 
  &:hover::after {
   
    background-color:  ${e=>e.theme.colors.secondary.color2};
    
  }`,St=c(Co)`
  fill: ${e=>e.theme.colors.primary.accent};
  stroke: ${e=>e.theme.colors.primary.accent};
  width: 16px;
  height: 16px;

  @media (min-width: ${({theme:e})=>e.screens.tab}){
    width: 24px;
  height: 24px;
  }
 
`,Ao=c.button`
display: flex;
align-items: center;
gap: 8px;

font-size: 16px;
font-weight: 500;
line-height: 1.25;
color: ${e=>e.theme.colors.primary.accent};


&:hover {
    color: ${e=>e.theme.colors.secondary.color4};
    ${St} {
      fill: ${e=>e.theme.colors.secondary.color4};
      stroke: ${e=>e.theme.colors.secondary.color4};
  }
}


@media (min-width: ${({theme:e})=>e.screens.tab}){
  font-size: 18px;
line-height: 1.33;
  }

`,Io=c.div`

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
`,Yo=c.div`
display: flex;
flex-direction: column-reverse;
gap: 24px;

@media (min-width: ${({theme:e})=>e.screens.tab}){
    flex-direction: row;
    justify-content: end;
}
`,Bo=c.button`

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

`,_o=c.button`

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
`,qo=({id:e})=>{const{closeModal:t}=l.useContext(xe),n=ge(),r=async()=>{await n(It(e)),t(),n(Pe())};return a.jsxs(Io,{children:[a.jsx("h3",{children:"Delete entry"}),a.jsx("p",{children:"Are you sure you want to delete the entry?"}),a.jsxs(Yo,{children:[a.jsx(Bo,{type:"button",onClick:()=>t(),children:"Cancel"}),a.jsx(_o,{type:"submit",onClick:r,children:"Delete"})]})]})};function Uo(e){return wt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.75 4.5a.75.75 0 0 1 .75.75V11h5.75a.75.75 0 0 1 0 1.5H12.5v5.75a.75.75 0 0 1-1.5 0V12.5H5.25a.75.75 0 0 1 0-1.5H11V5.25a.75.75 0 0 1 .75-.75Z"},child:[]}]})(e)}const Vo=c.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  justify-content: center;
  width: 256px;

  @media (min-width: ${({theme:e})=>e.screens.tab}) {
    width: 656px;
  }
  @media (min-width: ${({theme:e})=>e.screens.desk}) {
    width: 544px;
  }
`,Go=c.h3`
  font-size: 26px;
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 32px;
  width: 100%;
`,Xo=c.span`
  font-size: 18px;
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 20px;
  margin-bottom: 16px;
`,Qo=c.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  
`,Ko=c.label`
  display: flex;
  justify-content: flex-start;
  gap: 12px;
  flex-direction: column;
  width: 100%;
`,Jo=c.div`
  display: flex;
  flex-direction: row;
  gap: 7px;
  width: 100%;
`,Zo=c.span`
  font-size: 16px;
  font-weight: ${e=>e.theme.fontWeights.regular};
  line-height: 20px;
`,ea=c.label`
position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`,ta=c.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: ${e=>e.theme.colors.primary.text};
`,na=c.input`
display: flex;
justify-content: flex-start;
  padding: 12px 10px;
  border-radius: 6px;
  border: 1px solid ${e=>e.theme.colors.secondary.color5};
  outline: transparent;
  &:focus {
    border-color: ${e=>e.theme.colors.primary.accent};
  }
`,ra=c.label`
position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
`,oa=c.span`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  color: ${e=>e.theme.colors.primary.text};
`,aa=c.input`
  padding: 12px 10px;
  border-radius: 6px;
  border: 1px solid ${e=>e.theme.colors.secondary.color5};
  outline: transparent;
  &:focus {
    border-color: ${e=>e.theme.colors.primary.accent};
  }
   
`,sa=c.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
  gap: 16px;
  @media (min-width: ${({theme:e})=>e.screens.tab}) {
    gap: 16px;
    flex-direction: row;
  }
  @media (min-width: ${({theme:e})=>e.screens.desk}) {
  }
`,ia=c.span`
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
`,ca=c.button`
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
  width: 100%;
  height: 44px;
  border-radius: 10px;
  padding: 10px 30px;
  background-color: ${e=>e.theme.colors.primary.accent};
  @media (min-width: ${({theme:e})=>e.screens.tab}) {
    width: 160px;
  }
 
`,ut=c.button`
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
`,la=c(Uo)`
  fill: ${e=>e.theme.colors.primary.accent};
  stroke: ${e=>e.theme.colors.primary.accent};
  width: 16px;
  height: 16px;

  @media (min-width: ${({theme:e})=>e.screens.tab}) {
    width: 24px;
    height: 24px;
  }
`,da=c(Yt)`
  fill: ${e=>e.theme.colors.primary.accent};
  stroke: ${e=>e.theme.colors.primary.accent};
  width: 16px;
  height: 16px;

  @media (min-width: ${({theme:e})=>e.screens.tab}) {
    width: 24px;
    height: 24px;
  }
`,ua=c.span`

  font-size: 18px;
  font-weight: ${e=>e.theme.fontWeights.bolt};
  line-height: 24px;
  text-align: center;
  color: ${e=>e.theme.colors.primary.accent};
`,ht=c.span`
  position: absolute;
bottom:-16px;
left: 10px;
  color: red;
  font-size: 12px;
  line-height: 1.5;
  display: block;
  display: ${e=>e.hideonerror?"none":"block"};
`,ha=c(Mt)`
  display: flex;
  justify-content: flex-start;
  width: 254px;
  border-radius: 10px;
  background: ${e=>e.theme.colors.secondary.color1};
  padding: 8px 24px;
  
`;function fa(e){const t=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return`${t}-${n}-${r}`}const Tt=({portion:e})=>{const t=ge(),[n,r]=l.useState(0),[o,s]=l.useState(e?e.waterVolume:0),[i,u]=l.useState(ve(e?e.dateAdded:new Date)),[d,f]=l.useState(""),[p,g]=l.useState(""),[v,k]=l.useState(!1),{closeModal:x}=l.useContext(xe),{waterDayList:j}=me(),y=j||[],w=E=>{const D=parseFloat(E.target.value),H=Math.round(D);s(H)},m=()=>{k(!0),f(""),g("")},h=()=>{k(!1),r(o)},b=E=>{switch(E.currentTarget.id){case"increment":{const D=Math.min(o+50,3e3);s(D),r(D);break}case"decrement":{const D=o>0?o-50:0;s(D),r(D);break}}},P=async E=>{E.preventDefault();const B=fa(new Date)+"T"+i,F=new Date(B).toISOString();if(!o||o<50){g("Please enter the amount of water consumed.");return}if(o>3e3){g("Maximum allowed is 3000 ml.");return}if(e){const A={id:e._id,date:F,waterVolume:n};await t(Bt(A)),s(0),x(),t(Pe())}else{if(y?y.find(L=>L.dateAdded===F):F){f(" A portion already exists for this time.");return}await t(_t({waterVolume:n,date:F})),s(0),x(),t(Pe())}},O=e?"Edit the entered amount of water":"Add water",R=e?"Correct entered data: ":"Choose a value:";return a.jsxs(Vo,{children:[a.jsx(Go,{children:O}),e&&a.jsxs(ha,{children:[a.jsx($t,{}),a.jsx(Et,{children:`${e.waterVolume} ml `}),a.jsx("span",{children:ve(e.dateAdded,!0)})]}),y.length===0&&a.jsx("p",{children:"No notes yet"}),a.jsxs(Qo,{children:[a.jsx(Xo,{children:R}),a.jsxs(Ko,{children:[a.jsx(Zo,{children:"Amount of water:"}),a.jsxs(Jo,{children:[a.jsx(ut,{onClick:b,id:"decrement",children:a.jsx(da,{})}),a.jsxs(ia,{children:[" ",o||0," ml"]}),a.jsx(ut,{onClick:b,id:"increment",children:a.jsx(la,{})})]})]})]}),a.jsxs(ea,{children:[a.jsx(ta,{children:"Recording time:"}),a.jsx(na,{type:"time",value:i,onChange:E=>u(E.target.value)}),d&&a.jsxs(ht,{children:["⚠ ",d]})]}),a.jsxs(ra,{children:[a.jsx(oa,{children:"Enter the value of the water used:"}),a.jsx(aa,{name:"waterUsed",type:"number",step:50,value:o,onChange:w,onFocus:m,onBlur:h,pattern:"[0-9]{1,4}",max:3e3,required:!0}),p&&a.jsxs(ht,{hideonerror:v,children:[" ⚠ ",p]})]}),a.jsxs(sa,{children:[a.jsxs(ua,{children:[" ",n||0," ml"]}),a.jsx(ca,{onClick:P,children:"Save"})]})]})},ma=({handleAddWaterClick:e})=>{const{openModal:t}=l.useContext(xe),n=me().waterDayList,r=ge();l.useEffect(()=>{r(Pe())},[r]);const o=i=>{t(a.jsx(a.Fragment,{children:a.jsx(qo,{id:i})}))},s=i=>{t(a.jsx(a.Fragment,{children:a.jsx(Tt,{portion:i})}))};return a.jsxs(Oo,{children:[a.jsx("h3",{children:"Today"}),n&&n.length>0&&a.jsx(Ro,{children:n.map(i=>a.jsxs("li",{children:[a.jsxs(Mt,{children:[a.jsx($t,{}),a.jsx(Et,{children:`${i.waterVolume} ml `}),a.jsx("span",{children:ve(i.dateAdded,!0)})]}),a.jsxs(zo,{children:[a.jsx(Ho,{onClick:()=>s(i),children:a.jsx(Fo,{})}),a.jsx(Lo,{onClick:()=>o(i._id),children:a.jsx(No,{})})]})]},i._id))}),a.jsxs(Ao,{onClick:e,children:[a.jsx(St,{})," Add water"]})]})},pa=c.div`
  padding: 8px 20px 8px 20px;
  border: 1px solid;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 164px;
  margin-top: 30px;
  border-radius: 10px;
  border-color: ${e=>e.theme.colors.secondary.color1};
`,ga=c.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
  justify-content: left;
`,xa=c.p`
  font-size: 18px;
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 24px;
  color: ${e=>e.theme.colors.primary.text};
  white-space: nowrap;
`,wa=c.button`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  color: #8baeff;
`,ba=c.p`
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  color: ${e=>e.theme.colors.primary.accent};
`,ya=c.div`
  width: 256px;
  @media (min-width: ${({theme:e})=>e.screens.tab}) {
    width: 656px;
  }
  @media (min-width: ${({theme:e})=>e.screens.desk}) {
    width: 544px;
  }
`,va=c.h2`
  font-size: 26px;
  font-weight: 500;
  line-height: 32px;
  color: ${e=>e.theme.colors.primary.text};
`,ka=c.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
  margin-bottom: 12px;
  @media (min-width: ${({theme:e})=>e.screens.tab}) {
    flex-direction: row;
    gap: 24px;
  }
  @media (min-width: ${({theme:e})=>e.screens.desk}) {
   widht: 100%;
  }
`,oe=c.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: ${e=>e.theme.colors.primary.text};
`,Pa=c.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: ${e=>e.theme.colors.primary.text};
  width: 255px;
  @media (min-width: ${({theme:e})=>e.screens.tab}) {
    width: 100%;
  }
  @media (min-width: ${({theme:e})=>e.screens.desk}) {
    width: 100%;
  }
`,ft=c.span`
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  color: ${e=>e.theme.colors.primary.accent};
`,Ma=c.div`
  width: 256px;
  border: 1px solid;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 24px;
  border-color: ${e=>e.theme.colors.secondary.color5};
  @media (min-width: ${({theme:e})=>e.screens.tab}) {
    width: 100%;
  }
`,Ea=c.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #8f8f8f;
`,$a=c.span`
  color: ${e=>e.theme.colors.primary.accent};
`,Sa=c.form`
  display: flex;
  flex-direction: column;
`,mt=c.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  color: ${e=>e.theme.colors.primary.text};
`,pt=c.label`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`,gt=c.input`
  width: 14px;
  height: 14px;
  border: 1px solid;
  border-color: ${e=>e.theme.colors.primary.accent};
  color: ${e=>e.theme.colors.primary.bg};
  border-radius: 50%;
`,Ta=c.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`,xt=c.label`
  width: 100%;
  display: flex;
  gap: 8px;
  flex-direction: column;
  @media (min-width: ${({theme:e})=>e.screens.tab}) {
    width: 100%;
  }
  @media (min-width: ${({theme:e})=>e.screens.desk}) {
    width: 100%;
  }
`,He=c.input`
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
`,ja=c.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`,Da=c.label`
  width: 100%;
  display: flex;
  gap: 16px;
  flex-direction: column;
  margin-bottom: 24px;
  @media (min-width: ${({theme:e})=>e.screens.tab}) {
    width: 100%;
  }
  @media (min-width: ${({theme:e})=>e.screens.desk}) {
    width: 100%;
  }
`,Wa=c.button`
  border-radius: 10px;
  padding: 10px 30px;
  width: 100%;
  color: ${e=>e.theme.colors.primary.bg};
  background-color: ${e=>e.theme.colors.primary.accent};
  @media (min-width: ${({theme:e})=>e.screens.tab}) {
    width: 160px;
  }
`,Ca=c.div`
  width: 100%;
  display: flex;
  justify-content: end;
  @media (min-width: ${({theme:e})=>e.screens.tab}) {
    width: 100%;
  }
  @media (min-width: ${({theme:e})=>e.screens.desk}) {
    width: 100%;
  }
`,Oa=c.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (min-width: ${({theme:e})=>e.screens.tab}) {
    width: 100%;
  }
  @media (min-width: ${({theme:e})=>e.screens.desk}) {
    width: 100%;
  }
`,Ra=c.span`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: ${e=>e.theme.colors.primary.accent};
`;c.svg`
  background-color:;
`;const Fa=()=>{const e=ge(),{user:t}=Se(),n={weight:.03,activity:.04},r={weight:.04,activity:.06},[o,s]=l.useState(r),[i,u]=l.useState(""),[d,f]=l.useState(""),[p,g]=l.useState(""),v=t.waterRate,{closeModal:k}=l.useContext(xe),x=l.useCallback(()=>!i||!d?void 0:(i*o.weight+d/60*o.activity).toFixed(1),[o,i,d]),j=l.useMemo(()=>x(),[x]),y=m=>{const h=m.target.value,b=parseFloat(h);!isNaN(b)&&b>=1?g(b):h===""&&g("")},w=m=>{m.preventDefault();const h=parseFloat(j);if(!(d>0&&i>0||p>0)){alert("Fill all fields");return}e(qt(p||h)).then(P=>{P.error?(console.log(P.error),alert("Something went wrong ")):(k(),u(""),f(""),g(""))})};return a.jsxs(ya,{children:[a.jsx(Oa,{children:a.jsx(va,{children:"My daily norma"})}),a.jsxs(ka,{children:[a.jsxs(oe,{children:["For girl: ",a.jsx(ft,{children:"V=(M*0,03) + (T*0,4)"})]}),a.jsxs(oe,{children:["For man: ",a.jsx(ft,{children:"V=(M*0,04) + (T*0,6)"})]})]}),a.jsx(Ma,{children:a.jsxs(Ea,{children:[a.jsx($a,{children:"*"})," V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]})}),a.jsxs(Sa,{children:[a.jsxs(ja,{children:[a.jsx(mt,{children:"Calculate your rate:"}),a.jsxs(Ta,{children:[a.jsxs(pt,{children:[a.jsx(gt,{type:"radio",name:"gender",value:"woman",onChange:()=>s(n),checked:!0}),a.jsx(oe,{children:"For woman"})]}),a.jsxs(pt,{children:[a.jsx(gt,{type:"radio",name:"gender",value:"man",onChange:()=>s(r)}),a.jsx(oe,{children:"For man"})]})]}),a.jsxs(xt,{children:[a.jsx(oe,{children:"Your weight in kilograms:"}),a.jsx(He,{type:"number",name:"userWeight",placeholder:"0",value:i,min:0,max:250,onChange:m=>u(m.target.value)})]}),a.jsxs(xt,{children:[a.jsx(oe,{children:"The time of active participation in sports or other activities with a high physical. load in hours:"}),a.jsx(He,{type:"number",name:"userActive",placeholder:"0",value:d,min:0,onChange:m=>f(m.target.value)})]}),a.jsxs(Pa,{children:["The required amount of water in liters per day:",a.jsxs(Ra,{children:[" ",j||(v/1e3).toFixed(1)," L"]})]})]}),a.jsxs(Da,{children:[a.jsx(mt,{children:"Write down how much water you will drink:"}),a.jsx(He,{type:"number",name:"userWaterPredict",placeholder:"0",value:p,min:0,onChange:y})]}),a.jsx(Ca,{children:a.jsx(Wa,{onClick:w,children:"Save"})})]})]})},Na=({handleDailyNormaModal:e})=>{const{user:t}=Se(),n=t.waterRate,r=(n/1e3).toFixed(1);return a.jsxs(pa,{children:[a.jsx(xa,{children:"My daily norma"}),a.jsxs(ga,{children:[a.jsxs(ba,{children:[r||n," L"]}),a.jsx(wa,{onClick:e,children:"Edit"})]})]})};function za(e){return wt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Circle_Plus"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M15,12.5H12.5V15a.5.5,0,0,1-1,0V12.5H9a.5.5,0,0,1,0-1h2.5V9a.5.5,0,0,1,1,0v2.5H15A.5.5,0,0,1,15,12.5Z"},child:[]},{tag:"path",attr:{d:"M12,21.932A9.934,9.934,0,1,1,21.932,12,9.944,9.944,0,0,1,12,21.932ZM12,3.065A8.934,8.934,0,1,0,20.932,12,8.944,8.944,0,0,0,12,3.065Z"},child:[]}]}]}]})(e)}const Ha=c.input`
  // background: ${e=>e.theme.colors.secondary.color5};
  // -webkit-appearance: none;
  // appearance: none;
  // border-radius: 10px;
  width: 256px;
  margin-left: 11px;
  @media (min-width: ${({theme:e})=>e.screens.tab}) {
    width: 325px;
  }
  @media (min-width: ${({theme:e})=>e.screens.desk}) {
    width: 360px;
  }
`,La=c.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 16px;
  @media (min-width: ${({theme:e})=>e.screens.tab}) {
    flex-direction: row;
    
    gap: 12px;
  }
  @media (min-width: ${({theme:e})=>e.screens.desk}) {
    gap: 23px;
    width: 600px;
    
    justify-content: flex-start;
  }
`,Aa=c.div`
  height: 100%;
  position: relative;
  width: 280px;
  display: flex;
  height: 82px;
  @media (min-width: ${({theme:e})=>e.screens.tab}) {
    width: 356px;
  }
  @media (min-width: ${({theme:e})=>e.screens.desk}) {
    width: 391px;
  }
`,Ia=c.span`
  font-size: 18px;
  position: absolute;
  top: 0;
  left: 0;
  font-weight: ${e=>e.theme.fontWeights.regular};
  line-height: 24px;
  color: ${e=>e.theme.colors.primary.accent};
`,jt=c(za)`
  fill: ${e=>e.theme.colors.primary.bg};
  stroke: ${e=>e.theme.colors.primary.bg};
  width: 16px;
  height: 16px;

  @media (min-width: ${({theme:e})=>e.screens.tab}) {
    width: 24px;
    height: 24px;
  }
`,Ya=c.button`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: flex-start;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  width: 280px;
  justify-content: center;
  color: ${e=>e.theme.colors.primary.bg};
  background-color: ${e=>e.theme.colors.primary.accent};
  border: 1px;
  border-radius: 10px;
  padding: 10px 30px;
  border-r &:hover {
    color: ${e=>e.theme.colors.secondary.color4};
    ${jt} {
      fill: ${e=>e.theme.colors.secondary.color4};
      stroke: ${e=>e.theme.colors.secondary.color4};
    }
  }

  @media (min-width: ${({theme:e})=>e.screens.tab}) {
    line-height: 24px;
    width: 336px;
    font-size: 18px;
  }
  @media (min-width: ${({theme:e})=>e.screens.desk}) {
    width: 178px;
  }
`,Ba=({handleAddWaterClick:e,calcRange:t})=>a.jsxs(La,{children:[a.jsxs(Aa,{children:[a.jsx(Ia,{children:"Today"}),a.jsx(Ha,{type:"range",min:"0",max:"100",value:t||0,readOnly:!0})]}),a.jsxs(Ya,{onClick:e,children:[a.jsx(jt,{})," Add water"]})]}),Ua=()=>{const{openModal:e}=l.useContext(xe),n=me().waterDayList.map(i=>i.percentage);let r=0;n.forEach(i=>{r+=i});const o=()=>{e(a.jsx(a.Fragment,{children:a.jsx(Tt,{})}))},s=()=>{e(a.jsx(a.Fragment,{children:a.jsx(Fa,{})}))};return a.jsxs($o,{children:[a.jsxs(So,{children:[a.jsx(Na,{handleDailyNormaModal:s}),a.jsx(Ba,{handleAddWaterClick:o,calcRange:r})]}),a.jsxs(To,{children:[a.jsx(ma,{handleAddWaterClick:o}),a.jsx(xo,{})]})]})};export{Ua as default};
