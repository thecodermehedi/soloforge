import Container from "../Shared/Container";

const Features = () => {
  return (
    <section className="mt-5 h-screen">
      <Container className="gap-x-12 items-center justify-between overflow-hidden md:flex">
        <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
          <h2 className="text-3xl font-bold  md:text-4xl text-black">
            Experience the Soloforge platform&#39;s responsive design on any
            device.
          </h2>
          <p>
            With Soloforge, you can seamlessly access your tasks and manage them
            from your phone, tablet, or PC.
          </p>
        </div>
        <div className="py-16 px-10">
          <img src="https://via.placeholder.com/500x600" className="" alt="" />
        </div>
      </Container>
    </section>
  );
};

export default Features;
