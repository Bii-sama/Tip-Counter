/*let text = "       Hello World!        ";
//let result = text.trim();
let text = "       Hello World!        ";
let result = text.replace(/^\s+|\s+$/gm,'');
console.log(result)*/

//const form = document.getElementsById('signup');
const nameSpace = document.getElementById('cardholder');
const cardNo = document.getElementById('cardno');
const month = document.getElementById('mm');
const year = document.getElementById('yy');
const cvc = document.getElementById('cvc');

document.querySelector('#signup').addEventListener('submit', checkInputs)

function checkInputs() {
    if(nameSpace.value == ""){
        nameSpace.className = "border"
    }
}

