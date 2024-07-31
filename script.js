const headerEl = document.querySelector(".header");
const btnEl = document.querySelector(".menu_btn");

btnEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav_open");
});

// STICKY NAV

const heroSectionEl = document.querySelector(".hero_container");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if(ent.isIntersecting === false){
        document.querySelector(".header").classList.add("sticky");
        console.log(ent);
    }

    if(ent.isIntersecting){
        document.querySelector(".header").classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
  }
);

obs.observe(heroSectionEl);
