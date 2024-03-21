import React,{useRef} from "react";
import "./style.css";
import Child from './Child'

export default function App() {
  const inputRef=useRef()
  const focus=()=> inputRef.current.focus()
  const blur=()=> inputRef.current.blur()
    
  
  return (
    <div>
      <Child ref={inputRef}/>
      <button onClick={focus}>focus</button>
      <button onClick={blur}>blur</button>
      

    </div>
  );
  }