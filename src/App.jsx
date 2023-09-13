import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [register, setRegiste] = useState(false)

  const handleFormSubmit = () => {
    e.preventDefault()

    axios.post('register' ? '/api/regiter' : '/api/login', { email, password }).then(res => {
      console.log(res.data)
      // dispatch redux to put the userId on global state, then redirect user to home page
    })
      .catch(err(err => console.log(err)))
  }

  return (
    <>
      <form onSubmit={handleFormSubmit(e)}="">
      <h1>Please login</h1>
      <input value={email} onChange={e => setEmail(e.target.value)} />
      <input value={password} onChange={e => setPassword(e.target.value)} />
      <button> Login </button>
      <button> Logout </button>
    </form>
    </>
  )
}

export default App
