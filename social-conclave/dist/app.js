/* Content lives in content.json. This script never submits registration data. */
const $ = (s) => document.querySelector(s),
  $$ = (s) => [...document.querySelectorAll(s)];
const KEY = "social-conclave-v1";
let content,
  selected = new Set(),
  state = { version: 1, interests: [], events: [], plan: null },
  storageOK = true,
  currentEdition = 10;
const esc = (s) =>
  String(s ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const safeUrl = (s) => {
  try {
    const u = new URL(s);
    return ["https:", "http:"].includes(u.protocol) ? u.href : null;
  } catch {
    return null;
  }
};
const toast = (message) => {
  const el = $("#toast");
  el.textContent = message;
  el.classList.add("visible");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => el.classList.remove("visible"), 3500);
};
function persist() {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    storageOK = false;
  }
  $("#storage-warning").hidden = storageOK;
  updateCount();
}
function updateCount() {
  $$(".saved-count").forEach(
    (el) =>
      (el.textContent =
        state.interests.length + state.events.length + (state.plan ? 1 : 0)),
  );
}
function saveInterest(id, button) {
  if (state.interests.includes(id)) {
    state.interests = state.interests.filter((x) => x !== id);
    toast("Interest removed.");
  } else {
    state.interests.push(id);
    toast("Interest saved on this device.");
  }
  persist();
  if (button) {
    button.textContent = state.interests.includes(id)
      ? "✓ Saved"
      : "Save interest +";
    button.setAttribute("aria-pressed", state.interests.includes(id));
  }
  renderSaved();
}
function setSaveButtons() {
  $$("[data-save-interest]").forEach((b) => {
    const saved = state.interests.includes(b.dataset.saveInterest);
    b.textContent = saved ? "✓ Saved" : "Save interest +";
    b.setAttribute("aria-pressed", saved);
  });
}
function openDialog(id, trigger) {
  const dialog = document.getElementById(id);
  if (!dialog) return;
  dialog.returnFocus = trigger || document.activeElement;
  dialog.showModal();
  if (trigger) trigger.setAttribute("aria-expanded", "true");
  if (id === "saved-dialog") renderSaved();
}
$$("[data-open]").forEach((b) =>
  b.addEventListener("click", () => openDialog(b.dataset.open, b)),
);
$$("[data-close]").forEach((b) =>
  b.addEventListener("click", () => b.closest("dialog").close()),
);
$$("dialog").forEach((d) => {
  d.addEventListener("click", (e) => {
    if (e.target === d) {
      const r = d.getBoundingClientRect();
      if (
        e.clientX < r.left ||
        e.clientX > r.right ||
        e.clientY < r.top ||
        e.clientY > r.bottom
      )
        d.close();
    }
  });
  d.addEventListener("close", () => {
    d.returnFocus?.setAttribute("aria-expanded", "false");
    d.returnFocus?.focus({ preventScroll: true });
    if (d.id === "registration-dialog") {
      $("#demo-form").reset();
      $("#demo-success").hidden = true;
      clearDemoErrors();
    }
    if (d.id === "saved-dialog") $("#clear-confirm").hidden = true;
  });
});
$$("#menu-dialog a").forEach((a) =>
  a.addEventListener("click", () => {
    const target = $(a.hash);
    if (target) {
      target.setAttribute("tabindex", "-1");
      $("#menu-dialog").returnFocus = target;
    }
    $("#menu-dialog").close();
  }),
);
function icon(kind) {
  const paths = {
    orbit:
      '<ellipse cx="24" cy="24" rx="19" ry="10" transform="rotate(-35 24 24)"/><ellipse cx="24" cy="24" rx="19" ry="10" transform="rotate(35 24 24)"/><circle cx="24" cy="24" r="3"/>',
    steps: '<path d="M5 39h12V27h12V15h12M5 29h8V17h12V5h12"/>',
    spark:
      '<path d="M24 3v42M3 24h42M9 9l30 30M9 39 39 9"/><circle cx="24" cy="24" r="15"/>',
  };
  return `<svg viewBox="0 0 48 48" aria-hidden="true">${paths[kind] || paths.orbit}</svg>`;
}
function renderContent() {
  $("#hero-intro").textContent = content.site.intro;
  $("#about-copy").textContent = content.site.about;
  $("#institution").textContent = content.site.institution;
  $("#hero-details").textContent =
    [content.site.date, content.site.venue].filter(Boolean).join(" · ") ||
    "Details to be confirmed";
  if (
    content.site.email &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(content.site.email)
  )
    $("#contact-details").innerHTML =
      `<a href="mailto:${esc(content.site.email)}">${esc(content.site.email)}</a>`;
  if (!content.site.draft) $$(".draft-label").forEach((e) => (e.hidden = true));
  $("#topic-note").textContent = content.topicsApproved
    ? "Explore the committee’s focus areas."
    : "Exploration themes from the prototype; official focus areas need confirmation.";
  $("#focus-list").innerHTML = content.topics
    .map(
      (t, i) =>
        `<article class="focus-item" id="focus-${esc(t.id)}"><div class="focus-top"><span>${String(i + 1).padStart(2, "0")}</span>${icon(t.icon)}</div><h3>${esc(t.title)}</h3><p>${esc(t.description)}</p><a class="text-link" data-explore="${esc(t.id)}" href="#compass">Find a starting point ↗</a></article>`,
    )
    .join("");
  $("#topic-options").innerHTML = content.topics
    .map(
      (t) =>
        `<label class="chip"><input type="checkbox" aria-label="${esc(t.title)}" value="${esc(t.id)}"><span>${esc(t.title)}</span></label>`,
    )
    .join("");
  $("#plan-topic").innerHTML = content.topics
    .map((t) => `<option value="${esc(t.id)}">${esc(t.title)}</option>`)
    .join("");
  $("#paths").innerHTML = content.paths
    .map(
      (p) =>
        `<article class="path"><span class="eyebrow">${esc(p.label)}</span><h3>${esc(p.title)}</h3><p>${esc(p.description)}</p><a class="text-link" href="${/^#[a-z-]+$/.test(p.href) ? p.href : "#contact"}">${esc(p.action)} ↗</a></article>`,
    )
    .join("");
  $("#edition-rail").innerHTML = Array.from(
    { length: 10 },
    (_, i) =>
      `<button class="edition-button" data-edition="${i + 1}" aria-label="Edition ${i + 1}" aria-pressed="${i === 9}">${String(i + 1).padStart(2, "0")}</button>`,
  ).join("");
  renderEvents();
  renderRegistration();
  renderResults();
  renderEdition(10);
  renderPlanPrompt();
  renderSaved();
  updateCount();
}
function renderEvents() {
  const events = content.events.filter((e) => e.approved === true);
  $("#event-list").innerHTML = events.length
    ? events
        .map(
          (e) =>
            `<article class="event-row" id="event-${esc(e.id)}"><div><span class="eyebrow">${esc(e.format || "PROGRAMME")}</span><h3>${esc(e.title)}</h3><p>${esc(e.description)}</p><p class="fine">${esc([e.date, e.time, e.venue].filter(Boolean).join(" · "))}</p>${safeUrl(e.url) ? `<a class="text-link" href="${esc(safeUrl(e.url))}">Official details ↗</a>` : ""}</div><button class="button blue" data-save-event="${esc(e.id)}" aria-pressed="${state.events.includes(e.id)}">${state.events.includes(e.id) ? "✓ Saved" : "Save event +"}</button></article>`,
        )
        .join("")
    : '<div class="empty-programme"><div><span class="status-dot">Details to be confirmed</span></div><div><h3>The programme is not listed yet.</h3><p>No sessions, speakers, dates or venues have been confirmed in this draft. Save your interests for now; a saved interest is not a registration.</p><button class="text-link text-button" data-show-saved>Open My Conclave ↗</button></div></div>';
}
function renderRegistration() {
  const r = content.registration,
    url = safeUrl(r.officialUrl);
  if (["open", "waitlist"].includes(r.status) && url) {
    $("#registration-title").textContent =
      r.status === "open"
        ? "Continue with the official registration."
        : "Visit the official waitlist.";
    $("#registration-note").textContent =
      "Complete the process with the official provider. Only their confirmation establishes your status.";
    $("#registration-action").innerHTML =
      `<a class="button blue" href="${esc(url)}">${r.status === "open" ? "Continue to registration" : "Visit the waitlist"} ↗</a><p class="fine">${esc(r.provider || new URL(url).hostname)}</p>`;
  } else if (r.status !== "unknown") {
    const labels = {
      closed: "Registration is closed.",
      announced: "Registration is not open.",
      unavailable: "Registration is temporarily unavailable.",
    };
    $("#registration-title").textContent =
      labels[r.status] || "Registration details need confirmation.";
    $("#registration-note").textContent =
      "This site cannot reserve a seat. The form below is a demonstration only.";
  }
}
function renderResults() {
  const topics = content.topics.filter((t) => selected.has(t.id));
  $("#match-count").textContent = topics.length
    ? `${topics.length} interest${topics.length === 1 ? "" : "s"} selected`
    : "Choose an interest";
  $("#clear-filters").disabled = !topics.length;
  $("#results").innerHTML = topics.length
    ? topics
        .map((t) => {
          const matches = content.events.filter(
            (e) => e.approved === true && (e.topicIds || []).includes(t.id),
          );
          return `<article class="result-item"><span class="eyebrow">MATCHES YOUR INTEREST · ${esc(t.title)}</span><h3>${esc(t.short)}</h3><p>${esc(t.description)}</p><div class="result-action"><p><b>A self-directed starting point</b><br>${esc(t.action)}</p></div>${matches.length ? matches.map((e) => `<p><a href="#event-${esc(e.id)}">Explore: ${esc(e.title)} ↗</a></p>`).join("") : '<p class="fine">No confirmed event matches are listed. This is a personal prompt, not an event session.</p>'}<div class="result-actions"><button class="button secondary" data-save-interest="${esc(t.id)}" aria-pressed="${state.interests.includes(t.id)}">${state.interests.includes(t.id) ? "✓ Saved" : "Save interest +"}</button><a class="text-link" data-plan="${esc(t.id)}" href="#action">Give it some time ↗</a></div></article>`;
        })
        .join("")
    : '<div class="result-empty"><div class="empty-arrow" aria-hidden="true">↗</div><h3>You bring the curiosity.<br>We’ll offer a starting point.</h3><p>Select one or more interests to explore a personal action. Confirmed programme matches will appear here when available.</p><p class="fine">Suggestions for exploration. No confirmed tracks or sessions are implied.</p></div>';
}
function renderEdition(n) {
  currentEdition = n;
  const e = content.editions.find((e) => e.number === n && e.approved === true);
  $$("[data-edition]").forEach((b) =>
    b.setAttribute("aria-pressed", Number(b.dataset.edition) === n),
  );
  $("#edition-number").textContent = String(n).padStart(2, "0");
  $("#edition-label").textContent = e?.year
    ? `EDITION ${n} · ${e.year}`
    : n === 10
      ? "THE CURRENT CHAPTER"
      : `FROM THE ARCHIVE · EDITION ${String(n).padStart(2, "0")}`;
  $("#edition-title").textContent =
    e?.title ||
    (n === 10
      ? "The next question starts with you."
      : "A chapter waiting to be documented.");
  $("#edition-description").textContent =
    e?.description ||
    (n === 10
      ? "Social Conclave, 10th edition. Explore your interests and shape a personal starting point while the committee confirms the programme and participation details."
      : "An archive entry is not available for this edition. Its dates, stories and milestones need to be verified before they appear here.");
  $("#edition-source").hidden = !safeUrl(e?.sourceUrl);
  if (safeUrl(e?.sourceUrl)) $("#edition-source").href = safeUrl(e.sourceUrl);
  $("#edition-prev").disabled = n === 1;
  $("#edition-next").disabled = n === 10;
  $("#edition-status").textContent = `Edition ${n} of 10`;
}
function renderPlanPrompt() {
  const t = content.topics.find((t) => t.id === $("#plan-topic").value);
  $("#plan-prompt").textContent = t?.action || "";
}
function renderSaved() {
  if (!content) return;
  const list = state.interests
    .map((id) => {
      const t = content.topics.find((t) => t.id === id);
      return `<div class="saved-row"><h3>${esc(t?.title || "Interest no longer listed")}</h3><button class="text-button" data-remove-interest="${esc(id)}" aria-label="Remove ${esc(t?.title || "unlisted interest")}">Remove</button></div>`;
    })
    .join("");
  const events = state.events
    .map((id) => {
      const e = content.events.find((e) => e.id === id && e.approved === true);
      return `<div class="saved-row"><h3>${esc(e?.title || "Event no longer listed")}</h3><button class="text-button" data-remove-event="${esc(id)}" aria-label="Remove ${esc(e?.title || "unlisted event")}">Remove</button></div>`;
    })
    .join("");
  const p = state.plan,
    t = p && content.topics.find((t) => t.id === p.topicId);
  $("#saved-content").innerHTML =
    !list && !events && !p
      ? '<div class="saved-empty"><h3>A space for your<br>next small step.</h3><p>Your saved interests and personal intention will appear here. You can come back to them on this device.</p><a class="text-link" href="#compass" data-close-link>Explore your interests ↗</a></div>'
      : `${list ? '<h3 class="saved-subtitle">YOUR INTERESTS</h3>' + list : ""}${events ? '<h3 class="saved-subtitle">SAVED EVENTS · NOT RESERVATIONS</h3>' + events : ""}${p ? `<h3 class="saved-subtitle">YOUR PERSONAL INTENTION</h3><div class="saved-plan"><span class="eyebrow">${esc(p.minutes)} MINUTES · ${p.done ? "MARKED DONE BY YOU" : "AT YOUR OWN PACE"}</span><h3>${esc(t?.title || "Interest no longer listed")}</h3><p>${esc(t?.action || "This exploration theme is no longer available.")}</p><button class="text-button" data-toggle-plan>${p.done ? "Mark as a plan again" : "Mark my step as done"}</button><br><button class="text-button" data-remove-plan>Remove intention</button><p class="fine">A private reflection, not verified or shared impact.</p></div>` : ""}`;
  $("#storage-warning").hidden = storageOK;
  $("#download-plan").disabled = !list && !events && !p;
  $("#clear-saved").disabled = !list && !events && !p;
}
document.addEventListener("click", (e) => {
  const b = e.target.closest("button,a");
  if (!b || !content) return;
  if (b.dataset.explore) {
    selected.add(b.dataset.explore);
    $$("#topic-options input").forEach(
      (c) => (c.checked = selected.has(c.value)),
    );
    renderResults();
  }
  if (b.dataset.plan) {
    $("#plan-topic").value = b.dataset.plan;
    renderPlanPrompt();
  }
  if (b.dataset.saveInterest) saveInterest(b.dataset.saveInterest, b);
  if (b.dataset.removeInterest) {
    state.interests = state.interests.filter(
      (id) => id !== b.dataset.removeInterest,
    );
    persist();
    renderSaved();
    setSaveButtons();
    $("#saved-title").setAttribute("tabindex", "-1");
    $("#saved-title").focus();
    toast("Interest removed.");
  }
  if (b.dataset.saveEvent) {
    const id = b.dataset.saveEvent;
    state.events = state.events.includes(id)
      ? state.events.filter((x) => x !== id)
      : [...state.events, id];
    persist();
    b.textContent = state.events.includes(id) ? "✓ Saved" : "Save event +";
    b.setAttribute("aria-pressed", state.events.includes(id));
    renderSaved();
    toast("Saved events updated. No place is reserved.");
  }
  if (b.dataset.removeEvent) {
    state.events = state.events.filter((id) => id !== b.dataset.removeEvent);
    persist();
    renderSaved();
    renderEvents();
    $("#saved-title").focus();
  }
  if (b.hasAttribute("data-toggle-plan")) {
    state.plan.done = !state.plan.done;
    persist();
    renderSaved();
    $("[data-toggle-plan]").focus();
    toast(
      state.plan.done
        ? "Marked done by you. Your reflection stays private."
        : "Intention restored.",
    );
  }
  if (b.hasAttribute("data-remove-plan")) {
    state.plan = null;
    persist();
    renderSaved();
    $("#saved-title").setAttribute("tabindex", "-1");
    $("#saved-title").focus();
    toast("Intention removed.");
  }
  if (b.dataset.edition) renderEdition(Number(b.dataset.edition));
  if (b.hasAttribute("data-show-saved")) openDialog("saved-dialog", b);
  if (b.hasAttribute("data-close-link")) {
    const target = $(b.hash);
    if (target) {
      target.setAttribute("tabindex", "-1");
      b.closest("dialog").returnFocus = target;
    }
    b.closest("dialog").close();
  }
});
$("#topic-options").addEventListener("change", (e) => {
  if (e.target.checked) selected.add(e.target.value);
  else selected.delete(e.target.value);
  renderResults();
});
$("#clear-filters").addEventListener("click", () => {
  selected.clear();
  $$("#topic-options input").forEach((c) => (c.checked = false));
  renderResults();
  $("#topic-options input")?.focus();
});
$("#edition-prev").addEventListener("click", () =>
  renderEdition(Math.max(1, currentEdition - 1)),
);
$("#edition-next").addEventListener("click", () =>
  renderEdition(Math.min(10, currentEdition + 1)),
);
$("#plan-topic").addEventListener("change", renderPlanPrompt);
$("#action-form").addEventListener("submit", (e) => {
  e.preventDefault();
  state.plan = {
    topicId: $("#plan-topic").value,
    minutes: Number($("input[name=minutes]:checked").value),
    done: false,
  };
  persist();
  renderSaved();
  $("#plan-status").textContent = storageOK
    ? "Intention saved on this device. Find it in My Conclave."
    : "Intention kept for this visit. Device storage is unavailable.";
  toast("Your next small step is in My Conclave.");
});
$("#clear-saved").addEventListener("click", () => {
  $("#clear-confirm").hidden = false;
  $("#confirm-clear").focus();
});
$("#cancel-clear").addEventListener("click", () => {
  $("#clear-confirm").hidden = true;
  $("#clear-saved").focus();
});
$("#confirm-clear").addEventListener("click", () => {
  state = { version: 1, interests: [], events: [], plan: null };
  try {
    localStorage.removeItem(KEY);
  } catch {
    storageOK = false;
  }
  updateCount();
  renderSaved();
  renderResults();
  renderEvents();
  $("#clear-confirm").hidden = true;
  $("#saved-title").setAttribute("tabindex", "-1");
  $("#saved-title").focus();
  $("#plan-status").textContent = "A plan, not a promise to the committee.";
  toast("All saved choices cleared.");
});
$("#download-plan").addEventListener("click", () => {
  const lines = [
    "MY CONCLAVE — PERSONAL PLAN",
    "Saved on this device. This is not a ticket or registration.",
    "",
    ...state.interests.map(
      (id) =>
        "Interest: " +
        (content.topics.find((t) => t.id === id)?.title || "No longer listed"),
    ),
    ...state.events.map(
      (id) =>
        "Saved event (no reservation): " +
        (content.events.find((e) => e.id === id)?.title || "No longer listed"),
    ),
  ];
  if (state.plan) {
    const t = content.topics.find((t) => t.id === state.plan.topicId);
    lines.push(
      "",
      `${state.plan.minutes} minutes — ${t?.title || "Unlisted interest"}`,
      t?.action || "",
      state.plan.done
        ? "Marked done by you; not independently verified."
        : "A personal intention, not completed impact.",
    );
  }
  const url = URL.createObjectURL(
      new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" }),
    ),
    a = document.createElement("a");
  a.href = url;
  a.download = "my-conclave-plan.txt";
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  toast("Download requested. Check your browser’s downloads.");
});
function clearDemoErrors() {
  for (const id of ["name", "email"]) {
    $(`#demo-${id}`).removeAttribute("aria-invalid");
    $(`#demo-${id}`).removeAttribute("aria-describedby");
    $(`#${id}-error`).hidden = true;
  }
  $("#demo-error").hidden = true;
}
$("#demo-form").addEventListener("submit", (e) => {
  e.preventDefault();
  clearDemoErrors();
  $("#demo-success").hidden = true;
  const errors = [];
  for (const id of ["name", "email"]) {
    const input = $(`#demo-${id}`);
    if (!input.value.trim() || !input.validity.valid) {
      input.setAttribute("aria-invalid", "true");
      input.setAttribute("aria-describedby", `${id}-error`);
      $(`#${id}-error`).hidden = false;
      errors.push(
        `<a href="#demo-${id}">${id === "name" ? "Enter a name" : "Check the email format"}</a>`,
      );
    }
  }
  if (errors.length) {
    $("#demo-error").innerHTML = "Please check: " + errors.join(" · ");
    $("#demo-error").hidden = false;
    $("#demo-error").focus();
  } else {
    $("#demo-success").hidden = false;
    $("#demo-success").setAttribute("tabindex", "-1");
    $("#demo-success").focus();
  }
});
async function init() {
  try {
    const r = await fetch("content.json");
    if (!r.ok) throw Error("Content unavailable");
    content = await r.json();
    try {
      const saved = JSON.parse(localStorage.getItem(KEY));
      if (saved?.version === 1) {
        state.interests = Array.isArray(saved.interests)
          ? [...new Set(saved.interests.filter((x) => typeof x === "string"))]
          : [];
        state.events = Array.isArray(saved.events)
          ? [...new Set(saved.events.filter((x) => typeof x === "string"))]
          : [];
        if (
          saved.plan &&
          typeof saved.plan.topicId === "string" &&
          [15, 30, 60].includes(saved.plan.minutes)
        )
          state.plan = {
            topicId: saved.plan.topicId,
            minutes: saved.plan.minutes,
            done: saved.plan.done === true,
          };
      }
    } catch {
      storageOK = false;
    }
    renderContent();
    if (state.plan && content.topics.some((t) => t.id === state.plan.topicId)) {
      $("#plan-topic").value = state.plan.topicId;
      $(`input[name=minutes][value="${state.plan.minutes}"]`).checked = true;
      renderPlanPrompt();
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            $$(".desktop-nav a").forEach((a) =>
              a.toggleAttribute(
                "aria-current",
                a.hash === "#" + entry.target.id,
              ),
            );
            const a = $(`.desktop-nav a[href="#${entry.target.id}"]`);
            if (a) a.setAttribute("aria-current", "location");
          }
        });
      },
      { rootMargin: "-15% 0px -55% 0px" },
    );
    $$("main section[id]").forEach((s) => observer.observe(s));
  } catch (error) {
    $("#results").innerHTML =
      '<div class="result-empty"><h3>We couldn’t load the content.</h3><p>Please reload to try again. No registration service is connected.</p><button class="button secondary" onclick="location.reload()">Retry</button></div>';
    $("#event-list").innerHTML =
      "<p>Programme information is unavailable. Please reload.</p>";
    $("#action-form").querySelector("button").disabled = true;
    toast("Content could not be loaded. Please reload.");
  }
}
init();

