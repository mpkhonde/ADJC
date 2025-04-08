import type { Translations } from './types/translations';

const translations: Translations = {
  sv: {
    home: 'Hem',
    about: 'Om oss',
    services: 'Gudstjänster',
    events: 'Evenemang',
    contact: 'Kontakt',

    welcomeText: {
      title: 'Välkommen',
      subtitle: 'Vi är en gemenskap som sprider hopp och tro.',
    },

    aboutText: 'Vi är en församling som tror på kärlek, hopp och gemenskap.',
    servicesText: '',
    eventsText: 'Håll utkik efter kommande samlingar och aktiviteter.',

    name: 'Namn',
    email: 'E-post',
    phone: 'Telefon (valfritt)',
    message: 'Meddelande',
    send: 'Skicka',

    namePlaceholder: 'Ditt namn',
    emailPlaceholder: 'din@email.se',
    phonePlaceholder: '070-123 45 67',
    messagePlaceholder: 'Vad vill du meddela oss?',
    fillRequired: 'Vänligen fyll i namn, e-post och meddelande.',
    thanksMessage: 'Tack för ditt meddelande, {name}!\nVi kontaktar dig via {email}{phone}.',

    schedule: [
      'Söndagar kl 11:00 - 14:00 – Huvudgudstjänst',
      'Lördagar kl 22:30 - 23:15 – Bön online',
      'Onsdagar kl 18:00 - 20:00 – Huvudgudstjänst',
      'Fredagar kl 18:00 - 20:00 – Bibelstudium',
    ],

    findUs: 'Här hittar du oss',
    addressLine1: 'Solkraftsvägen 14 B',
    addressLine2: '135 44 Tyresö, Sverige',
  },

  en: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    events: 'Events',
    contact: 'Contact',

    welcomeText: {
      title: 'Welcome',
      subtitle: 'We are a community that spreads hope and faith.',
    },

    aboutText: 'We are a church that believes in love, hope, and fellowship.',
    servicesText: '',
    eventsText: 'Stay tuned for upcoming gatherings and activities.',

    name: 'Name',
    email: 'Email',
    phone: 'Phone (optional)',
    message: 'Message',
    send: 'Send',

    namePlaceholder: 'Your name',
    emailPlaceholder: 'you@email.com',
    phonePlaceholder: '070-123 45 67',
    messagePlaceholder: 'What would you like to share with us?',
    fillRequired: 'Please fill in name, email, and message.',
    thanksMessage: 'Thank you for your message, {name}!\nWe will contact you via {email}{phone}.',

    schedule: [
      'Sundays 11:00 - 14:00 – Main Service',
      'Saturdays 22:30 - 23:15 – Online Prayer',
      'Wednesdays 18:00 - 20:00 – Main Service',
      'Fridays 18:00 - 20:00 – Bible Study',
    ],

    findUs: 'Where to find us',
    addressLine1: 'Solkraftsvägen 14 B',
    addressLine2: '135 44 Tyresö, Sweden',
  },

  fr: {
    home: 'Accueil',
    about: 'À propos',
    services: 'Services',
    events: 'Événements',
    contact: 'Contact',

    welcomeText: {
      title: 'Bienvenue',
      subtitle: 'Nous sommes une communauté qui répand l’espoir et la foi.',
    },

    aboutText: 'Nous sommes une église qui croit en l’amour, l’espoir et la communion.',
    servicesText: '',
    eventsText: 'Restez à l’affût des prochaines rencontres et activités.',

    name: 'Nom',
    email: 'E-mail',
    phone: 'Téléphone (optionnel)',
    message: 'Message',
    send: 'Envoyer',

    namePlaceholder: 'Votre nom',
    emailPlaceholder: 'vous@email.com',
    phonePlaceholder: '070-123 45 67',
    messagePlaceholder: 'Que voulez-vous nous dire ?',
    fillRequired: 'Veuillez remplir le nom, l’e-mail et le message.',
    thanksMessage: 'Merci pour votre message, {name}!\nNous vous contacterons via {email}{phone}.',

    schedule: [
      'Dimanches 11h00 - 14h00 – Culte principal',
      'Samedis 22h30 - 23h15 – Prière en ligne',
      'Mercredis 18h00 - 20h00 – Culte principal',
      'Vendredis 18h00 - 20h00 – Étude biblique',
    ],

    findUs: 'Où nous trouver',
    addressLine1: 'Solkraftsvägen 14 B',
    addressLine2: '135 44 Tyresö, Suède',
  }
};

export default translations;
