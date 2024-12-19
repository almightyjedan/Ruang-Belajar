if (loggedin === "1") { 
  signinbutton.classList.add("hidden");
  usericon.classList.remove("hidden");
} else {
 alert("Anda belum login, silahkan login terlebih dahulu!")
//   window.location.href = "../../login.html"
  signinbutton.classList.remove("hidden");
  usericon.classList.add("hidden");
}

function navigateToPage() {
    const kelas = document.getElementById("kelas").value;

    if (kelas == 1) {
      window.location.href = `../1/smp1.html`;
    } if (kelas == 2) {
        window.location.href = `../2/smp2.html`;
    } if (kelas == 3) {
        window.location.href = `../3/smp3.html`;
    } 
  }

function goToPage(page) {
      window.location.href = page;
}

// Username dan Profile dinamis sesuai dengan email
document.addEventListener('DOMContentLoaded', () => {
  const usernamedinamis = document.getElementById('username');
  const usernamewelcome = document.getElementById('usernamewelcome')
  const profile = document.getElementById('usericon');
  const username = sessionStorage.getItem('username');
  const pfpicon = sessionStorage.getItem('usericon');

  if (username) {
      usernamedinamis.textContent = `${username}!`;
      usernamewelcome.textContent = `Hai, ${username}!`;
  }

  if (pfpicon) {
    profile.src = pfpicon;
  }
});