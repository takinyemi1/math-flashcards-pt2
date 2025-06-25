import { useState } from 'react'
import BaristaForm from './components/BaristaForm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className='title-container'>
        <img className='logo' src='src/assets/coffee-logo.png' />
        <h1 className='title'>On My Grind</h1>
      </div>

      <p className='title-text'>So you think you can barista? Let's put that to the test...</p>
      <br></br>
      <BaristaForm />
    </div>
  )
}

export default App
