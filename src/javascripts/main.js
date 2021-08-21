import startApp from './components/startApp';
import domEvents from './helpers/domEvents';

import '../styles/main.scss';

const init = () => {
  startApp();
  domEvents();
};

init();
