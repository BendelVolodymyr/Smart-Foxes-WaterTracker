import{af as n}from"./index-4b29140d.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-9ccbf749.js"),["assets/PolygonDrawer-9ccbf749.js","assets/PolygonDrawerBase-a71d2776.js","assets/index-4b29140d.js","assets/index-27f4df30.css"]);await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-f7842bdd.js"),["assets/TriangleDrawer-f7842bdd.js","assets/PolygonDrawerBase-a71d2776.js","assets/index-4b29140d.js","assets/index-27f4df30.css"]);await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
