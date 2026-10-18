/**
 * All text shown to visitors. The site is for Polish customers, so the copy is in Polish;
 * keep it here so the rest of the code stays language-neutral.
 */

const photoCountRules = new Intl.PluralRules('pl');
const photoCountWords: Record<Intl.LDMLPluralRule, string> = {
  zero: 'zdjęć',
  one: 'zdjęcie',
  two: 'zdjęcia',
  few: 'zdjęcia',
  many: 'zdjęć',
  other: 'zdjęć',
};

function photoCount(count: number): string {
  return `${count} ${photoCountWords[photoCountRules.select(count)]}`;
}

export const CONTENT = {
  hero: {
    logoAlt: 'Leman',
    title: 'Tarasy, żaluzje tarasowe, zadaszenia',
    lead: 'Kompleksowe rozwiązania dla Twojej przestrzeni zewnętrznej.',
    photoAlt: 'Taras z zadaszeniem i drewnianymi żaluzjami',
  },
  about: {
    eyebrow: 'O nas',
    title: 'Profesjonalne tarasy i żaluzje tarasowe – solidne rozwiązania na lata.',
    text:
      'Tworzymy nowoczesne i trwałe tarasy, zadaszenia oraz żaluzje, które podnoszą komfort ' +
      'korzystania z przestrzeni zewnętrznej. Wykonujemy również stylowe kanapy i wypoczynki ' +
      'tarasowe, dopasowane do indywidualnych potrzeb i aranżacji. Zadbaj z nami o funkcjonalną ' +
      'i estetyczną strefę relaksu w swoim ogrodzie.',
  },
  gallery: {
    eyebrow: 'Portfolio',
    title: 'Nasze realizacje',
    photoCount,
    projectAlt: (projectNumber: number) => `Realizacja ${projectNumber}`,
    openProjectLabel: (projectNumber: number, photos: number) =>
      `Otwórz galerię realizacji ${projectNumber} (${photoCount(photos)})`,
  },
  lightbox: {
    label: 'Galeria zdjęć',
    photoAlt: (photoNumber: number) => `Zdjęcie ${photoNumber}`,
    previous: 'Poprzednie zdjęcie',
    next: 'Następne zdjęcie',
    close: 'Zamknij',
  },
  contact: {
    eyebrow: 'Kontakt',
    title: 'Skontaktuj się z nami',
    text:
      'Masz pytania lub potrzebujesz pomocy? Skontaktuj się z nami - chętnie odpowiemy na ' +
      'wszystkie Twoje wątpliwości i pomożemy znaleźć najlepsze rozwiązanie.',
    phoneLabel: 'Telefon',
    emailLabel: 'E-mail',
  },
  footer: {
    tagline: 'Leman · Tarasy na zamówienie',
  },
} as const;
