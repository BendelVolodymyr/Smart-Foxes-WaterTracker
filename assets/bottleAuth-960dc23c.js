import{u as e,t,N as d,G as p,r as a}from"./index-3ac98f24.js";const c="/Smart-Foxes-WaterTracker/assets/backgroundMobile-0bf10f90.png",n="/Smart-Foxes-WaterTracker/assets/backgroundDesk-54c098d2.png",x="/Smart-Foxes-WaterTracker/assets/backgroundTab-345a663e.png",g=e.div`
  @media (min-width: 320px) and (max-width: 768px) {
    padding: 24px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-image: url(${c});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 1px 40px;
  }
  @media (min-width: 520px) and (max-width: 1200px) {
    background-image: url(${x});
    background-repeat: no-repeat;
    background-size: cover;
  }
  @media (min-width: 768px) and (max-width: 1440px) {
    padding: 32px 40px;
  }
  @media (min-width: 1200px) and (max-width: 1440px) {
    background-image: url(${n});
    background-repeat: no-repeat;
    background-size: cover;
  }

  @media (min-width: 1440px) {
    padding: 49px 18px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    background-image: url(${n});
    background-repeat: no-repeat;
    background-size: cover;
  }
  background-color: #${t.lightTheme.colors.primary.bg};
  gap: 16px;
`,h=e.h2`
  color: #${t.lightTheme.colors.primary.text};
  font-size: 26px;
  font-weight: 500;
  line-height: 1.23;
`,u=e.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  @media (min-width: 390px) and (max-width: 768px) {
    width: 350px;
  }
  @media (min-width: 768px) and (max-width: 1200px) {
    width: 336px;
    overflow: hidden;
  }
  @media (min-width: 1200px) and (max-width: 1440px) {
    width: 384px;
  }

  @media (min-width: 1440px) {
    padding-right: 198px;
  }
`,b=e.label`
  color: #${t.lightTheme.colors.primary.text};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  position: relative;
  width: 100%;
`,w=e.input`
  margin-top: 8px;
  width: 100%;
  height: 44px;
  border-radius: 6px;
  border: 1px solid #${t.lightTheme.colors.secondary.color5};
  color: #${t.lightTheme.colors.primary.accent};
  background: #${t.lightTheme.colors.primary.bg};
  padding: 12px 10px;
  outline: none;

  &::placeholder {
    color: #${t.lightTheme.colors.secondary.color3};
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
  }
  :focus {
    color: #${t.lightTheme.colors.primary.accent};
  }
`,f=e.button`
  border: none;
  background: transparent;
  position: absolute;
  left: 90%;
  bottom: 15%;
`,k=e.button`
  display: block;
  border-radius: 10px;
  padding: 8px 30px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  background: #${t.lightTheme.colors.primary.accent};
  color: #${t.lightTheme.colors.primary.bg};
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
  @media (min-width: 768px) {
    padding: 10px 30px;
    font-size: 18px;
    line-height: 1.33;
  }
`,y=e(d)`
  color: #${t.lightTheme.colors.primary.accent};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  transition: transform 150ms ease-in-out;
  &:hover {
    color: #${t.lightTheme.colors.secondary.color4};
  }
`,T=e.div`
  padding-top: 50px;
  margin: 0 auto;
  @media (min-width: 620px) and (max-width: 700px) {
    position: relative;
    bottom: 95px;
    left: 0;
  }
  @media (min-width: 700px) and (max-width: 768px) {
    position: relative;
    bottom: 120px;
    left: 0;
  }

  @media (min-width: 768px) and (max-width: 1440px) {
    position: relative;
    bottom: 311px;
    padding-left: 135px;
  }
  @media (min-width: 768px) and (max-width: 1440px) {
    position: relative;
    bottom: 311px;
    padding-left: 135px;
  }
  @media (min-width: 1440px) {
    position: relative;
    bottom: 0;
    padding-left: 0;
    margin: 0;
  }
`,v=e.img``;function $(o){return p({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M245.48,125.57c-.34-.78-8.66-19.23-27.24-37.81C201,70.54,171.38,50,128,50S55,70.54,37.76,87.76c-18.58,18.58-26.9,37-27.24,37.81a6,6,0,0,0,0,4.88c.34.77,8.66,19.22,27.24,37.8C55,185.47,84.62,206,128,206s73-20.53,90.24-37.75c18.58-18.58,26.9-37,27.24-37.8A6,6,0,0,0,245.48,125.57ZM128,194c-31.38,0-58.78-11.42-81.45-33.93A134.77,134.77,0,0,1,22.69,128,134.56,134.56,0,0,1,46.55,95.94C69.22,73.42,96.62,62,128,62s58.78,11.42,81.45,33.94A134.56,134.56,0,0,1,233.31,128C226.94,140.21,195,194,128,194Zm0-112a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162Z"},child:[]}]})(o)}const z=()=>{const[o,r]=a.useState(!0),[s,i]=a.useState("password");return{handleShowPassword:()=>{r(!o),i(o===!0?"text":"password")},toggleIcon:o,type:s}},S="/Smart-Foxes-WaterTracker/assets/bottleAuth-2545dd91.png";export{h as A,f as B,u as F,w as I,g as L,$ as P,b as a,k as b,y as c,T as d,v as e,S as f,z as u};
