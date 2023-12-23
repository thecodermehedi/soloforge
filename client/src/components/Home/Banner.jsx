import {Link} from "react-router-dom";
import Container from "../Shared/Container";
const Banner = () => {
  return (
    <section className="mt-5">
      <Container className="gap-x-12 items-center justify-between overflow-hidden md:flex">
        <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
          <h2 className="text-4xl font-extrabold md:text-5xl">
            Boost Your Efficiency with Soloforge: Start Now!
          </h2>
          <p>Efficiently manage tasks with ease and collaboration.</p>
          <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
            <Link
              to="/auth/signup"
              className="block py-3 px-4 text-center text-white font-medium bg-black duration-300 hover:rounded-lg shadow-lg hover:shadow-none"
            >
              Lets Explore
            </Link>
            <Link
              to="/auth/signup"
              className="block py-3 px-4 text-center text-black hover:text-white font-medium duration-300 bg-white hover:bg-black border border-black"
            >
              Sign Up
            </Link>
          </div>
        </div>
        <div className="flex-none mt-14 md:mt-0 md:max-w-xl hidden md:block">
          <img src="/banner-image.svg" className="mt-5" alt="" />
        </div>
      </Container>
     
    </section>
  );
};

export default Banner;
