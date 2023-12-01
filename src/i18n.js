// Example initialization file (i18n.js)
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { LocalTh } from "./locals/th/localTh";
import { LocalEn } from "./locals/en/localEn";

const resources = {
  th: {
    translation: {
      ...LocalTh,
      ACTIVE: "hello",
    },
  },
  en: {
    translation: {
      ...LocalEn,
      ACTIVE: "not hello",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "th",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
