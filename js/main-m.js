mm.add("(max-width: 767px)", () => {
    gsap.timeline({
        scrollTrigger:{
            trigger:".left-text",
            start: "top 30%",
            end:"+=200",
            // markers: true,
        }
    })
    .fromTo(".left-p-1",1,{y:200},{y:0})
    .fromTo(".left-p-2",1,{y:200},{y:0})
    .fromTo(".right-p-1",1,{y:50, opacity:0},{y:0,opacity:1})
    .fromTo(".right-p-2",1,{y:50, opacity:0},{y:0,opacity:1})
    
    
    gsap.timeline({
        scrollTrigger:{
            trigger:".who-image",
            start: "center center",
            pin:true,
            end:"+=300",
            // markers: true,
            scrub:0.5,
        }
    })

    gsap.timeline({
        scrollTrigger:{
            trigger:".who-we-are",
            start: "top 60%",
            end:"+=700",
            // markers: true,
            scrub: 1,
        }
    })
    .fromTo(".who-title-inner",1,{y:100},{y:0})
    .fromTo(".who-inner-left",1,{y:100, opacity:0},{y:0, opacity:1})
    .fromTo(".who-inner-right",1,{y:100, opacity:0},{y:0, opacity:1})
    
    // gsap.timeline({
    //     scrollTrigger:{
    //         trigger:".what-we-do",
    //         start: "top 15%",
    //         end:"+=600",
    //         pin:true,
    //         // markers: true,
    //         scrub: 0.3,
    //     }
    // })
    
    gsap.timeline({
        scrollTrigger:{
            trigger:".what-we-do",
            start: "top 70%",
            end:"+=900",
            // markers: true,
            scrub: 0.3,
        }
    })
    .fromTo(".what-title-inner",1,{y:100},{y:0})
    .fromTo(".what-services-flex div",3,{rotateX:90},{rotateX:0,stagger:1})
    
    
    gsap.timeline({
        scrollTrigger:{
            trigger:".our-process",
            start: "top 60%",
            end:"+=500",
            // markers: true,
            scrub: 0.3,
        }
    })
    .fromTo(".process-title-inner",1,{y:100},{y:0})
    .fromTo(".gr-process-block",3,{rotateY:90,rotateX:-90},{rotateY:0,rotateX:0,stagger:1})

    });