import{ai as o}from"./index-472f4847.js";async function i(t,a=!0){await t.addParticleUpdater("outModes",async e=>{const{OutOfCanvasUpdater:r}=await o(()=>import("./OutOfCanvasUpdater-354265e8.js"),["assets/OutOfCanvasUpdater-354265e8.js","assets/index-472f4847.js","assets/index-27f4df30.css"]);return new r(e)},a)}export{i as loadOutModesUpdater};
