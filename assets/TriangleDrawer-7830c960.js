import{P as n}from"./PolygonDrawerBase-d9f97a1c.js";import"./index-7ab02d04.js";const o=1.66,a=3,s=2;class d extends n{getCenter(t,e){return{x:-e,y:e/o}}getSidesCount(){return a}getSidesData(t,e){const r=e*s;return{count:{denominator:2,numerator:3},length:r}}}export{d as TriangleDrawer};
