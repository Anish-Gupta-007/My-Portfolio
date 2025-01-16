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

// SCROLL REVEL

ScrollReveal({
  distance:'80px',
  duration: 2000,
  delay:200,
})
ScrollReveal().reveal('.home-contant, heading', {origin:'top'})
ScrollReveal().reveal('.coder-img, .skill-container,.contact form',{origin:'buttom'})
ScrollReveal().reveal('.home-contant h1, .about-img,.about',{origin:'left'})
ScrollReveal().reveal('.home-contant p, .about-contant,.project-container',{origin:'right'})