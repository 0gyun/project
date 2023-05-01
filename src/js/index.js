const logout = document.getElementById('logout');
const register = document.getElementById('register');
const registerBtn = document.getElementById('registerBtn');
const loginBtn = document.getElementById('loginBtn');

const email = document.getElementById('email');
const pwd = document.getElementById('pwd');

if(loginBtn){
    loginBtn.addEventListener('click', ()=>{
        window.location.href = `http://localhost:52271/login/?id=${email.value}&pwd=${pwd.value}`;
        email.value = '';
        pwd.value = '';
    });   
    pwd.addEventListener('keydown', (e)=>{
        if(e.key === 'Enter'){
            window.location.href = `http://localhost:52271/login/?id=${email.value}&pwd=${pwd.value}`;
            email.value = '';
            pwd.value = '';
        }
    });   
}
if(logout){
    logout.addEventListener('click', ()=>{
        window.location.href='http://localhost:52271/';
    });
}
if(register){
    register.addEventListener('click', ()=>{
        window.location.href='http://localhost:52271/signUp';
    });
}
if(registerBtn){
    registerBtn.addEventListener('click', ()=>{
        window.location.href=`http://localhost:52271/register/?id=${email.value}&pwd=${pwd.value}`;
    });
}
