gsap.registerPlugin(ScrollTrigger);

//      onLoad Animation
let tl = gsap.timeline();
tl.to('#header', { opacity: 1, y: 100, duration: 2, ease: 'inOut' });
tl.to('#about', { opacity: 1, x: 200, ease: "elastic", duration: 3 });
tl.to('#employment', { opacity: 1, x: 200, ease: "elastic", duration: 3 }, "-=2.5");
tl.to('#projects', { opacity: 1, x: 200, ease: "elastic", duration: 3 }, "-=2.5");
tl.to('.intro', { opacity: 1, y: -50, duration: 2 }, "-=2.5")
tl.to("#arrow", { opacity: 0.75, y: window.innerHeight - 10, duration: 3 }, "-=3")


//      Scroll Animation
ScrollTrigger.matchMedia({

    //      Galaxy Fold
    "(max-width: 320px)": () => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".div2",
                // markers: true,
                start: "top 100%",
                end: "top top",
                scrub: 10,
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
            textAlign: "justify"
        })
        .to('.div3 h1', {opacity: 1, duration: 4, ease: "ease-in-out"})
        .to('.hidden-xsm', { opacity: 1, duration: 4, ease: "ease-in-out" },"-=3")
        .to(".title", { fontSize: "1rem", color: "#a9029e", duration: 4 }, "-=2")
        .to("#arrow", { y: ((window.innerHeight * 2) - 10), duration: 6, opacity: 1, ease: "ease-in-out" }, "-=6")
        .to("#arrow polygon", { stroke: "#a9029e", strokeWidth: 4 }, "-=4")
    },

    //      iPhone & Above
    "(min-width: 321px)": () => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".div2",
                // markers: true,
                start: "top 90%",
                end: "top top",
                scrub: 10,
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
            fontSize: "1rem"
        })
        .to(".title", { fontSize: "1rem", duration: 4 })
        .to('.div3 h1', {opacity: 1, duration: 4, ease: "ease-in-out"}, "-=6")
        .to('.hidden-xsm', { opacity: 1, duration: 4, ease: "ease-in-out" },"+=1")
        .to('.hidden-sm', { display: "inherit", opacity: 1, duration: 4, ease: "ease-in-out" },"+=2")
        .to("#arrow", { y: ((window.innerHeight * 2) - 10), duration: 6, ease: "ease-in-out" }, "-=6")
        .to("#path", { stroke: "#a9029e" })
    }
})




