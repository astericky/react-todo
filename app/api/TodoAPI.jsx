import $ from 'jquery'

export default {
  filterTodos(todos, showCompleted, searchText) {
    let filteredTodos = todos

    // filter by showCompleted
    filteredTodos = filteredTodos.filter(todo => {
      return !todo.completed || showCompleted
    })

    // filter by searchText
    filteredTodos = filteredTodos.filter(todo => todo.text.toLowerCase().includes(searchText.toLowerCase()))

    // sort todos with non-completed first
    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed) {
        return -1
      } else if (a.completed && !b.completed) {
        return 1
      } else {
        return 0
      }
    })
    return filteredTodos
  }
}
