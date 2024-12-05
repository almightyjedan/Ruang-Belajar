// --- INDEX HTML ---
const navLinks = document.querySelector(".nav-links");
    function onToggleMenu(e) {
        e.name = e.name === "menu" ? "close" : "menu";
        navLinks.classList.toggle("top-[9%]");
    }

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

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});