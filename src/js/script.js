import { projects } from './projects.js';
import { renderProjectCard } from './views/projectView.js';
import { updateTheme } from './updateTheme.js';
import { smoothScroll, uncheckInput } from './helpers.js';

const nav = document.querySelector('#nav');
// const mobileNavLinks = document.querySelectorAll('.mobile-nav__link');
const mobileNavLinkAbout = document.querySelectorAll('.mobile-nav__link-about');
const mobileNavLinkProjects = document.querySelectorAll(
  '.mobile-nav__link-projects'
);
const localMobileNavLinks = [mobileNavLinkAbout, mobileNavLinkProjects];
const navInput = document.querySelector('#navi-toggle');

const projectContainer = document.querySelector('.projects__container');
const toggleBox = document.querySelector('.toggle__box');
const themeToggleInput = document.querySelector('.toggle__input');
const scrollToTopBtn = document.querySelector('.scroll-to-top__box');

const alexAvatar = document.querySelector('.banner__photo');
const navProjectsBtn = document.querySelector('#nav__btn-projects');
const navAboutBtn = document.querySelector('#nav__btn-about');

const scrollProjectsBtn = document.querySelector('.scroll-down');
const footerProjectsLink = document.querySelector('#footer-projects-link');

//SECTIONS
const aboutMeSection = document.querySelector('#section-about');
const projectsSection = document.querySelector('#section-projects');

const sections = { about: aboutMeSection, projects: projectsSection };

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

// ***********************************************************
// *************** Render Project Cards **********************
// ***********************************************************
// Dynamically add projects from imported projects --> array of objects
// renderProjectCard(projectObject, targetForMarkupAddition)
projects.forEach(project => renderProjectCard(project, projectContainer));

// ***************************************************************
// Smooth scrolling using helper function (takes btnElement and targetScrollElement) ***
// **************************************************************
// const scrollProjectsBtn = document.querySelector('.scroll-down');
// const projectsSection = document.querySelector('#section-projects');
// const footerProjectsLink = document.querySelector('#footer-projects-link');
footerProjectsLink.addEventListener('click', e => {
  e.preventDefault(); // prevent a-tag from moving to section right away, allowing for smooth scroll instead
});

smoothScroll(scrollProjectsBtn, projectsSection);
smoothScroll(footerProjectsLink, projectsSection);

// const alexAvatar = document.querySelector('.banner__photo');
// const aboutMeSection = document.querySelector('#section-about');
// const navProjectsBtn = document.querySelector('#nav__btn-projects');
// const navAboutBtn = document.querySelector('#nav__btn-about');

smoothScroll(alexAvatar, aboutMeSection);
smoothScroll(navProjectsBtn, projectsSection);
smoothScroll(navAboutBtn, aboutMeSection);

// *************************************************************
// Hide Overlay on mobile hamburger button after one of the selections is clicked
// *************************************************************

// const mobileNavLinks = document.querySelectorAll('.mobile-nav__link');
// const navInput = document.querySelector('#navi-toggle');

const mobileHamProjectsBtn = document.querySelector(
  '.mobile-nav__link-projects'
);
const mobileHamAboutBtn = document.querySelector('.mobile-nav__link-about');

smoothScroll(mobileHamProjectsBtn, projectsSection);
smoothScroll(mobileHamAboutBtn, aboutMeSection);

localMobileNavLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    uncheckInput(navInput);
    // smoothScroll(link, sections[link.dataset.section]);
    // // sections[link.dataset.section].scrollIntoView({ behavior: 'smooth' });
  });
});

// const mobileNavLinkAbout = document.querySelectorAll('.mobile-nav__link-about');
// const mobileNavLinkProjects = document.querySelectorAll(
//   '.mobile-nav__link-projects'
// );
