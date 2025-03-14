import { a as app } from '../../chunks/server_P5MSvK9A.mjs';
import { getFirestore } from 'firebase-admin/firestore';
export { renderers } from '../../renderers.mjs';

function transformFormDataToProduct(formData) {
  const name = formData.get("name")?.toString() ?? "";
  const image = formData.get("image")?.toString() ?? "";
  const description = formData.get("description")?.toString();
  const price = Number(formData.get("price"));
  const avaliable = formData.get("avaliable") === "on";
  const category = formData.get("category")?.toString() ?? "";
  return { name, image, description, price, avaliable, category };
}
const POST = async ({ request }) => {
  const formData = await request.formData();
  const product = transformFormDataToProduct(formData);
  if (!product) {
    return new Response(
      JSON.stringify({ error: "Faltan datos del formulario" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
  try {
    const db = getFirestore(app);
    const productsRef = db.collection("products");
    const docRef = await productsRef.add({
      ...product,
      createdAt: /* @__PURE__ */ new Date()
    });
    return new Response(JSON.stringify({ success: true, id: docRef.id }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Algo salió mal" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
