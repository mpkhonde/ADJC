export interface LanguageContent {
  home: string;
  about: string;
  services: string;
  events: string;
  contact: string;

  welcomeText: {
    title: string;
    subtitle: string;
  };

  aboutText: string;
  servicesText: string;
  eventsText: string;

  name: string;
  email: string;
  phone: string;
  message: string;

  namePlaceholder: string;
  emailPlaceholder: string;
  phonePlaceholder: string;
  messagePlaceholder: string;

  send: string;
  fillRequired: string;
  thanksMessage: string;

  schedule: string[];

  findUs: string;
  addressLine1: string;
  addressLine2: string;
}

export interface Translations {
  sv: LanguageContent;
  en: LanguageContent;
  fr: LanguageContent;
}
