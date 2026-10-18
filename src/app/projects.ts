export interface Project {
  id: string;
  thumbnail: string;
  photos: readonly string[];
}

/** The first photo in each list is the one shown when the gallery opens. */
function project(id: string, photoNames: readonly string[]): Project {
  return {
    id,
    thumbnail: `images/thumbs/${id}.jpg`,
    photos: photoNames.map((name) => `images/fulls/${name}.jpg`),
  };
}

export const PROJECTS: readonly Project[] = [
  project('04', ['04', '04a', '04b', '04c']),
  project('06', ['06i', '06', '06e', '06d', '06b', '06a', '06f', '06g', '06h']),
  project('03', ['03', '03c', '03b', '03d']),
  project('01', ['01', '01c', '01a', '01b']),
  project('05', ['05', '05b', '05a']),
  project('02', ['02', '02c', '02a', '02b']),
  project('07', ['07', '07a', '07b', '07c']),
  project('08', ['08', '08a', '08b', '08c']),
  project('09', ['09d', '09e', '09b', '09c', '09a']),
  project('10', ['10f', '10a', '10b', '10c', '10d', '10e']),
];
