import { c as createAstro, a as createComponent, e as renderTemplate, u as unescapeHTML, f as addAttribute, r as renderComponent, b as renderHead, d as renderSlot } from './astro/server_DCqJloi2.mjs';
import 'kleur/colors';
/* empty css                             */
import 'clsx';
import { g as getAuthSession, $ as $$ClientRouter, a as $$ThemeScript, b as $$Aside } from './ThemeScript_CoEJhq7_.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://template-ecommerce-rosy.vercel.app/");
const $$SeoMeta = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SeoMeta;
  const {
    title,
    description,
    image = "/default-og-image.jpg",
    canonicalURL = Astro2.url,
    keywords = [],
    noindex = false,
    nofollow = false
  } = Astro2.props;
  const siteUrl = Astro2.site ? Astro2.site.href : "/";
  const canonicalURLString = typeof canonicalURL === "string" ? canonicalURL : canonicalURL.href;
  const imageUrl = new URL(image, siteUrl).href;
  const robotsContent = [
    noindex ? "noindex" : "index",
    nofollow ? "nofollow" : "follow"
  ].join(",");
  return renderTemplate(_a || (_a = __template(["<!-- SEO --><title>", '</title><meta charset="UTF-8"><meta name="description"', '><link rel="canonical"', ">", '<!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:url"', '><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><!-- Otras etiquetas meta \xFAtiles --><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots"', '><meta name="googlebot"', '><!-- JSON-LD para Rich Snippets --><script type="application/ld+json">', "<\/script>"])), title, addAttribute(description, "content"), addAttribute(canonicalURLString, "href"), keywords.length > 0 && renderTemplate`<meta name="keywords"${addAttribute(keywords.join(", "), "content")}>`, addAttribute(canonicalURLString, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(imageUrl, "content"), addAttribute(canonicalURLString, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(imageUrl, "content"), addAttribute(robotsContent, "content"), addAttribute(robotsContent, "content"), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: canonicalURLString,
    name: title,
    description,
    image: imageUrl
  })));
}, "C:/Users/Usuario/Programming projects 2024/mpd-tienda/src/components/SeoMeta.astro", void 0);

const $$Astro = createAstro("https://template-ecommerce-rosy.vercel.app/");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description, image, canonicalURL, keywords } = Astro2.props;
  const session = await getAuthSession(Astro2.cookies);
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "SeoMeta", $$SeoMeta, { "title": title, "description": description, "image": image, "canonicalURL": canonicalURL, "keywords": keywords })}${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderComponent($$result, "ThemeScript", $$ThemeScript, {})}${renderHead()}</head> <body class="h-full"> <div class="flex flex-wrap min-h-screen bg-gray-100 dark:bg-gray-950"> ${renderComponent($$result, "Aside", $$Aside, { "session": session })} <main class="flex-1"> ${renderSlot($$result, $$slots["default"])} </main> </div> </body></html>`;
}, "C:/Users/Usuario/Programming projects 2024/mpd-tienda/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
