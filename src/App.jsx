// src/App.jsx
import { AppProvider } from "./contexts/AppContext";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Experience from "./components/experience";
import Menu from "./components/Menu";
import Reservation from "./components/Reservation";
import Footer from "./components/footers";
import ReservationModal from "./components/ReservationModal";

function App() {
  return (
    <AppProvider>
      <div className="dark">
        <Navbar />
        <main>
          <Hero />
          <Experience />
          <Menu />

          <Reservation />
        </main>
        <Footer />
        <ReservationModal />
      </div>
    </AppProvider>
  );
}

export default App;
