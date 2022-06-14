import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Login from './pages/Login'
import Main from './pages/Main'
import Detail from './pages/Details'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}/>
      <Route path='/holidays' element={<Main />}/>
      <Route path='/holidays/:id' element={<Detail />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
