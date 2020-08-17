const addTaskForm = document.querySelector(".add");
const searchField = document.querySelector(".search input")
const todoList = document.querySelector(".todos")


// Functions
const generateTemplate = todo => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `
    todoList.innerHTML += html
}

const filterTasks = (term) => {
    Array.from(todoList.children)
        .filter((task) =>   !task.textContent.toLowerCase().includes(term) )
            .map((task) => task.classList.add("filtered") );

    Array.from(todoList.children)
    .filter((task) =>  task.textContent.toLowerCase().includes(term) )
        .map((task) => task.classList.remove("filtered") );
}


// Event Listeners
addTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const todo = addTaskForm.add.value.trim();
    if (todo.length) {
        generateTemplate(todo);    
    }
    addTaskForm.reset();
});

todoList.addEventListener("click", e => {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
    }
});

searchField.addEventListener("keyup", () => {
    const term = searchField.value.trim().toLowerCase();
    filterTasks(term);
});