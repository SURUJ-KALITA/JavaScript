/*
for(let  i = 0 ; i < 51 ; i = i+5){
    if(i%2 ==0)
        console.log(i)
}
*/

/*
let i = 10;
while(i>10){
    console.log("Hey Man Suruj This Side")
    i++
}
*/

/*
let j = 0;
do{
    console.log("Hey Man Suruj This Side")
    j++
}
while(j<-100)
*/


/*
//Objects
let animal = {
    name : "zebra",
    leg: 4
};

for(let key in animal){
    console.log(key,animal[key]);
}


//output -- name zebra
//leg 4
*/


//Arrays
let names = ["Rahul" , "Neha" , "Suruj" , "Barun" , "Asif"];
for(let index in names){
    console.log(index)
}

for(let name of names){
    console.log(name)
}


// output -- use node.js as debugging 
// 0
// 1
// 2
// 3
// 4
// Rahul
// Neha
// Suruj
// Barun
// Asif