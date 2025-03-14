import { c as createAstro, a as createComponent, r as renderComponent, e as renderTemplate, u as unescapeHTML } from '../chunks/astro/server_DCqJloi2.mjs';
import 'kleur/colors';
import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { c as cn, D as DATA_TIENDA } from '../chunks/ThemeScript_B1KfZH_o.mjs';
import { $ as $$Layout } from '../chunks/Layout_DWfGByaq.mjs';
export { renderers } from '../renderers.mjs';

const Accordion = AccordionPrimitive.Root;
const AccordionItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AccordionPrimitive.Item,
  {
    ref,
    className: cn("border-b", className),
    ...props
  }
));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs(
  AccordionPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(
  AccordionPrimitive.Content,
  {
    ref,
    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

function Faqs() {
  return /* @__PURE__ */ jsx("section", { className: "w-full py-12 md:py-24 lg:py-32", children: /* @__PURE__ */ jsx("div", { className: "container px-4 md:px-6", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white", children: "Preguntas Frecuentes" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground md:text-xl/relaxed dark:text-white", children: "Encuentra respuestas a las preguntas más comunes sobre nuestros servicios." })
    ] }),
    /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, children: DATA_TIENDA.faqs.map((faq, index) => /* @__PURE__ */ jsxs(AccordionItem, { value: `question-${index}`, children: [
      /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-xl  font-medium dark:text-white", children: faq.question }),
      /* @__PURE__ */ jsx(AccordionContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-4 py-4 text-muted-foreground text-lg dark:text-white", children: /* @__PURE__ */ jsx("p", { children: faq.answer }) }) })
    ] }, index)) })
  ] }) }) });
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://template-ecommerce-rosy.vercel.app/");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  let canonicalURL;
  if (Astro2.site) {
    canonicalURL = new URL(Astro2.url.pathname, Astro2.site).toString();
  } else {
    canonicalURL = Astro2.url.pathname;
  }
  const metadata = {
    title: "Preguntas Frecuentes | Mi Tienda Online",
    description: "Encuentra respuestas a las preguntas m\xE1s comunes sobre nuestros productos, env\xEDos, devoluciones y m\xE1s en nuestra secci\xF3n de Preguntas Frecuentes.",
    image: "/images/faq-hero.jpg",
    // Asegúrate de tener una imagen relevante para la página de FAQ
    canonicalURL,
    keywords: ["FAQ", "Preguntas Frecuentes", "Ayuda", "Soporte", "Informaci\xF3n"],
    schema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        // Aquí deberías incluir tus preguntas y respuestas más importantes
        {
          "@type": "Question",
          name: "\xBFCu\xE1l es el tiempo de entrega?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nuestro tiempo de entrega est\xE1ndar es de 3-5 d\xEDas h\xE1biles."
          }
        }
        // Añade más preguntas y respuestas según sea necesario
      ]
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { ...metadata }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', "<\/script> ", " "])), unescapeHTML(JSON.stringify(metadata.schema)), renderComponent($$result2, "Faqs", Faqs, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/Faqs", "client:component-export": "default" })) })}`;
}, "C:/Users/Usuario/Programming projects 2024/mpd-tienda/src/pages/preguntas/index.astro", void 0);

const $$file = "C:/Users/Usuario/Programming projects 2024/mpd-tienda/src/pages/preguntas/index.astro";
const $$url = "/preguntas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
