import { useEffect, useState } from 'react'
import './App.css'
import {useSelector,useDispatch} from 'react-redux'

function App() {
  const [count, setCount] = useState(0)


  const dispatch = useDispatch()
  const state= useSelector((state=>state))
  
  useEffect(()=>{
    console.log("state changes to", state.count)
  },[state.count])

  return (
    <div className="App">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={()=>dispatch({type:"INCREMENT"})}>
          count redux + 1 =  {state.count}
        </button>
        <button onClick={()=>dispatch({type:"DECREMENT"})}>
          count  redux - 1 = {state.count}
        </button>
        <button onClick={()=>dispatch({type:"MULTI"})}>
          count  redux  + 2 = {state.count}
        </button>
    </div>
  )
}

export default App
