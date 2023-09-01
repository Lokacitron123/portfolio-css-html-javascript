function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Toggle dark and light mode + swapping icons

const toggleThemeBtn = document.querySelector(".toggle-theme");
const themeIcon = document.querySelector(".toggle-theme i");

const theme = localStorage.getItem("theme");
const iconHTML = localStorage.getItem("iconHTML");

theme && document.body.classList.add("color-swap");

toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("color-swap");

  if (document.body.classList.contains("color-swap")) {
    localStorage.setItem("theme", "color-swap");
    toggleThemeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
  } else {
    localStorage.removeItem("theme");
    toggleThemeBtn.innerHTML = '<i class="fa-regular fa-sun"></i>';
  }

  localStorage.setItem("iconHTML", toggleThemeBtn.innerHTML);
});

if (iconHTML) {
  toggleThemeBtn.innerHTML = iconHTML;
}
