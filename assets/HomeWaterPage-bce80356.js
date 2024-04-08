import{o as G,r as l,h as ve,j as a,i as Ue,k as $t,_ as D,l as Dt,m as ae,T as Ct,n as Wt,p as Ve,q as Oe,v as Re,w as pe,x as Fe,y as ue,z as Ne,A as we,B as Ot,C as Rt,D as Ft,E as Nt,u as c,b as ze,I as Se,c as me,J as zt,M as He,K as Ht,O as Le,G as gt,Q as Lt,R as At,S as Bt,U as Yt}from"./index-d658924a.js";import{b as It,a as _t}from"./backgroundElementMainPageDesk2x@2-f75c1b59.js";function Qe(...e){return e.reduce((t,n)=>n==null?t:function(...o){t.apply(this,o),n.apply(this,o)},()=>{})}function qt(e,t=166){let n;function r(...o){const s=()=>{e.apply(this,o)};clearTimeout(n),n=setTimeout(s,t)}return r.clear=()=>{clearTimeout(n)},r}function he(e){return G(e).defaultView||window}function Gt(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}const Ut=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function Vt(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function Qt(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=r=>e.ownerDocument.querySelector(`input[type="radio"]${r}`);let n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}function Xt(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||Qt(e))}function Kt(e){const t=[],n=[];return Array.from(e.querySelectorAll(Ut)).forEach((r,o)=>{const s=Vt(r);s===-1||!Xt(r)||(s===0?t.push(r):n.push({documentOrder:o,tabIndex:s,node:r}))}),n.sort((r,o)=>r.tabIndex===o.tabIndex?r.documentOrder-o.documentOrder:r.tabIndex-o.tabIndex).map(r=>r.node).concat(t)}function Jt(){return!0}function Zt(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:r=!1,disableRestoreFocus:o=!1,getTabbable:s=Kt,isEnabled:i=Jt,open:d}=e,h=l.useRef(!1),f=l.useRef(null),x=l.useRef(null),m=l.useRef(null),v=l.useRef(null),w=l.useRef(!1),p=l.useRef(null),P=ve(t.ref,p),b=l.useRef(null);l.useEffect(()=>{!d||!p.current||(w.current=!n)},[n,d]),l.useEffect(()=>{if(!d||!p.current)return;const u=G(p.current);return p.current.contains(u.activeElement)||(p.current.hasAttribute("tabIndex")||p.current.setAttribute("tabIndex","-1"),w.current&&p.current.focus()),()=>{o||(m.current&&m.current.focus&&(h.current=!0,m.current.focus()),m.current=null)}},[d]),l.useEffect(()=>{if(!d||!p.current)return;const u=G(p.current),y=O=>{b.current=O,!(r||!i()||O.key!=="Tab")&&u.activeElement===p.current&&O.shiftKey&&(h.current=!0,x.current&&x.current.focus())},M=()=>{const O=p.current;if(O===null)return;if(!u.hasFocus()||!i()||h.current){h.current=!1;return}if(O.contains(u.activeElement)||r&&u.activeElement!==f.current&&u.activeElement!==x.current)return;if(u.activeElement!==v.current)v.current=null;else if(v.current!==null)return;if(!w.current)return;let N=[];if((u.activeElement===f.current||u.activeElement===x.current)&&(N=s(p.current)),N.length>0){var A,z;const q=!!((A=b.current)!=null&&A.shiftKey&&((z=b.current)==null?void 0:z.key)==="Tab"),F=N[0],L=N[N.length-1];typeof F!="string"&&typeof L!="string"&&(q?L.focus():F.focus())}else O.focus()};u.addEventListener("focusin",M),u.addEventListener("keydown",y,!0);const R=setInterval(()=>{u.activeElement&&u.activeElement.tagName==="BODY"&&M()},50);return()=>{clearInterval(R),u.removeEventListener("focusin",M),u.removeEventListener("keydown",y,!0)}},[n,r,o,i,d,s]);const k=u=>{m.current===null&&(m.current=u.relatedTarget),w.current=!0,v.current=u.target;const y=t.props.onFocus;y&&y(u)},g=u=>{m.current===null&&(m.current=u.relatedTarget),w.current=!0};return a.jsxs(l.Fragment,{children:[a.jsx("div",{tabIndex:d?0:-1,onFocus:g,ref:f,"data-testid":"sentinelStart"}),l.cloneElement(t,{ref:P,onFocus:k}),a.jsx("div",{tabIndex:d?0:-1,onFocus:g,ref:x,"data-testid":"sentinelEnd"})]})}function en(e){const t=G(e);return t.body===e?he(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function de(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function Xe(e){return parseInt(he(e).getComputedStyle(e).paddingRight,10)||0}function tn(e){const n=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,r=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return n||r}function Ke(e,t,n,r,o){const s=[t,n,...r];[].forEach.call(e.children,i=>{const d=s.indexOf(i)===-1,h=!tn(i);d&&h&&de(i,o)})}function Te(e,t){let n=-1;return e.some((r,o)=>t(r)?(n=o,!0):!1),n}function nn(e,t){const n=[],r=e.container;if(!t.disableScrollLock){if(en(r)){const i=Gt(G(r));n.push({value:r.style.paddingRight,property:"padding-right",el:r}),r.style.paddingRight=`${Xe(r)+i}px`;const d=G(r).querySelectorAll(".mui-fixed");[].forEach.call(d,h=>{n.push({value:h.style.paddingRight,property:"padding-right",el:h}),h.style.paddingRight=`${Xe(h)+i}px`})}let s;if(r.parentNode instanceof DocumentFragment)s=G(r).body;else{const i=r.parentElement,d=he(r);s=(i==null?void 0:i.nodeName)==="HTML"&&d.getComputedStyle(i).overflowY==="scroll"?i:r}n.push({value:s.style.overflow,property:"overflow",el:s},{value:s.style.overflowX,property:"overflow-x",el:s},{value:s.style.overflowY,property:"overflow-y",el:s}),s.style.overflow="hidden"}return()=>{n.forEach(({value:s,el:i,property:d})=>{s?i.style.setProperty(d,s):i.style.removeProperty(d)})}}function rn(e){const t=[];return[].forEach.call(e.children,n=>{n.getAttribute("aria-hidden")==="true"&&t.push(n)}),t}class on{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,n){let r=this.modals.indexOf(t);if(r!==-1)return r;r=this.modals.length,this.modals.push(t),t.modalRef&&de(t.modalRef,!1);const o=rn(n);Ke(n,t.mount,t.modalRef,o,!0);const s=Te(this.containers,i=>i.container===n);return s!==-1?(this.containers[s].modals.push(t),r):(this.containers.push({modals:[t],container:n,restore:null,hiddenSiblings:o}),r)}mount(t,n){const r=Te(this.containers,s=>s.modals.indexOf(t)!==-1),o=this.containers[r];o.restore||(o.restore=nn(o,n))}remove(t,n=!0){const r=this.modals.indexOf(t);if(r===-1)return r;const o=Te(this.containers,i=>i.modals.indexOf(t)!==-1),s=this.containers[o];if(s.modals.splice(s.modals.indexOf(t),1),this.modals.splice(r,1),s.modals.length===0)s.restore&&s.restore(),t.modalRef&&de(t.modalRef,n),Ke(s.container,t.mount,t.modalRef,s.hiddenSiblings,!1),this.containers.splice(o,1);else{const i=s.modals[s.modals.length-1];i.modalRef&&de(i.modalRef,!1)}return r}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}function an(e){return typeof e=="function"?e():e}function sn(e){return e?e.props.hasOwnProperty("in"):!1}const cn=new on;function ln(e){const{container:t,disableEscapeKeyDown:n=!1,disableScrollLock:r=!1,manager:o=cn,closeAfterTransition:s=!1,onTransitionEnter:i,onTransitionExited:d,children:h,onClose:f,open:x,rootRef:m}=e,v=l.useRef({}),w=l.useRef(null),p=l.useRef(null),P=ve(p,m),[b,k]=l.useState(!x),g=sn(h);let u=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(u=!1);const y=()=>G(w.current),M=()=>(v.current.modalRef=p.current,v.current.mount=w.current,v.current),R=()=>{o.mount(M(),{disableScrollLock:r}),p.current&&(p.current.scrollTop=0)},O=Ue(()=>{const S=an(t)||y().body;o.add(M(),S),p.current&&R()}),N=l.useCallback(()=>o.isTopModal(M()),[o]),A=Ue(S=>{w.current=S,S&&(x&&N()?R():p.current&&de(p.current,u))}),z=l.useCallback(()=>{o.remove(M(),u)},[u,o]);l.useEffect(()=>()=>{z()},[z]),l.useEffect(()=>{x?O():(!g||!s)&&z()},[x,z,g,s,O]);const q=S=>$=>{var B;(B=S.onKeyDown)==null||B.call(S,$),!($.key!=="Escape"||$.which===229||!N())&&(n||($.stopPropagation(),f&&f($,"escapeKeyDown")))},F=S=>$=>{var B;(B=S.onClick)==null||B.call(S,$),$.target===$.currentTarget&&f&&f($,"backdropClick")};return{getRootProps:(S={})=>{const $=$t(e);delete $.onTransitionEnter,delete $.onTransitionExited;const B=D({},$,S);return D({role:"presentation"},B,{onKeyDown:q(B),ref:P})},getBackdropProps:(S={})=>{const $=S;return D({"aria-hidden":!0},$,{onClick:F($),open:x})},getTransitionProps:()=>{const S=()=>{k(!1),i&&i()},$=()=>{k(!0),d&&d(),s&&z()};return{onEnter:Qe(S,h==null?void 0:h.props.onEnter),onExited:Qe($,h==null?void 0:h.props.onExited)}},rootRef:P,portalRef:A,isTopModal:N,exited:b,hasTransition:g}}const dn=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],un={entering:{opacity:1},entered:{opacity:1}},hn=l.forwardRef(function(t,n){const r=Dt(),o={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:s,appear:i=!0,children:d,easing:h,in:f,onEnter:x,onEntered:m,onEntering:v,onExit:w,onExited:p,onExiting:P,style:b,timeout:k=o,TransitionComponent:g=Ct}=t,u=ae(t,dn),y=l.useRef(null),M=ve(y,d.ref,n),R=j=>H=>{if(j){const S=y.current;H===void 0?j(S):j(S,H)}},O=R(v),N=R((j,H)=>{Wt(j);const S=Ve({style:b,timeout:k,easing:h},{mode:"enter"});j.style.webkitTransition=r.transitions.create("opacity",S),j.style.transition=r.transitions.create("opacity",S),x&&x(j,H)}),A=R(m),z=R(P),q=R(j=>{const H=Ve({style:b,timeout:k,easing:h},{mode:"exit"});j.style.webkitTransition=r.transitions.create("opacity",H),j.style.transition=r.transitions.create("opacity",H),w&&w(j)}),F=R(p),L=j=>{s&&s(y.current,j)};return a.jsx(g,D({appear:i,in:f,nodeRef:y,onEnter:N,onEntered:A,onEntering:O,onExit:q,onExited:F,onExiting:z,addEndListener:L,timeout:k},u,{children:(j,H)=>l.cloneElement(d,D({style:D({opacity:0,visibility:j==="exited"&&!f?"hidden":void 0},un[j],b,d.props.style),ref:M},H))}))}),fn=hn;function pn(e){return Oe("MuiBackdrop",e)}Re("MuiBackdrop",["root","invisible"]);const mn=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],gn=e=>{const{classes:t,invisible:n}=e;return Ne({root:["root",n&&"invisible"]},pn,t)},xn=pe("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})(({ownerState:e})=>D({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),bn=l.forwardRef(function(t,n){var r,o,s;const i=Fe({props:t,name:"MuiBackdrop"}),{children:d,className:h,component:f="div",components:x={},componentsProps:m={},invisible:v=!1,open:w,slotProps:p={},slots:P={},TransitionComponent:b=fn,transitionDuration:k}=i,g=ae(i,mn),u=D({},i,{component:f,invisible:v}),y=gn(u),M=(r=p.root)!=null?r:m.root;return a.jsx(b,D({in:w,timeout:k},g,{children:a.jsx(xn,D({"aria-hidden":!0},M,{as:(o=(s=P.root)!=null?s:x.Root)!=null?o:f,className:ue(y.root,h,M==null?void 0:M.className),ownerState:D({},u,M==null?void 0:M.ownerState),classes:y,ref:n,children:d}))}))}),wn=bn;function yn(e){return Oe("MuiModal",e)}Re("MuiModal",["root","hidden","backdrop"]);const vn=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],kn=e=>{const{open:t,exited:n,classes:r}=e;return Ne({root:["root",!t&&n&&"hidden"],backdrop:["backdrop"]},yn,r)},Pn=pe("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})(({theme:e,ownerState:t})=>D({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),Mn=pe(wn,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),En=l.forwardRef(function(t,n){var r,o,s,i,d,h;const f=Fe({name:"MuiModal",props:t}),{BackdropComponent:x=Mn,BackdropProps:m,className:v,closeAfterTransition:w=!1,children:p,container:P,component:b,components:k={},componentsProps:g={},disableAutoFocus:u=!1,disableEnforceFocus:y=!1,disableEscapeKeyDown:M=!1,disablePortal:R=!1,disableRestoreFocus:O=!1,disableScrollLock:N=!1,hideBackdrop:A=!1,keepMounted:z=!1,onBackdropClick:q,open:F,slotProps:L,slots:j}=f,H=ae(f,vn),S=D({},f,{closeAfterTransition:w,disableAutoFocus:u,disableEnforceFocus:y,disableEscapeKeyDown:M,disablePortal:R,disableRestoreFocus:O,disableScrollLock:N,hideBackdrop:A,keepMounted:z}),{getRootProps:$,getBackdropProps:B,getTransitionProps:ge,portalRef:Pe,isTopModal:xe,exited:I,hasTransition:be}=ln(D({},S,{rootRef:n})),X=D({},S,{exited:I}),U=kn(X),Z={};if(p.props.tabIndex===void 0&&(Z.tabIndex="-1"),be){const{onEnter:T,onExited:W}=ge();Z.onEnter=T,Z.onExited=W}const ee=(r=(o=j==null?void 0:j.root)!=null?o:k.Root)!=null?r:Pn,se=(s=(i=j==null?void 0:j.backdrop)!=null?i:k.Backdrop)!=null?s:x,ie=(d=L==null?void 0:L.root)!=null?d:g.root,te=(h=L==null?void 0:L.backdrop)!=null?h:g.backdrop,Me=we({elementType:ee,externalSlotProps:ie,externalForwardedProps:H,getSlotProps:$,additionalProps:{ref:n,as:b},ownerState:X,className:ue(v,ie==null?void 0:ie.className,U==null?void 0:U.root,!X.open&&X.exited&&(U==null?void 0:U.hidden))}),Ee=we({elementType:se,externalSlotProps:te,additionalProps:m,getSlotProps:T=>B(D({},T,{onClick:W=>{q&&q(W),T!=null&&T.onClick&&T.onClick(W)}})),className:ue(te==null?void 0:te.className,m==null?void 0:m.className,U==null?void 0:U.backdrop),ownerState:X});return!z&&!F&&(!be||I)?null:a.jsx(Ot,{ref:Pe,container:P,disablePortal:R,children:a.jsxs(ee,D({},Me,{children:[!A&&x?a.jsx(se,D({},Ee)):null,a.jsx(Zt,{disableEnforceFocus:y,disableAutoFocus:u,disableRestoreFocus:O,isEnabled:xe,open:F,children:l.cloneElement(p,Z)})]}))})}),Sn=En;function Tn(e){return Oe("MuiPopover",e)}Re("MuiPopover",["root","paper"]);const jn=["onEntering"],$n=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps","disableScrollLock"],Dn=["slotProps"];function Je(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.height/2:t==="bottom"&&(n=e.height),n}function Ze(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.width/2:t==="right"&&(n=e.width),n}function et(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function je(e){return typeof e=="function"?e():e}const Cn=e=>{const{classes:t}=e;return Ne({root:["root"],paper:["paper"]},Tn,t)},Wn=pe(Sn,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),On=pe(Rt,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),Rn=l.forwardRef(function(t,n){var r,o,s;const i=Fe({props:t,name:"MuiPopover"}),{action:d,anchorEl:h,anchorOrigin:f={vertical:"top",horizontal:"left"},anchorPosition:x,anchorReference:m="anchorEl",children:v,className:w,container:p,elevation:P=8,marginThreshold:b=16,open:k,PaperProps:g={},slots:u,slotProps:y,transformOrigin:M={vertical:"top",horizontal:"left"},TransitionComponent:R=Nt,transitionDuration:O="auto",TransitionProps:{onEntering:N}={},disableScrollLock:A=!1}=i,z=ae(i.TransitionProps,jn),q=ae(i,$n),F=(r=y==null?void 0:y.paper)!=null?r:g,L=l.useRef(),j=ve(L,F.ref),H=D({},i,{anchorOrigin:f,anchorReference:m,elevation:P,marginThreshold:b,externalPaperSlotProps:F,transformOrigin:M,TransitionComponent:R,transitionDuration:O,TransitionProps:z}),S=Cn(H),$=l.useCallback(()=>{if(m==="anchorPosition")return x;const T=je(h),Y=(T&&T.nodeType===1?T:G(L.current).body).getBoundingClientRect();return{top:Y.top+Je(Y,f.vertical),left:Y.left+Ze(Y,f.horizontal)}},[h,f.horizontal,f.vertical,x,m]),B=l.useCallback(T=>({vertical:Je(T,M.vertical),horizontal:Ze(T,M.horizontal)}),[M.horizontal,M.vertical]),ge=l.useCallback(T=>{const W={width:T.offsetWidth,height:T.offsetHeight},Y=B(W);if(m==="none")return{top:null,left:null,transformOrigin:et(Y)};const Be=$();let ne=Be.top-Y.vertical,re=Be.left-Y.horizontal;const Ye=ne+W.height,Ie=re+W.width,_e=he(je(h)),qe=_e.innerHeight-b,Ge=_e.innerWidth-b;if(b!==null&&ne<b){const _=ne-b;ne-=_,Y.vertical+=_}else if(b!==null&&Ye>qe){const _=Ye-qe;ne-=_,Y.vertical+=_}if(b!==null&&re<b){const _=re-b;re-=_,Y.horizontal+=_}else if(Ie>Ge){const _=Ie-Ge;re-=_,Y.horizontal+=_}return{top:`${Math.round(ne)}px`,left:`${Math.round(re)}px`,transformOrigin:et(Y)}},[h,m,$,B,b]),[Pe,xe]=l.useState(k),I=l.useCallback(()=>{const T=L.current;if(!T)return;const W=ge(T);W.top!==null&&(T.style.top=W.top),W.left!==null&&(T.style.left=W.left),T.style.transformOrigin=W.transformOrigin,xe(!0)},[ge]);l.useEffect(()=>(A&&window.addEventListener("scroll",I),()=>window.removeEventListener("scroll",I)),[h,A,I]);const be=(T,W)=>{N&&N(T,W),I()},X=()=>{xe(!1)};l.useEffect(()=>{k&&I()}),l.useImperativeHandle(d,()=>k?{updatePosition:()=>{I()}}:null,[k,I]),l.useEffect(()=>{if(!k)return;const T=qt(()=>{I()}),W=he(h);return W.addEventListener("resize",T),()=>{T.clear(),W.removeEventListener("resize",T)}},[h,k,I]);let U=O;O==="auto"&&!R.muiSupportAuto&&(U=void 0);const Z=p||(h?G(je(h)).body:void 0),ee=(o=u==null?void 0:u.root)!=null?o:Wn,se=(s=u==null?void 0:u.paper)!=null?s:On,ie=we({elementType:se,externalSlotProps:D({},F,{style:Pe?F.style:D({},F.style,{opacity:0})}),additionalProps:{elevation:P,ref:j},ownerState:H,className:ue(S.paper,F==null?void 0:F.className)}),te=we({elementType:ee,externalSlotProps:(y==null?void 0:y.root)||{},externalForwardedProps:q,additionalProps:{ref:n,slotProps:{backdrop:{invisible:!0}},container:Z,open:k},ownerState:H,className:ue(S.root,w)}),{slotProps:Me}=te,Ee=ae(te,Dn);return a.jsx(ee,D({},Ee,!Ft(ee)&&{slotProps:Me,disableScrollLock:A},{children:a.jsx(R,D({appear:!0,in:k,onEntering:be,onExited:X,timeout:U},z,{children:a.jsx(se,D({},ie,{children:v}))}))}))}),Fn=Rn;function C(e){const t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new e.constructor(+e):typeof e=="number"||t==="[object Number]"||typeof e=="string"||t==="[object String]"?new Date(e):new Date(NaN)}function V(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}function $e(e,t){const n=C(e);if(isNaN(t))return V(e,NaN);if(!t)return n;const r=n.getDate(),o=V(e,n.getTime());o.setMonth(n.getMonth()+t+1,0);const s=o.getDate();return r>=s?o:(n.setFullYear(o.getFullYear(),o.getMonth(),r),n)}const xt=6048e5,Nn=864e5;let zn={};function ke(){return zn}function fe(e,t){var d,h,f,x;const n=ke(),r=(t==null?void 0:t.weekStartsOn)??((h=(d=t==null?void 0:t.locale)==null?void 0:d.options)==null?void 0:h.weekStartsOn)??n.weekStartsOn??((x=(f=n.locale)==null?void 0:f.options)==null?void 0:x.weekStartsOn)??0,o=C(e),s=o.getDay(),i=(s<r?7:0)+s-r;return o.setDate(o.getDate()-i),o.setHours(0,0,0,0),o}function ye(e){return fe(e,{weekStartsOn:1})}function bt(e){const t=C(e),n=t.getFullYear(),r=V(e,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const o=ye(r),s=V(e,0);s.setFullYear(n,0,4),s.setHours(0,0,0,0);const i=ye(s);return t.getTime()>=o.getTime()?n+1:t.getTime()>=i.getTime()?n:n-1}function tt(e){const t=C(e);return t.setHours(0,0,0,0),t}function nt(e){const t=C(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function Hn(e,t){const n=tt(e),r=tt(t),o=+n-nt(n),s=+r-nt(r);return Math.round((o-s)/Nn)}function Ln(e){const t=bt(e),n=V(e,0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),ye(n)}function An(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function Bn(e){if(!An(e)&&typeof e!="number")return!1;const t=C(e);return!isNaN(Number(t))}function rt(e){const t=C(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}function Yn(e,t){const n=C(e.start),r=C(e.end);let o=+n>+r;const s=o?+n:+r,i=o?r:n;i.setHours(0,0,0,0);let d=(t==null?void 0:t.step)??1;if(!d)return[];d<0&&(d=-d,o=!o);const h=[];for(;+i<=s;)h.push(C(i)),i.setDate(i.getDate()+d),i.setHours(0,0,0,0);return o?h.reverse():h}function ot(e){const t=C(e);return t.setDate(1),t.setHours(0,0,0,0),t}function In(e){const t=C(e),n=V(e,0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}const _n={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},qn=(e,t,n)=>{let r;const o=_n[e];return typeof o=="string"?r=o:t===1?r=o.one:r=o.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function De(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const Gn={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Un={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Vn={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Qn={date:De({formats:Gn,defaultWidth:"full"}),time:De({formats:Un,defaultWidth:"full"}),dateTime:De({formats:Vn,defaultWidth:"full"})},Xn={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Kn=(e,t,n,r)=>Xn[e];function ce(e){return(t,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let o;if(r==="formatting"&&e.formattingValues){const i=e.defaultFormattingWidth||e.defaultWidth,d=n!=null&&n.width?String(n.width):i;o=e.formattingValues[d]||e.formattingValues[i]}else{const i=e.defaultWidth,d=n!=null&&n.width?String(n.width):e.defaultWidth;o=e.values[d]||e.values[i]}const s=e.argumentCallback?e.argumentCallback(t):t;return o[s]}}const Jn={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Zn={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},er={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},tr={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},nr={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},rr={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},or=(e,t)=>{const n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},ar={ordinalNumber:or,era:ce({values:Jn,defaultWidth:"wide"}),quarter:ce({values:Zn,defaultWidth:"wide",argumentCallback:e=>e-1}),month:ce({values:er,defaultWidth:"wide"}),day:ce({values:tr,defaultWidth:"wide"}),dayPeriod:ce({values:nr,defaultWidth:"wide",formattingValues:rr,defaultFormattingWidth:"wide"})};function le(e){return(t,n={})=>{const r=n.width,o=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],s=t.match(o);if(!s)return null;const i=s[0],d=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],h=Array.isArray(d)?ir(d,m=>m.test(i)):sr(d,m=>m.test(i));let f;f=e.valueCallback?e.valueCallback(h):h,f=n.valueCallback?n.valueCallback(f):f;const x=t.slice(i.length);return{value:f,rest:x}}}function sr(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function ir(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function cr(e){return(t,n={})=>{const r=t.match(e.matchPattern);if(!r)return null;const o=r[0],s=t.match(e.parsePattern);if(!s)return null;let i=e.valueCallback?e.valueCallback(s[0]):s[0];i=n.valueCallback?n.valueCallback(i):i;const d=t.slice(o.length);return{value:i,rest:d}}}const lr=/^(\d+)(th|st|nd|rd)?/i,dr=/\d+/i,ur={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},hr={any:[/^b/i,/^(a|c)/i]},fr={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},pr={any:[/1/i,/2/i,/3/i,/4/i]},mr={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},gr={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},xr={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},br={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},wr={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},yr={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},vr={ordinalNumber:cr({matchPattern:lr,parsePattern:dr,valueCallback:e=>parseInt(e,10)}),era:le({matchPatterns:ur,defaultMatchWidth:"wide",parsePatterns:hr,defaultParseWidth:"any"}),quarter:le({matchPatterns:fr,defaultMatchWidth:"wide",parsePatterns:pr,defaultParseWidth:"any",valueCallback:e=>e+1}),month:le({matchPatterns:mr,defaultMatchWidth:"wide",parsePatterns:gr,defaultParseWidth:"any"}),day:le({matchPatterns:xr,defaultMatchWidth:"wide",parsePatterns:br,defaultParseWidth:"any"}),dayPeriod:le({matchPatterns:wr,defaultMatchWidth:"any",parsePatterns:yr,defaultParseWidth:"any"})},kr={code:"en-US",formatDistance:qn,formatLong:Qn,formatRelative:Kn,localize:ar,match:vr,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Pr(e){const t=C(e);return Hn(t,In(t))+1}function Mr(e){const t=C(e),n=+ye(t)-+Ln(t);return Math.round(n/xt)+1}function wt(e,t){var x,m,v,w;const n=C(e),r=n.getFullYear(),o=ke(),s=(t==null?void 0:t.firstWeekContainsDate)??((m=(x=t==null?void 0:t.locale)==null?void 0:x.options)==null?void 0:m.firstWeekContainsDate)??o.firstWeekContainsDate??((w=(v=o.locale)==null?void 0:v.options)==null?void 0:w.firstWeekContainsDate)??1,i=V(e,0);i.setFullYear(r+1,0,s),i.setHours(0,0,0,0);const d=fe(i,t),h=V(e,0);h.setFullYear(r,0,s),h.setHours(0,0,0,0);const f=fe(h,t);return n.getTime()>=d.getTime()?r+1:n.getTime()>=f.getTime()?r:r-1}function Er(e,t){var d,h,f,x;const n=ke(),r=(t==null?void 0:t.firstWeekContainsDate)??((h=(d=t==null?void 0:t.locale)==null?void 0:d.options)==null?void 0:h.firstWeekContainsDate)??n.firstWeekContainsDate??((x=(f=n.locale)==null?void 0:f.options)==null?void 0:x.firstWeekContainsDate)??1,o=wt(e,t),s=V(e,0);return s.setFullYear(o,0,r),s.setHours(0,0,0,0),fe(s,t)}function Sr(e,t){const n=C(e),r=+fe(n,t)-+Er(n,t);return Math.round(r/xt)+1}function E(e,t){const n=e<0?"-":"",r=Math.abs(e).toString().padStart(t,"0");return n+r}const Q={y(e,t){const n=e.getFullYear(),r=n>0?n:1-n;return E(t==="yy"?r%100:r,t.length)},M(e,t){const n=e.getMonth();return t==="M"?String(n+1):E(n+1,2)},d(e,t){return E(e.getDate(),t.length)},a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(e,t){return E(e.getHours()%12||12,t.length)},H(e,t){return E(e.getHours(),t.length)},m(e,t){return E(e.getMinutes(),t.length)},s(e,t){return E(e.getSeconds(),t.length)},S(e,t){const n=t.length,r=e.getMilliseconds(),o=Math.trunc(r*Math.pow(10,n-3));return E(o,t.length)}},oe={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},at={G:function(e,t,n){const r=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if(t==="yo"){const r=e.getFullYear(),o=r>0?r:1-r;return n.ordinalNumber(o,{unit:"year"})}return Q.y(e,t)},Y:function(e,t,n,r){const o=wt(e,r),s=o>0?o:1-o;if(t==="YY"){const i=s%100;return E(i,2)}return t==="Yo"?n.ordinalNumber(s,{unit:"year"}):E(s,t.length)},R:function(e,t){const n=bt(e);return E(n,t.length)},u:function(e,t){const n=e.getFullYear();return E(n,t.length)},Q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return E(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return E(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){const r=e.getMonth();switch(t){case"M":case"MM":return Q.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){const r=e.getMonth();switch(t){case"L":return String(r+1);case"LL":return E(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){const o=Sr(e,r);return t==="wo"?n.ordinalNumber(o,{unit:"week"}):E(o,t.length)},I:function(e,t,n){const r=Mr(e);return t==="Io"?n.ordinalNumber(r,{unit:"week"}):E(r,t.length)},d:function(e,t,n){return t==="do"?n.ordinalNumber(e.getDate(),{unit:"date"}):Q.d(e,t)},D:function(e,t,n){const r=Pr(e);return t==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):E(r,t.length)},E:function(e,t,n){const r=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){const o=e.getDay(),s=(o-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(s);case"ee":return E(s,2);case"eo":return n.ordinalNumber(s,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});case"eeee":default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){const o=e.getDay(),s=(o-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(s);case"cc":return E(s,t.length);case"co":return n.ordinalNumber(s,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});case"cccc":default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(e,t,n){const r=e.getDay(),o=r===0?7:r;switch(t){case"i":return String(o);case"ii":return E(o,t.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){const o=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(e,t,n){const r=e.getHours();let o;switch(r===12?o=oe.noon:r===0?o=oe.midnight:o=r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(e,t,n){const r=e.getHours();let o;switch(r>=17?o=oe.evening:r>=12?o=oe.afternoon:r>=4?o=oe.morning:o=oe.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(e,t,n){if(t==="ho"){let r=e.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return Q.h(e,t)},H:function(e,t,n){return t==="Ho"?n.ordinalNumber(e.getHours(),{unit:"hour"}):Q.H(e,t)},K:function(e,t,n){const r=e.getHours()%12;return t==="Ko"?n.ordinalNumber(r,{unit:"hour"}):E(r,t.length)},k:function(e,t,n){let r=e.getHours();return r===0&&(r=24),t==="ko"?n.ordinalNumber(r,{unit:"hour"}):E(r,t.length)},m:function(e,t,n){return t==="mo"?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):Q.m(e,t)},s:function(e,t,n){return t==="so"?n.ordinalNumber(e.getSeconds(),{unit:"second"}):Q.s(e,t)},S:function(e,t){return Q.S(e,t)},X:function(e,t,n){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(t){case"X":return it(r);case"XXXX":case"XX":return J(r);case"XXXXX":case"XXX":default:return J(r,":")}},x:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"x":return it(r);case"xxxx":case"xx":return J(r);case"xxxxx":case"xxx":default:return J(r,":")}},O:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+st(r,":");case"OOOO":default:return"GMT"+J(r,":")}},z:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+st(r,":");case"zzzz":default:return"GMT"+J(r,":")}},t:function(e,t,n){const r=Math.trunc(e.getTime()/1e3);return E(r,t.length)},T:function(e,t,n){const r=e.getTime();return E(r,t.length)}};function st(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),o=Math.trunc(r/60),s=r%60;return s===0?n+String(o):n+String(o)+t+E(s,2)}function it(e,t){return e%60===0?(e>0?"-":"+")+E(Math.abs(e)/60,2):J(e,t)}function J(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),o=E(Math.trunc(r/60),2),s=E(r%60,2);return n+o+t+s}const ct=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},yt=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},Tr=(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],r=n[1],o=n[2];if(!o)return ct(e,t);let s;switch(r){case"P":s=t.dateTime({width:"short"});break;case"PP":s=t.dateTime({width:"medium"});break;case"PPP":s=t.dateTime({width:"long"});break;case"PPPP":default:s=t.dateTime({width:"full"});break}return s.replace("{{date}}",ct(r,t)).replace("{{time}}",yt(o,t))},jr={p:yt,P:Tr},$r=/^D+$/,Dr=/^Y+$/,Cr=["D","DD","YY","YYYY"];function Wr(e){return $r.test(e)}function Or(e){return Dr.test(e)}function Rr(e,t,n){const r=Fr(e,t,n);if(console.warn(r),Cr.includes(e))throw new RangeError(r)}function Fr(e,t,n){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Nr=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,zr=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Hr=/^'([^]*?)'?$/,Lr=/''/g,Ar=/[a-zA-Z]/;function vt(e,t,n){var x,m,v,w,p,P,b,k;const r=ke(),o=(n==null?void 0:n.locale)??r.locale??kr,s=(n==null?void 0:n.firstWeekContainsDate)??((m=(x=n==null?void 0:n.locale)==null?void 0:x.options)==null?void 0:m.firstWeekContainsDate)??r.firstWeekContainsDate??((w=(v=r.locale)==null?void 0:v.options)==null?void 0:w.firstWeekContainsDate)??1,i=(n==null?void 0:n.weekStartsOn)??((P=(p=n==null?void 0:n.locale)==null?void 0:p.options)==null?void 0:P.weekStartsOn)??r.weekStartsOn??((k=(b=r.locale)==null?void 0:b.options)==null?void 0:k.weekStartsOn)??0,d=C(e);if(!Bn(d))throw new RangeError("Invalid time value");let h=t.match(zr).map(g=>{const u=g[0];if(u==="p"||u==="P"){const y=jr[u];return y(g,o.formatLong)}return g}).join("").match(Nr).map(g=>{if(g==="''")return{isToken:!1,value:"'"};const u=g[0];if(u==="'")return{isToken:!1,value:Br(g)};if(at[u])return{isToken:!0,value:g};if(u.match(Ar))throw new RangeError("Format string contains an unescaped latin alphabet character `"+u+"`");return{isToken:!1,value:g}});o.localize.preprocessor&&(h=o.localize.preprocessor(d,h));const f={firstWeekContainsDate:s,weekStartsOn:i,locale:o};return h.map(g=>{if(!g.isToken)return g.value;const u=g.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&Or(u)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&Wr(u))&&Rr(u,t,String(e));const y=at[u[0]];return y(d,u,o.localize,f)}).join("")}function Br(e){const t=e.match(Hr);return t?t[1].replace(Lr,"'"):e}function Yr(e,t){const n=C(e),r=C(t);return n.getTime()>r.getTime()}function Ir(e,t){const n=C(e),r=C(t);return+n<+r}const _r=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",...e},l.createElement("title",null,`
		solidleft
	`),l.createElement("path",{d:"M10.293 16.707c-0.187-0.188-0.292-0.442-0.292-0.707s0.105-0.519 0.292-0.707l10-10c0.092-0.098 0.202-0.177 0.325-0.232s0.255-0.084 0.389-0.086c0.134-0.002 0.268 0.022 0.392 0.073s0.238 0.125 0.333 0.22c0.095 0.095 0.17 0.208 0.22 0.333s0.075 0.258 0.073 0.392c-0.002 0.134-0.032 0.267-0.086 0.389s-0.133 0.233-0.232 0.325l-9.293 9.293 9.293 9.293c0.098 0.091 0.177 0.202 0.232 0.325s0.084 0.255 0.086 0.389c0.002 0.134-0.022 0.268-0.073 0.392s-0.125 0.238-0.22 0.333c-0.095 0.095-0.208 0.17-0.333 0.22s-0.258 0.075-0.392 0.073c-0.134-0.002-0.267-0.032-0.389-0.086s-0.233-0.134-0.325-0.232l-10-10z"})),qr=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",...e},l.createElement("title",null,`
		solid-right
	`),l.createElement("path",{d:"M21.707 16.707c0.187-0.188 0.292-0.442 0.292-0.707s-0.105-0.519-0.292-0.707l-10-10c-0.092-0.098-0.202-0.177-0.325-0.232s-0.255-0.084-0.389-0.086c-0.134-0.002-0.268 0.022-0.392 0.073s-0.238 0.125-0.333 0.22c-0.095 0.095-0.17 0.208-0.22 0.333s-0.075 0.258-0.073 0.392c0.002 0.134 0.032 0.267 0.086 0.389s0.133 0.233 0.232 0.325l9.293 9.293-9.293 9.293c-0.098 0.091-0.177 0.202-0.232 0.325s-0.084 0.255-0.086 0.389c-0.002 0.134 0.022 0.268 0.073 0.392s0.125 0.238 0.22 0.333c0.095 0.095 0.208 0.17 0.333 0.22s0.258 0.075 0.392 0.073c0.134-0.002 0.267-0.032 0.389-0.086s0.233-0.134 0.325-0.232l10-10z"})),Gr=c.div`
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
`,Ur=c(_r)`

fill: ${e=>e.theme.colors.primary.accent};
  width: 14px;
  height: auto;


`,Vr=c(qr)`

fill: ${e=>e.theme.colors.primary.accent};
  width: 14px;
  height: auto;
 
 
`,Qr=({selectedDate:e,setSelectedDate:t,setCurrentMonth:n,setSelectedDay:r})=>{const o=new Date().getMonth(),s=new Date().getFullYear(),i=Ir(e,$e(new Date,-12)),d=Yr(e,new Date(s,o,1)),h=vt(e,"MMMM"),f=e.getFullYear(),x=()=>{t($e(e,-1)),r(null),n(v=>v-1)},m=()=>{t($e(e,1)),r(null),n(v=>v+1)};return a.jsxs(Gr,{children:[a.jsx(lt,{onClick:x,disabled:i,children:a.jsx(Ur,{})}),a.jsx("span",{children:`${h}, ${f}`}),a.jsx(lt,{onClick:m,disabled:d,children:a.jsx(Vr,{})})]})},Xr=c.div`
display: flex;
flex-direction:column;
gap: 16px;
padding: 24px 13px;


border-radius: 10px;
background:${e=>e.theme.colors.primary.bg};
box-shadow: 0px 4px 4px 0px rgba(64, 123, 255, 0.30);



`,Kr=c.h2`
color:${e=>e.theme.colors.primary.accent};
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 1.25;
`,Jr=c.ul`
display: flex;
flex-direction: column;
gap: 16px;

color: ${e=>e.theme.colors.primary.text};

font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 1.25;
`,Ce=c.li`

span{
  color:${e=>e.theme.colors.primary.accent};

  font-size: 18px;

  font-weight: 500;
  line-height: 1.33;
}

`,Zr=({selectedDate:e,selectedDayData:t})=>{const n=vt(e,"MMMM"),r=e.getDate(),o=ze().user.waterRate,s=o?(o/1e3).toFixed(1):"0",i=t?(t.waterRate/1e3).toFixed(1):s,d=t?t.percentagePerDay:"0",h=t?t.totalPortions:"0";return a.jsxs(Xr,{children:[a.jsxs(Kr,{children:[" ",r,", ",n]}),a.jsxs(Jr,{children:[a.jsxs(Ce,{children:["Daily Norma: ",a.jsxs("span",{children:[i," L"]})]}),a.jsxs(Ce,{children:["Fulfillment of the daily norm: ",a.jsxs("span",{children:[d,"%"]})]}),a.jsxs(Ce,{children:["How many servings of water: ",a.jsx("span",{children:h})]})]})]})},eo=c.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,to=c.div`
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
 
`,no=c.ul`
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
`,ro=c.li`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  position: relative;
  cursor: pointer;
  padding: 0px;

  @media (min-width: ${({theme:e})=>e.screens.tab}) {
  }
`,oo=c.div`
  width: 34px;
  height: 34px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${e=>e.theme.colors.primary.bg};

  border: 2px solid
    ${({theme:e,percentage:t})=>t<100?e.colors.secondary.color4:e.colors.primary.bg};
`,ao=c.p`
  z-index: 1;
  margin: 0;
`,so=c.p`
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
`,io=e=>e.water.waterDayList,co=e=>e.water.waterMonthList,lo=e=>e.water.waterRate,Ae=()=>{const e=Se(io),t=Se(co),n=Se(lo);return{waterDayList:e,waterMonthList:t,waterRate:n}},uo=()=>{const[e,t]=l.useState(new Date),[n,r]=l.useState(e.getMonth()),[o,s]=l.useState(null),[i,d]=l.useState(null),h=me(),f=Ae().waterMonthList,x=()=>{d(null)},m=!!i,v=m?"simple-popover":void 0;l.useEffect(()=>{const P=ot(e),b=rt(e);o===null&&h(zt({startDate:P,endDate:b}))},[n,h,e,o]);const w=(P,b)=>{t(b),d(P.currentTarget),s(b.getDate())},p=f&&f.find(P=>{const[b]=P.date.split(",");return parseInt(b)===e.getDate()});return a.jsxs(eo,{children:[a.jsxs(to,{children:[a.jsx("h3",{children:"Month"}),a.jsx(Qr,{selectedDate:e,setSelectedDate:t,setCurrentMonth:r,setSelectedDay:s})]}),a.jsx(no,{children:Yn({start:ot(e),end:rt(e)}).map((P,b)=>{const k=P.getDate(),g=f.find(y=>{const[M]=y.date.split(",");return parseInt(M)===k}),u=g?g.percentagePerDay:null;return a.jsxs(ro,{onClick:y=>w(y,P),children:[a.jsx(oo,{percentage:u,children:a.jsx(ao,{children:k})}),a.jsxs(so,{children:[u||0,"%"]})]},b)})}),a.jsx(Fn,{id:v,open:m,anchorEl:i,onClose:x,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"bottom",horizontal:"right"},children:a.jsx(Zr,{selectedDate:e,selectedDayData:p})})]})},ho="/Smart-Foxes-WaterTracker/assets/botleHomeDesk-3ae51194.png",fo="/Smart-Foxes-WaterTracker/assets/botlteHomeDesk2x-9a54d3e4.png",po="/Smart-Foxes-WaterTracker/assets/backgroundHomeTab-586d978e.png",mo="/Smart-Foxes-WaterTracker/assets/BackgroundHomeTab2x-642c3d3e.png",go="/Smart-Foxes-WaterTracker/assets/bottleHomeTab-0bf3952c.png",xo="/Smart-Foxes-WaterTracker/assets/bottleHomeTab2x-ed4a96a1.png",bo="/Smart-Foxes-WaterTracker/assets/backgroundHomeMob-d1e9a558.png",wo="/Smart-Foxes-WaterTracker/assets/backgroundHomeMob2x-089f92e0.png",yo="/Smart-Foxes-WaterTracker/assets/bottleHomeMob-1cd9cdb8.png",vo="/Smart-Foxes-WaterTracker/assets/bottleHomeMob2x-0e2d77ce.png",ko=c.main`
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
        url(${po}) 1x,
        url(${mo}) 2x
      );
background-position: center 40px, center;

}


