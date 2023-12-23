import {QueryClient, useMutation, useQuery} from "@tanstack/react-query";
import {createTask, getTasks} from "../api/tasks";
import useAuth from "./useAuth";
const useTask = () => {
  const {user} = useAuth();
  const queryClient = new QueryClient();
  const {data: tasks} = useQuery({
    enabled: !!user?.email,
    queryKey: ["tasks"],
    queryFn: async () => await getTasks(user.email),
  });

  const {mutateAsync: createTaskFn} = useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      queryClient.invalidateQueries("tasks");
    }
  });

  return {tasks, createTaskFn};

};

export default useTask;
