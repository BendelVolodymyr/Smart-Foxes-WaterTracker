import{u as a,g as u,h as g,e as z,r as w,M as b,j as e,i as P,b as S,k as v,l as i,m as I,n as B,C as E,o as F,p as L,A as M,q as l,I as T,E as d,t as q,v as O,B as A,w as G,P as W,x as D,y as H,z as c,D as U}from"./index-472f4847.js";import{F as V}from"./index-a76734a9.js";const h=a.div`
  padding: 20px;
  background-image: image-set(url(${u}) 1x, url(${g}) 2x);
  background-position: bottom;
  background-size: 50vw auto;
  background-repeat: no-repeat;
`,m=a.h2`
  text-align: center;
  margin: 0;
  color: ${o=>o.theme.colors.primary.text};
  font-size: 26px;
  font-weight: 500;
  line-height: 1.23;
  @media (min-width: 320px) and (max-width: 374px) {
    font-size: 18px;
    font-weight: 500;
  }
  @media (min-width: ${o=>o.theme.screens.mob}) {
    font-size: 18px;
  }
  @media (min-width: ${o=>o.theme.screens.tab}) {
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
  @media (min-width: ${o=>o.theme.screens.mob}) {
    font-size: 14px;
  }
  @media (min-width: ${o=>o.theme.screens.tab}) {
    font-size: 18px;
  }
`,p=a.button`
  display: block;
  border-radius: 10px;
  padding: 8px 30px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

  background: ${o=>o.theme.colors.primary.accent};
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
`,x=a.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  background-image: image-set(url(${u}) 1x, url(${g}) 2x);
  background-position: center;
  background-size: 40vw auto;
  background-repeat: no-repeat;
`,J=()=>{const{user:o,isLoggedIn:t}=z(),r=o.email,{closeModal:n}=w.useContext(b);return t?e.jsx(h,{children:e.jsxs(x,{children:[e.jsx(m,{children:"Welcome to Tracker Of Water"}),e.jsx(R,{children:r}),e.jsx(p,{type:"button",onClick:n,children:"Home"})]})}):e.jsx(h,{children:e.jsxs(x,{children:[e.jsx(m,{children:"Oops, something went wrong"}),e.jsx(p,{type:"button",onClick:n,children:"Close"})]})})},Q=()=>{const{handleShowPassword:o,toggleIcon:t,type:r}=P(),n=S(),{openModal:f}=w.useContext(b),j=()=>{window.location.assign("https://smart-foxes-backend-watertracker.onrender.com/api/auth/google")},k=v().shape({email:i().email("Invalid email").required("Email is required"),password:i().min(8,"Password should be of minimum 8 characters length").max(64,"Password should be of max 64 characters length").required("Password is required")}),s=I({initialValues:{email:"",password:""},validationSchema:k,onSubmit:({email:C,password:y},{resetForm:$})=>{n(U({email:C,password:y})),setTimeout(()=>{f(e.jsx(e.Fragment,{children:e.jsx(J,{})}))},1e3),$()}});return e.jsx(B,{children:e.jsx(E,{children:e.jsx(F,{children:e.jsxs(L,{onSubmit:s.handleSubmit,children:[e.jsx(M,{children:"Sing In"}),e.jsxs(l,{children:["Enter your email",e.jsx(T,{placeholder:"E-mail",name:"email",type:"email",value:s.values.email,onChange:s.handleChange,autoComplete:"off",onBlur:s.handleBlur,error:s.touched.email&&s.errors.email}),s.touched.email&&s.errors.email&&e.jsx(d,{children:s.errors.email})]}),e.jsxs(l,{children:["Enter your password",e.jsxs(q,{children:[e.jsx(O,{placeholder:"Password",name:"password",type:r,autoComplete:"off",value:s.values.password,onChange:s.handleChange,onBlur:s.handleBlur,error:s.touched.password&&s.errors.password}),e.jsx(A,{type:"button",onClick:o,children:t?e.jsx(G,{size:16,color:"#407BFF"}):e.jsx(W,{size:16,color:"#407BFF"})})]}),s.touched.password&&s.errors.password&&e.jsx(d,{children:s.errors.password})]}),e.jsx(D,{type:"submit",children:"Sing In"}),e.jsxs(H,{name:"google-auth",onClick:j,type:"button",style:{display:"flex",alignItems:"center",justifyContent:"center",gap:15},children:[e.jsx(V,{style:{width:25,height:25}})," Google"]}),e.jsx(c,{to:"/forgotPassword",children:"Forgot password?"}),e.jsx(c,{to:"/signup",children:"Sing up"})]})})})})};export{Q as default};
