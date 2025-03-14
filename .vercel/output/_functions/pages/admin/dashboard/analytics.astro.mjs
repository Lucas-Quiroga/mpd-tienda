import { a as createComponent, r as renderComponent, e as renderTemplate } from '../../../chunks/astro/server_DCqJloi2.mjs';
import 'kleur/colors';
import { $ as $$Admin } from '../../../chunks/Admin.layout_DqoiuGx-.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Admin", $$Admin, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Analytics", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "@/components/admin/Analytics", "client:component-export": "default" })} ` })}`;
}, "C:/Users/Usuario/Programming projects 2024/mpd-tienda/src/pages/admin/dashboard/analytics/index.astro", void 0);

const $$file = "C:/Users/Usuario/Programming projects 2024/mpd-tienda/src/pages/admin/dashboard/analytics/index.astro";
const $$url = "/admin/dashboard/analytics";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
