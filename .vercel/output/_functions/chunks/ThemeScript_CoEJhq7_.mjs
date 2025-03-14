import { a as app } from './server_P5MSvK9A.mjs';
import { getAuth } from 'firebase-admin/auth';
import { c as createAstro, a as createComponent, f as addAttribute, i as renderScript, e as renderTemplate, m as maybeRenderHead, r as renderComponent } from './astro/server_DCqJloi2.mjs';
import 'kleur/colors';
import { clsx } from 'clsx';
/* empty css                             */
import { SlMagicWand } from 'react-icons/sl';
import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import React__default, { useState, useRef, useCallback, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';
import { TfiPanel } from 'react-icons/tfi';
import { MdAdd, MdOutlineLogout } from 'react-icons/md';
import { GoHome } from 'react-icons/go';
import { SiSimpleanalytics } from 'react-icons/si';
import { IoSettingsOutline } from 'react-icons/io5';
import { FiBox } from 'react-icons/fi';
import { FaQuestion } from 'react-icons/fa';

const auth = getAuth(app);
async function getAuthSession(cookies) {
  const sessionCookie = cookies.get("__session")?.value;
  if (!sessionCookie) return null;
  try {
    const decodedCookie = await auth.verifySessionCookie(
      sessionCookie
    );
    const user = await auth.getUser(decodedCookie.uid);
    return user ? decodedCookie : null;
  } catch {
    return null;
  }
}

const $$Astro$2 = createAstro("https://template-ecommerce-rosy.vercel.app/");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/Usuario/Programming projects 2024/mpd-tienda/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Usuario/Programming projects 2024/mpd-tienda/node_modules/astro/components/ClientRouter.astro", void 0);

const CATEGORY_SELECT = [
  "Soquetes",
  "Accesorios",
  "Calcomanias",
  "420",
  "Medias 3/4",
  "Tarjetas"
];
const LOCAL_STORAGE_KEY = "cart_mpd";
const API_URL = "https://api.whatsapp.com/send";
const PHONE_NUMBER = "+5491121611635";
const DATA_TIENDA = {
  header: {
    title: "Medias Por Doquier"
  },
  categories: CATEGORY_SELECT,
  faqs: [
    {
      question: "Métodos de pago?",
      answer: "Transferencia bancaria, mercado pago o efectivo al momento de la entrega."
    },
    {
      question: "Envíos?",
      answer: "Envío a domicilio con motomensajería de confianza - Envíos a domicilio con uber flex - Puntos de encuentro únicamente en Av. San Martín y Av. Crovara - Retiro por domicilio (ciudad madero). Cualquier método de envío es coordinado al momento del pago."
    },
    {
      question: "Hacen stickers personalizados?",
      answer: "Por el momento no contamos con este servicio pero estamos trabajando para ello."
    },
    {
      question: "Que talles son las medias?",
      answer: "Todas nuestras medias abarcan de un único talle para adulto que abarca desde un 33 a un 45 inclusive."
    },
    {
      question: "Políticas de cambio y trabajo",
      answer: "No realizamos cambios. Y el pedido para ser reservado o guardado debe ser abonado en su totalidad o el 50%."
    }
  ],
  contact: {
    phone: PHONE_NUMBER,
    whatsappUrl: API_URL
  }
};

function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const formatter = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  minimumFractionDigits: 0
});
const updateSearchParams = (type, value) => {
  const searchParams = new URLSearchParams(
    window.location.search
  );
  if (type === "category") {
    searchParams.set("page", "1");
  }
  searchParams.set(type, value);
  return `${window.location.pathname}?${searchParams.toString()}`;
};

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
  {
    variants: {
      variant: {
        default: "bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",
        destructive: "bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90",
        outline: "border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        secondary: "bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",
        ghost: "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        link: "text-slate-900 underline-offset-4 hover:underline dark:text-slate-50"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

function useFetch(initialUrl, initialOptions) {
  const [state, setState] = useState({
    data: null,
    error: null,
    isLoading: false,
    isSuccess: false
  });
  const activeRequestRef = useRef(null);
  const fetchData = useCallback(async (url, options) => {
    if (activeRequestRef.current) {
      activeRequestRef.current.abort();
    }
    const abortController = new AbortController();
    activeRequestRef.current = abortController;
    setState((prev) => ({ ...prev, isLoading: true }));
    try {
      const headers = new Headers(options?.headers);
      if (options?.token) {
        headers.set("Authorization", `Bearer ${options.token}`);
      }
      const response = await fetch(url, {
        ...options,
        headers,
        signal: abortController.signal
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      setState({ data, error: null, isLoading: false, isSuccess: true });
      return { data, response };
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") {
        return;
      }
      setState({
        data: null,
        error,
        isLoading: false,
        isSuccess: false
      });
      throw error;
    } finally {
      activeRequestRef.current = null;
    }
  }, []);
  const execute = useCallback(
    async (url, options) => {
      return fetchData(url, options);
    },
    [fetchData, initialUrl]
  );
  return {
    ...state,
    isError: !!state.error,
    execute
  };
}

const spinnerVariants = cva("flex-col items-center justify-center", {
  variants: {
    show: {
      true: "flex",
      false: "hidden"
    }
  },
  defaultVariants: {
    show: true
  }
});
const loaderVariants = cva("animate-spin text-primary", {
  variants: {
    size: {
      small: "size-6",
      medium: "size-8",
      large: "size-12"
    }
  },
  defaultVariants: {
    size: "medium"
  }
});
function Spinner({
  size,
  show,
  children,
  className
}) {
  return /* @__PURE__ */ jsxs("span", { className: spinnerVariants({ show }), children: [
    /* @__PURE__ */ jsx(Loader2, { className: cn(loaderVariants({ size }), className) }),
    children
  ] });
}

const iconComponents = {
  TfiPanel,
  MdAdd,
  GoHome,
  SiSimpleanalytics,
  IoSettingsOutline,
  FiBox,
  FaQuestion
};
const Nav = ({
  links,
  localStorageKey,
  isSession
}) => {
  const [selected, setSelected] = useState(0);
  const [hydrated, setHydrated] = useState(false);
  const { execute: executeLogOut, isLoading } = useFetch();
  const handleLogOut = async () => {
    try {
      const response = await executeLogOut("/api/auth/signout", {
        method: "GET"
      });
      if (response?.data.url) {
        window.location.assign(response.data.url);
      }
    } catch (error) {
      console.error("An error occurred while signing out", error);
    }
  };
  useEffect(() => {
    const savedSelected = localStorage.getItem(localStorageKey);
    if (savedSelected) {
      setSelected(parseInt(savedSelected, 10));
    }
    setHydrated(true);
  }, [localStorageKey]);
  const handleSelection = (select) => {
    setSelected(select);
    localStorage.setItem(localStorageKey, select.toString());
  };
  if (!hydrated) {
    return null;
  }
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col h-full ", children: [
    /* @__PURE__ */ jsx("nav", { className: "flex flex-col flex-grow gap-y-2 overflow-auto px-2 ", children: links.map((link) => /* @__PURE__ */ jsxs(
      "a",
      {
        href: link.href,
        onClick: () => handleSelection(link.select),
        className: cn(
          "flex justify-between items-center w-full",
          buttonVariants({
            variant: selected === link.select ? "default" : "secondary",
            size: "lg"
          }),
          selected === link.select && "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white"
        ),
        children: [
          /* @__PURE__ */ jsx("span", { className: "flex items-center w-6 h-6 mr-2", children: link.icon && React__default.createElement(iconComponents[link.icon], {
            className: "w-full h-full"
          }) }),
          /* @__PURE__ */ jsx("span", { className: "flex-grow text-left", children: link.name })
        ]
      },
      link.select
    )) }),
    isSession && /* @__PURE__ */ jsx("div", { className: "w-full mt-auto", children: /* @__PURE__ */ jsxs(
      Button,
      {
        onClick: handleLogOut,
        disabled: isLoading,
        className: cn(
          buttonVariants({
            variant: "secondary",
            size: "lg"
          }),
          "dark:bg-muted dark:text-black dark:hover:bg-muted dark:hover:text-white cursor-pointer w-full"
        ),
        children: [
          /* @__PURE__ */ jsx(MdOutlineLogout, { size: 24 }),
          isLoading ? /* @__PURE__ */ jsx(Spinner, { size: "medium" }) : "Cerrar sesión"
        ]
      }
    ) })
  ] });
};

const $$Astro$1 = createAstro("https://template-ecommerce-rosy.vercel.app/");
const $$Aside = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Aside;
  const { session } = Astro2.props;
  const routes = {
    admin: [
      { name: "Productos", href: "/admin/dashboard", icon: FiBox, select: 0 },
      {
        name: "Agregar",
        href: "/admin/dashboard/add",
        icon: MdAdd,
        select: 1
      },
      {
        name: "Analytics",
        href: "/admin/dashboard/analytics",
        icon: SiSimpleanalytics,
        select: 2
      },
      {
        name: "Configuraci\xF3n",
        href: "/admin/dashboard/settings",
        icon: IoSettingsOutline,
        select: 3
      },
      { name: "Inicio", href: "/", icon: GoHome, select: 4 }
    ],
    user: [
      { name: "Inicio", href: "/", icon: GoHome, select: 0 },
      { name: "Preguntas", href: "/preguntas", icon: FaQuestion, select: 1 }
    ]
  };
  return renderTemplate`${maybeRenderHead()}<aside${addAttribute([
    "w-full xl:flex-none xl:w-64 p-6 bg-white dark:bg-gray-950 dark:border-r dark:border-white min-h-full flex flex-col",
    {
      "bg-gray-100 dark:bg-gray-950": session
    }
  ], "class:list")}> <div${addAttribute([
    "space-x-2 mb-6",
    {
      "flex flex-col items-center": session,
      "flex items-center": !session
    }
  ], "class:list")}> <p class="text-lg font-bold dark:text-white"> ${session ? "Panel de administraci\xF3n" : DATA_TIENDA.header.title} </p> <p class="text-gray-400 text-sm italic"> ${session && `Bienvenido ${session.name}`} </p> ${!session && renderTemplate`${renderComponent($$result, "SlMagicWand", SlMagicWand, { "className": "dark:text-white" })}`} </div> ${session ? renderTemplate`${renderComponent($$result, "Nav", Nav, { "client:load": true, "links": routes.admin.map((route) => ({
    href: route.href,
    icon: route.icon.name,
    name: route.name,
    select: route.select
  })), "localStorageKey": "admin-aside", "isSession": session, "client:component-hydration": "load", "client:component-path": "@/components/Nav", "client:component-export": "Nav" })}` : renderTemplate`${renderComponent($$result, "Nav", Nav, { "client:load": true, "links": routes.user.map((route) => ({
    href: route.href,
    icon: route.icon.name,
    name: route.name,
    select: route.select
  })), "localStorageKey": "user-aside", "client:component-hydration": "load", "client:component-path": "@/components/Nav", "client:component-export": "Nav" })}`} </aside>`;
}, "C:/Users/Usuario/Programming projects 2024/mpd-tienda/src/components/Aside.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://template-ecommerce-rosy.vercel.app/");
const $$ThemeScript = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ThemeScript;
  return renderTemplate(_a || (_a = __template(['<script>\n  function getThemePreference() {\n    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {\n      return localStorage.getItem("theme");\n    }\n    return window.matchMedia("(prefers-color-scheme: dark)").matches\n      ? "dark"\n      : "light";\n  }\n\n  function setTheme(theme) {\n    if (theme === "dark") {\n      document.documentElement.classList.add("dark");\n    } else {\n      document.documentElement.classList.remove("dark");\n    }\n    if (typeof localStorage !== "undefined") {\n      localStorage.setItem("theme", theme);\n    }\n  }\n\n  // Establecer el tema al cargar la p\xE1gina\n  setTheme(getThemePreference());\n\n  // Cambiar el tema cuando se cambia la preferencia del sistema\n  window.addEventListener("storage", () => {\n    setTheme(getThemePreference());\n  });\n\n  // Recargar el tema cuando se cambia de p\xE1gina en Astro (SPA) o se navega entre p\xE1ginas (SSR)\n\n  document.addEventListener("astro:after-swap", () => {\n    setTheme(getThemePreference());\n  });\n<\/script>'])));
}, "C:/Users/Usuario/Programming projects 2024/mpd-tienda/src/components/ThemeScript.astro", void 0);

export { $$ClientRouter as $, Button as B, DATA_TIENDA as D, LOCAL_STORAGE_KEY as L, $$ThemeScript as a, $$Aside as b, cn as c, buttonVariants as d, formatter as f, getAuthSession as g, updateSearchParams as u };
