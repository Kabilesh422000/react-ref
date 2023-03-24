import logo from './logo.svg';
import './App.css';
import React, {useRef } from "react";

function App() {
  const inputRef = useRef(null);

  const handleClick = () => {
    console.log(inputRef.current.value)
  };
  return (
    <div> 
      <input type="text" ref={inputRef} />
      <button onClick ={handleClick}>Focus</button>
    </div>
  );
}

export default App;
