const navLink = Array.from(document.querySelectorAll("nav a.nav-link"));

navLink.forEach((n) =>
  n.addEventListener("click", function (e) {
    if (e.target.conta) e.target.classList.add(".active");
  })
);
