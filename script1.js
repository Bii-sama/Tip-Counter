const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


form.addEventListener('submit', (e)=>{
    e.preventDefault();

    checkInputs()
});

function checkInputs(){
    const usernameValue = username.value.trim();
    const emailValue=  email.value.trim();
    const passwordValue =password.value.trim();
    const passWord2Value =password2.value.trim();

    if (usernameValue === ""){
        setErrorFor(username, "Username cannot be blank")
    }else{
        setSuccessFor(username);
    }
    
    if (emailValue === ""){
        setErrorFor(email, "Email cannot be blank")
    }else if(!emailValidity(emailValue)){
        setErrorFor(email, "Email is not valid")
    }else{
        setSuccessFor(email);
    }
    

    if (passwordValue === ""){
        setErrorFor(password, "Password cannot be blank")
    }else{
        setSuccessFor(password);
    }

    if (passWord2Value === ""){
        setErrorFor(password2, "Password2 cannot be blank")
    }else if (passWord2Value!==passwordValue){
        setErrorFor(password2, "Password does not match")
    }else{
        setSuccessFor(password2)
    }

}


    


function setErrorFor(input, message){
 const formSub = input.parentElement;
 const small = formSub.querySelector('small')

 small.innerText = message
 formSub.className = 'label error';
}

function setSuccessFor(input){
const formSub = input.parentElement;
formSub.className ='label success';
}

function emailValidity(email){
    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(email);
}