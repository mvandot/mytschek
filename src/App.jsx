import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Brand } from './components/Brand';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {

  return (
    <div className="w-full h-full bg-white overflow-hidden text-(--color-dark)">
      <Nav />  
      <Hero />   
      <Brand />
      <About />
      {/* <Contact /> */}
      <Footer />
    </div>
  )
}

export default App
