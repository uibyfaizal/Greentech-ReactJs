import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Product from "./Components/Product";
import Categories from "./Components/Categories";
import Subscribe from "./Components/Subscribe";
import Footer from "./Components/Footer";
import "./css/main.css";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Product></Product>
      <Categories></Categories>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </div>
  );
}

export default App;
