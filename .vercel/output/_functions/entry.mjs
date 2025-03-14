import { renderers } from './renderers.mjs';
import { a as actions } from './chunks/_noop-actions_CfKMStZn.mjs';
import { c as createExports } from './chunks/entrypoint_CVasKRlx.mjs';
import { manifest } from './manifest_DTHb7Q-X.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/admin/dashboard/add.astro.mjs');
const _page2 = () => import('./pages/admin/dashboard/analytics.astro.mjs');
const _page3 = () => import('./pages/admin/dashboard/edit/_id_.astro.mjs');
const _page4 = () => import('./pages/admin/dashboard/settings.astro.mjs');
const _page5 = () => import('./pages/admin/dashboard.astro.mjs');
const _page6 = () => import('./pages/admin/register.astro.mjs');
const _page7 = () => import('./pages/admin/signin.astro.mjs');
const _page8 = () => import('./pages/admin.astro.mjs');
const _page9 = () => import('./pages/api/admin/updateaccount.astro.mjs');
const _page10 = () => import('./pages/api/auth/register.astro.mjs');
const _page11 = () => import('./pages/api/auth/signin.astro.mjs');
const _page12 = () => import('./pages/api/auth/signout.astro.mjs');
const _page13 = () => import('./pages/api/products/_id_.astro.mjs');
const _page14 = () => import('./pages/api/products.astro.mjs');
const _page15 = () => import('./pages/preguntas.astro.mjs');
const _page16 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/admin/dashboard/add.astro", _page1],
    ["src/pages/admin/dashboard/analytics/index.astro", _page2],
    ["src/pages/admin/dashboard/edit/[id].astro", _page3],
    ["src/pages/admin/dashboard/settings/index.astro", _page4],
    ["src/pages/admin/dashboard.astro", _page5],
    ["src/pages/admin/register.astro", _page6],
    ["src/pages/admin/signin.astro", _page7],
    ["src/pages/admin/index.astro", _page8],
    ["src/pages/api/admin/updateAccount.ts", _page9],
    ["src/pages/api/auth/register.ts", _page10],
    ["src/pages/api/auth/signin.ts", _page11],
    ["src/pages/api/auth/signout.ts", _page12],
    ["src/pages/api/products/[id].ts", _page13],
    ["src/pages/api/products/index.ts", _page14],
    ["src/pages/preguntas/index.astro", _page15],
    ["src/pages/index.astro", _page16]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions,
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "9faa0550-fa82-422c-83cc-8d811213507e",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
