const menuBtn = document.getElementById("menu-btn");
const navBar = document.querySelector(".nav-bar");
menuBtn.addEventListener("click", () => {
  navBar.classList.toggle("active");

  // Switch between hamburger and cross icon
  if (menuBtn.classList.contains("fa-bars")) {
    menuBtn.classList.remove("fa-bars");
    menuBtn.classList.add("fa-times");
  } else {
    menuBtn.classList.remove("fa-times");
    menuBtn.classList.add("fa-bars");
  }
});
