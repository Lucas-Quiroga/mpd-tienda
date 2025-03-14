import { a as app } from '../../../chunks/server_P5MSvK9A.mjs';
import { getFirestore } from 'firebase-admin/firestore';
export { renderers } from '../../../renderers.mjs';

const db = getFirestore(app);
const productsRef = db.collection("products");
const POST = async ({ params, request }) => {
  const formData = await request.formData();
  const name = formData.get("name")?.toString() || "";
  const image = formData.get("image")?.toString() || "";
  const description = formData.get("description")?.toString() || "";
  const price = Number(formData.get("price")) || 0;
  const category = formData.get("category")?.toString() || "";
  const avaliable = formData.get("avaliable") === "on";
  if (!params.id) {
    return new Response(
      JSON.stringify({ error: "No se puede encontrar el producto" }),
      {
        status: 404,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
  try {
    await productsRef.doc(params.id).update({
      name,
      image,
      description,
      price,
      category,
      avaliable
    });
    return new Response(
      JSON.stringify({
        success: true,
        message: "Producto actualizado exitosamente",
        redirectUrl: "/admin/dashboard"
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: "Algo salió mal" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
const DELETE = async ({ params, redirect }) => {
  if (!params.id) {
    return new Response("No se puede encontrar el producto", {
      status: 404
    });
  }
  try {
    await productsRef.doc(params.id).delete();
    return redirect("/admin/dashboard");
  } catch (error) {
    return new Response("Algo salió mal", {
      status: 500
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
