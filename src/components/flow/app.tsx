import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowLeft, Bookmark, Clock, Compass, Library, Play, Search, Users, X } from "lucide-react";
import { Toaster } from "sonner";
import {
  categories,
  categoryName,
  creatorList,
  featuredFilm,
  films,
  filmsIn,
  formatDuration,
  getFilm,
  latestFilms,
  trendingFilms,
  type CategoryId,
  type Film,
} from "@/data/catalog";
import { cn } from "@/lib/cn";
import { useLibrary } from "@/lib/library-store";
import { PlayerDialog } from "@/components/flow/player-dialog";
import { VideoCard } from "@/components/flow/video-card";

const TABS = [
  { id: "explore", label: "Explore", icon: Compass },
  { id: "following", label: "Following", icon: Users },
  { id: "latest", label: "Latest", icon: Clock },
  { id: "saved", label: "Saved", icon: Bookmark },
  { id: "library", label: "Library", icon: Library },
] as const;

type Tab = (typeof TABS)[number]["id"];

export function App() {
  const [tab, setTab] = useState<Tab>("explore");
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryId | null>(null);
  const [creator, setCreator] = useState<string | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [heroVideo, setHeroVideo] = useState(true);
  const searchRef = useRef<HTMLInputElement>(null);

  const saved = useLibrary((state) => state.saved);
  const following = useLibrary((state) => state.following);
  const progress = useLibrary((state) => state.progress);
  const seenAt = useLibrary((state) => state.seenAt);
  const toggleFollow = useLibrary((state) => state.toggleFollow);

  useEffect(() => {
    void useLibrary.persist.rehydrate();
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (activeId) return;
      const tag = (event.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") {
        if (event.key === "Escape") (event.target as HTMLInputElement).blur();
        return;
      }
      if (event.key === "/") {
        event.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeId]);

  const q = query.trim().toLowerCase();

  function matches(film: Film) {
    if (!q) return true;
    return (
      film.title.toLowerCase().includes(q) ||
      film.creator.toLowerCase().includes(q) ||
      film.synopsis.toLowerCase().includes(q) ||
      categoryName(film.category).toLowerCase().includes(q)
    );
  }

  function goHome() {
    setTab("explore");
    setCategory(null);
    setCreator(null);
    setQuery("");
  }

  function selectTab(next: Tab) {
    setTab(next);
    setCategory(null);
    setCreator(null);
  }

  function openCreator(name: string) {
    setTab("explore");
    setCategory(null);
    setCreator(name);
    setQuery("");
  }

  function openCategory(id: CategoryId) {
    setTab("explore");
    setCreator(null);
    setCategory(id);
    setQuery("");
  }

  const savedFilms = saved
    .map((id) => getFilm(id))
    .filter((film): film is Film => film != null);

  let view: ReactNode;

  if (q) {
    const pool =
      tab === "saved"
        ? savedFilms
        : tab === "following"
          ? films.filter((film) => following.includes(film.creator))
          : tab === "library"
            ? films.filter((film) => seenAt[film.id])
            : tab === "latest"
              ? latestFilms()
              : films;
    const list = pool.filter(matches);
    const heading =
      tab === "explore" ? "Results" : TABS.find((item) => item.id === tab)?.label ?? "Results";
    view = (
      <>
        <PageHead
          title={heading}
          blurb={list.length === 1 ? "1 film" : `${list.length} films`}
        />
        {list.length === 0 ? (
          <EmptyNote>Nothing matches “{query.trim()}”.</EmptyNote>
        ) : (
          <FilmGrid films={list} onOpen={setActiveId} onCreator={openCreator} />
        )}
      </>
    );
  } else if (tab === "explore" && category) {
    const current = categories.find((item) => item.id === category);
    const list = filmsIn(category);
    view = (
      <>
        <PageHead
          title={current?.name ?? "Shelf"}
          blurb={current?.blurb}
          onBack={() => setCategory(null)}
        />
        <FilmGrid films={list} onOpen={setActiveId} onCreator={openCreator} />
      </>
    );
  } else if (tab === "explore" && creator) {
    const list = films.filter((film) => film.creator === creator);
    const followed = following.includes(creator);
    view = (
      <>
        <button
          type="button"
          onClick={() => setCreator(null)}
          className="mb-3 inline-flex h-11 items-center gap-2 text-sm text-muted hover:text-ink"
        >
          <ArrowLeft className="size-4" />
          Explore
        </button>
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h1 className="font-display text-3xl font-medium tracking-tight">{creator}</h1>
            <p className="mt-1 text-sm text-muted">
              {list.length === 1 ? "1 film" : `${list.length} films`}
            </p>
          </div>
          <button
            type="button"
            aria-pressed={followed}
            onClick={() => toggleFollow(creator)}
            className={cn(
              "inline-flex h-11 items-center rounded-full border px-4 text-sm font-medium",
              followed ? "border-accent text-accent" : "border-line text-ink",
            )}
          >
            {followed ? "Following" : "Follow"}
          </button>
        </div>
        {list.length === 0 ? (
          <EmptyNote>No films from this creator.</EmptyNote>
        ) : (
          <FilmGrid films={list} onOpen={setActiveId} onCreator={openCreator} />
        )}
      </>
    );
  } else if (tab === "explore") {
    view = (
      <Explore
        heroVideo={heroVideo}
        onHeroError={() => setHeroVideo(false)}
        onOpen={setActiveId}
        onCreator={openCreator}
        onCategory={openCategory}
      />
    );
  } else if (tab === "following") {
    view =
      following.length === 0 ? (
        <FollowingEmpty onCreator={openCreator} />
      ) : (
        <>
          <PageHead title="Following" blurb="Films from people you follow." />
          <FilmGrid
            films={films.filter((film) => following.includes(film.creator))}
            onOpen={setActiveId}
            onCreator={openCreator}
          />
        </>
      );
  } else if (tab === "latest") {
    view = (
      <>
        <PageHead title="Latest" blurb="Newest films on the shelf." />
        <FilmGrid films={latestFilms()} onOpen={setActiveId} onCreator={openCreator} />
      </>
    );
  } else if (tab === "saved") {
    view = (
      <>
        <PageHead title="Saved" blurb="Kept on this device." />
        {savedFilms.length === 0 ? (
          <EmptyNote>Save a film from its card or from the player.</EmptyNote>
        ) : (
          <FilmGrid films={savedFilms} onOpen={setActiveId} onCreator={openCreator} />
        )}
      </>
    );
  } else {
    const continueFilms = films
      .filter((film) => {
        const seconds = progress[film.id] ?? 0;
        return seconds > 4 && seconds < film.duration * 0.92;
      })
      .sort((a, b) => (seenAt[b.id] ?? 0) - (seenAt[a.id] ?? 0));
    const historyFilms = films
      .filter((film) => seenAt[film.id])
      .sort((a, b) => (seenAt[b.id] ?? 0) - (seenAt[a.id] ?? 0));
    view = (
      <>
        <PageHead title="Library" blurb="Previews you have opened." />
        {continueFilms.length === 0 && historyFilms.length === 0 ? (
          <EmptyNote>Play a preview and it will stay on this shelf.</EmptyNote>
        ) : (
          <>
            {continueFilms.length > 0 ? (
              <section>
                <h2 className="mb-4 font-display text-2xl font-medium tracking-tight">Continue</h2>
                <FilmGrid films={continueFilms} onOpen={setActiveId} onCreator={openCreator} />
              </section>
            ) : null}
            {historyFilms.length > 0 ? (
              <section className={continueFilms.length > 0 ? "mt-10" : undefined}>
                <h2 className="mb-4 font-display text-2xl font-medium tracking-tight">History</h2>
                <FilmGrid films={historyFilms} onOpen={setActiveId} onCreator={openCreator} />
              </section>
            ) : null}
          </>
        )}
      </>
    );
  }

  return (
    <div className="min-h-screen">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-accent-ink"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-30 border-b border-line bg-canvas">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 md:flex-row md:items-center md:gap-6">
          <button
            type="button"
            onClick={goHome}
            className="inline-flex h-11 items-center gap-3 rounded-xl pr-2"
          >
            <span className="inline-flex size-8 items-center justify-center rounded-lg bg-accent text-accent-ink">
              <Play className="size-4" fill="currentColor" />
            </span>
            <span className="font-display text-lg font-medium tracking-tight">Aurora Flow</span>
          </button>
          <form
            className="relative w-full md:max-w-xl md:flex-1"
            role="search"
            onSubmit={(event) => event.preventDefault()}
          >
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted" />
            <input
              id="search"
              ref={searchRef}
              type="text"
              enterKeyHint="search"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setCategory(null);
                setCreator(null);
              }}
              placeholder="Search films, people, topics"
              autoComplete="off"
              className="h-11 w-full rounded-full border border-line bg-surface pr-11 pl-11 text-sm text-ink outline-none placeholder:text-muted"
            />
            {query ? (
              <button
                type="button"
                aria-label="Clear search"
                onClick={() => setQuery("")}
                className="absolute top-1/2 right-1 inline-flex size-9 -translate-y-1/2 items-center justify-center rounded-full text-muted hover:text-ink"
              >
                <X className="size-4" />
              </button>
            ) : null}
          </form>
          <nav className="hidden items-center gap-1 md:flex" aria-label="Sections">
            {TABS.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-current={tab === item.id ? "page" : undefined}
                onClick={() => selectTab(item.id)}
                className={cn(
                  "inline-flex h-11 items-center rounded-full px-3 text-sm font-medium",
                  tab === item.id ? "bg-surface text-ink" : "text-muted hover:text-ink",
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>
      <main id="content" className="mx-auto min-w-0 max-w-6xl px-4 pt-6 pb-24 md:pb-12">
        {view}
      </main>
      <nav
        className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-canvas pb-[env(safe-area-inset-bottom)] md:hidden"
        aria-label="Sections"
      >
        <ul className="grid grid-cols-5">
          {TABS.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  aria-current={tab === item.id ? "page" : undefined}
                  onClick={() => selectTab(item.id)}
                  className={cn(
                    "flex min-h-14 w-full flex-col items-center justify-center gap-0.5 text-xs",
                    tab === item.id ? "text-accent" : "text-muted",
                  )}
                >
                  <Icon className="size-5" />
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      <PlayerDialog filmId={activeId} onClose={() => setActiveId(null)} onPick={setActiveId} />
      <Toaster
        theme="dark"
        position="top-center"
        offset={12}
        toastOptions={{
          style: {
            background: "var(--color-elevated)",
            color: "var(--color-ink)",
            border: "1px solid var(--color-line)",
          },
        }}
      />
    </div>
  );
}

function Explore({
  heroVideo,
  onHeroError,
  onOpen,
  onCreator,
  onCategory,
}: {
  heroVideo: boolean;
  onHeroError: () => void;
  onOpen: (id: string) => void;
  onCreator: (name: string) => void;
  onCategory: (id: CategoryId) => void;
}) {
  const featured = featuredFilm;

  return (
    <>
      <section className="overflow-hidden rounded-3xl border border-line bg-surface md:relative">
        <div className="relative aspect-video md:aspect-[12/5]">
          {heroVideo ? (
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src={featured.trailer}
              poster={featured.poster}
              autoPlay
              muted
              loop
              playsInline
              onError={onHeroError}
            />
          ) : (
            <img src={featured.poster} alt="" className="absolute inset-0 h-full w-full object-cover" />
          )}
          <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-t from-canvas via-canvas/55 to-transparent md:block" />
        </div>
        <div className="p-5 md:absolute md:inset-x-0 md:bottom-0 md:max-w-xl md:p-8">
          <p className="text-xs font-medium tracking-wide text-accent uppercase">Featured</p>
          <h1 className="mt-2 font-display text-3xl font-medium tracking-tight text-ink lg:text-5xl">
            {featured.title}
          </h1>
          <p className="mt-3 line-clamp-3 text-sm leading-normal text-muted">{featured.synopsis}</p>
          <p className="mt-3 text-xs text-muted">
            {featured.creator}
            {" · "}
            {formatDuration(featured.duration)}
            {" · "}
            {categoryName(featured.category)}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => onOpen(featured.id)}
              className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-accent-ink"
            >
              <Play className="size-4" fill="currentColor" />
              Play
            </button>
            <button
              type="button"
              onClick={() => onCreator(featured.creator)}
              className="inline-flex h-11 items-center rounded-full border border-line bg-surface px-5 text-sm font-medium text-ink"
            >
              {featured.creator}
            </button>
          </div>
        </div>
      </section>
      <div className="shelf mt-5 flex gap-2 overflow-x-auto" role="list" aria-label="Shelves">
        {categories.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onCategory(item.id)}
            className="inline-flex h-11 shrink-0 items-center rounded-full border border-line px-4 text-sm text-ink"
          >
            {item.name}
          </button>
        ))}
      </div>
      <Shelf title="Trending" blurb="Six films worth starting with.">
        {trendingFilms().map((film) => (
          <div key={film.id} className="w-64 shrink-0 snap-start md:w-auto">
            <VideoCard film={film} onOpen={() => onOpen(film.id)} onCreator={onCreator} />
          </div>
        ))}
      </Shelf>
      {categories.map((item) => (
        <Shelf
          key={item.id}
          title={item.name}
          blurb={item.blurb}
          onSeeAll={() => onCategory(item.id)}
        >
          {filmsIn(item.id).map((film) => (
            <div key={film.id} className="w-64 shrink-0 snap-start md:w-auto">
              <VideoCard film={film} onOpen={() => onOpen(film.id)} onCreator={onCreator} />
            </div>
          ))}
        </Shelf>
      ))}
    </>
  );
}

