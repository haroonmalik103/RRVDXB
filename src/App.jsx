import TopBar from "./components/home/TopBar";
import Navbar from "./components/common/Navbar";
import Hero from "./components/home/Hero";
import Categories from "./components/home/Categories";
import FeaturedProducts from "./components/home/FeaturedProducts";
import Brands from "./components/home/Brands";
import Footer from "./components/common/Footer";

function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <Categories/>
      <FeaturedProducts/>
      <Brands/>
      <Footer/>
    </>
  );
}

export default App;