import { Main } from './components/Main'
import { Header } from './components/Header'
import { About } from './components/About'
import { TestimonialContainer } from './components/TestimonialContainer'

function App() {
  return (
    <main className='max-w-[1440px] mx-auto relative'>
      <Header />
      <Main />
      <About />
      <TestimonialContainer />
    </main>
  )
}

export default App
