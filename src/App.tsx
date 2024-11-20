import Navbar from "./components/Navbar";
import ECV from "./pages/ECV";
import Education from "./pages/Education";
import Hero from "./pages/Hero";
import TimeCodi from "./pages/TimeCodi";

export default function App() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <Navbar />
      <Hero />
      <ECV />
      <TimeCodi />
      <Education />
    </div>
  );
}
