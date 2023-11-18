const openNavbar = document.querySelector(".openNavbar");
const closeNavbar = document.querySelector(".closeNavbar");
const navbar = document.querySelector(".nav");

openNavbar.onclick = () => {
  navbar.classList.add("active");
};

closeNavbar.addEventListener("click", () => {
  navbar.classList.remove("active");
});