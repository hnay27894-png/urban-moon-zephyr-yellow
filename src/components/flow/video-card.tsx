import { useState } from "react";
import * as Menu from "@radix-ui/react-dropdown-menu";
import { Bookmark, Ellipsis } from "lucide-react";
import { toast } from "sonner";
import { formatDuration, type Film } from "@/data/catalog";
import { cn } from "@/lib/cn";
import { useLibrary } from "@/lib/library-store";

type Props = {
  film: Film;
  onOpen: () => void;
  onCreator?: (name: string) => void;
  compact?: boolean;
};

export function VideoCard({ film, onOpen, onCreator, compact = false }: Props) {
  const saved = useLibrary((state) => state.saved.includes(film.id));
  const followed = useLibrary((state) => state.following.includes(film.creator));
  const progress = useLibrary((state) => state.progress[film.id] ?? 0);
  const seen = useLibrary((state) => Boolean(state.seenAt[film.id] || state.progress[film.id]));
  const toggleSaved = useLibrary((state) => state.toggleSaved);
  const toggleFollow = useLibrary((state) => state.toggleFollow);
  const setProgress = useLibrary((state) => state.setProgress);
  const clearEntry = useLibrary((state) => state.clearEntry);
  const ratio = film.duration > 0 ? Math.min(1, progress / film.duration) : 0;

  function onSave() {
    const was = useLibrary.getState().saved.includes(film.id);
    toggleSaved(film.id);
    toast(was ? "Removed from Saved" : "Saved");
  }

  if (compact) {
    return (
      <button type="button" onClick={onOpen} className="group block w-full text-left">
        <Poster film={film} ratio={ratio} />
        <span className="mt-2 line-clamp-2 block text-sm font-medium leading-snug text-ink">
          {film.title}
        </span>
      </button>
    );
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface transition-colors duration-150 hover:bg-elevated">
      <button
        type="button"
        onClick={onOpen}
        className="block text-left"
        aria-label={`Play ${film.title}`}
      >
        <Poster film={film} ratio={ratio} />
        <span className="line-clamp-2 block px-3 pt-3 text-sm font-medium leading-snug text-ink">
          {film.title}
        </span>
      </button>
      <div className="mt-auto flex items-center gap-1 px-2 pb-2 pt-1">
        <button
          type="button"
          onClick={() => onCreator?.(film.creator)}
          className="h-11 min-w-0 flex-1 truncate px-1 text-left text-xs text-muted hover:text-ink"
          title={film.creator}
        >
          {film.creator}
        </button>
        <button
          type="button"
          aria-pressed={saved}
          aria-label={saved ? `Unsave ${film.title}` : `Save ${film.title}`}
          onClick={onSave}
          className={cn(
            "inline-flex size-11 shrink-0 items-center justify-center rounded-xl",
            saved ? "text-accent" : "text-muted hover:text-ink",
          )}
        >
          <Bookmark className="size-4" fill={saved ? "currentColor" : "none"} />
        </button>
        <Menu.Root>
          <Menu.Trigger asChild>
            <button
              type="button"
              aria-label={`More actions for ${film.title}`}
              className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl text-muted hover:text-ink"
            >
              <Ellipsis className="size-4" />
            </button>
          </Menu.Trigger>
          <Menu.Portal>
            <Menu.Content
              align="end"
              sideOffset={8}
              className="z-50 min-w-52 rounded-2xl border border-line bg-elevated p-2"
            >
              <Menu.Item
                className="flex min-h-11 items-center rounded-lg px-3 text-sm text-ink outline-none data-[highlighted]:bg-canvas"
                onSelect={onSave}
              >
                {saved ? "Unsave" : "Save"}
              </Menu.Item>
              <Menu.Item
                className="flex min-h-11 items-center rounded-lg px-3 text-sm text-ink outline-none data-[highlighted]:bg-canvas"
                onSelect={() => {
                  const was = useLibrary.getState().following.includes(film.creator);
                  toggleFollow(film.creator);
                  toast(was ? `Unfollowed ${film.creator}` : `Following ${film.creator}`);
                }}
              >
                {followed ? "Unfollow" : "Follow"} {film.creator}
              </Menu.Item>
              <Menu.Item
                className="flex min-h-11 items-center rounded-lg px-3 text-sm text-ink outline-none data-[highlighted]:bg-canvas"
                onSelect={() => {
                  setProgress(film.id, film.duration);
                  toast("Marked watched");
                }}
              >
                Mark watched
              </Menu.Item>
              {seen ? (
                <Menu.Item
                  className="flex min-h-11 items-center rounded-lg px-3 text-sm text-ink outline-none data-[highlighted]:bg-canvas"
                  onSelect={() => {
                    clearEntry(film.id);
                    toast("Removed from Library");
                  }}
                >
                  Remove from Library
                </Menu.Item>
              ) : null}
            </Menu.Content>
          </Menu.Portal>
        </Menu.Root>
      </div>
    </article>
  );
}

function Poster({ film, ratio }: { film: Film; ratio: number }) {
  const [broken, setBroken] = useState(false);

  return (
    <div className="relative aspect-video overflow-hidden bg-elevated">
      {broken ? (
        <div className="absolute inset-0 bg-elevated" aria-hidden>
          <div className="absolute left-0 top-0 h-1/2 w-1/2 bg-accent/15" />
        </div>
      ) : (
        <img
          src={film.poster}
          alt=""
          loading="lazy"
          onError={() => setBroken(true)}
          className="absolute inset-0 h-full w-full object-cover motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-105"
        />
      )}
      {film.source === "Archive" ? (
        <span className="absolute left-2 top-2 rounded-md bg-canvas/80 px-2 py-0.5 text-xs text-ink">
          Archive
        </span>
      ) : null}
      <span className="absolute bottom-2 right-2 rounded-md bg-canvas/80 px-1.5 py-0.5 text-xs tabular-nums text-ink">
        {formatDuration(film.duration)}
      </span>
      {ratio > 0.01 ? (
        <span className="absolute inset-x-0 bottom-0 h-1 bg-canvas/70">
          <span className="block h-full bg-accent" style={{ width: `${Math.round(ratio * 100)}%` }} />
        </span>
      ) : null}
    </div>
  );
}
