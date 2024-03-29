// CREATIONAL DESIGN PATTERNS
//modules
const repo = function() {
  const get = function(id) {
    console.log('getting task', id);
    return {
      name: 'new task from db'
    }; 
  };

  const save = function(task) {
    console.log('saving', task.name, 'to the db');
  };
 
  return {
    get: get,
    save: save
  };
};

module.exports = repo();
