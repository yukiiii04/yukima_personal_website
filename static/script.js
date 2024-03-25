// // basic syntax: statements, consisted of values, operators, and keywords
// // declaring variables: var (global scope, can be redefined), const, let (local scope)

// //below are statements:
// var x=5;
// var y=7;
// var z=x+y;
// // console.log(z);

// let A = "hello ";
// let B = "World!";
// let C = A + B;
// // console.log(C);

// //code blocks & functions: function is definition of code block

// function SumNPrint(x1, x2){
//     var x3 = x1 + x2;
//     console.log(x3);
// }
// SumNPrint(x,y);
// SumNPrint(A,B);

// //if condition
// if(C.length>z){
//     console.log(C)
// }
// else if(z>C.length){
//     console.log(Z);
// }
// else{
//     console.log("Good job!");
// }

// /*
// //Arrays & loops
// var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
// var L2 = ["Apple", "Banana", "Kiwi", "Orange"];
// function findTheBanana(array){
//     for(let index = 0; index < array.length; index++){
//         const element = array[index];
//         if (array[index] === "Banana"){
//             alert("found the Banana in " + [index]);
//         }
// }}


// // findTheBanana(L1);
// // findTheBanana(L2);

// L1.forEach(element =>{
//     if(element === "Banana"){
//         alert("We found a banana in the first array!")
//     }
// });

// L2.forEach(element =>{
//     if(element === "Banana"){
//         alert("We found a banana in the second array!")
//     }
// });
// */

// /* function greeting(){
//     var d = new Date();
//     var h = d.getHours();
//     console.log(h);
//     if(h>5 && h<12){
//         console.log("Good morning!");
//     } else if (h>=12 && h<18){
//         console.log("Good afternoon!")
//     } else if (h>=18 && h<20){
//         console.log("Good evening!")
//     } else if(h>=20 && h<24 || h<5){
//         console.log("Good night!")
//     }   
// }
// greeting();
// */

function greetingFunc(){
    var d = new Date();
    var h = d.getHours();
    let E = document.getElementById("greeting"); //DOM Manipulation!!
    if(h>5 && h<12){
        E.innerHTML = "Good morning, I am Yuki";
    } else if (h>=12 && h<18){
        E.innerHTML = "Good afternoon, I am Yuki";
    } else if (h>=18 && h<20){
        E.innerHTML = "Good evening, I am Yuki";
    } else {
        E.innerHTML = "Good night, I am Yuki";
    }   
}
// var E = document.getElementById("greeting");
// console.log(E);

// greetingFunc();

var L = window.location.href; //path of the window location/page
console.log(L);

if (L.includes("index.html")){
    greetingFunc(); //only call function when it is index page 
}

function addYear(){
    var d = new Date();
    var y = d.getFullYear();
    var E = document.getElementById("copyYear");
    E.innerHTML += y;
    // console.log(y)
}

// function showList(){
//     document.getElementById("FavList").style.display = "block";
//     document.getElementById("SeeMoreBTN").style.display = "none";
// }

// can use arrow function since it's so local
$("#readLess").click(function(){
    $("#longIntro").hide();
    $("#readLess").hide();  
    $("#readMore").show();    
});

$("#readMore").click(function(){
    $("#longIntro").show();
    $("#readLess").show();
    $("#readMore").hide();    
});

function validate() {
    var userName = document.getElementById("UserName");
    var userEmail = document.getElementById("UserEmail");
    var userText = document.getElementById("Usertext");
    var msg = document.getElementById("ValidateMsg");
    if (!userName.checkValidity() || !userEmail.checkValidity() || !userText.checkValidity()) {
        msg.innerHTML = "Uh oh. Someone didn't fill out their form correctly! Please check again so I can get back to you :D";
    }
 }

// for the map!
    // Initialize and add the map
let map;
async function initMap() {
 // The location of CMU
 const position = { lat: 40.44332926007748, lng:-79.94249584843838 };
 // Request needed libraries.
 //@ts-ignore
 const { Map } = await google.maps.importLibrary("maps");
 const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
 // The map, centered at CMU
 map = new Map(document.getElementById("map"), {
   zoom: 12,
   center: position,
   mapId: "DEMO_MAP_ID",
 });
 // The marker, positioned at CMU
 const marker = new AdvancedMarkerElement({
   map: map,
   position: position,
   title: "CMU",
 });
}
initMap();

function activeNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }