// actions.js
// - this is where we will keep all our client actions for interacting with our
// server
var server = require('socket.io-client')('http://localhost:3003/')

function create(title) {
  // Emit the new todo as some data to the server
  server.emit('make', {
    title: title,
  })
}

// Deletes and item
function deleteTodo(todo) {
  server.emit('delete', todo)
}

function deleteAll() {
  server.emit('deleteAll')
}

// Mark an item as complete
function complete(todo) {
  server.emit('markComplete', todo)
}

function completeAll() {
  server.emit('completeAll')
}

// Mark an item as complete
function incomplete(todo) {
  server.emit('markIncomplete', todo)
}

module.exports = {
  create,
  deleteTodo,
  deleteAll,
  complete,
  completeAll,
  incomplete,
}