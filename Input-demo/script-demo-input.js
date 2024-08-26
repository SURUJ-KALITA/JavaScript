let surujBtn = document.querySelector('.main');
surujBtn.addEventListener('click' , inputMsg);

function inputMsg(){
    let roll = prompt('Enter roll-no');
    let branch = prompt('Enter your branch')
    surujBtn.textContent = 'SURUJ KALITA :' + roll + " " +  branch;
}

//prompt function is used to display  a variable which is given by user and store it in teh variable