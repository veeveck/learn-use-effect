
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const[number,setNumber]=useState(0);
  const [name,setName]=useState("");
  const [state,setState] =useState({
    name:"",
    selected:false
  })
  // useEffect(()=>{
  //   console.count("useEffect running");
  //   document.title=`You clicked ${number} times`
  // },[number])
  // useEffect(()=>{
  //   console.log("State has changed,useEffect runs!")
  // },[state]);
  useEffect(()=>{
    console.log("State has changed,useEffect runs!")
  },[state.name,state.selected]);
  console.count("Component rendered");
  const handleAdd=()=>{
    setState((prev)=>({...prev,name}));
  }
  const handleSelect=()=>{
    setState((prev)=>({...prev,selected:true}));
  }
  return (
    <div className="App">
      <span> You clicked {number} times</span>
      <h1>Learn useEffect</h1>
      <button onClick={()=>setNumber(prevNum=>prevNum+1)}>Increase</button>
      <input onChange={(e)=>setName(e.target.value)}/>
      <button onClick={handleAdd}>Add Name</button>
      <button onClick={handleSelect}>Select</button>
      {`{
        name:${state.name},
        selected:${state.selected.toString()}
      }`}
    </div>
  );
}

export default App;
