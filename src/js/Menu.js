export default class Menu {
    constructor() {
        this.initEls();
        this.bindMethods();
        this.initEvents();
    }

    initEls() {
        this.hamburger = document.querySelector('.js-hamburger');
        this.header = document.querySelector('.js-header');
        this.back = document.querySelector('.js-back');
    }

    bindMethods() {
        this.toggleMenu = this.toggleMenu.bind(this)
    }

    initEvents() {
        if(this.hamburger) {
            this.hamburger.addEventListener('click', this.toggleMenu)
        }

        if(this.back) {
            this.back.addEventListener('click', this.toggleMenu)
        }
    }

    toggleMenu() {
        if(this.header.classList.contains('open')) {
            this.header.classList.remove('open')
            document.body.style.overflowY = 'scroll';
        } else {
            this.header.classList.add('open')
            document.body.style.overflowY = 'hidden';
        }
    }
}
