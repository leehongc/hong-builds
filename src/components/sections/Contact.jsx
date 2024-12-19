const Contact = () => {
    return (
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Get In Touch</h2>
          <p className="text-center text-gray-600 mb-12">
            Have a question or want to work together? Feel free to reach out!
          </p>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-green-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-green-500"
            />
            <textarea
              placeholder="Message"
              rows="5"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-green-500"
            ></textarea>
            <button className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  };

  export default Contact;