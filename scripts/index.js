const burgerMenuLinks = document.querySelectorAll(".burger-menu__link");
const burgerOpen = document.querySelector("#burger-open");
const burgerClose = document.querySelector("#burger-close");

const btnUp = {
  el: document.querySelector(".footer__btn-up"),
  addEventListener() {
    document.querySelector(".footer__btn-up").onclick = () => {
      // переместим в начало страницы
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };
  },
};

const swiper = new Swiper(".reviews-slider", {
  // Optional parameters
  direction: "horizontal",
  // Slide class
  slideClass: "reviews-slider__slide",
  //Wrapper class
  wrapperClass: "reviews-slider__wrapper",
  // If we need pagination
  pagination: {
    el: ".reviews-slider__pagination",
    type: "bullets",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".reviews-slider__button-next",
    prevEl: ".reviews-slider__button-prev",
  },
  slidesPerView: "auto",
  spaceBetween: 24,
  breakpoints: {
    320: {
      slidesPerView: 1.3,
      spaceBetween: 16,
    },
    425: {
      slidesPerView: "auto",
      spaceBetween: 16,
    },
    768: {
      slidesPerView: "auto",
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: "auto",
      spaceBetween: 24,
    },
  },
});

class scrollAnimation {
  constructor(animationBlock, animationClass) {
    this._block = document.querySelectorAll(animationBlock);
    this._animation = animationClass;
  }

  _elementInView(el, dividend = 1) {
    const elementTop = el.getBoundingClientRect().top;

    return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
  }

  _elementOutofView(el) {
    const elementTop = el.getBoundingClientRect().top;

    return (
      elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  _displayScrollElement(el) {
    el.classList.add(this._animation);
  }

  _hideScrollElement(el) {
    el.classList.remove(this._animation);
  }

  handleScrollAnimation = () => {
    this._block.forEach((el) => {
      if (this._elementInView(el, 1.25)) {
        this._displayScrollElement(el);
      } else if (this._elementOutofView(el)) {
        this._hideScrollElement(el);
      }
    });
  };
}

const fishAnimation = new scrollAnimation(
  ".animation-fish__fish",
  "fish-trembling"
);

const algaeAnimation = new scrollAnimation(
  ".animation-fish__algae",
  "algae-trembling"
);

const floatAnimation = new scrollAnimation(".float", "float__animation");

function openBurgerMenu() {
  document.querySelector(".burger-menu").classList.add("burger-menu_active");
  burgerClose.classList.add("burger-menu__enter_active");
  document
    .querySelector(".burger-menu")
    .classList.remove("burger-menu__animation");
}

function closeBurgerMenu() {
  document.querySelector(".burger-menu").classList.remove("burger-menu_active");
  document
    .querySelector(".burger-menu")
    .classList.add("burger-menu__animation");
}

burgerMenuLinks.forEach((element) => {
  element.addEventListener("click", closeBurgerMenu);
});

burgerOpen.addEventListener("click", openBurgerMenu);

burgerClose.addEventListener("click", closeBurgerMenu);

window.addEventListener("scroll", () => {
  fishAnimation.handleScrollAnimation();
  algaeAnimation.handleScrollAnimation();
  floatAnimation.handleScrollAnimation();
});

btnUp.addEventListener();
