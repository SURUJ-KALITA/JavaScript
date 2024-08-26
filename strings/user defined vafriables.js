//Objects
let animal = {
    name: "cow",
    legs: 4
}

console.log(animal); // display property
console.log(animal.name); // dot notation

//Arrays
let selectBooks = ["The Rich Dad Poor Dad" , "Think and Grow Rich"]
console.log(selectBooks)
console.log(selectBooks[0]) // printing index values
console.log(selectBooks.length)


//Function

function namasteWorld(name){
    console.log(" NAMASTE " + name);
}

namasteWorld("SURUJ") // Its importnat call the function either no use of making it

function Add(a,b){
    return a+b;
}

console.log(Add(5,5)) // () imp


var favShow = "Games of Thrones";
console.log(favShow.length) // 16

console.log(favShow[0]); //G

console.log(favShow[15]); // or //console.log(favShow[favShow.length-1])

console.log(favShow.indexOf("of")) // 6

var nme = "my name is suruj";

console.log(nme.toUpperCase()); // MY NAME IS SURUJ

console.log(nme.toLowerCase()); //my name is suruj
