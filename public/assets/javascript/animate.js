const inViewport = (entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add("isInViewport");
    }
  });
};
const Obs = new IntersectionObserver(inViewport);
const obsOptions = {};

const ELs_inViewport = document.querySelectorAll('[data-inviewport]');
ELs_inViewport.forEach(EL => {
  Obs.observe(EL, obsOptions);
});