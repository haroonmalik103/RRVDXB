import { Link } from "react-router-dom";

function OrderSuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">

      <div className="bg-white rounded-2xl shadow-lg p-10 text-center max-w-lg w-full">

        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mx-auto">
          ✓
        </div>

        <h1 className="text-3xl font-bold mt-6">
          Order Placed Successfully!
        </h1>

        <p className="text-gray-500 mt-3">
          Thank you for shopping with RRVDXB.
          Your order has been received successfully.
        </p>

        <Link
          to="/products"
          className="block bg-red-600 text-white py-3 rounded-lg font-semibold mt-8 hover:bg-red-700"
        >
          Continue Shopping
        </Link>

        <Link
          to="/"
          className="block border border-gray-300 py-3 rounded-lg font-semibold mt-3 hover:bg-gray-100"
        >
          Back to Home
        </Link>

      </div>

    </div>
  );
}

export default OrderSuccessPage;