import { projects } from './projects.js';
import { renderProjectCard } from './views/projectView.js';
import { updateTheme } from './updateTheme.js';

const projectContainer = document.querySelector('.projects__container');
const themeToggleInput = document.querySelector('.toggle__input');

// iterate over projects and render each card

//*************DARK AND LIGHT THEME LOGIC*************
// user preference in browser?
const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)');
if (userPrefersDark.matches) {
  themeToggleInput.checked = 'true';
  updateTheme('dark');
}

themeToggleInput.addEventListener('click', e => {
  const themeToggledDark = e.target.checked; // returns true for dark, false for light
  themeToggledDark ? updateTheme('dark') : updateTheme('light');
});

// ***********
const nav = document.querySelector('.nav');
const toggleBox = document.querySelector('.toggle__box');

window.addEventListener('scroll', function (e) {
  const scrollY = this.scrollY;
  if (scrollY > nav.offsetHeight) {
    toggleBox.style.top = '0';
  }
  if (scrollY < nav.offsetHeight) {
    toggleBox.style.top = '8rem';
  }
});

// Dynamically add projects -- Commented out because the flip effect needed both sides to have consisent heights, which was difficult when considering various image aspect ratios and orientations
projects.forEach(project => renderProjectCard(project, projectContainer));

// Move theme toggle up into right top corner when
