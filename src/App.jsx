import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Canvas from './components/Canvas'
import BrushSizeSelector from './components/BrushSizeSelector'
import ColorPicker from './components/ColorPicker'
import SaveButton from './components/SaveButton'

export function App() {
  const [color, setColor] = useState("black");
  const [brushSize, setBrushSize] = useState(4);


  return (
    <div className="bg-purple-200 min-h-screen flex flex-col items-center p-4">
      

      <div className="flex justify-between w-full max-w-5xl mt-4 px-8">
        <BrushSizeSelector brushSize={brushSize} onChange={setBrushSize} />
        <ColorPicker color={color} onChange={setColor} />
      </div>
      <div className="relative mt-20 w-full max-w-4xl h-[400px] bg-gray-100 rounded-xl shadow-lg">
        <Header />
        <Canvas color={color} brushSize={brushSize} />
      </div>
         <div className="mt-16">
        <SaveButton />
      </div>

    </div>
  )
}

export default App
