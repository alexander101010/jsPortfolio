import { projects } from './projects.js';
import { capitalize } from './helpers.js';

const projectContainer = document.querySelector('.projects__container');

const renderProjectCard = function (project) {
  const html = `
    <div class="project project-card project__${project.title}">
          <img
            class="project-card__image"
            src="src/images/${project.imagePath}"
            alt="${project.imageDescription}"
          />
          <div class="project-card__infos">
            <div class="project-card__title">${capitalize(project.title)}</div>
            <div class="project-card__description">
              <p>${project.description}</p>
            </div>
            <div class="project-card__footer">
              <span>${project.languages}</span>
              <a
                href="${project.url}"
                class="project-card__link"
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
