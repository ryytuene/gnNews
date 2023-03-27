import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
      pl: {
        translations: require('./locales/pl/translations.json'),
        sidebar: require('./locales/pl/sidebar.json')
      },
      en: {
        translations: require('./locales/en/translations.json'),
        sidebar: require('./locales/en/sidebar.json')
      }
    },
    ns: ['translations', 'sidebar'],
    defaultNS: 'translations',
    lng: 'pl',
    fallbackLng: 'en'
  });

i18n.languages = ['pl', 'en'];

export default i18n;