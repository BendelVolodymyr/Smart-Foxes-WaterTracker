import{ae as e}from"./index-d2e97db7.js";class a{constructor(){this.factor=3,this.radius=200}load(r){r&&(r.factor!==void 0&&(this.factor=r.factor),r.radius!==void 0&&(this.radius=r.radius))}}async function s(t,r=!0){await t.addInteractor("externalSlow",async o=>{const{Slower:i}=await e(()=>import("./Slower-bc526f6b.js"),["assets/Slower-bc526f6b.js","assets/ExternalInteractorBase-029fb1b6.js","assets/index-d2e97db7.js","assets/index-27f4df30.css"]);return new i(o)},r)}export{a as Slow,s as loadExternalSlowInteraction};
