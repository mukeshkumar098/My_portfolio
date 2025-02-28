import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './component/Header'
import Main from './component/Main'
import Project from './component/Project'
import Contect from './component/Contect'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<><Header/><Main/><Project/><Contect/></>}></Route>
      <Route path='/project' element={<><Project/></>}></Route>
      <Route path='/contect' element={<><Contect/></>}></Route>
    </Routes>
  
      

    </>
  )
}

export default App
