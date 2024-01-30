import { useState } from "react";
import './App.css'

function App(){
const [Value,setValue]=useState(1)
// let value=1
const Add=()=>{
  if(Value===20){
    return
  }
  
  setValue(Value+1)
}


const Remove =()=>{
  if(Value===0){
    return
  }
 
  setValue(Value-1)
}

return(
<>
<h1>Digit Counter</h1>
<h2>Counter : {Value}</h2>
<button onClick={Add}>Add Number</button>
<br/>
<button onClick={Remove}>Remove Number</button>
</>

)




}

export default App