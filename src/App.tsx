import Layout from "./components/layout/Layout";
import Hero from "./components/Hero";
import About from "./components/About";
import CafeOverview from "./components/CafeOverview";
import Products from "./components/Products";
import Service from "./components/Service";
import Offer from "./components/Offer";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <CafeOverview />
        <Products />
        <Service />
        <Offer />
        <Footer />
      </Layout>
    </>
  );
}

export default App;
