var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var Todo = require('Todo');

describe('Todo', () => {
  it ('should exist', () => {
    expect(Todo).toExist();
  });

it('should call onToggle prop with id on click', () => {
  var todoData ={
    id: 199,
    text: 'Write letter to santa claus',
    completed: true
  };
  var spy = expect.createSpy();
  var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy} />);
  var $el = $(ReactDOM.findDOMNode(todo));

  TestUtils.Simulate.click($el[0]); //our div is our root that's why is pass as our DOM element.
  expect(spy).toHaveBeenCalledWith(199);
});


});
