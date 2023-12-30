document.addEventListener("DOMContentLoaded", function () {
  const humburger = document.querySelector(".humburger");
  const closeNavList = document.querySelector(".closeNavList");
  const navList = document.querySelector(".navList");

  humburger.addEventListener("click", function () {
    navList.classList.replace("-right-72", "right-0");
  });

  closeNavList.addEventListener("click", function () {
    navList.classList.replace("right-0", "-right-72");
  });

  // Tambahkan event listener untuk setiap elemen tautan di dalam menu navigasi
  const navLinks = document.querySelectorAll(".navList a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navList.classList.replace("right-0", "-right-72");
    });
  });

  // Event listener untuk menyembunyikan menu saat klik di luar menu
  document.addEventListener("click", function (e) {
    if (!humburger.contains(e.target) && !navList.contains(e.target)) {
      navList.classList.replace("right-0", "-right-72");
    }
  });
});
