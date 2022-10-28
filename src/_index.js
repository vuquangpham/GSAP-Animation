import 'assets/style/style.css';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

window.addEventListener('load', () => {
    const images = gsap.utils.toArray(".box");

    // set width and height for image

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: document.querySelector('.wrapper'),
            scrub: true,
            // markers: true,
            start: '-=200px',
            end: '+=500px',
            onUpdate: self => console.log(self.progress)
        },
        defaults: {
            ease: "linear"
        }
    });
    tl.to(images, {
        x: '0',
        y: '0',
        rotate: '0',
        duration: 0.8
    });

    tl.to(images[3], {
        duration: 0.4,
        width: `193px`,
        height: '290px',
    }, '0.4');
    tl.to(images[4], {
        duration: 0.4,
        width: `193px`,
        height: '136px',
    }, '0.4');

    tl.addLabel('delay', '0.6');
    tl.to(images[0], {
        duration: 0.1,
        height: `98px`,
    }, 'delay+=0.1');

    tl.to(images[3], {
        duration: 0.15,
        borderRadius: '0 60px 0 0',
    }, 'delay-=0.05');
    tl.to(images[4], {
        duration: 0.15,
        borderRadius: '0 0 60px 0',
    }, 'delay-=0.05');
});