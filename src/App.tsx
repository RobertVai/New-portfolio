import "./App.css";
import { Contact } from "./components/Contact/Contact";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { InfoSection } from "./components/InfoSection/InfoSection";
import { Projects } from "./components/Projects/Projects";

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <Hero />
        <InfoSection />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
