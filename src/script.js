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

window.addEventListener("click", function (event) {
  const dropdown = document.getElementById("dropTingkat");
  const tingkatButton = document.querySelector('li[onclick="tingkat()"]');
  if (!dropdown.contains(event.target) && !tingkatButton.contains(event.target)) {
    dropdown.classList.add("hidden");
  }
});

window.addEventListener("click", function (event) {
  const dropdown = document.getElementById("dropUser");
  const userButton = document.querySelector('a[onclick="user()"]');
  if (!dropdown.contains(event.target) && !userButton.contains(event.target)) {
    dropdown.classList.add("hidden");
  }
});

const loggedin = sessionStorage.getItem('loggedin');

if (loggedin === "1") { 
  signinbutton.classList.add("hidden");
  usericon.classList.remove("hidden");
} else {
  signinbutton.classList.remove("hidden");
  usericon.classList.add("hidden");
}

function user() {
  const dropUser = document.getElementById("dropUser");
  dropUser.classList.toggle("hidden"); 
}

document.getElementById("contact-form").addEventListener("submit", async function (event) {
  event.preventDefault(); // Mencegah form melakukan submit default
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

function kirimWA() {
  const phoneNumber = "+6281574749192";
  const messageTemplate = "Halo, saya ingin bertanya tentang layanan Ruang Belajar.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageTemplate)}`;
  window.open(whatsappUrl, "_blank"); 
}