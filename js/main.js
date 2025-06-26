document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Dark mode toggle
  const toggle = document.querySelector(".moon-icon");
  toggle?.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});
