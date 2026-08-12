import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Brands from "../components/home/Brands";
import Footer from "../components/layout/Footer";

function HomePage({ addToCart, cartCount }) {
  return (
    <div>
      <Navbar />

      <Hero />

      <FeaturedProducts addToCart={addToCart} />

      <Brands />

      <Footer/>
    </div>
  );
}

export default HomePage;