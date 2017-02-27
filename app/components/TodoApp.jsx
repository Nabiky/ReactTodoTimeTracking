var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

 var TodoApp = React.createClass({

   getInitialState: function () {
     return {
       todos: [
         {
           id: 1,
           text: 'Walk the dog'
         }, {
           id: 2,
           text: 'Clean the yard'
         }, {
           id: 3,
           text: 'Kiss my monkey'
         },{
           id: 4,
           text: 'Write a song'
         }
       ]
     };
   },

  handleAddTodo: function (text){
  alert('new Todo ' + text);
  },
   render: function () {
     var {todos} = this.state;
     return (
       <div>
        TodoApp.jsx
        <TodoList todos = {todos}/>
        <AddTodo onAddTodo = {this.handleAddTodo}/>
       </div>
     )
   }
 });

 module.exports = TodoApp;
