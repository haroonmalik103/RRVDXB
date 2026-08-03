function Footer() {
  return (
    <footer className="bg-black text-white py-10 mt-10">
      <div className="max-w-7xl mx-auto px-10 grid grid-cols-3 gap-8">

        <div>
          <h2 className="text-2xl font-bold text-yellow-500">
            RRVDXB
          </h2>
          <p className="mt-3 text-gray-400">
            Your trusted online watch store.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">
            Quick Links
          </h3>

          <ul className="space-y-2">
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">
            Contact
          </h3>

          <p>Email: support@rrvdxb.com</p>
          <p>Phone: +971 123456789</p>
          <p>Dubai, UAE</p>
        </div>

      </div>

      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        © 2026 RRVDXB. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;