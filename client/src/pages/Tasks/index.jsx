import {useEffect, useState} from "react";
import TodoItem from "../../components/TodoItem";
import useTask from "../../hooks/useTask";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
const Tasks = () => {
  const {todoTasks, ongoingTasks, completedTasks, updateTaskStatusFn} =
    useTask();
  const [todoTasksState, setTodoTasksState] = useState([]);
  const [ongoingTasksState, setOngoingTasksState] = useState([]);
  const [completedTasksState, setCompletedTasksState] = useState([]);

  useEffect(() => {
    if (JSON.stringify(todoTasks) !== JSON.stringify(todoTasksState)) {
      setTodoTasksState(todoTasks);
    }
    if (JSON.stringify(ongoingTasks) !== JSON.stringify(ongoingTasksState)) {
      setOngoingTasksState(ongoingTasks);
    }
    if (
      JSON.stringify(completedTasks) !== JSON.stringify(completedTasksState)
    ) {
      setCompletedTasksState(completedTasks);
    }
  }, [
    todoTasks,
    ongoingTasks,
    completedTasks,
    todoTasksState,
    ongoingTasksState,
    completedTasksState,
  ]);

  const handleDragAndDrop = async (result) => {
    const { source, destination } = result;
  
    // Ignore if no destination (dropped outside droppable area) or if dropped in the same place
    if (!destination || (source.droppableId === destination.droppableId && source.index === destination.index)) {
      return;
    }
  
    // Create a copy of the tasks state
    const todos = Array.from(todoTasksState);
    const ongoing = Array.from(ongoingTasksState);
    const completed = Array.from(completedTasksState);
  
    // Remove the task from the source list
    const sourceList = source.droppableId === "0" ? todos : source.droppableId === "1" ? ongoing : completed;
    const [removed] = sourceList.splice(source.index, 1);
  
    // Add the task to the destination list
    const destinationList = destination.droppableId === "0" ? todos : destination.droppableId === "1" ? ongoing : completed;
    destinationList.splice(destination.index, 0, removed);
  
    // Update the state with the new lists
    if (source.droppableId === "0" || destination.droppableId === "0") {
      setTodoTasksState(todos);
    }
    if (source.droppableId === "1" || destination.droppableId === "1") {
      setOngoingTasksState(ongoing);
    }
    if (source.droppableId === "2" || destination.droppableId === "2") {
      setCompletedTasksState(completed);
    }
  
    try {
      // Get the id of the task that was dragged
      const id = removed._id;
  
      // Determine the new status based on the droppableId of the destination
      let status;
      switch (destination?.droppableId) {
        case "0":
          status = "todo";
          break;
        case "1":
          status = "ongoing";
          break;
        case "2":
          status = "completed";
          break;
        default:
          throw new Error(`Invalid droppableId: ${destination.droppableId}`);
      }
  
      // If the status is the same as before, no need to update
      if (removed.status === status) return;
  
      // Update the status of the task
      await updateTaskStatusFn({ id, status });
    } catch (error) {
      console.error("handleDragAndDrop error:", error);
  
      // If the database update fails, revert the state back to what it was before
      setTodoTasksState(todoTasks);
      setOngoingTasksState(ongoingTasks);
      setCompletedTasksState(completedTasks);
    }
  };
  return (
    <DragDropContext className="relative" onDragEnd={handleDragAndDrop}>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-4xl font-bold">Tasks</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 w-full gap-8">
          {[todoTasksState, ongoingTasksState, completedTasksState]?.map(
            (tasks, index) => (
              <div className="min-h-64" key={index}>
                <div className="bg-black py-2 text-white text-center">
                  {index === 0 ? "Todo" : index === 1 ? "Ongoing" : "Completed"}
                </div>
                <Droppable droppableId={index.toString()}>
                  {(provided) => (
                    <div
                      className="bg-gray-200 p-2 min-h-64"
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {tasks?.map((task, index) => (
                        <Draggable
                          key={task?._id}
                          draggableId={task?._id}
                          index={index}
                        >
                          {(provided) => (
                            <div
                              className="mb-2"
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                            >
                              <TodoItem task={task} />
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            )
          )}
        </div>
      </div>
    </DragDropContext>
  );
};

export default Tasks;
