// Contact Page

function ContactPage() {
  return (
    <section className="py-4 pb-24">
      <div className="container">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase leading-none">
          Contact
        </h1>
        <form className="mt-8 space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-light md:text-base lg:text-lg text-white/65"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full px-3 py-2 bg-neutral-900 border border-white/20 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-light md:text-base lg:text-lg text-white/65"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-3 py-2 bg-neutral-900 border border-white/20 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-light md:text-base lg:text-lg text-white/65"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1 block w-full px-3 py-2 bg-neutral-900 border border-white/20 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactPage;
