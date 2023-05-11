let parentContainer = document.querySelectorAll(".parentAnimation");
let elementAnimation = document.querySelectorAll(".elementAnimation");

function animateOnScroll() {
  let browserPosition = window.innerHeight;

  parentContainer.forEach((par) => {
    let section = par.getBoundingClientRect().top;
    let elementAnimation = par.querySelectorAll(".elementAnimation");
    
    if (section < browserPosition / 2) {
      elementAnimation.forEach((animation) => {
        animation.classList.add("slideAnimation");
      });
    }
  });
}

window.addEventListener("scroll", animateOnScroll);