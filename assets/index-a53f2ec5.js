import{ai as i}from"./index-472f4847.js";async function d(a,t=!0){await a.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-10039beb.js"),["assets/LifeUpdater-10039beb.js","assets/ValueWithRandom-f967954b.js","assets/index-472f4847.js","assets/index-27f4df30.css"]);return new r(e)},t)}export{d as loadLifeUpdater};
