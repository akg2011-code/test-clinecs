import{c as g,g as u,h as j,o as p,j as s,a as F,n as h,I as E,w as v,v as c,P as M}from"./index-DLnjnVCu.js";import{u as S,i as w,M as b,b as C,a as I,c as _,h as P,d as A,F as N,e as z,f as Z}from"./index.esm-CU9MGMRa.js";import{u as k}from"./useMutation-CH8xzEHB.js";import{c as x,b as B,I as R}from"./utils-DHjTyQ2S.js";var[T,q]=g({name:"FormErrorStylesContext",errorMessage:`useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormError />" `}),f=u((e,r)=>{const o=j("FormError",e),t=p(e),a=x();return a!=null&&a.isInvalid?s.jsx(T,{value:o,children:s.jsx(F.div,{...a==null?void 0:a.getErrorMessageProps(t,r),className:h("chakra-form__error-message",e.className),__css:{display:"flex",alignItems:"center",...o.text}})}):null});f.displayName="FormErrorMessage";var D=u((e,r)=>{const o=q(),t=x();if(!(t!=null&&t.isInvalid))return null;const a=h("chakra-form__error-icon",e.className);return s.jsx(E,{ref:r,"aria-hidden":!0,...e,__css:o.icon,className:a,children:s.jsx("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"})})});D.displayName="FormErrorIcon";const L=async e=>{const r=await M("","forget_password",e);if(r.response!==200)throw new Error(r.message);return r},$=({isOpen:e,onClose:r})=>{var d;const o=S(),{register:t,handleSubmit:a,formState:{errors:i},reset:l}=w(),m=k({mutationFn:async n=>{await L(n)},onError:n=>{Z(o,"error",n.message)},onSuccess:()=>{o({title:"Email Sent",description:"Your password has been sent to your email address. Please check your email.",status:"success",duration:3e3,isClosable:!0,position:"top"}),l(),r()}}),y=async n=>{m.mutate(n)};return s.jsxs(b,{isOpen:e,onClose:r,isCentered:!0,children:[s.jsx(C,{}),s.jsxs(I,{children:[s.jsx(_,{children:"Forgot Password"}),s.jsx(P,{}),s.jsx(A,{children:s.jsxs("form",{onSubmit:a(y),children:[s.jsxs(B,{isInvalid:i.email,children:[s.jsx(N,{children:"Email your email address"}),s.jsx(R,{defaultValue:((d=v)==null?void 0:d.email)||"",type:"email",placeholder:"Enter your email",...t("email",{required:"Email is required",pattern:{value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,message:"Invalid email address"}}),size:"sm",borderRadius:2}),s.jsx(f,{children:i.email&&i.email.message})]}),s.jsxs(z,{children:[s.jsx(c,{colorScheme:"teal",type:"submit",isLoading:m.isPending,size:"sm",children:"Submit"}),s.jsx(c,{ml:3,onClick:()=>{l(),r()},size:"sm",children:"Cancel"})]})]})})]})]})};export{$ as F};
