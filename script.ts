const taskInput = document.getElementById("taskInput") as HTMLButtonElement;
const addBtn = document.getElementById("addBtn") as HTMLButtonElement;
const taskList = document.getElementById("taskList") as HTMLUListElement;

addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if(taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;

    li.addEventListener("click",() => {
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

console.log("O script TypeScript está funcionando!")