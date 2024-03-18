import Footer from "./Components/footer";
import Header from "./Components/header";
import Projects from "./Components/projects";
import Hero from "./Components/hero";
import About from "./Components/about";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <div className="min-h-screen bg-navy-blue p-2 font-ntr">
      <AnimatedCursor innerSize={12} outerSize={8} color="14, 165, 233" />
      <Header />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
