const Air = {
  "nav": {
    "nav-item-1": "Homepage",
    "nav-item-2": "Team",
    "nav-item-3": "App",
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


// Double Click to make grey
let suttonb = document.querySelector(".top-text h1");
suttonb.addEventListener("dblclick", (event) => {
event.target.style.backgroundColor = "gray";
});

// Mouse Over to change background colour
let buttons = document.querySelectorAll(".top-text h1");
buttons[0].addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "black"
  event.target.style.color = "yellow"
});
buttons[0].addEventListener("mouseleave", (event) => {
    event.target.style.backgroundColor ="yellow" 
    event.target.style.color = "black";
  });
  buttons[1].addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "black"
    event.target.style.color = "yellow"
  });
  buttons[1].addEventListener("mouseleave", (event) => {
      event.target.style.backgroundColor ="yellow" 
      event.target.style.color = "black";
    });
  buttons[2].addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = "black"
      event.target.style.color = "yellow"
    });
  buttons[2].addEventListener("mouseleave", (event) => {
        event.target.style.backgroundColor ="yellow" 
        event.target.style.color = "black";
      });


