import{ae as i}from"./index-7ab02d04.js";async function d(a,e=!0){await a.addParticleUpdater("life",async t=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-3720e346.js"),["assets/LifeUpdater-3720e346.js","assets/ValueWithRandom-c9fc7c67.js","assets/index-7ab02d04.js","assets/index-27f4df30.css"]);return new r(t)},e)}export{d as loadLifeUpdater};
