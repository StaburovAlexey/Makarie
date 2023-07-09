


class tremblingAnimation {
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

const fishAnimation = new tremblingAnimation(
  ".animation-fish__fish",
  "fish-trembling"
);

const algaeAnimation = new tremblingAnimation(
  ".animation-fish__algae",
  "algae-trembling"
);

window.addEventListener("scroll", () => {
  fishAnimation.handleScrollAnimation();
  algaeAnimation.handleScrollAnimation();
});
