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
  },

  // The filter() method creates a new array with all elements that pass the test implemented by the provided function.

   filterTodos: function(todos, showCompleted, searchText){
    var filteredTodos = todos;

   //Filter by showCompleted
     filteredTodos = filteredTodos.filter((todo)=> {
      return !todo.completed || showCompleted; // if it fires true, the element will stay in the array
    });

  //Filter by searchText
  filteredTodos = filteredTodos.filter((todo)=> {
    var text = todo.text.toLowerCase();
    return searchText.length === 0 || text.indexOf(searchText) > -1;// filter return element when condition is true.
  });


  //Sort todos with non-completed first
   filteredTodos.sort((a,b) => {
    if(!a.completed && b.completed) {
      return -1; //put the left element (in this case a) BEFORE or at the TOP of the right element (in this case b)
    }else if (a.completed && !b.completed){
      return 1; //put the left element (in this case a) AFTER or at the BOTTOM of the right element (in this case b)
    }else {
      return 0;
    }
  });
     return filteredTodos;
  }
};
//localStorage.getItem('todos');
// run in console -> localStorage.removeItem('todos'); to wipe all off 
