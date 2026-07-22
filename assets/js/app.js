/* ============================================================
   Good Price — app.js
   Logique du calculateur et rendu de l'interface.
   ============================================================ */

/* ---------- State ---------- */
const state = {
  category: "vrchat",
  serviceId: "vrc-texture",
  hours: 8,
  experience: "intermediate",
  complexity: "standard",
  options: new Set(),
  revisions: 0,
  margin: 15,
  currency: localStorage.getItem("gp-currency") || (detectLang() === "fr" ? "EUR" : "USD"),
  ratesTab: "vrchat",
};

/* ---------- Helpers ---------- */
const $ = (sel) => document.querySelector(sel);

function getService() {
  return SERVICES.find((s) => s.id === state.serviceId) || null;
}

function toCurrency(usd) {
  return state.currency === "EUR" ? usd * EUR_RATE : usd;
}

function fmt(usd, opts = {}) {
  const value = toCurrency(usd);
  const locale = currentLang === "fr" ? "fr-FR" : "en-US";
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: state.currency,
    maximumFractionDigits: 0,
    ...opts,
  }).format(value);
}

/** Arrondi "prix psychologique" : au 5 le plus proche. */
function roundPrice(v) {
  return Math.round(v / 5) * 5 || Math.round(v);
}

/* ---------- Core computation ---------- */
function computeEstimate() {
  const svc = getService();
  if (!svc) return null;

  const expMult = EXPERIENCE_MULT[state.experience];
  const cxMult = COMPLEXITY_MULT[state.complexity];

  const laborBase = state.hours * svc.hourly;
  const afterExp = laborBase * expMult;
  const afterCx = afterExp * cxMult;

  const activeOptions = OPTIONS.filter((o) => state.options.has(o.id));
  const optionsPct = activeOptions.reduce((sum, o) => sum + o.pct, 0);
  const optionsAmount = afterCx * (optionsPct / 100);

  const revisionsAmount = afterCx * (REVISION_PCT / 100) * state.revisions;

  let subtotal = afterCx + optionsAmount + revisionsAmount;

  let minApplied = false;
  if (subtotal < svc.minFee) {
    subtotal = svc.minFee;
    minApplied = true;
  }

  const marginAmount = subtotal * (state.margin / 100);
  const total = roundPrice(subtotal + marginAmount);

  return {
    svc, laborBase, afterExp, afterCx,
    expDelta: afterExp - laborBase,
    cxDelta: afterCx - afterExp,
    activeOptions, optionsAmount, revisionsAmount,
    minApplied, marginAmount, total,
    low: roundPrice(total * 0.85),
    high: roundPrice(total * 1.15),
  };
}

/* ---------- Rendering : services ---------- */
function renderServices() {
  const grid = $("#service-grid");
  grid.innerHTML = "";
  SERVICES.filter((s) => s.category === state.category).forEach((svc) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "service-item" + (svc.id === state.serviceId ? " active" : "");
    btn.innerHTML = `
      <span class="svc-icon">${svc.icon}</span>
      <span class="svc-name">${svc.name[currentLang]}</span>
      <span class="svc-rate">${fmt(svc.market[0])}–${fmt(svc.market[1])}</span>
    `;
    btn.addEventListener("click", () => {
      state.serviceId = svc.id;
      state.hours = svc.typicalHours;
      $("#hours-input").value = svc.typicalHours;
      renderServices();
      renderResult();
    });
    grid.appendChild(btn);
  });
}

/* ---------- Rendering : options ---------- */
function renderOptions() {
  const list = $("#options-list");
  list.innerHTML = "";
  OPTIONS.forEach((opt) => {
    const row = document.createElement("div");
    row.className = "option-row" + (state.options.has(opt.id) ? " active" : "");
    row.setAttribute("role", "checkbox");
    row.setAttribute("aria-checked", state.options.has(opt.id));
    row.tabIndex = 0;
    row.innerHTML = `
      <span class="option-check">✓</span>
      <div class="option-info">
        <div class="option-name">${opt.icon} ${t(`opt.${opt.id}.name`)}</div>
        <div class="option-desc">${t(`opt.${opt.id}.desc`)}</div>
      </div>
      <span class="option-pct">+${opt.pct}%</span>
    `;
    const toggle = () => {
      state.options.has(opt.id) ? state.options.delete(opt.id) : state.options.add(opt.id);
      renderOptions();
      renderResult();
    };
    row.addEventListener("click", toggle);
    row.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
    });
    list.appendChild(row);
  });
}

