// const navLinks = document.querySelectorAll('.nav__links li');
// navLinks.forEach(link =>
//   link.addEventListener('mouseover', function (e) {
//     console.log(link.textContent);
//     link.classList.add('.link__hover');
//   })
// );

const projects = [];

// helper functions
const capitalize = function (word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
};

class Project {
  constructor(
    title,
    url,
    description,
    languages = [],
    imagePath,
    imageDescription
  ) {
    this.title = title;
    this.url = url;
    this.description = description;
    this.languages = languages;
    this.imagePath = imagePath;
    this.imageDescription = imageDescription;
  }

  setImage(imagePath) {
    console.log(`image path: ${imagePath}`);
  }

  // renderProjectCard() {}
}

const boomzy = new Project(
  'boomzy',
  'www.boomzy.me',
  'Le Wagon Bootcamp final project; a skill-share platform built for retired people hoping to give back to and connect with their community.',
  ['Ruby', 'Ruby on Rails', 'HTML', 'CSS', 'JavaScript'],
  'boomzy.png',
  'Image of tools hanging up in a workshop'
);
projects.push(boomzy);
// console.log(boomzy);

const wheelborrow = new Project(
  'wheelborrow',
  'https://wheelborrow.herokuapp.com/',
  'AirBNB clone. Why buy expensive tools that you only need once when you could reduce waste and consumerism by borrowing from thy neighbor?',
  ['Ruby', 'Ruby on Rails', 'HTML', 'CSS', 'JavaScript'],
  'wheelborrow.png',
  'Image of tools hanging up in a workshop'
);
projects.push(wheelborrow);
// console.log(wheelborrow);
console.log(projects);
/////////////

// class App {
//   constructor() {}
// }

const projectContainer = document.querySelector('.projects__container');

const renderProjectCard = function (project) {
  const html = `
    <div class="project project__card project__${project.title}">
          <img
            class="project__card__image"
            src="src/images/${project.imagePath}"
            alt="${project.imageDescription}"
          />
          <div class="project__card__infos">
            <div class="project__card__title">${capitalize(project.title)}</div>
            <div class="project__card__description">
              <p>${project.description}</p>
            </div>
            <div class="project__card__footer">
              <span>${project.languages}</span>
              <a
                href="${project.url}"
                class="project__card__link"
                target="_blank"
                >Visit 🚀</a
              >
            </div>
          </div>
        </div>
  `;

  projectContainer.insertAdjacentHTML('beforeend', html);
};

// iterate over projects and render each card
projects.forEach(project => renderProjectCard(project));
