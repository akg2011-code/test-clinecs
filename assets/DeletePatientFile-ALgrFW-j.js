import{r as f,t as b,j as e,B as p,T as F,N as O,O as P,v as m,av as E,w as v,D as L}from"./index-DLnjnVCu.js";import{a as w}from"./index-CrveBHTj.js";import{i as Q,u as z,M as q,b as T,a as I,c as _,h as N,d as k,F as V,e as M,f as c}from"./index.esm-CU9MGMRa.js";import{D as C}from"./index-Q7d3q0Zt.js";import{b as H,I as S,F as J}from"./utils-DHjTyQ2S.js";import{V as W,A as Y,a as G}from"./Dashboard-BVf00d6b.js";function ie({isOpen:x,onClose:t,data:s}){const[d,l]=f.useState(),[n,o]=f.useState(null),r=f.useRef(),{register:j,handleSubmit:g,reset:a}=Q(),y=b(),D=z(),R=i=>{i.preventDefault();const u=i.dataTransfer.files[0];o(u)},U=i=>{i.preventDefault()},A=i=>{const u=i.target.files[0];o(u)},B=async i=>{let u={...i,file:n,id:s.id};try{l(!0);const h=await E(v.token,"update_patient_file",u);l(!1),h.response===200?(c(D,"success","Patient File Updated!"),y.invalidateQueries(["patient-files",s.patient_id]),y.invalidateQueries(["all-files"]),a(),o(null),t()):c(D,"error",h.message)}catch(h){l(!1),c(D,"error",JSON.stringify(h))}};return console.log(s),e.jsxs(q,{isOpen:x,onClose:t,isCentered:!0,size:"lg",scrollBehavior:"inside",children:[e.jsx(T,{}),e.jsxs(I,{as:"form",onSubmit:g(B),children:[e.jsx(_,{fontSize:18,py:2,children:"Update Patient Files"}),e.jsx(N,{}),e.jsx(C,{}),e.jsx(k,{children:e.jsxs(p,{pb:3,children:[e.jsxs(H,{isRequired:!0,children:[e.jsx(V,{children:"Title"}),e.jsx(S,{defaultValue:s==null?void 0:s.file_name,placeholder:"Title",...j("file_name",{required:!0})})]}),e.jsx(p,{mt:5,p:4,border:"2px dashed",borderColor:"gray.300",borderRadius:"md",onDrop:R,onDragOver:U,onClick:()=>{r.current&&r.current.click()},cursor:"pointer",children:n?e.jsxs(p,{position:"relative",children:[e.jsxs(F,{children:["Selected File: ",n.name]}),e.jsx(O,{position:"absolute",right:-2,top:-2,size:"sm",onClick:()=>{o(null)}})]}):e.jsxs(p,{children:[e.jsxs(W,{children:[" ",e.jsx(S,{ref:r,type:"file",onChange:A,accept:".jpeg, .svg, .png , .jpg",mb:4})]}),e.jsxs(P,{children:[" ",e.jsx(w,{fontSize:32})]}),e.jsxs(F,{textAlign:"center",mt:3,children:[e.jsx("b",{children:"Choose a file"})," or Drag it here."]})]})})]})}),e.jsx(C,{}),e.jsxs(M,{py:3,children:[e.jsx(m,{colorScheme:"gray",mr:3,onClick:t,size:"sm",children:"Close"}),e.jsx(m,{variant:"solid",size:"sm",colorScheme:"blue",type:"submit",isLoading:d,children:"Update Patient Files"})]})]})]})}function te({isOpen:x,onClose:t,data:s}){const d=z(),l=f.useRef(),n=b(),[o,r]=f.useState(),j=async()=>{let g={id:s.id};try{r(!0);const a=await L(v.token,"delete_patient_file",g);r(!1),a.response===200?(c(d,"success","Patient File Deleted"),n.invalidateQueries(["patient-files",s.patient_id]),n.invalidateQueries(["all-files"]),t()):c(d,"error",a.message)}catch(a){r(!1),c(d,"error",JSON.stringify(a))}};return e.jsx(Y,{isOpen:x,onClose:t,leastDestructiveRef:l,isCentered:!0,children:e.jsx(T,{children:e.jsxs(G,{children:[e.jsx(_,{fontSize:"lg",fontWeight:"semi-bold",children:e.jsxs(J,{children:[" ","Delete File ( ",e.jsx("b",{children:s==null?void 0:s.file_name})," )"]})}),e.jsx(k,{children:"Are you sure? You can not undo this action afterwards."}),e.jsxs(M,{children:[e.jsx(m,{ref:l,onClick:t,colorScheme:"gray",size:"sm",children:"Cancel"}),e.jsx(m,{colorScheme:"red",onClick:j,ml:3,size:"sm",isLoading:o,children:"Delete"})]})]})})})}export{te as D,ie as U};
