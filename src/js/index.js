import '../css/app.scss';
import Menu from './Menu';

class App {
  constructor () {
    this.initApp();
  }

  initApp () {
    new Menu();
  }
}

new App();
