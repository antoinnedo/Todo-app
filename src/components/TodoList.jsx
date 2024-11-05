import { TodoCard } from "./TodoCard";

//changing the list
export function TodoList(props) {
  const { todos, selectedTab, handleDeleteTodo } = props

  //changing the list when switching tabs
  const filterTodosList = selectedTab === 'All' ?
    todos :
    selectedTab === 'Completed' ?
      todos.filter(val => val.complete) :
      todos.filter(val => !val.complete)

  return (
    <>
      
      {filterTodosList.map((todo, todoIndex) => {
        return (
          <TodoCard 
            key={todoIndex} 
            todoIndex={todoIndex}
            {...props}
            todo = {todo}/>
        )
      })}

    </>
  )
}
