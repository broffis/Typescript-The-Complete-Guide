"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (resp) {
    var todo = resp.data;
    var id = todo.id, completed = todo.completed, title = todo.title;
    logTodo(id, title, completed);
});
var logTodo = function (id, title, completed) {
    console.log("\n    The Todo with ID: " + id + "\n    Has a title of: " + title + "\n    Is if finished? " + completed + "\n  ");
};
