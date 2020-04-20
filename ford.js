const logo= document.querySelector(".logo");
const slider= document.querySelector(".slider");
const brand= document.querySelector("#brand");
const headline= document.querySelector(".headline");

const tl = new TimelineMax();
tl.fromTo(logo,1, {height: "0%"}, {height:"80%"})
.fromTo(logo, 1.2, {width: "100%"}, {width:"80%"})
.fromTo(slider, 1.2,{x:"-100%"},{x:"0%"}, "-=1.2")
.fromTo(brand,0.5 , {opacity:0}, {opacity:1}, "-=0.5")
.fromTo(headline,0.5 , {opacity:0}, {opacity:1}, "-=0.5")