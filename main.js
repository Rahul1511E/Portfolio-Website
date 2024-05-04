const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 600) {
    header.style.boxShadow = '0 1px 4px  hsl(218, 13%, 48%)';
  } else {
    header.style.boxShadow = 'none';
  }
});

const navIcon = document.querySelector('.mobile-menu');
const mainNav = document.querySelector('.main-nav');

navIcon.addEventListener('click', () => {
  mainNav.style.height = '100%';
  mainNav.classList.toggle('open');
  if (mainNav.classList.contains('open')) {
    navIcon.src = './src/images/close-icon.svg';
  } else {
    navIcon.src = './src/images/menu-icon.svg';
  }
});

mainNav.addEventListener('click', () => {
  mainNav.classList.remove('open');
  navIcon.src = './src/images/menu-icon.svg';
});

window.addEventListener('resize', () => {
  mainNav.classList.remove('open');
});


const timelineDivider = './src/images/Counter.svg';
const cardsArea = document.querySelector('.cards-area');
const cardProp = [
  {
    title: 'Emotion Intelligence',
    timeline: ['AI', 'Deep-learning', '2023'],
    picture: './src/images/Ai.jpg',
    description:
      'An AI which recognize humans emotion through face detection and the sentence given by them. Developed as two sections,One Face recognization is developed by training method and another emotion from text is developed by researching enormous vocabulary and analysing it and programmed it with help of NLP libraries',
    technology: ['Python3', 'OpenCV', 'TensorFlow', 'NLTK', 'NumPY'],
  },
{
    title: 'Disease Detection',
    timeline: ['AI', 'Deep-learning', '2023-2024'],
    picture: './src/images/disease.jpg',
    description:
      'An AI to detect disease from scanning human faces, with training of over lakhs of faces and with other features like temperature, body features, and other test reports. The main part includes giving a probable disease guess with scanning the human\'s faces it can be used for guessing further testing methods',
    technology: ['Python3', 'OpenCV', 'TensorFlow', 'Pandas', 'NumPY'],
  },
  {
    title: 'Gesture Control drone',
    timeline: ['AI', 'Deep-learning', '2024'],
    picture: './src/images/drone.jpeg',
    description:
      'A drone built with kk2.1.5 Flight Controller when chosen AI mode it takes inputs from Raspberry Pi. The raspberry Pi gives command to flight controller by analysing the nature with vision computing. When a persons hand is detected it follows the hand and reacts to gestures made by that hand.',
    technology: ['IoT', 'OpenCV', 'RasPi', 'Flight Controller', 'Drone'],
  },
  {
    title: 'Crawler',
    timeline: ['AI', 'Robotics', '2024'],
    picture: './src/images/crawler.jpg',
    description:
      'The crawler is designed for a multi purpose survey robot. Due to the flexibility of movements of each leg it can crawl into any environment and take surveys and can even 3d map the environment.',
    technology: ['IoT', 'Scipy', '3d-Printing', 'ESP boards', 'Servo-motors'],
  },
];

for (let index = 0; index < cardProp.length; index += 1) {
  const section = document.createElement('section');
  section.classList.add('wrapper', 'card');
  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container');
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  const img = document.createElement('img');
  img.src = cardProp[index].picture;
  img.alt = 'project image';
  img.setAttribute('width', 600);
  img.setAttribute('height', 400);

  imgContainer.appendChild(overlay);
  imgContainer.appendChild(img);

  const description = document.createElement('div');
  description.classList.add('description');
  const header = document.createElement('h2');
  header.classList.add('secondary-header');
  const headerText = document.createTextNode(cardProp[index].title);
  header.appendChild(headerText);
  description.appendChild(header);
  const timeline = document.createElement('ul');
  timeline.classList.add('counter');
  for (let count = 0; count < cardProp[index].timeline.length; count += 1) {
    const item = document.createElement('li');
    const paragraph = document.createElement('p');
    const text = document.createTextNode(cardProp[index].timeline[count]);
    paragraph.appendChild(text);
    item.appendChild(paragraph);
    timeline.appendChild(item);
    if (count === 0) {
      item.classList.add('active');
      const divide = document.createElement('li');
      const divider = document.createElement('img');
      divider.src = timelineDivider;
      divider.setAttribute('width', 5);
      divider.setAttribute('height', 5);
      divide.appendChild(divider);
      timeline.appendChild(divide);
    }
    if (count % 2 !== 0) {
      const divide = document.createElement('li');
      const divider = document.createElement('img');
      divider.src = timelineDivider;
      divider.setAttribute('width', 5);
      divider.setAttribute('height', 5);
      divide.appendChild(divider);
      timeline.appendChild(divide);
    }
  }
  description.appendChild(timeline);

  const details = document.createElement('p');
  details.classList.add('details');
  const detailsText = document.createTextNode(cardProp[index].description);
  details.appendChild(detailsText);
  description.appendChild(details);

  const tags = document.createElement('ul');
  tags.classList.add('tags');
  for (
    let counter = 0;
    counter < cardProp[index].technology.length;
    counter += 1
  ) {
    const item = document.createElement('li');
    const text = document.createTextNode(cardProp[index].technology[counter]);
    item.appendChild(text);
    item.classList.add('tag-item');
    tags.appendChild(item);
  }
  description.appendChild(tags);

  const button = document.createElement('button');
  button.classList.add('btn', 'show');
  button.setAttribute('type', 'button');
  button.setAttribute('data-index', index);
  const btnText = document.createTextNode('Contact for more details');
  button.appendChild(btnText);
  description.appendChild(button);

  if (index % 2 === 0) {
    section.appendChild(imgContainer);
    section.appendChild(description);
  } else {
    section.appendChild(description);
    section.appendChild(imgContainer);
  }
  cardsArea.appendChild(section);
}

function printTags(technology) {
  const tags = document.createElement('ul');
  tags.classList.add('tags');

  for (let count = 0; count < technology.length; count += 1) {
    const item = document.createElement('li');
    const text = document.createTextNode(technology[count]);
    item.appendChild(text);
    item.classList.add('tag-item');
    tags.appendChild(item);
  }
  return tags;
}

function printTimeline(timeline) {
  const timeline2 = document.createElement('ul');
  timeline2.classList.add('timeline');
  for (let count = 0; count < timeline.length; count += 1) {
    const item = document.createElement('li');
    const paragraph = document.createElement('p');
    const text = document.createTextNode(timeline[count]);
    paragraph.appendChild(text);
    item.appendChild(paragraph);
    timeline2.appendChild(item);
    if (count === 0) {
      item.classList.add('active');
      const divide = document.createElement('li');
      const divider = document.createElement('img');
     divider.src = timelineDivider;
      divider.setAttribute('width', 5);
      divider.setAttribute('height', 5);
      divide.appendChild(divider);
      timeline2.appendChild(divide);
    }
    if (count % 2 !== 0) {
      const divide = document.createElement('li');
      const divider = document.createElement('img');
      divider.src = timelineDivider;
      divider.setAttribute('width', 5);
      divider.setAttribute('height', 5);
      divide.appendChild(divider);
      timeline2.appendChild(divide);
    }
  }

  return timeline2;
}

