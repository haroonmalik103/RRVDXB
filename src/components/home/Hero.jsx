function Hero() {
  return (
    <section className="bg-gray-100 h-[500px] flex items-center justify-center">
      <div className="text-center">

        <h1 className="text-6xl font-bold text-gray-900">
          Discover Your Style
        </h1>

        <p className="mt-4 text-xl text-gray-600">
          Shop Fashion, Shoes, Watches, Electronics & More
        </p>

        <button className="mt-8 bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700">
          Shop Now
        </button>

      </div>
    </section>
  );
}

export default Hero;