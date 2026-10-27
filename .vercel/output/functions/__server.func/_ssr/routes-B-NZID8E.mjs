import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { c as Pause, d as Compass, f as Clock, i as Users, l as Library, m as ArrowLeft, n as VolumeX, o as Search, p as Bookmark, r as Volume2, s as Play, t as X, u as Ellipsis } from "../_libs/lucide-react.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as persist, r as create, t as createJSONStorage } from "../_libs/zustand.mjs";
import { a as DialogOverlay, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { a as DropdownMenuTrigger, i as DropdownMenuPortal, n as DropdownMenuContent, r as DropdownMenuItem, t as DropdownMenu } from "../_libs/@radix-ui/react-dropdown-menu+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B-NZID8E.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var categories = [
	{
		id: "science",
		name: "Science",
		blurb: "Cosmos, matter, and the instruments that measure them."
	},
	{
		id: "nature",
		name: "Nature",
		blurb: "Oceans, ice, and living light."
	},
	{
		id: "technology",
		name: "Technology",
		blurb: "Hardware, robots, and interfaces."
	},
	{
		id: "history",
		name: "History",
		blurb: "Routes and the places they left behind."
	}
];
var APP_NOW = Date.UTC(2026, 9, 26, 12, 0, 0);
var DAY = 864e5;
var films = [
	{
		id: "biolume",
		title: "Bioluminescent Oceans and the Aurora",
		creator: "Dr. Alistair Vance",
		duration: 865,
		category: "nature",
		source: "Studio",
		synopsis: "A night passage through the Nordic seas, where plankton light meets a low aurora. Vance treats both as the same phenomenon: living light against a dark field.",
		uploadedAt: "2026-10-24T12:00:00.000Z",
		poster: "/posters/ocean.jpg",
		trailer: "/trailers/ocean.mp4"
	},
	{
		id: "trench",
		title: "Deep Ocean Trench Mapping Expedition",
		creator: "Abyssal Watch",
		duration: 1450,
		category: "nature",
		source: "Archive",
		synopsis: "A mapping cruise along a Pacific trench. The picture stays with the lights of the vehicle and the slow read of the seafloor.",
		uploadedAt: "2026-09-18T12:00:00.000Z",
		poster: "/posters/trench.jpg"
	},
	{
		id: "glacier",
		title: "The Silent Symphony of Arctic Glaciers",
		creator: "Polaris Media",
		duration: 1110,
		category: "nature",
		source: "Studio",
		synopsis: "An Arctic face of ice, recorded for sound as much as picture: creaks, meltwater, and the long pauses between them.",
		uploadedAt: "2026-09-02T12:00:00.000Z",
		poster: "/posters/glacier.jpg"
	},
	{
		id: "cosmos",
		title: "Mapping the Edge of the Observable Universe",
		creator: "Cosmos Edge",
		duration: 1335,
		category: "science",
		source: "Studio",
		synopsis: "How far current telescopes can actually see, and the hard stop where the data runs out.",
		uploadedAt: "2026-09-26T12:00:00.000Z",
		poster: "/posters/cosmos.jpg"
	},
	{
		id: "particles",
		title: "Subatomic Particle Collisions Explained",
		creator: "Quantum Realm",
		duration: 845,
		category: "science",
		source: "Archive",
		synopsis: "What a collision leaves behind, told from the floor of a beamline instead of a textbook diagram.",
		uploadedAt: "2026-08-01T12:00:00.000Z",
		poster: "/posters/particles.jpg"
	},
	{
		id: "exo",
		title: "Exo-Atmospheres and Alien Weather",
		creator: "AstroCore",
		duration: 1180,
		category: "science",
		source: "Archive",
		synopsis: "Cloud bands and heat on worlds nobody can visit, and how thin the evidence for either still is.",
		uploadedAt: "2026-08-20T12:00:00.000Z",
		poster: "/posters/exo.jpg"
	},
	{
		id: "quantum",
		title: "Quantum Computing Realities in 2026",
		creator: "Nova Labs",
		duration: 760,
		category: "technology",
		source: "Studio",
		synopsis: "What today’s quantum hardware can run, and which parts are still a laboratory instrument rather than a computer.",
		uploadedAt: "2026-10-21T12:00:00.000Z",
		poster: "/posters/quantum.jpg"
	},
	{
		id: "swarm",
		title: "Autonomous Robotic Swarms",
		creator: "RoboDynamics",
		duration: 950,
		category: "technology",
		source: "Archive",
		synopsis: "A warehouse floor where small robots share one task. The film is about coordination, not spectacle.",
		uploadedAt: "2026-10-18T12:00:00.000Z",
		poster: "/posters/swarm.jpg"
	},
	{
		id: "spatial",
		title: "Designing Immersive Spatial Interfaces",
		creator: "XR Vision",
		duration: 1215,
		category: "technology",
		source: "Studio",
		synopsis: "Interfaces that sit in a room instead of on a screen: placement, scale, and why most of them tire you out.",
		uploadedAt: "2026-10-04T12:00:00.000Z",
		poster: "/posters/spatial.jpg"
	},
	{
		id: "silk",
		title: "Lost Cities of the Silk Road",
		creator: "Epoch Archive",
		duration: 1690,
		category: "history",
		source: "Archive",
		synopsis: "Ruin sites along the old trade routes, filmed as places people left rather than a reel of treasure.",
		uploadedAt: "2026-10-11T12:00:00.000Z",
		poster: "/posters/silk.jpg"
	}
];
var trendingIds = [
	"biolume",
	"quantum",
	"cosmos",
	"trench",
	"silk",
	"glacier"
];
var featuredFilm = films[0];
function getFilm(id) {
	return films.find((film) => film.id === id);
}
function filmsIn(category) {
	return films.filter((film) => film.category === category);
}
function trendingFilms() {
	return trendingIds.map((id) => films.find((film) => film.id === id)).filter((film) => film != null);
}
function latestFilms() {
	return [...films].sort((a, b) => Date.parse(b.uploadedAt) - Date.parse(a.uploadedAt));
}
function categoryName(id) {
	return categories.find((category) => category.id === id)?.name ?? id;
}
function creatorList() {
	const map = /* @__PURE__ */ new Map();
	for (const film of films) map.set(film.creator, (map.get(film.creator) ?? 0) + 1);
	return [...map.entries()].map(([name, count]) => ({
		name,
		count
	})).sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}
