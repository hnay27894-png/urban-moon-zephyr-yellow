export const categories = [
  {
    id: "science",
    name: "Science",
    blurb: "Cosmos, matter, and the instruments that measure them.",
  },
  {
    id: "nature",
    name: "Nature",
    blurb: "Oceans, ice, and living light.",
  },
  {
    id: "technology",
    name: "Technology",
    blurb: "Hardware, robots, and interfaces.",
  },
  {
    id: "history",
    name: "History",
    blurb: "Routes and the places they left behind.",
  },
] as const;

export type CategoryId = (typeof categories)[number]["id"];

export type Film = {
  id: string;
  title: string;
  creator: string;
  duration: number;
  category: CategoryId;
  source: "Studio" | "Archive";
  synopsis: string;
  uploadedAt: string;
  poster: string;
  trailer?: string;
};

const APP_NOW = Date.UTC(2026, 9, 26, 12, 0, 0);
const DAY = 86_400_000;

export const films: Film[] = [
  {
    id: "biolume",
    title: "Bioluminescent Oceans and the Aurora",
    creator: "Dr. Alistair Vance",
    duration: 865,
    category: "nature",
    source: "Studio",
    synopsis:
      "A night passage through the Nordic seas, where plankton light meets a low aurora. Vance treats both as the same phenomenon: living light against a dark field.",
    uploadedAt: "2026-10-24T12:00:00.000Z",
    poster: "/posters/ocean.jpg",
    trailer: "/trailers/ocean.mp4",
  },
  {
    id: "trench",
    title: "Deep Ocean Trench Mapping Expedition",
    creator: "Abyssal Watch",
    duration: 1450,
    category: "nature",
    source: "Archive",
    synopsis:
      "A mapping cruise along a Pacific trench. The picture stays with the lights of the vehicle and the slow read of the seafloor.",
    uploadedAt: "2026-09-18T12:00:00.000Z",
    poster: "/posters/trench.jpg",
  },
  {
    id: "glacier",
    title: "The Silent Symphony of Arctic Glaciers",
    creator: "Polaris Media",
    duration: 1110,
    category: "nature",
    source: "Studio",
    synopsis:
      "An Arctic face of ice, recorded for sound as much as picture: creaks, meltwater, and the long pauses between them.",
    uploadedAt: "2026-09-02T12:00:00.000Z",
    poster: "/posters/glacier.jpg",
  },
  {
    id: "cosmos",
    title: "Mapping the Edge of the Observable Universe",
    creator: "Cosmos Edge",
    duration: 1335,
    category: "science",
    source: "Studio",
    synopsis:
      "How far current telescopes can actually see, and the hard stop where the data runs out.",
    uploadedAt: "2026-09-26T12:00:00.000Z",
    poster: "/posters/cosmos.jpg",
  },
  {
    id: "particles",
    title: "Subatomic Particle Collisions Explained",
    creator: "Quantum Realm",
    duration: 845,
    category: "science",
    source: "Archive",
    synopsis:
      "What a collision leaves behind, told from the floor of a beamline instead of a textbook diagram.",
    uploadedAt: "2026-08-01T12:00:00.000Z",
    poster: "/posters/particles.jpg",
  },
  {
    id: "exo",
    title: "Exo-Atmospheres and Alien Weather",
    creator: "AstroCore",
    duration: 1180,
    category: "science",
    source: "Archive",
    synopsis:
      "Cloud bands and heat on worlds nobody can visit, and how thin the evidence for either still is.",
    uploadedAt: "2026-08-20T12:00:00.000Z",
    poster: "/posters/exo.jpg",
  },
  {
    id: "quantum",
    title: "Quantum Computing Realities in 2026",
    creator: "Nova Labs",
    duration: 760,
    category: "technology",
    source: "Studio",
    synopsis:
      "What today’s quantum hardware can run, and which parts are still a laboratory instrument rather than a computer.",
    uploadedAt: "2026-10-21T12:00:00.000Z",
    poster: "/posters/quantum.jpg",
  },
  {
    id: "swarm",
    title: "Autonomous Robotic Swarms",
    creator: "RoboDynamics",
    duration: 950,
    category: "technology",
    source: "Archive",
    synopsis:
      "A warehouse floor where small robots share one task. The film is about coordination, not spectacle.",
    uploadedAt: "2026-10-18T12:00:00.000Z",
    poster: "/posters/swarm.jpg",
  },
  {
    id: "spatial",
    title: "Designing Immersive Spatial Interfaces",
    creator: "XR Vision",
    duration: 1215,
    category: "technology",
    source: "Studio",
    synopsis:
      "Interfaces that sit in a room instead of on a screen: placement, scale, and why most of them tire you out.",
    uploadedAt: "2026-10-04T12:00:00.000Z",
    poster: "/posters/spatial.jpg",
  },
  {
    id: "silk",
    title: "Lost Cities of the Silk Road",
    creator: "Epoch Archive",
    duration: 1690,
    category: "history",
    source: "Archive",
    synopsis:
      "Ruin sites along the old trade routes, filmed as places people left rather than a reel of treasure.",
    uploadedAt: "2026-10-11T12:00:00.000Z",
    poster: "/posters/silk.jpg",
  },
];

const trendingIds = ["biolume", "quantum", "cosmos", "trench", "silk", "glacier"];

export const featuredFilm = films[0]!;

export function getFilm(id: string): Film | undefined {
  return films.find((film) => film.id === id);
}

export function filmsIn(category: CategoryId): Film[] {
  return films.filter((film) => film.category === category);
}

export function trendingFilms(): Film[] {
  return trendingIds
    .map((id) => films.find((film) => film.id === id))
    .filter((film): film is Film => film != null);
}

export function latestFilms(): Film[] {
  return [...films].sort((a, b) => Date.parse(b.uploadedAt) - Date.parse(a.uploadedAt));
}

export function categoryName(id: CategoryId): string {
  return categories.find((category) => category.id === id)?.name ?? id;
}

export function creatorList(): { name: string; count: number }[] {
  const map = new Map<string, number>();
  for (const film of films) map.set(film.creator, (map.get(film.creator) ?? 0) + 1);
  return [...map.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

export function formatDuration(total: number): string {
  const seconds = Math.max(0, Math.round(total));
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remain = seconds % 60;
  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, "0")}:${String(remain).padStart(2, "0")}`;
  }
  return `${minutes}:${String(remain).padStart(2, "0")}`;
}

export function formatAgo(iso: string): string {
  const days = Math.floor((APP_NOW - Date.parse(iso)) / DAY);
  if (days <= 0) return "Today";
  if (days === 1) return "Yesterday";
  if (days < 14) return `${days} days ago`;
  if (days < 60) return `${Math.max(1, Math.floor(days / 7))} weeks ago`;
  return `${Math.max(1, Math.floor(days / 30))} months ago`;
}
