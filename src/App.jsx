import { Main } from './components/Main'
import { Header } from './components/Header'
import { About } from './components/About'
import { TestimonialContainer } from './components/TestimonialContainer'
import { Gallery } from './components/Gallery'
import { Footer } from './components/Footer'

function App() {
  return (
    <main className='max-w-[1440px] mx-auto relative'>
      <Header />
      <Main />
      <About />
      <TestimonialContainer />
      <Gallery />
      <Footer />
    </main>
  )
}

export default App
