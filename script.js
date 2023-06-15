/*
2 Juny 2023
Variable
Comments
Operators
Conditional
*/
// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello World';

// let iceCream = 'vanilla';
// if(iceCream === 'chocolate'){
//     alert('Yay, I love chocolate icecream!');
// } else{
//     alert('Awwww, but chocolate icecream is my favoruite...');
// }

/*
3 Juny 2023
Functions
*/
// Dinamis
// function penambahan(){
//     console.log(1+5)
// }

// var penambahan = function(){
//     console.log(5+1)
// }

// penambahan()

// Statis
// function penambahan(parameter1, parameter2){
//     return parameter1+parameter2
// }
// console.log(penambahan(1, 5))

// var penambahan = function(parameter1, parameter2){
//     return parameter1+parameter2
// }
// console.log(penambahan(1, 5))

var sapa = prompt('what ur name?')
alert(`hiii ${sapa}`)
alert(`most beatifull girl ever, iya kamu ${sapa}`)
var fine = prompt('How\'d u day bby? y/n')
if(fine === 'y'){
    alert('yayyyyy! always wish you the best of beautiful days forever')
} else{
    alert('aw no matter what happens I will stay by your side and love you forever 3>')
}
alert(`sorry can't be everything for you, it's just as simple as this`)
alert(`nice day ${sapa}`)
document.querySelector("html").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
  });

  const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};

// Membuat elemen animasi
var elem = document.createElement("div");
elem.style.width = "100px";
elem.style.height = "100px";
elem.style.backgroundColor = "red";
elem.style.position = "absolute";
document.body.appendChild(elem);

// Menginisialisasi posisi awal
var posX = 0;
var posY = 0;

// Mengatur fungsi animasi
function animate() {
  // Mengubah posisi elemen
  posX += 1;
  posY += 1;
  elem.style.left = posX + "px";
  elem.style.top = posY + "px";

  // Memastikan elemen tetap berada di dalam jendela
  if (posX >= window.innerWidth - 100) {
    posX = 0;
  }
  if (posY >= window.innerHeight - 100) {
    posY = 0;
  }

  // Mengulangi animasi dengan kecepatan 60 frame per detik
  requestAnimationFrame(animate);
}

// Memulai animasi
animate();


