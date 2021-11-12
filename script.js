document.addEventListener('DOMContentLoaded', function() {





//  const nameInput = document.querySelector('[name="name"]');

//   nameInput.addEventListener('invalid', () => {
//   nameInput.setCustomValidity('Please enter a valid name.');
//  });


//  const emailInput = document.querySelector('[email="email"]');

//  emailInput.addEventListener('invalid', () => {
//  emailInput.setCustomValidity('Please enter a valid email.');
//  });

//  const form = document.getElementById("form");

//  form.addEventListener("submit", (e) => {

//    e.preventDefault();

//    console.log("FORM SUBMITTED");

//  });









  gsap.registerPlugin(ScrollTrigger);

  gsap.from("header", {duration: 0.8, opacity:0, yPercent:50 });

  gsap.to(".hero .heading", {
    scrollTrigger: {
      scroller: ".container",
      trigger: ".wrapper",
      start: 'top',
      end:'bottom',
      toggleActions: 'play reverse play reverse'
    },
  delay:0.4, duration:1, opacity:0, yPercent:-50
  });

  gsap.from(".hero .heading", {delay:0.4, duration:1, opacity:0, yPercent:-50 });

  gsap.to(".role", {
    scrollTrigger: {
      scroller: ".container",
      trigger: ".hero",
      start: 'top',
      end:'bottom',
      toggleActions: 'play reverse play reverse'
    },
  delay:0.4, duration:1, opacity:0, yPercent:50
  });

  gsap.from(".role", {delay:0.4, duration:1, opacity:0, yPercent:50 });

  gsap.to(".presentation", {
    scrollTrigger: {
      scroller: ".container",
      trigger: ".hero",
      start: 'top',
      end:'bottom',
      toggleActions: 'play reverse play reverse'
    },
  delay:0.4, duration:1, opacity:0, yPercent:50
  });

  gsap.from(".presentation", {delay:0.4, duration:1, opacity:0, yPercent:50 });

  gsap.from(".skills .heading", {
    scrollTrigger: {
      scroller: ".container",
      trigger: ".skills",
      start: 'top 1%',
      end:'2%',
      toggleActions: 'play reverse play reverse'
    },
  delay:0.4, duration:1, opacity:0, yPercent:-50
  });




  gsap.from(".skills-container", {
    scrollTrigger: {
      scroller: ".container",
      trigger: ".skills",
      start: 'top 1%',
      end:'2%',

      toggleActions: 'play reverse play reverse'
    },
  delay:0.4, duration:1, opacity:0, yPercent:50
  });

  gsap.from(".projects .heading", {
    scrollTrigger: {
      scroller: ".container",
      trigger: ".projects",
      start: 'top 1%',
      end:'1%',

      toggleActions: 'play reverse play reverse'
    },
  delay:0.4, duration:1, opacity:0, yPercent:-50
  });



  gsap.from(".projects-container", {
    scrollTrigger: {
      scroller: ".container",
      trigger: ".projects",
      start: 'top 1%',
      end:"1%",

      toggleActions: 'play reverse play reverse'
    },
  delay:0.4, duration:1, opacity:0, yPercent:50
  });

  gsap.from(".contacts .heading", {
    scrollTrigger: {
      scroller: ".container",
      trigger: ".contacts",
      start: 'top 1%',
      end:'bottom',

      toggleActions: 'play reverse play reverse'
    },
  delay:0.4, duration:1, opacity:0, yPercent:-50
  });

  gsap.from(".contacts-container", {
    scrollTrigger: {
      scroller: ".container",
      trigger: ".contacts",
      start: 'top 1%',
      end:'bottom',

      toggleActions: 'play reverse play reverse'
    },
  delay:0.4, duration:1, opacity:0, yPercent:50
  });







});
