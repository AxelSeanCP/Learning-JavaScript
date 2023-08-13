const addButton = document.getElementById("addButton");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskItem = document.createElement("li");

        taskItem.innerHTML = `<input type="checkbox" class="check"> ${taskText} 
        <button class="delete">Delete</button>`

        taskList.appendChild(taskItem);
        taskInput.value = "";
    }
}