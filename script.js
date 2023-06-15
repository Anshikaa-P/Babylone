
window.addEventListener('scroll', function(){

    let navbar = this.document.getElementById('header');
    var span = this.document.querySelector('#anchors span');

    if(window.pageYOffset >= 240){
        navbar.classList.add('sticky');
        span.style.fontSize = "2.5vw";
        span.style.transition = "ease 0.2s"
    }
    else{
        navbar.classList.remove('sticky');
        span.style.fontSize = "0vw";
    }
})


gsap.from("#babylone span",{
    opacity: 0,
    y: 100,
    duration: 1.3,
    delay:0.3,
    stagger: 0.1,
    ease: Power3.easeInOut
}) 
gsap.from("#header",{
    duration: 1,
    opacity: 0,
    delay: 1,
    ease: Power3.easeInOut
})
gsap.from("#two",{
    opacity: 0,
    duration: 1,
    delay: 1,
    ease: Expo.easeInOut
})
gsap.from("#tr1 img",{
    opacity: 0,
    duration: 1,
    delay: 1.1,
    ease: Expo.easeInOut
})
gsap.from("#tleft h1",{
    opacity: 0,
    y: 300,
    duration: 2.5,
    stagger: 0.5,
    delay: 0.3,
    ease: Expo.easeInOut
})
gsap.from("#tr2",{
    opacity: 0,
    y: 300,
    duration: 2.5,
    stagger: 0.5,
    delay: 0.3,
    ease: Expo.easeInOut
})
gsap.to(".home__intro__rocket",{
    y: -450,
    duration: 2.5,
    ease: Power3.easeInOut,
    scrollTrigger: {
        trigger: "#tr2",
        start: "top 90%",
    }
})
gsap.from("#three",{
    opacity:0,
    duration: 1,
    ease: Power3.easeInOut,
    scrollTrigger: {
        trigger: "#three",
        start: "top 90%",
    }
})
gsap.from("#tbtext2 span",{
    y:100,
    stagger:0.1,
    duration: 1,
    opacity:0,
    ease: Power3.easeInOut,
    scrollTrigger: {
        trigger: "#tbtext2 #h1",
        start: "top 90%",
    }
})
gsap.from("#tbtext1",{
    duration: 1,
    opacity:0,
    ease: Power3.easeInOut,
    scrollTrigger: {
        trigger: "#tbtext1",
        start: "top 90%",
    }
})
gsap.from("#tbtext2 p",{
    duration: 1,
    opacity:0,
    ease: Power3.easeInOut,
    scrollTrigger: {
        trigger: "#tbtext2 p",
        start: "top 90%",
    }
})
gsap.from("#ttext span",{
    duration: 1,
    y:100,
    stagger:0.1,
    opacity:0,
    ease: Power3.easeInOut,
    scrollTrigger: {
        trigger: "#ttext span",
        start: "top 90%",
    }
})
gsap.from("#ttext p",{
    duration: 1,
    opacity:0,
    ease: Power3.easeInOut,
    scrollTrigger: {
        trigger: "#ttext p",
        start: "top 90%",
    }
})
gsap.from("#finbox #notre",{
    x:250,
    duration: 1.5,
    ease: Power3.easeInOut,
    scrollTrigger: {
        trigger: "#finbox",
        start: "top 35%",
    }
})
gsap.from("#finbox #equipe",{
    x:-250,
    duration: 1.5,
    ease: Power3.easeInOut,
    scrollTrigger: {
        trigger: "#finbox",
        start: "top 35%",
    }
})
gsap.from("#finbox #p2",{
    x:150,
    duration: 1.5,
    ease: Power3.easeInOut,
    scrollTrigger: {
        trigger: "#finbox",
        start: "top 35%",
    }
})
gsap.from("#finbox #p3",{
    x:-150,
    y:100,
    duration: 1.5,
    ease: Power3.easeInOut,
    scrollTrigger: {
        trigger: "#finbox",
        start: "top 35%",
    }
})
gsap.from("#finbox #p4",{
    x:180,
    y:-130,
    duration: 1.5,
    ease: Power3.easeInOut,
    scrollTrigger: {
        trigger: "#finbox",
        start: "top 35%",
    }
})
gsap.from("#finbox #p5",{
    x:-150,
    y:-70,
    duration: 1.5,
    ease: Power3.easeInOut,
    scrollTrigger: {
        trigger: "#finbox",
        start: "top 35%",
    }
})
gsap.from("#finbox #p6",{
    x:-150,
    duration: 1.5,
    ease: Power3.easeInOut,
    scrollTrigger: {
        trigger: "#finbox",
        start: "top 35%",
    }
})
gsap.from("#finbox p",{
    opacity:0,
    duration: 1,
    ease: Power3.easeInOut,
    scrollTrigger: {
        trigger: "#finbox",
        start: "top 10%",
    }
})