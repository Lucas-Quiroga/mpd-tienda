import { a as createComponent, r as renderComponent, e as renderTemplate } from '../../../chunks/astro/server_DCqJloi2.mjs';
import 'kleur/colors';
import { $ as $$Admin } from '../../../chunks/Admin.layout_uGAoUIhi.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Add = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$Admin, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AddProduct", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "@/components/admin/AddProduct", "client:component-export": "default" })} ` })}`;
}, "C:/Users/Usuario/Programming projects 2024/mpd-tienda/src/pages/admin/dashboard/add.astro", void 0);

const $$file = "C:/Users/Usuario/Programming projects 2024/mpd-tienda/src/pages/admin/dashboard/add.astro";
const $$url = "/admin/dashboard/add";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Add,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
