import{ae as o}from"./index-1f9f4496.js";async function i(t,a=!0){await t.addParticleUpdater("outModes",async e=>{const{OutOfCanvasUpdater:r}=await o(()=>import("./OutOfCanvasUpdater-52624e38.js"),["assets/OutOfCanvasUpdater-52624e38.js","assets/index-1f9f4496.js","assets/index-27f4df30.css"]);return new r(e)},a)}export{i as loadOutModesUpdater};