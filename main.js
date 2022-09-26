

//  hamburger activation on mobile
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  })

  document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }))

// links
function setContentToMain() {
    document.getElementById("content").src = "something.html";
}
function setContentToAbc() {
    document.getElementById("content").src = "abc.html";
}
