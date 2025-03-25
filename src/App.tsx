import Layout from "./components/layout/Layout";
import Hero from "./components/Hero";
import About from "./components/About";
import CafeOverview from "./components/CafeOverview";
import Products from "./components/Products";

function App() {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <CafeOverview />
        <Products />
      </Layout>
    </>
  );
}

export default App;
