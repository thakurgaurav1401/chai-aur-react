import { useState } from 'react'

import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-5 rounded-xl mb-6'>Tialwind test</h1>

      <Card username="Quality" btnText="learnmore"/>
      <Card username="Quality"/>





    </>
  )
}

export default App
