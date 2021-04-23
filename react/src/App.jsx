import React, { useState } from 'react'
import SubPage from './SubPage'

function App() {
  const [count, setCount] = useState(0)
  const [visible, setV] = useState(true)
  const setVs = () => {
    setV(!visible)
  }

  return (
    <div className="App">
      <div>
        <button onClick={setVs}>测试</button>

        {visible ? <SubPage /> : null}
      </div>
    </div>
  )
}

export default App
