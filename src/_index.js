import 'assets/style/style.css';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import {Linear} from 'gsap';

gsap.registerPlugin(ScrollTrigger);

window.addEventListener('load', () => {

    const images = gsap.utils.toArray(".box");
    const img = images[0];
    img.firstElementChild.style.width = `${img.getBoundingClientRect().width}px`;
    img.firstElementChild.style.height = `${img.getBoundingClientRect().height}px`;

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: document.querySelector('.wrapper'),
            // pin: true,
            scrub: true,
            markers: true,
            start: '+=200px',
            end: '+=400px',
        },
        ease: "none"
    });
    tl.addLabel('delay');
    tl.to(images, {
        x: '0',
        y: '0',
        rotate: '0',
        ease: "none"
    });
    tl.to(images[0], {
        height: `98px`,
        ease: "none"
    }, 'delay+=0.35');
    tl.to(images[3], {
        width: `193px`,
        height: '290px',
        borderRadius: '0 60px 0 0',
        ease: "none"
    }, 'delay+=0.35');
    tl.to(images[4], {
        width: `193px`,
        height: '136px',
        borderRadius: '0 0 60px 0',
        ease: "none"
    }, 'delay+=0.35d');
});