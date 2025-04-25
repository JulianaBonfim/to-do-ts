"use strict";
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText === "")
        return;
    const li = document.createElement("li");
    li.textContent = taskText;
    li.addEventListener("click", () => {
        li.classList.toggle("completed");
    });
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "❌";
    removeBtn.style.marginLeft = "10px";
    removeBtn.onclick = () => li.remove();
    li.appendChild(removeBtn);
    taskList.appendChild(li);
    taskInput.value = "";
});
console.log("O script TypeScript está funcionando!");
