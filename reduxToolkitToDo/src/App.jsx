import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'
import Counter from './components/Counter'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Learn about Redux tool kit</h1>
      <AddTodo />
      <Todo />
      <br />
      <hr />
      <br />
      <Counter />
    </>
  )
}

export default App
