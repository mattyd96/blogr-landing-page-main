function toggleNested(parent) {
    console.log("clicked");
    var element = document.getElementsByClassName(parent)[0].classList.toggle("hidden");
    console.log(element);
}

function hamburgerToggle(parent) {
    toggleNested(parent);
    var element = document.getElementsByClassName("hamburger")[0].src;
    console.log(element);

    if(element.endsWith('icon-hamburger.svg')) {
        document.getElementsByClassName("hamburger")[0].src='images/icon-close.svg';
    } else {
        document.getElementsByClassName("hamburger")[0].src='images/icon-hamburger.svg';
    }
}

function toggleSub(parent, icon) {
    toggleNested(parent);
    console.log(document.getElementsByClassName(icon)[0])
    document.getElementsByClassName(icon)[0].classList.toggle("up");
}