import TabNav from "./pages/TabNav";
import Router from "./pages/Router";
import Footer from "./components/Footer";
import FloatingPetals from "./components/FloatingPetals";
import EasterEgg from "./components/EasterEgg";

function App() {
  return (
    <div className="site">
      <TabNav />
      <Router />
      <Footer />
      <FloatingPetals />
      <EasterEgg />
    </div>
  );
}

export default App;