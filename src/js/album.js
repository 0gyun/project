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

// addNewPhoto.onclick = function(){
//     const newFolder = document.getElementById('newFolder').value;
//     console.log(newFolder);
//     if(newFolder){
//         document.getElementById('folderList').innerHTML = document.getElementById('folderList').innerHTML + `<br/>\n<div>\n<input type="radio" name="폴더" value="${newFolder}" style="display: inline;" > ${newFolder} <div/>`;
//         document.getElementById('newFolder').value = '';
//         modal.style.display = "none";
//     }
// }

newPhoto.addEventListener('change', ()=>{
    const file = newPhoto.files[0];

    // FileReader 객체를 생성합니다.
    const reader = new FileReader();

    // 파일을 읽기 시작합니다.
    reader.readAsDataURL(file);

    // 파일을 다 읽은 후에 실행됩니다.
    reader.onload = () => {
      // 파일이 이미지 파일인 경우에는 이미지를 미리보기합니다.
      if (file.type.startsWith('image/')) {
        const img = document.createElement('img');
        img.src = reader.result;
        // console.log(img.src);
        // preview.innerHTML = '';
        // newPhoto.files[0].name = '';
        // preview.appendChild(img);
      }
    };
})

function uploadImage() {
    const input = document.querySelector('input[type="file"]');
    const file = input.files[0];
    const formData = new FormData();
    // formData['image'] = file;
    formData.append('image',file);
  
    console.log(input);
    console.log(file);
    console.log(formData);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/upload-image');
    xhr.send(formData);

    modal.style.display = "none";
    preview.innerHTML = '';
    newPhoto.files[0].name = '';
}