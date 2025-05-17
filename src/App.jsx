import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComp from './MyComp'
import ToDo from './ToDo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <MyComp /> */}
      <ToDo />
    </>
  )
}

export default App
