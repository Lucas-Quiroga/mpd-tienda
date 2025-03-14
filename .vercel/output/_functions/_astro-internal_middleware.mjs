import { d as defineMiddleware, s as sequence } from './chunks/index_CryXwGSv.mjs';
import { a as app } from './chunks/server_P5MSvK9A.mjs';
import micromatch from 'micromatch';
import { getAuth } from 'firebase-admin/auth';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_BI0nilQu.mjs';
import 'kleur/colors';
import './chunks/astro/server_DCqJloi2.mjs';
import 'clsx';
import 'cookie';

const auth = getAuth(app);
const protectedRoutes = ["/admin/dashboard/**"];
const redirectRoute = "/admin";
const signinRoute = "/admin/signin";
const registerRoute = "/admin/register";
async function verifySession(cookies) {
  const sessionCookie = cookies.get("__session")?.value;
  if (!sessionCookie) return null;
  try {
    const decodedCookie = await auth.verifySessionCookie(
      sessionCookie
    );
    const user = await auth.getUser(decodedCookie.uid);
    return user ? decodedCookie : null;
  } catch {
    return null;
  }
}
const onRequest$1 = defineMiddleware(
  async ({
    url,
    cookies,
    redirect,
    locals
  }, next) => {
    const { pathname } = url;
    const isProtected = micromatch.isMatch(pathname, protectedRoutes);
    const isSigninOrRegister = micromatch.isMatch(pathname, [
      signinRoute,
      registerRoute,
      redirectRoute
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

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