function FollowingEmpty({ onCreator }: { onCreator: (name: string) => void }) {
  const toggleFollow = useLibrary((state) => state.toggleFollow);
  const people = creatorList();

  return (
    <>
      <PageHead title="Following" blurb="Follow a creator and their films collect here." />
      <ul className="overflow-hidden rounded-3xl border border-line">
        {people.map((person) => (
          <li
            key={person.name}
            className="flex items-center gap-3 border-b border-line px-3 last:border-b-0"
          >
            <button
              type="button"
              onClick={() => onCreator(person.name)}
              className="h-14 min-w-0 flex-1 truncate text-left text-sm font-medium text-ink"
            >
              {person.name}
              <span className="ml-2 font-normal text-muted">
                {person.count === 1 ? "1 film" : `${person.count} films`}
              </span>
            </button>
            <button
              type="button"
              onClick={() => toggleFollow(person.name)}
              className="inline-flex h-11 shrink-0 items-center rounded-full border border-line px-4 text-sm font-medium text-ink"
            >
              Follow
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

function Shelf({
  title,
  blurb,
  onSeeAll,
  children,
}: {
  title: string;
  blurb: string;
  onSeeAll?: () => void;
  children: ReactNode;
}) {
  return (
    <section className="mt-10">
      <div className="mb-4 flex items-end justify-between gap-4">
        <div className="min-w-0">
          <h2 className="font-display text-2xl font-medium tracking-tight text-ink">{title}</h2>
          <p className="mt-1 text-sm text-muted">{blurb}</p>
        </div>
        {onSeeAll ? (
          <button
            type="button"
            onClick={onSeeAll}
            className="inline-flex h-11 shrink-0 items-center text-sm font-medium text-accent"
          >
            See all
          </button>
        ) : null}
      </div>
      <div className="shelf flex snap-x gap-4 overflow-x-auto p-1 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-3">
        {children}
      </div>
    </section>
  );
}

function PageHead({
  title,
  blurb,
  onBack,
}: {
  title: string;
  blurb?: string;
  onBack?: () => void;
}) {
  return (
    <header className="mb-5">
      {onBack ? (
        <button
          type="button"
          onClick={onBack}
          className="mb-3 inline-flex h-11 items-center gap-2 text-sm text-muted hover:text-ink"
        >
          <ArrowLeft className="size-4" />
          Explore
        </button>
      ) : null}
      <h1 className="font-display text-3xl font-medium tracking-tight">{title}</h1>
      {blurb ? <p className="mt-1 text-sm text-muted">{blurb}</p> : null}
    </header>
  );
}

function FilmGrid({
  films: list,
  onOpen,
  onCreator,
}: {
  films: Film[];
  onOpen: (id: string) => void;
  onCreator: (name: string) => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((film) => (
        <VideoCard
          key={film.id}
          film={film}
          onOpen={() => onOpen(film.id)}
          onCreator={onCreator}
        />
      ))}
    </div>
  );
}

function EmptyNote({ children }: { children: ReactNode }) {
  return (
    <p className="rounded-3xl border border-dashed border-line px-6 py-14 text-center text-sm leading-normal text-muted">
      {children}
    </p>
  );
}
