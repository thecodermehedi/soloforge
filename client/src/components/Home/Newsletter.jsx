import Container from "../Shared/Container";

const Newsletter = () => {
  return (
    <Container>
      <div className="space-y-3 text-center">
        <h3 className="text-3xl md:text-4xl font-bold">
          Subscribe to Our Newsletter
        </h3>
        <p className="text-sm">
          Get updates and tips on effective task management.
        </p>
      </div>
      <div className="mt-6">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="items-center justify-center flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 text-black bg-black bg-opacity-5 outline-none border focus:bg-transparent shadow-sm max-w-sm"
          />
          <button className="w-full px-4 py-2 bg-black text-white hover:rounded-lg  duration-150 outline-none sm:mt-0 sm:ml-3 sm:w-auto">
            Subscribe
          </button>
        </form>
        <p className="mt-3 text-center text-xs">
          By joining, you agree to our Terms and Conditions.
        </p>
      </div>
    </Container>
  );
};

export default Newsletter;
