import {useState} from "react";
import Container from "../Shared/Container";

const Testimonial = () => {
  const testimonials = [
    {
      avatar: "https://i.pravatar.cc/150?u=SarahThompson",
      name: "Sarah Thompson",
      title: "CEO, InnovateTech Solutions",
      quote:
        "Soloforge is indispensable for InnovateTech. Its intuitive design and MERN architecture boost productivity, providing a centralized hub for efficient collaboration. Highly recommended!",
    },
    {
      avatar: "https://i.pravatar.cc/150?u=AlexandraChen",
      name: "Alexandra Chen",
      title: "Lead Developer, CodeCrafters",
      quote:
        "Soloforge, with its MERN stack and intuitive interface, streamlines task management and communication at CodeCrafters. An impressive tool for boosting team efficiency!",
    },
    {
      avatar: "https://i.pravatar.cc/150?u=DavidFoster",
      name: "David Foster",
      title: "Product Manager, InnovateX Solutions",
      quote:
        "Soloforge elevates project management at InnovateX. Versatile and powered by the MERN stack, it simplifies workflow and improves team collaboration. Highly recommended!",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <section className="py-14">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="font-semibold pb-6">What people are saying</h3>
          <ul>
            {testimonials.map((item, idx) =>
              currentTestimonial == idx ? (
                <li key={idx}>
                  <figure>
                    <blockquote>
                      <p className="text-gray-900 text-xl font-semibold sm:text-2xl">
                        “{item.quote}“
                      </p>
                    </blockquote>
                    <div className="mt-6">
                      <img
                        src={item.avatar}
                        className="w-16 h-16 mx-auto rounded-full"
                      />
                      <div className="mt-3">
                        <span className="block text-gray-800 font-semibold">
                          {item.name}
                        </span>
                        <span className="block text-gray-600 text-sm mt-0.5">
                          {item.title}
                        </span>
                      </div>
                    </div>
                  </figure>
                </li>
              ) : (
                ""
              )
            )}
          </ul>
        </div>
        <div className="mt-6">
          <ul className="flex gap-x-3 justify-center">
            {testimonials.map((item, idx) => (
              <li key={idx}>
                <button
                  className={`w-2.5 h-2.5 rounded-full duration-150 ring-black focus:ring ${
                    currentTestimonial == idx ? "bg-black" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentTestimonial(idx)}
                ></button>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Testimonial;
