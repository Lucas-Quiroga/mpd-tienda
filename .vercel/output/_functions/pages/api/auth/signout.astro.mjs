export { renderers } from '../../../renderers.mjs';

const GET = async ({ redirect, cookies }) => {
  cookies.delete("__session", {
    path: "/"
  });
  return new Response(JSON.stringify({ url: "/admin" }), {
    status: 200
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
