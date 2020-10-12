var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

// body.style.background = "red"; syntax to change the background color

// used to check the body
// console.log(body);

// console.log(css);
// console.log(color1);
// console.log(color2);

function setGradient() {
    body.style.background = 
    "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value
    + ")";

    
// getting a description of the color value
css.textContent = body.style.background + ";";
}


color1.addEventListener("input",  setGradient);
// {
//     // console.log(color1.value);
//     // body.style.background = 
//     // "linear-gradient(to right, "
//     // + color1.value
//     // + ", "
//     // + color2.value
//     // + ")"; (DRY)
// })

color2.addEventListener("input", setGradient);
// {
//     // console.log(color2.value);
//     body.style.background = 
//     "linear-gradient(to right, "
//     + color1.value
//     + ", "
//     + color2.value
//     + ")";
// })

