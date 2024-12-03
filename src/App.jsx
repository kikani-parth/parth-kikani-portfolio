/**
 * @copyright 2024 Parth Kikani
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { ReactLenis } from 'lenis/react';

/**
 * Components
 */
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skill from './components/Skill';
import Work from './components/Work';
import Contact from './components/Contact';

const App = () => {
  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Contact />
      </main>
    </ReactLenis>
  );
};

export default App;
