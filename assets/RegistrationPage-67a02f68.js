import{r as a,j as s,b as u,P as h}from"./index-c24824f6.js";import{u as P,L as F,F as S,A as y,a as o,I as t,B as m,b as E,c as B,d as v,e as I,f as L}from"./bottleAuth-7c62eeb0.js";const k=()=>{const p=L,{handleShowPassword:n,toggleIcon:r,type:l}=P(),[x,i]=a.useState(""),[g,c]=a.useState(""),[j,d]=a.useState(""),w=e=>{i(e.target.value)},f=e=>{c(e.target.value)},C=e=>{d(e.target.value)},b=e=>{e.preventDefault(),i(""),c(""),d("")};return s.jsxs(F,{children:[s.jsxs(S,{onSubmit:b,children:[s.jsx(y,{children:"Sing Up"}),s.jsxs(o,{children:["Enter your email",s.jsx(t,{placeholder:"E-mail",name:"email",type:"email",autoComplete:"off",value:x,onChange:w})]}),s.jsxs(o,{children:["Enter your password",s.jsx(t,{placeholder:"Password",name:"password",type:l,autoComplete:"off",value:g,onChange:f}),s.jsxs(m,{type:"button",onClick:n,children:[" ",r?s.jsx(u,{size:16,color:"#407BFF"}):s.jsx(h,{size:16,color:"#407BFF"})," "]})]}),s.jsxs(o,{children:["Repeat password",s.jsx(t,{placeholder:"Repeat password",name:"confirmPassword",type:l,autoComplete:"off",value:j,onChange:C}),s.jsxs(m,{type:"button",onClick:n,children:[" ",r?s.jsx(u,{size:16,color:"#407BFF"}):s.jsx(h,{size:16,color:"#407BFF"})," "]})]}),s.jsx(E,{type:"submit",children:"Sing Up"}),s.jsx(B,{to:"/signin",children:"Sing in"})]}),s.jsx(v,{children:s.jsx(I,{src:p,alt:"bottle"})})]})};export{k as default};