import p4rImage from '/src/assets/sites/p4r-port-item.png';
import netflixImage from '/src/assets/projects/netflix-port-item.png';
import airbnbImage from '/src/assets/projects/airbnb-port-item.png';
import memeImage from '/src/assets/projects/meme-port-item.png';
import noteImage from '/src/assets/projects/notes-port-item.png';
import tenzieImage from '/src/assets/projects/tenzie-port-item.png';

export default {
  sites: [
    {
      id: 1,
      title: 'Partnership For Resilience',
      desc: 'The Partnership for Resilience works to improve academic, health, and social outcomes for children by fostering trauma-responsive schools and effective family, school, health, and community partnerships.',
      link: 'https://partnership4resilience.org',
      image: p4rImage,
      type: 'site',
    },
  ],
  projects: [
    {
      id: 1,
      title: 'Myflix (Netflix) Clone',
      desc: `While you might not be able to watch Netflix's catalogue on Myflix, you can search for any movie that may be there and MORE! Search for your favorite movies and add them to your list for later.`,
      link: 'https://github.com/mqwebst2/netflix-clone',
      image: netflixImage,
      type: 'project',
    },
    {
      id: 2,
      title: 'Airbnb Experiences Clone',
      desc: 'Small clone of the AirBnb Experiences site. This was a test for importing data and dynamically displaying it on the page. This project used data mapping in Vite React to programmatically display the faux events listed.',
      link: 'https://github.com/mqwebst2/airbnb-clone',
      image: airbnbImage,
      type: 'project',
    },
    {
      id: 3,
      title: 'Meme Generator',
      desc: 'Looking for a quick laugh and maybe make some friends and family laugh too? Check out this meme generator I built. This was great practice for State and Effect hooks in React.',
      link: 'https://github.com/mqwebst2/meme-generator',
      image: memeImage,
      type: 'project',
    },
    {
      id: 4,
      title: 'Tenzi Dice Game',
      desc: 'Based on the Tenzi Dice Game, this is my own online version. This game is heavy on the State management and equally so on fun factor. Feel free to try the game out until you win.',
      link: 'https://github.com/mqwebst2/tenzies-dice-game',
      image: tenzieImage,
      type: 'project',
    },
    {
      id: 5,
      title: 'Notes App',
      desc: 'By far the most complex project listed but it was worth the effort. This note app takes advantage of React hooks like State and Effect as well as utilizing the local storage of the browser. Try taking some notes and come back to them!',
      link: 'https://github.com/mqwebst2/notes-app',
      image: noteImage,
      type: 'project',
    },
  ],
};
