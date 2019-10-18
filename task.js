// CREATIONAL DESIGN PATTERNS
//constractor
const Repo = require('./takRepository');


const Task = function(data){
 this.name = data.name;
 this.completed = false;
}

//Prototype

Task.prototype.complete = function (){
    console.log('completing task :', this.name);
    this.completed = true;
}
Task.prototype.save = function (){
    console.log('saving task', this.name)
}

module.exports = Task;
