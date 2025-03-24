import Layout from "./components/layout/Layout";
import Hero from "./components/Hero";
import About from "./components/About";
import CafeOverview from "./components/CafeOverview";

function App() {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <CafeOverview />
      </Layout>
    </>
  );
}

export default App;
