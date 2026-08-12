import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields.");
      return;
    }

    alert("Thank you! Your message has been sent.");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Header */}
      <section className="bg-black text-white py-16 text-center">
        <h1 className="text-5xl font-bold">
          Contact Us
        </h1>

        <p className="text-gray-300 mt-4 text-lg">
          We would love to hear from you
        </p>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 gap-8">

          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-lg p-8">

            <h2 className="text-3xl font-bold mb-6">
              Get In Touch
            </h2>

            <p className="text-gray-600 mb-8">
              If you have any questions about our products,
              orders or services, feel free to contact us.
            </p>

            <div className="space-y-6">

              <div>
                <h3 className="font-bold text-lg">
                  Email
                </h3>

                <p className="text-gray-500">
                  support@rrvdxb.com
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg">
                  Phone
                </h3>

                <p className="text-gray-500">
                  +92 300 1234567
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg">
                  Location
                </h3>

                <p className="text-gray-500">
                  Islamabad, Pakistan
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg">
                  Working Hours
                </h3>

                <p className="text-gray-500">
                  Monday - Saturday
                </p>

                <p className="text-gray-500">
                  9:00 AM - 6:00 PM
                </p>
              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">

            <h2 className="text-3xl font-bold mb-6">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit}>

              <label className="block font-semibold mb-2">
                Name
              </label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full border rounded-lg px-4 py-3 mb-5 outline-none focus:border-red-500"
              />

              <label className="block font-semibold mb-2">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your email"
                className="w-full border rounded-lg px-4 py-3 mb-5 outline-none focus:border-red-500"
              />

              <label className="block font-semibold mb-2">
                Message
              </label>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows="6"
                className="w-full border rounded-lg px-4 py-3 mb-6 outline-none focus:border-red-500"
              />

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>

      <Footer />
    </div>
  );
}

export default ContactPage;