@media (min-width: ${({theme:e})=>e.screens.desk}) {
    flex-direction:row;
    align-items: flex-start;
    padding: 0px 112px;
  
    background-image: image-set(
        url(${ho}) 1x,
        url(${fo}) 2x
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


`,kt=(e,t=!1)=>{const n=new Date(e);let r=n.getHours();const o=n.getMinutes();let s="";if(t){const i=r>=12?"PM":"AM";r=r%12,r=r||12,s=`${r.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")} ${i}`}else s=`${r.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")}`;return s},Eo=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",...e},l.createElement("title",null,"glass_26"),l.createElement("path",{fill:"#407bff",d:"M5.565 2.783l1.901 26.363v0.072h16.367l1.901-26.353v-0.082h-20.169zM23.16 28.479h-15.017l-1.426-19.747h0.784l1.289 17.403c0.008 0.092 0.049 0.177 0.115 0.24s0.153 0.098 0.244 0.099h0.030c0.047-0.003 0.093-0.016 0.136-0.037s0.080-0.051 0.111-0.087c0.031-0.036 0.055-0.078 0.070-0.124s0.021-0.094 0.017-0.141l-1.289-17.351h16.362l-1.426 19.747zM24.637 7.994h-16.468l-0.283-3.847c-0.009-0.094-0.052-0.181-0.122-0.244s-0.16-0.097-0.252-0.095c-0.095 0.009-0.183 0.055-0.245 0.129s-0.094 0.169-0.088 0.266l0.283 3.795h-0.794l-0.324-4.483h18.617l-0.324 4.478z"}),l.createElement("path",{fill:"#407bff",d:"M11.359 12.384c0.236 0 0.467-0.071 0.663-0.204s0.349-0.322 0.439-0.543c0.090-0.221 0.114-0.465 0.068-0.699s-0.16-0.45-0.327-0.62c-0.167-0.169-0.38-0.285-0.611-0.331s-0.471-0.023-0.689 0.069c-0.218 0.092-0.404 0.247-0.536 0.446s-0.201 0.433-0.201 0.672c0 0.321 0.126 0.629 0.35 0.856s0.527 0.355 0.844 0.355zM11.359 10.697c0.093 0 0.184 0.028 0.261 0.080s0.138 0.127 0.173 0.214c0.036 0.087 0.045 0.183 0.027 0.276s-0.063 0.178-0.129 0.244c-0.066 0.067-0.15 0.112-0.241 0.131s-0.186 0.009-0.272-0.027c-0.086-0.036-0.159-0.097-0.211-0.176s-0.079-0.171-0.079-0.265c0-0.127 0.050-0.248 0.138-0.337s0.208-0.14 0.332-0.14z"}),l.createElement("path",{fill:"#407bff",d:"M11.354 16.318c0.003 0.239 0.076 0.472 0.209 0.669s0.321 0.35 0.539 0.439 0.458 0.111 0.689 0.062c0.231-0.049 0.442-0.166 0.607-0.336s0.277-0.387 0.321-0.621 0.019-0.477-0.072-0.698c-0.091-0.22-0.245-0.408-0.442-0.54s-0.427-0.201-0.663-0.2c-0.158 0.001-0.313 0.033-0.459 0.095s-0.277 0.153-0.387 0.267-0.198 0.249-0.256 0.397c-0.059 0.148-0.088 0.307-0.086 0.467zM13.013 16.318c0 0.094-0.028 0.187-0.079 0.265s-0.125 0.14-0.211 0.176c-0.086 0.036-0.18 0.046-0.272 0.027s-0.175-0.064-0.241-0.131-0.111-0.152-0.129-0.244c-0.018-0.093-0.009-0.188 0.027-0.276s0.096-0.162 0.173-0.214 0.168-0.080 0.261-0.080c0.125 0 0.244 0.050 0.333 0.14s0.138 0.211 0.138 0.337z"}),l.createElement("path",{fill:"#407bff",d:"M19.834 16.349c0.236 0 0.467-0.071 0.663-0.204s0.349-0.322 0.439-0.543c0.090-0.221 0.114-0.465 0.068-0.699s-0.16-0.45-0.327-0.62c-0.167-0.169-0.379-0.285-0.611-0.331s-0.471-0.023-0.689 0.069c-0.218 0.092-0.404 0.247-0.535 0.446s-0.201 0.433-0.201 0.672c0 0.321 0.126 0.629 0.349 0.856s0.527 0.355 0.844 0.355zM19.834 14.666c0.093 0 0.184 0.028 0.262 0.081s0.138 0.127 0.173 0.215c0.035 0.088 0.044 0.184 0.026 0.276s-0.064 0.178-0.13 0.244c-0.066 0.066-0.151 0.111-0.242 0.129s-0.186 0.008-0.272-0.029-0.159-0.099-0.21-0.178c-0.051-0.079-0.078-0.172-0.077-0.266 0.001-0.126 0.051-0.246 0.14-0.334s0.207-0.138 0.331-0.138z"}),l.createElement("path",{fill:"#407bff",d:"M15.677 14.066c0.236 0 0.467-0.071 0.663-0.204s0.349-0.322 0.439-0.543c0.090-0.221 0.114-0.464 0.068-0.699s-0.16-0.45-0.327-0.62c-0.167-0.169-0.38-0.285-0.611-0.331s-0.471-0.023-0.689 0.069c-0.218 0.092-0.404 0.247-0.536 0.446s-0.201 0.433-0.201 0.672c0 0.321 0.126 0.629 0.35 0.856s0.527 0.354 0.844 0.354zM15.677 12.379c0.093 0 0.184 0.028 0.261 0.080s0.138 0.127 0.173 0.214c0.036 0.087 0.045 0.183 0.027 0.276s-0.063 0.177-0.129 0.244c-0.066 0.067-0.15 0.112-0.241 0.131s-0.186 0.009-0.272-0.027-0.159-0.097-0.211-0.176c-0.052-0.079-0.079-0.171-0.079-0.265-0.003-0.065 0.006-0.129 0.028-0.19s0.056-0.116 0.1-0.164c0.044-0.047 0.097-0.084 0.156-0.11s0.122-0.039 0.186-0.039v0.026z"}),l.createElement("path",{fill:"#407bff",d:"M13.402 20.929c0.005 0.197 0.067 0.387 0.178 0.548s0.267 0.285 0.447 0.357c0.181 0.072 0.378 0.088 0.568 0.047s0.363-0.139 0.498-0.279c0.135-0.141 0.227-0.319 0.263-0.512s0.015-0.393-0.060-0.574c-0.075-0.181-0.202-0.336-0.363-0.445s-0.351-0.167-0.545-0.167c-0.264 0.007-0.514 0.118-0.699 0.309s-0.287 0.449-0.287 0.716zM14.388 20.662c0.052 0 0.103 0.016 0.146 0.045s0.077 0.071 0.097 0.12 0.025 0.102 0.015 0.154c-0.010 0.052-0.035 0.099-0.072 0.137s-0.084 0.063-0.135 0.073c-0.051 0.010-0.104 0.005-0.152-0.015s-0.089-0.054-0.118-0.098c-0.029-0.044-0.044-0.096-0.044-0.148 0-0.071 0.028-0.139 0.077-0.189s0.116-0.078 0.186-0.078z"}),l.createElement("path",{fill:"#407bff",d:"M18.17 19.816c0.202 0.007 0.402-0.048 0.574-0.157s0.306-0.269 0.388-0.457c0.081-0.188 0.105-0.397 0.068-0.599s-0.133-0.388-0.275-0.534c-0.143-0.146-0.325-0.245-0.524-0.285s-0.405-0.018-0.591 0.063c-0.186 0.081-0.345 0.216-0.454 0.389s-0.166 0.375-0.161 0.58c0.006 0.262 0.111 0.511 0.292 0.697s0.426 0.295 0.684 0.304zM18.17 18.549c0.070 0 0.137 0.028 0.186 0.078s0.077 0.118 0.077 0.189c0 0.071-0.028 0.139-0.077 0.189s-0.116 0.078-0.186 0.078c-0.070 0-0.138-0.028-0.188-0.078s-0.079-0.118-0.080-0.189c0-0.035 0.007-0.071 0.020-0.103s0.033-0.062 0.058-0.087 0.055-0.044 0.087-0.057c0.032-0.013 0.067-0.019 0.102-0.019z"}),l.createElement("path",{fill:"#407bff",d:"M20.253 11.538c0.2 0 0.395-0.060 0.562-0.173s0.296-0.273 0.372-0.46c0.077-0.187 0.097-0.394 0.058-0.593s-0.135-0.382-0.277-0.525c-0.141-0.143-0.322-0.241-0.518-0.281s-0.399-0.019-0.584 0.058c-0.185 0.078-0.343 0.209-0.454 0.378s-0.17 0.367-0.17 0.57c0 0.272 0.107 0.533 0.296 0.725s0.447 0.3 0.715 0.3zM20.253 10.271c0.039-0.011 0.080-0.013 0.12-0.006s0.078 0.024 0.11 0.049c0.032 0.025 0.059 0.057 0.077 0.094s0.028 0.078 0.028 0.119-0.009 0.082-0.028 0.119c-0.018 0.037-0.044 0.069-0.077 0.094s-0.070 0.042-0.11 0.049c-0.040 0.008-0.081 0.006-0.12-0.006-0.039 0.011-0.080 0.013-0.12 0.006s-0.078-0.024-0.11-0.049c-0.032-0.025-0.059-0.057-0.077-0.094s-0.028-0.078-0.028-0.119 0.009-0.082 0.028-0.119c0.018-0.037 0.044-0.069 0.077-0.094s0.070-0.042 0.11-0.049c0.040-0.008 0.081-0.006 0.12 0.006z"}),l.createElement("path",{fill:"#407bff",d:"M10.369 27.191c-0.045 0.021-0.086 0.052-0.119 0.089s-0.059 0.082-0.074 0.13c-0.016 0.048-0.021 0.099-0.017 0.149s0.019 0.099 0.043 0.144c0.031 0.060 0.078 0.11 0.135 0.145s0.122 0.054 0.189 0.055c0.056 0.002 0.112-0.011 0.162-0.036 1.545-0.803 3.255-1.225 4.99-1.231 1.837 0.027 3.648 0.441 5.319 1.215 0.066 0.035 0.141 0.049 0.215 0.039s0.143-0.042 0.198-0.093c0.055-0.051 0.094-0.118 0.11-0.192s0.010-0.151-0.018-0.221c-0.036-0.091-0.105-0.164-0.192-0.205-1.769-0.821-3.687-1.258-5.633-1.282-1.845 0.002-3.664 0.444-5.309 1.292z"})),So=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:1024,height:1024,viewBox:"0 0 1024 1024",...e},l.createElement("title",null,"edit"),l.createElement("path",{fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:4,strokeWidth:42.6667,d:"M719.445 191.445l71.979-72.021c14.479-14.479 34.482-23.435 56.576-23.435 44.189 0 80.011 35.822 80.011 80.011 0 22.094-8.955 42.097-23.435 56.576l-453.077 453.077c-21.936 21.924-49.153 38.567-79.579 47.856l-1.36 0.357-114.56 34.133 34.133-114.56c9.647-31.785 26.289-59.002 48.214-80.94l381.098-381.055zM719.445 191.445l112.555 112.555M768 597.333v202.667c0 53.019-42.981 96-96 96v0h-448c-53.019 0-96-42.981-96-96v0-448c0-53.019 42.981-96 96-96v0h202.667"})),To=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:1024,height:1024,viewBox:"0 0 1024 1024",...e},l.createElement("title",null,"delete"),l.createElement("path",{fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:4,strokeWidth:42.6667,d:"M628.907 384l-14.763 384M409.856 768l-14.763-384M820.395 247.040c14.592 2.219 29.099 4.565 43.605 7.083M820.395 247.040l-45.568 592.341c-3.952 49.747-45.294 88.619-95.716 88.619-0.010 0-0.020 0-0.030 0h-334.164c-0.008 0-0.018 0-0.028 0-50.422 0-91.764-38.872-95.694-88.283l-0.021-0.336-45.568-592.341M820.395 247.040c-38.791-6.358-89.724-12.366-141.193-16.476l-7.202-0.463M203.605 247.040c-25.242 3.599-40.074 6.065-54.844 8.706l11.239-1.666M203.605 247.040c38.789-6.358 89.722-12.366 141.19-16.476l7.205-0.463M672 230.101v-39.083c0-50.347-38.827-92.331-89.173-93.909-21.11-0.721-45.921-1.132-70.827-1.132-24.908 0-49.719 0.411-74.428 1.226l3.602-0.094c-50.347 1.579-89.173 43.605-89.173 93.909v39.083M672 230.101c-47.901-3.932-103.689-6.173-160-6.173-56.31 0-112.097 2.241-167.276 6.64l7.276-0.466"})),jo=e=>l.createElement("svg",{fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:4,strokeWidth:42.6667,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...e},l.createElement("path",{d:"M512 256v512M768 512h-512"})),$o=c.div`
  
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
 
`,Do=c.ul`
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

`,zo=c.div`

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
`,Ho=c.div`
display: flex;
flex-direction: column-reverse;
gap: 24px;

@media (min-width: ${({theme:e})=>e.screens.tab}){
    flex-direction: row;
    justify-content: end;
}
`,Lo=c.button`

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
`,Bo=({id:e})=>{const{closeModal:t}=l.useContext(He),n=me(),r=async()=>{await n(Ht(e)),t(),n(Le())};return a.jsxs(zo,{children:[a.jsx("h3",{children:"Delete entry"}),a.jsx("p",{children:"Are you sure you want to delete the entry?"}),a.jsxs(Ho,{children:[a.jsx(Lo,{type:"button",onClick:()=>t(),children:"Cancel"}),a.jsx(Ao,{type:"submit",onClick:r,children:"Delete"})]})]})};function Yo(e){return gt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.75 4.5a.75.75 0 0 1 .75.75V11h5.75a.75.75 0 0 1 0 1.5H12.5v5.75a.75.75 0 0 1-1.5 0V12.5H5.25a.75.75 0 0 1 0-1.5H11V5.25a.75.75 0 0 1 .75-.75Z"},child:[]}]})(e)}const Io=c.div`
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
`,Go=c.div`
  display: flex;
  flex-direction: column;
`,Uo=c.label`
  display: flex;
  justify-content: flex-start;
  gap: 12px;
  flex-direction: column;
`,Vo=c.div`
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
`,aa=c(Yo)`
  fill: ${e=>e.theme.colors.primary.accent};
  stroke: ${e=>e.theme.colors.primary.accent};
  width: 16px;
  height: 16px;

  @media (min-width: ${({theme:e})=>e.screens.tab}) {
    width: 24px;
    height: 24px;
  }
`,sa=c(Lt)`
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

`;function ca(e){const t=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return`${t}-${n}-${r}`}const Tt=({portion:e})=>{const t=me(),{waterDayList:n}=Ae(),[r,o]=l.useState(e.waterVolume?e.waterVolume:0),[s,i]=l.useState(e.dateAdded?e.dateAdded:""),d=n,h=w=>{const p=parseFloat(w.target.value);if(p>3e3){alert("не більше 3000 мл");return}o(p)},f=w=>{switch(w.currentTarget.id){case"increment":o(p=>p+50);break;case"decrement":o(p=>p>0?p-50:0);break}},x=async w=>{if(w.preventDefault(),e){const p={id:e._id,date:s,waterVolume:r};t(At(p)),handleCloseModal(),t(Le())}else{const P=ca(new Date),b=d?d.find(u=>{u.dateAdded}):s;if(console.log(b),b){alert("Не можна в один той самий час"),i("");return}const k=P+"T"+b,g={waterVolume:r,date:k};try{if(!t(Bt(g)).error)o(0),i("");else throw new Error}catch(u){console.error(u),alert("Something went wrong")}}},m=e?"Edit the entered amount of water":"Add water",v=e?"Correct entered data: ":"Choose a value:";return a.jsxs(Io,{children:[a.jsxs(_o,{children:[" ",m]}),e&&a.jsxs(Pt,{children:[a.jsx(Et,{}),a.jsx(Mt,{children:`${e.waterVolume} ml `}),a.jsx("span",{children:kt(e.dateAdded,!0)})]}),a.jsxs(Go,{children:[a.jsx(qo,{children:v}),a.jsxs(Uo,{children:[a.jsx(Qo,{children:"Amount of water:"}),a.jsxs(Vo,{children:[a.jsx(dt,{onClick:f,id:"decrement",children:a.jsx(sa,{})}),a.jsxs(ra,{children:[" ",r||0," L"]}),a.jsx(dt,{onClick:f,id:"increment",children:a.jsx(aa,{})})]})]})]}),a.jsxs(Xo,{children:[a.jsx(Ko,{children:"Recording time:"}),a.jsx(Jo,{type:"time",value:s,onChange:w=>i(w.target.value)})]}),a.jsxs(Zo,{children:[a.jsx(ea,{children:"Enter the value of the water used:"}),a.jsx(ta,{type:"number",value:r,onChange:h,placeholder:"0"})]}),a.jsxs(na,{children:[a.jsxs(ia,{children:[" ",r||0," Ml"]}),a.jsx(oa,{onClick:x,children:"Save"})]})]})},la=({handleAddWaterClick:e})=>{const{openModal:t}=l.useContext(He),n=Ae().waterDayList,r=me();l.useEffect(()=>{r(Le())},[r]);const o=i=>{t(a.jsx(a.Fragment,{children:a.jsx(Bo,{id:i})}))},s=i=>{t(a.jsx(a.Fragment,{children:a.jsx(Tt,{portion:i})}))};return a.jsxs($o,{children:[a.jsx("h3",{children:"Today"}),n&&n.length>0&&a.jsx(Do,{children:n.map(i=>a.jsxs("li",{children:[a.jsxs(Pt,{children:[a.jsx(Et,{}),a.jsx(Mt,{children:`${i.waterVolume} ml `}),a.jsx("span",{children:kt(i.dateAdded,!0)})]}),a.jsxs(Oo,{children:[a.jsx(Ro,{onClick:()=>s(i),children:a.jsx(Co,{})}),a.jsx(Fo,{onClick:()=>o(i._id),children:a.jsx(Wo,{})})]})]},i._id))}),a.jsxs(No,{onClick:e,children:[a.jsx(St,{})," Add water"]})]})},da=c.div`
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
`,We=c.input`
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
`,ja=c.button``,$a=c.div`
  width: 544px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,Da=c.span`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: ${e=>e.theme.colors.primary.accent};
`,Ca=c.svg`
  background-color:;
`,Wa=({onClose:e})=>{const t=me(),{user:n}=ze(),r={weight:.03,activity:.04},o={weight:.04,activity:.06},[s,i]=l.useState(r),[d,h]=l.useState(""),[f,x]=l.useState(""),[m,v]=l.useState(""),w=n.waterRate;l.useEffect(()=>{const g=u=>{u.code==="Escape"&&e()};return window.addEventListener("keydown",g),()=>{window.removeEventListener("keydown",g)}},[e]);const p=l.useCallback(()=>!d||!f?void 0:(d*s.weight+f/60*s.activity).toFixed(1),[s,d,f]),P=l.useMemo(()=>p(),[p]),b=g=>{const u=g.target.value,y=parseFloat(u);!isNaN(y)&&y>=1?v(y):u===""&&v("")},k=g=>{g.preventDefault();const u=parseFloat(P);if(!(f>0&&d>0||m>0)){alert("Fill all fields");return}t(Yt(m||u)).then(M=>{M.error?(console.log(M.error),alert("Something went wrong ")):(e(),h(""),x(""),v(""))})};return a.jsx(ma,{children:a.jsxs(ga,{children:[a.jsxs($a,{children:[a.jsx(xa,{children:"My daily norma"}),a.jsx(ja,{onClick:()=>e(),children:a.jsx(Ca,{width:"24",height:"24",children:a.jsx("path",{d:"M6 18L18 6M6 6L18 18",stroke:"#407BFF",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),a.jsxs(ba,{children:[a.jsxs(K,{children:["For girl: ",a.jsx(ut,{children:"V=(M*0,03) + (T*0,4)"})]}),a.jsxs(K,{children:["For man: ",a.jsx(ut,{children:"V=(M*0,04) + (T*0,6)"})]})]}),a.jsx(wa,{children:a.jsxs(ya,{children:[a.jsx(va,{children:"*"})," V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]})}),a.jsxs(ka,{children:[a.jsxs(Ma,{children:[a.jsx(ht,{children:"Calculate your rate:"}),a.jsxs(Pa,{children:[a.jsxs(ft,{children:[a.jsx(pt,{type:"radio",name:"gender",value:"woman",onChange:()=>i(r),checked:n.gender==="famale"}),a.jsx(K,{children:"For woman"})]}),a.jsxs(ft,{children:[a.jsx(pt,{type:"radio",name:"gender",value:"man",onChange:()=>i(o),checked:n.gender==="male"}),a.jsx(K,{children:"For man"})]})]}),a.jsxs(mt,{children:[a.jsx(K,{children:"Your weight in kilograms:"}),a.jsx(We,{type:"number",name:"userWeight",placeholder:"0",value:d,min:0,max:250,onChange:g=>h(g.target.value)})]}),a.jsxs(mt,{children:[a.jsx(K,{children:"The time of active participation in sports or other activities with a high physical. load in hours:"}),a.jsx(We,{type:"number",name:"userActive",placeholder:"0",value:f,min:0,onChange:g=>x(g.target.value)})]}),a.jsxs(K,{children:["The required amount of water in liters per day:",a.jsxs(Da,{children:[" ",P||(w/1e3).toFixed(1)," L"]})]})]}),a.jsxs(Ea,{children:[a.jsx(ht,{children:"Write down how much water you will drink:"}),a.jsx(We,{type:"number",name:"userWaterPredict",placeholder:"0",value:m,min:0,onChange:b})]}),a.jsx(Ta,{children:a.jsx(Sa,{onClick:k,children:"Save"})})]})]})})},Oa=()=>{const[e,t]=l.useState(!1),{user:n}=ze(),r=n.waterRate,o=()=>{t(!0)},s=()=>{t(!1)},i=(r/1e3).toFixed(1);return a.jsxs(da,{children:[a.jsx(ha,{children:"My daily norma"}),a.jsxs(ua,{children:[a.jsxs(pa,{children:[" ",i||r," L"]}),a.jsx(fa,{onClick:o,children:"Edit"})]}),e&&a.jsx(Wa,{onClose:s})]})};function Ra(e){return gt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Circle_Plus"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M15,12.5H12.5V15a.5.5,0,0,1-1,0V12.5H9a.5.5,0,0,1,0-1h2.5V9a.5.5,0,0,1,1,0v2.5H15A.5.5,0,0,1,15,12.5Z"},child:[]},{tag:"path",attr:{d:"M12,21.932A9.934,9.934,0,1,1,21.932,12,9.944,9.944,0,0,1,12,21.932ZM12,3.065A8.934,8.934,0,1,0,20.932,12,8.944,8.944,0,0,0,12,3.065Z"},child:[]}]}]}]})(e)}const Fa=c.input`
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
`,za=c.button`
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
`,Ha=({handleAddWaterClick:e})=>a.jsxs(Na,{children:[a.jsx(Fa,{type:"range"}),a.jsxs(za,{onClick:e,children:[a.jsx(jt,{})," Add water"]})]}),Ba=()=>{const{openModal:e}=l.useContext(He),t=()=>{e(a.jsx(a.Fragment,{children:a.jsx(Tt,{})}))};return a.jsxs(ko,{children:[a.jsxs(Po,{children:[a.jsx(Oa,{}),a.jsx(Ha,{handleAddWaterClick:t})]}),a.jsxs(Mo,{children:[a.jsx(la,{handleAddWaterClick:t}),a.jsx(uo,{})]})]})};export{Ba as default};
