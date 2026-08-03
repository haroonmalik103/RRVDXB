function Brands() {
  const brands = [
    "Rolex",
    "Casio",
    "Apple",
    "Fossil",
    "Seiko",
    "Richard Mille",
  ];

  return (
    <section className="py-16 bg-white">
      <h2 className="text-4xl font-bold text-center mb-10">
        Popular Brands
      </h2>

      <div className="flex justify-center gap-8 flex-wrap">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="w-40 h-24 bg-gray-100 rounded-lg shadow flex items-center justify-center text-xl font-bold hover:bg-green-500 hover:text-white transition"
          >
            {brand}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Brands;