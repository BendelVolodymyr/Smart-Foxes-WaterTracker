import{ah as o,ae as r}from"./index-d6ade683.js";class s{constructor(){this.quantity=2}load(t){if(!t)return;const e=t.quantity;e!==void 0&&(this.quantity=o(e))}}async function u(a,t=!0){await a.addInteractor("externalRemove",async e=>{const{Remover:n}=await r(()=>import("./Remover-d204b838.js"),["assets/Remover-d204b838.js","assets/ExternalInteractorBase-029fb1b6.js","assets/index-d6ade683.js","assets/index-27f4df30.css"]);return new n(e)},t)}export{s as Remove,u as loadExternalRemoveInteraction};
