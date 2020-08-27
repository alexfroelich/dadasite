
var isMobile = false;

var stickyHeader = document.getElementById("sticky-header");
var logo = document.getElementById("logo");

var about = document.getElementById("about-title");
var approach = document.getElementById("approach");
var services = document.getElementById("services");
var contact = document.getElementById("contact");
var header = document.getElementById("sticky-header");

var headerHeight = header.getBoundingClientRect().height;
var overlay = document.getElementsByClassName("overlay");
//var aboutRect = about.getBoundingClientRect();
function scrollToAbout() {
  window.scrollTo(0, about.offsetTop - headerHeight);
  dismiss();
}

function scrollToApproach(){
  window.scrollTo(0, approach.offsetTop - headerHeight);
  dismiss();
}

function scrollToServices(){
  window.scrollTo(0, services.offsetTop - headerHeight);
  dismiss();
}

function scrollToContact(){
  window.scrollTo(0, contact.offsetTop - headerHeight);
  dismiss();
}

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
console.log(navLinks)
  
  burger.addEventListener('click', () => {
    //Toggle Nav
    nav.classList.toggle('nav-active');

    //Animate Links
    navLinks.forEach((link, index)=>{
      
      //if it is already animated
      if(link.style.animation){
        link.style.animation = '';
      }
      else{
       
        
        link.style.animation = `fadeIn 0.5s ease forwards ${index / 5 + 0.5}s`;
      }
    });

  });

  

}


navSlide();
screenWidth = window.screen.width;
window.onscroll = function(ev) {
  
  const nav = document.querySelector('#nav-manager');
  if(screenWidth < 1000){
    if(window.scrollY < 500)
      nav.style.display = "none";
    else
      nav.style.display = "block";
  }
  else{
    nav.style.display = "block";
  }
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      // you're at the bottom of the page
  }
};
