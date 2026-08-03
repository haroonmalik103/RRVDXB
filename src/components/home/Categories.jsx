function Categories() {
  const categories = [
    "Men Watches",
    "Women Watches",
    "Smart Watches",
    "Luxury Watches",
  ];

  return (
    <section className="py-16 bg-white">
      <h2 className="text-4xl font-bold text-center mb-10">
        Featured Categories
      </h2>

      <div className="grid grid-cols-4 gap-8 px-10">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-xl p-10 text-center shadow hover:shadow-lg cursor-pointer"
          >
            <h3 className="text-xl font-semibold">{category}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;