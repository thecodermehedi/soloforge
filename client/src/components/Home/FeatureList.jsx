import Container from "../Shared/Container";

const FeatureList = () => {
  return (
    <section className="mt-5 h-screen">
      <Container className="gap-x-12 items-center justify-between overflow-hidden md:flex">
        <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
          <div className="border-l-2 border-black pl-6 space-y-4">
            <h2 className="text-2xl font-bold  md:text-3xl text-black">
              Collaborative Task Creation
            </h2>
            <p>
              Easily create tasks with titles, descriptions, deadlines, and
              priority levels. Stay organized and manage your tasks efficiently.
            </p>
          </div>
          <div className="space-y-4 pl-6">
            <h2 className="text-2xl font-bold  md:text-3xl text-black">
              Drag-and-Drop Functionality
            </h2>
            <p>
              Effortlessly move tasks across the to-do list, ongoing list, and
              completed list using intuitive drag-and-drop functionality.
            </p>
          </div>
          <div className="space-y-4 pl-6">
            <h2 className="text-2xl font-bold  md:text-3xl text-black">
              Task Lists
            </h2>
            <p>
              Stay organized with separate lists for to-do, ongoing, and
              completed tasks. Easily track your progress and prioritize your
              work.
            </p>
          </div>
        </div>
        <div className="py-16 px-10">
          <img src="/dashboard.svg" className="" alt="" />
        </div>
      </Container>
    </section>
  );
};

export default FeatureList;
