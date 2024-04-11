import{D as q,r as l,J as Ee,j as a,K as Qe,N as Ct,O as A,Q as $t,R as ae,T as At,U as Wt,V as Ge,W as Fe,X as ze,Y as pe,Z as Be,$ as ue,a0 as Le,a1 as Me,a2 as Rt,a3 as Ht,a4 as Nt,a5 as It,u as c,a6 as $e,d as ge,f as xe,a7 as Ft,M as we,a8 as zt,a9 as Pe,G as bt,aa as Bt,ab as Lt,ac as Yt,ad as Ke,ae as Jt}from"./index-496ffdba.js";function Xe(...e){return e.reduce((t,n)=>n==null?t:function(...o){t.apply(this,o),n.apply(this,o)},()=>{})}function Ut(e,t=166){let n;function r(...o){const i=()=>{e.apply(this,o)};clearTimeout(n),n=setTimeout(i,t)}return r.clear=()=>{clearTimeout(n)},r}function he(e){return q(e).defaultView||window}function qt(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}const Zt=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function Vt(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function Qt(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=r=>e.ownerDocument.querySelector(`input[type="radio"]${r}`);let n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}function Gt(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||Qt(e))}function Kt(e){const t=[],n=[];return Array.from(e.querySelectorAll(Zt)).forEach((r,o)=>{const i=Vt(r);i===-1||!Gt(r)||(i===0?t.push(r):n.push({documentOrder:o,tabIndex:i,node:r}))}),n.sort((r,o)=>r.tabIndex===o.tabIndex?r.documentOrder-o.documentOrder:r.tabIndex-o.tabIndex).map(r=>r.node).concat(t)}function Xt(){return!0}function _t(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:r=!1,disableRestoreFocus:o=!1,getTabbable:i=Kt,isEnabled:s=Xt,open:u}=e,d=l.useRef(!1),m=l.useRef(null),f=l.useRef(null),p=l.useRef(null),v=l.useRef(null),M=l.useRef(!1),x=l.useRef(null),O=Ee(t.ref,x),y=l.useRef(null);l.useEffect(()=>{!u||!x.current||(M.current=!n)},[n,u]),l.useEffect(()=>{if(!u||!x.current)return;const h=q(x.current);return x.current.contains(h.activeElement)||(x.current.hasAttribute("tabIndex")||x.current.setAttribute("tabIndex","-1"),M.current&&x.current.focus()),()=>{o||(p.current&&p.current.focus&&(d.current=!0,p.current.focus()),p.current=null)}},[u]),l.useEffect(()=>{if(!u||!x.current)return;const h=q(x.current),b=W=>{y.current=W,!(r||!s()||W.key!=="Tab")&&h.activeElement===x.current&&W.shiftKey&&(d.current=!0,f.current&&f.current.focus())},k=()=>{const W=x.current;if(W===null)return;if(!h.hasFocus()||!s()||d.current){d.current=!1;return}if(W.contains(h.activeElement)||r&&h.activeElement!==m.current&&h.activeElement!==f.current)return;if(h.activeElement!==v.current)v.current=null;else if(v.current!==null)return;if(!M.current)return;let S=[];if((h.activeElement===m.current||h.activeElement===f.current)&&(S=i(x.current)),S.length>0){var C,I;const Y=!!((C=y.current)!=null&&C.shiftKey&&((I=y.current)==null?void 0:I.key)==="Tab"),R=S[0],z=S[S.length-1];typeof R!="string"&&typeof z!="string"&&(Y?z.focus():R.focus())}else W.focus()};h.addEventListener("focusin",k),h.addEventListener("keydown",b,!0);const D=setInterval(()=>{h.activeElement&&h.activeElement.tagName==="BODY"&&k()},50);return()=>{clearInterval(D),h.removeEventListener("focusin",k),h.removeEventListener("keydown",b,!0)}},[n,r,o,s,u,i]);const w=h=>{p.current===null&&(p.current=h.relatedTarget),M.current=!0,v.current=h.target;const b=t.props.onFocus;b&&b(h)},g=h=>{p.current===null&&(p.current=h.relatedTarget),M.current=!0};return a.jsxs(l.Fragment,{children:[a.jsx("div",{tabIndex:u?0:-1,onFocus:g,ref:m,"data-testid":"sentinelStart"}),l.cloneElement(t,{ref:O,onFocus:w}),a.jsx("div",{tabIndex:u?0:-1,onFocus:g,ref:f,"data-testid":"sentinelEnd"})]})}function en(e){const t=q(e);return t.body===e?he(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function de(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function _e(e){return parseInt(he(e).getComputedStyle(e).paddingRight,10)||0}function tn(e){const n=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,r=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return n||r}function et(e,t,n,r,o){const i=[t,n,...r];[].forEach.call(e.children,s=>{const u=i.indexOf(s)===-1,d=!tn(s);u&&d&&de(s,o)})}function Ae(e,t){let n=-1;return e.some((r,o)=>t(r)?(n=o,!0):!1),n}function nn(e,t){const n=[],r=e.container;if(!t.disableScrollLock){if(en(r)){const s=qt(q(r));n.push({value:r.style.paddingRight,property:"padding-right",el:r}),r.style.paddingRight=`${_e(r)+s}px`;const u=q(r).querySelectorAll(".mui-fixed");[].forEach.call(u,d=>{n.push({value:d.style.paddingRight,property:"padding-right",el:d}),d.style.paddingRight=`${_e(d)+s}px`})}let i;if(r.parentNode instanceof DocumentFragment)i=q(r).body;else{const s=r.parentElement,u=he(r);i=(s==null?void 0:s.nodeName)==="HTML"&&u.getComputedStyle(s).overflowY==="scroll"?s:r}n.push({value:i.style.overflow,property:"overflow",el:i},{value:i.style.overflowX,property:"overflow-x",el:i},{value:i.style.overflowY,property:"overflow-y",el:i}),i.style.overflow="hidden"}return()=>{n.forEach(({value:i,el:s,property:u})=>{i?s.style.setProperty(u,i):s.style.removeProperty(u)})}}function rn(e){const t=[];return[].forEach.call(e.children,n=>{n.getAttribute("aria-hidden")==="true"&&t.push(n)}),t}class on{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,n){let r=this.modals.indexOf(t);if(r!==-1)return r;r=this.modals.length,this.modals.push(t),t.modalRef&&de(t.modalRef,!1);const o=rn(n);et(n,t.mount,t.modalRef,o,!0);const i=Ae(this.containers,s=>s.container===n);return i!==-1?(this.containers[i].modals.push(t),r):(this.containers.push({modals:[t],container:n,restore:null,hiddenSiblings:o}),r)}mount(t,n){const r=Ae(this.containers,i=>i.modals.indexOf(t)!==-1),o=this.containers[r];o.restore||(o.restore=nn(o,n))}remove(t,n=!0){const r=this.modals.indexOf(t);if(r===-1)return r;const o=Ae(this.containers,s=>s.modals.indexOf(t)!==-1),i=this.containers[o];if(i.modals.splice(i.modals.indexOf(t),1),this.modals.splice(r,1),i.modals.length===0)i.restore&&i.restore(),t.modalRef&&de(t.modalRef,n),et(i.container,t.mount,t.modalRef,i.hiddenSiblings,!1),this.containers.splice(o,1);else{const s=i.modals[i.modals.length-1];s.modalRef&&de(s.modalRef,!1)}return r}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}function an(e){return typeof e=="function"?e():e}function sn(e){return e?e.props.hasOwnProperty("in"):!1}const cn=new on;function ln(e){const{container:t,disableEscapeKeyDown:n=!1,disableScrollLock:r=!1,manager:o=cn,closeAfterTransition:i=!1,onTransitionEnter:s,onTransitionExited:u,children:d,onClose:m,open:f,rootRef:p}=e,v=l.useRef({}),M=l.useRef(null),x=l.useRef(null),O=Ee(x,p),[y,w]=l.useState(!f),g=sn(d);let h=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(h=!1);const b=()=>q(M.current),k=()=>(v.current.modalRef=x.current,v.current.mount=M.current,v.current),D=()=>{o.mount(k(),{disableScrollLock:r}),x.current&&(x.current.scrollTop=0)},W=Qe(()=>{const T=an(t)||b().body;o.add(k(),T),x.current&&D()}),S=l.useCallback(()=>o.isTopModal(k()),[o]),C=Qe(T=>{M.current=T,T&&(f&&S()?D():x.current&&de(x.current,h))}),I=l.useCallback(()=>{o.remove(k(),h)},[h,o]);l.useEffect(()=>()=>{I()},[I]),l.useEffect(()=>{f?W():(!g||!i)&&I()},[f,I,g,i,W]);const Y=T=>$=>{var B;(B=T.onKeyDown)==null||B.call(T,$),!($.key!=="Escape"||$.which===229||!S())&&(n||($.stopPropagation(),m&&m($,"escapeKeyDown")))},R=T=>$=>{var B;(B=T.onClick)==null||B.call(T,$),$.target===$.currentTarget&&m&&m($,"backdropClick")};return{getRootProps:(T={})=>{const $=Ct(e);delete $.onTransitionEnter,delete $.onTransitionExited;const B=A({},$,T);return A({role:"presentation"},B,{onKeyDown:Y(B),ref:O})},getBackdropProps:(T={})=>{const $=T;return A({"aria-hidden":!0},$,{onClick:R($),open:f})},getTransitionProps:()=>{const T=()=>{w(!1),s&&s()},$=()=>{w(!0),u&&u(),i&&I()};return{onEnter:Xe(T,d==null?void 0:d.props.onEnter),onExited:Xe($,d==null?void 0:d.props.onExited)}},rootRef:O,portalRef:C,isTopModal:S,exited:y,hasTransition:g}}const dn=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],un={entering:{opacity:1},entered:{opacity:1}},hn=l.forwardRef(function(t,n){const r=$t(),o={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:i,appear:s=!0,children:u,easing:d,in:m,onEnter:f,onEntered:p,onEntering:v,onExit:M,onExited:x,onExiting:O,style:y,timeout:w=o,TransitionComponent:g=At}=t,h=ae(t,dn),b=l.useRef(null),k=Ee(b,u.ref,n),D=j=>F=>{if(j){const T=b.current;F===void 0?j(T):j(T,F)}},W=D(v),S=D((j,F)=>{Wt(j);const T=Ge({style:y,timeout:w,easing:d},{mode:"enter"});j.style.webkitTransition=r.transitions.create("opacity",T),j.style.transition=r.transitions.create("opacity",T),f&&f(j,F)}),C=D(p),I=D(O),Y=D(j=>{const F=Ge({style:y,timeout:w,easing:d},{mode:"exit"});j.style.webkitTransition=r.transitions.create("opacity",F),j.style.transition=r.transitions.create("opacity",F),M&&M(j)}),R=D(x),z=j=>{i&&i(b.current,j)};return a.jsx(g,A({appear:s,in:m,nodeRef:b,onEnter:S,onEntered:C,onEntering:W,onExit:Y,onExited:R,onExiting:I,addEndListener:z,timeout:w},h,{children:(j,F)=>l.cloneElement(u,A({style:A({opacity:0,visibility:j==="exited"&&!m?"hidden":void 0},un[j],y,u.props.style),ref:k},F))}))}),mn=hn;function fn(e){return Fe("MuiBackdrop",e)}ze("MuiBackdrop",["root","invisible"]);const pn=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],gn=e=>{const{classes:t,invisible:n}=e;return Le({root:["root",n&&"invisible"]},fn,t)},xn=pe("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})(({ownerState:e})=>A({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),wn=l.forwardRef(function(t,n){var r,o,i;const s=Be({props:t,name:"MuiBackdrop"}),{children:u,className:d,component:m="div",components:f={},componentsProps:p={},invisible:v=!1,open:M,slotProps:x={},slots:O={},TransitionComponent:y=mn,transitionDuration:w}=s,g=ae(s,pn),h=A({},s,{component:m,invisible:v}),b=gn(h),k=(r=x.root)!=null?r:p.root;return a.jsx(y,A({in:M,timeout:w},g,{children:a.jsx(xn,A({"aria-hidden":!0},k,{as:(o=(i=O.root)!=null?i:f.Root)!=null?o:m,className:ue(b.root,d,k==null?void 0:k.className),ownerState:A({},h,k==null?void 0:k.ownerState),classes:b,ref:n,children:u}))}))}),bn=wn;function yn(e){return Fe("MuiModal",e)}ze("MuiModal",["root","hidden","backdrop"]);const kn=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],vn=e=>{const{open:t,exited:n,classes:r}=e;return Le({root:["root",!t&&n&&"hidden"],backdrop:["backdrop"]},yn,r)},Mn=pe("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})(({theme:e,ownerState:t})=>A({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),Pn=pe(bn,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),Sn=l.forwardRef(function(t,n){var r,o,i,s,u,d;const m=Be({name:"MuiModal",props:t}),{BackdropComponent:f=Pn,BackdropProps:p,className:v,closeAfterTransition:M=!1,children:x,container:O,component:y,components:w={},componentsProps:g={},disableAutoFocus:h=!1,disableEnforceFocus:b=!1,disableEscapeKeyDown:k=!1,disablePortal:D=!1,disableRestoreFocus:W=!1,disableScrollLock:S=!1,hideBackdrop:C=!1,keepMounted:I=!1,onBackdropClick:Y,open:R,slotProps:z,slots:j}=m,F=ae(m,kn),T=A({},m,{closeAfterTransition:M,disableAutoFocus:h,disableEnforceFocus:b,disableEscapeKeyDown:k,disablePortal:D,disableRestoreFocus:W,disableScrollLock:S,hideBackdrop:C,keepMounted:I}),{getRootProps:$,getBackdropProps:B,getTransitionProps:be,portalRef:je,isTopModal:ye,exited:J,hasTransition:ke}=ln(A({},T,{rootRef:n})),G=A({},T,{exited:J}),V=vn(G),X={};if(x.props.tabIndex===void 0&&(X.tabIndex="-1"),ke){const{onEnter:E,onExited:N}=be();X.onEnter=E,X.onExited=N}const _=(r=(o=j==null?void 0:j.root)!=null?o:w.Root)!=null?r:Mn,ie=(i=(s=j==null?void 0:j.backdrop)!=null?s:w.Backdrop)!=null?i:f,se=(u=z==null?void 0:z.root)!=null?u:g.root,ee=(d=z==null?void 0:z.backdrop)!=null?d:g.backdrop,Oe=Me({elementType:_,externalSlotProps:se,externalForwardedProps:F,getSlotProps:$,additionalProps:{ref:n,as:y},ownerState:G,className:ue(v,se==null?void 0:se.className,V==null?void 0:V.root,!G.open&&G.exited&&(V==null?void 0:V.hidden))}),Ce=Me({elementType:ie,externalSlotProps:ee,additionalProps:p,getSlotProps:E=>B(A({},E,{onClick:N=>{Y&&Y(N),E!=null&&E.onClick&&E.onClick(N)}})),className:ue(ee==null?void 0:ee.className,p==null?void 0:p.className,V==null?void 0:V.backdrop),ownerState:G});return!I&&!R&&(!ke||J)?null:a.jsx(Rt,{ref:je,container:O,disablePortal:D,children:a.jsxs(_,A({},Oe,{children:[!C&&f?a.jsx(ie,A({},Ce)):null,a.jsx(_t,{disableEnforceFocus:b,disableAutoFocus:h,disableRestoreFocus:W,isEnabled:ye,open:R,children:l.cloneElement(x,X)})]}))})}),Tn=Sn;function En(e){return Fe("MuiPopover",e)}ze("MuiPopover",["root","paper"]);const Dn=["onEntering"],jn=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps","disableScrollLock"],On=["slotProps"];function tt(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.height/2:t==="bottom"&&(n=e.height),n}function nt(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.width/2:t==="right"&&(n=e.width),n}function rt(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function We(e){return typeof e=="function"?e():e}const Cn=e=>{const{classes:t}=e;return Le({root:["root"],paper:["paper"]},En,t)},$n=pe(Tn,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),An=pe(Ht,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),Wn=l.forwardRef(function(t,n){var r,o,i;const s=Be({props:t,name:"MuiPopover"}),{action:u,anchorEl:d,anchorOrigin:m={vertical:"top",horizontal:"left"},anchorPosition:f,anchorReference:p="anchorEl",children:v,className:M,container:x,elevation:O=8,marginThreshold:y=16,open:w,PaperProps:g={},slots:h,slotProps:b,transformOrigin:k={vertical:"top",horizontal:"left"},TransitionComponent:D=It,transitionDuration:W="auto",TransitionProps:{onEntering:S}={},disableScrollLock:C=!1}=s,I=ae(s.TransitionProps,Dn),Y=ae(s,jn),R=(r=b==null?void 0:b.paper)!=null?r:g,z=l.useRef(),j=Ee(z,R.ref),F=A({},s,{anchorOrigin:m,anchorReference:p,elevation:O,marginThreshold:y,externalPaperSlotProps:R,transformOrigin:k,TransitionComponent:D,transitionDuration:W,TransitionProps:I}),T=Cn(F),$=l.useCallback(()=>{if(p==="anchorPosition")return f;const E=We(d),L=(E&&E.nodeType===1?E:q(z.current).body).getBoundingClientRect();return{top:L.top+tt(L,m.vertical),left:L.left+nt(L,m.horizontal)}},[d,m.horizontal,m.vertical,f,p]),B=l.useCallback(E=>({vertical:tt(E,k.vertical),horizontal:nt(E,k.horizontal)}),[k.horizontal,k.vertical]),be=l.useCallback(E=>{const N={width:E.offsetWidth,height:E.offsetHeight},L=B(N);if(p==="none")return{top:null,left:null,transformOrigin:rt(L)};const Ye=$();let te=Ye.top-L.vertical,ne=Ye.left-L.horizontal;const Je=te+N.height,Ue=ne+N.width,qe=he(We(d)),Ze=qe.innerHeight-y,Ve=qe.innerWidth-y;if(y!==null&&te<y){const U=te-y;te-=U,L.vertical+=U}else if(y!==null&&Je>Ze){const U=Je-Ze;te-=U,L.vertical+=U}if(y!==null&&ne<y){const U=ne-y;ne-=U,L.horizontal+=U}else if(Ue>Ve){const U=Ue-Ve;ne-=U,L.horizontal+=U}return{top:`${Math.round(te)}px`,left:`${Math.round(ne)}px`,transformOrigin:rt(L)}},[d,p,$,B,y]),[je,ye]=l.useState(w),J=l.useCallback(()=>{const E=z.current;if(!E)return;const N=be(E);N.top!==null&&(E.style.top=N.top),N.left!==null&&(E.style.left=N.left),E.style.transformOrigin=N.transformOrigin,ye(!0)},[be]);l.useEffect(()=>(C&&window.addEventListener("scroll",J),()=>window.removeEventListener("scroll",J)),[d,C,J]);const ke=(E,N)=>{S&&S(E,N),J()},G=()=>{ye(!1)};l.useEffect(()=>{w&&J()}),l.useImperativeHandle(u,()=>w?{updatePosition:()=>{J()}}:null,[w,J]),l.useEffect(()=>{if(!w)return;const E=Ut(()=>{J()}),N=he(d);return N.addEventListener("resize",E),()=>{E.clear(),N.removeEventListener("resize",E)}},[d,w,J]);let V=W;W==="auto"&&!D.muiSupportAuto&&(V=void 0);const X=x||(d?q(We(d)).body:void 0),_=(o=h==null?void 0:h.root)!=null?o:$n,ie=(i=h==null?void 0:h.paper)!=null?i:An,se=Me({elementType:ie,externalSlotProps:A({},R,{style:je?R.style:A({},R.style,{opacity:0})}),additionalProps:{elevation:O,ref:j},ownerState:F,className:ue(T.paper,R==null?void 0:R.className)}),ee=Me({elementType:_,externalSlotProps:(b==null?void 0:b.root)||{},externalForwardedProps:Y,additionalProps:{ref:n,slotProps:{backdrop:{invisible:!0}},container:X,open:w},ownerState:F,className:ue(T.root,M)}),{slotProps:Oe}=ee,Ce=ae(ee,On);return a.jsx(_,A({},Ce,!Nt(_)&&{slotProps:Oe,disableScrollLock:C},{children:a.jsx(D,A({appear:!0,in:w,onEntering:ke,onExited:G,timeout:V},I,{children:a.jsx(ie,A({},se,{children:v}))}))}))}),Rn=Wn;function H(e){const t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new e.constructor(+e):typeof e=="number"||t==="[object Number]"||typeof e=="string"||t==="[object String]"?new Date(e):new Date(NaN)}function Z(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}function Re(e,t){const n=H(e);if(isNaN(t))return Z(e,NaN);if(!t)return n;const r=n.getDate(),o=Z(e,n.getTime());o.setMonth(n.getMonth()+t+1,0);const i=o.getDate();return r>=i?o:(n.setFullYear(o.getFullYear(),o.getMonth(),r),n)}const yt=6048e5,Hn=864e5;let Nn={};function De(){return Nn}function me(e,t){var u,d,m,f;const n=De(),r=(t==null?void 0:t.weekStartsOn)??((d=(u=t==null?void 0:t.locale)==null?void 0:u.options)==null?void 0:d.weekStartsOn)??n.weekStartsOn??((f=(m=n.locale)==null?void 0:m.options)==null?void 0:f.weekStartsOn)??0,o=H(e),i=o.getDay(),s=(i<r?7:0)+i-r;return o.setDate(o.getDate()-s),o.setHours(0,0,0,0),o}function Se(e){return me(e,{weekStartsOn:1})}function kt(e){const t=H(e),n=t.getFullYear(),r=Z(e,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const o=Se(r),i=Z(e,0);i.setFullYear(n,0,4),i.setHours(0,0,0,0);const s=Se(i);return t.getTime()>=o.getTime()?n+1:t.getTime()>=s.getTime()?n:n-1}function Te(e){const t=H(e);return t.setHours(0,0,0,0),t}function ot(e){const t=H(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function In(e,t){const n=Te(e),r=Te(t),o=+n-ot(n),i=+r-ot(r);return Math.round((o-i)/Hn)}function Fn(e){const t=kt(e),n=Z(e,0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),Se(n)}function zn(e){return Z(e,Date.now())}function Bn(e,t){const n=Te(e),r=Te(t);return+n==+r}function Ln(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function Yn(e){if(!Ln(e)&&typeof e!="number")return!1;const t=H(e);return!isNaN(Number(t))}function at(e){const t=H(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}function Jn(e,t){const n=H(e.start),r=H(e.end);let o=+n>+r;const i=o?+n:+r,s=o?r:n;s.setHours(0,0,0,0);let u=(t==null?void 0:t.step)??1;if(!u)return[];u<0&&(u=-u,o=!o);const d=[];for(;+s<=i;)d.push(H(s)),s.setDate(s.getDate()+u),s.setHours(0,0,0,0);return o?d.reverse():d}function it(e){const t=H(e);return t.setDate(1),t.setHours(0,0,0,0),t}function Un(e){const t=H(e),n=Z(e,0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}const qn={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Zn=(e,t,n)=>{let r;const o=qn[e];return typeof o=="string"?r=o:t===1?r=o.one:r=o.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function He(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const Vn={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Qn={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Gn={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Kn={date:He({formats:Vn,defaultWidth:"full"}),time:He({formats:Qn,defaultWidth:"full"}),dateTime:He({formats:Gn,defaultWidth:"full"})},Xn={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},_n=(e,t,n,r)=>Xn[e];function ce(e){return(t,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let o;if(r==="formatting"&&e.formattingValues){const s=e.defaultFormattingWidth||e.defaultWidth,u=n!=null&&n.width?String(n.width):s;o=e.formattingValues[u]||e.formattingValues[s]}else{const s=e.defaultWidth,u=n!=null&&n.width?String(n.width):e.defaultWidth;o=e.values[u]||e.values[s]}const i=e.argumentCallback?e.argumentCallback(t):t;return o[i]}}const er={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},tr={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},nr={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},rr={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},or={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},ar={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},ir=(e,t)=>{const n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},sr={ordinalNumber:ir,era:ce({values:er,defaultWidth:"wide"}),quarter:ce({values:tr,defaultWidth:"wide",argumentCallback:e=>e-1}),month:ce({values:nr,defaultWidth:"wide"}),day:ce({values:rr,defaultWidth:"wide"}),dayPeriod:ce({values:or,defaultWidth:"wide",formattingValues:ar,defaultFormattingWidth:"wide"})};function le(e){return(t,n={})=>{const r=n.width,o=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=t.match(o);if(!i)return null;const s=i[0],u=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],d=Array.isArray(u)?lr(u,p=>p.test(s)):cr(u,p=>p.test(s));let m;m=e.valueCallback?e.valueCallback(d):d,m=n.valueCallback?n.valueCallback(m):m;const f=t.slice(s.length);return{value:m,rest:f}}}function cr(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function lr(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function dr(e){return(t,n={})=>{const r=t.match(e.matchPattern);if(!r)return null;const o=r[0],i=t.match(e.parsePattern);if(!i)return null;let s=e.valueCallback?e.valueCallback(i[0]):i[0];s=n.valueCallback?n.valueCallback(s):s;const u=t.slice(o.length);return{value:s,rest:u}}}const ur=/^(\d+)(th|st|nd|rd)?/i,hr=/\d+/i,mr={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},fr={any:[/^b/i,/^(a|c)/i]},pr={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},gr={any:[/1/i,/2/i,/3/i,/4/i]},xr={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},wr={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},br={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},yr={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},kr={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},vr={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Mr={ordinalNumber:dr({matchPattern:ur,parsePattern:hr,valueCallback:e=>parseInt(e,10)}),era:le({matchPatterns:mr,defaultMatchWidth:"wide",parsePatterns:fr,defaultParseWidth:"any"}),quarter:le({matchPatterns:pr,defaultMatchWidth:"wide",parsePatterns:gr,defaultParseWidth:"any",valueCallback:e=>e+1}),month:le({matchPatterns:xr,defaultMatchWidth:"wide",parsePatterns:wr,defaultParseWidth:"any"}),day:le({matchPatterns:br,defaultMatchWidth:"wide",parsePatterns:yr,defaultParseWidth:"any"}),dayPeriod:le({matchPatterns:kr,defaultMatchWidth:"any",parsePatterns:vr,defaultParseWidth:"any"})},Pr={code:"en-US",formatDistance:Zn,formatLong:Kn,formatRelative:_n,localize:sr,match:Mr,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Sr(e){const t=H(e);return In(t,Un(t))+1}function Tr(e){const t=H(e),n=+Se(t)-+Fn(t);return Math.round(n/yt)+1}function vt(e,t){var f,p,v,M;const n=H(e),r=n.getFullYear(),o=De(),i=(t==null?void 0:t.firstWeekContainsDate)??((p=(f=t==null?void 0:t.locale)==null?void 0:f.options)==null?void 0:p.firstWeekContainsDate)??o.firstWeekContainsDate??((M=(v=o.locale)==null?void 0:v.options)==null?void 0:M.firstWeekContainsDate)??1,s=Z(e,0);s.setFullYear(r+1,0,i),s.setHours(0,0,0,0);const u=me(s,t),d=Z(e,0);d.setFullYear(r,0,i),d.setHours(0,0,0,0);const m=me(d,t);return n.getTime()>=u.getTime()?r+1:n.getTime()>=m.getTime()?r:r-1}function Er(e,t){var u,d,m,f;const n=De(),r=(t==null?void 0:t.firstWeekContainsDate)??((d=(u=t==null?void 0:t.locale)==null?void 0:u.options)==null?void 0:d.firstWeekContainsDate)??n.firstWeekContainsDate??((f=(m=n.locale)==null?void 0:m.options)==null?void 0:f.firstWeekContainsDate)??1,o=vt(e,t),i=Z(e,0);return i.setFullYear(o,0,r),i.setHours(0,0,0,0),me(i,t)}function Dr(e,t){const n=H(e),r=+me(n,t)-+Er(n,t);return Math.round(r/yt)+1}function P(e,t){const n=e<0?"-":"",r=Math.abs(e).toString().padStart(t,"0");return n+r}const Q={y(e,t){const n=e.getFullYear(),r=n>0?n:1-n;return P(t==="yy"?r%100:r,t.length)},M(e,t){const n=e.getMonth();return t==="M"?String(n+1):P(n+1,2)},d(e,t){return P(e.getDate(),t.length)},a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(e,t){return P(e.getHours()%12||12,t.length)},H(e,t){return P(e.getHours(),t.length)},m(e,t){return P(e.getMinutes(),t.length)},s(e,t){return P(e.getSeconds(),t.length)},S(e,t){const n=t.length,r=e.getMilliseconds(),o=Math.trunc(r*Math.pow(10,n-3));return P(o,t.length)}},re={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},st={G:function(e,t,n){const r=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if(t==="yo"){const r=e.getFullYear(),o=r>0?r:1-r;return n.ordinalNumber(o,{unit:"year"})}return Q.y(e,t)},Y:function(e,t,n,r){const o=vt(e,r),i=o>0?o:1-o;if(t==="YY"){const s=i%100;return P(s,2)}return t==="Yo"?n.ordinalNumber(i,{unit:"year"}):P(i,t.length)},R:function(e,t){const n=kt(e);return P(n,t.length)},u:function(e,t){const n=e.getFullYear();return P(n,t.length)},Q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return P(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return P(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){const r=e.getMonth();switch(t){case"M":case"MM":return Q.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){const r=e.getMonth();switch(t){case"L":return String(r+1);case"LL":return P(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){const o=Dr(e,r);return t==="wo"?n.ordinalNumber(o,{unit:"week"}):P(o,t.length)},I:function(e,t,n){const r=Tr(e);return t==="Io"?n.ordinalNumber(r,{unit:"week"}):P(r,t.length)},d:function(e,t,n){return t==="do"?n.ordinalNumber(e.getDate(),{unit:"date"}):Q.d(e,t)},D:function(e,t,n){const r=Sr(e);return t==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):P(r,t.length)},E:function(e,t,n){const r=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){const o=e.getDay(),i=(o-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return P(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});case"eeee":default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){const o=e.getDay(),i=(o-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return P(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});case"cccc":default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(e,t,n){const r=e.getDay(),o=r===0?7:r;switch(t){case"i":return String(o);case"ii":return P(o,t.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){const o=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(e,t,n){const r=e.getHours();let o;switch(r===12?o=re.noon:r===0?o=re.midnight:o=r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(e,t,n){const r=e.getHours();let o;switch(r>=17?o=re.evening:r>=12?o=re.afternoon:r>=4?o=re.morning:o=re.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(e,t,n){if(t==="ho"){let r=e.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return Q.h(e,t)},H:function(e,t,n){return t==="Ho"?n.ordinalNumber(e.getHours(),{unit:"hour"}):Q.H(e,t)},K:function(e,t,n){const r=e.getHours()%12;return t==="Ko"?n.ordinalNumber(r,{unit:"hour"}):P(r,t.length)},k:function(e,t,n){let r=e.getHours();return r===0&&(r=24),t==="ko"?n.ordinalNumber(r,{unit:"hour"}):P(r,t.length)},m:function(e,t,n){return t==="mo"?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):Q.m(e,t)},s:function(e,t,n){return t==="so"?n.ordinalNumber(e.getSeconds(),{unit:"second"}):Q.s(e,t)},S:function(e,t){return Q.S(e,t)},X:function(e,t,n){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(t){case"X":return lt(r);case"XXXX":case"XX":return K(r);case"XXXXX":case"XXX":default:return K(r,":")}},x:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"x":return lt(r);case"xxxx":case"xx":return K(r);case"xxxxx":case"xxx":default:return K(r,":")}},O:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+ct(r,":");case"OOOO":default:return"GMT"+K(r,":")}},z:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+ct(r,":");case"zzzz":default:return"GMT"+K(r,":")}},t:function(e,t,n){const r=Math.trunc(e.getTime()/1e3);return P(r,t.length)},T:function(e,t,n){const r=e.getTime();return P(r,t.length)}};function ct(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),o=Math.trunc(r/60),i=r%60;return i===0?n+String(o):n+String(o)+t+P(i,2)}function lt(e,t){return e%60===0?(e>0?"-":"+")+P(Math.abs(e)/60,2):K(e,t)}function K(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),o=P(Math.trunc(r/60),2),i=P(r%60,2);return n+o+t+i}const dt=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},Mt=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},jr=(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],r=n[1],o=n[2];if(!o)return dt(e,t);let i;switch(r){case"P":i=t.dateTime({width:"short"});break;case"PP":i=t.dateTime({width:"medium"});break;case"PPP":i=t.dateTime({width:"long"});break;case"PPPP":default:i=t.dateTime({width:"full"});break}return i.replace("{{date}}",dt(r,t)).replace("{{time}}",Mt(o,t))},Or={p:Mt,P:jr},Cr=/^D+$/,$r=/^Y+$/,Ar=["D","DD","YY","YYYY"];function Wr(e){return Cr.test(e)}function Rr(e){return $r.test(e)}function Hr(e,t,n){const r=Nr(e,t,n);if(console.warn(r),Ar.includes(e))throw new RangeError(r)}function Nr(e,t,n){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Ir=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Fr=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,zr=/^'([^]*?)'?$/,Br=/''/g,Lr=/[a-zA-Z]/;function Pt(e,t,n){var f,p,v,M,x,O,y,w;const r=De(),o=(n==null?void 0:n.locale)??r.locale??Pr,i=(n==null?void 0:n.firstWeekContainsDate)??((p=(f=n==null?void 0:n.locale)==null?void 0:f.options)==null?void 0:p.firstWeekContainsDate)??r.firstWeekContainsDate??((M=(v=r.locale)==null?void 0:v.options)==null?void 0:M.firstWeekContainsDate)??1,s=(n==null?void 0:n.weekStartsOn)??((O=(x=n==null?void 0:n.locale)==null?void 0:x.options)==null?void 0:O.weekStartsOn)??r.weekStartsOn??((w=(y=r.locale)==null?void 0:y.options)==null?void 0:w.weekStartsOn)??0,u=H(e);if(!Yn(u))throw new RangeError("Invalid time value");let d=t.match(Fr).map(g=>{const h=g[0];if(h==="p"||h==="P"){const b=Or[h];return b(g,o.formatLong)}return g}).join("").match(Ir).map(g=>{if(g==="''")return{isToken:!1,value:"'"};const h=g[0];if(h==="'")return{isToken:!1,value:Yr(g)};if(st[h])return{isToken:!0,value:g};if(h.match(Lr))throw new RangeError("Format string contains an unescaped latin alphabet character `"+h+"`");return{isToken:!1,value:g}});o.localize.preprocessor&&(d=o.localize.preprocessor(u,d));const m={firstWeekContainsDate:i,weekStartsOn:s,locale:o};return d.map(g=>{if(!g.isToken)return g.value;const h=g.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&Rr(h)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&Wr(h))&&Hr(h,t,String(e));const b=st[h[0]];return b(u,h,o.localize,m)}).join("")}function Yr(e){const t=e.match(zr);return t?t[1].replace(Br,"'"):e}function Jr(e,t){const n=H(e),r=H(t);return n.getTime()>r.getTime()}function Ur(e,t){const n=H(e),r=H(t);return+n<+r}function qr(e){return Bn(e,zn(e))}const Zr=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",...e},l.createElement("title",null,`
		solidleft
	`),l.createElement("path",{d:"M10.293 16.707c-0.187-0.188-0.292-0.442-0.292-0.707s0.105-0.519 0.292-0.707l10-10c0.092-0.098 0.202-0.177 0.325-0.232s0.255-0.084 0.389-0.086c0.134-0.002 0.268 0.022 0.392 0.073s0.238 0.125 0.333 0.22c0.095 0.095 0.17 0.208 0.22 0.333s0.075 0.258 0.073 0.392c-0.002 0.134-0.032 0.267-0.086 0.389s-0.133 0.233-0.232 0.325l-9.293 9.293 9.293 9.293c0.098 0.091 0.177 0.202 0.232 0.325s0.084 0.255 0.086 0.389c0.002 0.134-0.022 0.268-0.073 0.392s-0.125 0.238-0.22 0.333c-0.095 0.095-0.208 0.17-0.333 0.22s-0.258 0.075-0.392 0.073c-0.134-0.002-0.267-0.032-0.389-0.086s-0.233-0.134-0.325-0.232l-10-10z"})),Vr=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",...e},l.createElement("title",null,`
		solid-right
	`),l.createElement("path",{d:"M21.707 16.707c0.187-0.188 0.292-0.442 0.292-0.707s-0.105-0.519-0.292-0.707l-10-10c-0.092-0.098-0.202-0.177-0.325-0.232s-0.255-0.084-0.389-0.086c-0.134-0.002-0.268 0.022-0.392 0.073s-0.238 0.125-0.333 0.22c-0.095 0.095-0.17 0.208-0.22 0.333s-0.075 0.258-0.073 0.392c0.002 0.134 0.032 0.267 0.086 0.389s0.133 0.233 0.232 0.325l9.293 9.293-9.293 9.293c-0.098 0.091-0.177 0.202-0.232 0.325s-0.084 0.255-0.086 0.389c-0.002 0.134 0.022 0.268 0.073 0.392s0.125 0.238 0.22 0.333c0.095 0.095 0.208 0.17 0.333 0.22s0.258 0.075 0.392 0.073c0.134-0.002 0.267-0.032 0.389-0.086s0.233-0.134 0.325-0.232l10-10z"})),Qr=c.div`
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
    
   
    margin: 0;
  }

  @media (min-width: ${({theme:e})=>e.screens.tab}){

    width: 192px;
  }

`,ut=c.button`
 background: transparent;
    border: none;
    cursor: ${e=>e.disabled?"default":"pointer"};
    visibility: ${e=>e.disabled?"hidden":"visible"};
    pointer-events: ${e=>e.disabled?"none":"auto"};
    margin: 0;

    
    &:hover {
  
    & > svg {
      fill: ${e=>e.theme.colors.secondary.color4}; 
    }
  }
`,Gr=c(Zr)`

fill: ${e=>e.theme.colors.primary.accent};
  width: 14px;
  height: auto;

`,Kr=c(Vr)`

fill: ${e=>e.theme.colors.primary.accent};
  width: 14px;
  height: auto;
 `,Xr=({selectedDate:e,setSelectedDate:t,setCurrentMonth:n,setSelectedDay:r})=>{const o=new Date().getMonth(),i=new Date().getFullYear(),s=Ur(e,Re(new Date,-12)),u=Jr(e,new Date(i,o,1)),d=Pt(e,"MMMM"),m=e.getFullYear(),f=()=>{t(Re(e,-1)),r(null),n(v=>v-1)},p=()=>{t(Re(e,1)),r(null),n(v=>v+1)};return a.jsxs(Qr,{children:[a.jsx(ut,{onClick:f,disabled:s,children:a.jsx(Gr,{})}),a.jsx("span",{children:`${d}, ${m}`}),a.jsx(ut,{onClick:p,disabled:u,children:a.jsx(Kr,{})})]})},_r=e=>e.water.waterDayList,eo=e=>e.water.waterMonthList,to=e=>e.water.waterRate,fe=()=>{const e=$e(_r),t=$e(eo),n=$e(to);return{waterDayList:e,waterMonthList:t,waterRate:n}},no=c.div`
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
`,Ne=c.li`

span{
  color:${e=>e.theme.colors.primary.accent};

  font-size: 18px;

  font-weight: 500;
  line-height: 1.33;
}

`,ao=({selectedDate:e,selectedDayData:t})=>{const n=Pt(e,"MMMM"),r=e.getDate(),o=ge().user.waterRate,i=o?(o/1e3).toFixed(1):"0",s=t?t.totalWaterDrunk:0,u=o?Math.round(s/o*100):0,d=t?t.totalPortions:"0";return a.jsxs(no,{children:[a.jsxs(ro,{children:[" ",r,", ",n]}),a.jsxs(oo,{children:[a.jsxs(Ne,{children:["Daily Norma: ",a.jsxs("span",{children:[i," L"]})]}),a.jsxs(Ne,{children:["Fulfillment of the daily norm: ",a.jsxs("span",{children:[u,"%"]})]}),a.jsxs(Ne,{children:["How many servings of water: ",a.jsx("span",{children:d})]})]})]})},io=c.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,so=c.div`
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
  
  background-color: ${e=>e.$istoday==="true"?"hsl(39deg 100% 68% / 23%);":e.theme.colors.primary.bg};
  border: 2px solid
    ${({theme:e,$percentage:t})=>t<100?e.colors.secondary.color4:e.colors.primary.bg};


`,ho=c.p`
  z-index: 1;
  margin: 0;
`,mo=c.p`
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
`,fo=()=>{const[e,t]=l.useState(new Date),[n,r]=l.useState(e.getMonth()),[o,i]=l.useState(null),[s,u]=l.useState(null),d=xe(),m=fe().waterMonthList,f=fe().waterDayList,p=ge().user.waterRate,v=()=>{u(null)},M=!!s,x=M?"simple-popover":void 0;l.useEffect(()=>{const w=it(e),g=at(e);o===null&&d(Ft({startDate:w,endDate:g}))},[n,d,e,o,f]);const O=(w,g)=>{t(g),u(w.currentTarget),i(g.getDate())},y=m&&m.find(w=>{const[g]=w.date.split(",");return parseInt(g)===e.getDate()});return a.jsxs(io,{children:[a.jsxs(so,{children:[a.jsx("h3",{children:"Month"}),a.jsx(Xr,{selectedDate:e,setSelectedDate:t,setCurrentMonth:r,setSelectedDay:i})]}),a.jsx(co,{children:Jn({start:it(e),end:at(e)}).map((w,g)=>{const h=w.getDate(),b=m.find(S=>{const[C]=S.date.split(",");return parseInt(C)===h}),k=b?b.totalWaterDrunk:0,D=p?Math.round(k/p*100):0,W=qr(w);return a.jsxs(lo,{onClick:S=>O(S,w),children:[a.jsx(uo,{$percentage:D,$istoday:W?"true":"false",children:a.jsx(ho,{children:h})}),a.jsxs(mo,{children:[D||0,"%"]})]},g)})}),a.jsx(Rn,{id:x,open:M,anchorEl:s,onClose:v,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"bottom",horizontal:"right"},children:a.jsx(ao,{selectedDate:e,selectedDayData:y})})]})},ve=(e,t=!1)=>{const n=new Date(e);let r=n.getHours();const o=n.getMinutes();let i="";if(t){const s=r>=12?"PM":"AM";r=r%12,r=r||12,i=`${r.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")} ${s}`}else i=`${r.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")}`;return i},po=c.div`

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
`,go=c.div`
display: flex;
flex-direction: column-reverse;
gap: 24px;

