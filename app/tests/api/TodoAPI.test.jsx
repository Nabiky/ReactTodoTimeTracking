var expect = require('expect');

var TodoAPI = require('TodoAPI');
//using a test lifecycle method to clean up the localStorage value.
//(beforeEach: a mocha method that gets call before every test )

describe('TodoAPI', () => {

  beforeEach(()=> {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {

  it('should set valid todos array', () => {
    var todoByMeh =[{
      id: 23,
      test: 'test all files',
      completed: false
    }];
    TodoAPI.setTodos(todoByMeh);
    var actualTodos = JSON.parse(localStorage.getItem('todos'));
    // at this point actualTodos should be exactly the same as todos.

    expect(actualTodos).toEqual(todoByMeh);
    // toBe check if they are the same exact array or object in memory & toEqual just compared the value on them.
  });

  it('should not set invalid todos array', () => {
    var badTodos = {a: 'b'};
    TodoAPI.setTodos(badTodos);

    expect(localStorage.getItem('todos')).toBe(null);
    //{{TodoAPI.setTodos(todos);}}-> this value (todos) still exist when the test is run above.
   })
  })


  describe('getTodos', () => {
    it('should return empty array for bad localStorage data', () =>{
       var actualTodos = TodoAPI.getTodos();
       expect(actualTodos).toEqual([]);
    });

    it('should return todo if valid array in localStorage',() => {
      var todoss =[{
        id: 23,
        test: 'test all files',
        completed: false
      }];
      localStorage.setItem('todos',JSON.stringify(todoss));
      var actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual(todoss);
    })

   });

  });
