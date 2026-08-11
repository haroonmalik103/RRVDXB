function Brands() {
  const brands = [
    "Nike",
    "Adidas",
    "Apple",
    "Samsung",
    "Rolex",
    "Gucci",
  ];

  return (
    <section className="max-w-7xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">
        Top Brands
      </h2>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
        {brands.map((brand) => (
          <div
            key={brand}
            className="border rounded-lg p-6 text-center font-semibold shadow hover:shadow-lg hover:bg-red-600 hover:text-white transition"
          >
            {brand}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Brands;