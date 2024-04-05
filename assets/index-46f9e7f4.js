import{h as t,t as c,N as p,r as n,G as l}from"./index-585e6e59.js";const i="/Smart-Foxes-WaterTracker/assets/backgroundMobile-0bf10f90.png",o="/Smart-Foxes-WaterTracker/assets/backgroundDesk-54c098d2.png",r="/Smart-Foxes-WaterTracker/assets/backgroundTab-345a663e.png",m=t.div`
    /* @media (min-width: 320px) and (max-width: 768px) {
  width: 320px;
  margin: 0 auto;
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-image: url(${i});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 1px 40px;
  } */
    /* @media (min-width: 520px) and (max-width: 1200px) {
    background-image: url(${r});
    background-repeat: no-repeat;
    background-size: cover;
  }
  @media (min-width: 768px) and (max-width: 1440px) {
    padding: 40px 32px;
  }
  @media (min-width: 1200px) and (max-width: 1440px) {
    background-image: url(${o});
    background-repeat: no-repeat;
    background-size: cover;
  }
  @media (min-width: 1440px) {
    padding: 49px 18px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    background-image: url(${o});
    background-repeat: no-repeat;
    background-size: cover;
  } */

    padding: 24px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-image: url(${i});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 1px 40px;

    @media (min-width: ${({theme:e})=>e.screens.tab}) {
        background-image: url(${r});
        background-repeat: no-repeat;
        background-size: cover;
        padding: 40px 32px;
    }

    @media (min-width: ${({theme:e})=>e.screens.desk}) {
        padding: 40px 32px;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: center;
        background-image: url(${o});
        background-repeat: no-repeat;
        background-size: cover;
    }
`,h=t.h2`
    color: ${c.lightTheme.colors.primary.text};
    font-size: 26px;
    font-weight: 500;
    line-height: 1.23;
`,u=t.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 16px;
    position: relative;
    z-index: 25;

    @media (min-width: 390px) and (max-width: 768px) {
        width: 350px;
    }

    @media (min-width: ${({theme:e})=>e.screens.tab}) {
        width: 336px;
    }

    @media (min-width: ${({theme:e})=>e.screens.desk}) {
        width: 384px;
    }
`,b=t.label`
    color: ${e=>e.theme.colors.primary.text};
    font-size: 18px;
    font-weight: 400;
    line-height: 1.33;
    width: 100%;
`,f=t.div`
    position: relative;
`,w=t.input`
    margin-top: 8px;
    width: 100%;
    height: 44px;
    border-radius: 6px;
    border: 1px solid ${e=>e.theme.colors.secondary.color5};
    color: ${e=>e.theme.colors.primary.accent};
    background: ${e=>e.theme.colors.primary.bg};
    padding: 12px 10px;
    outline: none;

    &::placeholder {
        color: ${e=>e.theme.colors.secondary.color3};
        font-size: 16px;
        font-weight: 400;
        line-height: 1.25;
    }
    :focus {
        color: ${e=>e.theme.colors.primary.accent};
    }
`,k=t.button`
    border: none;
    background: transparent;
    position: absolute;
    left: 92%;
    bottom: 20%;
`,y=t.button`
    display: block;
    border-radius: 10px;
    padding: 8px 30px;
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
    background: ${e=>e.theme.colors.primary.accent};
    color: ${e=>e.theme.colors.primary.bg};
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
    width: 100%;
    cursor: pointer;
    transition: transform 150ms ease-in-out;
    &:hover {
        box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
    }
    @media (min-width: ${({theme:e})=>e.screens.tab}) {
        padding: 10px 30px;
        font-size: 18px;
        line-height: 1.33;
    }
`,$=t(p)`
    color: ${e=>e.theme.colors.primary.accent};
    font-size: 18px;
    font-weight: 400;
    line-height: 1.33;
    transition: transform 150ms ease-in-out;
    &:hover {
        color: ${e=>e.theme.colors.secondary.color4};
    }
`,v=t.div`
    padding-top: 50px;
    margin: 0 auto;
    z-index: -1;
    position: relative;
    @media (min-width: 620px) and (max-width: 700px) {
        bottom: 95px;
        left: 0;
    }
    @media (min-width: 700px) and (max-width: 768px) {
        bottom: 120px;
        left: 0;
    }

    @media (min-width: 768px) and (max-width: 1439px) {
        bottom: 311px;
        padding-left: 135px;
    }
    @media (min-width: 1440px) {
        bottom: 0;
        padding-left: 0;
        margin: 0;
    }
`,z=t.img``,C=t.p`
    color: ${e=>e.theme.colors.secondary.color2};
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
`,F=t.button`
    display: block;
    padding: 8px 30px;
    background: ${e=>e.theme.colors.primary.accent};
    color: ${e=>e.theme.colors.primary.bg};
    font-size: 16px;
    line-height: 1.25;
    font-weight: 500;
    width: 100%;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
        box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
    }
    @media (min-width: ${({theme:e})=>e.screens.tab}) {
        padding: 10px 30px;
        font-size: 18px;
        line-height: 1.33;
    }
`,T=()=>{const[e,s]=n.useState(!0),[d,a]=n.useState("password");return{handleShowPassword:()=>{s(!e),a(e===!0?"text":"password")},toggleIcon:e,type:d}},I="/Smart-Foxes-WaterTracker/assets/bottleAuth-2545dd91.png";function S(e){return l({tag:"svg",attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:`M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`},child:[]},{tag:"path",attr:{fill:"#FF3D00",d:`M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`},child:[]},{tag:"path",attr:{fill:"#4CAF50",d:`M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`},child:[]},{tag:"path",attr:{fill:"#1976D2",d:`M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`},child:[]}]})(e)}export{h as A,k as B,C as E,u as F,w as I,m as L,b as a,f as b,y as c,F as d,S as e,$ as f,v as g,z as h,I as i,T as u};
