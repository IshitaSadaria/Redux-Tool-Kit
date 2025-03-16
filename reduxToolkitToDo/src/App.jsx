import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Counter from './components/Counter'
import Products from './components/Products'
import { BrowserRouter, Routes, Route } from 'react-router'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Learn about Redux tool kit</h1>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddTodo />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/products' element={<Products />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
