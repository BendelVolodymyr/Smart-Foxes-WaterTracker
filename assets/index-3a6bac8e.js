import{ae as e}from"./index-aae69ebd.js";async function n(a,o=!0){const{PolygonDrawer:t}=await e(()=>import("./PolygonDrawer-ffdd6211.js"),["assets/PolygonDrawer-ffdd6211.js","assets/PolygonDrawerBase-3251339e.js","assets/index-aae69ebd.js","assets/index-27f4df30.css"]);await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await e(()=>import("./TriangleDrawer-fdd74008.js"),["assets/TriangleDrawer-fdd74008.js","assets/PolygonDrawerBase-3251339e.js","assets/index-aae69ebd.js","assets/index-27f4df30.css"]);await a.addShape("triangle",new t,o)}async function _(a,o=!0){await n(a,o),await i(a,o)}export{n as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
