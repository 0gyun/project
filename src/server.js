const express = require('express');
const fs = require('fs');
const alert = require('alert-node');
const bodyParser = require("body-parser");
const multer = require("multer");
const upload = multer();
const app = express();

app.use(express.static(__dirname + "/"));

let users;
fs.readFile('../data/users.json', (err,data)=>{
    if(err) throw err;

    users = JSON.parse(data);
    console.log(users);
})

let user;
let folder;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/html/index.html");
});

app.get("/image/korea.png", (req, res) => {
    res.sendFile("/Users/younggyun/Coding/2023_1/WebClientComputing/project/image/korea.png");
});
app.get("/image/night.png", (req, res) => {
    res.sendFile("/Users/younggyun/Coding/2023_1/WebClientComputing/project/image/night.png");
});
app.get("/image/road.png", (req, res) => {
    res.sendFile("/Users/younggyun/Coding/2023_1/WebClientComputing/project/image/road.png");
});
app.get("/image/sky.png", (req, res) => {
    res.sendFile("/Users/younggyun/Coding/2023_1/WebClientComputing/project/image/sky.png");
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
    folder = name;
    console.log(name);
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

// 이미지를 저장하는 API
// app.post("/saveImage", (req, res) => {
//     const userId = "admin";
//     const date = new Date().toISOString();
  
//     console.log(req);
//     const imageData = req.file.data.toString("base64");
  
//     const photos = require("../data/photos.json");
  
//     if (!photos[userId]) {
//       photos[userId] = {};
//     }
  
//     if (!photos[userId][folder]) {
//       photos[userId][folder] = [];
//     }
  
//     photos[userId][folder].push({
//       date: date,
//       imageData: imageData,
//     });
  
//     fs.writeFile("../data/photos.json", JSON.stringify(photos), (err) => {
//       if (err) {
//         console.error(err);
//         res.status(500).send("Error while saving image");
//       } else {
//         res.send("Image saved successfully");
//       }
//     });
//   });

// 정적 파일 서빙
app.use(express.static("image"));
// app.use(express.static("src"));

app.use(bodyParser.json({ limit: "10mb" }));

app.post("/data", upload.single("image"), (req, res) => {
  const base64 = req.file.buffer.toString("base64");

  const buffer = Buffer.from(base64, "base64");
  console.log(buffer);

  // 파일 저장
  // fs.writeFileSync("image.png", buffer, "base64");
  // console.log("파일 저장 완료");

  // Json으로 인코딩하여 저장
  const json = {
    image: base64,
  };
  fs.writeFileSync("image.json", JSON.stringify(json));

  return res.send({ status: "success" });
});

module.exports = {user};