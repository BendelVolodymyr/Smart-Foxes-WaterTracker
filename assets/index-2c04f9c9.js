import{af as i}from"./index-dd6c2401.js";async function d(a,t=!0){await a.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-c65eb2f3.js"),["assets/LifeUpdater-c65eb2f3.js","assets/ValueWithRandom-45592c5f.js","assets/index-dd6c2401.js","assets/index-27f4df30.css"]);return new r(e)},t)}export{d as loadLifeUpdater};