function formatDuration(total) {
	const seconds = Math.max(0, Math.round(total));
	const hours = Math.floor(seconds / 3600);
	const minutes = Math.floor(seconds % 3600 / 60);
	const remain = seconds % 60;
	if (hours > 0) return `${hours}:${String(minutes).padStart(2, "0")}:${String(remain).padStart(2, "0")}`;
	return `${minutes}:${String(remain).padStart(2, "0")}`;
}
function formatAgo(iso) {
	const days = Math.floor((APP_NOW - Date.parse(iso)) / DAY);
	if (days <= 0) return "Today";
	if (days === 1) return "Yesterday";
	if (days < 14) return `${days} days ago`;
	if (days < 60) return `${Math.max(1, Math.floor(days / 7))} weeks ago`;
	return `${Math.max(1, Math.floor(days / 30))} months ago`;
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var memoryStorage = {
	getItem: () => null,
	setItem: (_name, _value) => {},
	removeItem: (_name) => {}
};
var useLibrary = create()(persist((set, get) => ({
	saved: [],
	following: [],
	progress: {},
	seenAt: {},
	toggleSaved: (id) => {
		const saved = get().saved;
		set({ saved: saved.includes(id) ? saved.filter((item) => item !== id) : [id, ...saved] });
	},
	toggleFollow: (name) => {
		const following = get().following;
		set({ following: following.includes(name) ? following.filter((item) => item !== name) : [name, ...following] });
	},
	setProgress: (id, seconds) => {
		set({
			progress: {
				...get().progress,
				[id]: Math.max(0, seconds)
			},
			seenAt: {
				...get().seenAt,
				[id]: Date.now()
			}
		});
	},
	touch: (id) => {
		set({ seenAt: {
			...get().seenAt,
			[id]: Date.now()
		} });
	},
	clearEntry: (id) => {
		const progress = { ...get().progress };
		const seenAt = { ...get().seenAt };
		delete progress[id];
		delete seenAt[id];
		set({
			progress,
			seenAt
		});
	}
}), {
	name: "aurora-flow",
	skipHydration: true,
	storage: createJSONStorage(() => typeof window === "undefined" ? memoryStorage : window.localStorage),
	partialize: (state) => ({
		saved: state.saved,
		following: state.following,
		progress: state.progress,
		seenAt: state.seenAt
	})
}));
function VideoCard({ film, onOpen, onCreator, compact = false }) {
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
	if (compact) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: onOpen,
		className: "group block w-full text-left",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Poster, {
			film,
			ratio
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mt-2 line-clamp-2 block text-sm font-medium leading-snug text-ink",
			children: film.title
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface transition-colors duration-150 hover:bg-elevated",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: onOpen,
			className: "block text-left",
			"aria-label": `Play ${film.title}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Poster, {
				film,
				ratio
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "line-clamp-2 block px-3 pt-3 text-sm font-medium leading-snug text-ink",
				children: film.title
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-auto flex items-center gap-1 px-2 pb-2 pt-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onCreator?.(film.creator),
					className: "h-11 min-w-0 flex-1 truncate px-1 text-left text-xs text-muted hover:text-ink",
					title: film.creator,
					children: film.creator
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-pressed": saved,
					"aria-label": saved ? `Unsave ${film.title}` : `Save ${film.title}`,
					onClick: onSave,
					className: cn("inline-flex size-11 shrink-0 items-center justify-center rounded-xl", saved ? "text-accent" : "text-muted hover:text-ink"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, {
						className: "size-4",
						fill: saved ? "currentColor" : "none"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": `More actions for ${film.title}`,
						className: "inline-flex size-11 shrink-0 items-center justify-center rounded-xl text-muted hover:text-ink",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "size-4" })
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
					align: "end",
					sideOffset: 8,
					className: "z-50 min-w-52 rounded-2xl border border-line bg-elevated p-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
							className: "flex min-h-11 items-center rounded-lg px-3 text-sm text-ink outline-none data-[highlighted]:bg-canvas",
							onSelect: onSave,
							children: saved ? "Unsave" : "Save"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
							className: "flex min-h-11 items-center rounded-lg px-3 text-sm text-ink outline-none data-[highlighted]:bg-canvas",
							onSelect: () => {
								const was = useLibrary.getState().following.includes(film.creator);
								toggleFollow(film.creator);
								toast(was ? `Unfollowed ${film.creator}` : `Following ${film.creator}`);
							},
							children: [
								followed ? "Unfollow" : "Follow",
								" ",
								film.creator
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
							className: "flex min-h-11 items-center rounded-lg px-3 text-sm text-ink outline-none data-[highlighted]:bg-canvas",
							onSelect: () => {
								setProgress(film.id, film.duration);
								toast("Marked watched");
							},
							children: "Mark watched"
						}),
						seen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
							className: "flex min-h-11 items-center rounded-lg px-3 text-sm text-ink outline-none data-[highlighted]:bg-canvas",
							onSelect: () => {
								clearEntry(film.id);
								toast("Removed from Library");
							},
							children: "Remove from Library"
						}) : null
					]
				}) })] })
			]
		})]
	});
}
function Poster({ film, ratio }) {
	const [broken, setBroken] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative aspect-video overflow-hidden bg-elevated",
		children: [
			broken ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 bg-elevated",
				"aria-hidden": true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-0 top-0 h-1/2 w-1/2 bg-accent/15" })
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: film.poster,
				alt: "",
				loading: "lazy",
				onError: () => setBroken(true),
				className: "absolute inset-0 h-full w-full object-cover motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-105"
			}),
			film.source === "Archive" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute left-2 top-2 rounded-md bg-canvas/80 px-2 py-0.5 text-xs text-ink",
				children: "Archive"
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute bottom-2 right-2 rounded-md bg-canvas/80 px-1.5 py-0.5 text-xs tabular-nums text-ink",
				children: formatDuration(film.duration)
			}),
			ratio > .01 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute inset-x-0 bottom-0 h-1 bg-canvas/70",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block h-full bg-accent",
					style: { width: `${Math.round(ratio * 100)}%` }
				})
			}) : null
		]
	});
}
function PlayerDialog({ filmId, onClose, onPick }) {
	const film = filmId ? getFilm(filmId) : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: Boolean(film),
		onOpenChange: (open) => {
			if (!open) onClose();
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-50 bg-canvas/80" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
			className: "dialog-content fixed inset-x-4 top-6 z-50 mx-auto max-h-[calc(100dvh-3rem)] max-w-3xl overflow-y-auto overscroll-contain rounded-3xl border border-line bg-surface outline-none md:top-10",
			children: film ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlayerBody, {
				film,
				onPick
			}, film.id) : null
		})] })
	});
}
function PlayerBody({ film, onPick }) {
	const stored = useLibrary.getState().progress[film.id] ?? 0;
	const initial = !film.trailer && stored > 1 && stored < film.duration * .92 ? stored : 0;
	const [playing, setPlaying] = (0, import_react.useState)(false);
	const [useVideo, setUseVideo] = (0, import_react.useState)(Boolean(film.trailer));
	const [muted, setMuted] = (0, import_react.useState)(false);
	const [time, setTime] = (0, import_react.useState)(initial);
	const [runDuration, setRunDuration] = (0, import_react.useState)(film.trailer ? 10 : film.duration);
	const [pictureOk, setPictureOk] = (0, import_react.useState)(true);
	const timeRef = (0, import_react.useRef)(initial);
	const durationRef = (0, import_react.useRef)(runDuration);
	const videoRef = (0, import_react.useRef)(null);
	const useVideoRef = (0, import_react.useRef)(useVideo);
	durationRef.current = runDuration;
	useVideoRef.current = useVideo;
	const saved = useLibrary((state) => state.saved.includes(film.id));
	const followed = useLibrary((state) => state.following.includes(film.creator));
	const toggleSaved = useLibrary((state) => state.toggleSaved);
	const toggleFollow = useLibrary((state) => state.toggleFollow);
	const related = films.filter((item) => item.category === film.category && item.id !== film.id);
	(0, import_react.useEffect)(() => {
		useLibrary.getState().touch(film.id);
	}, [film.id]);
	(0, import_react.useEffect)(() => {
		const id = film.id;
		return () => {
			const seconds = timeRef.current;
			if (seconds >= 1) useLibrary.getState().setProgress(id, seconds);
		};
	}, [film.id]);
	(0, import_react.useEffect)(() => {
		if (playing) return;
		const seconds = timeRef.current;
		if (seconds >= 1) useLibrary.getState().setProgress(film.id, seconds);
	}, [playing, film.id]);
	(0, import_react.useEffect)(() => {
		if (!useVideo) return;
		const el = videoRef.current;
		if (!el) return;
		if (playing) el.play().catch(() => setPlaying(false));
		else el.pause();
	}, [playing, useVideo]);
	(0, import_react.useEffect)(() => {
		if (!playing || useVideo) return;
		const id = window.setInterval(() => {
			const cap = durationRef.current;
			const next = timeRef.current + .1;
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
	(0, import_react.useEffect)(() => {
		const onKey = (event) => {
			const tag = event.target?.tagName;
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
	function seek(value) {
		const next = Math.min(durationRef.current, Math.max(0, value));
		timeRef.current = next;
		setTime(next);
		if (videoRef.current && useVideo) videoRef.current.currentTime = next;
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative aspect-video overflow-hidden bg-canvas",
		children: [
			useVideo && film.trailer ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				ref: videoRef,
				src: film.trailer,
				poster: film.poster,
				muted,
				playsInline: true,
				preload: "metadata",
				className: "absolute inset-0 h-full w-full object-cover",
				onLoadedMetadata: (event) => {
					const duration = event.currentTarget.duration;
					if (Number.isFinite(duration) && duration > 0) setRunDuration(duration);
				},
				onTimeUpdate: (event) => {
					const next = event.currentTarget.currentTime;
					timeRef.current = next;
					setTime(next);
				},
				onEnded: () => {
					const end = videoRef.current?.duration;
					if (end && Number.isFinite(end)) {
						timeRef.current = end;
						setTime(end);
					}
					setPlaying(false);
				},
				onError: () => {
					setUseVideo(false);
					setRunDuration(film.duration);
				}
			}) : pictureOk ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: film.poster,
				alt: "",
				onError: () => setPictureOk(false),
				className: cn("absolute inset-0 h-full w-full object-cover", playing && "ken-burns")
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-elevated" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "absolute inset-0 z-0",
				"aria-label": playing ? "Pause preview" : "Play preview",
				onClick: () => setPlaying((value) => !value)
			}),
			!playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "pointer-events-none absolute left-1/2 top-1/2 z-10 inline-flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-accent-ink",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
					className: "size-7",
					fill: "currentColor"
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
				className: "absolute right-3 top-3 z-20 inline-flex size-11 items-center justify-center rounded-full bg-canvas/80 text-ink",
				"aria-label": "Close",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-canvas via-canvas/80 to-transparent px-3 pb-3 pt-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setPlaying((value) => !value),
							"aria-label": playing ? "Pause" : "Play",
							className: "inline-flex size-11 shrink-0 items-center justify-center rounded-full text-ink",
							children: playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
								className: "size-5",
								fill: "currentColor"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-12 shrink-0 text-xs tabular-nums text-ink",
							children: formatDuration(time)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "range",
							min: 0,
							max: Math.max(runDuration, .1),
							step: .1,
							value: Math.min(time, runDuration),
							"aria-label": "Seek",
							"aria-valuetext": formatDuration(time),
							onChange: (event) => seek(Number(event.target.value)),
							className: "h-11 min-w-0 flex-1 cursor-pointer accent-accent"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-12 shrink-0 text-right text-xs tabular-nums text-muted",
							children: formatDuration(runDuration)
						}),
						useVideo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": muted ? "Unmute" : "Mute",
							"aria-pressed": muted,
							onClick: () => setMuted((value) => !value),
							className: "inline-flex size-11 shrink-0 items-center justify-center rounded-full text-ink",
							children: muted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-4" })
						}) : null
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-xs text-muted",
					children: useVideo ? "Trailer" : "Still preview"
				})]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-5 md:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
				className: "font-display text-2xl font-medium tracking-tight text-ink",
				children: film.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm text-muted",
				children: [
					film.creator,
					" · ",
					categoryName(film.category),
					" · ",
					formatDuration(film.duration),
					" · ",
					formatAgo(film.uploadedAt),
					film.source === "Archive" ? " · Archive" : ""
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
				className: "mt-3 text-sm leading-normal text-ink",
				children: film.synopsis
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					"aria-pressed": saved,
					onClick: () => {
						const was = useLibrary.getState().saved.includes(film.id);
						toggleSaved(film.id);
						toast(was ? "Removed from Saved" : "Saved");
					},
					className: cn("inline-flex h-11 items-center gap-2 rounded-full border px-4 text-sm font-medium", saved ? "border-accent text-accent" : "border-line text-ink"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, {
						className: "size-4",
						fill: saved ? "currentColor" : "none"
					}), saved ? "Saved" : "Save"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-pressed": followed,
					onClick: () => {
						const was = useLibrary.getState().following.includes(film.creator);
						toggleFollow(film.creator);
						toast(was ? `Unfollowed ${film.creator}` : `Following ${film.creator}`);
					},
					className: cn("inline-flex h-11 items-center gap-2 rounded-full border px-4 text-sm font-medium", followed ? "border-accent text-accent" : "border-line text-ink"),
					children: followed ? "Following" : "Follow"
				})]
			}),
			related.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mb-3 text-sm font-medium text-muted",
					children: "Related"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "shelf flex gap-3 overflow-x-auto pb-1",
					children: related.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-40 shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoCard, {
							compact: true,
							film: item,
							onOpen: () => onPick(item.id)
						})
					}, item.id))
				})]
			}) : null
		]
	})] });
}
var TABS = [
	{
		id: "explore",
		label: "Explore",
		icon: Compass
	},
	{
		id: "following",
		label: "Following",
		icon: Users
	},
	{
		id: "latest",
		label: "Latest",
		icon: Clock
	},
	{
		id: "saved",
		label: "Saved",
		icon: Bookmark
	},
	{
		id: "library",
		label: "Library",
		icon: Library
	}
];
function App() {
	const [tab, setTab] = (0, import_react.useState)("explore");
	const [query, setQuery] = (0, import_react.useState)("");
	const [category, setCategory] = (0, import_react.useState)(null);
	const [creator, setCreator] = (0, import_react.useState)(null);
	const [activeId, setActiveId] = (0, import_react.useState)(null);
	const [heroVideo, setHeroVideo] = (0, import_react.useState)(true);
	const searchRef = (0, import_react.useRef)(null);
	const saved = useLibrary((state) => state.saved);
	const following = useLibrary((state) => state.following);
	const progress = useLibrary((state) => state.progress);
	const seenAt = useLibrary((state) => state.seenAt);
	const toggleFollow = useLibrary((state) => state.toggleFollow);
	(0, import_react.useEffect)(() => {
		useLibrary.persist.rehydrate();
	}, []);
	(0, import_react.useEffect)(() => {
		const onKey = (event) => {
			if (activeId) return;
			const tag = event.target?.tagName;
			if (tag === "INPUT" || tag === "TEXTAREA") {
				if (event.key === "Escape") event.target.blur();
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
	function matches(film) {
		if (!q) return true;
		return film.title.toLowerCase().includes(q) || film.creator.toLowerCase().includes(q) || film.synopsis.toLowerCase().includes(q) || categoryName(film.category).toLowerCase().includes(q);
	}
	function goHome() {
		setTab("explore");
		setCategory(null);
		setCreator(null);
		setQuery("");
	}
	function selectTab(next) {
		setTab(next);
		setCategory(null);
		setCreator(null);
	}
	function openCreator(name) {
		setTab("explore");
		setCategory(null);
		setCreator(name);
		setQuery("");
	}
	function openCategory(id) {
		setTab("explore");
		setCreator(null);
		setCategory(id);
		setQuery("");
	}
	const savedFilms = saved.map((id) => getFilm(id)).filter((film) => film != null);
	let view;
	if (q) {
		const list = (tab === "saved" ? savedFilms : tab === "following" ? films.filter((film) => following.includes(film.creator)) : tab === "library" ? films.filter((film) => seenAt[film.id]) : tab === "latest" ? latestFilms() : films).filter(matches);
		const heading = tab === "explore" ? "Results" : TABS.find((item) => item.id === tab)?.label ?? "Results";
		view = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHead, {
			title: heading,
			blurb: list.length === 1 ? "1 film" : `${list.length} films`
		}), list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(EmptyNote, { children: [
			"Nothing matches “",
			query.trim(),
			"”."
		] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilmGrid, {
			films: list,
			onOpen: setActiveId,
			onCreator: openCreator
		})] });
	} else if (tab === "explore" && category) {
		const current = categories.find((item) => item.id === category);
		const list = filmsIn(category);
		view = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHead, {
			title: current?.name ?? "Shelf",
			blurb: current?.blurb,
			onBack: () => setCategory(null)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilmGrid, {
			films: list,
			onOpen: setActiveId,
			onCreator: openCreator
		})] });
	} else if (tab === "explore" && creator) {
		const list = films.filter((film) => film.creator === creator);
		const followed = following.includes(creator);
		view = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setCreator(null),
				className: "mb-3 inline-flex h-11 items-center gap-2 text-sm text-muted hover:text-ink",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "Explore"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-5 flex flex-wrap items-end justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl font-medium tracking-tight",
					children: creator
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: list.length === 1 ? "1 film" : `${list.length} films`
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-pressed": followed,
					onClick: () => toggleFollow(creator),
					className: cn("inline-flex h-11 items-center rounded-full border px-4 text-sm font-medium", followed ? "border-accent text-accent" : "border-line text-ink"),
					children: followed ? "Following" : "Follow"
				})]
			}),
			list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyNote, { children: "No films from this creator." }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilmGrid, {
				films: list,
				onOpen: setActiveId,
				onCreator: openCreator
			})
		] });
	} else if (tab === "explore") view = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Explore, {
		heroVideo,
		onHeroError: () => setHeroVideo(false),
		onOpen: setActiveId,
		onCreator: openCreator,
		onCategory: openCategory
	});
	else if (tab === "following") view = following.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FollowingEmpty, { onCreator: openCreator }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHead, {
		title: "Following",
		blurb: "Films from people you follow."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilmGrid, {
		films: films.filter((film) => following.includes(film.creator)),
		onOpen: setActiveId,
		onCreator: openCreator
	})] });
	else if (tab === "latest") view = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHead, {
		title: "Latest",
		blurb: "Newest films on the shelf."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilmGrid, {
		films: latestFilms(),
		onOpen: setActiveId,
		onCreator: openCreator
	})] });
	else if (tab === "saved") view = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHead, {
		title: "Saved",
		blurb: "Kept on this device."
	}), savedFilms.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyNote, { children: "Save a film from its card or from the player." }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilmGrid, {
		films: savedFilms,
		onOpen: setActiveId,
		onCreator: openCreator
	})] });
	else {
		const continueFilms = films.filter((film) => {
			const seconds = progress[film.id] ?? 0;
			return seconds > 4 && seconds < film.duration * .92;
		}).sort((a, b) => (seenAt[b.id] ?? 0) - (seenAt[a.id] ?? 0));
		const historyFilms = films.filter((film) => seenAt[film.id]).sort((a, b) => (seenAt[b.id] ?? 0) - (seenAt[a.id] ?? 0));
		view = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHead, {
			title: "Library",
			blurb: "Previews you have opened."
		}), continueFilms.length === 0 && historyFilms.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyNote, { children: "Play a preview and it will stay on this shelf." }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [continueFilms.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mb-4 font-display text-2xl font-medium tracking-tight",
			children: "Continue"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilmGrid, {
			films: continueFilms,
			onOpen: setActiveId,
			onCreator: openCreator
		})] }) : null, historyFilms.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: continueFilms.length > 0 ? "mt-10" : void 0,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-4 font-display text-2xl font-medium tracking-tight",
				children: "History"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilmGrid, {
				films: historyFilms,
				onOpen: setActiveId,
				onCreator: openCreator
			})]
		}) : null] })] });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#content",
				className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-accent-ink",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-30 border-b border-line bg-canvas",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 md:flex-row md:items-center md:gap-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: goHome,
							className: "inline-flex h-11 items-center gap-3 rounded-xl pr-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex size-8 items-center justify-center rounded-lg bg-accent text-accent-ink",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
									className: "size-4",
									fill: "currentColor"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-lg font-medium tracking-tight",
								children: "Aurora Flow"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "relative w-full md:max-w-xl md:flex-1",
							role: "search",
							onSubmit: (event) => event.preventDefault(),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "search",
									className: "sr-only",
									children: "Search"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "search",
									ref: searchRef,
									type: "text",
									enterKeyHint: "search",
									value: query,
									onChange: (event) => {
										setQuery(event.target.value);
										setCategory(null);
										setCreator(null);
									},
									placeholder: "Search films, people, topics",
									autoComplete: "off",
									className: "h-11 w-full rounded-full border border-line bg-surface pr-11 pl-11 text-sm text-ink outline-none placeholder:text-muted"
								}),
								query ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-label": "Clear search",
									onClick: () => setQuery(""),
									className: "absolute top-1/2 right-1 inline-flex size-9 -translate-y-1/2 items-center justify-center rounded-full text-muted hover:text-ink",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
								}) : null
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden items-center gap-1 md:flex",
							"aria-label": "Sections",
							children: TABS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-current": tab === item.id ? "page" : void 0,
								onClick: () => selectTab(item.id),
								className: cn("inline-flex h-11 items-center rounded-full px-3 text-sm font-medium", tab === item.id ? "bg-surface text-ink" : "text-muted hover:text-ink"),
								children: item.label
							}, item.id))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "content",
				className: "mx-auto min-w-0 max-w-6xl px-4 pt-6 pb-24 md:pb-12",
				children: view
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "fixed inset-x-0 bottom-0 z-40 border-t border-line bg-canvas pb-[env(safe-area-inset-bottom)] md:hidden",
				"aria-label": "Sections",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid grid-cols-5",
					children: TABS.map((item) => {
						const Icon = item.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							"aria-current": tab === item.id ? "page" : void 0,
							onClick: () => selectTab(item.id),
							className: cn("flex min-h-14 w-full flex-col items-center justify-center gap-0.5 text-xs", tab === item.id ? "text-accent" : "text-muted"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" }), item.label]
						}) }, item.id);
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlayerDialog, {
				filmId: activeId,
				onClose: () => setActiveId(null),
				onPick: setActiveId
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
				theme: "dark",
				position: "top-center",
				offset: 12,
				toastOptions: { style: {
					background: "var(--color-elevated)",
					color: "var(--color-ink)",
					border: "1px solid var(--color-line)"
				} }
			})
		]
	});
}
function Explore({ heroVideo, onHeroError, onOpen, onCreator, onCategory }) {
	const featured = featuredFilm;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "overflow-hidden rounded-3xl border border-line bg-surface md:relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative aspect-video md:aspect-[12/5]",
				children: [heroVideo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
					className: "absolute inset-0 h-full w-full object-cover",
					src: featured.trailer,
					poster: featured.poster,
					autoPlay: true,
					muted: true,
					loop: true,
					playsInline: true,
					onError: onHeroError
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: featured.poster,
					alt: "",
					className: "absolute inset-0 h-full w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 hidden bg-gradient-to-t from-canvas via-canvas/55 to-transparent md:block" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-5 md:absolute md:inset-x-0 md:bottom-0 md:max-w-xl md:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-wide text-accent uppercase",
						children: "Featured"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-3xl font-medium tracking-tight text-ink lg:text-5xl",
						children: featured.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 line-clamp-3 text-sm leading-normal text-muted",
						children: featured.synopsis
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-xs text-muted",
						children: [
							featured.creator,
							" · ",
							formatDuration(featured.duration),
							" · ",
							categoryName(featured.category)
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => onOpen(featured.id),
							className: "inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-accent-ink",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
								className: "size-4",
								fill: "currentColor"
							}), "Play"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => onCreator(featured.creator),
							className: "inline-flex h-11 items-center rounded-full border border-line bg-surface px-5 text-sm font-medium text-ink",
							children: featured.creator
						})]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "shelf mt-5 flex gap-2 overflow-x-auto",
			role: "list",
			"aria-label": "Shelves",
			children: categories.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => onCategory(item.id),
				className: "inline-flex h-11 shrink-0 items-center rounded-full border border-line px-4 text-sm text-ink",
				children: item.name
			}, item.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shelf, {
			title: "Trending",
			blurb: "Six films worth starting with.",
			children: trendingFilms().map((film) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-64 shrink-0 snap-start md:w-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoCard, {
					film,
					onOpen: () => onOpen(film.id),
					onCreator
				})
			}, film.id))
		}),
		categories.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shelf, {
			title: item.name,
			blurb: item.blurb,
			onSeeAll: () => onCategory(item.id),
			children: filmsIn(item.id).map((film) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-64 shrink-0 snap-start md:w-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoCard, {
					film,
					onOpen: () => onOpen(film.id),
					onCreator
				})
			}, film.id))
		}, item.id))
	] });
}
function FollowingEmpty({ onCreator }) {
	const toggleFollow = useLibrary((state) => state.toggleFollow);
	const people = creatorList();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHead, {
		title: "Following",
		blurb: "Follow a creator and their films collect here."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "overflow-hidden rounded-3xl border border-line",
		children: people.map((person) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "flex items-center gap-3 border-b border-line px-3 last:border-b-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => onCreator(person.name),
				className: "h-14 min-w-0 flex-1 truncate text-left text-sm font-medium text-ink",
				children: [person.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-2 font-normal text-muted",
					children: person.count === 1 ? "1 film" : `${person.count} films`
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => toggleFollow(person.name),
				className: "inline-flex h-11 shrink-0 items-center rounded-full border border-line px-4 text-sm font-medium text-ink",
				children: "Follow"
			})]
		}, person.name))
	})] });
}
function Shelf({ title, blurb, onSeeAll, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-4 flex items-end justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-medium tracking-tight text-ink",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: blurb
				})]
			}), onSeeAll ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onSeeAll,
				className: "inline-flex h-11 shrink-0 items-center text-sm font-medium text-accent",
				children: "See all"
			}) : null]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "shelf flex snap-x gap-4 overflow-x-auto p-1 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-3",
			children
		})]
	});
}
function PageHead({ title, blurb, onBack }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "mb-5",
		children: [
			onBack ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: onBack,
				className: "mb-3 inline-flex h-11 items-center gap-2 text-sm text-muted hover:text-ink",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "Explore"]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl font-medium tracking-tight",
				children: title
			}),
			blurb ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: blurb
			}) : null
		]
	});
}
function FilmGrid({ films: list, onOpen, onCreator }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
		children: list.map((film) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoCard, {
			film,
			onOpen: () => onOpen(film.id),
			onCreator
		}, film.id))
	});
}
function EmptyNote({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "rounded-3xl border border-dashed border-line px-6 py-14 text-center text-sm leading-normal text-muted",
		children
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(App, {});
}
//#endregion
export { Home as component };