/* ---------- Rendering : result ---------- */
function renderResult() {
  const est = computeEstimate();
  const priceEl = $("#result-price");
  const rangeEl = $("#result-range-values");
  const list = $("#breakdown-list");
  const advice = $("#result-advice");

  if (!est) {
    priceEl.textContent = "—";
    rangeEl.textContent = "—";
    list.innerHTML = `<li>${t("result.selectService")}</li>`;
    advice.textContent = "";
    return;
  }

  priceEl.textContent = fmt(est.total);
  rangeEl.textContent = `${fmt(est.low)} – ${fmt(est.high)}`;

  /* Breakdown */
  const rows = [];
  rows.push([t("bd.labor", { hours: state.hours, rate: fmt(est.svc.hourly) }), fmt(est.laborBase)]);
  if (Math.abs(est.expDelta) > 0.5) {
    rows.push([t("bd.experience"), signed(est.expDelta)]);
  }
  if (Math.abs(est.cxDelta) > 0.5) {
    rows.push([t("bd.complexity"), signed(est.cxDelta)]);
  }
  if (est.activeOptions.length) {
    const names = est.activeOptions.map((o) => t(`opt.${o.id}.name`)).join(", ");
    rows.push([t("bd.options", { list: names }), signed(est.optionsAmount)]);
  }
  if (state.revisions > 0) {
    rows.push([t("bd.revisions", { n: state.revisions }), signed(est.revisionsAmount)]);
  }
  if (est.minApplied) {
    rows.push([t("bd.minimum"), fmt(est.svc.minFee)]);
  }
  rows.push([t("bd.margin", { pct: state.margin }), signed(est.marginAmount)]);

  list.innerHTML = rows
    .map(([label, val]) => `<li><span>${label}</span><strong>${val}</strong></li>`)
    .join("") +
    `<li class="total"><span>${t("bd.total")}</span><strong>${fmt(est.total)}</strong></li>`;

  /* Market comparison */
  const [mMin, mMax] = est.svc.market;
  $("#market-min").textContent = fmt(mMin);
  $("#market-max").textContent = fmt(mMax);

  // Marker position: map [mMin*0.5, mMax*1.5] onto [0%, 100%], market range = [25%, 75%]
  const lo = mMin * 0.5, hi = mMax * 1.5;
  const pos = Math.min(100, Math.max(0, ((est.total - lo) / (hi - lo)) * 100));
  $("#market-marker").style.left = pos + "%";
  const fill = $("#market-fill");
  fill.style.left = (((mMin - lo) / (hi - lo)) * 100) + "%";
  fill.style.width = (((mMax - mMin) / (hi - lo)) * 100) + "%";

  const badge = $("#market-badge");
  badge.classList.remove("low", "high");
  let adviceKey;
  if (est.total < mMin) {
    badge.textContent = t("result.market.low");
    badge.classList.add("low");
    adviceKey = "advice.low";
  } else if (est.total > mMax) {
    badge.textContent = t("result.market.high");
    badge.classList.add("high");
    adviceKey = "advice.high";
  } else {
    badge.textContent = t("result.market.fair");
    adviceKey = "advice.fair";
  }
  advice.textContent = t(adviceKey, { min: fmt(mMin), max: fmt(mMax) });
}

function signed(usd) {
  const s = fmt(Math.abs(usd));
  return (usd < 0 ? "− " : "+ ") + s;
}

/* ---------- Rendering : market rates section ---------- */
function renderRates() {
  const grid = $("#rates-grid");
  grid.innerHTML = "";
  SERVICES.filter((s) => s.category === state.ratesTab).forEach((svc) => {
    const card = document.createElement("div");
    card.className = "rate-card";
    card.innerHTML = `
      <div class="rate-card-head">
        <span class="svc-icon">${svc.icon}</span>
        <h3>${svc.name[currentLang]}</h3>
      </div>
      <div class="rate-range">${fmt(svc.market[0])} – ${fmt(svc.market[1])}</div>
      <div class="rate-hourly">${t("rates.hourly", { rate: fmt(svc.hourly) })}</div>
      <p>${svc.desc[currentLang]}</p>
    `;
    grid.appendChild(card);
  });
}

