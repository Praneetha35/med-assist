// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: "Hello! I am your First Aid Assistant. How can I help you with emergency advice today?",
      placeholder: "Type your message...",
      send: "Send",
      // Add more English translations here
    },
  },
  es: {
    translation: {
      welcome: "¡Hola! Soy tu asistente de primeros auxilios. ¿Cómo puedo ayudarte con consejos de emergencia hoy?",
      placeholder: "Escribe tu mensaje...",
      send: "Enviar",
      // Add more Spanish translations here
    },
  },
  fr: {
    translation: {
      welcome: "Bonjour! Je suis votre assistant de premiers secours. Comment puis-je vous aider avec des conseils d'urgence aujourd'hui?",
      placeholder: "Tapez votre message...",
      send: "Envoyer",
      // Add more French translations here
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
