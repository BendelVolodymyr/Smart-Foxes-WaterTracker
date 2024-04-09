import{u as a,b as P,r as x,M as g,j as e,c as S,d as z,e as I,P as v,s as B}from"./index-cc3adafc.js";import{u as E,c as F,a as i,L,C as M,b as T,F as q,A as H,d as l,I as O,E as d,e as A,f as G,B as W,g as U,h as V,i as D,j as c}from"./Registration.styled-59487244.js";import{b,a as w}from"./BackgroundHomeTab2x-a86d5447.js";const h=a.div`
  padding: 20px;
  background-image: image-set(url(${b}) 1x, url(${w}) 2x);
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
  background-image: image-set(url(${b}) 1x, url(${w}) 2x);
  background-position: center;
  background-size: 40vw auto;
  background-repeat: no-repeat;
`,J=()=>{const{user:s,isLoggedIn:t}=P(),r=s.email,{closeModal:n}=x.useContext(g);return t?e.jsx(h,{children:e.jsxs(u,{children:[e.jsx(m,{children:"Welcome to Tracker Of Water"}),e.jsx(R,{children:r}),e.jsx(p,{type:"button",onClick:n,children:"Home"})]})}):e.jsx(h,{children:e.jsxs(u,{children:[e.jsx(m,{children:"Oops, something went wrong"}),e.jsx(p,{type:"button",onClick:n,children:"Close"})]})})},X=()=>{const{handleShowPassword:s,toggleIcon:t,type:r}=E(),n=S(),{openModal:f}=x.useContext(g),j=()=>{window.location.assign("https://smart-foxes-backend-watertracker.onrender.com/api/auth/google")},k=F().shape({email:i().email("Invalid email").required("Email is required"),password:i().min(8,"Password should be of minimum 8 characters length").max(64,"Password should be of max 64 characters length").required("Password is required")}),o=z({initialValues:{email:"",password:""},validationSchema:k,onSubmit:({email:C,password:y},{resetForm:$})=>{n(B({email:C,password:y})),setTimeout(()=>{f(e.jsx(e.Fragment,{children:e.jsx(J,{})}))},1e3),$()}});return e.jsx(L,{children:e.jsx(M,{children:e.jsx(T,{children:e.jsxs(q,{onSubmit:o.handleSubmit,children:[e.jsx(H,{children:"Sing In"}),e.jsxs(l,{children:["Enter your email",e.jsx(O,{placeholder:"E-mail",name:"email",type:"email",value:o.values.email,onChange:o.handleChange,autoComplete:"off",onBlur:o.handleBlur,error:o.touched.email&&o.errors.email}),o.touched.email&&o.errors.email&&e.jsx(d,{children:o.errors.email})]}),e.jsxs(l,{children:["Enter your password",e.jsxs(A,{children:[e.jsx(G,{placeholder:"Password",name:"password",type:r,autoComplete:"off",value:o.values.password,onChange:o.handleChange,onBlur:o.handleBlur,error:o.touched.password&&o.errors.password}),e.jsx(W,{type:"button",onClick:s,children:t?e.jsx(I,{size:16,color:"#407BFF"}):e.jsx(v,{size:16,color:"#407BFF"})})]}),o.touched.password&&o.errors.password&&e.jsx(d,{children:o.errors.password})]}),e.jsx(U,{type:"submit",children:"Sing In"}),e.jsxs(V,{name:"google-auth",onClick:j,type:"button",style:{display:"flex",alignItems:"center",justifyContent:"center",gap:15},children:[e.jsx(D,{style:{width:25,height:25}})," Google"]}),e.jsx(c,{to:"/forgotPassword",children:"Forgot password?"}),e.jsx(c,{to:"/signup",children:"Sing up"})]})})})})};export{X as default};
