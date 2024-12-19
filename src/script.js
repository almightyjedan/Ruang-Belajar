// Menampilkan menu burger ketika tampilan tablet atau lebih kecil
function burger() {
  const burgerIcon = document.getElementById("burgerIcon");
  const burgerOpen = burgerIcon.name === "menu";  
  burgerIcon.name = burgerOpen ? "close" : "menu";
  navLinks.classList.toggle("hidden");
}

// Klik di luar menu burger untuk tutup menu burger
document.addEventListener("click", (event) => {
  const clikMenu = navLinks.contains(event.target);
  const clickBurger = burgerIcon.contains(event.target);

  if (!clikMenu && !clickBurger && burgerIcon.name === "close") {
    burgerIcon.name = "menu";
    navLinks.classList.toggle("hidden");
  }
});

// Dropdown tingkat
function tingkat() {
  const dropTingkat = document.getElementById("dropTingkat");
  dropTingkat.classList.toggle("hidden");
}

// Klik di luar dropdown tingkat untuk tutup dropdown tingkat
window.addEventListener("click", function (event) {
  const dropdown = document.getElementById("dropTingkat");
  const tingkatButton = document.querySelector('li[onclick="tingkat()"]');
  if (!dropdown.contains(event.target) && !tingkatButton.contains(event.target)) {
    dropdown.classList.add("hidden");
  }
});

// Dropdown user
function user() {
  const dropUser = document.getElementById("dropUser");
  dropUser.classList.toggle("hidden"); 
}

// Klik di luar dropdown user untuk tutup dropdown user
window.addEventListener("click", function (event) {
  const dropdown = document.getElementById("dropUser");
  const userButton = document.querySelector('img[onclick="user()"]');
  if (!dropdown.contains(event.target) && !userButton.contains(event.target)) {
    dropdown.classList.add("hidden");
  }
});

// Cek apakah sudah login atau belum dan function log out
const loggedin = sessionStorage.getItem('loggedin');
const logoutbuttonburger = document.getElementById('logoutbuttonburger')
const logoutbutton = document.getElementById('logoutbutton')
if (loggedin === "1") { 
  signinbutton.classList.add("hidden");
  usericon.classList.remove("hidden");
} else {
  signinbutton.classList.remove("hidden");
  usericon.classList.add("hidden");
  logoutbuttonburger.textContent = "Sign In";
}
window.addEventListener("click", (event) => {
  if (event.target === logoutbuttonburger || event.target === logoutbutton) {
    sessionStorage.setItem('loggedin', 0);
    sessionStorage.setItem('username', 0);
    sessionStorage.setItem('usericon', 0);
  }
});

// API kirim Email
document.getElementById("contact-form").addEventListener("submit", async function (event) {
  event.preventDefault();
  const form = event.target;

  try {
    const response = await fetch("https://formspree.io/f/xnnqkzrk", {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      alert("Pesan Anda berhasil dikirim! Terima kasih.");
      form.reset();
    } else {
      throw new Error("Form submission failed");
    }
  } catch (error) {
    alert("Gagal mengirim pesan. Silakan coba lagi.");
  }
});

// API kirim WhatsApp
function kirimWA() {
  const notel = "+6281574749192";
  const template = "Halo, saya ingin bertanya tentang layanan Ruang Belajar.";
  const script = `https://wa.me/${notel}?text=${encodeURIComponent(template)}`;
  window.open(script, "_blank"); 
}

// Username dan Profile dinamis sesuai dengan email
document.addEventListener('DOMContentLoaded', () => {
  const usernamedinamis = document.getElementById('username');
  const profile = document.getElementById('usericon');
  const username = sessionStorage.getItem('username');
  const pfpicon = sessionStorage.getItem('usericon');

  if (username) {
      usernamedinamis.textContent = `${username}`;
  }

  if (pfpicon) {
    profile.src = pfpicon;
  }
});