@media (min-width: ${({theme:e})=>e.screens.tab}){
    flex-direction: row;
    justify-content: end;
}
`,xo=c.button`

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

`,wo=c.button`

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
`,bo=({id:e})=>{const{closeModal:t}=l.useContext(we),n=xe(),r=async()=>{await n(zt(e)),t(),n(Pe())};return a.jsxs(po,{children:[a.jsx("h3",{children:"Delete entry"}),a.jsx("p",{children:"Are you sure you want to delete the entry?"}),a.jsxs(go,{children:[a.jsx(xo,{type:"button",onClick:()=>t(),children:"Cancel"}),a.jsx(wo,{type:"submit",onClick:r,children:"Delete"})]})]})};function yo(e){return bt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.75 4.5a.75.75 0 0 1 .75.75V11h5.75a.75.75 0 0 1 0 1.5H12.5v5.75a.75.75 0 0 1-1.5 0V12.5H5.25a.75.75 0 0 1 0-1.5H11V5.25a.75.75 0 0 1 .75-.75Z"},child:[]}]})(e)}const ko=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",...e},l.createElement("title",null,"glass_26"),l.createElement("path",{fill:"#407bff",d:"M5.565 2.783l1.901 26.363v0.072h16.367l1.901-26.353v-0.082h-20.169zM23.16 28.479h-15.017l-1.426-19.747h0.784l1.289 17.403c0.008 0.092 0.049 0.177 0.115 0.24s0.153 0.098 0.244 0.099h0.030c0.047-0.003 0.093-0.016 0.136-0.037s0.080-0.051 0.111-0.087c0.031-0.036 0.055-0.078 0.070-0.124s0.021-0.094 0.017-0.141l-1.289-17.351h16.362l-1.426 19.747zM24.637 7.994h-16.468l-0.283-3.847c-0.009-0.094-0.052-0.181-0.122-0.244s-0.16-0.097-0.252-0.095c-0.095 0.009-0.183 0.055-0.245 0.129s-0.094 0.169-0.088 0.266l0.283 3.795h-0.794l-0.324-4.483h18.617l-0.324 4.478z"}),l.createElement("path",{fill:"#407bff",d:"M11.359 12.384c0.236 0 0.467-0.071 0.663-0.204s0.349-0.322 0.439-0.543c0.090-0.221 0.114-0.465 0.068-0.699s-0.16-0.45-0.327-0.62c-0.167-0.169-0.38-0.285-0.611-0.331s-0.471-0.023-0.689 0.069c-0.218 0.092-0.404 0.247-0.536 0.446s-0.201 0.433-0.201 0.672c0 0.321 0.126 0.629 0.35 0.856s0.527 0.355 0.844 0.355zM11.359 10.697c0.093 0 0.184 0.028 0.261 0.080s0.138 0.127 0.173 0.214c0.036 0.087 0.045 0.183 0.027 0.276s-0.063 0.178-0.129 0.244c-0.066 0.067-0.15 0.112-0.241 0.131s-0.186 0.009-0.272-0.027c-0.086-0.036-0.159-0.097-0.211-0.176s-0.079-0.171-0.079-0.265c0-0.127 0.050-0.248 0.138-0.337s0.208-0.14 0.332-0.14z"}),l.createElement("path",{fill:"#407bff",d:"M11.354 16.318c0.003 0.239 0.076 0.472 0.209 0.669s0.321 0.35 0.539 0.439 0.458 0.111 0.689 0.062c0.231-0.049 0.442-0.166 0.607-0.336s0.277-0.387 0.321-0.621 0.019-0.477-0.072-0.698c-0.091-0.22-0.245-0.408-0.442-0.54s-0.427-0.201-0.663-0.2c-0.158 0.001-0.313 0.033-0.459 0.095s-0.277 0.153-0.387 0.267-0.198 0.249-0.256 0.397c-0.059 0.148-0.088 0.307-0.086 0.467zM13.013 16.318c0 0.094-0.028 0.187-0.079 0.265s-0.125 0.14-0.211 0.176c-0.086 0.036-0.18 0.046-0.272 0.027s-0.175-0.064-0.241-0.131-0.111-0.152-0.129-0.244c-0.018-0.093-0.009-0.188 0.027-0.276s0.096-0.162 0.173-0.214 0.168-0.080 0.261-0.080c0.125 0 0.244 0.050 0.333 0.14s0.138 0.211 0.138 0.337z"}),l.createElement("path",{fill:"#407bff",d:"M19.834 16.349c0.236 0 0.467-0.071 0.663-0.204s0.349-0.322 0.439-0.543c0.090-0.221 0.114-0.465 0.068-0.699s-0.16-0.45-0.327-0.62c-0.167-0.169-0.379-0.285-0.611-0.331s-0.471-0.023-0.689 0.069c-0.218 0.092-0.404 0.247-0.535 0.446s-0.201 0.433-0.201 0.672c0 0.321 0.126 0.629 0.349 0.856s0.527 0.355 0.844 0.355zM19.834 14.666c0.093 0 0.184 0.028 0.262 0.081s0.138 0.127 0.173 0.215c0.035 0.088 0.044 0.184 0.026 0.276s-0.064 0.178-0.13 0.244c-0.066 0.066-0.151 0.111-0.242 0.129s-0.186 0.008-0.272-0.029-0.159-0.099-0.21-0.178c-0.051-0.079-0.078-0.172-0.077-0.266 0.001-0.126 0.051-0.246 0.14-0.334s0.207-0.138 0.331-0.138z"}),l.createElement("path",{fill:"#407bff",d:"M15.677 14.066c0.236 0 0.467-0.071 0.663-0.204s0.349-0.322 0.439-0.543c0.090-0.221 0.114-0.464 0.068-0.699s-0.16-0.45-0.327-0.62c-0.167-0.169-0.38-0.285-0.611-0.331s-0.471-0.023-0.689 0.069c-0.218 0.092-0.404 0.247-0.536 0.446s-0.201 0.433-0.201 0.672c0 0.321 0.126 0.629 0.35 0.856s0.527 0.354 0.844 0.354zM15.677 12.379c0.093 0 0.184 0.028 0.261 0.080s0.138 0.127 0.173 0.214c0.036 0.087 0.045 0.183 0.027 0.276s-0.063 0.177-0.129 0.244c-0.066 0.067-0.15 0.112-0.241 0.131s-0.186 0.009-0.272-0.027-0.159-0.097-0.211-0.176c-0.052-0.079-0.079-0.171-0.079-0.265-0.003-0.065 0.006-0.129 0.028-0.19s0.056-0.116 0.1-0.164c0.044-0.047 0.097-0.084 0.156-0.11s0.122-0.039 0.186-0.039v0.026z"}),l.createElement("path",{fill:"#407bff",d:"M13.402 20.929c0.005 0.197 0.067 0.387 0.178 0.548s0.267 0.285 0.447 0.357c0.181 0.072 0.378 0.088 0.568 0.047s0.363-0.139 0.498-0.279c0.135-0.141 0.227-0.319 0.263-0.512s0.015-0.393-0.060-0.574c-0.075-0.181-0.202-0.336-0.363-0.445s-0.351-0.167-0.545-0.167c-0.264 0.007-0.514 0.118-0.699 0.309s-0.287 0.449-0.287 0.716zM14.388 20.662c0.052 0 0.103 0.016 0.146 0.045s0.077 0.071 0.097 0.12 0.025 0.102 0.015 0.154c-0.010 0.052-0.035 0.099-0.072 0.137s-0.084 0.063-0.135 0.073c-0.051 0.010-0.104 0.005-0.152-0.015s-0.089-0.054-0.118-0.098c-0.029-0.044-0.044-0.096-0.044-0.148 0-0.071 0.028-0.139 0.077-0.189s0.116-0.078 0.186-0.078z"}),l.createElement("path",{fill:"#407bff",d:"M18.17 19.816c0.202 0.007 0.402-0.048 0.574-0.157s0.306-0.269 0.388-0.457c0.081-0.188 0.105-0.397 0.068-0.599s-0.133-0.388-0.275-0.534c-0.143-0.146-0.325-0.245-0.524-0.285s-0.405-0.018-0.591 0.063c-0.186 0.081-0.345 0.216-0.454 0.389s-0.166 0.375-0.161 0.58c0.006 0.262 0.111 0.511 0.292 0.697s0.426 0.295 0.684 0.304zM18.17 18.549c0.070 0 0.137 0.028 0.186 0.078s0.077 0.118 0.077 0.189c0 0.071-0.028 0.139-0.077 0.189s-0.116 0.078-0.186 0.078c-0.070 0-0.138-0.028-0.188-0.078s-0.079-0.118-0.080-0.189c0-0.035 0.007-0.071 0.020-0.103s0.033-0.062 0.058-0.087 0.055-0.044 0.087-0.057c0.032-0.013 0.067-0.019 0.102-0.019z"}),l.createElement("path",{fill:"#407bff",d:"M20.253 11.538c0.2 0 0.395-0.060 0.562-0.173s0.296-0.273 0.372-0.46c0.077-0.187 0.097-0.394 0.058-0.593s-0.135-0.382-0.277-0.525c-0.141-0.143-0.322-0.241-0.518-0.281s-0.399-0.019-0.584 0.058c-0.185 0.078-0.343 0.209-0.454 0.378s-0.17 0.367-0.17 0.57c0 0.272 0.107 0.533 0.296 0.725s0.447 0.3 0.715 0.3zM20.253 10.271c0.039-0.011 0.080-0.013 0.12-0.006s0.078 0.024 0.11 0.049c0.032 0.025 0.059 0.057 0.077 0.094s0.028 0.078 0.028 0.119-0.009 0.082-0.028 0.119c-0.018 0.037-0.044 0.069-0.077 0.094s-0.070 0.042-0.11 0.049c-0.040 0.008-0.081 0.006-0.12-0.006-0.039 0.011-0.080 0.013-0.12 0.006s-0.078-0.024-0.11-0.049c-0.032-0.025-0.059-0.057-0.077-0.094s-0.028-0.078-0.028-0.119 0.009-0.082 0.028-0.119c0.018-0.037 0.044-0.069 0.077-0.094s0.070-0.042 0.11-0.049c0.040-0.008 0.081-0.006 0.12 0.006z"}),l.createElement("path",{fill:"#407bff",d:"M10.369 27.191c-0.045 0.021-0.086 0.052-0.119 0.089s-0.059 0.082-0.074 0.13c-0.016 0.048-0.021 0.099-0.017 0.149s0.019 0.099 0.043 0.144c0.031 0.060 0.078 0.11 0.135 0.145s0.122 0.054 0.189 0.055c0.056 0.002 0.112-0.011 0.162-0.036 1.545-0.803 3.255-1.225 4.99-1.231 1.837 0.027 3.648 0.441 5.319 1.215 0.066 0.035 0.141 0.049 0.215 0.039s0.143-0.042 0.198-0.093c0.055-0.051 0.094-0.118 0.11-0.192s0.010-0.151-0.018-0.221c-0.036-0.091-0.105-0.164-0.192-0.205-1.769-0.821-3.687-1.258-5.633-1.282-1.845 0.002-3.664 0.444-5.309 1.292z"})),vo=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:1024,height:1024,viewBox:"0 0 1024 1024",...e},l.createElement("title",null,"edit"),l.createElement("path",{fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:4,strokeWidth:42.6667,d:"M719.445 191.445l71.979-72.021c14.479-14.479 34.482-23.435 56.576-23.435 44.189 0 80.011 35.822 80.011 80.011 0 22.094-8.955 42.097-23.435 56.576l-453.077 453.077c-21.936 21.924-49.153 38.567-79.579 47.856l-1.36 0.357-114.56 34.133 34.133-114.56c9.647-31.785 26.289-59.002 48.214-80.94l381.098-381.055zM719.445 191.445l112.555 112.555M768 597.333v202.667c0 53.019-42.981 96-96 96v0h-448c-53.019 0-96-42.981-96-96v0-448c0-53.019 42.981-96 96-96v0h202.667"})),Mo=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:1024,height:1024,viewBox:"0 0 1024 1024",...e},l.createElement("title",null,"delete"),l.createElement("path",{fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:4,strokeWidth:42.6667,d:"M628.907 384l-14.763 384M409.856 768l-14.763-384M820.395 247.040c14.592 2.219 29.099 4.565 43.605 7.083M820.395 247.040l-45.568 592.341c-3.952 49.747-45.294 88.619-95.716 88.619-0.010 0-0.020 0-0.030 0h-334.164c-0.008 0-0.018 0-0.028 0-50.422 0-91.764-38.872-95.694-88.283l-0.021-0.336-45.568-592.341M820.395 247.040c-38.791-6.358-89.724-12.366-141.193-16.476l-7.202-0.463M203.605 247.040c-25.242 3.599-40.074 6.065-54.844 8.706l11.239-1.666M203.605 247.040c38.789-6.358 89.722-12.366 141.19-16.476l7.205-0.463M672 230.101v-39.083c0-50.347-38.827-92.331-89.173-93.909-21.11-0.721-45.921-1.132-70.827-1.132-24.908 0-49.719 0.411-74.428 1.226l3.602-0.094c-50.347 1.579-89.173 43.605-89.173 93.909v39.083M672 230.101c-47.901-3.932-103.689-6.173-160-6.173-56.31 0-112.097 2.241-167.276 6.64l7.276-0.466"})),Po=e=>l.createElement("svg",{fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:4,strokeWidth:42.6667,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...e},l.createElement("path",{d:"M512 256v512M768 512h-512"})),So=c.div`
  
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
 
