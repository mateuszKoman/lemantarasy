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
    logoAlt: 'Leman Tarasy',
    title: 'Tarasy, żaluzje tarasowe, zadaszenia',
    lead: 'Kompleksowe rozwiązania dla Twojej przestrzeni zewnętrznej.',
    photoAlt: 'Zadaszony taras z drewnianymi żaluzjami – realizacja Leman Tarasy',
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
    /** Describes each project for screen readers and search engines, keyed by project id. */
    projects: {
      '01': 'Drewniany taras z zadaszeniem i żaluzjami na drewnianej konstrukcji',
      '02': 'Żaluzje tarasowe w ciemnych ramach osłaniające taras',
      '03': 'Drewniane żaluzje tarasowe przy ścianie domu',
      '04': 'Drewniane żaluzje tarasowe na ciemnej konstrukcji przy tarasie',
      '05': 'Altana ogrodowa z drewnianymi żaluzjami',
      '06': 'Zadaszony taras przy domu z drewnianymi żaluzjami i wypoczynkiem',
      '07': 'Osłona z drewnianych żaluzji na ciemnej konstrukcji',
      '08': 'Drewniany budynek garażowy',
      '09': 'Taras z pergolą na grafitowej konstrukcji',
      '10': 'Zadaszony taras z zasłonami',
    } as Record<string, string>,
    openProjectLabel: (description: string, photos: number) =>
      `${description} – otwórz galerię (${photoCount(photos)})`,
  },
  lightbox: {
    label: 'Galeria zdjęć',
    photoAlt: (description: string, photoNumber: number, photos: number) =>
      `${description} – zdjęcie ${photoNumber} z ${photos}`,
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
    areaLabel: 'Obszar działania',
    area: 'Biłgoraj i okolice',
  },
  footer: {
    tagline: 'Leman Tarasy · Biłgoraj i okolice',
  },
} as const;
