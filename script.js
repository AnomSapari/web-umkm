const WHATSAPP_NUMBER = "6281234567890";
const DEFAULT_MESSAGE =
  "Halo, saya ingin konsultasi agar website UMKM saya bisa menghasilkan uang. Bisnis saya adalah: ";

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle?.addEventListener("click", () => {
  const isOpen = navMenu?.classList.toggle("is-open") ?? false;
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu?.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll(".wa-link").forEach((link) => {
  const packageName = link.dataset.package || "Konsultasi Gratis";
  const message = `${DEFAULT_MESSAGE}\n\nSaya tertarik dengan: ${packageName}`;
  link.setAttribute("href", `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`);
});
