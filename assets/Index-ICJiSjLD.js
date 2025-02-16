import{r as y,t as k,j as e,B as f,v as x,av as B,w as S,D as G,F as T,J as H}from"./index-DLnjnVCu.js";import{F as K}from"./index-DscDBtoO.js";import{e as P}from"./index-DizZbtXV.js";import{u as X}from"./SettingData-5sbMzAiY.js";import{A as Z,a as $,S as D,D as ee}from"./Dashboard-BVf00d6b.js";import{i as L,u as b,M as R,b as O,a as _,c as w,h as N,d as A,F as Q,e as F,f as d,g as v}from"./index.esm-CU9MGMRa.js";import{D as g}from"./index-Q7d3q0Zt.js";import{b as U,I as E,F as z}from"./utils-DHjTyQ2S.js";import{u as se}from"./UseSearchFilter-CSdYpLEl.js";import{I as q}from"./index-CrveBHTj.js";import"./HasPermission-Efb43n4z.js";import"./chunk-MGVPL3OH-BhiF1P3g.js";import"./image-BEsbZakN.js";import"./chunk-Z6RXEUPO-CjATnNZs.js";function te({isOpen:l,onClose:t,data:s}){const[i,r]=y.useState(),{register:h,handleSubmit:m,reset:c}=L(),u=k(),o=b(),a=async j=>{let p={...j};try{r(!0);const n=await B(S.token,"add_city",p);r(!1),n.response===200?(d(o,"success","City Added!"),u.invalidateQueries("cities"),c(),t()):d(o,"error",n.message)}catch(n){r(!1),d(o,"error",JSON.stringify(n))}};return e.jsxs(R,{isOpen:l,onClose:t,isCentered:!0,size:"lg",scrollBehavior:"inside",children:[e.jsx(O,{}),e.jsxs(_,{as:"form",onSubmit:m(a),children:[e.jsx(w,{fontSize:18,py:2,children:"Add City"}),e.jsx(N,{}),e.jsx(g,{}),e.jsx(A,{children:e.jsx(f,{pb:3,children:e.jsxs(U,{isRequired:!0,children:[e.jsx(Q,{children:"Title"}),e.jsx(E,{defaultValue:s==null?void 0:s.title,placeholder:"Name",...h("title",{required:!0})})]})})}),e.jsx(g,{}),e.jsxs(F,{py:3,children:[e.jsx(x,{colorScheme:"gray",mr:3,onClick:t,size:"sm",children:"Close"}),e.jsx(x,{variant:"solid",size:"sm",colorScheme:"blue",type:"submit",isLoading:i,children:"Add City"})]})]})]})}function ie({isOpen:l,onClose:t,data:s}){const[i,r]=y.useState(),{register:h,handleSubmit:m,reset:c}=L(),u=k(),o=b(),a=async j=>{let p={...j,id:s.id};try{r(!0);const n=await B(S.token,"update_city",p);r(!1),n.response===200?(d(o,"success","City Updated!"),u.invalidateQueries("cities"),c(),t()):d(o,"error",n.message)}catch(n){r(!1),d(o,"error",JSON.stringify(n))}};return e.jsxs(R,{isOpen:l,onClose:t,isCentered:!0,size:"lg",scrollBehavior:"inside",children:[e.jsx(O,{}),e.jsxs(_,{as:"form",onSubmit:m(a),children:[e.jsx(w,{fontSize:18,py:2,children:"Update City"}),e.jsx(N,{}),e.jsx(g,{}),e.jsx(A,{children:e.jsx(f,{pb:3,children:e.jsxs(U,{isRequired:!0,children:[e.jsx(Q,{children:"Title"}),e.jsx(E,{defaultValue:s==null?void 0:s.title,placeholder:"Title",...h("title",{required:!0})})]})})}),e.jsx(g,{}),e.jsxs(F,{py:3,children:[e.jsx(x,{colorScheme:"gray",mr:3,onClick:t,size:"sm",children:"Close"}),e.jsx(x,{variant:"solid",size:"sm",colorScheme:"blue",type:"submit",isLoading:i,children:"Update City"})]})]})]})}function re({isOpen:l,onClose:t,data:s}){const i=b(),r=y.useRef(),h=k(),[m,c]=y.useState(),u=async()=>{let o={id:s.id};try{c(!0);const a=await G(S.token,"delete_city",o);c(!1),a.response===200?(d(i,"success","City Deleted!"),h.invalidateQueries("cities"),t()):d(i,"error",a.message)}catch(a){c(!1),d(i,"error",JSON.stringify(a))}};return e.jsx(Z,{isOpen:l,onClose:t,leastDestructiveRef:r,isCentered:!0,children:e.jsx(O,{children:e.jsxs($,{children:[e.jsxs(w,{fontSize:"lg",fontWeight:"semi-bold",children:["Delete City ( ",e.jsx("b",{children:s==null?void 0:s.title})," )"]}),e.jsx(A,{children:"Are you sure? You can not undo this action afterwards."}),e.jsxs(F,{children:[e.jsx(x,{ref:r,onClick:t,colorScheme:"gray",size:"sm",children:"Cancel"}),e.jsx(x,{colorScheme:"red",onClick:u,ml:3,size:"sm",isLoading:m,children:"Delete"})]})]})})})}function ge(){const{isOpen:l,onOpen:t,onClose:s}=v(),[i,r]=y.useState(),{isOpen:h,onOpen:m,onClose:c}=v(),{isOpen:u,onOpen:o,onClose:a}=v(),j=b(),p="Errortoast",n=async()=>(await H(S.token,"get_city")).data,I=C=>{r(C)},{isLoading:J,data:M,error:V}=X({queryKey:["cities"],queryFn:n}),{handleSearchChange:W,filteredData:Y}=se(M);return V&&(j.isActive(p)||j({id:p,title:"oops!.",description:"Something bad happens.",status:"error",duration:2e3,isClosable:!0,position:"top"})),e.jsxs(f,{children:[J||!M?e.jsxs(f,{children:[e.jsxs(z,{mb:5,justify:"space-between",children:[e.jsx(D,{w:400,h:8}),e.jsx(D,{w:50,h:8})]}),e.jsx(D,{h:300,w:"100%"})]}):e.jsxs(f,{children:[e.jsxs(z,{mb:5,justify:"space-between",align:"center",children:[e.jsx(E,{size:"md",placeholder:"Search",w:400,maxW:"50vw",onChange:C=>W(C.target.value)}),e.jsx(f,{children:e.jsx(x,{size:"sm",colorScheme:"blue",onClick:t,children:"Add New"})})]}),e.jsx(ee,{data:Y,onActionClick:e.jsx(oe,{onClick:I,DeleteonOpen:m,EditonOpen:o})})]}),e.jsx(te,{isOpen:l,onClose:s}),e.jsx(re,{isOpen:h,onClose:c,data:i}),u&&e.jsx(ie,{isOpen:u,onClose:a,data:i})]})}const oe=({onClick:l,rowData:t,DeleteonOpen:s,EditonOpen:i})=>e.jsxs(z,{justify:"center",children:[e.jsx(q,{size:"sm",variant:"ghost",_hover:{background:"none"},onClick:()=>{l(t),i()},icon:e.jsx(P,{fontSize:18,color:T.colors.blue[500]})}),e.jsx(q,{size:"sm",variant:"ghost",_hover:{background:"none"},onClick:()=>{l(t),s()},icon:e.jsx(K,{fontSize:18,color:T.colors.red[500]})})]});export{ge as default};
