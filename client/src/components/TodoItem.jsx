
const TodoItem = ({task}) => {
  return (
    <div className="bg-gray-200 pl-4 py-2 my-2">
      {task.title}
    </div>
  )
}

export default TodoItem
