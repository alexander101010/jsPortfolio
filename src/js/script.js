import { projects } from './projects.js';
import { renderProjectCard } from './views/projectView.js';
import { updateTheme } from './updateTheme.js';
import { smoothScroll, uncheckInput } from './helpers.js';

const projectContainer = document.querySelector('.projects__container');
const themeToggleInput = document.querySelector('.toggle__input');

// *************************************************
//*************DARK AND LIGHT THEME LOGIC*************
// *************************************************

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

// *************************************************
// *********** THEME TOGGLE / scrolltoTop ANIMATION **************
// *************************************************
const nav = document.querySelector('#nav');
const toggleBox = document.querySelector('.toggle__box');
const scrollToTopBtn = document.querySelector('.scroll-to-top__box');
smoothScroll(scrollToTopBtn, nav);

window.addEventListener('scroll', function (e) {
  const scrollY = this.scrollY;
  if (scrollY > nav.offsetHeight) {
    toggleBox.style.top = '0';
    scrollToTopBtn.style.opacity = '1';
  }
  if (scrollY < nav.offsetHeight) {
    toggleBox.style.top = '8rem';
    scrollToTopBtn.style.opacity = '0';
  }
});

// *************************************************
// *********** Scroll to Top FUNCTIONALITY **************
// *************************************************

// ***********************************************************
// *************** Render Project Cards **********************
// ***********************************************************
// Dynamically add projects from imported projects --> array of objects
// renderProjectCard(projectObject, targetForMarkupAddition)
projects.forEach(project => renderProjectCard(project, projectContainer));

// *****************************************************************************************
// **** Smooth scrolling using helper function (takes btnElement and targetScrollElement) ***
// *****************************************************************************************
const scrollProjectsBtn = document.querySelector('.scroll-down');
const projectsSection = document.querySelector('#section-projects');

smoothScroll(scrollProjectsBtn, projectsSection);

const alexAvatar = document.querySelector('.banner__photo');
const aboutMeSection = document.querySelector('#section-about');

smoothScroll(alexAvatar, aboutMeSection);

const navProjectsBtn = document.querySelector('#nav__btn-projects');
const navAboutBtn = document.querySelector('#nav__btn-about');

smoothScroll(navProjectsBtn, projectsSection);
smoothScroll(navAboutBtn, aboutMeSection);

// *************************************************************
// Hide Overlay on mobile hamburger button after one of the selections is clicked
// *************************************************************

const mobileNavLinks = document.querySelectorAll('.mobile-nav__link');
const navInput = document.querySelector('#navi-toggle');

mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    uncheckInput(navInput);
  });
});
