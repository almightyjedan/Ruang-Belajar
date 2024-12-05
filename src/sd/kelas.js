function navigateToPage() {
    const kelas = document.getElementById("kelas").value;

    if (kelas == 1) {
      window.location.href = `../1/sd1.html`;
    } if (kelas == 2) {
        window.location.href = `../2/sd2.html`;
    } if (kelas == 3) {
        window.location.href = `../3/sd3.html`;
    } if (kelas == 4) {
        window.location.href = `../4/sd4.html`;
    } if (kelas == 5) {
        window.location.href = `../5/sd5.html`;
    } if (kelas == 6) {
        window.location.href = `../6/sd6.html`;
    }
  }

function goToPage(page) {
      window.location.href = page;
}