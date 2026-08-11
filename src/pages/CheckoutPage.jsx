import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CheckoutPage({ cart, clearCart }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
  });

  const total = cart.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleOrder = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.address ||
      !form.city
    ) {
      alert("Please fill all fields.");
      return;
    }

    alert("Order placed successfully!");

    clearCart();
    navigate("/");
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            Your Cart is Empty
          </h1>

          <p className="text-gray-500 mt-3">
            Add some products before checkout.
          </p>

          <button
            onClick={() => navigate("/products")}
            className="bg-red-600 text-white px-6 py-3 rounded-lg mt-6 hover:bg-red-700"
          >
            Browse Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">

      <div className="bg-black text-white py-10 text-center">
        <h1 className="text-4xl font-bold">
          Checkout
        </h1>

        <p className="text-gray-300 mt-2">
          Complete your order
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-8">

          {/* Shipping Information */}
          <div className="md:col-span-2 bg-white rounded-xl shadow p-8">

            <h2 className="text-2xl font-bold mb-6">
              Shipping Information
            </h2>

            <form onSubmit={handleOrder}>

              <label className="block font-semibold mb-2">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full border rounded-lg px-4 py-3 mb-5"
              />

              <label className="block font-semibold mb-2">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full border rounded-lg px-4 py-3 mb-5"
              />

              <label className="block font-semibold mb-2">
                Phone
              </label>

              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full border rounded-lg px-4 py-3 mb-5"
              />

              <label className="block font-semibold mb-2">
                Address
              </label>

              <textarea
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Enter your address"
                rows="3"
                className="w-full border rounded-lg px-4 py-3 mb-5"
              />

              <label className="block font-semibold mb-2">
                City
              </label>

              <input
                type="text"
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="Enter your city"
                className="w-full border rounded-lg px-4 py-3 mb-6"
              />

              <h2 className="text-2xl font-bold mb-4">
                Payment Method
              </h2>

              <div className="border rounded-lg p-4 mb-6">
                <label className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="payment"
                    defaultChecked
                  />

                  <span>
                    Cash on Delivery
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700"
              >
                Place Order
              </button>

            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-xl shadow p-6 h-fit">

            <h2 className="text-2xl font-bold mb-6">
              Order Summary
            </h2>

            <div className="space-y-4">

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between gap-4"
                >
                  <div>
                    <p className="font-semibold">
                      {item.name}
                    </p>

                    <p className="text-gray-500">
                      Quantity: {item.quantity}
                    </p>
                  </div>

                  <p className="font-semibold">
                    $
                    {Number(item.price) *
                      item.quantity}
                  </p>
                </div>
              ))}

            </div>

            <hr className="my-6" />

            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${total}</span>
            </div>

            <div className="flex justify-between mt-3">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <hr className="my-6" />

            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>${total}</span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default CheckoutPage;