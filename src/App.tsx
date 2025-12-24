import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Impact from './components/Impact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="antialiased min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Experience />
        <Skills />
        <Impact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
