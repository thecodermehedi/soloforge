import Container from "../Shared/Container";

const Features = () => {
  return (
    <section className="my-5">
      <Container className="gap-x-12 items-center justify-between overflow-hidden md:flex">
        <div
          className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl"
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="1000"
        >
          <h2 className="text-3xl font-bold  md:text-4xl lg:text-5xl">
            Experience the Soloforge platform&#39;s responsive design on any
            device.
          </h2>
          <p>
            With Soloforge, you can seamlessly access your tasks and manage them
            from your phone, tablet, or PC.
          </p>
        </div>
        <div
          className="py-10 lg:py-16 lg:px-10"
          data-aos="fade-down"
          data-aos-delay="600"
          data-aos-duration="1000"
        >
          <img src="/responsive.svg" className="" alt="" />
        </div>
      </Container>
    </section>
  );
};

export default Features;
