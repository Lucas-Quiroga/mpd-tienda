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
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ],
  contact: {
    phone: PHONE_NUMBER,
    whatsappUrl: API_URL,
  },
};
