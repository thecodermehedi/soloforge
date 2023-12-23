const Pricing = () => {
  const plans = [
    {
      name: "Free Plan",
      desc: "Get started with essential features at no cost.",
      price: 0,
      isMostPop: false,
      features: [
        "Basic task management",
        "Limited storage",
        "Single user access",
        "Community support",
      ],
    },
    {
      name: "Starter Plan",
      desc: "Ideal for small teams or personal use.",
      price: 9.99,
      isMostPop: true,
      features: [
        "Unlimited tasks",
        "5 GB storage",
        "Collaboration tools",
        "Priority email support",
      ],
    },
    {
      name: "Pro Plan",
      desc: "Enhanced features for growing teams.",
      price: 19.99,
      isMostPop: false,
      features: [
        "Advanced project tracking",
        "15 GB storage",
        "Team collaboration",
        "Priority chat support",
      ],
    },
  ];

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="relative max-w-xl mx-auto sm:text-center">
          <h3 className="text-3xl font-semibold sm:text-4xl">
            Choose Your Plan
          </h3>
          <div className="mt-3 max-w-xl">
            <p>Flexible pricing options to suit every need.</p>
          </div>
        </div>
        <div className="mt-16 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3">
          {plans.map((item, idx) => (
            <div
              key={idx}
              className={`relative flex-1 flex items-stretch flex-col border-2 mt-6 sm:mt-0 ${
                item.isMostPop ? "mt-10" : ""
              }`}
            >
              {item.isMostPop ? (
                <span className="w-32 absolute -top-5 left-0 right-0 mx-auto px-3 py-2 rounded-full border shadow-md bg-black text-center text-white text-sm font-semibold">
                  Most popular
                </span>
              ) : (
                ""
              )}
              <div className="p-8 space-y-4 border-b">
                <span className="font-medium">{item.name}</span>
                <div className="text-gray-900 text-3xl font-semibold">
                  ${item.price}{" "}
                  <span className="text-xl text-gray-600 font-normal">/mo</span>
                </div>
                <p className="text-xs">{item.desc}</p>
                <button className="px-3 py-3 hover:rounded-lg w-full font-semibold text-sm duration-150 text-white bg-black">
                  Get Started
                </button>
              </div>
              <ul className="p-8 space-y-3">
                <li className="pb-2 font-medium">
                  <p>Features</p>
                </li>
                {item.features.map((featureItem, idx) => (
                  <li key={idx} className="flex items-center gap-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    {featureItem}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
