var section = {
  ABOUT: 1,
  APPROACH: 2,
  SERVICES: 3,
  CONTACT: 4,
  NONE: 5
}
var isMobile = false;

var stickyHeader = document.getElementById("sticky-header");
var logo = document.getElementById("logo");

var about = document.getElementById("about-title");
var approach = document.getElementById("approach-title");
var services = document.getElementById("services-title")
var contact = document.getElementById("contact-title");
var header = document.getElementById("sticky-header");

var titleFadeOffset = 200;
var actualSection = section.NONE;
//Languages Available

//var services = document.querySelector(".text-section-services")


var headerHeight = header.getBoundingClientRect().height;
var overlay = document.getElementsByClassName("overlay");

//Mobile Nav
const burger = document.querySelector('.burger');
const navMenu = document.querySelector('#nav-manager');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links div');
var navTitle = document.querySelector(".nav-title");
var navMenuHeight = navMenu.getBoundingClientRect().height;
//var aboutRect = about.getBoundingClientRect();

function GetNavMenuHeight(){
  //return nav height + value for margin
    return navMenu.getBoundingClientRect().height * 1.5;
 
}
function scrollToAbout() {
 
  window.scrollTo(0, about.offsetTop - GetNavMenuHeight());
  
  dismiss();
}

function scrollToApproach(){
  window.scrollTo(0, approach.offsetTop - GetNavMenuHeight());
  dismiss();
}

function scrollToServices(){
  window.scrollTo(0, services.offsetTop - GetNavMenuHeight());
  dismiss();
}

function scrollToContact(){
  window.scrollTo(0, contact.offsetTop - GetNavMenuHeight());
  dismiss();
}

function dismiss(){
  toggleNavMenu();
}

function toggleNavMenu(){
  //Toggle Nav
  nav.classList.toggle('nav-active');

  //Animate Links
  showNavElements();
}

function showNavElements(){
  navLinks.forEach((link, index)=>{
      
    //if it is already animated
    if(link.style.animation){
      link.style.animation = '';
      transparent(false)
    }
    else{
     
      transparent(true)
      link.style.animation = `fadeIn 0.5s ease-in-out forwards ${index / 25 + 0.25}s`;
    }
  });
}
const navSlide = () => {
  
  burger.addEventListener('click', () => {
    //Toggle Nav
    toggleNavMenu()
   
  });

  

}

//Main

navSlide();
screenWidth = window.screen.width;
window.onscroll = function(ev) {
  
  var yPosition = window.scrollY
  adjustNavTitle(yPosition);
  if(screenWidth < 1000){
    if(yPosition < 500)
    navMenu.style.display = "none";
    else
    navMenu.style.display = "block";
  }
  else{
    navMenu.style.display = "block";
  }
  if ((window.innerHeight + yPosition) >= document.body.offsetHeight) {
      // you're at the bottom of the page
  }
};

function adjustNavTitle(yPosition){
    //Change Title according the position
    
    switch (true) {
      
      //Contact
      case (yPosition > contact.offsetTop + GetNavMenuHeight()):
          if(actualSection != section.CONTACT){   
            navTitle.innerHTML = "Contact"
            actualSection = section.CONTACT
            transparent(false)
          }
      break;
      //Services
      case (yPosition > services.offsetTop + GetNavMenuHeight() && yPosition < contact.offsetTop - titleFadeOffset):  
          if(actualSection != section.SERVICES ){
            navTitle.innerHTML = "Services"
            actualSection = section.SERVICES
            transparent(false)
          }
      break;
      case (yPosition > approach.offsetTop + GetNavMenuHeight() && yPosition < services.offsetTop - titleFadeOffset):  
          if(actualSection != section.APPROACH){
            navTitle.innerHTML = "Mon Approche"
            actualSection = section.APPROACH
            transparent(false)
          }
      break;
      case (yPosition > about.offsetTop + GetNavMenuHeight() && yPosition < approach.offsetTop - titleFadeOffset):  
          if(actualSection != section.ABOUT){
            navTitle.innerHTML = "À Propos de Moi"
            actualSection = section.ABOUT
            transparent(false)
          }
      break;
      default:
        if(actualSection != section.NONE){
          // navTitle.innerHTML = ""
          
          actualSection = section.NONE
          transparent(true)
        }
        break;
    }
  }

  function transparent(value){
    if(value){
      navTitle.classList.add('nav-title-transparent')
    }
    else{
      navTitle.classList.remove('nav-title-transparent')
    }

  }

