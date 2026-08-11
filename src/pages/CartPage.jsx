import Navbar from "../components/layout/Navbar";
function CartPage({ cart, removeFromCart, updateQuantity }) {
  const total = cart.reduce((sum, item) => {
    const price = Number(String(item.price).replace("$", ""));
    return sum + price * item.quantity;
  }, 0);
return (
  <div className="min-h-screen bg-gray-50">

    <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-12">

        <h1 className="text-4xl font-bold mb-10">
          Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <div className="bg-white p-10 rounded-xl shadow text-center">
            <h2 className="text-2xl font-semibold">
              Your cart is empty
            </h2>

            <p className="text-gray-500 mt-2">
              Add some products from the Products page.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">

            {/* Cart Items */}
            <div className="md:col-span-2 space-y-4">

              {cart.map((item) => {
                const price = Number(
                  String(item.price).replace("$", "")
                );

                return (
                  <div
                    key={item.id}
                    className="bg-white rounded-xl shadow p-6 flex justify-between items-center"
                  >

                    <div className="flex items-center gap-5">

                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />

                      <div>
                        <h2 className="text-xl font-semibold">
                          {item.name}
                        </h2>

                        <p className="text-red-600 font-bold mt-2">
                          ${price}
                        </p>

                        {/* Quantity */}
                        <div className="flex items-center gap-3 mt-4">

                          <button
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                item.quantity - 1
                              )
                            }
                            className="w-8 h-8 border rounded hover:bg-gray-100"
                          >
                            −
                          </button>

                          <span className="font-semibold">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                item.quantity + 1
                              )
                            }
                            className="w-8 h-8 border rounded hover:bg-gray-100"
                          >
                            +
                          </button>

                        </div>
                      </div>

                    </div>

                    <div className="text-right">

                      <p className="text-xl font-bold">
                        ${(price * item.quantity).toFixed(2)}
                      </p>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 mt-3 hover:underline"
                      >
                        Remove
                      </button>

                    </div>

                  </div>
                );
              })}

            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-xl shadow p-6 h-fit">

              <h2 className="text-2xl font-bold mb-6">
                Order Summary
              </h2>

              <div className="flex justify-between mb-4">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <div className="flex justify-between mb-4">
                <span>Shipping</span>
                <span className="text-green-600">
                  Free
                </span>
              </div>

              <hr className="mb-4" />

              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>

                <span className="text-red-600">
                  ${total.toFixed(2)}
                </span>
              </div>
<button
  onClick={() => (window.location.href = "/checkout")}
  className="w-full bg-red-600 text-white py-3 rounded-lg mt-6 hover:bg-red-700"
>
  Checkout
</button>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}

export default CartPage;