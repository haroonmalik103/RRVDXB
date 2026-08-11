import { Link } from "react-router-dom";

function WishlistPage({
  wishlist,
  removeFromWishlist,
  addToCart,
}) {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <div className="bg-black text-white py-10 text-center">
        <h1 className="text-4xl font-bold">
          My Wishlist
        </h1>

        <p className="text-gray-300 mt-2">
          Your favorite products
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">

        {wishlist.length === 0 ? (
          <div className="bg-white rounded-xl shadow p-10 text-center">

            <h2 className="text-2xl font-bold">
              Your wishlist is empty
            </h2>

            <p className="text-gray-500 mt-2">
              Add products to your wishlist to see them here.
            </p>

            <Link
              to="/products"
              className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg mt-6 hover:bg-red-700"
            >
              Browse Products
            </Link>

          </div>
        ) : (

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

            {wishlist.map((product) => (

              <div
                key={product.id}
                className="bg-white border rounded-xl p-5 shadow"
              >

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-48 w-full object-cover rounded-lg"
                />

                <h2 className="text-xl font-semibold mt-4">
                  {product.name}
                </h2>

                <p className="text-red-600 font-bold text-lg mt-2">
                  {product.price}
                </p>

                {/* Add to Cart */}
                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-red-600 text-white py-2 rounded-lg mt-4 hover:bg-red-700"
                >
                  Add to Cart
                </button>

                {/* Remove */}
                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="w-full border border-red-600 text-red-600 py-2 rounded-lg mt-2 hover:bg-red-50"
                >
                  Remove
                </button>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
}

export default WishlistPage;