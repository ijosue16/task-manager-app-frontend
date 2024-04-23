import { useState } from 'react'
import './App.css'
import { SamplePage } from './built-components/SamplePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SamplePage/>
    </>
  )
}

export default App
