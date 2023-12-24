import Container from "../Shared/Container";

const Contact = () => {
  const contactMethods = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      ),
      title: "Email",
      contact: "hello@soloforge.io",
      desc: "We're here to help. Contact us for any inquiries or support needs.",
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
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
      ),
      title: "Phone",
      contact: "+1 (555) 123-4567",
      desc: "Our team is ready to assist you. Reach out to us today.",
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
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
      ),
      title: "Office",
      contact: "123 Main St, Anytown, USA",
      desc: "Get in touch with us for any questions or assistance you may need.",
    },
  ];

  return (
    <main className="py-16 lg:py-28">
      <Container className="text-center">
        <div className="space-y-3">
          <p className="text-3xl font-semibold sm:text-4xl">Contact Us</p>
          <p>Have any questions or need support? Reach out to us.</p>
        </div>
        <div>
          <ul className="mt-5 py-10 flex flex-wrap justify-center gap-x-12 gap-y-6 items-center lg:gap-x-24">
            {contactMethods.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-center items-center w-64 space-y-4 text-center"
              >
                <span>{item.icon}</span>
                <p className="font-extrabold text-lg md:text-2xl">
                  {item.title}
                </p>
                <p className="text-xs">{item.desc}</p>
                <p className="text-xs underline">{item.contact}</p>
              </div>
            ))}
          </ul>
        </div>
      </Container>
    </main>
  );
};

export default Contact;
