import{o as V,r as l,h as ke,j as a,i as Ge,k as Dt,l as $,m as $t,n as ae,T as Ct,p as Wt,q as Ue,v as Fe,w as Ne,x as pe,y as Le,z as ue,A as ze,B as we,C as Ot,D as Rt,E as Ft,I as Nt,u as c,b as Pe,J as je,c as me,K as Lt,M as He,O as zt,Q as Ae,G as gt,R as Ht,S as At,U as Yt,V as Bt}from"./index-2c4545b8.js";import{b as It,a as _t}from"./backgroundElementMainPageDesk2x@2-f75c1b59.js";import{b as qt,a as Vt}from"./BackgroundHomeTab2x-a86d5447.js";function Qe(...e){return e.reduce((t,n)=>n==null?t:function(...o){t.apply(this,o),n.apply(this,o)},()=>{})}function Gt(e,t=166){let n;function r(...o){const s=()=>{e.apply(this,o)};clearTimeout(n),n=setTimeout(s,t)}return r.clear=()=>{clearTimeout(n)},r}function he(e){return V(e).defaultView||window}function Ut(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}const Qt=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function Xt(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function Kt(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=r=>e.ownerDocument.querySelector(`input[type="radio"]${r}`);let n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}function Jt(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||Kt(e))}function Zt(e){const t=[],n=[];return Array.from(e.querySelectorAll(Qt)).forEach((r,o)=>{const s=Xt(r);s===-1||!Jt(r)||(s===0?t.push(r):n.push({documentOrder:o,tabIndex:s,node:r}))}),n.sort((r,o)=>r.tabIndex===o.tabIndex?r.documentOrder-o.documentOrder:r.tabIndex-o.tabIndex).map(r=>r.node).concat(t)}function en(){return!0}function tn(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:r=!1,disableRestoreFocus:o=!1,getTabbable:s=Zt,isEnabled:i=en,open:d}=e,h=l.useRef(!1),f=l.useRef(null),x=l.useRef(null),g=l.useRef(null),k=l.useRef(null),w=l.useRef(!1),m=l.useRef(null),j=ke(t.ref,m),y=l.useRef(null);l.useEffect(()=>{!d||!m.current||(w.current=!n)},[n,d]),l.useEffect(()=>{if(!d||!m.current)return;const u=V(m.current);return m.current.contains(u.activeElement)||(m.current.hasAttribute("tabIndex")||m.current.setAttribute("tabIndex","-1"),w.current&&m.current.focus()),()=>{o||(g.current&&g.current.focus&&(h.current=!0,g.current.focus()),g.current=null)}},[d]),l.useEffect(()=>{if(!d||!m.current)return;const u=V(m.current),v=C=>{y.current=C,!(r||!i()||C.key!=="Tab")&&u.activeElement===m.current&&C.shiftKey&&(h.current=!0,x.current&&x.current.focus())},P=()=>{const C=m.current;if(C===null)return;if(!u.hasFocus()||!i()||h.current){h.current=!1;return}if(C.contains(u.activeElement)||r&&u.activeElement!==f.current&&u.activeElement!==x.current)return;if(u.activeElement!==k.current)k.current=null;else if(k.current!==null)return;if(!w.current)return;let F=[];if((u.activeElement===f.current||u.activeElement===x.current)&&(F=s(m.current)),F.length>0){var A,L;const q=!!((A=y.current)!=null&&A.shiftKey&&((L=y.current)==null?void 0:L.key)==="Tab"),N=F[0],H=F[F.length-1];typeof N!="string"&&typeof H!="string"&&(q?H.focus():N.focus())}else C.focus()};u.addEventListener("focusin",P),u.addEventListener("keydown",v,!0);const W=setInterval(()=>{u.activeElement&&u.activeElement.tagName==="BODY"&&P()},50);return()=>{clearInterval(W),u.removeEventListener("focusin",P),u.removeEventListener("keydown",v,!0)}},[n,r,o,i,d,s]);const b=u=>{g.current===null&&(g.current=u.relatedTarget),w.current=!0,k.current=u.target;const v=t.props.onFocus;v&&v(u)},p=u=>{g.current===null&&(g.current=u.relatedTarget),w.current=!0};return a.jsxs(l.Fragment,{children:[a.jsx("div",{tabIndex:d?0:-1,onFocus:p,ref:f,"data-testid":"sentinelStart"}),l.cloneElement(t,{ref:j,onFocus:b}),a.jsx("div",{tabIndex:d?0:-1,onFocus:p,ref:x,"data-testid":"sentinelEnd"})]})}function nn(e){const t=V(e);return t.body===e?he(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function de(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function Xe(e){return parseInt(he(e).getComputedStyle(e).paddingRight,10)||0}function rn(e){const n=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,r=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return n||r}function Ke(e,t,n,r,o){const s=[t,n,...r];[].forEach.call(e.children,i=>{const d=s.indexOf(i)===-1,h=!rn(i);d&&h&&de(i,o)})}function De(e,t){let n=-1;return e.some((r,o)=>t(r)?(n=o,!0):!1),n}function on(e,t){const n=[],r=e.container;if(!t.disableScrollLock){if(nn(r)){const i=Ut(V(r));n.push({value:r.style.paddingRight,property:"padding-right",el:r}),r.style.paddingRight=`${Xe(r)+i}px`;const d=V(r).querySelectorAll(".mui-fixed");[].forEach.call(d,h=>{n.push({value:h.style.paddingRight,property:"padding-right",el:h}),h.style.paddingRight=`${Xe(h)+i}px`})}let s;if(r.parentNode instanceof DocumentFragment)s=V(r).body;else{const i=r.parentElement,d=he(r);s=(i==null?void 0:i.nodeName)==="HTML"&&d.getComputedStyle(i).overflowY==="scroll"?i:r}n.push({value:s.style.overflow,property:"overflow",el:s},{value:s.style.overflowX,property:"overflow-x",el:s},{value:s.style.overflowY,property:"overflow-y",el:s}),s.style.overflow="hidden"}return()=>{n.forEach(({value:s,el:i,property:d})=>{s?i.style.setProperty(d,s):i.style.removeProperty(d)})}}function an(e){const t=[];return[].forEach.call(e.children,n=>{n.getAttribute("aria-hidden")==="true"&&t.push(n)}),t}class sn{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,n){let r=this.modals.indexOf(t);if(r!==-1)return r;r=this.modals.length,this.modals.push(t),t.modalRef&&de(t.modalRef,!1);const o=an(n);Ke(n,t.mount,t.modalRef,o,!0);const s=De(this.containers,i=>i.container===n);return s!==-1?(this.containers[s].modals.push(t),r):(this.containers.push({modals:[t],container:n,restore:null,hiddenSiblings:o}),r)}mount(t,n){const r=De(this.containers,s=>s.modals.indexOf(t)!==-1),o=this.containers[r];o.restore||(o.restore=on(o,n))}remove(t,n=!0){const r=this.modals.indexOf(t);if(r===-1)return r;const o=De(this.containers,i=>i.modals.indexOf(t)!==-1),s=this.containers[o];if(s.modals.splice(s.modals.indexOf(t),1),this.modals.splice(r,1),s.modals.length===0)s.restore&&s.restore(),t.modalRef&&de(t.modalRef,n),Ke(s.container,t.mount,t.modalRef,s.hiddenSiblings,!1),this.containers.splice(o,1);else{const i=s.modals[s.modals.length-1];i.modalRef&&de(i.modalRef,!1)}return r}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}function cn(e){return typeof e=="function"?e():e}function ln(e){return e?e.props.hasOwnProperty("in"):!1}const dn=new sn;function un(e){const{container:t,disableEscapeKeyDown:n=!1,disableScrollLock:r=!1,manager:o=dn,closeAfterTransition:s=!1,onTransitionEnter:i,onTransitionExited:d,children:h,onClose:f,open:x,rootRef:g}=e,k=l.useRef({}),w=l.useRef(null),m=l.useRef(null),j=ke(m,g),[y,b]=l.useState(!x),p=ln(h);let u=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(u=!1);const v=()=>V(w.current),P=()=>(k.current.modalRef=m.current,k.current.mount=w.current,k.current),W=()=>{o.mount(P(),{disableScrollLock:r}),m.current&&(m.current.scrollTop=0)},C=Ge(()=>{const E=cn(t)||v().body;o.add(P(),E),m.current&&W()}),F=l.useCallback(()=>o.isTopModal(P()),[o]),A=Ge(E=>{w.current=E,E&&(x&&F()?W():m.current&&de(m.current,u))}),L=l.useCallback(()=>{o.remove(P(),u)},[u,o]);l.useEffect(()=>()=>{L()},[L]),l.useEffect(()=>{x?C():(!p||!s)&&L()},[x,L,p,s,C]);const q=E=>D=>{var Y;(Y=E.onKeyDown)==null||Y.call(E,D),!(D.key!=="Escape"||D.which===229||!F())&&(n||(D.stopPropagation(),f&&f(D,"escapeKeyDown")))},N=E=>D=>{var Y;(Y=E.onClick)==null||Y.call(E,D),D.target===D.currentTarget&&f&&f(D,"backdropClick")};return{getRootProps:(E={})=>{const D=Dt(e);delete D.onTransitionEnter,delete D.onTransitionExited;const Y=$({},D,E);return $({role:"presentation"},Y,{onKeyDown:q(Y),ref:j})},getBackdropProps:(E={})=>{const D=E;return $({"aria-hidden":!0},D,{onClick:N(D),open:x})},getTransitionProps:()=>{const E=()=>{b(!1),i&&i()},D=()=>{b(!0),d&&d(),s&&L()};return{onEnter:Qe(E,h==null?void 0:h.props.onEnter),onExited:Qe(D,h==null?void 0:h.props.onExited)}},rootRef:j,portalRef:A,isTopModal:F,exited:y,hasTransition:p}}const hn=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],fn={entering:{opacity:1},entered:{opacity:1}},pn=l.forwardRef(function(t,n){const r=$t(),o={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:s,appear:i=!0,children:d,easing:h,in:f,onEnter:x,onEntered:g,onEntering:k,onExit:w,onExited:m,onExiting:j,style:y,timeout:b=o,TransitionComponent:p=Ct}=t,u=ae(t,hn),v=l.useRef(null),P=ke(v,d.ref,n),W=T=>z=>{if(T){const E=v.current;z===void 0?T(E):T(E,z)}},C=W(k),F=W((T,z)=>{Wt(T);const E=Ue({style:y,timeout:b,easing:h},{mode:"enter"});T.style.webkitTransition=r.transitions.create("opacity",E),T.style.transition=r.transitions.create("opacity",E),x&&x(T,z)}),A=W(g),L=W(j),q=W(T=>{const z=Ue({style:y,timeout:b,easing:h},{mode:"exit"});T.style.webkitTransition=r.transitions.create("opacity",z),T.style.transition=r.transitions.create("opacity",z),w&&w(T)}),N=W(m),H=T=>{s&&s(v.current,T)};return a.jsx(p,$({appear:i,in:f,nodeRef:v,onEnter:F,onEntered:A,onEntering:C,onExit:q,onExited:N,onExiting:L,addEndListener:H,timeout:b},u,{children:(T,z)=>l.cloneElement(d,$({style:$({opacity:0,visibility:T==="exited"&&!f?"hidden":void 0},fn[T],y,d.props.style),ref:P},z))}))}),mn=pn;function gn(e){return Fe("MuiBackdrop",e)}Ne("MuiBackdrop",["root","invisible"]);const xn=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],bn=e=>{const{classes:t,invisible:n}=e;return ze({root:["root",n&&"invisible"]},gn,t)},wn=pe("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})(({ownerState:e})=>$({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),yn=l.forwardRef(function(t,n){var r,o,s;const i=Le({props:t,name:"MuiBackdrop"}),{children:d,className:h,component:f="div",components:x={},componentsProps:g={},invisible:k=!1,open:w,slotProps:m={},slots:j={},TransitionComponent:y=mn,transitionDuration:b}=i,p=ae(i,xn),u=$({},i,{component:f,invisible:k}),v=bn(u),P=(r=m.root)!=null?r:g.root;return a.jsx(y,$({in:w,timeout:b},p,{children:a.jsx(wn,$({"aria-hidden":!0},P,{as:(o=(s=j.root)!=null?s:x.Root)!=null?o:f,className:ue(v.root,h,P==null?void 0:P.className),ownerState:$({},u,P==null?void 0:P.ownerState),classes:v,ref:n,children:d}))}))}),vn=yn;function kn(e){return Fe("MuiModal",e)}Ne("MuiModal",["root","hidden","backdrop"]);const Pn=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],Mn=e=>{const{open:t,exited:n,classes:r}=e;return ze({root:["root",!t&&n&&"hidden"],backdrop:["backdrop"]},kn,r)},En=pe("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})(({theme:e,ownerState:t})=>$({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),Sn=pe(vn,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),Tn=l.forwardRef(function(t,n){var r,o,s,i,d,h;const f=Le({name:"MuiModal",props:t}),{BackdropComponent:x=Sn,BackdropProps:g,className:k,closeAfterTransition:w=!1,children:m,container:j,component:y,components:b={},componentsProps:p={},disableAutoFocus:u=!1,disableEnforceFocus:v=!1,disableEscapeKeyDown:P=!1,disablePortal:W=!1,disableRestoreFocus:C=!1,disableScrollLock:F=!1,hideBackdrop:A=!1,keepMounted:L=!1,onBackdropClick:q,open:N,slotProps:H,slots:T}=f,z=ae(f,Pn),E=$({},f,{closeAfterTransition:w,disableAutoFocus:u,disableEnforceFocus:v,disableEscapeKeyDown:P,disablePortal:W,disableRestoreFocus:C,disableScrollLock:F,hideBackdrop:A,keepMounted:L}),{getRootProps:D,getBackdropProps:Y,getTransitionProps:ge,portalRef:Ee,isTopModal:xe,exited:I,hasTransition:be}=un($({},E,{rootRef:n})),X=$({},E,{exited:I}),G=Mn(X),Z={};if(m.props.tabIndex===void 0&&(Z.tabIndex="-1"),be){const{onEnter:S,onExited:R}=ge();Z.onEnter=S,Z.onExited=R}const ee=(r=(o=T==null?void 0:T.root)!=null?o:b.Root)!=null?r:En,se=(s=(i=T==null?void 0:T.backdrop)!=null?i:b.Backdrop)!=null?s:x,ie=(d=H==null?void 0:H.root)!=null?d:p.root,te=(h=H==null?void 0:H.backdrop)!=null?h:p.backdrop,Se=we({elementType:ee,externalSlotProps:ie,externalForwardedProps:z,getSlotProps:D,additionalProps:{ref:n,as:y},ownerState:X,className:ue(k,ie==null?void 0:ie.className,G==null?void 0:G.root,!X.open&&X.exited&&(G==null?void 0:G.hidden))}),Te=we({elementType:se,externalSlotProps:te,additionalProps:g,getSlotProps:S=>Y($({},S,{onClick:R=>{q&&q(R),S!=null&&S.onClick&&S.onClick(R)}})),className:ue(te==null?void 0:te.className,g==null?void 0:g.className,G==null?void 0:G.backdrop),ownerState:X});return!L&&!N&&(!be||I)?null:a.jsx(Ot,{ref:Ee,container:j,disablePortal:W,children:a.jsxs(ee,$({},Se,{children:[!A&&x?a.jsx(se,$({},Te)):null,a.jsx(tn,{disableEnforceFocus:v,disableAutoFocus:u,disableRestoreFocus:C,isEnabled:xe,open:N,children:l.cloneElement(m,Z)})]}))})}),jn=Tn;function Dn(e){return Fe("MuiPopover",e)}Ne("MuiPopover",["root","paper"]);const $n=["onEntering"],Cn=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps","disableScrollLock"],Wn=["slotProps"];function Je(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.height/2:t==="bottom"&&(n=e.height),n}function Ze(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.width/2:t==="right"&&(n=e.width),n}function et(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function $e(e){return typeof e=="function"?e():e}const On=e=>{const{classes:t}=e;return ze({root:["root"],paper:["paper"]},Dn,t)},Rn=pe(jn,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Fn=pe(Rt,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),Nn=l.forwardRef(function(t,n){var r,o,s;const i=Le({props:t,name:"MuiPopover"}),{action:d,anchorEl:h,anchorOrigin:f={vertical:"top",horizontal:"left"},anchorPosition:x,anchorReference:g="anchorEl",children:k,className:w,container:m,elevation:j=8,marginThreshold:y=16,open:b,PaperProps:p={},slots:u,slotProps:v,transformOrigin:P={vertical:"top",horizontal:"left"},TransitionComponent:W=Nt,transitionDuration:C="auto",TransitionProps:{onEntering:F}={},disableScrollLock:A=!1}=i,L=ae(i.TransitionProps,$n),q=ae(i,Cn),N=(r=v==null?void 0:v.paper)!=null?r:p,H=l.useRef(),T=ke(H,N.ref),z=$({},i,{anchorOrigin:f,anchorReference:g,elevation:j,marginThreshold:y,externalPaperSlotProps:N,transformOrigin:P,TransitionComponent:W,transitionDuration:C,TransitionProps:L}),E=On(z),D=l.useCallback(()=>{if(g==="anchorPosition")return x;const S=$e(h),B=(S&&S.nodeType===1?S:V(H.current).body).getBoundingClientRect();return{top:B.top+Je(B,f.vertical),left:B.left+Ze(B,f.horizontal)}},[h,f.horizontal,f.vertical,x,g]),Y=l.useCallback(S=>({vertical:Je(S,P.vertical),horizontal:Ze(S,P.horizontal)}),[P.horizontal,P.vertical]),ge=l.useCallback(S=>{const R={width:S.offsetWidth,height:S.offsetHeight},B=Y(R);if(g==="none")return{top:null,left:null,transformOrigin:et(B)};const Ye=D();let ne=Ye.top-B.vertical,re=Ye.left-B.horizontal;const Be=ne+R.height,Ie=re+R.width,_e=he($e(h)),qe=_e.innerHeight-y,Ve=_e.innerWidth-y;if(y!==null&&ne<y){const _=ne-y;ne-=_,B.vertical+=_}else if(y!==null&&Be>qe){const _=Be-qe;ne-=_,B.vertical+=_}if(y!==null&&re<y){const _=re-y;re-=_,B.horizontal+=_}else if(Ie>Ve){const _=Ie-Ve;re-=_,B.horizontal+=_}return{top:`${Math.round(ne)}px`,left:`${Math.round(re)}px`,transformOrigin:et(B)}},[h,g,D,Y,y]),[Ee,xe]=l.useState(b),I=l.useCallback(()=>{const S=H.current;if(!S)return;const R=ge(S);R.top!==null&&(S.style.top=R.top),R.left!==null&&(S.style.left=R.left),S.style.transformOrigin=R.transformOrigin,xe(!0)},[ge]);l.useEffect(()=>(A&&window.addEventListener("scroll",I),()=>window.removeEventListener("scroll",I)),[h,A,I]);const be=(S,R)=>{F&&F(S,R),I()},X=()=>{xe(!1)};l.useEffect(()=>{b&&I()}),l.useImperativeHandle(d,()=>b?{updatePosition:()=>{I()}}:null,[b,I]),l.useEffect(()=>{if(!b)return;const S=Gt(()=>{I()}),R=he(h);return R.addEventListener("resize",S),()=>{S.clear(),R.removeEventListener("resize",S)}},[h,b,I]);let G=C;C==="auto"&&!W.muiSupportAuto&&(G=void 0);const Z=m||(h?V($e(h)).body:void 0),ee=(o=u==null?void 0:u.root)!=null?o:Rn,se=(s=u==null?void 0:u.paper)!=null?s:Fn,ie=we({elementType:se,externalSlotProps:$({},N,{style:Ee?N.style:$({},N.style,{opacity:0})}),additionalProps:{elevation:j,ref:T},ownerState:z,className:ue(E.paper,N==null?void 0:N.className)}),te=we({elementType:ee,externalSlotProps:(v==null?void 0:v.root)||{},externalForwardedProps:q,additionalProps:{ref:n,slotProps:{backdrop:{invisible:!0}},container:Z,open:b},ownerState:z,className:ue(E.root,w)}),{slotProps:Se}=te,Te=ae(te,Wn);return a.jsx(ee,$({},Te,!Ft(ee)&&{slotProps:Se,disableScrollLock:A},{children:a.jsx(W,$({appear:!0,in:b,onEntering:be,onExited:X,timeout:G},L,{children:a.jsx(se,$({},ie,{children:k}))}))}))}),Ln=Nn;function O(e){const t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new e.constructor(+e):typeof e=="number"||t==="[object Number]"||typeof e=="string"||t==="[object String]"?new Date(e):new Date(NaN)}function U(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}function Ce(e,t){const n=O(e);if(isNaN(t))return U(e,NaN);if(!t)return n;const r=n.getDate(),o=U(e,n.getTime());o.setMonth(n.getMonth()+t+1,0);const s=o.getDate();return r>=s?o:(n.setFullYear(o.getFullYear(),o.getMonth(),r),n)}const xt=6048e5,zn=864e5;let Hn={};function Me(){return Hn}function fe(e,t){var d,h,f,x;const n=Me(),r=(t==null?void 0:t.weekStartsOn)??((h=(d=t==null?void 0:t.locale)==null?void 0:d.options)==null?void 0:h.weekStartsOn)??n.weekStartsOn??((x=(f=n.locale)==null?void 0:f.options)==null?void 0:x.weekStartsOn)??0,o=O(e),s=o.getDay(),i=(s<r?7:0)+s-r;return o.setDate(o.getDate()-i),o.setHours(0,0,0,0),o}function ye(e){return fe(e,{weekStartsOn:1})}function bt(e){const t=O(e),n=t.getFullYear(),r=U(e,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const o=ye(r),s=U(e,0);s.setFullYear(n,0,4),s.setHours(0,0,0,0);const i=ye(s);return t.getTime()>=o.getTime()?n+1:t.getTime()>=i.getTime()?n:n-1}function tt(e){const t=O(e);return t.setHours(0,0,0,0),t}function nt(e){const t=O(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function An(e,t){const n=tt(e),r=tt(t),o=+n-nt(n),s=+r-nt(r);return Math.round((o-s)/zn)}function Yn(e){const t=bt(e),n=U(e,0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),ye(n)}function Bn(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function In(e){if(!Bn(e)&&typeof e!="number")return!1;const t=O(e);return!isNaN(Number(t))}function rt(e){const t=O(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}function _n(e,t){const n=O(e.start),r=O(e.end);let o=+n>+r;const s=o?+n:+r,i=o?r:n;i.setHours(0,0,0,0);let d=(t==null?void 0:t.step)??1;if(!d)return[];d<0&&(d=-d,o=!o);const h=[];for(;+i<=s;)h.push(O(i)),i.setDate(i.getDate()+d),i.setHours(0,0,0,0);return o?h.reverse():h}function ot(e){const t=O(e);return t.setDate(1),t.setHours(0,0,0,0),t}function qn(e){const t=O(e),n=U(e,0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}const Vn={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Gn=(e,t,n)=>{let r;const o=Vn[e];return typeof o=="string"?r=o:t===1?r=o.one:r=o.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function We(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const Un={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Qn={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Xn={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Kn={date:We({formats:Un,defaultWidth:"full"}),time:We({formats:Qn,defaultWidth:"full"}),dateTime:We({formats:Xn,defaultWidth:"full"})},Jn={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Zn=(e,t,n,r)=>Jn[e];function ce(e){return(t,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let o;if(r==="formatting"&&e.formattingValues){const i=e.defaultFormattingWidth||e.defaultWidth,d=n!=null&&n.width?String(n.width):i;o=e.formattingValues[d]||e.formattingValues[i]}else{const i=e.defaultWidth,d=n!=null&&n.width?String(n.width):e.defaultWidth;o=e.values[d]||e.values[i]}const s=e.argumentCallback?e.argumentCallback(t):t;return o[s]}}const er={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},tr={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},nr={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},rr={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},or={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},ar={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},sr=(e,t)=>{const n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},ir={ordinalNumber:sr,era:ce({values:er,defaultWidth:"wide"}),quarter:ce({values:tr,defaultWidth:"wide",argumentCallback:e=>e-1}),month:ce({values:nr,defaultWidth:"wide"}),day:ce({values:rr,defaultWidth:"wide"}),dayPeriod:ce({values:or,defaultWidth:"wide",formattingValues:ar,defaultFormattingWidth:"wide"})};function le(e){return(t,n={})=>{const r=n.width,o=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],s=t.match(o);if(!s)return null;const i=s[0],d=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],h=Array.isArray(d)?lr(d,g=>g.test(i)):cr(d,g=>g.test(i));let f;f=e.valueCallback?e.valueCallback(h):h,f=n.valueCallback?n.valueCallback(f):f;const x=t.slice(i.length);return{value:f,rest:x}}}function cr(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function lr(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function dr(e){return(t,n={})=>{const r=t.match(e.matchPattern);if(!r)return null;const o=r[0],s=t.match(e.parsePattern);if(!s)return null;let i=e.valueCallback?e.valueCallback(s[0]):s[0];i=n.valueCallback?n.valueCallback(i):i;const d=t.slice(o.length);return{value:i,rest:d}}}const ur=/^(\d+)(th|st|nd|rd)?/i,hr=/\d+/i,fr={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},pr={any:[/^b/i,/^(a|c)/i]},mr={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},gr={any:[/1/i,/2/i,/3/i,/4/i]},xr={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},br={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},wr={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},yr={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},vr={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},kr={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Pr={ordinalNumber:dr({matchPattern:ur,parsePattern:hr,valueCallback:e=>parseInt(e,10)}),era:le({matchPatterns:fr,defaultMatchWidth:"wide",parsePatterns:pr,defaultParseWidth:"any"}),quarter:le({matchPatterns:mr,defaultMatchWidth:"wide",parsePatterns:gr,defaultParseWidth:"any",valueCallback:e=>e+1}),month:le({matchPatterns:xr,defaultMatchWidth:"wide",parsePatterns:br,defaultParseWidth:"any"}),day:le({matchPatterns:wr,defaultMatchWidth:"wide",parsePatterns:yr,defaultParseWidth:"any"}),dayPeriod:le({matchPatterns:vr,defaultMatchWidth:"any",parsePatterns:kr,defaultParseWidth:"any"})},Mr={code:"en-US",formatDistance:Gn,formatLong:Kn,formatRelative:Zn,localize:ir,match:Pr,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Er(e){const t=O(e);return An(t,qn(t))+1}function Sr(e){const t=O(e),n=+ye(t)-+Yn(t);return Math.round(n/xt)+1}function wt(e,t){var x,g,k,w;const n=O(e),r=n.getFullYear(),o=Me(),s=(t==null?void 0:t.firstWeekContainsDate)??((g=(x=t==null?void 0:t.locale)==null?void 0:x.options)==null?void 0:g.firstWeekContainsDate)??o.firstWeekContainsDate??((w=(k=o.locale)==null?void 0:k.options)==null?void 0:w.firstWeekContainsDate)??1,i=U(e,0);i.setFullYear(r+1,0,s),i.setHours(0,0,0,0);const d=fe(i,t),h=U(e,0);h.setFullYear(r,0,s),h.setHours(0,0,0,0);const f=fe(h,t);return n.getTime()>=d.getTime()?r+1:n.getTime()>=f.getTime()?r:r-1}function Tr(e,t){var d,h,f,x;const n=Me(),r=(t==null?void 0:t.firstWeekContainsDate)??((h=(d=t==null?void 0:t.locale)==null?void 0:d.options)==null?void 0:h.firstWeekContainsDate)??n.firstWeekContainsDate??((x=(f=n.locale)==null?void 0:f.options)==null?void 0:x.firstWeekContainsDate)??1,o=wt(e,t),s=U(e,0);return s.setFullYear(o,0,r),s.setHours(0,0,0,0),fe(s,t)}function jr(e,t){const n=O(e),r=+fe(n,t)-+Tr(n,t);return Math.round(r/xt)+1}function M(e,t){const n=e<0?"-":"",r=Math.abs(e).toString().padStart(t,"0");return n+r}const Q={y(e,t){const n=e.getFullYear(),r=n>0?n:1-n;return M(t==="yy"?r%100:r,t.length)},M(e,t){const n=e.getMonth();return t==="M"?String(n+1):M(n+1,2)},d(e,t){return M(e.getDate(),t.length)},a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(e,t){return M(e.getHours()%12||12,t.length)},H(e,t){return M(e.getHours(),t.length)},m(e,t){return M(e.getMinutes(),t.length)},s(e,t){return M(e.getSeconds(),t.length)},S(e,t){const n=t.length,r=e.getMilliseconds(),o=Math.trunc(r*Math.pow(10,n-3));return M(o,t.length)}},oe={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},at={G:function(e,t,n){const r=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if(t==="yo"){const r=e.getFullYear(),o=r>0?r:1-r;return n.ordinalNumber(o,{unit:"year"})}return Q.y(e,t)},Y:function(e,t,n,r){const o=wt(e,r),s=o>0?o:1-o;if(t==="YY"){const i=s%100;return M(i,2)}return t==="Yo"?n.ordinalNumber(s,{unit:"year"}):M(s,t.length)},R:function(e,t){const n=bt(e);return M(n,t.length)},u:function(e,t){const n=e.getFullYear();return M(n,t.length)},Q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return M(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return M(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){const r=e.getMonth();switch(t){case"M":case"MM":return Q.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){const r=e.getMonth();switch(t){case"L":return String(r+1);case"LL":return M(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){const o=jr(e,r);return t==="wo"?n.ordinalNumber(o,{unit:"week"}):M(o,t.length)},I:function(e,t,n){const r=Sr(e);return t==="Io"?n.ordinalNumber(r,{unit:"week"}):M(r,t.length)},d:function(e,t,n){return t==="do"?n.ordinalNumber(e.getDate(),{unit:"date"}):Q.d(e,t)},D:function(e,t,n){const r=Er(e);return t==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):M(r,t.length)},E:function(e,t,n){const r=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){const o=e.getDay(),s=(o-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(s);case"ee":return M(s,2);case"eo":return n.ordinalNumber(s,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});case"eeee":default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){const o=e.getDay(),s=(o-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(s);case"cc":return M(s,t.length);case"co":return n.ordinalNumber(s,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});case"cccc":default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(e,t,n){const r=e.getDay(),o=r===0?7:r;switch(t){case"i":return String(o);case"ii":return M(o,t.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){const o=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(e,t,n){const r=e.getHours();let o;switch(r===12?o=oe.noon:r===0?o=oe.midnight:o=r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(e,t,n){const r=e.getHours();let o;switch(r>=17?o=oe.evening:r>=12?o=oe.afternoon:r>=4?o=oe.morning:o=oe.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(e,t,n){if(t==="ho"){let r=e.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return Q.h(e,t)},H:function(e,t,n){return t==="Ho"?n.ordinalNumber(e.getHours(),{unit:"hour"}):Q.H(e,t)},K:function(e,t,n){const r=e.getHours()%12;return t==="Ko"?n.ordinalNumber(r,{unit:"hour"}):M(r,t.length)},k:function(e,t,n){let r=e.getHours();return r===0&&(r=24),t==="ko"?n.ordinalNumber(r,{unit:"hour"}):M(r,t.length)},m:function(e,t,n){return t==="mo"?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):Q.m(e,t)},s:function(e,t,n){return t==="so"?n.ordinalNumber(e.getSeconds(),{unit:"second"}):Q.s(e,t)},S:function(e,t){return Q.S(e,t)},X:function(e,t,n){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(t){case"X":return it(r);case"XXXX":case"XX":return J(r);case"XXXXX":case"XXX":default:return J(r,":")}},x:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"x":return it(r);case"xxxx":case"xx":return J(r);case"xxxxx":case"xxx":default:return J(r,":")}},O:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+st(r,":");case"OOOO":default:return"GMT"+J(r,":")}},z:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+st(r,":");case"zzzz":default:return"GMT"+J(r,":")}},t:function(e,t,n){const r=Math.trunc(e.getTime()/1e3);return M(r,t.length)},T:function(e,t,n){const r=e.getTime();return M(r,t.length)}};function st(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),o=Math.trunc(r/60),s=r%60;return s===0?n+String(o):n+String(o)+t+M(s,2)}function it(e,t){return e%60===0?(e>0?"-":"+")+M(Math.abs(e)/60,2):J(e,t)}function J(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),o=M(Math.trunc(r/60),2),s=M(r%60,2);return n+o+t+s}const ct=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},yt=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},Dr=(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],r=n[1],o=n[2];if(!o)return ct(e,t);let s;switch(r){case"P":s=t.dateTime({width:"short"});break;case"PP":s=t.dateTime({width:"medium"});break;case"PPP":s=t.dateTime({width:"long"});break;case"PPPP":default:s=t.dateTime({width:"full"});break}return s.replace("{{date}}",ct(r,t)).replace("{{time}}",yt(o,t))},$r={p:yt,P:Dr},Cr=/^D+$/,Wr=/^Y+$/,Or=["D","DD","YY","YYYY"];function Rr(e){return Cr.test(e)}function Fr(e){return Wr.test(e)}function Nr(e,t,n){const r=Lr(e,t,n);if(console.warn(r),Or.includes(e))throw new RangeError(r)}function Lr(e,t,n){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const zr=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Hr=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Ar=/^'([^]*?)'?$/,Yr=/''/g,Br=/[a-zA-Z]/;function vt(e,t,n){var x,g,k,w,m,j,y,b;const r=Me(),o=(n==null?void 0:n.locale)??r.locale??Mr,s=(n==null?void 0:n.firstWeekContainsDate)??((g=(x=n==null?void 0:n.locale)==null?void 0:x.options)==null?void 0:g.firstWeekContainsDate)??r.firstWeekContainsDate??((w=(k=r.locale)==null?void 0:k.options)==null?void 0:w.firstWeekContainsDate)??1,i=(n==null?void 0:n.weekStartsOn)??((j=(m=n==null?void 0:n.locale)==null?void 0:m.options)==null?void 0:j.weekStartsOn)??r.weekStartsOn??((b=(y=r.locale)==null?void 0:y.options)==null?void 0:b.weekStartsOn)??0,d=O(e);if(!In(d))throw new RangeError("Invalid time value");let h=t.match(Hr).map(p=>{const u=p[0];if(u==="p"||u==="P"){const v=$r[u];return v(p,o.formatLong)}return p}).join("").match(zr).map(p=>{if(p==="''")return{isToken:!1,value:"'"};const u=p[0];if(u==="'")return{isToken:!1,value:Ir(p)};if(at[u])return{isToken:!0,value:p};if(u.match(Br))throw new RangeError("Format string contains an unescaped latin alphabet character `"+u+"`");return{isToken:!1,value:p}});o.localize.preprocessor&&(h=o.localize.preprocessor(d,h));const f={firstWeekContainsDate:s,weekStartsOn:i,locale:o};return h.map(p=>{if(!p.isToken)return p.value;const u=p.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&Fr(u)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&Rr(u))&&Nr(u,t,String(e));const v=at[u[0]];return v(d,u,o.localize,f)}).join("")}function Ir(e){const t=e.match(Ar);return t?t[1].replace(Yr,"'"):e}function _r(e,t){const n=O(e),r=O(t);return n.getTime()>r.getTime()}function qr(e,t){const n=O(e),r=O(t);return+n<+r}const Vr=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",...e},l.createElement("title",null,`
		solidleft
	`),l.createElement("path",{d:"M10.293 16.707c-0.187-0.188-0.292-0.442-0.292-0.707s0.105-0.519 0.292-0.707l10-10c0.092-0.098 0.202-0.177 0.325-0.232s0.255-0.084 0.389-0.086c0.134-0.002 0.268 0.022 0.392 0.073s0.238 0.125 0.333 0.22c0.095 0.095 0.17 0.208 0.22 0.333s0.075 0.258 0.073 0.392c-0.002 0.134-0.032 0.267-0.086 0.389s-0.133 0.233-0.232 0.325l-9.293 9.293 9.293 9.293c0.098 0.091 0.177 0.202 0.232 0.325s0.084 0.255 0.086 0.389c0.002 0.134-0.022 0.268-0.073 0.392s-0.125 0.238-0.22 0.333c-0.095 0.095-0.208 0.17-0.333 0.22s-0.258 0.075-0.392 0.073c-0.134-0.002-0.267-0.032-0.389-0.086s-0.233-0.134-0.325-0.232l-10-10z"})),Gr=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",...e},l.createElement("title",null,`
		solid-right
	`),l.createElement("path",{d:"M21.707 16.707c0.187-0.188 0.292-0.442 0.292-0.707s-0.105-0.519-0.292-0.707l-10-10c-0.092-0.098-0.202-0.177-0.325-0.232s-0.255-0.084-0.389-0.086c-0.134-0.002-0.268 0.022-0.392 0.073s-0.238 0.125-0.333 0.22c-0.095 0.095-0.17 0.208-0.22 0.333s-0.075 0.258-0.073 0.392c0.002 0.134 0.032 0.267 0.086 0.389s0.133 0.233 0.232 0.325l9.293 9.293-9.293 9.293c-0.098 0.091-0.177 0.202-0.232 0.325s-0.084 0.255-0.086 0.389c-0.002 0.134 0.022 0.268 0.073 0.392s0.125 0.238 0.22 0.333c0.095 0.095 0.208 0.17 0.333 0.22s0.258 0.075 0.392 0.073c0.134-0.002 0.267-0.032 0.389-0.086s0.233-0.134 0.325-0.232l10-10z"})),Ur=c.div`
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

`,lt=c.button`
 background: transparent;
    border: none;
    cursor: ${e=>e.disabled?"default":"pointer"};
    visibility: ${e=>e.disabled?"hidden":"visible"};
    pointer-events: ${e=>e.disabled?"none":"auto"};
  
   
    margin: 0;
`,Qr=c(Vr)`

fill: ${e=>e.theme.colors.primary.accent};
  width: 14px;
  height: auto;


`,Xr=c(Gr)`

fill: ${e=>e.theme.colors.primary.accent};
  width: 14px;
  height: auto;
 
 
`,Kr=({selectedDate:e,setSelectedDate:t,setCurrentMonth:n,setSelectedDay:r})=>{const o=new Date().getMonth(),s=new Date().getFullYear(),i=qr(e,Ce(new Date,-12)),d=_r(e,new Date(s,o,1)),h=vt(e,"MMMM"),f=e.getFullYear(),x=()=>{t(Ce(e,-1)),r(null),n(k=>k-1)},g=()=>{t(Ce(e,1)),r(null),n(k=>k+1)};return a.jsxs(Ur,{children:[a.jsx(lt,{onClick:x,disabled:i,children:a.jsx(Qr,{})}),a.jsx("span",{children:`${h}, ${f}`}),a.jsx(lt,{onClick:g,disabled:d,children:a.jsx(Xr,{})})]})},Jr=c.div`
display: flex;
flex-direction:column;
gap: 16px;
padding: 24px 13px;


border-radius: 10px;
background:${e=>e.theme.colors.primary.bg};
box-shadow: 0px 4px 4px 0px rgba(64, 123, 255, 0.30);



`,Zr=c.h2`
color:${e=>e.theme.colors.primary.accent};
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 1.25;
`,eo=c.ul`
display: flex;
flex-direction: column;
gap: 16px;

color: ${e=>e.theme.colors.primary.text};

font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 1.25;
`,Oe=c.li`

span{
  color:${e=>e.theme.colors.primary.accent};

  font-size: 18px;

  font-weight: 500;
  line-height: 1.33;
}

`,to=({selectedDate:e,selectedDayData:t})=>{const n=vt(e,"MMMM"),r=e.getDate(),o=Pe().user.waterRate,s=o?(o/1e3).toFixed(1):"0",i=t?(t.waterRate/1e3).toFixed(1):s,d=t?t.percentagePerDay:"0",h=t?t.totalPortions:"0";return a.jsxs(Jr,{children:[a.jsxs(Zr,{children:[" ",r,", ",n]}),a.jsxs(eo,{children:[a.jsxs(Oe,{children:["Daily Norma: ",a.jsxs("span",{children:[i," L"]})]}),a.jsxs(Oe,{children:["Fulfillment of the daily norm: ",a.jsxs("span",{children:[d,"%"]})]}),a.jsxs(Oe,{children:["How many servings of water: ",a.jsx("span",{children:h})]})]})]})},no=c.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,ro=c.div`
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
 
`,oo=c.ul`
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
`,ao=c.li`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  position: relative;
  cursor: pointer;
  padding: 0px;

  @media (min-width: ${({theme:e})=>e.screens.tab}) {
  }
`,so=c.div`
  width: 34px;
  height: 34px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${e=>e.theme.colors.primary.bg};

  border: 2px solid
    ${({theme:e,percentage:t})=>t<100?e.colors.secondary.color4:e.colors.primary.bg};
`,io=c.p`
  z-index: 1;
  margin: 0;
`,co=c.p`
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
`,lo=e=>e.water.waterDayList,uo=e=>e.water.waterMonthList,ho=e=>e.water.waterRate,ve=()=>{const e=je(lo),t=je(uo),n=je(ho);return{waterDayList:e,waterMonthList:t,waterRate:n}},fo=()=>{const[e,t]=l.useState(new Date),[n,r]=l.useState(e.getMonth()),[o,s]=l.useState(null),[i,d]=l.useState(null),h=me(),f=ve().waterMonthList,x=ve().waterDayList,g=Pe().user.waterRate,k=()=>{d(null)},w=!!i,m=w?"simple-popover":void 0;l.useEffect(()=>{const b=ot(e),p=rt(e);o===null&&h(Lt({startDate:b,endDate:p}))},[n,h,e,o,x]);const j=(b,p)=>{t(p),d(b.currentTarget),s(p.getDate())},y=f&&f.find(b=>{const[p]=b.date.split(",");return parseInt(p)===e.getDate()});return a.jsxs(no,{children:[a.jsxs(ro,{children:[a.jsx("h3",{children:"Month"}),a.jsx(Kr,{selectedDate:e,setSelectedDate:t,setCurrentMonth:r,setSelectedDay:s})]}),a.jsx(oo,{children:_n({start:ot(e),end:rt(e)}).map((b,p)=>{const u=b.getDate();console.log("monthData",f);const v=f.find(C=>{const[F]=C.date.split(",");return parseInt(F)===u}),P=v?v.totalWaterDrunk:0,W=g?Math.round(P/g*100):0;return a.jsxs(ao,{onClick:C=>j(C,b),children:[a.jsx(so,{percentage:W,children:a.jsx(io,{children:u})}),a.jsxs(co,{children:[W||0,"%"]})]},p)})}),a.jsx(Ln,{id:m,open:w,anchorEl:i,onClose:k,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"bottom",horizontal:"right"},children:a.jsx(to,{selectedDate:e,selectedDayData:y})})]})},po="/Smart-Foxes-WaterTracker/assets/botleHomeDesk-3ae51194.png",mo="/Smart-Foxes-WaterTracker/assets/botlteHomeDesk2x-9a54d3e4.png",go="/Smart-Foxes-WaterTracker/assets/bottleHomeTab-0bf3952c.png",xo="/Smart-Foxes-WaterTracker/assets/bottleHomeTab2x-ed4a96a1.png",bo="/Smart-Foxes-WaterTracker/assets/backgroundHomeMob-d1e9a558.png",wo="/Smart-Foxes-WaterTracker/assets/backgroundHomeMob2x-089f92e0.png",yo="/Smart-Foxes-WaterTracker/assets/bottleHomeMob-1cd9cdb8.png",vo="/Smart-Foxes-WaterTracker/assets/bottleHomeMob2x-0e2d77ce.png",ko=c.main`
display: flex;
flex-direction:column;

align-items: center;

color:${e=>e.theme.colors.primary.text};
background-color: ${e=>e.theme.colors.primary.bg};
background-image: image-set(
        url(${yo}) 1x,
        url(${vo}) 2x
      ),
      image-set(
        url(${bo}) 1x,
        url(${wo}) 2x
      );
background-position: center 106px, center;
background-size: auto, 100vw auto;
background-repeat: no-repeat;


@media (min-width: ${({theme:e})=>e.screens.tab}){
  background-image: image-set(
        url(${go}) 1x,
        url(${xo}) 2x
      ),
      image-set(
        url(${qt}) 1x,
        url(${Vt}) 2x
      );
background-position: center 40px, center;

}


@media (min-width: ${({theme:e})=>e.screens.desk}) {
    flex-direction:row;
    align-items: flex-start;
    padding: 0px 112px;
  
    background-image: image-set(
        url(${po}) 1x,
        url(${mo}) 2x
      ),
      image-set(
        url(${It}) 1x,
        url(${_t}) 2x
      );
background-position: left top, center;
  }
`,Po=c.section`
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

`,Mo=c.section`
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


`,kt=(e,t=!1)=>{const n=new Date(e);let r=n.getHours();const o=n.getMinutes();let s="";if(t){const i=r>=12?"PM":"AM";r=r%12,r=r||12,s=`${r.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")} ${i}`}else s=`${r.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")}`;return s},Eo=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",...e},l.createElement("title",null,"glass_26"),l.createElement("path",{fill:"#407bff",d:"M5.565 2.783l1.901 26.363v0.072h16.367l1.901-26.353v-0.082h-20.169zM23.16 28.479h-15.017l-1.426-19.747h0.784l1.289 17.403c0.008 0.092 0.049 0.177 0.115 0.24s0.153 0.098 0.244 0.099h0.030c0.047-0.003 0.093-0.016 0.136-0.037s0.080-0.051 0.111-0.087c0.031-0.036 0.055-0.078 0.070-0.124s0.021-0.094 0.017-0.141l-1.289-17.351h16.362l-1.426 19.747zM24.637 7.994h-16.468l-0.283-3.847c-0.009-0.094-0.052-0.181-0.122-0.244s-0.16-0.097-0.252-0.095c-0.095 0.009-0.183 0.055-0.245 0.129s-0.094 0.169-0.088 0.266l0.283 3.795h-0.794l-0.324-4.483h18.617l-0.324 4.478z"}),l.createElement("path",{fill:"#407bff",d:"M11.359 12.384c0.236 0 0.467-0.071 0.663-0.204s0.349-0.322 0.439-0.543c0.090-0.221 0.114-0.465 0.068-0.699s-0.16-0.45-0.327-0.62c-0.167-0.169-0.38-0.285-0.611-0.331s-0.471-0.023-0.689 0.069c-0.218 0.092-0.404 0.247-0.536 0.446s-0.201 0.433-0.201 0.672c0 0.321 0.126 0.629 0.35 0.856s0.527 0.355 0.844 0.355zM11.359 10.697c0.093 0 0.184 0.028 0.261 0.080s0.138 0.127 0.173 0.214c0.036 0.087 0.045 0.183 0.027 0.276s-0.063 0.178-0.129 0.244c-0.066 0.067-0.15 0.112-0.241 0.131s-0.186 0.009-0.272-0.027c-0.086-0.036-0.159-0.097-0.211-0.176s-0.079-0.171-0.079-0.265c0-0.127 0.050-0.248 0.138-0.337s0.208-0.14 0.332-0.14z"}),l.createElement("path",{fill:"#407bff",d:"M11.354 16.318c0.003 0.239 0.076 0.472 0.209 0.669s0.321 0.35 0.539 0.439 0.458 0.111 0.689 0.062c0.231-0.049 0.442-0.166 0.607-0.336s0.277-0.387 0.321-0.621 0.019-0.477-0.072-0.698c-0.091-0.22-0.245-0.408-0.442-0.54s-0.427-0.201-0.663-0.2c-0.158 0.001-0.313 0.033-0.459 0.095s-0.277 0.153-0.387 0.267-0.198 0.249-0.256 0.397c-0.059 0.148-0.088 0.307-0.086 0.467zM13.013 16.318c0 0.094-0.028 0.187-0.079 0.265s-0.125 0.14-0.211 0.176c-0.086 0.036-0.18 0.046-0.272 0.027s-0.175-0.064-0.241-0.131-0.111-0.152-0.129-0.244c-0.018-0.093-0.009-0.188 0.027-0.276s0.096-0.162 0.173-0.214 0.168-0.080 0.261-0.080c0.125 0 0.244 0.050 0.333 0.14s0.138 0.211 0.138 0.337z"}),l.createElement("path",{fill:"#407bff",d:"M19.834 16.349c0.236 0 0.467-0.071 0.663-0.204s0.349-0.322 0.439-0.543c0.090-0.221 0.114-0.465 0.068-0.699s-0.16-0.45-0.327-0.62c-0.167-0.169-0.379-0.285-0.611-0.331s-0.471-0.023-0.689 0.069c-0.218 0.092-0.404 0.247-0.535 0.446s-0.201 0.433-0.201 0.672c0 0.321 0.126 0.629 0.349 0.856s0.527 0.355 0.844 0.355zM19.834 14.666c0.093 0 0.184 0.028 0.262 0.081s0.138 0.127 0.173 0.215c0.035 0.088 0.044 0.184 0.026 0.276s-0.064 0.178-0.13 0.244c-0.066 0.066-0.151 0.111-0.242 0.129s-0.186 0.008-0.272-0.029-0.159-0.099-0.21-0.178c-0.051-0.079-0.078-0.172-0.077-0.266 0.001-0.126 0.051-0.246 0.14-0.334s0.207-0.138 0.331-0.138z"}),l.createElement("path",{fill:"#407bff",d:"M15.677 14.066c0.236 0 0.467-0.071 0.663-0.204s0.349-0.322 0.439-0.543c0.090-0.221 0.114-0.464 0.068-0.699s-0.16-0.45-0.327-0.62c-0.167-0.169-0.38-0.285-0.611-0.331s-0.471-0.023-0.689 0.069c-0.218 0.092-0.404 0.247-0.536 0.446s-0.201 0.433-0.201 0.672c0 0.321 0.126 0.629 0.35 0.856s0.527 0.354 0.844 0.354zM15.677 12.379c0.093 0 0.184 0.028 0.261 0.080s0.138 0.127 0.173 0.214c0.036 0.087 0.045 0.183 0.027 0.276s-0.063 0.177-0.129 0.244c-0.066 0.067-0.15 0.112-0.241 0.131s-0.186 0.009-0.272-0.027-0.159-0.097-0.211-0.176c-0.052-0.079-0.079-0.171-0.079-0.265-0.003-0.065 0.006-0.129 0.028-0.19s0.056-0.116 0.1-0.164c0.044-0.047 0.097-0.084 0.156-0.11s0.122-0.039 0.186-0.039v0.026z"}),l.createElement("path",{fill:"#407bff",d:"M13.402 20.929c0.005 0.197 0.067 0.387 0.178 0.548s0.267 0.285 0.447 0.357c0.181 0.072 0.378 0.088 0.568 0.047s0.363-0.139 0.498-0.279c0.135-0.141 0.227-0.319 0.263-0.512s0.015-0.393-0.060-0.574c-0.075-0.181-0.202-0.336-0.363-0.445s-0.351-0.167-0.545-0.167c-0.264 0.007-0.514 0.118-0.699 0.309s-0.287 0.449-0.287 0.716zM14.388 20.662c0.052 0 0.103 0.016 0.146 0.045s0.077 0.071 0.097 0.12 0.025 0.102 0.015 0.154c-0.010 0.052-0.035 0.099-0.072 0.137s-0.084 0.063-0.135 0.073c-0.051 0.010-0.104 0.005-0.152-0.015s-0.089-0.054-0.118-0.098c-0.029-0.044-0.044-0.096-0.044-0.148 0-0.071 0.028-0.139 0.077-0.189s0.116-0.078 0.186-0.078z"}),l.createElement("path",{fill:"#407bff",d:"M18.17 19.816c0.202 0.007 0.402-0.048 0.574-0.157s0.306-0.269 0.388-0.457c0.081-0.188 0.105-0.397 0.068-0.599s-0.133-0.388-0.275-0.534c-0.143-0.146-0.325-0.245-0.524-0.285s-0.405-0.018-0.591 0.063c-0.186 0.081-0.345 0.216-0.454 0.389s-0.166 0.375-0.161 0.58c0.006 0.262 0.111 0.511 0.292 0.697s0.426 0.295 0.684 0.304zM18.17 18.549c0.070 0 0.137 0.028 0.186 0.078s0.077 0.118 0.077 0.189c0 0.071-0.028 0.139-0.077 0.189s-0.116 0.078-0.186 0.078c-0.070 0-0.138-0.028-0.188-0.078s-0.079-0.118-0.080-0.189c0-0.035 0.007-0.071 0.020-0.103s0.033-0.062 0.058-0.087 0.055-0.044 0.087-0.057c0.032-0.013 0.067-0.019 0.102-0.019z"}),l.createElement("path",{fill:"#407bff",d:"M20.253 11.538c0.2 0 0.395-0.060 0.562-0.173s0.296-0.273 0.372-0.46c0.077-0.187 0.097-0.394 0.058-0.593s-0.135-0.382-0.277-0.525c-0.141-0.143-0.322-0.241-0.518-0.281s-0.399-0.019-0.584 0.058c-0.185 0.078-0.343 0.209-0.454 0.378s-0.17 0.367-0.17 0.57c0 0.272 0.107 0.533 0.296 0.725s0.447 0.3 0.715 0.3zM20.253 10.271c0.039-0.011 0.080-0.013 0.12-0.006s0.078 0.024 0.11 0.049c0.032 0.025 0.059 0.057 0.077 0.094s0.028 0.078 0.028 0.119-0.009 0.082-0.028 0.119c-0.018 0.037-0.044 0.069-0.077 0.094s-0.070 0.042-0.11 0.049c-0.040 0.008-0.081 0.006-0.12-0.006-0.039 0.011-0.080 0.013-0.12 0.006s-0.078-0.024-0.11-0.049c-0.032-0.025-0.059-0.057-0.077-0.094s-0.028-0.078-0.028-0.119 0.009-0.082 0.028-0.119c0.018-0.037 0.044-0.069 0.077-0.094s0.070-0.042 0.11-0.049c0.040-0.008 0.081-0.006 0.12 0.006z"}),l.createElement("path",{fill:"#407bff",d:"M10.369 27.191c-0.045 0.021-0.086 0.052-0.119 0.089s-0.059 0.082-0.074 0.13c-0.016 0.048-0.021 0.099-0.017 0.149s0.019 0.099 0.043 0.144c0.031 0.060 0.078 0.11 0.135 0.145s0.122 0.054 0.189 0.055c0.056 0.002 0.112-0.011 0.162-0.036 1.545-0.803 3.255-1.225 4.99-1.231 1.837 0.027 3.648 0.441 5.319 1.215 0.066 0.035 0.141 0.049 0.215 0.039s0.143-0.042 0.198-0.093c0.055-0.051 0.094-0.118 0.11-0.192s0.010-0.151-0.018-0.221c-0.036-0.091-0.105-0.164-0.192-0.205-1.769-0.821-3.687-1.258-5.633-1.282-1.845 0.002-3.664 0.444-5.309 1.292z"})),So=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:1024,height:1024,viewBox:"0 0 1024 1024",...e},l.createElement("title",null,"edit"),l.createElement("path",{fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:4,strokeWidth:42.6667,d:"M719.445 191.445l71.979-72.021c14.479-14.479 34.482-23.435 56.576-23.435 44.189 0 80.011 35.822 80.011 80.011 0 22.094-8.955 42.097-23.435 56.576l-453.077 453.077c-21.936 21.924-49.153 38.567-79.579 47.856l-1.36 0.357-114.56 34.133 34.133-114.56c9.647-31.785 26.289-59.002 48.214-80.94l381.098-381.055zM719.445 191.445l112.555 112.555M768 597.333v202.667c0 53.019-42.981 96-96 96v0h-448c-53.019 0-96-42.981-96-96v0-448c0-53.019 42.981-96 96-96v0h202.667"})),To=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:1024,height:1024,viewBox:"0 0 1024 1024",...e},l.createElement("title",null,"delete"),l.createElement("path",{fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:4,strokeWidth:42.6667,d:"M628.907 384l-14.763 384M409.856 768l-14.763-384M820.395 247.040c14.592 2.219 29.099 4.565 43.605 7.083M820.395 247.040l-45.568 592.341c-3.952 49.747-45.294 88.619-95.716 88.619-0.010 0-0.020 0-0.030 0h-334.164c-0.008 0-0.018 0-0.028 0-50.422 0-91.764-38.872-95.694-88.283l-0.021-0.336-45.568-592.341M820.395 247.040c-38.791-6.358-89.724-12.366-141.193-16.476l-7.202-0.463M203.605 247.040c-25.242 3.599-40.074 6.065-54.844 8.706l11.239-1.666M203.605 247.040c38.789-6.358 89.722-12.366 141.19-16.476l7.205-0.463M672 230.101v-39.083c0-50.347-38.827-92.331-89.173-93.909-21.11-0.721-45.921-1.132-70.827-1.132-24.908 0-49.719 0.411-74.428 1.226l3.602-0.094c-50.347 1.579-89.173 43.605-89.173 93.909v39.083M672 230.101c-47.901-3.932-103.689-6.173-160-6.173-56.31 0-112.097 2.241-167.276 6.64l7.276-0.466"})),jo=e=>l.createElement("svg",{fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:4,strokeWidth:42.6667,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...e},l.createElement("path",{d:"M512 256v512M768 512h-512"})),Do=c.div`
  
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
 
`,$o=c.ul`
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

  `,Pt=c.div`
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

`,Mt=c.span`
color:${e=>e.theme.colors.primary.accent};


font-size: 18px;

font-weight: 400;
line-height: 1.33;
`,Et=c(Eo)`
  fill:${e=>e.theme.colors.primary.accent};
  width: 26px;
  height: auto;


  @media (min-width: ${({theme:e})=>e.screens.tab}){
    width: 36px;
  }
  
`,Co=c(So)`
  stroke:  ${e=>e.theme.colors.secondary.color3};
  width: 16px;
  height: 16px;
`,Wo=c(To)`
   stroke: ${e=>e.theme.colors.secondary.color2};
  width: 16px;
  height: 16px;
`,Oo=c.div`
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

`,Ro=c.button`

  &:hover::after {
   
    background-color: ${e=>e.theme.colors.primary.accent};
   
  }`,Fo=c.button`
 
 
  &:hover::after {
   
    background-color:  ${e=>e.theme.colors.secondary.color2};
    
  }`,St=c(jo)`
  fill: ${e=>e.theme.colors.primary.accent};
  stroke: ${e=>e.theme.colors.primary.accent};
  width: 16px;
  height: 16px;

  @media (min-width: ${({theme:e})=>e.screens.tab}){
    width: 24px;
  height: 24px;
  }
 
`,No=c.button`
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

`,Lo=c.div`

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
`,zo=c.div`
display: flex;
flex-direction: column-reverse;
gap: 24px;

@media (min-width: ${({theme:e})=>e.screens.tab}){
    flex-direction: row;
    justify-content: end;
}
`,Ho=c.button`

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

`,Ao=c.button`

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
`,Yo=({id:e})=>{const{closeModal:t}=l.useContext(He),n=me(),r=async()=>{await n(zt(e)),t(),n(Ae())};return a.jsxs(Lo,{children:[a.jsx("h3",{children:"Delete entry"}),a.jsx("p",{children:"Are you sure you want to delete the entry?"}),a.jsxs(zo,{children:[a.jsx(Ho,{type:"button",onClick:()=>t(),children:"Cancel"}),a.jsx(Ao,{type:"submit",onClick:r,children:"Delete"})]})]})};function Bo(e){return gt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.75 4.5a.75.75 0 0 1 .75.75V11h5.75a.75.75 0 0 1 0 1.5H12.5v5.75a.75.75 0 0 1-1.5 0V12.5H5.25a.75.75 0 0 1 0-1.5H11V5.25a.75.75 0 0 1 .75-.75Z"},child:[]}]})(e)}const Io=c.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  justify-content: center;
`,_o=c.h3`
  font-size: 26px;
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 32px;
`,qo=c.span`
  font-size: 18px;
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 20px;
  margin-bottom: 16px;
`,Vo=c.div`
  display: flex;
  flex-direction: column;
`,Go=c.label`
  display: flex;
  justify-content: flex-start;
  gap: 12px;
  flex-direction: column;
`,Uo=c.div`
  display: flex;
  flex-direction: row;
  gap: 7px;
`;c.input``;const Qo=c.span`
  font-size: 16px;
  font-weight: ${e=>e.theme.fontWeights.regular};
  line-height: 20px;
`,Xo=c.label`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Ko=c.span``,Jo=c.input`
  width: 544px;
  padding: 12px 10px;
  border-radius: 6px;
  border: 1px solid ${e=>e.theme.colors.secondary.color5};
`,Zo=c.label`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
`,ea=c.span``,ta=c.input`
  padding: 12px 10px;
  border-radius: 6px;
  border: 1px solid ${e=>e.theme.colors.secondary.color5};
  width: 544px;
`,na=c.div`
  display: flex;
  width: 544px;
  align-items: center;
  justify-content: flex-end;
  gap: 24px;
`,ra=c.span`
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
`,oa=c.button`
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
`,dt=c.button`
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
`,aa=c(Bo)`
  fill: ${e=>e.theme.colors.primary.accent};
  stroke: ${e=>e.theme.colors.primary.accent};
  width: 16px;
  height: 16px;

  @media (min-width: ${({theme:e})=>e.screens.tab}) {
    width: 24px;
    height: 24px;
  }
`,sa=c(Ht)`
  fill: ${e=>e.theme.colors.primary.accent};
  stroke: ${e=>e.theme.colors.primary.accent};
  width: 16px;
  height: 16px;

  @media (min-width: ${({theme:e})=>e.screens.tab}) {
    width: 24px;
    height: 24px;
  }
`,ia=c.span`
  font-size: 18px;
  font-weight: ${e=>e.theme.fontWeights.bolt};
  line-height: 24px;
  text-align: center;
  color: ${e=>e.theme.colors.primary.accent};

`;function ca(e){const t=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return`${t}-${n}-${r}`}const Tt=({portion:e})=>{const t=me(),{waterDayList:n}=ve(),[r,o]=l.useState(e.waterVolume?e.waterVolume:0),[s,i]=l.useState(e.dateAdded?e.dateAdded:""),d=n,h=w=>{const m=parseFloat(w.target.value);if(m>3e3){alert("не більше 3000 мл");return}o(m)},f=w=>{switch(w.currentTarget.id){case"increment":o(m=>m+50);break;case"decrement":o(m=>m>0?m-50:0);break}},x=async w=>{if(w.preventDefault(),e){const m={id:e._id,date:s,waterVolume:r};t(At(m)),handleCloseModal(),t(Ae())}else{const j=ca(new Date),y=d?d.find(u=>{u.dateAdded}):s;if(console.log(y),y){alert("Не можна в один той самий час"),i("");return}const b=j+"T"+y,p={waterVolume:r,date:b};try{if(!t(Yt(p)).error)o(0),i("");else throw new Error}catch(u){console.error(u),alert("Something went wrong")}}},g=e?"Edit the entered amount of water":"Add water",k=e?"Correct entered data: ":"Choose a value:";return a.jsxs(Io,{children:[a.jsxs(_o,{children:[" ",g]}),e&&a.jsxs(Pt,{children:[a.jsx(Et,{}),a.jsx(Mt,{children:`${e.waterVolume} ml `}),a.jsx("span",{children:kt(e.dateAdded,!0)})]}),a.jsxs(Vo,{children:[a.jsx(qo,{children:k}),a.jsxs(Go,{children:[a.jsx(Qo,{children:"Amount of water:"}),a.jsxs(Uo,{children:[a.jsx(dt,{onClick:f,id:"decrement",children:a.jsx(sa,{})}),a.jsxs(ra,{children:[" ",r||0," L"]}),a.jsx(dt,{onClick:f,id:"increment",children:a.jsx(aa,{})})]})]})]}),a.jsxs(Xo,{children:[a.jsx(Ko,{children:"Recording time:"}),a.jsx(Jo,{type:"time",value:s,onChange:w=>i(w.target.value)})]}),a.jsxs(Zo,{children:[a.jsx(ea,{children:"Enter the value of the water used:"}),a.jsx(ta,{type:"number",value:r,onChange:h,placeholder:"0"})]}),a.jsxs(na,{children:[a.jsxs(ia,{children:[" ",r||0," Ml"]}),a.jsx(oa,{onClick:x,children:"Save"})]})]})},la=({handleAddWaterClick:e})=>{const{openModal:t}=l.useContext(He),n=ve().waterDayList,r=me();l.useEffect(()=>{r(Ae())},[r]);const o=i=>{t(a.jsx(a.Fragment,{children:a.jsx(Yo,{id:i})}))},s=i=>{t(a.jsx(a.Fragment,{children:a.jsx(Tt,{portion:i})}))};return a.jsxs(Do,{children:[a.jsx("h3",{children:"Today"}),n&&n.length>0&&a.jsx($o,{children:n.map(i=>a.jsxs("li",{children:[a.jsxs(Pt,{children:[a.jsx(Et,{}),a.jsx(Mt,{children:`${i.waterVolume} ml `}),a.jsx("span",{children:kt(i.dateAdded,!0)})]}),a.jsxs(Oo,{children:[a.jsx(Ro,{onClick:()=>s(i),children:a.jsx(Co,{})}),a.jsx(Fo,{onClick:()=>o(i._id),children:a.jsx(Wo,{})})]})]},i._id))}),a.jsxs(No,{onClick:e,children:[a.jsx(St,{})," Add water"]})]})},da=c.div`
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
`,ua=c.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
  justify-content: left;
`,ha=c.p`
  font-size: 18px;
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 24px;
  color: ${e=>e.theme.colors.primary.text};
  white-space: nowrap;
`,fa=c.button`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  color: #8baeff;
`,pa=c.p`
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  color: ${e=>e.theme.colors.primary.accent};
`,ma=c.div`
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
`,ga=c.div`
  width: 592px;
  height: 712px;
  padding: 32px 24px 32px 24px;
  border-radius: 10px;
  background-color: ${e=>e.theme.colors.primary.bg};
`,xa=c.h2`
  font-size: 26px;
  font-weight: 500;
  line-height: 32px;
  color: ${e=>e.theme.colors.primary.text};
`,ba=c.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  margin-top: 24px;
  margin-bottom: 12px;
`,K=c.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: ${e=>e.theme.colors.primary.text};
`,ut=c.span`
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: ${e=>e.theme.colors.primary.accent};
`,wa=c.div`
  width: 544px;
  border: 1px solid;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 24px;
  border-color: ${e=>e.theme.colors.secondary.color5};
`,ya=c.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  color: #8f8f8f;
`,va=c.span`
  color: ${e=>e.theme.colors.primary.accent};
`,ka=c.form`
  display: flex;
  flex-direction: column;
`,ht=c.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  color: ${e=>e.theme.colors.primary.text};
`,ft=c.label`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`,pt=c.input`
  width: 14px;
  height: 14px;
  border: 1px solid;
  border-color: ${e=>e.theme.colors.primary.accent};
  color: ${e=>e.theme.colors.primary.bg};
  border-radius: 50%;
`,Pa=c.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`,mt=c.label`
  width: 544px;
  display: flex;
  gap: 8px;
  flex-direction: column;
`,Re=c.input`
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
`,Ma=c.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`,Ea=c.label`
  width: 544px;
  display: flex;
  gap: 16px;
  flex-direction: column;
  margin-bottom: 24px;
`,Sa=c.button`
  border-radius: 10px;
  padding: 10px 30px;
  width: 160px;
  color: ${e=>e.theme.colors.primary.bg};
  background-color: ${e=>e.theme.colors.primary.accent};
`,Ta=c.div`
  width: 544px;
  display: flex;
  justify-content: end;
`,ja=c.button``,Da=c.div`
  width: 544px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,$a=c.span`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: ${e=>e.theme.colors.primary.accent};
`,Ca=c.svg`
  background-color:;
`,Wa=({onClose:e})=>{const t=me(),{user:n}=Pe(),r={weight:.03,activity:.04},o={weight:.04,activity:.06},[s,i]=l.useState(r),[d,h]=l.useState(""),[f,x]=l.useState(""),[g,k]=l.useState(""),w=n.waterRate;l.useEffect(()=>{const p=u=>{u.code==="Escape"&&e()};return window.addEventListener("keydown",p),()=>{window.removeEventListener("keydown",p)}},[e]);const m=l.useCallback(()=>!d||!f?void 0:(d*s.weight+f/60*s.activity).toFixed(1),[s,d,f]),j=l.useMemo(()=>m(),[m]),y=p=>{const u=p.target.value,v=parseFloat(u);!isNaN(v)&&v>=1?k(v):u===""&&k("")},b=p=>{p.preventDefault();const u=parseFloat(j);if(!(f>0&&d>0||g>0)){alert("Fill all fields");return}t(Bt(g||u)).then(P=>{P.error?(console.log(P.error),alert("Something went wrong ")):(e(),h(""),x(""),k(""))})};return a.jsx(ma,{children:a.jsxs(ga,{children:[a.jsxs(Da,{children:[a.jsx(xa,{children:"My daily norma"}),a.jsx(ja,{onClick:()=>e(),children:a.jsx(Ca,{width:"24",height:"24",children:a.jsx("path",{d:"M6 18L18 6M6 6L18 18",stroke:"#407BFF",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),a.jsxs(ba,{children:[a.jsxs(K,{children:["For girl: ",a.jsx(ut,{children:"V=(M*0,03) + (T*0,4)"})]}),a.jsxs(K,{children:["For man: ",a.jsx(ut,{children:"V=(M*0,04) + (T*0,6)"})]})]}),a.jsx(wa,{children:a.jsxs(ya,{children:[a.jsx(va,{children:"*"})," V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]})}),a.jsxs(ka,{children:[a.jsxs(Ma,{children:[a.jsx(ht,{children:"Calculate your rate:"}),a.jsxs(Pa,{children:[a.jsxs(ft,{children:[a.jsx(pt,{type:"radio",name:"gender",value:"woman",onChange:()=>i(r),checked:!0}),a.jsx(K,{children:"For woman"})]}),a.jsxs(ft,{children:[a.jsx(pt,{type:"radio",name:"gender",value:"man",onChange:()=>i(o)}),a.jsx(K,{children:"For man"})]})]}),a.jsxs(mt,{children:[a.jsx(K,{children:"Your weight in kilograms:"}),a.jsx(Re,{type:"number",name:"userWeight",placeholder:"0",value:d,min:0,max:250,onChange:p=>h(p.target.value)})]}),a.jsxs(mt,{children:[a.jsx(K,{children:"The time of active participation in sports or other activities with a high physical. load in hours:"}),a.jsx(Re,{type:"number",name:"userActive",placeholder:"0",value:f,min:0,onChange:p=>x(p.target.value)})]}),a.jsxs(K,{children:["The required amount of water in liters per day:",a.jsxs($a,{children:[" ",j||(w/1e3).toFixed(1)," L"]})]})]}),a.jsxs(Ea,{children:[a.jsx(ht,{children:"Write down how much water you will drink:"}),a.jsx(Re,{type:"number",name:"userWaterPredict",placeholder:"0",value:g,min:0,onChange:y})]}),a.jsx(Ta,{children:a.jsx(Sa,{onClick:b,children:"Save"})})]})]})})},Oa=()=>{const[e,t]=l.useState(!1),{user:n}=Pe(),r=n.waterRate,o=()=>{t(!0)},s=()=>{t(!1)},i=(r/1e3).toFixed(1);return a.jsxs(da,{children:[a.jsx(ha,{children:"My daily norma"}),a.jsxs(ua,{children:[a.jsxs(pa,{children:[" ",i||r," L"]}),a.jsx(fa,{onClick:o,children:"Edit"})]}),e&&a.jsx(Wa,{onClose:s})]})};function Ra(e){return gt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Circle_Plus"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M15,12.5H12.5V15a.5.5,0,0,1-1,0V12.5H9a.5.5,0,0,1,0-1h2.5V9a.5.5,0,0,1,1,0v2.5H15A.5.5,0,0,1,15,12.5Z"},child:[]},{tag:"path",attr:{d:"M12,21.932A9.934,9.934,0,1,1,21.932,12,9.944,9.944,0,0,1,12,21.932ZM12,3.065A8.934,8.934,0,1,0,20.932,12,8.944,8.944,0,0,0,12,3.065Z"},child:[]}]}]}]})(e)}const Fa=c.input`
  width: 280px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
`,Na=c.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`,jt=c(Ra)`
  fill: ${e=>e.theme.colors.primary.bg};
  stroke: ${e=>e.theme.colors.primary.bg};
  width: 16px;
  height: 16px;

  @media (min-width: ${({theme:e})=>e.screens.tab}) {
    width: 24px;
    height: 24px;
  }
`,La=c.button`
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
    ${jt} {
      fill: ${e=>e.theme.colors.secondary.color4};
      stroke: ${e=>e.theme.colors.secondary.color4};
    }
  }

  @media (min-width: ${({theme:e})=>e.screens.tab}) {
    font-size: 18px;
    line-height: 1.33;
  }
`,za=({handleAddWaterClick:e})=>a.jsxs(Na,{children:[a.jsx(Fa,{type:"range"}),a.jsxs(La,{onClick:e,children:[a.jsx(jt,{})," Add water"]})]}),Ba=()=>{const{openModal:e}=l.useContext(He),t=()=>{e(a.jsx(a.Fragment,{children:a.jsx(Tt,{})}))};return a.jsxs(ko,{children:[a.jsxs(Po,{children:[a.jsx(Oa,{}),a.jsx(za,{handleAddWaterClick:t})]}),a.jsxs(Mo,{children:[a.jsx(la,{handleAddWaterClick:t}),a.jsx(fo,{})]})]})};export{Ba as default};
