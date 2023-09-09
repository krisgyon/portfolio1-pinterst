const navLink = Array.from(document.querySelectorAll("nav a.nav-link"));
const offcanvas = document.querySelector(".offcanvas");

navLink.forEach((n) =>
  n.addEventListener("click", function (e) {
    e.preventDefault();
    navLink.forEach((n) => n.classList.remove("active"));
    e.target.classList.add("active");
  })
);

offcanvas.addEventListener("show.bs.offcanvas", () => {
  offcanvas.classList.add("navActive");
});

offcanvas.addEventListener("hidden.bs.offcanvas", () => {
  offcanvas.classList.remove("navActive");
});
