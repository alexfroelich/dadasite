var section = {
  ABOUT: 1,
  APPROACH: 2,
  SERVICES: 3,
  CONTACT: 4,
  NONE: 5
}

var mobileWidth = 1200;
var isMobile = false;

var stickyHeader = document.getElementById("sticky-header");
var logo = document.getElementById("logo");
//Burger lines
var line1 = document.getElementById("line1");
var line2 = document.getElementById("line2");
var line3 = document.getElementById("line3");
//Menu Sections
var menuAbout = document.getElementById("menu-about");
var menuApproach = document.getElementById("menu-approach");
var menuServices = document.getElementById("menu-services");
var menuContact = document.getElementById("menu-contact");
//Sections
var about = document.getElementById("about-title");
var approach = document.getElementById("approach-title");
var services = document.getElementById("services-title")
var contact = document.getElementById("contact-title");
var header = document.getElementById("sticky-header");
var navEmptySpace = document.querySelector(".empty-space")
var titleFadeOffset = 200;
var actualSection;
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
screenWidth = window.screen.width;

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
  if(screenWidth <= mobileWidth)
    toggleNavMenu();
}

function toggleNavMenu(){
  //Toggle Nav
  nav.classList.toggle('nav-active');
  line1.classList.toggle('rotation1');
  line2.classList.toggle('rotation2');
  line3.classList.toggle('rotation3');
  //Animate Links
  showNavElements();
}

function showNavElements(){
  navLinks.forEach((link, index)=>{
      
    //if it is already animated
    if(link.style.animation){
      link.style.animation = '';
      transparent()
    }
    else{
     
      navTitle.classList.add('nav-title-transparent')
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
var navY = navEmptySpace.offsetTop


window.onscroll = function(ev) {
  
  var yPosition = window.scrollY
 console.log("Y scroll: " + yPosition);
 

  if(screenWidth <= mobileWidth){
    adjustNavTitle(yPosition);

    // if(yPosition < about.offsetTop + GetNavMenuHeight())
    // navMenu.style.display = "block";
    // else
    // navMenu.style.display = "block";
  }
  else{
    navMenu.style.display = "block";
    //console.log("Nav" + navEmptySpace.offsetTop)
   
    if(yPosition >= navY ){
       navMenu.classList.add("shadow");
       navMenu.classList.add("fixed");
      // navMenu.classList.add("fixed");
      // navMenu.classList.remove("sticky");
    }
    else{
       navMenu.classList.remove("shadow");
       navMenu.classList.remove("fixed");
      // navMenu.classList.add("sticky");
    }
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
            transparent()
          }
      break;
      //Services
      case (yPosition > services.offsetTop + GetNavMenuHeight() && yPosition < contact.offsetTop - titleFadeOffset):  
          if(actualSection != section.SERVICES ){
            navTitle.innerHTML = "Services"
            actualSection = section.SERVICES
            transparent()
          }
      break;
      case (yPosition > approach.offsetTop + GetNavMenuHeight() && yPosition < services.offsetTop - titleFadeOffset):  
         
      if(actualSection != section.APPROACH){
            navTitle.innerHTML = "Mon Approche"
            actualSection = section.APPROACH
            
            transparent()
          }
      break;
      case (yPosition > about.offsetTop + GetNavMenuHeight() && yPosition < approach.offsetTop - titleFadeOffset):  
          if(actualSection != section.ABOUT){
            navTitle.innerHTML = "À Propos de Moi"
            actualSection = section.ABOUT
            transparent()
          }
      break;
      default:
        if(actualSection != section.NONE){
          //  navTitle.innerHTML = ""
          
          actualSection = section.NONE
          transparent()
        }
        break;
    }
  }

  function transparent(){
    if(actualSection == section.NONE){
      navTitle.classList.add('nav-title-transparent')
    }
    else{
      navTitle.classList.remove('nav-title-transparent')
    }

  }

