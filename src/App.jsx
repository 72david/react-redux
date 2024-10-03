
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrease, increase, reset } from './Slice/counterSlice/counterSlice'
import Products from './Products'

function App() {
  const {count}=useSelector((state)=>state.counter)
  const dispatch=useDispatch()

  return (
    <>
      <h1>
        {count}
      </h1>
      <button onClick={()=>{dispatch(increase())}}>Increase</button>
      <button onClick={()=>{dispatch(decrease())}}>Decrease</button>
      <button onClick={()=>{dispatch(reset())}}>Reset</button>
      <Products />
    </>
  )
}

export default App
