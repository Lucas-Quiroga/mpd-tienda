import{j as s,c as f}from"./utils.CV4bOxs7.js";import{r as n}from"./index.DgOxCJIz.js";import{c as h,O as re,P as oe,W as ae,C as ne,T as se,D as ie,a as N,R as le,b as ce}from"./index.B0J1trh3.js";import{b,B as de}from"./button.DHZLWCb5.js";import"./index.C3AoWCtw.js";import"./index.DUh_eYIC.js";import"./index.XIRROYMS.js";import"./tslib.es6.CDuPK5Eb.js";import"./component.CGzGt9PZ.js";function pe(e,t=[]){let r=[];function o(i,l){const c=n.createContext(l),d=r.length;r=[...r,l];function p(m){const{scope:v,children:A,...x}=m,ee=v?.[e][d]||c,te=n.useMemo(()=>x,Object.values(x));return s.jsx(ee.Provider,{value:te,children:A})}function D(m,v){const A=v?.[e][d]||c,x=n.useContext(A);if(x)return x;if(l!==void 0)return l;throw new Error(`\`${m}\` must be used within \`${i}\``)}return p.displayName=i+"Provider",[p,D]}const a=()=>{const i=r.map(l=>n.createContext(l));return function(c){const d=c?.[e]||i;return n.useMemo(()=>({[`__scope${e}`]:{...c,[e]:d}}),[c,d])}};return a.scopeName=e,[o,ue(a,...t)]}function ue(...e){const t=e[0];if(e.length===1)return t;const r=()=>{const o=e.map(a=>({useScope:a(),scopeName:a.scopeName}));return function(i){const l=o.reduce((c,{useScope:d,scopeName:p})=>{const m=d(i)[`__scope${p}`];return{...c,...m}},{});return n.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])}};return r.scopeName=t.scopeName,r}function fe(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function C(...e){return t=>e.forEach(r=>fe(r,t))}function j(...e){return n.useCallback(C(...e),e)}function ge(e,t,{checkForDefaultPrevented:r=!0}={}){return function(a){if(e?.(a),r===!1||!a.defaultPrevented)return t?.(a)}}var me=n.forwardRef((e,t)=>{const{children:r,...o}=e,a=n.Children.toArray(r),i=a.find(xe);if(i){const l=i.props.children,c=a.map(d=>d===i?n.Children.count(l)>1?n.Children.only(null):n.isValidElement(l)?l.props.children:null:d);return s.jsx(y,{...o,ref:t,children:n.isValidElement(l)?n.cloneElement(l,void 0,c):null})}return s.jsx(y,{...o,ref:t,children:r})});me.displayName="Slot";var y=n.forwardRef((e,t)=>{const{children:r,...o}=e;if(n.isValidElement(r)){const a=Ae(r);return n.cloneElement(r,{...ve(o,r.props),ref:t?C(t,a):a})}return n.Children.count(r)>1?n.Children.only(null):null});y.displayName="SlotClone";var w=({children:e})=>s.jsx(s.Fragment,{children:e});function xe(e){return n.isValidElement(e)&&e.type===w}function ve(e,t){const r={...t};for(const o in t){const a=e[o],i=t[o];/^on[A-Z]/.test(o)?a&&i?r[o]=(...c)=>{i(...c),a(...c)}:a&&(r[o]=a):o==="style"?r[o]={...a,...i}:o==="className"&&(r[o]=[a,i].filter(Boolean).join(" "))}return{...e,...r}}function Ae(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}var E="AlertDialog",[ye,ze]=pe(E,[h]),u=h(),R=e=>{const{__scopeAlertDialog:t,...r}=e,o=u(t);return s.jsx(le,{...o,...r,modal:!0})};R.displayName=E;var De="AlertDialogTrigger",S=n.forwardRef((e,t)=>{const{__scopeAlertDialog:r,...o}=e,a=u(r);return s.jsx(ce,{...a,...o,ref:t})});S.displayName=De;var he="AlertDialogPortal",P=e=>{const{__scopeAlertDialog:t,...r}=e,o=u(t);return s.jsx(oe,{...o,...r})};P.displayName=he;var Ne="AlertDialogOverlay",_=n.forwardRef((e,t)=>{const{__scopeAlertDialog:r,...o}=e,a=u(r);return s.jsx(re,{...a,...o,ref:t})});_.displayName=Ne;var g="AlertDialogContent",[be,Ce]=ye(g),O=n.forwardRef((e,t)=>{const{__scopeAlertDialog:r,children:o,...a}=e,i=u(r),l=n.useRef(null),c=j(t,l),d=n.useRef(null);return s.jsx(ae,{contentName:g,titleName:T,docsSlug:"alert-dialog",children:s.jsx(be,{scope:r,cancelRef:d,children:s.jsxs(ne,{role:"alertdialog",...i,...a,ref:c,onOpenAutoFocus:ge(a.onOpenAutoFocus,p=>{p.preventDefault(),d.current?.focus({preventScroll:!0})}),onPointerDownOutside:p=>p.preventDefault(),onInteractOutside:p=>p.preventDefault(),children:[s.jsx(w,{children:o}),s.jsx(we,{contentRef:l})]})})})});O.displayName=g;var T="AlertDialogTitle",$=n.forwardRef((e,t)=>{const{__scopeAlertDialog:r,...o}=e,a=u(r);return s.jsx(se,{...a,...o,ref:t})});$.displayName=T;var M="AlertDialogDescription",k=n.forwardRef((e,t)=>{const{__scopeAlertDialog:r,...o}=e,a=u(r);return s.jsx(ie,{...a,...o,ref:t})});k.displayName=M;var je="AlertDialogAction",I=n.forwardRef((e,t)=>{const{__scopeAlertDialog:r,...o}=e,a=u(r);return s.jsx(N,{...a,...o,ref:t})});I.displayName=je;var V="AlertDialogCancel",W=n.forwardRef((e,t)=>{const{__scopeAlertDialog:r,...o}=e,{cancelRef:a}=Ce(V,r),i=u(r),l=j(t,a);return s.jsx(N,{...i,...o,ref:l})});W.displayName=V;var we=({contentRef:e})=>{const t=`\`${g}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${g}\` by passing a \`${M}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${g}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;return n.useEffect(()=>{document.getElementById(e.current?.getAttribute("aria-describedby"))||console.warn(t)},[t,e]),null},Ee=R,Re=S,Se=P,F=_,B=O,H=I,z=W,L=$,G=k;const Pe=Ee,_e=Re,Oe=Se,Y=n.forwardRef(({className:e,...t},r)=>s.jsx(F,{className:f("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t,ref:r}));Y.displayName=F.displayName;const q=n.forwardRef(({className:e,...t},r)=>s.jsxs(Oe,{children:[s.jsx(Y,{}),s.jsx(B,{ref:r,className:f("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg dark:border-slate-800 dark:bg-slate-950",e),...t})]}));q.displayName=B.displayName;const Z=({className:e,...t})=>s.jsx("div",{className:f("flex flex-col space-y-2 text-center sm:text-left",e),...t});Z.displayName="AlertDialogHeader";const J=({className:e,...t})=>s.jsx("div",{className:f("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",e),...t});J.displayName="AlertDialogFooter";const K=n.forwardRef(({className:e,...t},r)=>s.jsx(L,{ref:r,className:f("text-lg font-semibold",e),...t}));K.displayName=L.displayName;const Q=n.forwardRef(({className:e,...t},r)=>s.jsx(G,{ref:r,className:f("text-sm text-slate-500 dark:text-slate-400",e),...t}));Q.displayName=G.displayName;const U=n.forwardRef(({className:e,...t},r)=>s.jsx(H,{ref:r,className:f(b(),e),...t}));U.displayName=H.displayName;const X=n.forwardRef(({className:e,...t},r)=>s.jsx(z,{ref:r,className:f(b({variant:"outline"}),"mt-2 sm:mt-0",e),...t}));X.displayName=z.displayName;const Te=async(e,t)=>{const r=new FormData;r.append("name",t.name||""),r.append("image",t.image||""),r.append("description",t.description||""),r.append("price",t.price?t.price.toString():""),r.append("category",t.category||""),r.append("avaliable",t.avaliable?"on":"off");try{const o=await fetch(`/api/products/${e}`,{method:"POST",body:r});if(!o.ok){const a=await o.text();throw new Error(`Error updating product: ${a}`)}return o}catch(o){throw console.error(`Error updating product with ID: ${e}`,o),new Error("Error updating product. Please try again.")}},Le=({product:e})=>{const[t,r]=n.useState(e.avaliable??!1),o=n.useCallback(async()=>{try{if(!(await Te(e.id,{...e,avaliable:!t})).ok)throw new Error("Error updating product.");r(!t)}catch(i){console.error("Error updating product",i)}},[e,t]),a=n.useMemo(()=>({backgroundColor:t?"green":"red"}),[t]);return s.jsxs(Pe,{children:[s.jsx(_e,{asChild:!0,children:s.jsx(de,{className:"m-auto w-16 dark:text-white",style:a,children:t?"SI":"NO"})}),s.jsxs(q,{children:[s.jsxs(Z,{children:[s.jsx(K,{children:"¿Cambiar la disponibilidad?"}),s.jsx(Q,{children:"Esta acción cambiará la disponibilidad del producto. ¿Estás seguro de continuar?"})]}),s.jsxs(J,{children:[s.jsx(X,{children:"Cancelar"}),s.jsx(U,{onClick:o,children:"Continuar"})]})]})]})};export{Le as default};
