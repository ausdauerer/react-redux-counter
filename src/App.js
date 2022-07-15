import './App.css';
import {useDispatch} from "react-redux";
import {increment,decrement,reset} from "./counterSlice";
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';

function App() {
  const dispatch=useDispatch();
  const {count}=useSelector((state)=>state.counter)
  return (
      <div className="flex flex-col justify-center align-middle w-full h-[100vh]">
        <div className="flex flex-row justify-center align-middle w-full">
          <p className="font-sans font-extrabold text-8xl p-3 mb-14">Counter</p>
        </div>
        <div className="flex flex-row justify-center align-middle w-full">
          <p className="shadow-lg font-sans font-extrabold text-8xl p-3 bg-slate-700 rounded-md text-white">{count}</p>
        </div>
        <div className="flex flex-row justify-center align-center w-full p-5  text-black">
          <Button className="shadow-lg" sx={{ margin: 1 , color:"black"}} variant="outlined" onClick={()=>dispatch(increment())}>Increment</Button>
          <Button className="shadow-lg" sx={{ margin: 1 ,  color:"black"}} variant="outlined" onClick={()=>dispatch(decrement())}>Decrement</Button>
          <Button className="shadow-lg" sx={{ margin: 1 ,  color:"black"}} variant="outlined" onClick={()=>dispatch(reset())}>Reset</Button>
        </div>
    </div>
  );
}

export default App;
