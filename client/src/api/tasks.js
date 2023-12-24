import axiosPublic from "./axiosPublic";

export const createTask = async (task) => {
  const {data} = await axiosPublic.post("tasks", task);
  return data;
};

export const getTasks = async (email) => {
  const {data} = await axiosPublic(`tasks?email=${email}`);
  return data;
};

export const deleteTask = async (id) => {
  const {data} = await axiosPublic.delete(`task/${id}`);
  return data;
};

export const updateTaskStatus = async (id, status) => {
  const {data} = await axiosPublic.patch(`task/${id}`, {status});
  return data;
};
