import { Link, useSearchParams } from "react-router-dom";
import { FaHeart, FaStar } from "react-icons/fa";
import Navbar from "../components/layout/Navbar";
import products from "../data/products";

function ProductsPage({ addToCart, addToWishlist }) {
  const [searchParams] = useSearchParams();

  const search = searchParams.get("search") || "";

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">

      <Navbar />

      {/* PAGE HEADER */}
      <div className="bg-black text-white py-12 text-center">
        <h1 className="text-4xl font-bold">
          Our Products
        </h1>

        <p className="text-gray-300 mt-2">
          Find your favorite products
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* SEARCH RESULT */}
        {search && (
          <p className="text-center mb-8 text-gray-600">
            Search results for:{" "}
            <strong>{search}</strong>
          </p>
        )}

        {/* PRODUCTS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          {filteredProducts.map((product) => (

            <div
              key={product.id}
              className="relative bg-white border rounded-xl p-5 shadow hover:shadow-xl transition"
            >

              {/* WISHLIST BUTTON */}
              <button
                onClick={() => addToWishlist(product)}
                className="absolute top-4 right-4 text-gray-500 hover:text-red-600 text-xl"
              >
                <FaHeart />
              </button>

              {/* IMAGE */}
              <Link to={`/products/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-48 w-full object-cover rounded-lg"
                />
              </Link>

              {/* NAME */}
              <Link to={`/products/${product.id}`}>
                <h2 className="text-xl font-semibold mt-4 hover:text-red-600">
                  {product.name}
                </h2>
              </Link>

              {/* RATING */}
              <div className="flex gap-1 text-yellow-500 mt-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* PRICE */}
              <p className="text-red-600 font-bold text-lg mt-2">
                {product.price}
              </p>

              {/* ADD TO CART */}
              <button
                onClick={() => addToCart(product)}
                className="w-full bg-red-600 text-white py-2 rounded-lg mt-4 hover:bg-red-700"
              >
                Add to Cart
              </button>

            </div>

          ))}

        </div>

        {/* NO RESULTS */}
        {filteredProducts.length === 0 && (
          <div className="text-center mt-12">

            <h2 className="text-2xl font-bold">
              No products found
            </h2>

            <p className="text-gray-500 mt-2">
              Try searching for Watch, Shoes, Bag or Headphones.
            </p>
          </div>
        )}

      </div>

    </div>
  );
}

export default ProductsPage;