`,To=c.ul`
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

  `,St=c.div`
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

`,Tt=c.span`
color:${e=>e.theme.colors.primary.accent};


font-size: 18px;

font-weight: 400;
line-height: 1.33;
`,Et=c(ko)`
  fill:${e=>e.theme.colors.primary.accent};
  width: 26px;
  height: auto;


  @media (min-width: ${({theme:e})=>e.screens.tab}){
    width: 36px;
  }
  
`,Eo=c(vo)`
  stroke:  ${e=>e.theme.colors.secondary.color3};
  width: 16px;
  height: 16px;
`,Do=c(Mo)`
   stroke: ${e=>e.theme.colors.secondary.color2};
  width: 16px;
  height: 16px;
`,jo=c.div`
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

`,Oo=c.button`

  &:hover::after {
   
    background-color: ${e=>e.theme.colors.primary.accent};
   
  }`,Co=c.button`
 
 
  &:hover::after {
   
    background-color:  ${e=>e.theme.colors.secondary.color2};
    
  }`,Dt=c(Po)`
  fill: ${e=>e.theme.colors.primary.accent};
  stroke: ${e=>e.theme.colors.primary.accent};
  width: 16px;
  height: 16px;

  @media (min-width: ${({theme:e})=>e.screens.tab}){
    width: 24px;
  height: 24px;
  }
 
