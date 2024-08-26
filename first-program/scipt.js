let namasteBtn = document.querySelector('button');
namasteBtn.addEventListener('click' , showMsg);

function showMsg(){
    let name = prompt("Enter the name of the student");
    let roll = prompt("Enter the Roll No : ");
    namasteBtn.textContent = 'You Enter the name' + " " + name + " " +  "and his roll no is " + " " +  roll;
   
}