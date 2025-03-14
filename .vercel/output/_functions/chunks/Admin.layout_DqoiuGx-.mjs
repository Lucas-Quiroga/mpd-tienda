import { c as createAstro, a as createComponent, r as renderComponent, b as renderHead, d as renderSlot, e as renderTemplate } from './astro/server_DCqJloi2.mjs';
import 'kleur/colors';
/* empty css                             */
import { g as getAuthSession, $ as $$ClientRouter, a as $$ThemeScript, b as $$Aside } from './ThemeScript_B1KfZH_o.mjs';

const $$Astro = createAstro("https://template-ecommerce-rosy.vercel.app/");
const $$Admin = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Admin;
  const title = "Admin";
  const session = await getAuthSession(Astro2.cookies);
  return renderTemplate`<html lang="es"> <head><meta charset="utf-8"><meta name="robots" content="noindex, nofollow"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${title}</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderComponent($$result, "ThemeScript", $$ThemeScript, {})}${renderHead()}</head> <body class="h-full"> <div class="flex flex-wrap min-h-screen bg-gray-100 dark:bg-gray-950"> ${session && renderTemplate`${renderComponent($$result, "Aside", $$Aside, { "session": session })}`} <main class="flex-1"> ${renderSlot($$result, $$slots["default"])} </main> </div> </body></html>`;
}, "C:/Users/Usuario/Programming projects 2024/mpd-tienda/src/layouts/Admin.layout.astro", void 0);

export { $$Admin as $ };
