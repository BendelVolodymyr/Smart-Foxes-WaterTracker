import{h as o,t,N as c,r as n}from"./index-a4b063b3.js";const r="/Smart-Foxes-WaterTracker/assets/backgroundMobile-0bf10f90.png",i="/Smart-Foxes-WaterTracker/assets/backgroundDesk-54c098d2.png",s="/Smart-Foxes-WaterTracker/assets/backgroundTab-345a663e.png",x=o.div`
  /* @media (min-width: 320px) and (max-width: 768px) {
  width: 320px;
  margin: 0 auto;
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-image: url(${r});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 1px 40px;
  } */
  /* @media (min-width: 520px) and (max-width: 1200px) {
    background-image: url(${s});
    background-repeat: no-repeat;
    background-size: cover;
  }
  @media (min-width: 768px) and (max-width: 1440px) {
    padding: 40px 32px;
  }
  @media (min-width: 1200px) and (max-width: 1440px) {
    background-image: url(${i});
    background-repeat: no-repeat;
    background-size: cover;
  }
  @media (min-width: 1440px) {
    padding: 49px 18px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    background-image: url(${i});
    background-repeat: no-repeat;
    background-size: cover;
  } */

  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-image: url(${r});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 1px 40px;

  @media (min-width: ${({theme:e})=>e.screens.tab}) {
    background-image: url(${s});
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
    background-image: url(${i});
    background-repeat: no-repeat;
    background-size: cover;
  }
`,m=o.h2`
  color: ${t.lightTheme.colors.primary.text};
  font-size: 26px;
  font-weight: 500;
  line-height: 1.23;
`,h=o.form`
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
`,u=o.label`
  color: ${t.lightTheme.colors.primary.text};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  width: 100%;
`,b=o.div`
  position: relative;
`,w=o.input`
  margin-top: 8px;
  width: 100%;
  height: 44px;
  border-radius: 6px;
  color: ${({error:e})=>e?` ${t.lightTheme.colors.secondary.color2}`:`${t.lightTheme.colors.primary.accent}`};
  background: ${t.lightTheme.colors.primary.bg};
  padding: 12px 10px;
  outline: none;
  margin-bottom: 4px;
  border: ${({error:e})=>e?`1px solid ${t.lightTheme.colors.secondary.color2}`:`1px solid ${t.lightTheme.colors.secondary.color5}`};
  &::placeholder {
    color: ${t.lightTheme.colors.secondary.color3};
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
  }
  :focus {
    color: ${t.lightTheme.colors.primary.accent};
  }
`,f=o.button`
  border: none;
  background: transparent;
  position: absolute;
  left: 92%;
  bottom: 20%;
`,k=o.button`
  display: block;
  border-radius: 10px;
  padding: 8px 30px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  background: ${t.lightTheme.colors.primary.accent};
  color: ${t.lightTheme.colors.primary.bg};
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
`,y=o(c)`
  color: ${t.lightTheme.colors.primary.accent};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  transition: transform 150ms ease-in-out;
  &:hover {
    color: ${t.lightTheme.colors.secondary.color4};
  }
`,$=o.div`
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
`,T=o.img``,v=o.p`
  color: ${t.lightTheme.colors.secondary.color2};
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
`,z=o.button`
  display: block;
  padding: 5.5px 30px;
  background-color: #407bff;
  color: white;
  font-size: 16px;
  line-height: 1.25rem;
  font-weight: 500;
  width: 100%;
  border-radius: 0.5rem;
`,I=()=>{const[e,d]=n.useState(!0),[p,a]=n.useState("password");return{handleShowPassword:()=>{d(!e),a(e===!0?"text":"password")},toggleIcon:e,type:p}},S="/Smart-Foxes-WaterTracker/assets/bottleAuth-2545dd91.png";export{m as A,f as B,v as E,h as F,w as I,x as L,u as a,b,k as c,z as d,y as e,$ as f,T as g,S as h,I as u};
