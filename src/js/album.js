// const { user } = require('../server.js');
import {user} from '../server.js';
const fs = require('fs');

// 이미지 보여주기
function showImage(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("korea");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
}

// 지역 설정
let selectOption = document.getElementById("region");
const images = document.getElementById('images');
selectOption.addEventListener('change',()=>{
    const where = document.getElementById('selectedRegion');
    where.innerText = selectOption.options[selectOption.selectedIndex].value;
    images.innerHTML = '';
    showList(where);
});

function showList(place){
    const jsonFile = fs.readFileSync('../../data/photos.json', 'utf-8');
    const jsonData = JSON.parse(jsonFile);
    for (let index = 0; index < jsonData.user.place.length; index++) {
        images.innerHTML += `<img src="../../image/${jsonData.user.place[index]}" class="image" alt="사진" onclick="showImage(this);">`;
    }
};



let addPhotoBtn = document.getElementById('addPhotoBtn');
// 모달 요소 가져오기
let modal = document.getElementById("addFolderPage");
// let addNewPhoto = document.getElementById("addNewPhoto");
let newPhoto = document.getElementById("newPhoto");
let preview = document.getElementById("preview");

// 모달 닫기 버튼 요소 가져오기
let closeBtn = document.getElementsByClassName("close")[0];
let map = document.getElementById('korea');

if(addPhotoBtn){
    addPhotoBtn.addEventListener('click', ()=>{
        modal.style.display = "block";
    })
}

korea.addEventListener('click', ()=>{
    modal.style.display = "block";
})

window.addEventListener('keydown',(e)=>{
    console.log(modal.style.display);
    console.log(e);
    if(e.key === 'Escape'){
        modal.style.display="none";
        preview.innerHTML = '';
        newPhoto.files[0].name = '';
    }
})

// 모달 닫기 버튼을 클릭하면 모달을 닫습니다.
closeBtn.onclick = function() {
  modal.style.display = "none";
  preview.innerHTML = '';
  newPhoto.files[0].name = '';
}

// 모달 외부를 클릭하면 모달을 닫습니다.
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    preview.innerHTML = '';
    newPhoto.files[0].name = '';
  }
}

// const uploadForm = document.getElementById("uploadForm");
// if(uploadForm){
//     uploadForm.addEventListener("submit", (event) => {
//         event.preventDefault();
//         const formData = new FormData(uploadForm);
//         fetch("/data", {
//             method: "POST",
//             body: formData,
//         });
//     });
// }