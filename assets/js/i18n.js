/* ============================================================
   Good Price — i18n.js
   FR pour les navigateurs francophones, EN pour le reste.
   ============================================================ */

const I18N = {
  fr: {
    "nav.calculator": "Calculateur",
    "nav.rates": "Tarifs du marché",
    "nav.tips": "Conseils",

    "hero.badge": "✨ Estimateur de prix pour créateurs",
    "hero.title1": "Vendez vos commissions",
    "hero.title2": "au juste prix.",
    "hero.sub": "Good Price estime le meilleur prix de vente pour vos commissions en ligne — textures, avatars et scripts VRChat, illustration, montage, dev web… — en tenant compte du temps, de la complexité, des options et de votre marge.",
    "hero.cta1": "Calculer mon prix",
    "hero.cta2": "Voir les tarifs du marché",
    "hero.stat1": "services référencés",
    "hero.stat2": "catégories : 3D, 2D, VRChat…",
    "hero.stat3": "gratuit, calcul local",

    "calc.title": "Calculateur de prix",
    "calc.sub": "Répondez à quelques questions, obtenez un prix juste et argumenté.",
    "calc.step1": "Type de commission",
    "calc.step2": "Temps & profil",
    "calc.hours": "Temps de travail estimé",
    "calc.hoursUnit": "h",
    "calc.experience": "Votre niveau d'expérience",
    "calc.expBeginner": "Débutant",
    "calc.expIntermediate": "Confirmé",
    "calc.expExpert": "Expert",
    "calc.expHint.beginner": "Portfolio en construction — tarif d'appel pour gagner des avis (−30 %).",
    "calc.expHint.intermediate": "Vous livrez régulièrement avec un rendu pro — tarif standard du marché.",
    "calc.expHint.expert": "Style reconnu, forte demande, délais maîtrisés (+40 %).",
    "calc.complexity": "Complexité du projet",
    "calc.cxSimple": "Simple",
    "calc.cxStandard": "Standard",
    "calc.cxComplex": "Complexe",
    "calc.cxAdvanced": "Très complexe",
    "calc.step3": "Options & droits",
    "calc.revisions": "Révisions supplémentaires (au-delà de 2 incluses)",
    "calc.margin": "Marge de sécurité",
    "calc.marginHint": "Couvre les imprévus, allers-retours client et frais de plateforme (Gumroad, Booth, PayPal…).",

    "opt.rush.name": "Livraison express",
    "opt.rush.desc": "Délai réduit de moitié, priorité sur la file",
    "opt.commercial.name": "Droits d'usage commercial",
    "opt.commercial.desc": "Le client peut monétiser le résultat (streaming, vente…)",
    "opt.source.name": "Fichiers sources",
    "opt.source.desc": "PSD, Blend, FBX, projet Unity… livrés au client",
    "opt.exclusive.name": "Exclusivité",
    "opt.exclusive.desc": "Jamais revendu ni réutilisé pour un autre client",
    "opt.nda.name": "Confidentialité (NDA)",
    "opt.nda.desc": "Pas de post portfolio ni de publication du travail",

    "result.recommended": "Prix de vente recommandé",
    "result.range": "Fourchette conseillée",
    "result.market": "Position vs marché",
    "result.marketHint": "Fourchette ajustée à votre niveau d'expérience.",
    "result.market.low": "Sous le marché",
    "result.market.fair": "Dans le marché",
    "result.market.high": "Au-dessus",
    "result.breakdown": "Détail du calcul",
    "result.selectService": "Sélectionnez un service pour lancer le calcul.",
    "result.copy": "📋 Copier l'estimation",
    "result.copied": "Estimation copiée !",

    "bd.labor": "Base travail ({hours} h × {rate}/h)",
    "bd.experience": "Ajustement expérience",
    "bd.complexity": "Ajustement complexité",
    "bd.options": "Options ({list})",
    "bd.revisions": "Révisions supplémentaires (×{n})",
    "bd.margin": "Marge de sécurité ({pct} %)",
    "bd.minimum": "Minimum de prestation appliqué",
    "bd.total": "Total recommandé",

    "advice.low": "💡 Votre prix est sous la fourchette du marché ({min}–{max}). C'est OK pour lancer votre portfolio, mais ne restez pas trop longtemps à ce niveau : cela dévalorise votre travail et celui des autres créateurs.",
    "advice.fair": "✅ Votre prix est dans la fourchette du marché ({min}–{max}). C'est un tarif juste et défendable auprès de vos clients.",
    "advice.high": "🚀 Votre prix est au-dessus de la fourchette habituelle ({min}–{max}). C'est justifié si votre style est très demandé ou si le projet est réellement hors norme — préparez un argumentaire (portfolio, délais, qualité).",

    "rates.title": "Tarifs de référence du marché",
    "rates.sub": "Fourchettes constatées sur les plateformes de commissions (VRChat, réseaux créatifs, freelancing). Données indicatives.",
    "rates.hourly": "≈ {rate}/h",
    "rates.perUnit": "l'unité",

    "tips.title": "Conseils pour bien fixer vos prix",
    "tip1.title": "Traquez votre temps réel",
    "tip1.body": "Chronométrez chaque commission (même les échanges avec le client). La plupart des créateurs sous-estiment leur temps de 30 à 50 %, et donc leur prix.",
    "tip2.title": "Les révisions se facturent",
    "tip2.body": "Incluez 1 à 2 allers-retours dans le prix, puis facturez chaque révision supplémentaire. Annoncez-le dès le devis : c'est ce qui évite les projets sans fin.",
    "tip3.title": "Usage commercial ≠ usage perso",
    "tip3.body": "Un avatar streamé, une texture vendue ou un asset intégré à un produit rapportent de l'argent à votre client. Facturez ces droits 30 à 100 % de plus.",
    "tip4.title": "Demandez un acompte",
    "tip4.body": "30 à 50 % à la commande, le reste à la livraison. C'est la norme, ça filtre les clients non sérieux et ça sécurise votre travail.",
    "tip5.title": "Augmentez avec la demande",
    "tip5.body": "File d'attente pleine pendant plus d'un mois ? C'est le signal : augmentez vos tarifs de 10 à 20 %. Vos prix doivent suivre votre progression.",
    "tip6.title": "Écrivez des CGV simples",
    "tip6.body": "Délais, nombre de révisions, droits cédés, conditions de remboursement. Un paragraphe clair dans votre devis évite 90 % des litiges.",

    "footer.note": "Les estimations sont indicatives et ne constituent pas un conseil juridique ou fiscal. Fait avec 💚 pour les créateurs.",
  },

  en: {
    "nav.calculator": "Calculator",
    "nav.rates": "Market rates",
    "nav.tips": "Tips",

    "hero.badge": "✨ Price estimator for creators",
    "hero.title1": "Sell your commissions",
    "hero.title2": "at a fair price.",
    "hero.sub": "Good Price estimates the best selling price for your online commissions — VRChat textures, avatars and scripts, illustration, video editing, web dev… — factoring in time, complexity, options and your margin.",
    "hero.cta1": "Calculate my price",
    "hero.cta2": "See market rates",
    "hero.stat1": "services referenced",
    "hero.stat2": "categories: 3D, 2D, VRChat…",
    "hero.stat3": "free, runs locally",

    "calc.title": "Price calculator",
    "calc.sub": "Answer a few questions, get a fair and defensible price.",
    "calc.step1": "Commission type",
    "calc.step2": "Time & profile",
    "calc.hours": "Estimated work time",
    "calc.hoursUnit": "h",
    "calc.experience": "Your experience level",
    "calc.expBeginner": "Beginner",
    "calc.expIntermediate": "Intermediate",
    "calc.expExpert": "Expert",
    "calc.expHint.beginner": "Building your portfolio — entry pricing to earn reviews (−30%).",
    "calc.expHint.intermediate": "You deliver consistently at pro quality — standard market rate.",
    "calc.expHint.expert": "Recognized style, high demand, reliable delivery (+40%).",
    "calc.complexity": "Project complexity",
    "calc.cxSimple": "Simple",
    "calc.cxStandard": "Standard",
    "calc.cxComplex": "Complex",
    "calc.cxAdvanced": "Very complex",
    "calc.step3": "Options & rights",
    "calc.revisions": "Extra revisions (beyond 2 included)",
    "calc.margin": "Safety margin",
    "calc.marginHint": "Covers surprises, client back-and-forth and platform fees (Gumroad, Booth, PayPal…).",

    "opt.rush.name": "Rush delivery",
    "opt.rush.desc": "Half the usual deadline, front of the queue",
    "opt.commercial.name": "Commercial use rights",
    "opt.commercial.desc": "Client can monetize the result (streaming, resale…)",
    "opt.source.name": "Source files",
    "opt.source.desc": "PSD, Blend, FBX, Unity project… delivered to the client",
    "opt.exclusive.name": "Exclusivity",
    "opt.exclusive.desc": "Never resold or reused for another client",
    "opt.nda.name": "Confidentiality (NDA)",
    "opt.nda.desc": "No portfolio post or public sharing of the work",

    "result.recommended": "Recommended selling price",
    "result.range": "Suggested range",
    "result.market": "Position vs market",
    "result.marketHint": "Range adjusted to your experience level.",
    "result.market.low": "Below market",
    "result.market.fair": "Within market",
    "result.market.high": "Above market",
    "result.breakdown": "Calculation details",
    "result.selectService": "Select a service to start the estimate.",
    "result.copy": "📋 Copy estimate",
    "result.copied": "Estimate copied!",

    "bd.labor": "Labor base ({hours} h × {rate}/h)",
    "bd.experience": "Experience adjustment",
    "bd.complexity": "Complexity adjustment",
    "bd.options": "Options ({list})",
    "bd.revisions": "Extra revisions (×{n})",
    "bd.margin": "Safety margin ({pct}%)",
    "bd.minimum": "Minimum project fee applied",
    "bd.total": "Recommended total",

    "advice.low": "💡 Your price is below the market range ({min}–{max}). Fine to kick-start your portfolio, but don't stay there too long: it undervalues your work and the community's.",
    "advice.fair": "✅ Your price sits within the market range ({min}–{max}). It's a fair, defensible rate for your clients.",
    "advice.high": "🚀 Your price is above the usual range ({min}–{max}). Justified if your style is in high demand or the project is truly out of the ordinary — be ready to back it up (portfolio, deadlines, quality).",

    "rates.title": "Market reference rates",
    "rates.sub": "Ranges observed on commission platforms (VRChat scene, creative networks, freelancing). Indicative data.",
    "rates.hourly": "≈ {rate}/h",
    "rates.perUnit": "per unit",

    "tips.title": "Tips for pricing your work right",
    "tip1.title": "Track your real time",
    "tip1.body": "Time every commission (client chats included). Most creators underestimate their time by 30–50% — and their price with it.",
    "tip2.title": "Revisions are billable",
    "tip2.body": "Include 1–2 rounds in the price, then charge for each extra revision. State it in the quote: that's what prevents never-ending projects.",
    "tip3.title": "Commercial use ≠ personal use",
    "tip3.body": "A streamed avatar, a resold texture or an asset shipped in a product earns your client money. Charge 30–100% more for those rights.",
    "tip4.title": "Ask for a deposit",
    "tip4.body": "30–50% upfront, the rest on delivery. It's the norm, it filters out non-serious clients and protects your work.",
    "tip5.title": "Raise prices with demand",
    "tip5.body": "Queue full for over a month? That's the signal: raise your rates by 10–20%. Your prices should grow with your skills.",
    "tip6.title": "Write simple terms of service",
    "tip6.body": "Deadlines, revision count, rights granted, refund policy. One clear paragraph in your quote prevents 90% of disputes.",

    "footer.note": "Estimates are indicative and do not constitute legal or tax advice. Made with 💚 for creators.",
  },
};

