// **** update copyright year functionality
// ********************************************
const copyrightYear = document.getElementById('js-update-year');
/*  
** get theCurrentYear date using getFullYear() js function
** insert theCurrentYear into copyrightYear span
*/
const theCurrentDate = new Date();
const theCurrentYear = theCurrentDate.getFullYear();
copyrightYear.textContent = theCurrentYear;


// **** scroll to top functionality
// ********************************************
const scrollToTopBtn = document.querySelector('.js-scroll-up-btn');
const navbarLink = document.querySelector('.js-c-nav-link');
/* 
** listen to scroll event through window
** if user scroll more than 1000px 
** then show the scrollToTopBtn
** else hide it
*/
window.addEventListener('scroll', () => {
  if (window.scrollY > 1000) {
    scrollToTopBtn.classList.add('scroll-up-btn--show');
  } else {
    scrollToTopBtn.classList.remove('scroll-up-btn--show');
  }
});

/* 
** listen to click event for scrollToTopBtn
** if user scroll click it
** then scroll to top 0 (top of window)
*/
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});


// **** close collapse navbar functionality
// ********************************************
const navBarCollapse = document.querySelector('.js-navbar-collapse');
/*
** listen to click event for navBarCollapse
** collapse navbar on small screens when click on any link inside it
*/
navBarCollapse.addEventListener('click', (e) => {
    if (e.target.nodeName.toLowerCase() === 'a') {
    navBarCollapse.classList.remove('show');
    }
});


// **** scrollspy functionality
// ********************************************
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.js-c-nav-link');
// scrollspy to active navbar link of the current section
/*
** clientHeight section height including padding only
** offsetTop coordinates relative to the upper-left edge of offsetParent
** window.scrollY number of pixels that the document is currently scrolled vertically
** window.scrollY number of pixels that the document is currently scrolled vertically
*/
window.addEventListener('scroll', () => {
  let currentSectionId = 'hero';
  /*
  ** need to know the current section
  ** condition checks if the user 
  ** has scrolled past this threshold point 
  ** (the one-third point of the section)
  ** if true get current section id
  */
  sections.forEach((section) => {
    const sectionHeight = section.clientHeight;
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - sectionHeight / 3 ) {
      currentSectionId = section.getAttribute('id');
    }
  });

  /*
    ** remove active class from previous section
    ** get href attr for every navLink
    ** add .active to the navLink
    ** if it's href === currentSectionId
    */
  navLinks.forEach((navLink) => {
    navLink.classList.remove('active');
    const hrefNavLink= navLink.getAttribute('href').substring(1);
    if(currentSectionId === hrefNavLink) {
      navLink.classList.add('active');
    }
  })

});