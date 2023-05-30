function applyRandomRotation() {
    var element = document.querySelector(".gr-ellipse-1");
    var rotationX = Math.floor(Math.random() * 360);
    var rotationY = Math.floor(Math.random() * 360);
    var rotationZ = Math.floor(Math.random() * 360);
    element.style.transform = `rotate3d(${rotationX}, ${rotationY}, ${rotationZ}, 0deg)`;
  }
  applyRandomRotation();
let mm = gsap.matchMedia();

gsap.from(".where",1.5,{y:200})
gsap.from(".purpose",1.5,{y:200},1)
gsap.from(".creativity",1.5,{y:200},2)
gsap.from(".discuss-btn",1,{y:200},2.5)

mm.add("(min-width: 1025px)", () => {
gsap.timeline({
    scrollTrigger:{
        trigger:".left-text",
        start: "top 60%",
        end:"+=200",
        // markers: true,
    }
})
.fromTo(".left-p-1",{y:50},{y:0})
.fromTo(".left-p-2",{y:50},{y:0})
.fromTo(".right-p-1",{y:50, opacity:0},{y:0,opacity:1})
.fromTo(".right-p-2",{y:50, opacity:0},{y:0,opacity:1})


gsap.timeline({
    scrollTrigger:{
        trigger:".who-we-are",
        start: "top 20%",
        pin:true,
        end:"+=1200",
        // markers: true,
        scrub:0.5,
    }
})


gsap.timeline({
    scrollTrigger:{
        trigger:".who-we-are",
        start: "top 40%",
        end:"+=1400",
        // markers: true,
        scrub: 1,
    }
})
.fromTo(".who-title-inner",1,{y:100},{y:0})
.fromTo(".who-inner-left",1,{y:100, opacity:0},{y:0, opacity:1})
.fromTo(".who-inner-right",1,{y:100, opacity:0},{y:0, opacity:1})
.fromTo(".who-image",2,{xPercent:-30, opacity:0},{xPercent:0, opacity:1})
.to(".who-inner-left, .who-inner-right",1,{opacity:0})
.to(".who-title-inner",1,{y:100})
.to(".who-image",2,{xPercent:-100,yPercent:20, scale:4})
.to(".who-image",1,{opacity:0})

gsap.timeline({
    scrollTrigger:{
        trigger:".what-we-do",
        start: "top 15%",
        end:"+=600",
        pin:true,
        // markers: true,
        scrub: 0.3,
    }
})

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
// .fromTo(".what-services-flex div",3,{y:100,opacity:0},{y:0,opacity:1,stagger:1})
.fromTo(".what-services-flex div",3,{rotateX:90},{rotateX:0,stagger:1})



gsap.timeline({
    scrollTrigger:{
        trigger:".our-process",
        start: "top 70%",
        end:"+=500",
        // markers: true,
        scrub: 0.3,
    }
})
.fromTo(".process-title-inner",1,{y:100},{y:0})
.fromTo(".gr-process-block",3,{rotateY:90},{rotateY:0,stagger:1})
});

// Function to toggle classes on click
function toggleProcessBlock() {
    const processBlocks = document.querySelectorAll('.gr-process-block');
  
    processBlocks.forEach((block) => {
      block.addEventListener('click', () => {
        // Toggle classes for current block
        gsap.fromTo(
          block.querySelector('.gr-process-digit'),
          { className: 'gr-process-digit' },
          { className: 'gr-process-digit-expand', duration: 0.5, ease: 'power1.easeInOut', overwrite: 'auto' }
        );
        gsap.fromTo(
          block.querySelector('.process-name'),
          { className: 'process-name' },
          { className: 'process-name-expand', duration: 0.5, ease: 'power1.easeInOut', overwrite: 'auto' }
        );
        gsap.fromTo(
          block.querySelector('.process-details-hide'),
          { className: 'process-details-hide' },
          { className: 'process-details-expand', duration: 0.5, ease: 'power1.easeInOut', overwrite: 'auto' }
        );
  
        // Reset classes for other blocks with smooth animations
        processBlocks.forEach((otherBlock) => {
          if (otherBlock !== block) {
            gsap.fromTo(
              otherBlock.querySelector('.gr-process-digit-expand'),
              { className: 'gr-process-digit-expand' },
              { className: 'gr-process-digit', duration: 0.5, ease: 'power1.easeInOut', overwrite: 'auto' }
            );
            gsap.fromTo(
              otherBlock.querySelector('.process-name-expand'),
              { className: 'process-name-expand' },
              { className: 'process-name', duration: 0.5, ease: 'power1.easeInOut', overwrite: 'auto' }
            );
            gsap.fromTo(
              otherBlock.querySelector('.process-details-expand'),
              { className: 'process-details-expand' },
              { className: 'process-details-hide', duration: 0.5, ease: 'power1.easeInOut', overwrite: 'auto' }
            );
          }
        });
      });
    });
  }
  // Call the function to enable click toggling
  toggleProcessBlock();
  