import { a as createComponent, r as renderComponent, e as renderTemplate } from '../chunks/astro/server_DCqJloi2.mjs';
import 'kleur/colors';
import { $ as $$Admin } from '../chunks/Admin.layout_uGAoUIhi.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
export { renderers } from '../renderers.mjs';

function WelcomeAdmin() {
  return /* @__PURE__ */ jsx("main", { className: "flex min-h-screen items-center justify-center bg-gray-100 px-4 py-12 dark:bg-gray-950", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto w-full max-w-md space-y-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50", children: "Panel de Administración" }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-gray-600 dark:text-gray-400", children: "Inicia sesión o regístrate para acceder al panel de administración." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-4", children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "admin/register",
          className: "inline-flex h-10 w-full items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300",
          children: "Registrar"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "admin/signin",
          className: "inline-flex h-10 w-full items-center justify-center rounded-md border border-gray-200 bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:text-gray-50",
          children: "Iniciar sesión"
        }
      ),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "/",
          className: "inline-flex h-10 w-[50%] items-center justify-center rounded-md border border-gray-200 bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-700 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:text-gray-50 m-auto",
          children: [
            " ",
            "Volver al inicio",
            " "
          ]
        }
      )
    ] })
  ] }) });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$Admin, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "WelcomeAdmin", WelcomeAdmin, {})} ` })}`;
}, "C:/Users/Usuario/Programming projects 2024/mpd-tienda/src/pages/admin/index.astro", void 0);

const $$file = "C:/Users/Usuario/Programming projects 2024/mpd-tienda/src/pages/admin/index.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
