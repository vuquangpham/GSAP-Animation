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
            markers: true,
            start: '0',
            end: '+=300px',
        },
        defaults: {
            ease: "linear"
        }
    });
    tl.to(images, {
        x: '0',
        y: '0',
        rotate: '0',
    });

    tl.addLabel('delay', '-=0.15');
    tl.to(images[0], {
        height: `98px`,
    }, 'delay');
    tl.to(images[3], {
        width: `193px`,
        height: '290px',
        borderRadius: '0 60px 0 0',
    }, 'delay');
    tl.to(images[4], {
        width: `193px`,
        height: '136px',
        borderRadius: '0 0 60px 0',
    }, 'delay');
});