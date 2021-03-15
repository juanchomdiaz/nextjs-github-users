import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';

Enzyme.configure({ adapter: new Adapter() });

//Instantiating i18n to expose it in jest
import translations from "@i18n/translations";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbackLng: ["en", "es", "fr", "de", "it"],
  resources: translations,
  lng: "en",
  //debug: true,

  keySeparator: false,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
