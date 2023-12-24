import useTask from "../../hooks/useTask";

const PreviousTasks = () => {
  const {deletedTasks} = useTask();
  console.log();
  return (
    <section className="py-10 space-y-5 max-w-sm md:max-w-3xl">
      <h1 className="text-2xl font-bold text-center">Previous Tasks</h1>
      {deletedTasks?.map((task) => (
        <div
          key={task?._id}
          className="bg-gray-200 min-h-10 border border-transparent hover:border-black cursor-pointer flex justify-between items-center"
        >
          <p className="px-4">{task?.title}</p>
        </div>
      ))}
    </section>
  );
};

export default PreviousTasks;
