// src/App.jsx
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Experience from "./components/experience";
import MenuShowcase from "./components/Menu";
import Footer from "./components/footers";
import Reservation from "./components/Reservation";


function App() {
  return (
    <div className="dark">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <MenuShowcase></MenuShowcase>
        <Reservation></Reservation>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
