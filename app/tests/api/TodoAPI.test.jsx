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
    });

    describe('filterTodos', () => {
      var todos = [
        {
        id: 1,
        text: 'Some text here',
        completed: true
      },{
        id: 2,
        text: 'Some text here',
        completed: false
      },{
        id: 3,
        text: 'Some text here',
        completed: true
      }];

      it('should return all items if showCompleted is true', ()=> {
        var filterTodos = TodoAPI.filterTodos(todos, true, '');
        expect(filterTodos.length).toBe(3);
      });

      it('should return non-completed todos when showCompleted is false', () => {
        var filterTodos = TodoAPI.filterTodos(todos, false, '');
        expect(filterTodos.length).toBe(1);
      });

      it('should sort by completed status', ()=> {
        var filteredTodos = TodoAPI.filterTodos(todos, true, '');
        expect(filteredTodos[0].completed).toBe(false);
      });

      it('should filter to do by searchText', ()=> {
        var filteredTodos = TodoAPI.filterTodos(todos, true, 'some');
        expect(filteredTodos.length).toBe(3);
      });

      it('should return all todos if searchText is empty', ()=> {
        var filteredTodos = TodoAPI.filterTodos(todos, true, '');
        expect(filteredTodos.length).toBe(3);
      });


    })

  });
});//describe('TodoAPI', ()
