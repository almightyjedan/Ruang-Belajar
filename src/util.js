const logo = document.querySelector(".logo").cloneNode(true);
document.querySelector(".logo-container").appendChild(logo);

// Ambil elemen menu dan ikon burger
// const navLinks = document.getElementById("navLinks");
// const burgerIcon = document.querySelector("ion-icon[onclick='onToggleMenu(this)']");

// // Fungsi untuk toggle menu
// function onToggleMenu(e) {
//   // Ganti ikon antara "menu" dan "close"
//   const isMenuOpen = e.name === "menu";
//   e.name = isMenuOpen ? "close" : "menu";

//   // Toggle kelas "hidden" pada menu
//   navLinks.classList.toggle("hidden");
//   navLinks.classList.toggle("flex"); // Pastikan menu tetap fleksibel saat ditampilkan
// }

// // Tutup menu jika klik di luar menu atau ikon burger
// document.addEventListener("click", (event) => {
//   const isClickInsideMenu = navLinks.contains(event.target);
//   const isClickOnBurger = burgerIcon.contains(event.target);

//   if (!isClickInsideMenu && !isClickOnBurger && burgerIcon.name === "close") {
//     burgerIcon.name = "menu"; // Ganti ikon menjadi "menu"
//     navLinks.classList.remove("flex"); // Sembunyikan menu
//     navLinks.classList.add("hidden"); // Tambahkan kembali kelas "hidden"
//   }
// });

// Ambil elemen menu dan ikon burger
const navLinks = document.getElementById("navLinks");
const burgerIcon = document.querySelector("ion-icon[onclick='onToggleMenu(this)']");

// Fungsi toggle menu
function onToggleMenu(e) {
  // Toggle ikon antara "menu" dan "close"
  const isMenuOpen = e.name === "menu";
  e.name = isMenuOpen ? "close" : "menu";

  // Toggle visibilitas menu
//   navLinks.classList.toggle("hidden");
//   navLinks.classList.remove("flex");
//   navLinks.classList.add("flex");
//   if (isMenuOpen) {
//     // navLinks.classList.remove("hidden");
//     navLinks.classList.add("");
//   } 
//   else {
//     navLinks.classList.remove("flex");
//     navLinks.classList.add("hidden");
//   }
}

// Event listener untuk menutup menu jika klik di luar menu atau ikon
// document.addEventListener("click", (event) => {
//   const isClickInsideMenu = navLinks.contains(event.target);
//   const isClickOnBurger = burgerIcon.contains(event.target);

//   // Jika klik di luar menu atau ikon burger, tutup menu
//   if (!isClickInsideMenu && !isClickOnBurger && burgerIcon.name === "close") {
//     burgerIcon.name = "menu"; // Ganti ikon ke "menu"
//     navLinks.classList.remove("flex"); // Sembunyikan menu
//     navLinks.classList.add("hidden"); // Tambahkan kelas "hidden"
//   }
// });


// Fungsi untuk membuka dan menutup menu
burgerIcon.addEventListener("click", () => {
  isMenuOpen = burgerIcon.name; // Mengecek apakah ikon saat ini adalah "menu"
//   burgerIcon.name = isMenuOpen ? "close" : "menu"; // Ganti ikon menjadi "close" atau "menu"
  navLinks.classList.toggle("hidden"); // Toggle kelas "hidden" untuk menampilkan atau menyembunyikan menu


// Menutup menu jika klik di luar area menu
// document.addEventListener("click", (event) => {
//   const isClickInsideMenu = navLinks.contains(event.target);
//   const isClickOnBurger = burgerIcon.contains(event.target);

//   if (!isClickInsideMenu && !isClickOnBurger && burgerIcon.name === "close") {
    // burgerIcon.name = "menu"; // Kembalikan ikon menjadi "menu"
    // navLinks.classList.toggle("hidden"); // Sembunyikan menu
  
// });
});
