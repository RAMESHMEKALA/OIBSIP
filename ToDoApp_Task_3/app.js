function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var newTask = document.createElement("li");
        newTask.textContent = taskText;

        var pendingTasks = document.getElementById("pendingTasks");
        pendingTasks.appendChild(newTask);

        newTask.addEventListener("click", function () {
            markCompleted(this);
        });

        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}

function markCompleted(task) {
    var completedTasks = document.getElementById("completedTasks");
    completedTasks.appendChild(task);

    task.removeEventListener("click", markCompleted);
}
