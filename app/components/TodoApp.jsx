var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

 var TodoApp = React.createClass({
//set default values to
   getInitialState: function () {
     return {                    // when I first start the app I'm only gonna see
         showCompleted: false,  //Todos that I haven't yet finished
         searchText: '',  // we want to return all Todo items not matter what their text is.

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
        <TodoList todos = {todos}/>
        <AddTodo onAddTodo = {this.handleAddTodo}/>
       </div>
     )
   }
 });

 module.exports = TodoApp;
