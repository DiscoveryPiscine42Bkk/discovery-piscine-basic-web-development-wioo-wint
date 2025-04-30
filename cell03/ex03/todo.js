var todoList = [];

function addNew() {
    var inputValue = prompt("Please enter a to-do task:");

    if (inputValue != null) {
        createTodo(inputValue);
        todoList.push(inputValue);
        addCookie(todoList);
    }
}

function addCookie(todoList) {
    document.cookie = todoList + ";path=/";
}

function loadCookie() {
    var data = decodeURIComponent(document.cookie);
    todoList = data.split(",");

    if (todoList.length>0) {
        for (let i = 0; i < todoList.length; i++) {
            createTodo(todoList[i]);
        }
    }
}

function createTodo(inputValue) {
    var todo = document.createElement("div");
    var text = document.createTextNode(inputValue);
    todo.prepend(text);
    document.getElementById("ft_list").prepend(todo);
    todo.className = "todo";

    todo.addEventListener("click", function () {
        todo.remove();
        var index = todoList.indexOf(todo.innerText);
        todoList.splice(index, 1);
        addCookie(todoList);
    });
}
