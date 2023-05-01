const logout = document.getElementById('logout');
const register = document.getElementById('register');
const registerBtn = document.getElementById('registerBtn');
const loginBtn = document.getElementById('loginBtn');

const id = document.getElementById('id');
const pwd = document.getElementById('pwd');

if(loginBtn){
    loginBtn.addEventListener('click', ()=>{
        window.location.href = `http://localhost:52271/login/?id=${id.value}&pwd=${pwd.value}`;
        id.value = '';
        pwd.value = '';
    });   
}
if(logout){
    logout.addEventListener('click', ()=>{
        window.location.href='http://localhost:52271/';
    });
}
if(register){
    register.addEventListener('click', ()=>{
        window.location.href='http://localhost:52271/signIn';
    });
}
if(registerBtn){
    registerBtn.addEventListener('click', ()=>{
        window.location.href=`http://localhost:52271/register/?id=${id.value}&pwd=${pwd.value}`;
    });
}