`,$o=c.button`
display: flex;
align-items: center;
gap: 8px;

font-size: 16px;
font-weight: 500;
line-height: 1.25;
color: ${e=>e.theme.colors.primary.accent};


&:hover {
    color: ${e=>e.theme.colors.secondary.color4};
    ${Dt} {
      fill: ${e=>e.theme.colors.secondary.color4};
      stroke: ${e=>e.theme.colors.secondary.color4};
  }
}


@media (min-width: ${({theme:e})=>e.screens.tab}){
  font-size: 18px;
line-height: 1.33;
  }

`,Ao=c.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  justify-content: center;
  width: 256px;
  color: ${e=>e.theme.colors.primary.text};
  @media (min-width: ${({theme:e})=>e.screens.tab}) {
    width: 656px;
  }
  @media (min-width: ${({theme:e})=>e.screens.desk}) {
    width: 544px;
  }
`,Wo=c.h3`
  font-size: 26px;
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 32px;
  width: 100%;
`,Ro=c.span`
  font-size: 18px;
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 20px;
  margin-bottom: 16px;
`,Ho=c.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  
`,No=c.label`
  display: flex;
  justify-content: flex-start;
  gap: 12px;
  flex-direction: column;
  width: 100%;
`,Io=c.div`
  display: flex;
  flex-direction: row;
  gap: 7px;
  width: 100%;
