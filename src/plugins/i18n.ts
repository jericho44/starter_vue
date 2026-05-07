import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    welcome: 'Welcome to Boilerplate',
  },
  id: {
    welcome: 'Selamat datang di Boilerplate',
  },
}

export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
})
