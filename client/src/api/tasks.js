import axiosSecure from "./axiosSecure";

export const createTask = async (task) => {
  const {data} = await axiosSecure.post("tasks", task);
  return data;
};

export const getTasks = async (email) => {
  const {data} = await axiosSecure(`tasks?email=${email}`);
  return data;
};

export const deleteTask = async (id) => {
  const {data} = await axiosSecure.delete(`task/${id}`);
  return data;
};

export const updateTaskStatus = async (id, status) => {
  const {data} = await axiosSecure.patch(`task/${id}`, {status});
  return data;
};
