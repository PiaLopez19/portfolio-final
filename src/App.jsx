import './App.css'
import Header from './components/Header'
import About from './components/about/About'
import Home from './components/home/Home'

function App() {

  return (
    <>
    <Header/>
    <main className='main'>
      <Home/>
      <About/>
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
