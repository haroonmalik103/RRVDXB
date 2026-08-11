function Categories() {
  const categories = [
    "Men",
    "Women",
    "Watches",
    "Electronics",
  ];

  return (
    <section className="max-w-7xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">
        Shop by Categories
      </h2>

      <div className="grid grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category}
            className="bg-gray-100 p-10 rounded-xl text-center shadow hover:shadow-lg cursor-pointer"
          >
            <h3 className="text-2xl font-semibold">
              {category}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;