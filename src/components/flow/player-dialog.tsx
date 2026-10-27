import { useEffect, useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Bookmark, Pause, Play, Volume2, VolumeX, X } from "lucide-react";
import { toast } from "sonner";
import {
  categoryName,
  films,
  formatAgo,
  formatDuration,
  getFilm,
  type Film,
} from "@/data/catalog";
import { cn } from "@/lib/cn";
import { useLibrary } from "@/lib/library-store";
import { VideoCard } from "@/components/flow/video-card";

export function PlayerDialog({
  filmId,
  onClose,
  onPick,
}: {
  filmId: string | null;
  onClose: () => void;
  onPick: (id: string) => void;
}) {
  const film = filmId ? getFilm(filmId) : undefined;

  return (
    <Dialog.Root
      open={Boolean(film)}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-canvas/80" />
        <Dialog.Content className="dialog-content fixed inset-x-4 top-6 z-50 mx-auto max-h-[calc(100dvh-3rem)] max-w-3xl overflow-y-auto overscroll-contain rounded-3xl border border-line bg-surface outline-none md:top-10">
          {film ? <PlayerBody key={film.id} film={film} onPick={onPick} /> : null}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function PlayerBody({ film, onPick }: { film: Film; onPick: (id: string) => void }) {
  const stored = useLibrary.getState().progress[film.id] ?? 0;
  const initial =
    !film.trailer && stored > 1 && stored < film.duration * 0.92 ? stored : 0;
  const [playing, setPlaying] = useState(false);
  const [useVideo, setUseVideo] = useState(Boolean(film.trailer));
  const [muted, setMuted] = useState(false);
  const [time, setTime] = useState(initial);
  const [runDuration, setRunDuration] = useState(film.trailer ? 10 : film.duration);
  const [pictureOk, setPictureOk] = useState(true);
  const timeRef = useRef(initial);
  const durationRef = useRef(runDuration);
  const videoRef = useRef<HTMLVideoElement>(null);
  const useVideoRef = useRef(useVideo);
  durationRef.current = runDuration;
  useVideoRef.current = useVideo;

  const saved = useLibrary((state) => state.saved.includes(film.id));
  const followed = useLibrary((state) => state.following.includes(film.creator));
  const toggleSaved = useLibrary((state) => state.toggleSaved);
  const toggleFollow = useLibrary((state) => state.toggleFollow);

  const related = films.filter((item) => item.category === film.category && item.id !== film.id);

  useEffect(() => {
    useLibrary.getState().touch(film.id);
  }, [film.id]);

  useEffect(() => {
    const id = film.id;
    return () => {
      const seconds = timeRef.current;
      if (seconds >= 1) useLibrary.getState().setProgress(id, seconds);
    };
  }, [film.id]);

  useEffect(() => {
    if (playing) return;
    const seconds = timeRef.current;
    if (seconds >= 1) useLibrary.getState().setProgress(film.id, seconds);
  }, [playing, film.id]);

  useEffect(() => {
    if (!useVideo) return;
    const el = videoRef.current;
    if (!el) return;
    if (playing) {
      void el.play().catch(() => setPlaying(false));
    } else {
      el.pause();
    }
  }, [playing, useVideo]);

  useEffect(() => {
    if (!playing || useVideo) return;
    const id = window.setInterval(() => {
      const cap = durationRef.current;
      const next = timeRef.current + 0.1;
      if (next >= cap) {
        timeRef.current = cap;
        setTime(cap);
        setPlaying(false);
        return;
      }
      timeRef.current = next;
      setTime(next);
    }, 100);
    return () => window.clearInterval(id);
  }, [playing, useVideo]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const tag = (event.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (event.key === " " && tag !== "BUTTON") {
        event.preventDefault();
        setPlaying((value) => !value);
        return;
      }
      if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
      event.preventDefault();
      const delta = event.key === "ArrowRight" ? 5 : -5;
      const next = Math.min(durationRef.current, Math.max(0, timeRef.current + delta));
      timeRef.current = next;
      setTime(next);
      if (videoRef.current && useVideoRef.current) videoRef.current.currentTime = next;
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function seek(value: number) {
    const next = Math.min(durationRef.current, Math.max(0, value));
    timeRef.current = next;
    setTime(next);
    if (videoRef.current && useVideo) videoRef.current.currentTime = next;
  }

  return (
    <>
      <div className="relative aspect-video overflow-hidden bg-canvas">
        {useVideo && film.trailer ? (
          <video
            ref={videoRef}
            src={film.trailer}
            poster={film.poster}
            muted={muted}
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover"
            onLoadedMetadata={(event) => {
              const duration = event.currentTarget.duration;
              if (Number.isFinite(duration) && duration > 0) setRunDuration(duration);
            }}
            onTimeUpdate={(event) => {
              const next = event.currentTarget.currentTime;
              timeRef.current = next;
              setTime(next);
            }}
            onEnded={() => {
              const end = videoRef.current?.duration;
              if (end && Number.isFinite(end)) {
                timeRef.current = end;
                setTime(end);
              }
              setPlaying(false);
            }}
            onError={() => {
              setUseVideo(false);
              setRunDuration(film.duration);
            }}
          />
        ) : pictureOk ? (
          <img
            src={film.poster}
            alt=""
            onError={() => setPictureOk(false)}
            className={cn("absolute inset-0 h-full w-full object-cover", playing && "ken-burns")}
          />
        ) : (
          <div className="absolute inset-0 bg-elevated" />
        )}
        <button
          type="button"
          className="absolute inset-0 z-0"
          aria-label={playing ? "Pause preview" : "Play preview"}
          onClick={() => setPlaying((value) => !value)}
        />
        {!playing ? (
          <span className="pointer-events-none absolute left-1/2 top-1/2 z-10 inline-flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-accent-ink">
            <Play className="size-7" fill="currentColor" />
          </span>
        ) : null}
        <Dialog.Close
          className="absolute right-3 top-3 z-20 inline-flex size-11 items-center justify-center rounded-full bg-canvas/80 text-ink"
          aria-label="Close"
        >
          <X className="size-5" />
        </Dialog.Close>
        <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-canvas via-canvas/80 to-transparent px-3 pb-3 pt-12">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setPlaying((value) => !value)}
              aria-label={playing ? "Pause" : "Play"}
              className="inline-flex size-11 shrink-0 items-center justify-center rounded-full text-ink"
            >
              {playing ? <Pause className="size-5" /> : <Play className="size-5" fill="currentColor" />}
            </button>
            <span className="w-12 shrink-0 text-xs tabular-nums text-ink">{formatDuration(time)}</span>
            <input
              type="range"
              min={0}
              max={Math.max(runDuration, 0.1)}
              step={0.1}
              value={Math.min(time, runDuration)}
              aria-label="Seek"
              aria-valuetext={formatDuration(time)}
              onChange={(event) => seek(Number(event.target.value))}
              className="h-11 min-w-0 flex-1 cursor-pointer accent-accent"
            />
            <span className="w-12 shrink-0 text-right text-xs tabular-nums text-muted">
              {formatDuration(runDuration)}
            </span>
            {useVideo ? (
              <button
                type="button"
                aria-label={muted ? "Unmute" : "Mute"}
                aria-pressed={muted}
                onClick={() => setMuted((value) => !value)}
                className="inline-flex size-11 shrink-0 items-center justify-center rounded-full text-ink"
              >
                {muted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
              </button>
            ) : null}
          </div>
          <p className="text-center text-xs text-muted">{useVideo ? "Trailer" : "Still preview"}</p>
        </div>
      </div>
      <div className="p-5 md:p-6">
        <Dialog.Title className="font-display text-2xl font-medium tracking-tight text-ink">
          {film.title}
        </Dialog.Title>
        <p className="mt-2 text-sm text-muted">
          {film.creator}
          {" · "}
          {categoryName(film.category)}
          {" · "}
          {formatDuration(film.duration)}
          {" · "}
          {formatAgo(film.uploadedAt)}
          {film.source === "Archive" ? " · Archive" : ""}
        </p>
        <Dialog.Description className="mt-3 text-sm leading-normal text-ink">
          {film.synopsis}
        </Dialog.Description>
        <div className="mt-5 flex flex-wrap gap-2">
          <button
            type="button"
            aria-pressed={saved}
            onClick={() => {
              const was = useLibrary.getState().saved.includes(film.id);
              toggleSaved(film.id);
              toast(was ? "Removed from Saved" : "Saved");
            }}
            className={cn(
              "inline-flex h-11 items-center gap-2 rounded-full border px-4 text-sm font-medium",
              saved ? "border-accent text-accent" : "border-line text-ink",
            )}
          >
            <Bookmark className="size-4" fill={saved ? "currentColor" : "none"} />
            {saved ? "Saved" : "Save"}
          </button>
          <button
            type="button"
            aria-pressed={followed}
            onClick={() => {
              const was = useLibrary.getState().following.includes(film.creator);
              toggleFollow(film.creator);
              toast(was ? `Unfollowed ${film.creator}` : `Following ${film.creator}`);
            }}
            className={cn(
              "inline-flex h-11 items-center gap-2 rounded-full border px-4 text-sm font-medium",
              followed ? "border-accent text-accent" : "border-line text-ink",
            )}
          >
            {followed ? "Following" : "Follow"}
          </button>
        </div>
        {related.length > 0 ? (
          <div className="mt-6">
            <h3 className="mb-3 text-sm font-medium text-muted">Related</h3>
            <div className="shelf flex gap-3 overflow-x-auto pb-1">
              {related.map((item) => (
                <div key={item.id} className="w-40 shrink-0">
                  <VideoCard compact film={item} onOpen={() => onPick(item.id)} />
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
