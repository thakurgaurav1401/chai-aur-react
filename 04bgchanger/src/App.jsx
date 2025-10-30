import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className='w-full h-screen duration-200'
      style={{backgroundColor: color}}>
      </div>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'
      > <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
        <button onClick={() => setColor("red")} className='outline-none px-4 rounded-full text-white shadow-2xl'
        style={{backgroundColor: "red"}}>
        Red
        </button>
        <button onClick={() => setColor("green")}
        className='outline-none px-4 rounded-full text-white shadow-2xl'
        style={{backgroundColor: "green"}}>
        Green
        </button>
        <button onClick={() => setColor("blue")} className='outline-none px-4 rounded-full text-white shadow-2xl'
        style={{backgroundColor: "blue"}}>
        Blue
        </button>
        <button onClick={() => setColor("yellow")} className='outline-none px-4 rounded-full text-white shadow-2xl'
        style={{backgroundColor: "yellow"}}>
        Yellow
        </button>
        <button onClick={() => setColor("olive")} className='outline-none px-4 rounded-full text-white shadow-2xl'
        style={{backgroundColor: "olive"}}>
        Olive
        </button>
        <button onClick={() => setColor("Gray")} className='outline-none px-4 rounded-full text-black  shadow-2xl'
        style={{backgroundColor: "Gary"}}>
        Gray
        </button>
        <button onClick={() => setColor("Pink")} className='outline-none px-4 rounded-full text-white shadow-2xl'
        style={{backgroundColor: "Pink"}}>
        Pink
        </button>
        <button onClick={() => setColor("Purple")} className='outline-none px-4 rounded-full text-white shadow-2xl'
        style={{backgroundColor: "Purple"}}>
        Purple
        </button>
        <button onClick={() => setColor("Lavender")} className='outline-none px-4 rounded-full text-black  shadow-2xl'
        style={{backgroundColor: "Lavender"}}>
        Lavender
        </button>
        <button onClick={() => setColor("White")} className='outline-none px-4 rounded-full text-black shadow-2xl'
        style={{backgroundColor: "White"}}>
        White
        </button>
        <button onClick={() => setColor("Black")} className='outline-none px-4 rounded-full text-white shadow-2xl'
        style={{backgroundColor: "Black"}}>
        Black
        </button>
        </div></div>
    </>
  )
}

export default App
