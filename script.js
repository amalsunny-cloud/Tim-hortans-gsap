document.addEventListener('DOMContentLoaded', function() {

var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "0% 95%",
    end: "50% 50%",
    scrub: true,
}})

tl.to("#fanta",{
    top: "120%",
    left: "0%"
}, 'center-image-main-main')


tl.to("#center-image-main",{
  
    opacity:0,
}, 'center-image-main')


tl.to("#spindrift_lime",{
    top:"135%",
    rotate: "360deg",
    left: "3.5%",
    scale:1.6,
}, 'center-image-main')

var tltim = gsap.timeline({scrollTrigger:{
    trigger:"#Tim_Hortons_head",
    start: "top 50%",
    end: "0% 10%",
    scrub: true,
}});


tltim.to("#Tim_Hortons_head",{
    top:"80%",
    rotate: "0deg",
    left: "98%",
    width: "43%",
    duration:0.5,
})

var tl22 = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "0% 95%",
    end: "0% 10%",
    scrub: true,
}})

tl22.to("#turkeybaconcheddar",{
    top:"141%",
    rotate: "0deg",
    left: "18%",
    opacity:1,
}, 'center-image-main-main')



var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "top 40%",
    end: "bottom 140%",
    scrub: true,
}})

tl2.from(".lemon1",{
    rotate: "-90deg",
    left: "-100%",
    top: "110%",
    duration: 3,
}, 'ca')


tl2.from(".lemon2",{
    rotate: "90deg",
    left: "100%",
    top: "110%"
}, 'ca')



tl2.to("#fanta",{
    width:"35%",
    top: "210%",
    left: "33%",
}, 'ca')


    var tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".three",
            start: "top 68%",
            end: "bottom 125%",
            scrub: true,
            ease: "power2.inOut",
        }
    });

    tl3.to("#sandwich", {
        width: "20%",
        left: "40%",
        top: "238%",
        duration: 2,

    });

    tl3.to("#iced_coffee", {
        rotation: "0deg",
        top: "10%",
        left: "50%",
        duration: 2,

    }, 0);

    tl3.to("#cold_brew_pumpkin", {
        rotation: "0deg",
        top: "-20%",
        left: "50%",
        duration: 2,

    }, 0);

    var tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: ".three-half",
            start: "top 60%",
            end: "bottom 157%",
            scrub: true,
            ease: "power2.inOut",

        }    
    });

    tl4.to("#cocacola", {
        rotation: 0,
        top: "0%",
        left: "50%",
        duration: 2,

    }, 0); 


    tl4.to("#Cocktail-Ice-Drink", {
        width: "115%",
        top: "-17%",
        left: "51%",
        duration: 2,
    }, 0);


    tl4.to("#ChickenWrapBurgerKing", {
        rotation: "0deg",
        top: "0%",
        left: "51%",
        duration: 2,
    }, 0);



gsap.to("#scale-image", {
    scrollTrigger: {
        trigger: ".four",
        start: "top 23%", 
        end: "bottom 120%", 
        scrub: true, 
    },
    scale: 1.3, 
    ease: "power1.inOut",
});


anime({
    targets: '.fillLine',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutQuad',
    duration: 1000,
    delay: 500,
    direction: 'alternate',
    loop: true
  });

  anime({
    targets: '.circleFill',
    translateX: -220,
    translateY: 220,
    easing: 'easeInOutQuad',
    duration: 2000,
    delay: 1500,
    direction: 'alternate',
    loop: true
  });

  anime({
    targets: '.core',
    scale: [0, 1],
    easing: 'easeOutElastic(1, .8)',
    duration: 800,
    delay: 2000,
    direction: 'alternate',
    loop: true
  });

  anime({
    targets: '.stalk',
    scale: [0, 1],
    easing: 'easeOutElastic(1, .8)',
    duration: 1000,
    delay: 2500,
    direction: 'alternate',
    loop: true
  });

  anime({
    targets: '.leaf',
    scale: [0, 1],
    rotate: 23,
    easing: 'easeOutElastic(1, .8)',
    duration: 1500,
    delay: 3000,
    direction: 'alternate',
    loop: true
  });


  gsap.to('.reveal-text', {
    y: 3,
    opacity: 1,
    duration: 3,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '.reveal-text',
        start: 'top 40%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
    }
});
  gsap.to('.now-earn-head', {
    y: 3,
    opacity: 1,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '.now-earn-head',
        start: 'top 50%',
        end: 'bottom 20%',
        toggleActions: 'restart none none reverse'
    }
});
  gsap.to('.now-earn-para', {
    y: 3,
    opacity: 1,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '.now-earn-head',
        start: 'top 50%',
        end: 'bottom 20%',
        toggleActions: 'restart none none reverse'
    }
});


  gsap.to('.four-rght h4', {
    y: 3,
    opacity: 1,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '.four-rght h4',
        start: 'top 70%',
        end: 'bottom 20%',
        scrub:true,
    }
});
  gsap.to('.four-rght p', {
    y: 3,
    opacity: 1,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '.four-rght p',
        start: 'top 100%',
        end: 'bottom 20%',
        scrub:true,
    }
});


const etherealImages = gsap.utils.toArray('.ephemeral-visage');

etherealImages.forEach((visage, index) => {

    gsap.to(visage, {
        opacity: 1,
        duration: 12, 
        ease: 'power2.inOut',
        scrollTrigger: {
            trigger: '.zephyr-scroll-container',
            start: () => `${index * 150}% top`, 
            end: () => `${(index + 1) * 40}% top`, 
            scrub: 1,
            toggleActions: 'play none none reverse'
        }
    });

    if (index < etherealImages.length - 1) {
        gsap.to(visage, {
            opacity: 0,
            duration: 1,
            ease: 'power2.inOut',
            scrollTrigger: {
                trigger: '.zephyr-scroll-container',
                start: () => `${(index + 1) * 150}% top`, 
                end: () => `${(index + 2) * 40}% top`, 
                scrub: 1,
                toggleActions: 'play none none reverse'
            }
        });
    }
});


        gsap.to('#app-land', {
            opacity: 1,
            duration: 2,
            ease: 'power2.inOut',
            scrollTrigger: {
                trigger: '.tim-app',
                start: 'top 140%',
                end: 'bottom 45%',
                scrub: true,
                toggleActions: 'play none none reverse'
            }
        });




        const products = document.querySelectorAll('.product');
        const totalDuration = 18; 
        const sectionDuration = totalDuration / products.length;
        
        products.forEach((product, index) => {
            gsap.fromTo(product, 
                { opacity: 0 },
                {
                    opacity: 1,
                    duration: sectionDuration,
                    ease: 'power2.inOut',
                    scrollTrigger: {
                        trigger: '.scroll-container',
                        start: () => `${index * 80}% top`, 
                        end: () => `${index * 80 + 40}% top`, 
                        scrub: 2, 
                        toggleActions: 'play none none reverse',
                    }
                }
            );
        
            if (index < products.length - 1) {
                gsap.to(product, {
                    opacity: 0,
                    duration: sectionDuration,
                    ease: 'power2.inOut',
                    scrollTrigger: {
                        trigger: '.scroll-container',
                        start: () => `${(index + 1) * 80 - 20}% top`, 
                        end: () => `${(index + 1) * 80 + 20}% top`, 
                        scrub: 2,
                        toggleActions: 'play none none reverse',
                    }
                });
            }
        });

    });




   