`,Fo=c.span`
  font-size: 16px;
  font-weight: ${e=>e.theme.fontWeights.regular};
  line-height: 20px;
`,zo=c.label`
position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`,Bo=c.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: ${e=>e.theme.colors.primary.text};
`,Lo=c.input`
display: flex;
justify-content: flex-start;
  padding: 12px 10px;
  border-radius: 6px;
  border: 1px solid ${e=>e.theme.colors.secondary.color5};
  outline: transparent;
  &:focus {
    border-color: ${e=>e.theme.colors.primary.accent};
  }
`,Yo=c.label`
position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
`,Jo=c.span`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  color: ${e=>e.theme.colors.primary.text};
`,Uo=c.input`
  padding: 12px 10px;
  border-radius: 6px;
  border: 1px solid ${e=>e.theme.colors.secondary.color5};
  outline: transparent;
  &:focus {
    border-color: ${e=>e.theme.colors.primary.accent};
  }
   
`,qo=c.div`
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
`,Zo=c.span`
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
`,Vo=c.button`
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
 
`,ht=c.button`
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
`,Qo=c(yo)`
  fill: ${e=>e.theme.colors.primary.accent};
  stroke: ${e=>e.theme.colors.primary.accent};
  width: 16px;
  height: 16px;

  & :focus{
    outline: transparent;}

  @media (min-width: ${({theme:e})=>e.screens.tab}) {
    width: 24px;
    height: 24px;
  }
`,Go=c(Bt)`
  fill: ${e=>e.theme.colors.primary.accent};
  stroke: ${e=>e.theme.colors.primary.accent};
  width: 16px;
  height: 16px;
  & :focus{
    outline: transparent;
  }

  @media (min-width: ${({theme:e})=>e.screens.tab}) {
    width: 24px;
    height: 24px;
  }
`,Ko=c.span`

  font-size: 18px;
  font-weight: ${e=>e.theme.fontWeights.bolt};
  line-height: 24px;
  text-align: center;
  color: ${e=>e.theme.colors.primary.accent};
`,mt=c.span`
  position: absolute;
bottom:-16px;
left: 10px;
  color: red;
  font-size: 12px;
  line-height: 1.5;
  display: block;
  display: ${e=>e.hideonerror==="true"?"none":"block"};
`,Xo=c(St)`
  display: flex;
  justify-content: flex-start;
  width: 254px;
  border-radius: 10px;
  background: ${e=>e.theme.colors.secondary.color1};
  padding: 8px 24px;

  
`,_o=c.p`

color:  ${e=>e.theme.colors.primary.accent};
font-weight:400px;
`;function ea(e){const t=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return`${t}-${n}-${r}`}const jt=({portion:e})=>{const t=xe(),[n,r]=l.useState(0),[o,i]=l.useState(e?e.waterVolume:0),[s,u]=l.useState(ve(e?e.dateAdded:new Date)),[d,m]=l.useState(""),[f,p]=l.useState(""),[v,M]=l.useState(!1),{closeModal:x}=l.useContext(we),{waterDayList:O}=fe(),y=O||[],w=S=>{const C=parseFloat(S.target.value),I=Math.round(C);i(I)},g=()=>{M(!0),m(""),p("")},h=()=>{M(!1),r(o)},b=S=>{switch(S.currentTarget.id){case"increment":{const C=Math.min(o+50,3e3);i(C),r(C);break}case"decrement":{const C=Math.max(0,o-50);i(C),r(C);break}}},k=async S=>{S.preventDefault();const Y=ea(new Date)+"T"+s,R=new Date(Y).toISOString();if(!o||o<1){p("Please enter the amount of water consumed.");return}if(o>3e3){p("Maximum allowed is 3000 ml.");return}if(e){const z={id:e._id,date:R,waterVolume:n};await t(Lt(z)),i(0),x(),t(Pe())}else{if(y?y.find(F=>F.dateAdded===R):R){m(" A portion already exists for this time.");return}await t(Yt({waterVolume:n,date:R})),i(0),x(),t(Pe())}},D=e?"Edit the entered amount of water":"Add water",W=e?"Correct entered data: ":"Choose a value:";return a.jsxs(Ao,{children:[a.jsx(Wo,{children:D}),e&&a.jsxs(Xo,{children:[a.jsx(Et,{}),a.jsx(Tt,{children:`${e.waterVolume} ml `}),a.jsx("span",{children:ve(e.dateAdded,!0)})]}),y.length===0&&a.jsx(_o,{children:"No notes yet"}),a.jsxs(Ho,{children:[a.jsx(Ro,{children:W}),a.jsxs(No,{children:[a.jsx(Fo,{children:"Amount of water:"}),a.jsxs(Io,{children:[a.jsx(ht,{onClick:b,id:"decrement",children:a.jsx(Go,{})}),a.jsxs(Zo,{children:[" ",o||0," ml"]}),a.jsx(ht,{onClick:b,id:"increment",children:a.jsx(Qo,{})})]})]})]}),a.jsxs(zo,{children:[a.jsx(Bo,{children:"Recording time:"}),a.jsx(Lo,{type:"time",value:s,onChange:S=>u(S.target.value)}),d&&a.jsxs(mt,{children:["⚠ ",d]})]}),a.jsxs(Yo,{children:[a.jsx(Jo,{children:"Enter the value of the water used:"}),a.jsx(Uo,{name:"waterUsed",type:"number",step:50,value:o,onChange:w,onFocus:g,onBlur:h,pattern:"[0-9]{1,4}",max:3e3,required:!0}),f&&a.jsxs(mt,{hideonerror:v?"true":"false",children:[" ","⚠ ",f]})]}),a.jsxs(qo,{children:[a.jsxs(Ko,{children:[" ",n||0," ml"]}),a.jsx(Vo,{onClick:k,children:"Save"})]})]})},ta=({handleAddWaterClick:e})=>{const{openModal:t}=l.useContext(we),n=fe().waterDayList,r=xe();l.useEffect(()=>{r(Pe())},[r]);const o=s=>{t(a.jsx(a.Fragment,{children:a.jsx(bo,{id:s})}))},i=s=>{t(a.jsx(a.Fragment,{children:a.jsx(jt,{portion:s})}))};return a.jsxs(So,{children:[a.jsx("h3",{children:"Today"}),n&&n.length>0&&a.jsx(To,{children:n.map(s=>a.jsxs("li",{children:[a.jsxs(St,{children:[a.jsx(Et,{}),a.jsx(Tt,{children:`${s.waterVolume} ml `}),a.jsx("span",{children:ve(s.dateAdded,!0)})]}),a.jsxs(jo,{children:[a.jsx(Oo,{onClick:()=>i(s),children:a.jsx(Eo,{})}),a.jsx(Co,{onClick:()=>o(s._id),children:a.jsx(Do,{})})]})]},s._id))}),a.jsxs($o,{onClick:e,children:[a.jsx(Dt,{})," Add water"]})]})},na=c.div`
  padding: 8px 20px 8px 20px;
  border: 1px solid;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 164px;
  margin-top: 30px;
  border-radius: 10px;
  border-color: ${e=>e.theme.colors.secondary.color1};
`,ra=c.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
  justify-content: left;
