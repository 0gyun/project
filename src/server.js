const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.static(__dirname + "/"));

let users;
fs.readFile('../data/users.json', (err,data)=>{
    if(err) throw err;

    users = JSON.parse(data);
    console.log(users);
})

let user;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/image/korea.png", (req, res) => {
    res.sendFile("/Users/younggyun/Coding/2023_1/WebClientComputing/project/image/korea.png");
});

app.get("/main", (req, res) => {
    res.sendFile(__dirname + "/main.html");
});

app.get("/signIn", (req, res)=>{
    res.sendFile(__dirname+"/register.html");
})

app.get("/login",(req, res)=>{
    const id = req.query.id;
    const pwd = req.query.pwd;
    
    if(users[id] == pwd){
        user = id;
        res.redirect("http://localhost:52271/main");
    }
    else{
        res.redirect("http://localhost:52271/");
    }
})

app.get("/register",(req, res)=>{
    const id = req.query.id;
    const pwd = req.query.pwd;
    
    console.log(id);
    console.log(pwd);
    console.log(users);
    if(!users[id]){
        // 유저 정보를 저장하는 것
        users[id] = pwd;
        let newData = JSON.stringify(users);
        fs.writeFile('../data/users.json', newData, (err)=>console.log(err));

        res.redirect("http://localhost:52271/");
    }
    else{
        res.redirect("http://localhost:52271/register.html");
    }
})

app.listen(52271, () => {
    console.log("Server started on http://localhost:52271");
});