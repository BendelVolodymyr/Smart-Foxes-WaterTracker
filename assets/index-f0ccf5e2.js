import{ae as r}from"./index-be0db169.js";async function n(t,o=!0){await t.addInteractor("particlesCollisions",async a=>{const{Collider:i}=await r(()=>import("./Collider-7a494559.js"),["assets/Collider-7a494559.js","assets/index-be0db169.js","assets/index-27f4df30.css","assets/ParticlesInteractorBase-7b2895e9.js"]);return new i(a)},o)}export{n as loadParticlesCollisionsInteraction};