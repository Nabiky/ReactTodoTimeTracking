var React = require('react');

var AddTodo = React.createClass({

  handleSubmit: function (e) {
    e.preventDefault();
    var todoText = this.refs.todoText.value;

    if(todoText.length > 0){
      this.refs.todoText.value ='';

      this.props.onAddTodo(todoText);
    }else {
      this.refs.todoText.focus();// put the cursor back into the input field
                                //automatically so they can type some valid text again.

    }

  },
render: function() {
    return(
      <div className="container__footer">
        <form ref="form" onSubmit={this.handleSubmit} className="form-todo" >
          <input type="text" ref="todoText" placeholder="What do you need to do?"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    )
  }
});

module.exports = AddTodo;
