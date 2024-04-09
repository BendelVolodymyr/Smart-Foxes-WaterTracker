import{u as n,b as S,r as x,M as g,j as e,c as z,d as v,e as B,P as I,s as P}from"./index-dd92c98e.js";import{u as E,c as F,a as i,L,C as M,b as T,F as q,A as H,d as l,I as d,E as c,e as O,B as A,f as G,g as W,h as U,i as V}from"./index-6e59b655.js";import{b,a as w}from"./BackgroundHomeTab2x-a86d5447.js";const h=n.div`
  padding: 20px;
  background-image: image-set(url(${b}) 1x, url(${w}) 2x);
  background-position: bottom;
  background-size: 50vw auto;
  background-repeat: no-repeat;
`,m=n.h2`
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
`,D=n.span`
  text-align: center;
  margin: 0;
  color: #407bff;
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
`,p=n.button`
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
`,u=n.div`
  padding: 10px;
  gap: 16px;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: image-set(url(${b}) 1x, url(${w}) 2x);
  background-position: center;
  background-size: 40vw auto;
  background-repeat: no-repeat;
`,R=()=>{const{user:s,isLoggedIn:t}=S(),{closeModal:a}=x.useContext(g),r=s.email;return t?e.jsx(h,{children:e.jsxs(u,{children:[e.jsx(m,{children:"Welcome to Tracker Of Water"}),e.jsx(D,{children:r}),e.jsx(p,{type:"button",onClick:a,children:"Home"})]})}):e.jsx(h,{children:e.jsxs(u,{children:[e.jsx(m,{children:"Oops, something went wrong"}),e.jsx(p,{type:"button",onClick:a,children:"Close"})]})})},Q=()=>{const{handleShowPassword:s,toggleIcon:t,type:a}=E(),r=z(),{openModal:f}=x.useContext(g),j=()=>{window.location.assign("https://smart-foxes-backend-watertracker.onrender.com/api/auth/google")},k=F().shape({email:i().email("Invalid email").required("Email is required"),password:i().min(8,"Password should be of minimum 8 characters length").max(64,"Password should be of max 64 characters length").required("Password is required")}),o=v({initialValues:{email:"",password:""},validationSchema:k,onSubmit:({email:C,password:y},{resetForm:$})=>{r(P({email:C,password:y})),setTimeout(()=>{f(e.jsx(e.Fragment,{children:e.jsx(R,{})}))},1e3),$()}});return e.jsx(L,{children:e.jsx(M,{children:e.jsx(T,{children:e.jsxs(q,{onSubmit:o.handleSubmit,children:[e.jsx(H,{children:"Sing In"}),e.jsxs(l,{children:["Enter your email",e.jsx(d,{placeholder:"E-mail",name:"email",type:"email",value:o.values.email,onChange:o.handleChange,autoComplete:"off",onBlur:o.handleBlur,error:o.touched.email&&o.errors.email}),o.touched.email&&o.errors.email&&e.jsx(c,{children:o.errors.email})]}),e.jsxs(l,{children:["Enter your password",e.jsxs(O,{children:[e.jsx(d,{placeholder:"Password",name:"password",type:a,autoComplete:"off",value:o.values.password,onChange:o.handleChange,onBlur:o.handleBlur,error:o.touched.password&&o.errors.password}),e.jsx(A,{type:"button",onClick:s,children:t?e.jsx(B,{size:16,color:"#407BFF"}):e.jsx(I,{size:16,color:"#407BFF"})})]}),o.touched.password&&o.errors.password&&e.jsx(c,{children:o.errors.password})]}),e.jsx(G,{type:"submit",children:"Sing In"}),e.jsxs(W,{name:"google-auth",onClick:j,type:"button",style:{display:"flex",alignItems:"center",justifyContent:"center",gap:15},children:[e.jsx(U,{style:{width:25,height:25}})," Google"]}),e.jsx(V,{to:"/signup",children:"Sing up"})]})})})})};export{Q as default};
