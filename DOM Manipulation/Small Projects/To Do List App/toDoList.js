// add task 
const addButton = document.getElementById("addButton");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
let themesName = "audi";

addButton.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskItem = document.createElement("li");
        const deleteBtn = document.createElement("button");
        const textSpan = document.createElement("span");
        const editBtn = document.createElement("button");

        textSpan.innerHTML = taskText;

        taskItem.innerHTML = `<input type="checkbox" class="check">`;

        
        //buat edit task
        editBtn.textContent = "Edit";
        editBtn.className = "edit-btn";
        editBtn.setAttribute("id","editBtn");
        editBtn.addEventListener("click", function(){
            const spanItem = this.parentElement.getElementsByTagName("span")[0];
            const newText = prompt("Edit your task here");
            if (newText && newText.trim() !== "") {
                spanItem.textContent = newText; //spanItem.innerHTML juga bisa tapi dianggap sebagai html
            }
        });
        
        
        //buat delete task
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";
        deleteBtn.setAttribute("id","deleteBtn");
        deleteBtn.addEventListener("click", function(){
            const listItem = this.parentElement;
            listItem.remove();
        });

        //check themes yang jalan sekarang & ganti warna menyesuaikan
        if (themesName === "audi") {
            textSpan.style.color = "#f5f0f0";
            editBtn.style.color = "#f5f0f0";
            deleteBtn.style.color = "#f5f0f0";
        }else if(themesName === "bmw"){
            textSpan.style.color = "#1338b3";
            editBtn.style.color = "#17171f";
            deleteBtn.style.color = "#17171f";
        }else if(themesName === "mitsubishi"){
            textSpan.style.color = "#f5f0f0";
            editBtn.style.color = "#17171f";
            deleteBtn.style.color = "#17171f";
        }
        
        taskItem.appendChild(textSpan);
        taskItem.appendChild(editBtn);
        taskItem.appendChild(deleteBtn);

        taskList.appendChild(taskItem);
        taskInput.value = "";
    }
}

function changeThemes(merk){
    let imageUrl;
    const wallpaper = document.querySelector(".bg-image");
    const tulisan = document.getElementsByClassName("header");
    const addBtn = document.getElementById("addButton");
    const subCtr = document.querySelector(".sub-container");
    const deleteBtn = document.getElementById("deleteBtn");
    const editBtn = document.getElementById("editBtn");
    const itemSpanCollection = taskList.getElementsByTagName("span");
    const itemSpanArray = Array.from(itemSpanCollection);

    if (merk === 'bmw') {
        imageUrl = "../../img/bmw-m3-gtr.jpg"; //ganti wallpaper
        for (let i = 0; i < tulisan.length; i++) { //ganti warna tulisan
            tulisan[0].style.color = "#1338b3";
        }
        addBtn.style.backgroundColor = "#1338b3"; //ganti warna add button
        addBtn.style.color = "#f5f0f0";
        subCtr.style.backgroundColor = "rgba(225, 230, 237, 0.65)"; //ganti warna subcontainer
        if(taskList.innerHTML.trim() !== ""){ //biar kalo belum ada task nanti ga error
            deleteBtn.style.backgroundColor = "#1338b3";
            deleteBtn.style.color = "#f5f0f0";
            editBtn.style.backgroundColor = "#1338b3";
            editBtn.style.color = "#f5f0f0";

            itemSpanArray.forEach(item => { //ngganti warna di task list
                item.style.color = "#1338b3";
            });
        }
    }

    if (merk === 'audi') {
        imageUrl = "../../img/audi-r8.jpg";
        for (let i = 0; i < tulisan.length; i++) {
            tulisan[0].style.color = "#17171f";
        }
        addBtn.style.backgroundColor = "#17171f";
        addBtn.style.color = "#f5f0f0"; 
        subCtr.style.backgroundColor = "rgba(65, 61, 61, 0.65)";
        if (taskList.innerHTML.trim() !== "") {
            deleteBtn.style.backgroundColor = "#17171f";
            deleteBtn.style.color = "#f5f0f0";
            editBtn.style.backgroundColor = "#17171f";
            editBtn.style.color = "#f5f0f0";

            itemSpanArray.forEach(item => {
                item.style.color = "#f5f0f0";
            });
        }
    }

    if (merk === 'mitsubishi') {
        imageUrl = "../../img/lancer-evo-8.jpg";
        for (let i = 0; i < tulisan.length; i++) {
            tulisan[0].style.color = "#f5f0f0";
        }
        addBtn.style.backgroundColor = "#f5f0f0"; 
        addBtn.style.color = "#17171f";
        subCtr.style.backgroundColor = "rgba(230, 62, 68, 0.65)";
        if (taskList.innerHTML.trim() !== "") {
            deleteBtn.style.backgroundColor = "#f5f0f0";
            deleteBtn.style.color = "17171f";
            editBtn.style.backgroundColor = "#f5f0f0";
            editBtn.style.color = "17171f";

            itemSpanArray.forEach(item => {
                item.style.color = "#17171f";
            });
        }
    }
    
    console.log("ketrigger");
    wallpaper.style.backgroundImage = `url(${imageUrl})`;

}