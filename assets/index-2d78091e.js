import{ai as i}from"./index-64a8f26e.js";async function n(a,o=!0){const{PolygonDrawer:t}=await i(()=>import("./PolygonDrawer-56e2c6ad.js"),["assets/PolygonDrawer-56e2c6ad.js","assets/PolygonDrawerBase-9ab643f2.js","assets/index-64a8f26e.js","assets/index-27f4df30.css"]);await a.addShape("polygon",new t,o)}async function e(a,o=!0){const{TriangleDrawer:t}=await i(()=>import("./TriangleDrawer-98b08f6a.js"),["assets/TriangleDrawer-98b08f6a.js","assets/PolygonDrawerBase-9ab643f2.js","assets/index-64a8f26e.js","assets/index-27f4df30.css"]);await a.addShape("triangle",new t,o)}async function _(a,o=!0){await n(a,o),await e(a,o)}export{n as loadGenericPolygonShape,_ as loadPolygonShape,e as loadTriangleShape};