//function to highlight current menu on click
function highlightCurrentURL() {
    var a = document.getElementById("navig").getElementsByTagName('a');
    for (var i = 0; i < a.length; i++) {
        if (a[i].href.split("#")[0] == document.location.href.split('#')[0]) {
            a[i].className = "current";
        }
    }
}

window.onload = function() {
    highlightCurrentURL();
}


//mobile-nav-toggle Hamburger Menu
const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");
    
    if(visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    }
    else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
});

