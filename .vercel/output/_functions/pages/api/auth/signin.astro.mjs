import { a as app } from '../../../chunks/server_P5MSvK9A.mjs';
import { getAuth } from 'firebase-admin/auth';
export { renderers } from '../../../renderers.mjs';

const GET = async ({ request, cookies }) => {
  const auth = getAuth(app);
  const idToken = request.headers.get("Authorization")?.split("Bearer ")[1];
  if (!idToken) {
    return new Response(JSON.stringify({ error: "Token no encontrado" }), {
      status: 401
    });
  }
  try {
    await auth.verifyIdToken(idToken);
  } catch (error) {
    return new Response(JSON.stringify({ error: "Token invalido" }), {
      status: 401
    });
  }
  const fiveDays = 60 * 60 * 24 * 5 * 1e3;
  const sessionCookie = await auth.createSessionCookie(idToken, {
    expiresIn: fiveDays
  });
  cookies.set("__session", sessionCookie, {
    path: "/"
  });
  return new Response(JSON.stringify({ url: "/admin/dashboard" }), {
    status: 200
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