// Decorative motion never carries content; visitors can pause it at any time.
const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
const motionButton = document.querySelector("#motion-toggle");
let motionPaused = false;
function updateMotion() {
  const reduced = motionPreference.matches;
  document.body.classList.toggle("motion-paused", motionPaused || reduced);
  motionButton.hidden = false;
  motionButton.disabled = reduced;
  motionButton.setAttribute("aria-pressed", String(motionPaused || reduced));
  motionButton.textContent = reduced ? "Reduced motion on" : motionPaused ? "Resume motion" : "Pause motion";
}
motionButton.addEventListener("click", () => {
  motionPaused = !motionPaused;
  updateMotion();
});
motionPreference.addEventListener("change", updateMotion);
updateMotion();

// Progressive enhancement: content stays visible without JS or Observer support.
// Add .fade-in to any static content block to reuse this once-only entrance.
document.querySelectorAll("main > .section > .wrap").forEach((el) => el.classList.add("fade-in"));
if ("IntersectionObserver" in window && !motionPreference.matches) {
  const entrances = new IntersectionObserver((entries, observer) => {
    entries.forEach(({ target, isIntersecting }) => {
      if (!isIntersecting) return;
      target.classList.add("is-visible");
      target.classList.remove("is-pending");
      observer.unobserve(target);
    });
  }, { threshold: 0, rootMargin: "0px 0px -32px 0px" });
  document.querySelectorAll(".fade-in").forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    el.classList.add("is-pending");
    entrances.observe(el);
  });
  const revealAll = () => {
    document.querySelectorAll(".fade-in.is-pending").forEach(el => el.classList.remove("is-pending"));
    entrances.disconnect();
  };
  motionPreference.addEventListener("change", () => { if (motionPreference.matches) revealAll(); });
  document.addEventListener("focusin", (event) => {
    const block = event.target.closest(".fade-in.is-pending");
    if (block) { block.classList.remove("is-pending"); entrances.unobserve(block); }
  });
}
