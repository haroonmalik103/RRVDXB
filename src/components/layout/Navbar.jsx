import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const userEmail = localStorage.getItem("userEmail");

  const handleSearch = () => {
    if (searchText.trim() === "") {
      navigate("/products");
    } else {
      navigate(
        `/products?search=${encodeURIComponent(searchText.trim())}`
      );
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    alert("You have been logged out.");
    navigate("/");
  };

  return (
    <nav className="bg-white shadow">

      {/* Top Bar */}
      <div className="bg-black text-white text-center py-1">
        Free Shipping on Orders Over AED 489
      </div>

      {/* Main Navbar */}
      <div className="flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">
            R
          </div>

          <div>
            <h1 className="text-2xl font-bold">
              RRVDXB
            </h1>

            <p className="text-sm text-gray-500">
              Premium Store
            </p>
          </div>
        </Link>

        {/* Search */}
        <div className="flex w-[400px]">

          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search products..."
            className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 outline-none focus:border-red-500"
          />

          <button
            onClick={handleSearch}
            className="bg-red-600 text-white px-5 rounded-r-lg hover:bg-red-700"
          >
            Search
          </button>

        </div>

        {/* User Links */}
        <div className="flex items-center gap-6">

          {userEmail ? (
            <>
              <span className="text-sm text-gray-600">
                👤 {userEmail}
              </span>

              <button
                onClick={handleLogout}
                className="text-red-600 font-semibold hover:underline"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="font-semibold hover:text-red-600"
            >
              👤 Login
            </Link>
          )}

          <Link
            to="/wishlist"
            className="font-semibold hover:text-red-600"
          >
            ❤️ Wishlist
          </Link>

          <Link
            to="/cart"
            className="font-semibold hover:text-red-600"
          >
            🛒 Cart
          </Link>

        </div>

      </div>

      {/* Navigation Links */}
      <div className="flex justify-end gap-8 px-8 py-3 border-t">

        <Link
          to="/"
          className="font-semibold hover:text-red-600"
        >
          Home
        </Link>

        <Link
          to="/products"
          className="font-semibold hover:text-red-600"
        >
          Products
        </Link>

        <Link
          to="/about"
          className="font-semibold hover:text-red-600"
        >
          About
        </Link>

        <Link
          to="/contact"
          className="font-semibold hover:text-red-600"
        >
          Contact
        </Link>

        {!userEmail && (
          <Link
            to="/register"
            className="font-semibold hover:text-red-600"
          >
            Register
          </Link>
        )}

      </div>

    </nav>
  );
}

export default Navbar;