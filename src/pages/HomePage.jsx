import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import Categories from "../components/home/Categories";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Brands from "../components/home/Brands";

function HomePage({ addToCart, cartCount }) {
  return (
    <div>
      <Navbar />

      <Hero />

      <Categories />

      <FeaturedProducts addToCart={addToCart} />

      <Brands />
    </div>
  );
}

export default HomePage;