//helper function to toggle hidden status by class name
function toggleNested(parent) {
    var element = document.getElementsByClassName(parent)[0].classList.toggle("hidden");
}

//Get all sub-item nav lists, show clicked element, hide others
function toggleSub(parent, icon) {
    var elements = document.getElementsByClassName("sub-items");
    Array.from(elements).forEach(element => {

        if(!element.classList.contains("hidden") 
            && !element.classList.contains(parent)) {
            element.classList.toggle("hidden");
        }
    });
    toggleNested(parent);
    document.getElementsByClassName(icon)[0].classList.toggle("up");
}

//toggle hamburger icon for mobile menu
function hamburgerToggle(parent) {
    toggleNested(parent);
    var element = document.getElementsByClassName("hamburger")[0].src;

    if(element.endsWith('icon-hamburger.svg')) {
        document.getElementsByClassName("hamburger")[0].src='images/icon-close.svg';
    } else {
        document.getElementsByClassName("hamburger")[0].src='images/icon-hamburger.svg';
    }
}