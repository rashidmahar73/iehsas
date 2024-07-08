function animateClass(currentSlide) {
  if (currentSlide === 0) {
    return { topText: "firstSlideText", button: "firstSlideBtn" };
  } else if (currentSlide === 1) {
    return {
      topText: "secondSlideText",
      button: "secondSlideBtn",
    };
  } else if (currentSlide === 2) {
    return {
      topText: "thirdSlideText",
      button: "thirdSlideBtn",
    };
  }
}

export { animateClass };
