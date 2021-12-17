// TASK 1
// You have 2 banners , you have to add carousel or change effect using javascript the 
// the banner should change between './images/nike_poster1.jpeg' and './images/nike_poster2.jpeg'

// TASK 2
// add sale ends in timer , you can display current time but it should update each second 

// hint: use timers to change to on specific interval
const banner_img = document.querySelector(".banner_poster");
let num = 1;
const timeSpan = document.querySelector(".time");
timeSpan.textContent = `${new Date().toLocaleTimeString()}`;


