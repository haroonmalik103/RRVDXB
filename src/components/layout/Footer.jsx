import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-white mt-16">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold">
              RRVDXB
            </h2>

            <p className="text-gray-400 mt-4">
              Your trusted online store for premium
              products at affordable prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">

              <Link
                to="/"
                className="hover:text-white"
              >
                Home
              </Link>

              <Link
                to="/products"
                className="hover:text-white"
              >
                Products
              </Link>

              <Link
                to="/about"
                className="hover:text-white"
              >
                About
              </Link>

              <Link
                to="/contact"
                className="hover:text-white"
              >
                Contact
              </Link>

            </div>
          </div>

          {/* Customer */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              Customer
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">

              <Link
                to="/login"
                className="hover:text-white"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="hover:text-white"
              >
                Register
              </Link>

              <Link
                to="/wishlist"
                className="hover:text-white"
              >
                Wishlist
              </Link>

              <Link
                to="/cart"
                className="hover:text-white"
              >
                Shopping Cart
              </Link>

            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              Contact Us
            </h3>

            <div className="text-gray-400 space-y-3">

              <p>
                📍 Rawalpindi, Pakistan
              </p>

              <p>
                📧 support@rrvdxb.com
              </p>

              <p>
                📞 +92 300 1234567
              </p>

            </div>
          </div>

        </div>

        <hr className="border-gray-700 my-8" />

        <div className="text-center text-gray-500">
          <p>
            © 2026 RRVDXB. All rights reserved.
          </p>
        </div>

      </div>

    </footer>
  );
}

export default Footer;