import { FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";

function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
            R
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              RRVDXB
            </h1>
            <p className="text-xs text-gray-500">
              Premium Store
            </p>
          </div>
        </div>
        
<div className="flex">
  <input
    type="text"
    placeholder="Search products..."
    className="w-80 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none"
  />

  <button className="bg-red-600 text-white px-6 rounded-r-lg hover:bg-red-700">
    Search
  </button>
</div>

        {/* User Menu */}
        <div className="flex gap-6 items-center">
          <span className="flex items-center gap-2 cursor-pointer hover:text-red-600">
            <FaUser />
            Login
          </span>

          <span className="flex items-center gap-2 cursor-pointer hover:text-red-600">
            <FaHeart />
            Wishlist
          </span>

          <span className="flex items-center gap-2 cursor-pointer hover:text-red-600">
            <FaShoppingCart />
            Cart
          </span>
        </div>

      </div>
    </header>
  );
}

export default Header;