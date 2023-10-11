const navLink = Array.from(document.querySelectorAll("nav a.nav-link"));
const offcanvas = document.querySelector(".offcanvas");
const colImg = document.querySelector(".colImg");

navLink.forEach((n) =>
  n.addEventListener("click", function (e) {
    navLink.forEach((n) => {
      n.classList.remove("active");
      n.removeAttribute("aria-current");
    });
    e.target.classList.add("active");
    e.target.ariaCurrent = "page";
  })
);

offcanvas.addEventListener("show.bs.offcanvas", () => {
  offcanvas.classList.add("navActive");
});

offcanvas.addEventListener("hidden.bs.offcanvas", () => {
  offcanvas.classList.remove("navActive");
});
