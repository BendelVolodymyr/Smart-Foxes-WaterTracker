import{af as e}from"./index-e979ca77.js";async function i(r,a=!0){await r.addParticleUpdater("color",async o=>{const{ColorUpdater:t}=await e(()=>import("./ColorUpdater-609a6dc8.js"),["assets/ColorUpdater-609a6dc8.js","assets/index-e979ca77.js","assets/index-27f4df30.css"]);return new t(o)},a)}export{i as loadColorUpdater};