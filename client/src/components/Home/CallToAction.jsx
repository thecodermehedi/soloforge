import {Link} from "react-router-dom";
import Container from "../Shared/Container";

const CallToAction = () => {
  return (
    <section className="mt-5 h-screen">
      <Container className="gap-x-12 items-center justify-between overflow-hidden md:flex">
        <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
          <h2 className="text-2xl font-bold  md:text-3xl text-black">
            Unlock Your Task <br /> Management Potential.
          </h2>
          <p>Sign up or log in to access the full task management dashboard.</p>
          <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
            <Link
              to="/auth/signup"
              className="block py-3 px-4 text-center text-white font-medium bg-black duration-300 hover:rounded-lg shadow-lg hover:shadow-none"
            >
              Sign Up
            </Link>
            <Link
              to="/auth/signup"
              className="block py-3 px-4 text-center text-black hover:text-white font-medium duration-300 bg-white hover:bg-black border border-black"
            >
              Log In
            </Link>
          </div>
        </div>
        <div className="py-16 px-10">
          <img src="/cta.svg" className="" alt="" />
        </div>
      </Container>
    </section>
  );
};

export default CallToAction;
