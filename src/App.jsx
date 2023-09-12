import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  return (
    <div>
      <input />
      <input />
      <button> Login </button>
      <button> Logout </button>
    </div>
  )
}

export default App
