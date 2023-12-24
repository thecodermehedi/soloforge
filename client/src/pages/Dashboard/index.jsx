import Container from "../../components/Shared/Container";
import useAuth from "../../hooks/useAuth";
import useTask from "../../hooks/useTask";
const Dashboard = () => {
  const {user} = useAuth();
  const {tasksCount} = useTask();
  return (
    <section className="bg-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Welcome {user?.displayName || "User"}!
          </h2>

          <p className="mt-4 text-gray-500 sm:text-xl">
            Your journey towards efficient task management starts here.
          </p>
        </div>

        <div className="mt-8 sm:mt-12">
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="flex flex-col rounded-lg bg-gray-200 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                Todos
              </dt>

              <dd className="text-4xl font-extrabold  md:text-5xl">
                {tasksCount?.todo || 0}
              </dd>
            </div>

            <div className="flex flex-col rounded-lg bg-gray-200 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                Ongoings
              </dt>
              <dd className="text-4xl font-extrabold  md:text-5xl">
                {tasksCount?.ongoing || 0}
              </dd>
            </div>

            <div className="flex flex-col rounded-lg bg-gray-200 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                Completed
              </dt>
              <dd className="text-4xl font-extrabold  md:text-5xl">
                {tasksCount?.completed || 0}
              </dd>
            </div>
          </dl>
        </div>
      </Container>
    </section>
  );
};

export default Dashboard;
