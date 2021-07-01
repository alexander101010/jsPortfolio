export const projects = [];

const boomzy = {
  title: 'boomzy',
  id: 'boomzy',
  url: 'www.boomzy.me',
  description:
    'Le Wagon Bootcamp final project; a skill-share platform built for retired people hoping to give back to and connect with their community.',
  languages: ['Ruby', 'Ruby on Rails', 'HTML5', 'CSS', 'JavaScript'],
  imagePath: 'boomzy.png',
  imageDescription: 'Image of a mentor and student hard at work',
};

projects.push(boomzy);

const wheelborrow = {
  title: 'wheelborrow',
  id: 'wheelborrow',
  url: 'https://wheelborrow.herokuapp.com/',
  description:
    'AirBNB clone. Why buy expensive tools that you only need once when you could reduce waste and consumerism by borrowing from thy neighbor?',
  languages: ['Ruby', 'Ruby on Rails', 'HTML5', 'CSS', 'JavaScript'],
  imagePath: 'wheelborrow.png',
  imageDescription: 'Image of tools hanging up in a workshop',
};

projects.push(wheelborrow);

const calculator = {
  title: 'calculator app',
  id: 'calculator',
  url: 'https://alexander101010.github.io/calculator-app/',
  description:
    'Frontend Mentor challenge and design. Practice for building layout with CSS Grid as well as computation and event handling with JavaScript.',
  languages: ['HTML5', 'CSS', 'Sass', 'JavaScript'],
  imagePath: 'calculator.png',
  imageDescription: 'Image of calculator',
};
projects.push(calculator);

// Ditched Class to simplify things since I won't need many methods and I will likely move entire portfolio to React soon

// class Project {
//   constructor(
//     title,
//     url,
//     description,
//     languages = [],
//     imagePath,
//     imageDescription
//   ) {
//     this.title = title;
//     this.url = url;
//     this.description = description;
//     this.languages = languages;
//     this.imagePath = imagePath;
//     this.imageDescription = imageDescription;
//   }

//   setImage(imagePath) {
//     console.log(`image path: ${imagePath}`);
//   }

//   // renderProjectCard() {}
// }
