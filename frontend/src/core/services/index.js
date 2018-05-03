import Entity from './Entity';
import Fields from './Fields';

class Todo extends Entity{};
Todo.prototype.name = 'adsaf';
Todo.prototype.description = 'Description';
Todo.prototype.getInfo = function (){
    return 'aaa';
}

Fields.define_String(Todo, 'todoName');

var TodoObj = new Todo();


console.log(TodoObj);