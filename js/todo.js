const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintTodo(newTodo){
    const li = document.createElement("li");  //html 태그 요소를 만든다
    li.id = newTodo.id;
    const span = document.createElement("span");  //span만듬
    span.innerText = newTodo.text;                       //
    const button = document.createElement("button");
    button.innerText = "🗑";
    button.classList.add("btn");
    button.addEventListener("click", deleteToDo );
    li.appendChild(button);
    li.appendChild(span);
    toDoList.appendChild(li); 
}

function handle(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    };
    toDos.push(newTodoObj);
    saveToDos();
    paintTodo(newTodoObj);
}

toDoForm.addEventListener("submit", handle);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}

