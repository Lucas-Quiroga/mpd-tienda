import { c as createAstro, a as createComponent, m as maybeRenderHead, r as renderComponent, i as renderScript, e as renderTemplate, f as addAttribute } from '../../chunks/astro/server_DCqJloi2.mjs';
import 'kleur/colors';
import { $ as $$Admin } from '../../chunks/Admin.layout_uGAoUIhi.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import { useState, useCallback, useMemo } from 'react';
import { c as cn, D as DATA_TIENDA, B as Button, u as updateSearchParams, d as buttonVariants, f as formatter } from '../../chunks/ThemeScript_CoEJhq7_.mjs';
import { M as ModeToggle, S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem, P as PaginationComponent, g as getPaginatedProducts } from '../../chunks/getPaginatedProducts_K3TYJzJE.mjs';
import { IoReload } from 'react-icons/io5';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
export { renderers } from '../../renderers.mjs';

const Table = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ jsx(
  "table",
  {
    ref,
    className: cn("w-full caption-bottom text-sm", className),
    ...props
  }
) }));
Table.displayName = "Table";
const TableHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("thead", { ref, className: cn("[&_tr]:border-b", className), ...props }));
TableHeader.displayName = "TableHeader";
const TableBody = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "tbody",
  {
    ref,
    className: cn("[&_tr:last-child]:border-0", className),
    ...props
  }
));
TableBody.displayName = "TableBody";
const TableFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "tfoot",
  {
    ref,
    className: cn(
      "border-t bg-slate-100/50 font-medium [&>tr]:last:border-b-0 dark:bg-slate-800/50",
      className
    ),
    ...props
  }
));
TableFooter.displayName = "TableFooter";
const TableRow = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "tr",
  {
    ref,
    className: cn(
      "border-b transition-colors hover:bg-slate-100/50 data-[state=selected]:bg-slate-100 dark:hover:bg-slate-800/50 dark:data-[state=selected]:bg-slate-800",
      className
    ),
    ...props
  }
));
TableRow.displayName = "TableRow";
const TableHead = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "th",
  {
    ref,
    className: cn(
      "h-12 px-4 text-left align-middle font-medium text-slate-500 [&:has([role=checkbox])]:pr-0 dark:text-slate-400",
      className
    ),
    ...props
  }
));
TableHead.displayName = "TableHead";
const TableCell = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "td",
  {
    ref,
    className: cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className),
    ...props
  }
));
TableCell.displayName = "TableCell";
const TableCaption = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "caption",
  {
    ref,
    className: cn("mt-4 text-sm text-slate-500 dark:text-slate-400", className),
    ...props
  }
));
TableCaption.displayName = "TableCaption";

const Filter = ({ category }) => {
  const handleCategoryChange = (selectedCategory) => {
    const newUrl = updateSearchParams("category", selectedCategory);
    window.history.pushState({}, "", newUrl);
    window.location.reload();
  };
  const handleCleanFilters = () => {
    window.history.pushState({}, "", "/admin/dashboard");
    window.location.reload();
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
    /* @__PURE__ */ jsx(ModeToggle, {}),
    /* @__PURE__ */ jsxs(Select, { onValueChange: handleCategoryChange, value: category, children: [
      /* @__PURE__ */ jsx(SelectTrigger, { className: "dark:text-white", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Categorias" }) }),
      /* @__PURE__ */ jsx(SelectContent, { children: DATA_TIENDA.categories.map((cat, index) => /* @__PURE__ */ jsx(SelectItem, { value: cat, className: "dark:text-white", children: cat }, index)) })
    ] }),
    /* @__PURE__ */ jsx(
      Button,
      {
        variant: "outline",
        onClick: handleCleanFilters,
        disabled: category === "",
        children: /* @__PURE__ */ jsx(IoReload, { className: "dark:text-white" })
      }
    )
  ] });
};

