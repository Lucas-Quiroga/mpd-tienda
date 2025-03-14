import { a as createComponent, r as renderComponent, e as renderTemplate } from '../../chunks/astro/server_DCqJloi2.mjs';
import 'kleur/colors';
import { $ as $$Admin } from '../../chunks/Admin.layout_uGAoUIhi.mjs';
export { renderers } from '../../renderers.mjs';

const $$Register = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$Admin, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "RegisterAdmin", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/Users/Usuario/Programming projects 2024/mpd-tienda/src/components/admin/RegisterAdmin.tsx", "client:component-export": "default" })} ` })}`;
}, "C:/Users/Usuario/Programming projects 2024/mpd-tienda/src/pages/admin/register.astro", void 0);

const $$file = "C:/Users/Usuario/Programming projects 2024/mpd-tienda/src/pages/admin/register.astro";
const $$url = "/admin/register";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Register,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
