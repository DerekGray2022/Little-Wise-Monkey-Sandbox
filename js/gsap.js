gsap.registerPlugin(ScrollTrigger);

//      onLoad Animation
let tl = gsap.timeline()
.to('#header', { opacity: 1, y: 100, duration: 2, ease: 'inOut' })
.to('#about', { opacity: 1, x: 200, ease: "elastic", duration: 3 })
.to('#employment', { opacity: 1, x: 200, ease: "elastic", duration: 3 }, "-=2.5")
.to('#projects', { opacity: 1, x: 200, ease: "elastic", duration: 3 }, "-=2.5")
.to('.intro', {opacity: 1, y: -50, duration: 2 }, "-=2.5") 
.to('#arrow', {opacity: 0.25, duration: 2}, "-=1")



//      Scroll Animation
ScrollTrigger.matchMedia({

    //      GALAXY FOLD SCREENS
    "(max-width: 320px)": () => {
        //      Scroll down to Page Two
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".div2",
                markers: true,
                start: "top 90%",
                end: "top top",
                scrub: 4,
                pin: true,
                isTouch: 2
            }
        });
        //      Intro Paragraph
        tl.to('.intro p', {
            y: 350,
            x: -20,
            duration: 3,
            ease: "ease-out",
            color: "#a9029e",
            width: "80vw",
        })
        //      About Header
        .to('.div1 h1', { opacity: 1, duration: 3, ease: "ease-in-out" })
        //      Arrow
        .to('#arrow', { y: window.innerHeight, duration: 5 }, "-=2")
        //      About Extra Paragraphs
        .to('.hidden-xsm', { opacity: 1, duration: 2 });
    },

    //      IPHONE + ABOVE
    "(min-width: 321px)": () => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".div2",
                // markers: true,
                start: "top 90%",
                end: "top top",
                scrub: 10,
                pin:true,
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
        .to('.div3 h1', { opacity: 1, duration: 4, ease: "ease-in-out" }, "-=3")
        .to('#arrow', { y: window.innerHeight, duration: 5 }, "-=2")
        .to('.hidden-xsm', { opacity: 1, duration: 2, ease: "ease-in-out" }, "-=4")
        .to('.hidden-sm', { display: "block", opacity: 1, duration: 2, ease: "ease-in-out" }, "-=4");
    }
})




