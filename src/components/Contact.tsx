import contactImage from "../assets/musicIcons/Contact-image.png";

const Contact = () => {
  return (
    <section className="h-screen overflow-hidden flex flex-col lg:flex-row">
      <div className="hidden lg:flex lg:w-2/5 items-center justify-center p-6">
        <img
          src={contactImage}
          alt="Contact"
          className="max-h-[90vh] w-auto rounded-2xl object-contain"
        />
      </div>

      <div className="flex lg:hidden justify-center pt-6">
        <img
          src={contactImage}
          alt="Contact"
          className="w-48 rounded-2xl object-contain"
        />
      </div>

      <div className="w-full lg:w-3/5 flex items-center justify-center px-6 py-4">
        <div className="w-full max-w-lg">
          <h1 className="text-3xl lg:text-4xl font-bold">
            Let's Get In Touch.
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Or just reach out manually to{" "}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=varshiththopiyara.vh@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 font-medium hover:underline"
            >
              varshiththopiyara.vh@gmail.com
            </a>
          </p>

          <form className="mt-6 space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                required
                placeholder="Enter your name..."
                className="w-full rounded-full border  border-gray-300 px-4 py-2.5 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="Enter your email..."
                className="w-full rounded-full border border-gray-300 px-4 py-2.5 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                required
                placeholder="+91 99558 87744"
                className="w-full rounded-full border border-gray-300 px-4 py-2.5 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Message
              </label>

              <textarea
                rows={4}
                required
                placeholder="Enter your message..."
                className="w-full rounded-2xl border border-gray-300 px-4 py-3 resize-none outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-linear-to-r from-indigo-600 to-violet-600 py-3 text-base font-semibold text-white shadow-lg transition duration-300 hover:scale-[1.02]"
            >
              Submit Form →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
