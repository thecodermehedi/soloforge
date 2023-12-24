import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {createTask, deleteTask, getTasks, updateTaskStatus} from "../api/tasks";
import useAuth from "./useAuth";
const useTask = () => {
  const {user} = useAuth();
  const queryClient = useQueryClient();
  const {data: tasks} = useQuery({
    enabled: !!user?.email,
    queryKey: ["tasks"],
    queryFn: async () => await getTasks(user.email),
    onError: (error) => console.error("useQuery error:", error),
  });

  const {mutateAsync: createTaskFn} = useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      queryClient.invalidateQueries("tasks");
    },
  });

  const {mutateAsync: deleteTaskFn} = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries("tasks");
    },
  });

  const {mutateAsync: updateTaskStatusFn} = useMutation({
    mutationFn: async ({id, status}) => await updateTaskStatus(id, status),
    onSuccess: () => {
      queryClient.invalidateQueries("tasks");
    },
  });

  const todoTasks = tasks?.filter((task) => task.status === "todo");
  const ongoingTasks = tasks?.filter((task) => task.status === "ongoing");
  const completedTasks = tasks?.filter((task) => task.status === "completed");

  return {
    todoTasks,
    ongoingTasks,
    completedTasks,
    createTaskFn,
    deleteTaskFn,
    updateTaskStatusFn,
  };
};

export default useTask;
