import Container from "../../components/Shared/Container";

const Features = () => {
  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
          />
        </svg>
      ),
      title: "Fast Refresh",
      desc: "Experience instant updates and quick refresh times, ensuring a seamless and responsive user interface.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      ),
      title: "Intuitive Design",
      desc: "Enjoy an intuitive user interface that simplifies navigation and enhances the overall user experience.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 12h14M12 5l7 7-7 7"
          />
        </svg>
      ),
      title: "Collaborative Workspaces",
      desc: "Foster teamwork with collaborative workspaces, allowing seamless sharing and coordination on tasks and projects.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 10h16M4 14h16M4 18h16"
          />
        </svg>
      ),
      title: "Smart Notifications",
      desc: "Stay informed with smart notifications, ensuring you never miss an important update or task deadline.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Deadline Tracking",
      desc: "Effortlessly track task deadlines and milestones, ensuring efficient project management and timely completion.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2a5 5 0 100 10 5 5 0 000-10zM12 18v-6M12 16v2"
          />
        </svg>
      ),
      title: "Customizable Priority Levels",
      desc: "Tailor your task priorities with customizable levels, allowing you to focus on what matters most to you and your team.",
    },
  ];

  return (
    <section className="py-5 md:py-14">
      <Container>
        <div className="max-w-xl mx-auto space-y-3 sm:text-center">
          <h3 className=" rounded-full bg-black text-white w-fit md:mx-auto px-4">Features</h3>
          <p className="text-3xl font-bold sm:text-4xl">
            Empower Your Productivity with SoloForge
          </p>
          <p>
            SoloForge, the ultimate task management application, brings you
            powerful features to streamline your workflow and enhance your
            productivity. Here&#39;s what you can achieve with SoloForge:
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => (
              <li key={idx} className="flex gap-x-4">
                <div className="flex-none w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold">
                    {item.title}
                  </h4>
                  <p className="mt-3">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Features;
