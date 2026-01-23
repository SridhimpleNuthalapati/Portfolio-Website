import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Summary } from './components/sections/Summary';
import { Experience } from './components/sections/Experience';
import { Skills } from './components/sections/Skills';
import { Education } from './components/sections/Education';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Summary />
        <Experience />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
