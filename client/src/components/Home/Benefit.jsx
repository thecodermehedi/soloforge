import {Link} from "react-router-dom";
import Container from "../Shared/Container";

const Benefit = () => {
  return (
    <section className="lg:mt-14">
      <Container className="gap-x-12 items-center justify-between overflow-hidden md:flex">
        <div
          className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl"
          data-aos="fade-right"
          data-aos-delay="600"
          data-aos-duration="1000"
        >
          <h4 className="font-medium">Efficiency</h4>
          <h2 className="text-2xl font-bold  md:text-3xl text-black">
            Streamline your tasks with Soloforge
          </h2>
          <p>
            Soloforge is the ultimate task management platform that helps
            developers, corporate professionals, bankers, and more stay
            organized and productive. With its intuitive interface and powerful
            features, Soloforge simplifies task management and enhances
            collaboration.
          </p>
          <div className="flex flex-col md:flex-row  gap-4 items-center">
            <div>
              <h3 className="font-bold">Boost Productivity</h3>
              <p>
                Stay focused, prioritize tasks, and accomplish more with
                Soloforge.
              </p>
            </div>
            <div>
              <h3 className="font-bold">Effortless Collaboration</h3>
              <p>
                Work seamlessly with your team, assign tasks, and track progress
                in real-time.
              </p>
            </div>
          </div>
          <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
            <Link
              to="/auth/signup"
              className="block py-3 px-4 text-center text-white font-medium bg-black duration-300 hover:rounded-lg shadow-lg hover:shadow-none"
            >
              Learn More
            </Link>
            <Link
              to="/auth/signup"
              className="block py-3 px-4 text-center text-black hover:text-white font-medium duration-300 bg-white hover:bg-black border border-black"
            >
              Sign Up &gt;
            </Link>
          </div>
        </div>
        <div
          className="py-10 lg:py-16 lg:px-10"
          data-aos="fade-left"
          data-aos-delay="600"
          data-aos-duration="1000"
        >
          <img src="/task.svg" className="" alt="" />
        </div>
      </Container>
    </section>
  );
};

export default Benefit;