const AlertDialog = AlertDialogPrimitive.Root;
const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
const AlertDialogPortal = AlertDialogPrimitive.Portal;
const AlertDialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AlertDialogPrimitive.Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;
const AlertDialogContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs(AlertDialogPortal, { children: [
  /* @__PURE__ */ jsx(AlertDialogOverlay, {}),
  /* @__PURE__ */ jsx(
    AlertDialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg dark:border-slate-800 dark:bg-slate-950",
        className
      ),
      ...props
    }
  )
] }));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;
const AlertDialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    ),
    ...props
  }
);
AlertDialogHeader.displayName = "AlertDialogHeader";
const AlertDialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props
  }
);
AlertDialogFooter.displayName = "AlertDialogFooter";
const AlertDialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AlertDialogPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold", className),
    ...props
  }
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;
const AlertDialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AlertDialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-slate-500 dark:text-slate-400", className),
    ...props
  }
));
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;
const AlertDialogAction = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AlertDialogPrimitive.Action,
  {
    ref,
    className: cn(buttonVariants(), className),
    ...props
  }
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;
const AlertDialogCancel = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AlertDialogPrimitive.Cancel,
  {
    ref,
    className: cn(
      buttonVariants({ variant: "outline" }),
      "mt-2 sm:mt-0",
      className
    ),
    ...props
  }
));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

