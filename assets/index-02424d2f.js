import{ae as o}from"./index-825e5c28.js";class c{constructor(){this.distance=200}load(e){e&&e.distance!==void 0&&(this.distance=e.distance)}}async function i(n,e=!0){await n.addInteractor("externalBounce",async t=>{const{Bouncer:r}=await o(()=>import("./Bouncer-8ec8a0c8.js"),["assets/Bouncer-8ec8a0c8.js","assets/index-825e5c28.js","assets/index-27f4df30.css","assets/Ranges-305747af.js","assets/ExternalInteractorBase-029fb1b6.js"]);return new r(t)},e)}export{c as Bounce,i as loadExternalBounceInteraction};