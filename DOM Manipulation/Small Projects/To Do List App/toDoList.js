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