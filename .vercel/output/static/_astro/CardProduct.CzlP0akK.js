import{j as e,c as l,f as C}from"./utils.CV4bOxs7.js";import{r}from"./index.DgOxCJIz.js";import{C as D,a as P,d as R,e as O}from"./card.COqkzu4g.js";import{c as z,B as i}from"./button.DHZLWCb5.js";import{X as I,u as Q,g as d,c as S,a as E,b as m}from"./cartStore.DijRTuVL.js";import{O as x,P as F,C as f,a as _,T as g,D as p,R as B}from"./index.B0J1trh3.js";import{w as H,x as T}from"./client.DzQM3-ZA.js";import"./createLucideIcon.ZND8IBUW.js";import"./const.D9r1vPbu.js";import"./index.C3AoWCtw.js";import"./index.DUh_eYIC.js";import"./index.XIRROYMS.js";import"./tslib.es6.CDuPK5Eb.js";import"./component.CGzGt9PZ.js";const A=z("inline-flex items-center rounded-full border border-slate-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:focus:ring-slate-300",{variants:{variant:{default:"border-transparent bg-slate-900 text-slate-50 hover:bg-slate-900/80 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/80",secondary:"border-transparent bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",destructive:"border-transparent bg-red-500 text-slate-50 hover:bg-red-500/80 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/80",outline:"text-slate-950 dark:text-slate-50"}},defaultVariants:{variant:"default"}});function V({className:a,variant:s,...t}){return e.jsx("div",{className:l(A({variant:s}),a),...t})}const q=B,X=F,h=r.forwardRef(({className:a,...s},t)=>e.jsx(x,{ref:t,className:l("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...s}));h.displayName=x.displayName;const u=r.forwardRef(({className:a,children:s,...t},o)=>e.jsxs(X,{children:[e.jsx(h,{}),e.jsxs(f,{ref:o,className:l("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg dark:border-slate-800 dark:bg-slate-950",a),...t,children:[s,e.jsxs(_,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:text-slate-400",children:[e.jsx(I,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));u.displayName=f.displayName;const b=({className:a,...s})=>e.jsx("div",{className:l("flex flex-col space-y-1.5 text-center sm:text-left",a),...s});b.displayName="DialogHeader";const j=({className:a,...s})=>e.jsx("div",{className:l("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",a),...s});j.displayName="DialogFooter";const y=r.forwardRef(({className:a,...s},t)=>e.jsx(g,{ref:t,className:l("text-lg font-semibold leading-none tracking-tight",a),...s}));y.displayName=g.displayName;const $=r.forwardRef(({className:a,...s},t)=>e.jsx(p,{ref:t,className:l("text-sm text-slate-500 dark:text-slate-400",a),...s}));$.displayName=p.displayName;const le=r.memo(({product:a})=>{const s=Q(S),[t,o]=r.useState(d(a.id)),[k,n]=r.useState(!1);r.useEffect(()=>{o(d(a.id))},[s,a.id]);const c=()=>{H(T,"product_selected",{item_id:a.id,item_name:a.name,item_category:a.category,quantity:t,price:a.price})},N=()=>{E(a),o(d(a.id)),c()},v=()=>{m(a.id,t+1),o(t+1),c()},w=()=>{t>0&&(m(a.id,t-1),o(t-1))};return e.jsxs(e.Fragment,{children:[e.jsx(q,{open:k,onOpenChange:n,children:e.jsxs(u,{className:"sm:max-w-[425px]",children:[e.jsx(b,{children:e.jsx(y,{children:a.name})}),e.jsx("div",{className:"flex justify-center items-center",children:e.jsx("img",{src:a.image,alt:a.name,className:"max-w-full max-h-[70vh] object-contain",loading:"lazy"})}),e.jsx(j,{children:e.jsx(i,{onClick:()=>n(!1),children:"Cerrar"})})]})}),e.jsxs(D,{className:"product w-full flex flex-col justify-between h-100",children:[e.jsx(P,{className:"p-2 h-40",children:e.jsx("img",{src:a.image,alt:"Product",className:"h-full w-full object-cover top-10 cursor-pointer hover:scale-105 transition-transform",onClick:()=>n(!0)})}),e.jsxs(R,{className:"p-3 flex-grow",children:[" ",e.jsxs("div",{className:"flex justify-between items-center mb-2",children:[a.category&&e.jsx(V,{children:a.category}),e.jsxs("span",{className:"text-lg font-semibold ml-auto",children:[isNaN(Number(a.price))?"Precio no disponible":C.format(Number(a.price)),e.jsx("span",{className:"text-sm text-gray-600 italic",children:"ARS"})]})]}),e.jsx("h5",{className:"text-md font-medium mb-2",children:a.name}),e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-300",children:a.description})]}),e.jsxs(O,{className:"p-2 flex-shrink-0",children:[" ",t===0&&e.jsx(i,{variant:"outline",onClick:N,className:"w-full dark:bg-gray-100 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white",children:"Agregar"}),t>0&&e.jsxs("div",{className:"flex items-center justify-center mx-auto w-full gap-4",children:[e.jsx(i,{variant:"outline",onClick:w,className:"w-[30%] dark:bg-gray-100 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white",children:"-"}),e.jsx("span",{className:"mx-2 text-lg",children:t}),e.jsx(i,{variant:"outline",onClick:v,className:"w-[30%] dark:bg-gray-100 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white",children:"+"})]})]})]},a.id)]})});export{le as default};
