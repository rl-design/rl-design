document.addEventListener("DOMContentLoaded", () => {
    // run whatever we need
});

function init() {    
    const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});
}


const options = {
  
    plugins: [new SwupProgressPlugin(
    {
      className: 'swup-progress-bar',
      transition: 800,
      delay: 0
    }
  )]
  

};

const swup = new Swup(options); // only this line when included with script tag

// run once 
init();

// this event runs for every page view after initial load
swup.on('contentReplaced', init);

function unload() {
    if (document.querySelector('.js-scroll')) {
    }
    // ...
}

swup.on('willReplaceContent', unload);
