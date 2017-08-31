const Todo = require('./todo')

// Our mock Database for todos
module.exports = class DB {
  constructor(init = []) {
    this.db = init.map((todo, id) => new Todo(id, todo.title))
    this.id = init.length
  }

  insert(todo) {
    const newTodo = new Todo(this.id, todo.title)
    this.db.push(newTodo)
    this.id += 1
    return newTodo
  }

  remove(todo) {
    this.db = this.db.reduce((acc, curr) => {
      if (curr.id === todo.id) return acc
      else return acc.concat(curr)
    }, [])
  }

  update(t, status, callback = () => {}) {
    for (var todo of this.db) {
      if (todo.id === t.id) {
        todo.completed = status
        callback()
        return
      }
    }
    console.error(`Todo item ${t.id} was not found. Could not mark complete`)
  }

  empty() {
    this.db = []
  }
}
