import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../features/todo/counterSlice';
import { Button } from '@mui/material';

const Counter = () => {

    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
  return (
    <>
    {/* <h1>Counter: {count}</h1> */}
    <h1>Counter: {count}</h1>
    <br />
    <Button variant="contained"onClick={() => dispatch(increment())}>Increment</Button>
    <br />
    <br />
    <Button variant="contained"onClick={() => dispatch(decrement())}>Decrement</Button>
    </>
  )
}

export default Counter