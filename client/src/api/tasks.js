import axiosPublic from "./axiosPublic";

export const createTask = async (task) => {
  const {data} = await axiosPublic.post("tasks", task);
  return data;
};

export const getTasks = async (email) => {
  const {data} = await axiosPublic("tasks", email);
  console.log(email);
  return data;
};
