document.documentElement.classList.add("js");

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const qs = (selector, scope = document) => scope.querySelector(selector);
const qsa = (selector, scope = document) => [...scope.querySelectorAll(selector)];

function initReveals() {
  const targets = qsa(".reveal-card, .reveal-image, .reveal-lines, .split-title");
  if (!targets.length) return;
  if (reduceMotion || !("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("is-inview"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-inview");
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -12% 0px" });
  targets.forEach((el) => observer.observe(el));
}

function initHeader() {
  const header = qs("[data-header]");
  const progress = qs("[data-progress]");
  const toggle = qs("[data-menu-toggle]");
  const menu = qs("[data-mobile-menu]");
  let lastY = window.scrollY;
  let latestY = lastY;
  let maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  let ticking = false;

  const updateScrollState = () => {
    const y = latestY;
    header?.classList.toggle("is-hidden", y > 120 && y > lastY);
    header?.classList.toggle("is-scrolled", y > 24);
    if (progress) {
      progress.style.transform = `scale3d(${Math.min(1, y / maxScroll)}, 1, 1)`;
    }
    lastY = y;
    ticking = false;
  };

  const requestScrollUpdate = () => {
    latestY = window.scrollY;
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(updateScrollState);
    }
  };

  window.addEventListener("scroll", requestScrollUpdate, { passive: true });
  window.addEventListener("resize", () => {
    maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    requestScrollUpdate();
  }, { passive: true });

  toggle?.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    if (menu) menu.hidden = open;
  });
}

function initCursor() {
  const cursor = qs("[data-cursor]");
  if (!cursor || reduceMotion || window.matchMedia("(pointer: coarse)").matches) return;
  document.documentElement.classList.add("has-custom-cursor");
  let x = -100;
  let y = -100;
  let ticking = false;
  const moveCursor = () => {
    cursor.style.setProperty("--cursor-x", `${x}px`);
    cursor.style.setProperty("--cursor-y", `${y}px`);
    ticking = false;
  };
  window.addEventListener("pointermove", (event) => {
    x = event.clientX;
    y = event.clientY;
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(moveCursor);
    }
  }, { passive: true });
  qsa("a, button").forEach((item) => {
    item.addEventListener("mouseenter", () => cursor.classList.add("is-active"));
    item.addEventListener("mouseleave", () => cursor.classList.remove("is-active"));
  });
}

function initFiltersAndHover() {
  const grid = qs("[data-project-grid]");
  qsa("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      qsa("[data-filter]").forEach((item) => item.classList.toggle("active", item === button));
      qsa("[data-category]", grid ?? document).forEach((card) => {
        card.hidden = filter !== "All" && card.dataset.category !== filter;
      });
    });
  });

  const preview = qs("[data-hover-preview]");
  qsa("[data-hover-image]").forEach((row) => {
    row.addEventListener("mouseenter", () => {
      if (!preview) return;
      preview.style.backgroundImage = `url(${row.dataset.hoverImage})`;
      preview.classList.add("is-visible");
    });
    row.addEventListener("mouseleave", () => preview?.classList.remove("is-visible"));
  });
}

function initBackTopAndForms() {
  qs("[data-back-top]")?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }));
  const params = new URLSearchParams(window.location.search);
  if (params.get("sent") === "1") {
    const note = qs("[data-form-note]");
    if (note) note.textContent = "Inquiry sent. We will respond shortly.";
  }
}

initReveals();
initHeader();
initFiltersAndHover();
initBackTopAndForms();
initCursor();
