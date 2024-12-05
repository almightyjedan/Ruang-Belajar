// --- Form Toggle for Sign Up and Sign In ---
let signUpButton = document.getElementById("signUp");
let signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active"); // Menampilkan form Sign Up
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active"); // Menampilkan form Sign In
});

// --- Form Submission for Login ---
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

// --- Form Submission for Sign Up ---
const signupForm = document.getElementById("signupForm");
signupForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (name && email && password) {
    alert("Sign Up berhasil! Anda akan diarahkan ke halaman utama.");
    window.location.href = "dashboard.html";
  } else {
    // alert("Silakan masukkan Nama, Email, dan Password.");
    window.location.href = "dashboard.html";
  }
});

// Ambil elemen
const switchToSignUp = document.getElementById('switchToSignUp');
const switchToSignIn = document.getElementById('switchToSignIn');
const titlesm = document.getElementById('titlesm');

// Fungsi untuk beralih ke Sign Up

function showSignUp() {
  signupForm.classList.remove('sm:hidden');
  document.getElementById('signinForm').style.display = 'none';
  titlesm.textContent = "Welcome Back!";
}

function showSignIn() {
  signupForm.classList.add('sm:hidden');
  document.getElementById('signinForm').style.display = 'block';
  titlesm.textContent = "Hello, Friends!";
}


