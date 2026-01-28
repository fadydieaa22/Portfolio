import React from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import DevTools from './components/DevTools';
import CoreStack from './components/CoreStack';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = React.useState(true);

  return (
    <div className="min-h-screen">
      {loading && <Loader onFinish={() => setLoading(false)} />}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <DevTools />
      <CoreStack />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
