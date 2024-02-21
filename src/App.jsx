import './App.css'
import Header from './components/Header'
import About from './components/about/About'
import Home from './components/home/Home'
import Services from './components/services/Services'
import Skills from './components/skills/Skills'

function App() {

  return (
    <>
    <Header/>
    <main className='main'>
      <Home/>
      <About/>
      <Skills/>
      <Services/>
    </main> 
    </>
  )
}

export default App
/*       <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Contact />
      </main> */
