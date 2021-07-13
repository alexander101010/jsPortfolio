// helper functions
export const capitalize = function (word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
};

export const smoothScroll = function (buttonElement, scrollTarget) {
  buttonElement.addEventListener('click', e => {
    scrollTarget.scrollIntoView({ behavior: 'smooth' });
  });
};

export const uncheckInput = element => {
  element.checked = false;
};
