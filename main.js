/**
 * 
 * methods to get a refernce to an HTML element
 * 
 * getElementById - returns a single element with the maching ID
 * getElementsByClassName - returns a list of elements with the maching class name
 * 
 * querySelector - use CSS selectors and return the first match
 * quereySelectorAll - use CSS selections and return a list of matches
 */

// get reference to an element with ID of one
let heading = document.getElementById("one");
console.log(heading);

// tells us all props and methods
console.dir(heading);

//change style of element through dom
heading.style["background-color"] = "#ff0000";

// get a ref to all elements with the class title
let allHeadings = document.getElementsByClassName("title");
console.log(allHeadings);

let colors = ["#00ff00", "#0000ff", "#00ffff", "#ff00ff"];
for(let i = 0; i < allHeadings.length; i++) {
    let randomColor = Math.Random(); // [0,1)
    randomColor = randomColor * colors.length; // [0,4)
    randomColor = Math.floor(randomColor);

    allHeadings[i].style["color"] = colors[randomColor];
}

let heading2 = document.querySelector("#one");
heading2.innerHTML = "My last name is Aman";

let allHeadings2 = document.querySelectorAll("h1");
for (let i =0; i < allHeadings2.length; i++) {
    allHeadings2[i].style["font-size"]="4em";
}

// get ref to the button with the id of background-button
let buttom = document.getElementById("background-button");

// set the onclick prop to an anonymous function
button.onclick = function() {
    let divContainer = document.querySelector("#container");
    divContainer.style["background-color"] = "#EEEE38";
}