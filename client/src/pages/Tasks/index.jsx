import Container from "../../components/Shared/Container";
import TodoItem from "../../components/TodoItem";
import useTask from "../../hooks/useTask";
const Tasks = () => {
  const {tasks} = useTask();
  console.log(tasks);
  // const taskArray = Array.from({length: 10}, (_, i) => i + 1);
  return (
    <section className="relative">
      <Container>
        <div className="flex flex-col items-center justify-center w-full h-full py-20">
          <h1 className="text-4xl font-bold">Tasks</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 w-full gap-8">
            <div className="min-h-64">
              <div className="bg-black py-2 text-white text-center">Todo</div>
              {tasks?.map((task, idx) => (
                <TodoItem key={idx} task={task} />
              ))}
            </div>
            <div className="min-h-64">
              <div className="bg-black py-2 text-white text-center">
                Ongoing
              </div>
            </div>
            <div className="min-h-64">
              <div className="bg-black py-2 text-white text-center">
                Completed
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Tasks;
