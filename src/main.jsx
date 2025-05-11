import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// naming convention
// always start ur component with capital letters
// app.jsx -> NO  App.jsx -> YES
// App 2.jsx -> NO  App2.jsx -> YES
// what is components ?
//it is a pure fxn which returns something(xml) code .

// if u wnat to add js code inside jsx u should always use "{}" other wise it will treat variable as element value.
 