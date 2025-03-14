/**
 * Middleware que se ejecuta antes de cada solicitud.
 * Verifica si la ruta está protegida y si el usuario tiene una sesión válida.
 * Si la ruta está protegida y el usuario no tiene una sesión válida, redirige a la ruta de redirección.
 */
import { defineMiddleware } from "astro:middleware";
import { app } from "@/firebase/server";
import micromatch from "micromatch";
import { getAuth, type DecodedIdToken } from "firebase-admin/auth";
import { type AstroCookies } from "astro";
import type { MiddlewareHandler } from "astro";

const auth = getAuth(app);
const protectedRoutes = ["/admin/dashboard/**"];
const redirectRoute = "/admin";
const signinRoute = "/admin/signin";
const registerRoute = "/admin/register";

// Función auxiliar para verificar la sesión del usuario
async function verifySession(
  cookies: AstroCookies
): Promise<DecodedIdToken | null> {
  const sessionCookie: string | undefined = cookies.get("__session")?.value;
  if (!sessionCookie) return null;

  try {
    const decodedCookie: DecodedIdToken = await auth.verifySessionCookie(
      sessionCookie
    );

    const user = await auth.getUser(decodedCookie.uid);
    return user ? decodedCookie : null;
  } catch {
    return null;
  }
}

// Middleware que se ejecuta antes de cada solicitud
export const onRequest: MiddlewareHandler = defineMiddleware(
  async (
    {
      url,
      cookies,
      redirect,
      locals,
    }: {
      url: URL;
      cookies: AstroCookies;
      redirect: Function;
      locals: { emailUser?: string };
    },
    next: Function
  ) => {
    const { pathname } = url;
    const isProtected = micromatch.isMatch(pathname, protectedRoutes);
    const isSigninOrRegister = micromatch.isMatch(pathname, [
      signinRoute,
      registerRoute,
      redirectRoute,
    ]);

    let user = await verifySession(cookies);

    if (isProtected) {
      if (!user) {
        return redirect(redirectRoute);
      }
    } else if (user && isSigninOrRegister) {
      return redirect("/admin/dashboard");
    }

    locals.emailUser = user?.email;
    return next();
  }
);
