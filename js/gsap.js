gsap.registerPlugin(ScrollTrigger);

//      onLoad Animation
let tl = gsap.timeline();
tl.to('#header', { opacity: 1, y: 100, duration: 2, ease: 'inOut' });
tl.to('#about', { opacity: 1, x: 200, ease: "elastic", duration: 3 });
tl.to('#employment', { opacity: 1, x: 200, ease: "elastic", duration: 3 }, "-=2.5");
tl.to('#projects', { opacity: 1, x: 200, ease: "elastic", duration: 3 }, "-=2.5");
tl.to('.intro', { opacity: 1, y: -50, duration: 2 }, "-=2.5");


//      Scroll Animation
ScrollTrigger.matchMedia({

    "(max-width: 320px)": () => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".div2",
                // markers: true,
                start: "top 90%",
                end: "top top",
                scrub: 4,
                isTouch: 2
            }
        });
        tl.to('.intro p', {
            y: 350,
            x: -20,
            duration: 5,
            ease: "ease-out",
            color: "#a9029e",
            width: "80vw",
        })
        .to('.hidden-xsm', { opacity: 1, duration: 4 })
        .to('.div1 h1', {opacity: 1, duration: 8, ease: "ease-in-out"})
    },

    "(min-width: 321px)": () => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".div2",
                // markers: true,
                start: "top 90%",
                end: "top top",
                scrub: 4,
                isTouch: 2
            }
        });
        tl.to('.intro p', {
            y: 350,
            x: -20,
            duration: 5,
            ease: "ease-in-out",
            color: "#a9029e",
            width: "80vw",
        })
        .to('.hidden-xsm', { opacity: 1, duration: 4, ease: "ease-in-out" },"+=4")
        .to('.hidden-sm', { display: "block",opacity: 1, duration: 4, ease: "ease-in-out" },"+=4")
        .to('.div3 h1', {opacity: 1, duration: 8, ease: "ease-in-out"})
    }
})




