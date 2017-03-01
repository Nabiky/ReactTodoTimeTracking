var React = require('react');
var uuid = require ('uuid');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI');


 var TodoApp = React.createClass({
  //set default values to
   getInitialState: function () {
     return {                    // when I first start the app I'm only gonna see
         showCompleted: false,  //Todos that I haven't yet finished
         searchText: '',       // we want to return all Todo items not matter what their text is.
         todos: TodoAPI.getTodos()
     };
   },
componentDidUpdate: function (){
  TodoAPI.setTodos(this.state.todos);
},

  handleAddTodo: function (text){
  this.setState({
    todos: [
      ...this.state.todos,
      {
        id: uuid(),
        text: text,
        completed: false
      }
    ]
  });
},

handleToggle: function (id){
  var updatedTodos = this.state.todos.map((todo) => {
    if(todo.id === id){
      todo.completed =! todo.completed;// set it to the opposite.
    }
    return todo;
  });
  this.setState({todos: updatedTodos});
},

  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase() // to search either capital or lowercase
    });
    },
  render: function () {
     var {todos} = this.state;
     return (
       <div>
        TodoApp.jsx
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos = {todos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo = {this.handleAddTodo}/>
       </div>
     )
   }
 });

 module.exports = TodoApp;
