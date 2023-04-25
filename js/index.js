const logout = document.getElementById('logout');
const id = document.getElementById('id');
const pwd = document.getElementById('pwd');
    
const loginBtn = document.getElementById('loginBtn');
    loginBtn.addEventListener('click', ()=>{
    if(logout.style.display != "none"){
        logout.style.display = "none";
    }
    else{
        logout.style.display = "inline-block";
    }

    
    // logout.classList.toggle('hidden');
    id.value = '';
    pwd.value = '';
});