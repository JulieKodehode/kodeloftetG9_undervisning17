// JavaScript Array

const userName = "Julie";
const userLastName = "Hauge";
const userAge = 27;
const userPresent = true;

// Basic array
const userArray = ["Julie", "Hauge", 27, true];

console.log(userArray);
console.log(userArray[2]);

const body = document.querySelector("body");
body.textContent = userArray[0];

// Array object
const objectArray = [{userFirstName: "Julie"}, {userLastName: "Hauge"},{userAge: 27}, {userPresent: true}];
console.log(objectArray[2]);

// Object Array
const bigArray = {fruits:["orange", "apple", "bannana"], berry:[ "strawberry", "bluebarry"]};
console.log(bigArray.berry[1]);