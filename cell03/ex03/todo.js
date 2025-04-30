var todoList = [];

function addNew() {
    var inputValue = prompt("Please enter a to-do task:");

    if(inputValue == null) return;

    if (inputValue.length > 0) {
        createTodo(inputValue);
        todoList.push(inputValue);
        addCookie();
    }
}

function addCookie() {
    document.cookie = "todo=" + todoList + ";path=/";
}

function loadCookie(name) {
    const cname = name + "=";
    var data = document.cookie;

    //split() add " " value to the array even No Data - using split(), the array length is at least 1.
    var todo_onCookie = (data.substring(cname.length)).split(",");

    console.log(data);

    if (data != cname) {
        for (let i = 0; i < todo_onCookie.length; i++) {
            createTodo(todo_onCookie[i]);
        }
    }

    todoList = todo_onCookie; //to restore the data on the Cookie
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
