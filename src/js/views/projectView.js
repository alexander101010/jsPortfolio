import { capitalize } from '../helpers.js';

export const renderProjectCard = function (project, target) {
  const html = `
    <div class="card card-${project.title.split(' ')[0]}">
      <div class="card__side card__side-front">
        <img src="./src/images/${project.imagePath}" alt="${
    project.imageDescription
  }" class="card__img">
        <div class="card-details">
          <h3 class="card-details__title">${capitalize(project.title)}</h3>
          <p class="card-details__description">${project.description}</p>
        </div>
      </div>
      <div class="card__side card__side-back">
        <ul class="card__links">
          <li><a href="${
            project.repo
          }" target="_blank" class="btn-link repo"><i class="devicon-github-original"></i>  Github Repo </a></li>
          <li><a href="${
            project.url
          }" target="_blank" class="btn-link live-site">Visit Live Site</a></li>
        </ul>
        <div class="card__stack card__stack--${project.id}">
          ${renderIcons(project.stack)}
        </div>
        <div class="card__links-mobile">
          <a href="${
            project.repo
          }" target="_blank" class="card__link-mobile"><i class="devicon-github-original"></i> Repo </a></li>
          <a href="${
            project.url
          }" target="_blank" class="card__link-mobile">Visit Site</a>
        </div>
      </div>
    </div>
  `;

  target.insertAdjacentHTML('beforeend', html);
};

export const renderIcons = stackArr => {
  // make icons smaller if more than 6 icons
  let smaller = stackArr.length > 6 ? 'card__lang-small' : '';

  const languageIconKeys = {
    html: `<i title="Semantic html5" class="devicon-html5-plain-wordmark card__lang ${smaller}"></i>`,
    css: `<i title="CSS3" class="devicon-css3-plain card__lang  ${smaller}"></i>`,
    javaScript: `<i title="JavaScript ES6" class="devicon-javascript-plain card__lang  ${smaller}"></i>`,
    ruby: `<i title="Ruby" class="devicon-ruby-plain-wordmark card__lang  ${smaller}"></i>`,
    rubyOnRails: `<i title="Ruby on Rails" class="devicon-rails-plain-wordmark card__lang  ${smaller}"></i>`,
    react: `<i title="React" class="devicon-react-original-wordmark card__lang  ${smaller}"></i>`,
    sass: `<i title="Sass" class="devicon-sass-original card__lang  ${smaller}"></i>`,
    nodeJS: `<i title="Node.js" class="devicon-nodejs-plain-wordmark card__lang  ${smaller}"></i>`,
    git: `<i title="Git" class="devicon-git-plain card__lang  ${smaller}"></i>`,
  };

  const iconsMarkup = stackArr.map(el => languageIconKeys[el]).join(' ');
  return iconsMarkup;
};

// console.log(renderIcons(['html', 'css']));
