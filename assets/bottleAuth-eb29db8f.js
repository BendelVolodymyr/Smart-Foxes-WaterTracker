import{c as e,t,N as s,r as a}from"./index-508c3e54.js";const p="/Smart-Foxes-WaterTracker/assets/backgroundMobile-0bf10f90.png",n="/Smart-Foxes-WaterTracker/assets/backgroundDesk-54c098d2.png",x="/Smart-Foxes-WaterTracker/assets/backgroundTab-345a663e.png",m=e.div`
  @media (min-width: 320px) and (max-width: 768px) {
    padding: 24px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-image: url(${p});
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
    padding: 40px 32px;
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
`,g=e.h2`
  color: ${t.lightTheme.colors.primary.text};
  font-size: 26px;
  font-weight: 500;
  line-height: 1.23;
`,h=e.form`
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
  color: ${t.lightTheme.colors.primary.text};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  position: relative;
  width: 100%;
`,u=e.input`
  margin-top: 8px;
  width: 100%;
  height: 44px;
  border-radius: 6px;
  border: 1px solid ${t.lightTheme.colors.secondary.color5};
  color: ${t.lightTheme.colors.primary.accent};
  background: ${t.lightTheme.colors.primary.bg};
  padding: 12px 10px;
  outline: none;

  &::placeholder {
    color: ${t.lightTheme.colors.secondary.color3};
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
  }
  :focus {
    color: ${t.lightTheme.colors.primary.accent};
  }
`,w=e.button`
  border: none;
  background: transparent;
  position: absolute;
  left: 90%;
  bottom: 15%;
`,f=e.button`
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
  @media (min-width: 768px) {
    padding: 10px 30px;
    font-size: 18px;
    line-height: 1.33;
  }
`,k=e(s)`
  color: ${t.lightTheme.colors.primary.accent};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  transition: transform 150ms ease-in-out;
  &:hover {
    color: ${t.lightTheme.colors.secondary.color4};
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
`,y=e.img``,v=()=>{const[o,r]=a.useState(!0),[d,i]=a.useState("password");return{handleShowPassword:()=>{r(!o),i(o===!0?"text":"password")},toggleIcon:o,type:d}},$="/Smart-Foxes-WaterTracker/assets/bottleAuth-2545dd91.png";export{g as A,w as B,h as F,u as I,m as L,b as a,f as b,k as c,T as d,y as e,$ as f,v as u};
