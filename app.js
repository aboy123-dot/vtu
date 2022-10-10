const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    //Toggle Nav
    burger.addEventListener('click', ()=>{
      nav.classList.toggle('nav-active');
      
      //Animate Links
      navLinks.forEach((link, index)=>{
        if(link.style.animation){
          link.style.animation = ''
        }else{
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
  
        }
      });
      
      //burger animation
      burger.classList.toggle('toggle');
      
      
    });
    
    
    
    
  }
  
  navSlide();

let slide = 0;
slides()
function slides(){
  let i;
 let sliding = document.getElementsByClassName('cards')
  for(i=0; i < sliding.length; i++){
    sliding[i].style.display =
    "none"
  }slide++
  if(slide > sliding.length){
    slide = 1
  }
    sliding[slide -1].style.display ="block"
    setTimeout(slides, 2000)

  
 

}