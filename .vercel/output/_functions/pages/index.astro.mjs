import { a as createComponent, m as maybeRenderHead, r as renderComponent, e as renderTemplate, c as createAstro, j as renderTransition } from '../chunks/astro/server_DCqJloi2.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DWfGByaq.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { D as DATA_TIENDA, B as Button, u as updateSearchParams, c as cn, L as LOCAL_STORAGE_KEY, f as formatter } from '../chunks/ThemeScript_B1KfZH_o.mjs';
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem, P as PaginationComponent, M as ModeToggle, g as getPaginatedProducts } from '../chunks/getPaginatedProducts_CpzCEi13.mjs';
import { IoReload } from 'react-icons/io5';
import { useStore } from '@nanostores/react';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { cva } from 'class-variance-authority';
import { X } from 'lucide-react';
import { map } from 'nanostores';
import { FaCartShopping } from 'react-icons/fa6';
import { RiDeleteBin6Line } from 'react-icons/ri';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const FiltersIndex = ({ category }) => {
  const handleCategoryChange = (selectedCategory) => {
    const newUrl = updateSearchParams("category", selectedCategory);
    window.history.pushState({}, "", newUrl);
    window.location.reload();
  };
  const handleCleanFilters = () => {
    window.history.pushState({}, "", "/");
    window.location.reload();
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
    /* @__PURE__ */ jsx("div", { className: "flex space-x-2", children: /* @__PURE__ */ jsxs(Select, { onValueChange: handleCategoryChange, value: category, children: [
      /* @__PURE__ */ jsx(SelectTrigger, { className: "min-w-[150px] whitespace-nowrap dark:text-white", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Categorias" }) }),
      /* @__PURE__ */ jsx(SelectContent, { children: DATA_TIENDA.categories.map((cat, index) => /* @__PURE__ */ jsx(SelectItem, { value: cat, children: cat }, index)) })
    ] }) }),
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

function Skeleton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn("animate-pulse rounded-md bg-slate-100 dark:bg-slate-800", className),
      ...props
    }
  );
}

const $$SkeletonCard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col space-y-3"> ${renderComponent($$result, "Skeleton", Skeleton, { "className": "h-[125px] w-[250px] rounded-xl bg-white" })} <div class="space-y-2"> ${renderComponent($$result, "Skeleton", Skeleton, { "className": "h-4 w-[250px] bg-white" })} ${renderComponent($$result, "Skeleton", Skeleton, { "className": "h-4 w-[200px] bg-white" })} </div> </div>`;
}, "C:/Users/Usuario/Programming projects 2024/mpd-tienda/src/components/SkeletonCard.astro", void 0);

