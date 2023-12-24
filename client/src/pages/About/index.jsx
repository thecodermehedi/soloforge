const About = () => {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About Soloforge
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-900 mt-4 md:text-xl">
            Soloforge is a task management application built to make team
            collaboration effortless and efficient. We provide a robust set of
            tools that streamline task tracking, project management, and team
            communication.
          </p>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About Developer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-8 mt-8">
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-sm"
              data-v0-t="card"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                  <span className="flex h-full w-full items-center justify-center rounded-full bg-black bg-opacity-10">
                    MH
                  </span>
                </span>
                <h3 className="text-2xl font-semibold leading-none tracking-tight">
                  Mehedi Hasan
                </h3>
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 w-fit text-xs font-semibold bg-black text-white">
                  @thecodermehedi
                </div>
              </div>
              <div className="p-6">
                <p className="">
                  A junior front-end developer passionate about creating
                  intuitive user interfaces and enhancing user experience.
                </p>
              </div>
              <div className="flex items-center p-6">
                <a className="underline" href="#"></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
