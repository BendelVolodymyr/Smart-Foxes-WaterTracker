import{ah as n}from"./index-7ab02d04.js";class t{constructor(){this.count=0,this.enable=!1,this.speed=1,this.decay=0,this.delay=0,this.sync=!1}load(e){e&&(e.count!==void 0&&(this.count=n(e.count)),e.enable!==void 0&&(this.enable=e.enable),e.speed!==void 0&&(this.speed=n(e.speed)),e.decay!==void 0&&(this.decay=n(e.decay)),e.delay!==void 0&&(this.delay=n(e.delay)),e.sync!==void 0&&(this.sync=e.sync))}}class o extends t{constructor(){super(),this.mode="auto",this.startValue="random"}load(e){super.load(e),e&&(e.mode!==void 0&&(this.mode=e.mode),e.startValue!==void 0&&(this.startValue=e.startValue))}}class u{constructor(){this.value=0}load(e){e&&e.value!==void 0&&(this.value=n(e.value))}}class l extends u{constructor(){super(),this.animation=new t}load(e){if(super.load(e),!e)return;const s=e.animation;s!==void 0&&this.animation.load(s)}}class r extends l{constructor(){super(),this.animation=new o}load(e){super.load(e)}}export{t as A,o as R,u as V,r as a};
