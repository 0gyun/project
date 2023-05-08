const express = require('express');
const fs = require('fs');
const alert = require('alert-node');
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
    res.sendFile(__dirname + "/html/index.html");
});

app.get("/image/korea.png", (req, res) => {
    res.sendFile("/Users/younggyun/Coding/2023_1/WebClientComputing/project/image/korea.png");
});

app.get("/main", (req, res) => {
    res.sendFile(__dirname + "/html/main.html");
});

app.get("/signUp", (req, res)=>{
    res.sendFile(__dirname+"/html/register.html");
})

app.get("/login",(req, res)=>{
    const id = req.query.id;
    const pwd = req.query.pwd;
    if(users[id] == pwd && id.length != 0){
        user = id;
        res.redirect("http://localhost:52271/main");
    }
    else{
        alert('아이디 또는 비밀번호가 잘못되었습니다. 다시 입력하세요.');
        // res.redirect("http://localhost:52271/");
    }
})

app.get("/folder", (req, res)=>{
    const name = req.query.name;

    res.sendFile(__dirname + "/html/album.html");
})

app.get("/register",(req, res)=>{
    const id = req.query.id;
    const pwd = req.query.pwd;

    if(!users[id] && id.length != 0 && pwd.length != 0){
        // 유저 정보를 저장하는 것
        users[id] = pwd;
        let newData = JSON.stringify(users);
        fs.writeFile('../data/users.json', newData, (err)=>console.log(err));

        res.redirect("http://localhost:52271/");
    }
    else{
        res.redirect("http://localhost:52271/signUp");
    }
})

app.listen(52271, () => {
    console.log("Server started on http://localhost:52271");
});


const multer = require('multer');
const upload = multer({ dest: '../image/' });

app.post('/upload-image', upload.single('image'), (req, res) => {
  res.send('Image uploaded successfully!');
});