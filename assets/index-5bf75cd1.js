import{ae as e}from"./index-825e5c28.js";async function n(a,o=!0){const{PolygonDrawer:t}=await e(()=>import("./PolygonDrawer-cfdb456e.js"),["assets/PolygonDrawer-cfdb456e.js","assets/PolygonDrawerBase-36e71d9f.js","assets/index-825e5c28.js","assets/index-27f4df30.css"]);await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await e(()=>import("./TriangleDrawer-d68e40bb.js"),["assets/TriangleDrawer-d68e40bb.js","assets/PolygonDrawerBase-36e71d9f.js","assets/index-825e5c28.js","assets/index-27f4df30.css"]);await a.addShape("triangle",new t,o)}async function _(a,o=!0){await n(a,o),await i(a,o)}export{n as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};