/** Detect initial language: FR for French-speaking browsers, EN otherwise. */
function detectLang() {
  const saved = localStorage.getItem("gp-lang");
  if (saved && I18N[saved]) return saved;
  const nav = (navigator.language || navigator.userLanguage || "en").toLowerCase();
  return nav.startsWith("fr") ? "fr" : "en";
}

let currentLang = detectLang();

function t(key, params = {}) {
  let str = (I18N[currentLang] && I18N[currentLang][key]) || I18N.en[key] || key;
  for (const [k, v] of Object.entries(params)) {
    str = str.replaceAll(`{${k}}`, v);
  }
  return str;
}

/** Apply translations to all [data-i18n] elements. */
function applyTranslations() {
  document.documentElement.lang = currentLang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.title = currentLang === "fr"
    ? "Good Price — Estimez le juste prix de vos commissions"
    : "Good Price — Estimate the fair price of your commissions";
  // Toggle shows the OTHER language (the one you'd switch to)
  const flag = document.getElementById("lang-flag");
  const label = document.getElementById("lang-label");
  if (flag && label) {
    if (currentLang === "fr") { flag.textContent = "🇬🇧"; label.textContent = "EN"; }
    else { flag.textContent = "🇫🇷"; label.textContent = "FR"; }
  }
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("gp-lang", lang);
  applyTranslations();
  document.dispatchEvent(new CustomEvent("gp:langchange"));
}
