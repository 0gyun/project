let addFolderBtn = document.getElementById('addFolderBtn');
// 모달 요소 가져오기
let modal = document.getElementById("addFolderPage");
let addNewFolder = document.getElementById("addNewFolder");

// 모달 닫기 버튼 요소 가져오기
let closeBtn = document.getElementsByClassName("close")[0];
let map = document.getElementById('korea');

if(addFolderBtn){
    addFolderBtn.addEventListener('click', ()=>{
        modal.style.display = "block";
    })
}

korea.addEventListener('click', ()=>{
    const name = document.querySelector('input[name="폴더"]:checked').value;
    window.location.href=`http://localhost:52271/folder/?folder=${name}`;
})

// // 모달 열기 버튼을 클릭하면 모달을 엽니다.
// modalBtn.onclick = function() {
//   modal.style.display = "block";
// }

window.addEventListener('keydown',(e)=>{
    console.log(modal.style.display);
    console.log(e);
    if(e.key === 'Escape'){
        modal.style.display="none";
    }
})

// 모달 닫기 버튼을 클릭하면 모달을 닫습니다.
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// 모달 외부를 클릭하면 모달을 닫습니다.
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

addNewFolder.onclick = function(){
    const newFolder = document.getElementById('newFolder').value;
    console.log(newFolder);
    if(newFolder){
        document.getElementById('folderList').innerHTML = document.getElementById('folderList').innerHTML + `<br/>\n<div>\n<input type="radio" name="폴더" value="${newFolder}" style="display: inline;" > ${newFolder} <div/>`;
        document.getElementById('newFolder').value = '';
        modal.style.display = "none";
    }
}