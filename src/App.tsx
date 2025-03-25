import Layout from "./components/layout/Layout";
import Hero from "./components/Hero";
import About from "./components/About";
import CafeOverview from "./components/CafeOverview";
import Products from "./components/Products";
import Service from "./components/Service";

function App() {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <CafeOverview />
        <Products />
        <Service />
      </Layout>
    </>
  );
}

export default App;
