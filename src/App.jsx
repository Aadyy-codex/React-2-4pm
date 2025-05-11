import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComp from './MyComp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyComp />
    </>
  )
}

export default App
