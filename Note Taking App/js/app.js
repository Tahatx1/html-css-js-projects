const btn = document.querySelector(".btn");
const container = document.querySelector(".list-section");

// Function to save tasks to localStorage
const saveTasks = () => {
    const tasks = document.querySelectorAll(".task");
    const valueArr = Array.from(tasks).map(task => task.value);
    localStorage.setItem("task", JSON.stringify(valueArr));
};

// Function to add event listeners for task updates
const bindTaskEvents = (taskElement) => {
    // Update localStorage on input
    taskElement.addEventListener("input", () => {
        saveTasks();
    });

    // Delete task on double-click
    taskElement.addEventListener("dblclick", () => {
        taskElement.remove();
        saveTasks();  // Update localStorage after deletion
    });
};

// Add new task when button is clicked
btn.addEventListener("click", () => {
    const taskHtml = `<textarea class="task"></textarea>`;
    container.insertAdjacentHTML("beforeend", taskHtml);
    const newTask = container.lastElementChild;  // Get the newly added task
    bindTaskEvents(newTask);  // Bind events to the new task
});

// Load tasks from localStorage on page load
const loadTask = () => {
    const taskArr = JSON.parse(localStorage.getItem("task")) || [];
    taskArr.forEach(taskText => {
        const taskHtml = `<textarea class="task">${taskText}</textarea>`;
        container.insertAdjacentHTML("beforeend", taskHtml);
        const loadedTask = container.lastElementChild;  // Get the newly added task
        bindTaskEvents(loadedTask);  // Bind events to the loaded task
    });
};

// Load tasks when the page loads
loadTask();