/* ---------- Rendering : tips ---------- */
function renderTips() {
  const icons = ["⏱️", "🔁", "💼", "🧾", "📈", "📜"];
  const grid = $("#tips-grid");
  grid.innerHTML = icons
    .map((icon, i) => `
      <div class="tip-card">
        <span class="tip-icon">${icon}</span>
        <h3>${t(`tip${i + 1}.title`)}</h3>
        <p>${t(`tip${i + 1}.body`)}</p>
      </div>`)
    .join("");
}

/* ---------- Rendering : experience hint ---------- */
function renderExperienceHint() {
  $("#experience-hint").textContent = t(`calc.expHint.${state.experience}`);
}

/* ---------- Copy estimate ---------- */
function buildEstimateText() {
  const est = computeEstimate();
  if (!est) return "";
  const lines = [
    `Good Price — ${t("result.recommended")}`,
    `${est.svc.name[currentLang]}`,
    `${t("calc.hours")}: ${state.hours} h`,
    `${t("bd.total")}: ${fmt(est.total)}`,
    `${t("result.range")}: ${fmt(est.low)} – ${fmt(est.high)}`,
  ];
  return lines.join("\n");
}

function showToast(msg) {
  const toast = $("#toast");
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => toast.classList.remove("show"), 2200);
}

/* ---------- Segmented control wiring ---------- */
function wireSegmented(id, key) {
  const seg = document.getElementById(id);
  seg.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      seg.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      state[key] = btn.dataset.value;
      if (key === "experience") renderExperienceHint();
      renderResult();
    });
  });
}

/* ---------- Init ---------- */
function renderAll() {
  applyTranslations();
  renderServices();
  renderOptions();
  renderRates();
  renderTips();
  renderExperienceHint();
  renderResult();
}

document.addEventListener("DOMContentLoaded", () => {
  /* Language toggle */
  $("#lang-toggle").addEventListener("click", () => {
    setLang(currentLang === "fr" ? "en" : "fr");
  });
  document.addEventListener("gp:langchange", renderAll);

  /* Currency */
  const currencySelect = $("#currency-select");
  currencySelect.value = state.currency;
  currencySelect.addEventListener("change", () => {
    state.currency = currencySelect.value;
    localStorage.setItem("gp-currency", state.currency);
    renderAll();
  });

  /* Category tabs (calculator) */
  document.querySelectorAll(".cat-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".cat-tab").forEach((tb) => tb.classList.remove("active"));
      tab.classList.add("active");
      state.category = tab.dataset.category;
      const first = SERVICES.find((s) => s.category === state.category);
      state.serviceId = first.id;
      state.hours = first.typicalHours;
      $("#hours-input").value = first.typicalHours;
      renderServices();
      renderResult();
    });
  });

  /* Hours slider */
  const hoursInput = $("#hours-input");
  hoursInput.addEventListener("input", () => {
    state.hours = Number(hoursInput.value);
    $("#hours-value").textContent = state.hours;
    renderResult();
  });

  /* Segmented controls */
  wireSegmented("experience-seg", "experience");
  wireSegmented("complexity-seg", "complexity");

  /* Revisions stepper */
  $("#rev-minus").addEventListener("click", () => {
    state.revisions = Math.max(0, state.revisions - 1);
    $("#revisions-value").textContent = state.revisions;
    renderResult();
  });
  $("#rev-plus").addEventListener("click", () => {
    state.revisions = Math.min(10, state.revisions + 1);
    $("#revisions-value").textContent = state.revisions;
    renderResult();
  });

  /* Margin slider */
  const marginInput = $("#margin-input");
  marginInput.addEventListener("input", () => {
    state.margin = Number(marginInput.value);
    $("#margin-value").textContent = state.margin;
    renderResult();
  });

  /* Rates tabs */
  document.querySelectorAll(".rate-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".rate-tab").forEach((tb) => tb.classList.remove("active"));
      tab.classList.add("active");
      state.ratesTab = tab.dataset.rates;
      renderRates();
    });
  });

  /* Copy button */
  $("#copy-btn").addEventListener("click", async () => {
    const text = buildEstimateText();
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    showToast(t("result.copied"));
  });

  /* Hero stat */
  $("#stat-services").textContent = SERVICES.length;

  /* Sync initial hours with the selected service's typical time */
  const initialSvc = getService();
  if (initialSvc) {
    state.hours = initialSvc.typicalHours;
    hoursInput.value = state.hours;
  }
  $("#hours-value").textContent = state.hours;

  renderAll();
});
