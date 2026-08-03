function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Rolex Submariner",
      price: "$899",
    },
    {
      id: 2,
      name: "Apple Watch Ultra",
      price: "$799",
    },
    {
      id: 3,
      name: "Casio G-Shock",
      price: "$199",
    },
    {
      id: 4,
      name: "Richard Mille",
      price: "$399",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-10">
        Featured Products
      </h2>

      <div className="grid grid-cols-4 gap-8 px-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-lg p-6 text-center"
          >
            <div className="h-40 bg-gray-200 rounded mb-4 flex items-center justify-center">
              Image
            </div>

            <h3 className="text-xl font-semibold">
              {product.name}
            </h3>

            <p className="text-yellow-600 font-bold mt-2">
              {product.price}
            </p>

            <button className="mt-4 bg-black text-white px-5 py-2 rounded hover:bg-gray-800">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;