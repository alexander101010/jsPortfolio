import { capitalize } from '../helpers.js';

export const renderProjectCard = function (project, target) {
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

  target.insertAdjacentHTML('beforeend', html);
};
