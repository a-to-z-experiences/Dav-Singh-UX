const Air = {
  "nav": {
    "nav-item-1": "Homepage",
    "nav-item-2": "Team",
    "nav-item-3": "Contact",
    "img-src": "img/logo.png"
  },
  "top": {
    "button": "Get Started",
    "img-src": "img/allie-smith-tpv_49UJ-Dc-unsplash.jpg"
  },
};

// Navigation bar text
let navItems = document.querySelectorAll('a');
navItems[0].textContent = Air["nav"]["nav-item-1"];
navItems[1].textContent = Air["nav"]["nav-item-2"];
navItems[2].textContent = Air["nav"]["nav-item-3"];

//Adding good vibes only images
const Circle = document.getElementById("top-img");
Circle.setAttribute('src', Air["top"]["img-src"]);




