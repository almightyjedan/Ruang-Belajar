// Fungsi untuk toggle menu burger
function burger() {
  const burgerIcon = document.getElementById("burgerIcon");
  const burgerOpen = burgerIcon.name === "menu";  
  burgerIcon.name = burgerOpen ? "close" : "menu";
  navLinks.classList.toggle("hidden");
}

// Menutup menu jika klik di luar area burger atau menu
document.addEventListener("click", (event) => {
  const clikMenu = navLinks.contains(event.target);
  const clickBurger = burgerIcon.contains(event.target);

  if (!clikMenu && !clickBurger && burgerIcon.name === "close") {
    burgerIcon.name = "menu";
    navLinks.classList.toggle("hidden");
  }
});

// Dropdown menu "Tingkat"
function tingkat() {
  const dropTingkat = document.getElementById("dropTingkat");
  dropTingkat.classList.toggle("hidden");
}

// Menutup dropdown jika pengguna klik di luar elemen
window.addEventListener("click", function (event) {
  const dropdown = document.getElementById("dropTingkat");
  const tingkatButton = document.querySelector('li[onclick="tingkat()"]');
  if (!dropdown.contains(event.target) && !tingkatButton.contains(event.target)) {
    dropdown.classList.add("hidden");
  }
});