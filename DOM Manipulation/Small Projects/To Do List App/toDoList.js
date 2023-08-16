// add task 
const addButton = document.getElementById("addButton");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

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

        taskItem.appendChild(textSpan);

        //buat edit task
        editBtn.textContent = "Edit";
        editBtn.className = "edit-btn";
        editBtn.addEventListener("click", function(){
            const spanItem = this.parentElement.getElementsByTagName("span")[0];
            const newText = prompt("Edit your task here");
            if (newText && newText.trim() !== "") {
                spanItem.textContent = newText; //spanItem.innerHTML juga bisa tapi dianggap sebagai html
            }
        });

        taskItem.appendChild(editBtn);

        //buat delete task
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";
        deleteBtn.addEventListener("click", function(){
            const listItem = this.parentElement;
            listItem.remove();
        });

        taskItem.appendChild(deleteBtn);

        taskList.appendChild(taskItem);
        taskInput.value = "";
    }
}

function changeThemes(merk){
    let imageUrl;
    const wallpaper = document.querySelector(".bg-image");
    const tulisan = document.getElementsByClassName("header");

    if (merk === 'bmw') {
        imageUrl = "../../img/bmw-m3-gtr.jpg"; //ganti wallpaper
        for (let i = 0; i < tulisan.length; i++) { //ganti warna tulisan
            tulisan[0].style.color = "#1338b3";
        }
        document.getElementById("addButton").style.backgroundColor = "#1338b3"; //ganti warna add button
        document.querySelector(".sub-container").style.backgroundColor = "rgba(225, 230, 237, 0.65)"; //ganti warna subcontainer
        document.querySelector(".delete-btn").style.backgroundColor = "#1338b3";
        document.querySelector(".edit-btn").style.backgroundColor = "#1338b3";
    }

    if (merk === 'audi') {
        imageUrl = "../../img/audi-r8.jpg";
        for (let i = 0; i < tulisan.length; i++) {
            tulisan[0].style.color = "#17171f";
        }
        document.getElementById("addButton").style.backgroundColor = "#17171f"; 
        document.querySelector(".sub-container").style.backgroundColor = "rgba(65, 61, 61, 0.65)";
        document.querySelector(".delete-btn").style.backgroundColor = "#17171f";
        document.querySelector(".edit-btn").style.backgroundColor = "#17171f";
    }

    if (merk === 'mitsubishi') {
        imageUrl = "../../img/lancer-evo-8.jpg";
        for (let i = 0; i < tulisan.length; i++) {
            tulisan[0].style.color = "#f5f0f0";
        }
    }

    wallpaper.style.backgroundImage = `url(${imageUrl})`;

}