const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetClose = SheetPrimitive.Close;
const SheetPortal = SheetPrimitive.Portal;
const SheetOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
const sheetVariants = cva(
  "fixed z-50 gap-4 bg-white p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 dark:bg-slate-950",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
const SheetContent = React.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxs(SheetPortal, { children: [
  /* @__PURE__ */ jsx(SheetOverlay, {}),
  /* @__PURE__ */ jsxs(
    SheetPrimitive.Content,
    {
      ref,
      className: cn(sheetVariants({ side }), className),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs(SheetPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800", children: [
          /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
SheetContent.displayName = SheetPrimitive.Content.displayName;
const SheetHeader = ({
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
SheetHeader.displayName = "SheetHeader";
const SheetFooter = ({
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
SheetFooter.displayName = "SheetFooter";
const SheetTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold text-slate-950 dark:text-slate-50", className),
    ...props
  }
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;
const SheetDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-slate-500 dark:text-slate-400", className),
    ...props
  }
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

const saveCartToLocalStorage = (cart) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cart));
  }
};
const loadCartFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const storedCart = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedCart ? JSON.parse(storedCart) : {};
  }
  return {};
};
const cartItems = map(loadCartFromLocalStorage());
cartItems.subscribe((cart) => saveCartToLocalStorage(cart));
function removeCartItem(id) {
  const item = cartItems.get()[id];
  if (!item) return;
  if (item.quantity > 1) {
    updateCartItemQuantity(id, item.quantity - 1);
  } else {
    const cartItemsCopy = { ...cartItems.get() };
    delete cartItemsCopy[id];
    cartItems.set(cartItemsCopy);
  }
}
function updateCartItemQuantity(id, quantity) {
  const cartItemsCopy = { ...cartItems.get() };
  cartItemsCopy[id].quantity = quantity;
  cartItems.set(cartItemsCopy);
}
function getTotalQuantity() {
  return Object.values(cartItems.get()).reduce(
    (acc, item) => acc + item.quantity,
    0
  );
}
function getTotalPrice() {
  return Object.values(cartItems.get()).reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
}
function clearCart() {
  cartItems.set({});
}

const CartButtonAside = () => {
  const $cartItems = useStore(cartItems);
  const [totalQuantity, setTotalQuantity] = useState(0);
  useEffect(() => {
    setTotalQuantity(getTotalQuantity());
  }, [$cartItems]);
  const getItemsCart = () => {
    return Object.values($cartItems).filter((item) => item.quantity > 0);
  };
  const sendMessageWhatsApp = () => {
    const items = getItemsCart();
    const messageItems = items.map(
      (item) => `${item.name} x ${item.quantity} = ${formatter.format(
        item.quantity * item.price
      )} ARS`
    ).join("\n");
    const total = formatter.format(
      items.reduce((acc, item) => acc + item.quantity * item.price, 0)
    );
    const message = `¡Hola! Te paso el resumen de mi pedido ☺ 

    ${messageItems}
    ----------------
    Total: ${total} ARS
    Espero tu respuesta para confirmar mi pedido`;
    const url = `${DATA_TIENDA.contact.whatsappUrl}?phone=${DATA_TIENDA.contact.phone}&text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    clearCart();
  };
  return /* @__PURE__ */ jsxs(Sheet, { children: [
    /* @__PURE__ */ jsx(SheetTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "outline", children: [
      /* @__PURE__ */ jsx(FaCartShopping, { className: "dark:text-white" }),
      totalQuantity > 0 && /* @__PURE__ */ jsx("span", { className: "text-black ml-2 dark:text-white", children: totalQuantity })
    ] }) }),
    /* @__PURE__ */ jsxs(SheetContent, { className: "flex flex-col h-full", children: [
      /* @__PURE__ */ jsxs(SheetHeader, { children: [
        /* @__PURE__ */ jsx(SheetTitle, { children: "PRODUCTOS" }),
        /* @__PURE__ */ jsxs(SheetDescription, { className: "text-lg", children: [
          totalQuantity,
          " ",
          totalQuantity === 1 ? "producto" : "productos",
          " en tu carrito"
        ] })
      ] }),
      Object.values($cartItems).length === 0 && /* @__PURE__ */ jsx("p", { children: "¡Tu carrito está vacío!" }),
      /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-y-4 overflow-y-auto flex-grow", children: Object.values($cartItems).map(
        (item) => item.quantity === 0 ? null : /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-between w-full", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center ", children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm sm:text-base", children: "Nombre" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm dark:text-white", children: item.name })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm sm:text-base", children: "Cantidad" }),
              /* @__PURE__ */ jsxs("p", { className: "dark:text-white", children: [
                /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-500 dark:text-white", children: "x" }),
                " ",
                item.quantity
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm sm:text-base", children: "Precio" }),
              /* @__PURE__ */ jsx("p", { className: "dark:text-white", children: formatter.format(item.quantity * item.price) })
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            Button,
            {
              variant: "destructive",
              size: "sm",
              onClick: () => removeCartItem(item.id),
              children: /* @__PURE__ */ jsx(RiDeleteBin6Line, { size: 20 })
            }
          )
        ] }, item.id)
      ) }),
      /* @__PURE__ */ jsxs(
        SheetFooter,
        {
          className: "mt-auto ",
          style: { display: "flex", flexDirection: "column" },
          children: [
            /* @__PURE__ */ jsx("div", { children: totalQuantity > 0 && /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-y-2 ", children: [
              /* @__PURE__ */ jsxs("div", { className: "border border-gray-300 p-2 rounded-md flex justify-between bg-gray-50", children: [
                /* @__PURE__ */ jsx("p", { className: "text-md font-medium", children: "Total:" }),
                /* @__PURE__ */ jsx("p", { className: "text-md font-medium", children: formatter.format(getTotalPrice()) })
              ] }),
              /* @__PURE__ */ jsx(
                Button,
                {
                  onClick: sendMessageWhatsApp,
                  className: "dark:hover:bg-gray-700 dark:hover:text-white",
                  children: "Finalizar compra"
                }
              )
            ] }) }),
            /* @__PURE__ */ jsx(SheetClose, { className: "mt-2", children: /* @__PURE__ */ jsx(Button, { variant: "outline", className: "m-0 dark:text-white", children: "Cerrar" }) })
          ]
        }
      )
    ] })
  ] });
};

const $$404ProductNotFound = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex lg:translate-y-[50%] m-auto flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8"> <div class="mx-auto max-w-md text-center"> <svg class="mx-auto h-12 w-12 text-primary dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path> <path d="M12 9v4"></path> <path d="M12 17h.01"></path> </svg> <h1 class="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl dark:text-white">
Lo sentimos, no se encontró el producto
</h1> <p class="mt-4 text-muted-foreground dark:text-white">
Parece que el producto que estás buscando no está disponible en este
      momento. Por favor, revisa más tarde o busca otros productos similares.
</p> <div class="mt-6"> <a href="/" class="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors bg-black text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:text-black dark:bg-gray-50 dark:hover:bg-gray-200">
Volver a la página principal
</a> </div> </div> </div>`;
}, "C:/Users/Usuario/Programming projects 2024/mpd-tienda/src/components/404ProductNotFound.astro", void 0);

const $$Astro$1 = createAstro("https://template-ecommerce-rosy.vercel.app/");
const $$HomeProducts = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$HomeProducts;
  const { page, products, category, limit, productsCount } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<main class="w-full h-full sm:flex-1 p-6 flex flex-col"> <div class="flex flex-col gap-y-4 sm:flex-row justify-between items-center mb-6 space-x-4"> <div class="hidden lg:flex lg:flex-1"> <h1 class="text-2xl font-semibold dark:text-white">Productos</h1> </div> <div class="flex-1"> ${renderComponent($$result, "PaginationComponent", PaginationComponent, { "totalPages": Math.ceil(productsCount / limit), "currentPage": parseInt(page), "category": category })} </div> <div class="flex-1 flex gap-2 justify-end"> ${renderComponent($$result, "ModeToggle", ModeToggle, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/ThemeBtn", "client:component-export": "ModeToggle" })} ${renderComponent($$result, "CartButtonAside", CartButtonAside, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/component/BtnCartAside", "client:component-export": "default" })} ${renderComponent($$result, "FiltersIndex", FiltersIndex, { "client:visible": true, "category": category, "client:component-hydration": "visible", "client:component-path": "C:/Users/Usuario/Programming projects 2024/mpd-tienda/src/components/component/FiltersIndex", "client:component-export": "default" })} </div> </div> <div class="flex-grow"> ${products.length === 0 && renderTemplate`${renderComponent($$result, "ProductNotFound", $$404ProductNotFound, {})}`} <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-4"> ${products !== null ? products.map((product) => renderTemplate`${renderComponent($$result, "CardProduct", null, { "client:only": "react", "product": product, "client:component-hydration": "only", "client:component-path": "@/components/CardProduct.tsx", "client:component-export": "default" })}`) : Array.from({ length: 8 }, (_, index) => renderTemplate`${renderComponent($$result, "SkeletonCard", $$SkeletonCard, { "key": index })}`)} </div> </div> </main>`;
}, "C:/Users/Usuario/Programming projects 2024/mpd-tienda/src/components/HomeProducts.astro", void 0);

