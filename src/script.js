<<<<<<< HEAD
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
=======
// --- INDEX HTML ---
// const navLinks = document.querySelector(".nav-links");
// function onToggleMenu(e) {
//   e.name = e.name === "menu" ? "close" : "menu";
//   navLinks.classList.toggle("top-[9%]");
// }

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



// const navLinks = document.querySelector(".nav-links");
// function onToggleMenu(e) {
//   e.name = e.name === "menu" ? "close" : "menu";
//   navLinks.classList.toggle("hidden");
// }

// const navLinks = document.getElementById("navLinks");
// const burgerIcon = document.getElementById("burgerIcon");

// // Fungsi untuk membuka dan menutup menu burger
// burgerIcon.addEventListener("click", () => {
//   const isMenuOpen = burgerIcon.name === "menu"; // Mengecek status ikon
//   burgerIcon.name = isMenuOpen ? "close" : "menu"; // Ganti ikon
//   navLinks.classList.toggle("hidden"); // Toggle kelas "hidden" untuk tampilkan atau sembunyikan menu
// });

// // Menutup menu jika klik di luar area burger atau menu
// document.addEventListener("click", (event) => {
//   const isClickInsideMenu = navLinks.contains(event.target);
//   const isClickOnBurger = burgerIcon.contains(event.target);

//   // Jika klik di luar menu atau ikon, tutup menu
//   if (!isClickInsideMenu && !isClickOnBurger && burgerIcon.name === "close") {
//     burgerIcon.name = "menu"; // Ganti ikon ke burger
//     navLinks.classList.add("hidden"); // Sembunyikan menu
//   }
// });



let signUpButton = document.getElementById("signUp");
let signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});


// --- LOGIN HTML ---
const signinForm = document.getElementById("signinForm");
signinForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const email = document.getElementById("email2").value;
  const password = document.getElementById("password2").value;

  if (email && password) {
    alert("Login berhasil! Anda akan diarahkan ke halaman utama.");
    window.location.href = "dashboard.html";
  } else {
    // alert("Silakan masukkan Email dan Password.");
    window.location.href = "dashboard.html";
  }
});

const signupForm = document.getElementById("signupForm");
signupForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (name && email && password) {
    alert("Login berhasil! Anda akan diarahkan ke halaman utama.");
    window.location.href = "dashboard.html";
  } else {
    // alert("Silakan masukkan Nama, Email, dan Password.");
    window.location.href = "dashboard.html";
  }
});
>>>>>>> f799ac966bb04af390f18418f5db0caa961f1732
