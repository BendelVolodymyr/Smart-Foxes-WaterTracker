import{ai as i}from"./index-472f4847.js";async function n(a,o=!0){const{PolygonDrawer:t}=await i(()=>import("./PolygonDrawer-5421f41e.js"),["assets/PolygonDrawer-5421f41e.js","assets/PolygonDrawerBase-70f8a05f.js","assets/index-472f4847.js","assets/index-27f4df30.css"]);await a.addShape("polygon",new t,o)}async function e(a,o=!0){const{TriangleDrawer:t}=await i(()=>import("./TriangleDrawer-78adad94.js"),["assets/TriangleDrawer-78adad94.js","assets/PolygonDrawerBase-70f8a05f.js","assets/index-472f4847.js","assets/index-27f4df30.css"]);await a.addShape("triangle",new t,o)}async function _(a,o=!0){await n(a,o),await e(a,o)}export{n as loadGenericPolygonShape,_ as loadPolygonShape,e as loadTriangleShape};
