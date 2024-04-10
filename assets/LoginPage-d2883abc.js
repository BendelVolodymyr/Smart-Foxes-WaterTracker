import{u as a,b as x,c as g,d as I,r as w,M as b,j as e,e as P,f as S,g as v,h as i,i as z,k as B,C as E,l as F,m as L,A as M,n as l,I as T,E as d,o as q,B as H,p as O,P as A,q as G,s as W,t as c,v as U}from"./index-06356bb4.js";import{I as V,F as D}from"./Registration.styled-27cbefdf.js";const h=a.div`
  padding: 20px;
  background-image: image-set(url(${x}) 1x, url(${g}) 2x);
  background-position: bottom;
  background-size: 50vw auto;
  background-repeat: no-repeat;
`,m=a.h2`
  text-align: center;
  margin: 0;
  color: ${s=>s.theme.colors.primary.text};
  font-size: 26px;
  font-weight: 500;
  line-height: 1.23;
  @media (min-width: 320px) and (max-width: 374px) {
    font-size: 18px;
    font-weight: 500;
  }
  @media (min-width: ${s=>s.theme.screens.mob}) {
    font-size: 18px;
  }
  @media (min-width: ${s=>s.theme.screens.tab}) {
    font-size: 26px;
  }
`,R=a.span`
  text-align: center;
  margin: 0;
  color: #407bff;
  word-break: break-all;
  word-break: break-all;
  font-weight: 500;
  line-height: 1.33;
  @media (min-width: 320px) and (max-width: 374px) {
    font-size: 13px;
  }
  @media (min-width: ${s=>s.theme.screens.mob}) {
    font-size: 14px;
  }
  @media (min-width: ${s=>s.theme.screens.tab}) {
    font-size: 18px;
  }
`,p=a.button`
  display: block;
  border-radius: 10px;
  padding: 8px 30px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

  background: ${s=>s.theme.colors.primary.accent};
  color: #ffff;
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
`,u=a.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  background-image: image-set(url(${x}) 1x, url(${g}) 2x);
  background-position: center;
  background-size: 40vw auto;
  background-repeat: no-repeat;
`,J=()=>{const{user:s,isLoggedIn:t}=I(),r=s.email,{closeModal:n}=w.useContext(b);return t?e.jsx(h,{children:e.jsxs(u,{children:[e.jsx(m,{children:"Welcome to Tracker Of Water"}),e.jsx(R,{children:r}),e.jsx(p,{type:"button",onClick:n,children:"Home"})]})}):e.jsx(h,{children:e.jsxs(u,{children:[e.jsx(m,{children:"Oops, something went wrong"}),e.jsx(p,{type:"button",onClick:n,children:"Close"})]})})},Q=()=>{const{handleShowPassword:s,toggleIcon:t,type:r}=P(),n=S(),{openModal:f}=w.useContext(b),j=()=>{window.location.assign("https://smart-foxes-backend-watertracker.onrender.com/api/auth/google")},k=v().shape({email:i().email("Invalid email").required("Email is required"),password:i().min(8,"Password should be of minimum 8 characters length").max(64,"Password should be of max 64 characters length").required("Password is required")}),o=z({initialValues:{email:"",password:""},validationSchema:k,onSubmit:({email:C,password:y},{resetForm:$})=>{n(U({email:C,password:y})),setTimeout(()=>{f(e.jsx(e.Fragment,{children:e.jsx(J,{})}))},1e3),$()}});return e.jsx(B,{children:e.jsx(E,{children:e.jsx(F,{children:e.jsxs(L,{onSubmit:o.handleSubmit,children:[e.jsx(M,{children:"Sing In"}),e.jsxs(l,{children:["Enter your email",e.jsx(T,{placeholder:"E-mail",name:"email",type:"email",value:o.values.email,onChange:o.handleChange,autoComplete:"off",onBlur:o.handleBlur,error:o.touched.email&&o.errors.email}),o.touched.email&&o.errors.email&&e.jsx(d,{children:o.errors.email})]}),e.jsxs(l,{children:["Enter your password",e.jsxs(q,{children:[e.jsx(V,{placeholder:"Password",name:"password",type:r,autoComplete:"off",value:o.values.password,onChange:o.handleChange,onBlur:o.handleBlur,error:o.touched.password&&o.errors.password}),e.jsx(H,{type:"button",onClick:s,children:t?e.jsx(O,{size:16,color:"#407BFF"}):e.jsx(A,{size:16,color:"#407BFF"})})]}),o.touched.password&&o.errors.password&&e.jsx(d,{children:o.errors.password})]}),e.jsx(G,{type:"submit",children:"Sing In"}),e.jsxs(W,{name:"google-auth",onClick:j,type:"button",style:{display:"flex",alignItems:"center",justifyContent:"center",gap:15},children:[e.jsx(D,{style:{width:25,height:25}})," Google"]}),e.jsx(c,{to:"/forgotPassword",children:"Forgot password?"}),e.jsx(c,{to:"/signup",children:"Sing up"})]})})})})};export{Q as default};
