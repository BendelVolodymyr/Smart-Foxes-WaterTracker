import{af as i}from"./index-e979ca77.js";async function d(a,t=!0){await a.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-c86d8a19.js"),["assets/LifeUpdater-c86d8a19.js","assets/ValueWithRandom-948fbb8a.js","assets/index-e979ca77.js","assets/index-27f4df30.css"]);return new r(e)},t)}export{d as loadLifeUpdater};