import { useState } from 'react'
import Sign from "./components/Sign"

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">
      <Sign />
    </div>
    </>
  )
}

export default App;
