import Contact from './Components/contact'
import Footer from './Components/footer'
import Header from './Components/header'
import Projects from './Components/projects'
import Hero from './Components/hero'
import About from './Components/about'


function App() {
  return (
    <div className='min-h-screen bg-blue-950 p-2 font-madimi'>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
