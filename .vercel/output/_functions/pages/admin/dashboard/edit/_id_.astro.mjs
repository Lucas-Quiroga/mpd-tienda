import { c as createAstro, a as createComponent, r as renderComponent, e as renderTemplate } from '../../../../chunks/astro/server_DCqJloi2.mjs';
import 'kleur/colors';
import { a as app } from '../../../../chunks/server_P5MSvK9A.mjs';
import { getFirestore } from 'firebase-admin/firestore';
import { $ as $$Admin } from '../../../../chunks/Admin.layout_uGAoUIhi.mjs';
export { renderers } from '../../../../renderers.mjs';

const getProduct = async (id) => {
  const db = getFirestore(app);
  const productRef = db.collection("products");
  const productSnapshot = await productRef.doc(id).get();
  return productSnapshot;
};

const $$Astro = createAstro("https://template-ecommerce-rosy.vercel.app/");
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  if (!id) {
    return Astro2.redirect("/404");
  }
  const productExist = await getProduct(id);
  if (!productExist.exists) {
    return Astro2.redirect("/404");
  }
  const product = productExist.data();
  product.id = id;
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$Admin, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "EditProduct", null, { "client:only": true, "product": product, "client:component-hydration": "only", "client:component-path": "@/components/admin/EditProduct", "client:component-export": "default" })} ` })}`;
}, "C:/Users/Usuario/Programming projects 2024/mpd-tienda/src/pages/admin/dashboard/edit/[id].astro", void 0);

const $$file = "C:/Users/Usuario/Programming projects 2024/mpd-tienda/src/pages/admin/dashboard/edit/[id].astro";
const $$url = "/admin/dashboard/edit/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
