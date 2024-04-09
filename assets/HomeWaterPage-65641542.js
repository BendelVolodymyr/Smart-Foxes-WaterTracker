import{o as V,r as l,h as Me,j as a,i as Ue,k as jt,l as D,m as Dt,n as ae,T as Ct,p as Wt,q as Qe,v as ze,w as He,x as pe,y as Le,z as ue,A as Ae,B as ke,C as Ot,D as Rt,E as Ft,I as Nt,u as c,b as Ee,J as De,c as ge,K as zt,M as xe,O as Ht,Q as Ye,G as xt,R as Lt,S as At,U as Yt,V as It}from"./index-cc3adafc.js";import{b as Bt,a as _t}from"./backgroundElementMainPageDesk2x@2-f75c1b59.js";import{b as qt,a as Vt}from"./BackgroundHomeTab2x-a86d5447.js";function Xe(...e){return e.reduce((t,n)=>n==null?t:function(...o){t.apply(this,o),n.apply(this,o)},()=>{})}function Gt(e,t=166){let n;function r(...o){const i=()=>{e.apply(this,o)};clearTimeout(n),n=setTimeout(i,t)}return r.clear=()=>{clearTimeout(n)},r}function he(e){return V(e).defaultView||window}function Ut(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}const Qt=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function Xt(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function Kt(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=r=>e.ownerDocument.querySelector(`input[type="radio"]${r}`);let n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}function Jt(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||Kt(e))}function Zt(e){const t=[],n=[];return Array.from(e.querySelectorAll(Qt)).forEach((r,o)=>{const i=Xt(r);i===-1||!Jt(r)||(i===0?t.push(r):n.push({documentOrder:o,tabIndex:i,node:r}))}),n.sort((r,o)=>r.tabIndex===o.tabIndex?r.documentOrder-o.documentOrder:r.tabIndex-o.tabIndex).map(r=>r.node).concat(t)}function en(){return!0}function tn(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:r=!1,disableRestoreFocus:o=!1,getTabbable:i=Zt,isEnabled:s=en,open:u}=e,d=l.useRef(!1),f=l.useRef(null),p=l.useRef(null),x=l.useRef(null),k=l.useRef(null),P=l.useRef(!1),g=l.useRef(null),M=Me(t.ref,g),v=l.useRef(null);l.useEffect(()=>{!u||!g.current||(P.current=!n)},[n,u]),l.useEffect(()=>{if(!u||!g.current)return;const h=V(g.current);return g.current.contains(h.activeElement)||(g.current.hasAttribute("tabIndex")||g.current.setAttribute("tabIndex","-1"),P.current&&g.current.focus()),()=>{o||(x.current&&x.current.focus&&(d.current=!0,x.current.focus()),x.current=null)}},[u]),l.useEffect(()=>{if(!u||!g.current)return;const h=V(g.current),b=C=>{v.current=C,!(r||!s()||C.key!=="Tab")&&h.activeElement===g.current&&C.shiftKey&&(d.current=!0,p.current&&p.current.focus())},y=()=>{const C=g.current;if(C===null)return;if(!h.hasFocus()||!s()||d.current){d.current=!1;return}if(C.contains(h.activeElement)||r&&h.activeElement!==f.current&&h.activeElement!==p.current)return;if(h.activeElement!==k.current)k.current=null;else if(k.current!==null)return;if(!P.current)return;let F=[];if((h.activeElement===f.current||h.activeElement===p.current)&&(F=i(g.current)),F.length>0){var A,z;const q=!!((A=v.current)!=null&&A.shiftKey&&((z=v.current)==null?void 0:z.key)==="Tab"),N=F[0],L=F[F.length-1];typeof N!="string"&&typeof L!="string"&&(q?L.focus():N.focus())}else C.focus()};h.addEventListener("focusin",y),h.addEventListener("keydown",b,!0);const W=setInterval(()=>{h.activeElement&&h.activeElement.tagName==="BODY"&&y()},50);return()=>{clearInterval(W),h.removeEventListener("focusin",y),h.removeEventListener("keydown",b,!0)}},[n,r,o,s,u,i]);const w=h=>{x.current===null&&(x.current=h.relatedTarget),P.current=!0,k.current=h.target;const b=t.props.onFocus;b&&b(h)},m=h=>{x.current===null&&(x.current=h.relatedTarget),P.current=!0};return a.jsxs(l.Fragment,{children:[a.jsx("div",{tabIndex:u?0:-1,onFocus:m,ref:f,"data-testid":"sentinelStart"}),l.cloneElement(t,{ref:M,onFocus:w}),a.jsx("div",{tabIndex:u?0:-1,onFocus:m,ref:p,"data-testid":"sentinelEnd"})]})}function nn(e){const t=V(e);return t.body===e?he(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function de(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function Ke(e){return parseInt(he(e).getComputedStyle(e).paddingRight,10)||0}function rn(e){const n=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,r=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return n||r}function Je(e,t,n,r,o){const i=[t,n,...r];[].forEach.call(e.children,s=>{const u=i.indexOf(s)===-1,d=!rn(s);u&&d&&de(s,o)})}function Ce(e,t){let n=-1;return e.some((r,o)=>t(r)?(n=o,!0):!1),n}function on(e,t){const n=[],r=e.container;if(!t.disableScrollLock){if(nn(r)){const s=Ut(V(r));n.push({value:r.style.paddingRight,property:"padding-right",el:r}),r.style.paddingRight=`${Ke(r)+s}px`;const u=V(r).querySelectorAll(".mui-fixed");[].forEach.call(u,d=>{n.push({value:d.style.paddingRight,property:"padding-right",el:d}),d.style.paddingRight=`${Ke(d)+s}px`})}let i;if(r.parentNode instanceof DocumentFragment)i=V(r).body;else{const s=r.parentElement,u=he(r);i=(s==null?void 0:s.nodeName)==="HTML"&&u.getComputedStyle(s).overflowY==="scroll"?s:r}n.push({value:i.style.overflow,property:"overflow",el:i},{value:i.style.overflowX,property:"overflow-x",el:i},{value:i.style.overflowY,property:"overflow-y",el:i}),i.style.overflow="hidden"}return()=>{n.forEach(({value:i,el:s,property:u})=>{i?s.style.setProperty(u,i):s.style.removeProperty(u)})}}function an(e){const t=[];return[].forEach.call(e.children,n=>{n.getAttribute("aria-hidden")==="true"&&t.push(n)}),t}class sn{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,n){let r=this.modals.indexOf(t);if(r!==-1)return r;r=this.modals.length,this.modals.push(t),t.modalRef&&de(t.modalRef,!1);const o=an(n);Je(n,t.mount,t.modalRef,o,!0);const i=Ce(this.containers,s=>s.container===n);return i!==-1?(this.containers[i].modals.push(t),r):(this.containers.push({modals:[t],container:n,restore:null,hiddenSiblings:o}),r)}mount(t,n){const r=Ce(this.containers,i=>i.modals.indexOf(t)!==-1),o=this.containers[r];o.restore||(o.restore=on(o,n))}remove(t,n=!0){const r=this.modals.indexOf(t);if(r===-1)return r;const o=Ce(this.containers,s=>s.modals.indexOf(t)!==-1),i=this.containers[o];if(i.modals.splice(i.modals.indexOf(t),1),this.modals.splice(r,1),i.modals.length===0)i.restore&&i.restore(),t.modalRef&&de(t.modalRef,n),Je(i.container,t.mount,t.modalRef,i.hiddenSiblings,!1),this.containers.splice(o,1);else{const s=i.modals[i.modals.length-1];s.modalRef&&de(s.modalRef,!1)}return r}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}function cn(e){return typeof e=="function"?e():e}function ln(e){return e?e.props.hasOwnProperty("in"):!1}const dn=new sn;function un(e){const{container:t,disableEscapeKeyDown:n=!1,disableScrollLock:r=!1,manager:o=dn,closeAfterTransition:i=!1,onTransitionEnter:s,onTransitionExited:u,children:d,onClose:f,open:p,rootRef:x}=e,k=l.useRef({}),P=l.useRef(null),g=l.useRef(null),M=Me(g,x),[v,w]=l.useState(!p),m=ln(d);let h=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(h=!1);const b=()=>V(P.current),y=()=>(k.current.modalRef=g.current,k.current.mount=P.current,k.current),W=()=>{o.mount(y(),{disableScrollLock:r}),g.current&&(g.current.scrollTop=0)},C=Ue(()=>{const $=cn(t)||b().body;o.add(y(),$),g.current&&W()}),F=l.useCallback(()=>o.isTopModal(y()),[o]),A=Ue($=>{P.current=$,$&&(p&&F()?W():g.current&&de(g.current,h))}),z=l.useCallback(()=>{o.remove(y(),h)},[h,o]);l.useEffect(()=>()=>{z()},[z]),l.useEffect(()=>{p?C():(!m||!i)&&z()},[p,z,m,i,C]);const q=$=>j=>{var Y;(Y=$.onKeyDown)==null||Y.call($,j),!(j.key!=="Escape"||j.which===229||!F())&&(n||(j.stopPropagation(),f&&f(j,"escapeKeyDown")))},N=$=>j=>{var Y;(Y=$.onClick)==null||Y.call($,j),j.target===j.currentTarget&&f&&f(j,"backdropClick")};return{getRootProps:($={})=>{const j=jt(e);delete j.onTransitionEnter,delete j.onTransitionExited;const Y=D({},j,$);return D({role:"presentation"},Y,{onKeyDown:q(Y),ref:M})},getBackdropProps:($={})=>{const j=$;return D({"aria-hidden":!0},j,{onClick:N(j),open:p})},getTransitionProps:()=>{const $=()=>{w(!1),s&&s()},j=()=>{w(!0),u&&u(),i&&z()};return{onEnter:Xe($,d==null?void 0:d.props.onEnter),onExited:Xe(j,d==null?void 0:d.props.onExited)}},rootRef:M,portalRef:A,isTopModal:F,exited:v,hasTransition:m}}const hn=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],fn={entering:{opacity:1},entered:{opacity:1}},mn=l.forwardRef(function(t,n){const r=Dt(),o={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:i,appear:s=!0,children:u,easing:d,in:f,onEnter:p,onEntered:x,onEntering:k,onExit:P,onExited:g,onExiting:M,style:v,timeout:w=o,TransitionComponent:m=Ct}=t,h=ae(t,hn),b=l.useRef(null),y=Me(b,u.ref,n),W=T=>H=>{if(T){const $=b.current;H===void 0?T($):T($,H)}},C=W(k),F=W((T,H)=>{Wt(T);const $=Qe({style:v,timeout:w,easing:d},{mode:"enter"});T.style.webkitTransition=r.transitions.create("opacity",$),T.style.transition=r.transitions.create("opacity",$),p&&p(T,H)}),A=W(x),z=W(M),q=W(T=>{const H=Qe({style:v,timeout:w,easing:d},{mode:"exit"});T.style.webkitTransition=r.transitions.create("opacity",H),T.style.transition=r.transitions.create("opacity",H),P&&P(T)}),N=W(g),L=T=>{i&&i(b.current,T)};return a.jsx(m,D({appear:s,in:f,nodeRef:b,onEnter:F,onEntered:A,onEntering:C,onExit:q,onExited:N,onExiting:z,addEndListener:L,timeout:w},h,{children:(T,H)=>l.cloneElement(u,D({style:D({opacity:0,visibility:T==="exited"&&!f?"hidden":void 0},fn[T],v,u.props.style),ref:y},H))}))}),pn=mn;function gn(e){return ze("MuiBackdrop",e)}He("MuiBackdrop",["root","invisible"]);const xn=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],wn=e=>{const{classes:t,invisible:n}=e;return Ae({root:["root",n&&"invisible"]},gn,t)},bn=pe("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})(({ownerState:e})=>D({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),yn=l.forwardRef(function(t,n){var r,o,i;const s=Le({props:t,name:"MuiBackdrop"}),{children:u,className:d,component:f="div",components:p={},componentsProps:x={},invisible:k=!1,open:P,slotProps:g={},slots:M={},TransitionComponent:v=pn,transitionDuration:w}=s,m=ae(s,xn),h=D({},s,{component:f,invisible:k}),b=wn(h),y=(r=g.root)!=null?r:x.root;return a.jsx(v,D({in:P,timeout:w},m,{children:a.jsx(bn,D({"aria-hidden":!0},y,{as:(o=(i=M.root)!=null?i:p.Root)!=null?o:f,className:ue(b.root,d,y==null?void 0:y.className),ownerState:D({},h,y==null?void 0:y.ownerState),classes:b,ref:n,children:u}))}))}),vn=yn;function kn(e){return ze("MuiModal",e)}He("MuiModal",["root","hidden","backdrop"]);const Pn=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],Mn=e=>{const{open:t,exited:n,classes:r}=e;return Ae({root:["root",!t&&n&&"hidden"],backdrop:["backdrop"]},kn,r)},En=pe("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})(({theme:e,ownerState:t})=>D({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),$n=pe(vn,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),Sn=l.forwardRef(function(t,n){var r,o,i,s,u,d;const f=Le({name:"MuiModal",props:t}),{BackdropComponent:p=$n,BackdropProps:x,className:k,closeAfterTransition:P=!1,children:g,container:M,component:v,components:w={},componentsProps:m={},disableAutoFocus:h=!1,disableEnforceFocus:b=!1,disableEscapeKeyDown:y=!1,disablePortal:W=!1,disableRestoreFocus:C=!1,disableScrollLock:F=!1,hideBackdrop:A=!1,keepMounted:z=!1,onBackdropClick:q,open:N,slotProps:L,slots:T}=f,H=ae(f,Pn),$=D({},f,{closeAfterTransition:P,disableAutoFocus:h,disableEnforceFocus:b,disableEscapeKeyDown:y,disablePortal:W,disableRestoreFocus:C,disableScrollLock:F,hideBackdrop:A,keepMounted:z}),{getRootProps:j,getBackdropProps:Y,getTransitionProps:we,portalRef:Se,isTopModal:be,exited:B,hasTransition:ye}=un(D({},$,{rootRef:n})),X=D({},$,{exited:B}),G=Mn(X),J={};if(g.props.tabIndex===void 0&&(J.tabIndex="-1"),ye){const{onEnter:S,onExited:R}=we();J.onEnter=S,J.onExited=R}const Z=(r=(o=T==null?void 0:T.root)!=null?o:w.Root)!=null?r:En,ie=(i=(s=T==null?void 0:T.backdrop)!=null?s:w.Backdrop)!=null?i:p,se=(u=L==null?void 0:L.root)!=null?u:m.root,ee=(d=L==null?void 0:L.backdrop)!=null?d:m.backdrop,Te=ke({elementType:Z,externalSlotProps:se,externalForwardedProps:H,getSlotProps:j,additionalProps:{ref:n,as:v},ownerState:X,className:ue(k,se==null?void 0:se.className,G==null?void 0:G.root,!X.open&&X.exited&&(G==null?void 0:G.hidden))}),je=ke({elementType:ie,externalSlotProps:ee,additionalProps:x,getSlotProps:S=>Y(D({},S,{onClick:R=>{q&&q(R),S!=null&&S.onClick&&S.onClick(R)}})),className:ue(ee==null?void 0:ee.className,x==null?void 0:x.className,G==null?void 0:G.backdrop),ownerState:X});return!z&&!N&&(!ye||B)?null:a.jsx(Ot,{ref:Se,container:M,disablePortal:W,children:a.jsxs(Z,D({},Te,{children:[!A&&p?a.jsx(ie,D({},je)):null,a.jsx(tn,{disableEnforceFocus:b,disableAutoFocus:h,disableRestoreFocus:C,isEnabled:be,open:N,children:l.cloneElement(g,J)})]}))})}),Tn=Sn;function jn(e){return ze("MuiPopover",e)}He("MuiPopover",["root","paper"]);const Dn=["onEntering"],Cn=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps","disableScrollLock"],Wn=["slotProps"];function Ze(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.height/2:t==="bottom"&&(n=e.height),n}function et(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.width/2:t==="right"&&(n=e.width),n}function tt(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function We(e){return typeof e=="function"?e():e}const On=e=>{const{classes:t}=e;return Ae({root:["root"],paper:["paper"]},jn,t)},Rn=pe(Tn,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Fn=pe(Rt,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),Nn=l.forwardRef(function(t,n){var r,o,i;const s=Le({props:t,name:"MuiPopover"}),{action:u,anchorEl:d,anchorOrigin:f={vertical:"top",horizontal:"left"},anchorPosition:p,anchorReference:x="anchorEl",children:k,className:P,container:g,elevation:M=8,marginThreshold:v=16,open:w,PaperProps:m={},slots:h,slotProps:b,transformOrigin:y={vertical:"top",horizontal:"left"},TransitionComponent:W=Nt,transitionDuration:C="auto",TransitionProps:{onEntering:F}={},disableScrollLock:A=!1}=s,z=ae(s.TransitionProps,Dn),q=ae(s,Cn),N=(r=b==null?void 0:b.paper)!=null?r:m,L=l.useRef(),T=Me(L,N.ref),H=D({},s,{anchorOrigin:f,anchorReference:x,elevation:M,marginThreshold:v,externalPaperSlotProps:N,transformOrigin:y,TransitionComponent:W,transitionDuration:C,TransitionProps:z}),$=On(H),j=l.useCallback(()=>{if(x==="anchorPosition")return p;const S=We(d),I=(S&&S.nodeType===1?S:V(L.current).body).getBoundingClientRect();return{top:I.top+Ze(I,f.vertical),left:I.left+et(I,f.horizontal)}},[d,f.horizontal,f.vertical,p,x]),Y=l.useCallback(S=>({vertical:Ze(S,y.vertical),horizontal:et(S,y.horizontal)}),[y.horizontal,y.vertical]),we=l.useCallback(S=>{const R={width:S.offsetWidth,height:S.offsetHeight},I=Y(R);if(x==="none")return{top:null,left:null,transformOrigin:tt(I)};const Ie=j();let te=Ie.top-I.vertical,ne=Ie.left-I.horizontal;const Be=te+R.height,_e=ne+R.width,qe=he(We(d)),Ve=qe.innerHeight-v,Ge=qe.innerWidth-v;if(v!==null&&te<v){const _=te-v;te-=_,I.vertical+=_}else if(v!==null&&Be>Ve){const _=Be-Ve;te-=_,I.vertical+=_}if(v!==null&&ne<v){const _=ne-v;ne-=_,I.horizontal+=_}else if(_e>Ge){const _=_e-Ge;ne-=_,I.horizontal+=_}return{top:`${Math.round(te)}px`,left:`${Math.round(ne)}px`,transformOrigin:tt(I)}},[d,x,j,Y,v]),[Se,be]=l.useState(w),B=l.useCallback(()=>{const S=L.current;if(!S)return;const R=we(S);R.top!==null&&(S.style.top=R.top),R.left!==null&&(S.style.left=R.left),S.style.transformOrigin=R.transformOrigin,be(!0)},[we]);l.useEffect(()=>(A&&window.addEventListener("scroll",B),()=>window.removeEventListener("scroll",B)),[d,A,B]);const ye=(S,R)=>{F&&F(S,R),B()},X=()=>{be(!1)};l.useEffect(()=>{w&&B()}),l.useImperativeHandle(u,()=>w?{updatePosition:()=>{B()}}:null,[w,B]),l.useEffect(()=>{if(!w)return;const S=Gt(()=>{B()}),R=he(d);return R.addEventListener("resize",S),()=>{S.clear(),R.removeEventListener("resize",S)}},[d,w,B]);let G=C;C==="auto"&&!W.muiSupportAuto&&(G=void 0);const J=g||(d?V(We(d)).body:void 0),Z=(o=h==null?void 0:h.root)!=null?o:Rn,ie=(i=h==null?void 0:h.paper)!=null?i:Fn,se=ke({elementType:ie,externalSlotProps:D({},N,{style:Se?N.style:D({},N.style,{opacity:0})}),additionalProps:{elevation:M,ref:T},ownerState:H,className:ue($.paper,N==null?void 0:N.className)}),ee=ke({elementType:Z,externalSlotProps:(b==null?void 0:b.root)||{},externalForwardedProps:q,additionalProps:{ref:n,slotProps:{backdrop:{invisible:!0}},container:J,open:w},ownerState:H,className:ue($.root,P)}),{slotProps:Te}=ee,je=ae(ee,Wn);return a.jsx(Z,D({},je,!Ft(Z)&&{slotProps:Te,disableScrollLock:A},{children:a.jsx(W,D({appear:!0,in:w,onEntering:ye,onExited:X,timeout:G},z,{children:a.jsx(ie,D({},se,{children:k}))}))}))}),zn=Nn;function O(e){const t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new e.constructor(+e):typeof e=="number"||t==="[object Number]"||typeof e=="string"||t==="[object String]"?new Date(e):new Date(NaN)}function U(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}function Oe(e,t){const n=O(e);if(isNaN(t))return U(e,NaN);if(!t)return n;const r=n.getDate(),o=U(e,n.getTime());o.setMonth(n.getMonth()+t+1,0);const i=o.getDate();return r>=i?o:(n.setFullYear(o.getFullYear(),o.getMonth(),r),n)}const wt=6048e5,Hn=864e5;let Ln={};function $e(){return Ln}function fe(e,t){var u,d,f,p;const n=$e(),r=(t==null?void 0:t.weekStartsOn)??((d=(u=t==null?void 0:t.locale)==null?void 0:u.options)==null?void 0:d.weekStartsOn)??n.weekStartsOn??((p=(f=n.locale)==null?void 0:f.options)==null?void 0:p.weekStartsOn)??0,o=O(e),i=o.getDay(),s=(i<r?7:0)+i-r;return o.setDate(o.getDate()-s),o.setHours(0,0,0,0),o}function Pe(e){return fe(e,{weekStartsOn:1})}function bt(e){const t=O(e),n=t.getFullYear(),r=U(e,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const o=Pe(r),i=U(e,0);i.setFullYear(n,0,4),i.setHours(0,0,0,0);const s=Pe(i);return t.getTime()>=o.getTime()?n+1:t.getTime()>=s.getTime()?n:n-1}function nt(e){const t=O(e);return t.setHours(0,0,0,0),t}function rt(e){const t=O(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function An(e,t){const n=nt(e),r=nt(t),o=+n-rt(n),i=+r-rt(r);return Math.round((o-i)/Hn)}function Yn(e){const t=bt(e),n=U(e,0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),Pe(n)}function In(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function Bn(e){if(!In(e)&&typeof e!="number")return!1;const t=O(e);return!isNaN(Number(t))}function ot(e){const t=O(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}function _n(e,t){const n=O(e.start),r=O(e.end);let o=+n>+r;const i=o?+n:+r,s=o?r:n;s.setHours(0,0,0,0);let u=(t==null?void 0:t.step)??1;if(!u)return[];u<0&&(u=-u,o=!o);const d=[];for(;+s<=i;)d.push(O(s)),s.setDate(s.getDate()+u),s.setHours(0,0,0,0);return o?d.reverse():d}function at(e){const t=O(e);return t.setDate(1),t.setHours(0,0,0,0),t}function qn(e){const t=O(e),n=U(e,0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}const Vn={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Gn=(e,t,n)=>{let r;const o=Vn[e];return typeof o=="string"?r=o:t===1?r=o.one:r=o.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function Re(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const Un={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Qn={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Xn={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Kn={date:Re({formats:Un,defaultWidth:"full"}),time:Re({formats:Qn,defaultWidth:"full"}),dateTime:Re({formats:Xn,defaultWidth:"full"})},Jn={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Zn=(e,t,n,r)=>Jn[e];function ce(e){return(t,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let o;if(r==="formatting"&&e.formattingValues){const s=e.defaultFormattingWidth||e.defaultWidth,u=n!=null&&n.width?String(n.width):s;o=e.formattingValues[u]||e.formattingValues[s]}else{const s=e.defaultWidth,u=n!=null&&n.width?String(n.width):e.defaultWidth;o=e.values[u]||e.values[s]}const i=e.argumentCallback?e.argumentCallback(t):t;return o[i]}}const er={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},tr={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},nr={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},rr={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},or={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},ar={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},ir=(e,t)=>{const n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},sr={ordinalNumber:ir,era:ce({values:er,defaultWidth:"wide"}),quarter:ce({values:tr,defaultWidth:"wide",argumentCallback:e=>e-1}),month:ce({values:nr,defaultWidth:"wide"}),day:ce({values:rr,defaultWidth:"wide"}),dayPeriod:ce({values:or,defaultWidth:"wide",formattingValues:ar,defaultFormattingWidth:"wide"})};function le(e){return(t,n={})=>{const r=n.width,o=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=t.match(o);if(!i)return null;const s=i[0],u=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],d=Array.isArray(u)?lr(u,x=>x.test(s)):cr(u,x=>x.test(s));let f;f=e.valueCallback?e.valueCallback(d):d,f=n.valueCallback?n.valueCallback(f):f;const p=t.slice(s.length);return{value:f,rest:p}}}function cr(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function lr(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function dr(e){return(t,n={})=>{const r=t.match(e.matchPattern);if(!r)return null;const o=r[0],i=t.match(e.parsePattern);if(!i)return null;let s=e.valueCallback?e.valueCallback(i[0]):i[0];s=n.valueCallback?n.valueCallback(s):s;const u=t.slice(o.length);return{value:s,rest:u}}}const ur=/^(\d+)(th|st|nd|rd)?/i,hr=/\d+/i,fr={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},mr={any:[/^b/i,/^(a|c)/i]},pr={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},gr={any:[/1/i,/2/i,/3/i,/4/i]},xr={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},wr={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},br={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},yr={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},vr={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},kr={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Pr={ordinalNumber:dr({matchPattern:ur,parsePattern:hr,valueCallback:e=>parseInt(e,10)}),era:le({matchPatterns:fr,defaultMatchWidth:"wide",parsePatterns:mr,defaultParseWidth:"any"}),quarter:le({matchPatterns:pr,defaultMatchWidth:"wide",parsePatterns:gr,defaultParseWidth:"any",valueCallback:e=>e+1}),month:le({matchPatterns:xr,defaultMatchWidth:"wide",parsePatterns:wr,defaultParseWidth:"any"}),day:le({matchPatterns:br,defaultMatchWidth:"wide",parsePatterns:yr,defaultParseWidth:"any"}),dayPeriod:le({matchPatterns:vr,defaultMatchWidth:"any",parsePatterns:kr,defaultParseWidth:"any"})},Mr={code:"en-US",formatDistance:Gn,formatLong:Kn,formatRelative:Zn,localize:sr,match:Pr,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Er(e){const t=O(e);return An(t,qn(t))+1}function $r(e){const t=O(e),n=+Pe(t)-+Yn(t);return Math.round(n/wt)+1}function yt(e,t){var p,x,k,P;const n=O(e),r=n.getFullYear(),o=$e(),i=(t==null?void 0:t.firstWeekContainsDate)??((x=(p=t==null?void 0:t.locale)==null?void 0:p.options)==null?void 0:x.firstWeekContainsDate)??o.firstWeekContainsDate??((P=(k=o.locale)==null?void 0:k.options)==null?void 0:P.firstWeekContainsDate)??1,s=U(e,0);s.setFullYear(r+1,0,i),s.setHours(0,0,0,0);const u=fe(s,t),d=U(e,0);d.setFullYear(r,0,i),d.setHours(0,0,0,0);const f=fe(d,t);return n.getTime()>=u.getTime()?r+1:n.getTime()>=f.getTime()?r:r-1}function Sr(e,t){var u,d,f,p;const n=$e(),r=(t==null?void 0:t.firstWeekContainsDate)??((d=(u=t==null?void 0:t.locale)==null?void 0:u.options)==null?void 0:d.firstWeekContainsDate)??n.firstWeekContainsDate??((p=(f=n.locale)==null?void 0:f.options)==null?void 0:p.firstWeekContainsDate)??1,o=yt(e,t),i=U(e,0);return i.setFullYear(o,0,r),i.setHours(0,0,0,0),fe(i,t)}function Tr(e,t){const n=O(e),r=+fe(n,t)-+Sr(n,t);return Math.round(r/wt)+1}function E(e,t){const n=e<0?"-":"",r=Math.abs(e).toString().padStart(t,"0");return n+r}const Q={y(e,t){const n=e.getFullYear(),r=n>0?n:1-n;return E(t==="yy"?r%100:r,t.length)},M(e,t){const n=e.getMonth();return t==="M"?String(n+1):E(n+1,2)},d(e,t){return E(e.getDate(),t.length)},a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(e,t){return E(e.getHours()%12||12,t.length)},H(e,t){return E(e.getHours(),t.length)},m(e,t){return E(e.getMinutes(),t.length)},s(e,t){return E(e.getSeconds(),t.length)},S(e,t){const n=t.length,r=e.getMilliseconds(),o=Math.trunc(r*Math.pow(10,n-3));return E(o,t.length)}},re={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},it={G:function(e,t,n){const r=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if(t==="yo"){const r=e.getFullYear(),o=r>0?r:1-r;return n.ordinalNumber(o,{unit:"year"})}return Q.y(e,t)},Y:function(e,t,n,r){const o=yt(e,r),i=o>0?o:1-o;if(t==="YY"){const s=i%100;return E(s,2)}return t==="Yo"?n.ordinalNumber(i,{unit:"year"}):E(i,t.length)},R:function(e,t){const n=bt(e);return E(n,t.length)},u:function(e,t){const n=e.getFullYear();return E(n,t.length)},Q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return E(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return E(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){const r=e.getMonth();switch(t){case"M":case"MM":return Q.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){const r=e.getMonth();switch(t){case"L":return String(r+1);case"LL":return E(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){const o=Tr(e,r);return t==="wo"?n.ordinalNumber(o,{unit:"week"}):E(o,t.length)},I:function(e,t,n){const r=$r(e);return t==="Io"?n.ordinalNumber(r,{unit:"week"}):E(r,t.length)},d:function(e,t,n){return t==="do"?n.ordinalNumber(e.getDate(),{unit:"date"}):Q.d(e,t)},D:function(e,t,n){const r=Er(e);return t==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):E(r,t.length)},E:function(e,t,n){const r=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){const o=e.getDay(),i=(o-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return E(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});case"eeee":default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){const o=e.getDay(),i=(o-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return E(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});case"cccc":default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(e,t,n){const r=e.getDay(),o=r===0?7:r;switch(t){case"i":return String(o);case"ii":return E(o,t.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){const o=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(e,t,n){const r=e.getHours();let o;switch(r===12?o=re.noon:r===0?o=re.midnight:o=r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(e,t,n){const r=e.getHours();let o;switch(r>=17?o=re.evening:r>=12?o=re.afternoon:r>=4?o=re.morning:o=re.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(e,t,n){if(t==="ho"){let r=e.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return Q.h(e,t)},H:function(e,t,n){return t==="Ho"?n.ordinalNumber(e.getHours(),{unit:"hour"}):Q.H(e,t)},K:function(e,t,n){const r=e.getHours()%12;return t==="Ko"?n.ordinalNumber(r,{unit:"hour"}):E(r,t.length)},k:function(e,t,n){let r=e.getHours();return r===0&&(r=24),t==="ko"?n.ordinalNumber(r,{unit:"hour"}):E(r,t.length)},m:function(e,t,n){return t==="mo"?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):Q.m(e,t)},s:function(e,t,n){return t==="so"?n.ordinalNumber(e.getSeconds(),{unit:"second"}):Q.s(e,t)},S:function(e,t){return Q.S(e,t)},X:function(e,t,n){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(t){case"X":return ct(r);case"XXXX":case"XX":return K(r);case"XXXXX":case"XXX":default:return K(r,":")}},x:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"x":return ct(r);case"xxxx":case"xx":return K(r);case"xxxxx":case"xxx":default:return K(r,":")}},O:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+st(r,":");case"OOOO":default:return"GMT"+K(r,":")}},z:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+st(r,":");case"zzzz":default:return"GMT"+K(r,":")}},t:function(e,t,n){const r=Math.trunc(e.getTime()/1e3);return E(r,t.length)},T:function(e,t,n){const r=e.getTime();return E(r,t.length)}};function st(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),o=Math.trunc(r/60),i=r%60;return i===0?n+String(o):n+String(o)+t+E(i,2)}function ct(e,t){return e%60===0?(e>0?"-":"+")+E(Math.abs(e)/60,2):K(e,t)}function K(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),o=E(Math.trunc(r/60),2),i=E(r%60,2);return n+o+t+i}const lt=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},vt=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},jr=(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],r=n[1],o=n[2];if(!o)return lt(e,t);let i;switch(r){case"P":i=t.dateTime({width:"short"});break;case"PP":i=t.dateTime({width:"medium"});break;case"PPP":i=t.dateTime({width:"long"});break;case"PPPP":default:i=t.dateTime({width:"full"});break}return i.replace("{{date}}",lt(r,t)).replace("{{time}}",vt(o,t))},Dr={p:vt,P:jr},Cr=/^D+$/,Wr=/^Y+$/,Or=["D","DD","YY","YYYY"];function Rr(e){return Cr.test(e)}function Fr(e){return Wr.test(e)}function Nr(e,t,n){const r=zr(e,t,n);if(console.warn(r),Or.includes(e))throw new RangeError(r)}function zr(e,t,n){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Hr=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Lr=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Ar=/^'([^]*?)'?$/,Yr=/''/g,Ir=/[a-zA-Z]/;function kt(e,t,n){var p,x,k,P,g,M,v,w;const r=$e(),o=(n==null?void 0:n.locale)??r.locale??Mr,i=(n==null?void 0:n.firstWeekContainsDate)??((x=(p=n==null?void 0:n.locale)==null?void 0:p.options)==null?void 0:x.firstWeekContainsDate)??r.firstWeekContainsDate??((P=(k=r.locale)==null?void 0:k.options)==null?void 0:P.firstWeekContainsDate)??1,s=(n==null?void 0:n.weekStartsOn)??((M=(g=n==null?void 0:n.locale)==null?void 0:g.options)==null?void 0:M.weekStartsOn)??r.weekStartsOn??((w=(v=r.locale)==null?void 0:v.options)==null?void 0:w.weekStartsOn)??0,u=O(e);if(!Bn(u))throw new RangeError("Invalid time value");let d=t.match(Lr).map(m=>{const h=m[0];if(h==="p"||h==="P"){const b=Dr[h];return b(m,o.formatLong)}return m}).join("").match(Hr).map(m=>{if(m==="''")return{isToken:!1,value:"'"};const h=m[0];if(h==="'")return{isToken:!1,value:Br(m)};if(it[h])return{isToken:!0,value:m};if(h.match(Ir))throw new RangeError("Format string contains an unescaped latin alphabet character `"+h+"`");return{isToken:!1,value:m}});o.localize.preprocessor&&(d=o.localize.preprocessor(u,d));const f={firstWeekContainsDate:i,weekStartsOn:s,locale:o};return d.map(m=>{if(!m.isToken)return m.value;const h=m.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&Fr(h)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&Rr(h))&&Nr(h,t,String(e));const b=it[h[0]];return b(u,h,o.localize,f)}).join("")}function Br(e){const t=e.match(Ar);return t?t[1].replace(Yr,"'"):e}function _r(e,t){const n=O(e),r=O(t);return n.getTime()>r.getTime()}function qr(e,t){const n=O(e),r=O(t);return+n<+r}const Vr=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",...e},l.createElement("title",null,`
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

`,dt=c.button`
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
 
 
`,Kr=({selectedDate:e,setSelectedDate:t,setCurrentMonth:n,setSelectedDay:r})=>{const o=new Date().getMonth(),i=new Date().getFullYear(),s=qr(e,Oe(new Date,-12)),u=_r(e,new Date(i,o,1)),d=kt(e,"MMMM"),f=e.getFullYear(),p=()=>{t(Oe(e,-1)),r(null),n(k=>k-1)},x=()=>{t(Oe(e,1)),r(null),n(k=>k+1)};return a.jsxs(Ur,{children:[a.jsx(dt,{onClick:p,disabled:s,children:a.jsx(Qr,{})}),a.jsx("span",{children:`${d}, ${f}`}),a.jsx(dt,{onClick:x,disabled:u,children:a.jsx(Xr,{})})]})},Jr=c.div`
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
`,Fe=c.li`

span{
  color:${e=>e.theme.colors.primary.accent};

  font-size: 18px;

  font-weight: 500;
  line-height: 1.33;
}

`,to=({selectedDate:e,selectedDayData:t})=>{const n=kt(e,"MMMM"),r=e.getDate(),o=Ee().user.waterRate,i=o?(o/1e3).toFixed(1):"0",s=t?(t.waterRate/1e3).toFixed(1):i,u=t?t.percentagePerDay:"0",d=t?t.totalPortions:"0";return a.jsxs(Jr,{children:[a.jsxs(Zr,{children:[" ",r,", ",n]}),a.jsxs(eo,{children:[a.jsxs(Fe,{children:["Daily Norma: ",a.jsxs("span",{children:[s," L"]})]}),a.jsxs(Fe,{children:["Fulfillment of the daily norm: ",a.jsxs("span",{children:[u,"%"]})]}),a.jsxs(Fe,{children:["How many servings of water: ",a.jsx("span",{children:d})]})]})]})},no=c.div`
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
`,io=c.div`
  width: 34px;
  height: 34px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${e=>e.theme.colors.primary.bg};

  border: 2px solid
    ${({theme:e,percentage:t})=>t<100?e.colors.secondary.color4:e.colors.primary.bg};
`,so=c.p`
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
`,lo=e=>e.water.waterDayList,uo=e=>e.water.waterMonthList,ho=e=>e.water.waterRate,me=()=>{const e=De(lo),t=De(uo),n=De(ho);return{waterDayList:e,waterMonthList:t,waterRate:n}},fo=()=>{const[e,t]=l.useState(new Date),[n,r]=l.useState(e.getMonth()),[o,i]=l.useState(null),[s,u]=l.useState(null),d=ge(),f=me().waterMonthList,p=me().waterDayList,x=Ee().user.waterRate,k=()=>{u(null)},P=!!s,g=P?"simple-popover":void 0;l.useEffect(()=>{const w=at(e),m=ot(e);o===null&&d(zt({startDate:w,endDate:m}))},[n,d,e,o,p]);const M=(w,m)=>{t(m),u(w.currentTarget),i(m.getDate())},v=f&&f.find(w=>{const[m]=w.date.split(",");return parseInt(m)===e.getDate()});return a.jsxs(no,{children:[a.jsxs(ro,{children:[a.jsx("h3",{children:"Month"}),a.jsx(Kr,{selectedDate:e,setSelectedDate:t,setCurrentMonth:r,setSelectedDay:i})]}),a.jsx(oo,{children:_n({start:at(e),end:ot(e)}).map((w,m)=>{const h=w.getDate();console.log("monthData",f);const b=f.find(C=>{const[F]=C.date.split(",");return parseInt(F)===h}),y=b?b.totalWaterDrunk:0,W=x?Math.round(y/x*100):0;return a.jsxs(ao,{onClick:C=>M(C,w),children:[a.jsx(io,{percentage:W,children:a.jsx(so,{children:h})}),a.jsxs(co,{children:[W||0,"%"]})]},m)})}),a.jsx(zn,{id:g,open:P,anchorEl:s,onClose:k,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"bottom",horizontal:"right"},children:a.jsx(to,{selectedDate:e,selectedDayData:v})})]})},mo="/Smart-Foxes-WaterTracker/assets/botleHomeDesk-3ae51194.png",po="/Smart-Foxes-WaterTracker/assets/botlteHomeDesk2x-9a54d3e4.png",go="/Smart-Foxes-WaterTracker/assets/bottleHomeTab-0bf3952c.png",xo="/Smart-Foxes-WaterTracker/assets/bottleHomeTab2x-ed4a96a1.png",wo="/Smart-Foxes-WaterTracker/assets/backgroundHomeMob-d1e9a558.png",bo="/Smart-Foxes-WaterTracker/assets/backgroundHomeMob2x-089f92e0.png",yo="/Smart-Foxes-WaterTracker/assets/bottleHomeMob-1cd9cdb8.png",vo="/Smart-Foxes-WaterTracker/assets/bottleHomeMob2x-0e2d77ce.png",ko=c.main`
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
        url(${wo}) 1x,
        url(${bo}) 2x
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
        url(${mo}) 1x,
        url(${po}) 2x
      ),
      image-set(
        url(${Bt}) 1x,
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


`,ve=(e,t=!1)=>{const n=new Date(e);let r=n.getHours();const o=n.getMinutes();let i="";if(t){const s=r>=12?"PM":"AM";r=r%12,r=r||12,i=`${r.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")} ${s}`}else i=`${r.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")}`;return i},Eo=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",...e},l.createElement("title",null,"glass_26"),l.createElement("path",{fill:"#407bff",d:"M5.565 2.783l1.901 26.363v0.072h16.367l1.901-26.353v-0.082h-20.169zM23.16 28.479h-15.017l-1.426-19.747h0.784l1.289 17.403c0.008 0.092 0.049 0.177 0.115 0.24s0.153 0.098 0.244 0.099h0.030c0.047-0.003 0.093-0.016 0.136-0.037s0.080-0.051 0.111-0.087c0.031-0.036 0.055-0.078 0.070-0.124s0.021-0.094 0.017-0.141l-1.289-17.351h16.362l-1.426 19.747zM24.637 7.994h-16.468l-0.283-3.847c-0.009-0.094-0.052-0.181-0.122-0.244s-0.16-0.097-0.252-0.095c-0.095 0.009-0.183 0.055-0.245 0.129s-0.094 0.169-0.088 0.266l0.283 3.795h-0.794l-0.324-4.483h18.617l-0.324 4.478z"}),l.createElement("path",{fill:"#407bff",d:"M11.359 12.384c0.236 0 0.467-0.071 0.663-0.204s0.349-0.322 0.439-0.543c0.090-0.221 0.114-0.465 0.068-0.699s-0.16-0.45-0.327-0.62c-0.167-0.169-0.38-0.285-0.611-0.331s-0.471-0.023-0.689 0.069c-0.218 0.092-0.404 0.247-0.536 0.446s-0.201 0.433-0.201 0.672c0 0.321 0.126 0.629 0.35 0.856s0.527 0.355 0.844 0.355zM11.359 10.697c0.093 0 0.184 0.028 0.261 0.080s0.138 0.127 0.173 0.214c0.036 0.087 0.045 0.183 0.027 0.276s-0.063 0.178-0.129 0.244c-0.066 0.067-0.15 0.112-0.241 0.131s-0.186 0.009-0.272-0.027c-0.086-0.036-0.159-0.097-0.211-0.176s-0.079-0.171-0.079-0.265c0-0.127 0.050-0.248 0.138-0.337s0.208-0.14 0.332-0.14z"}),l.createElement("path",{fill:"#407bff",d:"M11.354 16.318c0.003 0.239 0.076 0.472 0.209 0.669s0.321 0.35 0.539 0.439 0.458 0.111 0.689 0.062c0.231-0.049 0.442-0.166 0.607-0.336s0.277-0.387 0.321-0.621 0.019-0.477-0.072-0.698c-0.091-0.22-0.245-0.408-0.442-0.54s-0.427-0.201-0.663-0.2c-0.158 0.001-0.313 0.033-0.459 0.095s-0.277 0.153-0.387 0.267-0.198 0.249-0.256 0.397c-0.059 0.148-0.088 0.307-0.086 0.467zM13.013 16.318c0 0.094-0.028 0.187-0.079 0.265s-0.125 0.14-0.211 0.176c-0.086 0.036-0.18 0.046-0.272 0.027s-0.175-0.064-0.241-0.131-0.111-0.152-0.129-0.244c-0.018-0.093-0.009-0.188 0.027-0.276s0.096-0.162 0.173-0.214 0.168-0.080 0.261-0.080c0.125 0 0.244 0.050 0.333 0.14s0.138 0.211 0.138 0.337z"}),l.createElement("path",{fill:"#407bff",d:"M19.834 16.349c0.236 0 0.467-0.071 0.663-0.204s0.349-0.322 0.439-0.543c0.090-0.221 0.114-0.465 0.068-0.699s-0.16-0.45-0.327-0.62c-0.167-0.169-0.379-0.285-0.611-0.331s-0.471-0.023-0.689 0.069c-0.218 0.092-0.404 0.247-0.535 0.446s-0.201 0.433-0.201 0.672c0 0.321 0.126 0.629 0.349 0.856s0.527 0.355 0.844 0.355zM19.834 14.666c0.093 0 0.184 0.028 0.262 0.081s0.138 0.127 0.173 0.215c0.035 0.088 0.044 0.184 0.026 0.276s-0.064 0.178-0.13 0.244c-0.066 0.066-0.151 0.111-0.242 0.129s-0.186 0.008-0.272-0.029-0.159-0.099-0.21-0.178c-0.051-0.079-0.078-0.172-0.077-0.266 0.001-0.126 0.051-0.246 0.14-0.334s0.207-0.138 0.331-0.138z"}),l.createElement("path",{fill:"#407bff",d:"M15.677 14.066c0.236 0 0.467-0.071 0.663-0.204s0.349-0.322 0.439-0.543c0.090-0.221 0.114-0.464 0.068-0.699s-0.16-0.45-0.327-0.62c-0.167-0.169-0.38-0.285-0.611-0.331s-0.471-0.023-0.689 0.069c-0.218 0.092-0.404 0.247-0.536 0.446s-0.201 0.433-0.201 0.672c0 0.321 0.126 0.629 0.35 0.856s0.527 0.354 0.844 0.354zM15.677 12.379c0.093 0 0.184 0.028 0.261 0.080s0.138 0.127 0.173 0.214c0.036 0.087 0.045 0.183 0.027 0.276s-0.063 0.177-0.129 0.244c-0.066 0.067-0.15 0.112-0.241 0.131s-0.186 0.009-0.272-0.027-0.159-0.097-0.211-0.176c-0.052-0.079-0.079-0.171-0.079-0.265-0.003-0.065 0.006-0.129 0.028-0.19s0.056-0.116 0.1-0.164c0.044-0.047 0.097-0.084 0.156-0.11s0.122-0.039 0.186-0.039v0.026z"}),l.createElement("path",{fill:"#407bff",d:"M13.402 20.929c0.005 0.197 0.067 0.387 0.178 0.548s0.267 0.285 0.447 0.357c0.181 0.072 0.378 0.088 0.568 0.047s0.363-0.139 0.498-0.279c0.135-0.141 0.227-0.319 0.263-0.512s0.015-0.393-0.060-0.574c-0.075-0.181-0.202-0.336-0.363-0.445s-0.351-0.167-0.545-0.167c-0.264 0.007-0.514 0.118-0.699 0.309s-0.287 0.449-0.287 0.716zM14.388 20.662c0.052 0 0.103 0.016 0.146 0.045s0.077 0.071 0.097 0.12 0.025 0.102 0.015 0.154c-0.010 0.052-0.035 0.099-0.072 0.137s-0.084 0.063-0.135 0.073c-0.051 0.010-0.104 0.005-0.152-0.015s-0.089-0.054-0.118-0.098c-0.029-0.044-0.044-0.096-0.044-0.148 0-0.071 0.028-0.139 0.077-0.189s0.116-0.078 0.186-0.078z"}),l.createElement("path",{fill:"#407bff",d:"M18.17 19.816c0.202 0.007 0.402-0.048 0.574-0.157s0.306-0.269 0.388-0.457c0.081-0.188 0.105-0.397 0.068-0.599s-0.133-0.388-0.275-0.534c-0.143-0.146-0.325-0.245-0.524-0.285s-0.405-0.018-0.591 0.063c-0.186 0.081-0.345 0.216-0.454 0.389s-0.166 0.375-0.161 0.58c0.006 0.262 0.111 0.511 0.292 0.697s0.426 0.295 0.684 0.304zM18.17 18.549c0.070 0 0.137 0.028 0.186 0.078s0.077 0.118 0.077 0.189c0 0.071-0.028 0.139-0.077 0.189s-0.116 0.078-0.186 0.078c-0.070 0-0.138-0.028-0.188-0.078s-0.079-0.118-0.080-0.189c0-0.035 0.007-0.071 0.020-0.103s0.033-0.062 0.058-0.087 0.055-0.044 0.087-0.057c0.032-0.013 0.067-0.019 0.102-0.019z"}),l.createElement("path",{fill:"#407bff",d:"M20.253 11.538c0.2 0 0.395-0.060 0.562-0.173s0.296-0.273 0.372-0.46c0.077-0.187 0.097-0.394 0.058-0.593s-0.135-0.382-0.277-0.525c-0.141-0.143-0.322-0.241-0.518-0.281s-0.399-0.019-0.584 0.058c-0.185 0.078-0.343 0.209-0.454 0.378s-0.17 0.367-0.17 0.57c0 0.272 0.107 0.533 0.296 0.725s0.447 0.3 0.715 0.3zM20.253 10.271c0.039-0.011 0.080-0.013 0.12-0.006s0.078 0.024 0.11 0.049c0.032 0.025 0.059 0.057 0.077 0.094s0.028 0.078 0.028 0.119-0.009 0.082-0.028 0.119c-0.018 0.037-0.044 0.069-0.077 0.094s-0.070 0.042-0.11 0.049c-0.040 0.008-0.081 0.006-0.12-0.006-0.039 0.011-0.080 0.013-0.12 0.006s-0.078-0.024-0.11-0.049c-0.032-0.025-0.059-0.057-0.077-0.094s-0.028-0.078-0.028-0.119 0.009-0.082 0.028-0.119c0.018-0.037 0.044-0.069 0.077-0.094s0.070-0.042 0.11-0.049c0.040-0.008 0.081-0.006 0.12 0.006z"}),l.createElement("path",{fill:"#407bff",d:"M10.369 27.191c-0.045 0.021-0.086 0.052-0.119 0.089s-0.059 0.082-0.074 0.13c-0.016 0.048-0.021 0.099-0.017 0.149s0.019 0.099 0.043 0.144c0.031 0.060 0.078 0.11 0.135 0.145s0.122 0.054 0.189 0.055c0.056 0.002 0.112-0.011 0.162-0.036 1.545-0.803 3.255-1.225 4.99-1.231 1.837 0.027 3.648 0.441 5.319 1.215 0.066 0.035 0.141 0.049 0.215 0.039s0.143-0.042 0.198-0.093c0.055-0.051 0.094-0.118 0.11-0.192s0.010-0.151-0.018-0.221c-0.036-0.091-0.105-0.164-0.192-0.205-1.769-0.821-3.687-1.258-5.633-1.282-1.845 0.002-3.664 0.444-5.309 1.292z"})),$o=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:1024,height:1024,viewBox:"0 0 1024 1024",...e},l.createElement("title",null,"edit"),l.createElement("path",{fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:4,strokeWidth:42.6667,d:"M719.445 191.445l71.979-72.021c14.479-14.479 34.482-23.435 56.576-23.435 44.189 0 80.011 35.822 80.011 80.011 0 22.094-8.955 42.097-23.435 56.576l-453.077 453.077c-21.936 21.924-49.153 38.567-79.579 47.856l-1.36 0.357-114.56 34.133 34.133-114.56c9.647-31.785 26.289-59.002 48.214-80.94l381.098-381.055zM719.445 191.445l112.555 112.555M768 597.333v202.667c0 53.019-42.981 96-96 96v0h-448c-53.019 0-96-42.981-96-96v0-448c0-53.019 42.981-96 96-96v0h202.667"})),So=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:1024,height:1024,viewBox:"0 0 1024 1024",...e},l.createElement("title",null,"delete"),l.createElement("path",{fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:4,strokeWidth:42.6667,d:"M628.907 384l-14.763 384M409.856 768l-14.763-384M820.395 247.040c14.592 2.219 29.099 4.565 43.605 7.083M820.395 247.040l-45.568 592.341c-3.952 49.747-45.294 88.619-95.716 88.619-0.010 0-0.020 0-0.030 0h-334.164c-0.008 0-0.018 0-0.028 0-50.422 0-91.764-38.872-95.694-88.283l-0.021-0.336-45.568-592.341M820.395 247.040c-38.791-6.358-89.724-12.366-141.193-16.476l-7.202-0.463M203.605 247.040c-25.242 3.599-40.074 6.065-54.844 8.706l11.239-1.666M203.605 247.040c38.789-6.358 89.722-12.366 141.19-16.476l7.205-0.463M672 230.101v-39.083c0-50.347-38.827-92.331-89.173-93.909-21.11-0.721-45.921-1.132-70.827-1.132-24.908 0-49.719 0.411-74.428 1.226l3.602-0.094c-50.347 1.579-89.173 43.605-89.173 93.909v39.083M672 230.101c-47.901-3.932-103.689-6.173-160-6.173-56.31 0-112.097 2.241-167.276 6.64l7.276-0.466"})),To=e=>l.createElement("svg",{fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:4,strokeWidth:42.6667,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...e},l.createElement("path",{d:"M512 256v512M768 512h-512"})),jo=c.div`
  
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
  
`,Co=c($o)`
  stroke:  ${e=>e.theme.colors.secondary.color3};
  width: 16px;
  height: 16px;
`,Wo=c(So)`
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
    
  }`,$t=c(To)`
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
    ${$t} {
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
`,Yo=({id:e})=>{const{closeModal:t}=l.useContext(xe),n=ge(),r=async()=>{await n(Ht(e)),t(),n(Ye())};return a.jsxs(zo,{children:[a.jsx("h3",{children:"Delete entry"}),a.jsx("p",{children:"Are you sure you want to delete the entry?"}),a.jsxs(Ho,{children:[a.jsx(Lo,{type:"button",onClick:()=>t(),children:"Cancel"}),a.jsx(Ao,{type:"submit",onClick:r,children:"Delete"})]})]})};function Io(e){return xt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.75 4.5a.75.75 0 0 1 .75.75V11h5.75a.75.75 0 0 1 0 1.5H12.5v5.75a.75.75 0 0 1-1.5 0V12.5H5.25a.75.75 0 0 1 0-1.5H11V5.25a.75.75 0 0 1 .75-.75Z"},child:[]}]})(e)}const Bo=c.div`
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
`,_o=c.h3`
  font-size: 26px;
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 32px;
  width: 100%;
`,qo=c.span`
  font-size: 18px;
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 20px;
  margin-bottom: 16px;
`,Vo=c.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,Go=c.label`
  display: flex;
  justify-content: flex-start;
  gap: 12px;
  flex-direction: column;
  width: 100%;
`,Uo=c.div`
  display: flex;
  flex-direction: row;
  gap: 7px;
  width: 100%;
`,Qo=c.span`
  font-size: 16px;
  font-weight: ${e=>e.theme.fontWeights.regular};
  line-height: 20px;
`,Xo=c.label`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`,Ko=c.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: ${e=>e.theme.colors.primary.text};
`,Jo=c.input`
  padding: 12px 10px;
  border-radius: 6px;
  border: 1px solid ${e=>e.theme.colors.secondary.color5};
`,Zo=c.label`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
`,ea=c.span`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  color: ${e=>e.theme.colors.primary.text};
`,ta=c.input`
  padding: 12px 10px;
  border-radius: 6px;
  border: 1px solid ${e=>e.theme.colors.secondary.color5};
`,na=c.div`
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
`,aa=c(Io)`
  fill: ${e=>e.theme.colors.primary.accent};
  stroke: ${e=>e.theme.colors.primary.accent};
  width: 16px;
  height: 16px;

  @media (min-width: ${({theme:e})=>e.screens.tab}) {
    width: 24px;
    height: 24px;
  }
`,ia=c(Lt)`
  fill: ${e=>e.theme.colors.primary.accent};
  stroke: ${e=>e.theme.colors.primary.accent};
  width: 16px;
  height: 16px;

  @media (min-width: ${({theme:e})=>e.screens.tab}) {
    width: 24px;
    height: 24px;
  }
`,sa=c.span`
  font-size: 18px;
  font-weight: ${e=>e.theme.fontWeights.bolt};
  line-height: 24px;
  text-align: center;
  color: ${e=>e.theme.colors.primary.accent};
`;function ca(e){const t=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return`${t}-${n}-${r}`}const St=({portion:e})=>{const t=ge(),[n,r]=l.useState(e?e.waterVolume:0),[o,i]=l.useState(ve(e?e.dateAdded:new Date)),{closeModal:s}=l.useContext(xe),{waterDayList:u}=me(),d=u,f=g=>{const M=parseFloat(g.target.value);if(M>3e3){alert("не більше 3000 мл");return}r(M)},p=g=>{switch(g.currentTarget.id){case"increment":r(M=>M+50);break;case"decrement":r(M=>M>0?M-50:0);break}},x=async g=>{g.preventDefault();const w=ca(new Date)+"T"+o,m=new Date(w).toISOString();if(e){const h={id:e._id,date:m,waterVolume:n};await t(At(h)),s(),t(Ye())}else{if(d?d.find(y=>{y.dateAdded}):m){alert("Не можна в один той самий час"),i("");return}const b={waterVolume:n,date:m};try{if(!(await t(Yt(b))).error)s(),r(0),i("");else throw new Error}catch(y){console.error(y),alert("Something went wrong"),s()}}},k=e?"Edit the entered amount of water":"Add water",P=e?"Correct entered data: ":"Choose a value:";return a.jsxs(Bo,{children:[a.jsxs(_o,{children:[" ",k]}),e&&a.jsxs(Pt,{children:[a.jsx(Et,{}),a.jsxs(Mt,{children:["$",e.waterVolume," ml"]}),a.jsx("span",{children:ve(e.dateAdded,!0)})]}),a.jsxs(Vo,{children:[a.jsx(qo,{children:P}),a.jsxs(Go,{children:[a.jsx(Qo,{children:"Amount of water:"}),a.jsxs(Uo,{children:[a.jsx(ut,{onClick:p,id:"decrement",children:a.jsx(ia,{})}),a.jsxs(ra,{children:[" ",n||0," ml"]}),a.jsx(ut,{onClick:p,id:"increment",children:a.jsx(aa,{})})]})]})]}),a.jsxs(Xo,{children:[a.jsx(Ko,{children:"Recording time:"}),a.jsx(Jo,{type:"time",value:o,onChange:g=>i(g.target.value)})]}),a.jsxs(Zo,{children:[a.jsx(ea,{children:"Enter the value of the water used:"}),a.jsx(ta,{type:"number",value:n,onChange:f,placeholder:"0"})]}),a.jsxs(na,{children:[a.jsxs(sa,{children:[" ",n||0," ml"]}),a.jsx(oa,{onClick:x,children:"Save"})]})]})},la=({handleAddWaterClick:e})=>{const{openModal:t}=l.useContext(xe),n=me().waterDayList,r=ge();l.useEffect(()=>{r(Ye())},[r]);const o=s=>{t(a.jsx(a.Fragment,{children:a.jsx(Yo,{id:s})}))},i=s=>{t(a.jsx(a.Fragment,{children:a.jsx(St,{portion:s})}))};return a.jsxs(jo,{children:[a.jsx("h3",{children:"Today"}),n&&n.length>0&&a.jsx(Do,{children:n.map(s=>a.jsxs("li",{children:[a.jsxs(Pt,{children:[a.jsx(Et,{}),a.jsx(Mt,{children:`${s.waterVolume} ml `}),a.jsx("span",{children:ve(s.dateAdded,!0)})]}),a.jsxs(Oo,{children:[a.jsx(Ro,{onClick:()=>i(s),children:a.jsx(Co,{})}),a.jsx(Fo,{onClick:()=>o(s._id),children:a.jsx(Wo,{})})]})]},s._id))}),a.jsxs(No,{onClick:e,children:[a.jsx($t,{})," Add water"]})]})},da=c.div`
  padding: 8px 20px 8px 20px;
  border: 1px solid;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 164px;
  margin-top: 30px;
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
`,ma=c.p`
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  color: ${e=>e.theme.colors.primary.accent};
`,pa=c.div`
  width: 256px;
  @media (min-width: ${({theme:e})=>e.screens.tab}) {
    width: 656px;
  }
  @media (min-width: ${({theme:e})=>e.screens.desk}) {
    width: 544px;
  }
`,ga=c.h2`
  font-size: 26px;
  font-weight: 500;
  line-height: 32px;
  color: ${e=>e.theme.colors.primary.text};
`,xa=c.div`
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
`,wa=c.p`
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
`,ht=c.span`
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  color: ${e=>e.theme.colors.primary.accent};
`,ba=c.div`
  width: 256px;
  border: 1px solid;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 24px;
  border-color: ${e=>e.theme.colors.secondary.color5};
  @media (min-width: ${({theme:e})=>e.screens.tab}) {
    width: 100%;
  }
`,ya=c.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #8f8f8f;
`,va=c.span`
  color: ${e=>e.theme.colors.primary.accent};
`,ka=c.form`
  display: flex;
  flex-direction: column;
`,ft=c.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  color: ${e=>e.theme.colors.primary.text};
`,mt=c.label`
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
`,gt=c.label`
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
`,Ne=c.input`
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
`,$a=c.button`
  border-radius: 10px;
  padding: 10px 30px;
  width: 100%;
  color: ${e=>e.theme.colors.primary.bg};
  background-color: ${e=>e.theme.colors.primary.accent};
  @media (min-width: ${({theme:e})=>e.screens.tab}) {
    width: 160px;
  }
`,Sa=c.div`
  width: 100%;
  display: flex;
  justify-content: end;
  @media (min-width: ${({theme:e})=>e.screens.tab}) {
    width: 100%;
  }
  @media (min-width: ${({theme:e})=>e.screens.desk}) {
    width: 100%;
  }
`,Ta=c.div`
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
`,ja=c.span`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: ${e=>e.theme.colors.primary.accent};
`;c.svg`
  background-color:;
`;const Da=()=>{const e=ge(),{user:t}=Ee(),n={weight:.03,activity:.04},r={weight:.04,activity:.06},[o,i]=l.useState(r),[s,u]=l.useState(""),[d,f]=l.useState(""),[p,x]=l.useState(""),k=t.waterRate,{closeModal:P}=l.useContext(xe),g=l.useCallback(()=>!s||!d?void 0:(s*o.weight+d/60*o.activity).toFixed(1),[o,s,d]),M=l.useMemo(()=>g(),[g]),v=m=>{const h=m.target.value,b=parseFloat(h);!isNaN(b)&&b>=1?x(b):h===""&&x("")},w=m=>{m.preventDefault();const h=parseFloat(M);if(!(d>0&&s>0||p>0)){alert("Fill all fields");return}e(It(p||h)).then(y=>{y.error?(console.log(y.error),alert("Something went wrong ")):(P(),u(""),f(""),x(""))})};return a.jsxs(pa,{children:[a.jsx(Ta,{children:a.jsx(ga,{children:"My daily norma"})}),a.jsxs(xa,{children:[a.jsxs(oe,{children:["For girl: ",a.jsx(ht,{children:"V=(M*0,03) + (T*0,4)"})]}),a.jsxs(oe,{children:["For man: ",a.jsx(ht,{children:"V=(M*0,04) + (T*0,6)"})]})]}),a.jsx(ba,{children:a.jsxs(ya,{children:[a.jsx(va,{children:"*"})," V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]})}),a.jsxs(ka,{children:[a.jsxs(Ma,{children:[a.jsx(ft,{children:"Calculate your rate:"}),a.jsxs(Pa,{children:[a.jsxs(mt,{children:[a.jsx(pt,{type:"radio",name:"gender",value:"woman",onChange:()=>i(n),checked:!0}),a.jsx(oe,{children:"For woman"})]}),a.jsxs(mt,{children:[a.jsx(pt,{type:"radio",name:"gender",value:"man",onChange:()=>i(r)}),a.jsx(oe,{children:"For man"})]})]}),a.jsxs(gt,{children:[a.jsx(oe,{children:"Your weight in kilograms:"}),a.jsx(Ne,{type:"number",name:"userWeight",placeholder:"0",value:s,min:0,max:250,onChange:m=>u(m.target.value)})]}),a.jsxs(gt,{children:[a.jsx(oe,{children:"The time of active participation in sports or other activities with a high physical. load in hours:"}),a.jsx(Ne,{type:"number",name:"userActive",placeholder:"0",value:d,min:0,onChange:m=>f(m.target.value)})]}),a.jsxs(wa,{children:["The required amount of water in liters per day:",a.jsxs(ja,{children:[" ",M||(k/1e3).toFixed(1)," L"]})]})]}),a.jsxs(Ea,{children:[a.jsx(ft,{children:"Write down how much water you will drink:"}),a.jsx(Ne,{type:"number",name:"userWaterPredict",placeholder:"0",value:p,min:0,onChange:v})]}),a.jsx(Sa,{children:a.jsx($a,{onClick:w,children:"Save"})})]})]})},Ca=({handleDailyNormaModal:e})=>{const{user:t}=Ee(),n=t.waterRate,r=(n/1e3).toFixed(1);return a.jsxs(da,{children:[a.jsx(ha,{children:"My daily norma"}),a.jsxs(ua,{children:[a.jsxs(ma,{children:[r||n," L"]}),a.jsx(fa,{onClick:e,children:"Edit"})]})]})};function Wa(e){return xt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Circle_Plus"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M15,12.5H12.5V15a.5.5,0,0,1-1,0V12.5H9a.5.5,0,0,1,0-1h2.5V9a.5.5,0,0,1,1,0v2.5H15A.5.5,0,0,1,15,12.5Z"},child:[]},{tag:"path",attr:{d:"M12,21.932A9.934,9.934,0,1,1,21.932,12,9.944,9.944,0,0,1,12,21.932ZM12,3.065A8.934,8.934,0,1,0,20.932,12,8.944,8.944,0,0,0,12,3.065Z"},child:[]}]}]}]})(e)}const Oa=c.input`
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
`,Ra=c.div`
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
    margin-left: 70px;
  }
`,Fa=c.div`
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
`,Na=c.span`
  font-size: 18px;
  position: absolute;
  top: 0;
  left: 0;
  font-weight: ${e=>e.theme.fontWeights.regular};
  line-height: 24px;
  color: ${e=>e.theme.colors.primary.accent};
`,Tt=c(Wa)`
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
    ${Tt} {
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
`,Ha=({handleAddWaterClick:e,calcRange:t})=>a.jsxs(Ra,{children:[a.jsxs(Fa,{children:[a.jsx(Na,{children:"Today"}),a.jsx(Oa,{type:"range",min:"0",max:"100",value:t||0,readOnly:!0})]}),a.jsxs(za,{onClick:e,children:[a.jsx(Tt,{})," Add water"]})]}),Ia=()=>{const{openModal:e}=l.useContext(xe),n=me().waterDayList.map(s=>s.percentage);let r=0;n.forEach(s=>{r+=s});const o=()=>{e(a.jsx(a.Fragment,{children:a.jsx(St,{})}))},i=()=>{e(a.jsx(a.Fragment,{children:a.jsx(Da,{})}))};return a.jsxs(ko,{children:[a.jsxs(Po,{children:[a.jsx(Ca,{handleDailyNormaModal:i}),a.jsx(Ha,{handleAddWaterClick:o,calcRange:r})]}),a.jsxs(Mo,{children:[a.jsx(la,{handleAddWaterClick:o}),a.jsx(fo,{})]})]})};export{Ia as default};
