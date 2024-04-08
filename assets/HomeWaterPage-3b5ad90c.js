import{o as G,r as l,h as ke,j as a,i as Ue,k as Et,_ as $,l as St,m as se,T as Tt,n as jt,p as Ve,q as Fe,v as Ne,w as me,x as He,y as he,z as Le,A as ye,B as Dt,C as $t,D as Ct,E as Wt,u as c,b as ze,I as je,c as ge,J as Ot,M as Be,K as Rt,O as xt,Q as Ft,G as bt,R as Nt,S as Qe}from"./index-ad3affef.js";import{b as Ht,a as Lt}from"./backgroundElementMainPageDesk2x@2-f75c1b59.js";function Xe(...e){return e.reduce((t,n)=>n==null?t:function(...o){t.apply(this,o),n.apply(this,o)},()=>{})}function zt(e,t=166){let n;function r(...o){const s=()=>{e.apply(this,o)};clearTimeout(n),n=setTimeout(s,t)}return r.clear=()=>{clearTimeout(n)},r}function fe(e){return G(e).defaultView||window}function Bt(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}const Yt=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function At(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function It(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=r=>e.ownerDocument.querySelector(`input[type="radio"]${r}`);let n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}function _t(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||It(e))}function qt(e){const t=[],n=[];return Array.from(e.querySelectorAll(Yt)).forEach((r,o)=>{const s=At(r);s===-1||!_t(r)||(s===0?t.push(r):n.push({documentOrder:o,tabIndex:s,node:r}))}),n.sort((r,o)=>r.tabIndex===o.tabIndex?r.documentOrder-o.documentOrder:r.tabIndex-o.tabIndex).map(r=>r.node).concat(t)}function Gt(){return!0}function Ut(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:r=!1,disableRestoreFocus:o=!1,getTabbable:s=qt,isEnabled:i=Gt,open:d}=e,u=l.useRef(!1),f=l.useRef(null),x=l.useRef(null),m=l.useRef(null),v=l.useRef(null),M=l.useRef(!1),b=l.useRef(null),y=ke(t.ref,b),p=l.useRef(null);l.useEffect(()=>{!d||!b.current||(M.current=!n)},[n,d]),l.useEffect(()=>{if(!d||!b.current)return;const h=G(b.current);return b.current.contains(h.activeElement)||(b.current.hasAttribute("tabIndex")||b.current.setAttribute("tabIndex","-1"),M.current&&b.current.focus()),()=>{o||(m.current&&m.current.focus&&(u.current=!0,m.current.focus()),m.current=null)}},[d]),l.useEffect(()=>{if(!d||!b.current)return;const h=G(b.current),w=O=>{p.current=O,!(r||!i()||O.key!=="Tab")&&h.activeElement===b.current&&O.shiftKey&&(u.current=!0,x.current&&x.current.focus())},k=()=>{const O=b.current;if(O===null)return;if(!h.hasFocus()||!i()||u.current){u.current=!1;return}if(O.contains(h.activeElement)||r&&h.activeElement!==f.current&&h.activeElement!==x.current)return;if(h.activeElement!==v.current)v.current=null;else if(v.current!==null)return;if(!M.current)return;let N=[];if((h.activeElement===f.current||h.activeElement===x.current)&&(N=s(b.current)),N.length>0){var B,H;const q=!!((B=p.current)!=null&&B.shiftKey&&((H=p.current)==null?void 0:H.key)==="Tab"),F=N[0],z=N[N.length-1];typeof F!="string"&&typeof z!="string"&&(q?z.focus():F.focus())}else O.focus()};h.addEventListener("focusin",k),h.addEventListener("keydown",w,!0);const R=setInterval(()=>{h.activeElement&&h.activeElement.tagName==="BODY"&&k()},50);return()=>{clearInterval(R),h.removeEventListener("focusin",k),h.removeEventListener("keydown",w,!0)}},[n,r,o,i,d,s]);const P=h=>{m.current===null&&(m.current=h.relatedTarget),M.current=!0,v.current=h.target;const w=t.props.onFocus;w&&w(h)},g=h=>{m.current===null&&(m.current=h.relatedTarget),M.current=!0};return a.jsxs(l.Fragment,{children:[a.jsx("div",{tabIndex:d?0:-1,onFocus:g,ref:f,"data-testid":"sentinelStart"}),l.cloneElement(t,{ref:y,onFocus:P}),a.jsx("div",{tabIndex:d?0:-1,onFocus:g,ref:x,"data-testid":"sentinelEnd"})]})}function Vt(e){const t=G(e);return t.body===e?fe(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function ue(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function Ke(e){return parseInt(fe(e).getComputedStyle(e).paddingRight,10)||0}function Qt(e){const n=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,r=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return n||r}function Je(e,t,n,r,o){const s=[t,n,...r];[].forEach.call(e.children,i=>{const d=s.indexOf(i)===-1,u=!Qt(i);d&&u&&ue(i,o)})}function De(e,t){let n=-1;return e.some((r,o)=>t(r)?(n=o,!0):!1),n}function Xt(e,t){const n=[],r=e.container;if(!t.disableScrollLock){if(Vt(r)){const i=Bt(G(r));n.push({value:r.style.paddingRight,property:"padding-right",el:r}),r.style.paddingRight=`${Ke(r)+i}px`;const d=G(r).querySelectorAll(".mui-fixed");[].forEach.call(d,u=>{n.push({value:u.style.paddingRight,property:"padding-right",el:u}),u.style.paddingRight=`${Ke(u)+i}px`})}let s;if(r.parentNode instanceof DocumentFragment)s=G(r).body;else{const i=r.parentElement,d=fe(r);s=(i==null?void 0:i.nodeName)==="HTML"&&d.getComputedStyle(i).overflowY==="scroll"?i:r}n.push({value:s.style.overflow,property:"overflow",el:s},{value:s.style.overflowX,property:"overflow-x",el:s},{value:s.style.overflowY,property:"overflow-y",el:s}),s.style.overflow="hidden"}return()=>{n.forEach(({value:s,el:i,property:d})=>{s?i.style.setProperty(d,s):i.style.removeProperty(d)})}}function Kt(e){const t=[];return[].forEach.call(e.children,n=>{n.getAttribute("aria-hidden")==="true"&&t.push(n)}),t}class Jt{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,n){let r=this.modals.indexOf(t);if(r!==-1)return r;r=this.modals.length,this.modals.push(t),t.modalRef&&ue(t.modalRef,!1);const o=Kt(n);Je(n,t.mount,t.modalRef,o,!0);const s=De(this.containers,i=>i.container===n);return s!==-1?(this.containers[s].modals.push(t),r):(this.containers.push({modals:[t],container:n,restore:null,hiddenSiblings:o}),r)}mount(t,n){const r=De(this.containers,s=>s.modals.indexOf(t)!==-1),o=this.containers[r];o.restore||(o.restore=Xt(o,n))}remove(t,n=!0){const r=this.modals.indexOf(t);if(r===-1)return r;const o=De(this.containers,i=>i.modals.indexOf(t)!==-1),s=this.containers[o];if(s.modals.splice(s.modals.indexOf(t),1),this.modals.splice(r,1),s.modals.length===0)s.restore&&s.restore(),t.modalRef&&ue(t.modalRef,n),Je(s.container,t.mount,t.modalRef,s.hiddenSiblings,!1),this.containers.splice(o,1);else{const i=s.modals[s.modals.length-1];i.modalRef&&ue(i.modalRef,!1)}return r}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}function Zt(e){return typeof e=="function"?e():e}function en(e){return e?e.props.hasOwnProperty("in"):!1}const tn=new Jt;function nn(e){const{container:t,disableEscapeKeyDown:n=!1,disableScrollLock:r=!1,manager:o=tn,closeAfterTransition:s=!1,onTransitionEnter:i,onTransitionExited:d,children:u,onClose:f,open:x,rootRef:m}=e,v=l.useRef({}),M=l.useRef(null),b=l.useRef(null),y=ke(b,m),[p,P]=l.useState(!x),g=en(u);let h=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(h=!1);const w=()=>G(M.current),k=()=>(v.current.modalRef=b.current,v.current.mount=M.current,v.current),R=()=>{o.mount(k(),{disableScrollLock:r}),b.current&&(b.current.scrollTop=0)},O=Ue(()=>{const S=Zt(t)||w().body;o.add(k(),S),b.current&&R()}),N=l.useCallback(()=>o.isTopModal(k()),[o]),B=Ue(S=>{M.current=S,S&&(x&&N()?R():b.current&&ue(b.current,h))}),H=l.useCallback(()=>{o.remove(k(),h)},[h,o]);l.useEffect(()=>()=>{H()},[H]),l.useEffect(()=>{x?O():(!g||!s)&&H()},[x,H,g,s,O]);const q=S=>D=>{var Y;(Y=S.onKeyDown)==null||Y.call(S,D),!(D.key!=="Escape"||D.which===229||!N())&&(n||(D.stopPropagation(),f&&f(D,"escapeKeyDown")))},F=S=>D=>{var Y;(Y=S.onClick)==null||Y.call(S,D),D.target===D.currentTarget&&f&&f(D,"backdropClick")};return{getRootProps:(S={})=>{const D=Et(e);delete D.onTransitionEnter,delete D.onTransitionExited;const Y=$({},D,S);return $({role:"presentation"},Y,{onKeyDown:q(Y),ref:y})},getBackdropProps:(S={})=>{const D=S;return $({"aria-hidden":!0},D,{onClick:F(D),open:x})},getTransitionProps:()=>{const S=()=>{P(!1),i&&i()},D=()=>{P(!0),d&&d(),s&&H()};return{onEnter:Xe(S,u==null?void 0:u.props.onEnter),onExited:Xe(D,u==null?void 0:u.props.onExited)}},rootRef:y,portalRef:B,isTopModal:N,exited:p,hasTransition:g}}const rn=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],on={entering:{opacity:1},entered:{opacity:1}},an=l.forwardRef(function(t,n){const r=St(),o={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:s,appear:i=!0,children:d,easing:u,in:f,onEnter:x,onEntered:m,onEntering:v,onExit:M,onExited:b,onExiting:y,style:p,timeout:P=o,TransitionComponent:g=Tt}=t,h=se(t,rn),w=l.useRef(null),k=ke(w,d.ref,n),R=j=>L=>{if(j){const S=w.current;L===void 0?j(S):j(S,L)}},O=R(v),N=R((j,L)=>{jt(j);const S=Ve({style:p,timeout:P,easing:u},{mode:"enter"});j.style.webkitTransition=r.transitions.create("opacity",S),j.style.transition=r.transitions.create("opacity",S),x&&x(j,L)}),B=R(m),H=R(y),q=R(j=>{const L=Ve({style:p,timeout:P,easing:u},{mode:"exit"});j.style.webkitTransition=r.transitions.create("opacity",L),j.style.transition=r.transitions.create("opacity",L),M&&M(j)}),F=R(b),z=j=>{s&&s(w.current,j)};return a.jsx(g,$({appear:i,in:f,nodeRef:w,onEnter:N,onEntered:B,onEntering:O,onExit:q,onExited:F,onExiting:H,addEndListener:z,timeout:P},h,{children:(j,L)=>l.cloneElement(d,$({style:$({opacity:0,visibility:j==="exited"&&!f?"hidden":void 0},on[j],p,d.props.style),ref:k},L))}))}),sn=an;function cn(e){return Fe("MuiBackdrop",e)}Ne("MuiBackdrop",["root","invisible"]);const ln=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],dn=e=>{const{classes:t,invisible:n}=e;return Le({root:["root",n&&"invisible"]},cn,t)},un=me("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})(({ownerState:e})=>$({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),hn=l.forwardRef(function(t,n){var r,o,s;const i=He({props:t,name:"MuiBackdrop"}),{children:d,className:u,component:f="div",components:x={},componentsProps:m={},invisible:v=!1,open:M,slotProps:b={},slots:y={},TransitionComponent:p=sn,transitionDuration:P}=i,g=se(i,ln),h=$({},i,{component:f,invisible:v}),w=dn(h),k=(r=b.root)!=null?r:m.root;return a.jsx(p,$({in:M,timeout:P},g,{children:a.jsx(un,$({"aria-hidden":!0},k,{as:(o=(s=y.root)!=null?s:x.Root)!=null?o:f,className:he(w.root,u,k==null?void 0:k.className),ownerState:$({},h,k==null?void 0:k.ownerState),classes:w,ref:n,children:d}))}))}),fn=hn;function pn(e){return Fe("MuiModal",e)}Ne("MuiModal",["root","hidden","backdrop"]);const mn=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],gn=e=>{const{open:t,exited:n,classes:r}=e;return Le({root:["root",!t&&n&&"hidden"],backdrop:["backdrop"]},pn,r)},xn=me("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})(({theme:e,ownerState:t})=>$({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),bn=me(fn,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),wn=l.forwardRef(function(t,n){var r,o,s,i,d,u;const f=He({name:"MuiModal",props:t}),{BackdropComponent:x=bn,BackdropProps:m,className:v,closeAfterTransition:M=!1,children:b,container:y,component:p,components:P={},componentsProps:g={},disableAutoFocus:h=!1,disableEnforceFocus:w=!1,disableEscapeKeyDown:k=!1,disablePortal:R=!1,disableRestoreFocus:O=!1,disableScrollLock:N=!1,hideBackdrop:B=!1,keepMounted:H=!1,onBackdropClick:q,open:F,slotProps:z,slots:j}=f,L=se(f,mn),S=$({},f,{closeAfterTransition:M,disableAutoFocus:h,disableEnforceFocus:w,disableEscapeKeyDown:k,disablePortal:R,disableRestoreFocus:O,disableScrollLock:N,hideBackdrop:B,keepMounted:H}),{getRootProps:D,getBackdropProps:Y,getTransitionProps:xe,portalRef:Ee,isTopModal:be,exited:I,hasTransition:we}=nn($({},S,{rootRef:n})),X=$({},S,{exited:I}),U=gn(X),Z={};if(b.props.tabIndex===void 0&&(Z.tabIndex="-1"),we){const{onEnter:T,onExited:W}=xe();Z.onEnter=T,Z.onExited=W}const ee=(r=(o=j==null?void 0:j.root)!=null?o:P.Root)!=null?r:xn,ie=(s=(i=j==null?void 0:j.backdrop)!=null?i:P.Backdrop)!=null?s:x,ce=(d=z==null?void 0:z.root)!=null?d:g.root,te=(u=z==null?void 0:z.backdrop)!=null?u:g.backdrop,Se=ye({elementType:ee,externalSlotProps:ce,externalForwardedProps:L,getSlotProps:D,additionalProps:{ref:n,as:p},ownerState:X,className:he(v,ce==null?void 0:ce.className,U==null?void 0:U.root,!X.open&&X.exited&&(U==null?void 0:U.hidden))}),Te=ye({elementType:ie,externalSlotProps:te,additionalProps:m,getSlotProps:T=>Y($({},T,{onClick:W=>{q&&q(W),T!=null&&T.onClick&&T.onClick(W)}})),className:he(te==null?void 0:te.className,m==null?void 0:m.className,U==null?void 0:U.backdrop),ownerState:X});return!H&&!F&&(!we||I)?null:a.jsx(Dt,{ref:Ee,container:y,disablePortal:R,children:a.jsxs(ee,$({},Se,{children:[!B&&x?a.jsx(ie,$({},Te)):null,a.jsx(Ut,{disableEnforceFocus:w,disableAutoFocus:h,disableRestoreFocus:O,isEnabled:be,open:F,children:l.cloneElement(b,Z)})]}))})}),yn=wn;function vn(e){return Fe("MuiPopover",e)}Ne("MuiPopover",["root","paper"]);const kn=["onEntering"],Pn=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps","disableScrollLock"],Mn=["slotProps"];function Ze(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.height/2:t==="bottom"&&(n=e.height),n}function et(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.width/2:t==="right"&&(n=e.width),n}function tt(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function $e(e){return typeof e=="function"?e():e}const En=e=>{const{classes:t}=e;return Le({root:["root"],paper:["paper"]},vn,t)},Sn=me(yn,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Tn=me($t,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),jn=l.forwardRef(function(t,n){var r,o,s;const i=He({props:t,name:"MuiPopover"}),{action:d,anchorEl:u,anchorOrigin:f={vertical:"top",horizontal:"left"},anchorPosition:x,anchorReference:m="anchorEl",children:v,className:M,container:b,elevation:y=8,marginThreshold:p=16,open:P,PaperProps:g={},slots:h,slotProps:w,transformOrigin:k={vertical:"top",horizontal:"left"},TransitionComponent:R=Wt,transitionDuration:O="auto",TransitionProps:{onEntering:N}={},disableScrollLock:B=!1}=i,H=se(i.TransitionProps,kn),q=se(i,Pn),F=(r=w==null?void 0:w.paper)!=null?r:g,z=l.useRef(),j=ke(z,F.ref),L=$({},i,{anchorOrigin:f,anchorReference:m,elevation:y,marginThreshold:p,externalPaperSlotProps:F,transformOrigin:k,TransitionComponent:R,transitionDuration:O,TransitionProps:H}),S=En(L),D=l.useCallback(()=>{if(m==="anchorPosition")return x;const T=$e(u),A=(T&&T.nodeType===1?T:G(z.current).body).getBoundingClientRect();return{top:A.top+Ze(A,f.vertical),left:A.left+et(A,f.horizontal)}},[u,f.horizontal,f.vertical,x,m]),Y=l.useCallback(T=>({vertical:Ze(T,k.vertical),horizontal:et(T,k.horizontal)}),[k.horizontal,k.vertical]),xe=l.useCallback(T=>{const W={width:T.offsetWidth,height:T.offsetHeight},A=Y(W);if(m==="none")return{top:null,left:null,transformOrigin:tt(A)};const Ye=D();let ne=Ye.top-A.vertical,re=Ye.left-A.horizontal;const Ae=ne+W.height,Ie=re+W.width,_e=fe($e(u)),qe=_e.innerHeight-p,Ge=_e.innerWidth-p;if(p!==null&&ne<p){const _=ne-p;ne-=_,A.vertical+=_}else if(p!==null&&Ae>qe){const _=Ae-qe;ne-=_,A.vertical+=_}if(p!==null&&re<p){const _=re-p;re-=_,A.horizontal+=_}else if(Ie>Ge){const _=Ie-Ge;re-=_,A.horizontal+=_}return{top:`${Math.round(ne)}px`,left:`${Math.round(re)}px`,transformOrigin:tt(A)}},[u,m,D,Y,p]),[Ee,be]=l.useState(P),I=l.useCallback(()=>{const T=z.current;if(!T)return;const W=xe(T);W.top!==null&&(T.style.top=W.top),W.left!==null&&(T.style.left=W.left),T.style.transformOrigin=W.transformOrigin,be(!0)},[xe]);l.useEffect(()=>(B&&window.addEventListener("scroll",I),()=>window.removeEventListener("scroll",I)),[u,B,I]);const we=(T,W)=>{N&&N(T,W),I()},X=()=>{be(!1)};l.useEffect(()=>{P&&I()}),l.useImperativeHandle(d,()=>P?{updatePosition:()=>{I()}}:null,[P,I]),l.useEffect(()=>{if(!P)return;const T=zt(()=>{I()}),W=fe(u);return W.addEventListener("resize",T),()=>{T.clear(),W.removeEventListener("resize",T)}},[u,P,I]);let U=O;O==="auto"&&!R.muiSupportAuto&&(U=void 0);const Z=b||(u?G($e(u)).body:void 0),ee=(o=h==null?void 0:h.root)!=null?o:Sn,ie=(s=h==null?void 0:h.paper)!=null?s:Tn,ce=ye({elementType:ie,externalSlotProps:$({},F,{style:Ee?F.style:$({},F.style,{opacity:0})}),additionalProps:{elevation:y,ref:j},ownerState:L,className:he(S.paper,F==null?void 0:F.className)}),te=ye({elementType:ee,externalSlotProps:(w==null?void 0:w.root)||{},externalForwardedProps:q,additionalProps:{ref:n,slotProps:{backdrop:{invisible:!0}},container:Z,open:P},ownerState:L,className:he(S.root,M)}),{slotProps:Se}=te,Te=se(te,Mn);return a.jsx(ee,$({},Te,!Ct(ee)&&{slotProps:Se,disableScrollLock:B},{children:a.jsx(R,$({appear:!0,in:P,onEntering:we,onExited:X,timeout:U},H,{children:a.jsx(ie,$({},ce,{children:v}))}))}))}),Dn=jn;function C(e){const t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new e.constructor(+e):typeof e=="number"||t==="[object Number]"||typeof e=="string"||t==="[object String]"?new Date(e):new Date(NaN)}function V(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}function Ce(e,t){const n=C(e);if(isNaN(t))return V(e,NaN);if(!t)return n;const r=n.getDate(),o=V(e,n.getTime());o.setMonth(n.getMonth()+t+1,0);const s=o.getDate();return r>=s?o:(n.setFullYear(o.getFullYear(),o.getMonth(),r),n)}const wt=6048e5,$n=864e5;let Cn={};function Pe(){return Cn}function pe(e,t){var d,u,f,x;const n=Pe(),r=(t==null?void 0:t.weekStartsOn)??((u=(d=t==null?void 0:t.locale)==null?void 0:d.options)==null?void 0:u.weekStartsOn)??n.weekStartsOn??((x=(f=n.locale)==null?void 0:f.options)==null?void 0:x.weekStartsOn)??0,o=C(e),s=o.getDay(),i=(s<r?7:0)+s-r;return o.setDate(o.getDate()-i),o.setHours(0,0,0,0),o}function ve(e){return pe(e,{weekStartsOn:1})}function yt(e){const t=C(e),n=t.getFullYear(),r=V(e,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const o=ve(r),s=V(e,0);s.setFullYear(n,0,4),s.setHours(0,0,0,0);const i=ve(s);return t.getTime()>=o.getTime()?n+1:t.getTime()>=i.getTime()?n:n-1}function nt(e){const t=C(e);return t.setHours(0,0,0,0),t}function rt(e){const t=C(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function Wn(e,t){const n=nt(e),r=nt(t),o=+n-rt(n),s=+r-rt(r);return Math.round((o-s)/$n)}function On(e){const t=yt(e),n=V(e,0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),ve(n)}function Rn(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function Fn(e){if(!Rn(e)&&typeof e!="number")return!1;const t=C(e);return!isNaN(Number(t))}function ot(e){const t=C(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}function Nn(e,t){const n=C(e.start),r=C(e.end);let o=+n>+r;const s=o?+n:+r,i=o?r:n;i.setHours(0,0,0,0);let d=(t==null?void 0:t.step)??1;if(!d)return[];d<0&&(d=-d,o=!o);const u=[];for(;+i<=s;)u.push(C(i)),i.setDate(i.getDate()+d),i.setHours(0,0,0,0);return o?u.reverse():u}function at(e){const t=C(e);return t.setDate(1),t.setHours(0,0,0,0),t}function Hn(e){const t=C(e),n=V(e,0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}const Ln={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},zn=(e,t,n)=>{let r;const o=Ln[e];return typeof o=="string"?r=o:t===1?r=o.one:r=o.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function We(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const Bn={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Yn={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},An={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},In={date:We({formats:Bn,defaultWidth:"full"}),time:We({formats:Yn,defaultWidth:"full"}),dateTime:We({formats:An,defaultWidth:"full"})},_n={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},qn=(e,t,n,r)=>_n[e];function le(e){return(t,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let o;if(r==="formatting"&&e.formattingValues){const i=e.defaultFormattingWidth||e.defaultWidth,d=n!=null&&n.width?String(n.width):i;o=e.formattingValues[d]||e.formattingValues[i]}else{const i=e.defaultWidth,d=n!=null&&n.width?String(n.width):e.defaultWidth;o=e.values[d]||e.values[i]}const s=e.argumentCallback?e.argumentCallback(t):t;return o[s]}}const Gn={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Un={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Vn={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Qn={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Xn={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Kn={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Jn=(e,t)=>{const n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},Zn={ordinalNumber:Jn,era:le({values:Gn,defaultWidth:"wide"}),quarter:le({values:Un,defaultWidth:"wide",argumentCallback:e=>e-1}),month:le({values:Vn,defaultWidth:"wide"}),day:le({values:Qn,defaultWidth:"wide"}),dayPeriod:le({values:Xn,defaultWidth:"wide",formattingValues:Kn,defaultFormattingWidth:"wide"})};function de(e){return(t,n={})=>{const r=n.width,o=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],s=t.match(o);if(!s)return null;const i=s[0],d=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],u=Array.isArray(d)?tr(d,m=>m.test(i)):er(d,m=>m.test(i));let f;f=e.valueCallback?e.valueCallback(u):u,f=n.valueCallback?n.valueCallback(f):f;const x=t.slice(i.length);return{value:f,rest:x}}}function er(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function tr(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function nr(e){return(t,n={})=>{const r=t.match(e.matchPattern);if(!r)return null;const o=r[0],s=t.match(e.parsePattern);if(!s)return null;let i=e.valueCallback?e.valueCallback(s[0]):s[0];i=n.valueCallback?n.valueCallback(i):i;const d=t.slice(o.length);return{value:i,rest:d}}}const rr=/^(\d+)(th|st|nd|rd)?/i,or=/\d+/i,ar={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},sr={any:[/^b/i,/^(a|c)/i]},ir={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},cr={any:[/1/i,/2/i,/3/i,/4/i]},lr={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},dr={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},ur={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},hr={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},fr={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},pr={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},mr={ordinalNumber:nr({matchPattern:rr,parsePattern:or,valueCallback:e=>parseInt(e,10)}),era:de({matchPatterns:ar,defaultMatchWidth:"wide",parsePatterns:sr,defaultParseWidth:"any"}),quarter:de({matchPatterns:ir,defaultMatchWidth:"wide",parsePatterns:cr,defaultParseWidth:"any",valueCallback:e=>e+1}),month:de({matchPatterns:lr,defaultMatchWidth:"wide",parsePatterns:dr,defaultParseWidth:"any"}),day:de({matchPatterns:ur,defaultMatchWidth:"wide",parsePatterns:hr,defaultParseWidth:"any"}),dayPeriod:de({matchPatterns:fr,defaultMatchWidth:"any",parsePatterns:pr,defaultParseWidth:"any"})},gr={code:"en-US",formatDistance:zn,formatLong:In,formatRelative:qn,localize:Zn,match:mr,options:{weekStartsOn:0,firstWeekContainsDate:1}};function xr(e){const t=C(e);return Wn(t,Hn(t))+1}function br(e){const t=C(e),n=+ve(t)-+On(t);return Math.round(n/wt)+1}function vt(e,t){var x,m,v,M;const n=C(e),r=n.getFullYear(),o=Pe(),s=(t==null?void 0:t.firstWeekContainsDate)??((m=(x=t==null?void 0:t.locale)==null?void 0:x.options)==null?void 0:m.firstWeekContainsDate)??o.firstWeekContainsDate??((M=(v=o.locale)==null?void 0:v.options)==null?void 0:M.firstWeekContainsDate)??1,i=V(e,0);i.setFullYear(r+1,0,s),i.setHours(0,0,0,0);const d=pe(i,t),u=V(e,0);u.setFullYear(r,0,s),u.setHours(0,0,0,0);const f=pe(u,t);return n.getTime()>=d.getTime()?r+1:n.getTime()>=f.getTime()?r:r-1}function wr(e,t){var d,u,f,x;const n=Pe(),r=(t==null?void 0:t.firstWeekContainsDate)??((u=(d=t==null?void 0:t.locale)==null?void 0:d.options)==null?void 0:u.firstWeekContainsDate)??n.firstWeekContainsDate??((x=(f=n.locale)==null?void 0:f.options)==null?void 0:x.firstWeekContainsDate)??1,o=vt(e,t),s=V(e,0);return s.setFullYear(o,0,r),s.setHours(0,0,0,0),pe(s,t)}function yr(e,t){const n=C(e),r=+pe(n,t)-+wr(n,t);return Math.round(r/wt)+1}function E(e,t){const n=e<0?"-":"",r=Math.abs(e).toString().padStart(t,"0");return n+r}const Q={y(e,t){const n=e.getFullYear(),r=n>0?n:1-n;return E(t==="yy"?r%100:r,t.length)},M(e,t){const n=e.getMonth();return t==="M"?String(n+1):E(n+1,2)},d(e,t){return E(e.getDate(),t.length)},a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(e,t){return E(e.getHours()%12||12,t.length)},H(e,t){return E(e.getHours(),t.length)},m(e,t){return E(e.getMinutes(),t.length)},s(e,t){return E(e.getSeconds(),t.length)},S(e,t){const n=t.length,r=e.getMilliseconds(),o=Math.trunc(r*Math.pow(10,n-3));return E(o,t.length)}},oe={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},st={G:function(e,t,n){const r=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if(t==="yo"){const r=e.getFullYear(),o=r>0?r:1-r;return n.ordinalNumber(o,{unit:"year"})}return Q.y(e,t)},Y:function(e,t,n,r){const o=vt(e,r),s=o>0?o:1-o;if(t==="YY"){const i=s%100;return E(i,2)}return t==="Yo"?n.ordinalNumber(s,{unit:"year"}):E(s,t.length)},R:function(e,t){const n=yt(e);return E(n,t.length)},u:function(e,t){const n=e.getFullYear();return E(n,t.length)},Q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return E(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return E(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){const r=e.getMonth();switch(t){case"M":case"MM":return Q.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){const r=e.getMonth();switch(t){case"L":return String(r+1);case"LL":return E(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){const o=yr(e,r);return t==="wo"?n.ordinalNumber(o,{unit:"week"}):E(o,t.length)},I:function(e,t,n){const r=br(e);return t==="Io"?n.ordinalNumber(r,{unit:"week"}):E(r,t.length)},d:function(e,t,n){return t==="do"?n.ordinalNumber(e.getDate(),{unit:"date"}):Q.d(e,t)},D:function(e,t,n){const r=xr(e);return t==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):E(r,t.length)},E:function(e,t,n){const r=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){const o=e.getDay(),s=(o-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(s);case"ee":return E(s,2);case"eo":return n.ordinalNumber(s,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});case"eeee":default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){const o=e.getDay(),s=(o-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(s);case"cc":return E(s,t.length);case"co":return n.ordinalNumber(s,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});case"cccc":default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(e,t,n){const r=e.getDay(),o=r===0?7:r;switch(t){case"i":return String(o);case"ii":return E(o,t.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){const o=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(e,t,n){const r=e.getHours();let o;switch(r===12?o=oe.noon:r===0?o=oe.midnight:o=r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(e,t,n){const r=e.getHours();let o;switch(r>=17?o=oe.evening:r>=12?o=oe.afternoon:r>=4?o=oe.morning:o=oe.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(e,t,n){if(t==="ho"){let r=e.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return Q.h(e,t)},H:function(e,t,n){return t==="Ho"?n.ordinalNumber(e.getHours(),{unit:"hour"}):Q.H(e,t)},K:function(e,t,n){const r=e.getHours()%12;return t==="Ko"?n.ordinalNumber(r,{unit:"hour"}):E(r,t.length)},k:function(e,t,n){let r=e.getHours();return r===0&&(r=24),t==="ko"?n.ordinalNumber(r,{unit:"hour"}):E(r,t.length)},m:function(e,t,n){return t==="mo"?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):Q.m(e,t)},s:function(e,t,n){return t==="so"?n.ordinalNumber(e.getSeconds(),{unit:"second"}):Q.s(e,t)},S:function(e,t){return Q.S(e,t)},X:function(e,t,n){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(t){case"X":return ct(r);case"XXXX":case"XX":return J(r);case"XXXXX":case"XXX":default:return J(r,":")}},x:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"x":return ct(r);case"xxxx":case"xx":return J(r);case"xxxxx":case"xxx":default:return J(r,":")}},O:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+it(r,":");case"OOOO":default:return"GMT"+J(r,":")}},z:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+it(r,":");case"zzzz":default:return"GMT"+J(r,":")}},t:function(e,t,n){const r=Math.trunc(e.getTime()/1e3);return E(r,t.length)},T:function(e,t,n){const r=e.getTime();return E(r,t.length)}};function it(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),o=Math.trunc(r/60),s=r%60;return s===0?n+String(o):n+String(o)+t+E(s,2)}function ct(e,t){return e%60===0?(e>0?"-":"+")+E(Math.abs(e)/60,2):J(e,t)}function J(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),o=E(Math.trunc(r/60),2),s=E(r%60,2);return n+o+t+s}const lt=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},kt=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},vr=(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],r=n[1],o=n[2];if(!o)return lt(e,t);let s;switch(r){case"P":s=t.dateTime({width:"short"});break;case"PP":s=t.dateTime({width:"medium"});break;case"PPP":s=t.dateTime({width:"long"});break;case"PPPP":default:s=t.dateTime({width:"full"});break}return s.replace("{{date}}",lt(r,t)).replace("{{time}}",kt(o,t))},kr={p:kt,P:vr},Pr=/^D+$/,Mr=/^Y+$/,Er=["D","DD","YY","YYYY"];function Sr(e){return Pr.test(e)}function Tr(e){return Mr.test(e)}function jr(e,t,n){const r=Dr(e,t,n);if(console.warn(r),Er.includes(e))throw new RangeError(r)}function Dr(e,t,n){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const $r=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Cr=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Wr=/^'([^]*?)'?$/,Or=/''/g,Rr=/[a-zA-Z]/;function ae(e,t,n){var x,m,v,M,b,y,p,P;const r=Pe(),o=(n==null?void 0:n.locale)??r.locale??gr,s=(n==null?void 0:n.firstWeekContainsDate)??((m=(x=n==null?void 0:n.locale)==null?void 0:x.options)==null?void 0:m.firstWeekContainsDate)??r.firstWeekContainsDate??((M=(v=r.locale)==null?void 0:v.options)==null?void 0:M.firstWeekContainsDate)??1,i=(n==null?void 0:n.weekStartsOn)??((y=(b=n==null?void 0:n.locale)==null?void 0:b.options)==null?void 0:y.weekStartsOn)??r.weekStartsOn??((P=(p=r.locale)==null?void 0:p.options)==null?void 0:P.weekStartsOn)??0,d=C(e);if(!Fn(d))throw new RangeError("Invalid time value");let u=t.match(Cr).map(g=>{const h=g[0];if(h==="p"||h==="P"){const w=kr[h];return w(g,o.formatLong)}return g}).join("").match($r).map(g=>{if(g==="''")return{isToken:!1,value:"'"};const h=g[0];if(h==="'")return{isToken:!1,value:Fr(g)};if(st[h])return{isToken:!0,value:g};if(h.match(Rr))throw new RangeError("Format string contains an unescaped latin alphabet character `"+h+"`");return{isToken:!1,value:g}});o.localize.preprocessor&&(u=o.localize.preprocessor(d,u));const f={firstWeekContainsDate:s,weekStartsOn:i,locale:o};return u.map(g=>{if(!g.isToken)return g.value;const h=g.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&Tr(h)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&Sr(h))&&jr(h,t,String(e));const w=st[h[0]];return w(d,h,o.localize,f)}).join("")}function Fr(e){const t=e.match(Wr);return t?t[1].replace(Or,"'"):e}function Nr(e,t){const n=C(e),r=C(t);return n.getTime()>r.getTime()}function Hr(e,t){const n=C(e),r=C(t);return+n<+r}const Lr=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",...e},l.createElement("title",null,`
		solidleft
	`),l.createElement("path",{d:"M10.293 16.707c-0.187-0.188-0.292-0.442-0.292-0.707s0.105-0.519 0.292-0.707l10-10c0.092-0.098 0.202-0.177 0.325-0.232s0.255-0.084 0.389-0.086c0.134-0.002 0.268 0.022 0.392 0.073s0.238 0.125 0.333 0.22c0.095 0.095 0.17 0.208 0.22 0.333s0.075 0.258 0.073 0.392c-0.002 0.134-0.032 0.267-0.086 0.389s-0.133 0.233-0.232 0.325l-9.293 9.293 9.293 9.293c0.098 0.091 0.177 0.202 0.232 0.325s0.084 0.255 0.086 0.389c0.002 0.134-0.022 0.268-0.073 0.392s-0.125 0.238-0.22 0.333c-0.095 0.095-0.208 0.17-0.333 0.22s-0.258 0.075-0.392 0.073c-0.134-0.002-0.267-0.032-0.389-0.086s-0.233-0.134-0.325-0.232l-10-10z"})),zr=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",...e},l.createElement("title",null,`
		solid-right
	`),l.createElement("path",{d:"M21.707 16.707c0.187-0.188 0.292-0.442 0.292-0.707s-0.105-0.519-0.292-0.707l-10-10c-0.092-0.098-0.202-0.177-0.325-0.232s-0.255-0.084-0.389-0.086c-0.134-0.002-0.268 0.022-0.392 0.073s-0.238 0.125-0.333 0.22c-0.095 0.095-0.17 0.208-0.22 0.333s-0.075 0.258-0.073 0.392c0.002 0.134 0.032 0.267 0.086 0.389s0.133 0.233 0.232 0.325l9.293 9.293-9.293 9.293c-0.098 0.091-0.177 0.202-0.232 0.325s-0.084 0.255-0.086 0.389c-0.002 0.134 0.022 0.268 0.073 0.392s0.125 0.238 0.22 0.333c0.095 0.095 0.208 0.17 0.333 0.22s0.258 0.075 0.392 0.073c0.134-0.002 0.267-0.032 0.389-0.086s0.233-0.134 0.325-0.232l10-10z"})),Br=c.div`
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
`,Yr=c(Lr)`

fill: ${e=>e.theme.colors.primary.accent};
  width: 14px;
  height: auto;


`,Ar=c(zr)`

fill: ${e=>e.theme.colors.primary.accent};
  width: 14px;
  height: auto;
 
 
`,Ir=({selectedDate:e,setSelectedDate:t,setCurrentMonth:n,setSelectedDay:r})=>{const o=new Date().getMonth(),s=new Date().getFullYear(),i=Hr(e,Ce(new Date,-12)),d=Nr(e,new Date(s,o,1)),u=ae(e,"MMMM"),f=e.getFullYear(),x=()=>{t(Ce(e,-1)),r(null),n(v=>v-1)},m=()=>{t(Ce(e,1)),r(null),n(v=>v+1)};return a.jsxs(Br,{children:[a.jsx(dt,{onClick:x,disabled:i,children:a.jsx(Yr,{})}),a.jsx("span",{children:`${u}, ${f}`}),a.jsx(dt,{onClick:m,disabled:d,children:a.jsx(Ar,{})})]})},_r=c.div`
display: flex;
flex-direction:column;
gap: 16px;
padding: 24px 13px;


border-radius: 10px;
background:${e=>e.theme.colors.primary.bg};
box-shadow: 0px 4px 4px 0px rgba(64, 123, 255, 0.30);



`,qr=c.h2`
color:${e=>e.theme.colors.primary.accent};
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 1.25;
`,Gr=c.ul`
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

`,Ur=({selectedDate:e,selectedDayData:t})=>{const n=ae(e,"MMMM"),r=e.getDate(),o=ze().user.waterRate,s=o?(o/1e3).toFixed(1):"0",i=t?(t.waterRate/1e3).toFixed(1):s,d=t?t.percentagePerDay:"0",u=t?t.totalPortions:"0";return a.jsxs(_r,{children:[a.jsxs(qr,{children:[" ",r,", ",n]}),a.jsxs(Gr,{children:[a.jsxs(Oe,{children:["Daily Norma: ",a.jsxs("span",{children:[i," L"]})]}),a.jsxs(Oe,{children:["Fulfillment of the daily norm: ",a.jsxs("span",{children:[d,"%"]})]}),a.jsxs(Oe,{children:["How many servings of water: ",a.jsx("span",{children:u})]})]})]})},Vr=c.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,Qr=c.div`
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
 
`,Xr=c.ul`
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
`,Kr=c.li`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  position: relative;
  cursor: pointer;
  padding: 0px;

  @media (min-width: ${({theme:e})=>e.screens.tab}) {
  }
`,Jr=c.div`
  width: 34px;
  height: 34px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${e=>e.theme.colors.primary.bg};

  border: 2px solid
    ${({theme:e,percentage:t})=>t<100?e.colors.secondary.color4:e.colors.primary.bg};
`,Zr=c.p`
  z-index: 1;
  margin: 0;
`,eo=c.p`
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
`,to=e=>e.water.waterDayList,no=e=>e.water.waterMonthList,ro=e=>e.water.waterRate,Me=()=>{const e=je(to),t=je(no),n=je(ro);return{waterDayList:e,waterMonthList:t,waterRate:n}},oo=()=>{const[e,t]=l.useState(new Date),[n,r]=l.useState(e.getMonth()),[o,s]=l.useState(null),[i,d]=l.useState(null),u=ge(),f=Me().waterMonthList,x=()=>{d(null)},m=!!i,v=m?"simple-popover":void 0;l.useEffect(()=>{const y=at(e),p=ot(e);o===null&&u(Ot({startDate:y,endDate:p}))},[n,u,e,o]);const M=(y,p)=>{t(p),d(y.currentTarget),s(p.getDate())},b=f&&f.find(y=>{const[p]=y.date.split(",");return parseInt(p)===e.getDate()});return a.jsxs(Vr,{children:[a.jsxs(Qr,{children:[a.jsx("h3",{children:"Month"}),a.jsx(Ir,{selectedDate:e,setSelectedDate:t,setCurrentMonth:r,setSelectedDay:s})]}),a.jsx(Xr,{children:Nn({start:at(e),end:ot(e)}).map((y,p)=>{const P=y.getDate(),g=f.find(w=>{const[k]=w.date.split(",");return parseInt(k)===P}),h=g?g.percentagePerDay:null;return a.jsxs(Kr,{onClick:w=>M(w,y),children:[a.jsx(Jr,{percentage:h,children:a.jsx(Zr,{children:P})}),a.jsxs(eo,{children:[h||0,"%"]})]},p)})}),a.jsx(Dn,{id:v,open:m,anchorEl:i,onClose:x,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"bottom",horizontal:"right"},children:a.jsx(Ur,{selectedDate:e,selectedDayData:b})})]})},ao="/Smart-Foxes-WaterTracker/assets/botleHomeDesk-3ae51194.png",so="/Smart-Foxes-WaterTracker/assets/botlteHomeDesk2x-9a54d3e4.png",io="/Smart-Foxes-WaterTracker/assets/backgroundHomeTab-586d978e.png",co="/Smart-Foxes-WaterTracker/assets/BackgroundHomeTab2x-642c3d3e.png",lo="/Smart-Foxes-WaterTracker/assets/bottleHomeTab-0bf3952c.png",uo="/Smart-Foxes-WaterTracker/assets/bottleHomeTab2x-ed4a96a1.png",ho="/Smart-Foxes-WaterTracker/assets/backgroundHomeMob-d1e9a558.png",fo="/Smart-Foxes-WaterTracker/assets/backgroundHomeMob2x-089f92e0.png",po="/Smart-Foxes-WaterTracker/assets/bottleHomeMob-1cd9cdb8.png",mo="/Smart-Foxes-WaterTracker/assets/bottleHomeMob2x-0e2d77ce.png",go=c.main`
display: flex;
flex-direction:column;

align-items: center;

color:${e=>e.theme.colors.primary.text};
background-color: ${e=>e.theme.colors.primary.bg};
background-image: image-set(
        url(${po}) 1x,
        url(${mo}) 2x
      ),
      image-set(
        url(${ho}) 1x,
        url(${fo}) 2x
      );
background-position: center 106px, center;
background-size: auto, 100vw auto;
background-repeat: no-repeat;


@media (min-width: ${({theme:e})=>e.screens.tab}){
  background-image: image-set(
        url(${lo}) 1x,
        url(${uo}) 2x
      ),
      image-set(
        url(${io}) 1x,
        url(${co}) 2x
      );
background-position: center 40px, center;

}


@media (min-width: ${({theme:e})=>e.screens.desk}) {
    flex-direction:row;
    align-items: flex-start;
    padding: 0px 112px;
  
    background-image: image-set(
        url(${ao}) 1x,
        url(${so}) 2x
      ),
      image-set(
        url(${Ht}) 1x,
        url(${Lt}) 2x
      );
background-position: left top, center;
  }
`,xo=c.section`
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

`,bo=c.section`
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


`,wo=(e,t=!1)=>{const n=new Date(e);let r=n.getHours();const o=n.getMinutes();let s="";if(t){const i=r>=12?"PM":"AM";r=r%12,r=r||12,s=`${r.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")} ${i}`}else s=`${r.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")}`;return s},yo=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",...e},l.createElement("title",null,"glass_26"),l.createElement("path",{fill:"#407bff",d:"M5.565 2.783l1.901 26.363v0.072h16.367l1.901-26.353v-0.082h-20.169zM23.16 28.479h-15.017l-1.426-19.747h0.784l1.289 17.403c0.008 0.092 0.049 0.177 0.115 0.24s0.153 0.098 0.244 0.099h0.030c0.047-0.003 0.093-0.016 0.136-0.037s0.080-0.051 0.111-0.087c0.031-0.036 0.055-0.078 0.070-0.124s0.021-0.094 0.017-0.141l-1.289-17.351h16.362l-1.426 19.747zM24.637 7.994h-16.468l-0.283-3.847c-0.009-0.094-0.052-0.181-0.122-0.244s-0.16-0.097-0.252-0.095c-0.095 0.009-0.183 0.055-0.245 0.129s-0.094 0.169-0.088 0.266l0.283 3.795h-0.794l-0.324-4.483h18.617l-0.324 4.478z"}),l.createElement("path",{fill:"#407bff",d:"M11.359 12.384c0.236 0 0.467-0.071 0.663-0.204s0.349-0.322 0.439-0.543c0.090-0.221 0.114-0.465 0.068-0.699s-0.16-0.45-0.327-0.62c-0.167-0.169-0.38-0.285-0.611-0.331s-0.471-0.023-0.689 0.069c-0.218 0.092-0.404 0.247-0.536 0.446s-0.201 0.433-0.201 0.672c0 0.321 0.126 0.629 0.35 0.856s0.527 0.355 0.844 0.355zM11.359 10.697c0.093 0 0.184 0.028 0.261 0.080s0.138 0.127 0.173 0.214c0.036 0.087 0.045 0.183 0.027 0.276s-0.063 0.178-0.129 0.244c-0.066 0.067-0.15 0.112-0.241 0.131s-0.186 0.009-0.272-0.027c-0.086-0.036-0.159-0.097-0.211-0.176s-0.079-0.171-0.079-0.265c0-0.127 0.050-0.248 0.138-0.337s0.208-0.14 0.332-0.14z"}),l.createElement("path",{fill:"#407bff",d:"M11.354 16.318c0.003 0.239 0.076 0.472 0.209 0.669s0.321 0.35 0.539 0.439 0.458 0.111 0.689 0.062c0.231-0.049 0.442-0.166 0.607-0.336s0.277-0.387 0.321-0.621 0.019-0.477-0.072-0.698c-0.091-0.22-0.245-0.408-0.442-0.54s-0.427-0.201-0.663-0.2c-0.158 0.001-0.313 0.033-0.459 0.095s-0.277 0.153-0.387 0.267-0.198 0.249-0.256 0.397c-0.059 0.148-0.088 0.307-0.086 0.467zM13.013 16.318c0 0.094-0.028 0.187-0.079 0.265s-0.125 0.14-0.211 0.176c-0.086 0.036-0.18 0.046-0.272 0.027s-0.175-0.064-0.241-0.131-0.111-0.152-0.129-0.244c-0.018-0.093-0.009-0.188 0.027-0.276s0.096-0.162 0.173-0.214 0.168-0.080 0.261-0.080c0.125 0 0.244 0.050 0.333 0.14s0.138 0.211 0.138 0.337z"}),l.createElement("path",{fill:"#407bff",d:"M19.834 16.349c0.236 0 0.467-0.071 0.663-0.204s0.349-0.322 0.439-0.543c0.090-0.221 0.114-0.465 0.068-0.699s-0.16-0.45-0.327-0.62c-0.167-0.169-0.379-0.285-0.611-0.331s-0.471-0.023-0.689 0.069c-0.218 0.092-0.404 0.247-0.535 0.446s-0.201 0.433-0.201 0.672c0 0.321 0.126 0.629 0.349 0.856s0.527 0.355 0.844 0.355zM19.834 14.666c0.093 0 0.184 0.028 0.262 0.081s0.138 0.127 0.173 0.215c0.035 0.088 0.044 0.184 0.026 0.276s-0.064 0.178-0.13 0.244c-0.066 0.066-0.151 0.111-0.242 0.129s-0.186 0.008-0.272-0.029-0.159-0.099-0.21-0.178c-0.051-0.079-0.078-0.172-0.077-0.266 0.001-0.126 0.051-0.246 0.14-0.334s0.207-0.138 0.331-0.138z"}),l.createElement("path",{fill:"#407bff",d:"M15.677 14.066c0.236 0 0.467-0.071 0.663-0.204s0.349-0.322 0.439-0.543c0.090-0.221 0.114-0.464 0.068-0.699s-0.16-0.45-0.327-0.62c-0.167-0.169-0.38-0.285-0.611-0.331s-0.471-0.023-0.689 0.069c-0.218 0.092-0.404 0.247-0.536 0.446s-0.201 0.433-0.201 0.672c0 0.321 0.126 0.629 0.35 0.856s0.527 0.354 0.844 0.354zM15.677 12.379c0.093 0 0.184 0.028 0.261 0.080s0.138 0.127 0.173 0.214c0.036 0.087 0.045 0.183 0.027 0.276s-0.063 0.177-0.129 0.244c-0.066 0.067-0.15 0.112-0.241 0.131s-0.186 0.009-0.272-0.027-0.159-0.097-0.211-0.176c-0.052-0.079-0.079-0.171-0.079-0.265-0.003-0.065 0.006-0.129 0.028-0.19s0.056-0.116 0.1-0.164c0.044-0.047 0.097-0.084 0.156-0.11s0.122-0.039 0.186-0.039v0.026z"}),l.createElement("path",{fill:"#407bff",d:"M13.402 20.929c0.005 0.197 0.067 0.387 0.178 0.548s0.267 0.285 0.447 0.357c0.181 0.072 0.378 0.088 0.568 0.047s0.363-0.139 0.498-0.279c0.135-0.141 0.227-0.319 0.263-0.512s0.015-0.393-0.060-0.574c-0.075-0.181-0.202-0.336-0.363-0.445s-0.351-0.167-0.545-0.167c-0.264 0.007-0.514 0.118-0.699 0.309s-0.287 0.449-0.287 0.716zM14.388 20.662c0.052 0 0.103 0.016 0.146 0.045s0.077 0.071 0.097 0.12 0.025 0.102 0.015 0.154c-0.010 0.052-0.035 0.099-0.072 0.137s-0.084 0.063-0.135 0.073c-0.051 0.010-0.104 0.005-0.152-0.015s-0.089-0.054-0.118-0.098c-0.029-0.044-0.044-0.096-0.044-0.148 0-0.071 0.028-0.139 0.077-0.189s0.116-0.078 0.186-0.078z"}),l.createElement("path",{fill:"#407bff",d:"M18.17 19.816c0.202 0.007 0.402-0.048 0.574-0.157s0.306-0.269 0.388-0.457c0.081-0.188 0.105-0.397 0.068-0.599s-0.133-0.388-0.275-0.534c-0.143-0.146-0.325-0.245-0.524-0.285s-0.405-0.018-0.591 0.063c-0.186 0.081-0.345 0.216-0.454 0.389s-0.166 0.375-0.161 0.58c0.006 0.262 0.111 0.511 0.292 0.697s0.426 0.295 0.684 0.304zM18.17 18.549c0.070 0 0.137 0.028 0.186 0.078s0.077 0.118 0.077 0.189c0 0.071-0.028 0.139-0.077 0.189s-0.116 0.078-0.186 0.078c-0.070 0-0.138-0.028-0.188-0.078s-0.079-0.118-0.080-0.189c0-0.035 0.007-0.071 0.020-0.103s0.033-0.062 0.058-0.087 0.055-0.044 0.087-0.057c0.032-0.013 0.067-0.019 0.102-0.019z"}),l.createElement("path",{fill:"#407bff",d:"M20.253 11.538c0.2 0 0.395-0.060 0.562-0.173s0.296-0.273 0.372-0.46c0.077-0.187 0.097-0.394 0.058-0.593s-0.135-0.382-0.277-0.525c-0.141-0.143-0.322-0.241-0.518-0.281s-0.399-0.019-0.584 0.058c-0.185 0.078-0.343 0.209-0.454 0.378s-0.17 0.367-0.17 0.57c0 0.272 0.107 0.533 0.296 0.725s0.447 0.3 0.715 0.3zM20.253 10.271c0.039-0.011 0.080-0.013 0.12-0.006s0.078 0.024 0.11 0.049c0.032 0.025 0.059 0.057 0.077 0.094s0.028 0.078 0.028 0.119-0.009 0.082-0.028 0.119c-0.018 0.037-0.044 0.069-0.077 0.094s-0.070 0.042-0.11 0.049c-0.040 0.008-0.081 0.006-0.12-0.006-0.039 0.011-0.080 0.013-0.12 0.006s-0.078-0.024-0.11-0.049c-0.032-0.025-0.059-0.057-0.077-0.094s-0.028-0.078-0.028-0.119 0.009-0.082 0.028-0.119c0.018-0.037 0.044-0.069 0.077-0.094s0.070-0.042 0.11-0.049c0.040-0.008 0.081-0.006 0.12 0.006z"}),l.createElement("path",{fill:"#407bff",d:"M10.369 27.191c-0.045 0.021-0.086 0.052-0.119 0.089s-0.059 0.082-0.074 0.13c-0.016 0.048-0.021 0.099-0.017 0.149s0.019 0.099 0.043 0.144c0.031 0.060 0.078 0.11 0.135 0.145s0.122 0.054 0.189 0.055c0.056 0.002 0.112-0.011 0.162-0.036 1.545-0.803 3.255-1.225 4.99-1.231 1.837 0.027 3.648 0.441 5.319 1.215 0.066 0.035 0.141 0.049 0.215 0.039s0.143-0.042 0.198-0.093c0.055-0.051 0.094-0.118 0.11-0.192s0.010-0.151-0.018-0.221c-0.036-0.091-0.105-0.164-0.192-0.205-1.769-0.821-3.687-1.258-5.633-1.282-1.845 0.002-3.664 0.444-5.309 1.292z"})),vo=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:1024,height:1024,viewBox:"0 0 1024 1024",...e},l.createElement("title",null,"edit"),l.createElement("path",{fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:4,strokeWidth:42.6667,d:"M719.445 191.445l71.979-72.021c14.479-14.479 34.482-23.435 56.576-23.435 44.189 0 80.011 35.822 80.011 80.011 0 22.094-8.955 42.097-23.435 56.576l-453.077 453.077c-21.936 21.924-49.153 38.567-79.579 47.856l-1.36 0.357-114.56 34.133 34.133-114.56c9.647-31.785 26.289-59.002 48.214-80.94l381.098-381.055zM719.445 191.445l112.555 112.555M768 597.333v202.667c0 53.019-42.981 96-96 96v0h-448c-53.019 0-96-42.981-96-96v0-448c0-53.019 42.981-96 96-96v0h202.667"})),ko=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:1024,height:1024,viewBox:"0 0 1024 1024",...e},l.createElement("title",null,"delete"),l.createElement("path",{fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:4,strokeWidth:42.6667,d:"M628.907 384l-14.763 384M409.856 768l-14.763-384M820.395 247.040c14.592 2.219 29.099 4.565 43.605 7.083M820.395 247.040l-45.568 592.341c-3.952 49.747-45.294 88.619-95.716 88.619-0.010 0-0.020 0-0.030 0h-334.164c-0.008 0-0.018 0-0.028 0-50.422 0-91.764-38.872-95.694-88.283l-0.021-0.336-45.568-592.341M820.395 247.040c-38.791-6.358-89.724-12.366-141.193-16.476l-7.202-0.463M203.605 247.040c-25.242 3.599-40.074 6.065-54.844 8.706l11.239-1.666M203.605 247.040c38.789-6.358 89.722-12.366 141.19-16.476l7.205-0.463M672 230.101v-39.083c0-50.347-38.827-92.331-89.173-93.909-21.11-0.721-45.921-1.132-70.827-1.132-24.908 0-49.719 0.411-74.428 1.226l3.602-0.094c-50.347 1.579-89.173 43.605-89.173 93.909v39.083M672 230.101c-47.901-3.932-103.689-6.173-160-6.173-56.31 0-112.097 2.241-167.276 6.64l7.276-0.466"})),Po=e=>l.createElement("svg",{fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:4,strokeWidth:42.6667,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...e},l.createElement("path",{d:"M512 256v512M768 512h-512"})),Mo=c.div`
  
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
 
`,Eo=c.ul`
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

  `,So=c.div`
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

`,To=c.span`
color:${e=>e.theme.colors.primary.accent};


font-size: 18px;

font-weight: 400;
line-height: 1.33;
`,jo=c(yo)`
  fill:${e=>e.theme.colors.primary.accent};
  width: 26px;
  height: auto;


  @media (min-width: ${({theme:e})=>e.screens.tab}){
    width: 36px;
  }
  
`,Do=c(vo)`
  stroke:  ${e=>e.theme.colors.secondary.color3};
  width: 16px;
  height: 16px;
`,$o=c(ko)`
   stroke: ${e=>e.theme.colors.secondary.color2};
  width: 16px;
  height: 16px;
`,Co=c.div`
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

`,Wo=c.button`

  &:hover::after {
   
    background-color: ${e=>e.theme.colors.primary.accent};
   
  }`,Oo=c.button`
 
 
  &:hover::after {
   
    background-color:  ${e=>e.theme.colors.secondary.color2};
    
  }`,Pt=c(Po)`
  fill: ${e=>e.theme.colors.primary.accent};
  stroke: ${e=>e.theme.colors.primary.accent};
  width: 16px;
  height: 16px;

  @media (min-width: ${({theme:e})=>e.screens.tab}){
    width: 24px;
  height: 24px;
  }
 
`,Ro=c.button`
display: flex;
align-items: center;
gap: 8px;

font-size: 16px;
font-weight: 500;
line-height: 1.25;
color: ${e=>e.theme.colors.primary.accent};


&:hover {
    color: ${e=>e.theme.colors.secondary.color4};
    ${Pt} {
      fill: ${e=>e.theme.colors.secondary.color4};
      stroke: ${e=>e.theme.colors.secondary.color4};
  }
}


@media (min-width: ${({theme:e})=>e.screens.tab}){
  font-size: 18px;
line-height: 1.33;
  }

`,Fo=c.div`

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
`,No=c.div`
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

`,Lo=c.button`

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
`,zo=({id:e})=>{const{closeModal:t}=l.useContext(Be),n=ge(),r=async()=>{await n(Rt(e)),t(),n(xt())};return a.jsxs(Fo,{children:[a.jsx("h3",{children:"Delete entry"}),a.jsx("p",{children:"Are you sure you want to delete the entry?"}),a.jsxs(No,{children:[a.jsx(Ho,{type:"button",onClick:()=>t(),children:"Cancel"}),a.jsx(Lo,{type:"submit",onClick:r,children:"Delete"})]})]})},Bo=()=>a.jsx("div",{children:" Тут колись буде модалка TodayEditModal"}),Yo=({handleAddWaterClick:e})=>{const{openModal:t}=l.useContext(Be),n=Me().waterDayList,r=ge();l.useEffect(()=>{r(xt())},[r]);const o=i=>{t(a.jsx(a.Fragment,{children:a.jsx(zo,{id:i})}))},s=i=>{t(a.jsx(a.Fragment,{children:a.jsx(Bo,{portion:i})}))};return a.jsxs(Mo,{children:[a.jsx("h3",{children:"Today"}),n&&n.length>0&&a.jsx(Eo,{children:n.map(i=>a.jsxs("li",{children:[a.jsxs(So,{children:[a.jsx(jo,{}),a.jsx(To,{children:`${i.waterVolume} ml `}),a.jsx("span",{children:wo(i.dateAdded,!0)})]}),a.jsxs(Co,{children:[a.jsx(Wo,{onClick:()=>s(i),children:a.jsx(Do,{})}),a.jsx(Oo,{onClick:()=>o(i._id),children:a.jsx($o,{})})]})]},i._id))}),a.jsxs(Ro,{onClick:e,children:[a.jsx(Pt,{})," Add water"]})]})},Ao=c.div`
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
`,Io=c.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
  justify-content: left;
`,_o=c.p`
  font-size: 18px;
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 24px;
  color: ${e=>e.theme.colors.primary.text};
  white-space: nowrap;
`,qo=c.button`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  color: #8baeff;
`,Go=c.p`
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  color: ${e=>e.theme.colors.primary.accent};
`,Uo=c.div`
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
`,Vo=c.div`
  width: 592px;
  height: 712px;
  padding: 32px 24px 32px 24px;
  border-radius: 10px;
  background-color: ${e=>e.theme.colors.primary.bg};
`,Qo=c.h2`
  font-size: 26px;
  font-weight: 500;
  line-height: 32px;
  color: ${e=>e.theme.colors.primary.text};
`,Xo=c.div`
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
`,Ko=c.div`
  width: 544px;
  border: 1px solid;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 24px;
  border-color: ${e=>e.theme.colors.secondary.color5};
`,Jo=c.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  color: #8f8f8f;
`,Zo=c.span`
  color: ${e=>e.theme.colors.primary.accent};
`,ea=c.form`
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
`,ta=c.div`
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
`,na=c.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`,ra=c.label`
  width: 544px;
  display: flex;
  gap: 16px;
  flex-direction: column;
  margin-bottom: 24px;
`,oa=c.button`
  border-radius: 10px;
  padding: 10px 30px;
  width: 160px;
  color: ${e=>e.theme.colors.primary.bg};
  background-color: ${e=>e.theme.colors.primary.accent};
`,aa=c.div`
  width: 544px;
  display: flex;
  justify-content: end;
`,sa=c.button``,ia=c.div`
  width: 544px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,ca=c.span`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: ${e=>e.theme.colors.primary.accent};
`,la=c.svg`
  background-color:;
`,da=({onClose:e})=>{const t=ge(),{user:n}=ze(),r={weight:.03,activity:.04},o={weight:.04,activity:.06},[s,i]=l.useState(r),[d,u]=l.useState(""),[f,x]=l.useState(""),[m,v]=l.useState(""),M=n.waterRate;l.useEffect(()=>{const g=h=>{h.code==="Escape"&&e()};return window.addEventListener("keydown",g),()=>{window.removeEventListener("keydown",g)}},[e]);const b=l.useCallback(()=>!d||!f?void 0:(d*s.weight+f/60*s.activity).toFixed(1),[s,d,f]),y=l.useMemo(()=>b(),[b]),p=g=>{const h=g.target.value,w=parseFloat(h);!isNaN(w)&&w>=1?v(w):h===""&&v("")},P=g=>{g.preventDefault();const h=parseFloat(y);if(!(f>0&&d>0||m>0)){alert("Fill all fields");return}t(Ft(m||h)).then(k=>{k.error?(console.log(k.error),alert("Something went wrong ")):(e(),u(""),x(""),v(""))})};return a.jsx(Uo,{children:a.jsxs(Vo,{children:[a.jsxs(ia,{children:[a.jsx(Qo,{children:"My daily norma"}),a.jsx(sa,{onClick:()=>e(),children:a.jsx(la,{width:"24",height:"24",children:a.jsx("path",{d:"M6 18L18 6M6 6L18 18",stroke:"#407BFF",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),a.jsxs(Xo,{children:[a.jsxs(K,{children:["For girl: ",a.jsx(ut,{children:"V=(M*0,03) + (T*0,4)"})]}),a.jsxs(K,{children:["For man: ",a.jsx(ut,{children:"V=(M*0,04) + (T*0,6)"})]})]}),a.jsx(Ko,{children:a.jsxs(Jo,{children:[a.jsx(Zo,{children:"*"})," V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]})}),a.jsxs(ea,{children:[a.jsxs(na,{children:[a.jsx(ht,{children:"Calculate your rate:"}),a.jsxs(ta,{children:[a.jsxs(ft,{children:[a.jsx(pt,{type:"radio",name:"gender",value:"woman",onChange:()=>i(r),checked:n.gender==="famale"}),a.jsx(K,{children:"For woman"})]}),a.jsxs(ft,{children:[a.jsx(pt,{type:"radio",name:"gender",value:"man",onChange:()=>i(o),checked:n.gender==="male"}),a.jsx(K,{children:"For man"})]})]}),a.jsxs(mt,{children:[a.jsx(K,{children:"Your weight in kilograms:"}),a.jsx(Re,{type:"number",name:"userWeight",placeholder:"0",value:d,min:0,max:250,onChange:g=>u(g.target.value)})]}),a.jsxs(mt,{children:[a.jsx(K,{children:"The time of active participation in sports or other activities with a high physical. load in hours:"}),a.jsx(Re,{type:"number",name:"userActive",placeholder:"0",value:f,min:0,onChange:g=>x(g.target.value)})]}),a.jsxs(K,{children:["The required amount of water in liters per day:",a.jsxs(ca,{children:[" ",y||(M/1e3).toFixed(1)," L"]})]})]}),a.jsxs(ra,{children:[a.jsx(ht,{children:"Write down how much water you will drink:"}),a.jsx(Re,{type:"number",name:"userWaterPredict",placeholder:"0",value:m,min:0,onChange:p})]}),a.jsx(aa,{children:a.jsx(oa,{onClick:P,children:"Save"})})]})]})})},ua=()=>{const[e,t]=l.useState(!1),{user:n}=ze(),r=n.waterRate,o=()=>{t(!0)},s=()=>{t(!1)},i=(r/1e3).toFixed(1);return a.jsxs(Ao,{children:[a.jsx(_o,{children:"My daily norma"}),a.jsxs(Io,{children:[a.jsxs(Go,{children:[" ",i||r," L"]}),a.jsx(qo,{onClick:o,children:"Edit"})]}),e&&a.jsx(da,{onClose:s})]})};function ha(e){return bt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.75 4.5a.75.75 0 0 1 .75.75V11h5.75a.75.75 0 0 1 0 1.5H12.5v5.75a.75.75 0 0 1-1.5 0V12.5H5.25a.75.75 0 0 1 0-1.5H11V5.25a.75.75 0 0 1 .75-.75Z"},child:[]}]})(e)}const fa=c.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  justify-content: center;
`,pa=c.h3`
  font-size: 26px;
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 32px;
`,ma=c.span`
  font-size: 18px;
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 20px;
  margin-bottom: 16px;
`,ga=c.div`
  display: flex;
  flex-direction: column;
`,xa=c.label`
  display: flex;
  justify-content: flex-start;
  gap: 12px;
  flex-direction: column;
`,ba=c.div`
  display: flex;
  flex-direction: row;
  gap: 7px;
`;c.input``;const wa=c.span`
  font-size: 16px;
  font-weight: ${e=>e.theme.fontWeights.regular};
  line-height: 20px;
`,ya=c.label`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,va=c.span``,ka=c.input`
  width: 544px;
  padding: 12px 10px;
  border-radius: 6px;
  border: 1px solid ${e=>e.theme.colors.secondary.color5};
`,Pa=c.label`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
`,Ma=c.span``,Ea=c.input`
  padding: 12px 10px;
  border-radius: 6px;
  border: 1px solid ${e=>e.theme.colors.secondary.color5};
  width: 544px;
`,Sa=c.div`
  display: flex;
  width: 544px;
  align-items: center;
  justify-content: flex-end;
  gap: 24px;
`,Ta=c.span`
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
`,ja=c.button`
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
`,gt=c.button`
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
`,Da=c(ha)`
  fill: ${e=>e.theme.colors.primary.accent};
  stroke: ${e=>e.theme.colors.primary.accent};
  width: 16px;
  height: 16px;

  @media (min-width: ${({theme:e})=>e.screens.tab}) {
    width: 24px;
    height: 24px;
  }
`,$a=c(Nt)`
  fill: ${e=>e.theme.colors.primary.accent};
  stroke: ${e=>e.theme.colors.primary.accent};
  width: 16px;
  height: 16px;

  @media (min-width: ${({theme:e})=>e.screens.tab}) {
    width: 24px;
    height: 24px;
  }
`,Ca=c.span`
  font-size: 18px;
  font-weight: ${e=>e.theme.fontWeights.bolt};
  line-height: 24px;
  text-align: center;
  color: ${e=>e.theme.colors.primary.accent};

`;function Wa(e){const t=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return`${t}-${n}-${r}`}const Oa=({firstValue:e,firstTime:t,isEditing:n,onClose:r})=>{const o=Me().waterDayList.portions,[s,i]=l.useState(e||0),[d,u]=l.useState(ae(n&&e?new Date(t):new Date,"HH:mm")),[f,x]=l.useState(o||null),m=ge(),v=y=>{const p=parseFloat(y.target.value);if(p>3e3){alert("не більше 3000 мл");return}i(p)},M=y=>{switch(console.log(y.currentTarget.id),y.currentTarget.id){case"increment":i(p=>p+50);break;case"decrement":i(p=>p>0?p-50:0);break}},b=y=>{y.preventDefault();const P=Wa(new Date),g=f?f.find(k=>{k.time}):d,h=P+"T"+g,w={waterVolume:s,date:h};m(Qe(w)).thne;try{if(!m(Qe(w)).error)r(),i(""),u("");else throw new Error}catch(k){console.error(k),alert("Something went wrong"),r()}};return l.useEffect(()=>{n?(i(e||0),u(ae(t,"HH:mm"))):(i(0),u(ae(new Date,"HH:mm")))},[n,e,t]),a.jsxs(fa,{children:[a.jsx(pa,{children:" Add water"}),a.jsxs(ga,{children:[a.jsx(ma,{children:"Choose a value:"}),a.jsxs(xa,{children:[a.jsx(wa,{children:"Amount of water:"}),a.jsxs(ba,{children:[a.jsx(gt,{onClick:M,id:"decrement",children:a.jsx($a,{})}),a.jsxs(Ta,{children:[" ",s||0," L"]}),a.jsx(gt,{onClick:M,id:"increment",children:a.jsx(Da,{})})]})]})]}),a.jsxs(ya,{children:[a.jsx(va,{children:"Recording time:"}),a.jsx(ka,{type:"time",value:d,onChange:y=>u(y.target.value)})]}),a.jsxs(Pa,{children:[a.jsx(Ma,{children:"Enter the value of the water used:"}),a.jsx(Ea,{type:"number",value:s,onChange:v,placeholder:"0"})]}),a.jsxs(Sa,{children:[a.jsxs(Ca,{children:[" ",s||0," Ml"]}),a.jsx(ja,{onClick:b,children:"Save"})]})]})};function Ra(e){return bt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Circle_Plus"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M15,12.5H12.5V15a.5.5,0,0,1-1,0V12.5H9a.5.5,0,0,1,0-1h2.5V9a.5.5,0,0,1,1,0v2.5H15A.5.5,0,0,1,15,12.5Z"},child:[]},{tag:"path",attr:{d:"M12,21.932A9.934,9.934,0,1,1,21.932,12,9.944,9.944,0,0,1,12,21.932ZM12,3.065A8.934,8.934,0,1,0,20.932,12,8.944,8.944,0,0,0,12,3.065Z"},child:[]}]}]}]})(e)}const Fa=c.input`
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
`,Mt=c(Ra)`
  fill: ${e=>e.theme.colors.primary.bg};
  stroke: ${e=>e.theme.colors.primary.bg};
  width: 16px;
  height: 16px;

  @media (min-width: ${({theme:e})=>e.screens.tab}) {
    width: 24px;
    height: 24px;
  }
`,Ha=c.button`
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
    ${Mt} {
      fill: ${e=>e.theme.colors.secondary.color4};
      stroke: ${e=>e.theme.colors.secondary.color4};
    }
  }

  @media (min-width: ${({theme:e})=>e.screens.tab}) {
    font-size: 18px;
    line-height: 1.33;
  }
`,La=({TodayWaterList:e,handleAddWaterClick:t})=>(Me().waterDayList.portions,a.jsxs(Na,{children:[a.jsx(Fa,{type:"range",maxValue:100,minValue:0,readOnly:!0}),a.jsxs(Ha,{onClick:t,children:[a.jsx(Mt,{})," Add water"]})]})),Ya=()=>{const{openModal:e}=l.useContext(Be),t=()=>{e(a.jsx(a.Fragment,{children:a.jsx(Oa,{})}))};return a.jsxs(go,{children:[a.jsxs(xo,{children:[a.jsx(ua,{}),a.jsx(La,{handleAddWaterClick:t})]}),a.jsxs(bo,{children:[a.jsx(Yo,{handleAddWaterClick:t}),a.jsx(oo,{})]})]})};export{Ya as default};
