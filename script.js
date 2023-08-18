// log in part
let emailValue = document.getElementById('email');
let passValue = document.getElementById('pass');

function submitForm(){
    if(emailValue.value == '123na@gmail.com'&& passValue.value =='123456'){
        window.location.href = 'bank.html';
    }else{
        alert('user invalid.');
    }
}