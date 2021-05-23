import '../css/app.scss';
import Menu from './Menu';
import TextAnimation from './TextAnimation';

class App {
  constructor () {
    this.initApp();
  }

  initApp () {
    new Menu();
    new TextAnimation();
  }
}

new App();
