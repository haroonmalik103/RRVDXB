import { FaHeart, FaStar } from "react-icons/fa";
import products from "../../data/products";

function FeaturedProducts({ addToCart }) {
  return (
    <section className="max-w-7xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">
        Featured Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative border rounded-xl p-5 shadow hover:shadow-xl transition duration-300"
          >
            <span className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2 py-1 rounded">
              SALE
            </span>

            <button className="absolute top-3 right-3 text-gray-500 hover:text-red-600">
              <FaHeart />
            </button>

            <img
              src={product.image}
              alt={product.name}
              className="h-48 w-full object-cover rounded-lg"
            />

            <h3 className="mt-4 text-xl font-semibold">
              {product.name}
            </h3>

            <div className="flex text-yellow-500 mt-2 gap-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <p className="text-red-600 font-bold mt-2">
              {product.price}
            </p>

            <button
              onClick={() => addToCart(product)}
              className="mt-4 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;