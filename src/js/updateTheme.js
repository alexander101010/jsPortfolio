// let currentTheme;

// const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)');
// // userPrefersDark.matches --> returns true or false
// if (userPrefersDark.matches) {
//   // initialize theme to dark
//   currentTheme = 'dark';
//   updateTheme();
// }

export const updateTheme = theme => {
  const html = document.querySelector('html');
  html.dataset.theme = theme;
};
