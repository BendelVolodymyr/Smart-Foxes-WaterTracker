import{u as n,N as j,b as k,j as e,c as y,r as C,M as I,d as $,e as v,P,s as S}from"./index-d658924a.js";import{b as p,u as z,c as B,a as t,L as F,F as E,A as L,d as r,I as d,E as l,e as M,B as T,f as q,g as W,h as A,i as c,j as G,k as O,l as H}from"./index-82bb0769.js";const N=n.div`
  padding: 20px;
  background-image: url(${p});
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: 320px) and (max-width: 374px) {
    background-position: 37px -168px;
  }
  @media (min-width: ${s=>s.theme.screens.mob}) {
    background-position: -3px -195px;
  }
  @media (min-width: ${s=>s.theme.screens.tab}) {
    background-position: 52px -50px;
  }
  @media (min-width: ${s=>s.theme.screens.desk}) {
    background-position: 56px -210px;
  }
`,U=n.h2`
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
`,V=n.span`
  display: block;
  text-align: center;
  margin: 0;
  color: #407bff;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  @media (min-width: 320px) and (max-width: 374px) {
    font-size: 16px;
  }
`,D=n(j)`
  text-decoration: none;
  border-radius: 10px;
  padding: 8px 30px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  background: #407bff;
  color: #ffff;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  width: 100%;
  transition: box-shadow 150ms ease-in-out;
  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
`,R=n.div`
  padding: 10px;
  gap: 16px;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: url(${p});
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: 320px) and (max-width: 374px) {
    background-position: 19px -86px;
  }
  @media (min-width: ${s=>s.theme.screens.mob}) {
    background-position: 12px -79px;
  }
  @media (min-width: ${s=>s.theme.screens.tab}) {
    background-position: 22px -114px;
  }
  @media (min-width: ${s=>s.theme.screens.desk}) {
    background-position: 15px -240px;
  }
`,J=()=>{const{user:s,isLoggedIn:a}=k(),i=s.email;return a?e.jsx(N,{children:e.jsxs(R,{children:[e.jsx(U,{children:"Welcome to Tracker Of Water"}),e.jsx(V,{children:i}),e.jsx(D,{href:"#",children:"Home"})]})}):e.jsx(e.Fragment,{})},X=()=>{const{handleShowPassword:s,toggleIcon:a,type:i}=z(),h=H,m=y(),{openModal:x}=C.useContext(I),g=()=>{window.location.assign("https://smart-foxes-backend-watertracker.onrender.com/api/auth/google")},u=B().shape({email:t().email("Invalid email").required("Email is required"),password:t().min(8,"Password should be of minimum 8 characters length").max(64,"Password should be of max 64 characters length").required("Password is required")}),o=$({initialValues:{email:"",password:""},validationSchema:u,onSubmit:({email:b,password:w},{resetForm:f})=>{m(S({email:b,password:w})),x(e.jsx(e.Fragment,{children:e.jsx(J,{})})),f()}});return e.jsxs(F,{children:[e.jsxs(E,{onSubmit:o.handleSubmit,children:[e.jsx(L,{children:"Sing In"}),e.jsxs(r,{children:["Enter your email",e.jsx(d,{placeholder:"E-mail",name:"email",type:"email",value:o.values.email,onChange:o.handleChange,autoComplete:"off",onBlur:o.handleBlur,error:o.touched.email&&o.errors.email}),o.touched.email&&o.errors.email&&e.jsx(l,{children:o.errors.email})]}),e.jsxs(r,{children:["Enter your password",e.jsxs(M,{children:[e.jsx(d,{placeholder:"Password",name:"password",type:i,autoComplete:"off",value:o.values.password,onChange:o.handleChange,onBlur:o.handleBlur,error:o.touched.password&&o.errors.password}),e.jsx(T,{type:"button",onClick:s,children:a?e.jsx(v,{size:16,color:"#407BFF"}):e.jsx(P,{size:16,color:"#407BFF"})})]}),o.touched.password&&o.errors.password&&e.jsx(l,{children:o.errors.password})]}),e.jsx(q,{type:"submit",children:"Sing In"}),e.jsxs(W,{name:"google-auth",onClick:g,type:"button",style:{display:"flex",alignItems:"center",justifyContent:"center",gap:15},children:[e.jsx(A,{style:{width:25,height:25}})," Google"]}),e.jsx(c,{to:"/signup",children:"Sing up"}),e.jsx(c,{children:"Forgot Password"})]}),e.jsx(G,{children:e.jsx(O,{src:h,alt:"bottle"})})]})};export{X as default};
