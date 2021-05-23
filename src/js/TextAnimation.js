import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import Cartapus from 'cartapus';

export default class TextAnimation {
    constructor() {
        gsap.registerPlugin(SplitText);
        new Cartapus({
            once: true,
            events: true
        });
        this.initEls();
        this.bindMethods();
        this.initEvents();
    }

    initEls() {
        this.texts = document.querySelectorAll('.js-text');
    }

    bindMethods() {
        this.titleAnimation = this.titleAnimation.bind(this);
    }

    initEvents() {
        this.texts.forEach((text) => {
            text.addEventListener('cartapusintersect', this.titleAnimation);
        })
    }

    titleAnimation({ detail }) {
        if(detail.visible) {
            new SplitText(detail.element, {
                type: "lines",
                linesClass: "split-child"
            });

            const lines = detail.element.querySelectorAll('.split-child');
            const tl = gsap.timeline();

            tl.set(lines, {
                opacity: 0,
                y: 20
            })
                .to(lines, {
                    opacity: 1,
                    y: 0,
                    duration: 1.4,
                    stagger: 0.1,
                    ease: 'power4.out'
                })
        }
    }
}
