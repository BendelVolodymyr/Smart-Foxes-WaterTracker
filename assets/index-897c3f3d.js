import{ae as e}from"./index-362c7bd0.js";async function n(a,o=!0){const{PolygonDrawer:t}=await e(()=>import("./PolygonDrawer-c7f1a1d2.js"),["assets/PolygonDrawer-c7f1a1d2.js","assets/PolygonDrawerBase-049d450c.js","assets/index-362c7bd0.js","assets/index-27f4df30.css"]);await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await e(()=>import("./TriangleDrawer-9f61fb40.js"),["assets/TriangleDrawer-9f61fb40.js","assets/PolygonDrawerBase-049d450c.js","assets/index-362c7bd0.js","assets/index-27f4df30.css"]);await a.addShape("triangle",new t,o)}async function _(a,o=!0){await n(a,o),await i(a,o)}export{n as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
