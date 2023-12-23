import Container from "../../components/Shared/Container";
const Contact = () => {
  return (
    <main className="py-14">
      <Container>
        <div className="max-w-lg mx-auto space-y-3 sm:text-center">
          <h3 className="font-semibold">Contact</h3>
          <p className="text-gray-950 text-3xl font-semibold sm:text-4xl">
            Get in touch
          </p>
          <p>We’d love to hear from you! Please fill out the form bellow.</p>
        </div>
        <div className="mt-12 max-w-lg mx-auto">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
              <div>
                <label className="font-medium">First name</label>
                <input
                  type="text"
                  required
                  className="w-full mt-2 px-3 py-2 text-black bg-black bg-opacity-5 outline-none border focus:bg-transparent shadow-sm"
                />
              </div>
              <div>
                <label className="font-medium">Last name</label>
                <input
                  type="text"
                  required
                  className="w-full mt-2 px-3 py-2 text-black bg-black bg-opacity-5 outline-none border focus:bg-transparent shadow-sm"
                />
              </div>
            </div>
            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                required
                className="w-full mt-2 px-3 py-2 text-black bg-black bg-opacity-5 outline-none border focus:bg-transparent shadow-sm"
              />
            </div>
            <div>
              <label className="font-medium">Phone number</label>
              <div className="relative mt-2">
                <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                  <select className="text-sm bg-transparent outline-none rounded-lg h-full">
                    <option>BD</option>
                    <option>IN</option>
                    <option>US</option>
                  </select>
                </div>
                <input
                  type="number"
                  placeholder="+ (880) 1700-000-000"
                  required
                  className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-black bg-opacity-5 outline-none border focus:bg-white"
                />
              </div>
            </div>
            <div>
              <label className="font-medium">Message</label>
              <textarea
                required
                className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-black bg-opacity-5 outline-none border focus:bg-white"
              ></textarea>
            </div>
            <button className="w-full mt-2 px-3 py-2 text-white bg-black outline-none border hover:rounded-lg shadow-sm">
              Submit
            </button>
          </form>
        </div>
      </Container>
    </main>
  );
};

export default Contact;
