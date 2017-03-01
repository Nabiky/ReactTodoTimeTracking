var $ = require('jquery');

module.exports = {
  setTodos: function (todos) {
    if($.isArray(todos)){
      localStorage.setItem('todos', JSON.stringify(todos));
      //Turns a Javascript object into JSON text and stores that JSON text in a string.
     return todos;
    }
  },
  getTodos: function () {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      todos = JSON.parse(stringTodos);// JSON.parse can fail if invalid data.
    } catch (e) {

    }
    return $.isArray(todos) ? todos : [];

    // if($.isArray(todos)){
    //   return todos;
    // } else {
    //   return [];
    // }
  }
};
//localStorage.getItem('todos');
