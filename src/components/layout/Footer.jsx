function Footer() {
  return (
    <footer className="bg-black text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

        <div>
          <h2 className="text-2xl font-bold text-red-500">
            RRVDXB
          </h2>
          <p className="text-gray-400 mt-3">
            Premium Store for fashion, shoes, watches,
            bags and electronics.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">
            Quick Links
          </h3>

          <p className="text-gray-400 mb-2">Home</p>
          <p className="text-gray-400 mb-2">Products</p>
          <p className="text-gray-400 mb-2">About</p>
          <p className="text-gray-400">Contact</p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">
            Customer Service
          </h3>

          <p className="text-gray-400 mb-2">
            Shipping
          </p>

          <p className="text-gray-400 mb-2">
            Returns
          </p>

          <p className="text-gray-400">
            Support
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">
            Contact
          </h3>

          <p className="text-gray-400 mb-2">
            Email: support@rrvdxb.com
          </p>

          <p className="text-gray-400">
            Phone: +92 300 1234567
          </p>
        </div>

      </div>

      <div className="border-t border-gray-700 text-center py-4">
        <p className="text-gray-400">
          © 2026 RRVDXB. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;