const updateProduct = async (id, data) => {
  const formData = new FormData();
  formData.append("name", data.name || "");
  formData.append("image", data.image || "");
  formData.append("description", data.description || "");
  formData.append("price", data.price ? data.price.toString() : "");
  formData.append("category", data.category || "");
  formData.append("avaliable", data.avaliable ? "on" : "off");
  try {
    const response = await fetch(`/api/products/${id}`, {
      method: "POST",
      body: formData
    });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Error updating product: ${errorText}`);
    }
    return response;
  } catch (error) {
    console.error(`Error updating product with ID: ${id}`, error);
    throw new Error("Error updating product. Please try again.");
  }
};

const AvailableBtn = ({ product }) => {
  const [productAvailable, setProductAvailable] = useState(
    product.avaliable ?? false
  );
  const handleAvailable = useCallback(async () => {
    try {
      const response = await updateProduct(product.id, {
        ...product,
        avaliable: !productAvailable
      });
      if (!response.ok) {
        throw new Error("Error updating product.");
      }
      setProductAvailable(!productAvailable);
    } catch (error) {
      console.error("Error updating product", error);
    }
  }, [product, productAvailable]);
  const buttonStyle = useMemo(
    () => ({
      backgroundColor: productAvailable ? "green" : "red"
    }),
    [productAvailable]
  );
  return /* @__PURE__ */ jsxs(AlertDialog, { children: [
    /* @__PURE__ */ jsx(AlertDialogTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { className: "m-auto w-16 dark:text-white", style: buttonStyle, children: productAvailable ? "SI" : "NO" }) }),
    /* @__PURE__ */ jsxs(AlertDialogContent, { children: [
      /* @__PURE__ */ jsxs(AlertDialogHeader, { children: [
        /* @__PURE__ */ jsx(AlertDialogTitle, { children: "¿Cambiar la disponibilidad?" }),
        /* @__PURE__ */ jsx(AlertDialogDescription, { children: "Esta acción cambiará la disponibilidad del producto. ¿Estás seguro de continuar?" })
      ] }),
      /* @__PURE__ */ jsxs(AlertDialogFooter, { children: [
        /* @__PURE__ */ jsx(AlertDialogCancel, { children: "Cancelar" }),
        /* @__PURE__ */ jsx(AlertDialogAction, { onClick: handleAvailable, children: "Continuar" })
      ] })
    ] })
  ] });
};

const $$Astro$1 = createAstro("https://template-ecommerce-rosy.vercel.app/");
const $$MainDashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MainDashboard;
  const { page, products, category, limit, productsCount } = Astro2.props;
  const tableHeaders = [
    "Imagen",
    "Nombre",
    "Precio",
    "Categoria",
    "Disponible",
    "Acciones"
  ];
  return renderTemplate`${maybeRenderHead()}<div class="flex h-screen w-full flex-col"> <main class="flex-1 bg-gray-50 dark:bg-gray-900 p-6"> <div class="container mx-auto"> <h1 class="text-2xl font-bold mb-6 dark:text-white">Productos</h1> <div class="flex justify-between m-4 w-full ml-auto"> <div class="flex-1"> ${renderComponent($$result, "PaginationComponent", PaginationComponent, { "totalPages": Math.ceil(productsCount / limit), "currentPage": parseInt(page), "category": category })} </div> ${renderComponent($$result, "Filter", Filter, { "client:visible": true, "category": category, "client:component-hydration": "visible", "client:component-path": "@/components/admin/Filter", "client:component-export": "Filter" })} </div> <div class="border shadow-sm rounded-lg"> ${renderComponent($$result, "Table", Table, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "TableHeader", TableHeader, {}, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "TableRow", TableRow, {}, { "default": async ($$result4) => renderTemplate`${tableHeaders.map((header) => renderTemplate`${renderComponent($$result4, "TableHead", TableHead, { "key": header, "className": "dark:text-white" }, { "default": async ($$result5) => renderTemplate`${header}` })}`)}` })} ` })} ${renderComponent($$result2, "TableBody", TableBody, {}, { "default": async ($$result3) => renderTemplate`${products.map((product) => renderTemplate`${renderComponent($$result3, "TableRow", TableRow, { "key": product.id }, { "default": async ($$result4) => renderTemplate` ${renderComponent($$result4, "TableCell", TableCell, {}, { "default": async ($$result5) => renderTemplate` <img${addAttribute(product.image, "src")} width="48" height="48"${addAttribute(product.name, "alt")} class="rounded-full object-cover overflow-hidden"> ` })} ${renderComponent($$result4, "TableCell", TableCell, { "className": "font-medium dark:text-white" }, { "default": async ($$result5) => renderTemplate`${product.name}` })} ${renderComponent($$result4, "TableCell", TableCell, { "className": "hidden md:table-cell dark:text-white" }, { "default": async ($$result5) => renderTemplate`${isNaN(Number(product.price)) ? "Precio no disponible" : formatter.format(Number(product.price))}` })} ${renderComponent($$result4, "TableCell", TableCell, { "className": "hidden md:table-cell dark:text-white" }, { "default": async ($$result5) => renderTemplate`${product.category}` })} ${renderComponent($$result4, "TableCell", TableCell, { "className": "hidden md:table-cell" }, { "default": async ($$result5) => renderTemplate` ${renderComponent($$result5, "AvailableBtn", AvailableBtn, { "client:load": true, "product": product, "client:component-hydration": "load", "client:component-path": "@/components/admin/AvailableBtn", "client:component-export": "default" })} ` })} ${renderComponent($$result4, "TableCell", TableCell, {}, { "default": async ($$result5) => renderTemplate` <div class="flex items-center gap-2"> <a${addAttribute(`/admin/dashboard/edit/${product.id}`, "href")} class="border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 h-10 w-10 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-30 dark:text-white"> <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10"></path> <path d="M14 2v4a2 2 0 0 0 2 2h4"></path> <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z"></path> </svg> <span class="sr-only dark:text-white">Editar</span> </a> <button class="border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 h-10 w-10 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-30 dark:text-white"${addAttribute(product.id, "data-id")} id="delete-document" aria-label="Eliminar"> <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M3 6h18"></path> <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path> <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path> <line x1="10" x2="10" y1="11" y2="17"></line> <line x1="14" x2="14" y1="11" y2="17"></line> </svg> <span class="sr-only">Eliminar</span> </button> </div> ` })} ` })}`)}` })} ` })} </div> </div> </main> </div> ${renderScript($$result, "C:/Users/Usuario/Programming projects 2024/mpd-tienda/src/components/MainDashboard.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Usuario/Programming projects 2024/mpd-tienda/src/components/MainDashboard.astro", void 0);

const $$Astro = createAstro("https://template-ecommerce-rosy.vercel.app/");
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dashboard;
  const { searchParams } = Astro2.url;
  const { category, limit, page, products, productsCount } = await getPaginatedProducts(searchParams, true);
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$Admin, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "MainDashboard", $$MainDashboard, { "page": page, "products": products, "category": category, "limit": limit, "productsCount": productsCount })} ` })}`;
}, "C:/Users/Usuario/Programming projects 2024/mpd-tienda/src/pages/admin/dashboard.astro", void 0);

const $$file = "C:/Users/Usuario/Programming projects 2024/mpd-tienda/src/pages/admin/dashboard.astro";
const $$url = "/admin/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
