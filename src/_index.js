// import file style
import 'assets/style/style.css';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import Flip from "gsap/Flip";

gsap.registerPlugin(ScrollTrigger, Flip);
const images = gsap.utils.toArray(".box");
const image = document.querySelector('.right');
//
// let state = Flip.getState([images]);
// image.classList.toggle("en d-state");
// const flip = Flip.from(state, {});
//
// ScrollTrigger.create({
//     trigger: document.querySelectorAll(".wrapper"),
//     start: "+=300px",
//     end: "",
//     pin: true,
//     scrub: true,
//     markers: true,
//     animation:flip
// });


//

images.forEach(img => {
    img.firstElementChild.style.width = `${img.getBoundingClientRect().width}px`;
    img.firstElementChild.style.height = `${img.getBoundingClientRect().height}px`;
});


const obj = [
    {
        transform: 'rotateZ(20deg) translateY(-150px)'
    },
    {
        transform: 'rotateZ(-15deg) translateY(-300px) translateX(300px)'
    },
    {
        transform: 'rotateZ(-18deg) translateY(-550px) translateX(200px)'
    },
    {
        transform: 'rotateZ(-20deg) translateY(-300px)',
        borderRadius: 'unset'
    },
    {
        transform: 'rotateZ(20deg) translateY(-500px) translateX(-300px)',
        borderRadius: 'unset'
    }
];

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: document.querySelector('.wrapper'),
        pin: true,
        scrub: 1,
        markers: true,
        start: '+=600px',
        onUpdate: self => {
            console.log(self.progress);
        }
    }
});
tl.addLabel('delay');
tl.to(images, {
    x: '0',
    y: '0',
    rotate: '0',
});
tl.to(images[0], {
    duration: 0.3,
    height: `${images[0].getBoundingClientRect().height * 0.45}`
}, 'delay+=0.3');
tl.to(images[3], {
    duration: 0.3,
    width: `${images[3].getBoundingClientRect().width * 0.8}`
}, 'delay+=0.3');

tl.to(images[3], {
    duration: 0.3,
    borderRadius: '0 60px 0 0'
}, 'delay+=0.3');
tl.to(images[4], {
    duration: 0.3,
    borderRadius: '0 0 60px 0'
}, 'delay+=0.3');