// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  GoogleAuthProvider, 
  signInWithPopup,
  GithubAuthProvider,
  updateProfile
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

// Config Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB9E9ko6jd4pDRhwW8pPoJmD9m9hmtj4Lg",
  authDomain: "login-ruang-belajar-dd354.firebaseapp.com",
  projectId: "login-ruang-belajar-dd354",
  storageBucket: "login-ruang-belajar-dd354.appspot.com",
  messagingSenderId: "961256022584",
  appId: "1:961256022584:web:24a54305f22816b313bccd",
  measurementId: "G-D4J5LKLXHB"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

// Custom Alert
function getFriendlyErrorMessage(errorCode) {
    switch (errorCode) {
        case "auth/missing-password":
            return "Silakan masukkan password!";
        case "auth/invalid-credential":
            return "Akun tidak ditemukan. Silakan periksa kembali.";
        case "auth/invalid-email":
            return "Format email tidak valid. Silakan periksa kembali.";
        case "auth/user-not-found":
            return "Pengguna tidak ditemukan. Silakan daftar terlebih dahulu.";
        case "auth/wrong-password":
            return "Password yang Anda masukkan salah. Coba lagi.";
        case "auth/email-already-in-use":
            return "Email ini sudah digunakan. Gunakan email lain.";
        case "auth/weak-password":
            return "Password terlalu lemah. Gunakan minimal 6 karakter.";
        case "auth/too-many-requests":
            return "Terlalu banyak percobaan login. Silakan coba lagi nanti.";
        case "auth/account-exists-with-different-credential":
            return "Akun sudah terdaftar, coba login dengan metode lain."
        default:
            return "Terjadi kesalahan. Silakan coba lagi.";
    }
  }

// Login
document.getElementById("signinForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email2").value;
  const password = document.getElementById("password2").value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    const profilePicture = user.photoURL || "./assets/usericon.png";

    alert(`Login berhasil! Selamat datang, ${userCredential.user.email}`);
    sessionStorage.setItem('loggedin', 1);
    sessionStorage.setItem('username', userCredential.user.email);
    sessionStorage.setItem('usericon', profilePicture);
    window.location.href = "index.html";
  } catch (error) {
    const friendlyMessage = getFriendlyErrorMessage(error.code);
    alert(friendlyMessage);
  }
});

// Sign Up
document.getElementById("signupForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    const profilePicture = user.photoURL || "./assets/usericon.png";

    alert(`Pendaftaran berhasil! Selamat datang, ${userCredential.user.email}`);
    sessionStorage.setItem('loggedin', 1);
    sessionStorage.setItem('username', userCredential.user.email);
    sessionStorage.setItem('usericon', profilePicture);
    window.location.href = "index.html";
  } catch (error) {
    const friendlyMessage = getFriendlyErrorMessage(error.code);
    alert(friendlyMessage);
  }
});

// Login Google
document.querySelectorAll(".fa-google-plus-g").forEach(button => {
  button.addEventListener("click", async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const profilePicture = user.photoURL || "./assets/usericon.png";

      alert(`Login dengan Google berhasil! Selamat datang, ${user.displayName}`);
      sessionStorage.setItem('loggedin', 1);
      sessionStorage.setItem('username', user.displayName);
      sessionStorage.setItem('usericon', profilePicture);
      window.location.href = "index.html";
    } catch (error) {
      const friendlyMessage = getFriendlyErrorMessage(error.code);
      alert(friendlyMessage);
    }
  });
});

// Login GitHub
document.querySelectorAll(".fa-github").forEach(button => {
    button.addEventListener("click", async () => {
      try {
        const result = await signInWithPopup(auth, githubProvider);
        const user = result.user;
        const profilePicture = user.photoURL || "./assets/usericon.png";

        alert(`Login dengan GitHub berhasil! Selamat datang, ${user.displayName || user.email}`);
        sessionStorage.setItem('loggedin', 1);
        sessionStorage.setItem('username', user.displayName);
        sessionStorage.setItem('usericon', profilePicture);
        window.location.href = "index.html";
      } catch (error) {
        const friendlyMessage = getFriendlyErrorMessage(error.code);
        alert(friendlyMessage);
      }
    });
  });