const $$Astro = createAstro("https://template-ecommerce-rosy.vercel.app/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { searchParams } = Astro2.url;
  const { category, limit, page, products, productsCount } = await getPaginatedProducts(searchParams);
  let canonicalURL;
  if (Astro2.site) {
    canonicalURL = new URL(Astro2.url.pathname, Astro2.site).toString();
  } else {
    canonicalURL = Astro2.url.pathname;
  }
  const metadata = {
    title: category ? `${category} | Mi Tienda Online` : "Inicio | Mi Tienda Online",
    description: category ? `Explora nuestra selecci\xF3n de productos ${category} en nuestra tienda online.` : "Descubre nuestra amplia gama de productos de alta calidad en la p\xE1gina principal de nuestra tienda online.",
    image: "/images/hero.jpg",
    canonicalURL,
    keywords: ["Tienda online", "Productos", "Compras", category].filter(Boolean)
  };
  const homeProductsProps = { page, products, category, limit, productsCount };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { ...metadata, "data-astro-transition-scope": renderTransition($$result, "rpl33o7b") }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "HomeProducts", $$HomeProducts, { ...homeProductsProps })} ` })}`;
}, "C:/Users/Usuario/Programming projects 2024/mpd-tienda/src/pages/index.astro", "self");

const $$file = "C:/Users/Usuario/Programming projects 2024/mpd-tienda/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
