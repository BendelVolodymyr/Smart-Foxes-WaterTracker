import{u as p,c as k,d as P,j as e,e as l,P as c,_ as m,f as C}from"./index-6f1fb78c.js";import{m as y,j as B,k as S,l as $,n as v,o as F,u as E,c as L,a as r,p as z,L as I,C as q,A as U,d as a,I as n,E as i,e as u,B as h,f as R,g as T,h as D,i as G}from"./index-683323c0.js";import"./BackgroundHomeTab2x-a86d5447.js";const A=p.div`
  display: flex;
  flex-direction: column;
  background-image: image-set(url(${y}) 1x, url(${B}) 2x);
  background-position: center bottom 3px;
  background-repeat: no-repeat;
  background-size: auto;
  @media (min-width: ${o=>o.theme.screens.tab}) {
    justify-content: space-between;
    background-image: image-set(url(${S}) 1x, url(${$}) 2x);
    background-position: bottom -2px right -61px;
    background-size: contain;
    background-repeat: no-repeat;
  }

  @media (min-width: ${o=>o.theme.screens.desk}) {
    background-image: image-set(url(${v}) 1x, url(${F}) 2x);
    background-position: left;
    background-size: auto;
    background-repeat: no-repeat;
    flex-direction: row-reverse;
  }
`,O=p.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 280px;
  padding-bottom: 276px;

  @media (min-width: ${o=>o.theme.screens.tab}) {
    width: 336px;
    padding-bottom: 180px;
  }

  @media (min-width: ${o=>o.theme.screens.desk}) {
    width: 384px;
    margin-right: 198px;
    padding-bottom: 135px;
    padding-top: 122px;
  }
`,M=()=>{const{handleShowPassword:o,toggleIcon:t,type:d}=E(),g=k(),x=L().shape({email:r().email("Invalid email").required("Email is required"),password:r().min(8,"Password should be of minimum 8 characters length").max(64,"Password should be of max 64 characters length").required("Password is required"),confirmPassword:r().required("Confirm Password is required").oneOf([z("password"),null],"Passwords does not match")}),s=P({initialValues:{email:"",password:"",confirmPassword:""},validationSchema:x,onSubmit:({email:b,password:f},{resetForm:j})=>{g(C({email:b,password:f})),j()}}),w=()=>{window.location.assign("https://smart-foxes-backend-watertracker.onrender.com/api/auth/google")};return e.jsx(I,{children:e.jsx(q,{children:e.jsx(A,{children:e.jsxs(O,{onSubmit:s.handleSubmit,children:[e.jsx(U,{children:"Sing Up"}),e.jsxs(a,{children:["Enter your email",e.jsx(n,{placeholder:"E-mail",name:"email",type:"email",value:s.values.email,onChange:s.handleChange,autoComplete:"off",onBlur:s.handleBlur,error:s.touched.email&&s.errors.email}),s.touched.email&&s.errors.email&&e.jsx(i,{children:s.errors.email})]}),e.jsxs(a,{children:["Enter your password",e.jsxs(u,{children:[e.jsx(n,{placeholder:"Password",name:"password",type:d,autoComplete:"off",value:s.values.password,onChange:s.handleChange,onBlur:s.handleBlur,error:s.touched.password&&s.errors.password}),e.jsx(h,{type:"button",onClick:o,children:t?e.jsx(l,{size:16,color:"#407BFF"}):e.jsx(c,{size:16,color:"#407BFF"})})]}),s.touched.password&&s.errors.password&&e.jsx(i,{children:s.errors.password}),e.jsx(m,{password:s.values.password,minLength:8})]}),e.jsxs(a,{children:["Repeat password",e.jsxs(u,{children:[e.jsx(n,{placeholder:"Repeat password",name:"confirmPassword",type:d,autoComplete:"off",value:s.values.confirmPassword,onChange:s.handleChange,onBlur:s.handleBlur,error:s.touched.confirmPassword&&s.errors.confirmPassword}),e.jsx(h,{type:"button",onClick:o,children:t?e.jsx(l,{size:16,color:"#407BFF"}):e.jsx(c,{size:16,color:"#407BFF"})})]}),s.touched.confirmPassword&&s.errors.confirmPassword&&e.jsx(i,{children:s.errors.confirmPassword}),e.jsx(m,{password:s.values.confirmPassword,minLength:8})]}),e.jsx(R,{type:"submit",children:"Sing Up"}),e.jsxs(T,{name:"google-auth",onClick:w,type:"button",style:{display:"flex",alignItems:"center",justifyContent:"center",gap:15},children:[e.jsx(D,{style:{width:25,height:25}})," Google"]}),e.jsx(G,{to:"/signin",children:"Sing in"})]})})})})};export{M as default};
