import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Steven Kim',
  subtitle: 'Junior Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'My name is Steven Kim. I\'m majoring in Computer System Technology at BCIT and will be graduating in Dec, 2021.',
  paragraphTwo: 'I am passionate about working on projects and love to solve challenging problems.',
  paragraphThree: 'What do I do in my spare time? Cook, photograph, drive and of course, coding!',
  resume: 'https://drive.google.com/file/d/17h5mPXc7wevZFOcyePxy6Nmh1BJnEcb8/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'Utrack',
    info: 'This project is made to solve the prevalent issue of searching for vital supplies during the CoViD-19 pandemic.',
    info2: 'Everyone deserves to have access to everyday utilities, especially in a time where people believe they need to accrue emergency reserves to sustain themselves during self-quarantine.',
    url: 'https://team22-project2.web.app/',
    repo: 'https://github.com/melocoh/COMP-2800-Team-BBY-22-uTrack', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'The Mindful Shopper',
    info: 'Amidst a global pandemic, shopping online has become more common than ever. However, this has not changed the fact that the fast fashion industry is a major polluter, accounting for approximately 10% of global carbon emissions annually. A simple step we can all take is to shop second hand when looking to buy clothes, reducing fibre waste and carbon emissions.',
    info2: '',
    url: 'https://www.youtube.com/watch?v=HxKTAuhek2M',
    repo: 'https://github.com/developerstevenkim/Hack4Good_', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.png',
    title: 'Therapeutics Initiative Assistant',
    info: 'Restful API that provides drugs information',
    info2: 'I developed a web application that displays drug information from what end-user searches.',
    url: 'https://tiapp.azurewebsites.net/',
    repo: 'https://github.com/developerstevenkim/TherapeuticsInitiativeWebApp', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Feel free to reach out to me!',
  btn: 'Email Steven Kim',
  email: 'stevenkim1989@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/steven-dohun-kim/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/developerstevenkim/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
