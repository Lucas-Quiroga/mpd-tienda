import { getAuth } from 'firebase-admin/auth';
import { a as app } from '../../../chunks/server_P5MSvK9A.mjs';
export { renderers } from '../../../renderers.mjs';

const POST = async ({ request }) => {
  const auth = getAuth(app);
  const idToken = request.headers.get("Authorization")?.split("Bearer ")[1];
  if (!idToken) {
    return new Response(JSON.stringify({ error: "Token no encontrado" }), {
      status: 401
    });
  }
  try {
    const decodedToken = await auth.verifyIdToken(idToken);
    const uid = decodedToken.uid;
    const data = await request.json();
    const { currentPassword, newPassword, repeatNewPassword, name } = data;
    if (newPassword) {
      try {
        await auth.updateUser(uid, {
          password: newPassword
        });
      } catch (error) {
        return new Response(
          JSON.stringify({ error: "Error al actualizar la contraseña" }),
          {
            status: 400
          }
        );
      }
    }
    if (name) {
      try {
        await auth.updateUser(uid, {
          displayName: name
        });
      } catch (error) {
        return new Response(
          JSON.stringify({ error: "Error al actualizar el nombre" }),
          {
            status: 400
          }
        );
      }
    }
    return new Response(JSON.stringify({ message: "Cuenta actualizada" }), {
      status: 200
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Token inválido" }), {
      status: 401
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
