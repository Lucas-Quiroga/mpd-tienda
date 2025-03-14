import { a as createComponent, r as renderComponent, e as renderTemplate } from '../../chunks/astro/server_DCqJloi2.mjs';
import 'kleur/colors';
import { $ as $$Admin } from '../../chunks/Admin.layout_DqoiuGx-.mjs';
export { renderers } from '../../renderers.mjs';

const $$Signin = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$Admin, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "LoginAdmin", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/admin/LoginAdmin", "client:component-export": "default" })} ` })}`;
}, "C:/Users/Usuario/Programming projects 2024/mpd-tienda/src/pages/admin/signin.astro", void 0);

const $$file = "C:/Users/Usuario/Programming projects 2024/mpd-tienda/src/pages/admin/signin.astro";
const $$url = "/admin/signin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Signin,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
