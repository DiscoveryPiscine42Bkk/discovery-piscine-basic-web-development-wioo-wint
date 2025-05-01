var $todoList = [];

$(document).ready(function () {
    $("button").click(function () {
        var $inputValue = prompt("Please enter a to-do task:");

        if ($inputValue == null) return;

        if ($inputValue.length > 0) {
            $todoList.push($inputValue);
            addCookie();
        }
    });
});

function createTodo($inputValue) {
    $("#ft_list").prepend("<div class='todo'>" + $inputValue + "</div>");
}

function addCookie() {
    document.cookie = "todo=" + $todoList + ";path=/";
    loadCookie("todo");
    console.log("Add Cookie", $todoList);
}

function loadCookie($name) {
    $(".todo").remove();
    const $cname = $name + "=";
    var $data = document.cookie;
    console.log($data);

    if ($data != $cname && $data) {
        //split() add " " value to the array even No Data - using split(), the array length is at least 1.
        $todoList = ($data.substring($cname.length)).split(",");

        for (let i = 0; i < $todoList.length; i++) {
            createTodo($todoList[i]);
        }
    }

    $(".todo").click(function () {
        if (confirm("Are you sure to delete this?")) {
            $(this).remove();
            var $index = $todoList.indexOf($(this).text());
            $todoList.splice($index, 1);
            addCookie($todoList);
        }
    });
}