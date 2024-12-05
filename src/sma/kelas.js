function navigateToPage() {
    const kelas = document.getElementById("kelas").value;

    if (kelas == 1) {
      window.location.href = `../1/sma1.html`;
    } if (kelas == 2) {
        window.location.href = `../2/sma2.html`;
    } if (kelas == 3) {
        window.location.href = `../3/sma3.html`;
    }
  }

function goToPage(page) {
      window.location.href = page;
}