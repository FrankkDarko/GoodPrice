/* ============================================================
   Good Price — data.js
   Base de tarifs de référence. Prix de base en USD ; l'EUR est
   converti via EUR_RATE. Fourchettes indicatives constatées sur
   les plateformes de commissions (2025-2026).
   ============================================================ */

const EUR_RATE = 0.93; // 1 USD ≈ 0.93 EUR

const SERVICES = [
  /* ---------------- VRChat ---------------- */
  {
    id: "vrc-texture",
    category: "vrchat",
    icon: "🎨",
    name: { fr: "Texture / retexture d'avatar", en: "Avatar texture / retexture" },
    desc: {
      fr: "Personnalisation de textures pour un avatar existant (vêtements, peau, motifs).",
      en: "Custom textures for an existing avatar (clothing, skin, patterns).",
    },
    hourly: 18, minFee: 25, typicalHours: 4, market: [20, 120],
  },
  {
    id: "vrc-avatar-full",
    category: "vrchat",
    icon: "🧍",
    name: { fr: "Avatar complet sur mesure", en: "Full custom avatar" },
    desc: {
      fr: "Modélisation, texturing, rigging et setup Unity d'un avatar 100 % original.",
      en: "Modeling, texturing, rigging and Unity setup of a 100% original avatar.",
    },
    hourly: 25, minFee: 250, typicalHours: 45, market: [300, 2500],
  },
  {
    id: "vrc-avatar-edit",
    category: "vrchat",
    icon: "✂️",
    name: { fr: "Édition d'avatar / kitbash", en: "Avatar edit / kitbash" },
    desc: {
      fr: "Assemblage et modification d'assets existants (cheveux, tenues, accessoires).",
      en: "Assembling and modifying existing assets (hair, outfits, accessories).",
    },
    hourly: 20, minFee: 40, typicalHours: 8, market: [50, 300],
  },
  {
    id: "vrc-asset",
    category: "vrchat",
    icon: "📦",
    name: { fr: "Asset / prop 3D", en: "3D asset / prop" },
    desc: {
      fr: "Modélisation d'un objet, accessoire ou vêtement 3D optimisé VRChat.",
      en: "Modeling of an object, accessory or 3D clothing optimized for VRChat.",
    },
    hourly: 20, minFee: 30, typicalHours: 6, market: [30, 200],
  },
  {
    id: "vrc-world",
    category: "vrchat",
    icon: "🌍",
    name: { fr: "Monde VRChat", en: "VRChat world" },
    desc: {
      fr: "Création d'un monde : environnement, lighting, optimisation, interactions de base.",
      en: "World creation: environment, lighting, optimization, basic interactions.",
    },
    hourly: 24, minFee: 200, typicalHours: 40, market: [250, 2000],
  },
  {
    id: "vrc-script",
    category: "vrchat",
    icon: "⚙️",
    name: { fr: "Script Udon / système", en: "Udon script / system" },
    desc: {
      fr: "Programmation UdonSharp : mini-jeux, systèmes interactifs, outils de monde.",
      en: "UdonSharp programming: minigames, interactive systems, world tools.",
    },
    hourly: 28, minFee: 40, typicalHours: 8, market: [50, 500],
  },
  {
    id: "vrc-shader",
    category: "vrchat",
    icon: "✨",
    name: { fr: "Shader / effets visuels", en: "Shader / visual effects" },
    desc: {
      fr: "Shaders custom, matériaux stylisés, effets audio-link et particules.",
      en: "Custom shaders, stylized materials, audio-link effects and particles.",
    },
    hourly: 28, minFee: 50, typicalHours: 8, market: [60, 400],
  },
  {
    id: "vrc-rigging",
    category: "vrchat",
    icon: "🦴",
    name: { fr: "Rigging / PhysBones", en: "Rigging / PhysBones" },
    desc: {
      fr: "Rig, weight painting, setup PhysBones, colliders et expressions faciales.",
      en: "Rig, weight painting, PhysBones setup, colliders and facial expressions.",
    },
    hourly: 22, minFee: 30, typicalHours: 5, market: [30, 200],
  },
  {
    id: "vrc-animation",
    category: "vrchat",
    icon: "💃",
    name: { fr: "Animations / emotes", en: "Animations / emotes" },
    desc: {
      fr: "Emotes, idles, danses et animations de gestes pour avatars.",
      en: "Emotes, idles, dances and gesture animations for avatars.",
    },
    hourly: 20, minFee: 20, typicalHours: 4, market: [20, 150],
  },

  /* ---------------- Online services ---------------- */
  {
    id: "on-logo",
    category: "online",
    icon: "🏷️",
    name: { fr: "Logo & identité visuelle", en: "Logo & brand identity" },
    desc: {
      fr: "Création de logo, déclinaisons et mini charte graphique.",
      en: "Logo creation, variations and a mini brand guide.",
    },
    hourly: 30, minFee: 60, typicalHours: 8, market: [80, 800],
  },
  {
    id: "on-illustration",
    category: "online",
    icon: "🖌️",
    name: { fr: "Illustration / character art", en: "Illustration / character art" },
    desc: {
      fr: "Illustration personnalisée : portrait, full body, scène complète.",
      en: "Custom illustration: portrait, full body, full scene.",
    },
    hourly: 25, minFee: 40, typicalHours: 8, market: [50, 500],
  },
  {
    id: "on-emotes",
    category: "online",
    icon: "😆",
    name: { fr: "Emotes & badges Twitch", en: "Twitch emotes & badges" },
    desc: {
      fr: "Packs d'emotes, badges d'abonnés et panels pour streamers.",
      en: "Emote packs, sub badges and panels for streamers.",
    },
    hourly: 22, minFee: 15, typicalHours: 3, market: [15, 150],
  },
  {
    id: "on-web",
    category: "online",
    icon: "🌐",
    name: { fr: "Site web / intégration", en: "Website / front-end" },
    desc: {
      fr: "Site vitrine, portfolio ou landing page — design et intégration.",
      en: "Showcase site, portfolio or landing page — design and build.",
    },
    hourly: 40, minFee: 250, typicalHours: 25, market: [300, 3000],
  },
  {
    id: "on-video",
    category: "online",
    icon: "🎬",
    name: { fr: "Montage vidéo", en: "Video editing" },
    desc: {
      fr: "Montage YouTube, shorts, trailers — cuts, sound design, habillage.",
      en: "YouTube edits, shorts, trailers — cuts, sound design, motion graphics.",
    },
    hourly: 28, minFee: 40, typicalHours: 6, market: [50, 400],
  },
  {
    id: "on-motion",
    category: "online",
    icon: "🌀",
    name: { fr: "Motion design / animation 2D", en: "Motion design / 2D animation" },
    desc: {
      fr: "Intros animées, transitions de stream, animations de logo.",
      en: "Animated intros, stream transitions, logo animations.",
    },
    hourly: 35, minFee: 60, typicalHours: 8, market: [80, 600],
  },
  {
    id: "on-writing",
    category: "online",
    icon: "✍️",
    name: { fr: "Rédaction / traduction", en: "Writing / translation" },
    desc: {
      fr: "Articles, scripts vidéo, traduction FR⇄EN, relecture.",
      en: "Articles, video scripts, FR⇄EN translation, proofreading.",
    },
    hourly: 25, minFee: 20, typicalHours: 4, market: [25, 250],
  },
  {
    id: "on-music",
    category: "online",
    icon: "🎵",
    name: { fr: "Musique / sound design", en: "Music / sound design" },
    desc: {
      fr: "Jingles, musiques de fond, SFX pour vidéos, jeux et mondes VR.",
      en: "Jingles, background music, SFX for videos, games and VR worlds.",
    },
    hourly: 30, minFee: 50, typicalHours: 6, market: [60, 500],
  },
];

/* Multiplicateurs */
const EXPERIENCE_MULT = {
  beginner: 0.7,
  intermediate: 1.0,
  expert: 1.4,
};

const COMPLEXITY_MULT = {
  simple: 0.85,
  standard: 1.0,
  complex: 1.3,
  advanced: 1.65,
};

/* Options additionnelles (pourcentage appliqué au sous-total) */
const OPTIONS = [
  { id: "rush", pct: 35, icon: "⚡" },
  { id: "commercial", pct: 50, icon: "💼" },
  { id: "source", pct: 20, icon: "📁" },
  { id: "exclusive", pct: 40, icon: "🔒" },
  { id: "nda", pct: 15, icon: "🤫" },
];

const REVISION_PCT = 8; // % du sous-total par révision supplémentaire