`,oa=c.p`
  font-size: 18px;
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 24px;
  color: ${e=>e.theme.colors.primary.text};
  white-space: nowrap;
`,aa=c.button`
  font-size: 24px;
  font-weight: 400;
  line-height: 20px;
  position: relative;
  color: transparent;
  -webkit-text-stroke: 0.5px ${e=>e.theme.colors.primary.accent};
`,ia=c.span`
  position: absolute;
  color: ${e=>e.theme.colors.primary.accent};
  animation: animate 4s ease-in-out infinite;
  @keyframes animate {
    0%,
    100% {
      clip-path: polygon(
        0% 45%,
        15% 44%,
        32% 50%,
        44% 60%,
        70% 61%,
        84% 59%,
        100% 52%,
        100% 100%,
        0% 100%
      );
    }

    50% {
      clip-path: polygon(
        0 60%,
        16% 65%,
        34% 66%,
        51% 62%,
        67% 50%,
        84% 45%,
        100% 46%,
        100% 100%,
        0% 100%
      );
    }
  }
`,sa=c.p`
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  color: ${e=>e.theme.colors.primary.accent};
`,ca=({handleDailyNormaModal:e})=>{const{user:t}=ge(),n=t.waterRate,r=(n/1e3).toFixed(1);return a.jsxs(na,{children:[a.jsx(oa,{children:"My daily norma"}),a.jsxs(ra,{children:[a.jsxs(sa,{children:[r||n," L"]}),a.jsxs(aa,{onClick:e,children:[a.jsx(ia,{children:"Edit"}),"Edit"]})]})]})};function la(e){return bt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Circle_Plus"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M15,12.5H12.5V15a.5.5,0,0,1-1,0V12.5H9a.5.5,0,0,1,0-1h2.5V9a.5.5,0,0,1,1,0v2.5H15A.5.5,0,0,1,15,12.5Z"},child:[]},{tag:"path",attr:{d:"M12,21.932A9.934,9.934,0,1,1,21.932,12,9.944,9.944,0,0,1,12,21.932ZM12,3.065A8.934,8.934,0,1,0,20.932,12,8.944,8.944,0,0,0,12,3.065Z"},child:[]}]}]}]})(e)}const da=c.input`
  &[type='range'] {
    appearance: none;
    height: 8px;
    width: 100%;
    border-radius: 10px;
    background-color: ${e=>e.theme.colors.secondary.color5};
    background-image: linear-gradient(
      ${e=>e.theme.colors.secondary.color3},
      ${e=>e.theme.colors.secondary.color3}
    );
    background-repeat: no-repeat;
  }

  &[type='range']:focus {
    outline: none;
  }

  &[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 8px;
    animation: 0.2s;
    border-radius: 10px;
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    // background: ${e=>e.theme.colors.secondary.color3};
  }

  &[type='range']::-webkit-slider-thumb {
    height: 14px;
    width: 14px;
    border-radius: 50%;
    background: ${e=>e.theme.colors.primary.bg};
    border: solid 1px ${e=>e.theme.colors.primary.accent};
    -webkit-appearance: none;
    margin-top: -4px;
  }
