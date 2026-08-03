function Hero() {
  return (
    <section className="bg-gray-100 h-[80vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-5">
          Luxury Watches Collection
        </h1>

        <p className="text-xl text-gray-600 mb-8">
          Discover Premium Watches at the Best Prices
        </p>

        <button className="bg-yellow-500 px-8 py-3 rounded-lg text-white font-semibold hover:bg-yellow-600">
          Shop Now
        </button>
      </div>
    </section>
  );
}

export default Hero;