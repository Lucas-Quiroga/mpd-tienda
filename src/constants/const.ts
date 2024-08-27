import type { DataTienda } from "@/types/types";

export const CATEGORY_SELECT: string[] = [
  "Soquetes",
  "Accesorios",
  "Calcomanias",
  "420",
  "Medias 3/4",
];

export const LOCAL_STORAGE_KEY: string = "cart_mpd";

export const API_URL: string = "https://api.whatsapp.com/send";
export const PHONE_NUMBER: string = "+5491121611635";

export const DATA_TIENDA: DataTienda = {
  header: {
    title: "Medias Por Doquier",
  },
  categories: CATEGORY_SELECT,
  faqs: [
    {
      question: "Métodos de pago?",
      answer:
        "Transferencia bancaria, mercado pago o efectivo al momento de la entrega.",
    },
    {
      question: "Envíos?",
      answer:
        "Envío a domicilio con motomensajería de confianza - Envíos a domicilio con uber flex - Puntos de encuentro únicamente en Av. San Martín y Av. Crovara - Retiro por domicilio (ciudad madero). Cualquier método de envío es coordinado al momento del pago.",
    },
    {
      question: "Hacen stickers personalizados?",
      answer:
        "Por el momento no contamos con este servicio pero estamos trabajando para ello.",
    },
    {
      question: "Que talles son las medias?",
      answer:
        "Todas nuestras medias abarcan de un único talle para adulto que abarca desde un 33 a un 45 inclusive.",
    },
    {
      question: "Políticas de cambio y trabajo",
      answer:
        "No realizamos cambios. Y el pedido para ser reservado o guardado debe ser abonado en su totalidad o el 50%.",
    },
  ],
  contact: {
    phone: PHONE_NUMBER,
    whatsappUrl: API_URL,
  },
};
