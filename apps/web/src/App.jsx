import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <div>
      <Helmet>
        <title>Gabriel Cattuzo — Software Developer</title>
        <meta name="description" content="Portfólio de Gabriel Cattuzo — desenvolvimento web, sistemas e Engenharia de Computação." />
      </Helmet>
      
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
