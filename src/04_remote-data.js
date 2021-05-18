const { default: got } = require("got/dist/source")

/**
 *  This function fetches all todos from https://jsonplaceholder.typicode.com/todos
 *  and all users from https://jsonplaceholder.typicode.com/users
 *  The function returns how many todos each user has completed.
 *  Example: If user = [{ id: 1, username: 'Tom'}, { id: 2, username: 'Jerry'}]
 *  and todos = [{ id: 2, userId: 1, completed: true}]
 *  Then the function would output [{ username: 'Tom', completed: 0}, { username: 'Jerry', completed: 1}]
 */
async function solution () {
  try {
    const todos = JSON.parse((await got.get('https://jsonplaceholder.typicode.com/todos')).body)
    const users = JSON.parse((await got.get('https://jsonplaceholder.typicode.com/users')).body)
    const usersMap = {};
    console.log(todos)
    users.forEach(e => usersMap[e.id] = {...e, completed: 0} );
    todos.forEach(e => { if (e.completed) usersMap[e.userId].completed ++ });
    return Object.keys(usersMap).map(e => usersMap[e]);
  } catch (e) {
    console.log(e);
  }
}

module.exports = solution
