import axiosPublic from "./axiosPublic";

export const createTask = async (task) => {
  const {data} = await axiosPublic.post("tasks", task);
  return data;
};

export const getTasks = async (email) => {
  console.log(email);
  const {data} = await axiosPublic(`tasks?email=${email}`);
  console.log(data);
  return data;
};
