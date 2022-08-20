//Navbar Fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav + 58){
        header.classList.add('navbar-fixed');
    }
    else{
        header.classList.remove('navbar-fixed');
    }
}
//Header Background Fixed
window.onresize = function(){
    const header = document.querySelector('header');
    const hamburger = document.querySelector('#hamburger');

    if (window.innerWidth > 720){

        header.classList.remove('header-active');
    }
    else if(hamburger.classList.contains('hamburger-active')){
        header.classList.add('header-active');

    }

}
// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
let menuList = document.querySelectorAll('a.menu-list');
const header = document.querySelector('header');


hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
    header.classList.toggle('header-active');
});

for(const element of menuList){
    element.addEventListener('click', function(){
        if(hamburger.style.display == 'none'){
            return;
        }
        hamburger.classList.toggle('hamburger-active');
        navMenu.classList.toggle('hidden');
    });
}

//Horizontal Scroll
window.addEventListener("load", function(e) {
    var container = document.querySelector(".xScroll");
    var middle = container.children[Math.floor((container.children.length - 1) / 2)];
    container.scrollLeft = middle.offsetLeft +
      middle.offsetWidth / 2 - container.offsetWidth / 2;
  });

//Navbar Href position fix
$(function() {
    // Desired offset, in pixels
    var refOffset = -57;
    // Desired time to scroll, in milliseconds
    var scrollTime = 300;

    $('a[href^="#"]').click(function() {
        // Need both `html` and `body` for full browser support
        $("html, body").animate({
            scrollTop: $( $(this).attr("href") ).offset().top + refOffset 
        }, scrollTime);

        // Prevent the jump/flash
        return false;
    });
});