`,ua=c.div`
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
`,ha=c.div`
  height: 100%;
  position: relative;
  width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 7px;
  height: 82px;
  @media (min-width: ${({theme:e})=>e.screens.tab}) {
    width: 356px;
  }
  @media (min-width: ${({theme:e})=>e.screens.desk}) {
    width: 391px;
  }
`,ma=c.span`
  font-size: 18px;
  position: absolute;
  top: 0;
  left: 0;
  font-weight: ${e=>e.theme.fontWeights.regular};
  line-height: 24px;
  color: ${e=>e.theme.colors.primary.accent};
`,Ot=c(la)`
  fill: ${e=>e.theme.colors.primary.bg};
  stroke: ${e=>e.theme.colors.primary.bg};
  width: 16px;
  height: 16px;

  @media (min-width: ${({theme:e})=>e.screens.tab}) {
    width: 24px;
    height: 24px;
  }
`,fa=c.button`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: flex-start;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  width: 280px;
  justify-content: center;
  color: ${e=>e.theme.colors.primary.text};
  background-color: rgba(64, 123, 255, 0.3);
  border: 1px;
  border-radius: 10px;
  z-index: 1;
  padding: 10px 30px;
  position: relative;
  ${Ot} {
    fill: ${e=>e.theme.colors.primary.text};
    stroke: ${e=>e.theme.colors.primary.accent};
  }

  @media (min-width: ${({theme:e})=>e.screens.tab}) {
    line-height: 24px;
    width: 336px;
    font-size: 18px;
  }
  @media (min-width: ${({theme:e})=>e.screens.desk}) {
    width: 178px;
  }
  &:hover::before {
    height: 100%;
  }
  &:before {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 0;
    background: ${e=>e.theme.colors.primary.accent};
    z-index: -1;

    transition: 0.8s;
  }
  &:before {
    bottom: 0;
    border-radius: 10px;
  }
`,pa=c.div`
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,ga=c.span`
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  color: ${e=>e.theme.colors.primary.accent};

  &::before {
    content: '|';
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    color: ${e=>e.theme.colors.secondary.color5};
  }
`,xa=c.span`
  transform: translateX(45%);
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  color: ${e=>e.theme.colors.primary.accent};

  &::before {
    content: '|';
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${e=>e.theme.colors.secondary.color5};
  }
`,wa=c.span`
  position: absolute;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  margin-bottom: 4px;
  gap: 4px;
  color: ${e=>e.theme.colors.primary.accent};

  &::before {
    content: '|';
    justify-content: center;
    align-items: center;
    color: ${e=>e.theme.colors.secondary.color5};
  }
`,ba=({handleAddWaterClick:e,calcRange:t})=>{const n=t>0&&t<100,r=()=>({left:`calc(${Math.min(100,Math.max(0,t))}% + 4px)`}),o=()=>({backgroundSize:`${t}%`});return a.jsxs(ua,{children:[a.jsxs(ha,{children:[a.jsx(ma,{children:"Today"}),a.jsx(da,{type:"range",min:"0",max:"100",value:t||0,readOnly:!0,style:o(),"aria-label":"Water range"}),a.jsxs(pa,{children:[a.jsx(ga,{children:"0%"}),n&&a.jsx(wa,{id:"waterMark",style:r(),children:`${t}%`}),a.jsx(xa,{children:"100%"})]})]}),a.jsxs(fa,{onClick:e,children:[a.jsx(Ot,{})," Add water"]})]})},ya=c.div`
  width: 256px;
  @media (min-width: ${({theme:e})=>e.screens.tab}) {
    width: 656px;
  }
  @media (min-width: ${({theme:e})=>e.screens.desk}) {
    width: 544px;
  }
`,ka=c.h2`
  font-size: 26px;
  font-weight: 500;
  line-height: 32px;
  color: ${e=>e.theme.colors.primary.text};
`,va=c.div`
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
`,Ma=c.p`
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
`,Pa=c.div`
  width: 256px;
  border: 1px solid;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 24px;
  border-color: ${e=>e.theme.colors.secondary.color5};
  @media (min-width: ${({theme:e})=>e.screens.tab}) {
    width: 100%;
  }
`,Sa=c.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #8f8f8f;
`,Ta=c.span`
  color: ${e=>e.theme.colors.primary.accent};
`,Ea=c.form`
  display: flex;
  flex-direction: column;
