import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Header */}
      <section className="bg-black text-white py-16 text-center">
        <h1 className="text-5xl font-bold">
          About RRVDXB
        </h1>

        <p className="text-gray-300 mt-4 text-lg">
          Your trusted online shopping destination
        </p>
      </section>

      {/* About Content */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="bg-white rounded-2xl shadow-lg p-10">

          <h2 className="text-3xl font-bold mb-6">
            Welcome to RRVDXB
          </h2>

          <p className="text-gray-600 text-lg leading-8 mb-6">
            RRVDXB is a modern e-commerce platform designed
            to provide customers with a simple, convenient and
            enjoyable online shopping experience.
          </p>

          <p className="text-gray-600 text-lg leading-8 mb-6">
            Our store offers a variety of products including
            fashion items, shoes, watches, bags and electronics.
            We focus on providing quality products at competitive
            prices.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-10">

            <div className="border rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold mb-3">
                Quality Products
              </h3>

              <p className="text-gray-500">
                We provide carefully selected products for
                our customers.
              </p>
            </div>

            <div className="border rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold mb-3">
                Easy Shopping
              </h3>

              <p className="text-gray-500">
                Browse products, add them to your cart and
                checkout easily.
              </p>
            </div>

            <div className="border rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold mb-3">
                Customer Support
              </h3>

              <p className="text-gray-500">
                We are committed to providing a smooth
                shopping experience.
              </p>
            </div>

          </div>

        </div>

      </section>

      <Footer />
    </div>
  );
}

export default AboutPage;