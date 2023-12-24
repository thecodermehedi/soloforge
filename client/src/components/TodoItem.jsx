import {Trash2} from "react-feather";
import useTask from "../hooks/useTask";
const TodoItem = ({task}) => {
  const {deleteTaskFn} = useTask();
  const handleTaskDeletion = async (id) => {
    await deleteTaskFn(id);
  };
  return (
    <div className="bg-gray-200 min-h-10 border border-black text-sm flex justify-between items-center">
     <p className="break-words pl-2 overflow-hidden w-48">{task.title}</p>
      <Trash2
        onClick={() => handleTaskDeletion(task?._id)}
        className="size-5 hover:text-red-500 cursor-pointer mr-3"
      />
    </div>
  );
};

export default TodoItem;
