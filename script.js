//helper function to toggle hidden status by class name
function toggleNested(parent) {
    document.getElementsByClassName(parent)[0].classList.toggle("hidden");
}

//Get all sub-item nav lists, show clicked element, hide others
function toggleSub(parent, icon) {
    var elements = document.getElementsByClassName("sub-items");
    var icons = document.getElementsByClassName("arrow");
    Array.from(elements).forEach(element => {

        if(!element.classList.contains("hidden") 
            && !element.classList.contains(parent)) {
            element.classList.toggle("hidden");
            var icon2 = element.classList[1] + "-icon";
            document.getElementsByClassName(icon2)[0].classList.remove("up");
            document.getElementsByClassName(icon2)[1].classList.remove("up");
        }
    });

     toggleNested(parent);
     document.getElementsByClassName(icon)[0].classList.toggle("up");
     document.getElementsByClassName(icon)[1].classList.toggle("up");
}

//hide all nav sub-menu's when clicked away from
document.onclick = function(e){
  if(!e.target.classList.contains('sub-items') && !e.target.classList.contains('arrow') && !e.target.parentNode.classList.contains('head-item')){
      var sub = document.getElementsByClassName("sub-items");
      Array.from(sub).forEach(element => {
          element.classList.add("hidden");
          var icon2 = element.classList[1] + "-icon";
          document.getElementsByClassName(icon2)[0].classList.remove("up");
          document.getElementsByClassName(icon2)[1].classList.remove("up");
      });
  }
};

//toggle hamburger icon for mobile menu
function hamburgerToggle() {

    var navStatus = getComputedStyle(document.querySelector('.links'));
    console.log(navStatus.display);

    if(navStatus.display == "none") {
        document.getElementsByClassName("links")[0].style.display = "flex";
    } else {
        document.getElementsByClassName("links")[0].style.display = "none";
    }

    var element = document.getElementsByClassName("hamburger")[0].src;

    if(element.endsWith('icon-hamburger.svg')) {
        document.getElementsByClassName("hamburger")[0].src='images/icon-close.svg';
    } else {
        document.getElementsByClassName("hamburger")[0].src='images/icon-hamburger.svg';
    }
}

//listen for window resize event
window.addEventListener('resize', function(event){

    if (this.window.innerWidth > 1200) {
        document.getElementsByClassName("links")[0].style.display = "flex";
    } else {
        document.getElementsByClassName("links")[0].style.display = "none";
        document.getElementsByClassName("hamburger")[0].src='images/icon-hamburger.svg';
    }
});