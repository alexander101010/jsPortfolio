export const projects = [];

const calculator = {
  title: 'calculator app',
  id: 'calculator',
  url: 'https://alexander101010.github.io/calculator-app/',
  repo: 'https://github.com/alexander101010/alexander101010.github.io-calculator-app',
  description:
    'Frontend Mentor challenge and design. Practice for building layout with CSS Grid as well as computation and event handling with JavaScript.',
  stack: ['html', 'sass', 'javaScript', 'nodeJS'],
  imagePath: 'calcSquare.png',
  imageDescription: 'Image of calculator',
};
projects.push(calculator);

const boomzy = {
  title: 'boomzy',
  id: 'boomzy',
  url: 'https://www.boomzy.me',
  repo: 'https://github.com/Marielle-de-Jong/boomzy',
  description:
    'Le Wagon Bootcamp final project; a skill-share platform built for retired people hoping to give back to and connect with their community.',
  stack: ['ruby', 'rubyOnRails', 'html', 'css', 'javaScript', 'sass'],
  imagePath: 'boomzySquare.png',
  imageDescription: 'Image of a mentor and student hard at work',
};

projects.push(boomzy);

const wheelborrow = {
  title: 'wheelborrow',
  repo: 'https://github.com/alexander101010/wheelborrow',
  id: 'wheelborrow',
  url: 'https://wheelborrow.herokuapp.com/',
  description:
    'AirBNB clone. Why buy expensive tools that you only need once when you could reduce waste and consumerism by borrowing from thy neighbor?',
  stack: ['ruby', 'rubyOnRails', 'html', 'css', 'javaScript', 'sass'],
  imagePath: 'wheelborrowSquare.png',
  imageDescription: 'Image of tools hanging up in a workshop',
};

projects.push(wheelborrow);

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
