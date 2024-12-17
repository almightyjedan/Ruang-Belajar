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