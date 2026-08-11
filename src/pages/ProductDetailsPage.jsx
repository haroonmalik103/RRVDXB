import { Link, useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetailsPage() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            Product Not Found
          </h1>

          <Link
            to="/products"
            className="inline-block mt-5 bg-red-600 text-white px-6 py-2 rounded-lg"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <Link
          to="/products"
          className="text-red-600 hover:underline"
        >
          ← Back to Products
        </Link>

        <div className="grid md:grid-cols-2 gap-12 mt-8 bg-white p-8 rounded-xl shadow">

          {/* Product Image */}
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[450px] object-cover rounded-xl"
            />
          </div>

          {/* Product Information */}
          <div className="flex flex-col justify-center">

            <span className="bg-red-100 text-red-600 px-3 py-1 rounded w-fit text-sm">
              SALE
            </span>

            <h1 className="text-4xl font-bold mt-4">
              {product.name}
            </h1>

            <div className="flex gap-1 text-yellow-500 mt-4">
              ⭐⭐⭐⭐⭐
            </div>

            <p className="text-3xl font-bold text-red-600 mt-5">
              {product.price}
            </p>

            <p className="text-gray-600 mt-6 leading-7">
              This is a high-quality product from our collection.
              Shop with confidence and enjoy our reliable service.
            </p>

            <div className="flex gap-4 mt-8">

              <button className="flex-1 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700">
                Add to Cart
              </button>

              <button className="px-5 border rounded-lg hover:bg-gray-100">
                ♡
              </button>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;