`,pt=c.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  color: ${e=>e.theme.colors.primary.text};
`,gt=c.label`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`,xt=c.input`
  width: 14px;
  height: 14px;
  border: 1px solid;
  border-color: ${e=>e.theme.colors.primary.accent};
  color: ${e=>e.theme.colors.primary.bg};
  border-radius: 50%;
`,Da=c.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`,wt=c.label`
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
`,Ie=c.input`
  border-radius: 6px;
  border: 1px solid;
  width: 100%;
  color: ${e=>e.theme.colors.primary.accent};
  padding: 12px 10px 12px 10px;
  background: transparent;
  border-color: ${e=>e.theme.colors.secondary.color5};
  &::placeholder {
    color: ${e=>e.theme.colors.secondary.color5};
  }

  &:hover {
    color: ${e=>e.theme.colors.primary.accent};
    border: 1px solid ${e=>e.theme.colors.primary.accent};
  }

  &:focus {
    outline: none;
    border: 1px solid ${e=>e.theme.colors.primary.accent};
  }

  &:not(:placeholder-shown) {
    color: ${e=>e.theme.colors.primary.accent};
  }

  &[type='number'] {
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`,ja=c.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`,Oa=c.label`
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
`,Ca=c.button`
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
`,$a=c.div`
  width: 100%;
  display: flex;
  justify-content: end;
  @media (min-width: ${({theme:e})=>e.screens.tab}) {
    width: 100%;
  }
  @media (min-width: ${({theme:e})=>e.screens.desk}) {
    width: 100%;
  }
`,Aa=c.div`
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
`,Wa=c.span`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: ${e=>e.theme.colors.primary.accent};
`;c.svg`
  background-color:;
`;const Ra=()=>{const e=xe(),{user:t}=ge(),n={weight:.03,activity:.04},r={weight:.04,activity:.06},[o,i]=l.useState(r),[s,u]=l.useState(""),[d,m]=l.useState(""),[f,p]=l.useState(""),v=t.waterRate,{closeModal:M}=l.useContext(we),x=l.useCallback(()=>!s||!d?void 0:(s*o.weight+d/60*o.activity).toFixed(1),[o,s,d]),O=l.useMemo(()=>x(),[x]),y=h=>{const b=h.target.value,k=parseFloat(b);!isNaN(k)&&k>=1?p(k):b===""&&p("")},w=h=>{h.preventDefault();const b=parseFloat(O);if(!(d>0&&s>0||f>0)){Ke.Notify.warning("Fill all fields");return}e(Jt(f||b)).then(D=>{D.error?(console.log(D.error),Ke.Notify.failure("Something went wrong")):(M(),u(""),m(""),p(""))})},g=h=>{h.target.value==="woman"?i(n):i(r)};return a.jsxs(ya,{children:[a.jsx(Aa,{children:a.jsx(ka,{children:"My daily norma"})}),a.jsxs(va,{children:[a.jsxs(oe,{children:["For girl: ",a.jsx(ft,{children:"V=(M*0,03) + (T*0,4)"})]}),a.jsxs(oe,{children:["For man: ",a.jsx(ft,{children:"V=(M*0,04) + (T*0,6)"})]})]}),a.jsx(Pa,{children:a.jsxs(Sa,{children:[a.jsx(Ta,{children:"*"})," V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]})}),a.jsxs(Ea,{children:[a.jsxs(ja,{children:[a.jsx(pt,{children:"Calculate your rate:"}),a.jsxs(Da,{children:[a.jsxs(gt,{children:[a.jsx(xt,{type:"radio",name:"gender",value:"woman",onChange:g}),a.jsx(oe,{children:"For woman"})]}),a.jsxs(gt,{children:[a.jsx(xt,{type:"radio",name:"gender",value:"man",onChange:g}),a.jsx(oe,{children:"For man"})]})]}),a.jsxs(wt,{children:[a.jsx(oe,{children:"Your weight in kilograms:"}),a.jsx(Ie,{type:"number",name:"userWeight",placeholder:"0",value:s,min:0,max:250,onChange:h=>u(h.target.value)})]}),a.jsxs(wt,{children:[a.jsx(oe,{children:"The time of active participation in sports or other activities with a high physical. load in hours:"}),a.jsx(Ie,{type:"number",name:"userActive",placeholder:"0",value:d,min:0,onChange:h=>m(h.target.value)})]}),a.jsxs(Ma,{children:["The required amount of water in liters per day:",a.jsxs(Wa,{children:[" ",O||(v/1e3).toFixed(1)," L"]})]})]}),a.jsxs(Oa,{children:[a.jsx(pt,{children:"Write down how much water you will drink:"}),a.jsx(Ie,{type:"number",name:"userWaterPredict",placeholder:"0",value:f,min:0,onChange:y})]}),a.jsx($a,{children:a.jsx(Ca,{onClick:w,children:"Save"})})]})]})},Ha="/Smart-Foxes-WaterTracker/assets/BackgroundHomeDesk-30285ed3.webp",Na="/Smart-Foxes-WaterTracker/assets/BackgroundHomeDesk2x-9952f741.webp",Ia="/Smart-Foxes-WaterTracker/assets/BotleHomeDesk-ff142a97.webp",Fa="/Smart-Foxes-WaterTracker/assets/BotleHomeDesk2x-77f2403f.webp",za="/Smart-Foxes-WaterTracker/assets/BackgroundHomeTab-91f08f5d.webp",Ba="/Smart-Foxes-WaterTracker/assets/BackgroundHomeTab2x-2fc69d13.webp",La="/Smart-Foxes-WaterTracker/assets/BottleHomeTab-63c92851.webp",Ya="/Smart-Foxes-WaterTracker/assets/BottleHomeMob2x-c4cf9261.webp",Ja="data:image/webp;base64,UklGRqgNAABXRUJQVlA4WAoAAAAQAAAAPwEALwUAQUxQSBMHAAABHMVt2zjS/munXX1HxASYwsQX0/aixO7LpMsZNyWVsm1PXknx8fH1+K6mvh6Pj6/Hd3Tx+Ocvntk5sCr7HRETIC3b3iqaIiESIqES6mDHATgAB4ODwQE4mM9BJSAhEiohe6TZf+8e34iYAEGp5no9A3jadW4SrXo23uyeIsXqYGY/okTL4PWpeVMR0W2vN6/dQiR1gFFMvm75ASgBcgKMojIxP0C36KgAVWVyAbphw4FxyPztgQ6NAvRNVtoDyChAN1lrT2QYMExW2wOMDpyyfsNFAVwC1zp0i5wCHBK5HbpE7jfAQ8cBC50Bt0TuBtTQycAeOhVIoXMBFjoNkN++LHQc2EKnAEfoZMBDx4AROvIAKXQqUEMnAUMjRxpQQicDwyJHHqCFTgIoP8COC7kAjmU2gKEPMLZF1gGGbAPgWLJ1QkPyC2XBOQgOyS90m2QXwI0N2QevbhO0DIBLwSH2vIDvb6Q6eC0SoOUToJU9mdm2n9fg054kRM0/e38UlSg1nzGKSqRqvp4vDU8SsJbOUi73kk3+e7w+m0dc78kwU1rcfBlglrjvBS7PGJ7A8ozxXqBSI9MVKZ4SG1AekdsVJ2dSVJx41g4TjewPmFiaw+eCiaY1mIhn7Tg5sz7hpCa5ALXlTEipKS5QXRO6YUW2oV4ErWu/5yZ4tfNG31Qga/P7cr/2qkL/0//0P/1P/9P/9D/9/3dAM0VObT0irgk1+oofumHmipu9IOYZt13xYjG44WUdcby0kVD4lN9uziGBax1peBEfqICp93ZB7HqnKWSk+vf6JrB97K0diwr9T//T//Q//U//0//0P/1P/9P/9D/9T/+Tt7ocHtHbXjCjzx4/bgUwxeP+Ey6lx+gBFusx/sKKR+YDKXOkugLFc2LCSY3khpMtq+PknRUGk5ZWf5s50wpM1qwuMK1ZHziRK2kCypzjgtSWUqFinrAJVs2HNkGr+b2+CmBnv9FMMFv35n4diwr9T//T//Q//U//0//0P/1P/9P/9D/9T/+TvLaltGnU6HkNPr09BYyWATyXe7uBfkTLPqCdKp9qbuAWKgXuJF9OD30LFIcqbxfGFiYFikw8GRYkGYpMPekaItZxmVwpIVIYNkvH0AjpuEwvlADJYPN0jAC5aLKwkeKjU1acnOGhsK/4hofHBmmF0cIjhc+2KAWIwbHiG1d4yKCuqJT4aPQVH+zxcUKaZ6DxodDmOS4B6pBmGaQIsUHXOdpxCdETrjnOsBiRBq4THA4JUr2h2zv2AUXCVG/A7StaBhSJ1AJwHduLZR/Qk8SqOZ+Oh9dRVMLV/OG7rajErKacy7mr/Pc//U//0//0P/1P/9P/9D/9T//T//Q//U//0//0P/1P/9P/v//qcjRv76WAxlr8+JoQs8T9Q+FyxKgbWF4x7gqVOTJfUPGUqECZI7cB5UoKhYlG9gyTmrbBZE47fpt5pO0wsbQJJuJZhpMt6RKcas+ZgCJbShOotgQ3rKgP9SJg1XPATfA6+42+qUD2cV4R4e9Fhf6n/+l/+p/+p//pf/qf/qf//56p257znjRoUn347u0pXnLj0+cZvPYjVtIHMOpuIiKazgZ0C5QCtCRfNgdKlKjDOOVtc7g0Rj6gm8wscIdIhVtlbgYPkAJdZXaGMzwMhsn8yrDocDhk5U0LDoMuSxOk2HA41kjDQ0Ohy+LM0Mj4Br5KB3tkVNhXSaNGRgNdVmmR8YAsz/TIgP4j8GvLCJ4HdFmhR8YHpGUXLTIqnMs6NTIytFUb7JGhA7ZFDhoZcoGvMXAJzQRsSxxSbEiDe0UCl+C0AXWedbDokBMos6xDkfh0oMyxDlUCVG/gsgn7gFsjRPQC+vlOakBTCdIC0D19T3MDqBKn9vA6mpdS/ea1JwnV3HizHxKuVtr3npokaC2lPW8q//1P/9P/9D/9T//T//Q//U///wO4Zn8GjNsPjZh08fo8A8AtWrQCLZuIiCZ/oGqobB2qylfzQ7dA2QY9yZvm9C1MbHCrvF/oFiTW6SozC11jxOkmc50aIgaHTNaBRYjTZXqhBojBMU/H0PjIoPPEOeLjosnCTI2PD+oK444POFcIPUKONfz6MqgrjB4fD9eKRIsPZ6xwanxkSAs6KT500OZlugRohTStUyLEBl0nFbpFiBTwOTucEqMNyow0uCRI7YHL3jqha5SIPdCPr6UGt0mcqgP93D7T3ABXCdX8AIx2+fUA9F3CNTe+2E6ViLW9uLernib//f8PtzZv27ZU1OjS4vv9MMQ8etw+DC6vGHUDyxHjvUDlGZluQCmR24DiSVFhUiO7weRMC0OJ560g0cg/QFJ/wgd8GkgKfPQn7CARz5tQsucZSmraITBtWYYT6zm7AHVNcUWKbAlugtW1jzQTtNp5q6+C2HL699qiglqttRYV+v9vyQBWUDggbgYAAJB3AJ0BKkABMAU+kUikTKWkpCIg8ygwsBIJaW7hdp4z/izDAfgB+gH9mR31a8D8DtzAcnywOiF5gPOy9Nf999I7qcd5w/w+TneAP4B+AH6Kfn73+ArEFixYsWLFMn4O9OkMuRQ3UOfTokSJEiRIfNRr4k7kyZMmTJkvEM/qlMYhEOM0S8ZJLooBPnRIkSI9p5+FU7aPLCqbeB56evlfmzZs2b47Jv5EtFHraQlRyvzZs2bNmzZs2bNmzZs2bNmzZs2bNmzZs2bNmzZs2bNmzZs2bNmzZs2bNmzZs2bNmzZs2bNmzZsG1aRdnOiRIkSJEh9bbwPPT18r82bNmzZkp6k42y3JkyZMmTJkyZMmTJkyZMmTJkyZMmTJkyZMmTJkyZMmTJkyZMmTJkyZMmTJkyZMmTJkyZMmTJkyZMmTJkyZMmTJkyZMmTJkyZMmTJkyZMmTJkyZMmTJkyZMmTJkyZMl5atI3NA/mzZs2bNmwYXlAdppMPzZs2bNmzIKz7t7uIvrjokSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIfKdjqjpW/QHpxBd646JEiRHqXS/7yyHoBLBfmzZs2bMhuci1rm6s7f1x0SJEiRIk8xw4cOHDhw4cOHDhw4cOHDhw4cOHDhw4cOHDhw4cOHDhw4cOHDhw4cOHDhw4cOHDhw4cOHDhw4cOHDhw4cOHDhw4cOHDhw4cOHDhw4cOHDhw4cOHDhw4cOHDhw4cOHDhw4cOHDhw4cOHDhw4cOHDhw4cOHDhw4cOHDhw4cOHDhw4cOHDhw4cOG6f7tPCC/LQWrVq1atWrVXQAQ6CSHfs2bNmzZs2ZKeo33rjokSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRHoh8il7zj1a30uxnK/NmzZs2ZFfsV8UIkcMD82bNmzZsyJCtRgMJtDxXhw4cOHDhw4cOHDhw4cOHDhw4cOHDhw4cOHDhw4cOHDhw4cOHDhw4cOHDhw4cOHDhw4cOHDhw4cOHDhw4cOHDhw4cOHDhw4cOHDhXatIPOTA/NmzZs2bMgaTbbsBB4HpgsJAIECBAgQHwFuCKIrySj5+E6j/2rVq1atVervD8t9646HynnVgQXbcAmTJkyZMlltPV37NmzZs2bNhBSpcKp06dKgAAP7kKruig90p6vNxUaId+ffgnxWjc//pb7//qE5r3u/QpMhynafyp56DC8+G5JYhVlehi/zWw3s4Pb/KSM7c4CHP/1fEAHz4/zuWVI6hptftm66pwQZxlpX63qW2pmDTvUN1VT///BWAFCir/9qH1lgv2OtwB6LcKNZ1/T4pa8b6TVRyEmlsxqOxy8fnPsUhzsTGBAAAAAwxaf6up2664Ky56nW6YAAAAAAAAGaBp6vCyaNoAc9GaaI80KqcmUXnarVEQjZQ4J1h6zGhjpgkpMB0mm+0clgQAAAAAAAXvYx17//Ua3//TIO+rnq2j9esbsS8TLgPQEEUGv7B073pvgnOb31rWR+acGqKPUwp4nCMoE3nrImh1mehmJsvz+cOeUf/8fZGAFfQgWaU/Rtgq7B/wh5QUAAAAAAAAAAACU6k4Ua0Z9fsb1dJhNcptuz3h1xqt2oav3hqB+9uHANhaSNMeqI0ffxgAAAAACm09ynq9iGm78ec6kGZNX/z/z+n+0teewRhDYqFf0huqIRQWrHI84gvpvh63IysDjptWHrYGcDl/A137DQTM/volJ2MdhccqfAQeO/2KImp9720CTpTmFwp1NeoFJdDPiif//od0jEvVSoZgE/7iZHHaWFWuM5lmReWtLxoSPNqzOzabBCBF/oVsyDkPZch4EAAAAASH7Ak6Wu6nDzoO+yPVqc4Eb17DSzF9nkRaRtvS0/Ra55MfwrT25S69s03JKDr9C7bTowvCUyNy5jft9bcmT11Ahg6e3Fpg29i4fXFkMJ8oajKjMVQ1fG6H/FBP+88J9urVAl0cBHmkBkB+8//aaRcGvoTZofXZlQABlbRd2sz1d3zbq6STrQGLTJ0gooz66sHvMKWc2hM1Sgi8f/Ym28OaurcaClCgAAA",Ua="/Smart-Foxes-WaterTracker/assets/BackgroundHomeMob2x-f856cda0.webp",qa="/Smart-Foxes-WaterTracker/assets/BottleHomeMob-0250dd19.webp",Za="/Smart-Foxes-WaterTracker/assets/BottleHomeMob2x-c4cf9261.webp",Va=c.main`
  display: flex;
  flex-direction: column;

  align-items: center;

  color: ${e=>e.theme.colors.primary.text};
  background-color: ${e=>e.theme.colors.primary.bg};
  background-image: image-set(url(${qa}) 1x, url(${Za}) 2x),
    image-set(url(${Ja}) 1x, url(${Ua}) 2x);
  background-position:
    center 106px,
    center;
  background-size:
    auto,
    100vw auto;
  background-repeat: no-repeat;

  @media (min-width: ${({theme:e})=>e.screens.tab}) {
    background-image: image-set(url(${La}) 1x, url(${Ya}) 2x),
      image-set(url(${za}) 1x, url(${Ba}) 2x);
    background-position:
      center 40px,
      center;
  }


@media (min-width: ${({theme:e})=>e.screens.desk}) {
    flex-direction:row;
    gap: 32px;
    align-items: flex-start;
    padding: 0px 112px;

    background-image: image-set(url(${Ia}) 1x, url(${Fa}) 2x),
      image-set(
        url(${Ha}) 1x,
        url(${Na}) 2x
      );
    background-position:
      left top,
      center;
  }
`,Qa=c.section`
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

`,Ga=c.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 10px;
  background: ${e=>e.theme.colors.secondary.color1};
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);

  width: 280px;
  height: auto;
  padding: 24px 8px;
  margin: 0;
  margin-bottom: 4px;

  @media (min-width: ${({theme:e})=>e.screens.tab}) {
    width: 704px;
    padding: 32px 24px;
  }

  @media (min-width: ${({theme:e})=>e.screens.desk}) {
    min-width: 592px;
  }
`,Xa=()=>{const{openModal:e}=l.useContext(we),t=ge().user,n=fe().waterDayList,r=l.useMemo(()=>{let u=n.map(d=>d.waterVolume).reduce((d,m)=>d+m,0);return Math.round(100*u/t.waterRate)},[t,n]),o=()=>{e(a.jsx(a.Fragment,{children:a.jsx(jt,{})}))},i=()=>{e(a.jsx(a.Fragment,{children:a.jsx(Ra,{})}))};return a.jsxs(Va,{children:[a.jsxs(Qa,{children:[a.jsx(ca,{handleDailyNormaModal:i}),a.jsx(ba,{handleAddWaterClick:o,calcRange:r})]}),a.jsxs(Ga,{children:[a.jsx(ta,{handleAddWaterClick:o}),a.jsx(fo,{})]})]})};export{Xa as default};
