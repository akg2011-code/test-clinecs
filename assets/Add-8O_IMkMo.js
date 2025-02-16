import{Q,r as l,t as $,j as e,B as U,T as q,v as h,C as x,M as V,N as J,P as K,w as j,J as S}from"./index-DLnjnVCu.js";import{f as W}from"./index-CrveBHTj.js";import{i as H,u as X,g as Z,F as r,f as d}from"./index.esm-CU9MGMRa.js";import{u as b}from"./SettingData-5sbMzAiY.js";import{C as ee,M as re}from"./MultiTaginput-N5dTUDTu.js";import{I as se,a as te}from"./IsdModal-DvHKxEmI.js";import{t as ie}from"./today-D_vLUvRX.js";import{C,a as F}from"./chunk-YQO7BFFX-DeFCmj0r.js";import{I as ae}from"./chunk-FKYN3ZGE-BIoTHd0a.js";import{F as n,b as s,I as a}from"./utils-DHjTyQ2S.js";import{S as oe}from"./chunk-3RSXBRAN-DjkGz0-1.js";import{D as ne}from"./index-Q7d3q0Zt.js";import{T as ce}from"./index-DscDBtoO.js";import{V as le}from"./chunk-NTCQBYKE-B0koUvDf.js";import"./button-BU2rN6Gn.js";import"./popover-Bdb83bZr.js";import"./Dashboard-BVf00d6b.js";import"./HasPermission-Efb43n4z.js";import"./chunk-MGVPL3OH-BhiF1P3g.js";import"./image-BEsbZakN.js";import"./chunk-Z6RXEUPO-CjATnNZs.js";function Ie(){const f=Q(),[P,u]=l.useState(),{register:t,handleSubmit:R,reset:z}=H(),v=$(),c=X(),[p,g]=l.useState(null),[y,I]=l.useState(),[w,L]=l.useState([]),[k,A]=l.useState("+91"),{isOpen:O,onOpen:M,onClose:N}=Z(),D=l.useRef(),_=i=>{const m=i.target.files[0];g(m)},B=async i=>{if(i.password!=i.cnfPassword)return d(c,"error","password does not match");if(!y)return d(c,"error","select department");if(!w)return d(c,"error","select specialization");let m={image:p,department:y,specialization:w.join(", "),active:0,...i};try{u(!0);const o=await K(j.token,"add_doctor",m);u(!1),o.response===200?(d(c,"success","Doctor Added!"),v.invalidateQueries("doctors"),z(),f(`/doctor/update/${o.id}`)):(console.log(o),d(c,"error",`${o.message} - ${o.response}`))}catch(o){console.log(o),u(!1),d(c,"error",JSON.stringify(o))}},E=async()=>(await S(j.token,"get_department_active")).data,{data:T}=b({queryKey:["department-active"],queryFn:E}),Y=async()=>(await S(j.token,"get_specialization")).data,{data:G}=b({queryKey:["specialization"],queryFn:Y});return e.jsxs(U,{children:[e.jsxs(n,{justify:"space-between",alignItems:"center",children:[e.jsx(q,{fontSize:20,fontWeight:500,children:"Add Doctor"}),e.jsx(h,{w:120,size:"sm",variant:x("blackButton","gray"),onClick:()=>{f(-1)},children:"Back"})]}),e.jsxs(n,{gap:10,children:[e.jsx(C,{mt:5,bg:x("white","gray.700"),w:"70%",children:e.jsxs(F,{p:3,as:"form",onSubmit:R(B),children:[e.jsxs(n,{gap:10,children:[e.jsxs(s,{isRequired:!0,children:[e.jsx(r,{children:"Email"}),e.jsx(a,{w:250,type:"email",placeholder:"Email",...t("email",{required:!0})})]}),e.jsxs(s,{isRequired:!0,children:[e.jsx(r,{children:"Password"}),e.jsx(a,{type:"password",placeholder:"Password",...t("password",{required:!0})})]}),e.jsxs(s,{isRequired:!0,children:[e.jsx(r,{children:"Password"}),e.jsx(a,{type:"password",placeholder:"Password",...t("cnfPassword",{required:!0})})]})]}),e.jsxs(n,{gap:10,mt:5,children:[e.jsxs(s,{isRequired:!0,children:[e.jsx(r,{children:"First Name"}),e.jsx(a,{placeholder:"First Name",...t("f_name",{required:!0})})]}),e.jsxs(s,{isRequired:!0,children:[e.jsx(r,{children:"Last Name"}),e.jsx(a,{placeholder:"Last Name",...t("l_name",{required:!0})})]})]}),e.jsxs(n,{gap:10,mt:5,children:[e.jsxs(s,{isRequired:!0,children:[e.jsx(r,{children:"Phone"}),e.jsxs(ae,{children:[e.jsxs(se,{cursor:"pointer",onClick:i=>{i.stopPropagation(),M()},children:[k," ",e.jsx(W,{style:{marginLeft:"10px"}})]}),e.jsx(a,{type:"tel",placeholder:"phone Number",...t("phone",{required:!0,pattern:/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\\./0-9]*$/g})})]})]}),e.jsxs(s,{isRequired:!0,children:[e.jsx(r,{children:"Date Of Birth (MM/DD/YYYY)"}),e.jsx(a,{max:ie(),placeholder:"Select Date",size:"md",type:"date",...t("dob",{required:!0})})]})]}),e.jsxs(n,{gap:10,mt:5,children:[e.jsxs(s,{isRequired:!0,children:[e.jsx(r,{children:"Gender"}),e.jsxs(oe,{placeholder:"Select Gender",...t("gender",{required:!0}),children:[e.jsx("option",{value:"Female",children:"Female"})," ",e.jsx("option",{value:"Male",children:"Male"})]})]}),e.jsxs(s,{isRequired:!0,children:[e.jsx(r,{children:"Years OF Experience"}),e.jsx(a,{type:"number",placeholder:"Years OF Experience",...t("ex_year",{required:!0})})]})]}),e.jsxs(n,{gap:10,mt:5,children:[e.jsxs(s,{isRequired:!0,children:[e.jsx(r,{children:"Department"}),e.jsx(ee,{name:"Department",data:T,setState:I})]}),e.jsxs(s,{isRequired:!0,children:[e.jsx(r,{children:"Specialization"}),e.jsx(re,{data:G,setState:L,name:"Specialization"})]})]}),e.jsx(h,{w:"100%",mt:10,type:"submit",colorScheme:"green",size:"sm",isLoading:P,children:"Add"})]})}),e.jsx(C,{mt:5,bg:x("white","gray.700"),w:"25%",h:"fit-content",pb:10,children:e.jsxs(F,{p:2,children:[e.jsx(q,{textAlign:"center",children:"Profile Picture"}),e.jsx(ne,{}),e.jsxs(n,{p:2,justify:"center",mt:5,position:"relative",children:[e.jsx(V,{borderRadius:"50%",h:200,objectFit:"cover",w:200,src:p?URL.createObjectURL(p):"/admin/profilePicturePlaceholder.png"}),p&&e.jsx(ce,{label:"Clear",fontSize:"md",children:e.jsx(J,{colorScheme:"red",variant:"solid",position:"absolute",right:2,onClick:()=>{g(null)}})})]}),e.jsxs(le,{spacing:4,align:"stretch",mt:10,children:[e.jsx(a,{type:"file",display:"none",ref:D,onChange:_,accept:".jpeg, .svg, .png , .jpg"}),e.jsx(h,{size:"sm",onClick:()=>{D.current.click()},colorScheme:"blue",children:"Upload Profile Picture"})]})]})})]}),e.jsx(te,{isOpen:O,onClose:N,setisd_code:A})]})}export{Ie as default};
